// @ts-nocheck

import { next as nextTokenInitial } from "./lexer-initial.js";

/*
      RegExp := Expression;
Expression := Union;
Expression := Sequence;
Expression := Atom;
Union := Union UNION Sequence;
Union := Union UNION Atom;
Union := Union UNION;
Union := Sequence UNION Sequence;
Union := Sequence UNION Atom;
Union := Sequence UNION;
Union := Atom UNION Sequence;
Union := Atom UNION Atom;
Union := Atom UNION;
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
CharacterClassCharacter := BACKSLASH BRACKET_OPEN;
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

const reducerStates = new Uint8Array(892928);
reducerStates[89] = 1; // 'state 1' -> Character -> CHARACTER
reducerStates[14041] = 1; // 'state 1' -> Character -> CONTROL_CHARACTER
reducerStates[27993] = 1; // 'state 1' -> Character -> BACKSLASH
reducerStates[41945] = 1; // 'state 1' -> Character -> CARET
reducerStates[55897] = 1; // 'state 1' -> Character -> DASH
reducerStates[83801] = 1; // 'state 1' -> Character -> UNION
reducerStates[97753] = 1; // 'state 1' -> Character -> PAREN_OPEN
reducerStates[111705] = 1; // 'state 1' -> Character -> PAREN_CLOSE
reducerStates[125657] = 1; // 'state 1' -> Character -> QUANTIFIER
reducerStates[139609] = 1; // 'state 1' -> Character -> BRACKET_OPEN
reducerStates[167513] = 1; // 'state 1' -> Character -> @par-gen.EOF
reducerStates[153] = 1; // 'state 2' -> Character -> CHARACTER
reducerStates[14105] = 1; // 'state 2' -> Character -> CONTROL_CHARACTER
reducerStates[28057] = 1; // 'state 2' -> Character -> BACKSLASH
reducerStates[42009] = 1; // 'state 2' -> Character -> CARET
reducerStates[55961] = 1; // 'state 2' -> Character -> DASH
reducerStates[83865] = 1; // 'state 2' -> Character -> UNION
reducerStates[97817] = 1; // 'state 2' -> Character -> PAREN_OPEN
reducerStates[111769] = 1; // 'state 2' -> Character -> PAREN_CLOSE
reducerStates[125721] = 1; // 'state 2' -> Character -> QUANTIFIER
reducerStates[139673] = 1; // 'state 2' -> Character -> BRACKET_OPEN
reducerStates[167577] = 1; // 'state 2' -> Character -> @par-gen.EOF
reducerStates[281] = 1; // 'state 4' -> Character -> CHARACTER
reducerStates[14233] = 1; // 'state 4' -> Character -> CONTROL_CHARACTER
reducerStates[28185] = 1; // 'state 4' -> Character -> BACKSLASH
reducerStates[42137] = 1; // 'state 4' -> Character -> CARET
reducerStates[56089] = 1; // 'state 4' -> Character -> DASH
reducerStates[83993] = 1; // 'state 4' -> Character -> UNION
reducerStates[97945] = 1; // 'state 4' -> Character -> PAREN_OPEN
reducerStates[111897] = 1; // 'state 4' -> Character -> PAREN_CLOSE
reducerStates[125849] = 1; // 'state 4' -> Character -> QUANTIFIER
reducerStates[139801] = 1; // 'state 4' -> Character -> BRACKET_OPEN
reducerStates[167705] = 1; // 'state 4' -> Character -> @par-gen.EOF
reducerStates[345] = 1; // 'state 5' -> Character -> CHARACTER
reducerStates[14297] = 1; // 'state 5' -> Character -> CONTROL_CHARACTER
reducerStates[28249] = 1; // 'state 5' -> Character -> BACKSLASH
reducerStates[42201] = 1; // 'state 5' -> Character -> CARET
reducerStates[56153] = 1; // 'state 5' -> Character -> DASH
reducerStates[84057] = 1; // 'state 5' -> Character -> UNION
reducerStates[98009] = 1; // 'state 5' -> Character -> PAREN_OPEN
reducerStates[111961] = 1; // 'state 5' -> Character -> PAREN_CLOSE
reducerStates[125913] = 1; // 'state 5' -> Character -> QUANTIFIER
reducerStates[139865] = 1; // 'state 5' -> Character -> BRACKET_OPEN
reducerStates[167769] = 1; // 'state 5' -> Character -> @par-gen.EOF
reducerStates[167950] = 1; // 'state 8' -> S -> @par-gen.EOF
reducerStates[168015] = 1; // 'state 9' -> RegExp -> @par-gen.EOF
reducerStates[168080] = 1; // 'state 10' -> Expression -> @par-gen.EOF
reducerStates[168144] = 1; // 'state 11' -> Expression -> @par-gen.EOF
reducerStates[168208] = 1; // 'state 12' -> Expression -> @par-gen.EOF
reducerStates[851] = 1; // 'state 13' -> Atom -> CHARACTER
reducerStates[14803] = 1; // 'state 13' -> Atom -> CONTROL_CHARACTER
reducerStates[28755] = 1; // 'state 13' -> Atom -> BACKSLASH
reducerStates[42707] = 1; // 'state 13' -> Atom -> CARET
reducerStates[56659] = 1; // 'state 13' -> Atom -> DASH
reducerStates[84563] = 1; // 'state 13' -> Atom -> UNION
reducerStates[98515] = 1; // 'state 13' -> Atom -> PAREN_OPEN
reducerStates[112467] = 1; // 'state 13' -> Atom -> PAREN_CLOSE
reducerStates[140371] = 1; // 'state 13' -> Atom -> BRACKET_OPEN
reducerStates[168275] = 1; // 'state 13' -> Atom -> @par-gen.EOF
reducerStates[915] = 1; // 'state 14' -> Atom -> CHARACTER
reducerStates[14867] = 1; // 'state 14' -> Atom -> CONTROL_CHARACTER
reducerStates[28819] = 1; // 'state 14' -> Atom -> BACKSLASH
reducerStates[42771] = 1; // 'state 14' -> Atom -> CARET
reducerStates[56723] = 1; // 'state 14' -> Atom -> DASH
reducerStates[84627] = 1; // 'state 14' -> Atom -> UNION
reducerStates[98579] = 1; // 'state 14' -> Atom -> PAREN_OPEN
reducerStates[112531] = 1; // 'state 14' -> Atom -> PAREN_CLOSE
reducerStates[140435] = 1; // 'state 14' -> Atom -> BRACKET_OPEN
reducerStates[168339] = 1; // 'state 14' -> Atom -> @par-gen.EOF
reducerStates[979] = 1; // 'state 15' -> Atom -> CHARACTER
reducerStates[14931] = 1; // 'state 15' -> Atom -> CONTROL_CHARACTER
reducerStates[28883] = 1; // 'state 15' -> Atom -> BACKSLASH
reducerStates[42835] = 1; // 'state 15' -> Atom -> CARET
reducerStates[56787] = 1; // 'state 15' -> Atom -> DASH
reducerStates[84691] = 1; // 'state 15' -> Atom -> UNION
reducerStates[98643] = 1; // 'state 15' -> Atom -> PAREN_OPEN
reducerStates[112595] = 1; // 'state 15' -> Atom -> PAREN_CLOSE
reducerStates[140499] = 1; // 'state 15' -> Atom -> BRACKET_OPEN
reducerStates[168403] = 1; // 'state 15' -> Atom -> @par-gen.EOF
reducerStates[84753] = 2; // 'state 16' -> Union -> UNION
reducerStates[112657] = 2; // 'state 16' -> Union -> PAREN_CLOSE
reducerStates[168465] = 2; // 'state 16' -> Union -> @par-gen.EOF
reducerStates[1113] = 1; // 'state 17' -> Character -> CHARACTER
reducerStates[15065] = 1; // 'state 17' -> Character -> CONTROL_CHARACTER
reducerStates[29017] = 1; // 'state 17' -> Character -> BACKSLASH
reducerStates[42969] = 1; // 'state 17' -> Character -> CARET
reducerStates[56921] = 1; // 'state 17' -> Character -> DASH
reducerStates[84825] = 1; // 'state 17' -> Character -> UNION
reducerStates[98777] = 1; // 'state 17' -> Character -> PAREN_OPEN
reducerStates[112729] = 1; // 'state 17' -> Character -> PAREN_CLOSE
reducerStates[126681] = 1; // 'state 17' -> Character -> QUANTIFIER
reducerStates[140633] = 1; // 'state 17' -> Character -> BRACKET_OPEN
reducerStates[168537] = 1; // 'state 17' -> Character -> @par-gen.EOF
reducerStates[1177] = 1; // 'state 18' -> Character -> CHARACTER
reducerStates[15129] = 1; // 'state 18' -> Character -> CONTROL_CHARACTER
reducerStates[29081] = 1; // 'state 18' -> Character -> BACKSLASH
reducerStates[43033] = 1; // 'state 18' -> Character -> CARET
reducerStates[56985] = 1; // 'state 18' -> Character -> DASH
reducerStates[84889] = 1; // 'state 18' -> Character -> UNION
reducerStates[98841] = 1; // 'state 18' -> Character -> PAREN_OPEN
reducerStates[112793] = 1; // 'state 18' -> Character -> PAREN_CLOSE
reducerStates[126745] = 1; // 'state 18' -> Character -> QUANTIFIER
reducerStates[140697] = 1; // 'state 18' -> Character -> BRACKET_OPEN
reducerStates[168601] = 1; // 'state 18' -> Character -> @par-gen.EOF
reducerStates[1305] = 1; // 'state 20' -> Character -> CHARACTER
reducerStates[15257] = 1; // 'state 20' -> Character -> CONTROL_CHARACTER
reducerStates[29209] = 1; // 'state 20' -> Character -> BACKSLASH
reducerStates[43161] = 1; // 'state 20' -> Character -> CARET
reducerStates[57113] = 1; // 'state 20' -> Character -> DASH
reducerStates[85017] = 1; // 'state 20' -> Character -> UNION
reducerStates[98969] = 1; // 'state 20' -> Character -> PAREN_OPEN
reducerStates[112921] = 1; // 'state 20' -> Character -> PAREN_CLOSE
reducerStates[126873] = 1; // 'state 20' -> Character -> QUANTIFIER
reducerStates[140825] = 1; // 'state 20' -> Character -> BRACKET_OPEN
reducerStates[168729] = 1; // 'state 20' -> Character -> @par-gen.EOF
reducerStates[1369] = 1; // 'state 21' -> Character -> CHARACTER
reducerStates[15321] = 1; // 'state 21' -> Character -> CONTROL_CHARACTER
reducerStates[29273] = 1; // 'state 21' -> Character -> BACKSLASH
reducerStates[43225] = 1; // 'state 21' -> Character -> CARET
reducerStates[57177] = 1; // 'state 21' -> Character -> DASH
reducerStates[85081] = 1; // 'state 21' -> Character -> UNION
reducerStates[99033] = 1; // 'state 21' -> Character -> PAREN_OPEN
reducerStates[112985] = 1; // 'state 21' -> Character -> PAREN_CLOSE
reducerStates[126937] = 1; // 'state 21' -> Character -> QUANTIFIER
reducerStates[140889] = 1; // 'state 21' -> Character -> BRACKET_OPEN
reducerStates[168793] = 1; // 'state 21' -> Character -> @par-gen.EOF
reducerStates[85137] = 2; // 'state 22' -> Union -> UNION
reducerStates[113041] = 2; // 'state 22' -> Union -> PAREN_CLOSE
reducerStates[168849] = 2; // 'state 22' -> Union -> @par-gen.EOF
reducerStates[1618] = 2; // 'state 25' -> Sequence -> CHARACTER
reducerStates[15570] = 2; // 'state 25' -> Sequence -> CONTROL_CHARACTER
reducerStates[29522] = 2; // 'state 25' -> Sequence -> BACKSLASH
reducerStates[43474] = 2; // 'state 25' -> Sequence -> CARET
reducerStates[57426] = 2; // 'state 25' -> Sequence -> DASH
reducerStates[85330] = 2; // 'state 25' -> Sequence -> UNION
reducerStates[99282] = 2; // 'state 25' -> Sequence -> PAREN_OPEN
reducerStates[113234] = 2; // 'state 25' -> Sequence -> PAREN_CLOSE
reducerStates[141138] = 2; // 'state 25' -> Sequence -> BRACKET_OPEN
reducerStates[169042] = 2; // 'state 25' -> Sequence -> @par-gen.EOF
reducerStates[1683] = 1; // 'state 26' -> Atom -> CHARACTER
reducerStates[15635] = 1; // 'state 26' -> Atom -> CONTROL_CHARACTER
reducerStates[29587] = 1; // 'state 26' -> Atom -> BACKSLASH
reducerStates[43539] = 1; // 'state 26' -> Atom -> CARET
reducerStates[57491] = 1; // 'state 26' -> Atom -> DASH
reducerStates[85395] = 1; // 'state 26' -> Atom -> UNION
reducerStates[99347] = 1; // 'state 26' -> Atom -> PAREN_OPEN
reducerStates[113299] = 1; // 'state 26' -> Atom -> PAREN_CLOSE
reducerStates[141203] = 1; // 'state 26' -> Atom -> BRACKET_OPEN
reducerStates[169107] = 1; // 'state 26' -> Atom -> @par-gen.EOF
reducerStates[1747] = 1; // 'state 27' -> Atom -> CHARACTER
reducerStates[15699] = 1; // 'state 27' -> Atom -> CONTROL_CHARACTER
reducerStates[29651] = 1; // 'state 27' -> Atom -> BACKSLASH
reducerStates[43603] = 1; // 'state 27' -> Atom -> CARET
reducerStates[57555] = 1; // 'state 27' -> Atom -> DASH
reducerStates[85459] = 1; // 'state 27' -> Atom -> UNION
reducerStates[99411] = 1; // 'state 27' -> Atom -> PAREN_OPEN
reducerStates[113363] = 1; // 'state 27' -> Atom -> PAREN_CLOSE
reducerStates[141267] = 1; // 'state 27' -> Atom -> BRACKET_OPEN
reducerStates[169171] = 1; // 'state 27' -> Atom -> @par-gen.EOF
reducerStates[1811] = 1; // 'state 28' -> Atom -> CHARACTER
reducerStates[15763] = 1; // 'state 28' -> Atom -> CONTROL_CHARACTER
reducerStates[29715] = 1; // 'state 28' -> Atom -> BACKSLASH
reducerStates[43667] = 1; // 'state 28' -> Atom -> CARET
reducerStates[57619] = 1; // 'state 28' -> Atom -> DASH
reducerStates[85523] = 1; // 'state 28' -> Atom -> UNION
reducerStates[99475] = 1; // 'state 28' -> Atom -> PAREN_OPEN
reducerStates[113427] = 1; // 'state 28' -> Atom -> PAREN_CLOSE
reducerStates[141331] = 1; // 'state 28' -> Atom -> BRACKET_OPEN
reducerStates[169235] = 1; // 'state 28' -> Atom -> @par-gen.EOF
reducerStates[1881] = 1; // 'state 29' -> Character -> CHARACTER
reducerStates[15833] = 1; // 'state 29' -> Character -> CONTROL_CHARACTER
reducerStates[29785] = 1; // 'state 29' -> Character -> BACKSLASH
reducerStates[43737] = 1; // 'state 29' -> Character -> CARET
reducerStates[57689] = 1; // 'state 29' -> Character -> DASH
reducerStates[85593] = 1; // 'state 29' -> Character -> UNION
reducerStates[99545] = 1; // 'state 29' -> Character -> PAREN_OPEN
reducerStates[113497] = 1; // 'state 29' -> Character -> PAREN_CLOSE
reducerStates[127449] = 1; // 'state 29' -> Character -> QUANTIFIER
reducerStates[141401] = 1; // 'state 29' -> Character -> BRACKET_OPEN
reducerStates[169305] = 1; // 'state 29' -> Character -> @par-gen.EOF
reducerStates[1945] = 1; // 'state 30' -> Character -> CHARACTER
reducerStates[15897] = 1; // 'state 30' -> Character -> CONTROL_CHARACTER
reducerStates[29849] = 1; // 'state 30' -> Character -> BACKSLASH
reducerStates[43801] = 1; // 'state 30' -> Character -> CARET
reducerStates[57753] = 1; // 'state 30' -> Character -> DASH
reducerStates[85657] = 1; // 'state 30' -> Character -> UNION
reducerStates[99609] = 1; // 'state 30' -> Character -> PAREN_OPEN
reducerStates[113561] = 1; // 'state 30' -> Character -> PAREN_CLOSE
reducerStates[127513] = 1; // 'state 30' -> Character -> QUANTIFIER
reducerStates[141465] = 1; // 'state 30' -> Character -> BRACKET_OPEN
reducerStates[169369] = 1; // 'state 30' -> Character -> @par-gen.EOF
reducerStates[2073] = 1; // 'state 32' -> Character -> CHARACTER
reducerStates[16025] = 1; // 'state 32' -> Character -> CONTROL_CHARACTER
reducerStates[29977] = 1; // 'state 32' -> Character -> BACKSLASH
reducerStates[43929] = 1; // 'state 32' -> Character -> CARET
reducerStates[57881] = 1; // 'state 32' -> Character -> DASH
reducerStates[85785] = 1; // 'state 32' -> Character -> UNION
reducerStates[99737] = 1; // 'state 32' -> Character -> PAREN_OPEN
reducerStates[113689] = 1; // 'state 32' -> Character -> PAREN_CLOSE
reducerStates[127641] = 1; // 'state 32' -> Character -> QUANTIFIER
reducerStates[141593] = 1; // 'state 32' -> Character -> BRACKET_OPEN
reducerStates[169497] = 1; // 'state 32' -> Character -> @par-gen.EOF
reducerStates[2137] = 1; // 'state 33' -> Character -> CHARACTER
reducerStates[16089] = 1; // 'state 33' -> Character -> CONTROL_CHARACTER
reducerStates[30041] = 1; // 'state 33' -> Character -> BACKSLASH
reducerStates[43993] = 1; // 'state 33' -> Character -> CARET
reducerStates[57945] = 1; // 'state 33' -> Character -> DASH
reducerStates[85849] = 1; // 'state 33' -> Character -> UNION
reducerStates[99801] = 1; // 'state 33' -> Character -> PAREN_OPEN
reducerStates[113753] = 1; // 'state 33' -> Character -> PAREN_CLOSE
reducerStates[127705] = 1; // 'state 33' -> Character -> QUANTIFIER
reducerStates[141657] = 1; // 'state 33' -> Character -> BRACKET_OPEN
reducerStates[169561] = 1; // 'state 33' -> Character -> @par-gen.EOF
reducerStates[85905] = 2; // 'state 34' -> Union -> UNION
reducerStates[113809] = 2; // 'state 34' -> Union -> PAREN_CLOSE
reducerStates[169617] = 2; // 'state 34' -> Union -> @par-gen.EOF
reducerStates[2386] = 2; // 'state 37' -> Sequence -> CHARACTER
reducerStates[16338] = 2; // 'state 37' -> Sequence -> CONTROL_CHARACTER
reducerStates[30290] = 2; // 'state 37' -> Sequence -> BACKSLASH
reducerStates[44242] = 2; // 'state 37' -> Sequence -> CARET
reducerStates[58194] = 2; // 'state 37' -> Sequence -> DASH
reducerStates[86098] = 2; // 'state 37' -> Sequence -> UNION
reducerStates[100050] = 2; // 'state 37' -> Sequence -> PAREN_OPEN
reducerStates[114002] = 2; // 'state 37' -> Sequence -> PAREN_CLOSE
reducerStates[141906] = 2; // 'state 37' -> Sequence -> BRACKET_OPEN
reducerStates[169810] = 2; // 'state 37' -> Sequence -> @par-gen.EOF
reducerStates[2451] = 1; // 'state 38' -> Atom -> CHARACTER
reducerStates[16403] = 1; // 'state 38' -> Atom -> CONTROL_CHARACTER
reducerStates[30355] = 1; // 'state 38' -> Atom -> BACKSLASH
reducerStates[44307] = 1; // 'state 38' -> Atom -> CARET
reducerStates[58259] = 1; // 'state 38' -> Atom -> DASH
reducerStates[86163] = 1; // 'state 38' -> Atom -> UNION
reducerStates[100115] = 1; // 'state 38' -> Atom -> PAREN_OPEN
reducerStates[114067] = 1; // 'state 38' -> Atom -> PAREN_CLOSE
reducerStates[141971] = 1; // 'state 38' -> Atom -> BRACKET_OPEN
reducerStates[169875] = 1; // 'state 38' -> Atom -> @par-gen.EOF
reducerStates[2515] = 1; // 'state 39' -> Atom -> CHARACTER
reducerStates[16467] = 1; // 'state 39' -> Atom -> CONTROL_CHARACTER
reducerStates[30419] = 1; // 'state 39' -> Atom -> BACKSLASH
reducerStates[44371] = 1; // 'state 39' -> Atom -> CARET
reducerStates[58323] = 1; // 'state 39' -> Atom -> DASH
reducerStates[86227] = 1; // 'state 39' -> Atom -> UNION
reducerStates[100179] = 1; // 'state 39' -> Atom -> PAREN_OPEN
reducerStates[114131] = 1; // 'state 39' -> Atom -> PAREN_CLOSE
reducerStates[142035] = 1; // 'state 39' -> Atom -> BRACKET_OPEN
reducerStates[169939] = 1; // 'state 39' -> Atom -> @par-gen.EOF
reducerStates[2579] = 1; // 'state 40' -> Atom -> CHARACTER
reducerStates[16531] = 1; // 'state 40' -> Atom -> CONTROL_CHARACTER
reducerStates[30483] = 1; // 'state 40' -> Atom -> BACKSLASH
reducerStates[44435] = 1; // 'state 40' -> Atom -> CARET
reducerStates[58387] = 1; // 'state 40' -> Atom -> DASH
reducerStates[86291] = 1; // 'state 40' -> Atom -> UNION
reducerStates[100243] = 1; // 'state 40' -> Atom -> PAREN_OPEN
reducerStates[114195] = 1; // 'state 40' -> Atom -> PAREN_CLOSE
reducerStates[142099] = 1; // 'state 40' -> Atom -> BRACKET_OPEN
reducerStates[170003] = 1; // 'state 40' -> Atom -> @par-gen.EOF
reducerStates[2643] = 2; // 'state 41' -> Atom -> CHARACTER
reducerStates[16595] = 2; // 'state 41' -> Atom -> CONTROL_CHARACTER
reducerStates[30547] = 2; // 'state 41' -> Atom -> BACKSLASH
reducerStates[44499] = 2; // 'state 41' -> Atom -> CARET
reducerStates[58451] = 2; // 'state 41' -> Atom -> DASH
reducerStates[86355] = 2; // 'state 41' -> Atom -> UNION
reducerStates[100307] = 2; // 'state 41' -> Atom -> PAREN_OPEN
reducerStates[114259] = 2; // 'state 41' -> Atom -> PAREN_CLOSE
reducerStates[142163] = 2; // 'state 41' -> Atom -> BRACKET_OPEN
reducerStates[170067] = 2; // 'state 41' -> Atom -> @par-gen.EOF
reducerStates[2707] = 2; // 'state 42' -> Atom -> CHARACTER
reducerStates[16659] = 2; // 'state 42' -> Atom -> CONTROL_CHARACTER
reducerStates[30611] = 2; // 'state 42' -> Atom -> BACKSLASH
reducerStates[44563] = 2; // 'state 42' -> Atom -> CARET
reducerStates[58515] = 2; // 'state 42' -> Atom -> DASH
reducerStates[86419] = 2; // 'state 42' -> Atom -> UNION
reducerStates[100371] = 2; // 'state 42' -> Atom -> PAREN_OPEN
reducerStates[114323] = 2; // 'state 42' -> Atom -> PAREN_CLOSE
reducerStates[142227] = 2; // 'state 42' -> Atom -> BRACKET_OPEN
reducerStates[170131] = 2; // 'state 42' -> Atom -> @par-gen.EOF
reducerStates[2771] = 2; // 'state 43' -> Atom -> CHARACTER
reducerStates[16723] = 2; // 'state 43' -> Atom -> CONTROL_CHARACTER
reducerStates[30675] = 2; // 'state 43' -> Atom -> BACKSLASH
reducerStates[44627] = 2; // 'state 43' -> Atom -> CARET
reducerStates[58579] = 2; // 'state 43' -> Atom -> DASH
reducerStates[86483] = 2; // 'state 43' -> Atom -> UNION
reducerStates[100435] = 2; // 'state 43' -> Atom -> PAREN_OPEN
reducerStates[114387] = 2; // 'state 43' -> Atom -> PAREN_CLOSE
reducerStates[142291] = 2; // 'state 43' -> Atom -> BRACKET_OPEN
reducerStates[170195] = 2; // 'state 43' -> Atom -> @par-gen.EOF
reducerStates[2842] = 1; // 'state 44' -> EscapedCharacter -> CHARACTER
reducerStates[16794] = 1; // 'state 44' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[30746] = 1; // 'state 44' -> EscapedCharacter -> BACKSLASH
reducerStates[44698] = 1; // 'state 44' -> EscapedCharacter -> CARET
reducerStates[58650] = 1; // 'state 44' -> EscapedCharacter -> DASH
reducerStates[86554] = 1; // 'state 44' -> EscapedCharacter -> UNION
reducerStates[100506] = 1; // 'state 44' -> EscapedCharacter -> PAREN_OPEN
reducerStates[114458] = 1; // 'state 44' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[128410] = 1; // 'state 44' -> EscapedCharacter -> QUANTIFIER
reducerStates[142362] = 1; // 'state 44' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[170266] = 1; // 'state 44' -> EscapedCharacter -> @par-gen.EOF
reducerStates[2906] = 1; // 'state 45' -> EscapedCharacter -> CHARACTER
reducerStates[16858] = 1; // 'state 45' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[30810] = 1; // 'state 45' -> EscapedCharacter -> BACKSLASH
reducerStates[44762] = 1; // 'state 45' -> EscapedCharacter -> CARET
reducerStates[58714] = 1; // 'state 45' -> EscapedCharacter -> DASH
reducerStates[86618] = 1; // 'state 45' -> EscapedCharacter -> UNION
reducerStates[100570] = 1; // 'state 45' -> EscapedCharacter -> PAREN_OPEN
reducerStates[114522] = 1; // 'state 45' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[128474] = 1; // 'state 45' -> EscapedCharacter -> QUANTIFIER
reducerStates[142426] = 1; // 'state 45' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[170330] = 1; // 'state 45' -> EscapedCharacter -> @par-gen.EOF
reducerStates[2970] = 1; // 'state 46' -> EscapedCharacter -> CHARACTER
reducerStates[16922] = 1; // 'state 46' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[30874] = 1; // 'state 46' -> EscapedCharacter -> BACKSLASH
reducerStates[44826] = 1; // 'state 46' -> EscapedCharacter -> CARET
reducerStates[58778] = 1; // 'state 46' -> EscapedCharacter -> DASH
reducerStates[86682] = 1; // 'state 46' -> EscapedCharacter -> UNION
reducerStates[100634] = 1; // 'state 46' -> EscapedCharacter -> PAREN_OPEN
reducerStates[114586] = 1; // 'state 46' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[128538] = 1; // 'state 46' -> EscapedCharacter -> QUANTIFIER
reducerStates[142490] = 1; // 'state 46' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[170394] = 1; // 'state 46' -> EscapedCharacter -> @par-gen.EOF
reducerStates[3034] = 1; // 'state 47' -> EscapedCharacter -> CHARACTER
reducerStates[16986] = 1; // 'state 47' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[30938] = 1; // 'state 47' -> EscapedCharacter -> BACKSLASH
reducerStates[44890] = 1; // 'state 47' -> EscapedCharacter -> CARET
reducerStates[58842] = 1; // 'state 47' -> EscapedCharacter -> DASH
reducerStates[86746] = 1; // 'state 47' -> EscapedCharacter -> UNION
reducerStates[100698] = 1; // 'state 47' -> EscapedCharacter -> PAREN_OPEN
reducerStates[114650] = 1; // 'state 47' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[128602] = 1; // 'state 47' -> EscapedCharacter -> QUANTIFIER
reducerStates[142554] = 1; // 'state 47' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[170458] = 1; // 'state 47' -> EscapedCharacter -> @par-gen.EOF
reducerStates[3098] = 1; // 'state 48' -> EscapedCharacter -> CHARACTER
reducerStates[17050] = 1; // 'state 48' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[31002] = 1; // 'state 48' -> EscapedCharacter -> BACKSLASH
reducerStates[44954] = 1; // 'state 48' -> EscapedCharacter -> CARET
reducerStates[58906] = 1; // 'state 48' -> EscapedCharacter -> DASH
reducerStates[86810] = 1; // 'state 48' -> EscapedCharacter -> UNION
reducerStates[100762] = 1; // 'state 48' -> EscapedCharacter -> PAREN_OPEN
reducerStates[114714] = 1; // 'state 48' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[128666] = 1; // 'state 48' -> EscapedCharacter -> QUANTIFIER
reducerStates[142618] = 1; // 'state 48' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[170522] = 1; // 'state 48' -> EscapedCharacter -> @par-gen.EOF
reducerStates[3162] = 1; // 'state 49' -> EscapedCharacter -> CHARACTER
reducerStates[17114] = 1; // 'state 49' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[31066] = 1; // 'state 49' -> EscapedCharacter -> BACKSLASH
reducerStates[45018] = 1; // 'state 49' -> EscapedCharacter -> CARET
reducerStates[58970] = 1; // 'state 49' -> EscapedCharacter -> DASH
reducerStates[86874] = 1; // 'state 49' -> EscapedCharacter -> UNION
reducerStates[100826] = 1; // 'state 49' -> EscapedCharacter -> PAREN_OPEN
reducerStates[114778] = 1; // 'state 49' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[128730] = 1; // 'state 49' -> EscapedCharacter -> QUANTIFIER
reducerStates[142682] = 1; // 'state 49' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[170586] = 1; // 'state 49' -> EscapedCharacter -> @par-gen.EOF
reducerStates[3226] = 1; // 'state 50' -> EscapedCharacter -> CHARACTER
reducerStates[17178] = 1; // 'state 50' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[31130] = 1; // 'state 50' -> EscapedCharacter -> BACKSLASH
reducerStates[45082] = 1; // 'state 50' -> EscapedCharacter -> CARET
reducerStates[59034] = 1; // 'state 50' -> EscapedCharacter -> DASH
reducerStates[86938] = 1; // 'state 50' -> EscapedCharacter -> UNION
reducerStates[100890] = 1; // 'state 50' -> EscapedCharacter -> PAREN_OPEN
reducerStates[114842] = 1; // 'state 50' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[128794] = 1; // 'state 50' -> EscapedCharacter -> QUANTIFIER
reducerStates[142746] = 1; // 'state 50' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[170650] = 1; // 'state 50' -> EscapedCharacter -> @par-gen.EOF
reducerStates[3290] = 1; // 'state 51' -> EscapedCharacter -> CHARACTER
reducerStates[17242] = 1; // 'state 51' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[31194] = 1; // 'state 51' -> EscapedCharacter -> BACKSLASH
reducerStates[45146] = 1; // 'state 51' -> EscapedCharacter -> CARET
reducerStates[59098] = 1; // 'state 51' -> EscapedCharacter -> DASH
reducerStates[87002] = 1; // 'state 51' -> EscapedCharacter -> UNION
reducerStates[100954] = 1; // 'state 51' -> EscapedCharacter -> PAREN_OPEN
reducerStates[114906] = 1; // 'state 51' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[128858] = 1; // 'state 51' -> EscapedCharacter -> QUANTIFIER
reducerStates[142810] = 1; // 'state 51' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[170714] = 1; // 'state 51' -> EscapedCharacter -> @par-gen.EOF
reducerStates[3354] = 1; // 'state 52' -> EscapedCharacter -> CHARACTER
reducerStates[17306] = 1; // 'state 52' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[31258] = 1; // 'state 52' -> EscapedCharacter -> BACKSLASH
reducerStates[45210] = 1; // 'state 52' -> EscapedCharacter -> CARET
reducerStates[59162] = 1; // 'state 52' -> EscapedCharacter -> DASH
reducerStates[87066] = 1; // 'state 52' -> EscapedCharacter -> UNION
reducerStates[101018] = 1; // 'state 52' -> EscapedCharacter -> PAREN_OPEN
reducerStates[114970] = 1; // 'state 52' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[128922] = 1; // 'state 52' -> EscapedCharacter -> QUANTIFIER
reducerStates[142874] = 1; // 'state 52' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[170778] = 1; // 'state 52' -> EscapedCharacter -> @par-gen.EOF
reducerStates[3417] = 2; // 'state 53' -> Character -> CHARACTER
reducerStates[17369] = 2; // 'state 53' -> Character -> CONTROL_CHARACTER
reducerStates[31321] = 2; // 'state 53' -> Character -> BACKSLASH
reducerStates[45273] = 2; // 'state 53' -> Character -> CARET
reducerStates[59225] = 2; // 'state 53' -> Character -> DASH
reducerStates[87129] = 2; // 'state 53' -> Character -> UNION
reducerStates[101081] = 2; // 'state 53' -> Character -> PAREN_OPEN
reducerStates[115033] = 2; // 'state 53' -> Character -> PAREN_CLOSE
reducerStates[128985] = 2; // 'state 53' -> Character -> QUANTIFIER
reducerStates[142937] = 2; // 'state 53' -> Character -> BRACKET_OPEN
reducerStates[170841] = 2; // 'state 53' -> Character -> @par-gen.EOF
reducerStates[3735] = 1; // 'state 58' -> CharacterClassCharacter -> CHARACTER
reducerStates[17687] = 1; // 'state 58' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[31639] = 1; // 'state 58' -> CharacterClassCharacter -> BACKSLASH
reducerStates[73495] = 1; // 'state 58' -> CharacterClassCharacter -> DOT
reducerStates[87447] = 1; // 'state 58' -> CharacterClassCharacter -> UNION
reducerStates[101399] = 1; // 'state 58' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[115351] = 1; // 'state 58' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[129303] = 1; // 'state 58' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[157207] = 1; // 'state 58' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[3799] = 1; // 'state 59' -> CharacterClassCharacter -> CHARACTER
reducerStates[17751] = 1; // 'state 59' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[31703] = 1; // 'state 59' -> CharacterClassCharacter -> BACKSLASH
reducerStates[73559] = 1; // 'state 59' -> CharacterClassCharacter -> DOT
reducerStates[87511] = 1; // 'state 59' -> CharacterClassCharacter -> UNION
reducerStates[101463] = 1; // 'state 59' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[115415] = 1; // 'state 59' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[129367] = 1; // 'state 59' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[157271] = 1; // 'state 59' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[3991] = 1; // 'state 62' -> CharacterClassCharacter -> CHARACTER
reducerStates[17943] = 1; // 'state 62' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[31895] = 1; // 'state 62' -> CharacterClassCharacter -> BACKSLASH
reducerStates[73751] = 1; // 'state 62' -> CharacterClassCharacter -> DOT
reducerStates[87703] = 1; // 'state 62' -> CharacterClassCharacter -> UNION
reducerStates[101655] = 1; // 'state 62' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[115607] = 1; // 'state 62' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[129559] = 1; // 'state 62' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[157463] = 1; // 'state 62' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[4055] = 1; // 'state 63' -> CharacterClassCharacter -> CHARACTER
reducerStates[18007] = 1; // 'state 63' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[31959] = 1; // 'state 63' -> CharacterClassCharacter -> BACKSLASH
reducerStates[73815] = 1; // 'state 63' -> CharacterClassCharacter -> DOT
reducerStates[87767] = 1; // 'state 63' -> CharacterClassCharacter -> UNION
reducerStates[101719] = 1; // 'state 63' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[115671] = 1; // 'state 63' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[129623] = 1; // 'state 63' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[157527] = 1; // 'state 63' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[4119] = 1; // 'state 64' -> CharacterClassCharacter -> CHARACTER
reducerStates[18071] = 1; // 'state 64' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[32023] = 1; // 'state 64' -> CharacterClassCharacter -> BACKSLASH
reducerStates[73879] = 1; // 'state 64' -> CharacterClassCharacter -> DOT
reducerStates[87831] = 1; // 'state 64' -> CharacterClassCharacter -> UNION
reducerStates[101783] = 1; // 'state 64' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[115735] = 1; // 'state 64' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[129687] = 1; // 'state 64' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[157591] = 1; // 'state 64' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[4183] = 1; // 'state 65' -> CharacterClassCharacter -> CHARACTER
reducerStates[18135] = 1; // 'state 65' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[32087] = 1; // 'state 65' -> CharacterClassCharacter -> BACKSLASH
reducerStates[73943] = 1; // 'state 65' -> CharacterClassCharacter -> DOT
reducerStates[87895] = 1; // 'state 65' -> CharacterClassCharacter -> UNION
reducerStates[101847] = 1; // 'state 65' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[115799] = 1; // 'state 65' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[129751] = 1; // 'state 65' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[157655] = 1; // 'state 65' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[4247] = 1; // 'state 66' -> CharacterClassCharacter -> CHARACTER
reducerStates[18199] = 1; // 'state 66' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[32151] = 1; // 'state 66' -> CharacterClassCharacter -> BACKSLASH
reducerStates[74007] = 1; // 'state 66' -> CharacterClassCharacter -> DOT
reducerStates[87959] = 1; // 'state 66' -> CharacterClassCharacter -> UNION
reducerStates[101911] = 1; // 'state 66' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[115863] = 1; // 'state 66' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[129815] = 1; // 'state 66' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[157719] = 1; // 'state 66' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[4374] = 1; // 'state 68' -> CharacterClassCharacters -> CHARACTER
reducerStates[18326] = 1; // 'state 68' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[32278] = 1; // 'state 68' -> CharacterClassCharacters -> BACKSLASH
reducerStates[74134] = 1; // 'state 68' -> CharacterClassCharacters -> DOT
reducerStates[88086] = 1; // 'state 68' -> CharacterClassCharacters -> UNION
reducerStates[102038] = 1; // 'state 68' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[115990] = 1; // 'state 68' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[129942] = 1; // 'state 68' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[157846] = 1; // 'state 68' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[4439] = 1; // 'state 69' -> CharacterClassCharacter -> CHARACTER
reducerStates[18391] = 1; // 'state 69' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[32343] = 1; // 'state 69' -> CharacterClassCharacter -> BACKSLASH
reducerStates[74199] = 1; // 'state 69' -> CharacterClassCharacter -> DOT
reducerStates[88151] = 1; // 'state 69' -> CharacterClassCharacter -> UNION
reducerStates[102103] = 1; // 'state 69' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[116055] = 1; // 'state 69' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[130007] = 1; // 'state 69' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[157911] = 1; // 'state 69' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[88209] = 3; // 'state 70' -> Union -> UNION
reducerStates[116113] = 3; // 'state 70' -> Union -> PAREN_CLOSE
reducerStates[171921] = 3; // 'state 70' -> Union -> @par-gen.EOF
reducerStates[88273] = 3; // 'state 71' -> Union -> UNION
reducerStates[116177] = 3; // 'state 71' -> Union -> PAREN_CLOSE
reducerStates[171985] = 3; // 'state 71' -> Union -> @par-gen.EOF
reducerStates[88337] = 3; // 'state 72' -> Union -> UNION
reducerStates[116241] = 3; // 'state 72' -> Union -> PAREN_CLOSE
reducerStates[172049] = 3; // 'state 72' -> Union -> @par-gen.EOF
reducerStates[88401] = 3; // 'state 73' -> Union -> UNION
reducerStates[116305] = 3; // 'state 73' -> Union -> PAREN_CLOSE
reducerStates[172113] = 3; // 'state 73' -> Union -> @par-gen.EOF
reducerStates[4755] = 2; // 'state 74' -> Atom -> CHARACTER
reducerStates[18707] = 2; // 'state 74' -> Atom -> CONTROL_CHARACTER
reducerStates[32659] = 2; // 'state 74' -> Atom -> BACKSLASH
reducerStates[46611] = 2; // 'state 74' -> Atom -> CARET
reducerStates[60563] = 2; // 'state 74' -> Atom -> DASH
reducerStates[88467] = 2; // 'state 74' -> Atom -> UNION
reducerStates[102419] = 2; // 'state 74' -> Atom -> PAREN_OPEN
reducerStates[116371] = 2; // 'state 74' -> Atom -> PAREN_CLOSE
reducerStates[144275] = 2; // 'state 74' -> Atom -> BRACKET_OPEN
reducerStates[172179] = 2; // 'state 74' -> Atom -> @par-gen.EOF
reducerStates[4819] = 2; // 'state 75' -> Atom -> CHARACTER
reducerStates[18771] = 2; // 'state 75' -> Atom -> CONTROL_CHARACTER
reducerStates[32723] = 2; // 'state 75' -> Atom -> BACKSLASH
reducerStates[46675] = 2; // 'state 75' -> Atom -> CARET
reducerStates[60627] = 2; // 'state 75' -> Atom -> DASH
reducerStates[88531] = 2; // 'state 75' -> Atom -> UNION
reducerStates[102483] = 2; // 'state 75' -> Atom -> PAREN_OPEN
reducerStates[116435] = 2; // 'state 75' -> Atom -> PAREN_CLOSE
reducerStates[144339] = 2; // 'state 75' -> Atom -> BRACKET_OPEN
reducerStates[172243] = 2; // 'state 75' -> Atom -> @par-gen.EOF
reducerStates[4883] = 2; // 'state 76' -> Atom -> CHARACTER
reducerStates[18835] = 2; // 'state 76' -> Atom -> CONTROL_CHARACTER
reducerStates[32787] = 2; // 'state 76' -> Atom -> BACKSLASH
reducerStates[46739] = 2; // 'state 76' -> Atom -> CARET
reducerStates[60691] = 2; // 'state 76' -> Atom -> DASH
reducerStates[88595] = 2; // 'state 76' -> Atom -> UNION
reducerStates[102547] = 2; // 'state 76' -> Atom -> PAREN_OPEN
reducerStates[116499] = 2; // 'state 76' -> Atom -> PAREN_CLOSE
reducerStates[144403] = 2; // 'state 76' -> Atom -> BRACKET_OPEN
reducerStates[172307] = 2; // 'state 76' -> Atom -> @par-gen.EOF
reducerStates[4954] = 1; // 'state 77' -> EscapedCharacter -> CHARACTER
reducerStates[18906] = 1; // 'state 77' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[32858] = 1; // 'state 77' -> EscapedCharacter -> BACKSLASH
reducerStates[46810] = 1; // 'state 77' -> EscapedCharacter -> CARET
reducerStates[60762] = 1; // 'state 77' -> EscapedCharacter -> DASH
reducerStates[88666] = 1; // 'state 77' -> EscapedCharacter -> UNION
reducerStates[102618] = 1; // 'state 77' -> EscapedCharacter -> PAREN_OPEN
reducerStates[116570] = 1; // 'state 77' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[130522] = 1; // 'state 77' -> EscapedCharacter -> QUANTIFIER
reducerStates[144474] = 1; // 'state 77' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[172378] = 1; // 'state 77' -> EscapedCharacter -> @par-gen.EOF
reducerStates[5018] = 1; // 'state 78' -> EscapedCharacter -> CHARACTER
reducerStates[18970] = 1; // 'state 78' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[32922] = 1; // 'state 78' -> EscapedCharacter -> BACKSLASH
reducerStates[46874] = 1; // 'state 78' -> EscapedCharacter -> CARET
reducerStates[60826] = 1; // 'state 78' -> EscapedCharacter -> DASH
reducerStates[88730] = 1; // 'state 78' -> EscapedCharacter -> UNION
reducerStates[102682] = 1; // 'state 78' -> EscapedCharacter -> PAREN_OPEN
reducerStates[116634] = 1; // 'state 78' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[130586] = 1; // 'state 78' -> EscapedCharacter -> QUANTIFIER
reducerStates[144538] = 1; // 'state 78' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[172442] = 1; // 'state 78' -> EscapedCharacter -> @par-gen.EOF
reducerStates[5082] = 1; // 'state 79' -> EscapedCharacter -> CHARACTER
reducerStates[19034] = 1; // 'state 79' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[32986] = 1; // 'state 79' -> EscapedCharacter -> BACKSLASH
reducerStates[46938] = 1; // 'state 79' -> EscapedCharacter -> CARET
reducerStates[60890] = 1; // 'state 79' -> EscapedCharacter -> DASH
reducerStates[88794] = 1; // 'state 79' -> EscapedCharacter -> UNION
reducerStates[102746] = 1; // 'state 79' -> EscapedCharacter -> PAREN_OPEN
reducerStates[116698] = 1; // 'state 79' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[130650] = 1; // 'state 79' -> EscapedCharacter -> QUANTIFIER
reducerStates[144602] = 1; // 'state 79' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[172506] = 1; // 'state 79' -> EscapedCharacter -> @par-gen.EOF
reducerStates[5146] = 1; // 'state 80' -> EscapedCharacter -> CHARACTER
reducerStates[19098] = 1; // 'state 80' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[33050] = 1; // 'state 80' -> EscapedCharacter -> BACKSLASH
reducerStates[47002] = 1; // 'state 80' -> EscapedCharacter -> CARET
reducerStates[60954] = 1; // 'state 80' -> EscapedCharacter -> DASH
reducerStates[88858] = 1; // 'state 80' -> EscapedCharacter -> UNION
reducerStates[102810] = 1; // 'state 80' -> EscapedCharacter -> PAREN_OPEN
reducerStates[116762] = 1; // 'state 80' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[130714] = 1; // 'state 80' -> EscapedCharacter -> QUANTIFIER
reducerStates[144666] = 1; // 'state 80' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[172570] = 1; // 'state 80' -> EscapedCharacter -> @par-gen.EOF
reducerStates[5210] = 1; // 'state 81' -> EscapedCharacter -> CHARACTER
reducerStates[19162] = 1; // 'state 81' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[33114] = 1; // 'state 81' -> EscapedCharacter -> BACKSLASH
reducerStates[47066] = 1; // 'state 81' -> EscapedCharacter -> CARET
reducerStates[61018] = 1; // 'state 81' -> EscapedCharacter -> DASH
reducerStates[88922] = 1; // 'state 81' -> EscapedCharacter -> UNION
reducerStates[102874] = 1; // 'state 81' -> EscapedCharacter -> PAREN_OPEN
reducerStates[116826] = 1; // 'state 81' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[130778] = 1; // 'state 81' -> EscapedCharacter -> QUANTIFIER
reducerStates[144730] = 1; // 'state 81' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[172634] = 1; // 'state 81' -> EscapedCharacter -> @par-gen.EOF
reducerStates[5274] = 1; // 'state 82' -> EscapedCharacter -> CHARACTER
reducerStates[19226] = 1; // 'state 82' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[33178] = 1; // 'state 82' -> EscapedCharacter -> BACKSLASH
reducerStates[47130] = 1; // 'state 82' -> EscapedCharacter -> CARET
reducerStates[61082] = 1; // 'state 82' -> EscapedCharacter -> DASH
reducerStates[88986] = 1; // 'state 82' -> EscapedCharacter -> UNION
reducerStates[102938] = 1; // 'state 82' -> EscapedCharacter -> PAREN_OPEN
reducerStates[116890] = 1; // 'state 82' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[130842] = 1; // 'state 82' -> EscapedCharacter -> QUANTIFIER
reducerStates[144794] = 1; // 'state 82' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[172698] = 1; // 'state 82' -> EscapedCharacter -> @par-gen.EOF
reducerStates[5338] = 1; // 'state 83' -> EscapedCharacter -> CHARACTER
reducerStates[19290] = 1; // 'state 83' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[33242] = 1; // 'state 83' -> EscapedCharacter -> BACKSLASH
reducerStates[47194] = 1; // 'state 83' -> EscapedCharacter -> CARET
reducerStates[61146] = 1; // 'state 83' -> EscapedCharacter -> DASH
reducerStates[89050] = 1; // 'state 83' -> EscapedCharacter -> UNION
reducerStates[103002] = 1; // 'state 83' -> EscapedCharacter -> PAREN_OPEN
reducerStates[116954] = 1; // 'state 83' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[130906] = 1; // 'state 83' -> EscapedCharacter -> QUANTIFIER
reducerStates[144858] = 1; // 'state 83' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[172762] = 1; // 'state 83' -> EscapedCharacter -> @par-gen.EOF
reducerStates[5402] = 1; // 'state 84' -> EscapedCharacter -> CHARACTER
reducerStates[19354] = 1; // 'state 84' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[33306] = 1; // 'state 84' -> EscapedCharacter -> BACKSLASH
reducerStates[47258] = 1; // 'state 84' -> EscapedCharacter -> CARET
reducerStates[61210] = 1; // 'state 84' -> EscapedCharacter -> DASH
reducerStates[89114] = 1; // 'state 84' -> EscapedCharacter -> UNION
reducerStates[103066] = 1; // 'state 84' -> EscapedCharacter -> PAREN_OPEN
reducerStates[117018] = 1; // 'state 84' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[130970] = 1; // 'state 84' -> EscapedCharacter -> QUANTIFIER
reducerStates[144922] = 1; // 'state 84' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[172826] = 1; // 'state 84' -> EscapedCharacter -> @par-gen.EOF
reducerStates[5466] = 1; // 'state 85' -> EscapedCharacter -> CHARACTER
reducerStates[19418] = 1; // 'state 85' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[33370] = 1; // 'state 85' -> EscapedCharacter -> BACKSLASH
reducerStates[47322] = 1; // 'state 85' -> EscapedCharacter -> CARET
reducerStates[61274] = 1; // 'state 85' -> EscapedCharacter -> DASH
reducerStates[89178] = 1; // 'state 85' -> EscapedCharacter -> UNION
reducerStates[103130] = 1; // 'state 85' -> EscapedCharacter -> PAREN_OPEN
reducerStates[117082] = 1; // 'state 85' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[131034] = 1; // 'state 85' -> EscapedCharacter -> QUANTIFIER
reducerStates[144986] = 1; // 'state 85' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[172890] = 1; // 'state 85' -> EscapedCharacter -> @par-gen.EOF
reducerStates[5529] = 2; // 'state 86' -> Character -> CHARACTER
reducerStates[19481] = 2; // 'state 86' -> Character -> CONTROL_CHARACTER
reducerStates[33433] = 2; // 'state 86' -> Character -> BACKSLASH
reducerStates[47385] = 2; // 'state 86' -> Character -> CARET
reducerStates[61337] = 2; // 'state 86' -> Character -> DASH
reducerStates[89241] = 2; // 'state 86' -> Character -> UNION
reducerStates[103193] = 2; // 'state 86' -> Character -> PAREN_OPEN
reducerStates[117145] = 2; // 'state 86' -> Character -> PAREN_CLOSE
reducerStates[131097] = 2; // 'state 86' -> Character -> QUANTIFIER
reducerStates[145049] = 2; // 'state 86' -> Character -> BRACKET_OPEN
reducerStates[172953] = 2; // 'state 86' -> Character -> @par-gen.EOF
reducerStates[5783] = 1; // 'state 90' -> CharacterClassCharacter -> CHARACTER
reducerStates[19735] = 1; // 'state 90' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[33687] = 1; // 'state 90' -> CharacterClassCharacter -> BACKSLASH
reducerStates[75543] = 1; // 'state 90' -> CharacterClassCharacter -> DOT
reducerStates[89495] = 1; // 'state 90' -> CharacterClassCharacter -> UNION
reducerStates[103447] = 1; // 'state 90' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[117399] = 1; // 'state 90' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[131351] = 1; // 'state 90' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[159255] = 1; // 'state 90' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[5847] = 1; // 'state 91' -> CharacterClassCharacter -> CHARACTER
reducerStates[19799] = 1; // 'state 91' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[33751] = 1; // 'state 91' -> CharacterClassCharacter -> BACKSLASH
reducerStates[75607] = 1; // 'state 91' -> CharacterClassCharacter -> DOT
reducerStates[89559] = 1; // 'state 91' -> CharacterClassCharacter -> UNION
reducerStates[103511] = 1; // 'state 91' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[117463] = 1; // 'state 91' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[131415] = 1; // 'state 91' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[159319] = 1; // 'state 91' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[6039] = 1; // 'state 94' -> CharacterClassCharacter -> CHARACTER
reducerStates[19991] = 1; // 'state 94' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[33943] = 1; // 'state 94' -> CharacterClassCharacter -> BACKSLASH
reducerStates[75799] = 1; // 'state 94' -> CharacterClassCharacter -> DOT
reducerStates[89751] = 1; // 'state 94' -> CharacterClassCharacter -> UNION
reducerStates[103703] = 1; // 'state 94' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[117655] = 1; // 'state 94' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[131607] = 1; // 'state 94' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[159511] = 1; // 'state 94' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[6103] = 1; // 'state 95' -> CharacterClassCharacter -> CHARACTER
reducerStates[20055] = 1; // 'state 95' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[34007] = 1; // 'state 95' -> CharacterClassCharacter -> BACKSLASH
reducerStates[75863] = 1; // 'state 95' -> CharacterClassCharacter -> DOT
reducerStates[89815] = 1; // 'state 95' -> CharacterClassCharacter -> UNION
reducerStates[103767] = 1; // 'state 95' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[117719] = 1; // 'state 95' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[131671] = 1; // 'state 95' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[159575] = 1; // 'state 95' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[6167] = 1; // 'state 96' -> CharacterClassCharacter -> CHARACTER
reducerStates[20119] = 1; // 'state 96' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[34071] = 1; // 'state 96' -> CharacterClassCharacter -> BACKSLASH
reducerStates[75927] = 1; // 'state 96' -> CharacterClassCharacter -> DOT
reducerStates[89879] = 1; // 'state 96' -> CharacterClassCharacter -> UNION
reducerStates[103831] = 1; // 'state 96' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[117783] = 1; // 'state 96' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[131735] = 1; // 'state 96' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[159639] = 1; // 'state 96' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[6231] = 1; // 'state 97' -> CharacterClassCharacter -> CHARACTER
reducerStates[20183] = 1; // 'state 97' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[34135] = 1; // 'state 97' -> CharacterClassCharacter -> BACKSLASH
reducerStates[75991] = 1; // 'state 97' -> CharacterClassCharacter -> DOT
reducerStates[89943] = 1; // 'state 97' -> CharacterClassCharacter -> UNION
reducerStates[103895] = 1; // 'state 97' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[117847] = 1; // 'state 97' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[131799] = 1; // 'state 97' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[159703] = 1; // 'state 97' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[6295] = 1; // 'state 98' -> CharacterClassCharacter -> CHARACTER
reducerStates[20247] = 1; // 'state 98' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[34199] = 1; // 'state 98' -> CharacterClassCharacter -> BACKSLASH
reducerStates[76055] = 1; // 'state 98' -> CharacterClassCharacter -> DOT
reducerStates[90007] = 1; // 'state 98' -> CharacterClassCharacter -> UNION
reducerStates[103959] = 1; // 'state 98' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[117911] = 1; // 'state 98' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[131863] = 1; // 'state 98' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[159767] = 1; // 'state 98' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[6422] = 1; // 'state 100' -> CharacterClassCharacters -> CHARACTER
reducerStates[20374] = 1; // 'state 100' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[34326] = 1; // 'state 100' -> CharacterClassCharacters -> BACKSLASH
reducerStates[76182] = 1; // 'state 100' -> CharacterClassCharacters -> DOT
reducerStates[90134] = 1; // 'state 100' -> CharacterClassCharacters -> UNION
reducerStates[104086] = 1; // 'state 100' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[118038] = 1; // 'state 100' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[131990] = 1; // 'state 100' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[159894] = 1; // 'state 100' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[6487] = 1; // 'state 101' -> CharacterClassCharacter -> CHARACTER
reducerStates[20439] = 1; // 'state 101' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[34391] = 1; // 'state 101' -> CharacterClassCharacter -> BACKSLASH
reducerStates[76247] = 1; // 'state 101' -> CharacterClassCharacter -> DOT
reducerStates[90199] = 1; // 'state 101' -> CharacterClassCharacter -> UNION
reducerStates[104151] = 1; // 'state 101' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[118103] = 1; // 'state 101' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[132055] = 1; // 'state 101' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[159959] = 1; // 'state 101' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[90257] = 3; // 'state 102' -> Union -> UNION
reducerStates[118161] = 3; // 'state 102' -> Union -> PAREN_CLOSE
reducerStates[173969] = 3; // 'state 102' -> Union -> @par-gen.EOF
reducerStates[90321] = 3; // 'state 103' -> Union -> UNION
reducerStates[118225] = 3; // 'state 103' -> Union -> PAREN_CLOSE
reducerStates[174033] = 3; // 'state 103' -> Union -> @par-gen.EOF
reducerStates[6675] = 2; // 'state 104' -> Atom -> CHARACTER
reducerStates[20627] = 2; // 'state 104' -> Atom -> CONTROL_CHARACTER
reducerStates[34579] = 2; // 'state 104' -> Atom -> BACKSLASH
reducerStates[48531] = 2; // 'state 104' -> Atom -> CARET
reducerStates[62483] = 2; // 'state 104' -> Atom -> DASH
reducerStates[90387] = 2; // 'state 104' -> Atom -> UNION
reducerStates[104339] = 2; // 'state 104' -> Atom -> PAREN_OPEN
reducerStates[118291] = 2; // 'state 104' -> Atom -> PAREN_CLOSE
reducerStates[146195] = 2; // 'state 104' -> Atom -> BRACKET_OPEN
reducerStates[174099] = 2; // 'state 104' -> Atom -> @par-gen.EOF
reducerStates[6739] = 2; // 'state 105' -> Atom -> CHARACTER
reducerStates[20691] = 2; // 'state 105' -> Atom -> CONTROL_CHARACTER
reducerStates[34643] = 2; // 'state 105' -> Atom -> BACKSLASH
reducerStates[48595] = 2; // 'state 105' -> Atom -> CARET
reducerStates[62547] = 2; // 'state 105' -> Atom -> DASH
reducerStates[90451] = 2; // 'state 105' -> Atom -> UNION
reducerStates[104403] = 2; // 'state 105' -> Atom -> PAREN_OPEN
reducerStates[118355] = 2; // 'state 105' -> Atom -> PAREN_CLOSE
reducerStates[146259] = 2; // 'state 105' -> Atom -> BRACKET_OPEN
reducerStates[174163] = 2; // 'state 105' -> Atom -> @par-gen.EOF
reducerStates[6803] = 2; // 'state 106' -> Atom -> CHARACTER
reducerStates[20755] = 2; // 'state 106' -> Atom -> CONTROL_CHARACTER
reducerStates[34707] = 2; // 'state 106' -> Atom -> BACKSLASH
reducerStates[48659] = 2; // 'state 106' -> Atom -> CARET
reducerStates[62611] = 2; // 'state 106' -> Atom -> DASH
reducerStates[90515] = 2; // 'state 106' -> Atom -> UNION
reducerStates[104467] = 2; // 'state 106' -> Atom -> PAREN_OPEN
reducerStates[118419] = 2; // 'state 106' -> Atom -> PAREN_CLOSE
reducerStates[146323] = 2; // 'state 106' -> Atom -> BRACKET_OPEN
reducerStates[174227] = 2; // 'state 106' -> Atom -> @par-gen.EOF
reducerStates[6874] = 1; // 'state 107' -> EscapedCharacter -> CHARACTER
reducerStates[20826] = 1; // 'state 107' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[34778] = 1; // 'state 107' -> EscapedCharacter -> BACKSLASH
reducerStates[48730] = 1; // 'state 107' -> EscapedCharacter -> CARET
reducerStates[62682] = 1; // 'state 107' -> EscapedCharacter -> DASH
reducerStates[90586] = 1; // 'state 107' -> EscapedCharacter -> UNION
reducerStates[104538] = 1; // 'state 107' -> EscapedCharacter -> PAREN_OPEN
reducerStates[118490] = 1; // 'state 107' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[132442] = 1; // 'state 107' -> EscapedCharacter -> QUANTIFIER
reducerStates[146394] = 1; // 'state 107' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[174298] = 1; // 'state 107' -> EscapedCharacter -> @par-gen.EOF
reducerStates[6938] = 1; // 'state 108' -> EscapedCharacter -> CHARACTER
reducerStates[20890] = 1; // 'state 108' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[34842] = 1; // 'state 108' -> EscapedCharacter -> BACKSLASH
reducerStates[48794] = 1; // 'state 108' -> EscapedCharacter -> CARET
reducerStates[62746] = 1; // 'state 108' -> EscapedCharacter -> DASH
reducerStates[90650] = 1; // 'state 108' -> EscapedCharacter -> UNION
reducerStates[104602] = 1; // 'state 108' -> EscapedCharacter -> PAREN_OPEN
reducerStates[118554] = 1; // 'state 108' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[132506] = 1; // 'state 108' -> EscapedCharacter -> QUANTIFIER
reducerStates[146458] = 1; // 'state 108' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[174362] = 1; // 'state 108' -> EscapedCharacter -> @par-gen.EOF
reducerStates[7002] = 1; // 'state 109' -> EscapedCharacter -> CHARACTER
reducerStates[20954] = 1; // 'state 109' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[34906] = 1; // 'state 109' -> EscapedCharacter -> BACKSLASH
reducerStates[48858] = 1; // 'state 109' -> EscapedCharacter -> CARET
reducerStates[62810] = 1; // 'state 109' -> EscapedCharacter -> DASH
reducerStates[90714] = 1; // 'state 109' -> EscapedCharacter -> UNION
reducerStates[104666] = 1; // 'state 109' -> EscapedCharacter -> PAREN_OPEN
reducerStates[118618] = 1; // 'state 109' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[132570] = 1; // 'state 109' -> EscapedCharacter -> QUANTIFIER
reducerStates[146522] = 1; // 'state 109' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[174426] = 1; // 'state 109' -> EscapedCharacter -> @par-gen.EOF
reducerStates[7066] = 1; // 'state 110' -> EscapedCharacter -> CHARACTER
reducerStates[21018] = 1; // 'state 110' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[34970] = 1; // 'state 110' -> EscapedCharacter -> BACKSLASH
reducerStates[48922] = 1; // 'state 110' -> EscapedCharacter -> CARET
reducerStates[62874] = 1; // 'state 110' -> EscapedCharacter -> DASH
reducerStates[90778] = 1; // 'state 110' -> EscapedCharacter -> UNION
reducerStates[104730] = 1; // 'state 110' -> EscapedCharacter -> PAREN_OPEN
reducerStates[118682] = 1; // 'state 110' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[132634] = 1; // 'state 110' -> EscapedCharacter -> QUANTIFIER
reducerStates[146586] = 1; // 'state 110' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[174490] = 1; // 'state 110' -> EscapedCharacter -> @par-gen.EOF
reducerStates[7130] = 1; // 'state 111' -> EscapedCharacter -> CHARACTER
reducerStates[21082] = 1; // 'state 111' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[35034] = 1; // 'state 111' -> EscapedCharacter -> BACKSLASH
reducerStates[48986] = 1; // 'state 111' -> EscapedCharacter -> CARET
reducerStates[62938] = 1; // 'state 111' -> EscapedCharacter -> DASH
reducerStates[90842] = 1; // 'state 111' -> EscapedCharacter -> UNION
reducerStates[104794] = 1; // 'state 111' -> EscapedCharacter -> PAREN_OPEN
reducerStates[118746] = 1; // 'state 111' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[132698] = 1; // 'state 111' -> EscapedCharacter -> QUANTIFIER
reducerStates[146650] = 1; // 'state 111' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[174554] = 1; // 'state 111' -> EscapedCharacter -> @par-gen.EOF
reducerStates[7194] = 1; // 'state 112' -> EscapedCharacter -> CHARACTER
reducerStates[21146] = 1; // 'state 112' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[35098] = 1; // 'state 112' -> EscapedCharacter -> BACKSLASH
reducerStates[49050] = 1; // 'state 112' -> EscapedCharacter -> CARET
reducerStates[63002] = 1; // 'state 112' -> EscapedCharacter -> DASH
reducerStates[90906] = 1; // 'state 112' -> EscapedCharacter -> UNION
reducerStates[104858] = 1; // 'state 112' -> EscapedCharacter -> PAREN_OPEN
reducerStates[118810] = 1; // 'state 112' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[132762] = 1; // 'state 112' -> EscapedCharacter -> QUANTIFIER
reducerStates[146714] = 1; // 'state 112' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[174618] = 1; // 'state 112' -> EscapedCharacter -> @par-gen.EOF
reducerStates[7258] = 1; // 'state 113' -> EscapedCharacter -> CHARACTER
reducerStates[21210] = 1; // 'state 113' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[35162] = 1; // 'state 113' -> EscapedCharacter -> BACKSLASH
reducerStates[49114] = 1; // 'state 113' -> EscapedCharacter -> CARET
reducerStates[63066] = 1; // 'state 113' -> EscapedCharacter -> DASH
reducerStates[90970] = 1; // 'state 113' -> EscapedCharacter -> UNION
reducerStates[104922] = 1; // 'state 113' -> EscapedCharacter -> PAREN_OPEN
reducerStates[118874] = 1; // 'state 113' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[132826] = 1; // 'state 113' -> EscapedCharacter -> QUANTIFIER
reducerStates[146778] = 1; // 'state 113' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[174682] = 1; // 'state 113' -> EscapedCharacter -> @par-gen.EOF
reducerStates[7322] = 1; // 'state 114' -> EscapedCharacter -> CHARACTER
reducerStates[21274] = 1; // 'state 114' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[35226] = 1; // 'state 114' -> EscapedCharacter -> BACKSLASH
reducerStates[49178] = 1; // 'state 114' -> EscapedCharacter -> CARET
reducerStates[63130] = 1; // 'state 114' -> EscapedCharacter -> DASH
reducerStates[91034] = 1; // 'state 114' -> EscapedCharacter -> UNION
reducerStates[104986] = 1; // 'state 114' -> EscapedCharacter -> PAREN_OPEN
reducerStates[118938] = 1; // 'state 114' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[132890] = 1; // 'state 114' -> EscapedCharacter -> QUANTIFIER
reducerStates[146842] = 1; // 'state 114' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[174746] = 1; // 'state 114' -> EscapedCharacter -> @par-gen.EOF
reducerStates[7386] = 1; // 'state 115' -> EscapedCharacter -> CHARACTER
reducerStates[21338] = 1; // 'state 115' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[35290] = 1; // 'state 115' -> EscapedCharacter -> BACKSLASH
reducerStates[49242] = 1; // 'state 115' -> EscapedCharacter -> CARET
reducerStates[63194] = 1; // 'state 115' -> EscapedCharacter -> DASH
reducerStates[91098] = 1; // 'state 115' -> EscapedCharacter -> UNION
reducerStates[105050] = 1; // 'state 115' -> EscapedCharacter -> PAREN_OPEN
reducerStates[119002] = 1; // 'state 115' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[132954] = 1; // 'state 115' -> EscapedCharacter -> QUANTIFIER
reducerStates[146906] = 1; // 'state 115' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[174810] = 1; // 'state 115' -> EscapedCharacter -> @par-gen.EOF
reducerStates[7449] = 2; // 'state 116' -> Character -> CHARACTER
reducerStates[21401] = 2; // 'state 116' -> Character -> CONTROL_CHARACTER
reducerStates[35353] = 2; // 'state 116' -> Character -> BACKSLASH
reducerStates[49305] = 2; // 'state 116' -> Character -> CARET
reducerStates[63257] = 2; // 'state 116' -> Character -> DASH
reducerStates[91161] = 2; // 'state 116' -> Character -> UNION
reducerStates[105113] = 2; // 'state 116' -> Character -> PAREN_OPEN
reducerStates[119065] = 2; // 'state 116' -> Character -> PAREN_CLOSE
reducerStates[133017] = 2; // 'state 116' -> Character -> QUANTIFIER
reducerStates[146969] = 2; // 'state 116' -> Character -> BRACKET_OPEN
reducerStates[174873] = 2; // 'state 116' -> Character -> @par-gen.EOF
reducerStates[7703] = 1; // 'state 120' -> CharacterClassCharacter -> CHARACTER
reducerStates[21655] = 1; // 'state 120' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[35607] = 1; // 'state 120' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77463] = 1; // 'state 120' -> CharacterClassCharacter -> DOT
reducerStates[91415] = 1; // 'state 120' -> CharacterClassCharacter -> UNION
reducerStates[105367] = 1; // 'state 120' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[119319] = 1; // 'state 120' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[133271] = 1; // 'state 120' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[161175] = 1; // 'state 120' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[7767] = 1; // 'state 121' -> CharacterClassCharacter -> CHARACTER
reducerStates[21719] = 1; // 'state 121' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[35671] = 1; // 'state 121' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77527] = 1; // 'state 121' -> CharacterClassCharacter -> DOT
reducerStates[91479] = 1; // 'state 121' -> CharacterClassCharacter -> UNION
reducerStates[105431] = 1; // 'state 121' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[119383] = 1; // 'state 121' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[133335] = 1; // 'state 121' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[161239] = 1; // 'state 121' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[7959] = 1; // 'state 124' -> CharacterClassCharacter -> CHARACTER
reducerStates[21911] = 1; // 'state 124' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[35863] = 1; // 'state 124' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77719] = 1; // 'state 124' -> CharacterClassCharacter -> DOT
reducerStates[91671] = 1; // 'state 124' -> CharacterClassCharacter -> UNION
reducerStates[105623] = 1; // 'state 124' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[119575] = 1; // 'state 124' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[133527] = 1; // 'state 124' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[161431] = 1; // 'state 124' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[8023] = 1; // 'state 125' -> CharacterClassCharacter -> CHARACTER
reducerStates[21975] = 1; // 'state 125' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[35927] = 1; // 'state 125' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77783] = 1; // 'state 125' -> CharacterClassCharacter -> DOT
reducerStates[91735] = 1; // 'state 125' -> CharacterClassCharacter -> UNION
reducerStates[105687] = 1; // 'state 125' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[119639] = 1; // 'state 125' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[133591] = 1; // 'state 125' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[161495] = 1; // 'state 125' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[8087] = 1; // 'state 126' -> CharacterClassCharacter -> CHARACTER
reducerStates[22039] = 1; // 'state 126' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[35991] = 1; // 'state 126' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77847] = 1; // 'state 126' -> CharacterClassCharacter -> DOT
reducerStates[91799] = 1; // 'state 126' -> CharacterClassCharacter -> UNION
reducerStates[105751] = 1; // 'state 126' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[119703] = 1; // 'state 126' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[133655] = 1; // 'state 126' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[161559] = 1; // 'state 126' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[8151] = 1; // 'state 127' -> CharacterClassCharacter -> CHARACTER
reducerStates[22103] = 1; // 'state 127' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[36055] = 1; // 'state 127' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77911] = 1; // 'state 127' -> CharacterClassCharacter -> DOT
reducerStates[91863] = 1; // 'state 127' -> CharacterClassCharacter -> UNION
reducerStates[105815] = 1; // 'state 127' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[119767] = 1; // 'state 127' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[133719] = 1; // 'state 127' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[161623] = 1; // 'state 127' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[8215] = 1; // 'state 128' -> CharacterClassCharacter -> CHARACTER
reducerStates[22167] = 1; // 'state 128' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[36119] = 1; // 'state 128' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77975] = 1; // 'state 128' -> CharacterClassCharacter -> DOT
reducerStates[91927] = 1; // 'state 128' -> CharacterClassCharacter -> UNION
reducerStates[105879] = 1; // 'state 128' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[119831] = 1; // 'state 128' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[133783] = 1; // 'state 128' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[161687] = 1; // 'state 128' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[8342] = 1; // 'state 130' -> CharacterClassCharacters -> CHARACTER
reducerStates[22294] = 1; // 'state 130' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[36246] = 1; // 'state 130' -> CharacterClassCharacters -> BACKSLASH
reducerStates[78102] = 1; // 'state 130' -> CharacterClassCharacters -> DOT
reducerStates[92054] = 1; // 'state 130' -> CharacterClassCharacters -> UNION
reducerStates[106006] = 1; // 'state 130' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[119958] = 1; // 'state 130' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[133910] = 1; // 'state 130' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[161814] = 1; // 'state 130' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[8407] = 1; // 'state 131' -> CharacterClassCharacter -> CHARACTER
reducerStates[22359] = 1; // 'state 131' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[36311] = 1; // 'state 131' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78167] = 1; // 'state 131' -> CharacterClassCharacter -> DOT
reducerStates[92119] = 1; // 'state 131' -> CharacterClassCharacter -> UNION
reducerStates[106071] = 1; // 'state 131' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[120023] = 1; // 'state 131' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[133975] = 1; // 'state 131' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[161879] = 1; // 'state 131' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[8468] = 3; // 'state 132' -> Group -> CHARACTER
reducerStates[22420] = 3; // 'state 132' -> Group -> CONTROL_CHARACTER
reducerStates[36372] = 3; // 'state 132' -> Group -> BACKSLASH
reducerStates[50324] = 3; // 'state 132' -> Group -> CARET
reducerStates[64276] = 3; // 'state 132' -> Group -> DASH
reducerStates[92180] = 3; // 'state 132' -> Group -> UNION
reducerStates[106132] = 3; // 'state 132' -> Group -> PAREN_OPEN
reducerStates[120084] = 3; // 'state 132' -> Group -> PAREN_CLOSE
reducerStates[134036] = 3; // 'state 132' -> Group -> QUANTIFIER
reducerStates[147988] = 3; // 'state 132' -> Group -> BRACKET_OPEN
reducerStates[175892] = 3; // 'state 132' -> Group -> @par-gen.EOF
reducerStates[8532] = 3; // 'state 133' -> Group -> CHARACTER
reducerStates[22484] = 3; // 'state 133' -> Group -> CONTROL_CHARACTER
reducerStates[36436] = 3; // 'state 133' -> Group -> BACKSLASH
reducerStates[50388] = 3; // 'state 133' -> Group -> CARET
reducerStates[64340] = 3; // 'state 133' -> Group -> DASH
reducerStates[92244] = 3; // 'state 133' -> Group -> UNION
reducerStates[106196] = 3; // 'state 133' -> Group -> PAREN_OPEN
reducerStates[120148] = 3; // 'state 133' -> Group -> PAREN_CLOSE
reducerStates[134100] = 3; // 'state 133' -> Group -> QUANTIFIER
reducerStates[148052] = 3; // 'state 133' -> Group -> BRACKET_OPEN
reducerStates[175956] = 3; // 'state 133' -> Group -> @par-gen.EOF
reducerStates[8596] = 3; // 'state 134' -> Group -> CHARACTER
reducerStates[22548] = 3; // 'state 134' -> Group -> CONTROL_CHARACTER
reducerStates[36500] = 3; // 'state 134' -> Group -> BACKSLASH
reducerStates[50452] = 3; // 'state 134' -> Group -> CARET
reducerStates[64404] = 3; // 'state 134' -> Group -> DASH
reducerStates[92308] = 3; // 'state 134' -> Group -> UNION
reducerStates[106260] = 3; // 'state 134' -> Group -> PAREN_OPEN
reducerStates[120212] = 3; // 'state 134' -> Group -> PAREN_CLOSE
reducerStates[134164] = 3; // 'state 134' -> Group -> QUANTIFIER
reducerStates[148116] = 3; // 'state 134' -> Group -> BRACKET_OPEN
reducerStates[176020] = 3; // 'state 134' -> Group -> @par-gen.EOF
reducerStates[8663] = 1; // 'state 135' -> CharacterClassCharacter -> CHARACTER
reducerStates[22615] = 1; // 'state 135' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[36567] = 1; // 'state 135' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78423] = 1; // 'state 135' -> CharacterClassCharacter -> DOT
reducerStates[92375] = 1; // 'state 135' -> CharacterClassCharacter -> UNION
reducerStates[106327] = 1; // 'state 135' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[120279] = 1; // 'state 135' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[134231] = 1; // 'state 135' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[162135] = 1; // 'state 135' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[8727] = 1; // 'state 136' -> CharacterClassCharacter -> CHARACTER
reducerStates[22679] = 1; // 'state 136' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[36631] = 1; // 'state 136' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78487] = 1; // 'state 136' -> CharacterClassCharacter -> DOT
reducerStates[92439] = 1; // 'state 136' -> CharacterClassCharacter -> UNION
reducerStates[106391] = 1; // 'state 136' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[120343] = 1; // 'state 136' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[134295] = 1; // 'state 136' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[162199] = 1; // 'state 136' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[8919] = 1; // 'state 139' -> CharacterClassCharacter -> CHARACTER
reducerStates[22871] = 1; // 'state 139' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[36823] = 1; // 'state 139' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78679] = 1; // 'state 139' -> CharacterClassCharacter -> DOT
reducerStates[92631] = 1; // 'state 139' -> CharacterClassCharacter -> UNION
reducerStates[106583] = 1; // 'state 139' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[120535] = 1; // 'state 139' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[134487] = 1; // 'state 139' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[162391] = 1; // 'state 139' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[8983] = 1; // 'state 140' -> CharacterClassCharacter -> CHARACTER
reducerStates[22935] = 1; // 'state 140' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[36887] = 1; // 'state 140' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78743] = 1; // 'state 140' -> CharacterClassCharacter -> DOT
reducerStates[92695] = 1; // 'state 140' -> CharacterClassCharacter -> UNION
reducerStates[106647] = 1; // 'state 140' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[120599] = 1; // 'state 140' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[134551] = 1; // 'state 140' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[162455] = 1; // 'state 140' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9047] = 1; // 'state 141' -> CharacterClassCharacter -> CHARACTER
reducerStates[22999] = 1; // 'state 141' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[36951] = 1; // 'state 141' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78807] = 1; // 'state 141' -> CharacterClassCharacter -> DOT
reducerStates[92759] = 1; // 'state 141' -> CharacterClassCharacter -> UNION
reducerStates[106711] = 1; // 'state 141' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[120663] = 1; // 'state 141' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[134615] = 1; // 'state 141' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[162519] = 1; // 'state 141' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9111] = 1; // 'state 142' -> CharacterClassCharacter -> CHARACTER
reducerStates[23063] = 1; // 'state 142' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[37015] = 1; // 'state 142' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78871] = 1; // 'state 142' -> CharacterClassCharacter -> DOT
reducerStates[92823] = 1; // 'state 142' -> CharacterClassCharacter -> UNION
reducerStates[106775] = 1; // 'state 142' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[120727] = 1; // 'state 142' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[134679] = 1; // 'state 142' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[162583] = 1; // 'state 142' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9175] = 1; // 'state 143' -> CharacterClassCharacter -> CHARACTER
reducerStates[23127] = 1; // 'state 143' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[37079] = 1; // 'state 143' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78935] = 1; // 'state 143' -> CharacterClassCharacter -> DOT
reducerStates[92887] = 1; // 'state 143' -> CharacterClassCharacter -> UNION
reducerStates[106839] = 1; // 'state 143' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[120791] = 1; // 'state 143' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[134743] = 1; // 'state 143' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[162647] = 1; // 'state 143' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9302] = 1; // 'state 145' -> CharacterClassCharacters -> CHARACTER
reducerStates[23254] = 1; // 'state 145' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[37206] = 1; // 'state 145' -> CharacterClassCharacters -> BACKSLASH
reducerStates[79062] = 1; // 'state 145' -> CharacterClassCharacters -> DOT
reducerStates[93014] = 1; // 'state 145' -> CharacterClassCharacters -> UNION
reducerStates[106966] = 1; // 'state 145' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[120918] = 1; // 'state 145' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[134870] = 1; // 'state 145' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[162774] = 1; // 'state 145' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[9367] = 1; // 'state 146' -> CharacterClassCharacter -> CHARACTER
reducerStates[23319] = 1; // 'state 146' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[37271] = 1; // 'state 146' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79127] = 1; // 'state 146' -> CharacterClassCharacter -> DOT
reducerStates[93079] = 1; // 'state 146' -> CharacterClassCharacter -> UNION
reducerStates[107031] = 1; // 'state 146' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[120983] = 1; // 'state 146' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[134935] = 1; // 'state 146' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[162839] = 1; // 'state 146' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9431] = 1; // 'state 147' -> CharacterClassCharacter -> CHARACTER
reducerStates[23383] = 1; // 'state 147' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[37335] = 1; // 'state 147' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79191] = 1; // 'state 147' -> CharacterClassCharacter -> DOT
reducerStates[93143] = 1; // 'state 147' -> CharacterClassCharacter -> UNION
reducerStates[107095] = 1; // 'state 147' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[121047] = 1; // 'state 147' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[134999] = 1; // 'state 147' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[162903] = 1; // 'state 147' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9495] = 1; // 'state 148' -> CharacterClassCharacter -> CHARACTER
reducerStates[23447] = 1; // 'state 148' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[37399] = 1; // 'state 148' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79255] = 1; // 'state 148' -> CharacterClassCharacter -> DOT
reducerStates[93207] = 1; // 'state 148' -> CharacterClassCharacter -> UNION
reducerStates[107159] = 1; // 'state 148' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[121111] = 1; // 'state 148' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[135063] = 1; // 'state 148' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[162967] = 1; // 'state 148' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9623] = 1; // 'state 150' -> CharacterClassCharacter -> CHARACTER
reducerStates[23575] = 1; // 'state 150' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[37527] = 1; // 'state 150' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79383] = 1; // 'state 150' -> CharacterClassCharacter -> DOT
reducerStates[93335] = 1; // 'state 150' -> CharacterClassCharacter -> UNION
reducerStates[107287] = 1; // 'state 150' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[121239] = 1; // 'state 150' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[135191] = 1; // 'state 150' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[163095] = 1; // 'state 150' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9687] = 1; // 'state 151' -> CharacterClassCharacter -> CHARACTER
reducerStates[23639] = 1; // 'state 151' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[37591] = 1; // 'state 151' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79447] = 1; // 'state 151' -> CharacterClassCharacter -> DOT
reducerStates[93399] = 1; // 'state 151' -> CharacterClassCharacter -> UNION
reducerStates[107351] = 1; // 'state 151' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[121303] = 1; // 'state 151' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[135255] = 1; // 'state 151' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[163159] = 1; // 'state 151' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9751] = 1; // 'state 152' -> CharacterClassCharacter -> CHARACTER
reducerStates[23703] = 1; // 'state 152' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[37655] = 1; // 'state 152' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79511] = 1; // 'state 152' -> CharacterClassCharacter -> DOT
reducerStates[93463] = 1; // 'state 152' -> CharacterClassCharacter -> UNION
reducerStates[107415] = 1; // 'state 152' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[121367] = 1; // 'state 152' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[135319] = 1; // 'state 152' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[163223] = 1; // 'state 152' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9815] = 1; // 'state 153' -> CharacterClassCharacter -> CHARACTER
reducerStates[23767] = 1; // 'state 153' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[37719] = 1; // 'state 153' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79575] = 1; // 'state 153' -> CharacterClassCharacter -> DOT
reducerStates[93527] = 1; // 'state 153' -> CharacterClassCharacter -> UNION
reducerStates[107479] = 1; // 'state 153' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[121431] = 1; // 'state 153' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[135383] = 1; // 'state 153' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[163287] = 1; // 'state 153' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9879] = 1; // 'state 154' -> CharacterClassCharacter -> CHARACTER
reducerStates[23831] = 1; // 'state 154' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[37783] = 1; // 'state 154' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79639] = 1; // 'state 154' -> CharacterClassCharacter -> DOT
reducerStates[93591] = 1; // 'state 154' -> CharacterClassCharacter -> UNION
reducerStates[107543] = 1; // 'state 154' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[121495] = 1; // 'state 154' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[135447] = 1; // 'state 154' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[163351] = 1; // 'state 154' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9941] = 3; // 'state 155' -> CharacterClass -> CHARACTER
reducerStates[23893] = 3; // 'state 155' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[37845] = 3; // 'state 155' -> CharacterClass -> BACKSLASH
reducerStates[51797] = 3; // 'state 155' -> CharacterClass -> CARET
reducerStates[65749] = 3; // 'state 155' -> CharacterClass -> DASH
reducerStates[93653] = 3; // 'state 155' -> CharacterClass -> UNION
reducerStates[107605] = 3; // 'state 155' -> CharacterClass -> PAREN_OPEN
reducerStates[121557] = 3; // 'state 155' -> CharacterClass -> PAREN_CLOSE
reducerStates[135509] = 3; // 'state 155' -> CharacterClass -> QUANTIFIER
reducerStates[149461] = 3; // 'state 155' -> CharacterClass -> BRACKET_OPEN
reducerStates[177365] = 3; // 'state 155' -> CharacterClass -> @par-gen.EOF
reducerStates[10006] = 2; // 'state 156' -> CharacterClassCharacters -> CHARACTER
reducerStates[23958] = 2; // 'state 156' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[37910] = 2; // 'state 156' -> CharacterClassCharacters -> BACKSLASH
reducerStates[79766] = 2; // 'state 156' -> CharacterClassCharacters -> DOT
reducerStates[93718] = 2; // 'state 156' -> CharacterClassCharacters -> UNION
reducerStates[107670] = 2; // 'state 156' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[121622] = 2; // 'state 156' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[135574] = 2; // 'state 156' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[163478] = 2; // 'state 156' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[10071] = 1; // 'state 157' -> CharacterClassCharacter -> CHARACTER
reducerStates[24023] = 1; // 'state 157' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[37975] = 1; // 'state 157' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79831] = 1; // 'state 157' -> CharacterClassCharacter -> DOT
reducerStates[93783] = 1; // 'state 157' -> CharacterClassCharacter -> UNION
reducerStates[107735] = 1; // 'state 157' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[121687] = 1; // 'state 157' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[135639] = 1; // 'state 157' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[163543] = 1; // 'state 157' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10199] = 2; // 'state 159' -> CharacterClassCharacter -> CHARACTER
reducerStates[24151] = 2; // 'state 159' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[38103] = 2; // 'state 159' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79959] = 2; // 'state 159' -> CharacterClassCharacter -> DOT
reducerStates[93911] = 2; // 'state 159' -> CharacterClassCharacter -> UNION
reducerStates[107863] = 2; // 'state 159' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[121815] = 2; // 'state 159' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[135767] = 2; // 'state 159' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[163671] = 2; // 'state 159' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10263] = 2; // 'state 160' -> CharacterClassCharacter -> CHARACTER
reducerStates[24215] = 2; // 'state 160' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[38167] = 2; // 'state 160' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80023] = 2; // 'state 160' -> CharacterClassCharacter -> DOT
reducerStates[93975] = 2; // 'state 160' -> CharacterClassCharacter -> UNION
reducerStates[107927] = 2; // 'state 160' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[121879] = 2; // 'state 160' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[135831] = 2; // 'state 160' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[163735] = 2; // 'state 160' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10327] = 2; // 'state 161' -> CharacterClassCharacter -> CHARACTER
reducerStates[24279] = 2; // 'state 161' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[38231] = 2; // 'state 161' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80087] = 2; // 'state 161' -> CharacterClassCharacter -> DOT
reducerStates[94039] = 2; // 'state 161' -> CharacterClassCharacter -> UNION
reducerStates[107991] = 2; // 'state 161' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[121943] = 2; // 'state 161' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[135895] = 2; // 'state 161' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[163799] = 2; // 'state 161' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10391] = 2; // 'state 162' -> CharacterClassCharacter -> CHARACTER
reducerStates[24343] = 2; // 'state 162' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[38295] = 2; // 'state 162' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80151] = 2; // 'state 162' -> CharacterClassCharacter -> DOT
reducerStates[94103] = 2; // 'state 162' -> CharacterClassCharacter -> UNION
reducerStates[108055] = 2; // 'state 162' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[122007] = 2; // 'state 162' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[135959] = 2; // 'state 162' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[163863] = 2; // 'state 162' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10455] = 2; // 'state 163' -> CharacterClassCharacter -> CHARACTER
reducerStates[24407] = 2; // 'state 163' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[38359] = 2; // 'state 163' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80215] = 2; // 'state 163' -> CharacterClassCharacter -> DOT
reducerStates[94167] = 2; // 'state 163' -> CharacterClassCharacter -> UNION
reducerStates[108119] = 2; // 'state 163' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[122071] = 2; // 'state 163' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[136023] = 2; // 'state 163' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[163927] = 2; // 'state 163' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10519] = 2; // 'state 164' -> CharacterClassCharacter -> CHARACTER
reducerStates[24471] = 2; // 'state 164' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[38423] = 2; // 'state 164' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80279] = 2; // 'state 164' -> CharacterClassCharacter -> DOT
reducerStates[94231] = 2; // 'state 164' -> CharacterClassCharacter -> UNION
reducerStates[108183] = 2; // 'state 164' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[122135] = 2; // 'state 164' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[136087] = 2; // 'state 164' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[163991] = 2; // 'state 164' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10644] = 3; // 'state 166' -> Group -> CHARACTER
reducerStates[24596] = 3; // 'state 166' -> Group -> CONTROL_CHARACTER
reducerStates[38548] = 3; // 'state 166' -> Group -> BACKSLASH
reducerStates[52500] = 3; // 'state 166' -> Group -> CARET
reducerStates[66452] = 3; // 'state 166' -> Group -> DASH
reducerStates[94356] = 3; // 'state 166' -> Group -> UNION
reducerStates[108308] = 3; // 'state 166' -> Group -> PAREN_OPEN
reducerStates[122260] = 3; // 'state 166' -> Group -> PAREN_CLOSE
reducerStates[136212] = 3; // 'state 166' -> Group -> QUANTIFIER
reducerStates[150164] = 3; // 'state 166' -> Group -> BRACKET_OPEN
reducerStates[178068] = 3; // 'state 166' -> Group -> @par-gen.EOF
reducerStates[10708] = 3; // 'state 167' -> Group -> CHARACTER
reducerStates[24660] = 3; // 'state 167' -> Group -> CONTROL_CHARACTER
reducerStates[38612] = 3; // 'state 167' -> Group -> BACKSLASH
reducerStates[52564] = 3; // 'state 167' -> Group -> CARET
reducerStates[66516] = 3; // 'state 167' -> Group -> DASH
reducerStates[94420] = 3; // 'state 167' -> Group -> UNION
reducerStates[108372] = 3; // 'state 167' -> Group -> PAREN_OPEN
reducerStates[122324] = 3; // 'state 167' -> Group -> PAREN_CLOSE
reducerStates[136276] = 3; // 'state 167' -> Group -> QUANTIFIER
reducerStates[150228] = 3; // 'state 167' -> Group -> BRACKET_OPEN
reducerStates[178132] = 3; // 'state 167' -> Group -> @par-gen.EOF
reducerStates[10772] = 3; // 'state 168' -> Group -> CHARACTER
reducerStates[24724] = 3; // 'state 168' -> Group -> CONTROL_CHARACTER
reducerStates[38676] = 3; // 'state 168' -> Group -> BACKSLASH
reducerStates[52628] = 3; // 'state 168' -> Group -> CARET
reducerStates[66580] = 3; // 'state 168' -> Group -> DASH
reducerStates[94484] = 3; // 'state 168' -> Group -> UNION
reducerStates[108436] = 3; // 'state 168' -> Group -> PAREN_OPEN
reducerStates[122388] = 3; // 'state 168' -> Group -> PAREN_CLOSE
reducerStates[136340] = 3; // 'state 168' -> Group -> QUANTIFIER
reducerStates[150292] = 3; // 'state 168' -> Group -> BRACKET_OPEN
reducerStates[178196] = 3; // 'state 168' -> Group -> @par-gen.EOF
reducerStates[10837] = 3; // 'state 169' -> CharacterClass -> CHARACTER
reducerStates[24789] = 3; // 'state 169' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[38741] = 3; // 'state 169' -> CharacterClass -> BACKSLASH
reducerStates[52693] = 3; // 'state 169' -> CharacterClass -> CARET
reducerStates[66645] = 3; // 'state 169' -> CharacterClass -> DASH
reducerStates[94549] = 3; // 'state 169' -> CharacterClass -> UNION
reducerStates[108501] = 3; // 'state 169' -> CharacterClass -> PAREN_OPEN
reducerStates[122453] = 3; // 'state 169' -> CharacterClass -> PAREN_CLOSE
reducerStates[136405] = 3; // 'state 169' -> CharacterClass -> QUANTIFIER
reducerStates[150357] = 3; // 'state 169' -> CharacterClass -> BRACKET_OPEN
reducerStates[178261] = 3; // 'state 169' -> CharacterClass -> @par-gen.EOF
reducerStates[10902] = 2; // 'state 170' -> CharacterClassCharacters -> CHARACTER
reducerStates[24854] = 2; // 'state 170' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[38806] = 2; // 'state 170' -> CharacterClassCharacters -> BACKSLASH
reducerStates[80662] = 2; // 'state 170' -> CharacterClassCharacters -> DOT
reducerStates[94614] = 2; // 'state 170' -> CharacterClassCharacters -> UNION
reducerStates[108566] = 2; // 'state 170' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[122518] = 2; // 'state 170' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[136470] = 2; // 'state 170' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[164374] = 2; // 'state 170' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[11031] = 2; // 'state 172' -> CharacterClassCharacter -> CHARACTER
reducerStates[24983] = 2; // 'state 172' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[38935] = 2; // 'state 172' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80791] = 2; // 'state 172' -> CharacterClassCharacter -> DOT
reducerStates[94743] = 2; // 'state 172' -> CharacterClassCharacter -> UNION
reducerStates[108695] = 2; // 'state 172' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[122647] = 2; // 'state 172' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[136599] = 2; // 'state 172' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[164503] = 2; // 'state 172' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11095] = 2; // 'state 173' -> CharacterClassCharacter -> CHARACTER
reducerStates[25047] = 2; // 'state 173' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[38999] = 2; // 'state 173' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80855] = 2; // 'state 173' -> CharacterClassCharacter -> DOT
reducerStates[94807] = 2; // 'state 173' -> CharacterClassCharacter -> UNION
reducerStates[108759] = 2; // 'state 173' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[122711] = 2; // 'state 173' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[136663] = 2; // 'state 173' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[164567] = 2; // 'state 173' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11159] = 2; // 'state 174' -> CharacterClassCharacter -> CHARACTER
reducerStates[25111] = 2; // 'state 174' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[39063] = 2; // 'state 174' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80919] = 2; // 'state 174' -> CharacterClassCharacter -> DOT
reducerStates[94871] = 2; // 'state 174' -> CharacterClassCharacter -> UNION
reducerStates[108823] = 2; // 'state 174' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[122775] = 2; // 'state 174' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[136727] = 2; // 'state 174' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[164631] = 2; // 'state 174' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11223] = 2; // 'state 175' -> CharacterClassCharacter -> CHARACTER
reducerStates[25175] = 2; // 'state 175' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[39127] = 2; // 'state 175' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80983] = 2; // 'state 175' -> CharacterClassCharacter -> DOT
reducerStates[94935] = 2; // 'state 175' -> CharacterClassCharacter -> UNION
reducerStates[108887] = 2; // 'state 175' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[122839] = 2; // 'state 175' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[136791] = 2; // 'state 175' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[164695] = 2; // 'state 175' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11287] = 2; // 'state 176' -> CharacterClassCharacter -> CHARACTER
reducerStates[25239] = 2; // 'state 176' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[39191] = 2; // 'state 176' -> CharacterClassCharacter -> BACKSLASH
reducerStates[81047] = 2; // 'state 176' -> CharacterClassCharacter -> DOT
reducerStates[94999] = 2; // 'state 176' -> CharacterClassCharacter -> UNION
reducerStates[108951] = 2; // 'state 176' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[122903] = 2; // 'state 176' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[136855] = 2; // 'state 176' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[164759] = 2; // 'state 176' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11351] = 2; // 'state 177' -> CharacterClassCharacter -> CHARACTER
reducerStates[25303] = 2; // 'state 177' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[39255] = 2; // 'state 177' -> CharacterClassCharacter -> BACKSLASH
reducerStates[81111] = 2; // 'state 177' -> CharacterClassCharacter -> DOT
reducerStates[95063] = 2; // 'state 177' -> CharacterClassCharacter -> UNION
reducerStates[109015] = 2; // 'state 177' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[122967] = 2; // 'state 177' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[136919] = 2; // 'state 177' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[164823] = 2; // 'state 177' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11476] = 3; // 'state 179' -> Group -> CHARACTER
reducerStates[25428] = 3; // 'state 179' -> Group -> CONTROL_CHARACTER
reducerStates[39380] = 3; // 'state 179' -> Group -> BACKSLASH
reducerStates[53332] = 3; // 'state 179' -> Group -> CARET
reducerStates[67284] = 3; // 'state 179' -> Group -> DASH
reducerStates[95188] = 3; // 'state 179' -> Group -> UNION
reducerStates[109140] = 3; // 'state 179' -> Group -> PAREN_OPEN
reducerStates[123092] = 3; // 'state 179' -> Group -> PAREN_CLOSE
reducerStates[137044] = 3; // 'state 179' -> Group -> QUANTIFIER
reducerStates[150996] = 3; // 'state 179' -> Group -> BRACKET_OPEN
reducerStates[178900] = 3; // 'state 179' -> Group -> @par-gen.EOF
reducerStates[11540] = 3; // 'state 180' -> Group -> CHARACTER
reducerStates[25492] = 3; // 'state 180' -> Group -> CONTROL_CHARACTER
reducerStates[39444] = 3; // 'state 180' -> Group -> BACKSLASH
reducerStates[53396] = 3; // 'state 180' -> Group -> CARET
reducerStates[67348] = 3; // 'state 180' -> Group -> DASH
reducerStates[95252] = 3; // 'state 180' -> Group -> UNION
reducerStates[109204] = 3; // 'state 180' -> Group -> PAREN_OPEN
reducerStates[123156] = 3; // 'state 180' -> Group -> PAREN_CLOSE
reducerStates[137108] = 3; // 'state 180' -> Group -> QUANTIFIER
reducerStates[151060] = 3; // 'state 180' -> Group -> BRACKET_OPEN
reducerStates[178964] = 3; // 'state 180' -> Group -> @par-gen.EOF
reducerStates[11604] = 3; // 'state 181' -> Group -> CHARACTER
reducerStates[25556] = 3; // 'state 181' -> Group -> CONTROL_CHARACTER
reducerStates[39508] = 3; // 'state 181' -> Group -> BACKSLASH
reducerStates[53460] = 3; // 'state 181' -> Group -> CARET
reducerStates[67412] = 3; // 'state 181' -> Group -> DASH
reducerStates[95316] = 3; // 'state 181' -> Group -> UNION
reducerStates[109268] = 3; // 'state 181' -> Group -> PAREN_OPEN
reducerStates[123220] = 3; // 'state 181' -> Group -> PAREN_CLOSE
reducerStates[137172] = 3; // 'state 181' -> Group -> QUANTIFIER
reducerStates[151124] = 3; // 'state 181' -> Group -> BRACKET_OPEN
reducerStates[179028] = 3; // 'state 181' -> Group -> @par-gen.EOF
reducerStates[11669] = 3; // 'state 182' -> CharacterClass -> CHARACTER
reducerStates[25621] = 3; // 'state 182' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[39573] = 3; // 'state 182' -> CharacterClass -> BACKSLASH
reducerStates[53525] = 3; // 'state 182' -> CharacterClass -> CARET
reducerStates[67477] = 3; // 'state 182' -> CharacterClass -> DASH
reducerStates[95381] = 3; // 'state 182' -> CharacterClass -> UNION
reducerStates[109333] = 3; // 'state 182' -> CharacterClass -> PAREN_OPEN
reducerStates[123285] = 3; // 'state 182' -> CharacterClass -> PAREN_CLOSE
reducerStates[137237] = 3; // 'state 182' -> CharacterClass -> QUANTIFIER
reducerStates[151189] = 3; // 'state 182' -> CharacterClass -> BRACKET_OPEN
reducerStates[179093] = 3; // 'state 182' -> CharacterClass -> @par-gen.EOF
reducerStates[11734] = 2; // 'state 183' -> CharacterClassCharacters -> CHARACTER
reducerStates[25686] = 2; // 'state 183' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[39638] = 2; // 'state 183' -> CharacterClassCharacters -> BACKSLASH
reducerStates[81494] = 2; // 'state 183' -> CharacterClassCharacters -> DOT
reducerStates[95446] = 2; // 'state 183' -> CharacterClassCharacters -> UNION
reducerStates[109398] = 2; // 'state 183' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[123350] = 2; // 'state 183' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[137302] = 2; // 'state 183' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[165206] = 2; // 'state 183' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[11863] = 2; // 'state 185' -> CharacterClassCharacter -> CHARACTER
reducerStates[25815] = 2; // 'state 185' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[39767] = 2; // 'state 185' -> CharacterClassCharacter -> BACKSLASH
reducerStates[81623] = 2; // 'state 185' -> CharacterClassCharacter -> DOT
reducerStates[95575] = 2; // 'state 185' -> CharacterClassCharacter -> UNION
reducerStates[109527] = 2; // 'state 185' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[123479] = 2; // 'state 185' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[137431] = 2; // 'state 185' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[165335] = 2; // 'state 185' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11927] = 2; // 'state 186' -> CharacterClassCharacter -> CHARACTER
reducerStates[25879] = 2; // 'state 186' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[39831] = 2; // 'state 186' -> CharacterClassCharacter -> BACKSLASH
reducerStates[81687] = 2; // 'state 186' -> CharacterClassCharacter -> DOT
reducerStates[95639] = 2; // 'state 186' -> CharacterClassCharacter -> UNION
reducerStates[109591] = 2; // 'state 186' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[123543] = 2; // 'state 186' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[137495] = 2; // 'state 186' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[165399] = 2; // 'state 186' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11991] = 2; // 'state 187' -> CharacterClassCharacter -> CHARACTER
reducerStates[25943] = 2; // 'state 187' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[39895] = 2; // 'state 187' -> CharacterClassCharacter -> BACKSLASH
reducerStates[81751] = 2; // 'state 187' -> CharacterClassCharacter -> DOT
reducerStates[95703] = 2; // 'state 187' -> CharacterClassCharacter -> UNION
reducerStates[109655] = 2; // 'state 187' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[123607] = 2; // 'state 187' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[137559] = 2; // 'state 187' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[165463] = 2; // 'state 187' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12055] = 2; // 'state 188' -> CharacterClassCharacter -> CHARACTER
reducerStates[26007] = 2; // 'state 188' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[39959] = 2; // 'state 188' -> CharacterClassCharacter -> BACKSLASH
reducerStates[81815] = 2; // 'state 188' -> CharacterClassCharacter -> DOT
reducerStates[95767] = 2; // 'state 188' -> CharacterClassCharacter -> UNION
reducerStates[109719] = 2; // 'state 188' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[123671] = 2; // 'state 188' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[137623] = 2; // 'state 188' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[165527] = 2; // 'state 188' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12119] = 2; // 'state 189' -> CharacterClassCharacter -> CHARACTER
reducerStates[26071] = 2; // 'state 189' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[40023] = 2; // 'state 189' -> CharacterClassCharacter -> BACKSLASH
reducerStates[81879] = 2; // 'state 189' -> CharacterClassCharacter -> DOT
reducerStates[95831] = 2; // 'state 189' -> CharacterClassCharacter -> UNION
reducerStates[109783] = 2; // 'state 189' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[123735] = 2; // 'state 189' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[137687] = 2; // 'state 189' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[165591] = 2; // 'state 189' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12183] = 2; // 'state 190' -> CharacterClassCharacter -> CHARACTER
reducerStates[26135] = 2; // 'state 190' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[40087] = 2; // 'state 190' -> CharacterClassCharacter -> BACKSLASH
reducerStates[81943] = 2; // 'state 190' -> CharacterClassCharacter -> DOT
reducerStates[95895] = 2; // 'state 190' -> CharacterClassCharacter -> UNION
reducerStates[109847] = 2; // 'state 190' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[123799] = 2; // 'state 190' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[137751] = 2; // 'state 190' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[165655] = 2; // 'state 190' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12309] = 3; // 'state 192' -> CharacterClass -> CHARACTER
reducerStates[26261] = 3; // 'state 192' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[40213] = 3; // 'state 192' -> CharacterClass -> BACKSLASH
reducerStates[54165] = 3; // 'state 192' -> CharacterClass -> CARET
reducerStates[68117] = 3; // 'state 192' -> CharacterClass -> DASH
reducerStates[96021] = 3; // 'state 192' -> CharacterClass -> UNION
reducerStates[109973] = 3; // 'state 192' -> CharacterClass -> PAREN_OPEN
reducerStates[123925] = 3; // 'state 192' -> CharacterClass -> PAREN_CLOSE
reducerStates[137877] = 3; // 'state 192' -> CharacterClass -> QUANTIFIER
reducerStates[151829] = 3; // 'state 192' -> CharacterClass -> BRACKET_OPEN
reducerStates[179733] = 3; // 'state 192' -> CharacterClass -> @par-gen.EOF
reducerStates[12374] = 2; // 'state 193' -> CharacterClassCharacters -> CHARACTER
reducerStates[26326] = 2; // 'state 193' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[40278] = 2; // 'state 193' -> CharacterClassCharacters -> BACKSLASH
reducerStates[82134] = 2; // 'state 193' -> CharacterClassCharacters -> DOT
reducerStates[96086] = 2; // 'state 193' -> CharacterClassCharacters -> UNION
reducerStates[110038] = 2; // 'state 193' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[123990] = 2; // 'state 193' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[137942] = 2; // 'state 193' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[165846] = 2; // 'state 193' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[12503] = 2; // 'state 195' -> CharacterClassCharacter -> CHARACTER
reducerStates[26455] = 2; // 'state 195' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[40407] = 2; // 'state 195' -> CharacterClassCharacter -> BACKSLASH
reducerStates[82263] = 2; // 'state 195' -> CharacterClassCharacter -> DOT
reducerStates[96215] = 2; // 'state 195' -> CharacterClassCharacter -> UNION
reducerStates[110167] = 2; // 'state 195' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[124119] = 2; // 'state 195' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[138071] = 2; // 'state 195' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[165975] = 2; // 'state 195' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12567] = 2; // 'state 196' -> CharacterClassCharacter -> CHARACTER
reducerStates[26519] = 2; // 'state 196' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[40471] = 2; // 'state 196' -> CharacterClassCharacter -> BACKSLASH
reducerStates[82327] = 2; // 'state 196' -> CharacterClassCharacter -> DOT
reducerStates[96279] = 2; // 'state 196' -> CharacterClassCharacter -> UNION
reducerStates[110231] = 2; // 'state 196' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[124183] = 2; // 'state 196' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[138135] = 2; // 'state 196' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[166039] = 2; // 'state 196' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12631] = 2; // 'state 197' -> CharacterClassCharacter -> CHARACTER
reducerStates[26583] = 2; // 'state 197' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[40535] = 2; // 'state 197' -> CharacterClassCharacter -> BACKSLASH
reducerStates[82391] = 2; // 'state 197' -> CharacterClassCharacter -> DOT
reducerStates[96343] = 2; // 'state 197' -> CharacterClassCharacter -> UNION
reducerStates[110295] = 2; // 'state 197' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[124247] = 2; // 'state 197' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[138199] = 2; // 'state 197' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[166103] = 2; // 'state 197' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12695] = 2; // 'state 198' -> CharacterClassCharacter -> CHARACTER
reducerStates[26647] = 2; // 'state 198' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[40599] = 2; // 'state 198' -> CharacterClassCharacter -> BACKSLASH
reducerStates[82455] = 2; // 'state 198' -> CharacterClassCharacter -> DOT
reducerStates[96407] = 2; // 'state 198' -> CharacterClassCharacter -> UNION
reducerStates[110359] = 2; // 'state 198' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[124311] = 2; // 'state 198' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[138263] = 2; // 'state 198' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[166167] = 2; // 'state 198' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12759] = 2; // 'state 199' -> CharacterClassCharacter -> CHARACTER
reducerStates[26711] = 2; // 'state 199' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[40663] = 2; // 'state 199' -> CharacterClassCharacter -> BACKSLASH
reducerStates[82519] = 2; // 'state 199' -> CharacterClassCharacter -> DOT
reducerStates[96471] = 2; // 'state 199' -> CharacterClassCharacter -> UNION
reducerStates[110423] = 2; // 'state 199' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[124375] = 2; // 'state 199' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[138327] = 2; // 'state 199' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[166231] = 2; // 'state 199' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12823] = 2; // 'state 200' -> CharacterClassCharacter -> CHARACTER
reducerStates[26775] = 2; // 'state 200' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[40727] = 2; // 'state 200' -> CharacterClassCharacter -> BACKSLASH
reducerStates[82583] = 2; // 'state 200' -> CharacterClassCharacter -> DOT
reducerStates[96535] = 2; // 'state 200' -> CharacterClassCharacter -> UNION
reducerStates[110487] = 2; // 'state 200' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[124439] = 2; // 'state 200' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[138391] = 2; // 'state 200' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[166295] = 2; // 'state 200' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[13015] = 2; // 'state 203' -> CharacterClassCharacter -> CHARACTER
reducerStates[26967] = 2; // 'state 203' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[40919] = 2; // 'state 203' -> CharacterClassCharacter -> BACKSLASH
reducerStates[82775] = 2; // 'state 203' -> CharacterClassCharacter -> DOT
reducerStates[96727] = 2; // 'state 203' -> CharacterClassCharacter -> UNION
reducerStates[110679] = 2; // 'state 203' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[124631] = 2; // 'state 203' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[138583] = 2; // 'state 203' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[166487] = 2; // 'state 203' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[13079] = 2; // 'state 204' -> CharacterClassCharacter -> CHARACTER
reducerStates[27031] = 2; // 'state 204' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[40983] = 2; // 'state 204' -> CharacterClassCharacter -> BACKSLASH
reducerStates[82839] = 2; // 'state 204' -> CharacterClassCharacter -> DOT
reducerStates[96791] = 2; // 'state 204' -> CharacterClassCharacter -> UNION
reducerStates[110743] = 2; // 'state 204' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[124695] = 2; // 'state 204' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[138647] = 2; // 'state 204' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[166551] = 2; // 'state 204' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[13143] = 2; // 'state 205' -> CharacterClassCharacter -> CHARACTER
reducerStates[27095] = 2; // 'state 205' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[41047] = 2; // 'state 205' -> CharacterClassCharacter -> BACKSLASH
reducerStates[82903] = 2; // 'state 205' -> CharacterClassCharacter -> DOT
reducerStates[96855] = 2; // 'state 205' -> CharacterClassCharacter -> UNION
reducerStates[110807] = 2; // 'state 205' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[124759] = 2; // 'state 205' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[138711] = 2; // 'state 205' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[166615] = 2; // 'state 205' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[13207] = 2; // 'state 206' -> CharacterClassCharacter -> CHARACTER
reducerStates[27159] = 2; // 'state 206' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[41111] = 2; // 'state 206' -> CharacterClassCharacter -> BACKSLASH
reducerStates[82967] = 2; // 'state 206' -> CharacterClassCharacter -> DOT
reducerStates[96919] = 2; // 'state 206' -> CharacterClassCharacter -> UNION
reducerStates[110871] = 2; // 'state 206' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[124823] = 2; // 'state 206' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[138775] = 2; // 'state 206' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[166679] = 2; // 'state 206' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[13271] = 2; // 'state 207' -> CharacterClassCharacter -> CHARACTER
reducerStates[27223] = 2; // 'state 207' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[41175] = 2; // 'state 207' -> CharacterClassCharacter -> BACKSLASH
reducerStates[83031] = 2; // 'state 207' -> CharacterClassCharacter -> DOT
reducerStates[96983] = 2; // 'state 207' -> CharacterClassCharacter -> UNION
reducerStates[110935] = 2; // 'state 207' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[124887] = 2; // 'state 207' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[138839] = 2; // 'state 207' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[166743] = 2; // 'state 207' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[13335] = 2; // 'state 208' -> CharacterClassCharacter -> CHARACTER
reducerStates[27287] = 2; // 'state 208' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[41239] = 2; // 'state 208' -> CharacterClassCharacter -> BACKSLASH
reducerStates[83095] = 2; // 'state 208' -> CharacterClassCharacter -> DOT
reducerStates[97047] = 2; // 'state 208' -> CharacterClassCharacter -> UNION
reducerStates[110999] = 2; // 'state 208' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[124951] = 2; // 'state 208' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[138903] = 2; // 'state 208' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[166807] = 2; // 'state 208' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[13400] = 3; // 'state 209' -> CharacterClassRange -> CHARACTER
reducerStates[27352] = 3; // 'state 209' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[41304] = 3; // 'state 209' -> CharacterClassRange -> BACKSLASH
reducerStates[83160] = 3; // 'state 209' -> CharacterClassRange -> DOT
reducerStates[97112] = 3; // 'state 209' -> CharacterClassRange -> UNION
reducerStates[111064] = 3; // 'state 209' -> CharacterClassRange -> PAREN_OPEN
reducerStates[125016] = 3; // 'state 209' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[138968] = 3; // 'state 209' -> CharacterClassRange -> QUANTIFIER
reducerStates[166872] = 3; // 'state 209' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[13461] = 4; // 'state 210' -> CharacterClass -> CHARACTER
reducerStates[27413] = 4; // 'state 210' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[41365] = 4; // 'state 210' -> CharacterClass -> BACKSLASH
reducerStates[55317] = 4; // 'state 210' -> CharacterClass -> CARET
reducerStates[69269] = 4; // 'state 210' -> CharacterClass -> DASH
reducerStates[97173] = 4; // 'state 210' -> CharacterClass -> UNION
reducerStates[111125] = 4; // 'state 210' -> CharacterClass -> PAREN_OPEN
reducerStates[125077] = 4; // 'state 210' -> CharacterClass -> PAREN_CLOSE
reducerStates[139029] = 4; // 'state 210' -> CharacterClass -> QUANTIFIER
reducerStates[152981] = 4; // 'state 210' -> CharacterClass -> BRACKET_OPEN
reducerStates[180885] = 4; // 'state 210' -> CharacterClass -> @par-gen.EOF
reducerStates[13528] = 3; // 'state 211' -> CharacterClassRange -> CHARACTER
reducerStates[27480] = 3; // 'state 211' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[41432] = 3; // 'state 211' -> CharacterClassRange -> BACKSLASH
reducerStates[83288] = 3; // 'state 211' -> CharacterClassRange -> DOT
reducerStates[97240] = 3; // 'state 211' -> CharacterClassRange -> UNION
reducerStates[111192] = 3; // 'state 211' -> CharacterClassRange -> PAREN_OPEN
reducerStates[125144] = 3; // 'state 211' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[139096] = 3; // 'state 211' -> CharacterClassRange -> QUANTIFIER
reducerStates[167000] = 3; // 'state 211' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[13589] = 4; // 'state 212' -> CharacterClass -> CHARACTER
reducerStates[27541] = 4; // 'state 212' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[41493] = 4; // 'state 212' -> CharacterClass -> BACKSLASH
reducerStates[55445] = 4; // 'state 212' -> CharacterClass -> CARET
reducerStates[69397] = 4; // 'state 212' -> CharacterClass -> DASH
reducerStates[97301] = 4; // 'state 212' -> CharacterClass -> UNION
reducerStates[111253] = 4; // 'state 212' -> CharacterClass -> PAREN_OPEN
reducerStates[125205] = 4; // 'state 212' -> CharacterClass -> PAREN_CLOSE
reducerStates[139157] = 4; // 'state 212' -> CharacterClass -> QUANTIFIER
reducerStates[153109] = 4; // 'state 212' -> CharacterClass -> BRACKET_OPEN
reducerStates[181013] = 4; // 'state 212' -> CharacterClass -> @par-gen.EOF
reducerStates[13656] = 3; // 'state 213' -> CharacterClassRange -> CHARACTER
reducerStates[27608] = 3; // 'state 213' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[41560] = 3; // 'state 213' -> CharacterClassRange -> BACKSLASH
reducerStates[83416] = 3; // 'state 213' -> CharacterClassRange -> DOT
reducerStates[97368] = 3; // 'state 213' -> CharacterClassRange -> UNION
reducerStates[111320] = 3; // 'state 213' -> CharacterClassRange -> PAREN_OPEN
reducerStates[125272] = 3; // 'state 213' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[139224] = 3; // 'state 213' -> CharacterClassRange -> QUANTIFIER
reducerStates[167128] = 3; // 'state 213' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[13717] = 4; // 'state 214' -> CharacterClass -> CHARACTER
reducerStates[27669] = 4; // 'state 214' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[41621] = 4; // 'state 214' -> CharacterClass -> BACKSLASH
reducerStates[55573] = 4; // 'state 214' -> CharacterClass -> CARET
reducerStates[69525] = 4; // 'state 214' -> CharacterClass -> DASH
reducerStates[97429] = 4; // 'state 214' -> CharacterClass -> UNION
reducerStates[111381] = 4; // 'state 214' -> CharacterClass -> PAREN_OPEN
reducerStates[125333] = 4; // 'state 214' -> CharacterClass -> PAREN_CLOSE
reducerStates[139285] = 4; // 'state 214' -> CharacterClass -> QUANTIFIER
reducerStates[153237] = 4; // 'state 214' -> CharacterClass -> BRACKET_OPEN
reducerStates[181141] = 4; // 'state 214' -> CharacterClass -> @par-gen.EOF
reducerStates[13784] = 3; // 'state 215' -> CharacterClassRange -> CHARACTER
reducerStates[27736] = 3; // 'state 215' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[41688] = 3; // 'state 215' -> CharacterClassRange -> BACKSLASH
reducerStates[83544] = 3; // 'state 215' -> CharacterClassRange -> DOT
reducerStates[97496] = 3; // 'state 215' -> CharacterClassRange -> UNION
reducerStates[111448] = 3; // 'state 215' -> CharacterClassRange -> PAREN_OPEN
reducerStates[125400] = 3; // 'state 215' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[139352] = 3; // 'state 215' -> CharacterClassRange -> QUANTIFIER
reducerStates[167256] = 3; // 'state 215' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[13845] = 4; // 'state 216' -> CharacterClass -> CHARACTER
reducerStates[27797] = 4; // 'state 216' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[41749] = 4; // 'state 216' -> CharacterClass -> BACKSLASH
reducerStates[55701] = 4; // 'state 216' -> CharacterClass -> CARET
reducerStates[69653] = 4; // 'state 216' -> CharacterClass -> DASH
reducerStates[97557] = 4; // 'state 216' -> CharacterClass -> UNION
reducerStates[111509] = 4; // 'state 216' -> CharacterClass -> PAREN_OPEN
reducerStates[125461] = 4; // 'state 216' -> CharacterClass -> PAREN_CLOSE
reducerStates[139413] = 4; // 'state 216' -> CharacterClass -> QUANTIFIER
reducerStates[153365] = 4; // 'state 216' -> CharacterClass -> BRACKET_OPEN
reducerStates[181269] = 4; // 'state 216' -> CharacterClass -> @par-gen.EOF
reducerStates[13912] = 3; // 'state 217' -> CharacterClassRange -> CHARACTER
reducerStates[27864] = 3; // 'state 217' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[41816] = 3; // 'state 217' -> CharacterClassRange -> BACKSLASH
reducerStates[83672] = 3; // 'state 217' -> CharacterClassRange -> DOT
reducerStates[97624] = 3; // 'state 217' -> CharacterClassRange -> UNION
reducerStates[111576] = 3; // 'state 217' -> CharacterClassRange -> PAREN_OPEN
reducerStates[125528] = 3; // 'state 217' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[139480] = 3; // 'state 217' -> CharacterClassRange -> QUANTIFIER
reducerStates[167384] = 3; // 'state 217' -> CharacterClassRange -> BRACKET_CLOSE

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
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 170'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 171'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 172'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 173'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 174'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 175'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 176'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 177'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 178'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 179'
  {
    op: 0, // shift
    state: 72, // 'state 72'
    symbol: undefined,
  },
  // 'action 180'
  {
    op: 0, // shift
    state: 73, // 'state 73'
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
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 183'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 184'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 185'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 186'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
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
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 192'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 193'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 194'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 195'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 196'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 197'
  {
    op: 0, // shift
    state: 74, // 'state 74'
    symbol: undefined,
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
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
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
    op: 0, // shift
    state: 75, // 'state 75'
    symbol: undefined,
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
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
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
    op: 0, // shift
    state: 76, // 'state 76'
    symbol: undefined,
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
    symbol: 19, // Atom
  },
  // 'action 225'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 226'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 227'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 228'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 229'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
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
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 269'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 270'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 271'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 272'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 273'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 274'
  {
    op: 0, // shift
    state: 77, // 'state 77'
    symbol: undefined,
  },
  // 'action 275'
  {
    op: 0, // shift
    state: 78, // 'state 78'
    symbol: undefined,
  },
  // 'action 276'
  {
    op: 0, // shift
    state: 79, // 'state 79'
    symbol: undefined,
  },
  // 'action 277'
  {
    op: 0, // shift
    state: 80, // 'state 80'
    symbol: undefined,
  },
  // 'action 278'
  {
    op: 0, // shift
    state: 81, // 'state 81'
    symbol: undefined,
  },
  // 'action 279'
  {
    op: 0, // shift
    state: 82, // 'state 82'
    symbol: undefined,
  },
  // 'action 280'
  {
    op: 0, // shift
    state: 83, // 'state 83'
    symbol: undefined,
  },
  // 'action 281'
  {
    op: 0, // shift
    state: 84, // 'state 84'
    symbol: undefined,
  },
  // 'action 282'
  {
    op: 0, // shift
    state: 85, // 'state 85'
    symbol: undefined,
  },
  // 'action 283'
  {
    op: 0, // shift
    state: 86, // 'state 86'
    symbol: undefined,
  },
  // 'action 284'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 285'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 286'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 287'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 288'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 289'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 290'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 291'
  {
    op: 0, // shift
    state: 87, // 'state 87'
    symbol: undefined,
  },
  // 'action 292'
  {
    op: 0, // shift
    state: 88, // 'state 88'
    symbol: undefined,
  },
  // 'action 293'
  {
    op: 0, // shift
    state: 89, // 'state 89'
    symbol: undefined,
  },
  // 'action 294'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 295'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 296'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 297'
  {
    op: 0, // shift
    state: 90, // 'state 90'
    symbol: undefined,
  },
  // 'action 298'
  {
    op: 0, // shift
    state: 91, // 'state 91'
    symbol: undefined,
  },
  // 'action 299'
  {
    op: 0, // shift
    state: 92, // 'state 92'
    symbol: undefined,
  },
  // 'action 300'
  {
    op: 0, // shift
    state: 93, // 'state 93'
    symbol: undefined,
  },
  // 'action 301'
  {
    op: 0, // shift
    state: 94, // 'state 94'
    symbol: undefined,
  },
  // 'action 302'
  {
    op: 0, // shift
    state: 95, // 'state 95'
    symbol: undefined,
  },
  // 'action 303'
  {
    op: 0, // shift
    state: 96, // 'state 96'
    symbol: undefined,
  },
  // 'action 304'
  {
    op: 0, // shift
    state: 97, // 'state 97'
    symbol: undefined,
  },
  // 'action 305'
  {
    op: 0, // shift
    state: 98, // 'state 98'
    symbol: undefined,
  },
  // 'action 306'
  {
    op: 0, // shift
    state: 99, // 'state 99'
    symbol: undefined,
  },
  // 'action 307'
  {
    op: 0, // shift
    state: 100, // 'state 100'
    symbol: undefined,
  },
  // 'action 308'
  {
    op: 0, // shift
    state: 101, // 'state 101'
    symbol: undefined,
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
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 314'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 315'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 316'
  {
    op: 0, // shift
    state: 102, // 'state 102'
    symbol: undefined,
  },
  // 'action 317'
  {
    op: 0, // shift
    state: 103, // 'state 103'
    symbol: undefined,
  },
  // 'action 318'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 319'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 320'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 321'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 322'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 323'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 324'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 325'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 326'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 327'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 328'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 329'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 330'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 331'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 332'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 333'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 334'
  {
    op: 0, // shift
    state: 104, // 'state 104'
    symbol: undefined,
  },
  // 'action 335'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 336'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
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
    op: 0, // shift
    state: 105, // 'state 105'
    symbol: undefined,
  },
  // 'action 346'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 347'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
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
    op: 0, // shift
    state: 106, // 'state 106'
    symbol: undefined,
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
    symbol: 19, // Atom
  },
  // 'action 359'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 360'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 361'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 362'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 363'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 364'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 365'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 366'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
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
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 403'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 404'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 405'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 406'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 407'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 408'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 409'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 410'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 411'
  {
    op: 0, // shift
    state: 107, // 'state 107'
    symbol: undefined,
  },
  // 'action 412'
  {
    op: 0, // shift
    state: 108, // 'state 108'
    symbol: undefined,
  },
  // 'action 413'
  {
    op: 0, // shift
    state: 109, // 'state 109'
    symbol: undefined,
  },
  // 'action 414'
  {
    op: 0, // shift
    state: 110, // 'state 110'
    symbol: undefined,
  },
  // 'action 415'
  {
    op: 0, // shift
    state: 111, // 'state 111'
    symbol: undefined,
  },
  // 'action 416'
  {
    op: 0, // shift
    state: 112, // 'state 112'
    symbol: undefined,
  },
  // 'action 417'
  {
    op: 0, // shift
    state: 113, // 'state 113'
    symbol: undefined,
  },
  // 'action 418'
  {
    op: 0, // shift
    state: 114, // 'state 114'
    symbol: undefined,
  },
  // 'action 419'
  {
    op: 0, // shift
    state: 115, // 'state 115'
    symbol: undefined,
  },
  // 'action 420'
  {
    op: 0, // shift
    state: 116, // 'state 116'
    symbol: undefined,
  },
  // 'action 421'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 422'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 423'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 424'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 425'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 426'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 427'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 428'
  {
    op: 0, // shift
    state: 117, // 'state 117'
    symbol: undefined,
  },
  // 'action 429'
  {
    op: 0, // shift
    state: 118, // 'state 118'
    symbol: undefined,
  },
  // 'action 430'
  {
    op: 0, // shift
    state: 119, // 'state 119'
    symbol: undefined,
  },
  // 'action 431'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 432'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 433'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 434'
  {
    op: 0, // shift
    state: 120, // 'state 120'
    symbol: undefined,
  },
  // 'action 435'
  {
    op: 0, // shift
    state: 121, // 'state 121'
    symbol: undefined,
  },
  // 'action 436'
  {
    op: 0, // shift
    state: 122, // 'state 122'
    symbol: undefined,
  },
  // 'action 437'
  {
    op: 0, // shift
    state: 123, // 'state 123'
    symbol: undefined,
  },
  // 'action 438'
  {
    op: 0, // shift
    state: 124, // 'state 124'
    symbol: undefined,
  },
  // 'action 439'
  {
    op: 0, // shift
    state: 125, // 'state 125'
    symbol: undefined,
  },
  // 'action 440'
  {
    op: 0, // shift
    state: 126, // 'state 126'
    symbol: undefined,
  },
  // 'action 441'
  {
    op: 0, // shift
    state: 127, // 'state 127'
    symbol: undefined,
  },
  // 'action 442'
  {
    op: 0, // shift
    state: 128, // 'state 128'
    symbol: undefined,
  },
  // 'action 443'
  {
    op: 0, // shift
    state: 129, // 'state 129'
    symbol: undefined,
  },
  // 'action 444'
  {
    op: 0, // shift
    state: 130, // 'state 130'
    symbol: undefined,
  },
  // 'action 445'
  {
    op: 0, // shift
    state: 131, // 'state 131'
    symbol: undefined,
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
    symbol: 19, // Atom
  },
  // 'action 468'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 469'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 470'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 471'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 472'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 473'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 474'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 475'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
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
    symbol: 25, // Character
  },
  // 'action 479'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 480'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 481'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 482'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 483'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 484'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 485'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 486'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
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
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 578'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 579'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 580'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 581'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 582'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 583'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 584'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 585'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 586'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 587'
  {
    op: 0, // shift
    state: 132, // 'state 132'
    symbol: undefined,
  },
  // 'action 588'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 589'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 590'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 591'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 592'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 593'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 594'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 595'
  {
    op: 0, // shift
    state: 133, // 'state 133'
    symbol: undefined,
  },
  // 'action 596'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 597'
  {
    op: 0, // shift
    state: 25, // 'state 25'
    symbol: undefined,
  },
  // 'action 598'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 599'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 600'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 601'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 602'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 603'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 604'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 605'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 606'
  {
    op: 0, // shift
    state: 34, // 'state 34'
    symbol: undefined,
  },
  // 'action 607'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 608'
  {
    op: 0, // shift
    state: 134, // 'state 134'
    symbol: undefined,
  },
  // 'action 609'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 610'
  {
    op: 0, // shift
    state: 37, // 'state 37'
    symbol: undefined,
  },
  // 'action 611'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 612'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 613'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 614'
  {
    op: 0, // shift
    state: 135, // 'state 135'
    symbol: undefined,
  },
  // 'action 615'
  {
    op: 0, // shift
    state: 136, // 'state 136'
    symbol: undefined,
  },
  // 'action 616'
  {
    op: 0, // shift
    state: 137, // 'state 137'
    symbol: undefined,
  },
  // 'action 617'
  {
    op: 0, // shift
    state: 138, // 'state 138'
    symbol: undefined,
  },
  // 'action 618'
  {
    op: 0, // shift
    state: 139, // 'state 139'
    symbol: undefined,
  },
  // 'action 619'
  {
    op: 0, // shift
    state: 140, // 'state 140'
    symbol: undefined,
  },
  // 'action 620'
  {
    op: 0, // shift
    state: 141, // 'state 141'
    symbol: undefined,
  },
  // 'action 621'
  {
    op: 0, // shift
    state: 142, // 'state 142'
    symbol: undefined,
  },
  // 'action 622'
  {
    op: 0, // shift
    state: 143, // 'state 143'
    symbol: undefined,
  },
  // 'action 623'
  {
    op: 0, // shift
    state: 144, // 'state 144'
    symbol: undefined,
  },
  // 'action 624'
  {
    op: 0, // shift
    state: 145, // 'state 145'
    symbol: undefined,
  },
  // 'action 625'
  {
    op: 0, // shift
    state: 146, // 'state 146'
    symbol: undefined,
  },
  // 'action 626'
  {
    op: 0, // shift
    state: 147, // 'state 147'
    symbol: undefined,
  },
  // 'action 627'
  {
    op: 0, // shift
    state: 148, // 'state 148'
    symbol: undefined,
  },
  // 'action 628'
  {
    op: 0, // shift
    state: 149, // 'state 149'
    symbol: undefined,
  },
  // 'action 629'
  {
    op: 0, // shift
    state: 150, // 'state 150'
    symbol: undefined,
  },
  // 'action 630'
  {
    op: 0, // shift
    state: 151, // 'state 151'
    symbol: undefined,
  },
  // 'action 631'
  {
    op: 0, // shift
    state: 152, // 'state 152'
    symbol: undefined,
  },
  // 'action 632'
  {
    op: 0, // shift
    state: 153, // 'state 153'
    symbol: undefined,
  },
  // 'action 633'
  {
    op: 0, // shift
    state: 154, // 'state 154'
    symbol: undefined,
  },
  // 'action 634'
  {
    op: 0, // shift
    state: 155, // 'state 155'
    symbol: undefined,
  },
  // 'action 635'
  {
    op: 0, // shift
    state: 156, // 'state 156'
    symbol: undefined,
  },
  // 'action 636'
  {
    op: 0, // shift
    state: 157, // 'state 157'
    symbol: undefined,
  },
  // 'action 637'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 638'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 639'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 640'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 641'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 642'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 643'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 644'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 645'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 646'
  {
    op: 0, // shift
    state: 158, // 'state 158'
    symbol: undefined,
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
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 657'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 658'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 659'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 660'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
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
    op: 0, // shift
    state: 159, // 'state 159'
    symbol: undefined,
  },
  // 'action 666'
  {
    op: 0, // shift
    state: 160, // 'state 160'
    symbol: undefined,
  },
  // 'action 667'
  {
    op: 0, // shift
    state: 161, // 'state 161'
    symbol: undefined,
  },
  // 'action 668'
  {
    op: 0, // shift
    state: 162, // 'state 162'
    symbol: undefined,
  },
  // 'action 669'
  {
    op: 0, // shift
    state: 163, // 'state 163'
    symbol: undefined,
  },
  // 'action 670'
  {
    op: 0, // shift
    state: 164, // 'state 164'
    symbol: undefined,
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
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 716'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 717'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 718'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 719'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 720'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 721'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 722'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 723'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 724'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 725'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 726'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 727'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 728'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 729'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 730'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 731'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 732'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 733'
  {
    op: 0, // shift
    state: 165, // 'state 165'
    symbol: undefined,
  },
  // 'action 734'
  {
    op: 0, // shift
    state: 68, // 'state 68'
    symbol: undefined,
  },
  // 'action 735'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 736'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 737'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 738'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 739'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 740'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 741'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 742'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 743'
  {
    op: 0, // shift
    state: 25, // 'state 25'
    symbol: undefined,
  },
  // 'action 744'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 745'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 746'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 747'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 748'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 749'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 750'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 751'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 752'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 753'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 754'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 755'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 756'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 757'
  {
    op: 0, // shift
    state: 37, // 'state 37'
    symbol: undefined,
  },
  // 'action 758'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 759'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 760'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 761'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 762'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 763'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 764'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 765'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 766'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 767'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 768'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 769'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 770'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 771'
  {
    op: 0, // shift
    state: 25, // 'state 25'
    symbol: undefined,
  },
  // 'action 772'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 773'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 774'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 775'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 776'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 777'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 778'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 779'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 780'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 781'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 782'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 783'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 784'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 785'
  {
    op: 0, // shift
    state: 37, // 'state 37'
    symbol: undefined,
  },
  // 'action 786'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 787'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 788'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 789'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 790'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 791'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
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
    symbol: 19, // Atom
  },
  // 'action 813'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 814'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 815'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 816'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 817'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 818'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 819'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 820'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 821'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
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
    symbol: 25, // Character
  },
  // 'action 824'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 825'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 826'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 827'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 828'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 829'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 830'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 831'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 832'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
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
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 923'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 924'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 925'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 926'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 927'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 928'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 929'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 930'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 931'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 932'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 933'
  {
    op: 0, // shift
    state: 166, // 'state 166'
    symbol: undefined,
  },
  // 'action 934'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 935'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 936'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 937'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 938'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 939'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 940'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 941'
  {
    op: 0, // shift
    state: 167, // 'state 167'
    symbol: undefined,
  },
  // 'action 942'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 943'
  {
    op: 0, // shift
    state: 25, // 'state 25'
    symbol: undefined,
  },
  // 'action 944'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 945'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 946'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 947'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 948'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 949'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 950'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 951'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 952'
  {
    op: 0, // shift
    state: 34, // 'state 34'
    symbol: undefined,
  },
  // 'action 953'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 954'
  {
    op: 0, // shift
    state: 168, // 'state 168'
    symbol: undefined,
  },
  // 'action 955'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 956'
  {
    op: 0, // shift
    state: 37, // 'state 37'
    symbol: undefined,
  },
  // 'action 957'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 958'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 959'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 960'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 961'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 962'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 963'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 964'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 965'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 966'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 967'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 968'
  {
    op: 0, // shift
    state: 169, // 'state 169'
    symbol: undefined,
  },
  // 'action 969'
  {
    op: 0, // shift
    state: 170, // 'state 170'
    symbol: undefined,
  },
  // 'action 970'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 971'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 972'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 973'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 974'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 975'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 976'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 977'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 978'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 979'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 980'
  {
    op: 0, // shift
    state: 171, // 'state 171'
    symbol: undefined,
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
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 990'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 991'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 992'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 993'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
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
    op: 0, // shift
    state: 172, // 'state 172'
    symbol: undefined,
  },
  // 'action 1000'
  {
    op: 0, // shift
    state: 173, // 'state 173'
    symbol: undefined,
  },
  // 'action 1001'
  {
    op: 0, // shift
    state: 174, // 'state 174'
    symbol: undefined,
  },
  // 'action 1002'
  {
    op: 0, // shift
    state: 175, // 'state 175'
    symbol: undefined,
  },
  // 'action 1003'
  {
    op: 0, // shift
    state: 176, // 'state 176'
    symbol: undefined,
  },
  // 'action 1004'
  {
    op: 0, // shift
    state: 177, // 'state 177'
    symbol: undefined,
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
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1049'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1050'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1051'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1052'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1053'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1054'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1055'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1056'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1057'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1058'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1059'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 1060'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 1061'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1062'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 1063'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 1064'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 1065'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 1066'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 1067'
  {
    op: 0, // shift
    state: 178, // 'state 178'
    symbol: undefined,
  },
  // 'action 1068'
  {
    op: 0, // shift
    state: 68, // 'state 68'
    symbol: undefined,
  },
  // 'action 1069'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 1070'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1071'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1072'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1073'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1074'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1075'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1076'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1077'
  {
    op: 0, // shift
    state: 25, // 'state 25'
    symbol: undefined,
  },
  // 'action 1078'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 1079'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 1080'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1081'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 1082'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 1083'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 1084'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1085'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1086'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1087'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1088'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1089'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1090'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1091'
  {
    op: 0, // shift
    state: 37, // 'state 37'
    symbol: undefined,
  },
  // 'action 1092'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 1093'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 1094'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1095'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 1096'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 1097'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
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
    symbol: 19, // Atom
  },
  // 'action 1118'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1119'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1120'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1121'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1122'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1123'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1124'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1125'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1126'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1127'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1128'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 1129'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 1130'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 1131'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 1132'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 1133'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 1134'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 1135'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 1136'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 1137'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 1138'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
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
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1228'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1229'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1230'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1231'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1232'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1233'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1234'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1235'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1236'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1237'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1238'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 1239'
  {
    op: 0, // shift
    state: 179, // 'state 179'
    symbol: undefined,
  },
  // 'action 1240'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1241'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1242'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1243'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1244'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1245'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 1246'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1247'
  {
    op: 0, // shift
    state: 180, // 'state 180'
    symbol: undefined,
  },
  // 'action 1248'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1249'
  {
    op: 0, // shift
    state: 25, // 'state 25'
    symbol: undefined,
  },
  // 'action 1250'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 1251'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 1252'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1253'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1254'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1255'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1256'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1257'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1258'
  {
    op: 0, // shift
    state: 34, // 'state 34'
    symbol: undefined,
  },
  // 'action 1259'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1260'
  {
    op: 0, // shift
    state: 181, // 'state 181'
    symbol: undefined,
  },
  // 'action 1261'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1262'
  {
    op: 0, // shift
    state: 37, // 'state 37'
    symbol: undefined,
  },
  // 'action 1263'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 1264'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 1265'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1266'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 1267'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 1268'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1269'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 1270'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 1271'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 1272'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 1273'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 1274'
  {
    op: 0, // shift
    state: 182, // 'state 182'
    symbol: undefined,
  },
  // 'action 1275'
  {
    op: 0, // shift
    state: 183, // 'state 183'
    symbol: undefined,
  },
  // 'action 1276'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 1277'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1278'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1279'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1280'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1281'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1282'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1283'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1284'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1285'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1286'
  {
    op: 0, // shift
    state: 184, // 'state 184'
    symbol: undefined,
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
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1295'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1296'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1297'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1298'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
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
    op: 0, // shift
    state: 185, // 'state 185'
    symbol: undefined,
  },
  // 'action 1306'
  {
    op: 0, // shift
    state: 186, // 'state 186'
    symbol: undefined,
  },
  // 'action 1307'
  {
    op: 0, // shift
    state: 187, // 'state 187'
    symbol: undefined,
  },
  // 'action 1308'
  {
    op: 0, // shift
    state: 188, // 'state 188'
    symbol: undefined,
  },
  // 'action 1309'
  {
    op: 0, // shift
    state: 189, // 'state 189'
    symbol: undefined,
  },
  // 'action 1310'
  {
    op: 0, // shift
    state: 190, // 'state 190'
    symbol: undefined,
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
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1354'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1355'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1356'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1357'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1358'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1359'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1360'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1361'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1362'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1363'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1364'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1365'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 1366'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 1367'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1368'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 1369'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 1370'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 1371'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 1372'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 1373'
  {
    op: 0, // shift
    state: 191, // 'state 191'
    symbol: undefined,
  },
  // 'action 1374'
  {
    op: 0, // shift
    state: 68, // 'state 68'
    symbol: undefined,
  },
  // 'action 1375'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
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
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1398'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1399'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1400'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1401'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1402'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1403'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1404'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1405'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1406'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1407'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1408'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1409'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 1410'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 1411'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1412'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 1413'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 1414'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 1415'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 1416'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 1417'
  {
    op: 0, // shift
    state: 192, // 'state 192'
    symbol: undefined,
  },
  // 'action 1418'
  {
    op: 0, // shift
    state: 193, // 'state 193'
    symbol: undefined,
  },
  // 'action 1419'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 1420'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1421'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1422'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1423'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1424'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1425'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1426'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1427'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1428'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1429'
  {
    op: 0, // shift
    state: 194, // 'state 194'
    symbol: undefined,
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
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1437'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1438'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1439'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1440'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
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
    op: 0, // shift
    state: 195, // 'state 195'
    symbol: undefined,
  },
  // 'action 1449'
  {
    op: 0, // shift
    state: 196, // 'state 196'
    symbol: undefined,
  },
  // 'action 1450'
  {
    op: 0, // shift
    state: 197, // 'state 197'
    symbol: undefined,
  },
  // 'action 1451'
  {
    op: 0, // shift
    state: 198, // 'state 198'
    symbol: undefined,
  },
  // 'action 1452'
  {
    op: 0, // shift
    state: 199, // 'state 199'
    symbol: undefined,
  },
  // 'action 1453'
  {
    op: 0, // shift
    state: 200, // 'state 200'
    symbol: undefined,
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
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1496'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1497'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1498'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1499'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1500'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1501'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1502'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1503'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1504'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1505'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1506'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1507'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1508'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 1509'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 1510'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1511'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 1512'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 1513'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 1514'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 1515'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 1516'
  {
    op: 0, // shift
    state: 201, // 'state 201'
    symbol: undefined,
  },
  // 'action 1517'
  {
    op: 0, // shift
    state: 68, // 'state 68'
    symbol: undefined,
  },
  // 'action 1518'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 1519'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1520'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1521'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1522'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1523'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1524'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1525'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1526'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1527'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1528'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1529'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1530'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1531'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1532'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1533'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1534'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1535'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1536'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1537'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1538'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1539'
  {
    op: 0, // shift
    state: 202, // 'state 202'
    symbol: undefined,
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
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1546'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1547'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1548'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1549'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
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
    op: 0, // shift
    state: 203, // 'state 203'
    symbol: undefined,
  },
  // 'action 1559'
  {
    op: 0, // shift
    state: 204, // 'state 204'
    symbol: undefined,
  },
  // 'action 1560'
  {
    op: 0, // shift
    state: 205, // 'state 205'
    symbol: undefined,
  },
  // 'action 1561'
  {
    op: 0, // shift
    state: 206, // 'state 206'
    symbol: undefined,
  },
  // 'action 1562'
  {
    op: 0, // shift
    state: 207, // 'state 207'
    symbol: undefined,
  },
  // 'action 1563'
  {
    op: 0, // shift
    state: 208, // 'state 208'
    symbol: undefined,
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
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
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
    op: 0, // shift
    state: 209, // 'state 209'
    symbol: undefined,
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
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1651'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1652'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1653'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1654'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1655'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1656'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1657'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1658'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1659'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1660'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1661'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1662'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1663'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1664'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1665'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1666'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1667'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1668'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1669'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1670'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1671'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1672'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1673'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 1674'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 1675'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1676'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 1677'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 1678'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 1679'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 1680'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 1681'
  {
    op: 0, // shift
    state: 210, // 'state 210'
    symbol: undefined,
  },
  // 'action 1682'
  {
    op: 0, // shift
    state: 156, // 'state 156'
    symbol: undefined,
  },
  // 'action 1683'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
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
    symbol: 20, // Group
  },
  // 'action 1695'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1696'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1697'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1698'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1699'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1700'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1701'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1702'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1703'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1704'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1705'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1706'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1707'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1708'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1709'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1710'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1711'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1712'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1713'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1714'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1715'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1716'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1717'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1718'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1719'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1720'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1721'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1722'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1723'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1724'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1725'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1726'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1727'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1728'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1729'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1730'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1731'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1732'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1733'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1734'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1735'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1736'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1737'
  {
    op: 0, // shift
    state: 211, // 'state 211'
    symbol: undefined,
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
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1761'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1762'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1763'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1764'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1765'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1766'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1767'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1768'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1769'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1770'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1771'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1772'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1773'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1774'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1775'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1776'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1777'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1778'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1779'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1780'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1781'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1782'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1783'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1784'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1785'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1786'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1787'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1788'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1789'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1790'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1791'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1792'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 1793'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 1794'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1795'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 1796'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 1797'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 1798'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 1799'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 1800'
  {
    op: 0, // shift
    state: 212, // 'state 212'
    symbol: undefined,
  },
  // 'action 1801'
  {
    op: 0, // shift
    state: 156, // 'state 156'
    symbol: undefined,
  },
  // 'action 1802'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
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
    symbol: 20, // Group
  },
  // 'action 1805'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1806'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1807'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1808'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1809'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1810'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1811'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1812'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1813'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1814'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1815'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1816'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1817'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1818'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1819'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1820'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1821'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1822'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1823'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1824'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1825'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1826'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1827'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1828'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1829'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1830'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1831'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1832'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1833'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1834'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1835'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1836'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1837'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1838'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1839'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1840'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1841'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1842'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1843'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1844'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1845'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1846'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1847'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1848'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1849'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1850'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1851'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1852'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1853'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1854'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1855'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1856'
  {
    op: 0, // shift
    state: 213, // 'state 213'
    symbol: undefined,
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
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1871'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1872'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1873'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1874'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1875'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1876'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1877'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1878'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1879'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1880'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1881'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1882'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1883'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1884'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1885'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1886'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1887'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1888'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1889'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1890'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1891'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1892'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1893'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1894'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1895'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1896'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1897'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1898'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1899'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1900'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1901'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
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
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 1912'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 1913'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1914'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 1915'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 1916'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 1917'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 1918'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 1919'
  {
    op: 0, // shift
    state: 214, // 'state 214'
    symbol: undefined,
  },
  // 'action 1920'
  {
    op: 0, // shift
    state: 156, // 'state 156'
    symbol: undefined,
  },
  // 'action 1921'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 1922'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1923'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1924'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1925'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1926'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1927'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1928'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1929'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1930'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1931'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1932'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1933'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1934'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1935'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1936'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1937'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1938'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1939'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1940'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1941'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1942'
  {
    op: 0, // shift
    state: 215, // 'state 215'
    symbol: undefined,
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
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1948'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1949'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1950'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1951'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1952'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1953'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1954'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1955'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1956'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1957'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1958'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
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
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 1998'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 1999'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 2000'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 2001'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 2002'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 2003'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 2004'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 2005'
  {
    op: 0, // shift
    state: 216, // 'state 216'
    symbol: undefined,
  },
  // 'action 2006'
  {
    op: 0, // shift
    state: 156, // 'state 156'
    symbol: undefined,
  },
  // 'action 2007'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 2008'
  {
    op: 0, // shift
    state: 217, // 'state 217'
    symbol: undefined,
  },
  // 'action 2009'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2010'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2011'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2012'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2013'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2014'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2015'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2016'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2017'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2018'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2019'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2020'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2021'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2022'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2023'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2024'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2025'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2026'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2027'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2028'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2029'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2030'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2031'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2032'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2033'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2034'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2035'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2036'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2037'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2038'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2039'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2040'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2041'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2042'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2043'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2044'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2045'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2046'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2047'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2048'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2049'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2050'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2051'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2052'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2053'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2054'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2055'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2056'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2057'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2058'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2059'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2060'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2061'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2062'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2063'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
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
    symbol: 21, // CharacterClass
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
    symbol: 24, // CharacterClassRange
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
    symbol: 21, // CharacterClass
  },
  // 'action 2093'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2094'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2095'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2096'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2097'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2098'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2099'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2100'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2101'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2102'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2103'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2104'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2105'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2106'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2107'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2108'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2109'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2110'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2111'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2112'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2113'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2114'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2115'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2116'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2117'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2118'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2119'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2120'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2121'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2122'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2123'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2124'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2125'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2126'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2127'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2128'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2129'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2130'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2131'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2132'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2133'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2134'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2135'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2136'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2137'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2138'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2139'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2140'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2141'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2142'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2143'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2144'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2145'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2146'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2147'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2148'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2149'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2150'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2151'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
];
const actionsTable = new Uint16Array(13952).fill(0xffff);
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
actionsTable[1030] = 169; // 'state 16' -> UNION -> reduce -> 'action 169'
actionsTable[1032] = 170; // 'state 16' -> PAREN_CLOSE -> reduce -> 'action 170'
actionsTable[1036] = 171; // 'state 16' -> @par-gen.EOF -> reduce -> 'action 171'
actionsTable[1408] = 172; // 'state 22' -> CHARACTER -> shift -> 'action 172'
actionsTable[1409] = 173; // 'state 22' -> CONTROL_CHARACTER -> shift -> 'action 173'
actionsTable[1410] = 174; // 'state 22' -> BACKSLASH -> shift -> 'action 174'
actionsTable[1411] = 175; // 'state 22' -> CARET -> shift -> 'action 175'
actionsTable[1412] = 176; // 'state 22' -> DASH -> shift -> 'action 176'
actionsTable[1415] = 177; // 'state 22' -> PAREN_OPEN -> shift -> 'action 177'
actionsTable[1418] = 178; // 'state 22' -> BRACKET_OPEN -> shift -> 'action 178'
actionsTable[1426] = 179; // 'state 22' -> Sequence -> shift -> 'action 179'
actionsTable[1427] = 180; // 'state 22' -> Atom -> shift -> 'action 180'
actionsTable[1428] = 181; // 'state 22' -> Group -> shift -> 'action 181'
actionsTable[1429] = 182; // 'state 22' -> CharacterClass -> shift -> 'action 182'
actionsTable[1433] = 183; // 'state 22' -> Character -> shift -> 'action 183'
actionsTable[1414] = 184; // 'state 22' -> UNION -> reduce -> 'action 184'
actionsTable[1416] = 185; // 'state 22' -> PAREN_CLOSE -> reduce -> 'action 185'
actionsTable[1420] = 186; // 'state 22' -> @par-gen.EOF -> reduce -> 'action 186'
actionsTable[1600] = 187; // 'state 25' -> CHARACTER -> reduce -> 'action 187'
actionsTable[1601] = 188; // 'state 25' -> CONTROL_CHARACTER -> reduce -> 'action 188'
actionsTable[1602] = 189; // 'state 25' -> BACKSLASH -> reduce -> 'action 189'
actionsTable[1603] = 190; // 'state 25' -> CARET -> reduce -> 'action 190'
actionsTable[1604] = 191; // 'state 25' -> DASH -> reduce -> 'action 191'
actionsTable[1606] = 192; // 'state 25' -> UNION -> reduce -> 'action 192'
actionsTable[1607] = 193; // 'state 25' -> PAREN_OPEN -> reduce -> 'action 193'
actionsTable[1608] = 194; // 'state 25' -> PAREN_CLOSE -> reduce -> 'action 194'
actionsTable[1610] = 195; // 'state 25' -> BRACKET_OPEN -> reduce -> 'action 195'
actionsTable[1612] = 196; // 'state 25' -> @par-gen.EOF -> reduce -> 'action 196'
actionsTable[1801] = 197; // 'state 28' -> QUANTIFIER -> shift -> 'action 197'
actionsTable[1792] = 198; // 'state 28' -> CHARACTER -> reduce -> 'action 198'
actionsTable[1793] = 199; // 'state 28' -> CONTROL_CHARACTER -> reduce -> 'action 199'
actionsTable[1794] = 200; // 'state 28' -> BACKSLASH -> reduce -> 'action 200'
actionsTable[1795] = 201; // 'state 28' -> CARET -> reduce -> 'action 201'
actionsTable[1796] = 202; // 'state 28' -> DASH -> reduce -> 'action 202'
actionsTable[1798] = 203; // 'state 28' -> UNION -> reduce -> 'action 203'
actionsTable[1799] = 204; // 'state 28' -> PAREN_OPEN -> reduce -> 'action 204'
actionsTable[1800] = 205; // 'state 28' -> PAREN_CLOSE -> reduce -> 'action 205'
actionsTable[1802] = 206; // 'state 28' -> BRACKET_OPEN -> reduce -> 'action 206'
actionsTable[1804] = 207; // 'state 28' -> @par-gen.EOF -> reduce -> 'action 207'
actionsTable[1673] = 208; // 'state 26' -> QUANTIFIER -> shift -> 'action 208'
actionsTable[1664] = 209; // 'state 26' -> CHARACTER -> reduce -> 'action 209'
actionsTable[1665] = 210; // 'state 26' -> CONTROL_CHARACTER -> reduce -> 'action 210'
actionsTable[1666] = 211; // 'state 26' -> BACKSLASH -> reduce -> 'action 211'
actionsTable[1667] = 212; // 'state 26' -> CARET -> reduce -> 'action 212'
actionsTable[1668] = 213; // 'state 26' -> DASH -> reduce -> 'action 213'
actionsTable[1670] = 214; // 'state 26' -> UNION -> reduce -> 'action 214'
actionsTable[1671] = 215; // 'state 26' -> PAREN_OPEN -> reduce -> 'action 215'
actionsTable[1672] = 216; // 'state 26' -> PAREN_CLOSE -> reduce -> 'action 216'
actionsTable[1674] = 217; // 'state 26' -> BRACKET_OPEN -> reduce -> 'action 217'
actionsTable[1676] = 218; // 'state 26' -> @par-gen.EOF -> reduce -> 'action 218'
actionsTable[1737] = 219; // 'state 27' -> QUANTIFIER -> shift -> 'action 219'
actionsTable[1728] = 220; // 'state 27' -> CHARACTER -> reduce -> 'action 220'
actionsTable[1729] = 221; // 'state 27' -> CONTROL_CHARACTER -> reduce -> 'action 221'
actionsTable[1730] = 222; // 'state 27' -> BACKSLASH -> reduce -> 'action 222'
actionsTable[1731] = 223; // 'state 27' -> CARET -> reduce -> 'action 223'
actionsTable[1732] = 224; // 'state 27' -> DASH -> reduce -> 'action 224'
actionsTable[1734] = 225; // 'state 27' -> UNION -> reduce -> 'action 225'
actionsTable[1735] = 226; // 'state 27' -> PAREN_OPEN -> reduce -> 'action 226'
actionsTable[1736] = 227; // 'state 27' -> PAREN_CLOSE -> reduce -> 'action 227'
actionsTable[1738] = 228; // 'state 27' -> BRACKET_OPEN -> reduce -> 'action 228'
actionsTable[1740] = 229; // 'state 27' -> @par-gen.EOF -> reduce -> 'action 229'
actionsTable[1088] = 230; // 'state 17' -> CHARACTER -> reduce -> 'action 230'
actionsTable[1089] = 231; // 'state 17' -> CONTROL_CHARACTER -> reduce -> 'action 231'
actionsTable[1090] = 232; // 'state 17' -> BACKSLASH -> reduce -> 'action 232'
actionsTable[1091] = 233; // 'state 17' -> CARET -> reduce -> 'action 233'
actionsTable[1092] = 234; // 'state 17' -> DASH -> reduce -> 'action 234'
actionsTable[1094] = 235; // 'state 17' -> UNION -> reduce -> 'action 235'
actionsTable[1095] = 236; // 'state 17' -> PAREN_OPEN -> reduce -> 'action 236'
actionsTable[1096] = 237; // 'state 17' -> PAREN_CLOSE -> reduce -> 'action 237'
actionsTable[1097] = 238; // 'state 17' -> QUANTIFIER -> reduce -> 'action 238'
actionsTable[1098] = 239; // 'state 17' -> BRACKET_OPEN -> reduce -> 'action 239'
actionsTable[1100] = 240; // 'state 17' -> @par-gen.EOF -> reduce -> 'action 240'
actionsTable[1152] = 241; // 'state 18' -> CHARACTER -> reduce -> 'action 241'
actionsTable[1153] = 242; // 'state 18' -> CONTROL_CHARACTER -> reduce -> 'action 242'
actionsTable[1154] = 243; // 'state 18' -> BACKSLASH -> reduce -> 'action 243'
actionsTable[1155] = 244; // 'state 18' -> CARET -> reduce -> 'action 244'
actionsTable[1156] = 245; // 'state 18' -> DASH -> reduce -> 'action 245'
actionsTable[1158] = 246; // 'state 18' -> UNION -> reduce -> 'action 246'
actionsTable[1159] = 247; // 'state 18' -> PAREN_OPEN -> reduce -> 'action 247'
actionsTable[1160] = 248; // 'state 18' -> PAREN_CLOSE -> reduce -> 'action 248'
actionsTable[1161] = 249; // 'state 18' -> QUANTIFIER -> reduce -> 'action 249'
actionsTable[1162] = 250; // 'state 18' -> BRACKET_OPEN -> reduce -> 'action 250'
actionsTable[1164] = 251; // 'state 18' -> @par-gen.EOF -> reduce -> 'action 251'
actionsTable[1280] = 252; // 'state 20' -> CHARACTER -> reduce -> 'action 252'
actionsTable[1281] = 253; // 'state 20' -> CONTROL_CHARACTER -> reduce -> 'action 253'
actionsTable[1282] = 254; // 'state 20' -> BACKSLASH -> reduce -> 'action 254'
actionsTable[1283] = 255; // 'state 20' -> CARET -> reduce -> 'action 255'
actionsTable[1284] = 256; // 'state 20' -> DASH -> reduce -> 'action 256'
actionsTable[1286] = 257; // 'state 20' -> UNION -> reduce -> 'action 257'
actionsTable[1287] = 258; // 'state 20' -> PAREN_OPEN -> reduce -> 'action 258'
actionsTable[1288] = 259; // 'state 20' -> PAREN_CLOSE -> reduce -> 'action 259'
actionsTable[1289] = 260; // 'state 20' -> QUANTIFIER -> reduce -> 'action 260'
actionsTable[1290] = 261; // 'state 20' -> BRACKET_OPEN -> reduce -> 'action 261'
actionsTable[1292] = 262; // 'state 20' -> @par-gen.EOF -> reduce -> 'action 262'
actionsTable[1344] = 263; // 'state 21' -> CHARACTER -> reduce -> 'action 263'
actionsTable[1345] = 264; // 'state 21' -> CONTROL_CHARACTER -> reduce -> 'action 264'
actionsTable[1346] = 265; // 'state 21' -> BACKSLASH -> reduce -> 'action 265'
actionsTable[1347] = 266; // 'state 21' -> CARET -> reduce -> 'action 266'
actionsTable[1348] = 267; // 'state 21' -> DASH -> reduce -> 'action 267'
actionsTable[1350] = 268; // 'state 21' -> UNION -> reduce -> 'action 268'
actionsTable[1351] = 269; // 'state 21' -> PAREN_OPEN -> reduce -> 'action 269'
actionsTable[1352] = 270; // 'state 21' -> PAREN_CLOSE -> reduce -> 'action 270'
actionsTable[1353] = 271; // 'state 21' -> QUANTIFIER -> reduce -> 'action 271'
actionsTable[1354] = 272; // 'state 21' -> BRACKET_OPEN -> reduce -> 'action 272'
actionsTable[1356] = 273; // 'state 21' -> @par-gen.EOF -> reduce -> 'action 273'
actionsTable[1217] = 274; // 'state 19' -> CONTROL_CHARACTER -> shift -> 'action 274'
actionsTable[1218] = 275; // 'state 19' -> BACKSLASH -> shift -> 'action 275'
actionsTable[1221] = 276; // 'state 19' -> DOT -> shift -> 'action 276'
actionsTable[1222] = 277; // 'state 19' -> UNION -> shift -> 'action 277'
actionsTable[1223] = 278; // 'state 19' -> PAREN_OPEN -> shift -> 'action 278'
actionsTable[1224] = 279; // 'state 19' -> PAREN_CLOSE -> shift -> 'action 279'
actionsTable[1225] = 280; // 'state 19' -> QUANTIFIER -> shift -> 'action 280'
actionsTable[1226] = 281; // 'state 19' -> BRACKET_OPEN -> shift -> 'action 281'
actionsTable[1227] = 282; // 'state 19' -> BRACKET_CLOSE -> shift -> 'action 282'
actionsTable[1242] = 283; // 'state 19' -> EscapedCharacter -> shift -> 'action 283'
actionsTable[1472] = 284; // 'state 23' -> CHARACTER -> shift -> 'action 284'
actionsTable[1473] = 285; // 'state 23' -> CONTROL_CHARACTER -> shift -> 'action 285'
actionsTable[1474] = 286; // 'state 23' -> BACKSLASH -> shift -> 'action 286'
actionsTable[1475] = 287; // 'state 23' -> CARET -> shift -> 'action 287'
actionsTable[1476] = 288; // 'state 23' -> DASH -> shift -> 'action 288'
actionsTable[1479] = 289; // 'state 23' -> PAREN_OPEN -> shift -> 'action 289'
actionsTable[1482] = 290; // 'state 23' -> BRACKET_OPEN -> shift -> 'action 290'
actionsTable[1489] = 291; // 'state 23' -> Union -> shift -> 'action 291'
actionsTable[1490] = 292; // 'state 23' -> Sequence -> shift -> 'action 292'
actionsTable[1491] = 293; // 'state 23' -> Atom -> shift -> 'action 293'
actionsTable[1492] = 294; // 'state 23' -> Group -> shift -> 'action 294'
actionsTable[1493] = 295; // 'state 23' -> CharacterClass -> shift -> 'action 295'
actionsTable[1497] = 296; // 'state 23' -> Character -> shift -> 'action 296'
actionsTable[1536] = 297; // 'state 24' -> CHARACTER -> shift -> 'action 297'
actionsTable[1537] = 298; // 'state 24' -> CONTROL_CHARACTER -> shift -> 'action 298'
actionsTable[1538] = 299; // 'state 24' -> BACKSLASH -> shift -> 'action 299'
actionsTable[1539] = 300; // 'state 24' -> CARET -> shift -> 'action 300'
actionsTable[1541] = 301; // 'state 24' -> DOT -> shift -> 'action 301'
actionsTable[1542] = 302; // 'state 24' -> UNION -> shift -> 'action 302'
actionsTable[1543] = 303; // 'state 24' -> PAREN_OPEN -> shift -> 'action 303'
actionsTable[1544] = 304; // 'state 24' -> PAREN_CLOSE -> shift -> 'action 304'
actionsTable[1545] = 305; // 'state 24' -> QUANTIFIER -> shift -> 'action 305'
actionsTable[1558] = 306; // 'state 24' -> CharacterClassCharacters -> shift -> 'action 306'
actionsTable[1559] = 307; // 'state 24' -> CharacterClassCharacter -> shift -> 'action 307'
actionsTable[1560] = 308; // 'state 24' -> CharacterClassRange -> shift -> 'action 308'
actionsTable[2176] = 309; // 'state 34' -> CHARACTER -> shift -> 'action 309'
actionsTable[2177] = 310; // 'state 34' -> CONTROL_CHARACTER -> shift -> 'action 310'
actionsTable[2178] = 311; // 'state 34' -> BACKSLASH -> shift -> 'action 311'
actionsTable[2179] = 312; // 'state 34' -> CARET -> shift -> 'action 312'
actionsTable[2180] = 313; // 'state 34' -> DASH -> shift -> 'action 313'
actionsTable[2183] = 314; // 'state 34' -> PAREN_OPEN -> shift -> 'action 314'
actionsTable[2186] = 315; // 'state 34' -> BRACKET_OPEN -> shift -> 'action 315'
actionsTable[2194] = 316; // 'state 34' -> Sequence -> shift -> 'action 316'
actionsTable[2195] = 317; // 'state 34' -> Atom -> shift -> 'action 317'
actionsTable[2196] = 318; // 'state 34' -> Group -> shift -> 'action 318'
actionsTable[2197] = 319; // 'state 34' -> CharacterClass -> shift -> 'action 319'
actionsTable[2201] = 320; // 'state 34' -> Character -> shift -> 'action 320'
actionsTable[2182] = 321; // 'state 34' -> UNION -> reduce -> 'action 321'
actionsTable[2184] = 322; // 'state 34' -> PAREN_CLOSE -> reduce -> 'action 322'
actionsTable[2188] = 323; // 'state 34' -> @par-gen.EOF -> reduce -> 'action 323'
actionsTable[2368] = 324; // 'state 37' -> CHARACTER -> reduce -> 'action 324'
actionsTable[2369] = 325; // 'state 37' -> CONTROL_CHARACTER -> reduce -> 'action 325'
actionsTable[2370] = 326; // 'state 37' -> BACKSLASH -> reduce -> 'action 326'
actionsTable[2371] = 327; // 'state 37' -> CARET -> reduce -> 'action 327'
actionsTable[2372] = 328; // 'state 37' -> DASH -> reduce -> 'action 328'
actionsTable[2374] = 329; // 'state 37' -> UNION -> reduce -> 'action 329'
actionsTable[2375] = 330; // 'state 37' -> PAREN_OPEN -> reduce -> 'action 330'
actionsTable[2376] = 331; // 'state 37' -> PAREN_CLOSE -> reduce -> 'action 331'
actionsTable[2378] = 332; // 'state 37' -> BRACKET_OPEN -> reduce -> 'action 332'
actionsTable[2380] = 333; // 'state 37' -> @par-gen.EOF -> reduce -> 'action 333'
actionsTable[2569] = 334; // 'state 40' -> QUANTIFIER -> shift -> 'action 334'
actionsTable[2560] = 335; // 'state 40' -> CHARACTER -> reduce -> 'action 335'
actionsTable[2561] = 336; // 'state 40' -> CONTROL_CHARACTER -> reduce -> 'action 336'
actionsTable[2562] = 337; // 'state 40' -> BACKSLASH -> reduce -> 'action 337'
actionsTable[2563] = 338; // 'state 40' -> CARET -> reduce -> 'action 338'
actionsTable[2564] = 339; // 'state 40' -> DASH -> reduce -> 'action 339'
actionsTable[2566] = 340; // 'state 40' -> UNION -> reduce -> 'action 340'
actionsTable[2567] = 341; // 'state 40' -> PAREN_OPEN -> reduce -> 'action 341'
actionsTable[2568] = 342; // 'state 40' -> PAREN_CLOSE -> reduce -> 'action 342'
actionsTable[2570] = 343; // 'state 40' -> BRACKET_OPEN -> reduce -> 'action 343'
actionsTable[2572] = 344; // 'state 40' -> @par-gen.EOF -> reduce -> 'action 344'
actionsTable[2441] = 345; // 'state 38' -> QUANTIFIER -> shift -> 'action 345'
actionsTable[2432] = 346; // 'state 38' -> CHARACTER -> reduce -> 'action 346'
actionsTable[2433] = 347; // 'state 38' -> CONTROL_CHARACTER -> reduce -> 'action 347'
actionsTable[2434] = 348; // 'state 38' -> BACKSLASH -> reduce -> 'action 348'
actionsTable[2435] = 349; // 'state 38' -> CARET -> reduce -> 'action 349'
actionsTable[2436] = 350; // 'state 38' -> DASH -> reduce -> 'action 350'
actionsTable[2438] = 351; // 'state 38' -> UNION -> reduce -> 'action 351'
actionsTable[2439] = 352; // 'state 38' -> PAREN_OPEN -> reduce -> 'action 352'
actionsTable[2440] = 353; // 'state 38' -> PAREN_CLOSE -> reduce -> 'action 353'
actionsTable[2442] = 354; // 'state 38' -> BRACKET_OPEN -> reduce -> 'action 354'
actionsTable[2444] = 355; // 'state 38' -> @par-gen.EOF -> reduce -> 'action 355'
actionsTable[2505] = 356; // 'state 39' -> QUANTIFIER -> shift -> 'action 356'
actionsTable[2496] = 357; // 'state 39' -> CHARACTER -> reduce -> 'action 357'
actionsTable[2497] = 358; // 'state 39' -> CONTROL_CHARACTER -> reduce -> 'action 358'
actionsTable[2498] = 359; // 'state 39' -> BACKSLASH -> reduce -> 'action 359'
actionsTable[2499] = 360; // 'state 39' -> CARET -> reduce -> 'action 360'
actionsTable[2500] = 361; // 'state 39' -> DASH -> reduce -> 'action 361'
actionsTable[2502] = 362; // 'state 39' -> UNION -> reduce -> 'action 362'
actionsTable[2503] = 363; // 'state 39' -> PAREN_OPEN -> reduce -> 'action 363'
actionsTable[2504] = 364; // 'state 39' -> PAREN_CLOSE -> reduce -> 'action 364'
actionsTable[2506] = 365; // 'state 39' -> BRACKET_OPEN -> reduce -> 'action 365'
actionsTable[2508] = 366; // 'state 39' -> @par-gen.EOF -> reduce -> 'action 366'
actionsTable[1856] = 367; // 'state 29' -> CHARACTER -> reduce -> 'action 367'
actionsTable[1857] = 368; // 'state 29' -> CONTROL_CHARACTER -> reduce -> 'action 368'
actionsTable[1858] = 369; // 'state 29' -> BACKSLASH -> reduce -> 'action 369'
actionsTable[1859] = 370; // 'state 29' -> CARET -> reduce -> 'action 370'
actionsTable[1860] = 371; // 'state 29' -> DASH -> reduce -> 'action 371'
actionsTable[1862] = 372; // 'state 29' -> UNION -> reduce -> 'action 372'
actionsTable[1863] = 373; // 'state 29' -> PAREN_OPEN -> reduce -> 'action 373'
actionsTable[1864] = 374; // 'state 29' -> PAREN_CLOSE -> reduce -> 'action 374'
actionsTable[1865] = 375; // 'state 29' -> QUANTIFIER -> reduce -> 'action 375'
actionsTable[1866] = 376; // 'state 29' -> BRACKET_OPEN -> reduce -> 'action 376'
actionsTable[1868] = 377; // 'state 29' -> @par-gen.EOF -> reduce -> 'action 377'
actionsTable[1920] = 378; // 'state 30' -> CHARACTER -> reduce -> 'action 378'
actionsTable[1921] = 379; // 'state 30' -> CONTROL_CHARACTER -> reduce -> 'action 379'
actionsTable[1922] = 380; // 'state 30' -> BACKSLASH -> reduce -> 'action 380'
actionsTable[1923] = 381; // 'state 30' -> CARET -> reduce -> 'action 381'
actionsTable[1924] = 382; // 'state 30' -> DASH -> reduce -> 'action 382'
actionsTable[1926] = 383; // 'state 30' -> UNION -> reduce -> 'action 383'
actionsTable[1927] = 384; // 'state 30' -> PAREN_OPEN -> reduce -> 'action 384'
actionsTable[1928] = 385; // 'state 30' -> PAREN_CLOSE -> reduce -> 'action 385'
actionsTable[1929] = 386; // 'state 30' -> QUANTIFIER -> reduce -> 'action 386'
actionsTable[1930] = 387; // 'state 30' -> BRACKET_OPEN -> reduce -> 'action 387'
actionsTable[1932] = 388; // 'state 30' -> @par-gen.EOF -> reduce -> 'action 388'
actionsTable[2048] = 389; // 'state 32' -> CHARACTER -> reduce -> 'action 389'
actionsTable[2049] = 390; // 'state 32' -> CONTROL_CHARACTER -> reduce -> 'action 390'
actionsTable[2050] = 391; // 'state 32' -> BACKSLASH -> reduce -> 'action 391'
actionsTable[2051] = 392; // 'state 32' -> CARET -> reduce -> 'action 392'
actionsTable[2052] = 393; // 'state 32' -> DASH -> reduce -> 'action 393'
actionsTable[2054] = 394; // 'state 32' -> UNION -> reduce -> 'action 394'
actionsTable[2055] = 395; // 'state 32' -> PAREN_OPEN -> reduce -> 'action 395'
actionsTable[2056] = 396; // 'state 32' -> PAREN_CLOSE -> reduce -> 'action 396'
actionsTable[2057] = 397; // 'state 32' -> QUANTIFIER -> reduce -> 'action 397'
actionsTable[2058] = 398; // 'state 32' -> BRACKET_OPEN -> reduce -> 'action 398'
actionsTable[2060] = 399; // 'state 32' -> @par-gen.EOF -> reduce -> 'action 399'
actionsTable[2112] = 400; // 'state 33' -> CHARACTER -> reduce -> 'action 400'
actionsTable[2113] = 401; // 'state 33' -> CONTROL_CHARACTER -> reduce -> 'action 401'
actionsTable[2114] = 402; // 'state 33' -> BACKSLASH -> reduce -> 'action 402'
actionsTable[2115] = 403; // 'state 33' -> CARET -> reduce -> 'action 403'
actionsTable[2116] = 404; // 'state 33' -> DASH -> reduce -> 'action 404'
actionsTable[2118] = 405; // 'state 33' -> UNION -> reduce -> 'action 405'
actionsTable[2119] = 406; // 'state 33' -> PAREN_OPEN -> reduce -> 'action 406'
actionsTable[2120] = 407; // 'state 33' -> PAREN_CLOSE -> reduce -> 'action 407'
actionsTable[2121] = 408; // 'state 33' -> QUANTIFIER -> reduce -> 'action 408'
actionsTable[2122] = 409; // 'state 33' -> BRACKET_OPEN -> reduce -> 'action 409'
actionsTable[2124] = 410; // 'state 33' -> @par-gen.EOF -> reduce -> 'action 410'
actionsTable[1985] = 411; // 'state 31' -> CONTROL_CHARACTER -> shift -> 'action 411'
actionsTable[1986] = 412; // 'state 31' -> BACKSLASH -> shift -> 'action 412'
actionsTable[1989] = 413; // 'state 31' -> DOT -> shift -> 'action 413'
actionsTable[1990] = 414; // 'state 31' -> UNION -> shift -> 'action 414'
actionsTable[1991] = 415; // 'state 31' -> PAREN_OPEN -> shift -> 'action 415'
actionsTable[1992] = 416; // 'state 31' -> PAREN_CLOSE -> shift -> 'action 416'
actionsTable[1993] = 417; // 'state 31' -> QUANTIFIER -> shift -> 'action 417'
actionsTable[1994] = 418; // 'state 31' -> BRACKET_OPEN -> shift -> 'action 418'
actionsTable[1995] = 419; // 'state 31' -> BRACKET_CLOSE -> shift -> 'action 419'
actionsTable[2010] = 420; // 'state 31' -> EscapedCharacter -> shift -> 'action 420'
actionsTable[2240] = 421; // 'state 35' -> CHARACTER -> shift -> 'action 421'
actionsTable[2241] = 422; // 'state 35' -> CONTROL_CHARACTER -> shift -> 'action 422'
actionsTable[2242] = 423; // 'state 35' -> BACKSLASH -> shift -> 'action 423'
actionsTable[2243] = 424; // 'state 35' -> CARET -> shift -> 'action 424'
actionsTable[2244] = 425; // 'state 35' -> DASH -> shift -> 'action 425'
actionsTable[2247] = 426; // 'state 35' -> PAREN_OPEN -> shift -> 'action 426'
actionsTable[2250] = 427; // 'state 35' -> BRACKET_OPEN -> shift -> 'action 427'
actionsTable[2257] = 428; // 'state 35' -> Union -> shift -> 'action 428'
actionsTable[2258] = 429; // 'state 35' -> Sequence -> shift -> 'action 429'
actionsTable[2259] = 430; // 'state 35' -> Atom -> shift -> 'action 430'
actionsTable[2260] = 431; // 'state 35' -> Group -> shift -> 'action 431'
actionsTable[2261] = 432; // 'state 35' -> CharacterClass -> shift -> 'action 432'
actionsTable[2265] = 433; // 'state 35' -> Character -> shift -> 'action 433'
actionsTable[2304] = 434; // 'state 36' -> CHARACTER -> shift -> 'action 434'
actionsTable[2305] = 435; // 'state 36' -> CONTROL_CHARACTER -> shift -> 'action 435'
actionsTable[2306] = 436; // 'state 36' -> BACKSLASH -> shift -> 'action 436'
actionsTable[2307] = 437; // 'state 36' -> CARET -> shift -> 'action 437'
actionsTable[2309] = 438; // 'state 36' -> DOT -> shift -> 'action 438'
actionsTable[2310] = 439; // 'state 36' -> UNION -> shift -> 'action 439'
actionsTable[2311] = 440; // 'state 36' -> PAREN_OPEN -> shift -> 'action 440'
actionsTable[2312] = 441; // 'state 36' -> PAREN_CLOSE -> shift -> 'action 441'
actionsTable[2313] = 442; // 'state 36' -> QUANTIFIER -> shift -> 'action 442'
actionsTable[2326] = 443; // 'state 36' -> CharacterClassCharacters -> shift -> 'action 443'
actionsTable[2327] = 444; // 'state 36' -> CharacterClassCharacter -> shift -> 'action 444'
actionsTable[2328] = 445; // 'state 36' -> CharacterClassRange -> shift -> 'action 445'
actionsTable[2624] = 446; // 'state 41' -> CHARACTER -> reduce -> 'action 446'
actionsTable[2625] = 447; // 'state 41' -> CONTROL_CHARACTER -> reduce -> 'action 447'
actionsTable[2626] = 448; // 'state 41' -> BACKSLASH -> reduce -> 'action 448'
actionsTable[2627] = 449; // 'state 41' -> CARET -> reduce -> 'action 449'
actionsTable[2628] = 450; // 'state 41' -> DASH -> reduce -> 'action 450'
actionsTable[2630] = 451; // 'state 41' -> UNION -> reduce -> 'action 451'
actionsTable[2631] = 452; // 'state 41' -> PAREN_OPEN -> reduce -> 'action 452'
actionsTable[2632] = 453; // 'state 41' -> PAREN_CLOSE -> reduce -> 'action 453'
actionsTable[2634] = 454; // 'state 41' -> BRACKET_OPEN -> reduce -> 'action 454'
actionsTable[2636] = 455; // 'state 41' -> @par-gen.EOF -> reduce -> 'action 455'
actionsTable[2688] = 456; // 'state 42' -> CHARACTER -> reduce -> 'action 456'
actionsTable[2689] = 457; // 'state 42' -> CONTROL_CHARACTER -> reduce -> 'action 457'
actionsTable[2690] = 458; // 'state 42' -> BACKSLASH -> reduce -> 'action 458'
actionsTable[2691] = 459; // 'state 42' -> CARET -> reduce -> 'action 459'
actionsTable[2692] = 460; // 'state 42' -> DASH -> reduce -> 'action 460'
actionsTable[2694] = 461; // 'state 42' -> UNION -> reduce -> 'action 461'
actionsTable[2695] = 462; // 'state 42' -> PAREN_OPEN -> reduce -> 'action 462'
actionsTable[2696] = 463; // 'state 42' -> PAREN_CLOSE -> reduce -> 'action 463'
actionsTable[2698] = 464; // 'state 42' -> BRACKET_OPEN -> reduce -> 'action 464'
actionsTable[2700] = 465; // 'state 42' -> @par-gen.EOF -> reduce -> 'action 465'
actionsTable[2752] = 466; // 'state 43' -> CHARACTER -> reduce -> 'action 466'
actionsTable[2753] = 467; // 'state 43' -> CONTROL_CHARACTER -> reduce -> 'action 467'
actionsTable[2754] = 468; // 'state 43' -> BACKSLASH -> reduce -> 'action 468'
actionsTable[2755] = 469; // 'state 43' -> CARET -> reduce -> 'action 469'
actionsTable[2756] = 470; // 'state 43' -> DASH -> reduce -> 'action 470'
actionsTable[2758] = 471; // 'state 43' -> UNION -> reduce -> 'action 471'
actionsTable[2759] = 472; // 'state 43' -> PAREN_OPEN -> reduce -> 'action 472'
actionsTable[2760] = 473; // 'state 43' -> PAREN_CLOSE -> reduce -> 'action 473'
actionsTable[2762] = 474; // 'state 43' -> BRACKET_OPEN -> reduce -> 'action 474'
actionsTable[2764] = 475; // 'state 43' -> @par-gen.EOF -> reduce -> 'action 475'
actionsTable[3392] = 476; // 'state 53' -> CHARACTER -> reduce -> 'action 476'
actionsTable[3393] = 477; // 'state 53' -> CONTROL_CHARACTER -> reduce -> 'action 477'
actionsTable[3394] = 478; // 'state 53' -> BACKSLASH -> reduce -> 'action 478'
actionsTable[3395] = 479; // 'state 53' -> CARET -> reduce -> 'action 479'
actionsTable[3396] = 480; // 'state 53' -> DASH -> reduce -> 'action 480'
actionsTable[3398] = 481; // 'state 53' -> UNION -> reduce -> 'action 481'
actionsTable[3399] = 482; // 'state 53' -> PAREN_OPEN -> reduce -> 'action 482'
actionsTable[3400] = 483; // 'state 53' -> PAREN_CLOSE -> reduce -> 'action 483'
actionsTable[3401] = 484; // 'state 53' -> QUANTIFIER -> reduce -> 'action 484'
actionsTable[3402] = 485; // 'state 53' -> BRACKET_OPEN -> reduce -> 'action 485'
actionsTable[3404] = 486; // 'state 53' -> @par-gen.EOF -> reduce -> 'action 486'
actionsTable[2816] = 487; // 'state 44' -> CHARACTER -> reduce -> 'action 487'
actionsTable[2817] = 488; // 'state 44' -> CONTROL_CHARACTER -> reduce -> 'action 488'
actionsTable[2818] = 489; // 'state 44' -> BACKSLASH -> reduce -> 'action 489'
actionsTable[2819] = 490; // 'state 44' -> CARET -> reduce -> 'action 490'
actionsTable[2820] = 491; // 'state 44' -> DASH -> reduce -> 'action 491'
actionsTable[2822] = 492; // 'state 44' -> UNION -> reduce -> 'action 492'
actionsTable[2823] = 493; // 'state 44' -> PAREN_OPEN -> reduce -> 'action 493'
actionsTable[2824] = 494; // 'state 44' -> PAREN_CLOSE -> reduce -> 'action 494'
actionsTable[2825] = 495; // 'state 44' -> QUANTIFIER -> reduce -> 'action 495'
actionsTable[2826] = 496; // 'state 44' -> BRACKET_OPEN -> reduce -> 'action 496'
actionsTable[2828] = 497; // 'state 44' -> @par-gen.EOF -> reduce -> 'action 497'
actionsTable[2880] = 498; // 'state 45' -> CHARACTER -> reduce -> 'action 498'
actionsTable[2881] = 499; // 'state 45' -> CONTROL_CHARACTER -> reduce -> 'action 499'
actionsTable[2882] = 500; // 'state 45' -> BACKSLASH -> reduce -> 'action 500'
actionsTable[2883] = 501; // 'state 45' -> CARET -> reduce -> 'action 501'
actionsTable[2884] = 502; // 'state 45' -> DASH -> reduce -> 'action 502'
actionsTable[2886] = 503; // 'state 45' -> UNION -> reduce -> 'action 503'
actionsTable[2887] = 504; // 'state 45' -> PAREN_OPEN -> reduce -> 'action 504'
actionsTable[2888] = 505; // 'state 45' -> PAREN_CLOSE -> reduce -> 'action 505'
actionsTable[2889] = 506; // 'state 45' -> QUANTIFIER -> reduce -> 'action 506'
actionsTable[2890] = 507; // 'state 45' -> BRACKET_OPEN -> reduce -> 'action 507'
actionsTable[2892] = 508; // 'state 45' -> @par-gen.EOF -> reduce -> 'action 508'
actionsTable[2944] = 509; // 'state 46' -> CHARACTER -> reduce -> 'action 509'
actionsTable[2945] = 510; // 'state 46' -> CONTROL_CHARACTER -> reduce -> 'action 510'
actionsTable[2946] = 511; // 'state 46' -> BACKSLASH -> reduce -> 'action 511'
actionsTable[2947] = 512; // 'state 46' -> CARET -> reduce -> 'action 512'
actionsTable[2948] = 513; // 'state 46' -> DASH -> reduce -> 'action 513'
actionsTable[2950] = 514; // 'state 46' -> UNION -> reduce -> 'action 514'
actionsTable[2951] = 515; // 'state 46' -> PAREN_OPEN -> reduce -> 'action 515'
actionsTable[2952] = 516; // 'state 46' -> PAREN_CLOSE -> reduce -> 'action 516'
actionsTable[2953] = 517; // 'state 46' -> QUANTIFIER -> reduce -> 'action 517'
actionsTable[2954] = 518; // 'state 46' -> BRACKET_OPEN -> reduce -> 'action 518'
actionsTable[2956] = 519; // 'state 46' -> @par-gen.EOF -> reduce -> 'action 519'
actionsTable[3008] = 520; // 'state 47' -> CHARACTER -> reduce -> 'action 520'
actionsTable[3009] = 521; // 'state 47' -> CONTROL_CHARACTER -> reduce -> 'action 521'
actionsTable[3010] = 522; // 'state 47' -> BACKSLASH -> reduce -> 'action 522'
actionsTable[3011] = 523; // 'state 47' -> CARET -> reduce -> 'action 523'
actionsTable[3012] = 524; // 'state 47' -> DASH -> reduce -> 'action 524'
actionsTable[3014] = 525; // 'state 47' -> UNION -> reduce -> 'action 525'
actionsTable[3015] = 526; // 'state 47' -> PAREN_OPEN -> reduce -> 'action 526'
actionsTable[3016] = 527; // 'state 47' -> PAREN_CLOSE -> reduce -> 'action 527'
actionsTable[3017] = 528; // 'state 47' -> QUANTIFIER -> reduce -> 'action 528'
actionsTable[3018] = 529; // 'state 47' -> BRACKET_OPEN -> reduce -> 'action 529'
actionsTable[3020] = 530; // 'state 47' -> @par-gen.EOF -> reduce -> 'action 530'
actionsTable[3072] = 531; // 'state 48' -> CHARACTER -> reduce -> 'action 531'
actionsTable[3073] = 532; // 'state 48' -> CONTROL_CHARACTER -> reduce -> 'action 532'
actionsTable[3074] = 533; // 'state 48' -> BACKSLASH -> reduce -> 'action 533'
actionsTable[3075] = 534; // 'state 48' -> CARET -> reduce -> 'action 534'
actionsTable[3076] = 535; // 'state 48' -> DASH -> reduce -> 'action 535'
actionsTable[3078] = 536; // 'state 48' -> UNION -> reduce -> 'action 536'
actionsTable[3079] = 537; // 'state 48' -> PAREN_OPEN -> reduce -> 'action 537'
actionsTable[3080] = 538; // 'state 48' -> PAREN_CLOSE -> reduce -> 'action 538'
actionsTable[3081] = 539; // 'state 48' -> QUANTIFIER -> reduce -> 'action 539'
actionsTable[3082] = 540; // 'state 48' -> BRACKET_OPEN -> reduce -> 'action 540'
actionsTable[3084] = 541; // 'state 48' -> @par-gen.EOF -> reduce -> 'action 541'
actionsTable[3136] = 542; // 'state 49' -> CHARACTER -> reduce -> 'action 542'
actionsTable[3137] = 543; // 'state 49' -> CONTROL_CHARACTER -> reduce -> 'action 543'
actionsTable[3138] = 544; // 'state 49' -> BACKSLASH -> reduce -> 'action 544'
actionsTable[3139] = 545; // 'state 49' -> CARET -> reduce -> 'action 545'
actionsTable[3140] = 546; // 'state 49' -> DASH -> reduce -> 'action 546'
actionsTable[3142] = 547; // 'state 49' -> UNION -> reduce -> 'action 547'
actionsTable[3143] = 548; // 'state 49' -> PAREN_OPEN -> reduce -> 'action 548'
actionsTable[3144] = 549; // 'state 49' -> PAREN_CLOSE -> reduce -> 'action 549'
actionsTable[3145] = 550; // 'state 49' -> QUANTIFIER -> reduce -> 'action 550'
actionsTable[3146] = 551; // 'state 49' -> BRACKET_OPEN -> reduce -> 'action 551'
actionsTable[3148] = 552; // 'state 49' -> @par-gen.EOF -> reduce -> 'action 552'
actionsTable[3264] = 553; // 'state 51' -> CHARACTER -> reduce -> 'action 553'
actionsTable[3265] = 554; // 'state 51' -> CONTROL_CHARACTER -> reduce -> 'action 554'
actionsTable[3266] = 555; // 'state 51' -> BACKSLASH -> reduce -> 'action 555'
actionsTable[3267] = 556; // 'state 51' -> CARET -> reduce -> 'action 556'
actionsTable[3268] = 557; // 'state 51' -> DASH -> reduce -> 'action 557'
actionsTable[3270] = 558; // 'state 51' -> UNION -> reduce -> 'action 558'
actionsTable[3271] = 559; // 'state 51' -> PAREN_OPEN -> reduce -> 'action 559'
actionsTable[3272] = 560; // 'state 51' -> PAREN_CLOSE -> reduce -> 'action 560'
actionsTable[3273] = 561; // 'state 51' -> QUANTIFIER -> reduce -> 'action 561'
actionsTable[3274] = 562; // 'state 51' -> BRACKET_OPEN -> reduce -> 'action 562'
actionsTable[3276] = 563; // 'state 51' -> @par-gen.EOF -> reduce -> 'action 563'
actionsTable[3328] = 564; // 'state 52' -> CHARACTER -> reduce -> 'action 564'
actionsTable[3329] = 565; // 'state 52' -> CONTROL_CHARACTER -> reduce -> 'action 565'
actionsTable[3330] = 566; // 'state 52' -> BACKSLASH -> reduce -> 'action 566'
actionsTable[3331] = 567; // 'state 52' -> CARET -> reduce -> 'action 567'
actionsTable[3332] = 568; // 'state 52' -> DASH -> reduce -> 'action 568'
actionsTable[3334] = 569; // 'state 52' -> UNION -> reduce -> 'action 569'
actionsTable[3335] = 570; // 'state 52' -> PAREN_OPEN -> reduce -> 'action 570'
actionsTable[3336] = 571; // 'state 52' -> PAREN_CLOSE -> reduce -> 'action 571'
actionsTable[3337] = 572; // 'state 52' -> QUANTIFIER -> reduce -> 'action 572'
actionsTable[3338] = 573; // 'state 52' -> BRACKET_OPEN -> reduce -> 'action 573'
actionsTable[3340] = 574; // 'state 52' -> @par-gen.EOF -> reduce -> 'action 574'
actionsTable[3200] = 575; // 'state 50' -> CHARACTER -> reduce -> 'action 575'
actionsTable[3201] = 576; // 'state 50' -> CONTROL_CHARACTER -> reduce -> 'action 576'
actionsTable[3202] = 577; // 'state 50' -> BACKSLASH -> reduce -> 'action 577'
actionsTable[3203] = 578; // 'state 50' -> CARET -> reduce -> 'action 578'
actionsTable[3204] = 579; // 'state 50' -> DASH -> reduce -> 'action 579'
actionsTable[3206] = 580; // 'state 50' -> UNION -> reduce -> 'action 580'
actionsTable[3207] = 581; // 'state 50' -> PAREN_OPEN -> reduce -> 'action 581'
actionsTable[3208] = 582; // 'state 50' -> PAREN_CLOSE -> reduce -> 'action 582'
actionsTable[3209] = 583; // 'state 50' -> QUANTIFIER -> reduce -> 'action 583'
actionsTable[3210] = 584; // 'state 50' -> BRACKET_OPEN -> reduce -> 'action 584'
actionsTable[3212] = 585; // 'state 50' -> @par-gen.EOF -> reduce -> 'action 585'
actionsTable[3526] = 586; // 'state 55' -> UNION -> shift -> 'action 586'
actionsTable[3528] = 587; // 'state 55' -> PAREN_CLOSE -> shift -> 'action 587'
actionsTable[3584] = 588; // 'state 56' -> CHARACTER -> shift -> 'action 588'
actionsTable[3585] = 589; // 'state 56' -> CONTROL_CHARACTER -> shift -> 'action 589'
actionsTable[3586] = 590; // 'state 56' -> BACKSLASH -> shift -> 'action 590'
actionsTable[3587] = 591; // 'state 56' -> CARET -> shift -> 'action 591'
actionsTable[3588] = 592; // 'state 56' -> DASH -> shift -> 'action 592'
actionsTable[3590] = 593; // 'state 56' -> UNION -> shift -> 'action 593'
actionsTable[3591] = 594; // 'state 56' -> PAREN_OPEN -> shift -> 'action 594'
actionsTable[3592] = 595; // 'state 56' -> PAREN_CLOSE -> shift -> 'action 595'
actionsTable[3594] = 596; // 'state 56' -> BRACKET_OPEN -> shift -> 'action 596'
actionsTable[3603] = 597; // 'state 56' -> Atom -> shift -> 'action 597'
actionsTable[3604] = 598; // 'state 56' -> Group -> shift -> 'action 598'
actionsTable[3605] = 599; // 'state 56' -> CharacterClass -> shift -> 'action 599'
actionsTable[3609] = 600; // 'state 56' -> Character -> shift -> 'action 600'
actionsTable[3648] = 601; // 'state 57' -> CHARACTER -> shift -> 'action 601'
actionsTable[3649] = 602; // 'state 57' -> CONTROL_CHARACTER -> shift -> 'action 602'
actionsTable[3650] = 603; // 'state 57' -> BACKSLASH -> shift -> 'action 603'
actionsTable[3651] = 604; // 'state 57' -> CARET -> shift -> 'action 604'
actionsTable[3652] = 605; // 'state 57' -> DASH -> shift -> 'action 605'
actionsTable[3654] = 606; // 'state 57' -> UNION -> shift -> 'action 606'
actionsTable[3655] = 607; // 'state 57' -> PAREN_OPEN -> shift -> 'action 607'
actionsTable[3656] = 608; // 'state 57' -> PAREN_CLOSE -> shift -> 'action 608'
actionsTable[3658] = 609; // 'state 57' -> BRACKET_OPEN -> shift -> 'action 609'
actionsTable[3667] = 610; // 'state 57' -> Atom -> shift -> 'action 610'
actionsTable[3668] = 611; // 'state 57' -> Group -> shift -> 'action 611'
actionsTable[3669] = 612; // 'state 57' -> CharacterClass -> shift -> 'action 612'
actionsTable[3673] = 613; // 'state 57' -> Character -> shift -> 'action 613'
actionsTable[3456] = 614; // 'state 54' -> CHARACTER -> shift -> 'action 614'
actionsTable[3457] = 615; // 'state 54' -> CONTROL_CHARACTER -> shift -> 'action 615'
actionsTable[3458] = 616; // 'state 54' -> BACKSLASH -> shift -> 'action 616'
actionsTable[3459] = 617; // 'state 54' -> CARET -> shift -> 'action 617'
actionsTable[3461] = 618; // 'state 54' -> DOT -> shift -> 'action 618'
actionsTable[3462] = 619; // 'state 54' -> UNION -> shift -> 'action 619'
actionsTable[3463] = 620; // 'state 54' -> PAREN_OPEN -> shift -> 'action 620'
actionsTable[3464] = 621; // 'state 54' -> PAREN_CLOSE -> shift -> 'action 621'
actionsTable[3465] = 622; // 'state 54' -> QUANTIFIER -> shift -> 'action 622'
actionsTable[3478] = 623; // 'state 54' -> CharacterClassCharacters -> shift -> 'action 623'
actionsTable[3479] = 624; // 'state 54' -> CharacterClassCharacter -> shift -> 'action 624'
actionsTable[3480] = 625; // 'state 54' -> CharacterClassRange -> shift -> 'action 625'
actionsTable[4288] = 626; // 'state 67' -> CHARACTER -> shift -> 'action 626'
actionsTable[4289] = 627; // 'state 67' -> CONTROL_CHARACTER -> shift -> 'action 627'
actionsTable[4290] = 628; // 'state 67' -> BACKSLASH -> shift -> 'action 628'
actionsTable[4293] = 629; // 'state 67' -> DOT -> shift -> 'action 629'
actionsTable[4294] = 630; // 'state 67' -> UNION -> shift -> 'action 630'
actionsTable[4295] = 631; // 'state 67' -> PAREN_OPEN -> shift -> 'action 631'
actionsTable[4296] = 632; // 'state 67' -> PAREN_CLOSE -> shift -> 'action 632'
actionsTable[4297] = 633; // 'state 67' -> QUANTIFIER -> shift -> 'action 633'
actionsTable[4299] = 634; // 'state 67' -> BRACKET_CLOSE -> shift -> 'action 634'
actionsTable[4311] = 635; // 'state 67' -> CharacterClassCharacter -> shift -> 'action 635'
actionsTable[4312] = 636; // 'state 67' -> CharacterClassRange -> shift -> 'action 636'
actionsTable[4352] = 637; // 'state 68' -> CHARACTER -> reduce -> 'action 637'
actionsTable[4353] = 638; // 'state 68' -> CONTROL_CHARACTER -> reduce -> 'action 638'
actionsTable[4354] = 639; // 'state 68' -> BACKSLASH -> reduce -> 'action 639'
actionsTable[4357] = 640; // 'state 68' -> DOT -> reduce -> 'action 640'
actionsTable[4358] = 641; // 'state 68' -> UNION -> reduce -> 'action 641'
actionsTable[4359] = 642; // 'state 68' -> PAREN_OPEN -> reduce -> 'action 642'
actionsTable[4360] = 643; // 'state 68' -> PAREN_CLOSE -> reduce -> 'action 643'
actionsTable[4361] = 644; // 'state 68' -> QUANTIFIER -> reduce -> 'action 644'
actionsTable[4363] = 645; // 'state 68' -> BRACKET_CLOSE -> reduce -> 'action 645'
actionsTable[3716] = 646; // 'state 58' -> DASH -> shift -> 'action 646'
actionsTable[3712] = 647; // 'state 58' -> CHARACTER -> reduce -> 'action 647'
actionsTable[3713] = 648; // 'state 58' -> CONTROL_CHARACTER -> reduce -> 'action 648'
actionsTable[3714] = 649; // 'state 58' -> BACKSLASH -> reduce -> 'action 649'
actionsTable[3717] = 650; // 'state 58' -> DOT -> reduce -> 'action 650'
actionsTable[3718] = 651; // 'state 58' -> UNION -> reduce -> 'action 651'
actionsTable[3719] = 652; // 'state 58' -> PAREN_OPEN -> reduce -> 'action 652'
actionsTable[3720] = 653; // 'state 58' -> PAREN_CLOSE -> reduce -> 'action 653'
actionsTable[3721] = 654; // 'state 58' -> QUANTIFIER -> reduce -> 'action 654'
actionsTable[3723] = 655; // 'state 58' -> BRACKET_CLOSE -> reduce -> 'action 655'
actionsTable[3776] = 656; // 'state 59' -> CHARACTER -> reduce -> 'action 656'
actionsTable[3777] = 657; // 'state 59' -> CONTROL_CHARACTER -> reduce -> 'action 657'
actionsTable[3778] = 658; // 'state 59' -> BACKSLASH -> reduce -> 'action 658'
actionsTable[3781] = 659; // 'state 59' -> DOT -> reduce -> 'action 659'
actionsTable[3782] = 660; // 'state 59' -> UNION -> reduce -> 'action 660'
actionsTable[3783] = 661; // 'state 59' -> PAREN_OPEN -> reduce -> 'action 661'
actionsTable[3784] = 662; // 'state 59' -> PAREN_CLOSE -> reduce -> 'action 662'
actionsTable[3785] = 663; // 'state 59' -> QUANTIFIER -> reduce -> 'action 663'
actionsTable[3787] = 664; // 'state 59' -> BRACKET_CLOSE -> reduce -> 'action 664'
actionsTable[3841] = 665; // 'state 60' -> CONTROL_CHARACTER -> shift -> 'action 665'
actionsTable[3842] = 666; // 'state 60' -> BACKSLASH -> shift -> 'action 666'
actionsTable[3843] = 667; // 'state 60' -> CARET -> shift -> 'action 667'
actionsTable[3844] = 668; // 'state 60' -> DASH -> shift -> 'action 668'
actionsTable[3850] = 669; // 'state 60' -> BRACKET_OPEN -> shift -> 'action 669'
actionsTable[3851] = 670; // 'state 60' -> BRACKET_CLOSE -> shift -> 'action 670'
actionsTable[4224] = 671; // 'state 66' -> CHARACTER -> reduce -> 'action 671'
actionsTable[4225] = 672; // 'state 66' -> CONTROL_CHARACTER -> reduce -> 'action 672'
actionsTable[4226] = 673; // 'state 66' -> BACKSLASH -> reduce -> 'action 673'
actionsTable[4229] = 674; // 'state 66' -> DOT -> reduce -> 'action 674'
actionsTable[4230] = 675; // 'state 66' -> UNION -> reduce -> 'action 675'
actionsTable[4231] = 676; // 'state 66' -> PAREN_OPEN -> reduce -> 'action 676'
actionsTable[4232] = 677; // 'state 66' -> PAREN_CLOSE -> reduce -> 'action 677'
actionsTable[4233] = 678; // 'state 66' -> QUANTIFIER -> reduce -> 'action 678'
actionsTable[4235] = 679; // 'state 66' -> BRACKET_CLOSE -> reduce -> 'action 679'
actionsTable[4096] = 680; // 'state 64' -> CHARACTER -> reduce -> 'action 680'
actionsTable[4097] = 681; // 'state 64' -> CONTROL_CHARACTER -> reduce -> 'action 681'
actionsTable[4098] = 682; // 'state 64' -> BACKSLASH -> reduce -> 'action 682'
actionsTable[4101] = 683; // 'state 64' -> DOT -> reduce -> 'action 683'
actionsTable[4102] = 684; // 'state 64' -> UNION -> reduce -> 'action 684'
actionsTable[4103] = 685; // 'state 64' -> PAREN_OPEN -> reduce -> 'action 685'
actionsTable[4104] = 686; // 'state 64' -> PAREN_CLOSE -> reduce -> 'action 686'
actionsTable[4105] = 687; // 'state 64' -> QUANTIFIER -> reduce -> 'action 687'
actionsTable[4107] = 688; // 'state 64' -> BRACKET_CLOSE -> reduce -> 'action 688'
actionsTable[4160] = 689; // 'state 65' -> CHARACTER -> reduce -> 'action 689'
actionsTable[4161] = 690; // 'state 65' -> CONTROL_CHARACTER -> reduce -> 'action 690'
actionsTable[4162] = 691; // 'state 65' -> BACKSLASH -> reduce -> 'action 691'
actionsTable[4165] = 692; // 'state 65' -> DOT -> reduce -> 'action 692'
actionsTable[4166] = 693; // 'state 65' -> UNION -> reduce -> 'action 693'
actionsTable[4167] = 694; // 'state 65' -> PAREN_OPEN -> reduce -> 'action 694'
actionsTable[4168] = 695; // 'state 65' -> PAREN_CLOSE -> reduce -> 'action 695'
actionsTable[4169] = 696; // 'state 65' -> QUANTIFIER -> reduce -> 'action 696'
actionsTable[4171] = 697; // 'state 65' -> BRACKET_CLOSE -> reduce -> 'action 697'
actionsTable[4032] = 698; // 'state 63' -> CHARACTER -> reduce -> 'action 698'
actionsTable[4033] = 699; // 'state 63' -> CONTROL_CHARACTER -> reduce -> 'action 699'
actionsTable[4034] = 700; // 'state 63' -> BACKSLASH -> reduce -> 'action 700'
actionsTable[4037] = 701; // 'state 63' -> DOT -> reduce -> 'action 701'
actionsTable[4038] = 702; // 'state 63' -> UNION -> reduce -> 'action 702'
actionsTable[4039] = 703; // 'state 63' -> PAREN_OPEN -> reduce -> 'action 703'
actionsTable[4040] = 704; // 'state 63' -> PAREN_CLOSE -> reduce -> 'action 704'
actionsTable[4041] = 705; // 'state 63' -> QUANTIFIER -> reduce -> 'action 705'
actionsTable[4043] = 706; // 'state 63' -> BRACKET_CLOSE -> reduce -> 'action 706'
actionsTable[3968] = 707; // 'state 62' -> CHARACTER -> reduce -> 'action 707'
actionsTable[3969] = 708; // 'state 62' -> CONTROL_CHARACTER -> reduce -> 'action 708'
actionsTable[3970] = 709; // 'state 62' -> BACKSLASH -> reduce -> 'action 709'
actionsTable[3973] = 710; // 'state 62' -> DOT -> reduce -> 'action 710'
actionsTable[3974] = 711; // 'state 62' -> UNION -> reduce -> 'action 711'
actionsTable[3975] = 712; // 'state 62' -> PAREN_OPEN -> reduce -> 'action 712'
actionsTable[3976] = 713; // 'state 62' -> PAREN_CLOSE -> reduce -> 'action 713'
actionsTable[3977] = 714; // 'state 62' -> QUANTIFIER -> reduce -> 'action 714'
actionsTable[3979] = 715; // 'state 62' -> BRACKET_CLOSE -> reduce -> 'action 715'
actionsTable[4416] = 716; // 'state 69' -> CHARACTER -> reduce -> 'action 716'
actionsTable[4417] = 717; // 'state 69' -> CONTROL_CHARACTER -> reduce -> 'action 717'
actionsTable[4418] = 718; // 'state 69' -> BACKSLASH -> reduce -> 'action 718'
actionsTable[4421] = 719; // 'state 69' -> DOT -> reduce -> 'action 719'
actionsTable[4422] = 720; // 'state 69' -> UNION -> reduce -> 'action 720'
actionsTable[4423] = 721; // 'state 69' -> PAREN_OPEN -> reduce -> 'action 721'
actionsTable[4424] = 722; // 'state 69' -> PAREN_CLOSE -> reduce -> 'action 722'
actionsTable[4425] = 723; // 'state 69' -> QUANTIFIER -> reduce -> 'action 723'
actionsTable[4427] = 724; // 'state 69' -> BRACKET_CLOSE -> reduce -> 'action 724'
actionsTable[3904] = 725; // 'state 61' -> CHARACTER -> shift -> 'action 725'
actionsTable[3905] = 726; // 'state 61' -> CONTROL_CHARACTER -> shift -> 'action 726'
actionsTable[3906] = 727; // 'state 61' -> BACKSLASH -> shift -> 'action 727'
actionsTable[3909] = 728; // 'state 61' -> DOT -> shift -> 'action 728'
actionsTable[3910] = 729; // 'state 61' -> UNION -> shift -> 'action 729'
actionsTable[3911] = 730; // 'state 61' -> PAREN_OPEN -> shift -> 'action 730'
actionsTable[3912] = 731; // 'state 61' -> PAREN_CLOSE -> shift -> 'action 731'
actionsTable[3913] = 732; // 'state 61' -> QUANTIFIER -> shift -> 'action 732'
actionsTable[3926] = 733; // 'state 61' -> CharacterClassCharacters -> shift -> 'action 733'
actionsTable[3927] = 734; // 'state 61' -> CharacterClassCharacter -> shift -> 'action 734'
actionsTable[3928] = 735; // 'state 61' -> CharacterClassRange -> shift -> 'action 735'
actionsTable[4480] = 736; // 'state 70' -> CHARACTER -> shift -> 'action 736'
actionsTable[4481] = 737; // 'state 70' -> CONTROL_CHARACTER -> shift -> 'action 737'
actionsTable[4482] = 738; // 'state 70' -> BACKSLASH -> shift -> 'action 738'
actionsTable[4483] = 739; // 'state 70' -> CARET -> shift -> 'action 739'
actionsTable[4484] = 740; // 'state 70' -> DASH -> shift -> 'action 740'
actionsTable[4487] = 741; // 'state 70' -> PAREN_OPEN -> shift -> 'action 741'
actionsTable[4490] = 742; // 'state 70' -> BRACKET_OPEN -> shift -> 'action 742'
actionsTable[4499] = 743; // 'state 70' -> Atom -> shift -> 'action 743'
actionsTable[4500] = 744; // 'state 70' -> Group -> shift -> 'action 744'
actionsTable[4501] = 745; // 'state 70' -> CharacterClass -> shift -> 'action 745'
actionsTable[4505] = 746; // 'state 70' -> Character -> shift -> 'action 746'
actionsTable[4486] = 747; // 'state 70' -> UNION -> reduce -> 'action 747'
actionsTable[4488] = 748; // 'state 70' -> PAREN_CLOSE -> reduce -> 'action 748'
actionsTable[4492] = 749; // 'state 70' -> @par-gen.EOF -> reduce -> 'action 749'
actionsTable[4544] = 750; // 'state 71' -> CHARACTER -> shift -> 'action 750'
actionsTable[4545] = 751; // 'state 71' -> CONTROL_CHARACTER -> shift -> 'action 751'
actionsTable[4546] = 752; // 'state 71' -> BACKSLASH -> shift -> 'action 752'
actionsTable[4547] = 753; // 'state 71' -> CARET -> shift -> 'action 753'
actionsTable[4548] = 754; // 'state 71' -> DASH -> shift -> 'action 754'
actionsTable[4551] = 755; // 'state 71' -> PAREN_OPEN -> shift -> 'action 755'
actionsTable[4554] = 756; // 'state 71' -> BRACKET_OPEN -> shift -> 'action 756'
actionsTable[4563] = 757; // 'state 71' -> Atom -> shift -> 'action 757'
actionsTable[4564] = 758; // 'state 71' -> Group -> shift -> 'action 758'
actionsTable[4565] = 759; // 'state 71' -> CharacterClass -> shift -> 'action 759'
actionsTable[4569] = 760; // 'state 71' -> Character -> shift -> 'action 760'
actionsTable[4550] = 761; // 'state 71' -> UNION -> reduce -> 'action 761'
actionsTable[4552] = 762; // 'state 71' -> PAREN_CLOSE -> reduce -> 'action 762'
actionsTable[4556] = 763; // 'state 71' -> @par-gen.EOF -> reduce -> 'action 763'
actionsTable[4608] = 764; // 'state 72' -> CHARACTER -> shift -> 'action 764'
actionsTable[4609] = 765; // 'state 72' -> CONTROL_CHARACTER -> shift -> 'action 765'
actionsTable[4610] = 766; // 'state 72' -> BACKSLASH -> shift -> 'action 766'
actionsTable[4611] = 767; // 'state 72' -> CARET -> shift -> 'action 767'
actionsTable[4612] = 768; // 'state 72' -> DASH -> shift -> 'action 768'
actionsTable[4615] = 769; // 'state 72' -> PAREN_OPEN -> shift -> 'action 769'
actionsTable[4618] = 770; // 'state 72' -> BRACKET_OPEN -> shift -> 'action 770'
actionsTable[4627] = 771; // 'state 72' -> Atom -> shift -> 'action 771'
actionsTable[4628] = 772; // 'state 72' -> Group -> shift -> 'action 772'
actionsTable[4629] = 773; // 'state 72' -> CharacterClass -> shift -> 'action 773'
actionsTable[4633] = 774; // 'state 72' -> Character -> shift -> 'action 774'
actionsTable[4614] = 775; // 'state 72' -> UNION -> reduce -> 'action 775'
actionsTable[4616] = 776; // 'state 72' -> PAREN_CLOSE -> reduce -> 'action 776'
actionsTable[4620] = 777; // 'state 72' -> @par-gen.EOF -> reduce -> 'action 777'
actionsTable[4672] = 778; // 'state 73' -> CHARACTER -> shift -> 'action 778'
actionsTable[4673] = 779; // 'state 73' -> CONTROL_CHARACTER -> shift -> 'action 779'
actionsTable[4674] = 780; // 'state 73' -> BACKSLASH -> shift -> 'action 780'
actionsTable[4675] = 781; // 'state 73' -> CARET -> shift -> 'action 781'
actionsTable[4676] = 782; // 'state 73' -> DASH -> shift -> 'action 782'
actionsTable[4679] = 783; // 'state 73' -> PAREN_OPEN -> shift -> 'action 783'
actionsTable[4682] = 784; // 'state 73' -> BRACKET_OPEN -> shift -> 'action 784'
actionsTable[4691] = 785; // 'state 73' -> Atom -> shift -> 'action 785'
actionsTable[4692] = 786; // 'state 73' -> Group -> shift -> 'action 786'
actionsTable[4693] = 787; // 'state 73' -> CharacterClass -> shift -> 'action 787'
actionsTable[4697] = 788; // 'state 73' -> Character -> shift -> 'action 788'
actionsTable[4678] = 789; // 'state 73' -> UNION -> reduce -> 'action 789'
actionsTable[4680] = 790; // 'state 73' -> PAREN_CLOSE -> reduce -> 'action 790'
actionsTable[4684] = 791; // 'state 73' -> @par-gen.EOF -> reduce -> 'action 791'
actionsTable[4736] = 792; // 'state 74' -> CHARACTER -> reduce -> 'action 792'
actionsTable[4737] = 793; // 'state 74' -> CONTROL_CHARACTER -> reduce -> 'action 793'
actionsTable[4738] = 794; // 'state 74' -> BACKSLASH -> reduce -> 'action 794'
actionsTable[4739] = 795; // 'state 74' -> CARET -> reduce -> 'action 795'
actionsTable[4740] = 796; // 'state 74' -> DASH -> reduce -> 'action 796'
actionsTable[4742] = 797; // 'state 74' -> UNION -> reduce -> 'action 797'
actionsTable[4743] = 798; // 'state 74' -> PAREN_OPEN -> reduce -> 'action 798'
actionsTable[4744] = 799; // 'state 74' -> PAREN_CLOSE -> reduce -> 'action 799'
actionsTable[4746] = 800; // 'state 74' -> BRACKET_OPEN -> reduce -> 'action 800'
actionsTable[4748] = 801; // 'state 74' -> @par-gen.EOF -> reduce -> 'action 801'
actionsTable[4800] = 802; // 'state 75' -> CHARACTER -> reduce -> 'action 802'
actionsTable[4801] = 803; // 'state 75' -> CONTROL_CHARACTER -> reduce -> 'action 803'
actionsTable[4802] = 804; // 'state 75' -> BACKSLASH -> reduce -> 'action 804'
actionsTable[4803] = 805; // 'state 75' -> CARET -> reduce -> 'action 805'
actionsTable[4804] = 806; // 'state 75' -> DASH -> reduce -> 'action 806'
actionsTable[4806] = 807; // 'state 75' -> UNION -> reduce -> 'action 807'
actionsTable[4807] = 808; // 'state 75' -> PAREN_OPEN -> reduce -> 'action 808'
actionsTable[4808] = 809; // 'state 75' -> PAREN_CLOSE -> reduce -> 'action 809'
actionsTable[4810] = 810; // 'state 75' -> BRACKET_OPEN -> reduce -> 'action 810'
actionsTable[4812] = 811; // 'state 75' -> @par-gen.EOF -> reduce -> 'action 811'
actionsTable[4864] = 812; // 'state 76' -> CHARACTER -> reduce -> 'action 812'
actionsTable[4865] = 813; // 'state 76' -> CONTROL_CHARACTER -> reduce -> 'action 813'
actionsTable[4866] = 814; // 'state 76' -> BACKSLASH -> reduce -> 'action 814'
actionsTable[4867] = 815; // 'state 76' -> CARET -> reduce -> 'action 815'
actionsTable[4868] = 816; // 'state 76' -> DASH -> reduce -> 'action 816'
actionsTable[4870] = 817; // 'state 76' -> UNION -> reduce -> 'action 817'
actionsTable[4871] = 818; // 'state 76' -> PAREN_OPEN -> reduce -> 'action 818'
actionsTable[4872] = 819; // 'state 76' -> PAREN_CLOSE -> reduce -> 'action 819'
actionsTable[4874] = 820; // 'state 76' -> BRACKET_OPEN -> reduce -> 'action 820'
actionsTable[4876] = 821; // 'state 76' -> @par-gen.EOF -> reduce -> 'action 821'
actionsTable[5504] = 822; // 'state 86' -> CHARACTER -> reduce -> 'action 822'
actionsTable[5505] = 823; // 'state 86' -> CONTROL_CHARACTER -> reduce -> 'action 823'
actionsTable[5506] = 824; // 'state 86' -> BACKSLASH -> reduce -> 'action 824'
actionsTable[5507] = 825; // 'state 86' -> CARET -> reduce -> 'action 825'
actionsTable[5508] = 826; // 'state 86' -> DASH -> reduce -> 'action 826'
actionsTable[5510] = 827; // 'state 86' -> UNION -> reduce -> 'action 827'
actionsTable[5511] = 828; // 'state 86' -> PAREN_OPEN -> reduce -> 'action 828'
actionsTable[5512] = 829; // 'state 86' -> PAREN_CLOSE -> reduce -> 'action 829'
actionsTable[5513] = 830; // 'state 86' -> QUANTIFIER -> reduce -> 'action 830'
actionsTable[5514] = 831; // 'state 86' -> BRACKET_OPEN -> reduce -> 'action 831'
actionsTable[5516] = 832; // 'state 86' -> @par-gen.EOF -> reduce -> 'action 832'
actionsTable[4928] = 833; // 'state 77' -> CHARACTER -> reduce -> 'action 833'
actionsTable[4929] = 834; // 'state 77' -> CONTROL_CHARACTER -> reduce -> 'action 834'
actionsTable[4930] = 835; // 'state 77' -> BACKSLASH -> reduce -> 'action 835'
actionsTable[4931] = 836; // 'state 77' -> CARET -> reduce -> 'action 836'
actionsTable[4932] = 837; // 'state 77' -> DASH -> reduce -> 'action 837'
actionsTable[4934] = 838; // 'state 77' -> UNION -> reduce -> 'action 838'
actionsTable[4935] = 839; // 'state 77' -> PAREN_OPEN -> reduce -> 'action 839'
actionsTable[4936] = 840; // 'state 77' -> PAREN_CLOSE -> reduce -> 'action 840'
actionsTable[4937] = 841; // 'state 77' -> QUANTIFIER -> reduce -> 'action 841'
actionsTable[4938] = 842; // 'state 77' -> BRACKET_OPEN -> reduce -> 'action 842'
actionsTable[4940] = 843; // 'state 77' -> @par-gen.EOF -> reduce -> 'action 843'
actionsTable[4992] = 844; // 'state 78' -> CHARACTER -> reduce -> 'action 844'
actionsTable[4993] = 845; // 'state 78' -> CONTROL_CHARACTER -> reduce -> 'action 845'
actionsTable[4994] = 846; // 'state 78' -> BACKSLASH -> reduce -> 'action 846'
actionsTable[4995] = 847; // 'state 78' -> CARET -> reduce -> 'action 847'
actionsTable[4996] = 848; // 'state 78' -> DASH -> reduce -> 'action 848'
actionsTable[4998] = 849; // 'state 78' -> UNION -> reduce -> 'action 849'
actionsTable[4999] = 850; // 'state 78' -> PAREN_OPEN -> reduce -> 'action 850'
actionsTable[5000] = 851; // 'state 78' -> PAREN_CLOSE -> reduce -> 'action 851'
actionsTable[5001] = 852; // 'state 78' -> QUANTIFIER -> reduce -> 'action 852'
actionsTable[5002] = 853; // 'state 78' -> BRACKET_OPEN -> reduce -> 'action 853'
actionsTable[5004] = 854; // 'state 78' -> @par-gen.EOF -> reduce -> 'action 854'
actionsTable[5056] = 855; // 'state 79' -> CHARACTER -> reduce -> 'action 855'
actionsTable[5057] = 856; // 'state 79' -> CONTROL_CHARACTER -> reduce -> 'action 856'
actionsTable[5058] = 857; // 'state 79' -> BACKSLASH -> reduce -> 'action 857'
actionsTable[5059] = 858; // 'state 79' -> CARET -> reduce -> 'action 858'
actionsTable[5060] = 859; // 'state 79' -> DASH -> reduce -> 'action 859'
actionsTable[5062] = 860; // 'state 79' -> UNION -> reduce -> 'action 860'
actionsTable[5063] = 861; // 'state 79' -> PAREN_OPEN -> reduce -> 'action 861'
actionsTable[5064] = 862; // 'state 79' -> PAREN_CLOSE -> reduce -> 'action 862'
actionsTable[5065] = 863; // 'state 79' -> QUANTIFIER -> reduce -> 'action 863'
actionsTable[5066] = 864; // 'state 79' -> BRACKET_OPEN -> reduce -> 'action 864'
actionsTable[5068] = 865; // 'state 79' -> @par-gen.EOF -> reduce -> 'action 865'
actionsTable[5120] = 866; // 'state 80' -> CHARACTER -> reduce -> 'action 866'
actionsTable[5121] = 867; // 'state 80' -> CONTROL_CHARACTER -> reduce -> 'action 867'
actionsTable[5122] = 868; // 'state 80' -> BACKSLASH -> reduce -> 'action 868'
actionsTable[5123] = 869; // 'state 80' -> CARET -> reduce -> 'action 869'
actionsTable[5124] = 870; // 'state 80' -> DASH -> reduce -> 'action 870'
actionsTable[5126] = 871; // 'state 80' -> UNION -> reduce -> 'action 871'
actionsTable[5127] = 872; // 'state 80' -> PAREN_OPEN -> reduce -> 'action 872'
actionsTable[5128] = 873; // 'state 80' -> PAREN_CLOSE -> reduce -> 'action 873'
actionsTable[5129] = 874; // 'state 80' -> QUANTIFIER -> reduce -> 'action 874'
actionsTable[5130] = 875; // 'state 80' -> BRACKET_OPEN -> reduce -> 'action 875'
actionsTable[5132] = 876; // 'state 80' -> @par-gen.EOF -> reduce -> 'action 876'
actionsTable[5184] = 877; // 'state 81' -> CHARACTER -> reduce -> 'action 877'
actionsTable[5185] = 878; // 'state 81' -> CONTROL_CHARACTER -> reduce -> 'action 878'
actionsTable[5186] = 879; // 'state 81' -> BACKSLASH -> reduce -> 'action 879'
actionsTable[5187] = 880; // 'state 81' -> CARET -> reduce -> 'action 880'
actionsTable[5188] = 881; // 'state 81' -> DASH -> reduce -> 'action 881'
actionsTable[5190] = 882; // 'state 81' -> UNION -> reduce -> 'action 882'
actionsTable[5191] = 883; // 'state 81' -> PAREN_OPEN -> reduce -> 'action 883'
actionsTable[5192] = 884; // 'state 81' -> PAREN_CLOSE -> reduce -> 'action 884'
actionsTable[5193] = 885; // 'state 81' -> QUANTIFIER -> reduce -> 'action 885'
actionsTable[5194] = 886; // 'state 81' -> BRACKET_OPEN -> reduce -> 'action 886'
actionsTable[5196] = 887; // 'state 81' -> @par-gen.EOF -> reduce -> 'action 887'
actionsTable[5248] = 888; // 'state 82' -> CHARACTER -> reduce -> 'action 888'
actionsTable[5249] = 889; // 'state 82' -> CONTROL_CHARACTER -> reduce -> 'action 889'
actionsTable[5250] = 890; // 'state 82' -> BACKSLASH -> reduce -> 'action 890'
actionsTable[5251] = 891; // 'state 82' -> CARET -> reduce -> 'action 891'
actionsTable[5252] = 892; // 'state 82' -> DASH -> reduce -> 'action 892'
actionsTable[5254] = 893; // 'state 82' -> UNION -> reduce -> 'action 893'
actionsTable[5255] = 894; // 'state 82' -> PAREN_OPEN -> reduce -> 'action 894'
actionsTable[5256] = 895; // 'state 82' -> PAREN_CLOSE -> reduce -> 'action 895'
actionsTable[5257] = 896; // 'state 82' -> QUANTIFIER -> reduce -> 'action 896'
actionsTable[5258] = 897; // 'state 82' -> BRACKET_OPEN -> reduce -> 'action 897'
actionsTable[5260] = 898; // 'state 82' -> @par-gen.EOF -> reduce -> 'action 898'
actionsTable[5376] = 899; // 'state 84' -> CHARACTER -> reduce -> 'action 899'
actionsTable[5377] = 900; // 'state 84' -> CONTROL_CHARACTER -> reduce -> 'action 900'
actionsTable[5378] = 901; // 'state 84' -> BACKSLASH -> reduce -> 'action 901'
actionsTable[5379] = 902; // 'state 84' -> CARET -> reduce -> 'action 902'
actionsTable[5380] = 903; // 'state 84' -> DASH -> reduce -> 'action 903'
actionsTable[5382] = 904; // 'state 84' -> UNION -> reduce -> 'action 904'
actionsTable[5383] = 905; // 'state 84' -> PAREN_OPEN -> reduce -> 'action 905'
actionsTable[5384] = 906; // 'state 84' -> PAREN_CLOSE -> reduce -> 'action 906'
actionsTable[5385] = 907; // 'state 84' -> QUANTIFIER -> reduce -> 'action 907'
actionsTable[5386] = 908; // 'state 84' -> BRACKET_OPEN -> reduce -> 'action 908'
actionsTable[5388] = 909; // 'state 84' -> @par-gen.EOF -> reduce -> 'action 909'
actionsTable[5440] = 910; // 'state 85' -> CHARACTER -> reduce -> 'action 910'
actionsTable[5441] = 911; // 'state 85' -> CONTROL_CHARACTER -> reduce -> 'action 911'
actionsTable[5442] = 912; // 'state 85' -> BACKSLASH -> reduce -> 'action 912'
actionsTable[5443] = 913; // 'state 85' -> CARET -> reduce -> 'action 913'
actionsTable[5444] = 914; // 'state 85' -> DASH -> reduce -> 'action 914'
actionsTable[5446] = 915; // 'state 85' -> UNION -> reduce -> 'action 915'
actionsTable[5447] = 916; // 'state 85' -> PAREN_OPEN -> reduce -> 'action 916'
actionsTable[5448] = 917; // 'state 85' -> PAREN_CLOSE -> reduce -> 'action 917'
actionsTable[5449] = 918; // 'state 85' -> QUANTIFIER -> reduce -> 'action 918'
actionsTable[5450] = 919; // 'state 85' -> BRACKET_OPEN -> reduce -> 'action 919'
actionsTable[5452] = 920; // 'state 85' -> @par-gen.EOF -> reduce -> 'action 920'
actionsTable[5312] = 921; // 'state 83' -> CHARACTER -> reduce -> 'action 921'
actionsTable[5313] = 922; // 'state 83' -> CONTROL_CHARACTER -> reduce -> 'action 922'
actionsTable[5314] = 923; // 'state 83' -> BACKSLASH -> reduce -> 'action 923'
actionsTable[5315] = 924; // 'state 83' -> CARET -> reduce -> 'action 924'
actionsTable[5316] = 925; // 'state 83' -> DASH -> reduce -> 'action 925'
actionsTable[5318] = 926; // 'state 83' -> UNION -> reduce -> 'action 926'
actionsTable[5319] = 927; // 'state 83' -> PAREN_OPEN -> reduce -> 'action 927'
actionsTable[5320] = 928; // 'state 83' -> PAREN_CLOSE -> reduce -> 'action 928'
actionsTable[5321] = 929; // 'state 83' -> QUANTIFIER -> reduce -> 'action 929'
actionsTable[5322] = 930; // 'state 83' -> BRACKET_OPEN -> reduce -> 'action 930'
actionsTable[5324] = 931; // 'state 83' -> @par-gen.EOF -> reduce -> 'action 931'
actionsTable[5574] = 932; // 'state 87' -> UNION -> shift -> 'action 932'
actionsTable[5576] = 933; // 'state 87' -> PAREN_CLOSE -> shift -> 'action 933'
actionsTable[5632] = 934; // 'state 88' -> CHARACTER -> shift -> 'action 934'
actionsTable[5633] = 935; // 'state 88' -> CONTROL_CHARACTER -> shift -> 'action 935'
actionsTable[5634] = 936; // 'state 88' -> BACKSLASH -> shift -> 'action 936'
actionsTable[5635] = 937; // 'state 88' -> CARET -> shift -> 'action 937'
actionsTable[5636] = 938; // 'state 88' -> DASH -> shift -> 'action 938'
actionsTable[5638] = 939; // 'state 88' -> UNION -> shift -> 'action 939'
actionsTable[5639] = 940; // 'state 88' -> PAREN_OPEN -> shift -> 'action 940'
actionsTable[5640] = 941; // 'state 88' -> PAREN_CLOSE -> shift -> 'action 941'
actionsTable[5642] = 942; // 'state 88' -> BRACKET_OPEN -> shift -> 'action 942'
actionsTable[5651] = 943; // 'state 88' -> Atom -> shift -> 'action 943'
actionsTable[5652] = 944; // 'state 88' -> Group -> shift -> 'action 944'
actionsTable[5653] = 945; // 'state 88' -> CharacterClass -> shift -> 'action 945'
actionsTable[5657] = 946; // 'state 88' -> Character -> shift -> 'action 946'
actionsTable[5696] = 947; // 'state 89' -> CHARACTER -> shift -> 'action 947'
actionsTable[5697] = 948; // 'state 89' -> CONTROL_CHARACTER -> shift -> 'action 948'
actionsTable[5698] = 949; // 'state 89' -> BACKSLASH -> shift -> 'action 949'
actionsTable[5699] = 950; // 'state 89' -> CARET -> shift -> 'action 950'
actionsTable[5700] = 951; // 'state 89' -> DASH -> shift -> 'action 951'
actionsTable[5702] = 952; // 'state 89' -> UNION -> shift -> 'action 952'
actionsTable[5703] = 953; // 'state 89' -> PAREN_OPEN -> shift -> 'action 953'
actionsTable[5704] = 954; // 'state 89' -> PAREN_CLOSE -> shift -> 'action 954'
actionsTable[5706] = 955; // 'state 89' -> BRACKET_OPEN -> shift -> 'action 955'
actionsTable[5715] = 956; // 'state 89' -> Atom -> shift -> 'action 956'
actionsTable[5716] = 957; // 'state 89' -> Group -> shift -> 'action 957'
actionsTable[5717] = 958; // 'state 89' -> CharacterClass -> shift -> 'action 958'
actionsTable[5721] = 959; // 'state 89' -> Character -> shift -> 'action 959'
actionsTable[6336] = 960; // 'state 99' -> CHARACTER -> shift -> 'action 960'
actionsTable[6337] = 961; // 'state 99' -> CONTROL_CHARACTER -> shift -> 'action 961'
actionsTable[6338] = 962; // 'state 99' -> BACKSLASH -> shift -> 'action 962'
actionsTable[6341] = 963; // 'state 99' -> DOT -> shift -> 'action 963'
actionsTable[6342] = 964; // 'state 99' -> UNION -> shift -> 'action 964'
actionsTable[6343] = 965; // 'state 99' -> PAREN_OPEN -> shift -> 'action 965'
actionsTable[6344] = 966; // 'state 99' -> PAREN_CLOSE -> shift -> 'action 966'
actionsTable[6345] = 967; // 'state 99' -> QUANTIFIER -> shift -> 'action 967'
actionsTable[6347] = 968; // 'state 99' -> BRACKET_CLOSE -> shift -> 'action 968'
actionsTable[6359] = 969; // 'state 99' -> CharacterClassCharacter -> shift -> 'action 969'
actionsTable[6360] = 970; // 'state 99' -> CharacterClassRange -> shift -> 'action 970'
actionsTable[6400] = 971; // 'state 100' -> CHARACTER -> reduce -> 'action 971'
actionsTable[6401] = 972; // 'state 100' -> CONTROL_CHARACTER -> reduce -> 'action 972'
actionsTable[6402] = 973; // 'state 100' -> BACKSLASH -> reduce -> 'action 973'
actionsTable[6405] = 974; // 'state 100' -> DOT -> reduce -> 'action 974'
actionsTable[6406] = 975; // 'state 100' -> UNION -> reduce -> 'action 975'
actionsTable[6407] = 976; // 'state 100' -> PAREN_OPEN -> reduce -> 'action 976'
actionsTable[6408] = 977; // 'state 100' -> PAREN_CLOSE -> reduce -> 'action 977'
actionsTable[6409] = 978; // 'state 100' -> QUANTIFIER -> reduce -> 'action 978'
actionsTable[6411] = 979; // 'state 100' -> BRACKET_CLOSE -> reduce -> 'action 979'
actionsTable[5764] = 980; // 'state 90' -> DASH -> shift -> 'action 980'
actionsTable[5760] = 981; // 'state 90' -> CHARACTER -> reduce -> 'action 981'
actionsTable[5761] = 982; // 'state 90' -> CONTROL_CHARACTER -> reduce -> 'action 982'
actionsTable[5762] = 983; // 'state 90' -> BACKSLASH -> reduce -> 'action 983'
actionsTable[5765] = 984; // 'state 90' -> DOT -> reduce -> 'action 984'
actionsTable[5766] = 985; // 'state 90' -> UNION -> reduce -> 'action 985'
actionsTable[5767] = 986; // 'state 90' -> PAREN_OPEN -> reduce -> 'action 986'
actionsTable[5768] = 987; // 'state 90' -> PAREN_CLOSE -> reduce -> 'action 987'
actionsTable[5769] = 988; // 'state 90' -> QUANTIFIER -> reduce -> 'action 988'
actionsTable[5771] = 989; // 'state 90' -> BRACKET_CLOSE -> reduce -> 'action 989'
actionsTable[5824] = 990; // 'state 91' -> CHARACTER -> reduce -> 'action 990'
actionsTable[5825] = 991; // 'state 91' -> CONTROL_CHARACTER -> reduce -> 'action 991'
actionsTable[5826] = 992; // 'state 91' -> BACKSLASH -> reduce -> 'action 992'
actionsTable[5829] = 993; // 'state 91' -> DOT -> reduce -> 'action 993'
actionsTable[5830] = 994; // 'state 91' -> UNION -> reduce -> 'action 994'
actionsTable[5831] = 995; // 'state 91' -> PAREN_OPEN -> reduce -> 'action 995'
actionsTable[5832] = 996; // 'state 91' -> PAREN_CLOSE -> reduce -> 'action 996'
actionsTable[5833] = 997; // 'state 91' -> QUANTIFIER -> reduce -> 'action 997'
actionsTable[5835] = 998; // 'state 91' -> BRACKET_CLOSE -> reduce -> 'action 998'
actionsTable[5889] = 999; // 'state 92' -> CONTROL_CHARACTER -> shift -> 'action 999'
actionsTable[5890] = 1000; // 'state 92' -> BACKSLASH -> shift -> 'action 1000'
actionsTable[5891] = 1001; // 'state 92' -> CARET -> shift -> 'action 1001'
actionsTable[5892] = 1002; // 'state 92' -> DASH -> shift -> 'action 1002'
actionsTable[5898] = 1003; // 'state 92' -> BRACKET_OPEN -> shift -> 'action 1003'
actionsTable[5899] = 1004; // 'state 92' -> BRACKET_CLOSE -> shift -> 'action 1004'
actionsTable[6272] = 1005; // 'state 98' -> CHARACTER -> reduce -> 'action 1005'
actionsTable[6273] = 1006; // 'state 98' -> CONTROL_CHARACTER -> reduce -> 'action 1006'
actionsTable[6274] = 1007; // 'state 98' -> BACKSLASH -> reduce -> 'action 1007'
actionsTable[6277] = 1008; // 'state 98' -> DOT -> reduce -> 'action 1008'
actionsTable[6278] = 1009; // 'state 98' -> UNION -> reduce -> 'action 1009'
actionsTable[6279] = 1010; // 'state 98' -> PAREN_OPEN -> reduce -> 'action 1010'
actionsTable[6280] = 1011; // 'state 98' -> PAREN_CLOSE -> reduce -> 'action 1011'
actionsTable[6281] = 1012; // 'state 98' -> QUANTIFIER -> reduce -> 'action 1012'
actionsTable[6283] = 1013; // 'state 98' -> BRACKET_CLOSE -> reduce -> 'action 1013'
actionsTable[6144] = 1014; // 'state 96' -> CHARACTER -> reduce -> 'action 1014'
actionsTable[6145] = 1015; // 'state 96' -> CONTROL_CHARACTER -> reduce -> 'action 1015'
actionsTable[6146] = 1016; // 'state 96' -> BACKSLASH -> reduce -> 'action 1016'
actionsTable[6149] = 1017; // 'state 96' -> DOT -> reduce -> 'action 1017'
actionsTable[6150] = 1018; // 'state 96' -> UNION -> reduce -> 'action 1018'
actionsTable[6151] = 1019; // 'state 96' -> PAREN_OPEN -> reduce -> 'action 1019'
actionsTable[6152] = 1020; // 'state 96' -> PAREN_CLOSE -> reduce -> 'action 1020'
actionsTable[6153] = 1021; // 'state 96' -> QUANTIFIER -> reduce -> 'action 1021'
actionsTable[6155] = 1022; // 'state 96' -> BRACKET_CLOSE -> reduce -> 'action 1022'
actionsTable[6208] = 1023; // 'state 97' -> CHARACTER -> reduce -> 'action 1023'
actionsTable[6209] = 1024; // 'state 97' -> CONTROL_CHARACTER -> reduce -> 'action 1024'
actionsTable[6210] = 1025; // 'state 97' -> BACKSLASH -> reduce -> 'action 1025'
actionsTable[6213] = 1026; // 'state 97' -> DOT -> reduce -> 'action 1026'
actionsTable[6214] = 1027; // 'state 97' -> UNION -> reduce -> 'action 1027'
actionsTable[6215] = 1028; // 'state 97' -> PAREN_OPEN -> reduce -> 'action 1028'
actionsTable[6216] = 1029; // 'state 97' -> PAREN_CLOSE -> reduce -> 'action 1029'
actionsTable[6217] = 1030; // 'state 97' -> QUANTIFIER -> reduce -> 'action 1030'
actionsTable[6219] = 1031; // 'state 97' -> BRACKET_CLOSE -> reduce -> 'action 1031'
actionsTable[6080] = 1032; // 'state 95' -> CHARACTER -> reduce -> 'action 1032'
actionsTable[6081] = 1033; // 'state 95' -> CONTROL_CHARACTER -> reduce -> 'action 1033'
actionsTable[6082] = 1034; // 'state 95' -> BACKSLASH -> reduce -> 'action 1034'
actionsTable[6085] = 1035; // 'state 95' -> DOT -> reduce -> 'action 1035'
actionsTable[6086] = 1036; // 'state 95' -> UNION -> reduce -> 'action 1036'
actionsTable[6087] = 1037; // 'state 95' -> PAREN_OPEN -> reduce -> 'action 1037'
actionsTable[6088] = 1038; // 'state 95' -> PAREN_CLOSE -> reduce -> 'action 1038'
actionsTable[6089] = 1039; // 'state 95' -> QUANTIFIER -> reduce -> 'action 1039'
actionsTable[6091] = 1040; // 'state 95' -> BRACKET_CLOSE -> reduce -> 'action 1040'
actionsTable[6016] = 1041; // 'state 94' -> CHARACTER -> reduce -> 'action 1041'
actionsTable[6017] = 1042; // 'state 94' -> CONTROL_CHARACTER -> reduce -> 'action 1042'
actionsTable[6018] = 1043; // 'state 94' -> BACKSLASH -> reduce -> 'action 1043'
actionsTable[6021] = 1044; // 'state 94' -> DOT -> reduce -> 'action 1044'
actionsTable[6022] = 1045; // 'state 94' -> UNION -> reduce -> 'action 1045'
actionsTable[6023] = 1046; // 'state 94' -> PAREN_OPEN -> reduce -> 'action 1046'
actionsTable[6024] = 1047; // 'state 94' -> PAREN_CLOSE -> reduce -> 'action 1047'
actionsTable[6025] = 1048; // 'state 94' -> QUANTIFIER -> reduce -> 'action 1048'
actionsTable[6027] = 1049; // 'state 94' -> BRACKET_CLOSE -> reduce -> 'action 1049'
actionsTable[6464] = 1050; // 'state 101' -> CHARACTER -> reduce -> 'action 1050'
actionsTable[6465] = 1051; // 'state 101' -> CONTROL_CHARACTER -> reduce -> 'action 1051'
actionsTable[6466] = 1052; // 'state 101' -> BACKSLASH -> reduce -> 'action 1052'
actionsTable[6469] = 1053; // 'state 101' -> DOT -> reduce -> 'action 1053'
actionsTable[6470] = 1054; // 'state 101' -> UNION -> reduce -> 'action 1054'
actionsTable[6471] = 1055; // 'state 101' -> PAREN_OPEN -> reduce -> 'action 1055'
actionsTable[6472] = 1056; // 'state 101' -> PAREN_CLOSE -> reduce -> 'action 1056'
actionsTable[6473] = 1057; // 'state 101' -> QUANTIFIER -> reduce -> 'action 1057'
actionsTable[6475] = 1058; // 'state 101' -> BRACKET_CLOSE -> reduce -> 'action 1058'
actionsTable[5952] = 1059; // 'state 93' -> CHARACTER -> shift -> 'action 1059'
actionsTable[5953] = 1060; // 'state 93' -> CONTROL_CHARACTER -> shift -> 'action 1060'
actionsTable[5954] = 1061; // 'state 93' -> BACKSLASH -> shift -> 'action 1061'
actionsTable[5957] = 1062; // 'state 93' -> DOT -> shift -> 'action 1062'
actionsTable[5958] = 1063; // 'state 93' -> UNION -> shift -> 'action 1063'
actionsTable[5959] = 1064; // 'state 93' -> PAREN_OPEN -> shift -> 'action 1064'
actionsTable[5960] = 1065; // 'state 93' -> PAREN_CLOSE -> shift -> 'action 1065'
actionsTable[5961] = 1066; // 'state 93' -> QUANTIFIER -> shift -> 'action 1066'
actionsTable[5974] = 1067; // 'state 93' -> CharacterClassCharacters -> shift -> 'action 1067'
actionsTable[5975] = 1068; // 'state 93' -> CharacterClassCharacter -> shift -> 'action 1068'
actionsTable[5976] = 1069; // 'state 93' -> CharacterClassRange -> shift -> 'action 1069'
actionsTable[6528] = 1070; // 'state 102' -> CHARACTER -> shift -> 'action 1070'
actionsTable[6529] = 1071; // 'state 102' -> CONTROL_CHARACTER -> shift -> 'action 1071'
actionsTable[6530] = 1072; // 'state 102' -> BACKSLASH -> shift -> 'action 1072'
actionsTable[6531] = 1073; // 'state 102' -> CARET -> shift -> 'action 1073'
actionsTable[6532] = 1074; // 'state 102' -> DASH -> shift -> 'action 1074'
actionsTable[6535] = 1075; // 'state 102' -> PAREN_OPEN -> shift -> 'action 1075'
actionsTable[6538] = 1076; // 'state 102' -> BRACKET_OPEN -> shift -> 'action 1076'
actionsTable[6547] = 1077; // 'state 102' -> Atom -> shift -> 'action 1077'
actionsTable[6548] = 1078; // 'state 102' -> Group -> shift -> 'action 1078'
actionsTable[6549] = 1079; // 'state 102' -> CharacterClass -> shift -> 'action 1079'
actionsTable[6553] = 1080; // 'state 102' -> Character -> shift -> 'action 1080'
actionsTable[6534] = 1081; // 'state 102' -> UNION -> reduce -> 'action 1081'
actionsTable[6536] = 1082; // 'state 102' -> PAREN_CLOSE -> reduce -> 'action 1082'
actionsTable[6540] = 1083; // 'state 102' -> @par-gen.EOF -> reduce -> 'action 1083'
actionsTable[6592] = 1084; // 'state 103' -> CHARACTER -> shift -> 'action 1084'
actionsTable[6593] = 1085; // 'state 103' -> CONTROL_CHARACTER -> shift -> 'action 1085'
actionsTable[6594] = 1086; // 'state 103' -> BACKSLASH -> shift -> 'action 1086'
actionsTable[6595] = 1087; // 'state 103' -> CARET -> shift -> 'action 1087'
actionsTable[6596] = 1088; // 'state 103' -> DASH -> shift -> 'action 1088'
actionsTable[6599] = 1089; // 'state 103' -> PAREN_OPEN -> shift -> 'action 1089'
actionsTable[6602] = 1090; // 'state 103' -> BRACKET_OPEN -> shift -> 'action 1090'
actionsTable[6611] = 1091; // 'state 103' -> Atom -> shift -> 'action 1091'
actionsTable[6612] = 1092; // 'state 103' -> Group -> shift -> 'action 1092'
actionsTable[6613] = 1093; // 'state 103' -> CharacterClass -> shift -> 'action 1093'
actionsTable[6617] = 1094; // 'state 103' -> Character -> shift -> 'action 1094'
actionsTable[6598] = 1095; // 'state 103' -> UNION -> reduce -> 'action 1095'
actionsTable[6600] = 1096; // 'state 103' -> PAREN_CLOSE -> reduce -> 'action 1096'
actionsTable[6604] = 1097; // 'state 103' -> @par-gen.EOF -> reduce -> 'action 1097'
actionsTable[6656] = 1098; // 'state 104' -> CHARACTER -> reduce -> 'action 1098'
actionsTable[6657] = 1099; // 'state 104' -> CONTROL_CHARACTER -> reduce -> 'action 1099'
actionsTable[6658] = 1100; // 'state 104' -> BACKSLASH -> reduce -> 'action 1100'
actionsTable[6659] = 1101; // 'state 104' -> CARET -> reduce -> 'action 1101'
actionsTable[6660] = 1102; // 'state 104' -> DASH -> reduce -> 'action 1102'
actionsTable[6662] = 1103; // 'state 104' -> UNION -> reduce -> 'action 1103'
actionsTable[6663] = 1104; // 'state 104' -> PAREN_OPEN -> reduce -> 'action 1104'
actionsTable[6664] = 1105; // 'state 104' -> PAREN_CLOSE -> reduce -> 'action 1105'
actionsTable[6666] = 1106; // 'state 104' -> BRACKET_OPEN -> reduce -> 'action 1106'
actionsTable[6668] = 1107; // 'state 104' -> @par-gen.EOF -> reduce -> 'action 1107'
actionsTable[6720] = 1108; // 'state 105' -> CHARACTER -> reduce -> 'action 1108'
actionsTable[6721] = 1109; // 'state 105' -> CONTROL_CHARACTER -> reduce -> 'action 1109'
actionsTable[6722] = 1110; // 'state 105' -> BACKSLASH -> reduce -> 'action 1110'
actionsTable[6723] = 1111; // 'state 105' -> CARET -> reduce -> 'action 1111'
actionsTable[6724] = 1112; // 'state 105' -> DASH -> reduce -> 'action 1112'
actionsTable[6726] = 1113; // 'state 105' -> UNION -> reduce -> 'action 1113'
actionsTable[6727] = 1114; // 'state 105' -> PAREN_OPEN -> reduce -> 'action 1114'
actionsTable[6728] = 1115; // 'state 105' -> PAREN_CLOSE -> reduce -> 'action 1115'
actionsTable[6730] = 1116; // 'state 105' -> BRACKET_OPEN -> reduce -> 'action 1116'
actionsTable[6732] = 1117; // 'state 105' -> @par-gen.EOF -> reduce -> 'action 1117'
actionsTable[6784] = 1118; // 'state 106' -> CHARACTER -> reduce -> 'action 1118'
actionsTable[6785] = 1119; // 'state 106' -> CONTROL_CHARACTER -> reduce -> 'action 1119'
actionsTable[6786] = 1120; // 'state 106' -> BACKSLASH -> reduce -> 'action 1120'
actionsTable[6787] = 1121; // 'state 106' -> CARET -> reduce -> 'action 1121'
actionsTable[6788] = 1122; // 'state 106' -> DASH -> reduce -> 'action 1122'
actionsTable[6790] = 1123; // 'state 106' -> UNION -> reduce -> 'action 1123'
actionsTable[6791] = 1124; // 'state 106' -> PAREN_OPEN -> reduce -> 'action 1124'
actionsTable[6792] = 1125; // 'state 106' -> PAREN_CLOSE -> reduce -> 'action 1125'
actionsTable[6794] = 1126; // 'state 106' -> BRACKET_OPEN -> reduce -> 'action 1126'
actionsTable[6796] = 1127; // 'state 106' -> @par-gen.EOF -> reduce -> 'action 1127'
actionsTable[7424] = 1128; // 'state 116' -> CHARACTER -> reduce -> 'action 1128'
actionsTable[7425] = 1129; // 'state 116' -> CONTROL_CHARACTER -> reduce -> 'action 1129'
actionsTable[7426] = 1130; // 'state 116' -> BACKSLASH -> reduce -> 'action 1130'
actionsTable[7427] = 1131; // 'state 116' -> CARET -> reduce -> 'action 1131'
actionsTable[7428] = 1132; // 'state 116' -> DASH -> reduce -> 'action 1132'
actionsTable[7430] = 1133; // 'state 116' -> UNION -> reduce -> 'action 1133'
actionsTable[7431] = 1134; // 'state 116' -> PAREN_OPEN -> reduce -> 'action 1134'
actionsTable[7432] = 1135; // 'state 116' -> PAREN_CLOSE -> reduce -> 'action 1135'
actionsTable[7433] = 1136; // 'state 116' -> QUANTIFIER -> reduce -> 'action 1136'
actionsTable[7434] = 1137; // 'state 116' -> BRACKET_OPEN -> reduce -> 'action 1137'
actionsTable[7436] = 1138; // 'state 116' -> @par-gen.EOF -> reduce -> 'action 1138'
actionsTable[6848] = 1139; // 'state 107' -> CHARACTER -> reduce -> 'action 1139'
actionsTable[6849] = 1140; // 'state 107' -> CONTROL_CHARACTER -> reduce -> 'action 1140'
actionsTable[6850] = 1141; // 'state 107' -> BACKSLASH -> reduce -> 'action 1141'
actionsTable[6851] = 1142; // 'state 107' -> CARET -> reduce -> 'action 1142'
actionsTable[6852] = 1143; // 'state 107' -> DASH -> reduce -> 'action 1143'
actionsTable[6854] = 1144; // 'state 107' -> UNION -> reduce -> 'action 1144'
actionsTable[6855] = 1145; // 'state 107' -> PAREN_OPEN -> reduce -> 'action 1145'
actionsTable[6856] = 1146; // 'state 107' -> PAREN_CLOSE -> reduce -> 'action 1146'
actionsTable[6857] = 1147; // 'state 107' -> QUANTIFIER -> reduce -> 'action 1147'
actionsTable[6858] = 1148; // 'state 107' -> BRACKET_OPEN -> reduce -> 'action 1148'
actionsTable[6860] = 1149; // 'state 107' -> @par-gen.EOF -> reduce -> 'action 1149'
actionsTable[6912] = 1150; // 'state 108' -> CHARACTER -> reduce -> 'action 1150'
actionsTable[6913] = 1151; // 'state 108' -> CONTROL_CHARACTER -> reduce -> 'action 1151'
actionsTable[6914] = 1152; // 'state 108' -> BACKSLASH -> reduce -> 'action 1152'
actionsTable[6915] = 1153; // 'state 108' -> CARET -> reduce -> 'action 1153'
actionsTable[6916] = 1154; // 'state 108' -> DASH -> reduce -> 'action 1154'
actionsTable[6918] = 1155; // 'state 108' -> UNION -> reduce -> 'action 1155'
actionsTable[6919] = 1156; // 'state 108' -> PAREN_OPEN -> reduce -> 'action 1156'
actionsTable[6920] = 1157; // 'state 108' -> PAREN_CLOSE -> reduce -> 'action 1157'
actionsTable[6921] = 1158; // 'state 108' -> QUANTIFIER -> reduce -> 'action 1158'
actionsTable[6922] = 1159; // 'state 108' -> BRACKET_OPEN -> reduce -> 'action 1159'
actionsTable[6924] = 1160; // 'state 108' -> @par-gen.EOF -> reduce -> 'action 1160'
actionsTable[6976] = 1161; // 'state 109' -> CHARACTER -> reduce -> 'action 1161'
actionsTable[6977] = 1162; // 'state 109' -> CONTROL_CHARACTER -> reduce -> 'action 1162'
actionsTable[6978] = 1163; // 'state 109' -> BACKSLASH -> reduce -> 'action 1163'
actionsTable[6979] = 1164; // 'state 109' -> CARET -> reduce -> 'action 1164'
actionsTable[6980] = 1165; // 'state 109' -> DASH -> reduce -> 'action 1165'
actionsTable[6982] = 1166; // 'state 109' -> UNION -> reduce -> 'action 1166'
actionsTable[6983] = 1167; // 'state 109' -> PAREN_OPEN -> reduce -> 'action 1167'
actionsTable[6984] = 1168; // 'state 109' -> PAREN_CLOSE -> reduce -> 'action 1168'
actionsTable[6985] = 1169; // 'state 109' -> QUANTIFIER -> reduce -> 'action 1169'
actionsTable[6986] = 1170; // 'state 109' -> BRACKET_OPEN -> reduce -> 'action 1170'
actionsTable[6988] = 1171; // 'state 109' -> @par-gen.EOF -> reduce -> 'action 1171'
actionsTable[7040] = 1172; // 'state 110' -> CHARACTER -> reduce -> 'action 1172'
actionsTable[7041] = 1173; // 'state 110' -> CONTROL_CHARACTER -> reduce -> 'action 1173'
actionsTable[7042] = 1174; // 'state 110' -> BACKSLASH -> reduce -> 'action 1174'
actionsTable[7043] = 1175; // 'state 110' -> CARET -> reduce -> 'action 1175'
actionsTable[7044] = 1176; // 'state 110' -> DASH -> reduce -> 'action 1176'
actionsTable[7046] = 1177; // 'state 110' -> UNION -> reduce -> 'action 1177'
actionsTable[7047] = 1178; // 'state 110' -> PAREN_OPEN -> reduce -> 'action 1178'
actionsTable[7048] = 1179; // 'state 110' -> PAREN_CLOSE -> reduce -> 'action 1179'
actionsTable[7049] = 1180; // 'state 110' -> QUANTIFIER -> reduce -> 'action 1180'
actionsTable[7050] = 1181; // 'state 110' -> BRACKET_OPEN -> reduce -> 'action 1181'
actionsTable[7052] = 1182; // 'state 110' -> @par-gen.EOF -> reduce -> 'action 1182'
actionsTable[7104] = 1183; // 'state 111' -> CHARACTER -> reduce -> 'action 1183'
actionsTable[7105] = 1184; // 'state 111' -> CONTROL_CHARACTER -> reduce -> 'action 1184'
actionsTable[7106] = 1185; // 'state 111' -> BACKSLASH -> reduce -> 'action 1185'
actionsTable[7107] = 1186; // 'state 111' -> CARET -> reduce -> 'action 1186'
actionsTable[7108] = 1187; // 'state 111' -> DASH -> reduce -> 'action 1187'
actionsTable[7110] = 1188; // 'state 111' -> UNION -> reduce -> 'action 1188'
actionsTable[7111] = 1189; // 'state 111' -> PAREN_OPEN -> reduce -> 'action 1189'
actionsTable[7112] = 1190; // 'state 111' -> PAREN_CLOSE -> reduce -> 'action 1190'
actionsTable[7113] = 1191; // 'state 111' -> QUANTIFIER -> reduce -> 'action 1191'
actionsTable[7114] = 1192; // 'state 111' -> BRACKET_OPEN -> reduce -> 'action 1192'
actionsTable[7116] = 1193; // 'state 111' -> @par-gen.EOF -> reduce -> 'action 1193'
actionsTable[7168] = 1194; // 'state 112' -> CHARACTER -> reduce -> 'action 1194'
actionsTable[7169] = 1195; // 'state 112' -> CONTROL_CHARACTER -> reduce -> 'action 1195'
actionsTable[7170] = 1196; // 'state 112' -> BACKSLASH -> reduce -> 'action 1196'
actionsTable[7171] = 1197; // 'state 112' -> CARET -> reduce -> 'action 1197'
actionsTable[7172] = 1198; // 'state 112' -> DASH -> reduce -> 'action 1198'
actionsTable[7174] = 1199; // 'state 112' -> UNION -> reduce -> 'action 1199'
actionsTable[7175] = 1200; // 'state 112' -> PAREN_OPEN -> reduce -> 'action 1200'
actionsTable[7176] = 1201; // 'state 112' -> PAREN_CLOSE -> reduce -> 'action 1201'
actionsTable[7177] = 1202; // 'state 112' -> QUANTIFIER -> reduce -> 'action 1202'
actionsTable[7178] = 1203; // 'state 112' -> BRACKET_OPEN -> reduce -> 'action 1203'
actionsTable[7180] = 1204; // 'state 112' -> @par-gen.EOF -> reduce -> 'action 1204'
actionsTable[7296] = 1205; // 'state 114' -> CHARACTER -> reduce -> 'action 1205'
actionsTable[7297] = 1206; // 'state 114' -> CONTROL_CHARACTER -> reduce -> 'action 1206'
actionsTable[7298] = 1207; // 'state 114' -> BACKSLASH -> reduce -> 'action 1207'
actionsTable[7299] = 1208; // 'state 114' -> CARET -> reduce -> 'action 1208'
actionsTable[7300] = 1209; // 'state 114' -> DASH -> reduce -> 'action 1209'
actionsTable[7302] = 1210; // 'state 114' -> UNION -> reduce -> 'action 1210'
actionsTable[7303] = 1211; // 'state 114' -> PAREN_OPEN -> reduce -> 'action 1211'
actionsTable[7304] = 1212; // 'state 114' -> PAREN_CLOSE -> reduce -> 'action 1212'
actionsTable[7305] = 1213; // 'state 114' -> QUANTIFIER -> reduce -> 'action 1213'
actionsTable[7306] = 1214; // 'state 114' -> BRACKET_OPEN -> reduce -> 'action 1214'
actionsTable[7308] = 1215; // 'state 114' -> @par-gen.EOF -> reduce -> 'action 1215'
actionsTable[7360] = 1216; // 'state 115' -> CHARACTER -> reduce -> 'action 1216'
actionsTable[7361] = 1217; // 'state 115' -> CONTROL_CHARACTER -> reduce -> 'action 1217'
actionsTable[7362] = 1218; // 'state 115' -> BACKSLASH -> reduce -> 'action 1218'
actionsTable[7363] = 1219; // 'state 115' -> CARET -> reduce -> 'action 1219'
actionsTable[7364] = 1220; // 'state 115' -> DASH -> reduce -> 'action 1220'
actionsTable[7366] = 1221; // 'state 115' -> UNION -> reduce -> 'action 1221'
actionsTable[7367] = 1222; // 'state 115' -> PAREN_OPEN -> reduce -> 'action 1222'
actionsTable[7368] = 1223; // 'state 115' -> PAREN_CLOSE -> reduce -> 'action 1223'
actionsTable[7369] = 1224; // 'state 115' -> QUANTIFIER -> reduce -> 'action 1224'
actionsTable[7370] = 1225; // 'state 115' -> BRACKET_OPEN -> reduce -> 'action 1225'
actionsTable[7372] = 1226; // 'state 115' -> @par-gen.EOF -> reduce -> 'action 1226'
actionsTable[7232] = 1227; // 'state 113' -> CHARACTER -> reduce -> 'action 1227'
actionsTable[7233] = 1228; // 'state 113' -> CONTROL_CHARACTER -> reduce -> 'action 1228'
actionsTable[7234] = 1229; // 'state 113' -> BACKSLASH -> reduce -> 'action 1229'
actionsTable[7235] = 1230; // 'state 113' -> CARET -> reduce -> 'action 1230'
actionsTable[7236] = 1231; // 'state 113' -> DASH -> reduce -> 'action 1231'
actionsTable[7238] = 1232; // 'state 113' -> UNION -> reduce -> 'action 1232'
actionsTable[7239] = 1233; // 'state 113' -> PAREN_OPEN -> reduce -> 'action 1233'
actionsTable[7240] = 1234; // 'state 113' -> PAREN_CLOSE -> reduce -> 'action 1234'
actionsTable[7241] = 1235; // 'state 113' -> QUANTIFIER -> reduce -> 'action 1235'
actionsTable[7242] = 1236; // 'state 113' -> BRACKET_OPEN -> reduce -> 'action 1236'
actionsTable[7244] = 1237; // 'state 113' -> @par-gen.EOF -> reduce -> 'action 1237'
actionsTable[7494] = 1238; // 'state 117' -> UNION -> shift -> 'action 1238'
actionsTable[7496] = 1239; // 'state 117' -> PAREN_CLOSE -> shift -> 'action 1239'
actionsTable[7552] = 1240; // 'state 118' -> CHARACTER -> shift -> 'action 1240'
actionsTable[7553] = 1241; // 'state 118' -> CONTROL_CHARACTER -> shift -> 'action 1241'
actionsTable[7554] = 1242; // 'state 118' -> BACKSLASH -> shift -> 'action 1242'
actionsTable[7555] = 1243; // 'state 118' -> CARET -> shift -> 'action 1243'
actionsTable[7556] = 1244; // 'state 118' -> DASH -> shift -> 'action 1244'
actionsTable[7558] = 1245; // 'state 118' -> UNION -> shift -> 'action 1245'
actionsTable[7559] = 1246; // 'state 118' -> PAREN_OPEN -> shift -> 'action 1246'
actionsTable[7560] = 1247; // 'state 118' -> PAREN_CLOSE -> shift -> 'action 1247'
actionsTable[7562] = 1248; // 'state 118' -> BRACKET_OPEN -> shift -> 'action 1248'
actionsTable[7571] = 1249; // 'state 118' -> Atom -> shift -> 'action 1249'
actionsTable[7572] = 1250; // 'state 118' -> Group -> shift -> 'action 1250'
actionsTable[7573] = 1251; // 'state 118' -> CharacterClass -> shift -> 'action 1251'
actionsTable[7577] = 1252; // 'state 118' -> Character -> shift -> 'action 1252'
actionsTable[7616] = 1253; // 'state 119' -> CHARACTER -> shift -> 'action 1253'
actionsTable[7617] = 1254; // 'state 119' -> CONTROL_CHARACTER -> shift -> 'action 1254'
actionsTable[7618] = 1255; // 'state 119' -> BACKSLASH -> shift -> 'action 1255'
actionsTable[7619] = 1256; // 'state 119' -> CARET -> shift -> 'action 1256'
actionsTable[7620] = 1257; // 'state 119' -> DASH -> shift -> 'action 1257'
actionsTable[7622] = 1258; // 'state 119' -> UNION -> shift -> 'action 1258'
actionsTable[7623] = 1259; // 'state 119' -> PAREN_OPEN -> shift -> 'action 1259'
actionsTable[7624] = 1260; // 'state 119' -> PAREN_CLOSE -> shift -> 'action 1260'
actionsTable[7626] = 1261; // 'state 119' -> BRACKET_OPEN -> shift -> 'action 1261'
actionsTable[7635] = 1262; // 'state 119' -> Atom -> shift -> 'action 1262'
actionsTable[7636] = 1263; // 'state 119' -> Group -> shift -> 'action 1263'
actionsTable[7637] = 1264; // 'state 119' -> CharacterClass -> shift -> 'action 1264'
actionsTable[7641] = 1265; // 'state 119' -> Character -> shift -> 'action 1265'
actionsTable[8256] = 1266; // 'state 129' -> CHARACTER -> shift -> 'action 1266'
actionsTable[8257] = 1267; // 'state 129' -> CONTROL_CHARACTER -> shift -> 'action 1267'
actionsTable[8258] = 1268; // 'state 129' -> BACKSLASH -> shift -> 'action 1268'
actionsTable[8261] = 1269; // 'state 129' -> DOT -> shift -> 'action 1269'
actionsTable[8262] = 1270; // 'state 129' -> UNION -> shift -> 'action 1270'
actionsTable[8263] = 1271; // 'state 129' -> PAREN_OPEN -> shift -> 'action 1271'
actionsTable[8264] = 1272; // 'state 129' -> PAREN_CLOSE -> shift -> 'action 1272'
actionsTable[8265] = 1273; // 'state 129' -> QUANTIFIER -> shift -> 'action 1273'
actionsTable[8267] = 1274; // 'state 129' -> BRACKET_CLOSE -> shift -> 'action 1274'
actionsTable[8279] = 1275; // 'state 129' -> CharacterClassCharacter -> shift -> 'action 1275'
actionsTable[8280] = 1276; // 'state 129' -> CharacterClassRange -> shift -> 'action 1276'
actionsTable[8320] = 1277; // 'state 130' -> CHARACTER -> reduce -> 'action 1277'
actionsTable[8321] = 1278; // 'state 130' -> CONTROL_CHARACTER -> reduce -> 'action 1278'
actionsTable[8322] = 1279; // 'state 130' -> BACKSLASH -> reduce -> 'action 1279'
actionsTable[8325] = 1280; // 'state 130' -> DOT -> reduce -> 'action 1280'
actionsTable[8326] = 1281; // 'state 130' -> UNION -> reduce -> 'action 1281'
actionsTable[8327] = 1282; // 'state 130' -> PAREN_OPEN -> reduce -> 'action 1282'
actionsTable[8328] = 1283; // 'state 130' -> PAREN_CLOSE -> reduce -> 'action 1283'
actionsTable[8329] = 1284; // 'state 130' -> QUANTIFIER -> reduce -> 'action 1284'
actionsTable[8331] = 1285; // 'state 130' -> BRACKET_CLOSE -> reduce -> 'action 1285'
actionsTable[7684] = 1286; // 'state 120' -> DASH -> shift -> 'action 1286'
actionsTable[7680] = 1287; // 'state 120' -> CHARACTER -> reduce -> 'action 1287'
actionsTable[7681] = 1288; // 'state 120' -> CONTROL_CHARACTER -> reduce -> 'action 1288'
actionsTable[7682] = 1289; // 'state 120' -> BACKSLASH -> reduce -> 'action 1289'
actionsTable[7685] = 1290; // 'state 120' -> DOT -> reduce -> 'action 1290'
actionsTable[7686] = 1291; // 'state 120' -> UNION -> reduce -> 'action 1291'
actionsTable[7687] = 1292; // 'state 120' -> PAREN_OPEN -> reduce -> 'action 1292'
actionsTable[7688] = 1293; // 'state 120' -> PAREN_CLOSE -> reduce -> 'action 1293'
actionsTable[7689] = 1294; // 'state 120' -> QUANTIFIER -> reduce -> 'action 1294'
actionsTable[7691] = 1295; // 'state 120' -> BRACKET_CLOSE -> reduce -> 'action 1295'
actionsTable[7744] = 1296; // 'state 121' -> CHARACTER -> reduce -> 'action 1296'
actionsTable[7745] = 1297; // 'state 121' -> CONTROL_CHARACTER -> reduce -> 'action 1297'
actionsTable[7746] = 1298; // 'state 121' -> BACKSLASH -> reduce -> 'action 1298'
actionsTable[7749] = 1299; // 'state 121' -> DOT -> reduce -> 'action 1299'
actionsTable[7750] = 1300; // 'state 121' -> UNION -> reduce -> 'action 1300'
actionsTable[7751] = 1301; // 'state 121' -> PAREN_OPEN -> reduce -> 'action 1301'
actionsTable[7752] = 1302; // 'state 121' -> PAREN_CLOSE -> reduce -> 'action 1302'
actionsTable[7753] = 1303; // 'state 121' -> QUANTIFIER -> reduce -> 'action 1303'
actionsTable[7755] = 1304; // 'state 121' -> BRACKET_CLOSE -> reduce -> 'action 1304'
actionsTable[7809] = 1305; // 'state 122' -> CONTROL_CHARACTER -> shift -> 'action 1305'
actionsTable[7810] = 1306; // 'state 122' -> BACKSLASH -> shift -> 'action 1306'
actionsTable[7811] = 1307; // 'state 122' -> CARET -> shift -> 'action 1307'
actionsTable[7812] = 1308; // 'state 122' -> DASH -> shift -> 'action 1308'
actionsTable[7818] = 1309; // 'state 122' -> BRACKET_OPEN -> shift -> 'action 1309'
actionsTable[7819] = 1310; // 'state 122' -> BRACKET_CLOSE -> shift -> 'action 1310'
actionsTable[8192] = 1311; // 'state 128' -> CHARACTER -> reduce -> 'action 1311'
actionsTable[8193] = 1312; // 'state 128' -> CONTROL_CHARACTER -> reduce -> 'action 1312'
actionsTable[8194] = 1313; // 'state 128' -> BACKSLASH -> reduce -> 'action 1313'
actionsTable[8197] = 1314; // 'state 128' -> DOT -> reduce -> 'action 1314'
actionsTable[8198] = 1315; // 'state 128' -> UNION -> reduce -> 'action 1315'
actionsTable[8199] = 1316; // 'state 128' -> PAREN_OPEN -> reduce -> 'action 1316'
actionsTable[8200] = 1317; // 'state 128' -> PAREN_CLOSE -> reduce -> 'action 1317'
actionsTable[8201] = 1318; // 'state 128' -> QUANTIFIER -> reduce -> 'action 1318'
actionsTable[8203] = 1319; // 'state 128' -> BRACKET_CLOSE -> reduce -> 'action 1319'
actionsTable[8064] = 1320; // 'state 126' -> CHARACTER -> reduce -> 'action 1320'
actionsTable[8065] = 1321; // 'state 126' -> CONTROL_CHARACTER -> reduce -> 'action 1321'
actionsTable[8066] = 1322; // 'state 126' -> BACKSLASH -> reduce -> 'action 1322'
actionsTable[8069] = 1323; // 'state 126' -> DOT -> reduce -> 'action 1323'
actionsTable[8070] = 1324; // 'state 126' -> UNION -> reduce -> 'action 1324'
actionsTable[8071] = 1325; // 'state 126' -> PAREN_OPEN -> reduce -> 'action 1325'
actionsTable[8072] = 1326; // 'state 126' -> PAREN_CLOSE -> reduce -> 'action 1326'
actionsTable[8073] = 1327; // 'state 126' -> QUANTIFIER -> reduce -> 'action 1327'
actionsTable[8075] = 1328; // 'state 126' -> BRACKET_CLOSE -> reduce -> 'action 1328'
actionsTable[8128] = 1329; // 'state 127' -> CHARACTER -> reduce -> 'action 1329'
actionsTable[8129] = 1330; // 'state 127' -> CONTROL_CHARACTER -> reduce -> 'action 1330'
actionsTable[8130] = 1331; // 'state 127' -> BACKSLASH -> reduce -> 'action 1331'
actionsTable[8133] = 1332; // 'state 127' -> DOT -> reduce -> 'action 1332'
actionsTable[8134] = 1333; // 'state 127' -> UNION -> reduce -> 'action 1333'
actionsTable[8135] = 1334; // 'state 127' -> PAREN_OPEN -> reduce -> 'action 1334'
actionsTable[8136] = 1335; // 'state 127' -> PAREN_CLOSE -> reduce -> 'action 1335'
actionsTable[8137] = 1336; // 'state 127' -> QUANTIFIER -> reduce -> 'action 1336'
actionsTable[8139] = 1337; // 'state 127' -> BRACKET_CLOSE -> reduce -> 'action 1337'
actionsTable[8000] = 1338; // 'state 125' -> CHARACTER -> reduce -> 'action 1338'
actionsTable[8001] = 1339; // 'state 125' -> CONTROL_CHARACTER -> reduce -> 'action 1339'
actionsTable[8002] = 1340; // 'state 125' -> BACKSLASH -> reduce -> 'action 1340'
actionsTable[8005] = 1341; // 'state 125' -> DOT -> reduce -> 'action 1341'
actionsTable[8006] = 1342; // 'state 125' -> UNION -> reduce -> 'action 1342'
actionsTable[8007] = 1343; // 'state 125' -> PAREN_OPEN -> reduce -> 'action 1343'
actionsTable[8008] = 1344; // 'state 125' -> PAREN_CLOSE -> reduce -> 'action 1344'
actionsTable[8009] = 1345; // 'state 125' -> QUANTIFIER -> reduce -> 'action 1345'
actionsTable[8011] = 1346; // 'state 125' -> BRACKET_CLOSE -> reduce -> 'action 1346'
actionsTable[7936] = 1347; // 'state 124' -> CHARACTER -> reduce -> 'action 1347'
actionsTable[7937] = 1348; // 'state 124' -> CONTROL_CHARACTER -> reduce -> 'action 1348'
actionsTable[7938] = 1349; // 'state 124' -> BACKSLASH -> reduce -> 'action 1349'
actionsTable[7941] = 1350; // 'state 124' -> DOT -> reduce -> 'action 1350'
actionsTable[7942] = 1351; // 'state 124' -> UNION -> reduce -> 'action 1351'
actionsTable[7943] = 1352; // 'state 124' -> PAREN_OPEN -> reduce -> 'action 1352'
actionsTable[7944] = 1353; // 'state 124' -> PAREN_CLOSE -> reduce -> 'action 1353'
actionsTable[7945] = 1354; // 'state 124' -> QUANTIFIER -> reduce -> 'action 1354'
actionsTable[7947] = 1355; // 'state 124' -> BRACKET_CLOSE -> reduce -> 'action 1355'
actionsTable[8384] = 1356; // 'state 131' -> CHARACTER -> reduce -> 'action 1356'
actionsTable[8385] = 1357; // 'state 131' -> CONTROL_CHARACTER -> reduce -> 'action 1357'
actionsTable[8386] = 1358; // 'state 131' -> BACKSLASH -> reduce -> 'action 1358'
actionsTable[8389] = 1359; // 'state 131' -> DOT -> reduce -> 'action 1359'
actionsTable[8390] = 1360; // 'state 131' -> UNION -> reduce -> 'action 1360'
actionsTable[8391] = 1361; // 'state 131' -> PAREN_OPEN -> reduce -> 'action 1361'
actionsTable[8392] = 1362; // 'state 131' -> PAREN_CLOSE -> reduce -> 'action 1362'
actionsTable[8393] = 1363; // 'state 131' -> QUANTIFIER -> reduce -> 'action 1363'
actionsTable[8395] = 1364; // 'state 131' -> BRACKET_CLOSE -> reduce -> 'action 1364'
actionsTable[7872] = 1365; // 'state 123' -> CHARACTER -> shift -> 'action 1365'
actionsTable[7873] = 1366; // 'state 123' -> CONTROL_CHARACTER -> shift -> 'action 1366'
actionsTable[7874] = 1367; // 'state 123' -> BACKSLASH -> shift -> 'action 1367'
actionsTable[7877] = 1368; // 'state 123' -> DOT -> shift -> 'action 1368'
actionsTable[7878] = 1369; // 'state 123' -> UNION -> shift -> 'action 1369'
actionsTable[7879] = 1370; // 'state 123' -> PAREN_OPEN -> shift -> 'action 1370'
actionsTable[7880] = 1371; // 'state 123' -> PAREN_CLOSE -> shift -> 'action 1371'
actionsTable[7881] = 1372; // 'state 123' -> QUANTIFIER -> shift -> 'action 1372'
actionsTable[7894] = 1373; // 'state 123' -> CharacterClassCharacters -> shift -> 'action 1373'
actionsTable[7895] = 1374; // 'state 123' -> CharacterClassCharacter -> shift -> 'action 1374'
actionsTable[7896] = 1375; // 'state 123' -> CharacterClassRange -> shift -> 'action 1375'
actionsTable[8448] = 1376; // 'state 132' -> CHARACTER -> reduce -> 'action 1376'
actionsTable[8449] = 1377; // 'state 132' -> CONTROL_CHARACTER -> reduce -> 'action 1377'
actionsTable[8450] = 1378; // 'state 132' -> BACKSLASH -> reduce -> 'action 1378'
actionsTable[8451] = 1379; // 'state 132' -> CARET -> reduce -> 'action 1379'
actionsTable[8452] = 1380; // 'state 132' -> DASH -> reduce -> 'action 1380'
actionsTable[8454] = 1381; // 'state 132' -> UNION -> reduce -> 'action 1381'
actionsTable[8455] = 1382; // 'state 132' -> PAREN_OPEN -> reduce -> 'action 1382'
actionsTable[8456] = 1383; // 'state 132' -> PAREN_CLOSE -> reduce -> 'action 1383'
actionsTable[8457] = 1384; // 'state 132' -> QUANTIFIER -> reduce -> 'action 1384'
actionsTable[8458] = 1385; // 'state 132' -> BRACKET_OPEN -> reduce -> 'action 1385'
actionsTable[8460] = 1386; // 'state 132' -> @par-gen.EOF -> reduce -> 'action 1386'
actionsTable[8512] = 1387; // 'state 133' -> CHARACTER -> reduce -> 'action 1387'
actionsTable[8513] = 1388; // 'state 133' -> CONTROL_CHARACTER -> reduce -> 'action 1388'
actionsTable[8514] = 1389; // 'state 133' -> BACKSLASH -> reduce -> 'action 1389'
actionsTable[8515] = 1390; // 'state 133' -> CARET -> reduce -> 'action 1390'
actionsTable[8516] = 1391; // 'state 133' -> DASH -> reduce -> 'action 1391'
actionsTable[8518] = 1392; // 'state 133' -> UNION -> reduce -> 'action 1392'
actionsTable[8519] = 1393; // 'state 133' -> PAREN_OPEN -> reduce -> 'action 1393'
actionsTable[8520] = 1394; // 'state 133' -> PAREN_CLOSE -> reduce -> 'action 1394'
actionsTable[8521] = 1395; // 'state 133' -> QUANTIFIER -> reduce -> 'action 1395'
actionsTable[8522] = 1396; // 'state 133' -> BRACKET_OPEN -> reduce -> 'action 1396'
actionsTable[8524] = 1397; // 'state 133' -> @par-gen.EOF -> reduce -> 'action 1397'
actionsTable[8576] = 1398; // 'state 134' -> CHARACTER -> reduce -> 'action 1398'
actionsTable[8577] = 1399; // 'state 134' -> CONTROL_CHARACTER -> reduce -> 'action 1399'
actionsTable[8578] = 1400; // 'state 134' -> BACKSLASH -> reduce -> 'action 1400'
actionsTable[8579] = 1401; // 'state 134' -> CARET -> reduce -> 'action 1401'
actionsTable[8580] = 1402; // 'state 134' -> DASH -> reduce -> 'action 1402'
actionsTable[8582] = 1403; // 'state 134' -> UNION -> reduce -> 'action 1403'
actionsTable[8583] = 1404; // 'state 134' -> PAREN_OPEN -> reduce -> 'action 1404'
actionsTable[8584] = 1405; // 'state 134' -> PAREN_CLOSE -> reduce -> 'action 1405'
actionsTable[8585] = 1406; // 'state 134' -> QUANTIFIER -> reduce -> 'action 1406'
actionsTable[8586] = 1407; // 'state 134' -> BRACKET_OPEN -> reduce -> 'action 1407'
actionsTable[8588] = 1408; // 'state 134' -> @par-gen.EOF -> reduce -> 'action 1408'
actionsTable[9216] = 1409; // 'state 144' -> CHARACTER -> shift -> 'action 1409'
actionsTable[9217] = 1410; // 'state 144' -> CONTROL_CHARACTER -> shift -> 'action 1410'
actionsTable[9218] = 1411; // 'state 144' -> BACKSLASH -> shift -> 'action 1411'
actionsTable[9221] = 1412; // 'state 144' -> DOT -> shift -> 'action 1412'
actionsTable[9222] = 1413; // 'state 144' -> UNION -> shift -> 'action 1413'
actionsTable[9223] = 1414; // 'state 144' -> PAREN_OPEN -> shift -> 'action 1414'
actionsTable[9224] = 1415; // 'state 144' -> PAREN_CLOSE -> shift -> 'action 1415'
actionsTable[9225] = 1416; // 'state 144' -> QUANTIFIER -> shift -> 'action 1416'
actionsTable[9227] = 1417; // 'state 144' -> BRACKET_CLOSE -> shift -> 'action 1417'
actionsTable[9239] = 1418; // 'state 144' -> CharacterClassCharacter -> shift -> 'action 1418'
actionsTable[9240] = 1419; // 'state 144' -> CharacterClassRange -> shift -> 'action 1419'
actionsTable[9280] = 1420; // 'state 145' -> CHARACTER -> reduce -> 'action 1420'
actionsTable[9281] = 1421; // 'state 145' -> CONTROL_CHARACTER -> reduce -> 'action 1421'
actionsTable[9282] = 1422; // 'state 145' -> BACKSLASH -> reduce -> 'action 1422'
actionsTable[9285] = 1423; // 'state 145' -> DOT -> reduce -> 'action 1423'
actionsTable[9286] = 1424; // 'state 145' -> UNION -> reduce -> 'action 1424'
actionsTable[9287] = 1425; // 'state 145' -> PAREN_OPEN -> reduce -> 'action 1425'
actionsTable[9288] = 1426; // 'state 145' -> PAREN_CLOSE -> reduce -> 'action 1426'
actionsTable[9289] = 1427; // 'state 145' -> QUANTIFIER -> reduce -> 'action 1427'
actionsTable[9291] = 1428; // 'state 145' -> BRACKET_CLOSE -> reduce -> 'action 1428'
actionsTable[8644] = 1429; // 'state 135' -> DASH -> shift -> 'action 1429'
actionsTable[8640] = 1430; // 'state 135' -> CHARACTER -> reduce -> 'action 1430'
actionsTable[8641] = 1431; // 'state 135' -> CONTROL_CHARACTER -> reduce -> 'action 1431'
actionsTable[8642] = 1432; // 'state 135' -> BACKSLASH -> reduce -> 'action 1432'
actionsTable[8645] = 1433; // 'state 135' -> DOT -> reduce -> 'action 1433'
actionsTable[8646] = 1434; // 'state 135' -> UNION -> reduce -> 'action 1434'
actionsTable[8647] = 1435; // 'state 135' -> PAREN_OPEN -> reduce -> 'action 1435'
actionsTable[8648] = 1436; // 'state 135' -> PAREN_CLOSE -> reduce -> 'action 1436'
actionsTable[8649] = 1437; // 'state 135' -> QUANTIFIER -> reduce -> 'action 1437'
actionsTable[8651] = 1438; // 'state 135' -> BRACKET_CLOSE -> reduce -> 'action 1438'
actionsTable[8704] = 1439; // 'state 136' -> CHARACTER -> reduce -> 'action 1439'
actionsTable[8705] = 1440; // 'state 136' -> CONTROL_CHARACTER -> reduce -> 'action 1440'
actionsTable[8706] = 1441; // 'state 136' -> BACKSLASH -> reduce -> 'action 1441'
actionsTable[8709] = 1442; // 'state 136' -> DOT -> reduce -> 'action 1442'
actionsTable[8710] = 1443; // 'state 136' -> UNION -> reduce -> 'action 1443'
actionsTable[8711] = 1444; // 'state 136' -> PAREN_OPEN -> reduce -> 'action 1444'
actionsTable[8712] = 1445; // 'state 136' -> PAREN_CLOSE -> reduce -> 'action 1445'
actionsTable[8713] = 1446; // 'state 136' -> QUANTIFIER -> reduce -> 'action 1446'
actionsTable[8715] = 1447; // 'state 136' -> BRACKET_CLOSE -> reduce -> 'action 1447'
actionsTable[8769] = 1448; // 'state 137' -> CONTROL_CHARACTER -> shift -> 'action 1448'
actionsTable[8770] = 1449; // 'state 137' -> BACKSLASH -> shift -> 'action 1449'
actionsTable[8771] = 1450; // 'state 137' -> CARET -> shift -> 'action 1450'
actionsTable[8772] = 1451; // 'state 137' -> DASH -> shift -> 'action 1451'
actionsTable[8778] = 1452; // 'state 137' -> BRACKET_OPEN -> shift -> 'action 1452'
actionsTable[8779] = 1453; // 'state 137' -> BRACKET_CLOSE -> shift -> 'action 1453'
actionsTable[9152] = 1454; // 'state 143' -> CHARACTER -> reduce -> 'action 1454'
actionsTable[9153] = 1455; // 'state 143' -> CONTROL_CHARACTER -> reduce -> 'action 1455'
actionsTable[9154] = 1456; // 'state 143' -> BACKSLASH -> reduce -> 'action 1456'
actionsTable[9157] = 1457; // 'state 143' -> DOT -> reduce -> 'action 1457'
actionsTable[9158] = 1458; // 'state 143' -> UNION -> reduce -> 'action 1458'
actionsTable[9159] = 1459; // 'state 143' -> PAREN_OPEN -> reduce -> 'action 1459'
actionsTable[9160] = 1460; // 'state 143' -> PAREN_CLOSE -> reduce -> 'action 1460'
actionsTable[9161] = 1461; // 'state 143' -> QUANTIFIER -> reduce -> 'action 1461'
actionsTable[9163] = 1462; // 'state 143' -> BRACKET_CLOSE -> reduce -> 'action 1462'
actionsTable[9024] = 1463; // 'state 141' -> CHARACTER -> reduce -> 'action 1463'
actionsTable[9025] = 1464; // 'state 141' -> CONTROL_CHARACTER -> reduce -> 'action 1464'
actionsTable[9026] = 1465; // 'state 141' -> BACKSLASH -> reduce -> 'action 1465'
actionsTable[9029] = 1466; // 'state 141' -> DOT -> reduce -> 'action 1466'
actionsTable[9030] = 1467; // 'state 141' -> UNION -> reduce -> 'action 1467'
actionsTable[9031] = 1468; // 'state 141' -> PAREN_OPEN -> reduce -> 'action 1468'
actionsTable[9032] = 1469; // 'state 141' -> PAREN_CLOSE -> reduce -> 'action 1469'
actionsTable[9033] = 1470; // 'state 141' -> QUANTIFIER -> reduce -> 'action 1470'
actionsTable[9035] = 1471; // 'state 141' -> BRACKET_CLOSE -> reduce -> 'action 1471'
actionsTable[9088] = 1472; // 'state 142' -> CHARACTER -> reduce -> 'action 1472'
actionsTable[9089] = 1473; // 'state 142' -> CONTROL_CHARACTER -> reduce -> 'action 1473'
actionsTable[9090] = 1474; // 'state 142' -> BACKSLASH -> reduce -> 'action 1474'
actionsTable[9093] = 1475; // 'state 142' -> DOT -> reduce -> 'action 1475'
actionsTable[9094] = 1476; // 'state 142' -> UNION -> reduce -> 'action 1476'
actionsTable[9095] = 1477; // 'state 142' -> PAREN_OPEN -> reduce -> 'action 1477'
actionsTable[9096] = 1478; // 'state 142' -> PAREN_CLOSE -> reduce -> 'action 1478'
actionsTable[9097] = 1479; // 'state 142' -> QUANTIFIER -> reduce -> 'action 1479'
actionsTable[9099] = 1480; // 'state 142' -> BRACKET_CLOSE -> reduce -> 'action 1480'
actionsTable[8960] = 1481; // 'state 140' -> CHARACTER -> reduce -> 'action 1481'
actionsTable[8961] = 1482; // 'state 140' -> CONTROL_CHARACTER -> reduce -> 'action 1482'
actionsTable[8962] = 1483; // 'state 140' -> BACKSLASH -> reduce -> 'action 1483'
actionsTable[8965] = 1484; // 'state 140' -> DOT -> reduce -> 'action 1484'
actionsTable[8966] = 1485; // 'state 140' -> UNION -> reduce -> 'action 1485'
actionsTable[8967] = 1486; // 'state 140' -> PAREN_OPEN -> reduce -> 'action 1486'
actionsTable[8968] = 1487; // 'state 140' -> PAREN_CLOSE -> reduce -> 'action 1487'
actionsTable[8969] = 1488; // 'state 140' -> QUANTIFIER -> reduce -> 'action 1488'
actionsTable[8971] = 1489; // 'state 140' -> BRACKET_CLOSE -> reduce -> 'action 1489'
actionsTable[8896] = 1490; // 'state 139' -> CHARACTER -> reduce -> 'action 1490'
actionsTable[8897] = 1491; // 'state 139' -> CONTROL_CHARACTER -> reduce -> 'action 1491'
actionsTable[8898] = 1492; // 'state 139' -> BACKSLASH -> reduce -> 'action 1492'
actionsTable[8901] = 1493; // 'state 139' -> DOT -> reduce -> 'action 1493'
actionsTable[8902] = 1494; // 'state 139' -> UNION -> reduce -> 'action 1494'
actionsTable[8903] = 1495; // 'state 139' -> PAREN_OPEN -> reduce -> 'action 1495'
actionsTable[8904] = 1496; // 'state 139' -> PAREN_CLOSE -> reduce -> 'action 1496'
actionsTable[8905] = 1497; // 'state 139' -> QUANTIFIER -> reduce -> 'action 1497'
actionsTable[8907] = 1498; // 'state 139' -> BRACKET_CLOSE -> reduce -> 'action 1498'
actionsTable[9344] = 1499; // 'state 146' -> CHARACTER -> reduce -> 'action 1499'
actionsTable[9345] = 1500; // 'state 146' -> CONTROL_CHARACTER -> reduce -> 'action 1500'
actionsTable[9346] = 1501; // 'state 146' -> BACKSLASH -> reduce -> 'action 1501'
actionsTable[9349] = 1502; // 'state 146' -> DOT -> reduce -> 'action 1502'
actionsTable[9350] = 1503; // 'state 146' -> UNION -> reduce -> 'action 1503'
actionsTable[9351] = 1504; // 'state 146' -> PAREN_OPEN -> reduce -> 'action 1504'
actionsTable[9352] = 1505; // 'state 146' -> PAREN_CLOSE -> reduce -> 'action 1505'
actionsTable[9353] = 1506; // 'state 146' -> QUANTIFIER -> reduce -> 'action 1506'
actionsTable[9355] = 1507; // 'state 146' -> BRACKET_CLOSE -> reduce -> 'action 1507'
actionsTable[8832] = 1508; // 'state 138' -> CHARACTER -> shift -> 'action 1508'
actionsTable[8833] = 1509; // 'state 138' -> CONTROL_CHARACTER -> shift -> 'action 1509'
actionsTable[8834] = 1510; // 'state 138' -> BACKSLASH -> shift -> 'action 1510'
actionsTable[8837] = 1511; // 'state 138' -> DOT -> shift -> 'action 1511'
actionsTable[8838] = 1512; // 'state 138' -> UNION -> shift -> 'action 1512'
actionsTable[8839] = 1513; // 'state 138' -> PAREN_OPEN -> shift -> 'action 1513'
actionsTable[8840] = 1514; // 'state 138' -> PAREN_CLOSE -> shift -> 'action 1514'
actionsTable[8841] = 1515; // 'state 138' -> QUANTIFIER -> shift -> 'action 1515'
actionsTable[8854] = 1516; // 'state 138' -> CharacterClassCharacters -> shift -> 'action 1516'
actionsTable[8855] = 1517; // 'state 138' -> CharacterClassCharacter -> shift -> 'action 1517'
actionsTable[8856] = 1518; // 'state 138' -> CharacterClassRange -> shift -> 'action 1518'
actionsTable[9920] = 1519; // 'state 155' -> CHARACTER -> reduce -> 'action 1519'
actionsTable[9921] = 1520; // 'state 155' -> CONTROL_CHARACTER -> reduce -> 'action 1520'
actionsTable[9922] = 1521; // 'state 155' -> BACKSLASH -> reduce -> 'action 1521'
actionsTable[9923] = 1522; // 'state 155' -> CARET -> reduce -> 'action 1522'
actionsTable[9924] = 1523; // 'state 155' -> DASH -> reduce -> 'action 1523'
actionsTable[9926] = 1524; // 'state 155' -> UNION -> reduce -> 'action 1524'
actionsTable[9927] = 1525; // 'state 155' -> PAREN_OPEN -> reduce -> 'action 1525'
actionsTable[9928] = 1526; // 'state 155' -> PAREN_CLOSE -> reduce -> 'action 1526'
actionsTable[9929] = 1527; // 'state 155' -> QUANTIFIER -> reduce -> 'action 1527'
actionsTable[9930] = 1528; // 'state 155' -> BRACKET_OPEN -> reduce -> 'action 1528'
actionsTable[9932] = 1529; // 'state 155' -> @par-gen.EOF -> reduce -> 'action 1529'
actionsTable[9984] = 1530; // 'state 156' -> CHARACTER -> reduce -> 'action 1530'
actionsTable[9985] = 1531; // 'state 156' -> CONTROL_CHARACTER -> reduce -> 'action 1531'
actionsTable[9986] = 1532; // 'state 156' -> BACKSLASH -> reduce -> 'action 1532'
actionsTable[9989] = 1533; // 'state 156' -> DOT -> reduce -> 'action 1533'
actionsTable[9990] = 1534; // 'state 156' -> UNION -> reduce -> 'action 1534'
actionsTable[9991] = 1535; // 'state 156' -> PAREN_OPEN -> reduce -> 'action 1535'
actionsTable[9992] = 1536; // 'state 156' -> PAREN_CLOSE -> reduce -> 'action 1536'
actionsTable[9993] = 1537; // 'state 156' -> QUANTIFIER -> reduce -> 'action 1537'
actionsTable[9995] = 1538; // 'state 156' -> BRACKET_CLOSE -> reduce -> 'action 1538'
actionsTable[9412] = 1539; // 'state 147' -> DASH -> shift -> 'action 1539'
actionsTable[9408] = 1540; // 'state 147' -> CHARACTER -> reduce -> 'action 1540'
actionsTable[9409] = 1541; // 'state 147' -> CONTROL_CHARACTER -> reduce -> 'action 1541'
actionsTable[9410] = 1542; // 'state 147' -> BACKSLASH -> reduce -> 'action 1542'
actionsTable[9413] = 1543; // 'state 147' -> DOT -> reduce -> 'action 1543'
actionsTable[9414] = 1544; // 'state 147' -> UNION -> reduce -> 'action 1544'
actionsTable[9415] = 1545; // 'state 147' -> PAREN_OPEN -> reduce -> 'action 1545'
actionsTable[9416] = 1546; // 'state 147' -> PAREN_CLOSE -> reduce -> 'action 1546'
actionsTable[9417] = 1547; // 'state 147' -> QUANTIFIER -> reduce -> 'action 1547'
actionsTable[9419] = 1548; // 'state 147' -> BRACKET_CLOSE -> reduce -> 'action 1548'
actionsTable[9472] = 1549; // 'state 148' -> CHARACTER -> reduce -> 'action 1549'
actionsTable[9473] = 1550; // 'state 148' -> CONTROL_CHARACTER -> reduce -> 'action 1550'
actionsTable[9474] = 1551; // 'state 148' -> BACKSLASH -> reduce -> 'action 1551'
actionsTable[9477] = 1552; // 'state 148' -> DOT -> reduce -> 'action 1552'
actionsTable[9478] = 1553; // 'state 148' -> UNION -> reduce -> 'action 1553'
actionsTable[9479] = 1554; // 'state 148' -> PAREN_OPEN -> reduce -> 'action 1554'
actionsTable[9480] = 1555; // 'state 148' -> PAREN_CLOSE -> reduce -> 'action 1555'
actionsTable[9481] = 1556; // 'state 148' -> QUANTIFIER -> reduce -> 'action 1556'
actionsTable[9483] = 1557; // 'state 148' -> BRACKET_CLOSE -> reduce -> 'action 1557'
actionsTable[9537] = 1558; // 'state 149' -> CONTROL_CHARACTER -> shift -> 'action 1558'
actionsTable[9538] = 1559; // 'state 149' -> BACKSLASH -> shift -> 'action 1559'
actionsTable[9539] = 1560; // 'state 149' -> CARET -> shift -> 'action 1560'
actionsTable[9540] = 1561; // 'state 149' -> DASH -> shift -> 'action 1561'
actionsTable[9546] = 1562; // 'state 149' -> BRACKET_OPEN -> shift -> 'action 1562'
actionsTable[9547] = 1563; // 'state 149' -> BRACKET_CLOSE -> shift -> 'action 1563'
actionsTable[9856] = 1564; // 'state 154' -> CHARACTER -> reduce -> 'action 1564'
actionsTable[9857] = 1565; // 'state 154' -> CONTROL_CHARACTER -> reduce -> 'action 1565'
actionsTable[9858] = 1566; // 'state 154' -> BACKSLASH -> reduce -> 'action 1566'
actionsTable[9861] = 1567; // 'state 154' -> DOT -> reduce -> 'action 1567'
actionsTable[9862] = 1568; // 'state 154' -> UNION -> reduce -> 'action 1568'
actionsTable[9863] = 1569; // 'state 154' -> PAREN_OPEN -> reduce -> 'action 1569'
actionsTable[9864] = 1570; // 'state 154' -> PAREN_CLOSE -> reduce -> 'action 1570'
actionsTable[9865] = 1571; // 'state 154' -> QUANTIFIER -> reduce -> 'action 1571'
actionsTable[9867] = 1572; // 'state 154' -> BRACKET_CLOSE -> reduce -> 'action 1572'
actionsTable[9728] = 1573; // 'state 152' -> CHARACTER -> reduce -> 'action 1573'
actionsTable[9729] = 1574; // 'state 152' -> CONTROL_CHARACTER -> reduce -> 'action 1574'
actionsTable[9730] = 1575; // 'state 152' -> BACKSLASH -> reduce -> 'action 1575'
actionsTable[9733] = 1576; // 'state 152' -> DOT -> reduce -> 'action 1576'
actionsTable[9734] = 1577; // 'state 152' -> UNION -> reduce -> 'action 1577'
actionsTable[9735] = 1578; // 'state 152' -> PAREN_OPEN -> reduce -> 'action 1578'
actionsTable[9736] = 1579; // 'state 152' -> PAREN_CLOSE -> reduce -> 'action 1579'
actionsTable[9737] = 1580; // 'state 152' -> QUANTIFIER -> reduce -> 'action 1580'
actionsTable[9739] = 1581; // 'state 152' -> BRACKET_CLOSE -> reduce -> 'action 1581'
actionsTable[9792] = 1582; // 'state 153' -> CHARACTER -> reduce -> 'action 1582'
actionsTable[9793] = 1583; // 'state 153' -> CONTROL_CHARACTER -> reduce -> 'action 1583'
actionsTable[9794] = 1584; // 'state 153' -> BACKSLASH -> reduce -> 'action 1584'
actionsTable[9797] = 1585; // 'state 153' -> DOT -> reduce -> 'action 1585'
actionsTable[9798] = 1586; // 'state 153' -> UNION -> reduce -> 'action 1586'
actionsTable[9799] = 1587; // 'state 153' -> PAREN_OPEN -> reduce -> 'action 1587'
actionsTable[9800] = 1588; // 'state 153' -> PAREN_CLOSE -> reduce -> 'action 1588'
actionsTable[9801] = 1589; // 'state 153' -> QUANTIFIER -> reduce -> 'action 1589'
actionsTable[9803] = 1590; // 'state 153' -> BRACKET_CLOSE -> reduce -> 'action 1590'
actionsTable[9664] = 1591; // 'state 151' -> CHARACTER -> reduce -> 'action 1591'
actionsTable[9665] = 1592; // 'state 151' -> CONTROL_CHARACTER -> reduce -> 'action 1592'
actionsTable[9666] = 1593; // 'state 151' -> BACKSLASH -> reduce -> 'action 1593'
actionsTable[9669] = 1594; // 'state 151' -> DOT -> reduce -> 'action 1594'
actionsTable[9670] = 1595; // 'state 151' -> UNION -> reduce -> 'action 1595'
actionsTable[9671] = 1596; // 'state 151' -> PAREN_OPEN -> reduce -> 'action 1596'
actionsTable[9672] = 1597; // 'state 151' -> PAREN_CLOSE -> reduce -> 'action 1597'
actionsTable[9673] = 1598; // 'state 151' -> QUANTIFIER -> reduce -> 'action 1598'
actionsTable[9675] = 1599; // 'state 151' -> BRACKET_CLOSE -> reduce -> 'action 1599'
actionsTable[9600] = 1600; // 'state 150' -> CHARACTER -> reduce -> 'action 1600'
actionsTable[9601] = 1601; // 'state 150' -> CONTROL_CHARACTER -> reduce -> 'action 1601'
actionsTable[9602] = 1602; // 'state 150' -> BACKSLASH -> reduce -> 'action 1602'
actionsTable[9605] = 1603; // 'state 150' -> DOT -> reduce -> 'action 1603'
actionsTable[9606] = 1604; // 'state 150' -> UNION -> reduce -> 'action 1604'
actionsTable[9607] = 1605; // 'state 150' -> PAREN_OPEN -> reduce -> 'action 1605'
actionsTable[9608] = 1606; // 'state 150' -> PAREN_CLOSE -> reduce -> 'action 1606'
actionsTable[9609] = 1607; // 'state 150' -> QUANTIFIER -> reduce -> 'action 1607'
actionsTable[9611] = 1608; // 'state 150' -> BRACKET_CLOSE -> reduce -> 'action 1608'
actionsTable[10048] = 1609; // 'state 157' -> CHARACTER -> reduce -> 'action 1609'
actionsTable[10049] = 1610; // 'state 157' -> CONTROL_CHARACTER -> reduce -> 'action 1610'
actionsTable[10050] = 1611; // 'state 157' -> BACKSLASH -> reduce -> 'action 1611'
actionsTable[10053] = 1612; // 'state 157' -> DOT -> reduce -> 'action 1612'
actionsTable[10054] = 1613; // 'state 157' -> UNION -> reduce -> 'action 1613'
actionsTable[10055] = 1614; // 'state 157' -> PAREN_OPEN -> reduce -> 'action 1614'
actionsTable[10056] = 1615; // 'state 157' -> PAREN_CLOSE -> reduce -> 'action 1615'
actionsTable[10057] = 1616; // 'state 157' -> QUANTIFIER -> reduce -> 'action 1616'
actionsTable[10059] = 1617; // 'state 157' -> BRACKET_CLOSE -> reduce -> 'action 1617'
actionsTable[10112] = 1618; // 'state 158' -> CHARACTER -> shift -> 'action 1618'
actionsTable[10368] = 1619; // 'state 162' -> CHARACTER -> reduce -> 'action 1619'
actionsTable[10369] = 1620; // 'state 162' -> CONTROL_CHARACTER -> reduce -> 'action 1620'
actionsTable[10370] = 1621; // 'state 162' -> BACKSLASH -> reduce -> 'action 1621'
actionsTable[10373] = 1622; // 'state 162' -> DOT -> reduce -> 'action 1622'
actionsTable[10374] = 1623; // 'state 162' -> UNION -> reduce -> 'action 1623'
actionsTable[10375] = 1624; // 'state 162' -> PAREN_OPEN -> reduce -> 'action 1624'
actionsTable[10376] = 1625; // 'state 162' -> PAREN_CLOSE -> reduce -> 'action 1625'
actionsTable[10377] = 1626; // 'state 162' -> QUANTIFIER -> reduce -> 'action 1626'
actionsTable[10379] = 1627; // 'state 162' -> BRACKET_CLOSE -> reduce -> 'action 1627'
actionsTable[10304] = 1628; // 'state 161' -> CHARACTER -> reduce -> 'action 1628'
actionsTable[10305] = 1629; // 'state 161' -> CONTROL_CHARACTER -> reduce -> 'action 1629'
actionsTable[10306] = 1630; // 'state 161' -> BACKSLASH -> reduce -> 'action 1630'
actionsTable[10309] = 1631; // 'state 161' -> DOT -> reduce -> 'action 1631'
actionsTable[10310] = 1632; // 'state 161' -> UNION -> reduce -> 'action 1632'
actionsTable[10311] = 1633; // 'state 161' -> PAREN_OPEN -> reduce -> 'action 1633'
actionsTable[10312] = 1634; // 'state 161' -> PAREN_CLOSE -> reduce -> 'action 1634'
actionsTable[10313] = 1635; // 'state 161' -> QUANTIFIER -> reduce -> 'action 1635'
actionsTable[10315] = 1636; // 'state 161' -> BRACKET_CLOSE -> reduce -> 'action 1636'
actionsTable[10240] = 1637; // 'state 160' -> CHARACTER -> reduce -> 'action 1637'
actionsTable[10241] = 1638; // 'state 160' -> CONTROL_CHARACTER -> reduce -> 'action 1638'
actionsTable[10242] = 1639; // 'state 160' -> BACKSLASH -> reduce -> 'action 1639'
actionsTable[10245] = 1640; // 'state 160' -> DOT -> reduce -> 'action 1640'
actionsTable[10246] = 1641; // 'state 160' -> UNION -> reduce -> 'action 1641'
actionsTable[10247] = 1642; // 'state 160' -> PAREN_OPEN -> reduce -> 'action 1642'
actionsTable[10248] = 1643; // 'state 160' -> PAREN_CLOSE -> reduce -> 'action 1643'
actionsTable[10249] = 1644; // 'state 160' -> QUANTIFIER -> reduce -> 'action 1644'
actionsTable[10251] = 1645; // 'state 160' -> BRACKET_CLOSE -> reduce -> 'action 1645'
actionsTable[10176] = 1646; // 'state 159' -> CHARACTER -> reduce -> 'action 1646'
actionsTable[10177] = 1647; // 'state 159' -> CONTROL_CHARACTER -> reduce -> 'action 1647'
actionsTable[10178] = 1648; // 'state 159' -> BACKSLASH -> reduce -> 'action 1648'
actionsTable[10181] = 1649; // 'state 159' -> DOT -> reduce -> 'action 1649'
actionsTable[10182] = 1650; // 'state 159' -> UNION -> reduce -> 'action 1650'
actionsTable[10183] = 1651; // 'state 159' -> PAREN_OPEN -> reduce -> 'action 1651'
actionsTable[10184] = 1652; // 'state 159' -> PAREN_CLOSE -> reduce -> 'action 1652'
actionsTable[10185] = 1653; // 'state 159' -> QUANTIFIER -> reduce -> 'action 1653'
actionsTable[10187] = 1654; // 'state 159' -> BRACKET_CLOSE -> reduce -> 'action 1654'
actionsTable[10432] = 1655; // 'state 163' -> CHARACTER -> reduce -> 'action 1655'
actionsTable[10433] = 1656; // 'state 163' -> CONTROL_CHARACTER -> reduce -> 'action 1656'
actionsTable[10434] = 1657; // 'state 163' -> BACKSLASH -> reduce -> 'action 1657'
actionsTable[10437] = 1658; // 'state 163' -> DOT -> reduce -> 'action 1658'
actionsTable[10438] = 1659; // 'state 163' -> UNION -> reduce -> 'action 1659'
actionsTable[10439] = 1660; // 'state 163' -> PAREN_OPEN -> reduce -> 'action 1660'
actionsTable[10440] = 1661; // 'state 163' -> PAREN_CLOSE -> reduce -> 'action 1661'
actionsTable[10441] = 1662; // 'state 163' -> QUANTIFIER -> reduce -> 'action 1662'
actionsTable[10443] = 1663; // 'state 163' -> BRACKET_CLOSE -> reduce -> 'action 1663'
actionsTable[10496] = 1664; // 'state 164' -> CHARACTER -> reduce -> 'action 1664'
actionsTable[10497] = 1665; // 'state 164' -> CONTROL_CHARACTER -> reduce -> 'action 1665'
actionsTable[10498] = 1666; // 'state 164' -> BACKSLASH -> reduce -> 'action 1666'
actionsTable[10501] = 1667; // 'state 164' -> DOT -> reduce -> 'action 1667'
actionsTable[10502] = 1668; // 'state 164' -> UNION -> reduce -> 'action 1668'
actionsTable[10503] = 1669; // 'state 164' -> PAREN_OPEN -> reduce -> 'action 1669'
actionsTable[10504] = 1670; // 'state 164' -> PAREN_CLOSE -> reduce -> 'action 1670'
actionsTable[10505] = 1671; // 'state 164' -> QUANTIFIER -> reduce -> 'action 1671'
actionsTable[10507] = 1672; // 'state 164' -> BRACKET_CLOSE -> reduce -> 'action 1672'
actionsTable[10560] = 1673; // 'state 165' -> CHARACTER -> shift -> 'action 1673'
actionsTable[10561] = 1674; // 'state 165' -> CONTROL_CHARACTER -> shift -> 'action 1674'
actionsTable[10562] = 1675; // 'state 165' -> BACKSLASH -> shift -> 'action 1675'
actionsTable[10565] = 1676; // 'state 165' -> DOT -> shift -> 'action 1676'
actionsTable[10566] = 1677; // 'state 165' -> UNION -> shift -> 'action 1677'
actionsTable[10567] = 1678; // 'state 165' -> PAREN_OPEN -> shift -> 'action 1678'
actionsTable[10568] = 1679; // 'state 165' -> PAREN_CLOSE -> shift -> 'action 1679'
actionsTable[10569] = 1680; // 'state 165' -> QUANTIFIER -> shift -> 'action 1680'
actionsTable[10571] = 1681; // 'state 165' -> BRACKET_CLOSE -> shift -> 'action 1681'
actionsTable[10583] = 1682; // 'state 165' -> CharacterClassCharacter -> shift -> 'action 1682'
actionsTable[10584] = 1683; // 'state 165' -> CharacterClassRange -> shift -> 'action 1683'
actionsTable[10624] = 1684; // 'state 166' -> CHARACTER -> reduce -> 'action 1684'
actionsTable[10625] = 1685; // 'state 166' -> CONTROL_CHARACTER -> reduce -> 'action 1685'
actionsTable[10626] = 1686; // 'state 166' -> BACKSLASH -> reduce -> 'action 1686'
actionsTable[10627] = 1687; // 'state 166' -> CARET -> reduce -> 'action 1687'
actionsTable[10628] = 1688; // 'state 166' -> DASH -> reduce -> 'action 1688'
actionsTable[10630] = 1689; // 'state 166' -> UNION -> reduce -> 'action 1689'
actionsTable[10631] = 1690; // 'state 166' -> PAREN_OPEN -> reduce -> 'action 1690'
actionsTable[10632] = 1691; // 'state 166' -> PAREN_CLOSE -> reduce -> 'action 1691'
actionsTable[10633] = 1692; // 'state 166' -> QUANTIFIER -> reduce -> 'action 1692'
actionsTable[10634] = 1693; // 'state 166' -> BRACKET_OPEN -> reduce -> 'action 1693'
actionsTable[10636] = 1694; // 'state 166' -> @par-gen.EOF -> reduce -> 'action 1694'
actionsTable[10688] = 1695; // 'state 167' -> CHARACTER -> reduce -> 'action 1695'
actionsTable[10689] = 1696; // 'state 167' -> CONTROL_CHARACTER -> reduce -> 'action 1696'
actionsTable[10690] = 1697; // 'state 167' -> BACKSLASH -> reduce -> 'action 1697'
actionsTable[10691] = 1698; // 'state 167' -> CARET -> reduce -> 'action 1698'
actionsTable[10692] = 1699; // 'state 167' -> DASH -> reduce -> 'action 1699'
actionsTable[10694] = 1700; // 'state 167' -> UNION -> reduce -> 'action 1700'
actionsTable[10695] = 1701; // 'state 167' -> PAREN_OPEN -> reduce -> 'action 1701'
actionsTable[10696] = 1702; // 'state 167' -> PAREN_CLOSE -> reduce -> 'action 1702'
actionsTable[10697] = 1703; // 'state 167' -> QUANTIFIER -> reduce -> 'action 1703'
actionsTable[10698] = 1704; // 'state 167' -> BRACKET_OPEN -> reduce -> 'action 1704'
actionsTable[10700] = 1705; // 'state 167' -> @par-gen.EOF -> reduce -> 'action 1705'
actionsTable[10752] = 1706; // 'state 168' -> CHARACTER -> reduce -> 'action 1706'
actionsTable[10753] = 1707; // 'state 168' -> CONTROL_CHARACTER -> reduce -> 'action 1707'
actionsTable[10754] = 1708; // 'state 168' -> BACKSLASH -> reduce -> 'action 1708'
actionsTable[10755] = 1709; // 'state 168' -> CARET -> reduce -> 'action 1709'
actionsTable[10756] = 1710; // 'state 168' -> DASH -> reduce -> 'action 1710'
actionsTable[10758] = 1711; // 'state 168' -> UNION -> reduce -> 'action 1711'
actionsTable[10759] = 1712; // 'state 168' -> PAREN_OPEN -> reduce -> 'action 1712'
actionsTable[10760] = 1713; // 'state 168' -> PAREN_CLOSE -> reduce -> 'action 1713'
actionsTable[10761] = 1714; // 'state 168' -> QUANTIFIER -> reduce -> 'action 1714'
actionsTable[10762] = 1715; // 'state 168' -> BRACKET_OPEN -> reduce -> 'action 1715'
actionsTable[10764] = 1716; // 'state 168' -> @par-gen.EOF -> reduce -> 'action 1716'
actionsTable[10816] = 1717; // 'state 169' -> CHARACTER -> reduce -> 'action 1717'
actionsTable[10817] = 1718; // 'state 169' -> CONTROL_CHARACTER -> reduce -> 'action 1718'
actionsTable[10818] = 1719; // 'state 169' -> BACKSLASH -> reduce -> 'action 1719'
actionsTable[10819] = 1720; // 'state 169' -> CARET -> reduce -> 'action 1720'
actionsTable[10820] = 1721; // 'state 169' -> DASH -> reduce -> 'action 1721'
actionsTable[10822] = 1722; // 'state 169' -> UNION -> reduce -> 'action 1722'
actionsTable[10823] = 1723; // 'state 169' -> PAREN_OPEN -> reduce -> 'action 1723'
actionsTable[10824] = 1724; // 'state 169' -> PAREN_CLOSE -> reduce -> 'action 1724'
actionsTable[10825] = 1725; // 'state 169' -> QUANTIFIER -> reduce -> 'action 1725'
actionsTable[10826] = 1726; // 'state 169' -> BRACKET_OPEN -> reduce -> 'action 1726'
actionsTable[10828] = 1727; // 'state 169' -> @par-gen.EOF -> reduce -> 'action 1727'
actionsTable[10880] = 1728; // 'state 170' -> CHARACTER -> reduce -> 'action 1728'
actionsTable[10881] = 1729; // 'state 170' -> CONTROL_CHARACTER -> reduce -> 'action 1729'
actionsTable[10882] = 1730; // 'state 170' -> BACKSLASH -> reduce -> 'action 1730'
actionsTable[10885] = 1731; // 'state 170' -> DOT -> reduce -> 'action 1731'
actionsTable[10886] = 1732; // 'state 170' -> UNION -> reduce -> 'action 1732'
actionsTable[10887] = 1733; // 'state 170' -> PAREN_OPEN -> reduce -> 'action 1733'
actionsTable[10888] = 1734; // 'state 170' -> PAREN_CLOSE -> reduce -> 'action 1734'
actionsTable[10889] = 1735; // 'state 170' -> QUANTIFIER -> reduce -> 'action 1735'
actionsTable[10891] = 1736; // 'state 170' -> BRACKET_CLOSE -> reduce -> 'action 1736'
actionsTable[10944] = 1737; // 'state 171' -> CHARACTER -> shift -> 'action 1737'
actionsTable[11200] = 1738; // 'state 175' -> CHARACTER -> reduce -> 'action 1738'
actionsTable[11201] = 1739; // 'state 175' -> CONTROL_CHARACTER -> reduce -> 'action 1739'
actionsTable[11202] = 1740; // 'state 175' -> BACKSLASH -> reduce -> 'action 1740'
actionsTable[11205] = 1741; // 'state 175' -> DOT -> reduce -> 'action 1741'
actionsTable[11206] = 1742; // 'state 175' -> UNION -> reduce -> 'action 1742'
actionsTable[11207] = 1743; // 'state 175' -> PAREN_OPEN -> reduce -> 'action 1743'
actionsTable[11208] = 1744; // 'state 175' -> PAREN_CLOSE -> reduce -> 'action 1744'
actionsTable[11209] = 1745; // 'state 175' -> QUANTIFIER -> reduce -> 'action 1745'
actionsTable[11211] = 1746; // 'state 175' -> BRACKET_CLOSE -> reduce -> 'action 1746'
actionsTable[11136] = 1747; // 'state 174' -> CHARACTER -> reduce -> 'action 1747'
actionsTable[11137] = 1748; // 'state 174' -> CONTROL_CHARACTER -> reduce -> 'action 1748'
actionsTable[11138] = 1749; // 'state 174' -> BACKSLASH -> reduce -> 'action 1749'
actionsTable[11141] = 1750; // 'state 174' -> DOT -> reduce -> 'action 1750'
actionsTable[11142] = 1751; // 'state 174' -> UNION -> reduce -> 'action 1751'
actionsTable[11143] = 1752; // 'state 174' -> PAREN_OPEN -> reduce -> 'action 1752'
actionsTable[11144] = 1753; // 'state 174' -> PAREN_CLOSE -> reduce -> 'action 1753'
actionsTable[11145] = 1754; // 'state 174' -> QUANTIFIER -> reduce -> 'action 1754'
actionsTable[11147] = 1755; // 'state 174' -> BRACKET_CLOSE -> reduce -> 'action 1755'
actionsTable[11072] = 1756; // 'state 173' -> CHARACTER -> reduce -> 'action 1756'
actionsTable[11073] = 1757; // 'state 173' -> CONTROL_CHARACTER -> reduce -> 'action 1757'
actionsTable[11074] = 1758; // 'state 173' -> BACKSLASH -> reduce -> 'action 1758'
actionsTable[11077] = 1759; // 'state 173' -> DOT -> reduce -> 'action 1759'
actionsTable[11078] = 1760; // 'state 173' -> UNION -> reduce -> 'action 1760'
actionsTable[11079] = 1761; // 'state 173' -> PAREN_OPEN -> reduce -> 'action 1761'
actionsTable[11080] = 1762; // 'state 173' -> PAREN_CLOSE -> reduce -> 'action 1762'
actionsTable[11081] = 1763; // 'state 173' -> QUANTIFIER -> reduce -> 'action 1763'
actionsTable[11083] = 1764; // 'state 173' -> BRACKET_CLOSE -> reduce -> 'action 1764'
actionsTable[11008] = 1765; // 'state 172' -> CHARACTER -> reduce -> 'action 1765'
actionsTable[11009] = 1766; // 'state 172' -> CONTROL_CHARACTER -> reduce -> 'action 1766'
actionsTable[11010] = 1767; // 'state 172' -> BACKSLASH -> reduce -> 'action 1767'
actionsTable[11013] = 1768; // 'state 172' -> DOT -> reduce -> 'action 1768'
actionsTable[11014] = 1769; // 'state 172' -> UNION -> reduce -> 'action 1769'
actionsTable[11015] = 1770; // 'state 172' -> PAREN_OPEN -> reduce -> 'action 1770'
actionsTable[11016] = 1771; // 'state 172' -> PAREN_CLOSE -> reduce -> 'action 1771'
actionsTable[11017] = 1772; // 'state 172' -> QUANTIFIER -> reduce -> 'action 1772'
actionsTable[11019] = 1773; // 'state 172' -> BRACKET_CLOSE -> reduce -> 'action 1773'
actionsTable[11264] = 1774; // 'state 176' -> CHARACTER -> reduce -> 'action 1774'
actionsTable[11265] = 1775; // 'state 176' -> CONTROL_CHARACTER -> reduce -> 'action 1775'
actionsTable[11266] = 1776; // 'state 176' -> BACKSLASH -> reduce -> 'action 1776'
actionsTable[11269] = 1777; // 'state 176' -> DOT -> reduce -> 'action 1777'
actionsTable[11270] = 1778; // 'state 176' -> UNION -> reduce -> 'action 1778'
actionsTable[11271] = 1779; // 'state 176' -> PAREN_OPEN -> reduce -> 'action 1779'
actionsTable[11272] = 1780; // 'state 176' -> PAREN_CLOSE -> reduce -> 'action 1780'
actionsTable[11273] = 1781; // 'state 176' -> QUANTIFIER -> reduce -> 'action 1781'
actionsTable[11275] = 1782; // 'state 176' -> BRACKET_CLOSE -> reduce -> 'action 1782'
actionsTable[11328] = 1783; // 'state 177' -> CHARACTER -> reduce -> 'action 1783'
actionsTable[11329] = 1784; // 'state 177' -> CONTROL_CHARACTER -> reduce -> 'action 1784'
actionsTable[11330] = 1785; // 'state 177' -> BACKSLASH -> reduce -> 'action 1785'
actionsTable[11333] = 1786; // 'state 177' -> DOT -> reduce -> 'action 1786'
actionsTable[11334] = 1787; // 'state 177' -> UNION -> reduce -> 'action 1787'
actionsTable[11335] = 1788; // 'state 177' -> PAREN_OPEN -> reduce -> 'action 1788'
actionsTable[11336] = 1789; // 'state 177' -> PAREN_CLOSE -> reduce -> 'action 1789'
actionsTable[11337] = 1790; // 'state 177' -> QUANTIFIER -> reduce -> 'action 1790'
actionsTable[11339] = 1791; // 'state 177' -> BRACKET_CLOSE -> reduce -> 'action 1791'
actionsTable[11392] = 1792; // 'state 178' -> CHARACTER -> shift -> 'action 1792'
actionsTable[11393] = 1793; // 'state 178' -> CONTROL_CHARACTER -> shift -> 'action 1793'
actionsTable[11394] = 1794; // 'state 178' -> BACKSLASH -> shift -> 'action 1794'
actionsTable[11397] = 1795; // 'state 178' -> DOT -> shift -> 'action 1795'
actionsTable[11398] = 1796; // 'state 178' -> UNION -> shift -> 'action 1796'
actionsTable[11399] = 1797; // 'state 178' -> PAREN_OPEN -> shift -> 'action 1797'
actionsTable[11400] = 1798; // 'state 178' -> PAREN_CLOSE -> shift -> 'action 1798'
actionsTable[11401] = 1799; // 'state 178' -> QUANTIFIER -> shift -> 'action 1799'
actionsTable[11403] = 1800; // 'state 178' -> BRACKET_CLOSE -> shift -> 'action 1800'
actionsTable[11415] = 1801; // 'state 178' -> CharacterClassCharacter -> shift -> 'action 1801'
actionsTable[11416] = 1802; // 'state 178' -> CharacterClassRange -> shift -> 'action 1802'
actionsTable[11456] = 1803; // 'state 179' -> CHARACTER -> reduce -> 'action 1803'
actionsTable[11457] = 1804; // 'state 179' -> CONTROL_CHARACTER -> reduce -> 'action 1804'
actionsTable[11458] = 1805; // 'state 179' -> BACKSLASH -> reduce -> 'action 1805'
actionsTable[11459] = 1806; // 'state 179' -> CARET -> reduce -> 'action 1806'
actionsTable[11460] = 1807; // 'state 179' -> DASH -> reduce -> 'action 1807'
actionsTable[11462] = 1808; // 'state 179' -> UNION -> reduce -> 'action 1808'
actionsTable[11463] = 1809; // 'state 179' -> PAREN_OPEN -> reduce -> 'action 1809'
actionsTable[11464] = 1810; // 'state 179' -> PAREN_CLOSE -> reduce -> 'action 1810'
actionsTable[11465] = 1811; // 'state 179' -> QUANTIFIER -> reduce -> 'action 1811'
actionsTable[11466] = 1812; // 'state 179' -> BRACKET_OPEN -> reduce -> 'action 1812'
actionsTable[11468] = 1813; // 'state 179' -> @par-gen.EOF -> reduce -> 'action 1813'
actionsTable[11520] = 1814; // 'state 180' -> CHARACTER -> reduce -> 'action 1814'
actionsTable[11521] = 1815; // 'state 180' -> CONTROL_CHARACTER -> reduce -> 'action 1815'
actionsTable[11522] = 1816; // 'state 180' -> BACKSLASH -> reduce -> 'action 1816'
actionsTable[11523] = 1817; // 'state 180' -> CARET -> reduce -> 'action 1817'
actionsTable[11524] = 1818; // 'state 180' -> DASH -> reduce -> 'action 1818'
actionsTable[11526] = 1819; // 'state 180' -> UNION -> reduce -> 'action 1819'
actionsTable[11527] = 1820; // 'state 180' -> PAREN_OPEN -> reduce -> 'action 1820'
actionsTable[11528] = 1821; // 'state 180' -> PAREN_CLOSE -> reduce -> 'action 1821'
actionsTable[11529] = 1822; // 'state 180' -> QUANTIFIER -> reduce -> 'action 1822'
actionsTable[11530] = 1823; // 'state 180' -> BRACKET_OPEN -> reduce -> 'action 1823'
actionsTable[11532] = 1824; // 'state 180' -> @par-gen.EOF -> reduce -> 'action 1824'
actionsTable[11584] = 1825; // 'state 181' -> CHARACTER -> reduce -> 'action 1825'
actionsTable[11585] = 1826; // 'state 181' -> CONTROL_CHARACTER -> reduce -> 'action 1826'
actionsTable[11586] = 1827; // 'state 181' -> BACKSLASH -> reduce -> 'action 1827'
actionsTable[11587] = 1828; // 'state 181' -> CARET -> reduce -> 'action 1828'
actionsTable[11588] = 1829; // 'state 181' -> DASH -> reduce -> 'action 1829'
actionsTable[11590] = 1830; // 'state 181' -> UNION -> reduce -> 'action 1830'
actionsTable[11591] = 1831; // 'state 181' -> PAREN_OPEN -> reduce -> 'action 1831'
actionsTable[11592] = 1832; // 'state 181' -> PAREN_CLOSE -> reduce -> 'action 1832'
actionsTable[11593] = 1833; // 'state 181' -> QUANTIFIER -> reduce -> 'action 1833'
actionsTable[11594] = 1834; // 'state 181' -> BRACKET_OPEN -> reduce -> 'action 1834'
actionsTable[11596] = 1835; // 'state 181' -> @par-gen.EOF -> reduce -> 'action 1835'
actionsTable[11648] = 1836; // 'state 182' -> CHARACTER -> reduce -> 'action 1836'
actionsTable[11649] = 1837; // 'state 182' -> CONTROL_CHARACTER -> reduce -> 'action 1837'
actionsTable[11650] = 1838; // 'state 182' -> BACKSLASH -> reduce -> 'action 1838'
actionsTable[11651] = 1839; // 'state 182' -> CARET -> reduce -> 'action 1839'
actionsTable[11652] = 1840; // 'state 182' -> DASH -> reduce -> 'action 1840'
actionsTable[11654] = 1841; // 'state 182' -> UNION -> reduce -> 'action 1841'
actionsTable[11655] = 1842; // 'state 182' -> PAREN_OPEN -> reduce -> 'action 1842'
actionsTable[11656] = 1843; // 'state 182' -> PAREN_CLOSE -> reduce -> 'action 1843'
actionsTable[11657] = 1844; // 'state 182' -> QUANTIFIER -> reduce -> 'action 1844'
actionsTable[11658] = 1845; // 'state 182' -> BRACKET_OPEN -> reduce -> 'action 1845'
actionsTable[11660] = 1846; // 'state 182' -> @par-gen.EOF -> reduce -> 'action 1846'
actionsTable[11712] = 1847; // 'state 183' -> CHARACTER -> reduce -> 'action 1847'
actionsTable[11713] = 1848; // 'state 183' -> CONTROL_CHARACTER -> reduce -> 'action 1848'
actionsTable[11714] = 1849; // 'state 183' -> BACKSLASH -> reduce -> 'action 1849'
actionsTable[11717] = 1850; // 'state 183' -> DOT -> reduce -> 'action 1850'
actionsTable[11718] = 1851; // 'state 183' -> UNION -> reduce -> 'action 1851'
actionsTable[11719] = 1852; // 'state 183' -> PAREN_OPEN -> reduce -> 'action 1852'
actionsTable[11720] = 1853; // 'state 183' -> PAREN_CLOSE -> reduce -> 'action 1853'
actionsTable[11721] = 1854; // 'state 183' -> QUANTIFIER -> reduce -> 'action 1854'
actionsTable[11723] = 1855; // 'state 183' -> BRACKET_CLOSE -> reduce -> 'action 1855'
actionsTable[11776] = 1856; // 'state 184' -> CHARACTER -> shift -> 'action 1856'
actionsTable[12032] = 1857; // 'state 188' -> CHARACTER -> reduce -> 'action 1857'
actionsTable[12033] = 1858; // 'state 188' -> CONTROL_CHARACTER -> reduce -> 'action 1858'
actionsTable[12034] = 1859; // 'state 188' -> BACKSLASH -> reduce -> 'action 1859'
actionsTable[12037] = 1860; // 'state 188' -> DOT -> reduce -> 'action 1860'
actionsTable[12038] = 1861; // 'state 188' -> UNION -> reduce -> 'action 1861'
actionsTable[12039] = 1862; // 'state 188' -> PAREN_OPEN -> reduce -> 'action 1862'
actionsTable[12040] = 1863; // 'state 188' -> PAREN_CLOSE -> reduce -> 'action 1863'
actionsTable[12041] = 1864; // 'state 188' -> QUANTIFIER -> reduce -> 'action 1864'
actionsTable[12043] = 1865; // 'state 188' -> BRACKET_CLOSE -> reduce -> 'action 1865'
actionsTable[11968] = 1866; // 'state 187' -> CHARACTER -> reduce -> 'action 1866'
actionsTable[11969] = 1867; // 'state 187' -> CONTROL_CHARACTER -> reduce -> 'action 1867'
actionsTable[11970] = 1868; // 'state 187' -> BACKSLASH -> reduce -> 'action 1868'
actionsTable[11973] = 1869; // 'state 187' -> DOT -> reduce -> 'action 1869'
actionsTable[11974] = 1870; // 'state 187' -> UNION -> reduce -> 'action 1870'
actionsTable[11975] = 1871; // 'state 187' -> PAREN_OPEN -> reduce -> 'action 1871'
actionsTable[11976] = 1872; // 'state 187' -> PAREN_CLOSE -> reduce -> 'action 1872'
actionsTable[11977] = 1873; // 'state 187' -> QUANTIFIER -> reduce -> 'action 1873'
actionsTable[11979] = 1874; // 'state 187' -> BRACKET_CLOSE -> reduce -> 'action 1874'
actionsTable[11904] = 1875; // 'state 186' -> CHARACTER -> reduce -> 'action 1875'
actionsTable[11905] = 1876; // 'state 186' -> CONTROL_CHARACTER -> reduce -> 'action 1876'
actionsTable[11906] = 1877; // 'state 186' -> BACKSLASH -> reduce -> 'action 1877'
actionsTable[11909] = 1878; // 'state 186' -> DOT -> reduce -> 'action 1878'
actionsTable[11910] = 1879; // 'state 186' -> UNION -> reduce -> 'action 1879'
actionsTable[11911] = 1880; // 'state 186' -> PAREN_OPEN -> reduce -> 'action 1880'
actionsTable[11912] = 1881; // 'state 186' -> PAREN_CLOSE -> reduce -> 'action 1881'
actionsTable[11913] = 1882; // 'state 186' -> QUANTIFIER -> reduce -> 'action 1882'
actionsTable[11915] = 1883; // 'state 186' -> BRACKET_CLOSE -> reduce -> 'action 1883'
actionsTable[11840] = 1884; // 'state 185' -> CHARACTER -> reduce -> 'action 1884'
actionsTable[11841] = 1885; // 'state 185' -> CONTROL_CHARACTER -> reduce -> 'action 1885'
actionsTable[11842] = 1886; // 'state 185' -> BACKSLASH -> reduce -> 'action 1886'
actionsTable[11845] = 1887; // 'state 185' -> DOT -> reduce -> 'action 1887'
actionsTable[11846] = 1888; // 'state 185' -> UNION -> reduce -> 'action 1888'
actionsTable[11847] = 1889; // 'state 185' -> PAREN_OPEN -> reduce -> 'action 1889'
actionsTable[11848] = 1890; // 'state 185' -> PAREN_CLOSE -> reduce -> 'action 1890'
actionsTable[11849] = 1891; // 'state 185' -> QUANTIFIER -> reduce -> 'action 1891'
actionsTable[11851] = 1892; // 'state 185' -> BRACKET_CLOSE -> reduce -> 'action 1892'
actionsTable[12096] = 1893; // 'state 189' -> CHARACTER -> reduce -> 'action 1893'
actionsTable[12097] = 1894; // 'state 189' -> CONTROL_CHARACTER -> reduce -> 'action 1894'
actionsTable[12098] = 1895; // 'state 189' -> BACKSLASH -> reduce -> 'action 1895'
actionsTable[12101] = 1896; // 'state 189' -> DOT -> reduce -> 'action 1896'
actionsTable[12102] = 1897; // 'state 189' -> UNION -> reduce -> 'action 1897'
actionsTable[12103] = 1898; // 'state 189' -> PAREN_OPEN -> reduce -> 'action 1898'
actionsTable[12104] = 1899; // 'state 189' -> PAREN_CLOSE -> reduce -> 'action 1899'
actionsTable[12105] = 1900; // 'state 189' -> QUANTIFIER -> reduce -> 'action 1900'
actionsTable[12107] = 1901; // 'state 189' -> BRACKET_CLOSE -> reduce -> 'action 1901'
actionsTable[12160] = 1902; // 'state 190' -> CHARACTER -> reduce -> 'action 1902'
actionsTable[12161] = 1903; // 'state 190' -> CONTROL_CHARACTER -> reduce -> 'action 1903'
actionsTable[12162] = 1904; // 'state 190' -> BACKSLASH -> reduce -> 'action 1904'
actionsTable[12165] = 1905; // 'state 190' -> DOT -> reduce -> 'action 1905'
actionsTable[12166] = 1906; // 'state 190' -> UNION -> reduce -> 'action 1906'
actionsTable[12167] = 1907; // 'state 190' -> PAREN_OPEN -> reduce -> 'action 1907'
actionsTable[12168] = 1908; // 'state 190' -> PAREN_CLOSE -> reduce -> 'action 1908'
actionsTable[12169] = 1909; // 'state 190' -> QUANTIFIER -> reduce -> 'action 1909'
actionsTable[12171] = 1910; // 'state 190' -> BRACKET_CLOSE -> reduce -> 'action 1910'
actionsTable[12224] = 1911; // 'state 191' -> CHARACTER -> shift -> 'action 1911'
actionsTable[12225] = 1912; // 'state 191' -> CONTROL_CHARACTER -> shift -> 'action 1912'
actionsTable[12226] = 1913; // 'state 191' -> BACKSLASH -> shift -> 'action 1913'
actionsTable[12229] = 1914; // 'state 191' -> DOT -> shift -> 'action 1914'
actionsTable[12230] = 1915; // 'state 191' -> UNION -> shift -> 'action 1915'
actionsTable[12231] = 1916; // 'state 191' -> PAREN_OPEN -> shift -> 'action 1916'
actionsTable[12232] = 1917; // 'state 191' -> PAREN_CLOSE -> shift -> 'action 1917'
actionsTable[12233] = 1918; // 'state 191' -> QUANTIFIER -> shift -> 'action 1918'
actionsTable[12235] = 1919; // 'state 191' -> BRACKET_CLOSE -> shift -> 'action 1919'
actionsTable[12247] = 1920; // 'state 191' -> CharacterClassCharacter -> shift -> 'action 1920'
actionsTable[12248] = 1921; // 'state 191' -> CharacterClassRange -> shift -> 'action 1921'
actionsTable[12288] = 1922; // 'state 192' -> CHARACTER -> reduce -> 'action 1922'
actionsTable[12289] = 1923; // 'state 192' -> CONTROL_CHARACTER -> reduce -> 'action 1923'
actionsTable[12290] = 1924; // 'state 192' -> BACKSLASH -> reduce -> 'action 1924'
actionsTable[12291] = 1925; // 'state 192' -> CARET -> reduce -> 'action 1925'
actionsTable[12292] = 1926; // 'state 192' -> DASH -> reduce -> 'action 1926'
actionsTable[12294] = 1927; // 'state 192' -> UNION -> reduce -> 'action 1927'
actionsTable[12295] = 1928; // 'state 192' -> PAREN_OPEN -> reduce -> 'action 1928'
actionsTable[12296] = 1929; // 'state 192' -> PAREN_CLOSE -> reduce -> 'action 1929'
actionsTable[12297] = 1930; // 'state 192' -> QUANTIFIER -> reduce -> 'action 1930'
actionsTable[12298] = 1931; // 'state 192' -> BRACKET_OPEN -> reduce -> 'action 1931'
actionsTable[12300] = 1932; // 'state 192' -> @par-gen.EOF -> reduce -> 'action 1932'
actionsTable[12352] = 1933; // 'state 193' -> CHARACTER -> reduce -> 'action 1933'
actionsTable[12353] = 1934; // 'state 193' -> CONTROL_CHARACTER -> reduce -> 'action 1934'
actionsTable[12354] = 1935; // 'state 193' -> BACKSLASH -> reduce -> 'action 1935'
actionsTable[12357] = 1936; // 'state 193' -> DOT -> reduce -> 'action 1936'
actionsTable[12358] = 1937; // 'state 193' -> UNION -> reduce -> 'action 1937'
actionsTable[12359] = 1938; // 'state 193' -> PAREN_OPEN -> reduce -> 'action 1938'
actionsTable[12360] = 1939; // 'state 193' -> PAREN_CLOSE -> reduce -> 'action 1939'
actionsTable[12361] = 1940; // 'state 193' -> QUANTIFIER -> reduce -> 'action 1940'
actionsTable[12363] = 1941; // 'state 193' -> BRACKET_CLOSE -> reduce -> 'action 1941'
actionsTable[12416] = 1942; // 'state 194' -> CHARACTER -> shift -> 'action 1942'
actionsTable[12672] = 1943; // 'state 198' -> CHARACTER -> reduce -> 'action 1943'
actionsTable[12673] = 1944; // 'state 198' -> CONTROL_CHARACTER -> reduce -> 'action 1944'
actionsTable[12674] = 1945; // 'state 198' -> BACKSLASH -> reduce -> 'action 1945'
actionsTable[12677] = 1946; // 'state 198' -> DOT -> reduce -> 'action 1946'
actionsTable[12678] = 1947; // 'state 198' -> UNION -> reduce -> 'action 1947'
actionsTable[12679] = 1948; // 'state 198' -> PAREN_OPEN -> reduce -> 'action 1948'
actionsTable[12680] = 1949; // 'state 198' -> PAREN_CLOSE -> reduce -> 'action 1949'
actionsTable[12681] = 1950; // 'state 198' -> QUANTIFIER -> reduce -> 'action 1950'
actionsTable[12683] = 1951; // 'state 198' -> BRACKET_CLOSE -> reduce -> 'action 1951'
actionsTable[12608] = 1952; // 'state 197' -> CHARACTER -> reduce -> 'action 1952'
actionsTable[12609] = 1953; // 'state 197' -> CONTROL_CHARACTER -> reduce -> 'action 1953'
actionsTable[12610] = 1954; // 'state 197' -> BACKSLASH -> reduce -> 'action 1954'
actionsTable[12613] = 1955; // 'state 197' -> DOT -> reduce -> 'action 1955'
actionsTable[12614] = 1956; // 'state 197' -> UNION -> reduce -> 'action 1956'
actionsTable[12615] = 1957; // 'state 197' -> PAREN_OPEN -> reduce -> 'action 1957'
actionsTable[12616] = 1958; // 'state 197' -> PAREN_CLOSE -> reduce -> 'action 1958'
actionsTable[12617] = 1959; // 'state 197' -> QUANTIFIER -> reduce -> 'action 1959'
actionsTable[12619] = 1960; // 'state 197' -> BRACKET_CLOSE -> reduce -> 'action 1960'
actionsTable[12544] = 1961; // 'state 196' -> CHARACTER -> reduce -> 'action 1961'
actionsTable[12545] = 1962; // 'state 196' -> CONTROL_CHARACTER -> reduce -> 'action 1962'
actionsTable[12546] = 1963; // 'state 196' -> BACKSLASH -> reduce -> 'action 1963'
actionsTable[12549] = 1964; // 'state 196' -> DOT -> reduce -> 'action 1964'
actionsTable[12550] = 1965; // 'state 196' -> UNION -> reduce -> 'action 1965'
actionsTable[12551] = 1966; // 'state 196' -> PAREN_OPEN -> reduce -> 'action 1966'
actionsTable[12552] = 1967; // 'state 196' -> PAREN_CLOSE -> reduce -> 'action 1967'
actionsTable[12553] = 1968; // 'state 196' -> QUANTIFIER -> reduce -> 'action 1968'
actionsTable[12555] = 1969; // 'state 196' -> BRACKET_CLOSE -> reduce -> 'action 1969'
actionsTable[12480] = 1970; // 'state 195' -> CHARACTER -> reduce -> 'action 1970'
actionsTable[12481] = 1971; // 'state 195' -> CONTROL_CHARACTER -> reduce -> 'action 1971'
actionsTable[12482] = 1972; // 'state 195' -> BACKSLASH -> reduce -> 'action 1972'
actionsTable[12485] = 1973; // 'state 195' -> DOT -> reduce -> 'action 1973'
actionsTable[12486] = 1974; // 'state 195' -> UNION -> reduce -> 'action 1974'
actionsTable[12487] = 1975; // 'state 195' -> PAREN_OPEN -> reduce -> 'action 1975'
actionsTable[12488] = 1976; // 'state 195' -> PAREN_CLOSE -> reduce -> 'action 1976'
actionsTable[12489] = 1977; // 'state 195' -> QUANTIFIER -> reduce -> 'action 1977'
actionsTable[12491] = 1978; // 'state 195' -> BRACKET_CLOSE -> reduce -> 'action 1978'
actionsTable[12736] = 1979; // 'state 199' -> CHARACTER -> reduce -> 'action 1979'
actionsTable[12737] = 1980; // 'state 199' -> CONTROL_CHARACTER -> reduce -> 'action 1980'
actionsTable[12738] = 1981; // 'state 199' -> BACKSLASH -> reduce -> 'action 1981'
actionsTable[12741] = 1982; // 'state 199' -> DOT -> reduce -> 'action 1982'
actionsTable[12742] = 1983; // 'state 199' -> UNION -> reduce -> 'action 1983'
actionsTable[12743] = 1984; // 'state 199' -> PAREN_OPEN -> reduce -> 'action 1984'
actionsTable[12744] = 1985; // 'state 199' -> PAREN_CLOSE -> reduce -> 'action 1985'
actionsTable[12745] = 1986; // 'state 199' -> QUANTIFIER -> reduce -> 'action 1986'
actionsTable[12747] = 1987; // 'state 199' -> BRACKET_CLOSE -> reduce -> 'action 1987'
actionsTable[12800] = 1988; // 'state 200' -> CHARACTER -> reduce -> 'action 1988'
actionsTable[12801] = 1989; // 'state 200' -> CONTROL_CHARACTER -> reduce -> 'action 1989'
actionsTable[12802] = 1990; // 'state 200' -> BACKSLASH -> reduce -> 'action 1990'
actionsTable[12805] = 1991; // 'state 200' -> DOT -> reduce -> 'action 1991'
actionsTable[12806] = 1992; // 'state 200' -> UNION -> reduce -> 'action 1992'
actionsTable[12807] = 1993; // 'state 200' -> PAREN_OPEN -> reduce -> 'action 1993'
actionsTable[12808] = 1994; // 'state 200' -> PAREN_CLOSE -> reduce -> 'action 1994'
actionsTable[12809] = 1995; // 'state 200' -> QUANTIFIER -> reduce -> 'action 1995'
actionsTable[12811] = 1996; // 'state 200' -> BRACKET_CLOSE -> reduce -> 'action 1996'
actionsTable[12864] = 1997; // 'state 201' -> CHARACTER -> shift -> 'action 1997'
actionsTable[12865] = 1998; // 'state 201' -> CONTROL_CHARACTER -> shift -> 'action 1998'
actionsTable[12866] = 1999; // 'state 201' -> BACKSLASH -> shift -> 'action 1999'
actionsTable[12869] = 2000; // 'state 201' -> DOT -> shift -> 'action 2000'
actionsTable[12870] = 2001; // 'state 201' -> UNION -> shift -> 'action 2001'
actionsTable[12871] = 2002; // 'state 201' -> PAREN_OPEN -> shift -> 'action 2002'
actionsTable[12872] = 2003; // 'state 201' -> PAREN_CLOSE -> shift -> 'action 2003'
actionsTable[12873] = 2004; // 'state 201' -> QUANTIFIER -> shift -> 'action 2004'
actionsTable[12875] = 2005; // 'state 201' -> BRACKET_CLOSE -> shift -> 'action 2005'
actionsTable[12887] = 2006; // 'state 201' -> CharacterClassCharacter -> shift -> 'action 2006'
actionsTable[12888] = 2007; // 'state 201' -> CharacterClassRange -> shift -> 'action 2007'
actionsTable[12928] = 2008; // 'state 202' -> CHARACTER -> shift -> 'action 2008'
actionsTable[13184] = 2009; // 'state 206' -> CHARACTER -> reduce -> 'action 2009'
actionsTable[13185] = 2010; // 'state 206' -> CONTROL_CHARACTER -> reduce -> 'action 2010'
actionsTable[13186] = 2011; // 'state 206' -> BACKSLASH -> reduce -> 'action 2011'
actionsTable[13189] = 2012; // 'state 206' -> DOT -> reduce -> 'action 2012'
actionsTable[13190] = 2013; // 'state 206' -> UNION -> reduce -> 'action 2013'
actionsTable[13191] = 2014; // 'state 206' -> PAREN_OPEN -> reduce -> 'action 2014'
actionsTable[13192] = 2015; // 'state 206' -> PAREN_CLOSE -> reduce -> 'action 2015'
actionsTable[13193] = 2016; // 'state 206' -> QUANTIFIER -> reduce -> 'action 2016'
actionsTable[13195] = 2017; // 'state 206' -> BRACKET_CLOSE -> reduce -> 'action 2017'
actionsTable[13120] = 2018; // 'state 205' -> CHARACTER -> reduce -> 'action 2018'
actionsTable[13121] = 2019; // 'state 205' -> CONTROL_CHARACTER -> reduce -> 'action 2019'
actionsTable[13122] = 2020; // 'state 205' -> BACKSLASH -> reduce -> 'action 2020'
actionsTable[13125] = 2021; // 'state 205' -> DOT -> reduce -> 'action 2021'
actionsTable[13126] = 2022; // 'state 205' -> UNION -> reduce -> 'action 2022'
actionsTable[13127] = 2023; // 'state 205' -> PAREN_OPEN -> reduce -> 'action 2023'
actionsTable[13128] = 2024; // 'state 205' -> PAREN_CLOSE -> reduce -> 'action 2024'
actionsTable[13129] = 2025; // 'state 205' -> QUANTIFIER -> reduce -> 'action 2025'
actionsTable[13131] = 2026; // 'state 205' -> BRACKET_CLOSE -> reduce -> 'action 2026'
actionsTable[13056] = 2027; // 'state 204' -> CHARACTER -> reduce -> 'action 2027'
actionsTable[13057] = 2028; // 'state 204' -> CONTROL_CHARACTER -> reduce -> 'action 2028'
actionsTable[13058] = 2029; // 'state 204' -> BACKSLASH -> reduce -> 'action 2029'
actionsTable[13061] = 2030; // 'state 204' -> DOT -> reduce -> 'action 2030'
actionsTable[13062] = 2031; // 'state 204' -> UNION -> reduce -> 'action 2031'
actionsTable[13063] = 2032; // 'state 204' -> PAREN_OPEN -> reduce -> 'action 2032'
actionsTable[13064] = 2033; // 'state 204' -> PAREN_CLOSE -> reduce -> 'action 2033'
actionsTable[13065] = 2034; // 'state 204' -> QUANTIFIER -> reduce -> 'action 2034'
actionsTable[13067] = 2035; // 'state 204' -> BRACKET_CLOSE -> reduce -> 'action 2035'
actionsTable[12992] = 2036; // 'state 203' -> CHARACTER -> reduce -> 'action 2036'
actionsTable[12993] = 2037; // 'state 203' -> CONTROL_CHARACTER -> reduce -> 'action 2037'
actionsTable[12994] = 2038; // 'state 203' -> BACKSLASH -> reduce -> 'action 2038'
actionsTable[12997] = 2039; // 'state 203' -> DOT -> reduce -> 'action 2039'
actionsTable[12998] = 2040; // 'state 203' -> UNION -> reduce -> 'action 2040'
actionsTable[12999] = 2041; // 'state 203' -> PAREN_OPEN -> reduce -> 'action 2041'
actionsTable[13000] = 2042; // 'state 203' -> PAREN_CLOSE -> reduce -> 'action 2042'
actionsTable[13001] = 2043; // 'state 203' -> QUANTIFIER -> reduce -> 'action 2043'
actionsTable[13003] = 2044; // 'state 203' -> BRACKET_CLOSE -> reduce -> 'action 2044'
actionsTable[13248] = 2045; // 'state 207' -> CHARACTER -> reduce -> 'action 2045'
actionsTable[13249] = 2046; // 'state 207' -> CONTROL_CHARACTER -> reduce -> 'action 2046'
actionsTable[13250] = 2047; // 'state 207' -> BACKSLASH -> reduce -> 'action 2047'
actionsTable[13253] = 2048; // 'state 207' -> DOT -> reduce -> 'action 2048'
actionsTable[13254] = 2049; // 'state 207' -> UNION -> reduce -> 'action 2049'
actionsTable[13255] = 2050; // 'state 207' -> PAREN_OPEN -> reduce -> 'action 2050'
actionsTable[13256] = 2051; // 'state 207' -> PAREN_CLOSE -> reduce -> 'action 2051'
actionsTable[13257] = 2052; // 'state 207' -> QUANTIFIER -> reduce -> 'action 2052'
actionsTable[13259] = 2053; // 'state 207' -> BRACKET_CLOSE -> reduce -> 'action 2053'
actionsTable[13312] = 2054; // 'state 208' -> CHARACTER -> reduce -> 'action 2054'
actionsTable[13313] = 2055; // 'state 208' -> CONTROL_CHARACTER -> reduce -> 'action 2055'
actionsTable[13314] = 2056; // 'state 208' -> BACKSLASH -> reduce -> 'action 2056'
actionsTable[13317] = 2057; // 'state 208' -> DOT -> reduce -> 'action 2057'
actionsTable[13318] = 2058; // 'state 208' -> UNION -> reduce -> 'action 2058'
actionsTable[13319] = 2059; // 'state 208' -> PAREN_OPEN -> reduce -> 'action 2059'
actionsTable[13320] = 2060; // 'state 208' -> PAREN_CLOSE -> reduce -> 'action 2060'
actionsTable[13321] = 2061; // 'state 208' -> QUANTIFIER -> reduce -> 'action 2061'
actionsTable[13323] = 2062; // 'state 208' -> BRACKET_CLOSE -> reduce -> 'action 2062'
actionsTable[13376] = 2063; // 'state 209' -> CHARACTER -> reduce -> 'action 2063'
actionsTable[13377] = 2064; // 'state 209' -> CONTROL_CHARACTER -> reduce -> 'action 2064'
actionsTable[13378] = 2065; // 'state 209' -> BACKSLASH -> reduce -> 'action 2065'
actionsTable[13381] = 2066; // 'state 209' -> DOT -> reduce -> 'action 2066'
actionsTable[13382] = 2067; // 'state 209' -> UNION -> reduce -> 'action 2067'
actionsTable[13383] = 2068; // 'state 209' -> PAREN_OPEN -> reduce -> 'action 2068'
actionsTable[13384] = 2069; // 'state 209' -> PAREN_CLOSE -> reduce -> 'action 2069'
actionsTable[13385] = 2070; // 'state 209' -> QUANTIFIER -> reduce -> 'action 2070'
actionsTable[13387] = 2071; // 'state 209' -> BRACKET_CLOSE -> reduce -> 'action 2071'
actionsTable[13440] = 2072; // 'state 210' -> CHARACTER -> reduce -> 'action 2072'
actionsTable[13441] = 2073; // 'state 210' -> CONTROL_CHARACTER -> reduce -> 'action 2073'
actionsTable[13442] = 2074; // 'state 210' -> BACKSLASH -> reduce -> 'action 2074'
actionsTable[13443] = 2075; // 'state 210' -> CARET -> reduce -> 'action 2075'
actionsTable[13444] = 2076; // 'state 210' -> DASH -> reduce -> 'action 2076'
actionsTable[13446] = 2077; // 'state 210' -> UNION -> reduce -> 'action 2077'
actionsTable[13447] = 2078; // 'state 210' -> PAREN_OPEN -> reduce -> 'action 2078'
actionsTable[13448] = 2079; // 'state 210' -> PAREN_CLOSE -> reduce -> 'action 2079'
actionsTable[13449] = 2080; // 'state 210' -> QUANTIFIER -> reduce -> 'action 2080'
actionsTable[13450] = 2081; // 'state 210' -> BRACKET_OPEN -> reduce -> 'action 2081'
actionsTable[13452] = 2082; // 'state 210' -> @par-gen.EOF -> reduce -> 'action 2082'
actionsTable[13504] = 2083; // 'state 211' -> CHARACTER -> reduce -> 'action 2083'
actionsTable[13505] = 2084; // 'state 211' -> CONTROL_CHARACTER -> reduce -> 'action 2084'
actionsTable[13506] = 2085; // 'state 211' -> BACKSLASH -> reduce -> 'action 2085'
actionsTable[13509] = 2086; // 'state 211' -> DOT -> reduce -> 'action 2086'
actionsTable[13510] = 2087; // 'state 211' -> UNION -> reduce -> 'action 2087'
actionsTable[13511] = 2088; // 'state 211' -> PAREN_OPEN -> reduce -> 'action 2088'
actionsTable[13512] = 2089; // 'state 211' -> PAREN_CLOSE -> reduce -> 'action 2089'
actionsTable[13513] = 2090; // 'state 211' -> QUANTIFIER -> reduce -> 'action 2090'
actionsTable[13515] = 2091; // 'state 211' -> BRACKET_CLOSE -> reduce -> 'action 2091'
actionsTable[13568] = 2092; // 'state 212' -> CHARACTER -> reduce -> 'action 2092'
actionsTable[13569] = 2093; // 'state 212' -> CONTROL_CHARACTER -> reduce -> 'action 2093'
actionsTable[13570] = 2094; // 'state 212' -> BACKSLASH -> reduce -> 'action 2094'
actionsTable[13571] = 2095; // 'state 212' -> CARET -> reduce -> 'action 2095'
actionsTable[13572] = 2096; // 'state 212' -> DASH -> reduce -> 'action 2096'
actionsTable[13574] = 2097; // 'state 212' -> UNION -> reduce -> 'action 2097'
actionsTable[13575] = 2098; // 'state 212' -> PAREN_OPEN -> reduce -> 'action 2098'
actionsTable[13576] = 2099; // 'state 212' -> PAREN_CLOSE -> reduce -> 'action 2099'
actionsTable[13577] = 2100; // 'state 212' -> QUANTIFIER -> reduce -> 'action 2100'
actionsTable[13578] = 2101; // 'state 212' -> BRACKET_OPEN -> reduce -> 'action 2101'
actionsTable[13580] = 2102; // 'state 212' -> @par-gen.EOF -> reduce -> 'action 2102'
actionsTable[13632] = 2103; // 'state 213' -> CHARACTER -> reduce -> 'action 2103'
actionsTable[13633] = 2104; // 'state 213' -> CONTROL_CHARACTER -> reduce -> 'action 2104'
actionsTable[13634] = 2105; // 'state 213' -> BACKSLASH -> reduce -> 'action 2105'
actionsTable[13637] = 2106; // 'state 213' -> DOT -> reduce -> 'action 2106'
actionsTable[13638] = 2107; // 'state 213' -> UNION -> reduce -> 'action 2107'
actionsTable[13639] = 2108; // 'state 213' -> PAREN_OPEN -> reduce -> 'action 2108'
actionsTable[13640] = 2109; // 'state 213' -> PAREN_CLOSE -> reduce -> 'action 2109'
actionsTable[13641] = 2110; // 'state 213' -> QUANTIFIER -> reduce -> 'action 2110'
actionsTable[13643] = 2111; // 'state 213' -> BRACKET_CLOSE -> reduce -> 'action 2111'
actionsTable[13696] = 2112; // 'state 214' -> CHARACTER -> reduce -> 'action 2112'
actionsTable[13697] = 2113; // 'state 214' -> CONTROL_CHARACTER -> reduce -> 'action 2113'
actionsTable[13698] = 2114; // 'state 214' -> BACKSLASH -> reduce -> 'action 2114'
actionsTable[13699] = 2115; // 'state 214' -> CARET -> reduce -> 'action 2115'
actionsTable[13700] = 2116; // 'state 214' -> DASH -> reduce -> 'action 2116'
actionsTable[13702] = 2117; // 'state 214' -> UNION -> reduce -> 'action 2117'
actionsTable[13703] = 2118; // 'state 214' -> PAREN_OPEN -> reduce -> 'action 2118'
actionsTable[13704] = 2119; // 'state 214' -> PAREN_CLOSE -> reduce -> 'action 2119'
actionsTable[13705] = 2120; // 'state 214' -> QUANTIFIER -> reduce -> 'action 2120'
actionsTable[13706] = 2121; // 'state 214' -> BRACKET_OPEN -> reduce -> 'action 2121'
actionsTable[13708] = 2122; // 'state 214' -> @par-gen.EOF -> reduce -> 'action 2122'
actionsTable[13760] = 2123; // 'state 215' -> CHARACTER -> reduce -> 'action 2123'
actionsTable[13761] = 2124; // 'state 215' -> CONTROL_CHARACTER -> reduce -> 'action 2124'
actionsTable[13762] = 2125; // 'state 215' -> BACKSLASH -> reduce -> 'action 2125'
actionsTable[13765] = 2126; // 'state 215' -> DOT -> reduce -> 'action 2126'
actionsTable[13766] = 2127; // 'state 215' -> UNION -> reduce -> 'action 2127'
actionsTable[13767] = 2128; // 'state 215' -> PAREN_OPEN -> reduce -> 'action 2128'
actionsTable[13768] = 2129; // 'state 215' -> PAREN_CLOSE -> reduce -> 'action 2129'
actionsTable[13769] = 2130; // 'state 215' -> QUANTIFIER -> reduce -> 'action 2130'
actionsTable[13771] = 2131; // 'state 215' -> BRACKET_CLOSE -> reduce -> 'action 2131'
actionsTable[13824] = 2132; // 'state 216' -> CHARACTER -> reduce -> 'action 2132'
actionsTable[13825] = 2133; // 'state 216' -> CONTROL_CHARACTER -> reduce -> 'action 2133'
actionsTable[13826] = 2134; // 'state 216' -> BACKSLASH -> reduce -> 'action 2134'
actionsTable[13827] = 2135; // 'state 216' -> CARET -> reduce -> 'action 2135'
actionsTable[13828] = 2136; // 'state 216' -> DASH -> reduce -> 'action 2136'
actionsTable[13830] = 2137; // 'state 216' -> UNION -> reduce -> 'action 2137'
actionsTable[13831] = 2138; // 'state 216' -> PAREN_OPEN -> reduce -> 'action 2138'
actionsTable[13832] = 2139; // 'state 216' -> PAREN_CLOSE -> reduce -> 'action 2139'
actionsTable[13833] = 2140; // 'state 216' -> QUANTIFIER -> reduce -> 'action 2140'
actionsTable[13834] = 2141; // 'state 216' -> BRACKET_OPEN -> reduce -> 'action 2141'
actionsTable[13836] = 2142; // 'state 216' -> @par-gen.EOF -> reduce -> 'action 2142'
actionsTable[13888] = 2143; // 'state 217' -> CHARACTER -> reduce -> 'action 2143'
actionsTable[13889] = 2144; // 'state 217' -> CONTROL_CHARACTER -> reduce -> 'action 2144'
actionsTable[13890] = 2145; // 'state 217' -> BACKSLASH -> reduce -> 'action 2145'
actionsTable[13893] = 2146; // 'state 217' -> DOT -> reduce -> 'action 2146'
actionsTable[13894] = 2147; // 'state 217' -> UNION -> reduce -> 'action 2147'
actionsTable[13895] = 2148; // 'state 217' -> PAREN_OPEN -> reduce -> 'action 2148'
actionsTable[13896] = 2149; // 'state 217' -> PAREN_CLOSE -> reduce -> 'action 2149'
actionsTable[13897] = 2150; // 'state 217' -> QUANTIFIER -> reduce -> 'action 2150'
actionsTable[13899] = 2151; // 'state 217' -> BRACKET_CLOSE -> reduce -> 'action 2151'

const gotoTable = new Uint16Array(13952).fill(0xffff);
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
gotoTable[3926] = 165; // 'state 165'
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
gotoTable[6359] = 170; // 'state 170'
gotoTable[6360] = 69; // 'state 69'
gotoTable[5974] = 178; // 'state 178'
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
gotoTable[8279] = 183; // 'state 183'
gotoTable[8280] = 69; // 'state 69'
gotoTable[7894] = 191; // 'state 191'
gotoTable[7895] = 68; // 'state 68'
gotoTable[7896] = 69; // 'state 69'
gotoTable[9239] = 193; // 'state 193'
gotoTable[9240] = 69; // 'state 69'
gotoTable[8854] = 201; // 'state 201'
gotoTable[8855] = 68; // 'state 68'
gotoTable[8856] = 69; // 'state 69'
gotoTable[10583] = 156; // 'state 156'
gotoTable[10584] = 69; // 'state 69'
gotoTable[11415] = 156; // 'state 156'
gotoTable[11416] = 69; // 'state 69'
gotoTable[12247] = 156; // 'state 156'
gotoTable[12248] = 69; // 'state 69'
gotoTable[12887] = 156; // 'state 156'
gotoTable[12888] = 69; // 'state 69'

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

/**
 * @typedef {Object} Node
 * @property {string} name
 * @property {number} start
 * @property {number} end
 * @property {Uint8Array} value
 * @property {Node[]} items
 */

/**
 * @param {Uint8Array | string} input
 * @returns {Node}
 */
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
            lookahead * 218 * 64 + currentState * 64 + action.symbol
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
