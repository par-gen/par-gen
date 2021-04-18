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
CharacterClassCharacter := CharacterOrNumberOrX;
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
CharacterClassRange := CharacterOrNumberOrX DASH CharacterOrNumberOrX;
CharacterClassRange := CharacterOrNumberOrX DASH CONTROL_CHARACTER;
CharacterClassRange := CONTROL_CHARACTER DASH CharacterOrNumberOrX;
CharacterClassRange := CONTROL_CHARACTER DASH CONTROL_CHARACTER;
Character := CharacterOrNumberOrX;
Character := CONTROL_CHARACTER;
Character := CARET;
Character := DASH;
Character := BACKSLASH EscapedCharacter;
Character := BACKSLASH X NUMBER NUMBER;
CharacterOrNumberOrX := CHARACTER;
CharacterOrNumberOrX := NUMBER;
CharacterOrNumberOrX := X;
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

const reducerStates = new Uint8Array(1073152);
reducerStates[92] = 1; // 'state 1' -> CharacterOrNumberOrX -> CHARACTER
reducerStates[16860] = 1; // 'state 1' -> CharacterOrNumberOrX -> NUMBER
reducerStates[33628] = 1; // 'state 1' -> CharacterOrNumberOrX -> CONTROL_CHARACTER
reducerStates[50396] = 1; // 'state 1' -> CharacterOrNumberOrX -> BACKSLASH
reducerStates[67164] = 1; // 'state 1' -> CharacterOrNumberOrX -> X
reducerStates[83932] = 1; // 'state 1' -> CharacterOrNumberOrX -> CARET
reducerStates[100700] = 1; // 'state 1' -> CharacterOrNumberOrX -> DASH
reducerStates[117468] = 1; // 'state 1' -> CharacterOrNumberOrX -> DOT
reducerStates[134236] = 1; // 'state 1' -> CharacterOrNumberOrX -> UNION
reducerStates[151004] = 1; // 'state 1' -> CharacterOrNumberOrX -> PAREN_OPEN
reducerStates[167772] = 1; // 'state 1' -> CharacterOrNumberOrX -> PAREN_CLOSE
reducerStates[184540] = 1; // 'state 1' -> CharacterOrNumberOrX -> QUANTIFIER
reducerStates[201308] = 1; // 'state 1' -> CharacterOrNumberOrX -> BRACKET_OPEN
reducerStates[218076] = 1; // 'state 1' -> CharacterOrNumberOrX -> BRACKET_CLOSE
reducerStates[234844] = 1; // 'state 1' -> CharacterOrNumberOrX -> @par-gen.EOF
reducerStates[156] = 1; // 'state 2' -> CharacterOrNumberOrX -> CHARACTER
reducerStates[16924] = 1; // 'state 2' -> CharacterOrNumberOrX -> NUMBER
reducerStates[33692] = 1; // 'state 2' -> CharacterOrNumberOrX -> CONTROL_CHARACTER
reducerStates[50460] = 1; // 'state 2' -> CharacterOrNumberOrX -> BACKSLASH
reducerStates[67228] = 1; // 'state 2' -> CharacterOrNumberOrX -> X
reducerStates[83996] = 1; // 'state 2' -> CharacterOrNumberOrX -> CARET
reducerStates[100764] = 1; // 'state 2' -> CharacterOrNumberOrX -> DASH
reducerStates[117532] = 1; // 'state 2' -> CharacterOrNumberOrX -> DOT
reducerStates[134300] = 1; // 'state 2' -> CharacterOrNumberOrX -> UNION
reducerStates[151068] = 1; // 'state 2' -> CharacterOrNumberOrX -> PAREN_OPEN
reducerStates[167836] = 1; // 'state 2' -> CharacterOrNumberOrX -> PAREN_CLOSE
reducerStates[184604] = 1; // 'state 2' -> CharacterOrNumberOrX -> QUANTIFIER
reducerStates[201372] = 1; // 'state 2' -> CharacterOrNumberOrX -> BRACKET_OPEN
reducerStates[218140] = 1; // 'state 2' -> CharacterOrNumberOrX -> BRACKET_CLOSE
reducerStates[234908] = 1; // 'state 2' -> CharacterOrNumberOrX -> @par-gen.EOF
reducerStates[219] = 1; // 'state 3' -> Character -> CHARACTER
reducerStates[16987] = 1; // 'state 3' -> Character -> NUMBER
reducerStates[33755] = 1; // 'state 3' -> Character -> CONTROL_CHARACTER
reducerStates[50523] = 1; // 'state 3' -> Character -> BACKSLASH
reducerStates[67291] = 1; // 'state 3' -> Character -> X
reducerStates[84059] = 1; // 'state 3' -> Character -> CARET
reducerStates[100827] = 1; // 'state 3' -> Character -> DASH
reducerStates[134363] = 1; // 'state 3' -> Character -> UNION
reducerStates[151131] = 1; // 'state 3' -> Character -> PAREN_OPEN
reducerStates[167899] = 1; // 'state 3' -> Character -> PAREN_CLOSE
reducerStates[184667] = 1; // 'state 3' -> Character -> QUANTIFIER
reducerStates[201435] = 1; // 'state 3' -> Character -> BRACKET_OPEN
reducerStates[234971] = 1; // 'state 3' -> Character -> @par-gen.EOF
reducerStates[348] = 1; // 'state 5' -> CharacterOrNumberOrX -> CHARACTER
reducerStates[17116] = 1; // 'state 5' -> CharacterOrNumberOrX -> NUMBER
reducerStates[33884] = 1; // 'state 5' -> CharacterOrNumberOrX -> CONTROL_CHARACTER
reducerStates[50652] = 1; // 'state 5' -> CharacterOrNumberOrX -> BACKSLASH
reducerStates[67420] = 1; // 'state 5' -> CharacterOrNumberOrX -> X
reducerStates[84188] = 1; // 'state 5' -> CharacterOrNumberOrX -> CARET
reducerStates[100956] = 1; // 'state 5' -> CharacterOrNumberOrX -> DASH
reducerStates[117724] = 1; // 'state 5' -> CharacterOrNumberOrX -> DOT
reducerStates[134492] = 1; // 'state 5' -> CharacterOrNumberOrX -> UNION
reducerStates[151260] = 1; // 'state 5' -> CharacterOrNumberOrX -> PAREN_OPEN
reducerStates[168028] = 1; // 'state 5' -> CharacterOrNumberOrX -> PAREN_CLOSE
reducerStates[184796] = 1; // 'state 5' -> CharacterOrNumberOrX -> QUANTIFIER
reducerStates[201564] = 1; // 'state 5' -> CharacterOrNumberOrX -> BRACKET_OPEN
reducerStates[218332] = 1; // 'state 5' -> CharacterOrNumberOrX -> BRACKET_CLOSE
reducerStates[235100] = 1; // 'state 5' -> CharacterOrNumberOrX -> @par-gen.EOF
reducerStates[411] = 1; // 'state 6' -> Character -> CHARACTER
reducerStates[17179] = 1; // 'state 6' -> Character -> NUMBER
reducerStates[33947] = 1; // 'state 6' -> Character -> CONTROL_CHARACTER
reducerStates[50715] = 1; // 'state 6' -> Character -> BACKSLASH
reducerStates[67483] = 1; // 'state 6' -> Character -> X
reducerStates[84251] = 1; // 'state 6' -> Character -> CARET
reducerStates[101019] = 1; // 'state 6' -> Character -> DASH
reducerStates[134555] = 1; // 'state 6' -> Character -> UNION
reducerStates[151323] = 1; // 'state 6' -> Character -> PAREN_OPEN
reducerStates[168091] = 1; // 'state 6' -> Character -> PAREN_CLOSE
reducerStates[184859] = 1; // 'state 6' -> Character -> QUANTIFIER
reducerStates[201627] = 1; // 'state 6' -> Character -> BRACKET_OPEN
reducerStates[235163] = 1; // 'state 6' -> Character -> @par-gen.EOF
reducerStates[475] = 1; // 'state 7' -> Character -> CHARACTER
reducerStates[17243] = 1; // 'state 7' -> Character -> NUMBER
reducerStates[34011] = 1; // 'state 7' -> Character -> CONTROL_CHARACTER
reducerStates[50779] = 1; // 'state 7' -> Character -> BACKSLASH
reducerStates[67547] = 1; // 'state 7' -> Character -> X
reducerStates[84315] = 1; // 'state 7' -> Character -> CARET
reducerStates[101083] = 1; // 'state 7' -> Character -> DASH
reducerStates[134619] = 1; // 'state 7' -> Character -> UNION
reducerStates[151387] = 1; // 'state 7' -> Character -> PAREN_OPEN
reducerStates[168155] = 1; // 'state 7' -> Character -> PAREN_CLOSE
reducerStates[184923] = 1; // 'state 7' -> Character -> QUANTIFIER
reducerStates[201691] = 1; // 'state 7' -> Character -> BRACKET_OPEN
reducerStates[235227] = 1; // 'state 7' -> Character -> @par-gen.EOF
reducerStates[235408] = 1; // 'state 10' -> S -> @par-gen.EOF
reducerStates[235473] = 1; // 'state 11' -> RegExp -> @par-gen.EOF
reducerStates[235538] = 1; // 'state 12' -> Expression -> @par-gen.EOF
reducerStates[235602] = 1; // 'state 13' -> Expression -> @par-gen.EOF
reducerStates[235666] = 1; // 'state 14' -> Expression -> @par-gen.EOF
reducerStates[981] = 1; // 'state 15' -> Atom -> CHARACTER
reducerStates[17749] = 1; // 'state 15' -> Atom -> NUMBER
reducerStates[34517] = 1; // 'state 15' -> Atom -> CONTROL_CHARACTER
reducerStates[51285] = 1; // 'state 15' -> Atom -> BACKSLASH
reducerStates[68053] = 1; // 'state 15' -> Atom -> X
reducerStates[84821] = 1; // 'state 15' -> Atom -> CARET
reducerStates[101589] = 1; // 'state 15' -> Atom -> DASH
reducerStates[135125] = 1; // 'state 15' -> Atom -> UNION
reducerStates[151893] = 1; // 'state 15' -> Atom -> PAREN_OPEN
reducerStates[168661] = 1; // 'state 15' -> Atom -> PAREN_CLOSE
reducerStates[202197] = 1; // 'state 15' -> Atom -> BRACKET_OPEN
reducerStates[235733] = 1; // 'state 15' -> Atom -> @par-gen.EOF
reducerStates[1045] = 1; // 'state 16' -> Atom -> CHARACTER
reducerStates[17813] = 1; // 'state 16' -> Atom -> NUMBER
reducerStates[34581] = 1; // 'state 16' -> Atom -> CONTROL_CHARACTER
reducerStates[51349] = 1; // 'state 16' -> Atom -> BACKSLASH
reducerStates[68117] = 1; // 'state 16' -> Atom -> X
reducerStates[84885] = 1; // 'state 16' -> Atom -> CARET
reducerStates[101653] = 1; // 'state 16' -> Atom -> DASH
reducerStates[135189] = 1; // 'state 16' -> Atom -> UNION
reducerStates[151957] = 1; // 'state 16' -> Atom -> PAREN_OPEN
reducerStates[168725] = 1; // 'state 16' -> Atom -> PAREN_CLOSE
reducerStates[202261] = 1; // 'state 16' -> Atom -> BRACKET_OPEN
reducerStates[235797] = 1; // 'state 16' -> Atom -> @par-gen.EOF
reducerStates[1109] = 1; // 'state 17' -> Atom -> CHARACTER
reducerStates[17877] = 1; // 'state 17' -> Atom -> NUMBER
reducerStates[34645] = 1; // 'state 17' -> Atom -> CONTROL_CHARACTER
reducerStates[51413] = 1; // 'state 17' -> Atom -> BACKSLASH
reducerStates[68181] = 1; // 'state 17' -> Atom -> X
reducerStates[84949] = 1; // 'state 17' -> Atom -> CARET
reducerStates[101717] = 1; // 'state 17' -> Atom -> DASH
reducerStates[135253] = 1; // 'state 17' -> Atom -> UNION
reducerStates[152021] = 1; // 'state 17' -> Atom -> PAREN_OPEN
reducerStates[168789] = 1; // 'state 17' -> Atom -> PAREN_CLOSE
reducerStates[202325] = 1; // 'state 17' -> Atom -> BRACKET_OPEN
reducerStates[235861] = 1; // 'state 17' -> Atom -> @par-gen.EOF
reducerStates[1179] = 1; // 'state 18' -> Character -> CHARACTER
reducerStates[17947] = 1; // 'state 18' -> Character -> NUMBER
reducerStates[34715] = 1; // 'state 18' -> Character -> CONTROL_CHARACTER
reducerStates[51483] = 1; // 'state 18' -> Character -> BACKSLASH
reducerStates[68251] = 1; // 'state 18' -> Character -> X
reducerStates[85019] = 1; // 'state 18' -> Character -> CARET
reducerStates[101787] = 1; // 'state 18' -> Character -> DASH
reducerStates[135323] = 1; // 'state 18' -> Character -> UNION
reducerStates[152091] = 1; // 'state 18' -> Character -> PAREN_OPEN
reducerStates[168859] = 1; // 'state 18' -> Character -> PAREN_CLOSE
reducerStates[185627] = 1; // 'state 18' -> Character -> QUANTIFIER
reducerStates[202395] = 1; // 'state 18' -> Character -> BRACKET_OPEN
reducerStates[235931] = 1; // 'state 18' -> Character -> @par-gen.EOF
reducerStates[135379] = 2; // 'state 19' -> Union -> UNION
reducerStates[168915] = 2; // 'state 19' -> Union -> PAREN_CLOSE
reducerStates[235987] = 2; // 'state 19' -> Union -> @par-gen.EOF
reducerStates[1308] = 1; // 'state 20' -> CharacterOrNumberOrX -> CHARACTER
reducerStates[18076] = 1; // 'state 20' -> CharacterOrNumberOrX -> NUMBER
reducerStates[34844] = 1; // 'state 20' -> CharacterOrNumberOrX -> CONTROL_CHARACTER
reducerStates[51612] = 1; // 'state 20' -> CharacterOrNumberOrX -> BACKSLASH
reducerStates[68380] = 1; // 'state 20' -> CharacterOrNumberOrX -> X
reducerStates[85148] = 1; // 'state 20' -> CharacterOrNumberOrX -> CARET
reducerStates[101916] = 1; // 'state 20' -> CharacterOrNumberOrX -> DASH
reducerStates[118684] = 1; // 'state 20' -> CharacterOrNumberOrX -> DOT
reducerStates[135452] = 1; // 'state 20' -> CharacterOrNumberOrX -> UNION
reducerStates[152220] = 1; // 'state 20' -> CharacterOrNumberOrX -> PAREN_OPEN
reducerStates[168988] = 1; // 'state 20' -> CharacterOrNumberOrX -> PAREN_CLOSE
reducerStates[185756] = 1; // 'state 20' -> CharacterOrNumberOrX -> QUANTIFIER
reducerStates[202524] = 1; // 'state 20' -> CharacterOrNumberOrX -> BRACKET_OPEN
reducerStates[219292] = 1; // 'state 20' -> CharacterOrNumberOrX -> BRACKET_CLOSE
reducerStates[236060] = 1; // 'state 20' -> CharacterOrNumberOrX -> @par-gen.EOF
reducerStates[1372] = 1; // 'state 21' -> CharacterOrNumberOrX -> CHARACTER
reducerStates[18140] = 1; // 'state 21' -> CharacterOrNumberOrX -> NUMBER
reducerStates[34908] = 1; // 'state 21' -> CharacterOrNumberOrX -> CONTROL_CHARACTER
reducerStates[51676] = 1; // 'state 21' -> CharacterOrNumberOrX -> BACKSLASH
reducerStates[68444] = 1; // 'state 21' -> CharacterOrNumberOrX -> X
reducerStates[85212] = 1; // 'state 21' -> CharacterOrNumberOrX -> CARET
reducerStates[101980] = 1; // 'state 21' -> CharacterOrNumberOrX -> DASH
reducerStates[118748] = 1; // 'state 21' -> CharacterOrNumberOrX -> DOT
reducerStates[135516] = 1; // 'state 21' -> CharacterOrNumberOrX -> UNION
reducerStates[152284] = 1; // 'state 21' -> CharacterOrNumberOrX -> PAREN_OPEN
reducerStates[169052] = 1; // 'state 21' -> CharacterOrNumberOrX -> PAREN_CLOSE
reducerStates[185820] = 1; // 'state 21' -> CharacterOrNumberOrX -> QUANTIFIER
reducerStates[202588] = 1; // 'state 21' -> CharacterOrNumberOrX -> BRACKET_OPEN
reducerStates[219356] = 1; // 'state 21' -> CharacterOrNumberOrX -> BRACKET_CLOSE
reducerStates[236124] = 1; // 'state 21' -> CharacterOrNumberOrX -> @par-gen.EOF
reducerStates[1435] = 1; // 'state 22' -> Character -> CHARACTER
reducerStates[18203] = 1; // 'state 22' -> Character -> NUMBER
reducerStates[34971] = 1; // 'state 22' -> Character -> CONTROL_CHARACTER
reducerStates[51739] = 1; // 'state 22' -> Character -> BACKSLASH
reducerStates[68507] = 1; // 'state 22' -> Character -> X
reducerStates[85275] = 1; // 'state 22' -> Character -> CARET
reducerStates[102043] = 1; // 'state 22' -> Character -> DASH
reducerStates[135579] = 1; // 'state 22' -> Character -> UNION
reducerStates[152347] = 1; // 'state 22' -> Character -> PAREN_OPEN
reducerStates[169115] = 1; // 'state 22' -> Character -> PAREN_CLOSE
reducerStates[185883] = 1; // 'state 22' -> Character -> QUANTIFIER
reducerStates[202651] = 1; // 'state 22' -> Character -> BRACKET_OPEN
reducerStates[236187] = 1; // 'state 22' -> Character -> @par-gen.EOF
reducerStates[1564] = 1; // 'state 24' -> CharacterOrNumberOrX -> CHARACTER
reducerStates[18332] = 1; // 'state 24' -> CharacterOrNumberOrX -> NUMBER
reducerStates[35100] = 1; // 'state 24' -> CharacterOrNumberOrX -> CONTROL_CHARACTER
reducerStates[51868] = 1; // 'state 24' -> CharacterOrNumberOrX -> BACKSLASH
reducerStates[68636] = 1; // 'state 24' -> CharacterOrNumberOrX -> X
reducerStates[85404] = 1; // 'state 24' -> CharacterOrNumberOrX -> CARET
reducerStates[102172] = 1; // 'state 24' -> CharacterOrNumberOrX -> DASH
reducerStates[118940] = 1; // 'state 24' -> CharacterOrNumberOrX -> DOT
reducerStates[135708] = 1; // 'state 24' -> CharacterOrNumberOrX -> UNION
reducerStates[152476] = 1; // 'state 24' -> CharacterOrNumberOrX -> PAREN_OPEN
reducerStates[169244] = 1; // 'state 24' -> CharacterOrNumberOrX -> PAREN_CLOSE
reducerStates[186012] = 1; // 'state 24' -> CharacterOrNumberOrX -> QUANTIFIER
reducerStates[202780] = 1; // 'state 24' -> CharacterOrNumberOrX -> BRACKET_OPEN
reducerStates[219548] = 1; // 'state 24' -> CharacterOrNumberOrX -> BRACKET_CLOSE
reducerStates[236316] = 1; // 'state 24' -> CharacterOrNumberOrX -> @par-gen.EOF
reducerStates[1627] = 1; // 'state 25' -> Character -> CHARACTER
reducerStates[18395] = 1; // 'state 25' -> Character -> NUMBER
reducerStates[35163] = 1; // 'state 25' -> Character -> CONTROL_CHARACTER
reducerStates[51931] = 1; // 'state 25' -> Character -> BACKSLASH
reducerStates[68699] = 1; // 'state 25' -> Character -> X
reducerStates[85467] = 1; // 'state 25' -> Character -> CARET
reducerStates[102235] = 1; // 'state 25' -> Character -> DASH
reducerStates[135771] = 1; // 'state 25' -> Character -> UNION
reducerStates[152539] = 1; // 'state 25' -> Character -> PAREN_OPEN
reducerStates[169307] = 1; // 'state 25' -> Character -> PAREN_CLOSE
reducerStates[186075] = 1; // 'state 25' -> Character -> QUANTIFIER
reducerStates[202843] = 1; // 'state 25' -> Character -> BRACKET_OPEN
reducerStates[236379] = 1; // 'state 25' -> Character -> @par-gen.EOF
reducerStates[1691] = 1; // 'state 26' -> Character -> CHARACTER
reducerStates[18459] = 1; // 'state 26' -> Character -> NUMBER
reducerStates[35227] = 1; // 'state 26' -> Character -> CONTROL_CHARACTER
reducerStates[51995] = 1; // 'state 26' -> Character -> BACKSLASH
reducerStates[68763] = 1; // 'state 26' -> Character -> X
reducerStates[85531] = 1; // 'state 26' -> Character -> CARET
reducerStates[102299] = 1; // 'state 26' -> Character -> DASH
reducerStates[135835] = 1; // 'state 26' -> Character -> UNION
reducerStates[152603] = 1; // 'state 26' -> Character -> PAREN_OPEN
reducerStates[169371] = 1; // 'state 26' -> Character -> PAREN_CLOSE
reducerStates[186139] = 1; // 'state 26' -> Character -> QUANTIFIER
reducerStates[202907] = 1; // 'state 26' -> Character -> BRACKET_OPEN
reducerStates[236443] = 1; // 'state 26' -> Character -> @par-gen.EOF
reducerStates[135891] = 2; // 'state 27' -> Union -> UNION
reducerStates[169427] = 2; // 'state 27' -> Union -> PAREN_CLOSE
reducerStates[236499] = 2; // 'state 27' -> Union -> @par-gen.EOF
reducerStates[1940] = 2; // 'state 30' -> Sequence -> CHARACTER
reducerStates[18708] = 2; // 'state 30' -> Sequence -> NUMBER
reducerStates[35476] = 2; // 'state 30' -> Sequence -> CONTROL_CHARACTER
reducerStates[52244] = 2; // 'state 30' -> Sequence -> BACKSLASH
reducerStates[69012] = 2; // 'state 30' -> Sequence -> X
reducerStates[85780] = 2; // 'state 30' -> Sequence -> CARET
reducerStates[102548] = 2; // 'state 30' -> Sequence -> DASH
reducerStates[136084] = 2; // 'state 30' -> Sequence -> UNION
reducerStates[152852] = 2; // 'state 30' -> Sequence -> PAREN_OPEN
reducerStates[169620] = 2; // 'state 30' -> Sequence -> PAREN_CLOSE
reducerStates[203156] = 2; // 'state 30' -> Sequence -> BRACKET_OPEN
reducerStates[236692] = 2; // 'state 30' -> Sequence -> @par-gen.EOF
reducerStates[2005] = 1; // 'state 31' -> Atom -> CHARACTER
reducerStates[18773] = 1; // 'state 31' -> Atom -> NUMBER
reducerStates[35541] = 1; // 'state 31' -> Atom -> CONTROL_CHARACTER
reducerStates[52309] = 1; // 'state 31' -> Atom -> BACKSLASH
reducerStates[69077] = 1; // 'state 31' -> Atom -> X
reducerStates[85845] = 1; // 'state 31' -> Atom -> CARET
reducerStates[102613] = 1; // 'state 31' -> Atom -> DASH
reducerStates[136149] = 1; // 'state 31' -> Atom -> UNION
reducerStates[152917] = 1; // 'state 31' -> Atom -> PAREN_OPEN
reducerStates[169685] = 1; // 'state 31' -> Atom -> PAREN_CLOSE
reducerStates[203221] = 1; // 'state 31' -> Atom -> BRACKET_OPEN
reducerStates[236757] = 1; // 'state 31' -> Atom -> @par-gen.EOF
reducerStates[2069] = 1; // 'state 32' -> Atom -> CHARACTER
reducerStates[18837] = 1; // 'state 32' -> Atom -> NUMBER
reducerStates[35605] = 1; // 'state 32' -> Atom -> CONTROL_CHARACTER
reducerStates[52373] = 1; // 'state 32' -> Atom -> BACKSLASH
reducerStates[69141] = 1; // 'state 32' -> Atom -> X
reducerStates[85909] = 1; // 'state 32' -> Atom -> CARET
reducerStates[102677] = 1; // 'state 32' -> Atom -> DASH
reducerStates[136213] = 1; // 'state 32' -> Atom -> UNION
reducerStates[152981] = 1; // 'state 32' -> Atom -> PAREN_OPEN
reducerStates[169749] = 1; // 'state 32' -> Atom -> PAREN_CLOSE
reducerStates[203285] = 1; // 'state 32' -> Atom -> BRACKET_OPEN
reducerStates[236821] = 1; // 'state 32' -> Atom -> @par-gen.EOF
reducerStates[2133] = 1; // 'state 33' -> Atom -> CHARACTER
reducerStates[18901] = 1; // 'state 33' -> Atom -> NUMBER
reducerStates[35669] = 1; // 'state 33' -> Atom -> CONTROL_CHARACTER
reducerStates[52437] = 1; // 'state 33' -> Atom -> BACKSLASH
reducerStates[69205] = 1; // 'state 33' -> Atom -> X
reducerStates[85973] = 1; // 'state 33' -> Atom -> CARET
reducerStates[102741] = 1; // 'state 33' -> Atom -> DASH
reducerStates[136277] = 1; // 'state 33' -> Atom -> UNION
reducerStates[153045] = 1; // 'state 33' -> Atom -> PAREN_OPEN
reducerStates[169813] = 1; // 'state 33' -> Atom -> PAREN_CLOSE
reducerStates[203349] = 1; // 'state 33' -> Atom -> BRACKET_OPEN
reducerStates[236885] = 1; // 'state 33' -> Atom -> @par-gen.EOF
reducerStates[2203] = 1; // 'state 34' -> Character -> CHARACTER
reducerStates[18971] = 1; // 'state 34' -> Character -> NUMBER
reducerStates[35739] = 1; // 'state 34' -> Character -> CONTROL_CHARACTER
reducerStates[52507] = 1; // 'state 34' -> Character -> BACKSLASH
reducerStates[69275] = 1; // 'state 34' -> Character -> X
reducerStates[86043] = 1; // 'state 34' -> Character -> CARET
reducerStates[102811] = 1; // 'state 34' -> Character -> DASH
reducerStates[136347] = 1; // 'state 34' -> Character -> UNION
reducerStates[153115] = 1; // 'state 34' -> Character -> PAREN_OPEN
reducerStates[169883] = 1; // 'state 34' -> Character -> PAREN_CLOSE
reducerStates[186651] = 1; // 'state 34' -> Character -> QUANTIFIER
reducerStates[203419] = 1; // 'state 34' -> Character -> BRACKET_OPEN
reducerStates[236955] = 1; // 'state 34' -> Character -> @par-gen.EOF
reducerStates[2268] = 1; // 'state 35' -> CharacterOrNumberOrX -> CHARACTER
reducerStates[19036] = 1; // 'state 35' -> CharacterOrNumberOrX -> NUMBER
reducerStates[35804] = 1; // 'state 35' -> CharacterOrNumberOrX -> CONTROL_CHARACTER
reducerStates[52572] = 1; // 'state 35' -> CharacterOrNumberOrX -> BACKSLASH
reducerStates[69340] = 1; // 'state 35' -> CharacterOrNumberOrX -> X
reducerStates[86108] = 1; // 'state 35' -> CharacterOrNumberOrX -> CARET
reducerStates[102876] = 1; // 'state 35' -> CharacterOrNumberOrX -> DASH
reducerStates[119644] = 1; // 'state 35' -> CharacterOrNumberOrX -> DOT
reducerStates[136412] = 1; // 'state 35' -> CharacterOrNumberOrX -> UNION
reducerStates[153180] = 1; // 'state 35' -> CharacterOrNumberOrX -> PAREN_OPEN
reducerStates[169948] = 1; // 'state 35' -> CharacterOrNumberOrX -> PAREN_CLOSE
reducerStates[186716] = 1; // 'state 35' -> CharacterOrNumberOrX -> QUANTIFIER
reducerStates[203484] = 1; // 'state 35' -> CharacterOrNumberOrX -> BRACKET_OPEN
reducerStates[220252] = 1; // 'state 35' -> CharacterOrNumberOrX -> BRACKET_CLOSE
reducerStates[237020] = 1; // 'state 35' -> CharacterOrNumberOrX -> @par-gen.EOF
reducerStates[2332] = 1; // 'state 36' -> CharacterOrNumberOrX -> CHARACTER
reducerStates[19100] = 1; // 'state 36' -> CharacterOrNumberOrX -> NUMBER
reducerStates[35868] = 1; // 'state 36' -> CharacterOrNumberOrX -> CONTROL_CHARACTER
reducerStates[52636] = 1; // 'state 36' -> CharacterOrNumberOrX -> BACKSLASH
reducerStates[69404] = 1; // 'state 36' -> CharacterOrNumberOrX -> X
reducerStates[86172] = 1; // 'state 36' -> CharacterOrNumberOrX -> CARET
reducerStates[102940] = 1; // 'state 36' -> CharacterOrNumberOrX -> DASH
reducerStates[119708] = 1; // 'state 36' -> CharacterOrNumberOrX -> DOT
reducerStates[136476] = 1; // 'state 36' -> CharacterOrNumberOrX -> UNION
reducerStates[153244] = 1; // 'state 36' -> CharacterOrNumberOrX -> PAREN_OPEN
reducerStates[170012] = 1; // 'state 36' -> CharacterOrNumberOrX -> PAREN_CLOSE
reducerStates[186780] = 1; // 'state 36' -> CharacterOrNumberOrX -> QUANTIFIER
reducerStates[203548] = 1; // 'state 36' -> CharacterOrNumberOrX -> BRACKET_OPEN
reducerStates[220316] = 1; // 'state 36' -> CharacterOrNumberOrX -> BRACKET_CLOSE
reducerStates[237084] = 1; // 'state 36' -> CharacterOrNumberOrX -> @par-gen.EOF
reducerStates[2395] = 1; // 'state 37' -> Character -> CHARACTER
reducerStates[19163] = 1; // 'state 37' -> Character -> NUMBER
reducerStates[35931] = 1; // 'state 37' -> Character -> CONTROL_CHARACTER
reducerStates[52699] = 1; // 'state 37' -> Character -> BACKSLASH
reducerStates[69467] = 1; // 'state 37' -> Character -> X
reducerStates[86235] = 1; // 'state 37' -> Character -> CARET
reducerStates[103003] = 1; // 'state 37' -> Character -> DASH
reducerStates[136539] = 1; // 'state 37' -> Character -> UNION
reducerStates[153307] = 1; // 'state 37' -> Character -> PAREN_OPEN
reducerStates[170075] = 1; // 'state 37' -> Character -> PAREN_CLOSE
reducerStates[186843] = 1; // 'state 37' -> Character -> QUANTIFIER
reducerStates[203611] = 1; // 'state 37' -> Character -> BRACKET_OPEN
reducerStates[237147] = 1; // 'state 37' -> Character -> @par-gen.EOF
reducerStates[2524] = 1; // 'state 39' -> CharacterOrNumberOrX -> CHARACTER
reducerStates[19292] = 1; // 'state 39' -> CharacterOrNumberOrX -> NUMBER
reducerStates[36060] = 1; // 'state 39' -> CharacterOrNumberOrX -> CONTROL_CHARACTER
reducerStates[52828] = 1; // 'state 39' -> CharacterOrNumberOrX -> BACKSLASH
reducerStates[69596] = 1; // 'state 39' -> CharacterOrNumberOrX -> X
reducerStates[86364] = 1; // 'state 39' -> CharacterOrNumberOrX -> CARET
reducerStates[103132] = 1; // 'state 39' -> CharacterOrNumberOrX -> DASH
reducerStates[119900] = 1; // 'state 39' -> CharacterOrNumberOrX -> DOT
reducerStates[136668] = 1; // 'state 39' -> CharacterOrNumberOrX -> UNION
reducerStates[153436] = 1; // 'state 39' -> CharacterOrNumberOrX -> PAREN_OPEN
reducerStates[170204] = 1; // 'state 39' -> CharacterOrNumberOrX -> PAREN_CLOSE
reducerStates[186972] = 1; // 'state 39' -> CharacterOrNumberOrX -> QUANTIFIER
reducerStates[203740] = 1; // 'state 39' -> CharacterOrNumberOrX -> BRACKET_OPEN
reducerStates[220508] = 1; // 'state 39' -> CharacterOrNumberOrX -> BRACKET_CLOSE
reducerStates[237276] = 1; // 'state 39' -> CharacterOrNumberOrX -> @par-gen.EOF
reducerStates[2587] = 1; // 'state 40' -> Character -> CHARACTER
reducerStates[19355] = 1; // 'state 40' -> Character -> NUMBER
reducerStates[36123] = 1; // 'state 40' -> Character -> CONTROL_CHARACTER
reducerStates[52891] = 1; // 'state 40' -> Character -> BACKSLASH
reducerStates[69659] = 1; // 'state 40' -> Character -> X
reducerStates[86427] = 1; // 'state 40' -> Character -> CARET
reducerStates[103195] = 1; // 'state 40' -> Character -> DASH
reducerStates[136731] = 1; // 'state 40' -> Character -> UNION
reducerStates[153499] = 1; // 'state 40' -> Character -> PAREN_OPEN
reducerStates[170267] = 1; // 'state 40' -> Character -> PAREN_CLOSE
reducerStates[187035] = 1; // 'state 40' -> Character -> QUANTIFIER
reducerStates[203803] = 1; // 'state 40' -> Character -> BRACKET_OPEN
reducerStates[237339] = 1; // 'state 40' -> Character -> @par-gen.EOF
reducerStates[2651] = 1; // 'state 41' -> Character -> CHARACTER
reducerStates[19419] = 1; // 'state 41' -> Character -> NUMBER
reducerStates[36187] = 1; // 'state 41' -> Character -> CONTROL_CHARACTER
reducerStates[52955] = 1; // 'state 41' -> Character -> BACKSLASH
reducerStates[69723] = 1; // 'state 41' -> Character -> X
reducerStates[86491] = 1; // 'state 41' -> Character -> CARET
reducerStates[103259] = 1; // 'state 41' -> Character -> DASH
reducerStates[136795] = 1; // 'state 41' -> Character -> UNION
reducerStates[153563] = 1; // 'state 41' -> Character -> PAREN_OPEN
reducerStates[170331] = 1; // 'state 41' -> Character -> PAREN_CLOSE
reducerStates[187099] = 1; // 'state 41' -> Character -> QUANTIFIER
reducerStates[203867] = 1; // 'state 41' -> Character -> BRACKET_OPEN
reducerStates[237403] = 1; // 'state 41' -> Character -> @par-gen.EOF
reducerStates[136851] = 2; // 'state 42' -> Union -> UNION
reducerStates[170387] = 2; // 'state 42' -> Union -> PAREN_CLOSE
reducerStates[237459] = 2; // 'state 42' -> Union -> @par-gen.EOF
reducerStates[2900] = 2; // 'state 45' -> Sequence -> CHARACTER
reducerStates[19668] = 2; // 'state 45' -> Sequence -> NUMBER
reducerStates[36436] = 2; // 'state 45' -> Sequence -> CONTROL_CHARACTER
reducerStates[53204] = 2; // 'state 45' -> Sequence -> BACKSLASH
reducerStates[69972] = 2; // 'state 45' -> Sequence -> X
reducerStates[86740] = 2; // 'state 45' -> Sequence -> CARET
reducerStates[103508] = 2; // 'state 45' -> Sequence -> DASH
reducerStates[137044] = 2; // 'state 45' -> Sequence -> UNION
reducerStates[153812] = 2; // 'state 45' -> Sequence -> PAREN_OPEN
reducerStates[170580] = 2; // 'state 45' -> Sequence -> PAREN_CLOSE
reducerStates[204116] = 2; // 'state 45' -> Sequence -> BRACKET_OPEN
reducerStates[237652] = 2; // 'state 45' -> Sequence -> @par-gen.EOF
reducerStates[2965] = 1; // 'state 46' -> Atom -> CHARACTER
reducerStates[19733] = 1; // 'state 46' -> Atom -> NUMBER
reducerStates[36501] = 1; // 'state 46' -> Atom -> CONTROL_CHARACTER
reducerStates[53269] = 1; // 'state 46' -> Atom -> BACKSLASH
reducerStates[70037] = 1; // 'state 46' -> Atom -> X
reducerStates[86805] = 1; // 'state 46' -> Atom -> CARET
reducerStates[103573] = 1; // 'state 46' -> Atom -> DASH
reducerStates[137109] = 1; // 'state 46' -> Atom -> UNION
reducerStates[153877] = 1; // 'state 46' -> Atom -> PAREN_OPEN
reducerStates[170645] = 1; // 'state 46' -> Atom -> PAREN_CLOSE
reducerStates[204181] = 1; // 'state 46' -> Atom -> BRACKET_OPEN
reducerStates[237717] = 1; // 'state 46' -> Atom -> @par-gen.EOF
reducerStates[3029] = 1; // 'state 47' -> Atom -> CHARACTER
reducerStates[19797] = 1; // 'state 47' -> Atom -> NUMBER
reducerStates[36565] = 1; // 'state 47' -> Atom -> CONTROL_CHARACTER
reducerStates[53333] = 1; // 'state 47' -> Atom -> BACKSLASH
reducerStates[70101] = 1; // 'state 47' -> Atom -> X
reducerStates[86869] = 1; // 'state 47' -> Atom -> CARET
reducerStates[103637] = 1; // 'state 47' -> Atom -> DASH
reducerStates[137173] = 1; // 'state 47' -> Atom -> UNION
reducerStates[153941] = 1; // 'state 47' -> Atom -> PAREN_OPEN
reducerStates[170709] = 1; // 'state 47' -> Atom -> PAREN_CLOSE
reducerStates[204245] = 1; // 'state 47' -> Atom -> BRACKET_OPEN
reducerStates[237781] = 1; // 'state 47' -> Atom -> @par-gen.EOF
reducerStates[3093] = 1; // 'state 48' -> Atom -> CHARACTER
reducerStates[19861] = 1; // 'state 48' -> Atom -> NUMBER
reducerStates[36629] = 1; // 'state 48' -> Atom -> CONTROL_CHARACTER
reducerStates[53397] = 1; // 'state 48' -> Atom -> BACKSLASH
reducerStates[70165] = 1; // 'state 48' -> Atom -> X
reducerStates[86933] = 1; // 'state 48' -> Atom -> CARET
reducerStates[103701] = 1; // 'state 48' -> Atom -> DASH
reducerStates[137237] = 1; // 'state 48' -> Atom -> UNION
reducerStates[154005] = 1; // 'state 48' -> Atom -> PAREN_OPEN
reducerStates[170773] = 1; // 'state 48' -> Atom -> PAREN_CLOSE
reducerStates[204309] = 1; // 'state 48' -> Atom -> BRACKET_OPEN
reducerStates[237845] = 1; // 'state 48' -> Atom -> @par-gen.EOF
reducerStates[3163] = 1; // 'state 49' -> Character -> CHARACTER
reducerStates[19931] = 1; // 'state 49' -> Character -> NUMBER
reducerStates[36699] = 1; // 'state 49' -> Character -> CONTROL_CHARACTER
reducerStates[53467] = 1; // 'state 49' -> Character -> BACKSLASH
reducerStates[70235] = 1; // 'state 49' -> Character -> X
reducerStates[87003] = 1; // 'state 49' -> Character -> CARET
reducerStates[103771] = 1; // 'state 49' -> Character -> DASH
reducerStates[137307] = 1; // 'state 49' -> Character -> UNION
reducerStates[154075] = 1; // 'state 49' -> Character -> PAREN_OPEN
reducerStates[170843] = 1; // 'state 49' -> Character -> PAREN_CLOSE
reducerStates[187611] = 1; // 'state 49' -> Character -> QUANTIFIER
reducerStates[204379] = 1; // 'state 49' -> Character -> BRACKET_OPEN
reducerStates[237915] = 1; // 'state 49' -> Character -> @par-gen.EOF
reducerStates[3221] = 2; // 'state 50' -> Atom -> CHARACTER
reducerStates[19989] = 2; // 'state 50' -> Atom -> NUMBER
reducerStates[36757] = 2; // 'state 50' -> Atom -> CONTROL_CHARACTER
reducerStates[53525] = 2; // 'state 50' -> Atom -> BACKSLASH
reducerStates[70293] = 2; // 'state 50' -> Atom -> X
reducerStates[87061] = 2; // 'state 50' -> Atom -> CARET
reducerStates[103829] = 2; // 'state 50' -> Atom -> DASH
reducerStates[137365] = 2; // 'state 50' -> Atom -> UNION
reducerStates[154133] = 2; // 'state 50' -> Atom -> PAREN_OPEN
reducerStates[170901] = 2; // 'state 50' -> Atom -> PAREN_CLOSE
reducerStates[204437] = 2; // 'state 50' -> Atom -> BRACKET_OPEN
reducerStates[237973] = 2; // 'state 50' -> Atom -> @par-gen.EOF
reducerStates[3285] = 2; // 'state 51' -> Atom -> CHARACTER
reducerStates[20053] = 2; // 'state 51' -> Atom -> NUMBER
reducerStates[36821] = 2; // 'state 51' -> Atom -> CONTROL_CHARACTER
reducerStates[53589] = 2; // 'state 51' -> Atom -> BACKSLASH
reducerStates[70357] = 2; // 'state 51' -> Atom -> X
reducerStates[87125] = 2; // 'state 51' -> Atom -> CARET
reducerStates[103893] = 2; // 'state 51' -> Atom -> DASH
reducerStates[137429] = 2; // 'state 51' -> Atom -> UNION
reducerStates[154197] = 2; // 'state 51' -> Atom -> PAREN_OPEN
reducerStates[170965] = 2; // 'state 51' -> Atom -> PAREN_CLOSE
reducerStates[204501] = 2; // 'state 51' -> Atom -> BRACKET_OPEN
reducerStates[238037] = 2; // 'state 51' -> Atom -> @par-gen.EOF
reducerStates[3349] = 2; // 'state 52' -> Atom -> CHARACTER
reducerStates[20117] = 2; // 'state 52' -> Atom -> NUMBER
reducerStates[36885] = 2; // 'state 52' -> Atom -> CONTROL_CHARACTER
reducerStates[53653] = 2; // 'state 52' -> Atom -> BACKSLASH
reducerStates[70421] = 2; // 'state 52' -> Atom -> X
reducerStates[87189] = 2; // 'state 52' -> Atom -> CARET
reducerStates[103957] = 2; // 'state 52' -> Atom -> DASH
reducerStates[137493] = 2; // 'state 52' -> Atom -> UNION
reducerStates[154261] = 2; // 'state 52' -> Atom -> PAREN_OPEN
reducerStates[171029] = 2; // 'state 52' -> Atom -> PAREN_CLOSE
reducerStates[204565] = 2; // 'state 52' -> Atom -> BRACKET_OPEN
reducerStates[238101] = 2; // 'state 52' -> Atom -> @par-gen.EOF
reducerStates[3421] = 1; // 'state 53' -> EscapedCharacter -> CHARACTER
reducerStates[20189] = 1; // 'state 53' -> EscapedCharacter -> NUMBER
reducerStates[36957] = 1; // 'state 53' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[53725] = 1; // 'state 53' -> EscapedCharacter -> BACKSLASH
reducerStates[70493] = 1; // 'state 53' -> EscapedCharacter -> X
reducerStates[87261] = 1; // 'state 53' -> EscapedCharacter -> CARET
reducerStates[104029] = 1; // 'state 53' -> EscapedCharacter -> DASH
reducerStates[137565] = 1; // 'state 53' -> EscapedCharacter -> UNION
reducerStates[154333] = 1; // 'state 53' -> EscapedCharacter -> PAREN_OPEN
reducerStates[171101] = 1; // 'state 53' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[187869] = 1; // 'state 53' -> EscapedCharacter -> QUANTIFIER
reducerStates[204637] = 1; // 'state 53' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[238173] = 1; // 'state 53' -> EscapedCharacter -> @par-gen.EOF
reducerStates[3485] = 1; // 'state 54' -> EscapedCharacter -> CHARACTER
reducerStates[20253] = 1; // 'state 54' -> EscapedCharacter -> NUMBER
reducerStates[37021] = 1; // 'state 54' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[53789] = 1; // 'state 54' -> EscapedCharacter -> BACKSLASH
reducerStates[70557] = 1; // 'state 54' -> EscapedCharacter -> X
reducerStates[87325] = 1; // 'state 54' -> EscapedCharacter -> CARET
reducerStates[104093] = 1; // 'state 54' -> EscapedCharacter -> DASH
reducerStates[137629] = 1; // 'state 54' -> EscapedCharacter -> UNION
reducerStates[154397] = 1; // 'state 54' -> EscapedCharacter -> PAREN_OPEN
reducerStates[171165] = 1; // 'state 54' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[187933] = 1; // 'state 54' -> EscapedCharacter -> QUANTIFIER
reducerStates[204701] = 1; // 'state 54' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[238237] = 1; // 'state 54' -> EscapedCharacter -> @par-gen.EOF
reducerStates[3613] = 1; // 'state 56' -> EscapedCharacter -> CHARACTER
reducerStates[20381] = 1; // 'state 56' -> EscapedCharacter -> NUMBER
reducerStates[37149] = 1; // 'state 56' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[53917] = 1; // 'state 56' -> EscapedCharacter -> BACKSLASH
reducerStates[70685] = 1; // 'state 56' -> EscapedCharacter -> X
reducerStates[87453] = 1; // 'state 56' -> EscapedCharacter -> CARET
reducerStates[104221] = 1; // 'state 56' -> EscapedCharacter -> DASH
reducerStates[137757] = 1; // 'state 56' -> EscapedCharacter -> UNION
reducerStates[154525] = 1; // 'state 56' -> EscapedCharacter -> PAREN_OPEN
reducerStates[171293] = 1; // 'state 56' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[188061] = 1; // 'state 56' -> EscapedCharacter -> QUANTIFIER
reducerStates[204829] = 1; // 'state 56' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[238365] = 1; // 'state 56' -> EscapedCharacter -> @par-gen.EOF
reducerStates[3677] = 1; // 'state 57' -> EscapedCharacter -> CHARACTER
reducerStates[20445] = 1; // 'state 57' -> EscapedCharacter -> NUMBER
reducerStates[37213] = 1; // 'state 57' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[53981] = 1; // 'state 57' -> EscapedCharacter -> BACKSLASH
reducerStates[70749] = 1; // 'state 57' -> EscapedCharacter -> X
reducerStates[87517] = 1; // 'state 57' -> EscapedCharacter -> CARET
reducerStates[104285] = 1; // 'state 57' -> EscapedCharacter -> DASH
reducerStates[137821] = 1; // 'state 57' -> EscapedCharacter -> UNION
reducerStates[154589] = 1; // 'state 57' -> EscapedCharacter -> PAREN_OPEN
reducerStates[171357] = 1; // 'state 57' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[188125] = 1; // 'state 57' -> EscapedCharacter -> QUANTIFIER
reducerStates[204893] = 1; // 'state 57' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[238429] = 1; // 'state 57' -> EscapedCharacter -> @par-gen.EOF
reducerStates[3741] = 1; // 'state 58' -> EscapedCharacter -> CHARACTER
reducerStates[20509] = 1; // 'state 58' -> EscapedCharacter -> NUMBER
reducerStates[37277] = 1; // 'state 58' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[54045] = 1; // 'state 58' -> EscapedCharacter -> BACKSLASH
reducerStates[70813] = 1; // 'state 58' -> EscapedCharacter -> X
reducerStates[87581] = 1; // 'state 58' -> EscapedCharacter -> CARET
reducerStates[104349] = 1; // 'state 58' -> EscapedCharacter -> DASH
reducerStates[137885] = 1; // 'state 58' -> EscapedCharacter -> UNION
reducerStates[154653] = 1; // 'state 58' -> EscapedCharacter -> PAREN_OPEN
reducerStates[171421] = 1; // 'state 58' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[188189] = 1; // 'state 58' -> EscapedCharacter -> QUANTIFIER
reducerStates[204957] = 1; // 'state 58' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[238493] = 1; // 'state 58' -> EscapedCharacter -> @par-gen.EOF
reducerStates[3805] = 1; // 'state 59' -> EscapedCharacter -> CHARACTER
reducerStates[20573] = 1; // 'state 59' -> EscapedCharacter -> NUMBER
reducerStates[37341] = 1; // 'state 59' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[54109] = 1; // 'state 59' -> EscapedCharacter -> BACKSLASH
reducerStates[70877] = 1; // 'state 59' -> EscapedCharacter -> X
reducerStates[87645] = 1; // 'state 59' -> EscapedCharacter -> CARET
reducerStates[104413] = 1; // 'state 59' -> EscapedCharacter -> DASH
reducerStates[137949] = 1; // 'state 59' -> EscapedCharacter -> UNION
reducerStates[154717] = 1; // 'state 59' -> EscapedCharacter -> PAREN_OPEN
reducerStates[171485] = 1; // 'state 59' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[188253] = 1; // 'state 59' -> EscapedCharacter -> QUANTIFIER
reducerStates[205021] = 1; // 'state 59' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[238557] = 1; // 'state 59' -> EscapedCharacter -> @par-gen.EOF
reducerStates[3869] = 1; // 'state 60' -> EscapedCharacter -> CHARACTER
reducerStates[20637] = 1; // 'state 60' -> EscapedCharacter -> NUMBER
reducerStates[37405] = 1; // 'state 60' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[54173] = 1; // 'state 60' -> EscapedCharacter -> BACKSLASH
reducerStates[70941] = 1; // 'state 60' -> EscapedCharacter -> X
reducerStates[87709] = 1; // 'state 60' -> EscapedCharacter -> CARET
reducerStates[104477] = 1; // 'state 60' -> EscapedCharacter -> DASH
reducerStates[138013] = 1; // 'state 60' -> EscapedCharacter -> UNION
reducerStates[154781] = 1; // 'state 60' -> EscapedCharacter -> PAREN_OPEN
reducerStates[171549] = 1; // 'state 60' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[188317] = 1; // 'state 60' -> EscapedCharacter -> QUANTIFIER
reducerStates[205085] = 1; // 'state 60' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[238621] = 1; // 'state 60' -> EscapedCharacter -> @par-gen.EOF
reducerStates[3933] = 1; // 'state 61' -> EscapedCharacter -> CHARACTER
reducerStates[20701] = 1; // 'state 61' -> EscapedCharacter -> NUMBER
reducerStates[37469] = 1; // 'state 61' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[54237] = 1; // 'state 61' -> EscapedCharacter -> BACKSLASH
reducerStates[71005] = 1; // 'state 61' -> EscapedCharacter -> X
reducerStates[87773] = 1; // 'state 61' -> EscapedCharacter -> CARET
reducerStates[104541] = 1; // 'state 61' -> EscapedCharacter -> DASH
reducerStates[138077] = 1; // 'state 61' -> EscapedCharacter -> UNION
reducerStates[154845] = 1; // 'state 61' -> EscapedCharacter -> PAREN_OPEN
reducerStates[171613] = 1; // 'state 61' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[188381] = 1; // 'state 61' -> EscapedCharacter -> QUANTIFIER
reducerStates[205149] = 1; // 'state 61' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[238685] = 1; // 'state 61' -> EscapedCharacter -> @par-gen.EOF
reducerStates[3997] = 1; // 'state 62' -> EscapedCharacter -> CHARACTER
reducerStates[20765] = 1; // 'state 62' -> EscapedCharacter -> NUMBER
reducerStates[37533] = 1; // 'state 62' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[54301] = 1; // 'state 62' -> EscapedCharacter -> BACKSLASH
reducerStates[71069] = 1; // 'state 62' -> EscapedCharacter -> X
reducerStates[87837] = 1; // 'state 62' -> EscapedCharacter -> CARET
reducerStates[104605] = 1; // 'state 62' -> EscapedCharacter -> DASH
reducerStates[138141] = 1; // 'state 62' -> EscapedCharacter -> UNION
reducerStates[154909] = 1; // 'state 62' -> EscapedCharacter -> PAREN_OPEN
reducerStates[171677] = 1; // 'state 62' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[188445] = 1; // 'state 62' -> EscapedCharacter -> QUANTIFIER
reducerStates[205213] = 1; // 'state 62' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[238749] = 1; // 'state 62' -> EscapedCharacter -> @par-gen.EOF
reducerStates[4059] = 2; // 'state 63' -> Character -> CHARACTER
reducerStates[20827] = 2; // 'state 63' -> Character -> NUMBER
reducerStates[37595] = 2; // 'state 63' -> Character -> CONTROL_CHARACTER
reducerStates[54363] = 2; // 'state 63' -> Character -> BACKSLASH
reducerStates[71131] = 2; // 'state 63' -> Character -> X
reducerStates[87899] = 2; // 'state 63' -> Character -> CARET
reducerStates[104667] = 2; // 'state 63' -> Character -> DASH
reducerStates[138203] = 2; // 'state 63' -> Character -> UNION
reducerStates[154971] = 2; // 'state 63' -> Character -> PAREN_OPEN
reducerStates[171739] = 2; // 'state 63' -> Character -> PAREN_CLOSE
reducerStates[188507] = 2; // 'state 63' -> Character -> QUANTIFIER
reducerStates[205275] = 2; // 'state 63' -> Character -> BRACKET_OPEN
reducerStates[238811] = 2; // 'state 63' -> Character -> @par-gen.EOF
reducerStates[4124] = 1; // 'state 64' -> CharacterOrNumberOrX -> CHARACTER
reducerStates[20892] = 1; // 'state 64' -> CharacterOrNumberOrX -> NUMBER
reducerStates[37660] = 1; // 'state 64' -> CharacterOrNumberOrX -> CONTROL_CHARACTER
reducerStates[54428] = 1; // 'state 64' -> CharacterOrNumberOrX -> BACKSLASH
reducerStates[71196] = 1; // 'state 64' -> CharacterOrNumberOrX -> X
reducerStates[87964] = 1; // 'state 64' -> CharacterOrNumberOrX -> CARET
reducerStates[104732] = 1; // 'state 64' -> CharacterOrNumberOrX -> DASH
reducerStates[121500] = 1; // 'state 64' -> CharacterOrNumberOrX -> DOT
reducerStates[138268] = 1; // 'state 64' -> CharacterOrNumberOrX -> UNION
reducerStates[155036] = 1; // 'state 64' -> CharacterOrNumberOrX -> PAREN_OPEN
reducerStates[171804] = 1; // 'state 64' -> CharacterOrNumberOrX -> PAREN_CLOSE
reducerStates[188572] = 1; // 'state 64' -> CharacterOrNumberOrX -> QUANTIFIER
reducerStates[205340] = 1; // 'state 64' -> CharacterOrNumberOrX -> BRACKET_OPEN
reducerStates[222108] = 1; // 'state 64' -> CharacterOrNumberOrX -> BRACKET_CLOSE
reducerStates[238876] = 1; // 'state 64' -> CharacterOrNumberOrX -> @par-gen.EOF
reducerStates[4188] = 1; // 'state 65' -> CharacterOrNumberOrX -> CHARACTER
reducerStates[20956] = 1; // 'state 65' -> CharacterOrNumberOrX -> NUMBER
reducerStates[37724] = 1; // 'state 65' -> CharacterOrNumberOrX -> CONTROL_CHARACTER
reducerStates[54492] = 1; // 'state 65' -> CharacterOrNumberOrX -> BACKSLASH
reducerStates[71260] = 1; // 'state 65' -> CharacterOrNumberOrX -> X
reducerStates[88028] = 1; // 'state 65' -> CharacterOrNumberOrX -> CARET
reducerStates[104796] = 1; // 'state 65' -> CharacterOrNumberOrX -> DASH
reducerStates[121564] = 1; // 'state 65' -> CharacterOrNumberOrX -> DOT
reducerStates[138332] = 1; // 'state 65' -> CharacterOrNumberOrX -> UNION
reducerStates[155100] = 1; // 'state 65' -> CharacterOrNumberOrX -> PAREN_OPEN
reducerStates[171868] = 1; // 'state 65' -> CharacterOrNumberOrX -> PAREN_CLOSE
reducerStates[188636] = 1; // 'state 65' -> CharacterOrNumberOrX -> QUANTIFIER
reducerStates[205404] = 1; // 'state 65' -> CharacterOrNumberOrX -> BRACKET_OPEN
reducerStates[222172] = 1; // 'state 65' -> CharacterOrNumberOrX -> BRACKET_CLOSE
reducerStates[238940] = 1; // 'state 65' -> CharacterOrNumberOrX -> @par-gen.EOF
reducerStates[4252] = 1; // 'state 66' -> CharacterOrNumberOrX -> CHARACTER
reducerStates[21020] = 1; // 'state 66' -> CharacterOrNumberOrX -> NUMBER
reducerStates[37788] = 1; // 'state 66' -> CharacterOrNumberOrX -> CONTROL_CHARACTER
reducerStates[54556] = 1; // 'state 66' -> CharacterOrNumberOrX -> BACKSLASH
reducerStates[71324] = 1; // 'state 66' -> CharacterOrNumberOrX -> X
reducerStates[88092] = 1; // 'state 66' -> CharacterOrNumberOrX -> CARET
reducerStates[104860] = 1; // 'state 66' -> CharacterOrNumberOrX -> DASH
reducerStates[121628] = 1; // 'state 66' -> CharacterOrNumberOrX -> DOT
reducerStates[138396] = 1; // 'state 66' -> CharacterOrNumberOrX -> UNION
reducerStates[155164] = 1; // 'state 66' -> CharacterOrNumberOrX -> PAREN_OPEN
reducerStates[171932] = 1; // 'state 66' -> CharacterOrNumberOrX -> PAREN_CLOSE
reducerStates[188700] = 1; // 'state 66' -> CharacterOrNumberOrX -> QUANTIFIER
reducerStates[205468] = 1; // 'state 66' -> CharacterOrNumberOrX -> BRACKET_OPEN
reducerStates[222236] = 1; // 'state 66' -> CharacterOrNumberOrX -> BRACKET_CLOSE
reducerStates[239004] = 1; // 'state 66' -> CharacterOrNumberOrX -> @par-gen.EOF
reducerStates[4572] = 1; // 'state 71' -> CharacterOrNumberOrX -> CHARACTER
reducerStates[21340] = 1; // 'state 71' -> CharacterOrNumberOrX -> NUMBER
reducerStates[38108] = 1; // 'state 71' -> CharacterOrNumberOrX -> CONTROL_CHARACTER
reducerStates[54876] = 1; // 'state 71' -> CharacterOrNumberOrX -> BACKSLASH
reducerStates[71644] = 1; // 'state 71' -> CharacterOrNumberOrX -> X
reducerStates[88412] = 1; // 'state 71' -> CharacterOrNumberOrX -> CARET
reducerStates[105180] = 1; // 'state 71' -> CharacterOrNumberOrX -> DASH
reducerStates[121948] = 1; // 'state 71' -> CharacterOrNumberOrX -> DOT
reducerStates[138716] = 1; // 'state 71' -> CharacterOrNumberOrX -> UNION
reducerStates[155484] = 1; // 'state 71' -> CharacterOrNumberOrX -> PAREN_OPEN
reducerStates[172252] = 1; // 'state 71' -> CharacterOrNumberOrX -> PAREN_CLOSE
reducerStates[189020] = 1; // 'state 71' -> CharacterOrNumberOrX -> QUANTIFIER
reducerStates[205788] = 1; // 'state 71' -> CharacterOrNumberOrX -> BRACKET_OPEN
reducerStates[222556] = 1; // 'state 71' -> CharacterOrNumberOrX -> BRACKET_CLOSE
reducerStates[239324] = 1; // 'state 71' -> CharacterOrNumberOrX -> @par-gen.EOF
reducerStates[4636] = 1; // 'state 72' -> CharacterOrNumberOrX -> CHARACTER
reducerStates[21404] = 1; // 'state 72' -> CharacterOrNumberOrX -> NUMBER
reducerStates[38172] = 1; // 'state 72' -> CharacterOrNumberOrX -> CONTROL_CHARACTER
reducerStates[54940] = 1; // 'state 72' -> CharacterOrNumberOrX -> BACKSLASH
reducerStates[71708] = 1; // 'state 72' -> CharacterOrNumberOrX -> X
reducerStates[88476] = 1; // 'state 72' -> CharacterOrNumberOrX -> CARET
reducerStates[105244] = 1; // 'state 72' -> CharacterOrNumberOrX -> DASH
reducerStates[122012] = 1; // 'state 72' -> CharacterOrNumberOrX -> DOT
reducerStates[138780] = 1; // 'state 72' -> CharacterOrNumberOrX -> UNION
reducerStates[155548] = 1; // 'state 72' -> CharacterOrNumberOrX -> PAREN_OPEN
reducerStates[172316] = 1; // 'state 72' -> CharacterOrNumberOrX -> PAREN_CLOSE
reducerStates[189084] = 1; // 'state 72' -> CharacterOrNumberOrX -> QUANTIFIER
reducerStates[205852] = 1; // 'state 72' -> CharacterOrNumberOrX -> BRACKET_OPEN
reducerStates[222620] = 1; // 'state 72' -> CharacterOrNumberOrX -> BRACKET_CLOSE
reducerStates[239388] = 1; // 'state 72' -> CharacterOrNumberOrX -> @par-gen.EOF
reducerStates[4697] = 1; // 'state 73' -> CharacterClassCharacter -> CHARACTER
reducerStates[21465] = 1; // 'state 73' -> CharacterClassCharacter -> NUMBER
reducerStates[38233] = 1; // 'state 73' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[55001] = 1; // 'state 73' -> CharacterClassCharacter -> BACKSLASH
reducerStates[71769] = 1; // 'state 73' -> CharacterClassCharacter -> X
reducerStates[122073] = 1; // 'state 73' -> CharacterClassCharacter -> DOT
reducerStates[138841] = 1; // 'state 73' -> CharacterClassCharacter -> UNION
reducerStates[155609] = 1; // 'state 73' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[172377] = 1; // 'state 73' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[189145] = 1; // 'state 73' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[222681] = 1; // 'state 73' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[4828] = 1; // 'state 75' -> CharacterOrNumberOrX -> CHARACTER
reducerStates[21596] = 1; // 'state 75' -> CharacterOrNumberOrX -> NUMBER
reducerStates[38364] = 1; // 'state 75' -> CharacterOrNumberOrX -> CONTROL_CHARACTER
reducerStates[55132] = 1; // 'state 75' -> CharacterOrNumberOrX -> BACKSLASH
reducerStates[71900] = 1; // 'state 75' -> CharacterOrNumberOrX -> X
reducerStates[88668] = 1; // 'state 75' -> CharacterOrNumberOrX -> CARET
reducerStates[105436] = 1; // 'state 75' -> CharacterOrNumberOrX -> DASH
reducerStates[122204] = 1; // 'state 75' -> CharacterOrNumberOrX -> DOT
reducerStates[138972] = 1; // 'state 75' -> CharacterOrNumberOrX -> UNION
reducerStates[155740] = 1; // 'state 75' -> CharacterOrNumberOrX -> PAREN_OPEN
reducerStates[172508] = 1; // 'state 75' -> CharacterOrNumberOrX -> PAREN_CLOSE
reducerStates[189276] = 1; // 'state 75' -> CharacterOrNumberOrX -> QUANTIFIER
reducerStates[206044] = 1; // 'state 75' -> CharacterOrNumberOrX -> BRACKET_OPEN
reducerStates[222812] = 1; // 'state 75' -> CharacterOrNumberOrX -> BRACKET_CLOSE
reducerStates[239580] = 1; // 'state 75' -> CharacterOrNumberOrX -> @par-gen.EOF
reducerStates[4953] = 1; // 'state 77' -> CharacterClassCharacter -> CHARACTER
reducerStates[21721] = 1; // 'state 77' -> CharacterClassCharacter -> NUMBER
reducerStates[38489] = 1; // 'state 77' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[55257] = 1; // 'state 77' -> CharacterClassCharacter -> BACKSLASH
reducerStates[72025] = 1; // 'state 77' -> CharacterClassCharacter -> X
reducerStates[122329] = 1; // 'state 77' -> CharacterClassCharacter -> DOT
reducerStates[139097] = 1; // 'state 77' -> CharacterClassCharacter -> UNION
reducerStates[155865] = 1; // 'state 77' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[172633] = 1; // 'state 77' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[189401] = 1; // 'state 77' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[222937] = 1; // 'state 77' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[5017] = 1; // 'state 78' -> CharacterClassCharacter -> CHARACTER
reducerStates[21785] = 1; // 'state 78' -> CharacterClassCharacter -> NUMBER
reducerStates[38553] = 1; // 'state 78' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[55321] = 1; // 'state 78' -> CharacterClassCharacter -> BACKSLASH
reducerStates[72089] = 1; // 'state 78' -> CharacterClassCharacter -> X
reducerStates[122393] = 1; // 'state 78' -> CharacterClassCharacter -> DOT
reducerStates[139161] = 1; // 'state 78' -> CharacterClassCharacter -> UNION
reducerStates[155929] = 1; // 'state 78' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[172697] = 1; // 'state 78' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[189465] = 1; // 'state 78' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[223001] = 1; // 'state 78' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[5081] = 1; // 'state 79' -> CharacterClassCharacter -> CHARACTER
reducerStates[21849] = 1; // 'state 79' -> CharacterClassCharacter -> NUMBER
reducerStates[38617] = 1; // 'state 79' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[55385] = 1; // 'state 79' -> CharacterClassCharacter -> BACKSLASH
reducerStates[72153] = 1; // 'state 79' -> CharacterClassCharacter -> X
reducerStates[122457] = 1; // 'state 79' -> CharacterClassCharacter -> DOT
reducerStates[139225] = 1; // 'state 79' -> CharacterClassCharacter -> UNION
reducerStates[155993] = 1; // 'state 79' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[172761] = 1; // 'state 79' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[189529] = 1; // 'state 79' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[223065] = 1; // 'state 79' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[5145] = 1; // 'state 80' -> CharacterClassCharacter -> CHARACTER
reducerStates[21913] = 1; // 'state 80' -> CharacterClassCharacter -> NUMBER
reducerStates[38681] = 1; // 'state 80' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[55449] = 1; // 'state 80' -> CharacterClassCharacter -> BACKSLASH
reducerStates[72217] = 1; // 'state 80' -> CharacterClassCharacter -> X
reducerStates[122521] = 1; // 'state 80' -> CharacterClassCharacter -> DOT
reducerStates[139289] = 1; // 'state 80' -> CharacterClassCharacter -> UNION
reducerStates[156057] = 1; // 'state 80' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[172825] = 1; // 'state 80' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[189593] = 1; // 'state 80' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[223129] = 1; // 'state 80' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[5209] = 1; // 'state 81' -> CharacterClassCharacter -> CHARACTER
reducerStates[21977] = 1; // 'state 81' -> CharacterClassCharacter -> NUMBER
reducerStates[38745] = 1; // 'state 81' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[55513] = 1; // 'state 81' -> CharacterClassCharacter -> BACKSLASH
reducerStates[72281] = 1; // 'state 81' -> CharacterClassCharacter -> X
reducerStates[122585] = 1; // 'state 81' -> CharacterClassCharacter -> DOT
reducerStates[139353] = 1; // 'state 81' -> CharacterClassCharacter -> UNION
reducerStates[156121] = 1; // 'state 81' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[172889] = 1; // 'state 81' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[189657] = 1; // 'state 81' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[223193] = 1; // 'state 81' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[5336] = 1; // 'state 83' -> CharacterClassCharacters -> CHARACTER
reducerStates[22104] = 1; // 'state 83' -> CharacterClassCharacters -> NUMBER
reducerStates[38872] = 1; // 'state 83' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[55640] = 1; // 'state 83' -> CharacterClassCharacters -> BACKSLASH
reducerStates[72408] = 1; // 'state 83' -> CharacterClassCharacters -> X
reducerStates[122712] = 1; // 'state 83' -> CharacterClassCharacters -> DOT
reducerStates[139480] = 1; // 'state 83' -> CharacterClassCharacters -> UNION
reducerStates[156248] = 1; // 'state 83' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[173016] = 1; // 'state 83' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[189784] = 1; // 'state 83' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[223320] = 1; // 'state 83' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[5401] = 1; // 'state 84' -> CharacterClassCharacter -> CHARACTER
reducerStates[22169] = 1; // 'state 84' -> CharacterClassCharacter -> NUMBER
reducerStates[38937] = 1; // 'state 84' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[55705] = 1; // 'state 84' -> CharacterClassCharacter -> BACKSLASH
reducerStates[72473] = 1; // 'state 84' -> CharacterClassCharacter -> X
reducerStates[122777] = 1; // 'state 84' -> CharacterClassCharacter -> DOT
reducerStates[139545] = 1; // 'state 84' -> CharacterClassCharacter -> UNION
reducerStates[156313] = 1; // 'state 84' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[173081] = 1; // 'state 84' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[189849] = 1; // 'state 84' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[223385] = 1; // 'state 84' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[5465] = 1; // 'state 85' -> CharacterClassCharacter -> CHARACTER
reducerStates[22233] = 1; // 'state 85' -> CharacterClassCharacter -> NUMBER
reducerStates[39001] = 1; // 'state 85' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[55769] = 1; // 'state 85' -> CharacterClassCharacter -> BACKSLASH
reducerStates[72537] = 1; // 'state 85' -> CharacterClassCharacter -> X
reducerStates[122841] = 1; // 'state 85' -> CharacterClassCharacter -> DOT
reducerStates[139609] = 1; // 'state 85' -> CharacterClassCharacter -> UNION
reducerStates[156377] = 1; // 'state 85' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[173145] = 1; // 'state 85' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[189913] = 1; // 'state 85' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[223449] = 1; // 'state 85' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[139667] = 3; // 'state 86' -> Union -> UNION
reducerStates[173203] = 3; // 'state 86' -> Union -> PAREN_CLOSE
reducerStates[240275] = 3; // 'state 86' -> Union -> @par-gen.EOF
reducerStates[139731] = 3; // 'state 87' -> Union -> UNION
reducerStates[173267] = 3; // 'state 87' -> Union -> PAREN_CLOSE
reducerStates[240339] = 3; // 'state 87' -> Union -> @par-gen.EOF
reducerStates[139795] = 3; // 'state 88' -> Union -> UNION
reducerStates[173331] = 3; // 'state 88' -> Union -> PAREN_CLOSE
reducerStates[240403] = 3; // 'state 88' -> Union -> @par-gen.EOF
reducerStates[139859] = 3; // 'state 89' -> Union -> UNION
reducerStates[173395] = 3; // 'state 89' -> Union -> PAREN_CLOSE
reducerStates[240467] = 3; // 'state 89' -> Union -> @par-gen.EOF
reducerStates[5781] = 2; // 'state 90' -> Atom -> CHARACTER
reducerStates[22549] = 2; // 'state 90' -> Atom -> NUMBER
reducerStates[39317] = 2; // 'state 90' -> Atom -> CONTROL_CHARACTER
reducerStates[56085] = 2; // 'state 90' -> Atom -> BACKSLASH
reducerStates[72853] = 2; // 'state 90' -> Atom -> X
reducerStates[89621] = 2; // 'state 90' -> Atom -> CARET
reducerStates[106389] = 2; // 'state 90' -> Atom -> DASH
reducerStates[139925] = 2; // 'state 90' -> Atom -> UNION
reducerStates[156693] = 2; // 'state 90' -> Atom -> PAREN_OPEN
reducerStates[173461] = 2; // 'state 90' -> Atom -> PAREN_CLOSE
reducerStates[206997] = 2; // 'state 90' -> Atom -> BRACKET_OPEN
reducerStates[240533] = 2; // 'state 90' -> Atom -> @par-gen.EOF
reducerStates[5845] = 2; // 'state 91' -> Atom -> CHARACTER
reducerStates[22613] = 2; // 'state 91' -> Atom -> NUMBER
reducerStates[39381] = 2; // 'state 91' -> Atom -> CONTROL_CHARACTER
reducerStates[56149] = 2; // 'state 91' -> Atom -> BACKSLASH
reducerStates[72917] = 2; // 'state 91' -> Atom -> X
reducerStates[89685] = 2; // 'state 91' -> Atom -> CARET
reducerStates[106453] = 2; // 'state 91' -> Atom -> DASH
reducerStates[139989] = 2; // 'state 91' -> Atom -> UNION
reducerStates[156757] = 2; // 'state 91' -> Atom -> PAREN_OPEN
reducerStates[173525] = 2; // 'state 91' -> Atom -> PAREN_CLOSE
reducerStates[207061] = 2; // 'state 91' -> Atom -> BRACKET_OPEN
reducerStates[240597] = 2; // 'state 91' -> Atom -> @par-gen.EOF
reducerStates[5909] = 2; // 'state 92' -> Atom -> CHARACTER
reducerStates[22677] = 2; // 'state 92' -> Atom -> NUMBER
reducerStates[39445] = 2; // 'state 92' -> Atom -> CONTROL_CHARACTER
reducerStates[56213] = 2; // 'state 92' -> Atom -> BACKSLASH
reducerStates[72981] = 2; // 'state 92' -> Atom -> X
reducerStates[89749] = 2; // 'state 92' -> Atom -> CARET
reducerStates[106517] = 2; // 'state 92' -> Atom -> DASH
reducerStates[140053] = 2; // 'state 92' -> Atom -> UNION
reducerStates[156821] = 2; // 'state 92' -> Atom -> PAREN_OPEN
reducerStates[173589] = 2; // 'state 92' -> Atom -> PAREN_CLOSE
reducerStates[207125] = 2; // 'state 92' -> Atom -> BRACKET_OPEN
reducerStates[240661] = 2; // 'state 92' -> Atom -> @par-gen.EOF
reducerStates[5981] = 1; // 'state 93' -> EscapedCharacter -> CHARACTER
reducerStates[22749] = 1; // 'state 93' -> EscapedCharacter -> NUMBER
reducerStates[39517] = 1; // 'state 93' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[56285] = 1; // 'state 93' -> EscapedCharacter -> BACKSLASH
reducerStates[73053] = 1; // 'state 93' -> EscapedCharacter -> X
reducerStates[89821] = 1; // 'state 93' -> EscapedCharacter -> CARET
reducerStates[106589] = 1; // 'state 93' -> EscapedCharacter -> DASH
reducerStates[140125] = 1; // 'state 93' -> EscapedCharacter -> UNION
reducerStates[156893] = 1; // 'state 93' -> EscapedCharacter -> PAREN_OPEN
reducerStates[173661] = 1; // 'state 93' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[190429] = 1; // 'state 93' -> EscapedCharacter -> QUANTIFIER
reducerStates[207197] = 1; // 'state 93' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[240733] = 1; // 'state 93' -> EscapedCharacter -> @par-gen.EOF
reducerStates[6045] = 1; // 'state 94' -> EscapedCharacter -> CHARACTER
reducerStates[22813] = 1; // 'state 94' -> EscapedCharacter -> NUMBER
reducerStates[39581] = 1; // 'state 94' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[56349] = 1; // 'state 94' -> EscapedCharacter -> BACKSLASH
reducerStates[73117] = 1; // 'state 94' -> EscapedCharacter -> X
reducerStates[89885] = 1; // 'state 94' -> EscapedCharacter -> CARET
reducerStates[106653] = 1; // 'state 94' -> EscapedCharacter -> DASH
reducerStates[140189] = 1; // 'state 94' -> EscapedCharacter -> UNION
reducerStates[156957] = 1; // 'state 94' -> EscapedCharacter -> PAREN_OPEN
reducerStates[173725] = 1; // 'state 94' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[190493] = 1; // 'state 94' -> EscapedCharacter -> QUANTIFIER
reducerStates[207261] = 1; // 'state 94' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[240797] = 1; // 'state 94' -> EscapedCharacter -> @par-gen.EOF
reducerStates[6173] = 1; // 'state 96' -> EscapedCharacter -> CHARACTER
reducerStates[22941] = 1; // 'state 96' -> EscapedCharacter -> NUMBER
reducerStates[39709] = 1; // 'state 96' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[56477] = 1; // 'state 96' -> EscapedCharacter -> BACKSLASH
reducerStates[73245] = 1; // 'state 96' -> EscapedCharacter -> X
reducerStates[90013] = 1; // 'state 96' -> EscapedCharacter -> CARET
reducerStates[106781] = 1; // 'state 96' -> EscapedCharacter -> DASH
reducerStates[140317] = 1; // 'state 96' -> EscapedCharacter -> UNION
reducerStates[157085] = 1; // 'state 96' -> EscapedCharacter -> PAREN_OPEN
reducerStates[173853] = 1; // 'state 96' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[190621] = 1; // 'state 96' -> EscapedCharacter -> QUANTIFIER
reducerStates[207389] = 1; // 'state 96' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[240925] = 1; // 'state 96' -> EscapedCharacter -> @par-gen.EOF
reducerStates[6237] = 1; // 'state 97' -> EscapedCharacter -> CHARACTER
reducerStates[23005] = 1; // 'state 97' -> EscapedCharacter -> NUMBER
reducerStates[39773] = 1; // 'state 97' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[56541] = 1; // 'state 97' -> EscapedCharacter -> BACKSLASH
reducerStates[73309] = 1; // 'state 97' -> EscapedCharacter -> X
reducerStates[90077] = 1; // 'state 97' -> EscapedCharacter -> CARET
reducerStates[106845] = 1; // 'state 97' -> EscapedCharacter -> DASH
reducerStates[140381] = 1; // 'state 97' -> EscapedCharacter -> UNION
reducerStates[157149] = 1; // 'state 97' -> EscapedCharacter -> PAREN_OPEN
reducerStates[173917] = 1; // 'state 97' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[190685] = 1; // 'state 97' -> EscapedCharacter -> QUANTIFIER
reducerStates[207453] = 1; // 'state 97' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[240989] = 1; // 'state 97' -> EscapedCharacter -> @par-gen.EOF
reducerStates[6301] = 1; // 'state 98' -> EscapedCharacter -> CHARACTER
reducerStates[23069] = 1; // 'state 98' -> EscapedCharacter -> NUMBER
reducerStates[39837] = 1; // 'state 98' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[56605] = 1; // 'state 98' -> EscapedCharacter -> BACKSLASH
reducerStates[73373] = 1; // 'state 98' -> EscapedCharacter -> X
reducerStates[90141] = 1; // 'state 98' -> EscapedCharacter -> CARET
reducerStates[106909] = 1; // 'state 98' -> EscapedCharacter -> DASH
reducerStates[140445] = 1; // 'state 98' -> EscapedCharacter -> UNION
reducerStates[157213] = 1; // 'state 98' -> EscapedCharacter -> PAREN_OPEN
reducerStates[173981] = 1; // 'state 98' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[190749] = 1; // 'state 98' -> EscapedCharacter -> QUANTIFIER
reducerStates[207517] = 1; // 'state 98' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[241053] = 1; // 'state 98' -> EscapedCharacter -> @par-gen.EOF
reducerStates[6365] = 1; // 'state 99' -> EscapedCharacter -> CHARACTER
reducerStates[23133] = 1; // 'state 99' -> EscapedCharacter -> NUMBER
reducerStates[39901] = 1; // 'state 99' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[56669] = 1; // 'state 99' -> EscapedCharacter -> BACKSLASH
reducerStates[73437] = 1; // 'state 99' -> EscapedCharacter -> X
reducerStates[90205] = 1; // 'state 99' -> EscapedCharacter -> CARET
reducerStates[106973] = 1; // 'state 99' -> EscapedCharacter -> DASH
reducerStates[140509] = 1; // 'state 99' -> EscapedCharacter -> UNION
reducerStates[157277] = 1; // 'state 99' -> EscapedCharacter -> PAREN_OPEN
reducerStates[174045] = 1; // 'state 99' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[190813] = 1; // 'state 99' -> EscapedCharacter -> QUANTIFIER
reducerStates[207581] = 1; // 'state 99' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[241117] = 1; // 'state 99' -> EscapedCharacter -> @par-gen.EOF
reducerStates[6429] = 1; // 'state 100' -> EscapedCharacter -> CHARACTER
reducerStates[23197] = 1; // 'state 100' -> EscapedCharacter -> NUMBER
reducerStates[39965] = 1; // 'state 100' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[56733] = 1; // 'state 100' -> EscapedCharacter -> BACKSLASH
reducerStates[73501] = 1; // 'state 100' -> EscapedCharacter -> X
reducerStates[90269] = 1; // 'state 100' -> EscapedCharacter -> CARET
reducerStates[107037] = 1; // 'state 100' -> EscapedCharacter -> DASH
reducerStates[140573] = 1; // 'state 100' -> EscapedCharacter -> UNION
reducerStates[157341] = 1; // 'state 100' -> EscapedCharacter -> PAREN_OPEN
reducerStates[174109] = 1; // 'state 100' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[190877] = 1; // 'state 100' -> EscapedCharacter -> QUANTIFIER
reducerStates[207645] = 1; // 'state 100' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[241181] = 1; // 'state 100' -> EscapedCharacter -> @par-gen.EOF
reducerStates[6493] = 1; // 'state 101' -> EscapedCharacter -> CHARACTER
reducerStates[23261] = 1; // 'state 101' -> EscapedCharacter -> NUMBER
reducerStates[40029] = 1; // 'state 101' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[56797] = 1; // 'state 101' -> EscapedCharacter -> BACKSLASH
reducerStates[73565] = 1; // 'state 101' -> EscapedCharacter -> X
reducerStates[90333] = 1; // 'state 101' -> EscapedCharacter -> CARET
reducerStates[107101] = 1; // 'state 101' -> EscapedCharacter -> DASH
reducerStates[140637] = 1; // 'state 101' -> EscapedCharacter -> UNION
reducerStates[157405] = 1; // 'state 101' -> EscapedCharacter -> PAREN_OPEN
reducerStates[174173] = 1; // 'state 101' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[190941] = 1; // 'state 101' -> EscapedCharacter -> QUANTIFIER
reducerStates[207709] = 1; // 'state 101' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[241245] = 1; // 'state 101' -> EscapedCharacter -> @par-gen.EOF
reducerStates[6557] = 1; // 'state 102' -> EscapedCharacter -> CHARACTER
reducerStates[23325] = 1; // 'state 102' -> EscapedCharacter -> NUMBER
reducerStates[40093] = 1; // 'state 102' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[56861] = 1; // 'state 102' -> EscapedCharacter -> BACKSLASH
reducerStates[73629] = 1; // 'state 102' -> EscapedCharacter -> X
reducerStates[90397] = 1; // 'state 102' -> EscapedCharacter -> CARET
reducerStates[107165] = 1; // 'state 102' -> EscapedCharacter -> DASH
reducerStates[140701] = 1; // 'state 102' -> EscapedCharacter -> UNION
reducerStates[157469] = 1; // 'state 102' -> EscapedCharacter -> PAREN_OPEN
reducerStates[174237] = 1; // 'state 102' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[191005] = 1; // 'state 102' -> EscapedCharacter -> QUANTIFIER
reducerStates[207773] = 1; // 'state 102' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[241309] = 1; // 'state 102' -> EscapedCharacter -> @par-gen.EOF
reducerStates[6619] = 2; // 'state 103' -> Character -> CHARACTER
reducerStates[23387] = 2; // 'state 103' -> Character -> NUMBER
reducerStates[40155] = 2; // 'state 103' -> Character -> CONTROL_CHARACTER
reducerStates[56923] = 2; // 'state 103' -> Character -> BACKSLASH
reducerStates[73691] = 2; // 'state 103' -> Character -> X
reducerStates[90459] = 2; // 'state 103' -> Character -> CARET
reducerStates[107227] = 2; // 'state 103' -> Character -> DASH
reducerStates[140763] = 2; // 'state 103' -> Character -> UNION
reducerStates[157531] = 2; // 'state 103' -> Character -> PAREN_OPEN
reducerStates[174299] = 2; // 'state 103' -> Character -> PAREN_CLOSE
reducerStates[191067] = 2; // 'state 103' -> Character -> QUANTIFIER
reducerStates[207835] = 2; // 'state 103' -> Character -> BRACKET_OPEN
reducerStates[241371] = 2; // 'state 103' -> Character -> @par-gen.EOF
reducerStates[6873] = 1; // 'state 107' -> CharacterClassCharacter -> CHARACTER
reducerStates[23641] = 1; // 'state 107' -> CharacterClassCharacter -> NUMBER
reducerStates[40409] = 1; // 'state 107' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[57177] = 1; // 'state 107' -> CharacterClassCharacter -> BACKSLASH
reducerStates[73945] = 1; // 'state 107' -> CharacterClassCharacter -> X
reducerStates[124249] = 1; // 'state 107' -> CharacterClassCharacter -> DOT
reducerStates[141017] = 1; // 'state 107' -> CharacterClassCharacter -> UNION
reducerStates[157785] = 1; // 'state 107' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[174553] = 1; // 'state 107' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[191321] = 1; // 'state 107' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[224857] = 1; // 'state 107' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[7065] = 1; // 'state 110' -> CharacterClassCharacter -> CHARACTER
reducerStates[23833] = 1; // 'state 110' -> CharacterClassCharacter -> NUMBER
reducerStates[40601] = 1; // 'state 110' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[57369] = 1; // 'state 110' -> CharacterClassCharacter -> BACKSLASH
reducerStates[74137] = 1; // 'state 110' -> CharacterClassCharacter -> X
reducerStates[124441] = 1; // 'state 110' -> CharacterClassCharacter -> DOT
reducerStates[141209] = 1; // 'state 110' -> CharacterClassCharacter -> UNION
reducerStates[157977] = 1; // 'state 110' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[174745] = 1; // 'state 110' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[191513] = 1; // 'state 110' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[225049] = 1; // 'state 110' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[7129] = 1; // 'state 111' -> CharacterClassCharacter -> CHARACTER
reducerStates[23897] = 1; // 'state 111' -> CharacterClassCharacter -> NUMBER
reducerStates[40665] = 1; // 'state 111' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[57433] = 1; // 'state 111' -> CharacterClassCharacter -> BACKSLASH
reducerStates[74201] = 1; // 'state 111' -> CharacterClassCharacter -> X
reducerStates[124505] = 1; // 'state 111' -> CharacterClassCharacter -> DOT
reducerStates[141273] = 1; // 'state 111' -> CharacterClassCharacter -> UNION
reducerStates[158041] = 1; // 'state 111' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[174809] = 1; // 'state 111' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[191577] = 1; // 'state 111' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[225113] = 1; // 'state 111' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[7193] = 1; // 'state 112' -> CharacterClassCharacter -> CHARACTER
reducerStates[23961] = 1; // 'state 112' -> CharacterClassCharacter -> NUMBER
reducerStates[40729] = 1; // 'state 112' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[57497] = 1; // 'state 112' -> CharacterClassCharacter -> BACKSLASH
reducerStates[74265] = 1; // 'state 112' -> CharacterClassCharacter -> X
reducerStates[124569] = 1; // 'state 112' -> CharacterClassCharacter -> DOT
reducerStates[141337] = 1; // 'state 112' -> CharacterClassCharacter -> UNION
reducerStates[158105] = 1; // 'state 112' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[174873] = 1; // 'state 112' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[191641] = 1; // 'state 112' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[225177] = 1; // 'state 112' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[7257] = 1; // 'state 113' -> CharacterClassCharacter -> CHARACTER
reducerStates[24025] = 1; // 'state 113' -> CharacterClassCharacter -> NUMBER
reducerStates[40793] = 1; // 'state 113' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[57561] = 1; // 'state 113' -> CharacterClassCharacter -> BACKSLASH
reducerStates[74329] = 1; // 'state 113' -> CharacterClassCharacter -> X
reducerStates[124633] = 1; // 'state 113' -> CharacterClassCharacter -> DOT
reducerStates[141401] = 1; // 'state 113' -> CharacterClassCharacter -> UNION
reducerStates[158169] = 1; // 'state 113' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[174937] = 1; // 'state 113' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[191705] = 1; // 'state 113' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[225241] = 1; // 'state 113' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[7321] = 1; // 'state 114' -> CharacterClassCharacter -> CHARACTER
reducerStates[24089] = 1; // 'state 114' -> CharacterClassCharacter -> NUMBER
reducerStates[40857] = 1; // 'state 114' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[57625] = 1; // 'state 114' -> CharacterClassCharacter -> BACKSLASH
reducerStates[74393] = 1; // 'state 114' -> CharacterClassCharacter -> X
reducerStates[124697] = 1; // 'state 114' -> CharacterClassCharacter -> DOT
reducerStates[141465] = 1; // 'state 114' -> CharacterClassCharacter -> UNION
reducerStates[158233] = 1; // 'state 114' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[175001] = 1; // 'state 114' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[191769] = 1; // 'state 114' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[225305] = 1; // 'state 114' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[7448] = 1; // 'state 116' -> CharacterClassCharacters -> CHARACTER
reducerStates[24216] = 1; // 'state 116' -> CharacterClassCharacters -> NUMBER
reducerStates[40984] = 1; // 'state 116' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[57752] = 1; // 'state 116' -> CharacterClassCharacters -> BACKSLASH
reducerStates[74520] = 1; // 'state 116' -> CharacterClassCharacters -> X
reducerStates[124824] = 1; // 'state 116' -> CharacterClassCharacters -> DOT
reducerStates[141592] = 1; // 'state 116' -> CharacterClassCharacters -> UNION
reducerStates[158360] = 1; // 'state 116' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[175128] = 1; // 'state 116' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[191896] = 1; // 'state 116' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[225432] = 1; // 'state 116' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[7513] = 1; // 'state 117' -> CharacterClassCharacter -> CHARACTER
reducerStates[24281] = 1; // 'state 117' -> CharacterClassCharacter -> NUMBER
reducerStates[41049] = 1; // 'state 117' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[57817] = 1; // 'state 117' -> CharacterClassCharacter -> BACKSLASH
reducerStates[74585] = 1; // 'state 117' -> CharacterClassCharacter -> X
reducerStates[124889] = 1; // 'state 117' -> CharacterClassCharacter -> DOT
reducerStates[141657] = 1; // 'state 117' -> CharacterClassCharacter -> UNION
reducerStates[158425] = 1; // 'state 117' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[175193] = 1; // 'state 117' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[191961] = 1; // 'state 117' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[225497] = 1; // 'state 117' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[7577] = 1; // 'state 118' -> CharacterClassCharacter -> CHARACTER
reducerStates[24345] = 1; // 'state 118' -> CharacterClassCharacter -> NUMBER
reducerStates[41113] = 1; // 'state 118' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[57881] = 1; // 'state 118' -> CharacterClassCharacter -> BACKSLASH
reducerStates[74649] = 1; // 'state 118' -> CharacterClassCharacter -> X
reducerStates[124953] = 1; // 'state 118' -> CharacterClassCharacter -> DOT
reducerStates[141721] = 1; // 'state 118' -> CharacterClassCharacter -> UNION
reducerStates[158489] = 1; // 'state 118' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[175257] = 1; // 'state 118' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[192025] = 1; // 'state 118' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[225561] = 1; // 'state 118' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[141779] = 3; // 'state 119' -> Union -> UNION
reducerStates[175315] = 3; // 'state 119' -> Union -> PAREN_CLOSE
reducerStates[242387] = 3; // 'state 119' -> Union -> @par-gen.EOF
reducerStates[141843] = 3; // 'state 120' -> Union -> UNION
reducerStates[175379] = 3; // 'state 120' -> Union -> PAREN_CLOSE
reducerStates[242451] = 3; // 'state 120' -> Union -> @par-gen.EOF
reducerStates[7765] = 2; // 'state 121' -> Atom -> CHARACTER
reducerStates[24533] = 2; // 'state 121' -> Atom -> NUMBER
reducerStates[41301] = 2; // 'state 121' -> Atom -> CONTROL_CHARACTER
reducerStates[58069] = 2; // 'state 121' -> Atom -> BACKSLASH
reducerStates[74837] = 2; // 'state 121' -> Atom -> X
reducerStates[91605] = 2; // 'state 121' -> Atom -> CARET
reducerStates[108373] = 2; // 'state 121' -> Atom -> DASH
reducerStates[141909] = 2; // 'state 121' -> Atom -> UNION
reducerStates[158677] = 2; // 'state 121' -> Atom -> PAREN_OPEN
reducerStates[175445] = 2; // 'state 121' -> Atom -> PAREN_CLOSE
reducerStates[208981] = 2; // 'state 121' -> Atom -> BRACKET_OPEN
reducerStates[242517] = 2; // 'state 121' -> Atom -> @par-gen.EOF
reducerStates[7829] = 2; // 'state 122' -> Atom -> CHARACTER
reducerStates[24597] = 2; // 'state 122' -> Atom -> NUMBER
reducerStates[41365] = 2; // 'state 122' -> Atom -> CONTROL_CHARACTER
reducerStates[58133] = 2; // 'state 122' -> Atom -> BACKSLASH
reducerStates[74901] = 2; // 'state 122' -> Atom -> X
reducerStates[91669] = 2; // 'state 122' -> Atom -> CARET
reducerStates[108437] = 2; // 'state 122' -> Atom -> DASH
reducerStates[141973] = 2; // 'state 122' -> Atom -> UNION
reducerStates[158741] = 2; // 'state 122' -> Atom -> PAREN_OPEN
reducerStates[175509] = 2; // 'state 122' -> Atom -> PAREN_CLOSE
reducerStates[209045] = 2; // 'state 122' -> Atom -> BRACKET_OPEN
reducerStates[242581] = 2; // 'state 122' -> Atom -> @par-gen.EOF
reducerStates[7893] = 2; // 'state 123' -> Atom -> CHARACTER
reducerStates[24661] = 2; // 'state 123' -> Atom -> NUMBER
reducerStates[41429] = 2; // 'state 123' -> Atom -> CONTROL_CHARACTER
reducerStates[58197] = 2; // 'state 123' -> Atom -> BACKSLASH
reducerStates[74965] = 2; // 'state 123' -> Atom -> X
reducerStates[91733] = 2; // 'state 123' -> Atom -> CARET
reducerStates[108501] = 2; // 'state 123' -> Atom -> DASH
reducerStates[142037] = 2; // 'state 123' -> Atom -> UNION
reducerStates[158805] = 2; // 'state 123' -> Atom -> PAREN_OPEN
reducerStates[175573] = 2; // 'state 123' -> Atom -> PAREN_CLOSE
reducerStates[209109] = 2; // 'state 123' -> Atom -> BRACKET_OPEN
reducerStates[242645] = 2; // 'state 123' -> Atom -> @par-gen.EOF
reducerStates[7965] = 1; // 'state 124' -> EscapedCharacter -> CHARACTER
reducerStates[24733] = 1; // 'state 124' -> EscapedCharacter -> NUMBER
reducerStates[41501] = 1; // 'state 124' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[58269] = 1; // 'state 124' -> EscapedCharacter -> BACKSLASH
reducerStates[75037] = 1; // 'state 124' -> EscapedCharacter -> X
reducerStates[91805] = 1; // 'state 124' -> EscapedCharacter -> CARET
reducerStates[108573] = 1; // 'state 124' -> EscapedCharacter -> DASH
reducerStates[142109] = 1; // 'state 124' -> EscapedCharacter -> UNION
reducerStates[158877] = 1; // 'state 124' -> EscapedCharacter -> PAREN_OPEN
reducerStates[175645] = 1; // 'state 124' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[192413] = 1; // 'state 124' -> EscapedCharacter -> QUANTIFIER
reducerStates[209181] = 1; // 'state 124' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[242717] = 1; // 'state 124' -> EscapedCharacter -> @par-gen.EOF
reducerStates[8029] = 1; // 'state 125' -> EscapedCharacter -> CHARACTER
reducerStates[24797] = 1; // 'state 125' -> EscapedCharacter -> NUMBER
reducerStates[41565] = 1; // 'state 125' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[58333] = 1; // 'state 125' -> EscapedCharacter -> BACKSLASH
reducerStates[75101] = 1; // 'state 125' -> EscapedCharacter -> X
reducerStates[91869] = 1; // 'state 125' -> EscapedCharacter -> CARET
reducerStates[108637] = 1; // 'state 125' -> EscapedCharacter -> DASH
reducerStates[142173] = 1; // 'state 125' -> EscapedCharacter -> UNION
reducerStates[158941] = 1; // 'state 125' -> EscapedCharacter -> PAREN_OPEN
reducerStates[175709] = 1; // 'state 125' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[192477] = 1; // 'state 125' -> EscapedCharacter -> QUANTIFIER
reducerStates[209245] = 1; // 'state 125' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[242781] = 1; // 'state 125' -> EscapedCharacter -> @par-gen.EOF
reducerStates[8157] = 1; // 'state 127' -> EscapedCharacter -> CHARACTER
reducerStates[24925] = 1; // 'state 127' -> EscapedCharacter -> NUMBER
reducerStates[41693] = 1; // 'state 127' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[58461] = 1; // 'state 127' -> EscapedCharacter -> BACKSLASH
reducerStates[75229] = 1; // 'state 127' -> EscapedCharacter -> X
reducerStates[91997] = 1; // 'state 127' -> EscapedCharacter -> CARET
reducerStates[108765] = 1; // 'state 127' -> EscapedCharacter -> DASH
reducerStates[142301] = 1; // 'state 127' -> EscapedCharacter -> UNION
reducerStates[159069] = 1; // 'state 127' -> EscapedCharacter -> PAREN_OPEN
reducerStates[175837] = 1; // 'state 127' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[192605] = 1; // 'state 127' -> EscapedCharacter -> QUANTIFIER
reducerStates[209373] = 1; // 'state 127' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[242909] = 1; // 'state 127' -> EscapedCharacter -> @par-gen.EOF
reducerStates[8221] = 1; // 'state 128' -> EscapedCharacter -> CHARACTER
reducerStates[24989] = 1; // 'state 128' -> EscapedCharacter -> NUMBER
reducerStates[41757] = 1; // 'state 128' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[58525] = 1; // 'state 128' -> EscapedCharacter -> BACKSLASH
reducerStates[75293] = 1; // 'state 128' -> EscapedCharacter -> X
reducerStates[92061] = 1; // 'state 128' -> EscapedCharacter -> CARET
reducerStates[108829] = 1; // 'state 128' -> EscapedCharacter -> DASH
reducerStates[142365] = 1; // 'state 128' -> EscapedCharacter -> UNION
reducerStates[159133] = 1; // 'state 128' -> EscapedCharacter -> PAREN_OPEN
reducerStates[175901] = 1; // 'state 128' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[192669] = 1; // 'state 128' -> EscapedCharacter -> QUANTIFIER
reducerStates[209437] = 1; // 'state 128' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[242973] = 1; // 'state 128' -> EscapedCharacter -> @par-gen.EOF
reducerStates[8285] = 1; // 'state 129' -> EscapedCharacter -> CHARACTER
reducerStates[25053] = 1; // 'state 129' -> EscapedCharacter -> NUMBER
reducerStates[41821] = 1; // 'state 129' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[58589] = 1; // 'state 129' -> EscapedCharacter -> BACKSLASH
reducerStates[75357] = 1; // 'state 129' -> EscapedCharacter -> X
reducerStates[92125] = 1; // 'state 129' -> EscapedCharacter -> CARET
reducerStates[108893] = 1; // 'state 129' -> EscapedCharacter -> DASH
reducerStates[142429] = 1; // 'state 129' -> EscapedCharacter -> UNION
reducerStates[159197] = 1; // 'state 129' -> EscapedCharacter -> PAREN_OPEN
reducerStates[175965] = 1; // 'state 129' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[192733] = 1; // 'state 129' -> EscapedCharacter -> QUANTIFIER
reducerStates[209501] = 1; // 'state 129' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[243037] = 1; // 'state 129' -> EscapedCharacter -> @par-gen.EOF
reducerStates[8349] = 1; // 'state 130' -> EscapedCharacter -> CHARACTER
reducerStates[25117] = 1; // 'state 130' -> EscapedCharacter -> NUMBER
reducerStates[41885] = 1; // 'state 130' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[58653] = 1; // 'state 130' -> EscapedCharacter -> BACKSLASH
reducerStates[75421] = 1; // 'state 130' -> EscapedCharacter -> X
reducerStates[92189] = 1; // 'state 130' -> EscapedCharacter -> CARET
reducerStates[108957] = 1; // 'state 130' -> EscapedCharacter -> DASH
reducerStates[142493] = 1; // 'state 130' -> EscapedCharacter -> UNION
reducerStates[159261] = 1; // 'state 130' -> EscapedCharacter -> PAREN_OPEN
reducerStates[176029] = 1; // 'state 130' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[192797] = 1; // 'state 130' -> EscapedCharacter -> QUANTIFIER
reducerStates[209565] = 1; // 'state 130' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[243101] = 1; // 'state 130' -> EscapedCharacter -> @par-gen.EOF
reducerStates[8413] = 1; // 'state 131' -> EscapedCharacter -> CHARACTER
reducerStates[25181] = 1; // 'state 131' -> EscapedCharacter -> NUMBER
reducerStates[41949] = 1; // 'state 131' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[58717] = 1; // 'state 131' -> EscapedCharacter -> BACKSLASH
reducerStates[75485] = 1; // 'state 131' -> EscapedCharacter -> X
reducerStates[92253] = 1; // 'state 131' -> EscapedCharacter -> CARET
reducerStates[109021] = 1; // 'state 131' -> EscapedCharacter -> DASH
reducerStates[142557] = 1; // 'state 131' -> EscapedCharacter -> UNION
reducerStates[159325] = 1; // 'state 131' -> EscapedCharacter -> PAREN_OPEN
reducerStates[176093] = 1; // 'state 131' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[192861] = 1; // 'state 131' -> EscapedCharacter -> QUANTIFIER
reducerStates[209629] = 1; // 'state 131' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[243165] = 1; // 'state 131' -> EscapedCharacter -> @par-gen.EOF
reducerStates[8477] = 1; // 'state 132' -> EscapedCharacter -> CHARACTER
reducerStates[25245] = 1; // 'state 132' -> EscapedCharacter -> NUMBER
reducerStates[42013] = 1; // 'state 132' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[58781] = 1; // 'state 132' -> EscapedCharacter -> BACKSLASH
reducerStates[75549] = 1; // 'state 132' -> EscapedCharacter -> X
reducerStates[92317] = 1; // 'state 132' -> EscapedCharacter -> CARET
reducerStates[109085] = 1; // 'state 132' -> EscapedCharacter -> DASH
reducerStates[142621] = 1; // 'state 132' -> EscapedCharacter -> UNION
reducerStates[159389] = 1; // 'state 132' -> EscapedCharacter -> PAREN_OPEN
reducerStates[176157] = 1; // 'state 132' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[192925] = 1; // 'state 132' -> EscapedCharacter -> QUANTIFIER
reducerStates[209693] = 1; // 'state 132' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[243229] = 1; // 'state 132' -> EscapedCharacter -> @par-gen.EOF
reducerStates[8541] = 1; // 'state 133' -> EscapedCharacter -> CHARACTER
reducerStates[25309] = 1; // 'state 133' -> EscapedCharacter -> NUMBER
reducerStates[42077] = 1; // 'state 133' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[58845] = 1; // 'state 133' -> EscapedCharacter -> BACKSLASH
reducerStates[75613] = 1; // 'state 133' -> EscapedCharacter -> X
reducerStates[92381] = 1; // 'state 133' -> EscapedCharacter -> CARET
reducerStates[109149] = 1; // 'state 133' -> EscapedCharacter -> DASH
reducerStates[142685] = 1; // 'state 133' -> EscapedCharacter -> UNION
reducerStates[159453] = 1; // 'state 133' -> EscapedCharacter -> PAREN_OPEN
reducerStates[176221] = 1; // 'state 133' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[192989] = 1; // 'state 133' -> EscapedCharacter -> QUANTIFIER
reducerStates[209757] = 1; // 'state 133' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[243293] = 1; // 'state 133' -> EscapedCharacter -> @par-gen.EOF
reducerStates[8603] = 2; // 'state 134' -> Character -> CHARACTER
reducerStates[25371] = 2; // 'state 134' -> Character -> NUMBER
reducerStates[42139] = 2; // 'state 134' -> Character -> CONTROL_CHARACTER
reducerStates[58907] = 2; // 'state 134' -> Character -> BACKSLASH
reducerStates[75675] = 2; // 'state 134' -> Character -> X
reducerStates[92443] = 2; // 'state 134' -> Character -> CARET
reducerStates[109211] = 2; // 'state 134' -> Character -> DASH
reducerStates[142747] = 2; // 'state 134' -> Character -> UNION
reducerStates[159515] = 2; // 'state 134' -> Character -> PAREN_OPEN
reducerStates[176283] = 2; // 'state 134' -> Character -> PAREN_CLOSE
reducerStates[193051] = 2; // 'state 134' -> Character -> QUANTIFIER
reducerStates[209819] = 2; // 'state 134' -> Character -> BRACKET_OPEN
reducerStates[243355] = 2; // 'state 134' -> Character -> @par-gen.EOF
reducerStates[8857] = 1; // 'state 138' -> CharacterClassCharacter -> CHARACTER
reducerStates[25625] = 1; // 'state 138' -> CharacterClassCharacter -> NUMBER
reducerStates[42393] = 1; // 'state 138' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[59161] = 1; // 'state 138' -> CharacterClassCharacter -> BACKSLASH
reducerStates[75929] = 1; // 'state 138' -> CharacterClassCharacter -> X
reducerStates[126233] = 1; // 'state 138' -> CharacterClassCharacter -> DOT
reducerStates[143001] = 1; // 'state 138' -> CharacterClassCharacter -> UNION
reducerStates[159769] = 1; // 'state 138' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[176537] = 1; // 'state 138' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[193305] = 1; // 'state 138' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[226841] = 1; // 'state 138' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9049] = 1; // 'state 141' -> CharacterClassCharacter -> CHARACTER
reducerStates[25817] = 1; // 'state 141' -> CharacterClassCharacter -> NUMBER
reducerStates[42585] = 1; // 'state 141' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[59353] = 1; // 'state 141' -> CharacterClassCharacter -> BACKSLASH
reducerStates[76121] = 1; // 'state 141' -> CharacterClassCharacter -> X
reducerStates[126425] = 1; // 'state 141' -> CharacterClassCharacter -> DOT
reducerStates[143193] = 1; // 'state 141' -> CharacterClassCharacter -> UNION
reducerStates[159961] = 1; // 'state 141' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[176729] = 1; // 'state 141' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[193497] = 1; // 'state 141' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[227033] = 1; // 'state 141' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9113] = 1; // 'state 142' -> CharacterClassCharacter -> CHARACTER
reducerStates[25881] = 1; // 'state 142' -> CharacterClassCharacter -> NUMBER
reducerStates[42649] = 1; // 'state 142' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[59417] = 1; // 'state 142' -> CharacterClassCharacter -> BACKSLASH
reducerStates[76185] = 1; // 'state 142' -> CharacterClassCharacter -> X
reducerStates[126489] = 1; // 'state 142' -> CharacterClassCharacter -> DOT
reducerStates[143257] = 1; // 'state 142' -> CharacterClassCharacter -> UNION
reducerStates[160025] = 1; // 'state 142' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[176793] = 1; // 'state 142' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[193561] = 1; // 'state 142' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[227097] = 1; // 'state 142' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9177] = 1; // 'state 143' -> CharacterClassCharacter -> CHARACTER
reducerStates[25945] = 1; // 'state 143' -> CharacterClassCharacter -> NUMBER
reducerStates[42713] = 1; // 'state 143' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[59481] = 1; // 'state 143' -> CharacterClassCharacter -> BACKSLASH
reducerStates[76249] = 1; // 'state 143' -> CharacterClassCharacter -> X
reducerStates[126553] = 1; // 'state 143' -> CharacterClassCharacter -> DOT
reducerStates[143321] = 1; // 'state 143' -> CharacterClassCharacter -> UNION
reducerStates[160089] = 1; // 'state 143' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[176857] = 1; // 'state 143' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[193625] = 1; // 'state 143' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[227161] = 1; // 'state 143' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9241] = 1; // 'state 144' -> CharacterClassCharacter -> CHARACTER
reducerStates[26009] = 1; // 'state 144' -> CharacterClassCharacter -> NUMBER
reducerStates[42777] = 1; // 'state 144' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[59545] = 1; // 'state 144' -> CharacterClassCharacter -> BACKSLASH
reducerStates[76313] = 1; // 'state 144' -> CharacterClassCharacter -> X
reducerStates[126617] = 1; // 'state 144' -> CharacterClassCharacter -> DOT
reducerStates[143385] = 1; // 'state 144' -> CharacterClassCharacter -> UNION
reducerStates[160153] = 1; // 'state 144' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[176921] = 1; // 'state 144' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[193689] = 1; // 'state 144' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[227225] = 1; // 'state 144' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9305] = 1; // 'state 145' -> CharacterClassCharacter -> CHARACTER
reducerStates[26073] = 1; // 'state 145' -> CharacterClassCharacter -> NUMBER
reducerStates[42841] = 1; // 'state 145' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[59609] = 1; // 'state 145' -> CharacterClassCharacter -> BACKSLASH
reducerStates[76377] = 1; // 'state 145' -> CharacterClassCharacter -> X
reducerStates[126681] = 1; // 'state 145' -> CharacterClassCharacter -> DOT
reducerStates[143449] = 1; // 'state 145' -> CharacterClassCharacter -> UNION
reducerStates[160217] = 1; // 'state 145' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[176985] = 1; // 'state 145' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[193753] = 1; // 'state 145' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[227289] = 1; // 'state 145' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9432] = 1; // 'state 147' -> CharacterClassCharacters -> CHARACTER
reducerStates[26200] = 1; // 'state 147' -> CharacterClassCharacters -> NUMBER
reducerStates[42968] = 1; // 'state 147' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[59736] = 1; // 'state 147' -> CharacterClassCharacters -> BACKSLASH
reducerStates[76504] = 1; // 'state 147' -> CharacterClassCharacters -> X
reducerStates[126808] = 1; // 'state 147' -> CharacterClassCharacters -> DOT
reducerStates[143576] = 1; // 'state 147' -> CharacterClassCharacters -> UNION
reducerStates[160344] = 1; // 'state 147' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[177112] = 1; // 'state 147' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[193880] = 1; // 'state 147' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[227416] = 1; // 'state 147' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[9497] = 1; // 'state 148' -> CharacterClassCharacter -> CHARACTER
reducerStates[26265] = 1; // 'state 148' -> CharacterClassCharacter -> NUMBER
reducerStates[43033] = 1; // 'state 148' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[59801] = 1; // 'state 148' -> CharacterClassCharacter -> BACKSLASH
reducerStates[76569] = 1; // 'state 148' -> CharacterClassCharacter -> X
reducerStates[126873] = 1; // 'state 148' -> CharacterClassCharacter -> DOT
reducerStates[143641] = 1; // 'state 148' -> CharacterClassCharacter -> UNION
reducerStates[160409] = 1; // 'state 148' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[177177] = 1; // 'state 148' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[193945] = 1; // 'state 148' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[227481] = 1; // 'state 148' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9561] = 1; // 'state 149' -> CharacterClassCharacter -> CHARACTER
reducerStates[26329] = 1; // 'state 149' -> CharacterClassCharacter -> NUMBER
reducerStates[43097] = 1; // 'state 149' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[59865] = 1; // 'state 149' -> CharacterClassCharacter -> BACKSLASH
reducerStates[76633] = 1; // 'state 149' -> CharacterClassCharacter -> X
reducerStates[126937] = 1; // 'state 149' -> CharacterClassCharacter -> DOT
reducerStates[143705] = 1; // 'state 149' -> CharacterClassCharacter -> UNION
reducerStates[160473] = 1; // 'state 149' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[177241] = 1; // 'state 149' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[194009] = 1; // 'state 149' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[227545] = 1; // 'state 149' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9686] = 3; // 'state 151' -> Group -> CHARACTER
reducerStates[26454] = 3; // 'state 151' -> Group -> NUMBER
reducerStates[43222] = 3; // 'state 151' -> Group -> CONTROL_CHARACTER
reducerStates[59990] = 3; // 'state 151' -> Group -> BACKSLASH
reducerStates[76758] = 3; // 'state 151' -> Group -> X
reducerStates[93526] = 3; // 'state 151' -> Group -> CARET
reducerStates[110294] = 3; // 'state 151' -> Group -> DASH
reducerStates[143830] = 3; // 'state 151' -> Group -> UNION
reducerStates[160598] = 3; // 'state 151' -> Group -> PAREN_OPEN
reducerStates[177366] = 3; // 'state 151' -> Group -> PAREN_CLOSE
reducerStates[194134] = 3; // 'state 151' -> Group -> QUANTIFIER
reducerStates[210902] = 3; // 'state 151' -> Group -> BRACKET_OPEN
reducerStates[244438] = 3; // 'state 151' -> Group -> @par-gen.EOF
reducerStates[9750] = 3; // 'state 152' -> Group -> CHARACTER
reducerStates[26518] = 3; // 'state 152' -> Group -> NUMBER
reducerStates[43286] = 3; // 'state 152' -> Group -> CONTROL_CHARACTER
reducerStates[60054] = 3; // 'state 152' -> Group -> BACKSLASH
reducerStates[76822] = 3; // 'state 152' -> Group -> X
reducerStates[93590] = 3; // 'state 152' -> Group -> CARET
reducerStates[110358] = 3; // 'state 152' -> Group -> DASH
reducerStates[143894] = 3; // 'state 152' -> Group -> UNION
reducerStates[160662] = 3; // 'state 152' -> Group -> PAREN_OPEN
reducerStates[177430] = 3; // 'state 152' -> Group -> PAREN_CLOSE
reducerStates[194198] = 3; // 'state 152' -> Group -> QUANTIFIER
reducerStates[210966] = 3; // 'state 152' -> Group -> BRACKET_OPEN
reducerStates[244502] = 3; // 'state 152' -> Group -> @par-gen.EOF
reducerStates[9814] = 3; // 'state 153' -> Group -> CHARACTER
reducerStates[26582] = 3; // 'state 153' -> Group -> NUMBER
reducerStates[43350] = 3; // 'state 153' -> Group -> CONTROL_CHARACTER
reducerStates[60118] = 3; // 'state 153' -> Group -> BACKSLASH
reducerStates[76886] = 3; // 'state 153' -> Group -> X
reducerStates[93654] = 3; // 'state 153' -> Group -> CARET
reducerStates[110422] = 3; // 'state 153' -> Group -> DASH
reducerStates[143958] = 3; // 'state 153' -> Group -> UNION
reducerStates[160726] = 3; // 'state 153' -> Group -> PAREN_OPEN
reducerStates[177494] = 3; // 'state 153' -> Group -> PAREN_CLOSE
reducerStates[194262] = 3; // 'state 153' -> Group -> QUANTIFIER
reducerStates[211030] = 3; // 'state 153' -> Group -> BRACKET_OPEN
reducerStates[244566] = 3; // 'state 153' -> Group -> @par-gen.EOF
reducerStates[9881] = 1; // 'state 154' -> CharacterClassCharacter -> CHARACTER
reducerStates[26649] = 1; // 'state 154' -> CharacterClassCharacter -> NUMBER
reducerStates[43417] = 1; // 'state 154' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[60185] = 1; // 'state 154' -> CharacterClassCharacter -> BACKSLASH
reducerStates[76953] = 1; // 'state 154' -> CharacterClassCharacter -> X
reducerStates[127257] = 1; // 'state 154' -> CharacterClassCharacter -> DOT
reducerStates[144025] = 1; // 'state 154' -> CharacterClassCharacter -> UNION
reducerStates[160793] = 1; // 'state 154' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[177561] = 1; // 'state 154' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[194329] = 1; // 'state 154' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[227865] = 1; // 'state 154' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10073] = 1; // 'state 157' -> CharacterClassCharacter -> CHARACTER
reducerStates[26841] = 1; // 'state 157' -> CharacterClassCharacter -> NUMBER
reducerStates[43609] = 1; // 'state 157' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[60377] = 1; // 'state 157' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77145] = 1; // 'state 157' -> CharacterClassCharacter -> X
reducerStates[127449] = 1; // 'state 157' -> CharacterClassCharacter -> DOT
reducerStates[144217] = 1; // 'state 157' -> CharacterClassCharacter -> UNION
reducerStates[160985] = 1; // 'state 157' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[177753] = 1; // 'state 157' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[194521] = 1; // 'state 157' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[228057] = 1; // 'state 157' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10137] = 1; // 'state 158' -> CharacterClassCharacter -> CHARACTER
reducerStates[26905] = 1; // 'state 158' -> CharacterClassCharacter -> NUMBER
reducerStates[43673] = 1; // 'state 158' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[60441] = 1; // 'state 158' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77209] = 1; // 'state 158' -> CharacterClassCharacter -> X
reducerStates[127513] = 1; // 'state 158' -> CharacterClassCharacter -> DOT
reducerStates[144281] = 1; // 'state 158' -> CharacterClassCharacter -> UNION
reducerStates[161049] = 1; // 'state 158' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[177817] = 1; // 'state 158' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[194585] = 1; // 'state 158' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[228121] = 1; // 'state 158' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10201] = 1; // 'state 159' -> CharacterClassCharacter -> CHARACTER
reducerStates[26969] = 1; // 'state 159' -> CharacterClassCharacter -> NUMBER
reducerStates[43737] = 1; // 'state 159' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[60505] = 1; // 'state 159' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77273] = 1; // 'state 159' -> CharacterClassCharacter -> X
reducerStates[127577] = 1; // 'state 159' -> CharacterClassCharacter -> DOT
reducerStates[144345] = 1; // 'state 159' -> CharacterClassCharacter -> UNION
reducerStates[161113] = 1; // 'state 159' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[177881] = 1; // 'state 159' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[194649] = 1; // 'state 159' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[228185] = 1; // 'state 159' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10265] = 1; // 'state 160' -> CharacterClassCharacter -> CHARACTER
reducerStates[27033] = 1; // 'state 160' -> CharacterClassCharacter -> NUMBER
reducerStates[43801] = 1; // 'state 160' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[60569] = 1; // 'state 160' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77337] = 1; // 'state 160' -> CharacterClassCharacter -> X
reducerStates[127641] = 1; // 'state 160' -> CharacterClassCharacter -> DOT
reducerStates[144409] = 1; // 'state 160' -> CharacterClassCharacter -> UNION
reducerStates[161177] = 1; // 'state 160' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[177945] = 1; // 'state 160' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[194713] = 1; // 'state 160' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[228249] = 1; // 'state 160' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10329] = 1; // 'state 161' -> CharacterClassCharacter -> CHARACTER
reducerStates[27097] = 1; // 'state 161' -> CharacterClassCharacter -> NUMBER
reducerStates[43865] = 1; // 'state 161' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[60633] = 1; // 'state 161' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77401] = 1; // 'state 161' -> CharacterClassCharacter -> X
reducerStates[127705] = 1; // 'state 161' -> CharacterClassCharacter -> DOT
reducerStates[144473] = 1; // 'state 161' -> CharacterClassCharacter -> UNION
reducerStates[161241] = 1; // 'state 161' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[178009] = 1; // 'state 161' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[194777] = 1; // 'state 161' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[228313] = 1; // 'state 161' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10456] = 1; // 'state 163' -> CharacterClassCharacters -> CHARACTER
reducerStates[27224] = 1; // 'state 163' -> CharacterClassCharacters -> NUMBER
reducerStates[43992] = 1; // 'state 163' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[60760] = 1; // 'state 163' -> CharacterClassCharacters -> BACKSLASH
reducerStates[77528] = 1; // 'state 163' -> CharacterClassCharacters -> X
reducerStates[127832] = 1; // 'state 163' -> CharacterClassCharacters -> DOT
reducerStates[144600] = 1; // 'state 163' -> CharacterClassCharacters -> UNION
reducerStates[161368] = 1; // 'state 163' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[178136] = 1; // 'state 163' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[194904] = 1; // 'state 163' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[228440] = 1; // 'state 163' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[10521] = 1; // 'state 164' -> CharacterClassCharacter -> CHARACTER
reducerStates[27289] = 1; // 'state 164' -> CharacterClassCharacter -> NUMBER
reducerStates[44057] = 1; // 'state 164' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[60825] = 1; // 'state 164' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77593] = 1; // 'state 164' -> CharacterClassCharacter -> X
reducerStates[127897] = 1; // 'state 164' -> CharacterClassCharacter -> DOT
reducerStates[144665] = 1; // 'state 164' -> CharacterClassCharacter -> UNION
reducerStates[161433] = 1; // 'state 164' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[178201] = 1; // 'state 164' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[194969] = 1; // 'state 164' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[228505] = 1; // 'state 164' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10585] = 1; // 'state 165' -> CharacterClassCharacter -> CHARACTER
reducerStates[27353] = 1; // 'state 165' -> CharacterClassCharacter -> NUMBER
reducerStates[44121] = 1; // 'state 165' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[60889] = 1; // 'state 165' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77657] = 1; // 'state 165' -> CharacterClassCharacter -> X
reducerStates[127961] = 1; // 'state 165' -> CharacterClassCharacter -> DOT
reducerStates[144729] = 1; // 'state 165' -> CharacterClassCharacter -> UNION
reducerStates[161497] = 1; // 'state 165' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[178265] = 1; // 'state 165' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[195033] = 1; // 'state 165' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[228569] = 1; // 'state 165' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10649] = 1; // 'state 166' -> CharacterClassCharacter -> CHARACTER
reducerStates[27417] = 1; // 'state 166' -> CharacterClassCharacter -> NUMBER
reducerStates[44185] = 1; // 'state 166' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[60953] = 1; // 'state 166' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77721] = 1; // 'state 166' -> CharacterClassCharacter -> X
reducerStates[128025] = 1; // 'state 166' -> CharacterClassCharacter -> DOT
reducerStates[144793] = 1; // 'state 166' -> CharacterClassCharacter -> UNION
reducerStates[161561] = 1; // 'state 166' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[178329] = 1; // 'state 166' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[195097] = 1; // 'state 166' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[228633] = 1; // 'state 166' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10777] = 1; // 'state 168' -> CharacterClassCharacter -> CHARACTER
reducerStates[27545] = 1; // 'state 168' -> CharacterClassCharacter -> NUMBER
reducerStates[44313] = 1; // 'state 168' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[61081] = 1; // 'state 168' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77849] = 1; // 'state 168' -> CharacterClassCharacter -> X
reducerStates[128153] = 1; // 'state 168' -> CharacterClassCharacter -> DOT
reducerStates[144921] = 1; // 'state 168' -> CharacterClassCharacter -> UNION
reducerStates[161689] = 1; // 'state 168' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[178457] = 1; // 'state 168' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[195225] = 1; // 'state 168' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[228761] = 1; // 'state 168' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10841] = 1; // 'state 169' -> CharacterClassCharacter -> CHARACTER
reducerStates[27609] = 1; // 'state 169' -> CharacterClassCharacter -> NUMBER
reducerStates[44377] = 1; // 'state 169' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[61145] = 1; // 'state 169' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77913] = 1; // 'state 169' -> CharacterClassCharacter -> X
reducerStates[128217] = 1; // 'state 169' -> CharacterClassCharacter -> DOT
reducerStates[144985] = 1; // 'state 169' -> CharacterClassCharacter -> UNION
reducerStates[161753] = 1; // 'state 169' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[178521] = 1; // 'state 169' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[195289] = 1; // 'state 169' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[228825] = 1; // 'state 169' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10905] = 1; // 'state 170' -> CharacterClassCharacter -> CHARACTER
reducerStates[27673] = 1; // 'state 170' -> CharacterClassCharacter -> NUMBER
reducerStates[44441] = 1; // 'state 170' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[61209] = 1; // 'state 170' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77977] = 1; // 'state 170' -> CharacterClassCharacter -> X
reducerStates[128281] = 1; // 'state 170' -> CharacterClassCharacter -> DOT
reducerStates[145049] = 1; // 'state 170' -> CharacterClassCharacter -> UNION
reducerStates[161817] = 1; // 'state 170' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[178585] = 1; // 'state 170' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[195353] = 1; // 'state 170' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[228889] = 1; // 'state 170' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10969] = 1; // 'state 171' -> CharacterClassCharacter -> CHARACTER
reducerStates[27737] = 1; // 'state 171' -> CharacterClassCharacter -> NUMBER
reducerStates[44505] = 1; // 'state 171' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[61273] = 1; // 'state 171' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78041] = 1; // 'state 171' -> CharacterClassCharacter -> X
reducerStates[128345] = 1; // 'state 171' -> CharacterClassCharacter -> DOT
reducerStates[145113] = 1; // 'state 171' -> CharacterClassCharacter -> UNION
reducerStates[161881] = 1; // 'state 171' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[178649] = 1; // 'state 171' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[195417] = 1; // 'state 171' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[228953] = 1; // 'state 171' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11033] = 1; // 'state 172' -> CharacterClassCharacter -> CHARACTER
reducerStates[27801] = 1; // 'state 172' -> CharacterClassCharacter -> NUMBER
reducerStates[44569] = 1; // 'state 172' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[61337] = 1; // 'state 172' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78105] = 1; // 'state 172' -> CharacterClassCharacter -> X
reducerStates[128409] = 1; // 'state 172' -> CharacterClassCharacter -> DOT
reducerStates[145177] = 1; // 'state 172' -> CharacterClassCharacter -> UNION
reducerStates[161945] = 1; // 'state 172' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[178713] = 1; // 'state 172' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[195481] = 1; // 'state 172' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[229017] = 1; // 'state 172' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11095] = 3; // 'state 173' -> CharacterClass -> CHARACTER
reducerStates[27863] = 3; // 'state 173' -> CharacterClass -> NUMBER
reducerStates[44631] = 3; // 'state 173' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[61399] = 3; // 'state 173' -> CharacterClass -> BACKSLASH
reducerStates[78167] = 3; // 'state 173' -> CharacterClass -> X
reducerStates[94935] = 3; // 'state 173' -> CharacterClass -> CARET
reducerStates[111703] = 3; // 'state 173' -> CharacterClass -> DASH
reducerStates[145239] = 3; // 'state 173' -> CharacterClass -> UNION
reducerStates[162007] = 3; // 'state 173' -> CharacterClass -> PAREN_OPEN
reducerStates[178775] = 3; // 'state 173' -> CharacterClass -> PAREN_CLOSE
reducerStates[195543] = 3; // 'state 173' -> CharacterClass -> QUANTIFIER
reducerStates[212311] = 3; // 'state 173' -> CharacterClass -> BRACKET_OPEN
reducerStates[245847] = 3; // 'state 173' -> CharacterClass -> @par-gen.EOF
reducerStates[11160] = 2; // 'state 174' -> CharacterClassCharacters -> CHARACTER
reducerStates[27928] = 2; // 'state 174' -> CharacterClassCharacters -> NUMBER
reducerStates[44696] = 2; // 'state 174' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[61464] = 2; // 'state 174' -> CharacterClassCharacters -> BACKSLASH
reducerStates[78232] = 2; // 'state 174' -> CharacterClassCharacters -> X
reducerStates[128536] = 2; // 'state 174' -> CharacterClassCharacters -> DOT
reducerStates[145304] = 2; // 'state 174' -> CharacterClassCharacters -> UNION
reducerStates[162072] = 2; // 'state 174' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[178840] = 2; // 'state 174' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[195608] = 2; // 'state 174' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[229144] = 2; // 'state 174' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[11225] = 1; // 'state 175' -> CharacterClassCharacter -> CHARACTER
reducerStates[27993] = 1; // 'state 175' -> CharacterClassCharacter -> NUMBER
reducerStates[44761] = 1; // 'state 175' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[61529] = 1; // 'state 175' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78297] = 1; // 'state 175' -> CharacterClassCharacter -> X
reducerStates[128601] = 1; // 'state 175' -> CharacterClassCharacter -> DOT
reducerStates[145369] = 1; // 'state 175' -> CharacterClassCharacter -> UNION
reducerStates[162137] = 1; // 'state 175' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[178905] = 1; // 'state 175' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[195673] = 1; // 'state 175' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[229209] = 1; // 'state 175' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11289] = 1; // 'state 176' -> CharacterClassCharacter -> CHARACTER
reducerStates[28057] = 1; // 'state 176' -> CharacterClassCharacter -> NUMBER
reducerStates[44825] = 1; // 'state 176' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[61593] = 1; // 'state 176' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78361] = 1; // 'state 176' -> CharacterClassCharacter -> X
reducerStates[128665] = 1; // 'state 176' -> CharacterClassCharacter -> DOT
reducerStates[145433] = 1; // 'state 176' -> CharacterClassCharacter -> UNION
reducerStates[162201] = 1; // 'state 176' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[178969] = 1; // 'state 176' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[195737] = 1; // 'state 176' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[229273] = 1; // 'state 176' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11481] = 2; // 'state 179' -> CharacterClassCharacter -> CHARACTER
reducerStates[28249] = 2; // 'state 179' -> CharacterClassCharacter -> NUMBER
reducerStates[45017] = 2; // 'state 179' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[61785] = 2; // 'state 179' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78553] = 2; // 'state 179' -> CharacterClassCharacter -> X
reducerStates[128857] = 2; // 'state 179' -> CharacterClassCharacter -> DOT
reducerStates[145625] = 2; // 'state 179' -> CharacterClassCharacter -> UNION
reducerStates[162393] = 2; // 'state 179' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[179161] = 2; // 'state 179' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[195929] = 2; // 'state 179' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[229465] = 2; // 'state 179' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11545] = 2; // 'state 180' -> CharacterClassCharacter -> CHARACTER
reducerStates[28313] = 2; // 'state 180' -> CharacterClassCharacter -> NUMBER
reducerStates[45081] = 2; // 'state 180' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[61849] = 2; // 'state 180' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78617] = 2; // 'state 180' -> CharacterClassCharacter -> X
reducerStates[128921] = 2; // 'state 180' -> CharacterClassCharacter -> DOT
reducerStates[145689] = 2; // 'state 180' -> CharacterClassCharacter -> UNION
reducerStates[162457] = 2; // 'state 180' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[179225] = 2; // 'state 180' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[195993] = 2; // 'state 180' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[229529] = 2; // 'state 180' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11609] = 2; // 'state 181' -> CharacterClassCharacter -> CHARACTER
reducerStates[28377] = 2; // 'state 181' -> CharacterClassCharacter -> NUMBER
reducerStates[45145] = 2; // 'state 181' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[61913] = 2; // 'state 181' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78681] = 2; // 'state 181' -> CharacterClassCharacter -> X
reducerStates[128985] = 2; // 'state 181' -> CharacterClassCharacter -> DOT
reducerStates[145753] = 2; // 'state 181' -> CharacterClassCharacter -> UNION
reducerStates[162521] = 2; // 'state 181' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[179289] = 2; // 'state 181' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[196057] = 2; // 'state 181' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[229593] = 2; // 'state 181' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11673] = 2; // 'state 182' -> CharacterClassCharacter -> CHARACTER
reducerStates[28441] = 2; // 'state 182' -> CharacterClassCharacter -> NUMBER
reducerStates[45209] = 2; // 'state 182' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[61977] = 2; // 'state 182' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78745] = 2; // 'state 182' -> CharacterClassCharacter -> X
reducerStates[129049] = 2; // 'state 182' -> CharacterClassCharacter -> DOT
reducerStates[145817] = 2; // 'state 182' -> CharacterClassCharacter -> UNION
reducerStates[162585] = 2; // 'state 182' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[179353] = 2; // 'state 182' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[196121] = 2; // 'state 182' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[229657] = 2; // 'state 182' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11737] = 2; // 'state 183' -> CharacterClassCharacter -> CHARACTER
reducerStates[28505] = 2; // 'state 183' -> CharacterClassCharacter -> NUMBER
reducerStates[45273] = 2; // 'state 183' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[62041] = 2; // 'state 183' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78809] = 2; // 'state 183' -> CharacterClassCharacter -> X
reducerStates[129113] = 2; // 'state 183' -> CharacterClassCharacter -> DOT
reducerStates[145881] = 2; // 'state 183' -> CharacterClassCharacter -> UNION
reducerStates[162649] = 2; // 'state 183' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[179417] = 2; // 'state 183' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[196185] = 2; // 'state 183' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[229721] = 2; // 'state 183' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11801] = 2; // 'state 184' -> CharacterClassCharacter -> CHARACTER
reducerStates[28569] = 2; // 'state 184' -> CharacterClassCharacter -> NUMBER
reducerStates[45337] = 2; // 'state 184' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[62105] = 2; // 'state 184' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78873] = 2; // 'state 184' -> CharacterClassCharacter -> X
reducerStates[129177] = 2; // 'state 184' -> CharacterClassCharacter -> DOT
reducerStates[145945] = 2; // 'state 184' -> CharacterClassCharacter -> UNION
reducerStates[162713] = 2; // 'state 184' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[179481] = 2; // 'state 184' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[196249] = 2; // 'state 184' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[229785] = 2; // 'state 184' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11990] = 3; // 'state 187' -> Group -> CHARACTER
reducerStates[28758] = 3; // 'state 187' -> Group -> NUMBER
reducerStates[45526] = 3; // 'state 187' -> Group -> CONTROL_CHARACTER
reducerStates[62294] = 3; // 'state 187' -> Group -> BACKSLASH
reducerStates[79062] = 3; // 'state 187' -> Group -> X
reducerStates[95830] = 3; // 'state 187' -> Group -> CARET
reducerStates[112598] = 3; // 'state 187' -> Group -> DASH
reducerStates[146134] = 3; // 'state 187' -> Group -> UNION
reducerStates[162902] = 3; // 'state 187' -> Group -> PAREN_OPEN
reducerStates[179670] = 3; // 'state 187' -> Group -> PAREN_CLOSE
reducerStates[196438] = 3; // 'state 187' -> Group -> QUANTIFIER
reducerStates[213206] = 3; // 'state 187' -> Group -> BRACKET_OPEN
reducerStates[246742] = 3; // 'state 187' -> Group -> @par-gen.EOF
reducerStates[12054] = 3; // 'state 188' -> Group -> CHARACTER
reducerStates[28822] = 3; // 'state 188' -> Group -> NUMBER
reducerStates[45590] = 3; // 'state 188' -> Group -> CONTROL_CHARACTER
reducerStates[62358] = 3; // 'state 188' -> Group -> BACKSLASH
reducerStates[79126] = 3; // 'state 188' -> Group -> X
reducerStates[95894] = 3; // 'state 188' -> Group -> CARET
reducerStates[112662] = 3; // 'state 188' -> Group -> DASH
reducerStates[146198] = 3; // 'state 188' -> Group -> UNION
reducerStates[162966] = 3; // 'state 188' -> Group -> PAREN_OPEN
reducerStates[179734] = 3; // 'state 188' -> Group -> PAREN_CLOSE
reducerStates[196502] = 3; // 'state 188' -> Group -> QUANTIFIER
reducerStates[213270] = 3; // 'state 188' -> Group -> BRACKET_OPEN
reducerStates[246806] = 3; // 'state 188' -> Group -> @par-gen.EOF
reducerStates[12118] = 3; // 'state 189' -> Group -> CHARACTER
reducerStates[28886] = 3; // 'state 189' -> Group -> NUMBER
reducerStates[45654] = 3; // 'state 189' -> Group -> CONTROL_CHARACTER
reducerStates[62422] = 3; // 'state 189' -> Group -> BACKSLASH
reducerStates[79190] = 3; // 'state 189' -> Group -> X
reducerStates[95958] = 3; // 'state 189' -> Group -> CARET
reducerStates[112726] = 3; // 'state 189' -> Group -> DASH
reducerStates[146262] = 3; // 'state 189' -> Group -> UNION
reducerStates[163030] = 3; // 'state 189' -> Group -> PAREN_OPEN
reducerStates[179798] = 3; // 'state 189' -> Group -> PAREN_CLOSE
reducerStates[196566] = 3; // 'state 189' -> Group -> QUANTIFIER
reducerStates[213334] = 3; // 'state 189' -> Group -> BRACKET_OPEN
reducerStates[246870] = 3; // 'state 189' -> Group -> @par-gen.EOF
reducerStates[12183] = 3; // 'state 190' -> CharacterClass -> CHARACTER
reducerStates[28951] = 3; // 'state 190' -> CharacterClass -> NUMBER
reducerStates[45719] = 3; // 'state 190' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[62487] = 3; // 'state 190' -> CharacterClass -> BACKSLASH
reducerStates[79255] = 3; // 'state 190' -> CharacterClass -> X
reducerStates[96023] = 3; // 'state 190' -> CharacterClass -> CARET
reducerStates[112791] = 3; // 'state 190' -> CharacterClass -> DASH
reducerStates[146327] = 3; // 'state 190' -> CharacterClass -> UNION
reducerStates[163095] = 3; // 'state 190' -> CharacterClass -> PAREN_OPEN
reducerStates[179863] = 3; // 'state 190' -> CharacterClass -> PAREN_CLOSE
reducerStates[196631] = 3; // 'state 190' -> CharacterClass -> QUANTIFIER
reducerStates[213399] = 3; // 'state 190' -> CharacterClass -> BRACKET_OPEN
reducerStates[246935] = 3; // 'state 190' -> CharacterClass -> @par-gen.EOF
reducerStates[12248] = 2; // 'state 191' -> CharacterClassCharacters -> CHARACTER
reducerStates[29016] = 2; // 'state 191' -> CharacterClassCharacters -> NUMBER
reducerStates[45784] = 2; // 'state 191' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[62552] = 2; // 'state 191' -> CharacterClassCharacters -> BACKSLASH
reducerStates[79320] = 2; // 'state 191' -> CharacterClassCharacters -> X
reducerStates[129624] = 2; // 'state 191' -> CharacterClassCharacters -> DOT
reducerStates[146392] = 2; // 'state 191' -> CharacterClassCharacters -> UNION
reducerStates[163160] = 2; // 'state 191' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[179928] = 2; // 'state 191' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[196696] = 2; // 'state 191' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[230232] = 2; // 'state 191' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[12441] = 2; // 'state 194' -> CharacterClassCharacter -> CHARACTER
reducerStates[29209] = 2; // 'state 194' -> CharacterClassCharacter -> NUMBER
reducerStates[45977] = 2; // 'state 194' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[62745] = 2; // 'state 194' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79513] = 2; // 'state 194' -> CharacterClassCharacter -> X
reducerStates[129817] = 2; // 'state 194' -> CharacterClassCharacter -> DOT
reducerStates[146585] = 2; // 'state 194' -> CharacterClassCharacter -> UNION
reducerStates[163353] = 2; // 'state 194' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[180121] = 2; // 'state 194' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[196889] = 2; // 'state 194' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[230425] = 2; // 'state 194' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12505] = 2; // 'state 195' -> CharacterClassCharacter -> CHARACTER
reducerStates[29273] = 2; // 'state 195' -> CharacterClassCharacter -> NUMBER
reducerStates[46041] = 2; // 'state 195' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[62809] = 2; // 'state 195' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79577] = 2; // 'state 195' -> CharacterClassCharacter -> X
reducerStates[129881] = 2; // 'state 195' -> CharacterClassCharacter -> DOT
reducerStates[146649] = 2; // 'state 195' -> CharacterClassCharacter -> UNION
reducerStates[163417] = 2; // 'state 195' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[180185] = 2; // 'state 195' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[196953] = 2; // 'state 195' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[230489] = 2; // 'state 195' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12569] = 2; // 'state 196' -> CharacterClassCharacter -> CHARACTER
reducerStates[29337] = 2; // 'state 196' -> CharacterClassCharacter -> NUMBER
reducerStates[46105] = 2; // 'state 196' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[62873] = 2; // 'state 196' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79641] = 2; // 'state 196' -> CharacterClassCharacter -> X
reducerStates[129945] = 2; // 'state 196' -> CharacterClassCharacter -> DOT
reducerStates[146713] = 2; // 'state 196' -> CharacterClassCharacter -> UNION
reducerStates[163481] = 2; // 'state 196' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[180249] = 2; // 'state 196' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[197017] = 2; // 'state 196' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[230553] = 2; // 'state 196' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12633] = 2; // 'state 197' -> CharacterClassCharacter -> CHARACTER
reducerStates[29401] = 2; // 'state 197' -> CharacterClassCharacter -> NUMBER
reducerStates[46169] = 2; // 'state 197' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[62937] = 2; // 'state 197' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79705] = 2; // 'state 197' -> CharacterClassCharacter -> X
reducerStates[130009] = 2; // 'state 197' -> CharacterClassCharacter -> DOT
reducerStates[146777] = 2; // 'state 197' -> CharacterClassCharacter -> UNION
reducerStates[163545] = 2; // 'state 197' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[180313] = 2; // 'state 197' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[197081] = 2; // 'state 197' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[230617] = 2; // 'state 197' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12697] = 2; // 'state 198' -> CharacterClassCharacter -> CHARACTER
reducerStates[29465] = 2; // 'state 198' -> CharacterClassCharacter -> NUMBER
reducerStates[46233] = 2; // 'state 198' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[63001] = 2; // 'state 198' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79769] = 2; // 'state 198' -> CharacterClassCharacter -> X
reducerStates[130073] = 2; // 'state 198' -> CharacterClassCharacter -> DOT
reducerStates[146841] = 2; // 'state 198' -> CharacterClassCharacter -> UNION
reducerStates[163609] = 2; // 'state 198' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[180377] = 2; // 'state 198' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[197145] = 2; // 'state 198' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[230681] = 2; // 'state 198' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12761] = 2; // 'state 199' -> CharacterClassCharacter -> CHARACTER
reducerStates[29529] = 2; // 'state 199' -> CharacterClassCharacter -> NUMBER
reducerStates[46297] = 2; // 'state 199' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[63065] = 2; // 'state 199' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79833] = 2; // 'state 199' -> CharacterClassCharacter -> X
reducerStates[130137] = 2; // 'state 199' -> CharacterClassCharacter -> DOT
reducerStates[146905] = 2; // 'state 199' -> CharacterClassCharacter -> UNION
reducerStates[163673] = 2; // 'state 199' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[180441] = 2; // 'state 199' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[197209] = 2; // 'state 199' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[230745] = 2; // 'state 199' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12950] = 3; // 'state 202' -> Group -> CHARACTER
reducerStates[29718] = 3; // 'state 202' -> Group -> NUMBER
reducerStates[46486] = 3; // 'state 202' -> Group -> CONTROL_CHARACTER
reducerStates[63254] = 3; // 'state 202' -> Group -> BACKSLASH
reducerStates[80022] = 3; // 'state 202' -> Group -> X
reducerStates[96790] = 3; // 'state 202' -> Group -> CARET
reducerStates[113558] = 3; // 'state 202' -> Group -> DASH
reducerStates[147094] = 3; // 'state 202' -> Group -> UNION
reducerStates[163862] = 3; // 'state 202' -> Group -> PAREN_OPEN
reducerStates[180630] = 3; // 'state 202' -> Group -> PAREN_CLOSE
reducerStates[197398] = 3; // 'state 202' -> Group -> QUANTIFIER
reducerStates[214166] = 3; // 'state 202' -> Group -> BRACKET_OPEN
reducerStates[247702] = 3; // 'state 202' -> Group -> @par-gen.EOF
reducerStates[13014] = 3; // 'state 203' -> Group -> CHARACTER
reducerStates[29782] = 3; // 'state 203' -> Group -> NUMBER
reducerStates[46550] = 3; // 'state 203' -> Group -> CONTROL_CHARACTER
reducerStates[63318] = 3; // 'state 203' -> Group -> BACKSLASH
reducerStates[80086] = 3; // 'state 203' -> Group -> X
reducerStates[96854] = 3; // 'state 203' -> Group -> CARET
reducerStates[113622] = 3; // 'state 203' -> Group -> DASH
reducerStates[147158] = 3; // 'state 203' -> Group -> UNION
reducerStates[163926] = 3; // 'state 203' -> Group -> PAREN_OPEN
reducerStates[180694] = 3; // 'state 203' -> Group -> PAREN_CLOSE
reducerStates[197462] = 3; // 'state 203' -> Group -> QUANTIFIER
reducerStates[214230] = 3; // 'state 203' -> Group -> BRACKET_OPEN
reducerStates[247766] = 3; // 'state 203' -> Group -> @par-gen.EOF
reducerStates[13078] = 3; // 'state 204' -> Group -> CHARACTER
reducerStates[29846] = 3; // 'state 204' -> Group -> NUMBER
reducerStates[46614] = 3; // 'state 204' -> Group -> CONTROL_CHARACTER
reducerStates[63382] = 3; // 'state 204' -> Group -> BACKSLASH
reducerStates[80150] = 3; // 'state 204' -> Group -> X
reducerStates[96918] = 3; // 'state 204' -> Group -> CARET
reducerStates[113686] = 3; // 'state 204' -> Group -> DASH
reducerStates[147222] = 3; // 'state 204' -> Group -> UNION
reducerStates[163990] = 3; // 'state 204' -> Group -> PAREN_OPEN
reducerStates[180758] = 3; // 'state 204' -> Group -> PAREN_CLOSE
reducerStates[197526] = 3; // 'state 204' -> Group -> QUANTIFIER
reducerStates[214294] = 3; // 'state 204' -> Group -> BRACKET_OPEN
reducerStates[247830] = 3; // 'state 204' -> Group -> @par-gen.EOF
reducerStates[13143] = 3; // 'state 205' -> CharacterClass -> CHARACTER
reducerStates[29911] = 3; // 'state 205' -> CharacterClass -> NUMBER
reducerStates[46679] = 3; // 'state 205' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[63447] = 3; // 'state 205' -> CharacterClass -> BACKSLASH
reducerStates[80215] = 3; // 'state 205' -> CharacterClass -> X
reducerStates[96983] = 3; // 'state 205' -> CharacterClass -> CARET
reducerStates[113751] = 3; // 'state 205' -> CharacterClass -> DASH
reducerStates[147287] = 3; // 'state 205' -> CharacterClass -> UNION
reducerStates[164055] = 3; // 'state 205' -> CharacterClass -> PAREN_OPEN
reducerStates[180823] = 3; // 'state 205' -> CharacterClass -> PAREN_CLOSE
reducerStates[197591] = 3; // 'state 205' -> CharacterClass -> QUANTIFIER
reducerStates[214359] = 3; // 'state 205' -> CharacterClass -> BRACKET_OPEN
reducerStates[247895] = 3; // 'state 205' -> CharacterClass -> @par-gen.EOF
reducerStates[13208] = 2; // 'state 206' -> CharacterClassCharacters -> CHARACTER
reducerStates[29976] = 2; // 'state 206' -> CharacterClassCharacters -> NUMBER
reducerStates[46744] = 2; // 'state 206' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[63512] = 2; // 'state 206' -> CharacterClassCharacters -> BACKSLASH
reducerStates[80280] = 2; // 'state 206' -> CharacterClassCharacters -> X
reducerStates[130584] = 2; // 'state 206' -> CharacterClassCharacters -> DOT
reducerStates[147352] = 2; // 'state 206' -> CharacterClassCharacters -> UNION
reducerStates[164120] = 2; // 'state 206' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[180888] = 2; // 'state 206' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[197656] = 2; // 'state 206' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[231192] = 2; // 'state 206' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[13401] = 2; // 'state 209' -> CharacterClassCharacter -> CHARACTER
reducerStates[30169] = 2; // 'state 209' -> CharacterClassCharacter -> NUMBER
reducerStates[46937] = 2; // 'state 209' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[63705] = 2; // 'state 209' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80473] = 2; // 'state 209' -> CharacterClassCharacter -> X
reducerStates[130777] = 2; // 'state 209' -> CharacterClassCharacter -> DOT
reducerStates[147545] = 2; // 'state 209' -> CharacterClassCharacter -> UNION
reducerStates[164313] = 2; // 'state 209' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[181081] = 2; // 'state 209' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[197849] = 2; // 'state 209' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[231385] = 2; // 'state 209' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[13465] = 2; // 'state 210' -> CharacterClassCharacter -> CHARACTER
reducerStates[30233] = 2; // 'state 210' -> CharacterClassCharacter -> NUMBER
reducerStates[47001] = 2; // 'state 210' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[63769] = 2; // 'state 210' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80537] = 2; // 'state 210' -> CharacterClassCharacter -> X
reducerStates[130841] = 2; // 'state 210' -> CharacterClassCharacter -> DOT
reducerStates[147609] = 2; // 'state 210' -> CharacterClassCharacter -> UNION
reducerStates[164377] = 2; // 'state 210' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[181145] = 2; // 'state 210' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[197913] = 2; // 'state 210' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[231449] = 2; // 'state 210' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[13529] = 2; // 'state 211' -> CharacterClassCharacter -> CHARACTER
reducerStates[30297] = 2; // 'state 211' -> CharacterClassCharacter -> NUMBER
reducerStates[47065] = 2; // 'state 211' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[63833] = 2; // 'state 211' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80601] = 2; // 'state 211' -> CharacterClassCharacter -> X
reducerStates[130905] = 2; // 'state 211' -> CharacterClassCharacter -> DOT
reducerStates[147673] = 2; // 'state 211' -> CharacterClassCharacter -> UNION
reducerStates[164441] = 2; // 'state 211' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[181209] = 2; // 'state 211' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[197977] = 2; // 'state 211' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[231513] = 2; // 'state 211' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[13593] = 2; // 'state 212' -> CharacterClassCharacter -> CHARACTER
reducerStates[30361] = 2; // 'state 212' -> CharacterClassCharacter -> NUMBER
reducerStates[47129] = 2; // 'state 212' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[63897] = 2; // 'state 212' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80665] = 2; // 'state 212' -> CharacterClassCharacter -> X
reducerStates[130969] = 2; // 'state 212' -> CharacterClassCharacter -> DOT
reducerStates[147737] = 2; // 'state 212' -> CharacterClassCharacter -> UNION
reducerStates[164505] = 2; // 'state 212' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[181273] = 2; // 'state 212' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[198041] = 2; // 'state 212' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[231577] = 2; // 'state 212' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[13657] = 2; // 'state 213' -> CharacterClassCharacter -> CHARACTER
reducerStates[30425] = 2; // 'state 213' -> CharacterClassCharacter -> NUMBER
reducerStates[47193] = 2; // 'state 213' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[63961] = 2; // 'state 213' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80729] = 2; // 'state 213' -> CharacterClassCharacter -> X
reducerStates[131033] = 2; // 'state 213' -> CharacterClassCharacter -> DOT
reducerStates[147801] = 2; // 'state 213' -> CharacterClassCharacter -> UNION
reducerStates[164569] = 2; // 'state 213' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[181337] = 2; // 'state 213' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[198105] = 2; // 'state 213' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[231641] = 2; // 'state 213' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[13721] = 2; // 'state 214' -> CharacterClassCharacter -> CHARACTER
reducerStates[30489] = 2; // 'state 214' -> CharacterClassCharacter -> NUMBER
reducerStates[47257] = 2; // 'state 214' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[64025] = 2; // 'state 214' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80793] = 2; // 'state 214' -> CharacterClassCharacter -> X
reducerStates[131097] = 2; // 'state 214' -> CharacterClassCharacter -> DOT
reducerStates[147865] = 2; // 'state 214' -> CharacterClassCharacter -> UNION
reducerStates[164633] = 2; // 'state 214' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[181401] = 2; // 'state 214' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[198169] = 2; // 'state 214' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[231705] = 2; // 'state 214' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[13851] = 4; // 'state 216' -> Character -> CHARACTER
reducerStates[30619] = 4; // 'state 216' -> Character -> NUMBER
reducerStates[47387] = 4; // 'state 216' -> Character -> CONTROL_CHARACTER
reducerStates[64155] = 4; // 'state 216' -> Character -> BACKSLASH
reducerStates[80923] = 4; // 'state 216' -> Character -> X
reducerStates[97691] = 4; // 'state 216' -> Character -> CARET
reducerStates[114459] = 4; // 'state 216' -> Character -> DASH
reducerStates[147995] = 4; // 'state 216' -> Character -> UNION
reducerStates[164763] = 4; // 'state 216' -> Character -> PAREN_OPEN
reducerStates[181531] = 4; // 'state 216' -> Character -> PAREN_CLOSE
reducerStates[198299] = 4; // 'state 216' -> Character -> QUANTIFIER
reducerStates[215067] = 4; // 'state 216' -> Character -> BRACKET_OPEN
reducerStates[248603] = 4; // 'state 216' -> Character -> @par-gen.EOF
reducerStates[13911] = 3; // 'state 217' -> CharacterClass -> CHARACTER
reducerStates[30679] = 3; // 'state 217' -> CharacterClass -> NUMBER
reducerStates[47447] = 3; // 'state 217' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[64215] = 3; // 'state 217' -> CharacterClass -> BACKSLASH
reducerStates[80983] = 3; // 'state 217' -> CharacterClass -> X
reducerStates[97751] = 3; // 'state 217' -> CharacterClass -> CARET
reducerStates[114519] = 3; // 'state 217' -> CharacterClass -> DASH
reducerStates[148055] = 3; // 'state 217' -> CharacterClass -> UNION
reducerStates[164823] = 3; // 'state 217' -> CharacterClass -> PAREN_OPEN
reducerStates[181591] = 3; // 'state 217' -> CharacterClass -> PAREN_CLOSE
reducerStates[198359] = 3; // 'state 217' -> CharacterClass -> QUANTIFIER
reducerStates[215127] = 3; // 'state 217' -> CharacterClass -> BRACKET_OPEN
reducerStates[248663] = 3; // 'state 217' -> CharacterClass -> @par-gen.EOF
reducerStates[13976] = 2; // 'state 218' -> CharacterClassCharacters -> CHARACTER
reducerStates[30744] = 2; // 'state 218' -> CharacterClassCharacters -> NUMBER
reducerStates[47512] = 2; // 'state 218' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[64280] = 2; // 'state 218' -> CharacterClassCharacters -> BACKSLASH
reducerStates[81048] = 2; // 'state 218' -> CharacterClassCharacters -> X
reducerStates[131352] = 2; // 'state 218' -> CharacterClassCharacters -> DOT
reducerStates[148120] = 2; // 'state 218' -> CharacterClassCharacters -> UNION
reducerStates[164888] = 2; // 'state 218' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[181656] = 2; // 'state 218' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[198424] = 2; // 'state 218' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[231960] = 2; // 'state 218' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[14169] = 2; // 'state 221' -> CharacterClassCharacter -> CHARACTER
reducerStates[30937] = 2; // 'state 221' -> CharacterClassCharacter -> NUMBER
reducerStates[47705] = 2; // 'state 221' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[64473] = 2; // 'state 221' -> CharacterClassCharacter -> BACKSLASH
reducerStates[81241] = 2; // 'state 221' -> CharacterClassCharacter -> X
reducerStates[131545] = 2; // 'state 221' -> CharacterClassCharacter -> DOT
reducerStates[148313] = 2; // 'state 221' -> CharacterClassCharacter -> UNION
reducerStates[165081] = 2; // 'state 221' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[181849] = 2; // 'state 221' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[198617] = 2; // 'state 221' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[232153] = 2; // 'state 221' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[14233] = 2; // 'state 222' -> CharacterClassCharacter -> CHARACTER
reducerStates[31001] = 2; // 'state 222' -> CharacterClassCharacter -> NUMBER
reducerStates[47769] = 2; // 'state 222' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[64537] = 2; // 'state 222' -> CharacterClassCharacter -> BACKSLASH
reducerStates[81305] = 2; // 'state 222' -> CharacterClassCharacter -> X
reducerStates[131609] = 2; // 'state 222' -> CharacterClassCharacter -> DOT
reducerStates[148377] = 2; // 'state 222' -> CharacterClassCharacter -> UNION
reducerStates[165145] = 2; // 'state 222' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[181913] = 2; // 'state 222' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[198681] = 2; // 'state 222' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[232217] = 2; // 'state 222' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[14297] = 2; // 'state 223' -> CharacterClassCharacter -> CHARACTER
reducerStates[31065] = 2; // 'state 223' -> CharacterClassCharacter -> NUMBER
reducerStates[47833] = 2; // 'state 223' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[64601] = 2; // 'state 223' -> CharacterClassCharacter -> BACKSLASH
reducerStates[81369] = 2; // 'state 223' -> CharacterClassCharacter -> X
reducerStates[131673] = 2; // 'state 223' -> CharacterClassCharacter -> DOT
reducerStates[148441] = 2; // 'state 223' -> CharacterClassCharacter -> UNION
reducerStates[165209] = 2; // 'state 223' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[181977] = 2; // 'state 223' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[198745] = 2; // 'state 223' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[232281] = 2; // 'state 223' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[14361] = 2; // 'state 224' -> CharacterClassCharacter -> CHARACTER
reducerStates[31129] = 2; // 'state 224' -> CharacterClassCharacter -> NUMBER
reducerStates[47897] = 2; // 'state 224' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[64665] = 2; // 'state 224' -> CharacterClassCharacter -> BACKSLASH
reducerStates[81433] = 2; // 'state 224' -> CharacterClassCharacter -> X
reducerStates[131737] = 2; // 'state 224' -> CharacterClassCharacter -> DOT
reducerStates[148505] = 2; // 'state 224' -> CharacterClassCharacter -> UNION
reducerStates[165273] = 2; // 'state 224' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[182041] = 2; // 'state 224' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[198809] = 2; // 'state 224' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[232345] = 2; // 'state 224' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[14425] = 2; // 'state 225' -> CharacterClassCharacter -> CHARACTER
reducerStates[31193] = 2; // 'state 225' -> CharacterClassCharacter -> NUMBER
reducerStates[47961] = 2; // 'state 225' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[64729] = 2; // 'state 225' -> CharacterClassCharacter -> BACKSLASH
reducerStates[81497] = 2; // 'state 225' -> CharacterClassCharacter -> X
reducerStates[131801] = 2; // 'state 225' -> CharacterClassCharacter -> DOT
reducerStates[148569] = 2; // 'state 225' -> CharacterClassCharacter -> UNION
reducerStates[165337] = 2; // 'state 225' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[182105] = 2; // 'state 225' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[198873] = 2; // 'state 225' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[232409] = 2; // 'state 225' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[14489] = 2; // 'state 226' -> CharacterClassCharacter -> CHARACTER
reducerStates[31257] = 2; // 'state 226' -> CharacterClassCharacter -> NUMBER
reducerStates[48025] = 2; // 'state 226' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[64793] = 2; // 'state 226' -> CharacterClassCharacter -> BACKSLASH
reducerStates[81561] = 2; // 'state 226' -> CharacterClassCharacter -> X
reducerStates[131865] = 2; // 'state 226' -> CharacterClassCharacter -> DOT
reducerStates[148633] = 2; // 'state 226' -> CharacterClassCharacter -> UNION
reducerStates[165401] = 2; // 'state 226' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[182169] = 2; // 'state 226' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[198937] = 2; // 'state 226' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[232473] = 2; // 'state 226' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[14745] = 2; // 'state 230' -> CharacterClassCharacter -> CHARACTER
reducerStates[31513] = 2; // 'state 230' -> CharacterClassCharacter -> NUMBER
reducerStates[48281] = 2; // 'state 230' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[65049] = 2; // 'state 230' -> CharacterClassCharacter -> BACKSLASH
reducerStates[81817] = 2; // 'state 230' -> CharacterClassCharacter -> X
reducerStates[132121] = 2; // 'state 230' -> CharacterClassCharacter -> DOT
reducerStates[148889] = 2; // 'state 230' -> CharacterClassCharacter -> UNION
reducerStates[165657] = 2; // 'state 230' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[182425] = 2; // 'state 230' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[199193] = 2; // 'state 230' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[232729] = 2; // 'state 230' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[14809] = 2; // 'state 231' -> CharacterClassCharacter -> CHARACTER
reducerStates[31577] = 2; // 'state 231' -> CharacterClassCharacter -> NUMBER
reducerStates[48345] = 2; // 'state 231' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[65113] = 2; // 'state 231' -> CharacterClassCharacter -> BACKSLASH
reducerStates[81881] = 2; // 'state 231' -> CharacterClassCharacter -> X
reducerStates[132185] = 2; // 'state 231' -> CharacterClassCharacter -> DOT
reducerStates[148953] = 2; // 'state 231' -> CharacterClassCharacter -> UNION
reducerStates[165721] = 2; // 'state 231' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[182489] = 2; // 'state 231' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[199257] = 2; // 'state 231' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[232793] = 2; // 'state 231' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[14873] = 2; // 'state 232' -> CharacterClassCharacter -> CHARACTER
reducerStates[31641] = 2; // 'state 232' -> CharacterClassCharacter -> NUMBER
reducerStates[48409] = 2; // 'state 232' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[65177] = 2; // 'state 232' -> CharacterClassCharacter -> BACKSLASH
reducerStates[81945] = 2; // 'state 232' -> CharacterClassCharacter -> X
reducerStates[132249] = 2; // 'state 232' -> CharacterClassCharacter -> DOT
reducerStates[149017] = 2; // 'state 232' -> CharacterClassCharacter -> UNION
reducerStates[165785] = 2; // 'state 232' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[182553] = 2; // 'state 232' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[199321] = 2; // 'state 232' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[232857] = 2; // 'state 232' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[14937] = 2; // 'state 233' -> CharacterClassCharacter -> CHARACTER
reducerStates[31705] = 2; // 'state 233' -> CharacterClassCharacter -> NUMBER
reducerStates[48473] = 2; // 'state 233' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[65241] = 2; // 'state 233' -> CharacterClassCharacter -> BACKSLASH
reducerStates[82009] = 2; // 'state 233' -> CharacterClassCharacter -> X
reducerStates[132313] = 2; // 'state 233' -> CharacterClassCharacter -> DOT
reducerStates[149081] = 2; // 'state 233' -> CharacterClassCharacter -> UNION
reducerStates[165849] = 2; // 'state 233' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[182617] = 2; // 'state 233' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[199385] = 2; // 'state 233' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[232921] = 2; // 'state 233' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[15001] = 2; // 'state 234' -> CharacterClassCharacter -> CHARACTER
reducerStates[31769] = 2; // 'state 234' -> CharacterClassCharacter -> NUMBER
reducerStates[48537] = 2; // 'state 234' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[65305] = 2; // 'state 234' -> CharacterClassCharacter -> BACKSLASH
reducerStates[82073] = 2; // 'state 234' -> CharacterClassCharacter -> X
reducerStates[132377] = 2; // 'state 234' -> CharacterClassCharacter -> DOT
reducerStates[149145] = 2; // 'state 234' -> CharacterClassCharacter -> UNION
reducerStates[165913] = 2; // 'state 234' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[182681] = 2; // 'state 234' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[199449] = 2; // 'state 234' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[232985] = 2; // 'state 234' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[15065] = 2; // 'state 235' -> CharacterClassCharacter -> CHARACTER
reducerStates[31833] = 2; // 'state 235' -> CharacterClassCharacter -> NUMBER
reducerStates[48601] = 2; // 'state 235' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[65369] = 2; // 'state 235' -> CharacterClassCharacter -> BACKSLASH
reducerStates[82137] = 2; // 'state 235' -> CharacterClassCharacter -> X
reducerStates[132441] = 2; // 'state 235' -> CharacterClassCharacter -> DOT
reducerStates[149209] = 2; // 'state 235' -> CharacterClassCharacter -> UNION
reducerStates[165977] = 2; // 'state 235' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[182745] = 2; // 'state 235' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[199513] = 2; // 'state 235' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[233049] = 2; // 'state 235' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[15130] = 3; // 'state 236' -> CharacterClassRange -> CHARACTER
reducerStates[31898] = 3; // 'state 236' -> CharacterClassRange -> NUMBER
reducerStates[48666] = 3; // 'state 236' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[65434] = 3; // 'state 236' -> CharacterClassRange -> BACKSLASH
reducerStates[82202] = 3; // 'state 236' -> CharacterClassRange -> X
reducerStates[132506] = 3; // 'state 236' -> CharacterClassRange -> DOT
reducerStates[149274] = 3; // 'state 236' -> CharacterClassRange -> UNION
reducerStates[166042] = 3; // 'state 236' -> CharacterClassRange -> PAREN_OPEN
reducerStates[182810] = 3; // 'state 236' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[199578] = 3; // 'state 236' -> CharacterClassRange -> QUANTIFIER
reducerStates[233114] = 3; // 'state 236' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[15194] = 3; // 'state 237' -> CharacterClassRange -> CHARACTER
reducerStates[31962] = 3; // 'state 237' -> CharacterClassRange -> NUMBER
reducerStates[48730] = 3; // 'state 237' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[65498] = 3; // 'state 237' -> CharacterClassRange -> BACKSLASH
reducerStates[82266] = 3; // 'state 237' -> CharacterClassRange -> X
reducerStates[132570] = 3; // 'state 237' -> CharacterClassRange -> DOT
reducerStates[149338] = 3; // 'state 237' -> CharacterClassRange -> UNION
reducerStates[166106] = 3; // 'state 237' -> CharacterClassRange -> PAREN_OPEN
reducerStates[182874] = 3; // 'state 237' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[199642] = 3; // 'state 237' -> CharacterClassRange -> QUANTIFIER
reducerStates[233178] = 3; // 'state 237' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[15258] = 3; // 'state 238' -> CharacterClassRange -> CHARACTER
reducerStates[32026] = 3; // 'state 238' -> CharacterClassRange -> NUMBER
reducerStates[48794] = 3; // 'state 238' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[65562] = 3; // 'state 238' -> CharacterClassRange -> BACKSLASH
reducerStates[82330] = 3; // 'state 238' -> CharacterClassRange -> X
reducerStates[132634] = 3; // 'state 238' -> CharacterClassRange -> DOT
reducerStates[149402] = 3; // 'state 238' -> CharacterClassRange -> UNION
reducerStates[166170] = 3; // 'state 238' -> CharacterClassRange -> PAREN_OPEN
reducerStates[182938] = 3; // 'state 238' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[199706] = 3; // 'state 238' -> CharacterClassRange -> QUANTIFIER
reducerStates[233242] = 3; // 'state 238' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[15322] = 3; // 'state 239' -> CharacterClassRange -> CHARACTER
reducerStates[32090] = 3; // 'state 239' -> CharacterClassRange -> NUMBER
reducerStates[48858] = 3; // 'state 239' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[65626] = 3; // 'state 239' -> CharacterClassRange -> BACKSLASH
reducerStates[82394] = 3; // 'state 239' -> CharacterClassRange -> X
reducerStates[132698] = 3; // 'state 239' -> CharacterClassRange -> DOT
reducerStates[149466] = 3; // 'state 239' -> CharacterClassRange -> UNION
reducerStates[166234] = 3; // 'state 239' -> CharacterClassRange -> PAREN_OPEN
reducerStates[183002] = 3; // 'state 239' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[199770] = 3; // 'state 239' -> CharacterClassRange -> QUANTIFIER
reducerStates[233306] = 3; // 'state 239' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[15383] = 4; // 'state 240' -> CharacterClass -> CHARACTER
reducerStates[32151] = 4; // 'state 240' -> CharacterClass -> NUMBER
reducerStates[48919] = 4; // 'state 240' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[65687] = 4; // 'state 240' -> CharacterClass -> BACKSLASH
reducerStates[82455] = 4; // 'state 240' -> CharacterClass -> X
reducerStates[99223] = 4; // 'state 240' -> CharacterClass -> CARET
reducerStates[115991] = 4; // 'state 240' -> CharacterClass -> DASH
reducerStates[149527] = 4; // 'state 240' -> CharacterClass -> UNION
reducerStates[166295] = 4; // 'state 240' -> CharacterClass -> PAREN_OPEN
reducerStates[183063] = 4; // 'state 240' -> CharacterClass -> PAREN_CLOSE
reducerStates[199831] = 4; // 'state 240' -> CharacterClass -> QUANTIFIER
reducerStates[216599] = 4; // 'state 240' -> CharacterClass -> BRACKET_OPEN
reducerStates[250135] = 4; // 'state 240' -> CharacterClass -> @par-gen.EOF
reducerStates[15451] = 4; // 'state 241' -> Character -> CHARACTER
reducerStates[32219] = 4; // 'state 241' -> Character -> NUMBER
reducerStates[48987] = 4; // 'state 241' -> Character -> CONTROL_CHARACTER
reducerStates[65755] = 4; // 'state 241' -> Character -> BACKSLASH
reducerStates[82523] = 4; // 'state 241' -> Character -> X
reducerStates[99291] = 4; // 'state 241' -> Character -> CARET
reducerStates[116059] = 4; // 'state 241' -> Character -> DASH
reducerStates[149595] = 4; // 'state 241' -> Character -> UNION
reducerStates[166363] = 4; // 'state 241' -> Character -> PAREN_OPEN
reducerStates[183131] = 4; // 'state 241' -> Character -> PAREN_CLOSE
reducerStates[199899] = 4; // 'state 241' -> Character -> QUANTIFIER
reducerStates[216667] = 4; // 'state 241' -> Character -> BRACKET_OPEN
reducerStates[250203] = 4; // 'state 241' -> Character -> @par-gen.EOF
reducerStates[15514] = 3; // 'state 242' -> CharacterClassRange -> CHARACTER
reducerStates[32282] = 3; // 'state 242' -> CharacterClassRange -> NUMBER
reducerStates[49050] = 3; // 'state 242' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[65818] = 3; // 'state 242' -> CharacterClassRange -> BACKSLASH
reducerStates[82586] = 3; // 'state 242' -> CharacterClassRange -> X
reducerStates[132890] = 3; // 'state 242' -> CharacterClassRange -> DOT
reducerStates[149658] = 3; // 'state 242' -> CharacterClassRange -> UNION
reducerStates[166426] = 3; // 'state 242' -> CharacterClassRange -> PAREN_OPEN
reducerStates[183194] = 3; // 'state 242' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[199962] = 3; // 'state 242' -> CharacterClassRange -> QUANTIFIER
reducerStates[233498] = 3; // 'state 242' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[15578] = 3; // 'state 243' -> CharacterClassRange -> CHARACTER
reducerStates[32346] = 3; // 'state 243' -> CharacterClassRange -> NUMBER
reducerStates[49114] = 3; // 'state 243' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[65882] = 3; // 'state 243' -> CharacterClassRange -> BACKSLASH
reducerStates[82650] = 3; // 'state 243' -> CharacterClassRange -> X
reducerStates[132954] = 3; // 'state 243' -> CharacterClassRange -> DOT
reducerStates[149722] = 3; // 'state 243' -> CharacterClassRange -> UNION
reducerStates[166490] = 3; // 'state 243' -> CharacterClassRange -> PAREN_OPEN
reducerStates[183258] = 3; // 'state 243' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[200026] = 3; // 'state 243' -> CharacterClassRange -> QUANTIFIER
reducerStates[233562] = 3; // 'state 243' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[15642] = 3; // 'state 244' -> CharacterClassRange -> CHARACTER
reducerStates[32410] = 3; // 'state 244' -> CharacterClassRange -> NUMBER
reducerStates[49178] = 3; // 'state 244' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[65946] = 3; // 'state 244' -> CharacterClassRange -> BACKSLASH
reducerStates[82714] = 3; // 'state 244' -> CharacterClassRange -> X
reducerStates[133018] = 3; // 'state 244' -> CharacterClassRange -> DOT
reducerStates[149786] = 3; // 'state 244' -> CharacterClassRange -> UNION
reducerStates[166554] = 3; // 'state 244' -> CharacterClassRange -> PAREN_OPEN
reducerStates[183322] = 3; // 'state 244' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[200090] = 3; // 'state 244' -> CharacterClassRange -> QUANTIFIER
reducerStates[233626] = 3; // 'state 244' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[15706] = 3; // 'state 245' -> CharacterClassRange -> CHARACTER
reducerStates[32474] = 3; // 'state 245' -> CharacterClassRange -> NUMBER
reducerStates[49242] = 3; // 'state 245' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[66010] = 3; // 'state 245' -> CharacterClassRange -> BACKSLASH
reducerStates[82778] = 3; // 'state 245' -> CharacterClassRange -> X
reducerStates[133082] = 3; // 'state 245' -> CharacterClassRange -> DOT
reducerStates[149850] = 3; // 'state 245' -> CharacterClassRange -> UNION
reducerStates[166618] = 3; // 'state 245' -> CharacterClassRange -> PAREN_OPEN
reducerStates[183386] = 3; // 'state 245' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[200154] = 3; // 'state 245' -> CharacterClassRange -> QUANTIFIER
reducerStates[233690] = 3; // 'state 245' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[15767] = 4; // 'state 246' -> CharacterClass -> CHARACTER
reducerStates[32535] = 4; // 'state 246' -> CharacterClass -> NUMBER
reducerStates[49303] = 4; // 'state 246' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[66071] = 4; // 'state 246' -> CharacterClass -> BACKSLASH
reducerStates[82839] = 4; // 'state 246' -> CharacterClass -> X
reducerStates[99607] = 4; // 'state 246' -> CharacterClass -> CARET
reducerStates[116375] = 4; // 'state 246' -> CharacterClass -> DASH
reducerStates[149911] = 4; // 'state 246' -> CharacterClass -> UNION
reducerStates[166679] = 4; // 'state 246' -> CharacterClass -> PAREN_OPEN
reducerStates[183447] = 4; // 'state 246' -> CharacterClass -> PAREN_CLOSE
reducerStates[200215] = 4; // 'state 246' -> CharacterClass -> QUANTIFIER
reducerStates[216983] = 4; // 'state 246' -> CharacterClass -> BRACKET_OPEN
reducerStates[250519] = 4; // 'state 246' -> CharacterClass -> @par-gen.EOF
reducerStates[15835] = 4; // 'state 247' -> Character -> CHARACTER
reducerStates[32603] = 4; // 'state 247' -> Character -> NUMBER
reducerStates[49371] = 4; // 'state 247' -> Character -> CONTROL_CHARACTER
reducerStates[66139] = 4; // 'state 247' -> Character -> BACKSLASH
reducerStates[82907] = 4; // 'state 247' -> Character -> X
reducerStates[99675] = 4; // 'state 247' -> Character -> CARET
reducerStates[116443] = 4; // 'state 247' -> Character -> DASH
reducerStates[149979] = 4; // 'state 247' -> Character -> UNION
reducerStates[166747] = 4; // 'state 247' -> Character -> PAREN_OPEN
reducerStates[183515] = 4; // 'state 247' -> Character -> PAREN_CLOSE
reducerStates[200283] = 4; // 'state 247' -> Character -> QUANTIFIER
reducerStates[217051] = 4; // 'state 247' -> Character -> BRACKET_OPEN
reducerStates[250587] = 4; // 'state 247' -> Character -> @par-gen.EOF
reducerStates[15898] = 3; // 'state 248' -> CharacterClassRange -> CHARACTER
reducerStates[32666] = 3; // 'state 248' -> CharacterClassRange -> NUMBER
reducerStates[49434] = 3; // 'state 248' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[66202] = 3; // 'state 248' -> CharacterClassRange -> BACKSLASH
reducerStates[82970] = 3; // 'state 248' -> CharacterClassRange -> X
reducerStates[133274] = 3; // 'state 248' -> CharacterClassRange -> DOT
reducerStates[150042] = 3; // 'state 248' -> CharacterClassRange -> UNION
reducerStates[166810] = 3; // 'state 248' -> CharacterClassRange -> PAREN_OPEN
reducerStates[183578] = 3; // 'state 248' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[200346] = 3; // 'state 248' -> CharacterClassRange -> QUANTIFIER
reducerStates[233882] = 3; // 'state 248' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[15962] = 3; // 'state 249' -> CharacterClassRange -> CHARACTER
reducerStates[32730] = 3; // 'state 249' -> CharacterClassRange -> NUMBER
reducerStates[49498] = 3; // 'state 249' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[66266] = 3; // 'state 249' -> CharacterClassRange -> BACKSLASH
reducerStates[83034] = 3; // 'state 249' -> CharacterClassRange -> X
reducerStates[133338] = 3; // 'state 249' -> CharacterClassRange -> DOT
reducerStates[150106] = 3; // 'state 249' -> CharacterClassRange -> UNION
reducerStates[166874] = 3; // 'state 249' -> CharacterClassRange -> PAREN_OPEN
reducerStates[183642] = 3; // 'state 249' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[200410] = 3; // 'state 249' -> CharacterClassRange -> QUANTIFIER
reducerStates[233946] = 3; // 'state 249' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[16026] = 3; // 'state 250' -> CharacterClassRange -> CHARACTER
reducerStates[32794] = 3; // 'state 250' -> CharacterClassRange -> NUMBER
reducerStates[49562] = 3; // 'state 250' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[66330] = 3; // 'state 250' -> CharacterClassRange -> BACKSLASH
reducerStates[83098] = 3; // 'state 250' -> CharacterClassRange -> X
reducerStates[133402] = 3; // 'state 250' -> CharacterClassRange -> DOT
reducerStates[150170] = 3; // 'state 250' -> CharacterClassRange -> UNION
reducerStates[166938] = 3; // 'state 250' -> CharacterClassRange -> PAREN_OPEN
reducerStates[183706] = 3; // 'state 250' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[200474] = 3; // 'state 250' -> CharacterClassRange -> QUANTIFIER
reducerStates[234010] = 3; // 'state 250' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[16090] = 3; // 'state 251' -> CharacterClassRange -> CHARACTER
reducerStates[32858] = 3; // 'state 251' -> CharacterClassRange -> NUMBER
reducerStates[49626] = 3; // 'state 251' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[66394] = 3; // 'state 251' -> CharacterClassRange -> BACKSLASH
reducerStates[83162] = 3; // 'state 251' -> CharacterClassRange -> X
reducerStates[133466] = 3; // 'state 251' -> CharacterClassRange -> DOT
reducerStates[150234] = 3; // 'state 251' -> CharacterClassRange -> UNION
reducerStates[167002] = 3; // 'state 251' -> CharacterClassRange -> PAREN_OPEN
reducerStates[183770] = 3; // 'state 251' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[200538] = 3; // 'state 251' -> CharacterClassRange -> QUANTIFIER
reducerStates[234074] = 3; // 'state 251' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[16151] = 4; // 'state 252' -> CharacterClass -> CHARACTER
reducerStates[32919] = 4; // 'state 252' -> CharacterClass -> NUMBER
reducerStates[49687] = 4; // 'state 252' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[66455] = 4; // 'state 252' -> CharacterClass -> BACKSLASH
reducerStates[83223] = 4; // 'state 252' -> CharacterClass -> X
reducerStates[99991] = 4; // 'state 252' -> CharacterClass -> CARET
reducerStates[116759] = 4; // 'state 252' -> CharacterClass -> DASH
reducerStates[150295] = 4; // 'state 252' -> CharacterClass -> UNION
reducerStates[167063] = 4; // 'state 252' -> CharacterClass -> PAREN_OPEN
reducerStates[183831] = 4; // 'state 252' -> CharacterClass -> PAREN_CLOSE
reducerStates[200599] = 4; // 'state 252' -> CharacterClass -> QUANTIFIER
reducerStates[217367] = 4; // 'state 252' -> CharacterClass -> BRACKET_OPEN
reducerStates[250903] = 4; // 'state 252' -> CharacterClass -> @par-gen.EOF
reducerStates[16218] = 3; // 'state 253' -> CharacterClassRange -> CHARACTER
reducerStates[32986] = 3; // 'state 253' -> CharacterClassRange -> NUMBER
reducerStates[49754] = 3; // 'state 253' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[66522] = 3; // 'state 253' -> CharacterClassRange -> BACKSLASH
reducerStates[83290] = 3; // 'state 253' -> CharacterClassRange -> X
reducerStates[133594] = 3; // 'state 253' -> CharacterClassRange -> DOT
reducerStates[150362] = 3; // 'state 253' -> CharacterClassRange -> UNION
reducerStates[167130] = 3; // 'state 253' -> CharacterClassRange -> PAREN_OPEN
reducerStates[183898] = 3; // 'state 253' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[200666] = 3; // 'state 253' -> CharacterClassRange -> QUANTIFIER
reducerStates[234202] = 3; // 'state 253' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[16282] = 3; // 'state 254' -> CharacterClassRange -> CHARACTER
reducerStates[33050] = 3; // 'state 254' -> CharacterClassRange -> NUMBER
reducerStates[49818] = 3; // 'state 254' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[66586] = 3; // 'state 254' -> CharacterClassRange -> BACKSLASH
reducerStates[83354] = 3; // 'state 254' -> CharacterClassRange -> X
reducerStates[133658] = 3; // 'state 254' -> CharacterClassRange -> DOT
reducerStates[150426] = 3; // 'state 254' -> CharacterClassRange -> UNION
reducerStates[167194] = 3; // 'state 254' -> CharacterClassRange -> PAREN_OPEN
reducerStates[183962] = 3; // 'state 254' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[200730] = 3; // 'state 254' -> CharacterClassRange -> QUANTIFIER
reducerStates[234266] = 3; // 'state 254' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[16346] = 3; // 'state 255' -> CharacterClassRange -> CHARACTER
reducerStates[33114] = 3; // 'state 255' -> CharacterClassRange -> NUMBER
reducerStates[49882] = 3; // 'state 255' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[66650] = 3; // 'state 255' -> CharacterClassRange -> BACKSLASH
reducerStates[83418] = 3; // 'state 255' -> CharacterClassRange -> X
reducerStates[133722] = 3; // 'state 255' -> CharacterClassRange -> DOT
reducerStates[150490] = 3; // 'state 255' -> CharacterClassRange -> UNION
reducerStates[167258] = 3; // 'state 255' -> CharacterClassRange -> PAREN_OPEN
reducerStates[184026] = 3; // 'state 255' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[200794] = 3; // 'state 255' -> CharacterClassRange -> QUANTIFIER
reducerStates[234330] = 3; // 'state 255' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[16410] = 3; // 'state 256' -> CharacterClassRange -> CHARACTER
reducerStates[33178] = 3; // 'state 256' -> CharacterClassRange -> NUMBER
reducerStates[49946] = 3; // 'state 256' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[66714] = 3; // 'state 256' -> CharacterClassRange -> BACKSLASH
reducerStates[83482] = 3; // 'state 256' -> CharacterClassRange -> X
reducerStates[133786] = 3; // 'state 256' -> CharacterClassRange -> DOT
reducerStates[150554] = 3; // 'state 256' -> CharacterClassRange -> UNION
reducerStates[167322] = 3; // 'state 256' -> CharacterClassRange -> PAREN_OPEN
reducerStates[184090] = 3; // 'state 256' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[200858] = 3; // 'state 256' -> CharacterClassRange -> QUANTIFIER
reducerStates[234394] = 3; // 'state 256' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[16471] = 4; // 'state 257' -> CharacterClass -> CHARACTER
reducerStates[33239] = 4; // 'state 257' -> CharacterClass -> NUMBER
reducerStates[50007] = 4; // 'state 257' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[66775] = 4; // 'state 257' -> CharacterClass -> BACKSLASH
reducerStates[83543] = 4; // 'state 257' -> CharacterClass -> X
reducerStates[100311] = 4; // 'state 257' -> CharacterClass -> CARET
reducerStates[117079] = 4; // 'state 257' -> CharacterClass -> DASH
reducerStates[150615] = 4; // 'state 257' -> CharacterClass -> UNION
reducerStates[167383] = 4; // 'state 257' -> CharacterClass -> PAREN_OPEN
reducerStates[184151] = 4; // 'state 257' -> CharacterClass -> PAREN_CLOSE
reducerStates[200919] = 4; // 'state 257' -> CharacterClass -> QUANTIFIER
reducerStates[217687] = 4; // 'state 257' -> CharacterClass -> BRACKET_OPEN
reducerStates[251223] = 4; // 'state 257' -> CharacterClass -> @par-gen.EOF
reducerStates[16538] = 3; // 'state 258' -> CharacterClassRange -> CHARACTER
reducerStates[33306] = 3; // 'state 258' -> CharacterClassRange -> NUMBER
reducerStates[50074] = 3; // 'state 258' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[66842] = 3; // 'state 258' -> CharacterClassRange -> BACKSLASH
reducerStates[83610] = 3; // 'state 258' -> CharacterClassRange -> X
reducerStates[133914] = 3; // 'state 258' -> CharacterClassRange -> DOT
reducerStates[150682] = 3; // 'state 258' -> CharacterClassRange -> UNION
reducerStates[167450] = 3; // 'state 258' -> CharacterClassRange -> PAREN_OPEN
reducerStates[184218] = 3; // 'state 258' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[200986] = 3; // 'state 258' -> CharacterClassRange -> QUANTIFIER
reducerStates[234522] = 3; // 'state 258' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[16602] = 3; // 'state 259' -> CharacterClassRange -> CHARACTER
reducerStates[33370] = 3; // 'state 259' -> CharacterClassRange -> NUMBER
reducerStates[50138] = 3; // 'state 259' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[66906] = 3; // 'state 259' -> CharacterClassRange -> BACKSLASH
reducerStates[83674] = 3; // 'state 259' -> CharacterClassRange -> X
reducerStates[133978] = 3; // 'state 259' -> CharacterClassRange -> DOT
reducerStates[150746] = 3; // 'state 259' -> CharacterClassRange -> UNION
reducerStates[167514] = 3; // 'state 259' -> CharacterClassRange -> PAREN_OPEN
reducerStates[184282] = 3; // 'state 259' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[201050] = 3; // 'state 259' -> CharacterClassRange -> QUANTIFIER
reducerStates[234586] = 3; // 'state 259' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[16666] = 3; // 'state 260' -> CharacterClassRange -> CHARACTER
reducerStates[33434] = 3; // 'state 260' -> CharacterClassRange -> NUMBER
reducerStates[50202] = 3; // 'state 260' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[66970] = 3; // 'state 260' -> CharacterClassRange -> BACKSLASH
reducerStates[83738] = 3; // 'state 260' -> CharacterClassRange -> X
reducerStates[134042] = 3; // 'state 260' -> CharacterClassRange -> DOT
reducerStates[150810] = 3; // 'state 260' -> CharacterClassRange -> UNION
reducerStates[167578] = 3; // 'state 260' -> CharacterClassRange -> PAREN_OPEN
reducerStates[184346] = 3; // 'state 260' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[201114] = 3; // 'state 260' -> CharacterClassRange -> QUANTIFIER
reducerStates[234650] = 3; // 'state 260' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[16730] = 3; // 'state 261' -> CharacterClassRange -> CHARACTER
reducerStates[33498] = 3; // 'state 261' -> CharacterClassRange -> NUMBER
reducerStates[50266] = 3; // 'state 261' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[67034] = 3; // 'state 261' -> CharacterClassRange -> BACKSLASH
reducerStates[83802] = 3; // 'state 261' -> CharacterClassRange -> X
reducerStates[134106] = 3; // 'state 261' -> CharacterClassRange -> DOT
reducerStates[150874] = 3; // 'state 261' -> CharacterClassRange -> UNION
reducerStates[167642] = 3; // 'state 261' -> CharacterClassRange -> PAREN_OPEN
reducerStates[184410] = 3; // 'state 261' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[201178] = 3; // 'state 261' -> CharacterClassRange -> QUANTIFIER
reducerStates[234714] = 3; // 'state 261' -> CharacterClassRange -> BRACKET_CLOSE

const parserSymbols = [
  "CHARACTER", // 0
  "NUMBER", // 1
  "CONTROL_CHARACTER", // 2
  "BACKSLASH", // 3
  "X", // 4
  "CARET", // 5
  "DASH", // 6
  "DOT", // 7
  "UNION", // 8
  "PAREN_OPEN", // 9
  "PAREN_CLOSE", // 10
  "QUANTIFIER", // 11
  "BRACKET_OPEN", // 12
  "BRACKET_CLOSE", // 13
  "@par-gen.EOF", // 14
  "@par-gen.ERROR", // 15
  "S", // 16
  "RegExp", // 17
  "Expression", // 18
  "Union", // 19
  "Sequence", // 20
  "Atom", // 21
  "Group", // 22
  "CharacterClass", // 23
  "CharacterClassCharacters", // 24
  "CharacterClassCharacter", // 25
  "CharacterClassRange", // 26
  "Character", // 27
  "CharacterOrNumberOrX", // 28
  "EscapedCharacter", // 29
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
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 16'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 17'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 18'
  {
    op: 2, // done
    state: undefined,
    symbol: undefined,
  },
  // 'action 19'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // RegExp
  },
  // 'action 20'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 21'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Expression
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
    op: 0, // shift
    state: 29, // 'state 29'
    symbol: undefined,
  },
  // 'action 32'
  {
    op: 0, // shift
    state: 30, // 'state 30'
    symbol: undefined,
  },
  // 'action 33'
  {
    op: 0, // shift
    state: 31, // 'state 31'
    symbol: undefined,
  },
  // 'action 34'
  {
    op: 0, // shift
    state: 32, // 'state 32'
    symbol: undefined,
  },
  // 'action 35'
  {
    op: 0, // shift
    state: 33, // 'state 33'
    symbol: undefined,
  },
  // 'action 36'
  {
    op: 0, // shift
    state: 34, // 'state 34'
    symbol: undefined,
  },
  // 'action 37'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Expression
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
    op: 0, // shift
    state: 41, // 'state 41'
    symbol: undefined,
  },
  // 'action 45'
  {
    op: 0, // shift
    state: 42, // 'state 42'
    symbol: undefined,
  },
  // 'action 46'
  {
    op: 0, // shift
    state: 43, // 'state 43'
    symbol: undefined,
  },
  // 'action 47'
  {
    op: 0, // shift
    state: 44, // 'state 44'
    symbol: undefined,
  },
  // 'action 48'
  {
    op: 0, // shift
    state: 45, // 'state 45'
    symbol: undefined,
  },
  // 'action 49'
  {
    op: 0, // shift
    state: 46, // 'state 46'
    symbol: undefined,
  },
  // 'action 50'
  {
    op: 0, // shift
    state: 47, // 'state 47'
    symbol: undefined,
  },
  // 'action 51'
  {
    op: 0, // shift
    state: 48, // 'state 48'
    symbol: undefined,
  },
  // 'action 52'
  {
    op: 0, // shift
    state: 49, // 'state 49'
    symbol: undefined,
  },
  // 'action 53'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Expression
  },
  // 'action 54'
  {
    op: 0, // shift
    state: 50, // 'state 50'
    symbol: undefined,
  },
  // 'action 55'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 56'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 57'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 58'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 59'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 60'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 61'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 62'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 63'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 64'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 65'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 66'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 67'
  {
    op: 0, // shift
    state: 51, // 'state 51'
    symbol: undefined,
  },
  // 'action 68'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 69'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 70'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 71'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 72'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 73'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 74'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 75'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 76'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 77'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 78'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 79'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 80'
  {
    op: 0, // shift
    state: 52, // 'state 52'
    symbol: undefined,
  },
  // 'action 81'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 82'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 83'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 84'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 85'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 86'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 87'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 88'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 89'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 90'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 91'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 92'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 93'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 94'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 95'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 96'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 97'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 98'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 99'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 100'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 101'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 102'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 103'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 104'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 105'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 106'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 107'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 108'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 109'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 110'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 111'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 112'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 113'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 114'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 115'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 116'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 117'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 118'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 119'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 120'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 121'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 122'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 123'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 124'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 125'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 126'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 127'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 128'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 129'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 130'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 131'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 132'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 133'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 134'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 135'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 136'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 137'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 138'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 139'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 140'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 141'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 142'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 143'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 144'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 145'
  {
    op: 0, // shift
    state: 53, // 'state 53'
    symbol: undefined,
  },
  // 'action 146'
  {
    op: 0, // shift
    state: 54, // 'state 54'
    symbol: undefined,
  },
  // 'action 147'
  {
    op: 0, // shift
    state: 55, // 'state 55'
    symbol: undefined,
  },
  // 'action 148'
  {
    op: 0, // shift
    state: 56, // 'state 56'
    symbol: undefined,
  },
  // 'action 149'
  {
    op: 0, // shift
    state: 57, // 'state 57'
    symbol: undefined,
  },
  // 'action 150'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 151'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 152'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 153'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 154'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 155'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 156'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 157'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 158'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 159'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 160'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 161'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 162'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 163'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 164'
  {
    op: 0, // shift
    state: 67, // 'state 67'
    symbol: undefined,
  },
  // 'action 165'
  {
    op: 0, // shift
    state: 68, // 'state 68'
    symbol: undefined,
  },
  // 'action 166'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 167'
  {
    op: 0, // shift
    state: 70, // 'state 70'
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
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 170'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 171'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 172'
  {
    op: 0, // shift
    state: 71, // 'state 71'
    symbol: undefined,
  },
  // 'action 173'
  {
    op: 0, // shift
    state: 72, // 'state 72'
    symbol: undefined,
  },
  // 'action 174'
  {
    op: 0, // shift
    state: 73, // 'state 73'
    symbol: undefined,
  },
  // 'action 175'
  {
    op: 0, // shift
    state: 74, // 'state 74'
    symbol: undefined,
  },
  // 'action 176'
  {
    op: 0, // shift
    state: 75, // 'state 75'
    symbol: undefined,
  },
  // 'action 177'
  {
    op: 0, // shift
    state: 76, // 'state 76'
    symbol: undefined,
  },
  // 'action 178'
  {
    op: 0, // shift
    state: 77, // 'state 77'
    symbol: undefined,
  },
  // 'action 179'
  {
    op: 0, // shift
    state: 78, // 'state 78'
    symbol: undefined,
  },
  // 'action 180'
  {
    op: 0, // shift
    state: 79, // 'state 79'
    symbol: undefined,
  },
  // 'action 181'
  {
    op: 0, // shift
    state: 80, // 'state 80'
    symbol: undefined,
  },
  // 'action 182'
  {
    op: 0, // shift
    state: 81, // 'state 81'
    symbol: undefined,
  },
  // 'action 183'
  {
    op: 0, // shift
    state: 82, // 'state 82'
    symbol: undefined,
  },
  // 'action 184'
  {
    op: 0, // shift
    state: 83, // 'state 83'
    symbol: undefined,
  },
  // 'action 185'
  {
    op: 0, // shift
    state: 84, // 'state 84'
    symbol: undefined,
  },
  // 'action 186'
  {
    op: 0, // shift
    state: 85, // 'state 85'
    symbol: undefined,
  },
  // 'action 187'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 188'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 189'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 190'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 191'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 192'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 193'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 194'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 195'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 196'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 197'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 198'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 199'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 200'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 201'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 202'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 203'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 204'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 205'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 206'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 207'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 208'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 209'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 210'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 211'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 212'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 213'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 214'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 215'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 216'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 217'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 218'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 219'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 220'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 221'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 222'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 223'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 224'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 225'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 226'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 227'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 228'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 229'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 230'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 231'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
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
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 241'
  {
    op: 0, // shift
    state: 86, // 'state 86'
    symbol: undefined,
  },
  // 'action 242'
  {
    op: 0, // shift
    state: 87, // 'state 87'
    symbol: undefined,
  },
  // 'action 243'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 244'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 245'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 246'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 247'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 248'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 249'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 250'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 251'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 252'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 253'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 254'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 255'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 256'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 257'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 258'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 259'
  {
    op: 0, // shift
    state: 88, // 'state 88'
    symbol: undefined,
  },
  // 'action 260'
  {
    op: 0, // shift
    state: 89, // 'state 89'
    symbol: undefined,
  },
  // 'action 261'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 262'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 263'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 264'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 265'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 266'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 267'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 268'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 269'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 270'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 271'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 272'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 273'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 274'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 275'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 276'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 277'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 278'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 279'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 280'
  {
    op: 0, // shift
    state: 90, // 'state 90'
    symbol: undefined,
  },
  // 'action 281'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 282'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 283'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 284'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 285'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 286'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 287'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 288'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 289'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 290'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 291'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 292'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 293'
  {
    op: 0, // shift
    state: 91, // 'state 91'
    symbol: undefined,
  },
  // 'action 294'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 295'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 296'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 297'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 298'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 299'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 300'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 301'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 302'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 303'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 304'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 305'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 306'
  {
    op: 0, // shift
    state: 92, // 'state 92'
    symbol: undefined,
  },
  // 'action 307'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 308'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 309'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 310'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 311'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 312'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 313'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 314'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 315'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 316'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 317'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 318'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 319'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 320'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 321'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 322'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 323'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 324'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 325'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 326'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 327'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 328'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 329'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 330'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 331'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 332'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 333'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 334'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 335'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 336'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 337'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 338'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 339'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 340'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 341'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 342'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 343'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 344'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 345'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 346'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 347'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 348'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 349'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 350'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 351'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 352'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 353'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 354'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 355'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 356'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 357'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 358'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 359'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 360'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 361'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 362'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 363'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 364'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 365'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 366'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 367'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 368'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 369'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 370'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 371'
  {
    op: 0, // shift
    state: 93, // 'state 93'
    symbol: undefined,
  },
  // 'action 372'
  {
    op: 0, // shift
    state: 94, // 'state 94'
    symbol: undefined,
  },
  // 'action 373'
  {
    op: 0, // shift
    state: 95, // 'state 95'
    symbol: undefined,
  },
  // 'action 374'
  {
    op: 0, // shift
    state: 96, // 'state 96'
    symbol: undefined,
  },
  // 'action 375'
  {
    op: 0, // shift
    state: 97, // 'state 97'
    symbol: undefined,
  },
  // 'action 376'
  {
    op: 0, // shift
    state: 98, // 'state 98'
    symbol: undefined,
  },
  // 'action 377'
  {
    op: 0, // shift
    state: 99, // 'state 99'
    symbol: undefined,
  },
  // 'action 378'
  {
    op: 0, // shift
    state: 100, // 'state 100'
    symbol: undefined,
  },
  // 'action 379'
  {
    op: 0, // shift
    state: 101, // 'state 101'
    symbol: undefined,
  },
  // 'action 380'
  {
    op: 0, // shift
    state: 102, // 'state 102'
    symbol: undefined,
  },
  // 'action 381'
  {
    op: 0, // shift
    state: 103, // 'state 103'
    symbol: undefined,
  },
  // 'action 382'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 383'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 384'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 385'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 386'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 387'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 388'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 389'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 390'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 391'
  {
    op: 0, // shift
    state: 104, // 'state 104'
    symbol: undefined,
  },
  // 'action 392'
  {
    op: 0, // shift
    state: 105, // 'state 105'
    symbol: undefined,
  },
  // 'action 393'
  {
    op: 0, // shift
    state: 106, // 'state 106'
    symbol: undefined,
  },
  // 'action 394'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 395'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 396'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 397'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 398'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 399'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 400'
  {
    op: 0, // shift
    state: 107, // 'state 107'
    symbol: undefined,
  },
  // 'action 401'
  {
    op: 0, // shift
    state: 108, // 'state 108'
    symbol: undefined,
  },
  // 'action 402'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 403'
  {
    op: 0, // shift
    state: 109, // 'state 109'
    symbol: undefined,
  },
  // 'action 404'
  {
    op: 0, // shift
    state: 110, // 'state 110'
    symbol: undefined,
  },
  // 'action 405'
  {
    op: 0, // shift
    state: 111, // 'state 111'
    symbol: undefined,
  },
  // 'action 406'
  {
    op: 0, // shift
    state: 112, // 'state 112'
    symbol: undefined,
  },
  // 'action 407'
  {
    op: 0, // shift
    state: 113, // 'state 113'
    symbol: undefined,
  },
  // 'action 408'
  {
    op: 0, // shift
    state: 114, // 'state 114'
    symbol: undefined,
  },
  // 'action 409'
  {
    op: 0, // shift
    state: 115, // 'state 115'
    symbol: undefined,
  },
  // 'action 410'
  {
    op: 0, // shift
    state: 116, // 'state 116'
    symbol: undefined,
  },
  // 'action 411'
  {
    op: 0, // shift
    state: 117, // 'state 117'
    symbol: undefined,
  },
  // 'action 412'
  {
    op: 0, // shift
    state: 118, // 'state 118'
    symbol: undefined,
  },
  // 'action 413'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 414'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 415'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 416'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 417'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 418'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 419'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 420'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 421'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 422'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 423'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 424'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 425'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 426'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 427'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 428'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 429'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 430'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 431'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 432'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 433'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 434'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 435'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 436'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 437'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 438'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 439'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 440'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 441'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 442'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 443'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 444'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 445'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 446'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 447'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 448'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 449'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 450'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 451'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 452'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 453'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 454'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 455'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 456'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 457'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 458'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 459'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 460'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 461'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 462'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 463'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 464'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 465'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 466'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 467'
  {
    op: 0, // shift
    state: 119, // 'state 119'
    symbol: undefined,
  },
  // 'action 468'
  {
    op: 0, // shift
    state: 120, // 'state 120'
    symbol: undefined,
  },
  // 'action 469'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 470'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 471'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 472'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 473'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 474'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 475'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 476'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 477'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 478'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 479'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 480'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 481'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 482'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 483'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 484'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 485'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 486'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 487'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Sequence
  },
  // 'action 488'
  {
    op: 0, // shift
    state: 121, // 'state 121'
    symbol: undefined,
  },
  // 'action 489'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 490'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 491'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 492'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 493'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 494'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 495'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 496'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 497'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 498'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 499'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 500'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 501'
  {
    op: 0, // shift
    state: 122, // 'state 122'
    symbol: undefined,
  },
  // 'action 502'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 503'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 504'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 505'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 506'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 507'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 508'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 509'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 510'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 511'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 512'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 513'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 514'
  {
    op: 0, // shift
    state: 123, // 'state 123'
    symbol: undefined,
  },
  // 'action 515'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 516'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 517'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 518'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 519'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 520'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 521'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 522'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 523'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 524'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 525'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 526'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 527'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 528'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 529'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 530'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 531'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 532'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 533'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 534'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 535'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 536'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 537'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 538'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 539'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 540'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 541'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 542'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 543'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 544'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 545'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 546'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 547'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 548'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 549'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 550'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 551'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 552'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 553'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 554'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 555'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 556'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 557'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 558'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 559'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 560'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 561'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 562'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 563'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 564'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 565'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 566'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 567'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 568'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 569'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 570'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 571'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 572'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 573'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 574'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 575'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 576'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 577'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 578'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 579'
  {
    op: 0, // shift
    state: 124, // 'state 124'
    symbol: undefined,
  },
  // 'action 580'
  {
    op: 0, // shift
    state: 125, // 'state 125'
    symbol: undefined,
  },
  // 'action 581'
  {
    op: 0, // shift
    state: 126, // 'state 126'
    symbol: undefined,
  },
  // 'action 582'
  {
    op: 0, // shift
    state: 127, // 'state 127'
    symbol: undefined,
  },
  // 'action 583'
  {
    op: 0, // shift
    state: 128, // 'state 128'
    symbol: undefined,
  },
  // 'action 584'
  {
    op: 0, // shift
    state: 129, // 'state 129'
    symbol: undefined,
  },
  // 'action 585'
  {
    op: 0, // shift
    state: 130, // 'state 130'
    symbol: undefined,
  },
  // 'action 586'
  {
    op: 0, // shift
    state: 131, // 'state 131'
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
    state: 133, // 'state 133'
    symbol: undefined,
  },
  // 'action 589'
  {
    op: 0, // shift
    state: 134, // 'state 134'
    symbol: undefined,
  },
  // 'action 590'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 591'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 592'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 593'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 594'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 595'
  {
    op: 0, // shift
    state: 6, // 'state 6'
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
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 598'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 599'
  {
    op: 0, // shift
    state: 135, // 'state 135'
    symbol: undefined,
  },
  // 'action 600'
  {
    op: 0, // shift
    state: 136, // 'state 136'
    symbol: undefined,
  },
  // 'action 601'
  {
    op: 0, // shift
    state: 137, // 'state 137'
    symbol: undefined,
  },
  // 'action 602'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 603'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 604'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 605'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 606'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 607'
  {
    op: 0, // shift
    state: 2, // 'state 2'
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
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 611'
  {
    op: 0, // shift
    state: 140, // 'state 140'
    symbol: undefined,
  },
  // 'action 612'
  {
    op: 0, // shift
    state: 141, // 'state 141'
    symbol: undefined,
  },
  // 'action 613'
  {
    op: 0, // shift
    state: 142, // 'state 142'
    symbol: undefined,
  },
  // 'action 614'
  {
    op: 0, // shift
    state: 143, // 'state 143'
    symbol: undefined,
  },
  // 'action 615'
  {
    op: 0, // shift
    state: 144, // 'state 144'
    symbol: undefined,
  },
  // 'action 616'
  {
    op: 0, // shift
    state: 145, // 'state 145'
    symbol: undefined,
  },
  // 'action 617'
  {
    op: 0, // shift
    state: 146, // 'state 146'
    symbol: undefined,
  },
  // 'action 618'
  {
    op: 0, // shift
    state: 147, // 'state 147'
    symbol: undefined,
  },
  // 'action 619'
  {
    op: 0, // shift
    state: 148, // 'state 148'
    symbol: undefined,
  },
  // 'action 620'
  {
    op: 0, // shift
    state: 149, // 'state 149'
    symbol: undefined,
  },
  // 'action 621'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 622'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 623'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 624'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 625'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 626'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 627'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 628'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 629'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 630'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 631'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 632'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 633'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 634'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 635'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 636'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 637'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 638'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 639'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 640'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 641'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 642'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 643'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 644'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 645'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 646'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 647'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 648'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 649'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 650'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 651'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 652'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 653'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 654'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 655'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 656'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 657'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 658'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 659'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 660'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 661'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 662'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 663'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 664'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 665'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 666'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 667'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 668'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 669'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 670'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 671'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 672'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 673'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 674'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 675'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 676'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 677'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 678'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 679'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 680'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 681'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 682'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 683'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 684'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 685'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 686'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 687'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 688'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 689'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 690'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 691'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 692'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 693'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 694'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 695'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 696'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 697'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 698'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 699'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 700'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 701'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 702'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 703'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 704'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 705'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 706'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 707'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 708'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 709'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 710'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 711'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 712'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 713'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 714'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 715'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 716'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 717'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 718'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 719'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 720'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 721'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 722'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 723'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 724'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 725'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 726'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 727'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 728'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 729'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 730'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 731'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 732'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 733'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 734'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 735'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 736'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 737'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 738'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 739'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 740'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 741'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 742'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 743'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 744'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 745'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 746'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 747'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 748'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 749'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 750'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 751'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 752'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 753'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 754'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 755'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 756'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 757'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 758'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 759'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 760'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 761'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 762'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 763'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 764'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 765'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 766'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 767'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 768'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 769'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 770'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 771'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 772'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 773'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 774'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 775'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 776'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 777'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 778'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 779'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 780'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 781'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 782'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 783'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 784'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 785'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 786'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 787'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 788'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 789'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 790'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 791'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 792'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 793'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 794'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 795'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 796'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 797'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 798'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 799'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 800'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 801'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 802'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 803'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 804'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 805'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 806'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 807'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 808'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 809'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 810'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 811'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 812'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 813'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 814'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 815'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 816'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 817'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 818'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 819'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 820'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 821'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 822'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 823'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 824'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 825'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 826'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 827'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 828'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 829'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 830'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 831'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 832'
  {
    op: 0, // shift
    state: 150, // 'state 150'
    symbol: undefined,
  },
  // 'action 833'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 834'
  {
    op: 0, // shift
    state: 151, // 'state 151'
    symbol: undefined,
  },
  // 'action 835'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 836'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 837'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 838'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 839'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 840'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 841'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 842'
  {
    op: 0, // shift
    state: 27, // 'state 27'
    symbol: undefined,
  },
  // 'action 843'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 844'
  {
    op: 0, // shift
    state: 152, // 'state 152'
    symbol: undefined,
  },
  // 'action 845'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 846'
  {
    op: 0, // shift
    state: 30, // 'state 30'
    symbol: undefined,
  },
  // 'action 847'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 848'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 849'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 850'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 851'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 852'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 853'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 854'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 855'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 856'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 857'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 858'
  {
    op: 0, // shift
    state: 42, // 'state 42'
    symbol: undefined,
  },
  // 'action 859'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 860'
  {
    op: 0, // shift
    state: 153, // 'state 153'
    symbol: undefined,
  },
  // 'action 861'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 862'
  {
    op: 0, // shift
    state: 45, // 'state 45'
    symbol: undefined,
  },
  // 'action 863'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 864'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 865'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 866'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 867'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 868'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 869'
  {
    op: 0, // shift
    state: 154, // 'state 154'
    symbol: undefined,
  },
  // 'action 870'
  {
    op: 0, // shift
    state: 155, // 'state 155'
    symbol: undefined,
  },
  // 'action 871'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 872'
  {
    op: 0, // shift
    state: 156, // 'state 156'
    symbol: undefined,
  },
  // 'action 873'
  {
    op: 0, // shift
    state: 157, // 'state 157'
    symbol: undefined,
  },
  // 'action 874'
  {
    op: 0, // shift
    state: 158, // 'state 158'
    symbol: undefined,
  },
  // 'action 875'
  {
    op: 0, // shift
    state: 159, // 'state 159'
    symbol: undefined,
  },
  // 'action 876'
  {
    op: 0, // shift
    state: 160, // 'state 160'
    symbol: undefined,
  },
  // 'action 877'
  {
    op: 0, // shift
    state: 161, // 'state 161'
    symbol: undefined,
  },
  // 'action 878'
  {
    op: 0, // shift
    state: 162, // 'state 162'
    symbol: undefined,
  },
  // 'action 879'
  {
    op: 0, // shift
    state: 163, // 'state 163'
    symbol: undefined,
  },
  // 'action 880'
  {
    op: 0, // shift
    state: 164, // 'state 164'
    symbol: undefined,
  },
  // 'action 881'
  {
    op: 0, // shift
    state: 165, // 'state 165'
    symbol: undefined,
  },
  // 'action 882'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 883'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 884'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 885'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 886'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 887'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 888'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 889'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 890'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 891'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 892'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 893'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 894'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 895'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 896'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 897'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 898'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 899'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 900'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 901'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 902'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 903'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 904'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 905'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 906'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 907'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 908'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 909'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 910'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 911'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 912'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 913'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 914'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 915'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 916'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 917'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 918'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 919'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 920'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 921'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 922'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 923'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 924'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 925'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 926'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 927'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 928'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 929'
  {
    op: 0, // shift
    state: 166, // 'state 166'
    symbol: undefined,
  },
  // 'action 930'
  {
    op: 0, // shift
    state: 167, // 'state 167'
    symbol: undefined,
  },
  // 'action 931'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 932'
  {
    op: 0, // shift
    state: 168, // 'state 168'
    symbol: undefined,
  },
  // 'action 933'
  {
    op: 0, // shift
    state: 169, // 'state 169'
    symbol: undefined,
  },
  // 'action 934'
  {
    op: 0, // shift
    state: 170, // 'state 170'
    symbol: undefined,
  },
  // 'action 935'
  {
    op: 0, // shift
    state: 171, // 'state 171'
    symbol: undefined,
  },
  // 'action 936'
  {
    op: 0, // shift
    state: 172, // 'state 172'
    symbol: undefined,
  },
  // 'action 937'
  {
    op: 0, // shift
    state: 173, // 'state 173'
    symbol: undefined,
  },
  // 'action 938'
  {
    op: 0, // shift
    state: 174, // 'state 174'
    symbol: undefined,
  },
  // 'action 939'
  {
    op: 0, // shift
    state: 175, // 'state 175'
    symbol: undefined,
  },
  // 'action 940'
  {
    op: 0, // shift
    state: 176, // 'state 176'
    symbol: undefined,
  },
  // 'action 941'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 942'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 943'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 944'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 945'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 946'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 947'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 948'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 949'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 950'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 951'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 952'
  {
    op: 0, // shift
    state: 177, // 'state 177'
    symbol: undefined,
  },
  // 'action 953'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 954'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 955'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 956'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 957'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 958'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 959'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 960'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 961'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 962'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 963'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 964'
  {
    op: 0, // shift
    state: 178, // 'state 178'
    symbol: undefined,
  },
  // 'action 965'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 966'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 967'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 968'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 969'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 970'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 971'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 972'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 973'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 974'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 975'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 976'
  {
    op: 0, // shift
    state: 179, // 'state 179'
    symbol: undefined,
  },
  // 'action 977'
  {
    op: 0, // shift
    state: 180, // 'state 180'
    symbol: undefined,
  },
  // 'action 978'
  {
    op: 0, // shift
    state: 181, // 'state 181'
    symbol: undefined,
  },
  // 'action 979'
  {
    op: 0, // shift
    state: 182, // 'state 182'
    symbol: undefined,
  },
  // 'action 980'
  {
    op: 0, // shift
    state: 183, // 'state 183'
    symbol: undefined,
  },
  // 'action 981'
  {
    op: 0, // shift
    state: 184, // 'state 184'
    symbol: undefined,
  },
  // 'action 982'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 983'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 984'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 985'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 986'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 987'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 988'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 989'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 990'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 991'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 992'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 993'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 994'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 995'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 996'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 997'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 998'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 999'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1000'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1001'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1002'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1003'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1004'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1005'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1006'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1007'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1008'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1009'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1010'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1011'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1012'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1013'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1014'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1015'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1016'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1017'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1018'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1019'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1020'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1021'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1022'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1023'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1024'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1025'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1026'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1027'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1028'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1029'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1030'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1031'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1032'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1033'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1034'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1035'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1036'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1037'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1038'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1039'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1040'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1041'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1042'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1043'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1044'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1045'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1046'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1047'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1048'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1049'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1050'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1051'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1052'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1053'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1054'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1055'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1056'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1057'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1058'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1059'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1060'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1061'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1062'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1063'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1064'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1065'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1066'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1067'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1068'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1069'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1070'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1071'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1072'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1073'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1074'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1075'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1076'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1077'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1078'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1079'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1080'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1081'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1082'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1083'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1084'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1085'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1086'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1087'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1088'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1089'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1090'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1091'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1092'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 28, // CharacterOrNumberOrX
  },
  // 'action 1093'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1094'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1095'
  {
    op: 0, // shift
    state: 73, // 'state 73'
    symbol: undefined,
  },
  // 'action 1096'
  {
    op: 0, // shift
    state: 74, // 'state 74'
    symbol: undefined,
  },
  // 'action 1097'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1098'
  {
    op: 0, // shift
    state: 77, // 'state 77'
    symbol: undefined,
  },
  // 'action 1099'
  {
    op: 0, // shift
    state: 78, // 'state 78'
    symbol: undefined,
  },
  // 'action 1100'
  {
    op: 0, // shift
    state: 79, // 'state 79'
    symbol: undefined,
  },
  // 'action 1101'
  {
    op: 0, // shift
    state: 80, // 'state 80'
    symbol: undefined,
  },
  // 'action 1102'
  {
    op: 0, // shift
    state: 81, // 'state 81'
    symbol: undefined,
  },
  // 'action 1103'
  {
    op: 0, // shift
    state: 185, // 'state 185'
    symbol: undefined,
  },
  // 'action 1104'
  {
    op: 0, // shift
    state: 83, // 'state 83'
    symbol: undefined,
  },
  // 'action 1105'
  {
    op: 0, // shift
    state: 84, // 'state 84'
    symbol: undefined,
  },
  // 'action 1106'
  {
    op: 0, // shift
    state: 85, // 'state 85'
    symbol: undefined,
  },
  // 'action 1107'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1108'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1109'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1110'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1111'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1112'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1113'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1114'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 1115'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 1116'
  {
    op: 0, // shift
    state: 30, // 'state 30'
    symbol: undefined,
  },
  // 'action 1117'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1118'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 1119'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 1120'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 1121'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 1122'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 1123'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 1124'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1125'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1126'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1127'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1128'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1129'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1130'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1131'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 1132'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 1133'
  {
    op: 0, // shift
    state: 45, // 'state 45'
    symbol: undefined,
  },
  // 'action 1134'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1135'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 1136'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 1137'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 1138'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 1139'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 1140'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 1141'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1142'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1143'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1144'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1145'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1146'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1147'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1148'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 1149'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 1150'
  {
    op: 0, // shift
    state: 30, // 'state 30'
    symbol: undefined,
  },
  // 'action 1151'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1152'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 1153'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 1154'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 1155'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 1156'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 1157'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 1158'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1159'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1160'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1161'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1162'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1163'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1164'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1165'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 1166'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 1167'
  {
    op: 0, // shift
    state: 45, // 'state 45'
    symbol: undefined,
  },
  // 'action 1168'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1169'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 1170'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 1171'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 1172'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 1173'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 1174'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 1175'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1176'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1177'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1178'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1179'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1180'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1181'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1182'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1183'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1184'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1185'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1186'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1187'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1188'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1189'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1190'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1191'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1192'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1193'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1194'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1195'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1196'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1197'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1198'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1199'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1200'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1201'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1202'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1203'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1204'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1205'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1206'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1207'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1208'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1209'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1210'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1211'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1212'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1213'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1214'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1215'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1216'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1217'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1218'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1219'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1220'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1221'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1222'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1223'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1224'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1225'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1226'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1227'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1228'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1229'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1230'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1231'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1232'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1233'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1234'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1235'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1236'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1237'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1238'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1239'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1240'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1241'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1242'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1243'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1244'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1245'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1246'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1247'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1248'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1249'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1250'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1251'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1252'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1253'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1254'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1255'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1256'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1257'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1258'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1259'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1260'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1261'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1262'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1263'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1264'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1265'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1266'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1267'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1268'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1269'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1270'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1271'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1272'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1273'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1274'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1275'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1276'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1277'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1278'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1279'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1280'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1281'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1282'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1283'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1284'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1285'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1286'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1287'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1288'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1289'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1290'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1291'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1292'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1293'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1294'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1295'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1296'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1297'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1298'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1299'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1300'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1301'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1302'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1303'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1304'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1305'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1306'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1307'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1308'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1309'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1310'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1311'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1312'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1313'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1314'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1315'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1316'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1317'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1318'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1319'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1320'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1321'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1322'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1323'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1324'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1325'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1326'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1327'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1328'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1329'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1330'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1331'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1332'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1333'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1334'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1335'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1336'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1337'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1338'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1339'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1340'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1341'
  {
    op: 0, // shift
    state: 186, // 'state 186'
    symbol: undefined,
  },
  // 'action 1342'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 1343'
  {
    op: 0, // shift
    state: 187, // 'state 187'
    symbol: undefined,
  },
  // 'action 1344'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1345'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1346'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1347'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1348'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1349'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1350'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1351'
  {
    op: 0, // shift
    state: 27, // 'state 27'
    symbol: undefined,
  },
  // 'action 1352'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 1353'
  {
    op: 0, // shift
    state: 188, // 'state 188'
    symbol: undefined,
  },
  // 'action 1354'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 1355'
  {
    op: 0, // shift
    state: 30, // 'state 30'
    symbol: undefined,
  },
  // 'action 1356'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1357'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 1358'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 1359'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 1360'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1361'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1362'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1363'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1364'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1365'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1366'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1367'
  {
    op: 0, // shift
    state: 42, // 'state 42'
    symbol: undefined,
  },
  // 'action 1368'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 1369'
  {
    op: 0, // shift
    state: 189, // 'state 189'
    symbol: undefined,
  },
  // 'action 1370'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 1371'
  {
    op: 0, // shift
    state: 45, // 'state 45'
    symbol: undefined,
  },
  // 'action 1372'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1373'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 1374'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 1375'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 1376'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1377'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1378'
  {
    op: 0, // shift
    state: 73, // 'state 73'
    symbol: undefined,
  },
  // 'action 1379'
  {
    op: 0, // shift
    state: 74, // 'state 74'
    symbol: undefined,
  },
  // 'action 1380'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1381'
  {
    op: 0, // shift
    state: 77, // 'state 77'
    symbol: undefined,
  },
  // 'action 1382'
  {
    op: 0, // shift
    state: 78, // 'state 78'
    symbol: undefined,
  },
  // 'action 1383'
  {
    op: 0, // shift
    state: 79, // 'state 79'
    symbol: undefined,
  },
  // 'action 1384'
  {
    op: 0, // shift
    state: 80, // 'state 80'
    symbol: undefined,
  },
  // 'action 1385'
  {
    op: 0, // shift
    state: 81, // 'state 81'
    symbol: undefined,
  },
  // 'action 1386'
  {
    op: 0, // shift
    state: 190, // 'state 190'
    symbol: undefined,
  },
  // 'action 1387'
  {
    op: 0, // shift
    state: 191, // 'state 191'
    symbol: undefined,
  },
  // 'action 1388'
  {
    op: 0, // shift
    state: 84, // 'state 84'
    symbol: undefined,
  },
  // 'action 1389'
  {
    op: 0, // shift
    state: 85, // 'state 85'
    symbol: undefined,
  },
  // 'action 1390'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1391'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1392'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1393'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1394'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1395'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1396'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1397'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1398'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1399'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1400'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1401'
  {
    op: 0, // shift
    state: 192, // 'state 192'
    symbol: undefined,
  },
  // 'action 1402'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1403'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1404'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1405'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1406'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1407'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1408'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1409'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1410'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1411'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1412'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1413'
  {
    op: 0, // shift
    state: 193, // 'state 193'
    symbol: undefined,
  },
  // 'action 1414'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1415'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1416'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1417'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1418'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1419'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1420'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1421'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1422'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1423'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1424'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1425'
  {
    op: 0, // shift
    state: 194, // 'state 194'
    symbol: undefined,
  },
  // 'action 1426'
  {
    op: 0, // shift
    state: 195, // 'state 195'
    symbol: undefined,
  },
  // 'action 1427'
  {
    op: 0, // shift
    state: 196, // 'state 196'
    symbol: undefined,
  },
  // 'action 1428'
  {
    op: 0, // shift
    state: 197, // 'state 197'
    symbol: undefined,
  },
  // 'action 1429'
  {
    op: 0, // shift
    state: 198, // 'state 198'
    symbol: undefined,
  },
  // 'action 1430'
  {
    op: 0, // shift
    state: 199, // 'state 199'
    symbol: undefined,
  },
  // 'action 1431'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1432'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1433'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1434'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1435'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1436'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1437'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1438'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1439'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1440'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1441'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1442'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1443'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1444'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1445'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1446'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1447'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1448'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1449'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1450'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1451'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1452'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1453'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1454'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1455'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1456'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1457'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1458'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1459'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1460'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1461'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1462'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1463'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1464'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1465'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1466'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1467'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1468'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1469'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1470'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1471'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1472'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1473'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1474'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1475'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1476'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1477'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1478'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1479'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1480'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1481'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1482'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1483'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1484'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1485'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1486'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1487'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1488'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1489'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1490'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1491'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1492'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1493'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1494'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1495'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1496'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1497'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1498'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1499'
  {
    op: 0, // shift
    state: 73, // 'state 73'
    symbol: undefined,
  },
  // 'action 1500'
  {
    op: 0, // shift
    state: 74, // 'state 74'
    symbol: undefined,
  },
  // 'action 1501'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1502'
  {
    op: 0, // shift
    state: 77, // 'state 77'
    symbol: undefined,
  },
  // 'action 1503'
  {
    op: 0, // shift
    state: 78, // 'state 78'
    symbol: undefined,
  },
  // 'action 1504'
  {
    op: 0, // shift
    state: 79, // 'state 79'
    symbol: undefined,
  },
  // 'action 1505'
  {
    op: 0, // shift
    state: 80, // 'state 80'
    symbol: undefined,
  },
  // 'action 1506'
  {
    op: 0, // shift
    state: 81, // 'state 81'
    symbol: undefined,
  },
  // 'action 1507'
  {
    op: 0, // shift
    state: 200, // 'state 200'
    symbol: undefined,
  },
  // 'action 1508'
  {
    op: 0, // shift
    state: 83, // 'state 83'
    symbol: undefined,
  },
  // 'action 1509'
  {
    op: 0, // shift
    state: 84, // 'state 84'
    symbol: undefined,
  },
  // 'action 1510'
  {
    op: 0, // shift
    state: 85, // 'state 85'
    symbol: undefined,
  },
  // 'action 1511'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1512'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1513'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1514'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1515'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1516'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1517'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1518'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 1519'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 1520'
  {
    op: 0, // shift
    state: 30, // 'state 30'
    symbol: undefined,
  },
  // 'action 1521'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1522'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 1523'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 1524'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 1525'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 1526'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 1527'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 1528'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1529'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1530'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1531'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1532'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1533'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1534'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1535'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 1536'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 1537'
  {
    op: 0, // shift
    state: 45, // 'state 45'
    symbol: undefined,
  },
  // 'action 1538'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1539'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 1540'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 1541'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 1542'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 1543'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 1544'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Union
  },
  // 'action 1545'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1546'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1547'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1548'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1549'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1550'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1551'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1552'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1553'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1554'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1555'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1556'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1557'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1558'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1559'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1560'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1561'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1562'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1563'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1564'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1565'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1566'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1567'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1568'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1569'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1570'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1571'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1572'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1573'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1574'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1575'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1576'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1577'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1578'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1579'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1580'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Atom
  },
  // 'action 1581'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1582'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1583'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1584'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1585'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1586'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1587'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1588'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1589'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1590'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1591'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1592'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1593'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 1594'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1595'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1596'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1597'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1598'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1599'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1600'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1601'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1602'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1603'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1604'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1605'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1606'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1607'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1608'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1609'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1610'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1611'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1612'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1613'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1614'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1615'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1616'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1617'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1618'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1619'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1620'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1621'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1622'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1623'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1624'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1625'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1626'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1627'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1628'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1629'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1630'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1631'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1632'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1633'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1634'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1635'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1636'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1637'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1638'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1639'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1640'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1641'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1642'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1643'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1644'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1645'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1646'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1647'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1648'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1649'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1650'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1651'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1652'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1653'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1654'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1655'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1656'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1657'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1658'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1659'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1660'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1661'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1662'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1663'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1664'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1665'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1666'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1667'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1668'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1669'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1670'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1671'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1672'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1673'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1674'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1675'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1676'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1677'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1678'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1679'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1680'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1681'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1682'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1683'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1684'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1685'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1686'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1687'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1688'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1689'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1690'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1691'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1692'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1693'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1694'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1695'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1696'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1697'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1698'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1699'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1700'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1701'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1702'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1703'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1704'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1705'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1706'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1707'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1708'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1709'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1710'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 29, // EscapedCharacter
  },
  // 'action 1711'
  {
    op: 0, // shift
    state: 201, // 'state 201'
    symbol: undefined,
  },
  // 'action 1712'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 1713'
  {
    op: 0, // shift
    state: 202, // 'state 202'
    symbol: undefined,
  },
  // 'action 1714'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1715'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1716'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1717'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1718'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1719'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1720'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1721'
  {
    op: 0, // shift
    state: 27, // 'state 27'
    symbol: undefined,
  },
  // 'action 1722'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 1723'
  {
    op: 0, // shift
    state: 203, // 'state 203'
    symbol: undefined,
  },
  // 'action 1724'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 1725'
  {
    op: 0, // shift
    state: 30, // 'state 30'
    symbol: undefined,
  },
  // 'action 1726'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1727'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 1728'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 1729'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 1730'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1731'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1732'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1733'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1734'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1735'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1736'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1737'
  {
    op: 0, // shift
    state: 42, // 'state 42'
    symbol: undefined,
  },
  // 'action 1738'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 1739'
  {
    op: 0, // shift
    state: 204, // 'state 204'
    symbol: undefined,
  },
  // 'action 1740'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 1741'
  {
    op: 0, // shift
    state: 45, // 'state 45'
    symbol: undefined,
  },
  // 'action 1742'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1743'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 1744'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 1745'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 1746'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1747'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1748'
  {
    op: 0, // shift
    state: 73, // 'state 73'
    symbol: undefined,
  },
  // 'action 1749'
  {
    op: 0, // shift
    state: 74, // 'state 74'
    symbol: undefined,
  },
  // 'action 1750'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1751'
  {
    op: 0, // shift
    state: 77, // 'state 77'
    symbol: undefined,
  },
  // 'action 1752'
  {
    op: 0, // shift
    state: 78, // 'state 78'
    symbol: undefined,
  },
  // 'action 1753'
  {
    op: 0, // shift
    state: 79, // 'state 79'
    symbol: undefined,
  },
  // 'action 1754'
  {
    op: 0, // shift
    state: 80, // 'state 80'
    symbol: undefined,
  },
  // 'action 1755'
  {
    op: 0, // shift
    state: 81, // 'state 81'
    symbol: undefined,
  },
  // 'action 1756'
  {
    op: 0, // shift
    state: 205, // 'state 205'
    symbol: undefined,
  },
  // 'action 1757'
  {
    op: 0, // shift
    state: 206, // 'state 206'
    symbol: undefined,
  },
  // 'action 1758'
  {
    op: 0, // shift
    state: 84, // 'state 84'
    symbol: undefined,
  },
  // 'action 1759'
  {
    op: 0, // shift
    state: 85, // 'state 85'
    symbol: undefined,
  },
  // 'action 1760'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1761'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1762'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1763'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1764'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1765'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1766'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1767'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1768'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1769'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1770'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1771'
  {
    op: 0, // shift
    state: 207, // 'state 207'
    symbol: undefined,
  },
  // 'action 1772'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1773'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1774'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1775'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1776'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1777'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1778'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1779'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1780'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1781'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1782'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1783'
  {
    op: 0, // shift
    state: 208, // 'state 208'
    symbol: undefined,
  },
  // 'action 1784'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1785'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1786'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1787'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1788'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1789'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1790'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1791'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1792'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1793'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1794'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1795'
  {
    op: 0, // shift
    state: 209, // 'state 209'
    symbol: undefined,
  },
  // 'action 1796'
  {
    op: 0, // shift
    state: 210, // 'state 210'
    symbol: undefined,
  },
  // 'action 1797'
  {
    op: 0, // shift
    state: 211, // 'state 211'
    symbol: undefined,
  },
  // 'action 1798'
  {
    op: 0, // shift
    state: 212, // 'state 212'
    symbol: undefined,
  },
  // 'action 1799'
  {
    op: 0, // shift
    state: 213, // 'state 213'
    symbol: undefined,
  },
  // 'action 1800'
  {
    op: 0, // shift
    state: 214, // 'state 214'
    symbol: undefined,
  },
  // 'action 1801'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1802'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1803'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1804'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1805'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1806'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1807'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1808'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1809'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1810'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1811'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1812'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1813'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1814'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1815'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1816'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1817'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1818'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1819'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1820'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1821'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1822'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1823'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1824'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1825'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1826'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1827'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1828'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1829'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1830'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1831'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1832'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1833'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1834'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1835'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1836'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1837'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1838'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1839'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1840'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1841'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1842'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1843'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1844'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1845'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1846'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1847'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1848'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1849'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1850'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1851'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1852'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1853'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1854'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1855'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1856'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1857'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1858'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1859'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1860'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1861'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1862'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1863'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1864'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1865'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1866'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1867'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1868'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1869'
  {
    op: 0, // shift
    state: 73, // 'state 73'
    symbol: undefined,
  },
  // 'action 1870'
  {
    op: 0, // shift
    state: 74, // 'state 74'
    symbol: undefined,
  },
  // 'action 1871'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1872'
  {
    op: 0, // shift
    state: 77, // 'state 77'
    symbol: undefined,
  },
  // 'action 1873'
  {
    op: 0, // shift
    state: 78, // 'state 78'
    symbol: undefined,
  },
  // 'action 1874'
  {
    op: 0, // shift
    state: 79, // 'state 79'
    symbol: undefined,
  },
  // 'action 1875'
  {
    op: 0, // shift
    state: 80, // 'state 80'
    symbol: undefined,
  },
  // 'action 1876'
  {
    op: 0, // shift
    state: 81, // 'state 81'
    symbol: undefined,
  },
  // 'action 1877'
  {
    op: 0, // shift
    state: 215, // 'state 215'
    symbol: undefined,
  },
  // 'action 1878'
  {
    op: 0, // shift
    state: 83, // 'state 83'
    symbol: undefined,
  },
  // 'action 1879'
  {
    op: 0, // shift
    state: 84, // 'state 84'
    symbol: undefined,
  },
  // 'action 1880'
  {
    op: 0, // shift
    state: 85, // 'state 85'
    symbol: undefined,
  },
  // 'action 1881'
  {
    op: 0, // shift
    state: 216, // 'state 216'
    symbol: undefined,
  },
  // 'action 1882'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1883'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1884'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1885'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1886'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1887'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1888'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1889'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1890'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1891'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1892'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1893'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1894'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1895'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1896'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1897'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1898'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1899'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1900'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1901'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1902'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1903'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1904'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1905'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1906'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1907'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1908'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1909'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1910'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1911'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1912'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1913'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1914'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1915'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1916'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1917'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1918'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1919'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1920'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 1921'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1922'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1923'
  {
    op: 0, // shift
    state: 73, // 'state 73'
    symbol: undefined,
  },
  // 'action 1924'
  {
    op: 0, // shift
    state: 74, // 'state 74'
    symbol: undefined,
  },
  // 'action 1925'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1926'
  {
    op: 0, // shift
    state: 77, // 'state 77'
    symbol: undefined,
  },
  // 'action 1927'
  {
    op: 0, // shift
    state: 78, // 'state 78'
    symbol: undefined,
  },
  // 'action 1928'
  {
    op: 0, // shift
    state: 79, // 'state 79'
    symbol: undefined,
  },
  // 'action 1929'
  {
    op: 0, // shift
    state: 80, // 'state 80'
    symbol: undefined,
  },
  // 'action 1930'
  {
    op: 0, // shift
    state: 81, // 'state 81'
    symbol: undefined,
  },
  // 'action 1931'
  {
    op: 0, // shift
    state: 217, // 'state 217'
    symbol: undefined,
  },
  // 'action 1932'
  {
    op: 0, // shift
    state: 218, // 'state 218'
    symbol: undefined,
  },
  // 'action 1933'
  {
    op: 0, // shift
    state: 84, // 'state 84'
    symbol: undefined,
  },
  // 'action 1934'
  {
    op: 0, // shift
    state: 85, // 'state 85'
    symbol: undefined,
  },
  // 'action 1935'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1936'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1937'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1938'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1939'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1940'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1941'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1942'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1943'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1944'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1945'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 1946'
  {
    op: 0, // shift
    state: 219, // 'state 219'
    symbol: undefined,
  },
  // 'action 1947'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1948'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1949'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1950'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1951'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1952'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1953'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1954'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1955'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1956'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1957'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1958'
  {
    op: 0, // shift
    state: 220, // 'state 220'
    symbol: undefined,
  },
  // 'action 1959'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1960'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1961'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1962'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1963'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1964'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1965'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1966'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1967'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1968'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1969'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1970'
  {
    op: 0, // shift
    state: 221, // 'state 221'
    symbol: undefined,
  },
  // 'action 1971'
  {
    op: 0, // shift
    state: 222, // 'state 222'
    symbol: undefined,
  },
  // 'action 1972'
  {
    op: 0, // shift
    state: 223, // 'state 223'
    symbol: undefined,
  },
  // 'action 1973'
  {
    op: 0, // shift
    state: 224, // 'state 224'
    symbol: undefined,
  },
  // 'action 1974'
  {
    op: 0, // shift
    state: 225, // 'state 225'
    symbol: undefined,
  },
  // 'action 1975'
  {
    op: 0, // shift
    state: 226, // 'state 226'
    symbol: undefined,
  },
  // 'action 1976'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1977'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1978'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1979'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1980'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1981'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1982'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1983'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1984'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1985'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1986'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1987'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1988'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1989'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1990'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1991'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1992'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1993'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1994'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1995'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1996'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1997'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1998'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 1999'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2000'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2001'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2002'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2003'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2004'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2005'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2006'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2007'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2008'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2009'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2010'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2011'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2012'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2013'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2014'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2015'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2016'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2017'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2018'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2019'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2020'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2021'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2022'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2023'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2024'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2025'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2026'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2027'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2028'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2029'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2030'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2031'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2032'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2033'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2034'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2035'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2036'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2037'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2038'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2039'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2040'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2041'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2042'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 2043'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 2044'
  {
    op: 0, // shift
    state: 73, // 'state 73'
    symbol: undefined,
  },
  // 'action 2045'
  {
    op: 0, // shift
    state: 74, // 'state 74'
    symbol: undefined,
  },
  // 'action 2046'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 2047'
  {
    op: 0, // shift
    state: 77, // 'state 77'
    symbol: undefined,
  },
  // 'action 2048'
  {
    op: 0, // shift
    state: 78, // 'state 78'
    symbol: undefined,
  },
  // 'action 2049'
  {
    op: 0, // shift
    state: 79, // 'state 79'
    symbol: undefined,
  },
  // 'action 2050'
  {
    op: 0, // shift
    state: 80, // 'state 80'
    symbol: undefined,
  },
  // 'action 2051'
  {
    op: 0, // shift
    state: 81, // 'state 81'
    symbol: undefined,
  },
  // 'action 2052'
  {
    op: 0, // shift
    state: 227, // 'state 227'
    symbol: undefined,
  },
  // 'action 2053'
  {
    op: 0, // shift
    state: 83, // 'state 83'
    symbol: undefined,
  },
  // 'action 2054'
  {
    op: 0, // shift
    state: 84, // 'state 84'
    symbol: undefined,
  },
  // 'action 2055'
  {
    op: 0, // shift
    state: 85, // 'state 85'
    symbol: undefined,
  },
  // 'action 2056'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2057'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2058'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2059'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2060'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2061'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2062'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2063'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2064'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2065'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2066'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2067'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2068'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2069'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2070'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2071'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2072'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2073'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2074'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2075'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2076'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2077'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2078'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2079'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2080'
  {
    op: 0, // shift
    state: 228, // 'state 228'
    symbol: undefined,
  },
  // 'action 2081'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2082'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2083'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2084'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2085'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2086'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2087'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2088'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2089'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2090'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2091'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2092'
  {
    op: 0, // shift
    state: 229, // 'state 229'
    symbol: undefined,
  },
  // 'action 2093'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2094'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2095'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2096'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2097'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2098'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2099'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2100'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2101'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2102'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2103'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2104'
  {
    op: 0, // shift
    state: 230, // 'state 230'
    symbol: undefined,
  },
  // 'action 2105'
  {
    op: 0, // shift
    state: 231, // 'state 231'
    symbol: undefined,
  },
  // 'action 2106'
  {
    op: 0, // shift
    state: 232, // 'state 232'
    symbol: undefined,
  },
  // 'action 2107'
  {
    op: 0, // shift
    state: 233, // 'state 233'
    symbol: undefined,
  },
  // 'action 2108'
  {
    op: 0, // shift
    state: 234, // 'state 234'
    symbol: undefined,
  },
  // 'action 2109'
  {
    op: 0, // shift
    state: 235, // 'state 235'
    symbol: undefined,
  },
  // 'action 2110'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2111'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2112'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2113'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2114'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2115'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2116'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2117'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2118'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2119'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2120'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2121'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2122'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2123'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2124'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2125'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2126'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2127'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2128'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2129'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2130'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2131'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2132'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2133'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2134'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2135'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2136'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2137'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2138'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2139'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2140'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2141'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2142'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2143'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2144'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2145'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2146'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2147'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2148'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2149'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2150'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2151'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2152'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2153'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2154'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2155'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2156'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2157'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2158'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2159'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2160'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2161'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2162'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2163'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2164'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2165'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2166'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2167'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2168'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2169'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2170'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2171'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2172'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2173'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2174'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2175'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2176'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 2177'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 2178'
  {
    op: 0, // shift
    state: 236, // 'state 236'
    symbol: undefined,
  },
  // 'action 2179'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 2180'
  {
    op: 0, // shift
    state: 237, // 'state 237'
    symbol: undefined,
  },
  // 'action 2181'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 2182'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 2183'
  {
    op: 0, // shift
    state: 238, // 'state 238'
    symbol: undefined,
  },
  // 'action 2184'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 2185'
  {
    op: 0, // shift
    state: 239, // 'state 239'
    symbol: undefined,
  },
  // 'action 2186'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2187'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2188'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2189'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2190'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2191'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2192'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2193'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2194'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2195'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2196'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2197'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2198'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2199'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2200'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2201'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2202'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2203'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2204'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2205'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2206'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2207'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2208'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2209'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2210'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2211'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2212'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2213'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2214'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2215'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2216'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2217'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2218'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2219'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2220'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2221'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2222'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2223'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2224'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2225'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2226'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2227'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2228'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2229'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2230'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2231'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2232'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2233'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2234'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2235'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2236'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2237'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2238'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2239'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2240'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2241'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2242'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2243'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2244'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2245'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2246'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2247'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2248'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2249'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2250'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2251'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2252'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 2253'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 2254'
  {
    op: 0, // shift
    state: 73, // 'state 73'
    symbol: undefined,
  },
  // 'action 2255'
  {
    op: 0, // shift
    state: 74, // 'state 74'
    symbol: undefined,
  },
  // 'action 2256'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 2257'
  {
    op: 0, // shift
    state: 77, // 'state 77'
    symbol: undefined,
  },
  // 'action 2258'
  {
    op: 0, // shift
    state: 78, // 'state 78'
    symbol: undefined,
  },
  // 'action 2259'
  {
    op: 0, // shift
    state: 79, // 'state 79'
    symbol: undefined,
  },
  // 'action 2260'
  {
    op: 0, // shift
    state: 80, // 'state 80'
    symbol: undefined,
  },
  // 'action 2261'
  {
    op: 0, // shift
    state: 81, // 'state 81'
    symbol: undefined,
  },
  // 'action 2262'
  {
    op: 0, // shift
    state: 240, // 'state 240'
    symbol: undefined,
  },
  // 'action 2263'
  {
    op: 0, // shift
    state: 174, // 'state 174'
    symbol: undefined,
  },
  // 'action 2264'
  {
    op: 0, // shift
    state: 84, // 'state 84'
    symbol: undefined,
  },
  // 'action 2265'
  {
    op: 0, // shift
    state: 85, // 'state 85'
    symbol: undefined,
  },
  // 'action 2266'
  {
    op: 0, // shift
    state: 241, // 'state 241'
    symbol: undefined,
  },
  // 'action 2267'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2268'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2269'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2270'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2271'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2272'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2273'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2274'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2275'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2276'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2277'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2278'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2279'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2280'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2281'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2282'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2283'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2284'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2285'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2286'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2287'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2288'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2289'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2290'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2291'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2292'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2293'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2294'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2295'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2296'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2297'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2298'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2299'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2300'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2301'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2302'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2303'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2304'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2305'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2306'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2307'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2308'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2309'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2310'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2311'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2312'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2313'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2314'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2315'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2316'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2317'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2318'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2319'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2320'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2321'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2322'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2323'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2324'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2325'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2326'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2327'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2328'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2329'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2330'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 2331'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 2332'
  {
    op: 0, // shift
    state: 242, // 'state 242'
    symbol: undefined,
  },
  // 'action 2333'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 2334'
  {
    op: 0, // shift
    state: 243, // 'state 243'
    symbol: undefined,
  },
  // 'action 2335'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 2336'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 2337'
  {
    op: 0, // shift
    state: 244, // 'state 244'
    symbol: undefined,
  },
  // 'action 2338'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 2339'
  {
    op: 0, // shift
    state: 245, // 'state 245'
    symbol: undefined,
  },
  // 'action 2340'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2341'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2342'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2343'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2344'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2345'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2346'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2347'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2348'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2349'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2350'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2351'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2352'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2353'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2354'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2355'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2356'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2357'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2358'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2359'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2360'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2361'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2362'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2363'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2364'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2365'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2366'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2367'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2368'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2369'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2370'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2371'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2372'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2373'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2374'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2375'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2376'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2377'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2378'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2379'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2380'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2381'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2382'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2383'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2384'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2385'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2386'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2387'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2388'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2389'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2390'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2391'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2392'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2393'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2394'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2395'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2396'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2397'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2398'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2399'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2400'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2401'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2402'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2403'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2404'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2405'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2406'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 2407'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 2408'
  {
    op: 0, // shift
    state: 73, // 'state 73'
    symbol: undefined,
  },
  // 'action 2409'
  {
    op: 0, // shift
    state: 74, // 'state 74'
    symbol: undefined,
  },
  // 'action 2410'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 2411'
  {
    op: 0, // shift
    state: 77, // 'state 77'
    symbol: undefined,
  },
  // 'action 2412'
  {
    op: 0, // shift
    state: 78, // 'state 78'
    symbol: undefined,
  },
  // 'action 2413'
  {
    op: 0, // shift
    state: 79, // 'state 79'
    symbol: undefined,
  },
  // 'action 2414'
  {
    op: 0, // shift
    state: 80, // 'state 80'
    symbol: undefined,
  },
  // 'action 2415'
  {
    op: 0, // shift
    state: 81, // 'state 81'
    symbol: undefined,
  },
  // 'action 2416'
  {
    op: 0, // shift
    state: 246, // 'state 246'
    symbol: undefined,
  },
  // 'action 2417'
  {
    op: 0, // shift
    state: 174, // 'state 174'
    symbol: undefined,
  },
  // 'action 2418'
  {
    op: 0, // shift
    state: 84, // 'state 84'
    symbol: undefined,
  },
  // 'action 2419'
  {
    op: 0, // shift
    state: 85, // 'state 85'
    symbol: undefined,
  },
  // 'action 2420'
  {
    op: 0, // shift
    state: 247, // 'state 247'
    symbol: undefined,
  },
  // 'action 2421'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2422'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2423'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2424'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2425'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2426'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2427'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2428'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2429'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2430'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2431'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2432'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2433'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2434'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2435'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2436'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2437'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2438'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2439'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2440'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2441'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2442'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2443'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2444'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2445'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2446'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2447'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2448'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2449'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2450'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2451'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2452'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2453'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2454'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2455'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2456'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2457'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2458'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2459'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Group
  },
  // 'action 2460'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2461'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2462'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2463'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2464'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2465'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2466'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2467'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2468'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2469'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2470'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2471'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2472'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2473'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2474'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2475'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2476'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2477'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2478'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2479'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2480'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2481'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2482'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2483'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2484'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 2485'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 2486'
  {
    op: 0, // shift
    state: 248, // 'state 248'
    symbol: undefined,
  },
  // 'action 2487'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 2488'
  {
    op: 0, // shift
    state: 249, // 'state 249'
    symbol: undefined,
  },
  // 'action 2489'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 2490'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 2491'
  {
    op: 0, // shift
    state: 250, // 'state 250'
    symbol: undefined,
  },
  // 'action 2492'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 2493'
  {
    op: 0, // shift
    state: 251, // 'state 251'
    symbol: undefined,
  },
  // 'action 2494'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2495'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2496'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2497'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2498'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2499'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2500'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2501'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2502'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2503'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2504'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2505'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2506'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2507'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2508'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2509'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2510'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2511'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2512'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2513'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2514'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2515'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2516'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2517'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2518'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2519'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2520'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2521'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2522'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2523'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2524'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2525'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2526'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2527'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2528'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2529'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2530'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2531'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2532'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2533'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2534'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2535'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2536'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2537'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2538'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2539'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2540'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2541'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2542'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2543'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2544'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2545'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2546'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2547'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2548'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2549'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2550'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2551'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2552'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2553'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2554'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2555'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2556'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2557'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2558'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2559'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2560'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 2561'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 2562'
  {
    op: 0, // shift
    state: 73, // 'state 73'
    symbol: undefined,
  },
  // 'action 2563'
  {
    op: 0, // shift
    state: 74, // 'state 74'
    symbol: undefined,
  },
  // 'action 2564'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 2565'
  {
    op: 0, // shift
    state: 77, // 'state 77'
    symbol: undefined,
  },
  // 'action 2566'
  {
    op: 0, // shift
    state: 78, // 'state 78'
    symbol: undefined,
  },
  // 'action 2567'
  {
    op: 0, // shift
    state: 79, // 'state 79'
    symbol: undefined,
  },
  // 'action 2568'
  {
    op: 0, // shift
    state: 80, // 'state 80'
    symbol: undefined,
  },
  // 'action 2569'
  {
    op: 0, // shift
    state: 81, // 'state 81'
    symbol: undefined,
  },
  // 'action 2570'
  {
    op: 0, // shift
    state: 252, // 'state 252'
    symbol: undefined,
  },
  // 'action 2571'
  {
    op: 0, // shift
    state: 174, // 'state 174'
    symbol: undefined,
  },
  // 'action 2572'
  {
    op: 0, // shift
    state: 84, // 'state 84'
    symbol: undefined,
  },
  // 'action 2573'
  {
    op: 0, // shift
    state: 85, // 'state 85'
    symbol: undefined,
  },
  // 'action 2574'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2575'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2576'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2577'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2578'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2579'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2580'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2581'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2582'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2583'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2584'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2585'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2586'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2587'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2588'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2589'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2590'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2591'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2592'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2593'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2594'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2595'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2596'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2597'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2598'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2599'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2600'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2601'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2602'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2603'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2604'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2605'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2606'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2607'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2608'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2609'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2610'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassCharacters
  },
  // 'action 2611'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 2612'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 2613'
  {
    op: 0, // shift
    state: 253, // 'state 253'
    symbol: undefined,
  },
  // 'action 2614'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 2615'
  {
    op: 0, // shift
    state: 254, // 'state 254'
    symbol: undefined,
  },
  // 'action 2616'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 2617'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 2618'
  {
    op: 0, // shift
    state: 255, // 'state 255'
    symbol: undefined,
  },
  // 'action 2619'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 2620'
  {
    op: 0, // shift
    state: 256, // 'state 256'
    symbol: undefined,
  },
  // 'action 2621'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2622'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2623'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2624'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2625'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2626'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2627'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2628'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2629'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2630'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2631'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2632'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2633'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2634'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2635'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2636'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2637'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2638'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2639'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2640'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2641'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2642'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2643'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2644'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2645'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2646'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2647'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2648'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2649'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2650'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2651'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2652'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2653'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2654'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2655'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2656'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2657'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2658'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2659'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2660'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2661'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2662'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2663'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2664'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2665'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2666'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2667'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2668'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2669'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2670'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2671'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2672'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2673'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2674'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2675'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2676'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2677'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2678'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2679'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2680'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2681'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2682'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2683'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2684'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2685'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2686'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2687'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 2688'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 2689'
  {
    op: 0, // shift
    state: 73, // 'state 73'
    symbol: undefined,
  },
  // 'action 2690'
  {
    op: 0, // shift
    state: 74, // 'state 74'
    symbol: undefined,
  },
  // 'action 2691'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 2692'
  {
    op: 0, // shift
    state: 77, // 'state 77'
    symbol: undefined,
  },
  // 'action 2693'
  {
    op: 0, // shift
    state: 78, // 'state 78'
    symbol: undefined,
  },
  // 'action 2694'
  {
    op: 0, // shift
    state: 79, // 'state 79'
    symbol: undefined,
  },
  // 'action 2695'
  {
    op: 0, // shift
    state: 80, // 'state 80'
    symbol: undefined,
  },
  // 'action 2696'
  {
    op: 0, // shift
    state: 81, // 'state 81'
    symbol: undefined,
  },
  // 'action 2697'
  {
    op: 0, // shift
    state: 257, // 'state 257'
    symbol: undefined,
  },
  // 'action 2698'
  {
    op: 0, // shift
    state: 174, // 'state 174'
    symbol: undefined,
  },
  // 'action 2699'
  {
    op: 0, // shift
    state: 84, // 'state 84'
    symbol: undefined,
  },
  // 'action 2700'
  {
    op: 0, // shift
    state: 85, // 'state 85'
    symbol: undefined,
  },
  // 'action 2701'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 2702'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 2703'
  {
    op: 0, // shift
    state: 258, // 'state 258'
    symbol: undefined,
  },
  // 'action 2704'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 2705'
  {
    op: 0, // shift
    state: 259, // 'state 259'
    symbol: undefined,
  },
  // 'action 2706'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 2707'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 2708'
  {
    op: 0, // shift
    state: 260, // 'state 260'
    symbol: undefined,
  },
  // 'action 2709'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 2710'
  {
    op: 0, // shift
    state: 261, // 'state 261'
    symbol: undefined,
  },
  // 'action 2711'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2712'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2713'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2714'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2715'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2716'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2717'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2718'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2719'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2720'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2721'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2722'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2723'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2724'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2725'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2726'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2727'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2728'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2729'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2730'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2731'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2732'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2733'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2734'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2735'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2736'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2737'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2738'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2739'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2740'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2741'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2742'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2743'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2744'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2745'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2746'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2747'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2748'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2749'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2750'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2751'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2752'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2753'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2754'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2755'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2756'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2757'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2758'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2759'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2760'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2761'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2762'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2763'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2764'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2765'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2766'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2767'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2768'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2769'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2770'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2771'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2772'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2773'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2774'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2775'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2776'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // CharacterClassCharacter
  },
  // 'action 2777'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2778'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2779'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2780'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2781'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2782'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2783'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2784'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2785'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2786'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2787'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2788'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2789'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2790'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2791'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2792'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2793'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2794'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2795'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2796'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2797'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2798'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2799'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2800'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2801'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2802'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2803'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2804'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2805'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2806'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2807'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2808'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2809'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2810'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2811'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2812'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2813'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2814'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2815'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2816'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2817'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2818'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2819'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2820'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2821'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2822'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2823'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2824'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2825'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2826'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2827'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2828'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2829'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2830'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2831'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2832'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2833'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2834'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2835'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2836'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2837'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2838'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2839'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2840'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2841'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2842'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2843'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2844'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2845'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2846'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2847'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2848'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2849'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2850'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2851'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2852'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2853'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2854'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2855'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2856'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2857'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2858'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2859'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2860'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2861'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2862'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2863'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2864'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2865'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2866'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2867'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2868'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2869'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2870'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2871'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2872'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2873'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2874'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2875'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2876'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2877'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2878'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2879'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2880'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2881'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2882'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2883'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2884'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2885'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2886'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2887'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2888'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2889'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2890'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2891'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2892'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2893'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2894'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2895'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2896'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2897'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2898'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2899'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2900'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2901'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2902'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2903'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2904'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2905'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2906'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2907'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2908'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2909'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2910'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2911'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2912'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2913'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2914'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2915'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2916'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Character
  },
  // 'action 2917'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2918'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2919'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2920'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2921'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2922'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2923'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2924'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2925'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2926'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2927'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2928'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2929'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2930'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2931'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2932'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2933'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2934'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2935'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2936'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2937'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2938'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2939'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2940'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2941'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2942'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2943'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2944'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2945'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2946'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2947'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2948'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2949'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2950'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2951'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2952'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2953'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2954'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2955'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2956'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2957'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2958'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2959'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2960'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2961'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2962'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2963'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2964'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2965'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2966'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2967'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2968'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2969'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2970'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2971'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2972'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2973'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 2974'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2975'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2976'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2977'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2978'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2979'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2980'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2981'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2982'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2983'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2984'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2985'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2986'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2987'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2988'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2989'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2990'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2991'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2992'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2993'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2994'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2995'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2996'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2997'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2998'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 2999'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3000'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3001'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3002'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3003'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3004'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3005'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3006'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3007'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3008'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3009'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3010'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3011'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3012'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3013'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3014'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3015'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3016'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3017'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3018'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 3019'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 3020'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 3021'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 3022'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 3023'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 3024'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 3025'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 3026'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 3027'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 3028'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 3029'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 3030'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClass
  },
  // 'action 3031'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3032'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3033'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3034'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3035'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3036'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3037'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3038'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3039'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3040'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3041'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3042'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3043'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3044'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3045'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3046'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3047'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3048'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3049'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3050'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3051'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3052'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3053'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3054'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3055'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3056'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3057'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3058'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3059'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3060'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3061'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3062'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3063'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3064'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3065'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3066'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3067'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3068'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3069'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3070'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3071'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3072'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3073'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
  // 'action 3074'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // CharacterClassRange
  },
];
const actionsTable = new Uint16Array(16768).fill(0xffff);
actionsTable[0] = 0; // 'state 0' -> CHARACTER -> shift -> 'action 0'
actionsTable[1] = 1; // 'state 0' -> NUMBER -> shift -> 'action 1'
actionsTable[2] = 2; // 'state 0' -> CONTROL_CHARACTER -> shift -> 'action 2'
actionsTable[3] = 3; // 'state 0' -> BACKSLASH -> shift -> 'action 3'
actionsTable[4] = 4; // 'state 0' -> X -> shift -> 'action 4'
actionsTable[5] = 5; // 'state 0' -> CARET -> shift -> 'action 5'
actionsTable[6] = 6; // 'state 0' -> DASH -> shift -> 'action 6'
actionsTable[9] = 7; // 'state 0' -> PAREN_OPEN -> shift -> 'action 7'
actionsTable[12] = 8; // 'state 0' -> BRACKET_OPEN -> shift -> 'action 8'
actionsTable[17] = 9; // 'state 0' -> RegExp -> shift -> 'action 9'
actionsTable[18] = 10; // 'state 0' -> Expression -> shift -> 'action 10'
actionsTable[19] = 11; // 'state 0' -> Union -> shift -> 'action 11'
actionsTable[20] = 12; // 'state 0' -> Sequence -> shift -> 'action 12'
actionsTable[21] = 13; // 'state 0' -> Atom -> shift -> 'action 13'
actionsTable[22] = 14; // 'state 0' -> Group -> shift -> 'action 14'
actionsTable[23] = 15; // 'state 0' -> CharacterClass -> shift -> 'action 15'
actionsTable[27] = 16; // 'state 0' -> Character -> shift -> 'action 16'
actionsTable[28] = 17; // 'state 0' -> CharacterOrNumberOrX -> shift -> 'action 17'
actionsTable[654] = 18; // 'state 10' -> @par-gen.EOF -> done -> 'action 18'
actionsTable[718] = 19; // 'state 11' -> @par-gen.EOF -> reduce -> 'action 19'
actionsTable[776] = 20; // 'state 12' -> UNION -> shift -> 'action 20'
actionsTable[782] = 21; // 'state 12' -> @par-gen.EOF -> reduce -> 'action 21'
actionsTable[832] = 22; // 'state 13' -> CHARACTER -> shift -> 'action 22'
actionsTable[833] = 23; // 'state 13' -> NUMBER -> shift -> 'action 23'
actionsTable[834] = 24; // 'state 13' -> CONTROL_CHARACTER -> shift -> 'action 24'
actionsTable[835] = 25; // 'state 13' -> BACKSLASH -> shift -> 'action 25'
actionsTable[836] = 26; // 'state 13' -> X -> shift -> 'action 26'
actionsTable[837] = 27; // 'state 13' -> CARET -> shift -> 'action 27'
actionsTable[838] = 28; // 'state 13' -> DASH -> shift -> 'action 28'
actionsTable[840] = 29; // 'state 13' -> UNION -> shift -> 'action 29'
actionsTable[841] = 30; // 'state 13' -> PAREN_OPEN -> shift -> 'action 30'
actionsTable[844] = 31; // 'state 13' -> BRACKET_OPEN -> shift -> 'action 31'
actionsTable[853] = 32; // 'state 13' -> Atom -> shift -> 'action 32'
actionsTable[854] = 33; // 'state 13' -> Group -> shift -> 'action 33'
actionsTable[855] = 34; // 'state 13' -> CharacterClass -> shift -> 'action 34'
actionsTable[859] = 35; // 'state 13' -> Character -> shift -> 'action 35'
actionsTable[860] = 36; // 'state 13' -> CharacterOrNumberOrX -> shift -> 'action 36'
actionsTable[846] = 37; // 'state 13' -> @par-gen.EOF -> reduce -> 'action 37'
actionsTable[896] = 38; // 'state 14' -> CHARACTER -> shift -> 'action 38'
actionsTable[897] = 39; // 'state 14' -> NUMBER -> shift -> 'action 39'
actionsTable[898] = 40; // 'state 14' -> CONTROL_CHARACTER -> shift -> 'action 40'
actionsTable[899] = 41; // 'state 14' -> BACKSLASH -> shift -> 'action 41'
actionsTable[900] = 42; // 'state 14' -> X -> shift -> 'action 42'
actionsTable[901] = 43; // 'state 14' -> CARET -> shift -> 'action 43'
actionsTable[902] = 44; // 'state 14' -> DASH -> shift -> 'action 44'
actionsTable[904] = 45; // 'state 14' -> UNION -> shift -> 'action 45'
actionsTable[905] = 46; // 'state 14' -> PAREN_OPEN -> shift -> 'action 46'
actionsTable[908] = 47; // 'state 14' -> BRACKET_OPEN -> shift -> 'action 47'
actionsTable[917] = 48; // 'state 14' -> Atom -> shift -> 'action 48'
actionsTable[918] = 49; // 'state 14' -> Group -> shift -> 'action 49'
actionsTable[919] = 50; // 'state 14' -> CharacterClass -> shift -> 'action 50'
actionsTable[923] = 51; // 'state 14' -> Character -> shift -> 'action 51'
actionsTable[924] = 52; // 'state 14' -> CharacterOrNumberOrX -> shift -> 'action 52'
actionsTable[910] = 53; // 'state 14' -> @par-gen.EOF -> reduce -> 'action 53'
actionsTable[1099] = 54; // 'state 17' -> QUANTIFIER -> shift -> 'action 54'
actionsTable[1088] = 55; // 'state 17' -> CHARACTER -> reduce -> 'action 55'
actionsTable[1089] = 56; // 'state 17' -> NUMBER -> reduce -> 'action 56'
actionsTable[1090] = 57; // 'state 17' -> CONTROL_CHARACTER -> reduce -> 'action 57'
actionsTable[1091] = 58; // 'state 17' -> BACKSLASH -> reduce -> 'action 58'
actionsTable[1092] = 59; // 'state 17' -> X -> reduce -> 'action 59'
actionsTable[1093] = 60; // 'state 17' -> CARET -> reduce -> 'action 60'
actionsTable[1094] = 61; // 'state 17' -> DASH -> reduce -> 'action 61'
actionsTable[1096] = 62; // 'state 17' -> UNION -> reduce -> 'action 62'
actionsTable[1097] = 63; // 'state 17' -> PAREN_OPEN -> reduce -> 'action 63'
actionsTable[1098] = 64; // 'state 17' -> PAREN_CLOSE -> reduce -> 'action 64'
actionsTable[1100] = 65; // 'state 17' -> BRACKET_OPEN -> reduce -> 'action 65'
actionsTable[1102] = 66; // 'state 17' -> @par-gen.EOF -> reduce -> 'action 66'
actionsTable[971] = 67; // 'state 15' -> QUANTIFIER -> shift -> 'action 67'
actionsTable[960] = 68; // 'state 15' -> CHARACTER -> reduce -> 'action 68'
actionsTable[961] = 69; // 'state 15' -> NUMBER -> reduce -> 'action 69'
actionsTable[962] = 70; // 'state 15' -> CONTROL_CHARACTER -> reduce -> 'action 70'
actionsTable[963] = 71; // 'state 15' -> BACKSLASH -> reduce -> 'action 71'
actionsTable[964] = 72; // 'state 15' -> X -> reduce -> 'action 72'
actionsTable[965] = 73; // 'state 15' -> CARET -> reduce -> 'action 73'
actionsTable[966] = 74; // 'state 15' -> DASH -> reduce -> 'action 74'
actionsTable[968] = 75; // 'state 15' -> UNION -> reduce -> 'action 75'
actionsTable[969] = 76; // 'state 15' -> PAREN_OPEN -> reduce -> 'action 76'
actionsTable[970] = 77; // 'state 15' -> PAREN_CLOSE -> reduce -> 'action 77'
actionsTable[972] = 78; // 'state 15' -> BRACKET_OPEN -> reduce -> 'action 78'
actionsTable[974] = 79; // 'state 15' -> @par-gen.EOF -> reduce -> 'action 79'
actionsTable[1035] = 80; // 'state 16' -> QUANTIFIER -> shift -> 'action 80'
actionsTable[1024] = 81; // 'state 16' -> CHARACTER -> reduce -> 'action 81'
actionsTable[1025] = 82; // 'state 16' -> NUMBER -> reduce -> 'action 82'
actionsTable[1026] = 83; // 'state 16' -> CONTROL_CHARACTER -> reduce -> 'action 83'
actionsTable[1027] = 84; // 'state 16' -> BACKSLASH -> reduce -> 'action 84'
actionsTable[1028] = 85; // 'state 16' -> X -> reduce -> 'action 85'
actionsTable[1029] = 86; // 'state 16' -> CARET -> reduce -> 'action 86'
actionsTable[1030] = 87; // 'state 16' -> DASH -> reduce -> 'action 87'
actionsTable[1032] = 88; // 'state 16' -> UNION -> reduce -> 'action 88'
actionsTable[1033] = 89; // 'state 16' -> PAREN_OPEN -> reduce -> 'action 89'
actionsTable[1034] = 90; // 'state 16' -> PAREN_CLOSE -> reduce -> 'action 90'
actionsTable[1036] = 91; // 'state 16' -> BRACKET_OPEN -> reduce -> 'action 91'
actionsTable[1038] = 92; // 'state 16' -> @par-gen.EOF -> reduce -> 'action 92'
actionsTable[1152] = 93; // 'state 18' -> CHARACTER -> reduce -> 'action 93'
actionsTable[1153] = 94; // 'state 18' -> NUMBER -> reduce -> 'action 94'
actionsTable[1154] = 95; // 'state 18' -> CONTROL_CHARACTER -> reduce -> 'action 95'
actionsTable[1155] = 96; // 'state 18' -> BACKSLASH -> reduce -> 'action 96'
actionsTable[1156] = 97; // 'state 18' -> X -> reduce -> 'action 97'
actionsTable[1157] = 98; // 'state 18' -> CARET -> reduce -> 'action 98'
actionsTable[1158] = 99; // 'state 18' -> DASH -> reduce -> 'action 99'
actionsTable[1160] = 100; // 'state 18' -> UNION -> reduce -> 'action 100'
actionsTable[1161] = 101; // 'state 18' -> PAREN_OPEN -> reduce -> 'action 101'
actionsTable[1162] = 102; // 'state 18' -> PAREN_CLOSE -> reduce -> 'action 102'
actionsTable[1163] = 103; // 'state 18' -> QUANTIFIER -> reduce -> 'action 103'
actionsTable[1164] = 104; // 'state 18' -> BRACKET_OPEN -> reduce -> 'action 104'
actionsTable[1166] = 105; // 'state 18' -> @par-gen.EOF -> reduce -> 'action 105'
actionsTable[192] = 106; // 'state 3' -> CHARACTER -> reduce -> 'action 106'
actionsTable[193] = 107; // 'state 3' -> NUMBER -> reduce -> 'action 107'
actionsTable[194] = 108; // 'state 3' -> CONTROL_CHARACTER -> reduce -> 'action 108'
actionsTable[195] = 109; // 'state 3' -> BACKSLASH -> reduce -> 'action 109'
actionsTable[196] = 110; // 'state 3' -> X -> reduce -> 'action 110'
actionsTable[197] = 111; // 'state 3' -> CARET -> reduce -> 'action 111'
actionsTable[198] = 112; // 'state 3' -> DASH -> reduce -> 'action 112'
actionsTable[200] = 113; // 'state 3' -> UNION -> reduce -> 'action 113'
actionsTable[201] = 114; // 'state 3' -> PAREN_OPEN -> reduce -> 'action 114'
actionsTable[202] = 115; // 'state 3' -> PAREN_CLOSE -> reduce -> 'action 115'
actionsTable[203] = 116; // 'state 3' -> QUANTIFIER -> reduce -> 'action 116'
actionsTable[204] = 117; // 'state 3' -> BRACKET_OPEN -> reduce -> 'action 117'
actionsTable[206] = 118; // 'state 3' -> @par-gen.EOF -> reduce -> 'action 118'
actionsTable[384] = 119; // 'state 6' -> CHARACTER -> reduce -> 'action 119'
actionsTable[385] = 120; // 'state 6' -> NUMBER -> reduce -> 'action 120'
actionsTable[386] = 121; // 'state 6' -> CONTROL_CHARACTER -> reduce -> 'action 121'
actionsTable[387] = 122; // 'state 6' -> BACKSLASH -> reduce -> 'action 122'
actionsTable[388] = 123; // 'state 6' -> X -> reduce -> 'action 123'
actionsTable[389] = 124; // 'state 6' -> CARET -> reduce -> 'action 124'
actionsTable[390] = 125; // 'state 6' -> DASH -> reduce -> 'action 125'
actionsTable[392] = 126; // 'state 6' -> UNION -> reduce -> 'action 126'
actionsTable[393] = 127; // 'state 6' -> PAREN_OPEN -> reduce -> 'action 127'
actionsTable[394] = 128; // 'state 6' -> PAREN_CLOSE -> reduce -> 'action 128'
actionsTable[395] = 129; // 'state 6' -> QUANTIFIER -> reduce -> 'action 129'
actionsTable[396] = 130; // 'state 6' -> BRACKET_OPEN -> reduce -> 'action 130'
actionsTable[398] = 131; // 'state 6' -> @par-gen.EOF -> reduce -> 'action 131'
actionsTable[448] = 132; // 'state 7' -> CHARACTER -> reduce -> 'action 132'
actionsTable[449] = 133; // 'state 7' -> NUMBER -> reduce -> 'action 133'
actionsTable[450] = 134; // 'state 7' -> CONTROL_CHARACTER -> reduce -> 'action 134'
actionsTable[451] = 135; // 'state 7' -> BACKSLASH -> reduce -> 'action 135'
actionsTable[452] = 136; // 'state 7' -> X -> reduce -> 'action 136'
actionsTable[453] = 137; // 'state 7' -> CARET -> reduce -> 'action 137'
actionsTable[454] = 138; // 'state 7' -> DASH -> reduce -> 'action 138'
actionsTable[456] = 139; // 'state 7' -> UNION -> reduce -> 'action 139'
actionsTable[457] = 140; // 'state 7' -> PAREN_OPEN -> reduce -> 'action 140'
actionsTable[458] = 141; // 'state 7' -> PAREN_CLOSE -> reduce -> 'action 141'
actionsTable[459] = 142; // 'state 7' -> QUANTIFIER -> reduce -> 'action 142'
actionsTable[460] = 143; // 'state 7' -> BRACKET_OPEN -> reduce -> 'action 143'
actionsTable[462] = 144; // 'state 7' -> @par-gen.EOF -> reduce -> 'action 144'
actionsTable[258] = 145; // 'state 4' -> CONTROL_CHARACTER -> shift -> 'action 145'
actionsTable[259] = 146; // 'state 4' -> BACKSLASH -> shift -> 'action 146'
actionsTable[260] = 147; // 'state 4' -> X -> shift -> 'action 147'
actionsTable[263] = 148; // 'state 4' -> DOT -> shift -> 'action 148'
actionsTable[264] = 149; // 'state 4' -> UNION -> shift -> 'action 149'
actionsTable[265] = 150; // 'state 4' -> PAREN_OPEN -> shift -> 'action 150'
actionsTable[266] = 151; // 'state 4' -> PAREN_CLOSE -> shift -> 'action 151'
actionsTable[267] = 152; // 'state 4' -> QUANTIFIER -> shift -> 'action 152'
actionsTable[268] = 153; // 'state 4' -> BRACKET_OPEN -> shift -> 'action 153'
actionsTable[269] = 154; // 'state 4' -> BRACKET_CLOSE -> shift -> 'action 154'
actionsTable[285] = 155; // 'state 4' -> EscapedCharacter -> shift -> 'action 155'
actionsTable[512] = 156; // 'state 8' -> CHARACTER -> shift -> 'action 156'
actionsTable[513] = 157; // 'state 8' -> NUMBER -> shift -> 'action 157'
actionsTable[514] = 158; // 'state 8' -> CONTROL_CHARACTER -> shift -> 'action 158'
actionsTable[515] = 159; // 'state 8' -> BACKSLASH -> shift -> 'action 159'
actionsTable[516] = 160; // 'state 8' -> X -> shift -> 'action 160'
actionsTable[517] = 161; // 'state 8' -> CARET -> shift -> 'action 161'
actionsTable[518] = 162; // 'state 8' -> DASH -> shift -> 'action 162'
actionsTable[521] = 163; // 'state 8' -> PAREN_OPEN -> shift -> 'action 163'
actionsTable[524] = 164; // 'state 8' -> BRACKET_OPEN -> shift -> 'action 164'
actionsTable[531] = 165; // 'state 8' -> Union -> shift -> 'action 165'
actionsTable[532] = 166; // 'state 8' -> Sequence -> shift -> 'action 166'
actionsTable[533] = 167; // 'state 8' -> Atom -> shift -> 'action 167'
actionsTable[534] = 168; // 'state 8' -> Group -> shift -> 'action 168'
actionsTable[535] = 169; // 'state 8' -> CharacterClass -> shift -> 'action 169'
actionsTable[539] = 170; // 'state 8' -> Character -> shift -> 'action 170'
actionsTable[540] = 171; // 'state 8' -> CharacterOrNumberOrX -> shift -> 'action 171'
actionsTable[576] = 172; // 'state 9' -> CHARACTER -> shift -> 'action 172'
actionsTable[577] = 173; // 'state 9' -> NUMBER -> shift -> 'action 173'
actionsTable[578] = 174; // 'state 9' -> CONTROL_CHARACTER -> shift -> 'action 174'
actionsTable[579] = 175; // 'state 9' -> BACKSLASH -> shift -> 'action 175'
actionsTable[580] = 176; // 'state 9' -> X -> shift -> 'action 176'
actionsTable[581] = 177; // 'state 9' -> CARET -> shift -> 'action 177'
actionsTable[583] = 178; // 'state 9' -> DOT -> shift -> 'action 178'
actionsTable[584] = 179; // 'state 9' -> UNION -> shift -> 'action 179'
actionsTable[585] = 180; // 'state 9' -> PAREN_OPEN -> shift -> 'action 180'
actionsTable[586] = 181; // 'state 9' -> PAREN_CLOSE -> shift -> 'action 181'
actionsTable[587] = 182; // 'state 9' -> QUANTIFIER -> shift -> 'action 182'
actionsTable[600] = 183; // 'state 9' -> CharacterClassCharacters -> shift -> 'action 183'
actionsTable[601] = 184; // 'state 9' -> CharacterClassCharacter -> shift -> 'action 184'
actionsTable[602] = 185; // 'state 9' -> CharacterClassRange -> shift -> 'action 185'
actionsTable[604] = 186; // 'state 9' -> CharacterOrNumberOrX -> shift -> 'action 186'
actionsTable[64] = 187; // 'state 1' -> CHARACTER -> reduce -> 'action 187'
actionsTable[65] = 188; // 'state 1' -> NUMBER -> reduce -> 'action 188'
actionsTable[66] = 189; // 'state 1' -> CONTROL_CHARACTER -> reduce -> 'action 189'
actionsTable[67] = 190; // 'state 1' -> BACKSLASH -> reduce -> 'action 190'
actionsTable[68] = 191; // 'state 1' -> X -> reduce -> 'action 191'
actionsTable[69] = 192; // 'state 1' -> CARET -> reduce -> 'action 192'
actionsTable[70] = 193; // 'state 1' -> DASH -> reduce -> 'action 193'
actionsTable[71] = 194; // 'state 1' -> DOT -> reduce -> 'action 194'
actionsTable[72] = 195; // 'state 1' -> UNION -> reduce -> 'action 195'
actionsTable[73] = 196; // 'state 1' -> PAREN_OPEN -> reduce -> 'action 196'
actionsTable[74] = 197; // 'state 1' -> PAREN_CLOSE -> reduce -> 'action 197'
actionsTable[75] = 198; // 'state 1' -> QUANTIFIER -> reduce -> 'action 198'
actionsTable[76] = 199; // 'state 1' -> BRACKET_OPEN -> reduce -> 'action 199'
actionsTable[77] = 200; // 'state 1' -> BRACKET_CLOSE -> reduce -> 'action 200'
actionsTable[78] = 201; // 'state 1' -> @par-gen.EOF -> reduce -> 'action 201'
actionsTable[128] = 202; // 'state 2' -> CHARACTER -> reduce -> 'action 202'
actionsTable[129] = 203; // 'state 2' -> NUMBER -> reduce -> 'action 203'
actionsTable[130] = 204; // 'state 2' -> CONTROL_CHARACTER -> reduce -> 'action 204'
actionsTable[131] = 205; // 'state 2' -> BACKSLASH -> reduce -> 'action 205'
actionsTable[132] = 206; // 'state 2' -> X -> reduce -> 'action 206'
actionsTable[133] = 207; // 'state 2' -> CARET -> reduce -> 'action 207'
actionsTable[134] = 208; // 'state 2' -> DASH -> reduce -> 'action 208'
actionsTable[135] = 209; // 'state 2' -> DOT -> reduce -> 'action 209'
actionsTable[136] = 210; // 'state 2' -> UNION -> reduce -> 'action 210'
actionsTable[137] = 211; // 'state 2' -> PAREN_OPEN -> reduce -> 'action 211'
actionsTable[138] = 212; // 'state 2' -> PAREN_CLOSE -> reduce -> 'action 212'
actionsTable[139] = 213; // 'state 2' -> QUANTIFIER -> reduce -> 'action 213'
actionsTable[140] = 214; // 'state 2' -> BRACKET_OPEN -> reduce -> 'action 214'
actionsTable[141] = 215; // 'state 2' -> BRACKET_CLOSE -> reduce -> 'action 215'
actionsTable[142] = 216; // 'state 2' -> @par-gen.EOF -> reduce -> 'action 216'
actionsTable[320] = 217; // 'state 5' -> CHARACTER -> reduce -> 'action 217'
actionsTable[321] = 218; // 'state 5' -> NUMBER -> reduce -> 'action 218'
actionsTable[322] = 219; // 'state 5' -> CONTROL_CHARACTER -> reduce -> 'action 219'
actionsTable[323] = 220; // 'state 5' -> BACKSLASH -> reduce -> 'action 220'
actionsTable[324] = 221; // 'state 5' -> X -> reduce -> 'action 221'
actionsTable[325] = 222; // 'state 5' -> CARET -> reduce -> 'action 222'
actionsTable[326] = 223; // 'state 5' -> DASH -> reduce -> 'action 223'
actionsTable[327] = 224; // 'state 5' -> DOT -> reduce -> 'action 224'
actionsTable[328] = 225; // 'state 5' -> UNION -> reduce -> 'action 225'
actionsTable[329] = 226; // 'state 5' -> PAREN_OPEN -> reduce -> 'action 226'
actionsTable[330] = 227; // 'state 5' -> PAREN_CLOSE -> reduce -> 'action 227'
actionsTable[331] = 228; // 'state 5' -> QUANTIFIER -> reduce -> 'action 228'
actionsTable[332] = 229; // 'state 5' -> BRACKET_OPEN -> reduce -> 'action 229'
actionsTable[333] = 230; // 'state 5' -> BRACKET_CLOSE -> reduce -> 'action 230'
actionsTable[334] = 231; // 'state 5' -> @par-gen.EOF -> reduce -> 'action 231'
actionsTable[1216] = 232; // 'state 19' -> CHARACTER -> shift -> 'action 232'
actionsTable[1217] = 233; // 'state 19' -> NUMBER -> shift -> 'action 233'
actionsTable[1218] = 234; // 'state 19' -> CONTROL_CHARACTER -> shift -> 'action 234'
actionsTable[1219] = 235; // 'state 19' -> BACKSLASH -> shift -> 'action 235'
actionsTable[1220] = 236; // 'state 19' -> X -> shift -> 'action 236'
actionsTable[1221] = 237; // 'state 19' -> CARET -> shift -> 'action 237'
actionsTable[1222] = 238; // 'state 19' -> DASH -> shift -> 'action 238'
actionsTable[1225] = 239; // 'state 19' -> PAREN_OPEN -> shift -> 'action 239'
actionsTable[1228] = 240; // 'state 19' -> BRACKET_OPEN -> shift -> 'action 240'
actionsTable[1236] = 241; // 'state 19' -> Sequence -> shift -> 'action 241'
actionsTable[1237] = 242; // 'state 19' -> Atom -> shift -> 'action 242'
actionsTable[1238] = 243; // 'state 19' -> Group -> shift -> 'action 243'
actionsTable[1239] = 244; // 'state 19' -> CharacterClass -> shift -> 'action 244'
actionsTable[1243] = 245; // 'state 19' -> Character -> shift -> 'action 245'
actionsTable[1244] = 246; // 'state 19' -> CharacterOrNumberOrX -> shift -> 'action 246'
actionsTable[1224] = 247; // 'state 19' -> UNION -> reduce -> 'action 247'
actionsTable[1226] = 248; // 'state 19' -> PAREN_CLOSE -> reduce -> 'action 248'
actionsTable[1230] = 249; // 'state 19' -> @par-gen.EOF -> reduce -> 'action 249'
actionsTable[1728] = 250; // 'state 27' -> CHARACTER -> shift -> 'action 250'
actionsTable[1729] = 251; // 'state 27' -> NUMBER -> shift -> 'action 251'
actionsTable[1730] = 252; // 'state 27' -> CONTROL_CHARACTER -> shift -> 'action 252'
actionsTable[1731] = 253; // 'state 27' -> BACKSLASH -> shift -> 'action 253'
actionsTable[1732] = 254; // 'state 27' -> X -> shift -> 'action 254'
actionsTable[1733] = 255; // 'state 27' -> CARET -> shift -> 'action 255'
actionsTable[1734] = 256; // 'state 27' -> DASH -> shift -> 'action 256'
actionsTable[1737] = 257; // 'state 27' -> PAREN_OPEN -> shift -> 'action 257'
actionsTable[1740] = 258; // 'state 27' -> BRACKET_OPEN -> shift -> 'action 258'
actionsTable[1748] = 259; // 'state 27' -> Sequence -> shift -> 'action 259'
actionsTable[1749] = 260; // 'state 27' -> Atom -> shift -> 'action 260'
actionsTable[1750] = 261; // 'state 27' -> Group -> shift -> 'action 261'
actionsTable[1751] = 262; // 'state 27' -> CharacterClass -> shift -> 'action 262'
actionsTable[1755] = 263; // 'state 27' -> Character -> shift -> 'action 263'
actionsTable[1756] = 264; // 'state 27' -> CharacterOrNumberOrX -> shift -> 'action 264'
actionsTable[1736] = 265; // 'state 27' -> UNION -> reduce -> 'action 265'
actionsTable[1738] = 266; // 'state 27' -> PAREN_CLOSE -> reduce -> 'action 266'
actionsTable[1742] = 267; // 'state 27' -> @par-gen.EOF -> reduce -> 'action 267'
actionsTable[1920] = 268; // 'state 30' -> CHARACTER -> reduce -> 'action 268'
actionsTable[1921] = 269; // 'state 30' -> NUMBER -> reduce -> 'action 269'
actionsTable[1922] = 270; // 'state 30' -> CONTROL_CHARACTER -> reduce -> 'action 270'
actionsTable[1923] = 271; // 'state 30' -> BACKSLASH -> reduce -> 'action 271'
actionsTable[1924] = 272; // 'state 30' -> X -> reduce -> 'action 272'
actionsTable[1925] = 273; // 'state 30' -> CARET -> reduce -> 'action 273'
actionsTable[1926] = 274; // 'state 30' -> DASH -> reduce -> 'action 274'
actionsTable[1928] = 275; // 'state 30' -> UNION -> reduce -> 'action 275'
actionsTable[1929] = 276; // 'state 30' -> PAREN_OPEN -> reduce -> 'action 276'
actionsTable[1930] = 277; // 'state 30' -> PAREN_CLOSE -> reduce -> 'action 277'
actionsTable[1932] = 278; // 'state 30' -> BRACKET_OPEN -> reduce -> 'action 278'
actionsTable[1934] = 279; // 'state 30' -> @par-gen.EOF -> reduce -> 'action 279'
actionsTable[2123] = 280; // 'state 33' -> QUANTIFIER -> shift -> 'action 280'
actionsTable[2112] = 281; // 'state 33' -> CHARACTER -> reduce -> 'action 281'
actionsTable[2113] = 282; // 'state 33' -> NUMBER -> reduce -> 'action 282'
actionsTable[2114] = 283; // 'state 33' -> CONTROL_CHARACTER -> reduce -> 'action 283'
actionsTable[2115] = 284; // 'state 33' -> BACKSLASH -> reduce -> 'action 284'
actionsTable[2116] = 285; // 'state 33' -> X -> reduce -> 'action 285'
actionsTable[2117] = 286; // 'state 33' -> CARET -> reduce -> 'action 286'
actionsTable[2118] = 287; // 'state 33' -> DASH -> reduce -> 'action 287'
actionsTable[2120] = 288; // 'state 33' -> UNION -> reduce -> 'action 288'
actionsTable[2121] = 289; // 'state 33' -> PAREN_OPEN -> reduce -> 'action 289'
actionsTable[2122] = 290; // 'state 33' -> PAREN_CLOSE -> reduce -> 'action 290'
actionsTable[2124] = 291; // 'state 33' -> BRACKET_OPEN -> reduce -> 'action 291'
actionsTable[2126] = 292; // 'state 33' -> @par-gen.EOF -> reduce -> 'action 292'
actionsTable[1995] = 293; // 'state 31' -> QUANTIFIER -> shift -> 'action 293'
actionsTable[1984] = 294; // 'state 31' -> CHARACTER -> reduce -> 'action 294'
actionsTable[1985] = 295; // 'state 31' -> NUMBER -> reduce -> 'action 295'
actionsTable[1986] = 296; // 'state 31' -> CONTROL_CHARACTER -> reduce -> 'action 296'
actionsTable[1987] = 297; // 'state 31' -> BACKSLASH -> reduce -> 'action 297'
actionsTable[1988] = 298; // 'state 31' -> X -> reduce -> 'action 298'
actionsTable[1989] = 299; // 'state 31' -> CARET -> reduce -> 'action 299'
actionsTable[1990] = 300; // 'state 31' -> DASH -> reduce -> 'action 300'
actionsTable[1992] = 301; // 'state 31' -> UNION -> reduce -> 'action 301'
actionsTable[1993] = 302; // 'state 31' -> PAREN_OPEN -> reduce -> 'action 302'
actionsTable[1994] = 303; // 'state 31' -> PAREN_CLOSE -> reduce -> 'action 303'
actionsTable[1996] = 304; // 'state 31' -> BRACKET_OPEN -> reduce -> 'action 304'
actionsTable[1998] = 305; // 'state 31' -> @par-gen.EOF -> reduce -> 'action 305'
actionsTable[2059] = 306; // 'state 32' -> QUANTIFIER -> shift -> 'action 306'
actionsTable[2048] = 307; // 'state 32' -> CHARACTER -> reduce -> 'action 307'
actionsTable[2049] = 308; // 'state 32' -> NUMBER -> reduce -> 'action 308'
actionsTable[2050] = 309; // 'state 32' -> CONTROL_CHARACTER -> reduce -> 'action 309'
actionsTable[2051] = 310; // 'state 32' -> BACKSLASH -> reduce -> 'action 310'
actionsTable[2052] = 311; // 'state 32' -> X -> reduce -> 'action 311'
actionsTable[2053] = 312; // 'state 32' -> CARET -> reduce -> 'action 312'
actionsTable[2054] = 313; // 'state 32' -> DASH -> reduce -> 'action 313'
actionsTable[2056] = 314; // 'state 32' -> UNION -> reduce -> 'action 314'
actionsTable[2057] = 315; // 'state 32' -> PAREN_OPEN -> reduce -> 'action 315'
actionsTable[2058] = 316; // 'state 32' -> PAREN_CLOSE -> reduce -> 'action 316'
actionsTable[2060] = 317; // 'state 32' -> BRACKET_OPEN -> reduce -> 'action 317'
actionsTable[2062] = 318; // 'state 32' -> @par-gen.EOF -> reduce -> 'action 318'
actionsTable[2176] = 319; // 'state 34' -> CHARACTER -> reduce -> 'action 319'
actionsTable[2177] = 320; // 'state 34' -> NUMBER -> reduce -> 'action 320'
actionsTable[2178] = 321; // 'state 34' -> CONTROL_CHARACTER -> reduce -> 'action 321'
actionsTable[2179] = 322; // 'state 34' -> BACKSLASH -> reduce -> 'action 322'
actionsTable[2180] = 323; // 'state 34' -> X -> reduce -> 'action 323'
actionsTable[2181] = 324; // 'state 34' -> CARET -> reduce -> 'action 324'
actionsTable[2182] = 325; // 'state 34' -> DASH -> reduce -> 'action 325'
actionsTable[2184] = 326; // 'state 34' -> UNION -> reduce -> 'action 326'
actionsTable[2185] = 327; // 'state 34' -> PAREN_OPEN -> reduce -> 'action 327'
actionsTable[2186] = 328; // 'state 34' -> PAREN_CLOSE -> reduce -> 'action 328'
actionsTable[2187] = 329; // 'state 34' -> QUANTIFIER -> reduce -> 'action 329'
actionsTable[2188] = 330; // 'state 34' -> BRACKET_OPEN -> reduce -> 'action 330'
actionsTable[2190] = 331; // 'state 34' -> @par-gen.EOF -> reduce -> 'action 331'
actionsTable[1408] = 332; // 'state 22' -> CHARACTER -> reduce -> 'action 332'
actionsTable[1409] = 333; // 'state 22' -> NUMBER -> reduce -> 'action 333'
actionsTable[1410] = 334; // 'state 22' -> CONTROL_CHARACTER -> reduce -> 'action 334'
actionsTable[1411] = 335; // 'state 22' -> BACKSLASH -> reduce -> 'action 335'
actionsTable[1412] = 336; // 'state 22' -> X -> reduce -> 'action 336'
actionsTable[1413] = 337; // 'state 22' -> CARET -> reduce -> 'action 337'
actionsTable[1414] = 338; // 'state 22' -> DASH -> reduce -> 'action 338'
actionsTable[1416] = 339; // 'state 22' -> UNION -> reduce -> 'action 339'
actionsTable[1417] = 340; // 'state 22' -> PAREN_OPEN -> reduce -> 'action 340'
actionsTable[1418] = 341; // 'state 22' -> PAREN_CLOSE -> reduce -> 'action 341'
actionsTable[1419] = 342; // 'state 22' -> QUANTIFIER -> reduce -> 'action 342'
actionsTable[1420] = 343; // 'state 22' -> BRACKET_OPEN -> reduce -> 'action 343'
actionsTable[1422] = 344; // 'state 22' -> @par-gen.EOF -> reduce -> 'action 344'
actionsTable[1600] = 345; // 'state 25' -> CHARACTER -> reduce -> 'action 345'
actionsTable[1601] = 346; // 'state 25' -> NUMBER -> reduce -> 'action 346'
actionsTable[1602] = 347; // 'state 25' -> CONTROL_CHARACTER -> reduce -> 'action 347'
actionsTable[1603] = 348; // 'state 25' -> BACKSLASH -> reduce -> 'action 348'
actionsTable[1604] = 349; // 'state 25' -> X -> reduce -> 'action 349'
actionsTable[1605] = 350; // 'state 25' -> CARET -> reduce -> 'action 350'
actionsTable[1606] = 351; // 'state 25' -> DASH -> reduce -> 'action 351'
actionsTable[1608] = 352; // 'state 25' -> UNION -> reduce -> 'action 352'
actionsTable[1609] = 353; // 'state 25' -> PAREN_OPEN -> reduce -> 'action 353'
actionsTable[1610] = 354; // 'state 25' -> PAREN_CLOSE -> reduce -> 'action 354'
actionsTable[1611] = 355; // 'state 25' -> QUANTIFIER -> reduce -> 'action 355'
actionsTable[1612] = 356; // 'state 25' -> BRACKET_OPEN -> reduce -> 'action 356'
actionsTable[1614] = 357; // 'state 25' -> @par-gen.EOF -> reduce -> 'action 357'
actionsTable[1664] = 358; // 'state 26' -> CHARACTER -> reduce -> 'action 358'
actionsTable[1665] = 359; // 'state 26' -> NUMBER -> reduce -> 'action 359'
actionsTable[1666] = 360; // 'state 26' -> CONTROL_CHARACTER -> reduce -> 'action 360'
actionsTable[1667] = 361; // 'state 26' -> BACKSLASH -> reduce -> 'action 361'
actionsTable[1668] = 362; // 'state 26' -> X -> reduce -> 'action 362'
actionsTable[1669] = 363; // 'state 26' -> CARET -> reduce -> 'action 363'
actionsTable[1670] = 364; // 'state 26' -> DASH -> reduce -> 'action 364'
actionsTable[1672] = 365; // 'state 26' -> UNION -> reduce -> 'action 365'
actionsTable[1673] = 366; // 'state 26' -> PAREN_OPEN -> reduce -> 'action 366'
actionsTable[1674] = 367; // 'state 26' -> PAREN_CLOSE -> reduce -> 'action 367'
actionsTable[1675] = 368; // 'state 26' -> QUANTIFIER -> reduce -> 'action 368'
actionsTable[1676] = 369; // 'state 26' -> BRACKET_OPEN -> reduce -> 'action 369'
actionsTable[1678] = 370; // 'state 26' -> @par-gen.EOF -> reduce -> 'action 370'
actionsTable[1474] = 371; // 'state 23' -> CONTROL_CHARACTER -> shift -> 'action 371'
actionsTable[1475] = 372; // 'state 23' -> BACKSLASH -> shift -> 'action 372'
actionsTable[1476] = 373; // 'state 23' -> X -> shift -> 'action 373'
actionsTable[1479] = 374; // 'state 23' -> DOT -> shift -> 'action 374'
actionsTable[1480] = 375; // 'state 23' -> UNION -> shift -> 'action 375'
actionsTable[1481] = 376; // 'state 23' -> PAREN_OPEN -> shift -> 'action 376'
actionsTable[1482] = 377; // 'state 23' -> PAREN_CLOSE -> shift -> 'action 377'
actionsTable[1483] = 378; // 'state 23' -> QUANTIFIER -> shift -> 'action 378'
actionsTable[1484] = 379; // 'state 23' -> BRACKET_OPEN -> shift -> 'action 379'
actionsTable[1485] = 380; // 'state 23' -> BRACKET_CLOSE -> shift -> 'action 380'
actionsTable[1501] = 381; // 'state 23' -> EscapedCharacter -> shift -> 'action 381'
actionsTable[1792] = 382; // 'state 28' -> CHARACTER -> shift -> 'action 382'
actionsTable[1793] = 383; // 'state 28' -> NUMBER -> shift -> 'action 383'
actionsTable[1794] = 384; // 'state 28' -> CONTROL_CHARACTER -> shift -> 'action 384'
actionsTable[1795] = 385; // 'state 28' -> BACKSLASH -> shift -> 'action 385'
actionsTable[1796] = 386; // 'state 28' -> X -> shift -> 'action 386'
actionsTable[1797] = 387; // 'state 28' -> CARET -> shift -> 'action 387'
actionsTable[1798] = 388; // 'state 28' -> DASH -> shift -> 'action 388'
actionsTable[1801] = 389; // 'state 28' -> PAREN_OPEN -> shift -> 'action 389'
actionsTable[1804] = 390; // 'state 28' -> BRACKET_OPEN -> shift -> 'action 390'
actionsTable[1811] = 391; // 'state 28' -> Union -> shift -> 'action 391'
actionsTable[1812] = 392; // 'state 28' -> Sequence -> shift -> 'action 392'
actionsTable[1813] = 393; // 'state 28' -> Atom -> shift -> 'action 393'
actionsTable[1814] = 394; // 'state 28' -> Group -> shift -> 'action 394'
actionsTable[1815] = 395; // 'state 28' -> CharacterClass -> shift -> 'action 395'
actionsTable[1819] = 396; // 'state 28' -> Character -> shift -> 'action 396'
actionsTable[1820] = 397; // 'state 28' -> CharacterOrNumberOrX -> shift -> 'action 397'
actionsTable[1856] = 398; // 'state 29' -> CHARACTER -> shift -> 'action 398'
actionsTable[1857] = 399; // 'state 29' -> NUMBER -> shift -> 'action 399'
actionsTable[1858] = 400; // 'state 29' -> CONTROL_CHARACTER -> shift -> 'action 400'
actionsTable[1859] = 401; // 'state 29' -> BACKSLASH -> shift -> 'action 401'
actionsTable[1860] = 402; // 'state 29' -> X -> shift -> 'action 402'
actionsTable[1861] = 403; // 'state 29' -> CARET -> shift -> 'action 403'
actionsTable[1863] = 404; // 'state 29' -> DOT -> shift -> 'action 404'
actionsTable[1864] = 405; // 'state 29' -> UNION -> shift -> 'action 405'
actionsTable[1865] = 406; // 'state 29' -> PAREN_OPEN -> shift -> 'action 406'
actionsTable[1866] = 407; // 'state 29' -> PAREN_CLOSE -> shift -> 'action 407'
actionsTable[1867] = 408; // 'state 29' -> QUANTIFIER -> shift -> 'action 408'
actionsTable[1880] = 409; // 'state 29' -> CharacterClassCharacters -> shift -> 'action 409'
actionsTable[1881] = 410; // 'state 29' -> CharacterClassCharacter -> shift -> 'action 410'
actionsTable[1882] = 411; // 'state 29' -> CharacterClassRange -> shift -> 'action 411'
actionsTable[1884] = 412; // 'state 29' -> CharacterOrNumberOrX -> shift -> 'action 412'
actionsTable[1280] = 413; // 'state 20' -> CHARACTER -> reduce -> 'action 413'
actionsTable[1281] = 414; // 'state 20' -> NUMBER -> reduce -> 'action 414'
actionsTable[1282] = 415; // 'state 20' -> CONTROL_CHARACTER -> reduce -> 'action 415'
actionsTable[1283] = 416; // 'state 20' -> BACKSLASH -> reduce -> 'action 416'
actionsTable[1284] = 417; // 'state 20' -> X -> reduce -> 'action 417'
actionsTable[1285] = 418; // 'state 20' -> CARET -> reduce -> 'action 418'
actionsTable[1286] = 419; // 'state 20' -> DASH -> reduce -> 'action 419'
actionsTable[1287] = 420; // 'state 20' -> DOT -> reduce -> 'action 420'
actionsTable[1288] = 421; // 'state 20' -> UNION -> reduce -> 'action 421'
actionsTable[1289] = 422; // 'state 20' -> PAREN_OPEN -> reduce -> 'action 422'
actionsTable[1290] = 423; // 'state 20' -> PAREN_CLOSE -> reduce -> 'action 423'
actionsTable[1291] = 424; // 'state 20' -> QUANTIFIER -> reduce -> 'action 424'
actionsTable[1292] = 425; // 'state 20' -> BRACKET_OPEN -> reduce -> 'action 425'
actionsTable[1293] = 426; // 'state 20' -> BRACKET_CLOSE -> reduce -> 'action 426'
actionsTable[1294] = 427; // 'state 20' -> @par-gen.EOF -> reduce -> 'action 427'
actionsTable[1344] = 428; // 'state 21' -> CHARACTER -> reduce -> 'action 428'
actionsTable[1345] = 429; // 'state 21' -> NUMBER -> reduce -> 'action 429'
actionsTable[1346] = 430; // 'state 21' -> CONTROL_CHARACTER -> reduce -> 'action 430'
actionsTable[1347] = 431; // 'state 21' -> BACKSLASH -> reduce -> 'action 431'
actionsTable[1348] = 432; // 'state 21' -> X -> reduce -> 'action 432'
actionsTable[1349] = 433; // 'state 21' -> CARET -> reduce -> 'action 433'
actionsTable[1350] = 434; // 'state 21' -> DASH -> reduce -> 'action 434'
actionsTable[1351] = 435; // 'state 21' -> DOT -> reduce -> 'action 435'
actionsTable[1352] = 436; // 'state 21' -> UNION -> reduce -> 'action 436'
actionsTable[1353] = 437; // 'state 21' -> PAREN_OPEN -> reduce -> 'action 437'
actionsTable[1354] = 438; // 'state 21' -> PAREN_CLOSE -> reduce -> 'action 438'
actionsTable[1355] = 439; // 'state 21' -> QUANTIFIER -> reduce -> 'action 439'
actionsTable[1356] = 440; // 'state 21' -> BRACKET_OPEN -> reduce -> 'action 440'
actionsTable[1357] = 441; // 'state 21' -> BRACKET_CLOSE -> reduce -> 'action 441'
actionsTable[1358] = 442; // 'state 21' -> @par-gen.EOF -> reduce -> 'action 442'
actionsTable[1536] = 443; // 'state 24' -> CHARACTER -> reduce -> 'action 443'
actionsTable[1537] = 444; // 'state 24' -> NUMBER -> reduce -> 'action 444'
actionsTable[1538] = 445; // 'state 24' -> CONTROL_CHARACTER -> reduce -> 'action 445'
actionsTable[1539] = 446; // 'state 24' -> BACKSLASH -> reduce -> 'action 446'
actionsTable[1540] = 447; // 'state 24' -> X -> reduce -> 'action 447'
actionsTable[1541] = 448; // 'state 24' -> CARET -> reduce -> 'action 448'
actionsTable[1542] = 449; // 'state 24' -> DASH -> reduce -> 'action 449'
actionsTable[1543] = 450; // 'state 24' -> DOT -> reduce -> 'action 450'
actionsTable[1544] = 451; // 'state 24' -> UNION -> reduce -> 'action 451'
actionsTable[1545] = 452; // 'state 24' -> PAREN_OPEN -> reduce -> 'action 452'
actionsTable[1546] = 453; // 'state 24' -> PAREN_CLOSE -> reduce -> 'action 453'
actionsTable[1547] = 454; // 'state 24' -> QUANTIFIER -> reduce -> 'action 454'
actionsTable[1548] = 455; // 'state 24' -> BRACKET_OPEN -> reduce -> 'action 455'
actionsTable[1549] = 456; // 'state 24' -> BRACKET_CLOSE -> reduce -> 'action 456'
actionsTable[1550] = 457; // 'state 24' -> @par-gen.EOF -> reduce -> 'action 457'
actionsTable[2688] = 458; // 'state 42' -> CHARACTER -> shift -> 'action 458'
actionsTable[2689] = 459; // 'state 42' -> NUMBER -> shift -> 'action 459'
actionsTable[2690] = 460; // 'state 42' -> CONTROL_CHARACTER -> shift -> 'action 460'
actionsTable[2691] = 461; // 'state 42' -> BACKSLASH -> shift -> 'action 461'
actionsTable[2692] = 462; // 'state 42' -> X -> shift -> 'action 462'
actionsTable[2693] = 463; // 'state 42' -> CARET -> shift -> 'action 463'
actionsTable[2694] = 464; // 'state 42' -> DASH -> shift -> 'action 464'
actionsTable[2697] = 465; // 'state 42' -> PAREN_OPEN -> shift -> 'action 465'
actionsTable[2700] = 466; // 'state 42' -> BRACKET_OPEN -> shift -> 'action 466'
actionsTable[2708] = 467; // 'state 42' -> Sequence -> shift -> 'action 467'
actionsTable[2709] = 468; // 'state 42' -> Atom -> shift -> 'action 468'
actionsTable[2710] = 469; // 'state 42' -> Group -> shift -> 'action 469'
actionsTable[2711] = 470; // 'state 42' -> CharacterClass -> shift -> 'action 470'
actionsTable[2715] = 471; // 'state 42' -> Character -> shift -> 'action 471'
actionsTable[2716] = 472; // 'state 42' -> CharacterOrNumberOrX -> shift -> 'action 472'
actionsTable[2696] = 473; // 'state 42' -> UNION -> reduce -> 'action 473'
actionsTable[2698] = 474; // 'state 42' -> PAREN_CLOSE -> reduce -> 'action 474'
actionsTable[2702] = 475; // 'state 42' -> @par-gen.EOF -> reduce -> 'action 475'
actionsTable[2880] = 476; // 'state 45' -> CHARACTER -> reduce -> 'action 476'
actionsTable[2881] = 477; // 'state 45' -> NUMBER -> reduce -> 'action 477'
actionsTable[2882] = 478; // 'state 45' -> CONTROL_CHARACTER -> reduce -> 'action 478'
actionsTable[2883] = 479; // 'state 45' -> BACKSLASH -> reduce -> 'action 479'
actionsTable[2884] = 480; // 'state 45' -> X -> reduce -> 'action 480'
actionsTable[2885] = 481; // 'state 45' -> CARET -> reduce -> 'action 481'
actionsTable[2886] = 482; // 'state 45' -> DASH -> reduce -> 'action 482'
actionsTable[2888] = 483; // 'state 45' -> UNION -> reduce -> 'action 483'
actionsTable[2889] = 484; // 'state 45' -> PAREN_OPEN -> reduce -> 'action 484'
actionsTable[2890] = 485; // 'state 45' -> PAREN_CLOSE -> reduce -> 'action 485'
actionsTable[2892] = 486; // 'state 45' -> BRACKET_OPEN -> reduce -> 'action 486'
actionsTable[2894] = 487; // 'state 45' -> @par-gen.EOF -> reduce -> 'action 487'
actionsTable[3083] = 488; // 'state 48' -> QUANTIFIER -> shift -> 'action 488'
actionsTable[3072] = 489; // 'state 48' -> CHARACTER -> reduce -> 'action 489'
actionsTable[3073] = 490; // 'state 48' -> NUMBER -> reduce -> 'action 490'
actionsTable[3074] = 491; // 'state 48' -> CONTROL_CHARACTER -> reduce -> 'action 491'
actionsTable[3075] = 492; // 'state 48' -> BACKSLASH -> reduce -> 'action 492'
actionsTable[3076] = 493; // 'state 48' -> X -> reduce -> 'action 493'
actionsTable[3077] = 494; // 'state 48' -> CARET -> reduce -> 'action 494'
actionsTable[3078] = 495; // 'state 48' -> DASH -> reduce -> 'action 495'
actionsTable[3080] = 496; // 'state 48' -> UNION -> reduce -> 'action 496'
actionsTable[3081] = 497; // 'state 48' -> PAREN_OPEN -> reduce -> 'action 497'
actionsTable[3082] = 498; // 'state 48' -> PAREN_CLOSE -> reduce -> 'action 498'
actionsTable[3084] = 499; // 'state 48' -> BRACKET_OPEN -> reduce -> 'action 499'
actionsTable[3086] = 500; // 'state 48' -> @par-gen.EOF -> reduce -> 'action 500'
actionsTable[2955] = 501; // 'state 46' -> QUANTIFIER -> shift -> 'action 501'
actionsTable[2944] = 502; // 'state 46' -> CHARACTER -> reduce -> 'action 502'
actionsTable[2945] = 503; // 'state 46' -> NUMBER -> reduce -> 'action 503'
actionsTable[2946] = 504; // 'state 46' -> CONTROL_CHARACTER -> reduce -> 'action 504'
actionsTable[2947] = 505; // 'state 46' -> BACKSLASH -> reduce -> 'action 505'
actionsTable[2948] = 506; // 'state 46' -> X -> reduce -> 'action 506'
actionsTable[2949] = 507; // 'state 46' -> CARET -> reduce -> 'action 507'
actionsTable[2950] = 508; // 'state 46' -> DASH -> reduce -> 'action 508'
actionsTable[2952] = 509; // 'state 46' -> UNION -> reduce -> 'action 509'
actionsTable[2953] = 510; // 'state 46' -> PAREN_OPEN -> reduce -> 'action 510'
actionsTable[2954] = 511; // 'state 46' -> PAREN_CLOSE -> reduce -> 'action 511'
actionsTable[2956] = 512; // 'state 46' -> BRACKET_OPEN -> reduce -> 'action 512'
actionsTable[2958] = 513; // 'state 46' -> @par-gen.EOF -> reduce -> 'action 513'
actionsTable[3019] = 514; // 'state 47' -> QUANTIFIER -> shift -> 'action 514'
actionsTable[3008] = 515; // 'state 47' -> CHARACTER -> reduce -> 'action 515'
actionsTable[3009] = 516; // 'state 47' -> NUMBER -> reduce -> 'action 516'
actionsTable[3010] = 517; // 'state 47' -> CONTROL_CHARACTER -> reduce -> 'action 517'
actionsTable[3011] = 518; // 'state 47' -> BACKSLASH -> reduce -> 'action 518'
actionsTable[3012] = 519; // 'state 47' -> X -> reduce -> 'action 519'
actionsTable[3013] = 520; // 'state 47' -> CARET -> reduce -> 'action 520'
actionsTable[3014] = 521; // 'state 47' -> DASH -> reduce -> 'action 521'
actionsTable[3016] = 522; // 'state 47' -> UNION -> reduce -> 'action 522'
actionsTable[3017] = 523; // 'state 47' -> PAREN_OPEN -> reduce -> 'action 523'
actionsTable[3018] = 524; // 'state 47' -> PAREN_CLOSE -> reduce -> 'action 524'
actionsTable[3020] = 525; // 'state 47' -> BRACKET_OPEN -> reduce -> 'action 525'
actionsTable[3022] = 526; // 'state 47' -> @par-gen.EOF -> reduce -> 'action 526'
actionsTable[3136] = 527; // 'state 49' -> CHARACTER -> reduce -> 'action 527'
actionsTable[3137] = 528; // 'state 49' -> NUMBER -> reduce -> 'action 528'
actionsTable[3138] = 529; // 'state 49' -> CONTROL_CHARACTER -> reduce -> 'action 529'
actionsTable[3139] = 530; // 'state 49' -> BACKSLASH -> reduce -> 'action 530'
actionsTable[3140] = 531; // 'state 49' -> X -> reduce -> 'action 531'
actionsTable[3141] = 532; // 'state 49' -> CARET -> reduce -> 'action 532'
actionsTable[3142] = 533; // 'state 49' -> DASH -> reduce -> 'action 533'
actionsTable[3144] = 534; // 'state 49' -> UNION -> reduce -> 'action 534'
actionsTable[3145] = 535; // 'state 49' -> PAREN_OPEN -> reduce -> 'action 535'
actionsTable[3146] = 536; // 'state 49' -> PAREN_CLOSE -> reduce -> 'action 536'
actionsTable[3147] = 537; // 'state 49' -> QUANTIFIER -> reduce -> 'action 537'
actionsTable[3148] = 538; // 'state 49' -> BRACKET_OPEN -> reduce -> 'action 538'
actionsTable[3150] = 539; // 'state 49' -> @par-gen.EOF -> reduce -> 'action 539'
actionsTable[2368] = 540; // 'state 37' -> CHARACTER -> reduce -> 'action 540'
actionsTable[2369] = 541; // 'state 37' -> NUMBER -> reduce -> 'action 541'
actionsTable[2370] = 542; // 'state 37' -> CONTROL_CHARACTER -> reduce -> 'action 542'
actionsTable[2371] = 543; // 'state 37' -> BACKSLASH -> reduce -> 'action 543'
actionsTable[2372] = 544; // 'state 37' -> X -> reduce -> 'action 544'
actionsTable[2373] = 545; // 'state 37' -> CARET -> reduce -> 'action 545'
actionsTable[2374] = 546; // 'state 37' -> DASH -> reduce -> 'action 546'
actionsTable[2376] = 547; // 'state 37' -> UNION -> reduce -> 'action 547'
actionsTable[2377] = 548; // 'state 37' -> PAREN_OPEN -> reduce -> 'action 548'
actionsTable[2378] = 549; // 'state 37' -> PAREN_CLOSE -> reduce -> 'action 549'
actionsTable[2379] = 550; // 'state 37' -> QUANTIFIER -> reduce -> 'action 550'
actionsTable[2380] = 551; // 'state 37' -> BRACKET_OPEN -> reduce -> 'action 551'
actionsTable[2382] = 552; // 'state 37' -> @par-gen.EOF -> reduce -> 'action 552'
actionsTable[2560] = 553; // 'state 40' -> CHARACTER -> reduce -> 'action 553'
actionsTable[2561] = 554; // 'state 40' -> NUMBER -> reduce -> 'action 554'
actionsTable[2562] = 555; // 'state 40' -> CONTROL_CHARACTER -> reduce -> 'action 555'
actionsTable[2563] = 556; // 'state 40' -> BACKSLASH -> reduce -> 'action 556'
actionsTable[2564] = 557; // 'state 40' -> X -> reduce -> 'action 557'
actionsTable[2565] = 558; // 'state 40' -> CARET -> reduce -> 'action 558'
actionsTable[2566] = 559; // 'state 40' -> DASH -> reduce -> 'action 559'
actionsTable[2568] = 560; // 'state 40' -> UNION -> reduce -> 'action 560'
actionsTable[2569] = 561; // 'state 40' -> PAREN_OPEN -> reduce -> 'action 561'
actionsTable[2570] = 562; // 'state 40' -> PAREN_CLOSE -> reduce -> 'action 562'
actionsTable[2571] = 563; // 'state 40' -> QUANTIFIER -> reduce -> 'action 563'
actionsTable[2572] = 564; // 'state 40' -> BRACKET_OPEN -> reduce -> 'action 564'
actionsTable[2574] = 565; // 'state 40' -> @par-gen.EOF -> reduce -> 'action 565'
actionsTable[2624] = 566; // 'state 41' -> CHARACTER -> reduce -> 'action 566'
actionsTable[2625] = 567; // 'state 41' -> NUMBER -> reduce -> 'action 567'
actionsTable[2626] = 568; // 'state 41' -> CONTROL_CHARACTER -> reduce -> 'action 568'
actionsTable[2627] = 569; // 'state 41' -> BACKSLASH -> reduce -> 'action 569'
actionsTable[2628] = 570; // 'state 41' -> X -> reduce -> 'action 570'
actionsTable[2629] = 571; // 'state 41' -> CARET -> reduce -> 'action 571'
actionsTable[2630] = 572; // 'state 41' -> DASH -> reduce -> 'action 572'
actionsTable[2632] = 573; // 'state 41' -> UNION -> reduce -> 'action 573'
actionsTable[2633] = 574; // 'state 41' -> PAREN_OPEN -> reduce -> 'action 574'
actionsTable[2634] = 575; // 'state 41' -> PAREN_CLOSE -> reduce -> 'action 575'
actionsTable[2635] = 576; // 'state 41' -> QUANTIFIER -> reduce -> 'action 576'
actionsTable[2636] = 577; // 'state 41' -> BRACKET_OPEN -> reduce -> 'action 577'
actionsTable[2638] = 578; // 'state 41' -> @par-gen.EOF -> reduce -> 'action 578'
actionsTable[2434] = 579; // 'state 38' -> CONTROL_CHARACTER -> shift -> 'action 579'
actionsTable[2435] = 580; // 'state 38' -> BACKSLASH -> shift -> 'action 580'
actionsTable[2436] = 581; // 'state 38' -> X -> shift -> 'action 581'
actionsTable[2439] = 582; // 'state 38' -> DOT -> shift -> 'action 582'
actionsTable[2440] = 583; // 'state 38' -> UNION -> shift -> 'action 583'
actionsTable[2441] = 584; // 'state 38' -> PAREN_OPEN -> shift -> 'action 584'
actionsTable[2442] = 585; // 'state 38' -> PAREN_CLOSE -> shift -> 'action 585'
actionsTable[2443] = 586; // 'state 38' -> QUANTIFIER -> shift -> 'action 586'
actionsTable[2444] = 587; // 'state 38' -> BRACKET_OPEN -> shift -> 'action 587'
actionsTable[2445] = 588; // 'state 38' -> BRACKET_CLOSE -> shift -> 'action 588'
actionsTable[2461] = 589; // 'state 38' -> EscapedCharacter -> shift -> 'action 589'
actionsTable[2752] = 590; // 'state 43' -> CHARACTER -> shift -> 'action 590'
actionsTable[2753] = 591; // 'state 43' -> NUMBER -> shift -> 'action 591'
actionsTable[2754] = 592; // 'state 43' -> CONTROL_CHARACTER -> shift -> 'action 592'
actionsTable[2755] = 593; // 'state 43' -> BACKSLASH -> shift -> 'action 593'
actionsTable[2756] = 594; // 'state 43' -> X -> shift -> 'action 594'
actionsTable[2757] = 595; // 'state 43' -> CARET -> shift -> 'action 595'
actionsTable[2758] = 596; // 'state 43' -> DASH -> shift -> 'action 596'
actionsTable[2761] = 597; // 'state 43' -> PAREN_OPEN -> shift -> 'action 597'
actionsTable[2764] = 598; // 'state 43' -> BRACKET_OPEN -> shift -> 'action 598'
actionsTable[2771] = 599; // 'state 43' -> Union -> shift -> 'action 599'
actionsTable[2772] = 600; // 'state 43' -> Sequence -> shift -> 'action 600'
actionsTable[2773] = 601; // 'state 43' -> Atom -> shift -> 'action 601'
actionsTable[2774] = 602; // 'state 43' -> Group -> shift -> 'action 602'
actionsTable[2775] = 603; // 'state 43' -> CharacterClass -> shift -> 'action 603'
actionsTable[2779] = 604; // 'state 43' -> Character -> shift -> 'action 604'
actionsTable[2780] = 605; // 'state 43' -> CharacterOrNumberOrX -> shift -> 'action 605'
actionsTable[2816] = 606; // 'state 44' -> CHARACTER -> shift -> 'action 606'
actionsTable[2817] = 607; // 'state 44' -> NUMBER -> shift -> 'action 607'
actionsTable[2818] = 608; // 'state 44' -> CONTROL_CHARACTER -> shift -> 'action 608'
actionsTable[2819] = 609; // 'state 44' -> BACKSLASH -> shift -> 'action 609'
actionsTable[2820] = 610; // 'state 44' -> X -> shift -> 'action 610'
actionsTable[2821] = 611; // 'state 44' -> CARET -> shift -> 'action 611'
actionsTable[2823] = 612; // 'state 44' -> DOT -> shift -> 'action 612'
actionsTable[2824] = 613; // 'state 44' -> UNION -> shift -> 'action 613'
actionsTable[2825] = 614; // 'state 44' -> PAREN_OPEN -> shift -> 'action 614'
actionsTable[2826] = 615; // 'state 44' -> PAREN_CLOSE -> shift -> 'action 615'
actionsTable[2827] = 616; // 'state 44' -> QUANTIFIER -> shift -> 'action 616'
actionsTable[2840] = 617; // 'state 44' -> CharacterClassCharacters -> shift -> 'action 617'
actionsTable[2841] = 618; // 'state 44' -> CharacterClassCharacter -> shift -> 'action 618'
actionsTable[2842] = 619; // 'state 44' -> CharacterClassRange -> shift -> 'action 619'
actionsTable[2844] = 620; // 'state 44' -> CharacterOrNumberOrX -> shift -> 'action 620'
actionsTable[2240] = 621; // 'state 35' -> CHARACTER -> reduce -> 'action 621'
actionsTable[2241] = 622; // 'state 35' -> NUMBER -> reduce -> 'action 622'
actionsTable[2242] = 623; // 'state 35' -> CONTROL_CHARACTER -> reduce -> 'action 623'
actionsTable[2243] = 624; // 'state 35' -> BACKSLASH -> reduce -> 'action 624'
actionsTable[2244] = 625; // 'state 35' -> X -> reduce -> 'action 625'
actionsTable[2245] = 626; // 'state 35' -> CARET -> reduce -> 'action 626'
actionsTable[2246] = 627; // 'state 35' -> DASH -> reduce -> 'action 627'
actionsTable[2247] = 628; // 'state 35' -> DOT -> reduce -> 'action 628'
actionsTable[2248] = 629; // 'state 35' -> UNION -> reduce -> 'action 629'
actionsTable[2249] = 630; // 'state 35' -> PAREN_OPEN -> reduce -> 'action 630'
actionsTable[2250] = 631; // 'state 35' -> PAREN_CLOSE -> reduce -> 'action 631'
actionsTable[2251] = 632; // 'state 35' -> QUANTIFIER -> reduce -> 'action 632'
actionsTable[2252] = 633; // 'state 35' -> BRACKET_OPEN -> reduce -> 'action 633'
actionsTable[2253] = 634; // 'state 35' -> BRACKET_CLOSE -> reduce -> 'action 634'
actionsTable[2254] = 635; // 'state 35' -> @par-gen.EOF -> reduce -> 'action 635'
actionsTable[2304] = 636; // 'state 36' -> CHARACTER -> reduce -> 'action 636'
actionsTable[2305] = 637; // 'state 36' -> NUMBER -> reduce -> 'action 637'
actionsTable[2306] = 638; // 'state 36' -> CONTROL_CHARACTER -> reduce -> 'action 638'
actionsTable[2307] = 639; // 'state 36' -> BACKSLASH -> reduce -> 'action 639'
actionsTable[2308] = 640; // 'state 36' -> X -> reduce -> 'action 640'
actionsTable[2309] = 641; // 'state 36' -> CARET -> reduce -> 'action 641'
actionsTable[2310] = 642; // 'state 36' -> DASH -> reduce -> 'action 642'
actionsTable[2311] = 643; // 'state 36' -> DOT -> reduce -> 'action 643'
actionsTable[2312] = 644; // 'state 36' -> UNION -> reduce -> 'action 644'
actionsTable[2313] = 645; // 'state 36' -> PAREN_OPEN -> reduce -> 'action 645'
actionsTable[2314] = 646; // 'state 36' -> PAREN_CLOSE -> reduce -> 'action 646'
actionsTable[2315] = 647; // 'state 36' -> QUANTIFIER -> reduce -> 'action 647'
actionsTable[2316] = 648; // 'state 36' -> BRACKET_OPEN -> reduce -> 'action 648'
actionsTable[2317] = 649; // 'state 36' -> BRACKET_CLOSE -> reduce -> 'action 649'
actionsTable[2318] = 650; // 'state 36' -> @par-gen.EOF -> reduce -> 'action 650'
actionsTable[2496] = 651; // 'state 39' -> CHARACTER -> reduce -> 'action 651'
actionsTable[2497] = 652; // 'state 39' -> NUMBER -> reduce -> 'action 652'
actionsTable[2498] = 653; // 'state 39' -> CONTROL_CHARACTER -> reduce -> 'action 653'
actionsTable[2499] = 654; // 'state 39' -> BACKSLASH -> reduce -> 'action 654'
actionsTable[2500] = 655; // 'state 39' -> X -> reduce -> 'action 655'
actionsTable[2501] = 656; // 'state 39' -> CARET -> reduce -> 'action 656'
actionsTable[2502] = 657; // 'state 39' -> DASH -> reduce -> 'action 657'
actionsTable[2503] = 658; // 'state 39' -> DOT -> reduce -> 'action 658'
actionsTable[2504] = 659; // 'state 39' -> UNION -> reduce -> 'action 659'
actionsTable[2505] = 660; // 'state 39' -> PAREN_OPEN -> reduce -> 'action 660'
actionsTable[2506] = 661; // 'state 39' -> PAREN_CLOSE -> reduce -> 'action 661'
actionsTable[2507] = 662; // 'state 39' -> QUANTIFIER -> reduce -> 'action 662'
actionsTable[2508] = 663; // 'state 39' -> BRACKET_OPEN -> reduce -> 'action 663'
actionsTable[2509] = 664; // 'state 39' -> BRACKET_CLOSE -> reduce -> 'action 664'
actionsTable[2510] = 665; // 'state 39' -> @par-gen.EOF -> reduce -> 'action 665'
actionsTable[3200] = 666; // 'state 50' -> CHARACTER -> reduce -> 'action 666'
actionsTable[3201] = 667; // 'state 50' -> NUMBER -> reduce -> 'action 667'
actionsTable[3202] = 668; // 'state 50' -> CONTROL_CHARACTER -> reduce -> 'action 668'
actionsTable[3203] = 669; // 'state 50' -> BACKSLASH -> reduce -> 'action 669'
actionsTable[3204] = 670; // 'state 50' -> X -> reduce -> 'action 670'
actionsTable[3205] = 671; // 'state 50' -> CARET -> reduce -> 'action 671'
actionsTable[3206] = 672; // 'state 50' -> DASH -> reduce -> 'action 672'
actionsTable[3208] = 673; // 'state 50' -> UNION -> reduce -> 'action 673'
actionsTable[3209] = 674; // 'state 50' -> PAREN_OPEN -> reduce -> 'action 674'
actionsTable[3210] = 675; // 'state 50' -> PAREN_CLOSE -> reduce -> 'action 675'
actionsTable[3212] = 676; // 'state 50' -> BRACKET_OPEN -> reduce -> 'action 676'
actionsTable[3214] = 677; // 'state 50' -> @par-gen.EOF -> reduce -> 'action 677'
actionsTable[3264] = 678; // 'state 51' -> CHARACTER -> reduce -> 'action 678'
actionsTable[3265] = 679; // 'state 51' -> NUMBER -> reduce -> 'action 679'
actionsTable[3266] = 680; // 'state 51' -> CONTROL_CHARACTER -> reduce -> 'action 680'
actionsTable[3267] = 681; // 'state 51' -> BACKSLASH -> reduce -> 'action 681'
actionsTable[3268] = 682; // 'state 51' -> X -> reduce -> 'action 682'
actionsTable[3269] = 683; // 'state 51' -> CARET -> reduce -> 'action 683'
actionsTable[3270] = 684; // 'state 51' -> DASH -> reduce -> 'action 684'
actionsTable[3272] = 685; // 'state 51' -> UNION -> reduce -> 'action 685'
actionsTable[3273] = 686; // 'state 51' -> PAREN_OPEN -> reduce -> 'action 686'
actionsTable[3274] = 687; // 'state 51' -> PAREN_CLOSE -> reduce -> 'action 687'
actionsTable[3276] = 688; // 'state 51' -> BRACKET_OPEN -> reduce -> 'action 688'
actionsTable[3278] = 689; // 'state 51' -> @par-gen.EOF -> reduce -> 'action 689'
actionsTable[3328] = 690; // 'state 52' -> CHARACTER -> reduce -> 'action 690'
actionsTable[3329] = 691; // 'state 52' -> NUMBER -> reduce -> 'action 691'
actionsTable[3330] = 692; // 'state 52' -> CONTROL_CHARACTER -> reduce -> 'action 692'
actionsTable[3331] = 693; // 'state 52' -> BACKSLASH -> reduce -> 'action 693'
actionsTable[3332] = 694; // 'state 52' -> X -> reduce -> 'action 694'
actionsTable[3333] = 695; // 'state 52' -> CARET -> reduce -> 'action 695'
actionsTable[3334] = 696; // 'state 52' -> DASH -> reduce -> 'action 696'
actionsTable[3336] = 697; // 'state 52' -> UNION -> reduce -> 'action 697'
actionsTable[3337] = 698; // 'state 52' -> PAREN_OPEN -> reduce -> 'action 698'
actionsTable[3338] = 699; // 'state 52' -> PAREN_CLOSE -> reduce -> 'action 699'
actionsTable[3340] = 700; // 'state 52' -> BRACKET_OPEN -> reduce -> 'action 700'
actionsTable[3342] = 701; // 'state 52' -> @par-gen.EOF -> reduce -> 'action 701'
actionsTable[4032] = 702; // 'state 63' -> CHARACTER -> reduce -> 'action 702'
actionsTable[4033] = 703; // 'state 63' -> NUMBER -> reduce -> 'action 703'
actionsTable[4034] = 704; // 'state 63' -> CONTROL_CHARACTER -> reduce -> 'action 704'
actionsTable[4035] = 705; // 'state 63' -> BACKSLASH -> reduce -> 'action 705'
actionsTable[4036] = 706; // 'state 63' -> X -> reduce -> 'action 706'
actionsTable[4037] = 707; // 'state 63' -> CARET -> reduce -> 'action 707'
actionsTable[4038] = 708; // 'state 63' -> DASH -> reduce -> 'action 708'
actionsTable[4040] = 709; // 'state 63' -> UNION -> reduce -> 'action 709'
actionsTable[4041] = 710; // 'state 63' -> PAREN_OPEN -> reduce -> 'action 710'
actionsTable[4042] = 711; // 'state 63' -> PAREN_CLOSE -> reduce -> 'action 711'
actionsTable[4043] = 712; // 'state 63' -> QUANTIFIER -> reduce -> 'action 712'
actionsTable[4044] = 713; // 'state 63' -> BRACKET_OPEN -> reduce -> 'action 713'
actionsTable[4046] = 714; // 'state 63' -> @par-gen.EOF -> reduce -> 'action 714'
actionsTable[3392] = 715; // 'state 53' -> CHARACTER -> reduce -> 'action 715'
actionsTable[3393] = 716; // 'state 53' -> NUMBER -> reduce -> 'action 716'
actionsTable[3394] = 717; // 'state 53' -> CONTROL_CHARACTER -> reduce -> 'action 717'
actionsTable[3395] = 718; // 'state 53' -> BACKSLASH -> reduce -> 'action 718'
actionsTable[3396] = 719; // 'state 53' -> X -> reduce -> 'action 719'
actionsTable[3397] = 720; // 'state 53' -> CARET -> reduce -> 'action 720'
actionsTable[3398] = 721; // 'state 53' -> DASH -> reduce -> 'action 721'
actionsTable[3400] = 722; // 'state 53' -> UNION -> reduce -> 'action 722'
actionsTable[3401] = 723; // 'state 53' -> PAREN_OPEN -> reduce -> 'action 723'
actionsTable[3402] = 724; // 'state 53' -> PAREN_CLOSE -> reduce -> 'action 724'
actionsTable[3403] = 725; // 'state 53' -> QUANTIFIER -> reduce -> 'action 725'
actionsTable[3404] = 726; // 'state 53' -> BRACKET_OPEN -> reduce -> 'action 726'
actionsTable[3406] = 727; // 'state 53' -> @par-gen.EOF -> reduce -> 'action 727'
actionsTable[3456] = 728; // 'state 54' -> CHARACTER -> reduce -> 'action 728'
actionsTable[3457] = 729; // 'state 54' -> NUMBER -> reduce -> 'action 729'
actionsTable[3458] = 730; // 'state 54' -> CONTROL_CHARACTER -> reduce -> 'action 730'
actionsTable[3459] = 731; // 'state 54' -> BACKSLASH -> reduce -> 'action 731'
actionsTable[3460] = 732; // 'state 54' -> X -> reduce -> 'action 732'
actionsTable[3461] = 733; // 'state 54' -> CARET -> reduce -> 'action 733'
actionsTable[3462] = 734; // 'state 54' -> DASH -> reduce -> 'action 734'
actionsTable[3464] = 735; // 'state 54' -> UNION -> reduce -> 'action 735'
actionsTable[3465] = 736; // 'state 54' -> PAREN_OPEN -> reduce -> 'action 736'
actionsTable[3466] = 737; // 'state 54' -> PAREN_CLOSE -> reduce -> 'action 737'
actionsTable[3467] = 738; // 'state 54' -> QUANTIFIER -> reduce -> 'action 738'
actionsTable[3468] = 739; // 'state 54' -> BRACKET_OPEN -> reduce -> 'action 739'
actionsTable[3470] = 740; // 'state 54' -> @par-gen.EOF -> reduce -> 'action 740'
actionsTable[3584] = 741; // 'state 56' -> CHARACTER -> reduce -> 'action 741'
actionsTable[3585] = 742; // 'state 56' -> NUMBER -> reduce -> 'action 742'
actionsTable[3586] = 743; // 'state 56' -> CONTROL_CHARACTER -> reduce -> 'action 743'
actionsTable[3587] = 744; // 'state 56' -> BACKSLASH -> reduce -> 'action 744'
actionsTable[3588] = 745; // 'state 56' -> X -> reduce -> 'action 745'
actionsTable[3589] = 746; // 'state 56' -> CARET -> reduce -> 'action 746'
actionsTable[3590] = 747; // 'state 56' -> DASH -> reduce -> 'action 747'
actionsTable[3592] = 748; // 'state 56' -> UNION -> reduce -> 'action 748'
actionsTable[3593] = 749; // 'state 56' -> PAREN_OPEN -> reduce -> 'action 749'
actionsTable[3594] = 750; // 'state 56' -> PAREN_CLOSE -> reduce -> 'action 750'
actionsTable[3595] = 751; // 'state 56' -> QUANTIFIER -> reduce -> 'action 751'
actionsTable[3596] = 752; // 'state 56' -> BRACKET_OPEN -> reduce -> 'action 752'
actionsTable[3598] = 753; // 'state 56' -> @par-gen.EOF -> reduce -> 'action 753'
actionsTable[3648] = 754; // 'state 57' -> CHARACTER -> reduce -> 'action 754'
actionsTable[3649] = 755; // 'state 57' -> NUMBER -> reduce -> 'action 755'
actionsTable[3650] = 756; // 'state 57' -> CONTROL_CHARACTER -> reduce -> 'action 756'
actionsTable[3651] = 757; // 'state 57' -> BACKSLASH -> reduce -> 'action 757'
actionsTable[3652] = 758; // 'state 57' -> X -> reduce -> 'action 758'
actionsTable[3653] = 759; // 'state 57' -> CARET -> reduce -> 'action 759'
actionsTable[3654] = 760; // 'state 57' -> DASH -> reduce -> 'action 760'
actionsTable[3656] = 761; // 'state 57' -> UNION -> reduce -> 'action 761'
actionsTable[3657] = 762; // 'state 57' -> PAREN_OPEN -> reduce -> 'action 762'
actionsTable[3658] = 763; // 'state 57' -> PAREN_CLOSE -> reduce -> 'action 763'
actionsTable[3659] = 764; // 'state 57' -> QUANTIFIER -> reduce -> 'action 764'
actionsTable[3660] = 765; // 'state 57' -> BRACKET_OPEN -> reduce -> 'action 765'
actionsTable[3662] = 766; // 'state 57' -> @par-gen.EOF -> reduce -> 'action 766'
actionsTable[3712] = 767; // 'state 58' -> CHARACTER -> reduce -> 'action 767'
actionsTable[3713] = 768; // 'state 58' -> NUMBER -> reduce -> 'action 768'
actionsTable[3714] = 769; // 'state 58' -> CONTROL_CHARACTER -> reduce -> 'action 769'
actionsTable[3715] = 770; // 'state 58' -> BACKSLASH -> reduce -> 'action 770'
actionsTable[3716] = 771; // 'state 58' -> X -> reduce -> 'action 771'
actionsTable[3717] = 772; // 'state 58' -> CARET -> reduce -> 'action 772'
actionsTable[3718] = 773; // 'state 58' -> DASH -> reduce -> 'action 773'
actionsTable[3720] = 774; // 'state 58' -> UNION -> reduce -> 'action 774'
actionsTable[3721] = 775; // 'state 58' -> PAREN_OPEN -> reduce -> 'action 775'
actionsTable[3722] = 776; // 'state 58' -> PAREN_CLOSE -> reduce -> 'action 776'
actionsTable[3723] = 777; // 'state 58' -> QUANTIFIER -> reduce -> 'action 777'
actionsTable[3724] = 778; // 'state 58' -> BRACKET_OPEN -> reduce -> 'action 778'
actionsTable[3726] = 779; // 'state 58' -> @par-gen.EOF -> reduce -> 'action 779'
actionsTable[3776] = 780; // 'state 59' -> CHARACTER -> reduce -> 'action 780'
actionsTable[3777] = 781; // 'state 59' -> NUMBER -> reduce -> 'action 781'
actionsTable[3778] = 782; // 'state 59' -> CONTROL_CHARACTER -> reduce -> 'action 782'
actionsTable[3779] = 783; // 'state 59' -> BACKSLASH -> reduce -> 'action 783'
actionsTable[3780] = 784; // 'state 59' -> X -> reduce -> 'action 784'
actionsTable[3781] = 785; // 'state 59' -> CARET -> reduce -> 'action 785'
actionsTable[3782] = 786; // 'state 59' -> DASH -> reduce -> 'action 786'
actionsTable[3784] = 787; // 'state 59' -> UNION -> reduce -> 'action 787'
actionsTable[3785] = 788; // 'state 59' -> PAREN_OPEN -> reduce -> 'action 788'
actionsTable[3786] = 789; // 'state 59' -> PAREN_CLOSE -> reduce -> 'action 789'
actionsTable[3787] = 790; // 'state 59' -> QUANTIFIER -> reduce -> 'action 790'
actionsTable[3788] = 791; // 'state 59' -> BRACKET_OPEN -> reduce -> 'action 791'
actionsTable[3790] = 792; // 'state 59' -> @par-gen.EOF -> reduce -> 'action 792'
actionsTable[3904] = 793; // 'state 61' -> CHARACTER -> reduce -> 'action 793'
actionsTable[3905] = 794; // 'state 61' -> NUMBER -> reduce -> 'action 794'
actionsTable[3906] = 795; // 'state 61' -> CONTROL_CHARACTER -> reduce -> 'action 795'
actionsTable[3907] = 796; // 'state 61' -> BACKSLASH -> reduce -> 'action 796'
actionsTable[3908] = 797; // 'state 61' -> X -> reduce -> 'action 797'
actionsTable[3909] = 798; // 'state 61' -> CARET -> reduce -> 'action 798'
actionsTable[3910] = 799; // 'state 61' -> DASH -> reduce -> 'action 799'
actionsTable[3912] = 800; // 'state 61' -> UNION -> reduce -> 'action 800'
actionsTable[3913] = 801; // 'state 61' -> PAREN_OPEN -> reduce -> 'action 801'
actionsTable[3914] = 802; // 'state 61' -> PAREN_CLOSE -> reduce -> 'action 802'
actionsTable[3915] = 803; // 'state 61' -> QUANTIFIER -> reduce -> 'action 803'
actionsTable[3916] = 804; // 'state 61' -> BRACKET_OPEN -> reduce -> 'action 804'
actionsTable[3918] = 805; // 'state 61' -> @par-gen.EOF -> reduce -> 'action 805'
actionsTable[3968] = 806; // 'state 62' -> CHARACTER -> reduce -> 'action 806'
actionsTable[3969] = 807; // 'state 62' -> NUMBER -> reduce -> 'action 807'
actionsTable[3970] = 808; // 'state 62' -> CONTROL_CHARACTER -> reduce -> 'action 808'
actionsTable[3971] = 809; // 'state 62' -> BACKSLASH -> reduce -> 'action 809'
actionsTable[3972] = 810; // 'state 62' -> X -> reduce -> 'action 810'
actionsTable[3973] = 811; // 'state 62' -> CARET -> reduce -> 'action 811'
actionsTable[3974] = 812; // 'state 62' -> DASH -> reduce -> 'action 812'
actionsTable[3976] = 813; // 'state 62' -> UNION -> reduce -> 'action 813'
actionsTable[3977] = 814; // 'state 62' -> PAREN_OPEN -> reduce -> 'action 814'
actionsTable[3978] = 815; // 'state 62' -> PAREN_CLOSE -> reduce -> 'action 815'
actionsTable[3979] = 816; // 'state 62' -> QUANTIFIER -> reduce -> 'action 816'
actionsTable[3980] = 817; // 'state 62' -> BRACKET_OPEN -> reduce -> 'action 817'
actionsTable[3982] = 818; // 'state 62' -> @par-gen.EOF -> reduce -> 'action 818'
actionsTable[3840] = 819; // 'state 60' -> CHARACTER -> reduce -> 'action 819'
actionsTable[3841] = 820; // 'state 60' -> NUMBER -> reduce -> 'action 820'
actionsTable[3842] = 821; // 'state 60' -> CONTROL_CHARACTER -> reduce -> 'action 821'
actionsTable[3843] = 822; // 'state 60' -> BACKSLASH -> reduce -> 'action 822'
actionsTable[3844] = 823; // 'state 60' -> X -> reduce -> 'action 823'
actionsTable[3845] = 824; // 'state 60' -> CARET -> reduce -> 'action 824'
actionsTable[3846] = 825; // 'state 60' -> DASH -> reduce -> 'action 825'
actionsTable[3848] = 826; // 'state 60' -> UNION -> reduce -> 'action 826'
actionsTable[3849] = 827; // 'state 60' -> PAREN_OPEN -> reduce -> 'action 827'
actionsTable[3850] = 828; // 'state 60' -> PAREN_CLOSE -> reduce -> 'action 828'
actionsTable[3851] = 829; // 'state 60' -> QUANTIFIER -> reduce -> 'action 829'
actionsTable[3852] = 830; // 'state 60' -> BRACKET_OPEN -> reduce -> 'action 830'
actionsTable[3854] = 831; // 'state 60' -> @par-gen.EOF -> reduce -> 'action 831'
actionsTable[3521] = 832; // 'state 55' -> NUMBER -> shift -> 'action 832'
actionsTable[4360] = 833; // 'state 68' -> UNION -> shift -> 'action 833'
actionsTable[4362] = 834; // 'state 68' -> PAREN_CLOSE -> shift -> 'action 834'
actionsTable[4416] = 835; // 'state 69' -> CHARACTER -> shift -> 'action 835'
actionsTable[4417] = 836; // 'state 69' -> NUMBER -> shift -> 'action 836'
actionsTable[4418] = 837; // 'state 69' -> CONTROL_CHARACTER -> shift -> 'action 837'
actionsTable[4419] = 838; // 'state 69' -> BACKSLASH -> shift -> 'action 838'
actionsTable[4420] = 839; // 'state 69' -> X -> shift -> 'action 839'
actionsTable[4421] = 840; // 'state 69' -> CARET -> shift -> 'action 840'
actionsTable[4422] = 841; // 'state 69' -> DASH -> shift -> 'action 841'
actionsTable[4424] = 842; // 'state 69' -> UNION -> shift -> 'action 842'
actionsTable[4425] = 843; // 'state 69' -> PAREN_OPEN -> shift -> 'action 843'
actionsTable[4426] = 844; // 'state 69' -> PAREN_CLOSE -> shift -> 'action 844'
actionsTable[4428] = 845; // 'state 69' -> BRACKET_OPEN -> shift -> 'action 845'
actionsTable[4437] = 846; // 'state 69' -> Atom -> shift -> 'action 846'
actionsTable[4438] = 847; // 'state 69' -> Group -> shift -> 'action 847'
actionsTable[4439] = 848; // 'state 69' -> CharacterClass -> shift -> 'action 848'
actionsTable[4443] = 849; // 'state 69' -> Character -> shift -> 'action 849'
actionsTable[4444] = 850; // 'state 69' -> CharacterOrNumberOrX -> shift -> 'action 850'
actionsTable[4480] = 851; // 'state 70' -> CHARACTER -> shift -> 'action 851'
actionsTable[4481] = 852; // 'state 70' -> NUMBER -> shift -> 'action 852'
actionsTable[4482] = 853; // 'state 70' -> CONTROL_CHARACTER -> shift -> 'action 853'
actionsTable[4483] = 854; // 'state 70' -> BACKSLASH -> shift -> 'action 854'
actionsTable[4484] = 855; // 'state 70' -> X -> shift -> 'action 855'
actionsTable[4485] = 856; // 'state 70' -> CARET -> shift -> 'action 856'
actionsTable[4486] = 857; // 'state 70' -> DASH -> shift -> 'action 857'
actionsTable[4488] = 858; // 'state 70' -> UNION -> shift -> 'action 858'
actionsTable[4489] = 859; // 'state 70' -> PAREN_OPEN -> shift -> 'action 859'
actionsTable[4490] = 860; // 'state 70' -> PAREN_CLOSE -> shift -> 'action 860'
actionsTable[4492] = 861; // 'state 70' -> BRACKET_OPEN -> shift -> 'action 861'
actionsTable[4501] = 862; // 'state 70' -> Atom -> shift -> 'action 862'
actionsTable[4502] = 863; // 'state 70' -> Group -> shift -> 'action 863'
actionsTable[4503] = 864; // 'state 70' -> CharacterClass -> shift -> 'action 864'
actionsTable[4507] = 865; // 'state 70' -> Character -> shift -> 'action 865'
actionsTable[4508] = 866; // 'state 70' -> CharacterOrNumberOrX -> shift -> 'action 866'
actionsTable[4288] = 867; // 'state 67' -> CHARACTER -> shift -> 'action 867'
actionsTable[4289] = 868; // 'state 67' -> NUMBER -> shift -> 'action 868'
actionsTable[4290] = 869; // 'state 67' -> CONTROL_CHARACTER -> shift -> 'action 869'
actionsTable[4291] = 870; // 'state 67' -> BACKSLASH -> shift -> 'action 870'
actionsTable[4292] = 871; // 'state 67' -> X -> shift -> 'action 871'
actionsTable[4293] = 872; // 'state 67' -> CARET -> shift -> 'action 872'
actionsTable[4295] = 873; // 'state 67' -> DOT -> shift -> 'action 873'
actionsTable[4296] = 874; // 'state 67' -> UNION -> shift -> 'action 874'
actionsTable[4297] = 875; // 'state 67' -> PAREN_OPEN -> shift -> 'action 875'
actionsTable[4298] = 876; // 'state 67' -> PAREN_CLOSE -> shift -> 'action 876'
actionsTable[4299] = 877; // 'state 67' -> QUANTIFIER -> shift -> 'action 877'
actionsTable[4312] = 878; // 'state 67' -> CharacterClassCharacters -> shift -> 'action 878'
actionsTable[4313] = 879; // 'state 67' -> CharacterClassCharacter -> shift -> 'action 879'
actionsTable[4314] = 880; // 'state 67' -> CharacterClassRange -> shift -> 'action 880'
actionsTable[4316] = 881; // 'state 67' -> CharacterOrNumberOrX -> shift -> 'action 881'
actionsTable[4096] = 882; // 'state 64' -> CHARACTER -> reduce -> 'action 882'
actionsTable[4097] = 883; // 'state 64' -> NUMBER -> reduce -> 'action 883'
actionsTable[4098] = 884; // 'state 64' -> CONTROL_CHARACTER -> reduce -> 'action 884'
actionsTable[4099] = 885; // 'state 64' -> BACKSLASH -> reduce -> 'action 885'
actionsTable[4100] = 886; // 'state 64' -> X -> reduce -> 'action 886'
actionsTable[4101] = 887; // 'state 64' -> CARET -> reduce -> 'action 887'
actionsTable[4102] = 888; // 'state 64' -> DASH -> reduce -> 'action 888'
actionsTable[4103] = 889; // 'state 64' -> DOT -> reduce -> 'action 889'
actionsTable[4104] = 890; // 'state 64' -> UNION -> reduce -> 'action 890'
actionsTable[4105] = 891; // 'state 64' -> PAREN_OPEN -> reduce -> 'action 891'
actionsTable[4106] = 892; // 'state 64' -> PAREN_CLOSE -> reduce -> 'action 892'
actionsTable[4107] = 893; // 'state 64' -> QUANTIFIER -> reduce -> 'action 893'
actionsTable[4108] = 894; // 'state 64' -> BRACKET_OPEN -> reduce -> 'action 894'
actionsTable[4109] = 895; // 'state 64' -> BRACKET_CLOSE -> reduce -> 'action 895'
actionsTable[4110] = 896; // 'state 64' -> @par-gen.EOF -> reduce -> 'action 896'
actionsTable[4160] = 897; // 'state 65' -> CHARACTER -> reduce -> 'action 897'
actionsTable[4161] = 898; // 'state 65' -> NUMBER -> reduce -> 'action 898'
actionsTable[4162] = 899; // 'state 65' -> CONTROL_CHARACTER -> reduce -> 'action 899'
actionsTable[4163] = 900; // 'state 65' -> BACKSLASH -> reduce -> 'action 900'
actionsTable[4164] = 901; // 'state 65' -> X -> reduce -> 'action 901'
actionsTable[4165] = 902; // 'state 65' -> CARET -> reduce -> 'action 902'
actionsTable[4166] = 903; // 'state 65' -> DASH -> reduce -> 'action 903'
actionsTable[4167] = 904; // 'state 65' -> DOT -> reduce -> 'action 904'
actionsTable[4168] = 905; // 'state 65' -> UNION -> reduce -> 'action 905'
actionsTable[4169] = 906; // 'state 65' -> PAREN_OPEN -> reduce -> 'action 906'
actionsTable[4170] = 907; // 'state 65' -> PAREN_CLOSE -> reduce -> 'action 907'
actionsTable[4171] = 908; // 'state 65' -> QUANTIFIER -> reduce -> 'action 908'
actionsTable[4172] = 909; // 'state 65' -> BRACKET_OPEN -> reduce -> 'action 909'
actionsTable[4173] = 910; // 'state 65' -> BRACKET_CLOSE -> reduce -> 'action 910'
actionsTable[4174] = 911; // 'state 65' -> @par-gen.EOF -> reduce -> 'action 911'
actionsTable[4224] = 912; // 'state 66' -> CHARACTER -> reduce -> 'action 912'
actionsTable[4225] = 913; // 'state 66' -> NUMBER -> reduce -> 'action 913'
actionsTable[4226] = 914; // 'state 66' -> CONTROL_CHARACTER -> reduce -> 'action 914'
actionsTable[4227] = 915; // 'state 66' -> BACKSLASH -> reduce -> 'action 915'
actionsTable[4228] = 916; // 'state 66' -> X -> reduce -> 'action 916'
actionsTable[4229] = 917; // 'state 66' -> CARET -> reduce -> 'action 917'
actionsTable[4230] = 918; // 'state 66' -> DASH -> reduce -> 'action 918'
actionsTable[4231] = 919; // 'state 66' -> DOT -> reduce -> 'action 919'
actionsTable[4232] = 920; // 'state 66' -> UNION -> reduce -> 'action 920'
actionsTable[4233] = 921; // 'state 66' -> PAREN_OPEN -> reduce -> 'action 921'
actionsTable[4234] = 922; // 'state 66' -> PAREN_CLOSE -> reduce -> 'action 922'
actionsTable[4235] = 923; // 'state 66' -> QUANTIFIER -> reduce -> 'action 923'
actionsTable[4236] = 924; // 'state 66' -> BRACKET_OPEN -> reduce -> 'action 924'
actionsTable[4237] = 925; // 'state 66' -> BRACKET_CLOSE -> reduce -> 'action 925'
actionsTable[4238] = 926; // 'state 66' -> @par-gen.EOF -> reduce -> 'action 926'
actionsTable[5248] = 927; // 'state 82' -> CHARACTER -> shift -> 'action 927'
actionsTable[5249] = 928; // 'state 82' -> NUMBER -> shift -> 'action 928'
actionsTable[5250] = 929; // 'state 82' -> CONTROL_CHARACTER -> shift -> 'action 929'
actionsTable[5251] = 930; // 'state 82' -> BACKSLASH -> shift -> 'action 930'
actionsTable[5252] = 931; // 'state 82' -> X -> shift -> 'action 931'
actionsTable[5255] = 932; // 'state 82' -> DOT -> shift -> 'action 932'
actionsTable[5256] = 933; // 'state 82' -> UNION -> shift -> 'action 933'
actionsTable[5257] = 934; // 'state 82' -> PAREN_OPEN -> shift -> 'action 934'
actionsTable[5258] = 935; // 'state 82' -> PAREN_CLOSE -> shift -> 'action 935'
actionsTable[5259] = 936; // 'state 82' -> QUANTIFIER -> shift -> 'action 936'
actionsTable[5261] = 937; // 'state 82' -> BRACKET_CLOSE -> shift -> 'action 937'
actionsTable[5273] = 938; // 'state 82' -> CharacterClassCharacter -> shift -> 'action 938'
actionsTable[5274] = 939; // 'state 82' -> CharacterClassRange -> shift -> 'action 939'
actionsTable[5276] = 940; // 'state 82' -> CharacterOrNumberOrX -> shift -> 'action 940'
actionsTable[5312] = 941; // 'state 83' -> CHARACTER -> reduce -> 'action 941'
actionsTable[5313] = 942; // 'state 83' -> NUMBER -> reduce -> 'action 942'
actionsTable[5314] = 943; // 'state 83' -> CONTROL_CHARACTER -> reduce -> 'action 943'
actionsTable[5315] = 944; // 'state 83' -> BACKSLASH -> reduce -> 'action 944'
actionsTable[5316] = 945; // 'state 83' -> X -> reduce -> 'action 945'
actionsTable[5319] = 946; // 'state 83' -> DOT -> reduce -> 'action 946'
actionsTable[5320] = 947; // 'state 83' -> UNION -> reduce -> 'action 947'
actionsTable[5321] = 948; // 'state 83' -> PAREN_OPEN -> reduce -> 'action 948'
actionsTable[5322] = 949; // 'state 83' -> PAREN_CLOSE -> reduce -> 'action 949'
actionsTable[5323] = 950; // 'state 83' -> QUANTIFIER -> reduce -> 'action 950'
actionsTable[5325] = 951; // 'state 83' -> BRACKET_CLOSE -> reduce -> 'action 951'
actionsTable[5446] = 952; // 'state 85' -> DASH -> shift -> 'action 952'
actionsTable[5440] = 953; // 'state 85' -> CHARACTER -> reduce -> 'action 953'
actionsTable[5441] = 954; // 'state 85' -> NUMBER -> reduce -> 'action 954'
actionsTable[5442] = 955; // 'state 85' -> CONTROL_CHARACTER -> reduce -> 'action 955'
actionsTable[5443] = 956; // 'state 85' -> BACKSLASH -> reduce -> 'action 956'
actionsTable[5444] = 957; // 'state 85' -> X -> reduce -> 'action 957'
actionsTable[5447] = 958; // 'state 85' -> DOT -> reduce -> 'action 958'
actionsTable[5448] = 959; // 'state 85' -> UNION -> reduce -> 'action 959'
actionsTable[5449] = 960; // 'state 85' -> PAREN_OPEN -> reduce -> 'action 960'
actionsTable[5450] = 961; // 'state 85' -> PAREN_CLOSE -> reduce -> 'action 961'
actionsTable[5451] = 962; // 'state 85' -> QUANTIFIER -> reduce -> 'action 962'
actionsTable[5453] = 963; // 'state 85' -> BRACKET_CLOSE -> reduce -> 'action 963'
actionsTable[4678] = 964; // 'state 73' -> DASH -> shift -> 'action 964'
actionsTable[4672] = 965; // 'state 73' -> CHARACTER -> reduce -> 'action 965'
actionsTable[4673] = 966; // 'state 73' -> NUMBER -> reduce -> 'action 966'
actionsTable[4674] = 967; // 'state 73' -> CONTROL_CHARACTER -> reduce -> 'action 967'
actionsTable[4675] = 968; // 'state 73' -> BACKSLASH -> reduce -> 'action 968'
actionsTable[4676] = 969; // 'state 73' -> X -> reduce -> 'action 969'
actionsTable[4679] = 970; // 'state 73' -> DOT -> reduce -> 'action 970'
actionsTable[4680] = 971; // 'state 73' -> UNION -> reduce -> 'action 971'
actionsTable[4681] = 972; // 'state 73' -> PAREN_OPEN -> reduce -> 'action 972'
actionsTable[4682] = 973; // 'state 73' -> PAREN_CLOSE -> reduce -> 'action 973'
actionsTable[4683] = 974; // 'state 73' -> QUANTIFIER -> reduce -> 'action 974'
actionsTable[4685] = 975; // 'state 73' -> BRACKET_CLOSE -> reduce -> 'action 975'
actionsTable[4738] = 976; // 'state 74' -> CONTROL_CHARACTER -> shift -> 'action 976'
actionsTable[4739] = 977; // 'state 74' -> BACKSLASH -> shift -> 'action 977'
actionsTable[4741] = 978; // 'state 74' -> CARET -> shift -> 'action 978'
actionsTable[4742] = 979; // 'state 74' -> DASH -> shift -> 'action 979'
actionsTable[4748] = 980; // 'state 74' -> BRACKET_OPEN -> shift -> 'action 980'
actionsTable[4749] = 981; // 'state 74' -> BRACKET_CLOSE -> shift -> 'action 981'
actionsTable[5184] = 982; // 'state 81' -> CHARACTER -> reduce -> 'action 982'
actionsTable[5185] = 983; // 'state 81' -> NUMBER -> reduce -> 'action 983'
actionsTable[5186] = 984; // 'state 81' -> CONTROL_CHARACTER -> reduce -> 'action 984'
actionsTable[5187] = 985; // 'state 81' -> BACKSLASH -> reduce -> 'action 985'
actionsTable[5188] = 986; // 'state 81' -> X -> reduce -> 'action 986'
actionsTable[5191] = 987; // 'state 81' -> DOT -> reduce -> 'action 987'
actionsTable[5192] = 988; // 'state 81' -> UNION -> reduce -> 'action 988'
actionsTable[5193] = 989; // 'state 81' -> PAREN_OPEN -> reduce -> 'action 989'
actionsTable[5194] = 990; // 'state 81' -> PAREN_CLOSE -> reduce -> 'action 990'
actionsTable[5195] = 991; // 'state 81' -> QUANTIFIER -> reduce -> 'action 991'
actionsTable[5197] = 992; // 'state 81' -> BRACKET_CLOSE -> reduce -> 'action 992'
actionsTable[5056] = 993; // 'state 79' -> CHARACTER -> reduce -> 'action 993'
actionsTable[5057] = 994; // 'state 79' -> NUMBER -> reduce -> 'action 994'
actionsTable[5058] = 995; // 'state 79' -> CONTROL_CHARACTER -> reduce -> 'action 995'
actionsTable[5059] = 996; // 'state 79' -> BACKSLASH -> reduce -> 'action 996'
actionsTable[5060] = 997; // 'state 79' -> X -> reduce -> 'action 997'
actionsTable[5063] = 998; // 'state 79' -> DOT -> reduce -> 'action 998'
actionsTable[5064] = 999; // 'state 79' -> UNION -> reduce -> 'action 999'
actionsTable[5065] = 1000; // 'state 79' -> PAREN_OPEN -> reduce -> 'action 1000'
actionsTable[5066] = 1001; // 'state 79' -> PAREN_CLOSE -> reduce -> 'action 1001'
actionsTable[5067] = 1002; // 'state 79' -> QUANTIFIER -> reduce -> 'action 1002'
actionsTable[5069] = 1003; // 'state 79' -> BRACKET_CLOSE -> reduce -> 'action 1003'
actionsTable[5120] = 1004; // 'state 80' -> CHARACTER -> reduce -> 'action 1004'
actionsTable[5121] = 1005; // 'state 80' -> NUMBER -> reduce -> 'action 1005'
actionsTable[5122] = 1006; // 'state 80' -> CONTROL_CHARACTER -> reduce -> 'action 1006'
actionsTable[5123] = 1007; // 'state 80' -> BACKSLASH -> reduce -> 'action 1007'
actionsTable[5124] = 1008; // 'state 80' -> X -> reduce -> 'action 1008'
actionsTable[5127] = 1009; // 'state 80' -> DOT -> reduce -> 'action 1009'
actionsTable[5128] = 1010; // 'state 80' -> UNION -> reduce -> 'action 1010'
actionsTable[5129] = 1011; // 'state 80' -> PAREN_OPEN -> reduce -> 'action 1011'
actionsTable[5130] = 1012; // 'state 80' -> PAREN_CLOSE -> reduce -> 'action 1012'
actionsTable[5131] = 1013; // 'state 80' -> QUANTIFIER -> reduce -> 'action 1013'
actionsTable[5133] = 1014; // 'state 80' -> BRACKET_CLOSE -> reduce -> 'action 1014'
actionsTable[4992] = 1015; // 'state 78' -> CHARACTER -> reduce -> 'action 1015'
actionsTable[4993] = 1016; // 'state 78' -> NUMBER -> reduce -> 'action 1016'
actionsTable[4994] = 1017; // 'state 78' -> CONTROL_CHARACTER -> reduce -> 'action 1017'
actionsTable[4995] = 1018; // 'state 78' -> BACKSLASH -> reduce -> 'action 1018'
actionsTable[4996] = 1019; // 'state 78' -> X -> reduce -> 'action 1019'
actionsTable[4999] = 1020; // 'state 78' -> DOT -> reduce -> 'action 1020'
actionsTable[5000] = 1021; // 'state 78' -> UNION -> reduce -> 'action 1021'
actionsTable[5001] = 1022; // 'state 78' -> PAREN_OPEN -> reduce -> 'action 1022'
actionsTable[5002] = 1023; // 'state 78' -> PAREN_CLOSE -> reduce -> 'action 1023'
actionsTable[5003] = 1024; // 'state 78' -> QUANTIFIER -> reduce -> 'action 1024'
actionsTable[5005] = 1025; // 'state 78' -> BRACKET_CLOSE -> reduce -> 'action 1025'
actionsTable[4928] = 1026; // 'state 77' -> CHARACTER -> reduce -> 'action 1026'
actionsTable[4929] = 1027; // 'state 77' -> NUMBER -> reduce -> 'action 1027'
actionsTable[4930] = 1028; // 'state 77' -> CONTROL_CHARACTER -> reduce -> 'action 1028'
actionsTable[4931] = 1029; // 'state 77' -> BACKSLASH -> reduce -> 'action 1029'
actionsTable[4932] = 1030; // 'state 77' -> X -> reduce -> 'action 1030'
actionsTable[4935] = 1031; // 'state 77' -> DOT -> reduce -> 'action 1031'
actionsTable[4936] = 1032; // 'state 77' -> UNION -> reduce -> 'action 1032'
actionsTable[4937] = 1033; // 'state 77' -> PAREN_OPEN -> reduce -> 'action 1033'
actionsTable[4938] = 1034; // 'state 77' -> PAREN_CLOSE -> reduce -> 'action 1034'
actionsTable[4939] = 1035; // 'state 77' -> QUANTIFIER -> reduce -> 'action 1035'
actionsTable[4941] = 1036; // 'state 77' -> BRACKET_CLOSE -> reduce -> 'action 1036'
actionsTable[5376] = 1037; // 'state 84' -> CHARACTER -> reduce -> 'action 1037'
actionsTable[5377] = 1038; // 'state 84' -> NUMBER -> reduce -> 'action 1038'
actionsTable[5378] = 1039; // 'state 84' -> CONTROL_CHARACTER -> reduce -> 'action 1039'
actionsTable[5379] = 1040; // 'state 84' -> BACKSLASH -> reduce -> 'action 1040'
actionsTable[5380] = 1041; // 'state 84' -> X -> reduce -> 'action 1041'
actionsTable[5383] = 1042; // 'state 84' -> DOT -> reduce -> 'action 1042'
actionsTable[5384] = 1043; // 'state 84' -> UNION -> reduce -> 'action 1043'
actionsTable[5385] = 1044; // 'state 84' -> PAREN_OPEN -> reduce -> 'action 1044'
actionsTable[5386] = 1045; // 'state 84' -> PAREN_CLOSE -> reduce -> 'action 1045'
actionsTable[5387] = 1046; // 'state 84' -> QUANTIFIER -> reduce -> 'action 1046'
actionsTable[5389] = 1047; // 'state 84' -> BRACKET_CLOSE -> reduce -> 'action 1047'
actionsTable[4544] = 1048; // 'state 71' -> CHARACTER -> reduce -> 'action 1048'
actionsTable[4545] = 1049; // 'state 71' -> NUMBER -> reduce -> 'action 1049'
actionsTable[4546] = 1050; // 'state 71' -> CONTROL_CHARACTER -> reduce -> 'action 1050'
actionsTable[4547] = 1051; // 'state 71' -> BACKSLASH -> reduce -> 'action 1051'
actionsTable[4548] = 1052; // 'state 71' -> X -> reduce -> 'action 1052'
actionsTable[4549] = 1053; // 'state 71' -> CARET -> reduce -> 'action 1053'
actionsTable[4550] = 1054; // 'state 71' -> DASH -> reduce -> 'action 1054'
actionsTable[4551] = 1055; // 'state 71' -> DOT -> reduce -> 'action 1055'
actionsTable[4552] = 1056; // 'state 71' -> UNION -> reduce -> 'action 1056'
actionsTable[4553] = 1057; // 'state 71' -> PAREN_OPEN -> reduce -> 'action 1057'
actionsTable[4554] = 1058; // 'state 71' -> PAREN_CLOSE -> reduce -> 'action 1058'
actionsTable[4555] = 1059; // 'state 71' -> QUANTIFIER -> reduce -> 'action 1059'
actionsTable[4556] = 1060; // 'state 71' -> BRACKET_OPEN -> reduce -> 'action 1060'
actionsTable[4557] = 1061; // 'state 71' -> BRACKET_CLOSE -> reduce -> 'action 1061'
actionsTable[4558] = 1062; // 'state 71' -> @par-gen.EOF -> reduce -> 'action 1062'
actionsTable[4608] = 1063; // 'state 72' -> CHARACTER -> reduce -> 'action 1063'
actionsTable[4609] = 1064; // 'state 72' -> NUMBER -> reduce -> 'action 1064'
actionsTable[4610] = 1065; // 'state 72' -> CONTROL_CHARACTER -> reduce -> 'action 1065'
actionsTable[4611] = 1066; // 'state 72' -> BACKSLASH -> reduce -> 'action 1066'
actionsTable[4612] = 1067; // 'state 72' -> X -> reduce -> 'action 1067'
actionsTable[4613] = 1068; // 'state 72' -> CARET -> reduce -> 'action 1068'
actionsTable[4614] = 1069; // 'state 72' -> DASH -> reduce -> 'action 1069'
actionsTable[4615] = 1070; // 'state 72' -> DOT -> reduce -> 'action 1070'
actionsTable[4616] = 1071; // 'state 72' -> UNION -> reduce -> 'action 1071'
actionsTable[4617] = 1072; // 'state 72' -> PAREN_OPEN -> reduce -> 'action 1072'
actionsTable[4618] = 1073; // 'state 72' -> PAREN_CLOSE -> reduce -> 'action 1073'
actionsTable[4619] = 1074; // 'state 72' -> QUANTIFIER -> reduce -> 'action 1074'
actionsTable[4620] = 1075; // 'state 72' -> BRACKET_OPEN -> reduce -> 'action 1075'
actionsTable[4621] = 1076; // 'state 72' -> BRACKET_CLOSE -> reduce -> 'action 1076'
actionsTable[4622] = 1077; // 'state 72' -> @par-gen.EOF -> reduce -> 'action 1077'
actionsTable[4800] = 1078; // 'state 75' -> CHARACTER -> reduce -> 'action 1078'
actionsTable[4801] = 1079; // 'state 75' -> NUMBER -> reduce -> 'action 1079'
actionsTable[4802] = 1080; // 'state 75' -> CONTROL_CHARACTER -> reduce -> 'action 1080'
actionsTable[4803] = 1081; // 'state 75' -> BACKSLASH -> reduce -> 'action 1081'
actionsTable[4804] = 1082; // 'state 75' -> X -> reduce -> 'action 1082'
actionsTable[4805] = 1083; // 'state 75' -> CARET -> reduce -> 'action 1083'
actionsTable[4806] = 1084; // 'state 75' -> DASH -> reduce -> 'action 1084'
actionsTable[4807] = 1085; // 'state 75' -> DOT -> reduce -> 'action 1085'
actionsTable[4808] = 1086; // 'state 75' -> UNION -> reduce -> 'action 1086'
actionsTable[4809] = 1087; // 'state 75' -> PAREN_OPEN -> reduce -> 'action 1087'
actionsTable[4810] = 1088; // 'state 75' -> PAREN_CLOSE -> reduce -> 'action 1088'
actionsTable[4811] = 1089; // 'state 75' -> QUANTIFIER -> reduce -> 'action 1089'
actionsTable[4812] = 1090; // 'state 75' -> BRACKET_OPEN -> reduce -> 'action 1090'
actionsTable[4813] = 1091; // 'state 75' -> BRACKET_CLOSE -> reduce -> 'action 1091'
actionsTable[4814] = 1092; // 'state 75' -> @par-gen.EOF -> reduce -> 'action 1092'
actionsTable[4864] = 1093; // 'state 76' -> CHARACTER -> shift -> 'action 1093'
actionsTable[4865] = 1094; // 'state 76' -> NUMBER -> shift -> 'action 1094'
actionsTable[4866] = 1095; // 'state 76' -> CONTROL_CHARACTER -> shift -> 'action 1095'
actionsTable[4867] = 1096; // 'state 76' -> BACKSLASH -> shift -> 'action 1096'
actionsTable[4868] = 1097; // 'state 76' -> X -> shift -> 'action 1097'
actionsTable[4871] = 1098; // 'state 76' -> DOT -> shift -> 'action 1098'
actionsTable[4872] = 1099; // 'state 76' -> UNION -> shift -> 'action 1099'
actionsTable[4873] = 1100; // 'state 76' -> PAREN_OPEN -> shift -> 'action 1100'
actionsTable[4874] = 1101; // 'state 76' -> PAREN_CLOSE -> shift -> 'action 1101'
actionsTable[4875] = 1102; // 'state 76' -> QUANTIFIER -> shift -> 'action 1102'
actionsTable[4888] = 1103; // 'state 76' -> CharacterClassCharacters -> shift -> 'action 1103'
actionsTable[4889] = 1104; // 'state 76' -> CharacterClassCharacter -> shift -> 'action 1104'
actionsTable[4890] = 1105; // 'state 76' -> CharacterClassRange -> shift -> 'action 1105'
actionsTable[4892] = 1106; // 'state 76' -> CharacterOrNumberOrX -> shift -> 'action 1106'
actionsTable[5504] = 1107; // 'state 86' -> CHARACTER -> shift -> 'action 1107'
actionsTable[5505] = 1108; // 'state 86' -> NUMBER -> shift -> 'action 1108'
actionsTable[5506] = 1109; // 'state 86' -> CONTROL_CHARACTER -> shift -> 'action 1109'
actionsTable[5507] = 1110; // 'state 86' -> BACKSLASH -> shift -> 'action 1110'
actionsTable[5508] = 1111; // 'state 86' -> X -> shift -> 'action 1111'
actionsTable[5509] = 1112; // 'state 86' -> CARET -> shift -> 'action 1112'
actionsTable[5510] = 1113; // 'state 86' -> DASH -> shift -> 'action 1113'
actionsTable[5513] = 1114; // 'state 86' -> PAREN_OPEN -> shift -> 'action 1114'
actionsTable[5516] = 1115; // 'state 86' -> BRACKET_OPEN -> shift -> 'action 1115'
actionsTable[5525] = 1116; // 'state 86' -> Atom -> shift -> 'action 1116'
actionsTable[5526] = 1117; // 'state 86' -> Group -> shift -> 'action 1117'
actionsTable[5527] = 1118; // 'state 86' -> CharacterClass -> shift -> 'action 1118'
actionsTable[5531] = 1119; // 'state 86' -> Character -> shift -> 'action 1119'
actionsTable[5532] = 1120; // 'state 86' -> CharacterOrNumberOrX -> shift -> 'action 1120'
actionsTable[5512] = 1121; // 'state 86' -> UNION -> reduce -> 'action 1121'
actionsTable[5514] = 1122; // 'state 86' -> PAREN_CLOSE -> reduce -> 'action 1122'
actionsTable[5518] = 1123; // 'state 86' -> @par-gen.EOF -> reduce -> 'action 1123'
actionsTable[5568] = 1124; // 'state 87' -> CHARACTER -> shift -> 'action 1124'
actionsTable[5569] = 1125; // 'state 87' -> NUMBER -> shift -> 'action 1125'
actionsTable[5570] = 1126; // 'state 87' -> CONTROL_CHARACTER -> shift -> 'action 1126'
actionsTable[5571] = 1127; // 'state 87' -> BACKSLASH -> shift -> 'action 1127'
actionsTable[5572] = 1128; // 'state 87' -> X -> shift -> 'action 1128'
actionsTable[5573] = 1129; // 'state 87' -> CARET -> shift -> 'action 1129'
actionsTable[5574] = 1130; // 'state 87' -> DASH -> shift -> 'action 1130'
actionsTable[5577] = 1131; // 'state 87' -> PAREN_OPEN -> shift -> 'action 1131'
actionsTable[5580] = 1132; // 'state 87' -> BRACKET_OPEN -> shift -> 'action 1132'
actionsTable[5589] = 1133; // 'state 87' -> Atom -> shift -> 'action 1133'
actionsTable[5590] = 1134; // 'state 87' -> Group -> shift -> 'action 1134'
actionsTable[5591] = 1135; // 'state 87' -> CharacterClass -> shift -> 'action 1135'
actionsTable[5595] = 1136; // 'state 87' -> Character -> shift -> 'action 1136'
actionsTable[5596] = 1137; // 'state 87' -> CharacterOrNumberOrX -> shift -> 'action 1137'
actionsTable[5576] = 1138; // 'state 87' -> UNION -> reduce -> 'action 1138'
actionsTable[5578] = 1139; // 'state 87' -> PAREN_CLOSE -> reduce -> 'action 1139'
actionsTable[5582] = 1140; // 'state 87' -> @par-gen.EOF -> reduce -> 'action 1140'
actionsTable[5632] = 1141; // 'state 88' -> CHARACTER -> shift -> 'action 1141'
actionsTable[5633] = 1142; // 'state 88' -> NUMBER -> shift -> 'action 1142'
actionsTable[5634] = 1143; // 'state 88' -> CONTROL_CHARACTER -> shift -> 'action 1143'
actionsTable[5635] = 1144; // 'state 88' -> BACKSLASH -> shift -> 'action 1144'
actionsTable[5636] = 1145; // 'state 88' -> X -> shift -> 'action 1145'
actionsTable[5637] = 1146; // 'state 88' -> CARET -> shift -> 'action 1146'
actionsTable[5638] = 1147; // 'state 88' -> DASH -> shift -> 'action 1147'
actionsTable[5641] = 1148; // 'state 88' -> PAREN_OPEN -> shift -> 'action 1148'
actionsTable[5644] = 1149; // 'state 88' -> BRACKET_OPEN -> shift -> 'action 1149'
actionsTable[5653] = 1150; // 'state 88' -> Atom -> shift -> 'action 1150'
actionsTable[5654] = 1151; // 'state 88' -> Group -> shift -> 'action 1151'
actionsTable[5655] = 1152; // 'state 88' -> CharacterClass -> shift -> 'action 1152'
actionsTable[5659] = 1153; // 'state 88' -> Character -> shift -> 'action 1153'
actionsTable[5660] = 1154; // 'state 88' -> CharacterOrNumberOrX -> shift -> 'action 1154'
actionsTable[5640] = 1155; // 'state 88' -> UNION -> reduce -> 'action 1155'
actionsTable[5642] = 1156; // 'state 88' -> PAREN_CLOSE -> reduce -> 'action 1156'
actionsTable[5646] = 1157; // 'state 88' -> @par-gen.EOF -> reduce -> 'action 1157'
actionsTable[5696] = 1158; // 'state 89' -> CHARACTER -> shift -> 'action 1158'
actionsTable[5697] = 1159; // 'state 89' -> NUMBER -> shift -> 'action 1159'
actionsTable[5698] = 1160; // 'state 89' -> CONTROL_CHARACTER -> shift -> 'action 1160'
actionsTable[5699] = 1161; // 'state 89' -> BACKSLASH -> shift -> 'action 1161'
actionsTable[5700] = 1162; // 'state 89' -> X -> shift -> 'action 1162'
actionsTable[5701] = 1163; // 'state 89' -> CARET -> shift -> 'action 1163'
actionsTable[5702] = 1164; // 'state 89' -> DASH -> shift -> 'action 1164'
actionsTable[5705] = 1165; // 'state 89' -> PAREN_OPEN -> shift -> 'action 1165'
actionsTable[5708] = 1166; // 'state 89' -> BRACKET_OPEN -> shift -> 'action 1166'
actionsTable[5717] = 1167; // 'state 89' -> Atom -> shift -> 'action 1167'
actionsTable[5718] = 1168; // 'state 89' -> Group -> shift -> 'action 1168'
actionsTable[5719] = 1169; // 'state 89' -> CharacterClass -> shift -> 'action 1169'
actionsTable[5723] = 1170; // 'state 89' -> Character -> shift -> 'action 1170'
actionsTable[5724] = 1171; // 'state 89' -> CharacterOrNumberOrX -> shift -> 'action 1171'
actionsTable[5704] = 1172; // 'state 89' -> UNION -> reduce -> 'action 1172'
actionsTable[5706] = 1173; // 'state 89' -> PAREN_CLOSE -> reduce -> 'action 1173'
actionsTable[5710] = 1174; // 'state 89' -> @par-gen.EOF -> reduce -> 'action 1174'
actionsTable[5760] = 1175; // 'state 90' -> CHARACTER -> reduce -> 'action 1175'
actionsTable[5761] = 1176; // 'state 90' -> NUMBER -> reduce -> 'action 1176'
actionsTable[5762] = 1177; // 'state 90' -> CONTROL_CHARACTER -> reduce -> 'action 1177'
actionsTable[5763] = 1178; // 'state 90' -> BACKSLASH -> reduce -> 'action 1178'
actionsTable[5764] = 1179; // 'state 90' -> X -> reduce -> 'action 1179'
actionsTable[5765] = 1180; // 'state 90' -> CARET -> reduce -> 'action 1180'
actionsTable[5766] = 1181; // 'state 90' -> DASH -> reduce -> 'action 1181'
actionsTable[5768] = 1182; // 'state 90' -> UNION -> reduce -> 'action 1182'
actionsTable[5769] = 1183; // 'state 90' -> PAREN_OPEN -> reduce -> 'action 1183'
actionsTable[5770] = 1184; // 'state 90' -> PAREN_CLOSE -> reduce -> 'action 1184'
actionsTable[5772] = 1185; // 'state 90' -> BRACKET_OPEN -> reduce -> 'action 1185'
actionsTable[5774] = 1186; // 'state 90' -> @par-gen.EOF -> reduce -> 'action 1186'
actionsTable[5824] = 1187; // 'state 91' -> CHARACTER -> reduce -> 'action 1187'
actionsTable[5825] = 1188; // 'state 91' -> NUMBER -> reduce -> 'action 1188'
actionsTable[5826] = 1189; // 'state 91' -> CONTROL_CHARACTER -> reduce -> 'action 1189'
actionsTable[5827] = 1190; // 'state 91' -> BACKSLASH -> reduce -> 'action 1190'
actionsTable[5828] = 1191; // 'state 91' -> X -> reduce -> 'action 1191'
actionsTable[5829] = 1192; // 'state 91' -> CARET -> reduce -> 'action 1192'
actionsTable[5830] = 1193; // 'state 91' -> DASH -> reduce -> 'action 1193'
actionsTable[5832] = 1194; // 'state 91' -> UNION -> reduce -> 'action 1194'
actionsTable[5833] = 1195; // 'state 91' -> PAREN_OPEN -> reduce -> 'action 1195'
actionsTable[5834] = 1196; // 'state 91' -> PAREN_CLOSE -> reduce -> 'action 1196'
actionsTable[5836] = 1197; // 'state 91' -> BRACKET_OPEN -> reduce -> 'action 1197'
actionsTable[5838] = 1198; // 'state 91' -> @par-gen.EOF -> reduce -> 'action 1198'
actionsTable[5888] = 1199; // 'state 92' -> CHARACTER -> reduce -> 'action 1199'
actionsTable[5889] = 1200; // 'state 92' -> NUMBER -> reduce -> 'action 1200'
actionsTable[5890] = 1201; // 'state 92' -> CONTROL_CHARACTER -> reduce -> 'action 1201'
actionsTable[5891] = 1202; // 'state 92' -> BACKSLASH -> reduce -> 'action 1202'
actionsTable[5892] = 1203; // 'state 92' -> X -> reduce -> 'action 1203'
actionsTable[5893] = 1204; // 'state 92' -> CARET -> reduce -> 'action 1204'
actionsTable[5894] = 1205; // 'state 92' -> DASH -> reduce -> 'action 1205'
actionsTable[5896] = 1206; // 'state 92' -> UNION -> reduce -> 'action 1206'
actionsTable[5897] = 1207; // 'state 92' -> PAREN_OPEN -> reduce -> 'action 1207'
actionsTable[5898] = 1208; // 'state 92' -> PAREN_CLOSE -> reduce -> 'action 1208'
actionsTable[5900] = 1209; // 'state 92' -> BRACKET_OPEN -> reduce -> 'action 1209'
actionsTable[5902] = 1210; // 'state 92' -> @par-gen.EOF -> reduce -> 'action 1210'
actionsTable[6592] = 1211; // 'state 103' -> CHARACTER -> reduce -> 'action 1211'
actionsTable[6593] = 1212; // 'state 103' -> NUMBER -> reduce -> 'action 1212'
actionsTable[6594] = 1213; // 'state 103' -> CONTROL_CHARACTER -> reduce -> 'action 1213'
actionsTable[6595] = 1214; // 'state 103' -> BACKSLASH -> reduce -> 'action 1214'
actionsTable[6596] = 1215; // 'state 103' -> X -> reduce -> 'action 1215'
actionsTable[6597] = 1216; // 'state 103' -> CARET -> reduce -> 'action 1216'
actionsTable[6598] = 1217; // 'state 103' -> DASH -> reduce -> 'action 1217'
actionsTable[6600] = 1218; // 'state 103' -> UNION -> reduce -> 'action 1218'
actionsTable[6601] = 1219; // 'state 103' -> PAREN_OPEN -> reduce -> 'action 1219'
actionsTable[6602] = 1220; // 'state 103' -> PAREN_CLOSE -> reduce -> 'action 1220'
actionsTable[6603] = 1221; // 'state 103' -> QUANTIFIER -> reduce -> 'action 1221'
actionsTable[6604] = 1222; // 'state 103' -> BRACKET_OPEN -> reduce -> 'action 1222'
actionsTable[6606] = 1223; // 'state 103' -> @par-gen.EOF -> reduce -> 'action 1223'
actionsTable[5952] = 1224; // 'state 93' -> CHARACTER -> reduce -> 'action 1224'
actionsTable[5953] = 1225; // 'state 93' -> NUMBER -> reduce -> 'action 1225'
actionsTable[5954] = 1226; // 'state 93' -> CONTROL_CHARACTER -> reduce -> 'action 1226'
actionsTable[5955] = 1227; // 'state 93' -> BACKSLASH -> reduce -> 'action 1227'
actionsTable[5956] = 1228; // 'state 93' -> X -> reduce -> 'action 1228'
actionsTable[5957] = 1229; // 'state 93' -> CARET -> reduce -> 'action 1229'
actionsTable[5958] = 1230; // 'state 93' -> DASH -> reduce -> 'action 1230'
actionsTable[5960] = 1231; // 'state 93' -> UNION -> reduce -> 'action 1231'
actionsTable[5961] = 1232; // 'state 93' -> PAREN_OPEN -> reduce -> 'action 1232'
actionsTable[5962] = 1233; // 'state 93' -> PAREN_CLOSE -> reduce -> 'action 1233'
actionsTable[5963] = 1234; // 'state 93' -> QUANTIFIER -> reduce -> 'action 1234'
actionsTable[5964] = 1235; // 'state 93' -> BRACKET_OPEN -> reduce -> 'action 1235'
actionsTable[5966] = 1236; // 'state 93' -> @par-gen.EOF -> reduce -> 'action 1236'
actionsTable[6016] = 1237; // 'state 94' -> CHARACTER -> reduce -> 'action 1237'
actionsTable[6017] = 1238; // 'state 94' -> NUMBER -> reduce -> 'action 1238'
actionsTable[6018] = 1239; // 'state 94' -> CONTROL_CHARACTER -> reduce -> 'action 1239'
actionsTable[6019] = 1240; // 'state 94' -> BACKSLASH -> reduce -> 'action 1240'
actionsTable[6020] = 1241; // 'state 94' -> X -> reduce -> 'action 1241'
actionsTable[6021] = 1242; // 'state 94' -> CARET -> reduce -> 'action 1242'
actionsTable[6022] = 1243; // 'state 94' -> DASH -> reduce -> 'action 1243'
actionsTable[6024] = 1244; // 'state 94' -> UNION -> reduce -> 'action 1244'
actionsTable[6025] = 1245; // 'state 94' -> PAREN_OPEN -> reduce -> 'action 1245'
actionsTable[6026] = 1246; // 'state 94' -> PAREN_CLOSE -> reduce -> 'action 1246'
actionsTable[6027] = 1247; // 'state 94' -> QUANTIFIER -> reduce -> 'action 1247'
actionsTable[6028] = 1248; // 'state 94' -> BRACKET_OPEN -> reduce -> 'action 1248'
actionsTable[6030] = 1249; // 'state 94' -> @par-gen.EOF -> reduce -> 'action 1249'
actionsTable[6144] = 1250; // 'state 96' -> CHARACTER -> reduce -> 'action 1250'
actionsTable[6145] = 1251; // 'state 96' -> NUMBER -> reduce -> 'action 1251'
actionsTable[6146] = 1252; // 'state 96' -> CONTROL_CHARACTER -> reduce -> 'action 1252'
actionsTable[6147] = 1253; // 'state 96' -> BACKSLASH -> reduce -> 'action 1253'
actionsTable[6148] = 1254; // 'state 96' -> X -> reduce -> 'action 1254'
actionsTable[6149] = 1255; // 'state 96' -> CARET -> reduce -> 'action 1255'
actionsTable[6150] = 1256; // 'state 96' -> DASH -> reduce -> 'action 1256'
actionsTable[6152] = 1257; // 'state 96' -> UNION -> reduce -> 'action 1257'
actionsTable[6153] = 1258; // 'state 96' -> PAREN_OPEN -> reduce -> 'action 1258'
actionsTable[6154] = 1259; // 'state 96' -> PAREN_CLOSE -> reduce -> 'action 1259'
actionsTable[6155] = 1260; // 'state 96' -> QUANTIFIER -> reduce -> 'action 1260'
actionsTable[6156] = 1261; // 'state 96' -> BRACKET_OPEN -> reduce -> 'action 1261'
actionsTable[6158] = 1262; // 'state 96' -> @par-gen.EOF -> reduce -> 'action 1262'
actionsTable[6208] = 1263; // 'state 97' -> CHARACTER -> reduce -> 'action 1263'
actionsTable[6209] = 1264; // 'state 97' -> NUMBER -> reduce -> 'action 1264'
actionsTable[6210] = 1265; // 'state 97' -> CONTROL_CHARACTER -> reduce -> 'action 1265'
actionsTable[6211] = 1266; // 'state 97' -> BACKSLASH -> reduce -> 'action 1266'
actionsTable[6212] = 1267; // 'state 97' -> X -> reduce -> 'action 1267'
actionsTable[6213] = 1268; // 'state 97' -> CARET -> reduce -> 'action 1268'
actionsTable[6214] = 1269; // 'state 97' -> DASH -> reduce -> 'action 1269'
actionsTable[6216] = 1270; // 'state 97' -> UNION -> reduce -> 'action 1270'
actionsTable[6217] = 1271; // 'state 97' -> PAREN_OPEN -> reduce -> 'action 1271'
actionsTable[6218] = 1272; // 'state 97' -> PAREN_CLOSE -> reduce -> 'action 1272'
actionsTable[6219] = 1273; // 'state 97' -> QUANTIFIER -> reduce -> 'action 1273'
actionsTable[6220] = 1274; // 'state 97' -> BRACKET_OPEN -> reduce -> 'action 1274'
actionsTable[6222] = 1275; // 'state 97' -> @par-gen.EOF -> reduce -> 'action 1275'
actionsTable[6272] = 1276; // 'state 98' -> CHARACTER -> reduce -> 'action 1276'
actionsTable[6273] = 1277; // 'state 98' -> NUMBER -> reduce -> 'action 1277'
actionsTable[6274] = 1278; // 'state 98' -> CONTROL_CHARACTER -> reduce -> 'action 1278'
actionsTable[6275] = 1279; // 'state 98' -> BACKSLASH -> reduce -> 'action 1279'
actionsTable[6276] = 1280; // 'state 98' -> X -> reduce -> 'action 1280'
actionsTable[6277] = 1281; // 'state 98' -> CARET -> reduce -> 'action 1281'
actionsTable[6278] = 1282; // 'state 98' -> DASH -> reduce -> 'action 1282'
actionsTable[6280] = 1283; // 'state 98' -> UNION -> reduce -> 'action 1283'
actionsTable[6281] = 1284; // 'state 98' -> PAREN_OPEN -> reduce -> 'action 1284'
actionsTable[6282] = 1285; // 'state 98' -> PAREN_CLOSE -> reduce -> 'action 1285'
actionsTable[6283] = 1286; // 'state 98' -> QUANTIFIER -> reduce -> 'action 1286'
actionsTable[6284] = 1287; // 'state 98' -> BRACKET_OPEN -> reduce -> 'action 1287'
actionsTable[6286] = 1288; // 'state 98' -> @par-gen.EOF -> reduce -> 'action 1288'
actionsTable[6336] = 1289; // 'state 99' -> CHARACTER -> reduce -> 'action 1289'
actionsTable[6337] = 1290; // 'state 99' -> NUMBER -> reduce -> 'action 1290'
actionsTable[6338] = 1291; // 'state 99' -> CONTROL_CHARACTER -> reduce -> 'action 1291'
actionsTable[6339] = 1292; // 'state 99' -> BACKSLASH -> reduce -> 'action 1292'
actionsTable[6340] = 1293; // 'state 99' -> X -> reduce -> 'action 1293'
actionsTable[6341] = 1294; // 'state 99' -> CARET -> reduce -> 'action 1294'
actionsTable[6342] = 1295; // 'state 99' -> DASH -> reduce -> 'action 1295'
actionsTable[6344] = 1296; // 'state 99' -> UNION -> reduce -> 'action 1296'
actionsTable[6345] = 1297; // 'state 99' -> PAREN_OPEN -> reduce -> 'action 1297'
actionsTable[6346] = 1298; // 'state 99' -> PAREN_CLOSE -> reduce -> 'action 1298'
actionsTable[6347] = 1299; // 'state 99' -> QUANTIFIER -> reduce -> 'action 1299'
actionsTable[6348] = 1300; // 'state 99' -> BRACKET_OPEN -> reduce -> 'action 1300'
actionsTable[6350] = 1301; // 'state 99' -> @par-gen.EOF -> reduce -> 'action 1301'
actionsTable[6464] = 1302; // 'state 101' -> CHARACTER -> reduce -> 'action 1302'
actionsTable[6465] = 1303; // 'state 101' -> NUMBER -> reduce -> 'action 1303'
actionsTable[6466] = 1304; // 'state 101' -> CONTROL_CHARACTER -> reduce -> 'action 1304'
actionsTable[6467] = 1305; // 'state 101' -> BACKSLASH -> reduce -> 'action 1305'
actionsTable[6468] = 1306; // 'state 101' -> X -> reduce -> 'action 1306'
actionsTable[6469] = 1307; // 'state 101' -> CARET -> reduce -> 'action 1307'
actionsTable[6470] = 1308; // 'state 101' -> DASH -> reduce -> 'action 1308'
actionsTable[6472] = 1309; // 'state 101' -> UNION -> reduce -> 'action 1309'
actionsTable[6473] = 1310; // 'state 101' -> PAREN_OPEN -> reduce -> 'action 1310'
actionsTable[6474] = 1311; // 'state 101' -> PAREN_CLOSE -> reduce -> 'action 1311'
actionsTable[6475] = 1312; // 'state 101' -> QUANTIFIER -> reduce -> 'action 1312'
actionsTable[6476] = 1313; // 'state 101' -> BRACKET_OPEN -> reduce -> 'action 1313'
actionsTable[6478] = 1314; // 'state 101' -> @par-gen.EOF -> reduce -> 'action 1314'
actionsTable[6528] = 1315; // 'state 102' -> CHARACTER -> reduce -> 'action 1315'
actionsTable[6529] = 1316; // 'state 102' -> NUMBER -> reduce -> 'action 1316'
actionsTable[6530] = 1317; // 'state 102' -> CONTROL_CHARACTER -> reduce -> 'action 1317'
actionsTable[6531] = 1318; // 'state 102' -> BACKSLASH -> reduce -> 'action 1318'
actionsTable[6532] = 1319; // 'state 102' -> X -> reduce -> 'action 1319'
actionsTable[6533] = 1320; // 'state 102' -> CARET -> reduce -> 'action 1320'
actionsTable[6534] = 1321; // 'state 102' -> DASH -> reduce -> 'action 1321'
actionsTable[6536] = 1322; // 'state 102' -> UNION -> reduce -> 'action 1322'
actionsTable[6537] = 1323; // 'state 102' -> PAREN_OPEN -> reduce -> 'action 1323'
actionsTable[6538] = 1324; // 'state 102' -> PAREN_CLOSE -> reduce -> 'action 1324'
actionsTable[6539] = 1325; // 'state 102' -> QUANTIFIER -> reduce -> 'action 1325'
actionsTable[6540] = 1326; // 'state 102' -> BRACKET_OPEN -> reduce -> 'action 1326'
actionsTable[6542] = 1327; // 'state 102' -> @par-gen.EOF -> reduce -> 'action 1327'
actionsTable[6400] = 1328; // 'state 100' -> CHARACTER -> reduce -> 'action 1328'
actionsTable[6401] = 1329; // 'state 100' -> NUMBER -> reduce -> 'action 1329'
actionsTable[6402] = 1330; // 'state 100' -> CONTROL_CHARACTER -> reduce -> 'action 1330'
actionsTable[6403] = 1331; // 'state 100' -> BACKSLASH -> reduce -> 'action 1331'
actionsTable[6404] = 1332; // 'state 100' -> X -> reduce -> 'action 1332'
actionsTable[6405] = 1333; // 'state 100' -> CARET -> reduce -> 'action 1333'
actionsTable[6406] = 1334; // 'state 100' -> DASH -> reduce -> 'action 1334'
actionsTable[6408] = 1335; // 'state 100' -> UNION -> reduce -> 'action 1335'
actionsTable[6409] = 1336; // 'state 100' -> PAREN_OPEN -> reduce -> 'action 1336'
actionsTable[6410] = 1337; // 'state 100' -> PAREN_CLOSE -> reduce -> 'action 1337'
actionsTable[6411] = 1338; // 'state 100' -> QUANTIFIER -> reduce -> 'action 1338'
actionsTable[6412] = 1339; // 'state 100' -> BRACKET_OPEN -> reduce -> 'action 1339'
actionsTable[6414] = 1340; // 'state 100' -> @par-gen.EOF -> reduce -> 'action 1340'
actionsTable[6081] = 1341; // 'state 95' -> NUMBER -> shift -> 'action 1341'
actionsTable[6664] = 1342; // 'state 104' -> UNION -> shift -> 'action 1342'
actionsTable[6666] = 1343; // 'state 104' -> PAREN_CLOSE -> shift -> 'action 1343'
actionsTable[6720] = 1344; // 'state 105' -> CHARACTER -> shift -> 'action 1344'
actionsTable[6721] = 1345; // 'state 105' -> NUMBER -> shift -> 'action 1345'
actionsTable[6722] = 1346; // 'state 105' -> CONTROL_CHARACTER -> shift -> 'action 1346'
actionsTable[6723] = 1347; // 'state 105' -> BACKSLASH -> shift -> 'action 1347'
actionsTable[6724] = 1348; // 'state 105' -> X -> shift -> 'action 1348'
actionsTable[6725] = 1349; // 'state 105' -> CARET -> shift -> 'action 1349'
actionsTable[6726] = 1350; // 'state 105' -> DASH -> shift -> 'action 1350'
actionsTable[6728] = 1351; // 'state 105' -> UNION -> shift -> 'action 1351'
actionsTable[6729] = 1352; // 'state 105' -> PAREN_OPEN -> shift -> 'action 1352'
actionsTable[6730] = 1353; // 'state 105' -> PAREN_CLOSE -> shift -> 'action 1353'
actionsTable[6732] = 1354; // 'state 105' -> BRACKET_OPEN -> shift -> 'action 1354'
actionsTable[6741] = 1355; // 'state 105' -> Atom -> shift -> 'action 1355'
actionsTable[6742] = 1356; // 'state 105' -> Group -> shift -> 'action 1356'
actionsTable[6743] = 1357; // 'state 105' -> CharacterClass -> shift -> 'action 1357'
actionsTable[6747] = 1358; // 'state 105' -> Character -> shift -> 'action 1358'
actionsTable[6748] = 1359; // 'state 105' -> CharacterOrNumberOrX -> shift -> 'action 1359'
actionsTable[6784] = 1360; // 'state 106' -> CHARACTER -> shift -> 'action 1360'
actionsTable[6785] = 1361; // 'state 106' -> NUMBER -> shift -> 'action 1361'
actionsTable[6786] = 1362; // 'state 106' -> CONTROL_CHARACTER -> shift -> 'action 1362'
actionsTable[6787] = 1363; // 'state 106' -> BACKSLASH -> shift -> 'action 1363'
actionsTable[6788] = 1364; // 'state 106' -> X -> shift -> 'action 1364'
actionsTable[6789] = 1365; // 'state 106' -> CARET -> shift -> 'action 1365'
actionsTable[6790] = 1366; // 'state 106' -> DASH -> shift -> 'action 1366'
actionsTable[6792] = 1367; // 'state 106' -> UNION -> shift -> 'action 1367'
actionsTable[6793] = 1368; // 'state 106' -> PAREN_OPEN -> shift -> 'action 1368'
actionsTable[6794] = 1369; // 'state 106' -> PAREN_CLOSE -> shift -> 'action 1369'
actionsTable[6796] = 1370; // 'state 106' -> BRACKET_OPEN -> shift -> 'action 1370'
actionsTable[6805] = 1371; // 'state 106' -> Atom -> shift -> 'action 1371'
actionsTable[6806] = 1372; // 'state 106' -> Group -> shift -> 'action 1372'
actionsTable[6807] = 1373; // 'state 106' -> CharacterClass -> shift -> 'action 1373'
actionsTable[6811] = 1374; // 'state 106' -> Character -> shift -> 'action 1374'
actionsTable[6812] = 1375; // 'state 106' -> CharacterOrNumberOrX -> shift -> 'action 1375'
actionsTable[7360] = 1376; // 'state 115' -> CHARACTER -> shift -> 'action 1376'
actionsTable[7361] = 1377; // 'state 115' -> NUMBER -> shift -> 'action 1377'
actionsTable[7362] = 1378; // 'state 115' -> CONTROL_CHARACTER -> shift -> 'action 1378'
actionsTable[7363] = 1379; // 'state 115' -> BACKSLASH -> shift -> 'action 1379'
actionsTable[7364] = 1380; // 'state 115' -> X -> shift -> 'action 1380'
actionsTable[7367] = 1381; // 'state 115' -> DOT -> shift -> 'action 1381'
actionsTable[7368] = 1382; // 'state 115' -> UNION -> shift -> 'action 1382'
actionsTable[7369] = 1383; // 'state 115' -> PAREN_OPEN -> shift -> 'action 1383'
actionsTable[7370] = 1384; // 'state 115' -> PAREN_CLOSE -> shift -> 'action 1384'
actionsTable[7371] = 1385; // 'state 115' -> QUANTIFIER -> shift -> 'action 1385'
actionsTable[7373] = 1386; // 'state 115' -> BRACKET_CLOSE -> shift -> 'action 1386'
actionsTable[7385] = 1387; // 'state 115' -> CharacterClassCharacter -> shift -> 'action 1387'
actionsTable[7386] = 1388; // 'state 115' -> CharacterClassRange -> shift -> 'action 1388'
actionsTable[7388] = 1389; // 'state 115' -> CharacterOrNumberOrX -> shift -> 'action 1389'
actionsTable[7424] = 1390; // 'state 116' -> CHARACTER -> reduce -> 'action 1390'
actionsTable[7425] = 1391; // 'state 116' -> NUMBER -> reduce -> 'action 1391'
actionsTable[7426] = 1392; // 'state 116' -> CONTROL_CHARACTER -> reduce -> 'action 1392'
actionsTable[7427] = 1393; // 'state 116' -> BACKSLASH -> reduce -> 'action 1393'
actionsTable[7428] = 1394; // 'state 116' -> X -> reduce -> 'action 1394'
actionsTable[7431] = 1395; // 'state 116' -> DOT -> reduce -> 'action 1395'
actionsTable[7432] = 1396; // 'state 116' -> UNION -> reduce -> 'action 1396'
actionsTable[7433] = 1397; // 'state 116' -> PAREN_OPEN -> reduce -> 'action 1397'
actionsTable[7434] = 1398; // 'state 116' -> PAREN_CLOSE -> reduce -> 'action 1398'
actionsTable[7435] = 1399; // 'state 116' -> QUANTIFIER -> reduce -> 'action 1399'
actionsTable[7437] = 1400; // 'state 116' -> BRACKET_CLOSE -> reduce -> 'action 1400'
actionsTable[7558] = 1401; // 'state 118' -> DASH -> shift -> 'action 1401'
actionsTable[7552] = 1402; // 'state 118' -> CHARACTER -> reduce -> 'action 1402'
actionsTable[7553] = 1403; // 'state 118' -> NUMBER -> reduce -> 'action 1403'
actionsTable[7554] = 1404; // 'state 118' -> CONTROL_CHARACTER -> reduce -> 'action 1404'
actionsTable[7555] = 1405; // 'state 118' -> BACKSLASH -> reduce -> 'action 1405'
actionsTable[7556] = 1406; // 'state 118' -> X -> reduce -> 'action 1406'
actionsTable[7559] = 1407; // 'state 118' -> DOT -> reduce -> 'action 1407'
actionsTable[7560] = 1408; // 'state 118' -> UNION -> reduce -> 'action 1408'
actionsTable[7561] = 1409; // 'state 118' -> PAREN_OPEN -> reduce -> 'action 1409'
actionsTable[7562] = 1410; // 'state 118' -> PAREN_CLOSE -> reduce -> 'action 1410'
actionsTable[7563] = 1411; // 'state 118' -> QUANTIFIER -> reduce -> 'action 1411'
actionsTable[7565] = 1412; // 'state 118' -> BRACKET_CLOSE -> reduce -> 'action 1412'
actionsTable[6854] = 1413; // 'state 107' -> DASH -> shift -> 'action 1413'
actionsTable[6848] = 1414; // 'state 107' -> CHARACTER -> reduce -> 'action 1414'
actionsTable[6849] = 1415; // 'state 107' -> NUMBER -> reduce -> 'action 1415'
actionsTable[6850] = 1416; // 'state 107' -> CONTROL_CHARACTER -> reduce -> 'action 1416'
actionsTable[6851] = 1417; // 'state 107' -> BACKSLASH -> reduce -> 'action 1417'
actionsTable[6852] = 1418; // 'state 107' -> X -> reduce -> 'action 1418'
actionsTable[6855] = 1419; // 'state 107' -> DOT -> reduce -> 'action 1419'
actionsTable[6856] = 1420; // 'state 107' -> UNION -> reduce -> 'action 1420'
actionsTable[6857] = 1421; // 'state 107' -> PAREN_OPEN -> reduce -> 'action 1421'
actionsTable[6858] = 1422; // 'state 107' -> PAREN_CLOSE -> reduce -> 'action 1422'
actionsTable[6859] = 1423; // 'state 107' -> QUANTIFIER -> reduce -> 'action 1423'
actionsTable[6861] = 1424; // 'state 107' -> BRACKET_CLOSE -> reduce -> 'action 1424'
actionsTable[6914] = 1425; // 'state 108' -> CONTROL_CHARACTER -> shift -> 'action 1425'
actionsTable[6915] = 1426; // 'state 108' -> BACKSLASH -> shift -> 'action 1426'
actionsTable[6917] = 1427; // 'state 108' -> CARET -> shift -> 'action 1427'
actionsTable[6918] = 1428; // 'state 108' -> DASH -> shift -> 'action 1428'
actionsTable[6924] = 1429; // 'state 108' -> BRACKET_OPEN -> shift -> 'action 1429'
actionsTable[6925] = 1430; // 'state 108' -> BRACKET_CLOSE -> shift -> 'action 1430'
actionsTable[7296] = 1431; // 'state 114' -> CHARACTER -> reduce -> 'action 1431'
actionsTable[7297] = 1432; // 'state 114' -> NUMBER -> reduce -> 'action 1432'
actionsTable[7298] = 1433; // 'state 114' -> CONTROL_CHARACTER -> reduce -> 'action 1433'
actionsTable[7299] = 1434; // 'state 114' -> BACKSLASH -> reduce -> 'action 1434'
actionsTable[7300] = 1435; // 'state 114' -> X -> reduce -> 'action 1435'
actionsTable[7303] = 1436; // 'state 114' -> DOT -> reduce -> 'action 1436'
actionsTable[7304] = 1437; // 'state 114' -> UNION -> reduce -> 'action 1437'
actionsTable[7305] = 1438; // 'state 114' -> PAREN_OPEN -> reduce -> 'action 1438'
actionsTable[7306] = 1439; // 'state 114' -> PAREN_CLOSE -> reduce -> 'action 1439'
actionsTable[7307] = 1440; // 'state 114' -> QUANTIFIER -> reduce -> 'action 1440'
actionsTable[7309] = 1441; // 'state 114' -> BRACKET_CLOSE -> reduce -> 'action 1441'
actionsTable[7168] = 1442; // 'state 112' -> CHARACTER -> reduce -> 'action 1442'
actionsTable[7169] = 1443; // 'state 112' -> NUMBER -> reduce -> 'action 1443'
actionsTable[7170] = 1444; // 'state 112' -> CONTROL_CHARACTER -> reduce -> 'action 1444'
actionsTable[7171] = 1445; // 'state 112' -> BACKSLASH -> reduce -> 'action 1445'
actionsTable[7172] = 1446; // 'state 112' -> X -> reduce -> 'action 1446'
actionsTable[7175] = 1447; // 'state 112' -> DOT -> reduce -> 'action 1447'
actionsTable[7176] = 1448; // 'state 112' -> UNION -> reduce -> 'action 1448'
actionsTable[7177] = 1449; // 'state 112' -> PAREN_OPEN -> reduce -> 'action 1449'
actionsTable[7178] = 1450; // 'state 112' -> PAREN_CLOSE -> reduce -> 'action 1450'
actionsTable[7179] = 1451; // 'state 112' -> QUANTIFIER -> reduce -> 'action 1451'
actionsTable[7181] = 1452; // 'state 112' -> BRACKET_CLOSE -> reduce -> 'action 1452'
actionsTable[7232] = 1453; // 'state 113' -> CHARACTER -> reduce -> 'action 1453'
actionsTable[7233] = 1454; // 'state 113' -> NUMBER -> reduce -> 'action 1454'
actionsTable[7234] = 1455; // 'state 113' -> CONTROL_CHARACTER -> reduce -> 'action 1455'
actionsTable[7235] = 1456; // 'state 113' -> BACKSLASH -> reduce -> 'action 1456'
actionsTable[7236] = 1457; // 'state 113' -> X -> reduce -> 'action 1457'
actionsTable[7239] = 1458; // 'state 113' -> DOT -> reduce -> 'action 1458'
actionsTable[7240] = 1459; // 'state 113' -> UNION -> reduce -> 'action 1459'
actionsTable[7241] = 1460; // 'state 113' -> PAREN_OPEN -> reduce -> 'action 1460'
actionsTable[7242] = 1461; // 'state 113' -> PAREN_CLOSE -> reduce -> 'action 1461'
actionsTable[7243] = 1462; // 'state 113' -> QUANTIFIER -> reduce -> 'action 1462'
actionsTable[7245] = 1463; // 'state 113' -> BRACKET_CLOSE -> reduce -> 'action 1463'
actionsTable[7104] = 1464; // 'state 111' -> CHARACTER -> reduce -> 'action 1464'
actionsTable[7105] = 1465; // 'state 111' -> NUMBER -> reduce -> 'action 1465'
actionsTable[7106] = 1466; // 'state 111' -> CONTROL_CHARACTER -> reduce -> 'action 1466'
actionsTable[7107] = 1467; // 'state 111' -> BACKSLASH -> reduce -> 'action 1467'
actionsTable[7108] = 1468; // 'state 111' -> X -> reduce -> 'action 1468'
actionsTable[7111] = 1469; // 'state 111' -> DOT -> reduce -> 'action 1469'
actionsTable[7112] = 1470; // 'state 111' -> UNION -> reduce -> 'action 1470'
actionsTable[7113] = 1471; // 'state 111' -> PAREN_OPEN -> reduce -> 'action 1471'
actionsTable[7114] = 1472; // 'state 111' -> PAREN_CLOSE -> reduce -> 'action 1472'
actionsTable[7115] = 1473; // 'state 111' -> QUANTIFIER -> reduce -> 'action 1473'
actionsTable[7117] = 1474; // 'state 111' -> BRACKET_CLOSE -> reduce -> 'action 1474'
actionsTable[7040] = 1475; // 'state 110' -> CHARACTER -> reduce -> 'action 1475'
actionsTable[7041] = 1476; // 'state 110' -> NUMBER -> reduce -> 'action 1476'
actionsTable[7042] = 1477; // 'state 110' -> CONTROL_CHARACTER -> reduce -> 'action 1477'
actionsTable[7043] = 1478; // 'state 110' -> BACKSLASH -> reduce -> 'action 1478'
actionsTable[7044] = 1479; // 'state 110' -> X -> reduce -> 'action 1479'
actionsTable[7047] = 1480; // 'state 110' -> DOT -> reduce -> 'action 1480'
actionsTable[7048] = 1481; // 'state 110' -> UNION -> reduce -> 'action 1481'
actionsTable[7049] = 1482; // 'state 110' -> PAREN_OPEN -> reduce -> 'action 1482'
actionsTable[7050] = 1483; // 'state 110' -> PAREN_CLOSE -> reduce -> 'action 1483'
actionsTable[7051] = 1484; // 'state 110' -> QUANTIFIER -> reduce -> 'action 1484'
actionsTable[7053] = 1485; // 'state 110' -> BRACKET_CLOSE -> reduce -> 'action 1485'
actionsTable[7488] = 1486; // 'state 117' -> CHARACTER -> reduce -> 'action 1486'
actionsTable[7489] = 1487; // 'state 117' -> NUMBER -> reduce -> 'action 1487'
actionsTable[7490] = 1488; // 'state 117' -> CONTROL_CHARACTER -> reduce -> 'action 1488'
actionsTable[7491] = 1489; // 'state 117' -> BACKSLASH -> reduce -> 'action 1489'
actionsTable[7492] = 1490; // 'state 117' -> X -> reduce -> 'action 1490'
actionsTable[7495] = 1491; // 'state 117' -> DOT -> reduce -> 'action 1491'
actionsTable[7496] = 1492; // 'state 117' -> UNION -> reduce -> 'action 1492'
actionsTable[7497] = 1493; // 'state 117' -> PAREN_OPEN -> reduce -> 'action 1493'
actionsTable[7498] = 1494; // 'state 117' -> PAREN_CLOSE -> reduce -> 'action 1494'
actionsTable[7499] = 1495; // 'state 117' -> QUANTIFIER -> reduce -> 'action 1495'
actionsTable[7501] = 1496; // 'state 117' -> BRACKET_CLOSE -> reduce -> 'action 1496'
actionsTable[6976] = 1497; // 'state 109' -> CHARACTER -> shift -> 'action 1497'
actionsTable[6977] = 1498; // 'state 109' -> NUMBER -> shift -> 'action 1498'
actionsTable[6978] = 1499; // 'state 109' -> CONTROL_CHARACTER -> shift -> 'action 1499'
actionsTable[6979] = 1500; // 'state 109' -> BACKSLASH -> shift -> 'action 1500'
actionsTable[6980] = 1501; // 'state 109' -> X -> shift -> 'action 1501'
actionsTable[6983] = 1502; // 'state 109' -> DOT -> shift -> 'action 1502'
actionsTable[6984] = 1503; // 'state 109' -> UNION -> shift -> 'action 1503'
actionsTable[6985] = 1504; // 'state 109' -> PAREN_OPEN -> shift -> 'action 1504'
actionsTable[6986] = 1505; // 'state 109' -> PAREN_CLOSE -> shift -> 'action 1505'
actionsTable[6987] = 1506; // 'state 109' -> QUANTIFIER -> shift -> 'action 1506'
actionsTable[7000] = 1507; // 'state 109' -> CharacterClassCharacters -> shift -> 'action 1507'
actionsTable[7001] = 1508; // 'state 109' -> CharacterClassCharacter -> shift -> 'action 1508'
actionsTable[7002] = 1509; // 'state 109' -> CharacterClassRange -> shift -> 'action 1509'
actionsTable[7004] = 1510; // 'state 109' -> CharacterOrNumberOrX -> shift -> 'action 1510'
actionsTable[7616] = 1511; // 'state 119' -> CHARACTER -> shift -> 'action 1511'
actionsTable[7617] = 1512; // 'state 119' -> NUMBER -> shift -> 'action 1512'
actionsTable[7618] = 1513; // 'state 119' -> CONTROL_CHARACTER -> shift -> 'action 1513'
actionsTable[7619] = 1514; // 'state 119' -> BACKSLASH -> shift -> 'action 1514'
actionsTable[7620] = 1515; // 'state 119' -> X -> shift -> 'action 1515'
actionsTable[7621] = 1516; // 'state 119' -> CARET -> shift -> 'action 1516'
actionsTable[7622] = 1517; // 'state 119' -> DASH -> shift -> 'action 1517'
actionsTable[7625] = 1518; // 'state 119' -> PAREN_OPEN -> shift -> 'action 1518'
actionsTable[7628] = 1519; // 'state 119' -> BRACKET_OPEN -> shift -> 'action 1519'
actionsTable[7637] = 1520; // 'state 119' -> Atom -> shift -> 'action 1520'
actionsTable[7638] = 1521; // 'state 119' -> Group -> shift -> 'action 1521'
actionsTable[7639] = 1522; // 'state 119' -> CharacterClass -> shift -> 'action 1522'
actionsTable[7643] = 1523; // 'state 119' -> Character -> shift -> 'action 1523'
actionsTable[7644] = 1524; // 'state 119' -> CharacterOrNumberOrX -> shift -> 'action 1524'
actionsTable[7624] = 1525; // 'state 119' -> UNION -> reduce -> 'action 1525'
actionsTable[7626] = 1526; // 'state 119' -> PAREN_CLOSE -> reduce -> 'action 1526'
actionsTable[7630] = 1527; // 'state 119' -> @par-gen.EOF -> reduce -> 'action 1527'
actionsTable[7680] = 1528; // 'state 120' -> CHARACTER -> shift -> 'action 1528'
actionsTable[7681] = 1529; // 'state 120' -> NUMBER -> shift -> 'action 1529'
actionsTable[7682] = 1530; // 'state 120' -> CONTROL_CHARACTER -> shift -> 'action 1530'
actionsTable[7683] = 1531; // 'state 120' -> BACKSLASH -> shift -> 'action 1531'
actionsTable[7684] = 1532; // 'state 120' -> X -> shift -> 'action 1532'
actionsTable[7685] = 1533; // 'state 120' -> CARET -> shift -> 'action 1533'
actionsTable[7686] = 1534; // 'state 120' -> DASH -> shift -> 'action 1534'
actionsTable[7689] = 1535; // 'state 120' -> PAREN_OPEN -> shift -> 'action 1535'
actionsTable[7692] = 1536; // 'state 120' -> BRACKET_OPEN -> shift -> 'action 1536'
actionsTable[7701] = 1537; // 'state 120' -> Atom -> shift -> 'action 1537'
actionsTable[7702] = 1538; // 'state 120' -> Group -> shift -> 'action 1538'
actionsTable[7703] = 1539; // 'state 120' -> CharacterClass -> shift -> 'action 1539'
actionsTable[7707] = 1540; // 'state 120' -> Character -> shift -> 'action 1540'
actionsTable[7708] = 1541; // 'state 120' -> CharacterOrNumberOrX -> shift -> 'action 1541'
actionsTable[7688] = 1542; // 'state 120' -> UNION -> reduce -> 'action 1542'
actionsTable[7690] = 1543; // 'state 120' -> PAREN_CLOSE -> reduce -> 'action 1543'
actionsTable[7694] = 1544; // 'state 120' -> @par-gen.EOF -> reduce -> 'action 1544'
actionsTable[7744] = 1545; // 'state 121' -> CHARACTER -> reduce -> 'action 1545'
actionsTable[7745] = 1546; // 'state 121' -> NUMBER -> reduce -> 'action 1546'
actionsTable[7746] = 1547; // 'state 121' -> CONTROL_CHARACTER -> reduce -> 'action 1547'
actionsTable[7747] = 1548; // 'state 121' -> BACKSLASH -> reduce -> 'action 1548'
actionsTable[7748] = 1549; // 'state 121' -> X -> reduce -> 'action 1549'
actionsTable[7749] = 1550; // 'state 121' -> CARET -> reduce -> 'action 1550'
actionsTable[7750] = 1551; // 'state 121' -> DASH -> reduce -> 'action 1551'
actionsTable[7752] = 1552; // 'state 121' -> UNION -> reduce -> 'action 1552'
actionsTable[7753] = 1553; // 'state 121' -> PAREN_OPEN -> reduce -> 'action 1553'
actionsTable[7754] = 1554; // 'state 121' -> PAREN_CLOSE -> reduce -> 'action 1554'
actionsTable[7756] = 1555; // 'state 121' -> BRACKET_OPEN -> reduce -> 'action 1555'
actionsTable[7758] = 1556; // 'state 121' -> @par-gen.EOF -> reduce -> 'action 1556'
actionsTable[7808] = 1557; // 'state 122' -> CHARACTER -> reduce -> 'action 1557'
actionsTable[7809] = 1558; // 'state 122' -> NUMBER -> reduce -> 'action 1558'
actionsTable[7810] = 1559; // 'state 122' -> CONTROL_CHARACTER -> reduce -> 'action 1559'
actionsTable[7811] = 1560; // 'state 122' -> BACKSLASH -> reduce -> 'action 1560'
actionsTable[7812] = 1561; // 'state 122' -> X -> reduce -> 'action 1561'
actionsTable[7813] = 1562; // 'state 122' -> CARET -> reduce -> 'action 1562'
actionsTable[7814] = 1563; // 'state 122' -> DASH -> reduce -> 'action 1563'
actionsTable[7816] = 1564; // 'state 122' -> UNION -> reduce -> 'action 1564'
actionsTable[7817] = 1565; // 'state 122' -> PAREN_OPEN -> reduce -> 'action 1565'
actionsTable[7818] = 1566; // 'state 122' -> PAREN_CLOSE -> reduce -> 'action 1566'
actionsTable[7820] = 1567; // 'state 122' -> BRACKET_OPEN -> reduce -> 'action 1567'
actionsTable[7822] = 1568; // 'state 122' -> @par-gen.EOF -> reduce -> 'action 1568'
actionsTable[7872] = 1569; // 'state 123' -> CHARACTER -> reduce -> 'action 1569'
actionsTable[7873] = 1570; // 'state 123' -> NUMBER -> reduce -> 'action 1570'
actionsTable[7874] = 1571; // 'state 123' -> CONTROL_CHARACTER -> reduce -> 'action 1571'
actionsTable[7875] = 1572; // 'state 123' -> BACKSLASH -> reduce -> 'action 1572'
actionsTable[7876] = 1573; // 'state 123' -> X -> reduce -> 'action 1573'
actionsTable[7877] = 1574; // 'state 123' -> CARET -> reduce -> 'action 1574'
actionsTable[7878] = 1575; // 'state 123' -> DASH -> reduce -> 'action 1575'
actionsTable[7880] = 1576; // 'state 123' -> UNION -> reduce -> 'action 1576'
actionsTable[7881] = 1577; // 'state 123' -> PAREN_OPEN -> reduce -> 'action 1577'
actionsTable[7882] = 1578; // 'state 123' -> PAREN_CLOSE -> reduce -> 'action 1578'
actionsTable[7884] = 1579; // 'state 123' -> BRACKET_OPEN -> reduce -> 'action 1579'
actionsTable[7886] = 1580; // 'state 123' -> @par-gen.EOF -> reduce -> 'action 1580'
actionsTable[8576] = 1581; // 'state 134' -> CHARACTER -> reduce -> 'action 1581'
actionsTable[8577] = 1582; // 'state 134' -> NUMBER -> reduce -> 'action 1582'
actionsTable[8578] = 1583; // 'state 134' -> CONTROL_CHARACTER -> reduce -> 'action 1583'
actionsTable[8579] = 1584; // 'state 134' -> BACKSLASH -> reduce -> 'action 1584'
actionsTable[8580] = 1585; // 'state 134' -> X -> reduce -> 'action 1585'
actionsTable[8581] = 1586; // 'state 134' -> CARET -> reduce -> 'action 1586'
actionsTable[8582] = 1587; // 'state 134' -> DASH -> reduce -> 'action 1587'
actionsTable[8584] = 1588; // 'state 134' -> UNION -> reduce -> 'action 1588'
actionsTable[8585] = 1589; // 'state 134' -> PAREN_OPEN -> reduce -> 'action 1589'
actionsTable[8586] = 1590; // 'state 134' -> PAREN_CLOSE -> reduce -> 'action 1590'
actionsTable[8587] = 1591; // 'state 134' -> QUANTIFIER -> reduce -> 'action 1591'
actionsTable[8588] = 1592; // 'state 134' -> BRACKET_OPEN -> reduce -> 'action 1592'
actionsTable[8590] = 1593; // 'state 134' -> @par-gen.EOF -> reduce -> 'action 1593'
actionsTable[7936] = 1594; // 'state 124' -> CHARACTER -> reduce -> 'action 1594'
actionsTable[7937] = 1595; // 'state 124' -> NUMBER -> reduce -> 'action 1595'
actionsTable[7938] = 1596; // 'state 124' -> CONTROL_CHARACTER -> reduce -> 'action 1596'
actionsTable[7939] = 1597; // 'state 124' -> BACKSLASH -> reduce -> 'action 1597'
actionsTable[7940] = 1598; // 'state 124' -> X -> reduce -> 'action 1598'
actionsTable[7941] = 1599; // 'state 124' -> CARET -> reduce -> 'action 1599'
actionsTable[7942] = 1600; // 'state 124' -> DASH -> reduce -> 'action 1600'
actionsTable[7944] = 1601; // 'state 124' -> UNION -> reduce -> 'action 1601'
actionsTable[7945] = 1602; // 'state 124' -> PAREN_OPEN -> reduce -> 'action 1602'
actionsTable[7946] = 1603; // 'state 124' -> PAREN_CLOSE -> reduce -> 'action 1603'
actionsTable[7947] = 1604; // 'state 124' -> QUANTIFIER -> reduce -> 'action 1604'
actionsTable[7948] = 1605; // 'state 124' -> BRACKET_OPEN -> reduce -> 'action 1605'
actionsTable[7950] = 1606; // 'state 124' -> @par-gen.EOF -> reduce -> 'action 1606'
actionsTable[8000] = 1607; // 'state 125' -> CHARACTER -> reduce -> 'action 1607'
actionsTable[8001] = 1608; // 'state 125' -> NUMBER -> reduce -> 'action 1608'
actionsTable[8002] = 1609; // 'state 125' -> CONTROL_CHARACTER -> reduce -> 'action 1609'
actionsTable[8003] = 1610; // 'state 125' -> BACKSLASH -> reduce -> 'action 1610'
actionsTable[8004] = 1611; // 'state 125' -> X -> reduce -> 'action 1611'
actionsTable[8005] = 1612; // 'state 125' -> CARET -> reduce -> 'action 1612'
actionsTable[8006] = 1613; // 'state 125' -> DASH -> reduce -> 'action 1613'
actionsTable[8008] = 1614; // 'state 125' -> UNION -> reduce -> 'action 1614'
actionsTable[8009] = 1615; // 'state 125' -> PAREN_OPEN -> reduce -> 'action 1615'
actionsTable[8010] = 1616; // 'state 125' -> PAREN_CLOSE -> reduce -> 'action 1616'
actionsTable[8011] = 1617; // 'state 125' -> QUANTIFIER -> reduce -> 'action 1617'
actionsTable[8012] = 1618; // 'state 125' -> BRACKET_OPEN -> reduce -> 'action 1618'
actionsTable[8014] = 1619; // 'state 125' -> @par-gen.EOF -> reduce -> 'action 1619'
actionsTable[8128] = 1620; // 'state 127' -> CHARACTER -> reduce -> 'action 1620'
actionsTable[8129] = 1621; // 'state 127' -> NUMBER -> reduce -> 'action 1621'
actionsTable[8130] = 1622; // 'state 127' -> CONTROL_CHARACTER -> reduce -> 'action 1622'
actionsTable[8131] = 1623; // 'state 127' -> BACKSLASH -> reduce -> 'action 1623'
actionsTable[8132] = 1624; // 'state 127' -> X -> reduce -> 'action 1624'
actionsTable[8133] = 1625; // 'state 127' -> CARET -> reduce -> 'action 1625'
actionsTable[8134] = 1626; // 'state 127' -> DASH -> reduce -> 'action 1626'
actionsTable[8136] = 1627; // 'state 127' -> UNION -> reduce -> 'action 1627'
actionsTable[8137] = 1628; // 'state 127' -> PAREN_OPEN -> reduce -> 'action 1628'
actionsTable[8138] = 1629; // 'state 127' -> PAREN_CLOSE -> reduce -> 'action 1629'
actionsTable[8139] = 1630; // 'state 127' -> QUANTIFIER -> reduce -> 'action 1630'
actionsTable[8140] = 1631; // 'state 127' -> BRACKET_OPEN -> reduce -> 'action 1631'
actionsTable[8142] = 1632; // 'state 127' -> @par-gen.EOF -> reduce -> 'action 1632'
actionsTable[8192] = 1633; // 'state 128' -> CHARACTER -> reduce -> 'action 1633'
actionsTable[8193] = 1634; // 'state 128' -> NUMBER -> reduce -> 'action 1634'
actionsTable[8194] = 1635; // 'state 128' -> CONTROL_CHARACTER -> reduce -> 'action 1635'
actionsTable[8195] = 1636; // 'state 128' -> BACKSLASH -> reduce -> 'action 1636'
actionsTable[8196] = 1637; // 'state 128' -> X -> reduce -> 'action 1637'
actionsTable[8197] = 1638; // 'state 128' -> CARET -> reduce -> 'action 1638'
actionsTable[8198] = 1639; // 'state 128' -> DASH -> reduce -> 'action 1639'
actionsTable[8200] = 1640; // 'state 128' -> UNION -> reduce -> 'action 1640'
actionsTable[8201] = 1641; // 'state 128' -> PAREN_OPEN -> reduce -> 'action 1641'
actionsTable[8202] = 1642; // 'state 128' -> PAREN_CLOSE -> reduce -> 'action 1642'
actionsTable[8203] = 1643; // 'state 128' -> QUANTIFIER -> reduce -> 'action 1643'
actionsTable[8204] = 1644; // 'state 128' -> BRACKET_OPEN -> reduce -> 'action 1644'
actionsTable[8206] = 1645; // 'state 128' -> @par-gen.EOF -> reduce -> 'action 1645'
actionsTable[8256] = 1646; // 'state 129' -> CHARACTER -> reduce -> 'action 1646'
actionsTable[8257] = 1647; // 'state 129' -> NUMBER -> reduce -> 'action 1647'
actionsTable[8258] = 1648; // 'state 129' -> CONTROL_CHARACTER -> reduce -> 'action 1648'
actionsTable[8259] = 1649; // 'state 129' -> BACKSLASH -> reduce -> 'action 1649'
actionsTable[8260] = 1650; // 'state 129' -> X -> reduce -> 'action 1650'
actionsTable[8261] = 1651; // 'state 129' -> CARET -> reduce -> 'action 1651'
actionsTable[8262] = 1652; // 'state 129' -> DASH -> reduce -> 'action 1652'
actionsTable[8264] = 1653; // 'state 129' -> UNION -> reduce -> 'action 1653'
actionsTable[8265] = 1654; // 'state 129' -> PAREN_OPEN -> reduce -> 'action 1654'
actionsTable[8266] = 1655; // 'state 129' -> PAREN_CLOSE -> reduce -> 'action 1655'
actionsTable[8267] = 1656; // 'state 129' -> QUANTIFIER -> reduce -> 'action 1656'
actionsTable[8268] = 1657; // 'state 129' -> BRACKET_OPEN -> reduce -> 'action 1657'
actionsTable[8270] = 1658; // 'state 129' -> @par-gen.EOF -> reduce -> 'action 1658'
actionsTable[8320] = 1659; // 'state 130' -> CHARACTER -> reduce -> 'action 1659'
actionsTable[8321] = 1660; // 'state 130' -> NUMBER -> reduce -> 'action 1660'
actionsTable[8322] = 1661; // 'state 130' -> CONTROL_CHARACTER -> reduce -> 'action 1661'
actionsTable[8323] = 1662; // 'state 130' -> BACKSLASH -> reduce -> 'action 1662'
actionsTable[8324] = 1663; // 'state 130' -> X -> reduce -> 'action 1663'
actionsTable[8325] = 1664; // 'state 130' -> CARET -> reduce -> 'action 1664'
actionsTable[8326] = 1665; // 'state 130' -> DASH -> reduce -> 'action 1665'
actionsTable[8328] = 1666; // 'state 130' -> UNION -> reduce -> 'action 1666'
actionsTable[8329] = 1667; // 'state 130' -> PAREN_OPEN -> reduce -> 'action 1667'
actionsTable[8330] = 1668; // 'state 130' -> PAREN_CLOSE -> reduce -> 'action 1668'
actionsTable[8331] = 1669; // 'state 130' -> QUANTIFIER -> reduce -> 'action 1669'
actionsTable[8332] = 1670; // 'state 130' -> BRACKET_OPEN -> reduce -> 'action 1670'
actionsTable[8334] = 1671; // 'state 130' -> @par-gen.EOF -> reduce -> 'action 1671'
actionsTable[8448] = 1672; // 'state 132' -> CHARACTER -> reduce -> 'action 1672'
actionsTable[8449] = 1673; // 'state 132' -> NUMBER -> reduce -> 'action 1673'
actionsTable[8450] = 1674; // 'state 132' -> CONTROL_CHARACTER -> reduce -> 'action 1674'
actionsTable[8451] = 1675; // 'state 132' -> BACKSLASH -> reduce -> 'action 1675'
actionsTable[8452] = 1676; // 'state 132' -> X -> reduce -> 'action 1676'
actionsTable[8453] = 1677; // 'state 132' -> CARET -> reduce -> 'action 1677'
actionsTable[8454] = 1678; // 'state 132' -> DASH -> reduce -> 'action 1678'
actionsTable[8456] = 1679; // 'state 132' -> UNION -> reduce -> 'action 1679'
actionsTable[8457] = 1680; // 'state 132' -> PAREN_OPEN -> reduce -> 'action 1680'
actionsTable[8458] = 1681; // 'state 132' -> PAREN_CLOSE -> reduce -> 'action 1681'
actionsTable[8459] = 1682; // 'state 132' -> QUANTIFIER -> reduce -> 'action 1682'
actionsTable[8460] = 1683; // 'state 132' -> BRACKET_OPEN -> reduce -> 'action 1683'
actionsTable[8462] = 1684; // 'state 132' -> @par-gen.EOF -> reduce -> 'action 1684'
actionsTable[8512] = 1685; // 'state 133' -> CHARACTER -> reduce -> 'action 1685'
actionsTable[8513] = 1686; // 'state 133' -> NUMBER -> reduce -> 'action 1686'
actionsTable[8514] = 1687; // 'state 133' -> CONTROL_CHARACTER -> reduce -> 'action 1687'
actionsTable[8515] = 1688; // 'state 133' -> BACKSLASH -> reduce -> 'action 1688'
actionsTable[8516] = 1689; // 'state 133' -> X -> reduce -> 'action 1689'
actionsTable[8517] = 1690; // 'state 133' -> CARET -> reduce -> 'action 1690'
actionsTable[8518] = 1691; // 'state 133' -> DASH -> reduce -> 'action 1691'
actionsTable[8520] = 1692; // 'state 133' -> UNION -> reduce -> 'action 1692'
actionsTable[8521] = 1693; // 'state 133' -> PAREN_OPEN -> reduce -> 'action 1693'
actionsTable[8522] = 1694; // 'state 133' -> PAREN_CLOSE -> reduce -> 'action 1694'
actionsTable[8523] = 1695; // 'state 133' -> QUANTIFIER -> reduce -> 'action 1695'
actionsTable[8524] = 1696; // 'state 133' -> BRACKET_OPEN -> reduce -> 'action 1696'
actionsTable[8526] = 1697; // 'state 133' -> @par-gen.EOF -> reduce -> 'action 1697'
actionsTable[8384] = 1698; // 'state 131' -> CHARACTER -> reduce -> 'action 1698'
actionsTable[8385] = 1699; // 'state 131' -> NUMBER -> reduce -> 'action 1699'
actionsTable[8386] = 1700; // 'state 131' -> CONTROL_CHARACTER -> reduce -> 'action 1700'
actionsTable[8387] = 1701; // 'state 131' -> BACKSLASH -> reduce -> 'action 1701'
actionsTable[8388] = 1702; // 'state 131' -> X -> reduce -> 'action 1702'
actionsTable[8389] = 1703; // 'state 131' -> CARET -> reduce -> 'action 1703'
actionsTable[8390] = 1704; // 'state 131' -> DASH -> reduce -> 'action 1704'
actionsTable[8392] = 1705; // 'state 131' -> UNION -> reduce -> 'action 1705'
actionsTable[8393] = 1706; // 'state 131' -> PAREN_OPEN -> reduce -> 'action 1706'
actionsTable[8394] = 1707; // 'state 131' -> PAREN_CLOSE -> reduce -> 'action 1707'
actionsTable[8395] = 1708; // 'state 131' -> QUANTIFIER -> reduce -> 'action 1708'
actionsTable[8396] = 1709; // 'state 131' -> BRACKET_OPEN -> reduce -> 'action 1709'
actionsTable[8398] = 1710; // 'state 131' -> @par-gen.EOF -> reduce -> 'action 1710'
actionsTable[8065] = 1711; // 'state 126' -> NUMBER -> shift -> 'action 1711'
actionsTable[8648] = 1712; // 'state 135' -> UNION -> shift -> 'action 1712'
actionsTable[8650] = 1713; // 'state 135' -> PAREN_CLOSE -> shift -> 'action 1713'
actionsTable[8704] = 1714; // 'state 136' -> CHARACTER -> shift -> 'action 1714'
actionsTable[8705] = 1715; // 'state 136' -> NUMBER -> shift -> 'action 1715'
actionsTable[8706] = 1716; // 'state 136' -> CONTROL_CHARACTER -> shift -> 'action 1716'
actionsTable[8707] = 1717; // 'state 136' -> BACKSLASH -> shift -> 'action 1717'
actionsTable[8708] = 1718; // 'state 136' -> X -> shift -> 'action 1718'
actionsTable[8709] = 1719; // 'state 136' -> CARET -> shift -> 'action 1719'
actionsTable[8710] = 1720; // 'state 136' -> DASH -> shift -> 'action 1720'
actionsTable[8712] = 1721; // 'state 136' -> UNION -> shift -> 'action 1721'
actionsTable[8713] = 1722; // 'state 136' -> PAREN_OPEN -> shift -> 'action 1722'
actionsTable[8714] = 1723; // 'state 136' -> PAREN_CLOSE -> shift -> 'action 1723'
actionsTable[8716] = 1724; // 'state 136' -> BRACKET_OPEN -> shift -> 'action 1724'
actionsTable[8725] = 1725; // 'state 136' -> Atom -> shift -> 'action 1725'
actionsTable[8726] = 1726; // 'state 136' -> Group -> shift -> 'action 1726'
actionsTable[8727] = 1727; // 'state 136' -> CharacterClass -> shift -> 'action 1727'
actionsTable[8731] = 1728; // 'state 136' -> Character -> shift -> 'action 1728'
actionsTable[8732] = 1729; // 'state 136' -> CharacterOrNumberOrX -> shift -> 'action 1729'
actionsTable[8768] = 1730; // 'state 137' -> CHARACTER -> shift -> 'action 1730'
actionsTable[8769] = 1731; // 'state 137' -> NUMBER -> shift -> 'action 1731'
actionsTable[8770] = 1732; // 'state 137' -> CONTROL_CHARACTER -> shift -> 'action 1732'
actionsTable[8771] = 1733; // 'state 137' -> BACKSLASH -> shift -> 'action 1733'
actionsTable[8772] = 1734; // 'state 137' -> X -> shift -> 'action 1734'
actionsTable[8773] = 1735; // 'state 137' -> CARET -> shift -> 'action 1735'
actionsTable[8774] = 1736; // 'state 137' -> DASH -> shift -> 'action 1736'
actionsTable[8776] = 1737; // 'state 137' -> UNION -> shift -> 'action 1737'
actionsTable[8777] = 1738; // 'state 137' -> PAREN_OPEN -> shift -> 'action 1738'
actionsTable[8778] = 1739; // 'state 137' -> PAREN_CLOSE -> shift -> 'action 1739'
actionsTable[8780] = 1740; // 'state 137' -> BRACKET_OPEN -> shift -> 'action 1740'
actionsTable[8789] = 1741; // 'state 137' -> Atom -> shift -> 'action 1741'
actionsTable[8790] = 1742; // 'state 137' -> Group -> shift -> 'action 1742'
actionsTable[8791] = 1743; // 'state 137' -> CharacterClass -> shift -> 'action 1743'
actionsTable[8795] = 1744; // 'state 137' -> Character -> shift -> 'action 1744'
actionsTable[8796] = 1745; // 'state 137' -> CharacterOrNumberOrX -> shift -> 'action 1745'
actionsTable[9344] = 1746; // 'state 146' -> CHARACTER -> shift -> 'action 1746'
actionsTable[9345] = 1747; // 'state 146' -> NUMBER -> shift -> 'action 1747'
actionsTable[9346] = 1748; // 'state 146' -> CONTROL_CHARACTER -> shift -> 'action 1748'
actionsTable[9347] = 1749; // 'state 146' -> BACKSLASH -> shift -> 'action 1749'
actionsTable[9348] = 1750; // 'state 146' -> X -> shift -> 'action 1750'
actionsTable[9351] = 1751; // 'state 146' -> DOT -> shift -> 'action 1751'
actionsTable[9352] = 1752; // 'state 146' -> UNION -> shift -> 'action 1752'
actionsTable[9353] = 1753; // 'state 146' -> PAREN_OPEN -> shift -> 'action 1753'
actionsTable[9354] = 1754; // 'state 146' -> PAREN_CLOSE -> shift -> 'action 1754'
actionsTable[9355] = 1755; // 'state 146' -> QUANTIFIER -> shift -> 'action 1755'
actionsTable[9357] = 1756; // 'state 146' -> BRACKET_CLOSE -> shift -> 'action 1756'
actionsTable[9369] = 1757; // 'state 146' -> CharacterClassCharacter -> shift -> 'action 1757'
actionsTable[9370] = 1758; // 'state 146' -> CharacterClassRange -> shift -> 'action 1758'
actionsTable[9372] = 1759; // 'state 146' -> CharacterOrNumberOrX -> shift -> 'action 1759'
actionsTable[9408] = 1760; // 'state 147' -> CHARACTER -> reduce -> 'action 1760'
actionsTable[9409] = 1761; // 'state 147' -> NUMBER -> reduce -> 'action 1761'
actionsTable[9410] = 1762; // 'state 147' -> CONTROL_CHARACTER -> reduce -> 'action 1762'
actionsTable[9411] = 1763; // 'state 147' -> BACKSLASH -> reduce -> 'action 1763'
actionsTable[9412] = 1764; // 'state 147' -> X -> reduce -> 'action 1764'
actionsTable[9415] = 1765; // 'state 147' -> DOT -> reduce -> 'action 1765'
actionsTable[9416] = 1766; // 'state 147' -> UNION -> reduce -> 'action 1766'
actionsTable[9417] = 1767; // 'state 147' -> PAREN_OPEN -> reduce -> 'action 1767'
actionsTable[9418] = 1768; // 'state 147' -> PAREN_CLOSE -> reduce -> 'action 1768'
actionsTable[9419] = 1769; // 'state 147' -> QUANTIFIER -> reduce -> 'action 1769'
actionsTable[9421] = 1770; // 'state 147' -> BRACKET_CLOSE -> reduce -> 'action 1770'
actionsTable[9542] = 1771; // 'state 149' -> DASH -> shift -> 'action 1771'
actionsTable[9536] = 1772; // 'state 149' -> CHARACTER -> reduce -> 'action 1772'
actionsTable[9537] = 1773; // 'state 149' -> NUMBER -> reduce -> 'action 1773'
actionsTable[9538] = 1774; // 'state 149' -> CONTROL_CHARACTER -> reduce -> 'action 1774'
actionsTable[9539] = 1775; // 'state 149' -> BACKSLASH -> reduce -> 'action 1775'
actionsTable[9540] = 1776; // 'state 149' -> X -> reduce -> 'action 1776'
actionsTable[9543] = 1777; // 'state 149' -> DOT -> reduce -> 'action 1777'
actionsTable[9544] = 1778; // 'state 149' -> UNION -> reduce -> 'action 1778'
actionsTable[9545] = 1779; // 'state 149' -> PAREN_OPEN -> reduce -> 'action 1779'
actionsTable[9546] = 1780; // 'state 149' -> PAREN_CLOSE -> reduce -> 'action 1780'
actionsTable[9547] = 1781; // 'state 149' -> QUANTIFIER -> reduce -> 'action 1781'
actionsTable[9549] = 1782; // 'state 149' -> BRACKET_CLOSE -> reduce -> 'action 1782'
actionsTable[8838] = 1783; // 'state 138' -> DASH -> shift -> 'action 1783'
actionsTable[8832] = 1784; // 'state 138' -> CHARACTER -> reduce -> 'action 1784'
actionsTable[8833] = 1785; // 'state 138' -> NUMBER -> reduce -> 'action 1785'
actionsTable[8834] = 1786; // 'state 138' -> CONTROL_CHARACTER -> reduce -> 'action 1786'
actionsTable[8835] = 1787; // 'state 138' -> BACKSLASH -> reduce -> 'action 1787'
actionsTable[8836] = 1788; // 'state 138' -> X -> reduce -> 'action 1788'
actionsTable[8839] = 1789; // 'state 138' -> DOT -> reduce -> 'action 1789'
actionsTable[8840] = 1790; // 'state 138' -> UNION -> reduce -> 'action 1790'
actionsTable[8841] = 1791; // 'state 138' -> PAREN_OPEN -> reduce -> 'action 1791'
actionsTable[8842] = 1792; // 'state 138' -> PAREN_CLOSE -> reduce -> 'action 1792'
actionsTable[8843] = 1793; // 'state 138' -> QUANTIFIER -> reduce -> 'action 1793'
actionsTable[8845] = 1794; // 'state 138' -> BRACKET_CLOSE -> reduce -> 'action 1794'
actionsTable[8898] = 1795; // 'state 139' -> CONTROL_CHARACTER -> shift -> 'action 1795'
actionsTable[8899] = 1796; // 'state 139' -> BACKSLASH -> shift -> 'action 1796'
actionsTable[8901] = 1797; // 'state 139' -> CARET -> shift -> 'action 1797'
actionsTable[8902] = 1798; // 'state 139' -> DASH -> shift -> 'action 1798'
actionsTable[8908] = 1799; // 'state 139' -> BRACKET_OPEN -> shift -> 'action 1799'
actionsTable[8909] = 1800; // 'state 139' -> BRACKET_CLOSE -> shift -> 'action 1800'
actionsTable[9280] = 1801; // 'state 145' -> CHARACTER -> reduce -> 'action 1801'
actionsTable[9281] = 1802; // 'state 145' -> NUMBER -> reduce -> 'action 1802'
actionsTable[9282] = 1803; // 'state 145' -> CONTROL_CHARACTER -> reduce -> 'action 1803'
actionsTable[9283] = 1804; // 'state 145' -> BACKSLASH -> reduce -> 'action 1804'
actionsTable[9284] = 1805; // 'state 145' -> X -> reduce -> 'action 1805'
actionsTable[9287] = 1806; // 'state 145' -> DOT -> reduce -> 'action 1806'
actionsTable[9288] = 1807; // 'state 145' -> UNION -> reduce -> 'action 1807'
actionsTable[9289] = 1808; // 'state 145' -> PAREN_OPEN -> reduce -> 'action 1808'
actionsTable[9290] = 1809; // 'state 145' -> PAREN_CLOSE -> reduce -> 'action 1809'
actionsTable[9291] = 1810; // 'state 145' -> QUANTIFIER -> reduce -> 'action 1810'
actionsTable[9293] = 1811; // 'state 145' -> BRACKET_CLOSE -> reduce -> 'action 1811'
actionsTable[9152] = 1812; // 'state 143' -> CHARACTER -> reduce -> 'action 1812'
actionsTable[9153] = 1813; // 'state 143' -> NUMBER -> reduce -> 'action 1813'
actionsTable[9154] = 1814; // 'state 143' -> CONTROL_CHARACTER -> reduce -> 'action 1814'
actionsTable[9155] = 1815; // 'state 143' -> BACKSLASH -> reduce -> 'action 1815'
actionsTable[9156] = 1816; // 'state 143' -> X -> reduce -> 'action 1816'
actionsTable[9159] = 1817; // 'state 143' -> DOT -> reduce -> 'action 1817'
actionsTable[9160] = 1818; // 'state 143' -> UNION -> reduce -> 'action 1818'
actionsTable[9161] = 1819; // 'state 143' -> PAREN_OPEN -> reduce -> 'action 1819'
actionsTable[9162] = 1820; // 'state 143' -> PAREN_CLOSE -> reduce -> 'action 1820'
actionsTable[9163] = 1821; // 'state 143' -> QUANTIFIER -> reduce -> 'action 1821'
actionsTable[9165] = 1822; // 'state 143' -> BRACKET_CLOSE -> reduce -> 'action 1822'
actionsTable[9216] = 1823; // 'state 144' -> CHARACTER -> reduce -> 'action 1823'
actionsTable[9217] = 1824; // 'state 144' -> NUMBER -> reduce -> 'action 1824'
actionsTable[9218] = 1825; // 'state 144' -> CONTROL_CHARACTER -> reduce -> 'action 1825'
actionsTable[9219] = 1826; // 'state 144' -> BACKSLASH -> reduce -> 'action 1826'
actionsTable[9220] = 1827; // 'state 144' -> X -> reduce -> 'action 1827'
actionsTable[9223] = 1828; // 'state 144' -> DOT -> reduce -> 'action 1828'
actionsTable[9224] = 1829; // 'state 144' -> UNION -> reduce -> 'action 1829'
actionsTable[9225] = 1830; // 'state 144' -> PAREN_OPEN -> reduce -> 'action 1830'
actionsTable[9226] = 1831; // 'state 144' -> PAREN_CLOSE -> reduce -> 'action 1831'
actionsTable[9227] = 1832; // 'state 144' -> QUANTIFIER -> reduce -> 'action 1832'
actionsTable[9229] = 1833; // 'state 144' -> BRACKET_CLOSE -> reduce -> 'action 1833'
actionsTable[9088] = 1834; // 'state 142' -> CHARACTER -> reduce -> 'action 1834'
actionsTable[9089] = 1835; // 'state 142' -> NUMBER -> reduce -> 'action 1835'
actionsTable[9090] = 1836; // 'state 142' -> CONTROL_CHARACTER -> reduce -> 'action 1836'
actionsTable[9091] = 1837; // 'state 142' -> BACKSLASH -> reduce -> 'action 1837'
actionsTable[9092] = 1838; // 'state 142' -> X -> reduce -> 'action 1838'
actionsTable[9095] = 1839; // 'state 142' -> DOT -> reduce -> 'action 1839'
actionsTable[9096] = 1840; // 'state 142' -> UNION -> reduce -> 'action 1840'
actionsTable[9097] = 1841; // 'state 142' -> PAREN_OPEN -> reduce -> 'action 1841'
actionsTable[9098] = 1842; // 'state 142' -> PAREN_CLOSE -> reduce -> 'action 1842'
actionsTable[9099] = 1843; // 'state 142' -> QUANTIFIER -> reduce -> 'action 1843'
actionsTable[9101] = 1844; // 'state 142' -> BRACKET_CLOSE -> reduce -> 'action 1844'
actionsTable[9024] = 1845; // 'state 141' -> CHARACTER -> reduce -> 'action 1845'
actionsTable[9025] = 1846; // 'state 141' -> NUMBER -> reduce -> 'action 1846'
actionsTable[9026] = 1847; // 'state 141' -> CONTROL_CHARACTER -> reduce -> 'action 1847'
actionsTable[9027] = 1848; // 'state 141' -> BACKSLASH -> reduce -> 'action 1848'
actionsTable[9028] = 1849; // 'state 141' -> X -> reduce -> 'action 1849'
actionsTable[9031] = 1850; // 'state 141' -> DOT -> reduce -> 'action 1850'
actionsTable[9032] = 1851; // 'state 141' -> UNION -> reduce -> 'action 1851'
actionsTable[9033] = 1852; // 'state 141' -> PAREN_OPEN -> reduce -> 'action 1852'
actionsTable[9034] = 1853; // 'state 141' -> PAREN_CLOSE -> reduce -> 'action 1853'
actionsTable[9035] = 1854; // 'state 141' -> QUANTIFIER -> reduce -> 'action 1854'
actionsTable[9037] = 1855; // 'state 141' -> BRACKET_CLOSE -> reduce -> 'action 1855'
actionsTable[9472] = 1856; // 'state 148' -> CHARACTER -> reduce -> 'action 1856'
actionsTable[9473] = 1857; // 'state 148' -> NUMBER -> reduce -> 'action 1857'
actionsTable[9474] = 1858; // 'state 148' -> CONTROL_CHARACTER -> reduce -> 'action 1858'
actionsTable[9475] = 1859; // 'state 148' -> BACKSLASH -> reduce -> 'action 1859'
actionsTable[9476] = 1860; // 'state 148' -> X -> reduce -> 'action 1860'
actionsTable[9479] = 1861; // 'state 148' -> DOT -> reduce -> 'action 1861'
actionsTable[9480] = 1862; // 'state 148' -> UNION -> reduce -> 'action 1862'
actionsTable[9481] = 1863; // 'state 148' -> PAREN_OPEN -> reduce -> 'action 1863'
actionsTable[9482] = 1864; // 'state 148' -> PAREN_CLOSE -> reduce -> 'action 1864'
actionsTable[9483] = 1865; // 'state 148' -> QUANTIFIER -> reduce -> 'action 1865'
actionsTable[9485] = 1866; // 'state 148' -> BRACKET_CLOSE -> reduce -> 'action 1866'
actionsTable[8960] = 1867; // 'state 140' -> CHARACTER -> shift -> 'action 1867'
actionsTable[8961] = 1868; // 'state 140' -> NUMBER -> shift -> 'action 1868'
actionsTable[8962] = 1869; // 'state 140' -> CONTROL_CHARACTER -> shift -> 'action 1869'
actionsTable[8963] = 1870; // 'state 140' -> BACKSLASH -> shift -> 'action 1870'
actionsTable[8964] = 1871; // 'state 140' -> X -> shift -> 'action 1871'
actionsTable[8967] = 1872; // 'state 140' -> DOT -> shift -> 'action 1872'
actionsTable[8968] = 1873; // 'state 140' -> UNION -> shift -> 'action 1873'
actionsTable[8969] = 1874; // 'state 140' -> PAREN_OPEN -> shift -> 'action 1874'
actionsTable[8970] = 1875; // 'state 140' -> PAREN_CLOSE -> shift -> 'action 1875'
actionsTable[8971] = 1876; // 'state 140' -> QUANTIFIER -> shift -> 'action 1876'
actionsTable[8984] = 1877; // 'state 140' -> CharacterClassCharacters -> shift -> 'action 1877'
actionsTable[8985] = 1878; // 'state 140' -> CharacterClassCharacter -> shift -> 'action 1878'
actionsTable[8986] = 1879; // 'state 140' -> CharacterClassRange -> shift -> 'action 1879'
actionsTable[8988] = 1880; // 'state 140' -> CharacterOrNumberOrX -> shift -> 'action 1880'
actionsTable[9601] = 1881; // 'state 150' -> NUMBER -> shift -> 'action 1881'
actionsTable[9664] = 1882; // 'state 151' -> CHARACTER -> reduce -> 'action 1882'
actionsTable[9665] = 1883; // 'state 151' -> NUMBER -> reduce -> 'action 1883'
actionsTable[9666] = 1884; // 'state 151' -> CONTROL_CHARACTER -> reduce -> 'action 1884'
actionsTable[9667] = 1885; // 'state 151' -> BACKSLASH -> reduce -> 'action 1885'
actionsTable[9668] = 1886; // 'state 151' -> X -> reduce -> 'action 1886'
actionsTable[9669] = 1887; // 'state 151' -> CARET -> reduce -> 'action 1887'
actionsTable[9670] = 1888; // 'state 151' -> DASH -> reduce -> 'action 1888'
actionsTable[9672] = 1889; // 'state 151' -> UNION -> reduce -> 'action 1889'
actionsTable[9673] = 1890; // 'state 151' -> PAREN_OPEN -> reduce -> 'action 1890'
actionsTable[9674] = 1891; // 'state 151' -> PAREN_CLOSE -> reduce -> 'action 1891'
actionsTable[9675] = 1892; // 'state 151' -> QUANTIFIER -> reduce -> 'action 1892'
actionsTable[9676] = 1893; // 'state 151' -> BRACKET_OPEN -> reduce -> 'action 1893'
actionsTable[9678] = 1894; // 'state 151' -> @par-gen.EOF -> reduce -> 'action 1894'
actionsTable[9728] = 1895; // 'state 152' -> CHARACTER -> reduce -> 'action 1895'
actionsTable[9729] = 1896; // 'state 152' -> NUMBER -> reduce -> 'action 1896'
actionsTable[9730] = 1897; // 'state 152' -> CONTROL_CHARACTER -> reduce -> 'action 1897'
actionsTable[9731] = 1898; // 'state 152' -> BACKSLASH -> reduce -> 'action 1898'
actionsTable[9732] = 1899; // 'state 152' -> X -> reduce -> 'action 1899'
actionsTable[9733] = 1900; // 'state 152' -> CARET -> reduce -> 'action 1900'
actionsTable[9734] = 1901; // 'state 152' -> DASH -> reduce -> 'action 1901'
actionsTable[9736] = 1902; // 'state 152' -> UNION -> reduce -> 'action 1902'
actionsTable[9737] = 1903; // 'state 152' -> PAREN_OPEN -> reduce -> 'action 1903'
actionsTable[9738] = 1904; // 'state 152' -> PAREN_CLOSE -> reduce -> 'action 1904'
actionsTable[9739] = 1905; // 'state 152' -> QUANTIFIER -> reduce -> 'action 1905'
actionsTable[9740] = 1906; // 'state 152' -> BRACKET_OPEN -> reduce -> 'action 1906'
actionsTable[9742] = 1907; // 'state 152' -> @par-gen.EOF -> reduce -> 'action 1907'
actionsTable[9792] = 1908; // 'state 153' -> CHARACTER -> reduce -> 'action 1908'
actionsTable[9793] = 1909; // 'state 153' -> NUMBER -> reduce -> 'action 1909'
actionsTable[9794] = 1910; // 'state 153' -> CONTROL_CHARACTER -> reduce -> 'action 1910'
actionsTable[9795] = 1911; // 'state 153' -> BACKSLASH -> reduce -> 'action 1911'
actionsTable[9796] = 1912; // 'state 153' -> X -> reduce -> 'action 1912'
actionsTable[9797] = 1913; // 'state 153' -> CARET -> reduce -> 'action 1913'
actionsTable[9798] = 1914; // 'state 153' -> DASH -> reduce -> 'action 1914'
actionsTable[9800] = 1915; // 'state 153' -> UNION -> reduce -> 'action 1915'
actionsTable[9801] = 1916; // 'state 153' -> PAREN_OPEN -> reduce -> 'action 1916'
actionsTable[9802] = 1917; // 'state 153' -> PAREN_CLOSE -> reduce -> 'action 1917'
actionsTable[9803] = 1918; // 'state 153' -> QUANTIFIER -> reduce -> 'action 1918'
actionsTable[9804] = 1919; // 'state 153' -> BRACKET_OPEN -> reduce -> 'action 1919'
actionsTable[9806] = 1920; // 'state 153' -> @par-gen.EOF -> reduce -> 'action 1920'
actionsTable[10368] = 1921; // 'state 162' -> CHARACTER -> shift -> 'action 1921'
actionsTable[10369] = 1922; // 'state 162' -> NUMBER -> shift -> 'action 1922'
actionsTable[10370] = 1923; // 'state 162' -> CONTROL_CHARACTER -> shift -> 'action 1923'
actionsTable[10371] = 1924; // 'state 162' -> BACKSLASH -> shift -> 'action 1924'
actionsTable[10372] = 1925; // 'state 162' -> X -> shift -> 'action 1925'
actionsTable[10375] = 1926; // 'state 162' -> DOT -> shift -> 'action 1926'
actionsTable[10376] = 1927; // 'state 162' -> UNION -> shift -> 'action 1927'
actionsTable[10377] = 1928; // 'state 162' -> PAREN_OPEN -> shift -> 'action 1928'
actionsTable[10378] = 1929; // 'state 162' -> PAREN_CLOSE -> shift -> 'action 1929'
actionsTable[10379] = 1930; // 'state 162' -> QUANTIFIER -> shift -> 'action 1930'
actionsTable[10381] = 1931; // 'state 162' -> BRACKET_CLOSE -> shift -> 'action 1931'
actionsTable[10393] = 1932; // 'state 162' -> CharacterClassCharacter -> shift -> 'action 1932'
actionsTable[10394] = 1933; // 'state 162' -> CharacterClassRange -> shift -> 'action 1933'
actionsTable[10396] = 1934; // 'state 162' -> CharacterOrNumberOrX -> shift -> 'action 1934'
actionsTable[10432] = 1935; // 'state 163' -> CHARACTER -> reduce -> 'action 1935'
actionsTable[10433] = 1936; // 'state 163' -> NUMBER -> reduce -> 'action 1936'
actionsTable[10434] = 1937; // 'state 163' -> CONTROL_CHARACTER -> reduce -> 'action 1937'
actionsTable[10435] = 1938; // 'state 163' -> BACKSLASH -> reduce -> 'action 1938'
actionsTable[10436] = 1939; // 'state 163' -> X -> reduce -> 'action 1939'
actionsTable[10439] = 1940; // 'state 163' -> DOT -> reduce -> 'action 1940'
actionsTable[10440] = 1941; // 'state 163' -> UNION -> reduce -> 'action 1941'
actionsTable[10441] = 1942; // 'state 163' -> PAREN_OPEN -> reduce -> 'action 1942'
actionsTable[10442] = 1943; // 'state 163' -> PAREN_CLOSE -> reduce -> 'action 1943'
actionsTable[10443] = 1944; // 'state 163' -> QUANTIFIER -> reduce -> 'action 1944'
actionsTable[10445] = 1945; // 'state 163' -> BRACKET_CLOSE -> reduce -> 'action 1945'
actionsTable[10566] = 1946; // 'state 165' -> DASH -> shift -> 'action 1946'
actionsTable[10560] = 1947; // 'state 165' -> CHARACTER -> reduce -> 'action 1947'
actionsTable[10561] = 1948; // 'state 165' -> NUMBER -> reduce -> 'action 1948'
actionsTable[10562] = 1949; // 'state 165' -> CONTROL_CHARACTER -> reduce -> 'action 1949'
actionsTable[10563] = 1950; // 'state 165' -> BACKSLASH -> reduce -> 'action 1950'
actionsTable[10564] = 1951; // 'state 165' -> X -> reduce -> 'action 1951'
actionsTable[10567] = 1952; // 'state 165' -> DOT -> reduce -> 'action 1952'
actionsTable[10568] = 1953; // 'state 165' -> UNION -> reduce -> 'action 1953'
actionsTable[10569] = 1954; // 'state 165' -> PAREN_OPEN -> reduce -> 'action 1954'
actionsTable[10570] = 1955; // 'state 165' -> PAREN_CLOSE -> reduce -> 'action 1955'
actionsTable[10571] = 1956; // 'state 165' -> QUANTIFIER -> reduce -> 'action 1956'
actionsTable[10573] = 1957; // 'state 165' -> BRACKET_CLOSE -> reduce -> 'action 1957'
actionsTable[9862] = 1958; // 'state 154' -> DASH -> shift -> 'action 1958'
actionsTable[9856] = 1959; // 'state 154' -> CHARACTER -> reduce -> 'action 1959'
actionsTable[9857] = 1960; // 'state 154' -> NUMBER -> reduce -> 'action 1960'
actionsTable[9858] = 1961; // 'state 154' -> CONTROL_CHARACTER -> reduce -> 'action 1961'
actionsTable[9859] = 1962; // 'state 154' -> BACKSLASH -> reduce -> 'action 1962'
actionsTable[9860] = 1963; // 'state 154' -> X -> reduce -> 'action 1963'
actionsTable[9863] = 1964; // 'state 154' -> DOT -> reduce -> 'action 1964'
actionsTable[9864] = 1965; // 'state 154' -> UNION -> reduce -> 'action 1965'
actionsTable[9865] = 1966; // 'state 154' -> PAREN_OPEN -> reduce -> 'action 1966'
actionsTable[9866] = 1967; // 'state 154' -> PAREN_CLOSE -> reduce -> 'action 1967'
actionsTable[9867] = 1968; // 'state 154' -> QUANTIFIER -> reduce -> 'action 1968'
actionsTable[9869] = 1969; // 'state 154' -> BRACKET_CLOSE -> reduce -> 'action 1969'
actionsTable[9922] = 1970; // 'state 155' -> CONTROL_CHARACTER -> shift -> 'action 1970'
actionsTable[9923] = 1971; // 'state 155' -> BACKSLASH -> shift -> 'action 1971'
actionsTable[9925] = 1972; // 'state 155' -> CARET -> shift -> 'action 1972'
actionsTable[9926] = 1973; // 'state 155' -> DASH -> shift -> 'action 1973'
actionsTable[9932] = 1974; // 'state 155' -> BRACKET_OPEN -> shift -> 'action 1974'
actionsTable[9933] = 1975; // 'state 155' -> BRACKET_CLOSE -> shift -> 'action 1975'
actionsTable[10304] = 1976; // 'state 161' -> CHARACTER -> reduce -> 'action 1976'
actionsTable[10305] = 1977; // 'state 161' -> NUMBER -> reduce -> 'action 1977'
actionsTable[10306] = 1978; // 'state 161' -> CONTROL_CHARACTER -> reduce -> 'action 1978'
actionsTable[10307] = 1979; // 'state 161' -> BACKSLASH -> reduce -> 'action 1979'
actionsTable[10308] = 1980; // 'state 161' -> X -> reduce -> 'action 1980'
actionsTable[10311] = 1981; // 'state 161' -> DOT -> reduce -> 'action 1981'
actionsTable[10312] = 1982; // 'state 161' -> UNION -> reduce -> 'action 1982'
actionsTable[10313] = 1983; // 'state 161' -> PAREN_OPEN -> reduce -> 'action 1983'
actionsTable[10314] = 1984; // 'state 161' -> PAREN_CLOSE -> reduce -> 'action 1984'
actionsTable[10315] = 1985; // 'state 161' -> QUANTIFIER -> reduce -> 'action 1985'
actionsTable[10317] = 1986; // 'state 161' -> BRACKET_CLOSE -> reduce -> 'action 1986'
actionsTable[10176] = 1987; // 'state 159' -> CHARACTER -> reduce -> 'action 1987'
actionsTable[10177] = 1988; // 'state 159' -> NUMBER -> reduce -> 'action 1988'
actionsTable[10178] = 1989; // 'state 159' -> CONTROL_CHARACTER -> reduce -> 'action 1989'
actionsTable[10179] = 1990; // 'state 159' -> BACKSLASH -> reduce -> 'action 1990'
actionsTable[10180] = 1991; // 'state 159' -> X -> reduce -> 'action 1991'
actionsTable[10183] = 1992; // 'state 159' -> DOT -> reduce -> 'action 1992'
actionsTable[10184] = 1993; // 'state 159' -> UNION -> reduce -> 'action 1993'
actionsTable[10185] = 1994; // 'state 159' -> PAREN_OPEN -> reduce -> 'action 1994'
actionsTable[10186] = 1995; // 'state 159' -> PAREN_CLOSE -> reduce -> 'action 1995'
actionsTable[10187] = 1996; // 'state 159' -> QUANTIFIER -> reduce -> 'action 1996'
actionsTable[10189] = 1997; // 'state 159' -> BRACKET_CLOSE -> reduce -> 'action 1997'
actionsTable[10240] = 1998; // 'state 160' -> CHARACTER -> reduce -> 'action 1998'
actionsTable[10241] = 1999; // 'state 160' -> NUMBER -> reduce -> 'action 1999'
actionsTable[10242] = 2000; // 'state 160' -> CONTROL_CHARACTER -> reduce -> 'action 2000'
actionsTable[10243] = 2001; // 'state 160' -> BACKSLASH -> reduce -> 'action 2001'
actionsTable[10244] = 2002; // 'state 160' -> X -> reduce -> 'action 2002'
actionsTable[10247] = 2003; // 'state 160' -> DOT -> reduce -> 'action 2003'
actionsTable[10248] = 2004; // 'state 160' -> UNION -> reduce -> 'action 2004'
actionsTable[10249] = 2005; // 'state 160' -> PAREN_OPEN -> reduce -> 'action 2005'
actionsTable[10250] = 2006; // 'state 160' -> PAREN_CLOSE -> reduce -> 'action 2006'
actionsTable[10251] = 2007; // 'state 160' -> QUANTIFIER -> reduce -> 'action 2007'
actionsTable[10253] = 2008; // 'state 160' -> BRACKET_CLOSE -> reduce -> 'action 2008'
actionsTable[10112] = 2009; // 'state 158' -> CHARACTER -> reduce -> 'action 2009'
actionsTable[10113] = 2010; // 'state 158' -> NUMBER -> reduce -> 'action 2010'
actionsTable[10114] = 2011; // 'state 158' -> CONTROL_CHARACTER -> reduce -> 'action 2011'
actionsTable[10115] = 2012; // 'state 158' -> BACKSLASH -> reduce -> 'action 2012'
actionsTable[10116] = 2013; // 'state 158' -> X -> reduce -> 'action 2013'
actionsTable[10119] = 2014; // 'state 158' -> DOT -> reduce -> 'action 2014'
actionsTable[10120] = 2015; // 'state 158' -> UNION -> reduce -> 'action 2015'
actionsTable[10121] = 2016; // 'state 158' -> PAREN_OPEN -> reduce -> 'action 2016'
actionsTable[10122] = 2017; // 'state 158' -> PAREN_CLOSE -> reduce -> 'action 2017'
actionsTable[10123] = 2018; // 'state 158' -> QUANTIFIER -> reduce -> 'action 2018'
actionsTable[10125] = 2019; // 'state 158' -> BRACKET_CLOSE -> reduce -> 'action 2019'
actionsTable[10048] = 2020; // 'state 157' -> CHARACTER -> reduce -> 'action 2020'
actionsTable[10049] = 2021; // 'state 157' -> NUMBER -> reduce -> 'action 2021'
actionsTable[10050] = 2022; // 'state 157' -> CONTROL_CHARACTER -> reduce -> 'action 2022'
actionsTable[10051] = 2023; // 'state 157' -> BACKSLASH -> reduce -> 'action 2023'
actionsTable[10052] = 2024; // 'state 157' -> X -> reduce -> 'action 2024'
actionsTable[10055] = 2025; // 'state 157' -> DOT -> reduce -> 'action 2025'
actionsTable[10056] = 2026; // 'state 157' -> UNION -> reduce -> 'action 2026'
actionsTable[10057] = 2027; // 'state 157' -> PAREN_OPEN -> reduce -> 'action 2027'
actionsTable[10058] = 2028; // 'state 157' -> PAREN_CLOSE -> reduce -> 'action 2028'
actionsTable[10059] = 2029; // 'state 157' -> QUANTIFIER -> reduce -> 'action 2029'
actionsTable[10061] = 2030; // 'state 157' -> BRACKET_CLOSE -> reduce -> 'action 2030'
actionsTable[10496] = 2031; // 'state 164' -> CHARACTER -> reduce -> 'action 2031'
actionsTable[10497] = 2032; // 'state 164' -> NUMBER -> reduce -> 'action 2032'
actionsTable[10498] = 2033; // 'state 164' -> CONTROL_CHARACTER -> reduce -> 'action 2033'
actionsTable[10499] = 2034; // 'state 164' -> BACKSLASH -> reduce -> 'action 2034'
actionsTable[10500] = 2035; // 'state 164' -> X -> reduce -> 'action 2035'
actionsTable[10503] = 2036; // 'state 164' -> DOT -> reduce -> 'action 2036'
actionsTable[10504] = 2037; // 'state 164' -> UNION -> reduce -> 'action 2037'
actionsTable[10505] = 2038; // 'state 164' -> PAREN_OPEN -> reduce -> 'action 2038'
actionsTable[10506] = 2039; // 'state 164' -> PAREN_CLOSE -> reduce -> 'action 2039'
actionsTable[10507] = 2040; // 'state 164' -> QUANTIFIER -> reduce -> 'action 2040'
actionsTable[10509] = 2041; // 'state 164' -> BRACKET_CLOSE -> reduce -> 'action 2041'
actionsTable[9984] = 2042; // 'state 156' -> CHARACTER -> shift -> 'action 2042'
actionsTable[9985] = 2043; // 'state 156' -> NUMBER -> shift -> 'action 2043'
actionsTable[9986] = 2044; // 'state 156' -> CONTROL_CHARACTER -> shift -> 'action 2044'
actionsTable[9987] = 2045; // 'state 156' -> BACKSLASH -> shift -> 'action 2045'
actionsTable[9988] = 2046; // 'state 156' -> X -> shift -> 'action 2046'
actionsTable[9991] = 2047; // 'state 156' -> DOT -> shift -> 'action 2047'
actionsTable[9992] = 2048; // 'state 156' -> UNION -> shift -> 'action 2048'
actionsTable[9993] = 2049; // 'state 156' -> PAREN_OPEN -> shift -> 'action 2049'
actionsTable[9994] = 2050; // 'state 156' -> PAREN_CLOSE -> shift -> 'action 2050'
actionsTable[9995] = 2051; // 'state 156' -> QUANTIFIER -> shift -> 'action 2051'
actionsTable[10008] = 2052; // 'state 156' -> CharacterClassCharacters -> shift -> 'action 2052'
actionsTable[10009] = 2053; // 'state 156' -> CharacterClassCharacter -> shift -> 'action 2053'
actionsTable[10010] = 2054; // 'state 156' -> CharacterClassRange -> shift -> 'action 2054'
actionsTable[10012] = 2055; // 'state 156' -> CharacterOrNumberOrX -> shift -> 'action 2055'
actionsTable[11072] = 2056; // 'state 173' -> CHARACTER -> reduce -> 'action 2056'
actionsTable[11073] = 2057; // 'state 173' -> NUMBER -> reduce -> 'action 2057'
actionsTable[11074] = 2058; // 'state 173' -> CONTROL_CHARACTER -> reduce -> 'action 2058'
actionsTable[11075] = 2059; // 'state 173' -> BACKSLASH -> reduce -> 'action 2059'
actionsTable[11076] = 2060; // 'state 173' -> X -> reduce -> 'action 2060'
actionsTable[11077] = 2061; // 'state 173' -> CARET -> reduce -> 'action 2061'
actionsTable[11078] = 2062; // 'state 173' -> DASH -> reduce -> 'action 2062'
actionsTable[11080] = 2063; // 'state 173' -> UNION -> reduce -> 'action 2063'
actionsTable[11081] = 2064; // 'state 173' -> PAREN_OPEN -> reduce -> 'action 2064'
actionsTable[11082] = 2065; // 'state 173' -> PAREN_CLOSE -> reduce -> 'action 2065'
actionsTable[11083] = 2066; // 'state 173' -> QUANTIFIER -> reduce -> 'action 2066'
actionsTable[11084] = 2067; // 'state 173' -> BRACKET_OPEN -> reduce -> 'action 2067'
actionsTable[11086] = 2068; // 'state 173' -> @par-gen.EOF -> reduce -> 'action 2068'
actionsTable[11136] = 2069; // 'state 174' -> CHARACTER -> reduce -> 'action 2069'
actionsTable[11137] = 2070; // 'state 174' -> NUMBER -> reduce -> 'action 2070'
actionsTable[11138] = 2071; // 'state 174' -> CONTROL_CHARACTER -> reduce -> 'action 2071'
actionsTable[11139] = 2072; // 'state 174' -> BACKSLASH -> reduce -> 'action 2072'
actionsTable[11140] = 2073; // 'state 174' -> X -> reduce -> 'action 2073'
actionsTable[11143] = 2074; // 'state 174' -> DOT -> reduce -> 'action 2074'
actionsTable[11144] = 2075; // 'state 174' -> UNION -> reduce -> 'action 2075'
actionsTable[11145] = 2076; // 'state 174' -> PAREN_OPEN -> reduce -> 'action 2076'
actionsTable[11146] = 2077; // 'state 174' -> PAREN_CLOSE -> reduce -> 'action 2077'
actionsTable[11147] = 2078; // 'state 174' -> QUANTIFIER -> reduce -> 'action 2078'
actionsTable[11149] = 2079; // 'state 174' -> BRACKET_CLOSE -> reduce -> 'action 2079'
actionsTable[11270] = 2080; // 'state 176' -> DASH -> shift -> 'action 2080'
actionsTable[11264] = 2081; // 'state 176' -> CHARACTER -> reduce -> 'action 2081'
actionsTable[11265] = 2082; // 'state 176' -> NUMBER -> reduce -> 'action 2082'
actionsTable[11266] = 2083; // 'state 176' -> CONTROL_CHARACTER -> reduce -> 'action 2083'
actionsTable[11267] = 2084; // 'state 176' -> BACKSLASH -> reduce -> 'action 2084'
actionsTable[11268] = 2085; // 'state 176' -> X -> reduce -> 'action 2085'
actionsTable[11271] = 2086; // 'state 176' -> DOT -> reduce -> 'action 2086'
actionsTable[11272] = 2087; // 'state 176' -> UNION -> reduce -> 'action 2087'
actionsTable[11273] = 2088; // 'state 176' -> PAREN_OPEN -> reduce -> 'action 2088'
actionsTable[11274] = 2089; // 'state 176' -> PAREN_CLOSE -> reduce -> 'action 2089'
actionsTable[11275] = 2090; // 'state 176' -> QUANTIFIER -> reduce -> 'action 2090'
actionsTable[11277] = 2091; // 'state 176' -> BRACKET_CLOSE -> reduce -> 'action 2091'
actionsTable[10630] = 2092; // 'state 166' -> DASH -> shift -> 'action 2092'
actionsTable[10624] = 2093; // 'state 166' -> CHARACTER -> reduce -> 'action 2093'
actionsTable[10625] = 2094; // 'state 166' -> NUMBER -> reduce -> 'action 2094'
actionsTable[10626] = 2095; // 'state 166' -> CONTROL_CHARACTER -> reduce -> 'action 2095'
actionsTable[10627] = 2096; // 'state 166' -> BACKSLASH -> reduce -> 'action 2096'
actionsTable[10628] = 2097; // 'state 166' -> X -> reduce -> 'action 2097'
actionsTable[10631] = 2098; // 'state 166' -> DOT -> reduce -> 'action 2098'
actionsTable[10632] = 2099; // 'state 166' -> UNION -> reduce -> 'action 2099'
actionsTable[10633] = 2100; // 'state 166' -> PAREN_OPEN -> reduce -> 'action 2100'
actionsTable[10634] = 2101; // 'state 166' -> PAREN_CLOSE -> reduce -> 'action 2101'
actionsTable[10635] = 2102; // 'state 166' -> QUANTIFIER -> reduce -> 'action 2102'
actionsTable[10637] = 2103; // 'state 166' -> BRACKET_CLOSE -> reduce -> 'action 2103'
actionsTable[10690] = 2104; // 'state 167' -> CONTROL_CHARACTER -> shift -> 'action 2104'
actionsTable[10691] = 2105; // 'state 167' -> BACKSLASH -> shift -> 'action 2105'
actionsTable[10693] = 2106; // 'state 167' -> CARET -> shift -> 'action 2106'
actionsTable[10694] = 2107; // 'state 167' -> DASH -> shift -> 'action 2107'
actionsTable[10700] = 2108; // 'state 167' -> BRACKET_OPEN -> shift -> 'action 2108'
actionsTable[10701] = 2109; // 'state 167' -> BRACKET_CLOSE -> shift -> 'action 2109'
actionsTable[11008] = 2110; // 'state 172' -> CHARACTER -> reduce -> 'action 2110'
actionsTable[11009] = 2111; // 'state 172' -> NUMBER -> reduce -> 'action 2111'
actionsTable[11010] = 2112; // 'state 172' -> CONTROL_CHARACTER -> reduce -> 'action 2112'
actionsTable[11011] = 2113; // 'state 172' -> BACKSLASH -> reduce -> 'action 2113'
actionsTable[11012] = 2114; // 'state 172' -> X -> reduce -> 'action 2114'
actionsTable[11015] = 2115; // 'state 172' -> DOT -> reduce -> 'action 2115'
actionsTable[11016] = 2116; // 'state 172' -> UNION -> reduce -> 'action 2116'
actionsTable[11017] = 2117; // 'state 172' -> PAREN_OPEN -> reduce -> 'action 2117'
actionsTable[11018] = 2118; // 'state 172' -> PAREN_CLOSE -> reduce -> 'action 2118'
actionsTable[11019] = 2119; // 'state 172' -> QUANTIFIER -> reduce -> 'action 2119'
actionsTable[11021] = 2120; // 'state 172' -> BRACKET_CLOSE -> reduce -> 'action 2120'
actionsTable[10880] = 2121; // 'state 170' -> CHARACTER -> reduce -> 'action 2121'
actionsTable[10881] = 2122; // 'state 170' -> NUMBER -> reduce -> 'action 2122'
actionsTable[10882] = 2123; // 'state 170' -> CONTROL_CHARACTER -> reduce -> 'action 2123'
actionsTable[10883] = 2124; // 'state 170' -> BACKSLASH -> reduce -> 'action 2124'
actionsTable[10884] = 2125; // 'state 170' -> X -> reduce -> 'action 2125'
actionsTable[10887] = 2126; // 'state 170' -> DOT -> reduce -> 'action 2126'
actionsTable[10888] = 2127; // 'state 170' -> UNION -> reduce -> 'action 2127'
actionsTable[10889] = 2128; // 'state 170' -> PAREN_OPEN -> reduce -> 'action 2128'
actionsTable[10890] = 2129; // 'state 170' -> PAREN_CLOSE -> reduce -> 'action 2129'
actionsTable[10891] = 2130; // 'state 170' -> QUANTIFIER -> reduce -> 'action 2130'
actionsTable[10893] = 2131; // 'state 170' -> BRACKET_CLOSE -> reduce -> 'action 2131'
actionsTable[10944] = 2132; // 'state 171' -> CHARACTER -> reduce -> 'action 2132'
actionsTable[10945] = 2133; // 'state 171' -> NUMBER -> reduce -> 'action 2133'
actionsTable[10946] = 2134; // 'state 171' -> CONTROL_CHARACTER -> reduce -> 'action 2134'
actionsTable[10947] = 2135; // 'state 171' -> BACKSLASH -> reduce -> 'action 2135'
actionsTable[10948] = 2136; // 'state 171' -> X -> reduce -> 'action 2136'
actionsTable[10951] = 2137; // 'state 171' -> DOT -> reduce -> 'action 2137'
actionsTable[10952] = 2138; // 'state 171' -> UNION -> reduce -> 'action 2138'
actionsTable[10953] = 2139; // 'state 171' -> PAREN_OPEN -> reduce -> 'action 2139'
actionsTable[10954] = 2140; // 'state 171' -> PAREN_CLOSE -> reduce -> 'action 2140'
actionsTable[10955] = 2141; // 'state 171' -> QUANTIFIER -> reduce -> 'action 2141'
actionsTable[10957] = 2142; // 'state 171' -> BRACKET_CLOSE -> reduce -> 'action 2142'
actionsTable[10816] = 2143; // 'state 169' -> CHARACTER -> reduce -> 'action 2143'
actionsTable[10817] = 2144; // 'state 169' -> NUMBER -> reduce -> 'action 2144'
actionsTable[10818] = 2145; // 'state 169' -> CONTROL_CHARACTER -> reduce -> 'action 2145'
actionsTable[10819] = 2146; // 'state 169' -> BACKSLASH -> reduce -> 'action 2146'
actionsTable[10820] = 2147; // 'state 169' -> X -> reduce -> 'action 2147'
actionsTable[10823] = 2148; // 'state 169' -> DOT -> reduce -> 'action 2148'
actionsTable[10824] = 2149; // 'state 169' -> UNION -> reduce -> 'action 2149'
actionsTable[10825] = 2150; // 'state 169' -> PAREN_OPEN -> reduce -> 'action 2150'
actionsTable[10826] = 2151; // 'state 169' -> PAREN_CLOSE -> reduce -> 'action 2151'
actionsTable[10827] = 2152; // 'state 169' -> QUANTIFIER -> reduce -> 'action 2152'
actionsTable[10829] = 2153; // 'state 169' -> BRACKET_CLOSE -> reduce -> 'action 2153'
actionsTable[10752] = 2154; // 'state 168' -> CHARACTER -> reduce -> 'action 2154'
actionsTable[10753] = 2155; // 'state 168' -> NUMBER -> reduce -> 'action 2155'
actionsTable[10754] = 2156; // 'state 168' -> CONTROL_CHARACTER -> reduce -> 'action 2156'
actionsTable[10755] = 2157; // 'state 168' -> BACKSLASH -> reduce -> 'action 2157'
actionsTable[10756] = 2158; // 'state 168' -> X -> reduce -> 'action 2158'
actionsTable[10759] = 2159; // 'state 168' -> DOT -> reduce -> 'action 2159'
actionsTable[10760] = 2160; // 'state 168' -> UNION -> reduce -> 'action 2160'
actionsTable[10761] = 2161; // 'state 168' -> PAREN_OPEN -> reduce -> 'action 2161'
actionsTable[10762] = 2162; // 'state 168' -> PAREN_CLOSE -> reduce -> 'action 2162'
actionsTable[10763] = 2163; // 'state 168' -> QUANTIFIER -> reduce -> 'action 2163'
actionsTable[10765] = 2164; // 'state 168' -> BRACKET_CLOSE -> reduce -> 'action 2164'
actionsTable[11200] = 2165; // 'state 175' -> CHARACTER -> reduce -> 'action 2165'
actionsTable[11201] = 2166; // 'state 175' -> NUMBER -> reduce -> 'action 2166'
actionsTable[11202] = 2167; // 'state 175' -> CONTROL_CHARACTER -> reduce -> 'action 2167'
actionsTable[11203] = 2168; // 'state 175' -> BACKSLASH -> reduce -> 'action 2168'
actionsTable[11204] = 2169; // 'state 175' -> X -> reduce -> 'action 2169'
actionsTable[11207] = 2170; // 'state 175' -> DOT -> reduce -> 'action 2170'
actionsTable[11208] = 2171; // 'state 175' -> UNION -> reduce -> 'action 2171'
actionsTable[11209] = 2172; // 'state 175' -> PAREN_OPEN -> reduce -> 'action 2172'
actionsTable[11210] = 2173; // 'state 175' -> PAREN_CLOSE -> reduce -> 'action 2173'
actionsTable[11211] = 2174; // 'state 175' -> QUANTIFIER -> reduce -> 'action 2174'
actionsTable[11213] = 2175; // 'state 175' -> BRACKET_CLOSE -> reduce -> 'action 2175'
actionsTable[11328] = 2176; // 'state 177' -> CHARACTER -> shift -> 'action 2176'
actionsTable[11329] = 2177; // 'state 177' -> NUMBER -> shift -> 'action 2177'
actionsTable[11330] = 2178; // 'state 177' -> CONTROL_CHARACTER -> shift -> 'action 2178'
actionsTable[11332] = 2179; // 'state 177' -> X -> shift -> 'action 2179'
actionsTable[11356] = 2180; // 'state 177' -> CharacterOrNumberOrX -> shift -> 'action 2180'
actionsTable[11392] = 2181; // 'state 178' -> CHARACTER -> shift -> 'action 2181'
actionsTable[11393] = 2182; // 'state 178' -> NUMBER -> shift -> 'action 2182'
actionsTable[11394] = 2183; // 'state 178' -> CONTROL_CHARACTER -> shift -> 'action 2183'
actionsTable[11396] = 2184; // 'state 178' -> X -> shift -> 'action 2184'
actionsTable[11420] = 2185; // 'state 178' -> CharacterOrNumberOrX -> shift -> 'action 2185'
actionsTable[11648] = 2186; // 'state 182' -> CHARACTER -> reduce -> 'action 2186'
actionsTable[11649] = 2187; // 'state 182' -> NUMBER -> reduce -> 'action 2187'
actionsTable[11650] = 2188; // 'state 182' -> CONTROL_CHARACTER -> reduce -> 'action 2188'
actionsTable[11651] = 2189; // 'state 182' -> BACKSLASH -> reduce -> 'action 2189'
actionsTable[11652] = 2190; // 'state 182' -> X -> reduce -> 'action 2190'
actionsTable[11655] = 2191; // 'state 182' -> DOT -> reduce -> 'action 2191'
actionsTable[11656] = 2192; // 'state 182' -> UNION -> reduce -> 'action 2192'
actionsTable[11657] = 2193; // 'state 182' -> PAREN_OPEN -> reduce -> 'action 2193'
actionsTable[11658] = 2194; // 'state 182' -> PAREN_CLOSE -> reduce -> 'action 2194'
actionsTable[11659] = 2195; // 'state 182' -> QUANTIFIER -> reduce -> 'action 2195'
actionsTable[11661] = 2196; // 'state 182' -> BRACKET_CLOSE -> reduce -> 'action 2196'
actionsTable[11584] = 2197; // 'state 181' -> CHARACTER -> reduce -> 'action 2197'
actionsTable[11585] = 2198; // 'state 181' -> NUMBER -> reduce -> 'action 2198'
actionsTable[11586] = 2199; // 'state 181' -> CONTROL_CHARACTER -> reduce -> 'action 2199'
actionsTable[11587] = 2200; // 'state 181' -> BACKSLASH -> reduce -> 'action 2200'
actionsTable[11588] = 2201; // 'state 181' -> X -> reduce -> 'action 2201'
actionsTable[11591] = 2202; // 'state 181' -> DOT -> reduce -> 'action 2202'
actionsTable[11592] = 2203; // 'state 181' -> UNION -> reduce -> 'action 2203'
actionsTable[11593] = 2204; // 'state 181' -> PAREN_OPEN -> reduce -> 'action 2204'
actionsTable[11594] = 2205; // 'state 181' -> PAREN_CLOSE -> reduce -> 'action 2205'
actionsTable[11595] = 2206; // 'state 181' -> QUANTIFIER -> reduce -> 'action 2206'
actionsTable[11597] = 2207; // 'state 181' -> BRACKET_CLOSE -> reduce -> 'action 2207'
actionsTable[11520] = 2208; // 'state 180' -> CHARACTER -> reduce -> 'action 2208'
actionsTable[11521] = 2209; // 'state 180' -> NUMBER -> reduce -> 'action 2209'
actionsTable[11522] = 2210; // 'state 180' -> CONTROL_CHARACTER -> reduce -> 'action 2210'
actionsTable[11523] = 2211; // 'state 180' -> BACKSLASH -> reduce -> 'action 2211'
actionsTable[11524] = 2212; // 'state 180' -> X -> reduce -> 'action 2212'
actionsTable[11527] = 2213; // 'state 180' -> DOT -> reduce -> 'action 2213'
actionsTable[11528] = 2214; // 'state 180' -> UNION -> reduce -> 'action 2214'
actionsTable[11529] = 2215; // 'state 180' -> PAREN_OPEN -> reduce -> 'action 2215'
actionsTable[11530] = 2216; // 'state 180' -> PAREN_CLOSE -> reduce -> 'action 2216'
actionsTable[11531] = 2217; // 'state 180' -> QUANTIFIER -> reduce -> 'action 2217'
actionsTable[11533] = 2218; // 'state 180' -> BRACKET_CLOSE -> reduce -> 'action 2218'
actionsTable[11456] = 2219; // 'state 179' -> CHARACTER -> reduce -> 'action 2219'
actionsTable[11457] = 2220; // 'state 179' -> NUMBER -> reduce -> 'action 2220'
actionsTable[11458] = 2221; // 'state 179' -> CONTROL_CHARACTER -> reduce -> 'action 2221'
actionsTable[11459] = 2222; // 'state 179' -> BACKSLASH -> reduce -> 'action 2222'
actionsTable[11460] = 2223; // 'state 179' -> X -> reduce -> 'action 2223'
actionsTable[11463] = 2224; // 'state 179' -> DOT -> reduce -> 'action 2224'
actionsTable[11464] = 2225; // 'state 179' -> UNION -> reduce -> 'action 2225'
actionsTable[11465] = 2226; // 'state 179' -> PAREN_OPEN -> reduce -> 'action 2226'
actionsTable[11466] = 2227; // 'state 179' -> PAREN_CLOSE -> reduce -> 'action 2227'
actionsTable[11467] = 2228; // 'state 179' -> QUANTIFIER -> reduce -> 'action 2228'
actionsTable[11469] = 2229; // 'state 179' -> BRACKET_CLOSE -> reduce -> 'action 2229'
actionsTable[11712] = 2230; // 'state 183' -> CHARACTER -> reduce -> 'action 2230'
actionsTable[11713] = 2231; // 'state 183' -> NUMBER -> reduce -> 'action 2231'
actionsTable[11714] = 2232; // 'state 183' -> CONTROL_CHARACTER -> reduce -> 'action 2232'
actionsTable[11715] = 2233; // 'state 183' -> BACKSLASH -> reduce -> 'action 2233'
actionsTable[11716] = 2234; // 'state 183' -> X -> reduce -> 'action 2234'
actionsTable[11719] = 2235; // 'state 183' -> DOT -> reduce -> 'action 2235'
actionsTable[11720] = 2236; // 'state 183' -> UNION -> reduce -> 'action 2236'
actionsTable[11721] = 2237; // 'state 183' -> PAREN_OPEN -> reduce -> 'action 2237'
actionsTable[11722] = 2238; // 'state 183' -> PAREN_CLOSE -> reduce -> 'action 2238'
actionsTable[11723] = 2239; // 'state 183' -> QUANTIFIER -> reduce -> 'action 2239'
actionsTable[11725] = 2240; // 'state 183' -> BRACKET_CLOSE -> reduce -> 'action 2240'
actionsTable[11776] = 2241; // 'state 184' -> CHARACTER -> reduce -> 'action 2241'
actionsTable[11777] = 2242; // 'state 184' -> NUMBER -> reduce -> 'action 2242'
actionsTable[11778] = 2243; // 'state 184' -> CONTROL_CHARACTER -> reduce -> 'action 2243'
actionsTable[11779] = 2244; // 'state 184' -> BACKSLASH -> reduce -> 'action 2244'
actionsTable[11780] = 2245; // 'state 184' -> X -> reduce -> 'action 2245'
actionsTable[11783] = 2246; // 'state 184' -> DOT -> reduce -> 'action 2246'
actionsTable[11784] = 2247; // 'state 184' -> UNION -> reduce -> 'action 2247'
actionsTable[11785] = 2248; // 'state 184' -> PAREN_OPEN -> reduce -> 'action 2248'
actionsTable[11786] = 2249; // 'state 184' -> PAREN_CLOSE -> reduce -> 'action 2249'
actionsTable[11787] = 2250; // 'state 184' -> QUANTIFIER -> reduce -> 'action 2250'
actionsTable[11789] = 2251; // 'state 184' -> BRACKET_CLOSE -> reduce -> 'action 2251'
actionsTable[11840] = 2252; // 'state 185' -> CHARACTER -> shift -> 'action 2252'
actionsTable[11841] = 2253; // 'state 185' -> NUMBER -> shift -> 'action 2253'
actionsTable[11842] = 2254; // 'state 185' -> CONTROL_CHARACTER -> shift -> 'action 2254'
actionsTable[11843] = 2255; // 'state 185' -> BACKSLASH -> shift -> 'action 2255'
actionsTable[11844] = 2256; // 'state 185' -> X -> shift -> 'action 2256'
actionsTable[11847] = 2257; // 'state 185' -> DOT -> shift -> 'action 2257'
actionsTable[11848] = 2258; // 'state 185' -> UNION -> shift -> 'action 2258'
actionsTable[11849] = 2259; // 'state 185' -> PAREN_OPEN -> shift -> 'action 2259'
actionsTable[11850] = 2260; // 'state 185' -> PAREN_CLOSE -> shift -> 'action 2260'
actionsTable[11851] = 2261; // 'state 185' -> QUANTIFIER -> shift -> 'action 2261'
actionsTable[11853] = 2262; // 'state 185' -> BRACKET_CLOSE -> shift -> 'action 2262'
actionsTable[11865] = 2263; // 'state 185' -> CharacterClassCharacter -> shift -> 'action 2263'
actionsTable[11866] = 2264; // 'state 185' -> CharacterClassRange -> shift -> 'action 2264'
actionsTable[11868] = 2265; // 'state 185' -> CharacterOrNumberOrX -> shift -> 'action 2265'
actionsTable[11905] = 2266; // 'state 186' -> NUMBER -> shift -> 'action 2266'
actionsTable[11968] = 2267; // 'state 187' -> CHARACTER -> reduce -> 'action 2267'
actionsTable[11969] = 2268; // 'state 187' -> NUMBER -> reduce -> 'action 2268'
actionsTable[11970] = 2269; // 'state 187' -> CONTROL_CHARACTER -> reduce -> 'action 2269'
actionsTable[11971] = 2270; // 'state 187' -> BACKSLASH -> reduce -> 'action 2270'
actionsTable[11972] = 2271; // 'state 187' -> X -> reduce -> 'action 2271'
actionsTable[11973] = 2272; // 'state 187' -> CARET -> reduce -> 'action 2272'
actionsTable[11974] = 2273; // 'state 187' -> DASH -> reduce -> 'action 2273'
actionsTable[11976] = 2274; // 'state 187' -> UNION -> reduce -> 'action 2274'
actionsTable[11977] = 2275; // 'state 187' -> PAREN_OPEN -> reduce -> 'action 2275'
actionsTable[11978] = 2276; // 'state 187' -> PAREN_CLOSE -> reduce -> 'action 2276'
actionsTable[11979] = 2277; // 'state 187' -> QUANTIFIER -> reduce -> 'action 2277'
actionsTable[11980] = 2278; // 'state 187' -> BRACKET_OPEN -> reduce -> 'action 2278'
actionsTable[11982] = 2279; // 'state 187' -> @par-gen.EOF -> reduce -> 'action 2279'
actionsTable[12032] = 2280; // 'state 188' -> CHARACTER -> reduce -> 'action 2280'
actionsTable[12033] = 2281; // 'state 188' -> NUMBER -> reduce -> 'action 2281'
actionsTable[12034] = 2282; // 'state 188' -> CONTROL_CHARACTER -> reduce -> 'action 2282'
actionsTable[12035] = 2283; // 'state 188' -> BACKSLASH -> reduce -> 'action 2283'
actionsTable[12036] = 2284; // 'state 188' -> X -> reduce -> 'action 2284'
actionsTable[12037] = 2285; // 'state 188' -> CARET -> reduce -> 'action 2285'
actionsTable[12038] = 2286; // 'state 188' -> DASH -> reduce -> 'action 2286'
actionsTable[12040] = 2287; // 'state 188' -> UNION -> reduce -> 'action 2287'
actionsTable[12041] = 2288; // 'state 188' -> PAREN_OPEN -> reduce -> 'action 2288'
actionsTable[12042] = 2289; // 'state 188' -> PAREN_CLOSE -> reduce -> 'action 2289'
actionsTable[12043] = 2290; // 'state 188' -> QUANTIFIER -> reduce -> 'action 2290'
actionsTable[12044] = 2291; // 'state 188' -> BRACKET_OPEN -> reduce -> 'action 2291'
actionsTable[12046] = 2292; // 'state 188' -> @par-gen.EOF -> reduce -> 'action 2292'
actionsTable[12096] = 2293; // 'state 189' -> CHARACTER -> reduce -> 'action 2293'
actionsTable[12097] = 2294; // 'state 189' -> NUMBER -> reduce -> 'action 2294'
actionsTable[12098] = 2295; // 'state 189' -> CONTROL_CHARACTER -> reduce -> 'action 2295'
actionsTable[12099] = 2296; // 'state 189' -> BACKSLASH -> reduce -> 'action 2296'
actionsTable[12100] = 2297; // 'state 189' -> X -> reduce -> 'action 2297'
actionsTable[12101] = 2298; // 'state 189' -> CARET -> reduce -> 'action 2298'
actionsTable[12102] = 2299; // 'state 189' -> DASH -> reduce -> 'action 2299'
actionsTable[12104] = 2300; // 'state 189' -> UNION -> reduce -> 'action 2300'
actionsTable[12105] = 2301; // 'state 189' -> PAREN_OPEN -> reduce -> 'action 2301'
actionsTable[12106] = 2302; // 'state 189' -> PAREN_CLOSE -> reduce -> 'action 2302'
actionsTable[12107] = 2303; // 'state 189' -> QUANTIFIER -> reduce -> 'action 2303'
actionsTable[12108] = 2304; // 'state 189' -> BRACKET_OPEN -> reduce -> 'action 2304'
actionsTable[12110] = 2305; // 'state 189' -> @par-gen.EOF -> reduce -> 'action 2305'
actionsTable[12160] = 2306; // 'state 190' -> CHARACTER -> reduce -> 'action 2306'
actionsTable[12161] = 2307; // 'state 190' -> NUMBER -> reduce -> 'action 2307'
actionsTable[12162] = 2308; // 'state 190' -> CONTROL_CHARACTER -> reduce -> 'action 2308'
actionsTable[12163] = 2309; // 'state 190' -> BACKSLASH -> reduce -> 'action 2309'
actionsTable[12164] = 2310; // 'state 190' -> X -> reduce -> 'action 2310'
actionsTable[12165] = 2311; // 'state 190' -> CARET -> reduce -> 'action 2311'
actionsTable[12166] = 2312; // 'state 190' -> DASH -> reduce -> 'action 2312'
actionsTable[12168] = 2313; // 'state 190' -> UNION -> reduce -> 'action 2313'
actionsTable[12169] = 2314; // 'state 190' -> PAREN_OPEN -> reduce -> 'action 2314'
actionsTable[12170] = 2315; // 'state 190' -> PAREN_CLOSE -> reduce -> 'action 2315'
actionsTable[12171] = 2316; // 'state 190' -> QUANTIFIER -> reduce -> 'action 2316'
actionsTable[12172] = 2317; // 'state 190' -> BRACKET_OPEN -> reduce -> 'action 2317'
actionsTable[12174] = 2318; // 'state 190' -> @par-gen.EOF -> reduce -> 'action 2318'
actionsTable[12224] = 2319; // 'state 191' -> CHARACTER -> reduce -> 'action 2319'
actionsTable[12225] = 2320; // 'state 191' -> NUMBER -> reduce -> 'action 2320'
actionsTable[12226] = 2321; // 'state 191' -> CONTROL_CHARACTER -> reduce -> 'action 2321'
actionsTable[12227] = 2322; // 'state 191' -> BACKSLASH -> reduce -> 'action 2322'
actionsTable[12228] = 2323; // 'state 191' -> X -> reduce -> 'action 2323'
actionsTable[12231] = 2324; // 'state 191' -> DOT -> reduce -> 'action 2324'
actionsTable[12232] = 2325; // 'state 191' -> UNION -> reduce -> 'action 2325'
actionsTable[12233] = 2326; // 'state 191' -> PAREN_OPEN -> reduce -> 'action 2326'
actionsTable[12234] = 2327; // 'state 191' -> PAREN_CLOSE -> reduce -> 'action 2327'
actionsTable[12235] = 2328; // 'state 191' -> QUANTIFIER -> reduce -> 'action 2328'
actionsTable[12237] = 2329; // 'state 191' -> BRACKET_CLOSE -> reduce -> 'action 2329'
actionsTable[12288] = 2330; // 'state 192' -> CHARACTER -> shift -> 'action 2330'
actionsTable[12289] = 2331; // 'state 192' -> NUMBER -> shift -> 'action 2331'
actionsTable[12290] = 2332; // 'state 192' -> CONTROL_CHARACTER -> shift -> 'action 2332'
actionsTable[12292] = 2333; // 'state 192' -> X -> shift -> 'action 2333'
actionsTable[12316] = 2334; // 'state 192' -> CharacterOrNumberOrX -> shift -> 'action 2334'
actionsTable[12352] = 2335; // 'state 193' -> CHARACTER -> shift -> 'action 2335'
actionsTable[12353] = 2336; // 'state 193' -> NUMBER -> shift -> 'action 2336'
actionsTable[12354] = 2337; // 'state 193' -> CONTROL_CHARACTER -> shift -> 'action 2337'
actionsTable[12356] = 2338; // 'state 193' -> X -> shift -> 'action 2338'
actionsTable[12380] = 2339; // 'state 193' -> CharacterOrNumberOrX -> shift -> 'action 2339'
actionsTable[12608] = 2340; // 'state 197' -> CHARACTER -> reduce -> 'action 2340'
actionsTable[12609] = 2341; // 'state 197' -> NUMBER -> reduce -> 'action 2341'
actionsTable[12610] = 2342; // 'state 197' -> CONTROL_CHARACTER -> reduce -> 'action 2342'
actionsTable[12611] = 2343; // 'state 197' -> BACKSLASH -> reduce -> 'action 2343'
actionsTable[12612] = 2344; // 'state 197' -> X -> reduce -> 'action 2344'
actionsTable[12615] = 2345; // 'state 197' -> DOT -> reduce -> 'action 2345'
actionsTable[12616] = 2346; // 'state 197' -> UNION -> reduce -> 'action 2346'
actionsTable[12617] = 2347; // 'state 197' -> PAREN_OPEN -> reduce -> 'action 2347'
actionsTable[12618] = 2348; // 'state 197' -> PAREN_CLOSE -> reduce -> 'action 2348'
actionsTable[12619] = 2349; // 'state 197' -> QUANTIFIER -> reduce -> 'action 2349'
actionsTable[12621] = 2350; // 'state 197' -> BRACKET_CLOSE -> reduce -> 'action 2350'
actionsTable[12544] = 2351; // 'state 196' -> CHARACTER -> reduce -> 'action 2351'
actionsTable[12545] = 2352; // 'state 196' -> NUMBER -> reduce -> 'action 2352'
actionsTable[12546] = 2353; // 'state 196' -> CONTROL_CHARACTER -> reduce -> 'action 2353'
actionsTable[12547] = 2354; // 'state 196' -> BACKSLASH -> reduce -> 'action 2354'
actionsTable[12548] = 2355; // 'state 196' -> X -> reduce -> 'action 2355'
actionsTable[12551] = 2356; // 'state 196' -> DOT -> reduce -> 'action 2356'
actionsTable[12552] = 2357; // 'state 196' -> UNION -> reduce -> 'action 2357'
actionsTable[12553] = 2358; // 'state 196' -> PAREN_OPEN -> reduce -> 'action 2358'
actionsTable[12554] = 2359; // 'state 196' -> PAREN_CLOSE -> reduce -> 'action 2359'
actionsTable[12555] = 2360; // 'state 196' -> QUANTIFIER -> reduce -> 'action 2360'
actionsTable[12557] = 2361; // 'state 196' -> BRACKET_CLOSE -> reduce -> 'action 2361'
actionsTable[12480] = 2362; // 'state 195' -> CHARACTER -> reduce -> 'action 2362'
actionsTable[12481] = 2363; // 'state 195' -> NUMBER -> reduce -> 'action 2363'
actionsTable[12482] = 2364; // 'state 195' -> CONTROL_CHARACTER -> reduce -> 'action 2364'
actionsTable[12483] = 2365; // 'state 195' -> BACKSLASH -> reduce -> 'action 2365'
actionsTable[12484] = 2366; // 'state 195' -> X -> reduce -> 'action 2366'
actionsTable[12487] = 2367; // 'state 195' -> DOT -> reduce -> 'action 2367'
actionsTable[12488] = 2368; // 'state 195' -> UNION -> reduce -> 'action 2368'
actionsTable[12489] = 2369; // 'state 195' -> PAREN_OPEN -> reduce -> 'action 2369'
actionsTable[12490] = 2370; // 'state 195' -> PAREN_CLOSE -> reduce -> 'action 2370'
actionsTable[12491] = 2371; // 'state 195' -> QUANTIFIER -> reduce -> 'action 2371'
actionsTable[12493] = 2372; // 'state 195' -> BRACKET_CLOSE -> reduce -> 'action 2372'
actionsTable[12416] = 2373; // 'state 194' -> CHARACTER -> reduce -> 'action 2373'
actionsTable[12417] = 2374; // 'state 194' -> NUMBER -> reduce -> 'action 2374'
actionsTable[12418] = 2375; // 'state 194' -> CONTROL_CHARACTER -> reduce -> 'action 2375'
actionsTable[12419] = 2376; // 'state 194' -> BACKSLASH -> reduce -> 'action 2376'
actionsTable[12420] = 2377; // 'state 194' -> X -> reduce -> 'action 2377'
actionsTable[12423] = 2378; // 'state 194' -> DOT -> reduce -> 'action 2378'
actionsTable[12424] = 2379; // 'state 194' -> UNION -> reduce -> 'action 2379'
actionsTable[12425] = 2380; // 'state 194' -> PAREN_OPEN -> reduce -> 'action 2380'
actionsTable[12426] = 2381; // 'state 194' -> PAREN_CLOSE -> reduce -> 'action 2381'
actionsTable[12427] = 2382; // 'state 194' -> QUANTIFIER -> reduce -> 'action 2382'
actionsTable[12429] = 2383; // 'state 194' -> BRACKET_CLOSE -> reduce -> 'action 2383'
actionsTable[12672] = 2384; // 'state 198' -> CHARACTER -> reduce -> 'action 2384'
actionsTable[12673] = 2385; // 'state 198' -> NUMBER -> reduce -> 'action 2385'
actionsTable[12674] = 2386; // 'state 198' -> CONTROL_CHARACTER -> reduce -> 'action 2386'
actionsTable[12675] = 2387; // 'state 198' -> BACKSLASH -> reduce -> 'action 2387'
actionsTable[12676] = 2388; // 'state 198' -> X -> reduce -> 'action 2388'
actionsTable[12679] = 2389; // 'state 198' -> DOT -> reduce -> 'action 2389'
actionsTable[12680] = 2390; // 'state 198' -> UNION -> reduce -> 'action 2390'
actionsTable[12681] = 2391; // 'state 198' -> PAREN_OPEN -> reduce -> 'action 2391'
actionsTable[12682] = 2392; // 'state 198' -> PAREN_CLOSE -> reduce -> 'action 2392'
actionsTable[12683] = 2393; // 'state 198' -> QUANTIFIER -> reduce -> 'action 2393'
actionsTable[12685] = 2394; // 'state 198' -> BRACKET_CLOSE -> reduce -> 'action 2394'
actionsTable[12736] = 2395; // 'state 199' -> CHARACTER -> reduce -> 'action 2395'
actionsTable[12737] = 2396; // 'state 199' -> NUMBER -> reduce -> 'action 2396'
actionsTable[12738] = 2397; // 'state 199' -> CONTROL_CHARACTER -> reduce -> 'action 2397'
actionsTable[12739] = 2398; // 'state 199' -> BACKSLASH -> reduce -> 'action 2398'
actionsTable[12740] = 2399; // 'state 199' -> X -> reduce -> 'action 2399'
actionsTable[12743] = 2400; // 'state 199' -> DOT -> reduce -> 'action 2400'
actionsTable[12744] = 2401; // 'state 199' -> UNION -> reduce -> 'action 2401'
actionsTable[12745] = 2402; // 'state 199' -> PAREN_OPEN -> reduce -> 'action 2402'
actionsTable[12746] = 2403; // 'state 199' -> PAREN_CLOSE -> reduce -> 'action 2403'
actionsTable[12747] = 2404; // 'state 199' -> QUANTIFIER -> reduce -> 'action 2404'
actionsTable[12749] = 2405; // 'state 199' -> BRACKET_CLOSE -> reduce -> 'action 2405'
actionsTable[12800] = 2406; // 'state 200' -> CHARACTER -> shift -> 'action 2406'
actionsTable[12801] = 2407; // 'state 200' -> NUMBER -> shift -> 'action 2407'
actionsTable[12802] = 2408; // 'state 200' -> CONTROL_CHARACTER -> shift -> 'action 2408'
actionsTable[12803] = 2409; // 'state 200' -> BACKSLASH -> shift -> 'action 2409'
actionsTable[12804] = 2410; // 'state 200' -> X -> shift -> 'action 2410'
actionsTable[12807] = 2411; // 'state 200' -> DOT -> shift -> 'action 2411'
actionsTable[12808] = 2412; // 'state 200' -> UNION -> shift -> 'action 2412'
actionsTable[12809] = 2413; // 'state 200' -> PAREN_OPEN -> shift -> 'action 2413'
actionsTable[12810] = 2414; // 'state 200' -> PAREN_CLOSE -> shift -> 'action 2414'
actionsTable[12811] = 2415; // 'state 200' -> QUANTIFIER -> shift -> 'action 2415'
actionsTable[12813] = 2416; // 'state 200' -> BRACKET_CLOSE -> shift -> 'action 2416'
actionsTable[12825] = 2417; // 'state 200' -> CharacterClassCharacter -> shift -> 'action 2417'
actionsTable[12826] = 2418; // 'state 200' -> CharacterClassRange -> shift -> 'action 2418'
actionsTable[12828] = 2419; // 'state 200' -> CharacterOrNumberOrX -> shift -> 'action 2419'
actionsTable[12865] = 2420; // 'state 201' -> NUMBER -> shift -> 'action 2420'
actionsTable[12928] = 2421; // 'state 202' -> CHARACTER -> reduce -> 'action 2421'
actionsTable[12929] = 2422; // 'state 202' -> NUMBER -> reduce -> 'action 2422'
actionsTable[12930] = 2423; // 'state 202' -> CONTROL_CHARACTER -> reduce -> 'action 2423'
actionsTable[12931] = 2424; // 'state 202' -> BACKSLASH -> reduce -> 'action 2424'
actionsTable[12932] = 2425; // 'state 202' -> X -> reduce -> 'action 2425'
actionsTable[12933] = 2426; // 'state 202' -> CARET -> reduce -> 'action 2426'
actionsTable[12934] = 2427; // 'state 202' -> DASH -> reduce -> 'action 2427'
actionsTable[12936] = 2428; // 'state 202' -> UNION -> reduce -> 'action 2428'
actionsTable[12937] = 2429; // 'state 202' -> PAREN_OPEN -> reduce -> 'action 2429'
actionsTable[12938] = 2430; // 'state 202' -> PAREN_CLOSE -> reduce -> 'action 2430'
actionsTable[12939] = 2431; // 'state 202' -> QUANTIFIER -> reduce -> 'action 2431'
actionsTable[12940] = 2432; // 'state 202' -> BRACKET_OPEN -> reduce -> 'action 2432'
actionsTable[12942] = 2433; // 'state 202' -> @par-gen.EOF -> reduce -> 'action 2433'
actionsTable[12992] = 2434; // 'state 203' -> CHARACTER -> reduce -> 'action 2434'
actionsTable[12993] = 2435; // 'state 203' -> NUMBER -> reduce -> 'action 2435'
actionsTable[12994] = 2436; // 'state 203' -> CONTROL_CHARACTER -> reduce -> 'action 2436'
actionsTable[12995] = 2437; // 'state 203' -> BACKSLASH -> reduce -> 'action 2437'
actionsTable[12996] = 2438; // 'state 203' -> X -> reduce -> 'action 2438'
actionsTable[12997] = 2439; // 'state 203' -> CARET -> reduce -> 'action 2439'
actionsTable[12998] = 2440; // 'state 203' -> DASH -> reduce -> 'action 2440'
actionsTable[13000] = 2441; // 'state 203' -> UNION -> reduce -> 'action 2441'
actionsTable[13001] = 2442; // 'state 203' -> PAREN_OPEN -> reduce -> 'action 2442'
actionsTable[13002] = 2443; // 'state 203' -> PAREN_CLOSE -> reduce -> 'action 2443'
actionsTable[13003] = 2444; // 'state 203' -> QUANTIFIER -> reduce -> 'action 2444'
actionsTable[13004] = 2445; // 'state 203' -> BRACKET_OPEN -> reduce -> 'action 2445'
actionsTable[13006] = 2446; // 'state 203' -> @par-gen.EOF -> reduce -> 'action 2446'
actionsTable[13056] = 2447; // 'state 204' -> CHARACTER -> reduce -> 'action 2447'
actionsTable[13057] = 2448; // 'state 204' -> NUMBER -> reduce -> 'action 2448'
actionsTable[13058] = 2449; // 'state 204' -> CONTROL_CHARACTER -> reduce -> 'action 2449'
actionsTable[13059] = 2450; // 'state 204' -> BACKSLASH -> reduce -> 'action 2450'
actionsTable[13060] = 2451; // 'state 204' -> X -> reduce -> 'action 2451'
actionsTable[13061] = 2452; // 'state 204' -> CARET -> reduce -> 'action 2452'
actionsTable[13062] = 2453; // 'state 204' -> DASH -> reduce -> 'action 2453'
actionsTable[13064] = 2454; // 'state 204' -> UNION -> reduce -> 'action 2454'
actionsTable[13065] = 2455; // 'state 204' -> PAREN_OPEN -> reduce -> 'action 2455'
actionsTable[13066] = 2456; // 'state 204' -> PAREN_CLOSE -> reduce -> 'action 2456'
actionsTable[13067] = 2457; // 'state 204' -> QUANTIFIER -> reduce -> 'action 2457'
actionsTable[13068] = 2458; // 'state 204' -> BRACKET_OPEN -> reduce -> 'action 2458'
actionsTable[13070] = 2459; // 'state 204' -> @par-gen.EOF -> reduce -> 'action 2459'
actionsTable[13120] = 2460; // 'state 205' -> CHARACTER -> reduce -> 'action 2460'
actionsTable[13121] = 2461; // 'state 205' -> NUMBER -> reduce -> 'action 2461'
actionsTable[13122] = 2462; // 'state 205' -> CONTROL_CHARACTER -> reduce -> 'action 2462'
actionsTable[13123] = 2463; // 'state 205' -> BACKSLASH -> reduce -> 'action 2463'
actionsTable[13124] = 2464; // 'state 205' -> X -> reduce -> 'action 2464'
actionsTable[13125] = 2465; // 'state 205' -> CARET -> reduce -> 'action 2465'
actionsTable[13126] = 2466; // 'state 205' -> DASH -> reduce -> 'action 2466'
actionsTable[13128] = 2467; // 'state 205' -> UNION -> reduce -> 'action 2467'
actionsTable[13129] = 2468; // 'state 205' -> PAREN_OPEN -> reduce -> 'action 2468'
actionsTable[13130] = 2469; // 'state 205' -> PAREN_CLOSE -> reduce -> 'action 2469'
actionsTable[13131] = 2470; // 'state 205' -> QUANTIFIER -> reduce -> 'action 2470'
actionsTable[13132] = 2471; // 'state 205' -> BRACKET_OPEN -> reduce -> 'action 2471'
actionsTable[13134] = 2472; // 'state 205' -> @par-gen.EOF -> reduce -> 'action 2472'
actionsTable[13184] = 2473; // 'state 206' -> CHARACTER -> reduce -> 'action 2473'
actionsTable[13185] = 2474; // 'state 206' -> NUMBER -> reduce -> 'action 2474'
actionsTable[13186] = 2475; // 'state 206' -> CONTROL_CHARACTER -> reduce -> 'action 2475'
actionsTable[13187] = 2476; // 'state 206' -> BACKSLASH -> reduce -> 'action 2476'
actionsTable[13188] = 2477; // 'state 206' -> X -> reduce -> 'action 2477'
actionsTable[13191] = 2478; // 'state 206' -> DOT -> reduce -> 'action 2478'
actionsTable[13192] = 2479; // 'state 206' -> UNION -> reduce -> 'action 2479'
actionsTable[13193] = 2480; // 'state 206' -> PAREN_OPEN -> reduce -> 'action 2480'
actionsTable[13194] = 2481; // 'state 206' -> PAREN_CLOSE -> reduce -> 'action 2481'
actionsTable[13195] = 2482; // 'state 206' -> QUANTIFIER -> reduce -> 'action 2482'
actionsTable[13197] = 2483; // 'state 206' -> BRACKET_CLOSE -> reduce -> 'action 2483'
actionsTable[13248] = 2484; // 'state 207' -> CHARACTER -> shift -> 'action 2484'
actionsTable[13249] = 2485; // 'state 207' -> NUMBER -> shift -> 'action 2485'
actionsTable[13250] = 2486; // 'state 207' -> CONTROL_CHARACTER -> shift -> 'action 2486'
actionsTable[13252] = 2487; // 'state 207' -> X -> shift -> 'action 2487'
actionsTable[13276] = 2488; // 'state 207' -> CharacterOrNumberOrX -> shift -> 'action 2488'
actionsTable[13312] = 2489; // 'state 208' -> CHARACTER -> shift -> 'action 2489'
actionsTable[13313] = 2490; // 'state 208' -> NUMBER -> shift -> 'action 2490'
actionsTable[13314] = 2491; // 'state 208' -> CONTROL_CHARACTER -> shift -> 'action 2491'
actionsTable[13316] = 2492; // 'state 208' -> X -> shift -> 'action 2492'
actionsTable[13340] = 2493; // 'state 208' -> CharacterOrNumberOrX -> shift -> 'action 2493'
actionsTable[13568] = 2494; // 'state 212' -> CHARACTER -> reduce -> 'action 2494'
actionsTable[13569] = 2495; // 'state 212' -> NUMBER -> reduce -> 'action 2495'
actionsTable[13570] = 2496; // 'state 212' -> CONTROL_CHARACTER -> reduce -> 'action 2496'
actionsTable[13571] = 2497; // 'state 212' -> BACKSLASH -> reduce -> 'action 2497'
actionsTable[13572] = 2498; // 'state 212' -> X -> reduce -> 'action 2498'
actionsTable[13575] = 2499; // 'state 212' -> DOT -> reduce -> 'action 2499'
actionsTable[13576] = 2500; // 'state 212' -> UNION -> reduce -> 'action 2500'
actionsTable[13577] = 2501; // 'state 212' -> PAREN_OPEN -> reduce -> 'action 2501'
actionsTable[13578] = 2502; // 'state 212' -> PAREN_CLOSE -> reduce -> 'action 2502'
actionsTable[13579] = 2503; // 'state 212' -> QUANTIFIER -> reduce -> 'action 2503'
actionsTable[13581] = 2504; // 'state 212' -> BRACKET_CLOSE -> reduce -> 'action 2504'
actionsTable[13504] = 2505; // 'state 211' -> CHARACTER -> reduce -> 'action 2505'
actionsTable[13505] = 2506; // 'state 211' -> NUMBER -> reduce -> 'action 2506'
actionsTable[13506] = 2507; // 'state 211' -> CONTROL_CHARACTER -> reduce -> 'action 2507'
actionsTable[13507] = 2508; // 'state 211' -> BACKSLASH -> reduce -> 'action 2508'
actionsTable[13508] = 2509; // 'state 211' -> X -> reduce -> 'action 2509'
actionsTable[13511] = 2510; // 'state 211' -> DOT -> reduce -> 'action 2510'
actionsTable[13512] = 2511; // 'state 211' -> UNION -> reduce -> 'action 2511'
actionsTable[13513] = 2512; // 'state 211' -> PAREN_OPEN -> reduce -> 'action 2512'
actionsTable[13514] = 2513; // 'state 211' -> PAREN_CLOSE -> reduce -> 'action 2513'
actionsTable[13515] = 2514; // 'state 211' -> QUANTIFIER -> reduce -> 'action 2514'
actionsTable[13517] = 2515; // 'state 211' -> BRACKET_CLOSE -> reduce -> 'action 2515'
actionsTable[13440] = 2516; // 'state 210' -> CHARACTER -> reduce -> 'action 2516'
actionsTable[13441] = 2517; // 'state 210' -> NUMBER -> reduce -> 'action 2517'
actionsTable[13442] = 2518; // 'state 210' -> CONTROL_CHARACTER -> reduce -> 'action 2518'
actionsTable[13443] = 2519; // 'state 210' -> BACKSLASH -> reduce -> 'action 2519'
actionsTable[13444] = 2520; // 'state 210' -> X -> reduce -> 'action 2520'
actionsTable[13447] = 2521; // 'state 210' -> DOT -> reduce -> 'action 2521'
actionsTable[13448] = 2522; // 'state 210' -> UNION -> reduce -> 'action 2522'
actionsTable[13449] = 2523; // 'state 210' -> PAREN_OPEN -> reduce -> 'action 2523'
actionsTable[13450] = 2524; // 'state 210' -> PAREN_CLOSE -> reduce -> 'action 2524'
actionsTable[13451] = 2525; // 'state 210' -> QUANTIFIER -> reduce -> 'action 2525'
actionsTable[13453] = 2526; // 'state 210' -> BRACKET_CLOSE -> reduce -> 'action 2526'
actionsTable[13376] = 2527; // 'state 209' -> CHARACTER -> reduce -> 'action 2527'
actionsTable[13377] = 2528; // 'state 209' -> NUMBER -> reduce -> 'action 2528'
actionsTable[13378] = 2529; // 'state 209' -> CONTROL_CHARACTER -> reduce -> 'action 2529'
actionsTable[13379] = 2530; // 'state 209' -> BACKSLASH -> reduce -> 'action 2530'
actionsTable[13380] = 2531; // 'state 209' -> X -> reduce -> 'action 2531'
actionsTable[13383] = 2532; // 'state 209' -> DOT -> reduce -> 'action 2532'
actionsTable[13384] = 2533; // 'state 209' -> UNION -> reduce -> 'action 2533'
actionsTable[13385] = 2534; // 'state 209' -> PAREN_OPEN -> reduce -> 'action 2534'
actionsTable[13386] = 2535; // 'state 209' -> PAREN_CLOSE -> reduce -> 'action 2535'
actionsTable[13387] = 2536; // 'state 209' -> QUANTIFIER -> reduce -> 'action 2536'
actionsTable[13389] = 2537; // 'state 209' -> BRACKET_CLOSE -> reduce -> 'action 2537'
actionsTable[13632] = 2538; // 'state 213' -> CHARACTER -> reduce -> 'action 2538'
actionsTable[13633] = 2539; // 'state 213' -> NUMBER -> reduce -> 'action 2539'
actionsTable[13634] = 2540; // 'state 213' -> CONTROL_CHARACTER -> reduce -> 'action 2540'
actionsTable[13635] = 2541; // 'state 213' -> BACKSLASH -> reduce -> 'action 2541'
actionsTable[13636] = 2542; // 'state 213' -> X -> reduce -> 'action 2542'
actionsTable[13639] = 2543; // 'state 213' -> DOT -> reduce -> 'action 2543'
actionsTable[13640] = 2544; // 'state 213' -> UNION -> reduce -> 'action 2544'
actionsTable[13641] = 2545; // 'state 213' -> PAREN_OPEN -> reduce -> 'action 2545'
actionsTable[13642] = 2546; // 'state 213' -> PAREN_CLOSE -> reduce -> 'action 2546'
actionsTable[13643] = 2547; // 'state 213' -> QUANTIFIER -> reduce -> 'action 2547'
actionsTable[13645] = 2548; // 'state 213' -> BRACKET_CLOSE -> reduce -> 'action 2548'
actionsTable[13696] = 2549; // 'state 214' -> CHARACTER -> reduce -> 'action 2549'
actionsTable[13697] = 2550; // 'state 214' -> NUMBER -> reduce -> 'action 2550'
actionsTable[13698] = 2551; // 'state 214' -> CONTROL_CHARACTER -> reduce -> 'action 2551'
actionsTable[13699] = 2552; // 'state 214' -> BACKSLASH -> reduce -> 'action 2552'
actionsTable[13700] = 2553; // 'state 214' -> X -> reduce -> 'action 2553'
actionsTable[13703] = 2554; // 'state 214' -> DOT -> reduce -> 'action 2554'
actionsTable[13704] = 2555; // 'state 214' -> UNION -> reduce -> 'action 2555'
actionsTable[13705] = 2556; // 'state 214' -> PAREN_OPEN -> reduce -> 'action 2556'
actionsTable[13706] = 2557; // 'state 214' -> PAREN_CLOSE -> reduce -> 'action 2557'
actionsTable[13707] = 2558; // 'state 214' -> QUANTIFIER -> reduce -> 'action 2558'
actionsTable[13709] = 2559; // 'state 214' -> BRACKET_CLOSE -> reduce -> 'action 2559'
actionsTable[13760] = 2560; // 'state 215' -> CHARACTER -> shift -> 'action 2560'
actionsTable[13761] = 2561; // 'state 215' -> NUMBER -> shift -> 'action 2561'
actionsTable[13762] = 2562; // 'state 215' -> CONTROL_CHARACTER -> shift -> 'action 2562'
actionsTable[13763] = 2563; // 'state 215' -> BACKSLASH -> shift -> 'action 2563'
actionsTable[13764] = 2564; // 'state 215' -> X -> shift -> 'action 2564'
actionsTable[13767] = 2565; // 'state 215' -> DOT -> shift -> 'action 2565'
actionsTable[13768] = 2566; // 'state 215' -> UNION -> shift -> 'action 2566'
actionsTable[13769] = 2567; // 'state 215' -> PAREN_OPEN -> shift -> 'action 2567'
actionsTable[13770] = 2568; // 'state 215' -> PAREN_CLOSE -> shift -> 'action 2568'
actionsTable[13771] = 2569; // 'state 215' -> QUANTIFIER -> shift -> 'action 2569'
actionsTable[13773] = 2570; // 'state 215' -> BRACKET_CLOSE -> shift -> 'action 2570'
actionsTable[13785] = 2571; // 'state 215' -> CharacterClassCharacter -> shift -> 'action 2571'
actionsTable[13786] = 2572; // 'state 215' -> CharacterClassRange -> shift -> 'action 2572'
actionsTable[13788] = 2573; // 'state 215' -> CharacterOrNumberOrX -> shift -> 'action 2573'
actionsTable[13824] = 2574; // 'state 216' -> CHARACTER -> reduce -> 'action 2574'
actionsTable[13825] = 2575; // 'state 216' -> NUMBER -> reduce -> 'action 2575'
actionsTable[13826] = 2576; // 'state 216' -> CONTROL_CHARACTER -> reduce -> 'action 2576'
actionsTable[13827] = 2577; // 'state 216' -> BACKSLASH -> reduce -> 'action 2577'
actionsTable[13828] = 2578; // 'state 216' -> X -> reduce -> 'action 2578'
actionsTable[13829] = 2579; // 'state 216' -> CARET -> reduce -> 'action 2579'
actionsTable[13830] = 2580; // 'state 216' -> DASH -> reduce -> 'action 2580'
actionsTable[13832] = 2581; // 'state 216' -> UNION -> reduce -> 'action 2581'
actionsTable[13833] = 2582; // 'state 216' -> PAREN_OPEN -> reduce -> 'action 2582'
actionsTable[13834] = 2583; // 'state 216' -> PAREN_CLOSE -> reduce -> 'action 2583'
actionsTable[13835] = 2584; // 'state 216' -> QUANTIFIER -> reduce -> 'action 2584'
actionsTable[13836] = 2585; // 'state 216' -> BRACKET_OPEN -> reduce -> 'action 2585'
actionsTable[13838] = 2586; // 'state 216' -> @par-gen.EOF -> reduce -> 'action 2586'
actionsTable[13888] = 2587; // 'state 217' -> CHARACTER -> reduce -> 'action 2587'
actionsTable[13889] = 2588; // 'state 217' -> NUMBER -> reduce -> 'action 2588'
actionsTable[13890] = 2589; // 'state 217' -> CONTROL_CHARACTER -> reduce -> 'action 2589'
actionsTable[13891] = 2590; // 'state 217' -> BACKSLASH -> reduce -> 'action 2590'
actionsTable[13892] = 2591; // 'state 217' -> X -> reduce -> 'action 2591'
actionsTable[13893] = 2592; // 'state 217' -> CARET -> reduce -> 'action 2592'
actionsTable[13894] = 2593; // 'state 217' -> DASH -> reduce -> 'action 2593'
actionsTable[13896] = 2594; // 'state 217' -> UNION -> reduce -> 'action 2594'
actionsTable[13897] = 2595; // 'state 217' -> PAREN_OPEN -> reduce -> 'action 2595'
actionsTable[13898] = 2596; // 'state 217' -> PAREN_CLOSE -> reduce -> 'action 2596'
actionsTable[13899] = 2597; // 'state 217' -> QUANTIFIER -> reduce -> 'action 2597'
actionsTable[13900] = 2598; // 'state 217' -> BRACKET_OPEN -> reduce -> 'action 2598'
actionsTable[13902] = 2599; // 'state 217' -> @par-gen.EOF -> reduce -> 'action 2599'
actionsTable[13952] = 2600; // 'state 218' -> CHARACTER -> reduce -> 'action 2600'
actionsTable[13953] = 2601; // 'state 218' -> NUMBER -> reduce -> 'action 2601'
actionsTable[13954] = 2602; // 'state 218' -> CONTROL_CHARACTER -> reduce -> 'action 2602'
actionsTable[13955] = 2603; // 'state 218' -> BACKSLASH -> reduce -> 'action 2603'
actionsTable[13956] = 2604; // 'state 218' -> X -> reduce -> 'action 2604'
actionsTable[13959] = 2605; // 'state 218' -> DOT -> reduce -> 'action 2605'
actionsTable[13960] = 2606; // 'state 218' -> UNION -> reduce -> 'action 2606'
actionsTable[13961] = 2607; // 'state 218' -> PAREN_OPEN -> reduce -> 'action 2607'
actionsTable[13962] = 2608; // 'state 218' -> PAREN_CLOSE -> reduce -> 'action 2608'
actionsTable[13963] = 2609; // 'state 218' -> QUANTIFIER -> reduce -> 'action 2609'
actionsTable[13965] = 2610; // 'state 218' -> BRACKET_CLOSE -> reduce -> 'action 2610'
actionsTable[14016] = 2611; // 'state 219' -> CHARACTER -> shift -> 'action 2611'
actionsTable[14017] = 2612; // 'state 219' -> NUMBER -> shift -> 'action 2612'
actionsTable[14018] = 2613; // 'state 219' -> CONTROL_CHARACTER -> shift -> 'action 2613'
actionsTable[14020] = 2614; // 'state 219' -> X -> shift -> 'action 2614'
actionsTable[14044] = 2615; // 'state 219' -> CharacterOrNumberOrX -> shift -> 'action 2615'
actionsTable[14080] = 2616; // 'state 220' -> CHARACTER -> shift -> 'action 2616'
actionsTable[14081] = 2617; // 'state 220' -> NUMBER -> shift -> 'action 2617'
actionsTable[14082] = 2618; // 'state 220' -> CONTROL_CHARACTER -> shift -> 'action 2618'
actionsTable[14084] = 2619; // 'state 220' -> X -> shift -> 'action 2619'
actionsTable[14108] = 2620; // 'state 220' -> CharacterOrNumberOrX -> shift -> 'action 2620'
actionsTable[14336] = 2621; // 'state 224' -> CHARACTER -> reduce -> 'action 2621'
actionsTable[14337] = 2622; // 'state 224' -> NUMBER -> reduce -> 'action 2622'
actionsTable[14338] = 2623; // 'state 224' -> CONTROL_CHARACTER -> reduce -> 'action 2623'
actionsTable[14339] = 2624; // 'state 224' -> BACKSLASH -> reduce -> 'action 2624'
actionsTable[14340] = 2625; // 'state 224' -> X -> reduce -> 'action 2625'
actionsTable[14343] = 2626; // 'state 224' -> DOT -> reduce -> 'action 2626'
actionsTable[14344] = 2627; // 'state 224' -> UNION -> reduce -> 'action 2627'
actionsTable[14345] = 2628; // 'state 224' -> PAREN_OPEN -> reduce -> 'action 2628'
actionsTable[14346] = 2629; // 'state 224' -> PAREN_CLOSE -> reduce -> 'action 2629'
actionsTable[14347] = 2630; // 'state 224' -> QUANTIFIER -> reduce -> 'action 2630'
actionsTable[14349] = 2631; // 'state 224' -> BRACKET_CLOSE -> reduce -> 'action 2631'
actionsTable[14272] = 2632; // 'state 223' -> CHARACTER -> reduce -> 'action 2632'
actionsTable[14273] = 2633; // 'state 223' -> NUMBER -> reduce -> 'action 2633'
actionsTable[14274] = 2634; // 'state 223' -> CONTROL_CHARACTER -> reduce -> 'action 2634'
actionsTable[14275] = 2635; // 'state 223' -> BACKSLASH -> reduce -> 'action 2635'
actionsTable[14276] = 2636; // 'state 223' -> X -> reduce -> 'action 2636'
actionsTable[14279] = 2637; // 'state 223' -> DOT -> reduce -> 'action 2637'
actionsTable[14280] = 2638; // 'state 223' -> UNION -> reduce -> 'action 2638'
actionsTable[14281] = 2639; // 'state 223' -> PAREN_OPEN -> reduce -> 'action 2639'
actionsTable[14282] = 2640; // 'state 223' -> PAREN_CLOSE -> reduce -> 'action 2640'
actionsTable[14283] = 2641; // 'state 223' -> QUANTIFIER -> reduce -> 'action 2641'
actionsTable[14285] = 2642; // 'state 223' -> BRACKET_CLOSE -> reduce -> 'action 2642'
actionsTable[14208] = 2643; // 'state 222' -> CHARACTER -> reduce -> 'action 2643'
actionsTable[14209] = 2644; // 'state 222' -> NUMBER -> reduce -> 'action 2644'
actionsTable[14210] = 2645; // 'state 222' -> CONTROL_CHARACTER -> reduce -> 'action 2645'
actionsTable[14211] = 2646; // 'state 222' -> BACKSLASH -> reduce -> 'action 2646'
actionsTable[14212] = 2647; // 'state 222' -> X -> reduce -> 'action 2647'
actionsTable[14215] = 2648; // 'state 222' -> DOT -> reduce -> 'action 2648'
actionsTable[14216] = 2649; // 'state 222' -> UNION -> reduce -> 'action 2649'
actionsTable[14217] = 2650; // 'state 222' -> PAREN_OPEN -> reduce -> 'action 2650'
actionsTable[14218] = 2651; // 'state 222' -> PAREN_CLOSE -> reduce -> 'action 2651'
actionsTable[14219] = 2652; // 'state 222' -> QUANTIFIER -> reduce -> 'action 2652'
actionsTable[14221] = 2653; // 'state 222' -> BRACKET_CLOSE -> reduce -> 'action 2653'
actionsTable[14144] = 2654; // 'state 221' -> CHARACTER -> reduce -> 'action 2654'
actionsTable[14145] = 2655; // 'state 221' -> NUMBER -> reduce -> 'action 2655'
actionsTable[14146] = 2656; // 'state 221' -> CONTROL_CHARACTER -> reduce -> 'action 2656'
actionsTable[14147] = 2657; // 'state 221' -> BACKSLASH -> reduce -> 'action 2657'
actionsTable[14148] = 2658; // 'state 221' -> X -> reduce -> 'action 2658'
actionsTable[14151] = 2659; // 'state 221' -> DOT -> reduce -> 'action 2659'
actionsTable[14152] = 2660; // 'state 221' -> UNION -> reduce -> 'action 2660'
actionsTable[14153] = 2661; // 'state 221' -> PAREN_OPEN -> reduce -> 'action 2661'
actionsTable[14154] = 2662; // 'state 221' -> PAREN_CLOSE -> reduce -> 'action 2662'
actionsTable[14155] = 2663; // 'state 221' -> QUANTIFIER -> reduce -> 'action 2663'
actionsTable[14157] = 2664; // 'state 221' -> BRACKET_CLOSE -> reduce -> 'action 2664'
actionsTable[14400] = 2665; // 'state 225' -> CHARACTER -> reduce -> 'action 2665'
actionsTable[14401] = 2666; // 'state 225' -> NUMBER -> reduce -> 'action 2666'
actionsTable[14402] = 2667; // 'state 225' -> CONTROL_CHARACTER -> reduce -> 'action 2667'
actionsTable[14403] = 2668; // 'state 225' -> BACKSLASH -> reduce -> 'action 2668'
actionsTable[14404] = 2669; // 'state 225' -> X -> reduce -> 'action 2669'
actionsTable[14407] = 2670; // 'state 225' -> DOT -> reduce -> 'action 2670'
actionsTable[14408] = 2671; // 'state 225' -> UNION -> reduce -> 'action 2671'
actionsTable[14409] = 2672; // 'state 225' -> PAREN_OPEN -> reduce -> 'action 2672'
actionsTable[14410] = 2673; // 'state 225' -> PAREN_CLOSE -> reduce -> 'action 2673'
actionsTable[14411] = 2674; // 'state 225' -> QUANTIFIER -> reduce -> 'action 2674'
actionsTable[14413] = 2675; // 'state 225' -> BRACKET_CLOSE -> reduce -> 'action 2675'
actionsTable[14464] = 2676; // 'state 226' -> CHARACTER -> reduce -> 'action 2676'
actionsTable[14465] = 2677; // 'state 226' -> NUMBER -> reduce -> 'action 2677'
actionsTable[14466] = 2678; // 'state 226' -> CONTROL_CHARACTER -> reduce -> 'action 2678'
actionsTable[14467] = 2679; // 'state 226' -> BACKSLASH -> reduce -> 'action 2679'
actionsTable[14468] = 2680; // 'state 226' -> X -> reduce -> 'action 2680'
actionsTable[14471] = 2681; // 'state 226' -> DOT -> reduce -> 'action 2681'
actionsTable[14472] = 2682; // 'state 226' -> UNION -> reduce -> 'action 2682'
actionsTable[14473] = 2683; // 'state 226' -> PAREN_OPEN -> reduce -> 'action 2683'
actionsTable[14474] = 2684; // 'state 226' -> PAREN_CLOSE -> reduce -> 'action 2684'
actionsTable[14475] = 2685; // 'state 226' -> QUANTIFIER -> reduce -> 'action 2685'
actionsTable[14477] = 2686; // 'state 226' -> BRACKET_CLOSE -> reduce -> 'action 2686'
actionsTable[14528] = 2687; // 'state 227' -> CHARACTER -> shift -> 'action 2687'
actionsTable[14529] = 2688; // 'state 227' -> NUMBER -> shift -> 'action 2688'
actionsTable[14530] = 2689; // 'state 227' -> CONTROL_CHARACTER -> shift -> 'action 2689'
actionsTable[14531] = 2690; // 'state 227' -> BACKSLASH -> shift -> 'action 2690'
actionsTable[14532] = 2691; // 'state 227' -> X -> shift -> 'action 2691'
actionsTable[14535] = 2692; // 'state 227' -> DOT -> shift -> 'action 2692'
actionsTable[14536] = 2693; // 'state 227' -> UNION -> shift -> 'action 2693'
actionsTable[14537] = 2694; // 'state 227' -> PAREN_OPEN -> shift -> 'action 2694'
actionsTable[14538] = 2695; // 'state 227' -> PAREN_CLOSE -> shift -> 'action 2695'
actionsTable[14539] = 2696; // 'state 227' -> QUANTIFIER -> shift -> 'action 2696'
actionsTable[14541] = 2697; // 'state 227' -> BRACKET_CLOSE -> shift -> 'action 2697'
actionsTable[14553] = 2698; // 'state 227' -> CharacterClassCharacter -> shift -> 'action 2698'
actionsTable[14554] = 2699; // 'state 227' -> CharacterClassRange -> shift -> 'action 2699'
actionsTable[14556] = 2700; // 'state 227' -> CharacterOrNumberOrX -> shift -> 'action 2700'
actionsTable[14592] = 2701; // 'state 228' -> CHARACTER -> shift -> 'action 2701'
actionsTable[14593] = 2702; // 'state 228' -> NUMBER -> shift -> 'action 2702'
actionsTable[14594] = 2703; // 'state 228' -> CONTROL_CHARACTER -> shift -> 'action 2703'
actionsTable[14596] = 2704; // 'state 228' -> X -> shift -> 'action 2704'
actionsTable[14620] = 2705; // 'state 228' -> CharacterOrNumberOrX -> shift -> 'action 2705'
actionsTable[14656] = 2706; // 'state 229' -> CHARACTER -> shift -> 'action 2706'
actionsTable[14657] = 2707; // 'state 229' -> NUMBER -> shift -> 'action 2707'
actionsTable[14658] = 2708; // 'state 229' -> CONTROL_CHARACTER -> shift -> 'action 2708'
actionsTable[14660] = 2709; // 'state 229' -> X -> shift -> 'action 2709'
actionsTable[14684] = 2710; // 'state 229' -> CharacterOrNumberOrX -> shift -> 'action 2710'
actionsTable[14912] = 2711; // 'state 233' -> CHARACTER -> reduce -> 'action 2711'
actionsTable[14913] = 2712; // 'state 233' -> NUMBER -> reduce -> 'action 2712'
actionsTable[14914] = 2713; // 'state 233' -> CONTROL_CHARACTER -> reduce -> 'action 2713'
actionsTable[14915] = 2714; // 'state 233' -> BACKSLASH -> reduce -> 'action 2714'
actionsTable[14916] = 2715; // 'state 233' -> X -> reduce -> 'action 2715'
actionsTable[14919] = 2716; // 'state 233' -> DOT -> reduce -> 'action 2716'
actionsTable[14920] = 2717; // 'state 233' -> UNION -> reduce -> 'action 2717'
actionsTable[14921] = 2718; // 'state 233' -> PAREN_OPEN -> reduce -> 'action 2718'
actionsTable[14922] = 2719; // 'state 233' -> PAREN_CLOSE -> reduce -> 'action 2719'
actionsTable[14923] = 2720; // 'state 233' -> QUANTIFIER -> reduce -> 'action 2720'
actionsTable[14925] = 2721; // 'state 233' -> BRACKET_CLOSE -> reduce -> 'action 2721'
actionsTable[14848] = 2722; // 'state 232' -> CHARACTER -> reduce -> 'action 2722'
actionsTable[14849] = 2723; // 'state 232' -> NUMBER -> reduce -> 'action 2723'
actionsTable[14850] = 2724; // 'state 232' -> CONTROL_CHARACTER -> reduce -> 'action 2724'
actionsTable[14851] = 2725; // 'state 232' -> BACKSLASH -> reduce -> 'action 2725'
actionsTable[14852] = 2726; // 'state 232' -> X -> reduce -> 'action 2726'
actionsTable[14855] = 2727; // 'state 232' -> DOT -> reduce -> 'action 2727'
actionsTable[14856] = 2728; // 'state 232' -> UNION -> reduce -> 'action 2728'
actionsTable[14857] = 2729; // 'state 232' -> PAREN_OPEN -> reduce -> 'action 2729'
actionsTable[14858] = 2730; // 'state 232' -> PAREN_CLOSE -> reduce -> 'action 2730'
actionsTable[14859] = 2731; // 'state 232' -> QUANTIFIER -> reduce -> 'action 2731'
actionsTable[14861] = 2732; // 'state 232' -> BRACKET_CLOSE -> reduce -> 'action 2732'
actionsTable[14784] = 2733; // 'state 231' -> CHARACTER -> reduce -> 'action 2733'
actionsTable[14785] = 2734; // 'state 231' -> NUMBER -> reduce -> 'action 2734'
actionsTable[14786] = 2735; // 'state 231' -> CONTROL_CHARACTER -> reduce -> 'action 2735'
actionsTable[14787] = 2736; // 'state 231' -> BACKSLASH -> reduce -> 'action 2736'
actionsTable[14788] = 2737; // 'state 231' -> X -> reduce -> 'action 2737'
actionsTable[14791] = 2738; // 'state 231' -> DOT -> reduce -> 'action 2738'
actionsTable[14792] = 2739; // 'state 231' -> UNION -> reduce -> 'action 2739'
actionsTable[14793] = 2740; // 'state 231' -> PAREN_OPEN -> reduce -> 'action 2740'
actionsTable[14794] = 2741; // 'state 231' -> PAREN_CLOSE -> reduce -> 'action 2741'
actionsTable[14795] = 2742; // 'state 231' -> QUANTIFIER -> reduce -> 'action 2742'
actionsTable[14797] = 2743; // 'state 231' -> BRACKET_CLOSE -> reduce -> 'action 2743'
actionsTable[14720] = 2744; // 'state 230' -> CHARACTER -> reduce -> 'action 2744'
actionsTable[14721] = 2745; // 'state 230' -> NUMBER -> reduce -> 'action 2745'
actionsTable[14722] = 2746; // 'state 230' -> CONTROL_CHARACTER -> reduce -> 'action 2746'
actionsTable[14723] = 2747; // 'state 230' -> BACKSLASH -> reduce -> 'action 2747'
actionsTable[14724] = 2748; // 'state 230' -> X -> reduce -> 'action 2748'
actionsTable[14727] = 2749; // 'state 230' -> DOT -> reduce -> 'action 2749'
actionsTable[14728] = 2750; // 'state 230' -> UNION -> reduce -> 'action 2750'
actionsTable[14729] = 2751; // 'state 230' -> PAREN_OPEN -> reduce -> 'action 2751'
actionsTable[14730] = 2752; // 'state 230' -> PAREN_CLOSE -> reduce -> 'action 2752'
actionsTable[14731] = 2753; // 'state 230' -> QUANTIFIER -> reduce -> 'action 2753'
actionsTable[14733] = 2754; // 'state 230' -> BRACKET_CLOSE -> reduce -> 'action 2754'
actionsTable[14976] = 2755; // 'state 234' -> CHARACTER -> reduce -> 'action 2755'
actionsTable[14977] = 2756; // 'state 234' -> NUMBER -> reduce -> 'action 2756'
actionsTable[14978] = 2757; // 'state 234' -> CONTROL_CHARACTER -> reduce -> 'action 2757'
actionsTable[14979] = 2758; // 'state 234' -> BACKSLASH -> reduce -> 'action 2758'
actionsTable[14980] = 2759; // 'state 234' -> X -> reduce -> 'action 2759'
actionsTable[14983] = 2760; // 'state 234' -> DOT -> reduce -> 'action 2760'
actionsTable[14984] = 2761; // 'state 234' -> UNION -> reduce -> 'action 2761'
actionsTable[14985] = 2762; // 'state 234' -> PAREN_OPEN -> reduce -> 'action 2762'
actionsTable[14986] = 2763; // 'state 234' -> PAREN_CLOSE -> reduce -> 'action 2763'
actionsTable[14987] = 2764; // 'state 234' -> QUANTIFIER -> reduce -> 'action 2764'
actionsTable[14989] = 2765; // 'state 234' -> BRACKET_CLOSE -> reduce -> 'action 2765'
actionsTable[15040] = 2766; // 'state 235' -> CHARACTER -> reduce -> 'action 2766'
actionsTable[15041] = 2767; // 'state 235' -> NUMBER -> reduce -> 'action 2767'
actionsTable[15042] = 2768; // 'state 235' -> CONTROL_CHARACTER -> reduce -> 'action 2768'
actionsTable[15043] = 2769; // 'state 235' -> BACKSLASH -> reduce -> 'action 2769'
actionsTable[15044] = 2770; // 'state 235' -> X -> reduce -> 'action 2770'
actionsTable[15047] = 2771; // 'state 235' -> DOT -> reduce -> 'action 2771'
actionsTable[15048] = 2772; // 'state 235' -> UNION -> reduce -> 'action 2772'
actionsTable[15049] = 2773; // 'state 235' -> PAREN_OPEN -> reduce -> 'action 2773'
actionsTable[15050] = 2774; // 'state 235' -> PAREN_CLOSE -> reduce -> 'action 2774'
actionsTable[15051] = 2775; // 'state 235' -> QUANTIFIER -> reduce -> 'action 2775'
actionsTable[15053] = 2776; // 'state 235' -> BRACKET_CLOSE -> reduce -> 'action 2776'
actionsTable[15168] = 2777; // 'state 237' -> CHARACTER -> reduce -> 'action 2777'
actionsTable[15169] = 2778; // 'state 237' -> NUMBER -> reduce -> 'action 2778'
actionsTable[15170] = 2779; // 'state 237' -> CONTROL_CHARACTER -> reduce -> 'action 2779'
actionsTable[15171] = 2780; // 'state 237' -> BACKSLASH -> reduce -> 'action 2780'
actionsTable[15172] = 2781; // 'state 237' -> X -> reduce -> 'action 2781'
actionsTable[15175] = 2782; // 'state 237' -> DOT -> reduce -> 'action 2782'
actionsTable[15176] = 2783; // 'state 237' -> UNION -> reduce -> 'action 2783'
actionsTable[15177] = 2784; // 'state 237' -> PAREN_OPEN -> reduce -> 'action 2784'
actionsTable[15178] = 2785; // 'state 237' -> PAREN_CLOSE -> reduce -> 'action 2785'
actionsTable[15179] = 2786; // 'state 237' -> QUANTIFIER -> reduce -> 'action 2786'
actionsTable[15181] = 2787; // 'state 237' -> BRACKET_CLOSE -> reduce -> 'action 2787'
actionsTable[15104] = 2788; // 'state 236' -> CHARACTER -> reduce -> 'action 2788'
actionsTable[15105] = 2789; // 'state 236' -> NUMBER -> reduce -> 'action 2789'
actionsTable[15106] = 2790; // 'state 236' -> CONTROL_CHARACTER -> reduce -> 'action 2790'
actionsTable[15107] = 2791; // 'state 236' -> BACKSLASH -> reduce -> 'action 2791'
actionsTable[15108] = 2792; // 'state 236' -> X -> reduce -> 'action 2792'
actionsTable[15111] = 2793; // 'state 236' -> DOT -> reduce -> 'action 2793'
actionsTable[15112] = 2794; // 'state 236' -> UNION -> reduce -> 'action 2794'
actionsTable[15113] = 2795; // 'state 236' -> PAREN_OPEN -> reduce -> 'action 2795'
actionsTable[15114] = 2796; // 'state 236' -> PAREN_CLOSE -> reduce -> 'action 2796'
actionsTable[15115] = 2797; // 'state 236' -> QUANTIFIER -> reduce -> 'action 2797'
actionsTable[15117] = 2798; // 'state 236' -> BRACKET_CLOSE -> reduce -> 'action 2798'
actionsTable[15296] = 2799; // 'state 239' -> CHARACTER -> reduce -> 'action 2799'
actionsTable[15297] = 2800; // 'state 239' -> NUMBER -> reduce -> 'action 2800'
actionsTable[15298] = 2801; // 'state 239' -> CONTROL_CHARACTER -> reduce -> 'action 2801'
actionsTable[15299] = 2802; // 'state 239' -> BACKSLASH -> reduce -> 'action 2802'
actionsTable[15300] = 2803; // 'state 239' -> X -> reduce -> 'action 2803'
actionsTable[15303] = 2804; // 'state 239' -> DOT -> reduce -> 'action 2804'
actionsTable[15304] = 2805; // 'state 239' -> UNION -> reduce -> 'action 2805'
actionsTable[15305] = 2806; // 'state 239' -> PAREN_OPEN -> reduce -> 'action 2806'
actionsTable[15306] = 2807; // 'state 239' -> PAREN_CLOSE -> reduce -> 'action 2807'
actionsTable[15307] = 2808; // 'state 239' -> QUANTIFIER -> reduce -> 'action 2808'
actionsTable[15309] = 2809; // 'state 239' -> BRACKET_CLOSE -> reduce -> 'action 2809'
actionsTable[15232] = 2810; // 'state 238' -> CHARACTER -> reduce -> 'action 2810'
actionsTable[15233] = 2811; // 'state 238' -> NUMBER -> reduce -> 'action 2811'
actionsTable[15234] = 2812; // 'state 238' -> CONTROL_CHARACTER -> reduce -> 'action 2812'
actionsTable[15235] = 2813; // 'state 238' -> BACKSLASH -> reduce -> 'action 2813'
actionsTable[15236] = 2814; // 'state 238' -> X -> reduce -> 'action 2814'
actionsTable[15239] = 2815; // 'state 238' -> DOT -> reduce -> 'action 2815'
actionsTable[15240] = 2816; // 'state 238' -> UNION -> reduce -> 'action 2816'
actionsTable[15241] = 2817; // 'state 238' -> PAREN_OPEN -> reduce -> 'action 2817'
actionsTable[15242] = 2818; // 'state 238' -> PAREN_CLOSE -> reduce -> 'action 2818'
actionsTable[15243] = 2819; // 'state 238' -> QUANTIFIER -> reduce -> 'action 2819'
actionsTable[15245] = 2820; // 'state 238' -> BRACKET_CLOSE -> reduce -> 'action 2820'
actionsTable[15360] = 2821; // 'state 240' -> CHARACTER -> reduce -> 'action 2821'
actionsTable[15361] = 2822; // 'state 240' -> NUMBER -> reduce -> 'action 2822'
actionsTable[15362] = 2823; // 'state 240' -> CONTROL_CHARACTER -> reduce -> 'action 2823'
actionsTable[15363] = 2824; // 'state 240' -> BACKSLASH -> reduce -> 'action 2824'
actionsTable[15364] = 2825; // 'state 240' -> X -> reduce -> 'action 2825'
actionsTable[15365] = 2826; // 'state 240' -> CARET -> reduce -> 'action 2826'
actionsTable[15366] = 2827; // 'state 240' -> DASH -> reduce -> 'action 2827'
actionsTable[15368] = 2828; // 'state 240' -> UNION -> reduce -> 'action 2828'
actionsTable[15369] = 2829; // 'state 240' -> PAREN_OPEN -> reduce -> 'action 2829'
actionsTable[15370] = 2830; // 'state 240' -> PAREN_CLOSE -> reduce -> 'action 2830'
actionsTable[15371] = 2831; // 'state 240' -> QUANTIFIER -> reduce -> 'action 2831'
actionsTable[15372] = 2832; // 'state 240' -> BRACKET_OPEN -> reduce -> 'action 2832'
actionsTable[15374] = 2833; // 'state 240' -> @par-gen.EOF -> reduce -> 'action 2833'
actionsTable[15424] = 2834; // 'state 241' -> CHARACTER -> reduce -> 'action 2834'
actionsTable[15425] = 2835; // 'state 241' -> NUMBER -> reduce -> 'action 2835'
actionsTable[15426] = 2836; // 'state 241' -> CONTROL_CHARACTER -> reduce -> 'action 2836'
actionsTable[15427] = 2837; // 'state 241' -> BACKSLASH -> reduce -> 'action 2837'
actionsTable[15428] = 2838; // 'state 241' -> X -> reduce -> 'action 2838'
actionsTable[15429] = 2839; // 'state 241' -> CARET -> reduce -> 'action 2839'
actionsTable[15430] = 2840; // 'state 241' -> DASH -> reduce -> 'action 2840'
actionsTable[15432] = 2841; // 'state 241' -> UNION -> reduce -> 'action 2841'
actionsTable[15433] = 2842; // 'state 241' -> PAREN_OPEN -> reduce -> 'action 2842'
actionsTable[15434] = 2843; // 'state 241' -> PAREN_CLOSE -> reduce -> 'action 2843'
actionsTable[15435] = 2844; // 'state 241' -> QUANTIFIER -> reduce -> 'action 2844'
actionsTable[15436] = 2845; // 'state 241' -> BRACKET_OPEN -> reduce -> 'action 2845'
actionsTable[15438] = 2846; // 'state 241' -> @par-gen.EOF -> reduce -> 'action 2846'
actionsTable[15552] = 2847; // 'state 243' -> CHARACTER -> reduce -> 'action 2847'
actionsTable[15553] = 2848; // 'state 243' -> NUMBER -> reduce -> 'action 2848'
actionsTable[15554] = 2849; // 'state 243' -> CONTROL_CHARACTER -> reduce -> 'action 2849'
actionsTable[15555] = 2850; // 'state 243' -> BACKSLASH -> reduce -> 'action 2850'
actionsTable[15556] = 2851; // 'state 243' -> X -> reduce -> 'action 2851'
actionsTable[15559] = 2852; // 'state 243' -> DOT -> reduce -> 'action 2852'
actionsTable[15560] = 2853; // 'state 243' -> UNION -> reduce -> 'action 2853'
actionsTable[15561] = 2854; // 'state 243' -> PAREN_OPEN -> reduce -> 'action 2854'
actionsTable[15562] = 2855; // 'state 243' -> PAREN_CLOSE -> reduce -> 'action 2855'
actionsTable[15563] = 2856; // 'state 243' -> QUANTIFIER -> reduce -> 'action 2856'
actionsTable[15565] = 2857; // 'state 243' -> BRACKET_CLOSE -> reduce -> 'action 2857'
actionsTable[15488] = 2858; // 'state 242' -> CHARACTER -> reduce -> 'action 2858'
actionsTable[15489] = 2859; // 'state 242' -> NUMBER -> reduce -> 'action 2859'
actionsTable[15490] = 2860; // 'state 242' -> CONTROL_CHARACTER -> reduce -> 'action 2860'
actionsTable[15491] = 2861; // 'state 242' -> BACKSLASH -> reduce -> 'action 2861'
actionsTable[15492] = 2862; // 'state 242' -> X -> reduce -> 'action 2862'
actionsTable[15495] = 2863; // 'state 242' -> DOT -> reduce -> 'action 2863'
actionsTable[15496] = 2864; // 'state 242' -> UNION -> reduce -> 'action 2864'
actionsTable[15497] = 2865; // 'state 242' -> PAREN_OPEN -> reduce -> 'action 2865'
actionsTable[15498] = 2866; // 'state 242' -> PAREN_CLOSE -> reduce -> 'action 2866'
actionsTable[15499] = 2867; // 'state 242' -> QUANTIFIER -> reduce -> 'action 2867'
actionsTable[15501] = 2868; // 'state 242' -> BRACKET_CLOSE -> reduce -> 'action 2868'
actionsTable[15680] = 2869; // 'state 245' -> CHARACTER -> reduce -> 'action 2869'
actionsTable[15681] = 2870; // 'state 245' -> NUMBER -> reduce -> 'action 2870'
actionsTable[15682] = 2871; // 'state 245' -> CONTROL_CHARACTER -> reduce -> 'action 2871'
actionsTable[15683] = 2872; // 'state 245' -> BACKSLASH -> reduce -> 'action 2872'
actionsTable[15684] = 2873; // 'state 245' -> X -> reduce -> 'action 2873'
actionsTable[15687] = 2874; // 'state 245' -> DOT -> reduce -> 'action 2874'
actionsTable[15688] = 2875; // 'state 245' -> UNION -> reduce -> 'action 2875'
actionsTable[15689] = 2876; // 'state 245' -> PAREN_OPEN -> reduce -> 'action 2876'
actionsTable[15690] = 2877; // 'state 245' -> PAREN_CLOSE -> reduce -> 'action 2877'
actionsTable[15691] = 2878; // 'state 245' -> QUANTIFIER -> reduce -> 'action 2878'
actionsTable[15693] = 2879; // 'state 245' -> BRACKET_CLOSE -> reduce -> 'action 2879'
actionsTable[15616] = 2880; // 'state 244' -> CHARACTER -> reduce -> 'action 2880'
actionsTable[15617] = 2881; // 'state 244' -> NUMBER -> reduce -> 'action 2881'
actionsTable[15618] = 2882; // 'state 244' -> CONTROL_CHARACTER -> reduce -> 'action 2882'
actionsTable[15619] = 2883; // 'state 244' -> BACKSLASH -> reduce -> 'action 2883'
actionsTable[15620] = 2884; // 'state 244' -> X -> reduce -> 'action 2884'
actionsTable[15623] = 2885; // 'state 244' -> DOT -> reduce -> 'action 2885'
actionsTable[15624] = 2886; // 'state 244' -> UNION -> reduce -> 'action 2886'
actionsTable[15625] = 2887; // 'state 244' -> PAREN_OPEN -> reduce -> 'action 2887'
actionsTable[15626] = 2888; // 'state 244' -> PAREN_CLOSE -> reduce -> 'action 2888'
actionsTable[15627] = 2889; // 'state 244' -> QUANTIFIER -> reduce -> 'action 2889'
actionsTable[15629] = 2890; // 'state 244' -> BRACKET_CLOSE -> reduce -> 'action 2890'
actionsTable[15744] = 2891; // 'state 246' -> CHARACTER -> reduce -> 'action 2891'
actionsTable[15745] = 2892; // 'state 246' -> NUMBER -> reduce -> 'action 2892'
actionsTable[15746] = 2893; // 'state 246' -> CONTROL_CHARACTER -> reduce -> 'action 2893'
actionsTable[15747] = 2894; // 'state 246' -> BACKSLASH -> reduce -> 'action 2894'
actionsTable[15748] = 2895; // 'state 246' -> X -> reduce -> 'action 2895'
actionsTable[15749] = 2896; // 'state 246' -> CARET -> reduce -> 'action 2896'
actionsTable[15750] = 2897; // 'state 246' -> DASH -> reduce -> 'action 2897'
actionsTable[15752] = 2898; // 'state 246' -> UNION -> reduce -> 'action 2898'
actionsTable[15753] = 2899; // 'state 246' -> PAREN_OPEN -> reduce -> 'action 2899'
actionsTable[15754] = 2900; // 'state 246' -> PAREN_CLOSE -> reduce -> 'action 2900'
actionsTable[15755] = 2901; // 'state 246' -> QUANTIFIER -> reduce -> 'action 2901'
actionsTable[15756] = 2902; // 'state 246' -> BRACKET_OPEN -> reduce -> 'action 2902'
actionsTable[15758] = 2903; // 'state 246' -> @par-gen.EOF -> reduce -> 'action 2903'
actionsTable[15808] = 2904; // 'state 247' -> CHARACTER -> reduce -> 'action 2904'
actionsTable[15809] = 2905; // 'state 247' -> NUMBER -> reduce -> 'action 2905'
actionsTable[15810] = 2906; // 'state 247' -> CONTROL_CHARACTER -> reduce -> 'action 2906'
actionsTable[15811] = 2907; // 'state 247' -> BACKSLASH -> reduce -> 'action 2907'
actionsTable[15812] = 2908; // 'state 247' -> X -> reduce -> 'action 2908'
actionsTable[15813] = 2909; // 'state 247' -> CARET -> reduce -> 'action 2909'
actionsTable[15814] = 2910; // 'state 247' -> DASH -> reduce -> 'action 2910'
actionsTable[15816] = 2911; // 'state 247' -> UNION -> reduce -> 'action 2911'
actionsTable[15817] = 2912; // 'state 247' -> PAREN_OPEN -> reduce -> 'action 2912'
actionsTable[15818] = 2913; // 'state 247' -> PAREN_CLOSE -> reduce -> 'action 2913'
actionsTable[15819] = 2914; // 'state 247' -> QUANTIFIER -> reduce -> 'action 2914'
actionsTable[15820] = 2915; // 'state 247' -> BRACKET_OPEN -> reduce -> 'action 2915'
actionsTable[15822] = 2916; // 'state 247' -> @par-gen.EOF -> reduce -> 'action 2916'
actionsTable[15936] = 2917; // 'state 249' -> CHARACTER -> reduce -> 'action 2917'
actionsTable[15937] = 2918; // 'state 249' -> NUMBER -> reduce -> 'action 2918'
actionsTable[15938] = 2919; // 'state 249' -> CONTROL_CHARACTER -> reduce -> 'action 2919'
actionsTable[15939] = 2920; // 'state 249' -> BACKSLASH -> reduce -> 'action 2920'
actionsTable[15940] = 2921; // 'state 249' -> X -> reduce -> 'action 2921'
actionsTable[15943] = 2922; // 'state 249' -> DOT -> reduce -> 'action 2922'
actionsTable[15944] = 2923; // 'state 249' -> UNION -> reduce -> 'action 2923'
actionsTable[15945] = 2924; // 'state 249' -> PAREN_OPEN -> reduce -> 'action 2924'
actionsTable[15946] = 2925; // 'state 249' -> PAREN_CLOSE -> reduce -> 'action 2925'
actionsTable[15947] = 2926; // 'state 249' -> QUANTIFIER -> reduce -> 'action 2926'
actionsTable[15949] = 2927; // 'state 249' -> BRACKET_CLOSE -> reduce -> 'action 2927'
actionsTable[15872] = 2928; // 'state 248' -> CHARACTER -> reduce -> 'action 2928'
actionsTable[15873] = 2929; // 'state 248' -> NUMBER -> reduce -> 'action 2929'
actionsTable[15874] = 2930; // 'state 248' -> CONTROL_CHARACTER -> reduce -> 'action 2930'
actionsTable[15875] = 2931; // 'state 248' -> BACKSLASH -> reduce -> 'action 2931'
actionsTable[15876] = 2932; // 'state 248' -> X -> reduce -> 'action 2932'
actionsTable[15879] = 2933; // 'state 248' -> DOT -> reduce -> 'action 2933'
actionsTable[15880] = 2934; // 'state 248' -> UNION -> reduce -> 'action 2934'
actionsTable[15881] = 2935; // 'state 248' -> PAREN_OPEN -> reduce -> 'action 2935'
actionsTable[15882] = 2936; // 'state 248' -> PAREN_CLOSE -> reduce -> 'action 2936'
actionsTable[15883] = 2937; // 'state 248' -> QUANTIFIER -> reduce -> 'action 2937'
actionsTable[15885] = 2938; // 'state 248' -> BRACKET_CLOSE -> reduce -> 'action 2938'
actionsTable[16064] = 2939; // 'state 251' -> CHARACTER -> reduce -> 'action 2939'
actionsTable[16065] = 2940; // 'state 251' -> NUMBER -> reduce -> 'action 2940'
actionsTable[16066] = 2941; // 'state 251' -> CONTROL_CHARACTER -> reduce -> 'action 2941'
actionsTable[16067] = 2942; // 'state 251' -> BACKSLASH -> reduce -> 'action 2942'
actionsTable[16068] = 2943; // 'state 251' -> X -> reduce -> 'action 2943'
actionsTable[16071] = 2944; // 'state 251' -> DOT -> reduce -> 'action 2944'
actionsTable[16072] = 2945; // 'state 251' -> UNION -> reduce -> 'action 2945'
actionsTable[16073] = 2946; // 'state 251' -> PAREN_OPEN -> reduce -> 'action 2946'
actionsTable[16074] = 2947; // 'state 251' -> PAREN_CLOSE -> reduce -> 'action 2947'
actionsTable[16075] = 2948; // 'state 251' -> QUANTIFIER -> reduce -> 'action 2948'
actionsTable[16077] = 2949; // 'state 251' -> BRACKET_CLOSE -> reduce -> 'action 2949'
actionsTable[16000] = 2950; // 'state 250' -> CHARACTER -> reduce -> 'action 2950'
actionsTable[16001] = 2951; // 'state 250' -> NUMBER -> reduce -> 'action 2951'
actionsTable[16002] = 2952; // 'state 250' -> CONTROL_CHARACTER -> reduce -> 'action 2952'
actionsTable[16003] = 2953; // 'state 250' -> BACKSLASH -> reduce -> 'action 2953'
actionsTable[16004] = 2954; // 'state 250' -> X -> reduce -> 'action 2954'
actionsTable[16007] = 2955; // 'state 250' -> DOT -> reduce -> 'action 2955'
actionsTable[16008] = 2956; // 'state 250' -> UNION -> reduce -> 'action 2956'
actionsTable[16009] = 2957; // 'state 250' -> PAREN_OPEN -> reduce -> 'action 2957'
actionsTable[16010] = 2958; // 'state 250' -> PAREN_CLOSE -> reduce -> 'action 2958'
actionsTable[16011] = 2959; // 'state 250' -> QUANTIFIER -> reduce -> 'action 2959'
actionsTable[16013] = 2960; // 'state 250' -> BRACKET_CLOSE -> reduce -> 'action 2960'
actionsTable[16128] = 2961; // 'state 252' -> CHARACTER -> reduce -> 'action 2961'
actionsTable[16129] = 2962; // 'state 252' -> NUMBER -> reduce -> 'action 2962'
actionsTable[16130] = 2963; // 'state 252' -> CONTROL_CHARACTER -> reduce -> 'action 2963'
actionsTable[16131] = 2964; // 'state 252' -> BACKSLASH -> reduce -> 'action 2964'
actionsTable[16132] = 2965; // 'state 252' -> X -> reduce -> 'action 2965'
actionsTable[16133] = 2966; // 'state 252' -> CARET -> reduce -> 'action 2966'
actionsTable[16134] = 2967; // 'state 252' -> DASH -> reduce -> 'action 2967'
actionsTable[16136] = 2968; // 'state 252' -> UNION -> reduce -> 'action 2968'
actionsTable[16137] = 2969; // 'state 252' -> PAREN_OPEN -> reduce -> 'action 2969'
actionsTable[16138] = 2970; // 'state 252' -> PAREN_CLOSE -> reduce -> 'action 2970'
actionsTable[16139] = 2971; // 'state 252' -> QUANTIFIER -> reduce -> 'action 2971'
actionsTable[16140] = 2972; // 'state 252' -> BRACKET_OPEN -> reduce -> 'action 2972'
actionsTable[16142] = 2973; // 'state 252' -> @par-gen.EOF -> reduce -> 'action 2973'
actionsTable[16256] = 2974; // 'state 254' -> CHARACTER -> reduce -> 'action 2974'
actionsTable[16257] = 2975; // 'state 254' -> NUMBER -> reduce -> 'action 2975'
actionsTable[16258] = 2976; // 'state 254' -> CONTROL_CHARACTER -> reduce -> 'action 2976'
actionsTable[16259] = 2977; // 'state 254' -> BACKSLASH -> reduce -> 'action 2977'
actionsTable[16260] = 2978; // 'state 254' -> X -> reduce -> 'action 2978'
actionsTable[16263] = 2979; // 'state 254' -> DOT -> reduce -> 'action 2979'
actionsTable[16264] = 2980; // 'state 254' -> UNION -> reduce -> 'action 2980'
actionsTable[16265] = 2981; // 'state 254' -> PAREN_OPEN -> reduce -> 'action 2981'
actionsTable[16266] = 2982; // 'state 254' -> PAREN_CLOSE -> reduce -> 'action 2982'
actionsTable[16267] = 2983; // 'state 254' -> QUANTIFIER -> reduce -> 'action 2983'
actionsTable[16269] = 2984; // 'state 254' -> BRACKET_CLOSE -> reduce -> 'action 2984'
actionsTable[16192] = 2985; // 'state 253' -> CHARACTER -> reduce -> 'action 2985'
actionsTable[16193] = 2986; // 'state 253' -> NUMBER -> reduce -> 'action 2986'
actionsTable[16194] = 2987; // 'state 253' -> CONTROL_CHARACTER -> reduce -> 'action 2987'
actionsTable[16195] = 2988; // 'state 253' -> BACKSLASH -> reduce -> 'action 2988'
actionsTable[16196] = 2989; // 'state 253' -> X -> reduce -> 'action 2989'
actionsTable[16199] = 2990; // 'state 253' -> DOT -> reduce -> 'action 2990'
actionsTable[16200] = 2991; // 'state 253' -> UNION -> reduce -> 'action 2991'
actionsTable[16201] = 2992; // 'state 253' -> PAREN_OPEN -> reduce -> 'action 2992'
actionsTable[16202] = 2993; // 'state 253' -> PAREN_CLOSE -> reduce -> 'action 2993'
actionsTable[16203] = 2994; // 'state 253' -> QUANTIFIER -> reduce -> 'action 2994'
actionsTable[16205] = 2995; // 'state 253' -> BRACKET_CLOSE -> reduce -> 'action 2995'
actionsTable[16384] = 2996; // 'state 256' -> CHARACTER -> reduce -> 'action 2996'
actionsTable[16385] = 2997; // 'state 256' -> NUMBER -> reduce -> 'action 2997'
actionsTable[16386] = 2998; // 'state 256' -> CONTROL_CHARACTER -> reduce -> 'action 2998'
actionsTable[16387] = 2999; // 'state 256' -> BACKSLASH -> reduce -> 'action 2999'
actionsTable[16388] = 3000; // 'state 256' -> X -> reduce -> 'action 3000'
actionsTable[16391] = 3001; // 'state 256' -> DOT -> reduce -> 'action 3001'
actionsTable[16392] = 3002; // 'state 256' -> UNION -> reduce -> 'action 3002'
actionsTable[16393] = 3003; // 'state 256' -> PAREN_OPEN -> reduce -> 'action 3003'
actionsTable[16394] = 3004; // 'state 256' -> PAREN_CLOSE -> reduce -> 'action 3004'
actionsTable[16395] = 3005; // 'state 256' -> QUANTIFIER -> reduce -> 'action 3005'
actionsTable[16397] = 3006; // 'state 256' -> BRACKET_CLOSE -> reduce -> 'action 3006'
actionsTable[16320] = 3007; // 'state 255' -> CHARACTER -> reduce -> 'action 3007'
actionsTable[16321] = 3008; // 'state 255' -> NUMBER -> reduce -> 'action 3008'
actionsTable[16322] = 3009; // 'state 255' -> CONTROL_CHARACTER -> reduce -> 'action 3009'
actionsTable[16323] = 3010; // 'state 255' -> BACKSLASH -> reduce -> 'action 3010'
actionsTable[16324] = 3011; // 'state 255' -> X -> reduce -> 'action 3011'
actionsTable[16327] = 3012; // 'state 255' -> DOT -> reduce -> 'action 3012'
actionsTable[16328] = 3013; // 'state 255' -> UNION -> reduce -> 'action 3013'
actionsTable[16329] = 3014; // 'state 255' -> PAREN_OPEN -> reduce -> 'action 3014'
actionsTable[16330] = 3015; // 'state 255' -> PAREN_CLOSE -> reduce -> 'action 3015'
actionsTable[16331] = 3016; // 'state 255' -> QUANTIFIER -> reduce -> 'action 3016'
actionsTable[16333] = 3017; // 'state 255' -> BRACKET_CLOSE -> reduce -> 'action 3017'
actionsTable[16448] = 3018; // 'state 257' -> CHARACTER -> reduce -> 'action 3018'
actionsTable[16449] = 3019; // 'state 257' -> NUMBER -> reduce -> 'action 3019'
actionsTable[16450] = 3020; // 'state 257' -> CONTROL_CHARACTER -> reduce -> 'action 3020'
actionsTable[16451] = 3021; // 'state 257' -> BACKSLASH -> reduce -> 'action 3021'
actionsTable[16452] = 3022; // 'state 257' -> X -> reduce -> 'action 3022'
actionsTable[16453] = 3023; // 'state 257' -> CARET -> reduce -> 'action 3023'
actionsTable[16454] = 3024; // 'state 257' -> DASH -> reduce -> 'action 3024'
actionsTable[16456] = 3025; // 'state 257' -> UNION -> reduce -> 'action 3025'
actionsTable[16457] = 3026; // 'state 257' -> PAREN_OPEN -> reduce -> 'action 3026'
actionsTable[16458] = 3027; // 'state 257' -> PAREN_CLOSE -> reduce -> 'action 3027'
actionsTable[16459] = 3028; // 'state 257' -> QUANTIFIER -> reduce -> 'action 3028'
actionsTable[16460] = 3029; // 'state 257' -> BRACKET_OPEN -> reduce -> 'action 3029'
actionsTable[16462] = 3030; // 'state 257' -> @par-gen.EOF -> reduce -> 'action 3030'
actionsTable[16576] = 3031; // 'state 259' -> CHARACTER -> reduce -> 'action 3031'
actionsTable[16577] = 3032; // 'state 259' -> NUMBER -> reduce -> 'action 3032'
actionsTable[16578] = 3033; // 'state 259' -> CONTROL_CHARACTER -> reduce -> 'action 3033'
actionsTable[16579] = 3034; // 'state 259' -> BACKSLASH -> reduce -> 'action 3034'
actionsTable[16580] = 3035; // 'state 259' -> X -> reduce -> 'action 3035'
actionsTable[16583] = 3036; // 'state 259' -> DOT -> reduce -> 'action 3036'
actionsTable[16584] = 3037; // 'state 259' -> UNION -> reduce -> 'action 3037'
actionsTable[16585] = 3038; // 'state 259' -> PAREN_OPEN -> reduce -> 'action 3038'
actionsTable[16586] = 3039; // 'state 259' -> PAREN_CLOSE -> reduce -> 'action 3039'
actionsTable[16587] = 3040; // 'state 259' -> QUANTIFIER -> reduce -> 'action 3040'
actionsTable[16589] = 3041; // 'state 259' -> BRACKET_CLOSE -> reduce -> 'action 3041'
actionsTable[16512] = 3042; // 'state 258' -> CHARACTER -> reduce -> 'action 3042'
actionsTable[16513] = 3043; // 'state 258' -> NUMBER -> reduce -> 'action 3043'
actionsTable[16514] = 3044; // 'state 258' -> CONTROL_CHARACTER -> reduce -> 'action 3044'
actionsTable[16515] = 3045; // 'state 258' -> BACKSLASH -> reduce -> 'action 3045'
actionsTable[16516] = 3046; // 'state 258' -> X -> reduce -> 'action 3046'
actionsTable[16519] = 3047; // 'state 258' -> DOT -> reduce -> 'action 3047'
actionsTable[16520] = 3048; // 'state 258' -> UNION -> reduce -> 'action 3048'
actionsTable[16521] = 3049; // 'state 258' -> PAREN_OPEN -> reduce -> 'action 3049'
actionsTable[16522] = 3050; // 'state 258' -> PAREN_CLOSE -> reduce -> 'action 3050'
actionsTable[16523] = 3051; // 'state 258' -> QUANTIFIER -> reduce -> 'action 3051'
actionsTable[16525] = 3052; // 'state 258' -> BRACKET_CLOSE -> reduce -> 'action 3052'
actionsTable[16704] = 3053; // 'state 261' -> CHARACTER -> reduce -> 'action 3053'
actionsTable[16705] = 3054; // 'state 261' -> NUMBER -> reduce -> 'action 3054'
actionsTable[16706] = 3055; // 'state 261' -> CONTROL_CHARACTER -> reduce -> 'action 3055'
actionsTable[16707] = 3056; // 'state 261' -> BACKSLASH -> reduce -> 'action 3056'
actionsTable[16708] = 3057; // 'state 261' -> X -> reduce -> 'action 3057'
actionsTable[16711] = 3058; // 'state 261' -> DOT -> reduce -> 'action 3058'
actionsTable[16712] = 3059; // 'state 261' -> UNION -> reduce -> 'action 3059'
actionsTable[16713] = 3060; // 'state 261' -> PAREN_OPEN -> reduce -> 'action 3060'
actionsTable[16714] = 3061; // 'state 261' -> PAREN_CLOSE -> reduce -> 'action 3061'
actionsTable[16715] = 3062; // 'state 261' -> QUANTIFIER -> reduce -> 'action 3062'
actionsTable[16717] = 3063; // 'state 261' -> BRACKET_CLOSE -> reduce -> 'action 3063'
actionsTable[16640] = 3064; // 'state 260' -> CHARACTER -> reduce -> 'action 3064'
actionsTable[16641] = 3065; // 'state 260' -> NUMBER -> reduce -> 'action 3065'
actionsTable[16642] = 3066; // 'state 260' -> CONTROL_CHARACTER -> reduce -> 'action 3066'
actionsTable[16643] = 3067; // 'state 260' -> BACKSLASH -> reduce -> 'action 3067'
actionsTable[16644] = 3068; // 'state 260' -> X -> reduce -> 'action 3068'
actionsTable[16647] = 3069; // 'state 260' -> DOT -> reduce -> 'action 3069'
actionsTable[16648] = 3070; // 'state 260' -> UNION -> reduce -> 'action 3070'
actionsTable[16649] = 3071; // 'state 260' -> PAREN_OPEN -> reduce -> 'action 3071'
actionsTable[16650] = 3072; // 'state 260' -> PAREN_CLOSE -> reduce -> 'action 3072'
actionsTable[16651] = 3073; // 'state 260' -> QUANTIFIER -> reduce -> 'action 3073'
actionsTable[16653] = 3074; // 'state 260' -> BRACKET_CLOSE -> reduce -> 'action 3074'

const gotoTable = new Uint16Array(16768).fill(0xffff);
gotoTable[17] = 10; // 'state 10'
gotoTable[18] = 11; // 'state 11'
gotoTable[19] = 12; // 'state 12'
gotoTable[20] = 13; // 'state 13'
gotoTable[21] = 14; // 'state 14'
gotoTable[27] = 17; // 'state 17'
gotoTable[22] = 15; // 'state 15'
gotoTable[23] = 16; // 'state 16'
gotoTable[28] = 18; // 'state 18'
gotoTable[853] = 30; // 'state 30'
gotoTable[859] = 33; // 'state 33'
gotoTable[854] = 31; // 'state 31'
gotoTable[855] = 32; // 'state 32'
gotoTable[860] = 34; // 'state 34'
gotoTable[917] = 45; // 'state 45'
gotoTable[923] = 48; // 'state 48'
gotoTable[918] = 46; // 'state 46'
gotoTable[919] = 47; // 'state 47'
gotoTable[924] = 49; // 'state 49'
gotoTable[285] = 63; // 'state 63'
gotoTable[531] = 68; // 'state 68'
gotoTable[532] = 69; // 'state 69'
gotoTable[533] = 70; // 'state 70'
gotoTable[539] = 17; // 'state 17'
gotoTable[534] = 15; // 'state 15'
gotoTable[535] = 16; // 'state 16'
gotoTable[540] = 18; // 'state 18'
gotoTable[600] = 82; // 'state 82'
gotoTable[601] = 83; // 'state 83'
gotoTable[604] = 85; // 'state 85'
gotoTable[602] = 84; // 'state 84'
gotoTable[1236] = 86; // 'state 86'
gotoTable[1237] = 87; // 'state 87'
gotoTable[1243] = 17; // 'state 17'
gotoTable[1238] = 15; // 'state 15'
gotoTable[1239] = 16; // 'state 16'
gotoTable[1244] = 18; // 'state 18'
gotoTable[1748] = 88; // 'state 88'
gotoTable[1749] = 89; // 'state 89'
gotoTable[1755] = 17; // 'state 17'
gotoTable[1750] = 15; // 'state 15'
gotoTable[1751] = 16; // 'state 16'
gotoTable[1756] = 18; // 'state 18'
gotoTable[1501] = 103; // 'state 103'
gotoTable[1811] = 104; // 'state 104'
gotoTable[1812] = 105; // 'state 105'
gotoTable[1813] = 106; // 'state 106'
gotoTable[1819] = 17; // 'state 17'
gotoTable[1814] = 15; // 'state 15'
gotoTable[1815] = 16; // 'state 16'
gotoTable[1820] = 18; // 'state 18'
gotoTable[1880] = 115; // 'state 115'
gotoTable[1881] = 116; // 'state 116'
gotoTable[1884] = 118; // 'state 118'
gotoTable[1882] = 117; // 'state 117'
gotoTable[2708] = 119; // 'state 119'
gotoTable[2709] = 120; // 'state 120'
gotoTable[2715] = 17; // 'state 17'
gotoTable[2710] = 15; // 'state 15'
gotoTable[2711] = 16; // 'state 16'
gotoTable[2716] = 18; // 'state 18'
gotoTable[2461] = 134; // 'state 134'
gotoTable[2771] = 135; // 'state 135'
gotoTable[2772] = 136; // 'state 136'
gotoTable[2773] = 137; // 'state 137'
gotoTable[2779] = 17; // 'state 17'
gotoTable[2774] = 15; // 'state 15'
gotoTable[2775] = 16; // 'state 16'
gotoTable[2780] = 18; // 'state 18'
gotoTable[2840] = 146; // 'state 146'
gotoTable[2841] = 147; // 'state 147'
gotoTable[2844] = 149; // 'state 149'
gotoTable[2842] = 148; // 'state 148'
gotoTable[4437] = 30; // 'state 30'
gotoTable[4443] = 17; // 'state 17'
gotoTable[4438] = 15; // 'state 15'
gotoTable[4439] = 16; // 'state 16'
gotoTable[4444] = 18; // 'state 18'
gotoTable[4501] = 45; // 'state 45'
gotoTable[4507] = 17; // 'state 17'
gotoTable[4502] = 15; // 'state 15'
gotoTable[4503] = 16; // 'state 16'
gotoTable[4508] = 18; // 'state 18'
gotoTable[4312] = 162; // 'state 162'
gotoTable[4313] = 163; // 'state 163'
gotoTable[4316] = 165; // 'state 165'
gotoTable[4314] = 164; // 'state 164'
gotoTable[5273] = 174; // 'state 174'
gotoTable[5276] = 176; // 'state 176'
gotoTable[5274] = 175; // 'state 175'
gotoTable[4888] = 185; // 'state 185'
gotoTable[4889] = 83; // 'state 83'
gotoTable[4892] = 85; // 'state 85'
gotoTable[4890] = 84; // 'state 84'
gotoTable[5525] = 30; // 'state 30'
gotoTable[5531] = 17; // 'state 17'
gotoTable[5526] = 15; // 'state 15'
gotoTable[5527] = 16; // 'state 16'
gotoTable[5532] = 18; // 'state 18'
gotoTable[5589] = 45; // 'state 45'
gotoTable[5595] = 17; // 'state 17'
gotoTable[5590] = 15; // 'state 15'
gotoTable[5591] = 16; // 'state 16'
gotoTable[5596] = 18; // 'state 18'
gotoTable[5653] = 30; // 'state 30'
gotoTable[5659] = 17; // 'state 17'
gotoTable[5654] = 15; // 'state 15'
gotoTable[5655] = 16; // 'state 16'
gotoTable[5660] = 18; // 'state 18'
gotoTable[5717] = 45; // 'state 45'
gotoTable[5723] = 17; // 'state 17'
gotoTable[5718] = 15; // 'state 15'
gotoTable[5719] = 16; // 'state 16'
gotoTable[5724] = 18; // 'state 18'
gotoTable[6741] = 30; // 'state 30'
gotoTable[6747] = 17; // 'state 17'
gotoTable[6742] = 15; // 'state 15'
gotoTable[6743] = 16; // 'state 16'
gotoTable[6748] = 18; // 'state 18'
gotoTable[6805] = 45; // 'state 45'
gotoTable[6811] = 17; // 'state 17'
gotoTable[6806] = 15; // 'state 15'
gotoTable[6807] = 16; // 'state 16'
gotoTable[6812] = 18; // 'state 18'
gotoTable[7385] = 191; // 'state 191'
gotoTable[7388] = 85; // 'state 85'
gotoTable[7386] = 84; // 'state 84'
gotoTable[7000] = 200; // 'state 200'
gotoTable[7001] = 83; // 'state 83'
gotoTable[7004] = 85; // 'state 85'
gotoTable[7002] = 84; // 'state 84'
gotoTable[7637] = 30; // 'state 30'
gotoTable[7643] = 17; // 'state 17'
gotoTable[7638] = 15; // 'state 15'
gotoTable[7639] = 16; // 'state 16'
gotoTable[7644] = 18; // 'state 18'
gotoTable[7701] = 45; // 'state 45'
gotoTable[7707] = 17; // 'state 17'
gotoTable[7702] = 15; // 'state 15'
gotoTable[7703] = 16; // 'state 16'
gotoTable[7708] = 18; // 'state 18'
gotoTable[8725] = 30; // 'state 30'
gotoTable[8731] = 17; // 'state 17'
gotoTable[8726] = 15; // 'state 15'
gotoTable[8727] = 16; // 'state 16'
gotoTable[8732] = 18; // 'state 18'
gotoTable[8789] = 45; // 'state 45'
gotoTable[8795] = 17; // 'state 17'
gotoTable[8790] = 15; // 'state 15'
gotoTable[8791] = 16; // 'state 16'
gotoTable[8796] = 18; // 'state 18'
gotoTable[9369] = 206; // 'state 206'
gotoTable[9372] = 85; // 'state 85'
gotoTable[9370] = 84; // 'state 84'
gotoTable[8984] = 215; // 'state 215'
gotoTable[8985] = 83; // 'state 83'
gotoTable[8988] = 85; // 'state 85'
gotoTable[8986] = 84; // 'state 84'
gotoTable[10393] = 218; // 'state 218'
gotoTable[10396] = 85; // 'state 85'
gotoTable[10394] = 84; // 'state 84'
gotoTable[10008] = 227; // 'state 227'
gotoTable[10009] = 83; // 'state 83'
gotoTable[10012] = 85; // 'state 85'
gotoTable[10010] = 84; // 'state 84'
gotoTable[11356] = 237; // 'state 237'
gotoTable[11420] = 239; // 'state 239'
gotoTable[11865] = 174; // 'state 174'
gotoTable[11868] = 85; // 'state 85'
gotoTable[11866] = 84; // 'state 84'
gotoTable[12316] = 243; // 'state 243'
gotoTable[12380] = 245; // 'state 245'
gotoTable[12825] = 174; // 'state 174'
gotoTable[12828] = 85; // 'state 85'
gotoTable[12826] = 84; // 'state 84'
gotoTable[13276] = 249; // 'state 249'
gotoTable[13340] = 251; // 'state 251'
gotoTable[13785] = 174; // 'state 174'
gotoTable[13788] = 85; // 'state 85'
gotoTable[13786] = 84; // 'state 84'
gotoTable[14044] = 254; // 'state 254'
gotoTable[14108] = 256; // 'state 256'
gotoTable[14553] = 174; // 'state 174'
gotoTable[14556] = 85; // 'state 85'
gotoTable[14554] = 84; // 'state 84'
gotoTable[14620] = 259; // 'state 259'
gotoTable[14684] = 261; // 'state 261'

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
            lookahead * 262 * 64 + currentState * 64 + action.symbol
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
