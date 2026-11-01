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
Atom := DOT;
Atom := DOT QUANTIFIER;
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
CharacterClassCharacter := ControlCharacter;
CharacterClassCharacter := HexEscape;
CharacterClassCharacter := BACKSLASH DASH;
CharacterClassCharacter := BACKSLASH CARET;
CharacterClassCharacter := QUANTIFIER;
CharacterClassCharacter := PAREN_OPEN;
CharacterClassCharacter := PAREN_CLOSE;
CharacterClassCharacter := UNION;
CharacterClassCharacter := DOT;
CharacterClassCharacter := BACKSLASH EscapedCharacter;
CharacterClassCharacter := CharacterClassRange;
CharacterClassRange := CharacterOrNumberOrX DASH CharacterOrNumberOrX;
CharacterClassRange := CharacterOrNumberOrX DASH ControlCharacter;
CharacterClassRange := ControlCharacter DASH CharacterOrNumberOrX;
CharacterClassRange := ControlCharacter DASH ControlCharacter;
CharacterClassRange := HexEscape DASH HexEscape;
CharacterClassRange := HexEscape DASH CharacterOrNumberOrX;
CharacterClassRange := CharacterOrNumberOrX DASH HexEscape;
CharacterClassRange := HexEscape DASH ControlCharacter;
CharacterClassRange := ControlCharacter DASH HexEscape;
Character := CharacterOrNumberOrX;
Character := ControlCharacter;
Character := CARET;
Character := DASH;
Character := BACKSLASH EscapedCharacter;
Character := HexEscape;
HexEscape := BACKSLASH X HexNumber HexNumber;
HexNumber := HEX_NUMBER;
HexNumber := B;
HexNumber := F;
CharacterOrNumberOrX := CHARACTER;
CharacterOrNumberOrX := HexNumber;
CharacterOrNumberOrX := X;
ControlCharacter := CONTROL_CHARACTER;
ControlCharacter := B;
ControlCharacter := F;
EscapedCharacter := ControlCharacter;
EscapedCharacter := BACKSLASH;
EscapedCharacter := DOT;
EscapedCharacter := UNION;
EscapedCharacter := PAREN_OPEN;
EscapedCharacter := PAREN_CLOSE;
EscapedCharacter := BRACKET_OPEN;
EscapedCharacter := BRACKET_CLOSE;
EscapedCharacter := QUANTIFIER;
      */

const parserSymbols = [
  "CHARACTER", // 0
  "HEX_NUMBER", // 1
  "CONTROL_CHARACTER", // 2
  "BACKSLASH", // 3
  "X", // 4
  "B", // 5
  "F", // 6
  "CARET", // 7
  "DASH", // 8
  "DOT", // 9
  "UNION", // 10
  "PAREN_OPEN", // 11
  "PAREN_CLOSE", // 12
  "QUANTIFIER", // 13
  "BRACKET_OPEN", // 14
  "BRACKET_CLOSE", // 15
  "@par-gen.EOF", // 16
  "@par-gen.ERROR", // 17
  "S", // 18
  "RegExp", // 19
  "Expression", // 20
  "Union", // 21
  "Sequence", // 22
  "Atom", // 23
  "Group", // 24
  "CharacterClass", // 25
  "CharacterClassCharacters", // 26
  "CharacterClassCharacter", // 27
  "CharacterClassRange", // 28
  "Character", // 29
  "HexEscape", // 30
  "HexNumber", // 31
  "CharacterOrNumberOrX", // 32
  "ControlCharacter", // 33
  "EscapedCharacter", // 34
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

const actionsTable = new Uint16Array(2496).fill(0xffff);
actionsTable[0] = 2; // 'state 0' -> CHARACTER -> shift (target=1, len=0) -> 'action 0'
actionsTable[1] = 4; // 'state 0' -> HEX_NUMBER -> shift (target=2, len=0) -> 'action 1'
actionsTable[2] = 6; // 'state 0' -> CONTROL_CHARACTER -> shift (target=3, len=0) -> 'action 2'
actionsTable[3] = 8; // 'state 0' -> BACKSLASH -> shift (target=4, len=0) -> 'action 3'
actionsTable[4] = 2; // 'state 0' -> X -> shift (target=1, len=0) -> 'action 4'
actionsTable[5] = 4; // 'state 0' -> B -> shift (target=2, len=0) -> 'action 5'
actionsTable[6] = 4; // 'state 0' -> F -> shift (target=2, len=0) -> 'action 6'
actionsTable[7] = 10; // 'state 0' -> CARET -> shift (target=5, len=0) -> 'action 7'
actionsTable[8] = 10; // 'state 0' -> DASH -> shift (target=5, len=0) -> 'action 8'
actionsTable[9] = 12; // 'state 0' -> DOT -> shift (target=6, len=0) -> 'action 9'
actionsTable[11] = 14; // 'state 0' -> PAREN_OPEN -> shift (target=7, len=0) -> 'action 10'
actionsTable[14] = 16; // 'state 0' -> BRACKET_OPEN -> shift (target=8, len=0) -> 'action 11'
actionsTable[592] = 65534; // 'state 9' -> @par-gen.EOF -> done (target=0, len=0) -> 'action 12'
actionsTable[656] = 551; // 'state 10' -> @par-gen.EOF -> reduce (target=19, len=1) -> 'action 13'
actionsTable[714] = 26; // 'state 11' -> UNION -> shift (target=13, len=0) -> 'action 14'
actionsTable[720] = 553; // 'state 11' -> @par-gen.EOF -> reduce (target=20, len=1) -> 'action 15'
actionsTable[768] = 2; // 'state 12' -> CHARACTER -> shift (target=1, len=0) -> 'action 16'
actionsTable[769] = 4; // 'state 12' -> HEX_NUMBER -> shift (target=2, len=0) -> 'action 17'
actionsTable[770] = 6; // 'state 12' -> CONTROL_CHARACTER -> shift (target=3, len=0) -> 'action 18'
actionsTable[771] = 8; // 'state 12' -> BACKSLASH -> shift (target=4, len=0) -> 'action 19'
actionsTable[772] = 2; // 'state 12' -> X -> shift (target=1, len=0) -> 'action 20'
actionsTable[773] = 4; // 'state 12' -> B -> shift (target=2, len=0) -> 'action 21'
actionsTable[774] = 4; // 'state 12' -> F -> shift (target=2, len=0) -> 'action 22'
actionsTable[775] = 10; // 'state 12' -> CARET -> shift (target=5, len=0) -> 'action 23'
actionsTable[776] = 10; // 'state 12' -> DASH -> shift (target=5, len=0) -> 'action 24'
actionsTable[777] = 12; // 'state 12' -> DOT -> shift (target=6, len=0) -> 'action 25'
actionsTable[778] = 26; // 'state 12' -> UNION -> shift (target=13, len=0) -> 'action 26'
actionsTable[779] = 14; // 'state 12' -> PAREN_OPEN -> shift (target=7, len=0) -> 'action 27'
actionsTable[782] = 16; // 'state 12' -> BRACKET_OPEN -> shift (target=8, len=0) -> 'action 28'
actionsTable[784] = 553; // 'state 12' -> @par-gen.EOF -> reduce (target=20, len=1) -> 'action 29'
actionsTable[397] = 30; // 'state 6' -> QUANTIFIER -> shift (target=15, len=0) -> 'action 30'
actionsTable[384] = 559; // 'state 6' -> CHARACTER -> reduce (target=23, len=1) -> 'action 31'
actionsTable[385] = 559; // 'state 6' -> HEX_NUMBER -> reduce (target=23, len=1) -> 'action 32'
actionsTable[386] = 559; // 'state 6' -> CONTROL_CHARACTER -> reduce (target=23, len=1) -> 'action 33'
actionsTable[387] = 559; // 'state 6' -> BACKSLASH -> reduce (target=23, len=1) -> 'action 34'
actionsTable[388] = 559; // 'state 6' -> X -> reduce (target=23, len=1) -> 'action 35'
actionsTable[389] = 559; // 'state 6' -> B -> reduce (target=23, len=1) -> 'action 36'
actionsTable[390] = 559; // 'state 6' -> F -> reduce (target=23, len=1) -> 'action 37'
actionsTable[391] = 559; // 'state 6' -> CARET -> reduce (target=23, len=1) -> 'action 38'
actionsTable[392] = 559; // 'state 6' -> DASH -> reduce (target=23, len=1) -> 'action 39'
actionsTable[393] = 559; // 'state 6' -> DOT -> reduce (target=23, len=1) -> 'action 40'
actionsTable[394] = 559; // 'state 6' -> UNION -> reduce (target=23, len=1) -> 'action 41'
actionsTable[395] = 559; // 'state 6' -> PAREN_OPEN -> reduce (target=23, len=1) -> 'action 42'
actionsTable[396] = 559; // 'state 6' -> PAREN_CLOSE -> reduce (target=23, len=1) -> 'action 43'
actionsTable[398] = 559; // 'state 6' -> BRACKET_OPEN -> reduce (target=23, len=1) -> 'action 44'
actionsTable[400] = 559; // 'state 6' -> @par-gen.EOF -> reduce (target=23, len=1) -> 'action 45'
actionsTable[320] = 571; // 'state 5' -> CHARACTER -> reduce (target=29, len=1) -> 'action 46'
actionsTable[321] = 571; // 'state 5' -> HEX_NUMBER -> reduce (target=29, len=1) -> 'action 47'
actionsTable[322] = 571; // 'state 5' -> CONTROL_CHARACTER -> reduce (target=29, len=1) -> 'action 48'
actionsTable[323] = 571; // 'state 5' -> BACKSLASH -> reduce (target=29, len=1) -> 'action 49'
actionsTable[324] = 571; // 'state 5' -> X -> reduce (target=29, len=1) -> 'action 50'
actionsTable[325] = 571; // 'state 5' -> B -> reduce (target=29, len=1) -> 'action 51'
actionsTable[326] = 571; // 'state 5' -> F -> reduce (target=29, len=1) -> 'action 52'
actionsTable[327] = 571; // 'state 5' -> CARET -> reduce (target=29, len=1) -> 'action 53'
actionsTable[328] = 571; // 'state 5' -> DASH -> reduce (target=29, len=1) -> 'action 54'
actionsTable[329] = 571; // 'state 5' -> DOT -> reduce (target=29, len=1) -> 'action 55'
actionsTable[330] = 571; // 'state 5' -> UNION -> reduce (target=29, len=1) -> 'action 56'
actionsTable[331] = 571; // 'state 5' -> PAREN_OPEN -> reduce (target=29, len=1) -> 'action 57'
actionsTable[332] = 571; // 'state 5' -> PAREN_CLOSE -> reduce (target=29, len=1) -> 'action 58'
actionsTable[333] = 571; // 'state 5' -> QUANTIFIER -> reduce (target=29, len=1) -> 'action 59'
actionsTable[334] = 571; // 'state 5' -> BRACKET_OPEN -> reduce (target=29, len=1) -> 'action 60'
actionsTable[336] = 571; // 'state 5' -> @par-gen.EOF -> reduce (target=29, len=1) -> 'action 61'
actionsTable[258] = 6; // 'state 4' -> CONTROL_CHARACTER -> shift (target=3, len=0) -> 'action 62'
actionsTable[259] = 32; // 'state 4' -> BACKSLASH -> shift (target=16, len=0) -> 'action 63'
actionsTable[260] = 34; // 'state 4' -> X -> shift (target=17, len=0) -> 'action 64'
actionsTable[261] = 6; // 'state 4' -> B -> shift (target=3, len=0) -> 'action 65'
actionsTable[262] = 6; // 'state 4' -> F -> shift (target=3, len=0) -> 'action 66'
actionsTable[265] = 32; // 'state 4' -> DOT -> shift (target=16, len=0) -> 'action 67'
actionsTable[266] = 32; // 'state 4' -> UNION -> shift (target=16, len=0) -> 'action 68'
actionsTable[267] = 32; // 'state 4' -> PAREN_OPEN -> shift (target=16, len=0) -> 'action 69'
actionsTable[268] = 32; // 'state 4' -> PAREN_CLOSE -> shift (target=16, len=0) -> 'action 70'
actionsTable[269] = 32; // 'state 4' -> QUANTIFIER -> shift (target=16, len=0) -> 'action 71'
actionsTable[270] = 32; // 'state 4' -> BRACKET_OPEN -> shift (target=16, len=0) -> 'action 72'
actionsTable[271] = 32; // 'state 4' -> BRACKET_CLOSE -> shift (target=16, len=0) -> 'action 73'
actionsTable[448] = 2; // 'state 7' -> CHARACTER -> shift (target=1, len=0) -> 'action 74'
actionsTable[449] = 4; // 'state 7' -> HEX_NUMBER -> shift (target=2, len=0) -> 'action 75'
actionsTable[450] = 6; // 'state 7' -> CONTROL_CHARACTER -> shift (target=3, len=0) -> 'action 76'
actionsTable[451] = 8; // 'state 7' -> BACKSLASH -> shift (target=4, len=0) -> 'action 77'
actionsTable[452] = 2; // 'state 7' -> X -> shift (target=1, len=0) -> 'action 78'
actionsTable[453] = 4; // 'state 7' -> B -> shift (target=2, len=0) -> 'action 79'
actionsTable[454] = 4; // 'state 7' -> F -> shift (target=2, len=0) -> 'action 80'
actionsTable[455] = 10; // 'state 7' -> CARET -> shift (target=5, len=0) -> 'action 81'
actionsTable[456] = 10; // 'state 7' -> DASH -> shift (target=5, len=0) -> 'action 82'
actionsTable[457] = 12; // 'state 7' -> DOT -> shift (target=6, len=0) -> 'action 83'
actionsTable[459] = 14; // 'state 7' -> PAREN_OPEN -> shift (target=7, len=0) -> 'action 84'
actionsTable[462] = 16; // 'state 7' -> BRACKET_OPEN -> shift (target=8, len=0) -> 'action 85'
actionsTable[512] = 2; // 'state 8' -> CHARACTER -> shift (target=1, len=0) -> 'action 86'
actionsTable[513] = 4; // 'state 8' -> HEX_NUMBER -> shift (target=2, len=0) -> 'action 87'
actionsTable[514] = 6; // 'state 8' -> CONTROL_CHARACTER -> shift (target=3, len=0) -> 'action 88'
actionsTable[515] = 42; // 'state 8' -> BACKSLASH -> shift (target=21, len=0) -> 'action 89'
actionsTable[516] = 2; // 'state 8' -> X -> shift (target=1, len=0) -> 'action 90'
actionsTable[517] = 4; // 'state 8' -> B -> shift (target=2, len=0) -> 'action 91'
actionsTable[518] = 4; // 'state 8' -> F -> shift (target=2, len=0) -> 'action 92'
actionsTable[519] = 44; // 'state 8' -> CARET -> shift (target=22, len=0) -> 'action 93'
actionsTable[521] = 46; // 'state 8' -> DOT -> shift (target=23, len=0) -> 'action 94'
actionsTable[522] = 46; // 'state 8' -> UNION -> shift (target=23, len=0) -> 'action 95'
actionsTable[523] = 46; // 'state 8' -> PAREN_OPEN -> shift (target=23, len=0) -> 'action 96'
actionsTable[524] = 46; // 'state 8' -> PAREN_CLOSE -> shift (target=23, len=0) -> 'action 97'
actionsTable[525] = 46; // 'state 8' -> QUANTIFIER -> shift (target=23, len=0) -> 'action 98'
actionsTable[64] = 577; // 'state 1' -> CHARACTER -> reduce (target=32, len=1) -> 'action 99'
actionsTable[65] = 577; // 'state 1' -> HEX_NUMBER -> reduce (target=32, len=1) -> 'action 100'
actionsTable[66] = 577; // 'state 1' -> CONTROL_CHARACTER -> reduce (target=32, len=1) -> 'action 101'
actionsTable[67] = 577; // 'state 1' -> BACKSLASH -> reduce (target=32, len=1) -> 'action 102'
actionsTable[68] = 577; // 'state 1' -> X -> reduce (target=32, len=1) -> 'action 103'
actionsTable[69] = 577; // 'state 1' -> B -> reduce (target=32, len=1) -> 'action 104'
actionsTable[70] = 577; // 'state 1' -> F -> reduce (target=32, len=1) -> 'action 105'
actionsTable[71] = 577; // 'state 1' -> CARET -> reduce (target=32, len=1) -> 'action 106'
actionsTable[72] = 577; // 'state 1' -> DASH -> reduce (target=32, len=1) -> 'action 107'
actionsTable[73] = 577; // 'state 1' -> DOT -> reduce (target=32, len=1) -> 'action 108'
actionsTable[74] = 577; // 'state 1' -> UNION -> reduce (target=32, len=1) -> 'action 109'
actionsTable[75] = 577; // 'state 1' -> PAREN_OPEN -> reduce (target=32, len=1) -> 'action 110'
actionsTable[76] = 577; // 'state 1' -> PAREN_CLOSE -> reduce (target=32, len=1) -> 'action 111'
actionsTable[77] = 577; // 'state 1' -> QUANTIFIER -> reduce (target=32, len=1) -> 'action 112'
actionsTable[78] = 577; // 'state 1' -> BRACKET_OPEN -> reduce (target=32, len=1) -> 'action 113'
actionsTable[79] = 577; // 'state 1' -> BRACKET_CLOSE -> reduce (target=32, len=1) -> 'action 114'
actionsTable[80] = 577; // 'state 1' -> @par-gen.EOF -> reduce (target=32, len=1) -> 'action 115'
actionsTable[192] = 579; // 'state 3' -> CHARACTER -> reduce (target=33, len=1) -> 'action 116'
actionsTable[193] = 579; // 'state 3' -> HEX_NUMBER -> reduce (target=33, len=1) -> 'action 117'
actionsTable[194] = 579; // 'state 3' -> CONTROL_CHARACTER -> reduce (target=33, len=1) -> 'action 118'
actionsTable[195] = 579; // 'state 3' -> BACKSLASH -> reduce (target=33, len=1) -> 'action 119'
actionsTable[196] = 579; // 'state 3' -> X -> reduce (target=33, len=1) -> 'action 120'
actionsTable[197] = 579; // 'state 3' -> B -> reduce (target=33, len=1) -> 'action 121'
actionsTable[198] = 579; // 'state 3' -> F -> reduce (target=33, len=1) -> 'action 122'
actionsTable[199] = 579; // 'state 3' -> CARET -> reduce (target=33, len=1) -> 'action 123'
actionsTable[200] = 579; // 'state 3' -> DASH -> reduce (target=33, len=1) -> 'action 124'
actionsTable[201] = 579; // 'state 3' -> DOT -> reduce (target=33, len=1) -> 'action 125'
actionsTable[202] = 579; // 'state 3' -> UNION -> reduce (target=33, len=1) -> 'action 126'
actionsTable[203] = 579; // 'state 3' -> PAREN_OPEN -> reduce (target=33, len=1) -> 'action 127'
actionsTable[204] = 579; // 'state 3' -> PAREN_CLOSE -> reduce (target=33, len=1) -> 'action 128'
actionsTable[205] = 579; // 'state 3' -> QUANTIFIER -> reduce (target=33, len=1) -> 'action 129'
actionsTable[206] = 579; // 'state 3' -> BRACKET_OPEN -> reduce (target=33, len=1) -> 'action 130'
actionsTable[207] = 579; // 'state 3' -> BRACKET_CLOSE -> reduce (target=33, len=1) -> 'action 131'
actionsTable[208] = 579; // 'state 3' -> @par-gen.EOF -> reduce (target=33, len=1) -> 'action 132'
actionsTable[128] = 575; // 'state 2' -> CHARACTER -> reduce (target=31, len=1) -> 'action 133'
actionsTable[129] = 575; // 'state 2' -> HEX_NUMBER -> reduce (target=31, len=1) -> 'action 134'
actionsTable[130] = 575; // 'state 2' -> CONTROL_CHARACTER -> reduce (target=31, len=1) -> 'action 135'
actionsTable[131] = 575; // 'state 2' -> BACKSLASH -> reduce (target=31, len=1) -> 'action 136'
actionsTable[132] = 575; // 'state 2' -> X -> reduce (target=31, len=1) -> 'action 137'
actionsTable[133] = 575; // 'state 2' -> B -> reduce (target=31, len=1) -> 'action 138'
actionsTable[134] = 575; // 'state 2' -> F -> reduce (target=31, len=1) -> 'action 139'
actionsTable[135] = 575; // 'state 2' -> CARET -> reduce (target=31, len=1) -> 'action 140'
actionsTable[136] = 575; // 'state 2' -> DASH -> reduce (target=31, len=1) -> 'action 141'
actionsTable[137] = 575; // 'state 2' -> DOT -> reduce (target=31, len=1) -> 'action 142'
actionsTable[138] = 575; // 'state 2' -> UNION -> reduce (target=31, len=1) -> 'action 143'
actionsTable[139] = 575; // 'state 2' -> PAREN_OPEN -> reduce (target=31, len=1) -> 'action 144'
actionsTable[140] = 575; // 'state 2' -> PAREN_CLOSE -> reduce (target=31, len=1) -> 'action 145'
actionsTable[141] = 575; // 'state 2' -> QUANTIFIER -> reduce (target=31, len=1) -> 'action 146'
actionsTable[142] = 575; // 'state 2' -> BRACKET_OPEN -> reduce (target=31, len=1) -> 'action 147'
actionsTable[143] = 575; // 'state 2' -> BRACKET_CLOSE -> reduce (target=31, len=1) -> 'action 148'
actionsTable[144] = 575; // 'state 2' -> @par-gen.EOF -> reduce (target=31, len=1) -> 'action 149'
actionsTable[832] = 2; // 'state 13' -> CHARACTER -> shift (target=1, len=0) -> 'action 150'
actionsTable[833] = 4; // 'state 13' -> HEX_NUMBER -> shift (target=2, len=0) -> 'action 151'
actionsTable[834] = 6; // 'state 13' -> CONTROL_CHARACTER -> shift (target=3, len=0) -> 'action 152'
actionsTable[835] = 8; // 'state 13' -> BACKSLASH -> shift (target=4, len=0) -> 'action 153'
actionsTable[836] = 2; // 'state 13' -> X -> shift (target=1, len=0) -> 'action 154'
actionsTable[837] = 4; // 'state 13' -> B -> shift (target=2, len=0) -> 'action 155'
actionsTable[838] = 4; // 'state 13' -> F -> shift (target=2, len=0) -> 'action 156'
actionsTable[839] = 10; // 'state 13' -> CARET -> shift (target=5, len=0) -> 'action 157'
actionsTable[840] = 10; // 'state 13' -> DASH -> shift (target=5, len=0) -> 'action 158'
actionsTable[841] = 12; // 'state 13' -> DOT -> shift (target=6, len=0) -> 'action 159'
actionsTable[843] = 14; // 'state 13' -> PAREN_OPEN -> shift (target=7, len=0) -> 'action 160'
actionsTable[846] = 16; // 'state 13' -> BRACKET_OPEN -> shift (target=8, len=0) -> 'action 161'
actionsTable[842] = 1067; // 'state 13' -> UNION -> reduce (target=21, len=2) -> 'action 162'
actionsTable[844] = 1067; // 'state 13' -> PAREN_CLOSE -> reduce (target=21, len=2) -> 'action 163'
actionsTable[848] = 1067; // 'state 13' -> @par-gen.EOF -> reduce (target=21, len=2) -> 'action 164'
actionsTable[896] = 1069; // 'state 14' -> CHARACTER -> reduce (target=22, len=2) -> 'action 165'
actionsTable[897] = 1069; // 'state 14' -> HEX_NUMBER -> reduce (target=22, len=2) -> 'action 166'
actionsTable[898] = 1069; // 'state 14' -> CONTROL_CHARACTER -> reduce (target=22, len=2) -> 'action 167'
actionsTable[899] = 1069; // 'state 14' -> BACKSLASH -> reduce (target=22, len=2) -> 'action 168'
actionsTable[900] = 1069; // 'state 14' -> X -> reduce (target=22, len=2) -> 'action 169'
actionsTable[901] = 1069; // 'state 14' -> B -> reduce (target=22, len=2) -> 'action 170'
actionsTable[902] = 1069; // 'state 14' -> F -> reduce (target=22, len=2) -> 'action 171'
actionsTable[903] = 1069; // 'state 14' -> CARET -> reduce (target=22, len=2) -> 'action 172'
actionsTable[904] = 1069; // 'state 14' -> DASH -> reduce (target=22, len=2) -> 'action 173'
actionsTable[905] = 1069; // 'state 14' -> DOT -> reduce (target=22, len=2) -> 'action 174'
actionsTable[906] = 1069; // 'state 14' -> UNION -> reduce (target=22, len=2) -> 'action 175'
actionsTable[907] = 1069; // 'state 14' -> PAREN_OPEN -> reduce (target=22, len=2) -> 'action 176'
actionsTable[908] = 1069; // 'state 14' -> PAREN_CLOSE -> reduce (target=22, len=2) -> 'action 177'
actionsTable[910] = 1069; // 'state 14' -> BRACKET_OPEN -> reduce (target=22, len=2) -> 'action 178'
actionsTable[912] = 1069; // 'state 14' -> @par-gen.EOF -> reduce (target=22, len=2) -> 'action 179'
actionsTable[960] = 1071; // 'state 15' -> CHARACTER -> reduce (target=23, len=2) -> 'action 180'
actionsTable[961] = 1071; // 'state 15' -> HEX_NUMBER -> reduce (target=23, len=2) -> 'action 181'
actionsTable[962] = 1071; // 'state 15' -> CONTROL_CHARACTER -> reduce (target=23, len=2) -> 'action 182'
actionsTable[963] = 1071; // 'state 15' -> BACKSLASH -> reduce (target=23, len=2) -> 'action 183'
actionsTable[964] = 1071; // 'state 15' -> X -> reduce (target=23, len=2) -> 'action 184'
actionsTable[965] = 1071; // 'state 15' -> B -> reduce (target=23, len=2) -> 'action 185'
actionsTable[966] = 1071; // 'state 15' -> F -> reduce (target=23, len=2) -> 'action 186'
actionsTable[967] = 1071; // 'state 15' -> CARET -> reduce (target=23, len=2) -> 'action 187'
actionsTable[968] = 1071; // 'state 15' -> DASH -> reduce (target=23, len=2) -> 'action 188'
actionsTable[969] = 1071; // 'state 15' -> DOT -> reduce (target=23, len=2) -> 'action 189'
actionsTable[970] = 1071; // 'state 15' -> UNION -> reduce (target=23, len=2) -> 'action 190'
actionsTable[971] = 1071; // 'state 15' -> PAREN_OPEN -> reduce (target=23, len=2) -> 'action 191'
actionsTable[972] = 1071; // 'state 15' -> PAREN_CLOSE -> reduce (target=23, len=2) -> 'action 192'
actionsTable[974] = 1071; // 'state 15' -> BRACKET_OPEN -> reduce (target=23, len=2) -> 'action 193'
actionsTable[976] = 1071; // 'state 15' -> @par-gen.EOF -> reduce (target=23, len=2) -> 'action 194'
actionsTable[1152] = 1083; // 'state 18' -> CHARACTER -> reduce (target=29, len=2) -> 'action 195'
actionsTable[1153] = 1083; // 'state 18' -> HEX_NUMBER -> reduce (target=29, len=2) -> 'action 196'
actionsTable[1154] = 1083; // 'state 18' -> CONTROL_CHARACTER -> reduce (target=29, len=2) -> 'action 197'
actionsTable[1155] = 1083; // 'state 18' -> BACKSLASH -> reduce (target=29, len=2) -> 'action 198'
actionsTable[1156] = 1083; // 'state 18' -> X -> reduce (target=29, len=2) -> 'action 199'
actionsTable[1157] = 1083; // 'state 18' -> B -> reduce (target=29, len=2) -> 'action 200'
actionsTable[1158] = 1083; // 'state 18' -> F -> reduce (target=29, len=2) -> 'action 201'
actionsTable[1159] = 1083; // 'state 18' -> CARET -> reduce (target=29, len=2) -> 'action 202'
actionsTable[1160] = 1083; // 'state 18' -> DASH -> reduce (target=29, len=2) -> 'action 203'
actionsTable[1161] = 1083; // 'state 18' -> DOT -> reduce (target=29, len=2) -> 'action 204'
actionsTable[1162] = 1083; // 'state 18' -> UNION -> reduce (target=29, len=2) -> 'action 205'
actionsTable[1163] = 1083; // 'state 18' -> PAREN_OPEN -> reduce (target=29, len=2) -> 'action 206'
actionsTable[1164] = 1083; // 'state 18' -> PAREN_CLOSE -> reduce (target=29, len=2) -> 'action 207'
actionsTable[1165] = 1083; // 'state 18' -> QUANTIFIER -> reduce (target=29, len=2) -> 'action 208'
actionsTable[1166] = 1083; // 'state 18' -> BRACKET_OPEN -> reduce (target=29, len=2) -> 'action 209'
actionsTable[1168] = 1083; // 'state 18' -> @par-gen.EOF -> reduce (target=29, len=2) -> 'action 210'
actionsTable[1024] = 581; // 'state 16' -> CHARACTER -> reduce (target=34, len=1) -> 'action 211'
actionsTable[1025] = 581; // 'state 16' -> HEX_NUMBER -> reduce (target=34, len=1) -> 'action 212'
actionsTable[1026] = 581; // 'state 16' -> CONTROL_CHARACTER -> reduce (target=34, len=1) -> 'action 213'
actionsTable[1027] = 581; // 'state 16' -> BACKSLASH -> reduce (target=34, len=1) -> 'action 214'
actionsTable[1028] = 581; // 'state 16' -> X -> reduce (target=34, len=1) -> 'action 215'
actionsTable[1029] = 581; // 'state 16' -> B -> reduce (target=34, len=1) -> 'action 216'
actionsTable[1030] = 581; // 'state 16' -> F -> reduce (target=34, len=1) -> 'action 217'
actionsTable[1031] = 581; // 'state 16' -> CARET -> reduce (target=34, len=1) -> 'action 218'
actionsTable[1032] = 581; // 'state 16' -> DASH -> reduce (target=34, len=1) -> 'action 219'
actionsTable[1033] = 581; // 'state 16' -> DOT -> reduce (target=34, len=1) -> 'action 220'
actionsTable[1034] = 581; // 'state 16' -> UNION -> reduce (target=34, len=1) -> 'action 221'
actionsTable[1035] = 581; // 'state 16' -> PAREN_OPEN -> reduce (target=34, len=1) -> 'action 222'
actionsTable[1036] = 581; // 'state 16' -> PAREN_CLOSE -> reduce (target=34, len=1) -> 'action 223'
actionsTable[1037] = 581; // 'state 16' -> QUANTIFIER -> reduce (target=34, len=1) -> 'action 224'
actionsTable[1038] = 581; // 'state 16' -> BRACKET_OPEN -> reduce (target=34, len=1) -> 'action 225'
actionsTable[1039] = 581; // 'state 16' -> BRACKET_CLOSE -> reduce (target=34, len=1) -> 'action 226'
actionsTable[1040] = 581; // 'state 16' -> @par-gen.EOF -> reduce (target=34, len=1) -> 'action 227'
actionsTable[1089] = 4; // 'state 17' -> HEX_NUMBER -> shift (target=2, len=0) -> 'action 228'
actionsTable[1093] = 4; // 'state 17' -> B -> shift (target=2, len=0) -> 'action 229'
actionsTable[1094] = 4; // 'state 17' -> F -> shift (target=2, len=0) -> 'action 230'
actionsTable[1226] = 26; // 'state 19' -> UNION -> shift (target=13, len=0) -> 'action 231'
actionsTable[1228] = 58; // 'state 19' -> PAREN_CLOSE -> shift (target=29, len=0) -> 'action 232'
actionsTable[1280] = 2; // 'state 20' -> CHARACTER -> shift (target=1, len=0) -> 'action 233'
actionsTable[1281] = 4; // 'state 20' -> HEX_NUMBER -> shift (target=2, len=0) -> 'action 234'
actionsTable[1282] = 6; // 'state 20' -> CONTROL_CHARACTER -> shift (target=3, len=0) -> 'action 235'
actionsTable[1283] = 8; // 'state 20' -> BACKSLASH -> shift (target=4, len=0) -> 'action 236'
actionsTable[1284] = 2; // 'state 20' -> X -> shift (target=1, len=0) -> 'action 237'
actionsTable[1285] = 4; // 'state 20' -> B -> shift (target=2, len=0) -> 'action 238'
actionsTable[1286] = 4; // 'state 20' -> F -> shift (target=2, len=0) -> 'action 239'
actionsTable[1287] = 10; // 'state 20' -> CARET -> shift (target=5, len=0) -> 'action 240'
actionsTable[1288] = 10; // 'state 20' -> DASH -> shift (target=5, len=0) -> 'action 241'
actionsTable[1289] = 12; // 'state 20' -> DOT -> shift (target=6, len=0) -> 'action 242'
actionsTable[1290] = 26; // 'state 20' -> UNION -> shift (target=13, len=0) -> 'action 243'
actionsTable[1291] = 14; // 'state 20' -> PAREN_OPEN -> shift (target=7, len=0) -> 'action 244'
actionsTable[1292] = 58; // 'state 20' -> PAREN_CLOSE -> shift (target=29, len=0) -> 'action 245'
actionsTable[1294] = 16; // 'state 20' -> BRACKET_OPEN -> shift (target=8, len=0) -> 'action 246'
actionsTable[1536] = 2; // 'state 24' -> CHARACTER -> shift (target=1, len=0) -> 'action 247'
actionsTable[1537] = 4; // 'state 24' -> HEX_NUMBER -> shift (target=2, len=0) -> 'action 248'
actionsTable[1538] = 6; // 'state 24' -> CONTROL_CHARACTER -> shift (target=3, len=0) -> 'action 249'
actionsTable[1539] = 42; // 'state 24' -> BACKSLASH -> shift (target=21, len=0) -> 'action 250'
actionsTable[1540] = 2; // 'state 24' -> X -> shift (target=1, len=0) -> 'action 251'
actionsTable[1541] = 4; // 'state 24' -> B -> shift (target=2, len=0) -> 'action 252'
actionsTable[1542] = 4; // 'state 24' -> F -> shift (target=2, len=0) -> 'action 253'
actionsTable[1545] = 46; // 'state 24' -> DOT -> shift (target=23, len=0) -> 'action 254'
actionsTable[1546] = 46; // 'state 24' -> UNION -> shift (target=23, len=0) -> 'action 255'
actionsTable[1547] = 46; // 'state 24' -> PAREN_OPEN -> shift (target=23, len=0) -> 'action 256'
actionsTable[1548] = 46; // 'state 24' -> PAREN_CLOSE -> shift (target=23, len=0) -> 'action 257'
actionsTable[1549] = 46; // 'state 24' -> QUANTIFIER -> shift (target=23, len=0) -> 'action 258'
actionsTable[1551] = 60; // 'state 24' -> BRACKET_CLOSE -> shift (target=30, len=0) -> 'action 259'
actionsTable[1600] = 565; // 'state 25' -> CHARACTER -> reduce (target=26, len=1) -> 'action 260'
actionsTable[1601] = 565; // 'state 25' -> HEX_NUMBER -> reduce (target=26, len=1) -> 'action 261'
actionsTable[1602] = 565; // 'state 25' -> CONTROL_CHARACTER -> reduce (target=26, len=1) -> 'action 262'
actionsTable[1603] = 565; // 'state 25' -> BACKSLASH -> reduce (target=26, len=1) -> 'action 263'
actionsTable[1604] = 565; // 'state 25' -> X -> reduce (target=26, len=1) -> 'action 264'
actionsTable[1605] = 565; // 'state 25' -> B -> reduce (target=26, len=1) -> 'action 265'
actionsTable[1606] = 565; // 'state 25' -> F -> reduce (target=26, len=1) -> 'action 266'
actionsTable[1609] = 565; // 'state 25' -> DOT -> reduce (target=26, len=1) -> 'action 267'
actionsTable[1610] = 565; // 'state 25' -> UNION -> reduce (target=26, len=1) -> 'action 268'
actionsTable[1611] = 565; // 'state 25' -> PAREN_OPEN -> reduce (target=26, len=1) -> 'action 269'
actionsTable[1612] = 565; // 'state 25' -> PAREN_CLOSE -> reduce (target=26, len=1) -> 'action 270'
actionsTable[1613] = 565; // 'state 25' -> QUANTIFIER -> reduce (target=26, len=1) -> 'action 271'
actionsTable[1615] = 565; // 'state 25' -> BRACKET_CLOSE -> reduce (target=26, len=1) -> 'action 272'
actionsTable[1672] = 64; // 'state 26' -> DASH -> shift (target=32, len=0) -> 'action 273'
actionsTable[1664] = 567; // 'state 26' -> CHARACTER -> reduce (target=27, len=1) -> 'action 274'
actionsTable[1665] = 567; // 'state 26' -> HEX_NUMBER -> reduce (target=27, len=1) -> 'action 275'
actionsTable[1666] = 567; // 'state 26' -> CONTROL_CHARACTER -> reduce (target=27, len=1) -> 'action 276'
actionsTable[1667] = 567; // 'state 26' -> BACKSLASH -> reduce (target=27, len=1) -> 'action 277'
actionsTable[1668] = 567; // 'state 26' -> X -> reduce (target=27, len=1) -> 'action 278'
actionsTable[1669] = 567; // 'state 26' -> B -> reduce (target=27, len=1) -> 'action 279'
actionsTable[1670] = 567; // 'state 26' -> F -> reduce (target=27, len=1) -> 'action 280'
actionsTable[1673] = 567; // 'state 26' -> DOT -> reduce (target=27, len=1) -> 'action 281'
actionsTable[1674] = 567; // 'state 26' -> UNION -> reduce (target=27, len=1) -> 'action 282'
actionsTable[1675] = 567; // 'state 26' -> PAREN_OPEN -> reduce (target=27, len=1) -> 'action 283'
actionsTable[1676] = 567; // 'state 26' -> PAREN_CLOSE -> reduce (target=27, len=1) -> 'action 284'
actionsTable[1677] = 567; // 'state 26' -> QUANTIFIER -> reduce (target=27, len=1) -> 'action 285'
actionsTable[1679] = 567; // 'state 26' -> BRACKET_CLOSE -> reduce (target=27, len=1) -> 'action 286'
actionsTable[1346] = 6; // 'state 21' -> CONTROL_CHARACTER -> shift (target=3, len=0) -> 'action 287'
actionsTable[1347] = 32; // 'state 21' -> BACKSLASH -> shift (target=16, len=0) -> 'action 288'
actionsTable[1348] = 34; // 'state 21' -> X -> shift (target=17, len=0) -> 'action 289'
actionsTable[1349] = 6; // 'state 21' -> B -> shift (target=3, len=0) -> 'action 290'
actionsTable[1350] = 6; // 'state 21' -> F -> shift (target=3, len=0) -> 'action 291'
actionsTable[1351] = 66; // 'state 21' -> CARET -> shift (target=33, len=0) -> 'action 292'
actionsTable[1352] = 66; // 'state 21' -> DASH -> shift (target=33, len=0) -> 'action 293'
actionsTable[1353] = 32; // 'state 21' -> DOT -> shift (target=16, len=0) -> 'action 294'
actionsTable[1354] = 32; // 'state 21' -> UNION -> shift (target=16, len=0) -> 'action 295'
actionsTable[1355] = 32; // 'state 21' -> PAREN_OPEN -> shift (target=16, len=0) -> 'action 296'
actionsTable[1356] = 32; // 'state 21' -> PAREN_CLOSE -> shift (target=16, len=0) -> 'action 297'
actionsTable[1357] = 32; // 'state 21' -> QUANTIFIER -> shift (target=16, len=0) -> 'action 298'
actionsTable[1358] = 32; // 'state 21' -> BRACKET_OPEN -> shift (target=16, len=0) -> 'action 299'
actionsTable[1359] = 32; // 'state 21' -> BRACKET_CLOSE -> shift (target=16, len=0) -> 'action 300'
actionsTable[1472] = 567; // 'state 23' -> CHARACTER -> reduce (target=27, len=1) -> 'action 301'
actionsTable[1473] = 567; // 'state 23' -> HEX_NUMBER -> reduce (target=27, len=1) -> 'action 302'
actionsTable[1474] = 567; // 'state 23' -> CONTROL_CHARACTER -> reduce (target=27, len=1) -> 'action 303'
actionsTable[1475] = 567; // 'state 23' -> BACKSLASH -> reduce (target=27, len=1) -> 'action 304'
actionsTable[1476] = 567; // 'state 23' -> X -> reduce (target=27, len=1) -> 'action 305'
actionsTable[1477] = 567; // 'state 23' -> B -> reduce (target=27, len=1) -> 'action 306'
actionsTable[1478] = 567; // 'state 23' -> F -> reduce (target=27, len=1) -> 'action 307'
actionsTable[1481] = 567; // 'state 23' -> DOT -> reduce (target=27, len=1) -> 'action 308'
actionsTable[1482] = 567; // 'state 23' -> UNION -> reduce (target=27, len=1) -> 'action 309'
actionsTable[1483] = 567; // 'state 23' -> PAREN_OPEN -> reduce (target=27, len=1) -> 'action 310'
actionsTable[1484] = 567; // 'state 23' -> PAREN_CLOSE -> reduce (target=27, len=1) -> 'action 311'
actionsTable[1485] = 567; // 'state 23' -> QUANTIFIER -> reduce (target=27, len=1) -> 'action 312'
actionsTable[1487] = 567; // 'state 23' -> BRACKET_CLOSE -> reduce (target=27, len=1) -> 'action 313'
actionsTable[1408] = 2; // 'state 22' -> CHARACTER -> shift (target=1, len=0) -> 'action 314'
actionsTable[1409] = 4; // 'state 22' -> HEX_NUMBER -> shift (target=2, len=0) -> 'action 315'
actionsTable[1410] = 6; // 'state 22' -> CONTROL_CHARACTER -> shift (target=3, len=0) -> 'action 316'
actionsTable[1411] = 42; // 'state 22' -> BACKSLASH -> shift (target=21, len=0) -> 'action 317'
actionsTable[1412] = 2; // 'state 22' -> X -> shift (target=1, len=0) -> 'action 318'
actionsTable[1413] = 4; // 'state 22' -> B -> shift (target=2, len=0) -> 'action 319'
actionsTable[1414] = 4; // 'state 22' -> F -> shift (target=2, len=0) -> 'action 320'
actionsTable[1417] = 46; // 'state 22' -> DOT -> shift (target=23, len=0) -> 'action 321'
actionsTable[1418] = 46; // 'state 22' -> UNION -> shift (target=23, len=0) -> 'action 322'
actionsTable[1419] = 46; // 'state 22' -> PAREN_OPEN -> shift (target=23, len=0) -> 'action 323'
actionsTable[1420] = 46; // 'state 22' -> PAREN_CLOSE -> shift (target=23, len=0) -> 'action 324'
actionsTable[1421] = 46; // 'state 22' -> QUANTIFIER -> shift (target=23, len=0) -> 'action 325'
actionsTable[1728] = 2; // 'state 27' -> CHARACTER -> shift (target=1, len=0) -> 'action 326'
actionsTable[1729] = 4; // 'state 27' -> HEX_NUMBER -> shift (target=2, len=0) -> 'action 327'
actionsTable[1730] = 6; // 'state 27' -> CONTROL_CHARACTER -> shift (target=3, len=0) -> 'action 328'
actionsTable[1731] = 8; // 'state 27' -> BACKSLASH -> shift (target=4, len=0) -> 'action 329'
actionsTable[1732] = 2; // 'state 27' -> X -> shift (target=1, len=0) -> 'action 330'
actionsTable[1733] = 4; // 'state 27' -> B -> shift (target=2, len=0) -> 'action 331'
actionsTable[1734] = 4; // 'state 27' -> F -> shift (target=2, len=0) -> 'action 332'
actionsTable[1735] = 10; // 'state 27' -> CARET -> shift (target=5, len=0) -> 'action 333'
actionsTable[1736] = 10; // 'state 27' -> DASH -> shift (target=5, len=0) -> 'action 334'
actionsTable[1737] = 12; // 'state 27' -> DOT -> shift (target=6, len=0) -> 'action 335'
actionsTable[1739] = 14; // 'state 27' -> PAREN_OPEN -> shift (target=7, len=0) -> 'action 336'
actionsTable[1742] = 16; // 'state 27' -> BRACKET_OPEN -> shift (target=8, len=0) -> 'action 337'
actionsTable[1738] = 1579; // 'state 27' -> UNION -> reduce (target=21, len=3) -> 'action 338'
actionsTable[1740] = 1579; // 'state 27' -> PAREN_CLOSE -> reduce (target=21, len=3) -> 'action 339'
actionsTable[1744] = 1579; // 'state 27' -> @par-gen.EOF -> reduce (target=21, len=3) -> 'action 340'
actionsTable[1793] = 4; // 'state 28' -> HEX_NUMBER -> shift (target=2, len=0) -> 'action 341'
actionsTable[1797] = 4; // 'state 28' -> B -> shift (target=2, len=0) -> 'action 342'
actionsTable[1798] = 4; // 'state 28' -> F -> shift (target=2, len=0) -> 'action 343'
actionsTable[1856] = 1585; // 'state 29' -> CHARACTER -> reduce (target=24, len=3) -> 'action 344'
actionsTable[1857] = 1585; // 'state 29' -> HEX_NUMBER -> reduce (target=24, len=3) -> 'action 345'
actionsTable[1858] = 1585; // 'state 29' -> CONTROL_CHARACTER -> reduce (target=24, len=3) -> 'action 346'
actionsTable[1859] = 1585; // 'state 29' -> BACKSLASH -> reduce (target=24, len=3) -> 'action 347'
actionsTable[1860] = 1585; // 'state 29' -> X -> reduce (target=24, len=3) -> 'action 348'
actionsTable[1861] = 1585; // 'state 29' -> B -> reduce (target=24, len=3) -> 'action 349'
actionsTable[1862] = 1585; // 'state 29' -> F -> reduce (target=24, len=3) -> 'action 350'
actionsTable[1863] = 1585; // 'state 29' -> CARET -> reduce (target=24, len=3) -> 'action 351'
actionsTable[1864] = 1585; // 'state 29' -> DASH -> reduce (target=24, len=3) -> 'action 352'
actionsTable[1865] = 1585; // 'state 29' -> DOT -> reduce (target=24, len=3) -> 'action 353'
actionsTable[1866] = 1585; // 'state 29' -> UNION -> reduce (target=24, len=3) -> 'action 354'
actionsTable[1867] = 1585; // 'state 29' -> PAREN_OPEN -> reduce (target=24, len=3) -> 'action 355'
actionsTable[1868] = 1585; // 'state 29' -> PAREN_CLOSE -> reduce (target=24, len=3) -> 'action 356'
actionsTable[1869] = 1585; // 'state 29' -> QUANTIFIER -> reduce (target=24, len=3) -> 'action 357'
actionsTable[1870] = 1585; // 'state 29' -> BRACKET_OPEN -> reduce (target=24, len=3) -> 'action 358'
actionsTable[1872] = 1585; // 'state 29' -> @par-gen.EOF -> reduce (target=24, len=3) -> 'action 359'
actionsTable[1920] = 1587; // 'state 30' -> CHARACTER -> reduce (target=25, len=3) -> 'action 360'
actionsTable[1921] = 1587; // 'state 30' -> HEX_NUMBER -> reduce (target=25, len=3) -> 'action 361'
actionsTable[1922] = 1587; // 'state 30' -> CONTROL_CHARACTER -> reduce (target=25, len=3) -> 'action 362'
actionsTable[1923] = 1587; // 'state 30' -> BACKSLASH -> reduce (target=25, len=3) -> 'action 363'
actionsTable[1924] = 1587; // 'state 30' -> X -> reduce (target=25, len=3) -> 'action 364'
actionsTable[1925] = 1587; // 'state 30' -> B -> reduce (target=25, len=3) -> 'action 365'
actionsTable[1926] = 1587; // 'state 30' -> F -> reduce (target=25, len=3) -> 'action 366'
actionsTable[1927] = 1587; // 'state 30' -> CARET -> reduce (target=25, len=3) -> 'action 367'
actionsTable[1928] = 1587; // 'state 30' -> DASH -> reduce (target=25, len=3) -> 'action 368'
actionsTable[1929] = 1587; // 'state 30' -> DOT -> reduce (target=25, len=3) -> 'action 369'
actionsTable[1930] = 1587; // 'state 30' -> UNION -> reduce (target=25, len=3) -> 'action 370'
actionsTable[1931] = 1587; // 'state 30' -> PAREN_OPEN -> reduce (target=25, len=3) -> 'action 371'
actionsTable[1932] = 1587; // 'state 30' -> PAREN_CLOSE -> reduce (target=25, len=3) -> 'action 372'
actionsTable[1933] = 1587; // 'state 30' -> QUANTIFIER -> reduce (target=25, len=3) -> 'action 373'
actionsTable[1934] = 1587; // 'state 30' -> BRACKET_OPEN -> reduce (target=25, len=3) -> 'action 374'
actionsTable[1936] = 1587; // 'state 30' -> @par-gen.EOF -> reduce (target=25, len=3) -> 'action 375'
actionsTable[1984] = 1077; // 'state 31' -> CHARACTER -> reduce (target=26, len=2) -> 'action 376'
actionsTable[1985] = 1077; // 'state 31' -> HEX_NUMBER -> reduce (target=26, len=2) -> 'action 377'
actionsTable[1986] = 1077; // 'state 31' -> CONTROL_CHARACTER -> reduce (target=26, len=2) -> 'action 378'
actionsTable[1987] = 1077; // 'state 31' -> BACKSLASH -> reduce (target=26, len=2) -> 'action 379'
actionsTable[1988] = 1077; // 'state 31' -> X -> reduce (target=26, len=2) -> 'action 380'
actionsTable[1989] = 1077; // 'state 31' -> B -> reduce (target=26, len=2) -> 'action 381'
actionsTable[1990] = 1077; // 'state 31' -> F -> reduce (target=26, len=2) -> 'action 382'
actionsTable[1993] = 1077; // 'state 31' -> DOT -> reduce (target=26, len=2) -> 'action 383'
actionsTable[1994] = 1077; // 'state 31' -> UNION -> reduce (target=26, len=2) -> 'action 384'
actionsTable[1995] = 1077; // 'state 31' -> PAREN_OPEN -> reduce (target=26, len=2) -> 'action 385'
actionsTable[1996] = 1077; // 'state 31' -> PAREN_CLOSE -> reduce (target=26, len=2) -> 'action 386'
actionsTable[1997] = 1077; // 'state 31' -> QUANTIFIER -> reduce (target=26, len=2) -> 'action 387'
actionsTable[1999] = 1077; // 'state 31' -> BRACKET_CLOSE -> reduce (target=26, len=2) -> 'action 388'
actionsTable[2048] = 2; // 'state 32' -> CHARACTER -> shift (target=1, len=0) -> 'action 389'
actionsTable[2049] = 4; // 'state 32' -> HEX_NUMBER -> shift (target=2, len=0) -> 'action 390'
actionsTable[2050] = 6; // 'state 32' -> CONTROL_CHARACTER -> shift (target=3, len=0) -> 'action 391'
actionsTable[2051] = 72; // 'state 32' -> BACKSLASH -> shift (target=36, len=0) -> 'action 392'
actionsTable[2052] = 2; // 'state 32' -> X -> shift (target=1, len=0) -> 'action 393'
actionsTable[2053] = 4; // 'state 32' -> B -> shift (target=2, len=0) -> 'action 394'
actionsTable[2054] = 4; // 'state 32' -> F -> shift (target=2, len=0) -> 'action 395'
actionsTable[2112] = 1079; // 'state 33' -> CHARACTER -> reduce (target=27, len=2) -> 'action 396'
actionsTable[2113] = 1079; // 'state 33' -> HEX_NUMBER -> reduce (target=27, len=2) -> 'action 397'
actionsTable[2114] = 1079; // 'state 33' -> CONTROL_CHARACTER -> reduce (target=27, len=2) -> 'action 398'
actionsTable[2115] = 1079; // 'state 33' -> BACKSLASH -> reduce (target=27, len=2) -> 'action 399'
actionsTable[2116] = 1079; // 'state 33' -> X -> reduce (target=27, len=2) -> 'action 400'
actionsTable[2117] = 1079; // 'state 33' -> B -> reduce (target=27, len=2) -> 'action 401'
actionsTable[2118] = 1079; // 'state 33' -> F -> reduce (target=27, len=2) -> 'action 402'
actionsTable[2121] = 1079; // 'state 33' -> DOT -> reduce (target=27, len=2) -> 'action 403'
actionsTable[2122] = 1079; // 'state 33' -> UNION -> reduce (target=27, len=2) -> 'action 404'
actionsTable[2123] = 1079; // 'state 33' -> PAREN_OPEN -> reduce (target=27, len=2) -> 'action 405'
actionsTable[2124] = 1079; // 'state 33' -> PAREN_CLOSE -> reduce (target=27, len=2) -> 'action 406'
actionsTable[2125] = 1079; // 'state 33' -> QUANTIFIER -> reduce (target=27, len=2) -> 'action 407'
actionsTable[2127] = 1079; // 'state 33' -> BRACKET_CLOSE -> reduce (target=27, len=2) -> 'action 408'
actionsTable[2176] = 2; // 'state 34' -> CHARACTER -> shift (target=1, len=0) -> 'action 409'
actionsTable[2177] = 4; // 'state 34' -> HEX_NUMBER -> shift (target=2, len=0) -> 'action 410'
actionsTable[2178] = 6; // 'state 34' -> CONTROL_CHARACTER -> shift (target=3, len=0) -> 'action 411'
actionsTable[2179] = 42; // 'state 34' -> BACKSLASH -> shift (target=21, len=0) -> 'action 412'
actionsTable[2180] = 2; // 'state 34' -> X -> shift (target=1, len=0) -> 'action 413'
actionsTable[2181] = 4; // 'state 34' -> B -> shift (target=2, len=0) -> 'action 414'
actionsTable[2182] = 4; // 'state 34' -> F -> shift (target=2, len=0) -> 'action 415'
actionsTable[2185] = 46; // 'state 34' -> DOT -> shift (target=23, len=0) -> 'action 416'
actionsTable[2186] = 46; // 'state 34' -> UNION -> shift (target=23, len=0) -> 'action 417'
actionsTable[2187] = 46; // 'state 34' -> PAREN_OPEN -> shift (target=23, len=0) -> 'action 418'
actionsTable[2188] = 46; // 'state 34' -> PAREN_CLOSE -> shift (target=23, len=0) -> 'action 419'
actionsTable[2189] = 46; // 'state 34' -> QUANTIFIER -> shift (target=23, len=0) -> 'action 420'
actionsTable[2191] = 76; // 'state 34' -> BRACKET_CLOSE -> shift (target=38, len=0) -> 'action 421'
actionsTable[2240] = 2109; // 'state 35' -> CHARACTER -> reduce (target=30, len=4) -> 'action 422'
actionsTable[2241] = 2109; // 'state 35' -> HEX_NUMBER -> reduce (target=30, len=4) -> 'action 423'
actionsTable[2242] = 2109; // 'state 35' -> CONTROL_CHARACTER -> reduce (target=30, len=4) -> 'action 424'
actionsTable[2243] = 2109; // 'state 35' -> BACKSLASH -> reduce (target=30, len=4) -> 'action 425'
actionsTable[2244] = 2109; // 'state 35' -> X -> reduce (target=30, len=4) -> 'action 426'
actionsTable[2245] = 2109; // 'state 35' -> B -> reduce (target=30, len=4) -> 'action 427'
actionsTable[2246] = 2109; // 'state 35' -> F -> reduce (target=30, len=4) -> 'action 428'
actionsTable[2247] = 2109; // 'state 35' -> CARET -> reduce (target=30, len=4) -> 'action 429'
actionsTable[2248] = 2109; // 'state 35' -> DASH -> reduce (target=30, len=4) -> 'action 430'
actionsTable[2249] = 2109; // 'state 35' -> DOT -> reduce (target=30, len=4) -> 'action 431'
actionsTable[2250] = 2109; // 'state 35' -> UNION -> reduce (target=30, len=4) -> 'action 432'
actionsTable[2251] = 2109; // 'state 35' -> PAREN_OPEN -> reduce (target=30, len=4) -> 'action 433'
actionsTable[2252] = 2109; // 'state 35' -> PAREN_CLOSE -> reduce (target=30, len=4) -> 'action 434'
actionsTable[2253] = 2109; // 'state 35' -> QUANTIFIER -> reduce (target=30, len=4) -> 'action 435'
actionsTable[2254] = 2109; // 'state 35' -> BRACKET_OPEN -> reduce (target=30, len=4) -> 'action 436'
actionsTable[2255] = 2109; // 'state 35' -> BRACKET_CLOSE -> reduce (target=30, len=4) -> 'action 437'
actionsTable[2256] = 2109; // 'state 35' -> @par-gen.EOF -> reduce (target=30, len=4) -> 'action 438'
actionsTable[2368] = 1593; // 'state 37' -> CHARACTER -> reduce (target=28, len=3) -> 'action 439'
actionsTable[2369] = 1593; // 'state 37' -> HEX_NUMBER -> reduce (target=28, len=3) -> 'action 440'
actionsTable[2370] = 1593; // 'state 37' -> CONTROL_CHARACTER -> reduce (target=28, len=3) -> 'action 441'
actionsTable[2371] = 1593; // 'state 37' -> BACKSLASH -> reduce (target=28, len=3) -> 'action 442'
actionsTable[2372] = 1593; // 'state 37' -> X -> reduce (target=28, len=3) -> 'action 443'
actionsTable[2373] = 1593; // 'state 37' -> B -> reduce (target=28, len=3) -> 'action 444'
actionsTable[2374] = 1593; // 'state 37' -> F -> reduce (target=28, len=3) -> 'action 445'
actionsTable[2377] = 1593; // 'state 37' -> DOT -> reduce (target=28, len=3) -> 'action 446'
actionsTable[2378] = 1593; // 'state 37' -> UNION -> reduce (target=28, len=3) -> 'action 447'
actionsTable[2379] = 1593; // 'state 37' -> PAREN_OPEN -> reduce (target=28, len=3) -> 'action 448'
actionsTable[2380] = 1593; // 'state 37' -> PAREN_CLOSE -> reduce (target=28, len=3) -> 'action 449'
actionsTable[2381] = 1593; // 'state 37' -> QUANTIFIER -> reduce (target=28, len=3) -> 'action 450'
actionsTable[2383] = 1593; // 'state 37' -> BRACKET_CLOSE -> reduce (target=28, len=3) -> 'action 451'
actionsTable[2308] = 34; // 'state 36' -> X -> shift (target=17, len=0) -> 'action 452'
actionsTable[2432] = 2099; // 'state 38' -> CHARACTER -> reduce (target=25, len=4) -> 'action 453'
actionsTable[2433] = 2099; // 'state 38' -> HEX_NUMBER -> reduce (target=25, len=4) -> 'action 454'
actionsTable[2434] = 2099; // 'state 38' -> CONTROL_CHARACTER -> reduce (target=25, len=4) -> 'action 455'
actionsTable[2435] = 2099; // 'state 38' -> BACKSLASH -> reduce (target=25, len=4) -> 'action 456'
actionsTable[2436] = 2099; // 'state 38' -> X -> reduce (target=25, len=4) -> 'action 457'
actionsTable[2437] = 2099; // 'state 38' -> B -> reduce (target=25, len=4) -> 'action 458'
actionsTable[2438] = 2099; // 'state 38' -> F -> reduce (target=25, len=4) -> 'action 459'
actionsTable[2439] = 2099; // 'state 38' -> CARET -> reduce (target=25, len=4) -> 'action 460'
actionsTable[2440] = 2099; // 'state 38' -> DASH -> reduce (target=25, len=4) -> 'action 461'
actionsTable[2441] = 2099; // 'state 38' -> DOT -> reduce (target=25, len=4) -> 'action 462'
actionsTable[2442] = 2099; // 'state 38' -> UNION -> reduce (target=25, len=4) -> 'action 463'
actionsTable[2443] = 2099; // 'state 38' -> PAREN_OPEN -> reduce (target=25, len=4) -> 'action 464'
actionsTable[2444] = 2099; // 'state 38' -> PAREN_CLOSE -> reduce (target=25, len=4) -> 'action 465'
actionsTable[2445] = 2099; // 'state 38' -> QUANTIFIER -> reduce (target=25, len=4) -> 'action 466'
actionsTable[2446] = 2099; // 'state 38' -> BRACKET_OPEN -> reduce (target=25, len=4) -> 'action 467'
actionsTable[2448] = 2099; // 'state 38' -> @par-gen.EOF -> reduce (target=25, len=4) -> 'action 468'

const gotoTable = new Uint32Array(2496);
gotoTable[19] = 9437184; // 'state 9'
gotoTable[20] = 10485760; // 'state 10'
gotoTable[21] = 11534336; // 'state 11'
gotoTable[22] = 12582912; // 'state 12'
gotoTable[23] = 12582912; // 'state 12'
gotoTable[29] = 6291456; // 'state 6'
gotoTable[24] = 6291456; // 'state 6'
gotoTable[25] = 6291456; // 'state 6'
gotoTable[32] = 5242880; // 'state 5'
gotoTable[33] = 5242880; // 'state 5'
gotoTable[30] = 5242880; // 'state 5'
gotoTable[31] = 1048576; // 'state 1'
gotoTable[791] = 14680064; // 'state 14'
gotoTable[797] = 6291456; // 'state 6'
gotoTable[792] = 6291456; // 'state 6'
gotoTable[793] = 6291456; // 'state 6'
gotoTable[800] = 5242880; // 'state 5'
gotoTable[801] = 5242880; // 'state 5'
gotoTable[798] = 5242880; // 'state 5'
gotoTable[799] = 1048576; // 'state 1'
gotoTable[290] = 18874368; // 'state 18'
gotoTable[289] = 16777216; // 'state 16'
gotoTable[469] = 19922944; // 'state 19'
gotoTable[470] = 20971520; // 'state 20'
gotoTable[471] = 20971520; // 'state 20'
gotoTable[477] = 6291456; // 'state 6'
gotoTable[472] = 6291456; // 'state 6'
gotoTable[473] = 6291456; // 'state 6'
gotoTable[480] = 5242880; // 'state 5'
gotoTable[481] = 5242880; // 'state 5'
gotoTable[478] = 5242880; // 'state 5'
gotoTable[479] = 1048576; // 'state 1'
gotoTable[538] = 25165824; // 'state 24'
gotoTable[539] = 26214400; // 'state 25'
gotoTable[544] = 27262976; // 'state 26'
gotoTable[545] = 27262976; // 'state 26'
gotoTable[542] = 27262976; // 'state 26'
gotoTable[540] = 24117248; // 'state 23'
gotoTable[543] = 1048576; // 'state 1'
gotoTable[854] = 28311552; // 'state 27'
gotoTable[855] = 28311552; // 'state 27'
gotoTable[861] = 6291456; // 'state 6'
gotoTable[856] = 6291456; // 'state 6'
gotoTable[857] = 6291456; // 'state 6'
gotoTable[864] = 5242880; // 'state 5'
gotoTable[865] = 5242880; // 'state 5'
gotoTable[862] = 5242880; // 'state 5'
gotoTable[863] = 1048576; // 'state 1'
gotoTable[1119] = 29360128; // 'state 28'
gotoTable[1303] = 14680064; // 'state 14'
gotoTable[1309] = 6291456; // 'state 6'
gotoTable[1304] = 6291456; // 'state 6'
gotoTable[1305] = 6291456; // 'state 6'
gotoTable[1312] = 5242880; // 'state 5'
gotoTable[1313] = 5242880; // 'state 5'
gotoTable[1310] = 5242880; // 'state 5'
gotoTable[1311] = 1048576; // 'state 1'
gotoTable[1563] = 32505856; // 'state 31'
gotoTable[1568] = 27262976; // 'state 26'
gotoTable[1569] = 27262976; // 'state 26'
gotoTable[1566] = 27262976; // 'state 26'
gotoTable[1564] = 24117248; // 'state 23'
gotoTable[1567] = 1048576; // 'state 1'
gotoTable[1378] = 34603008; // 'state 33'
gotoTable[1377] = 16777216; // 'state 16'
gotoTable[1434] = 35651584; // 'state 34'
gotoTable[1435] = 26214400; // 'state 25'
gotoTable[1440] = 27262976; // 'state 26'
gotoTable[1441] = 27262976; // 'state 26'
gotoTable[1438] = 27262976; // 'state 26'
gotoTable[1436] = 24117248; // 'state 23'
gotoTable[1439] = 1048576; // 'state 1'
gotoTable[1751] = 14680064; // 'state 14'
gotoTable[1757] = 6291456; // 'state 6'
gotoTable[1752] = 6291456; // 'state 6'
gotoTable[1753] = 6291456; // 'state 6'
gotoTable[1760] = 5242880; // 'state 5'
gotoTable[1761] = 5242880; // 'state 5'
gotoTable[1758] = 5242880; // 'state 5'
gotoTable[1759] = 1048576; // 'state 1'
gotoTable[1823] = 36700160; // 'state 35'
gotoTable[2080] = 38797312; // 'state 37'
gotoTable[2079] = 1048576; // 'state 1'
gotoTable[2081] = 38797312; // 'state 37'
gotoTable[2078] = 38797312; // 'state 37'
gotoTable[2203] = 32505856; // 'state 31'
gotoTable[2208] = 27262976; // 'state 26'
gotoTable[2209] = 27262976; // 'state 26'
gotoTable[2206] = 27262976; // 'state 26'
gotoTable[2204] = 24117248; // 'state 23'
gotoTable[2207] = 1048576; // 'state 1'

const nextToken = nextTokenInitial;

/**
 * Each 32-bit stack entry packs:
 * - low 20 bits: tree pointer (tp) of the shifted/reduced CST node (up to 1,048,575 words)
 * - high 12 bits: parser state
 */
const stack = new Uint32Array(16384);

/**
 * This typed array contains the syntax tree from a parse.
 * Each CST node occupies 3 uint32 words:
 * - word 0 (tp + 0): name | (numChildren << 8)
 * - word 1 (tp + 1): end | ((end - start) << 22) (leaf) or firstChild (internal)
 * - word 2 (tp + 2): nextSibling
 * This enables 32-bit coalesced stores and fast DFS traversal on documents up to 4 MiB.
 */
const tree = new Uint32Array(524288);

const proxyHandler = {
  get(target, prop, receiver) {
    const { stream, pointer } = target;
    const word0 = tree[pointer];
    const nChildren = word0 >>> 8;

    switch (prop) {
      case "name":
        return parserSymbols[word0 & 0xff];
      case "start": {
        let p = pointer;
        while (tree[p] >>> 8 > 0) {
          p = tree[p + 1] & 0xfffff;
        }
        const span = tree[p + 1];
        return (span & 0x3fffff) - (span >>> 22);
      }
      case "end": {
        let p = pointer;
        let n = nChildren;
        while (n > 0) {
          p = tree[p + 1] & 0xfffff;
          for (let i = 1; i < n; i++) {
            p = tree[p + 2];
          }
          n = tree[p] >>> 8;
        }
        return tree[p + 1] & 0x3fffff;
      }
      case "value":
        return stream.subarray(receiver.start, receiver.end);
      case "items": {
        if (nChildren === 0) {
          return undefined;
        }

        const children = new Array(nChildren);
        let child = tree[pointer + 1] & 0xfffff;
        children[0] = createProxy(stream, child);

        for (let i = 1; i < nChildren; i++) {
          child = tree[child + 2];
          children[i] = createProxy(stream, child);
        }

        return children;
      }
      case "__tree":
        return tree;
      case "__pointer":
        return pointer;
    }
  },
  ownKeys() {
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
};

const createProxy = (stream, pointer) =>
  new Proxy({ stream, pointer }, proxyHandler);

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
  const stream = typeof input === "string" ? Buffer.from(input) : input;

  let result = nextToken(stream, 0);
  let lookahead = result.state;
  let lookaheadSpan = result.end | ((result.end - result.start) << 22);

  stack[0] = 0; // starting state
  let sp = 0;
  // let the tree stack start from offset 3
  // offset 0 means an error occurred and should be used by the parser
  let tp = 3;

  while (true) {
    const top = stack[sp];
    const currentState = top >>> 20;

    const actionLookup = actionsTable[currentState * 64 + lookahead];
    if (actionLookup >= 0xfffe) {
      if (actionLookup === 0xfffe) {
        return createProxy(stream, tp - 3);
      }
      const context = input.toString().substr(result.start, 10);
      throw new Error(
        `Unexpected lookahead ${parserSymbols[lookahead]} at '${context}'`
      );
    }

    if ((actionLookup & 1) === 0) {
      // shift

      tree[tp] = lookahead; // name (and nChildren = 0)
      tree[tp + 1] = lookaheadSpan;
      tree[(top & 0xfffff) + 2] = tp; // write the current address to the previous item as next sibling

      sp += 1;
      stack[sp] = tp | (actionLookup << 19);

      result = nextToken(stream, lookaheadSpan & 0x3fffff);
      lookahead = result.state;
      lookaheadSpan = result.end | ((result.end - result.start) << 22);
    } else {
      // reduce
      const word0 = actionLookup >>> 1;
      const actionSymbol = word0 & 0xff;
      const stackItemsToReduce = word0 >>> 8;

      sp -= stackItemsToReduce;
      tree[tp] = word0; // name and number of children

      const rtop = stack[sp];
      const nextState = gotoTable[(rtop >>> 20) * 64 + actionSymbol];
      tree[(rtop & 0xfffff) + 2] = tp; // next sibling

      sp += 1;
      tree[tp + 1] = stack[sp]; // first child
      stack[sp] = tp | nextState;
    }

    tp += 3;
  }
}

export { parse };
