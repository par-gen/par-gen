// @ts-nocheck

import { next as nextTokenInitial } from "./lexer-initial.js";

/*
      Json := Element;
Element := Value;
Element := Value WS;
Element := WS Value;
Element := WS Value WS;
Value := Object;
Value := Array;
Value := STRING;
Value := NUMBER;
Value := TRUE;
Value := FALSE;
Value := NULL;
Object := CURLY_OPEN CURLY_CLOSE;
Object := CURLY_OPEN WS CURLY_CLOSE;
Object := CURLY_OPEN Members CURLY_CLOSE;
Members := Member;
Members := Members COMMA Member;
Member := STRING COLON Element;
Member := STRING WS COLON Element;
Member := WS STRING COLON Element;
Member := WS STRING WS COLON Element;
Array := BRACKET_OPEN BRACKET_CLOSE;
Array := BRACKET_OPEN WS BRACKET_CLOSE;
Array := BRACKET_OPEN Elements BRACKET_CLOSE;
Elements := Element;
Elements := Elements COMMA Element;
      */

const parserSymbols = [
  "WS", // 0
  "TRUE", // 1
  "FALSE", // 2
  "NULL", // 3
  "CURLY_OPEN", // 4
  "CURLY_CLOSE", // 5
  "COMMA", // 6
  "COLON", // 7
  "STRING", // 8
  "BRACKET_OPEN", // 9
  "BRACKET_CLOSE", // 10
  "NUMBER", // 11
  "@par-gen.EOF", // 12
  "@par-gen.ERROR", // 13
  "S", // 14
  "Json", // 15
  "Element", // 16
  "Value", // 17
  "Object", // 18
  "Members", // 19
  "Member", // 20
  "Array", // 21
  "Elements", // 22
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

const actionsTable = new Uint16Array(2688).fill(0xffff);
actionsTable[0] = 4; // 'state 0' -> WS -> shift (target=1, len=0) -> 'action 0'
actionsTable[1] = 8; // 'state 0' -> TRUE -> shift (target=2, len=0) -> 'action 1'
actionsTable[2] = 12; // 'state 0' -> FALSE -> shift (target=3, len=0) -> 'action 2'
actionsTable[3] = 16; // 'state 0' -> NULL -> shift (target=4, len=0) -> 'action 3'
actionsTable[4] = 20; // 'state 0' -> CURLY_OPEN -> shift (target=5, len=0) -> 'action 4'
actionsTable[8] = 24; // 'state 0' -> STRING -> shift (target=6, len=0) -> 'action 5'
actionsTable[9] = 28; // 'state 0' -> BRACKET_OPEN -> shift (target=7, len=0) -> 'action 6'
actionsTable[11] = 32; // 'state 0' -> NUMBER -> shift (target=8, len=0) -> 'action 7'
actionsTable[15] = 36; // 'state 0' -> Json -> shift (target=9, len=0) -> 'action 8'
actionsTable[16] = 40; // 'state 0' -> Element -> shift (target=10, len=0) -> 'action 9'
actionsTable[17] = 44; // 'state 0' -> Value -> shift (target=11, len=0) -> 'action 10'
actionsTable[18] = 48; // 'state 0' -> Object -> shift (target=12, len=0) -> 'action 11'
actionsTable[21] = 52; // 'state 0' -> Array -> shift (target=13, len=0) -> 'action 12'
actionsTable[300] = 2; // 'state 9' -> @par-gen.EOF -> done (target=0, len=0) -> 'action 13'
actionsTable[332] = 1085; // 'state 10' -> @par-gen.EOF -> reduce (target=15, len=1) -> 'action 14'
actionsTable[352] = 56; // 'state 11' -> WS -> shift (target=14, len=0) -> 'action 15'
actionsTable[357] = 1089; // 'state 11' -> CURLY_CLOSE -> reduce (target=16, len=1) -> 'action 16'
actionsTable[358] = 1089; // 'state 11' -> COMMA -> reduce (target=16, len=1) -> 'action 17'
actionsTable[362] = 1089; // 'state 11' -> BRACKET_CLOSE -> reduce (target=16, len=1) -> 'action 18'
actionsTable[364] = 1089; // 'state 11' -> @par-gen.EOF -> reduce (target=16, len=1) -> 'action 19'
actionsTable[33] = 60; // 'state 1' -> TRUE -> shift (target=15, len=0) -> 'action 20'
actionsTable[34] = 64; // 'state 1' -> FALSE -> shift (target=16, len=0) -> 'action 21'
actionsTable[35] = 68; // 'state 1' -> NULL -> shift (target=17, len=0) -> 'action 22'
actionsTable[36] = 72; // 'state 1' -> CURLY_OPEN -> shift (target=18, len=0) -> 'action 23'
actionsTable[40] = 76; // 'state 1' -> STRING -> shift (target=19, len=0) -> 'action 24'
actionsTable[41] = 80; // 'state 1' -> BRACKET_OPEN -> shift (target=20, len=0) -> 'action 25'
actionsTable[43] = 84; // 'state 1' -> NUMBER -> shift (target=21, len=0) -> 'action 26'
actionsTable[49] = 88; // 'state 1' -> Value -> shift (target=22, len=0) -> 'action 27'
actionsTable[50] = 92; // 'state 1' -> Object -> shift (target=23, len=0) -> 'action 28'
actionsTable[53] = 96; // 'state 1' -> Array -> shift (target=24, len=0) -> 'action 29'
actionsTable[384] = 1093; // 'state 12' -> WS -> reduce (target=17, len=1) -> 'action 30'
actionsTable[389] = 1093; // 'state 12' -> CURLY_CLOSE -> reduce (target=17, len=1) -> 'action 31'
actionsTable[390] = 1093; // 'state 12' -> COMMA -> reduce (target=17, len=1) -> 'action 32'
actionsTable[394] = 1093; // 'state 12' -> BRACKET_CLOSE -> reduce (target=17, len=1) -> 'action 33'
actionsTable[396] = 1093; // 'state 12' -> @par-gen.EOF -> reduce (target=17, len=1) -> 'action 34'
actionsTable[416] = 1093; // 'state 13' -> WS -> reduce (target=17, len=1) -> 'action 35'
actionsTable[421] = 1093; // 'state 13' -> CURLY_CLOSE -> reduce (target=17, len=1) -> 'action 36'
actionsTable[422] = 1093; // 'state 13' -> COMMA -> reduce (target=17, len=1) -> 'action 37'
actionsTable[426] = 1093; // 'state 13' -> BRACKET_CLOSE -> reduce (target=17, len=1) -> 'action 38'
actionsTable[428] = 1093; // 'state 13' -> @par-gen.EOF -> reduce (target=17, len=1) -> 'action 39'
actionsTable[192] = 1093; // 'state 6' -> WS -> reduce (target=17, len=1) -> 'action 40'
actionsTable[197] = 1093; // 'state 6' -> CURLY_CLOSE -> reduce (target=17, len=1) -> 'action 41'
actionsTable[198] = 1093; // 'state 6' -> COMMA -> reduce (target=17, len=1) -> 'action 42'
actionsTable[202] = 1093; // 'state 6' -> BRACKET_CLOSE -> reduce (target=17, len=1) -> 'action 43'
actionsTable[204] = 1093; // 'state 6' -> @par-gen.EOF -> reduce (target=17, len=1) -> 'action 44'
actionsTable[256] = 1093; // 'state 8' -> WS -> reduce (target=17, len=1) -> 'action 45'
actionsTable[261] = 1093; // 'state 8' -> CURLY_CLOSE -> reduce (target=17, len=1) -> 'action 46'
actionsTable[262] = 1093; // 'state 8' -> COMMA -> reduce (target=17, len=1) -> 'action 47'
actionsTable[266] = 1093; // 'state 8' -> BRACKET_CLOSE -> reduce (target=17, len=1) -> 'action 48'
actionsTable[268] = 1093; // 'state 8' -> @par-gen.EOF -> reduce (target=17, len=1) -> 'action 49'
actionsTable[64] = 1093; // 'state 2' -> WS -> reduce (target=17, len=1) -> 'action 50'
actionsTable[69] = 1093; // 'state 2' -> CURLY_CLOSE -> reduce (target=17, len=1) -> 'action 51'
actionsTable[70] = 1093; // 'state 2' -> COMMA -> reduce (target=17, len=1) -> 'action 52'
actionsTable[74] = 1093; // 'state 2' -> BRACKET_CLOSE -> reduce (target=17, len=1) -> 'action 53'
actionsTable[76] = 1093; // 'state 2' -> @par-gen.EOF -> reduce (target=17, len=1) -> 'action 54'
actionsTable[96] = 1093; // 'state 3' -> WS -> reduce (target=17, len=1) -> 'action 55'
actionsTable[101] = 1093; // 'state 3' -> CURLY_CLOSE -> reduce (target=17, len=1) -> 'action 56'
actionsTable[102] = 1093; // 'state 3' -> COMMA -> reduce (target=17, len=1) -> 'action 57'
actionsTable[106] = 1093; // 'state 3' -> BRACKET_CLOSE -> reduce (target=17, len=1) -> 'action 58'
actionsTable[108] = 1093; // 'state 3' -> @par-gen.EOF -> reduce (target=17, len=1) -> 'action 59'
actionsTable[128] = 1093; // 'state 4' -> WS -> reduce (target=17, len=1) -> 'action 60'
actionsTable[133] = 1093; // 'state 4' -> CURLY_CLOSE -> reduce (target=17, len=1) -> 'action 61'
actionsTable[134] = 1093; // 'state 4' -> COMMA -> reduce (target=17, len=1) -> 'action 62'
actionsTable[138] = 1093; // 'state 4' -> BRACKET_CLOSE -> reduce (target=17, len=1) -> 'action 63'
actionsTable[140] = 1093; // 'state 4' -> @par-gen.EOF -> reduce (target=17, len=1) -> 'action 64'
actionsTable[160] = 100; // 'state 5' -> WS -> shift (target=25, len=0) -> 'action 65'
actionsTable[165] = 104; // 'state 5' -> CURLY_CLOSE -> shift (target=26, len=0) -> 'action 66'
actionsTable[168] = 108; // 'state 5' -> STRING -> shift (target=27, len=0) -> 'action 67'
actionsTable[179] = 112; // 'state 5' -> Members -> shift (target=28, len=0) -> 'action 68'
actionsTable[180] = 116; // 'state 5' -> Member -> shift (target=29, len=0) -> 'action 69'
actionsTable[224] = 120; // 'state 7' -> WS -> shift (target=30, len=0) -> 'action 70'
actionsTable[225] = 8; // 'state 7' -> TRUE -> shift (target=2, len=0) -> 'action 71'
actionsTable[226] = 12; // 'state 7' -> FALSE -> shift (target=3, len=0) -> 'action 72'
actionsTable[227] = 16; // 'state 7' -> NULL -> shift (target=4, len=0) -> 'action 73'
actionsTable[228] = 20; // 'state 7' -> CURLY_OPEN -> shift (target=5, len=0) -> 'action 74'
actionsTable[232] = 24; // 'state 7' -> STRING -> shift (target=6, len=0) -> 'action 75'
actionsTable[233] = 28; // 'state 7' -> BRACKET_OPEN -> shift (target=7, len=0) -> 'action 76'
actionsTable[234] = 124; // 'state 7' -> BRACKET_CLOSE -> shift (target=31, len=0) -> 'action 77'
actionsTable[235] = 32; // 'state 7' -> NUMBER -> shift (target=8, len=0) -> 'action 78'
actionsTable[240] = 128; // 'state 7' -> Element -> shift (target=32, len=0) -> 'action 79'
actionsTable[241] = 44; // 'state 7' -> Value -> shift (target=11, len=0) -> 'action 80'
actionsTable[242] = 48; // 'state 7' -> Object -> shift (target=12, len=0) -> 'action 81'
actionsTable[245] = 52; // 'state 7' -> Array -> shift (target=13, len=0) -> 'action 82'
actionsTable[246] = 132; // 'state 7' -> Elements -> shift (target=33, len=0) -> 'action 83'
actionsTable[453] = 2113; // 'state 14' -> CURLY_CLOSE -> reduce (target=16, len=2) -> 'action 84'
actionsTable[454] = 2113; // 'state 14' -> COMMA -> reduce (target=16, len=2) -> 'action 85'
actionsTable[458] = 2113; // 'state 14' -> BRACKET_CLOSE -> reduce (target=16, len=2) -> 'action 86'
actionsTable[460] = 2113; // 'state 14' -> @par-gen.EOF -> reduce (target=16, len=2) -> 'action 87'
actionsTable[704] = 136; // 'state 22' -> WS -> shift (target=34, len=0) -> 'action 88'
actionsTable[709] = 2113; // 'state 22' -> CURLY_CLOSE -> reduce (target=16, len=2) -> 'action 89'
actionsTable[710] = 2113; // 'state 22' -> COMMA -> reduce (target=16, len=2) -> 'action 90'
actionsTable[714] = 2113; // 'state 22' -> BRACKET_CLOSE -> reduce (target=16, len=2) -> 'action 91'
actionsTable[716] = 2113; // 'state 22' -> @par-gen.EOF -> reduce (target=16, len=2) -> 'action 92'
actionsTable[736] = 1093; // 'state 23' -> WS -> reduce (target=17, len=1) -> 'action 93'
actionsTable[741] = 1093; // 'state 23' -> CURLY_CLOSE -> reduce (target=17, len=1) -> 'action 94'
actionsTable[742] = 1093; // 'state 23' -> COMMA -> reduce (target=17, len=1) -> 'action 95'
actionsTable[746] = 1093; // 'state 23' -> BRACKET_CLOSE -> reduce (target=17, len=1) -> 'action 96'
actionsTable[748] = 1093; // 'state 23' -> @par-gen.EOF -> reduce (target=17, len=1) -> 'action 97'
actionsTable[768] = 1093; // 'state 24' -> WS -> reduce (target=17, len=1) -> 'action 98'
actionsTable[773] = 1093; // 'state 24' -> CURLY_CLOSE -> reduce (target=17, len=1) -> 'action 99'
actionsTable[774] = 1093; // 'state 24' -> COMMA -> reduce (target=17, len=1) -> 'action 100'
actionsTable[778] = 1093; // 'state 24' -> BRACKET_CLOSE -> reduce (target=17, len=1) -> 'action 101'
actionsTable[780] = 1093; // 'state 24' -> @par-gen.EOF -> reduce (target=17, len=1) -> 'action 102'
actionsTable[608] = 1093; // 'state 19' -> WS -> reduce (target=17, len=1) -> 'action 103'
actionsTable[613] = 1093; // 'state 19' -> CURLY_CLOSE -> reduce (target=17, len=1) -> 'action 104'
actionsTable[614] = 1093; // 'state 19' -> COMMA -> reduce (target=17, len=1) -> 'action 105'
actionsTable[618] = 1093; // 'state 19' -> BRACKET_CLOSE -> reduce (target=17, len=1) -> 'action 106'
actionsTable[620] = 1093; // 'state 19' -> @par-gen.EOF -> reduce (target=17, len=1) -> 'action 107'
actionsTable[672] = 1093; // 'state 21' -> WS -> reduce (target=17, len=1) -> 'action 108'
actionsTable[677] = 1093; // 'state 21' -> CURLY_CLOSE -> reduce (target=17, len=1) -> 'action 109'
actionsTable[678] = 1093; // 'state 21' -> COMMA -> reduce (target=17, len=1) -> 'action 110'
actionsTable[682] = 1093; // 'state 21' -> BRACKET_CLOSE -> reduce (target=17, len=1) -> 'action 111'
actionsTable[684] = 1093; // 'state 21' -> @par-gen.EOF -> reduce (target=17, len=1) -> 'action 112'
actionsTable[480] = 1093; // 'state 15' -> WS -> reduce (target=17, len=1) -> 'action 113'
actionsTable[485] = 1093; // 'state 15' -> CURLY_CLOSE -> reduce (target=17, len=1) -> 'action 114'
actionsTable[486] = 1093; // 'state 15' -> COMMA -> reduce (target=17, len=1) -> 'action 115'
actionsTable[490] = 1093; // 'state 15' -> BRACKET_CLOSE -> reduce (target=17, len=1) -> 'action 116'
actionsTable[492] = 1093; // 'state 15' -> @par-gen.EOF -> reduce (target=17, len=1) -> 'action 117'
actionsTable[512] = 1093; // 'state 16' -> WS -> reduce (target=17, len=1) -> 'action 118'
actionsTable[517] = 1093; // 'state 16' -> CURLY_CLOSE -> reduce (target=17, len=1) -> 'action 119'
actionsTable[518] = 1093; // 'state 16' -> COMMA -> reduce (target=17, len=1) -> 'action 120'
actionsTable[522] = 1093; // 'state 16' -> BRACKET_CLOSE -> reduce (target=17, len=1) -> 'action 121'
actionsTable[524] = 1093; // 'state 16' -> @par-gen.EOF -> reduce (target=17, len=1) -> 'action 122'
actionsTable[544] = 1093; // 'state 17' -> WS -> reduce (target=17, len=1) -> 'action 123'
actionsTable[549] = 1093; // 'state 17' -> CURLY_CLOSE -> reduce (target=17, len=1) -> 'action 124'
actionsTable[550] = 1093; // 'state 17' -> COMMA -> reduce (target=17, len=1) -> 'action 125'
actionsTable[554] = 1093; // 'state 17' -> BRACKET_CLOSE -> reduce (target=17, len=1) -> 'action 126'
actionsTable[556] = 1093; // 'state 17' -> @par-gen.EOF -> reduce (target=17, len=1) -> 'action 127'
actionsTable[576] = 140; // 'state 18' -> WS -> shift (target=35, len=0) -> 'action 128'
actionsTable[581] = 144; // 'state 18' -> CURLY_CLOSE -> shift (target=36, len=0) -> 'action 129'
actionsTable[584] = 148; // 'state 18' -> STRING -> shift (target=37, len=0) -> 'action 130'
actionsTable[595] = 152; // 'state 18' -> Members -> shift (target=38, len=0) -> 'action 131'
actionsTable[596] = 156; // 'state 18' -> Member -> shift (target=39, len=0) -> 'action 132'
actionsTable[640] = 160; // 'state 20' -> WS -> shift (target=40, len=0) -> 'action 133'
actionsTable[641] = 8; // 'state 20' -> TRUE -> shift (target=2, len=0) -> 'action 134'
actionsTable[642] = 12; // 'state 20' -> FALSE -> shift (target=3, len=0) -> 'action 135'
actionsTable[643] = 16; // 'state 20' -> NULL -> shift (target=4, len=0) -> 'action 136'
actionsTable[644] = 20; // 'state 20' -> CURLY_OPEN -> shift (target=5, len=0) -> 'action 137'
actionsTable[648] = 24; // 'state 20' -> STRING -> shift (target=6, len=0) -> 'action 138'
actionsTable[649] = 28; // 'state 20' -> BRACKET_OPEN -> shift (target=7, len=0) -> 'action 139'
actionsTable[650] = 164; // 'state 20' -> BRACKET_CLOSE -> shift (target=41, len=0) -> 'action 140'
actionsTable[651] = 32; // 'state 20' -> NUMBER -> shift (target=8, len=0) -> 'action 141'
actionsTable[656] = 168; // 'state 20' -> Element -> shift (target=42, len=0) -> 'action 142'
actionsTable[657] = 44; // 'state 20' -> Value -> shift (target=11, len=0) -> 'action 143'
actionsTable[658] = 48; // 'state 20' -> Object -> shift (target=12, len=0) -> 'action 144'
actionsTable[661] = 52; // 'state 20' -> Array -> shift (target=13, len=0) -> 'action 145'
actionsTable[662] = 172; // 'state 20' -> Elements -> shift (target=43, len=0) -> 'action 146'
actionsTable[832] = 2121; // 'state 26' -> WS -> reduce (target=18, len=2) -> 'action 147'
actionsTable[837] = 2121; // 'state 26' -> CURLY_CLOSE -> reduce (target=18, len=2) -> 'action 148'
actionsTable[838] = 2121; // 'state 26' -> COMMA -> reduce (target=18, len=2) -> 'action 149'
actionsTable[842] = 2121; // 'state 26' -> BRACKET_CLOSE -> reduce (target=18, len=2) -> 'action 150'
actionsTable[844] = 2121; // 'state 26' -> @par-gen.EOF -> reduce (target=18, len=2) -> 'action 151'
actionsTable[805] = 176; // 'state 25' -> CURLY_CLOSE -> shift (target=44, len=0) -> 'action 152'
actionsTable[808] = 180; // 'state 25' -> STRING -> shift (target=45, len=0) -> 'action 153'
actionsTable[901] = 184; // 'state 28' -> CURLY_CLOSE -> shift (target=46, len=0) -> 'action 154'
actionsTable[902] = 188; // 'state 28' -> COMMA -> shift (target=47, len=0) -> 'action 155'
actionsTable[933] = 1101; // 'state 29' -> CURLY_CLOSE -> reduce (target=19, len=1) -> 'action 156'
actionsTable[934] = 1101; // 'state 29' -> COMMA -> reduce (target=19, len=1) -> 'action 157'
actionsTable[864] = 192; // 'state 27' -> WS -> shift (target=48, len=0) -> 'action 158'
actionsTable[871] = 196; // 'state 27' -> COLON -> shift (target=49, len=0) -> 'action 159'
actionsTable[992] = 2133; // 'state 31' -> WS -> reduce (target=21, len=2) -> 'action 160'
actionsTable[997] = 2133; // 'state 31' -> CURLY_CLOSE -> reduce (target=21, len=2) -> 'action 161'
actionsTable[998] = 2133; // 'state 31' -> COMMA -> reduce (target=21, len=2) -> 'action 162'
actionsTable[1002] = 2133; // 'state 31' -> BRACKET_CLOSE -> reduce (target=21, len=2) -> 'action 163'
actionsTable[1004] = 2133; // 'state 31' -> @par-gen.EOF -> reduce (target=21, len=2) -> 'action 164'
actionsTable[961] = 8; // 'state 30' -> TRUE -> shift (target=2, len=0) -> 'action 165'
actionsTable[962] = 12; // 'state 30' -> FALSE -> shift (target=3, len=0) -> 'action 166'
actionsTable[963] = 16; // 'state 30' -> NULL -> shift (target=4, len=0) -> 'action 167'
actionsTable[964] = 20; // 'state 30' -> CURLY_OPEN -> shift (target=5, len=0) -> 'action 168'
actionsTable[968] = 24; // 'state 30' -> STRING -> shift (target=6, len=0) -> 'action 169'
actionsTable[969] = 28; // 'state 30' -> BRACKET_OPEN -> shift (target=7, len=0) -> 'action 170'
actionsTable[970] = 200; // 'state 30' -> BRACKET_CLOSE -> shift (target=50, len=0) -> 'action 171'
actionsTable[971] = 32; // 'state 30' -> NUMBER -> shift (target=8, len=0) -> 'action 172'
actionsTable[977] = 88; // 'state 30' -> Value -> shift (target=22, len=0) -> 'action 173'
actionsTable[978] = 48; // 'state 30' -> Object -> shift (target=12, len=0) -> 'action 174'
actionsTable[981] = 52; // 'state 30' -> Array -> shift (target=13, len=0) -> 'action 175'
actionsTable[1062] = 204; // 'state 33' -> COMMA -> shift (target=51, len=0) -> 'action 176'
actionsTable[1066] = 208; // 'state 33' -> BRACKET_CLOSE -> shift (target=52, len=0) -> 'action 177'
actionsTable[1030] = 1113; // 'state 32' -> COMMA -> reduce (target=22, len=1) -> 'action 178'
actionsTable[1034] = 1113; // 'state 32' -> BRACKET_CLOSE -> reduce (target=22, len=1) -> 'action 179'
actionsTable[1093] = 3137; // 'state 34' -> CURLY_CLOSE -> reduce (target=16, len=3) -> 'action 180'
actionsTable[1094] = 3137; // 'state 34' -> COMMA -> reduce (target=16, len=3) -> 'action 181'
actionsTable[1098] = 3137; // 'state 34' -> BRACKET_CLOSE -> reduce (target=16, len=3) -> 'action 182'
actionsTable[1100] = 3137; // 'state 34' -> @par-gen.EOF -> reduce (target=16, len=3) -> 'action 183'
actionsTable[1152] = 2121; // 'state 36' -> WS -> reduce (target=18, len=2) -> 'action 184'
actionsTable[1157] = 2121; // 'state 36' -> CURLY_CLOSE -> reduce (target=18, len=2) -> 'action 185'
actionsTable[1158] = 2121; // 'state 36' -> COMMA -> reduce (target=18, len=2) -> 'action 186'
actionsTable[1162] = 2121; // 'state 36' -> BRACKET_CLOSE -> reduce (target=18, len=2) -> 'action 187'
actionsTable[1164] = 2121; // 'state 36' -> @par-gen.EOF -> reduce (target=18, len=2) -> 'action 188'
actionsTable[1125] = 212; // 'state 35' -> CURLY_CLOSE -> shift (target=53, len=0) -> 'action 189'
actionsTable[1128] = 216; // 'state 35' -> STRING -> shift (target=54, len=0) -> 'action 190'
actionsTable[1221] = 220; // 'state 38' -> CURLY_CLOSE -> shift (target=55, len=0) -> 'action 191'
actionsTable[1222] = 224; // 'state 38' -> COMMA -> shift (target=56, len=0) -> 'action 192'
actionsTable[1253] = 1101; // 'state 39' -> CURLY_CLOSE -> reduce (target=19, len=1) -> 'action 193'
actionsTable[1254] = 1101; // 'state 39' -> COMMA -> reduce (target=19, len=1) -> 'action 194'
actionsTable[1184] = 228; // 'state 37' -> WS -> shift (target=57, len=0) -> 'action 195'
actionsTable[1191] = 232; // 'state 37' -> COLON -> shift (target=58, len=0) -> 'action 196'
actionsTable[1312] = 2133; // 'state 41' -> WS -> reduce (target=21, len=2) -> 'action 197'
actionsTable[1317] = 2133; // 'state 41' -> CURLY_CLOSE -> reduce (target=21, len=2) -> 'action 198'
actionsTable[1318] = 2133; // 'state 41' -> COMMA -> reduce (target=21, len=2) -> 'action 199'
actionsTable[1322] = 2133; // 'state 41' -> BRACKET_CLOSE -> reduce (target=21, len=2) -> 'action 200'
actionsTable[1324] = 2133; // 'state 41' -> @par-gen.EOF -> reduce (target=21, len=2) -> 'action 201'
actionsTable[1281] = 8; // 'state 40' -> TRUE -> shift (target=2, len=0) -> 'action 202'
actionsTable[1282] = 12; // 'state 40' -> FALSE -> shift (target=3, len=0) -> 'action 203'
actionsTable[1283] = 16; // 'state 40' -> NULL -> shift (target=4, len=0) -> 'action 204'
actionsTable[1284] = 20; // 'state 40' -> CURLY_OPEN -> shift (target=5, len=0) -> 'action 205'
actionsTable[1288] = 24; // 'state 40' -> STRING -> shift (target=6, len=0) -> 'action 206'
actionsTable[1289] = 28; // 'state 40' -> BRACKET_OPEN -> shift (target=7, len=0) -> 'action 207'
actionsTable[1290] = 236; // 'state 40' -> BRACKET_CLOSE -> shift (target=59, len=0) -> 'action 208'
actionsTable[1291] = 32; // 'state 40' -> NUMBER -> shift (target=8, len=0) -> 'action 209'
actionsTable[1297] = 88; // 'state 40' -> Value -> shift (target=22, len=0) -> 'action 210'
actionsTable[1298] = 48; // 'state 40' -> Object -> shift (target=12, len=0) -> 'action 211'
actionsTable[1301] = 52; // 'state 40' -> Array -> shift (target=13, len=0) -> 'action 212'
actionsTable[1382] = 240; // 'state 43' -> COMMA -> shift (target=60, len=0) -> 'action 213'
actionsTable[1386] = 244; // 'state 43' -> BRACKET_CLOSE -> shift (target=61, len=0) -> 'action 214'
actionsTable[1350] = 1113; // 'state 42' -> COMMA -> reduce (target=22, len=1) -> 'action 215'
actionsTable[1354] = 1113; // 'state 42' -> BRACKET_CLOSE -> reduce (target=22, len=1) -> 'action 216'
actionsTable[1408] = 3145; // 'state 44' -> WS -> reduce (target=18, len=3) -> 'action 217'
actionsTable[1413] = 3145; // 'state 44' -> CURLY_CLOSE -> reduce (target=18, len=3) -> 'action 218'
actionsTable[1414] = 3145; // 'state 44' -> COMMA -> reduce (target=18, len=3) -> 'action 219'
actionsTable[1418] = 3145; // 'state 44' -> BRACKET_CLOSE -> reduce (target=18, len=3) -> 'action 220'
actionsTable[1420] = 3145; // 'state 44' -> @par-gen.EOF -> reduce (target=18, len=3) -> 'action 221'
actionsTable[1440] = 248; // 'state 45' -> WS -> shift (target=62, len=0) -> 'action 222'
actionsTable[1447] = 252; // 'state 45' -> COLON -> shift (target=63, len=0) -> 'action 223'
actionsTable[1472] = 3145; // 'state 46' -> WS -> reduce (target=18, len=3) -> 'action 224'
actionsTable[1477] = 3145; // 'state 46' -> CURLY_CLOSE -> reduce (target=18, len=3) -> 'action 225'
actionsTable[1478] = 3145; // 'state 46' -> COMMA -> reduce (target=18, len=3) -> 'action 226'
actionsTable[1482] = 3145; // 'state 46' -> BRACKET_CLOSE -> reduce (target=18, len=3) -> 'action 227'
actionsTable[1484] = 3145; // 'state 46' -> @par-gen.EOF -> reduce (target=18, len=3) -> 'action 228'
actionsTable[1504] = 256; // 'state 47' -> WS -> shift (target=64, len=0) -> 'action 229'
actionsTable[1512] = 108; // 'state 47' -> STRING -> shift (target=27, len=0) -> 'action 230'
actionsTable[1524] = 260; // 'state 47' -> Member -> shift (target=65, len=0) -> 'action 231'
actionsTable[1568] = 4; // 'state 49' -> WS -> shift (target=1, len=0) -> 'action 232'
actionsTable[1569] = 8; // 'state 49' -> TRUE -> shift (target=2, len=0) -> 'action 233'
actionsTable[1570] = 12; // 'state 49' -> FALSE -> shift (target=3, len=0) -> 'action 234'
actionsTable[1571] = 16; // 'state 49' -> NULL -> shift (target=4, len=0) -> 'action 235'
actionsTable[1572] = 20; // 'state 49' -> CURLY_OPEN -> shift (target=5, len=0) -> 'action 236'
actionsTable[1576] = 24; // 'state 49' -> STRING -> shift (target=6, len=0) -> 'action 237'
actionsTable[1577] = 28; // 'state 49' -> BRACKET_OPEN -> shift (target=7, len=0) -> 'action 238'
actionsTable[1579] = 32; // 'state 49' -> NUMBER -> shift (target=8, len=0) -> 'action 239'
actionsTable[1584] = 264; // 'state 49' -> Element -> shift (target=66, len=0) -> 'action 240'
actionsTable[1585] = 44; // 'state 49' -> Value -> shift (target=11, len=0) -> 'action 241'
actionsTable[1586] = 48; // 'state 49' -> Object -> shift (target=12, len=0) -> 'action 242'
actionsTable[1589] = 52; // 'state 49' -> Array -> shift (target=13, len=0) -> 'action 243'
actionsTable[1543] = 268; // 'state 48' -> COLON -> shift (target=67, len=0) -> 'action 244'
actionsTable[1600] = 3157; // 'state 50' -> WS -> reduce (target=21, len=3) -> 'action 245'
actionsTable[1605] = 3157; // 'state 50' -> CURLY_CLOSE -> reduce (target=21, len=3) -> 'action 246'
actionsTable[1606] = 3157; // 'state 50' -> COMMA -> reduce (target=21, len=3) -> 'action 247'
actionsTable[1610] = 3157; // 'state 50' -> BRACKET_CLOSE -> reduce (target=21, len=3) -> 'action 248'
actionsTable[1612] = 3157; // 'state 50' -> @par-gen.EOF -> reduce (target=21, len=3) -> 'action 249'
actionsTable[1664] = 3157; // 'state 52' -> WS -> reduce (target=21, len=3) -> 'action 250'
actionsTable[1669] = 3157; // 'state 52' -> CURLY_CLOSE -> reduce (target=21, len=3) -> 'action 251'
actionsTable[1670] = 3157; // 'state 52' -> COMMA -> reduce (target=21, len=3) -> 'action 252'
actionsTable[1674] = 3157; // 'state 52' -> BRACKET_CLOSE -> reduce (target=21, len=3) -> 'action 253'
actionsTable[1676] = 3157; // 'state 52' -> @par-gen.EOF -> reduce (target=21, len=3) -> 'action 254'
actionsTable[1632] = 4; // 'state 51' -> WS -> shift (target=1, len=0) -> 'action 255'
actionsTable[1633] = 8; // 'state 51' -> TRUE -> shift (target=2, len=0) -> 'action 256'
actionsTable[1634] = 12; // 'state 51' -> FALSE -> shift (target=3, len=0) -> 'action 257'
actionsTable[1635] = 16; // 'state 51' -> NULL -> shift (target=4, len=0) -> 'action 258'
actionsTable[1636] = 20; // 'state 51' -> CURLY_OPEN -> shift (target=5, len=0) -> 'action 259'
actionsTable[1640] = 24; // 'state 51' -> STRING -> shift (target=6, len=0) -> 'action 260'
actionsTable[1641] = 28; // 'state 51' -> BRACKET_OPEN -> shift (target=7, len=0) -> 'action 261'
actionsTable[1643] = 32; // 'state 51' -> NUMBER -> shift (target=8, len=0) -> 'action 262'
actionsTable[1648] = 272; // 'state 51' -> Element -> shift (target=68, len=0) -> 'action 263'
actionsTable[1649] = 44; // 'state 51' -> Value -> shift (target=11, len=0) -> 'action 264'
actionsTable[1650] = 48; // 'state 51' -> Object -> shift (target=12, len=0) -> 'action 265'
actionsTable[1653] = 52; // 'state 51' -> Array -> shift (target=13, len=0) -> 'action 266'
actionsTable[1696] = 3145; // 'state 53' -> WS -> reduce (target=18, len=3) -> 'action 267'
actionsTable[1701] = 3145; // 'state 53' -> CURLY_CLOSE -> reduce (target=18, len=3) -> 'action 268'
actionsTable[1702] = 3145; // 'state 53' -> COMMA -> reduce (target=18, len=3) -> 'action 269'
actionsTable[1706] = 3145; // 'state 53' -> BRACKET_CLOSE -> reduce (target=18, len=3) -> 'action 270'
actionsTable[1708] = 3145; // 'state 53' -> @par-gen.EOF -> reduce (target=18, len=3) -> 'action 271'
actionsTable[1728] = 276; // 'state 54' -> WS -> shift (target=69, len=0) -> 'action 272'
actionsTable[1735] = 280; // 'state 54' -> COLON -> shift (target=70, len=0) -> 'action 273'
actionsTable[1760] = 3145; // 'state 55' -> WS -> reduce (target=18, len=3) -> 'action 274'
actionsTable[1765] = 3145; // 'state 55' -> CURLY_CLOSE -> reduce (target=18, len=3) -> 'action 275'
actionsTable[1766] = 3145; // 'state 55' -> COMMA -> reduce (target=18, len=3) -> 'action 276'
actionsTable[1770] = 3145; // 'state 55' -> BRACKET_CLOSE -> reduce (target=18, len=3) -> 'action 277'
actionsTable[1772] = 3145; // 'state 55' -> @par-gen.EOF -> reduce (target=18, len=3) -> 'action 278'
actionsTable[1792] = 284; // 'state 56' -> WS -> shift (target=71, len=0) -> 'action 279'
actionsTable[1800] = 108; // 'state 56' -> STRING -> shift (target=27, len=0) -> 'action 280'
actionsTable[1812] = 288; // 'state 56' -> Member -> shift (target=72, len=0) -> 'action 281'
actionsTable[1856] = 4; // 'state 58' -> WS -> shift (target=1, len=0) -> 'action 282'
actionsTable[1857] = 8; // 'state 58' -> TRUE -> shift (target=2, len=0) -> 'action 283'
actionsTable[1858] = 12; // 'state 58' -> FALSE -> shift (target=3, len=0) -> 'action 284'
actionsTable[1859] = 16; // 'state 58' -> NULL -> shift (target=4, len=0) -> 'action 285'
actionsTable[1860] = 20; // 'state 58' -> CURLY_OPEN -> shift (target=5, len=0) -> 'action 286'
actionsTable[1864] = 24; // 'state 58' -> STRING -> shift (target=6, len=0) -> 'action 287'
actionsTable[1865] = 28; // 'state 58' -> BRACKET_OPEN -> shift (target=7, len=0) -> 'action 288'
actionsTable[1867] = 32; // 'state 58' -> NUMBER -> shift (target=8, len=0) -> 'action 289'
actionsTable[1872] = 292; // 'state 58' -> Element -> shift (target=73, len=0) -> 'action 290'
actionsTable[1873] = 44; // 'state 58' -> Value -> shift (target=11, len=0) -> 'action 291'
actionsTable[1874] = 48; // 'state 58' -> Object -> shift (target=12, len=0) -> 'action 292'
actionsTable[1877] = 52; // 'state 58' -> Array -> shift (target=13, len=0) -> 'action 293'
actionsTable[1831] = 296; // 'state 57' -> COLON -> shift (target=74, len=0) -> 'action 294'
actionsTable[1888] = 3157; // 'state 59' -> WS -> reduce (target=21, len=3) -> 'action 295'
actionsTable[1893] = 3157; // 'state 59' -> CURLY_CLOSE -> reduce (target=21, len=3) -> 'action 296'
actionsTable[1894] = 3157; // 'state 59' -> COMMA -> reduce (target=21, len=3) -> 'action 297'
actionsTable[1898] = 3157; // 'state 59' -> BRACKET_CLOSE -> reduce (target=21, len=3) -> 'action 298'
actionsTable[1900] = 3157; // 'state 59' -> @par-gen.EOF -> reduce (target=21, len=3) -> 'action 299'
actionsTable[1952] = 3157; // 'state 61' -> WS -> reduce (target=21, len=3) -> 'action 300'
actionsTable[1957] = 3157; // 'state 61' -> CURLY_CLOSE -> reduce (target=21, len=3) -> 'action 301'
actionsTable[1958] = 3157; // 'state 61' -> COMMA -> reduce (target=21, len=3) -> 'action 302'
actionsTable[1962] = 3157; // 'state 61' -> BRACKET_CLOSE -> reduce (target=21, len=3) -> 'action 303'
actionsTable[1964] = 3157; // 'state 61' -> @par-gen.EOF -> reduce (target=21, len=3) -> 'action 304'
actionsTable[1920] = 4; // 'state 60' -> WS -> shift (target=1, len=0) -> 'action 305'
actionsTable[1921] = 8; // 'state 60' -> TRUE -> shift (target=2, len=0) -> 'action 306'
actionsTable[1922] = 12; // 'state 60' -> FALSE -> shift (target=3, len=0) -> 'action 307'
actionsTable[1923] = 16; // 'state 60' -> NULL -> shift (target=4, len=0) -> 'action 308'
actionsTable[1924] = 20; // 'state 60' -> CURLY_OPEN -> shift (target=5, len=0) -> 'action 309'
actionsTable[1928] = 24; // 'state 60' -> STRING -> shift (target=6, len=0) -> 'action 310'
actionsTable[1929] = 28; // 'state 60' -> BRACKET_OPEN -> shift (target=7, len=0) -> 'action 311'
actionsTable[1931] = 32; // 'state 60' -> NUMBER -> shift (target=8, len=0) -> 'action 312'
actionsTable[1936] = 300; // 'state 60' -> Element -> shift (target=75, len=0) -> 'action 313'
actionsTable[1937] = 44; // 'state 60' -> Value -> shift (target=11, len=0) -> 'action 314'
actionsTable[1938] = 48; // 'state 60' -> Object -> shift (target=12, len=0) -> 'action 315'
actionsTable[1941] = 52; // 'state 60' -> Array -> shift (target=13, len=0) -> 'action 316'
actionsTable[2016] = 4; // 'state 63' -> WS -> shift (target=1, len=0) -> 'action 317'
actionsTable[2017] = 8; // 'state 63' -> TRUE -> shift (target=2, len=0) -> 'action 318'
actionsTable[2018] = 12; // 'state 63' -> FALSE -> shift (target=3, len=0) -> 'action 319'
actionsTable[2019] = 16; // 'state 63' -> NULL -> shift (target=4, len=0) -> 'action 320'
actionsTable[2020] = 20; // 'state 63' -> CURLY_OPEN -> shift (target=5, len=0) -> 'action 321'
actionsTable[2024] = 24; // 'state 63' -> STRING -> shift (target=6, len=0) -> 'action 322'
actionsTable[2025] = 28; // 'state 63' -> BRACKET_OPEN -> shift (target=7, len=0) -> 'action 323'
actionsTable[2027] = 32; // 'state 63' -> NUMBER -> shift (target=8, len=0) -> 'action 324'
actionsTable[2032] = 304; // 'state 63' -> Element -> shift (target=76, len=0) -> 'action 325'
actionsTable[2033] = 44; // 'state 63' -> Value -> shift (target=11, len=0) -> 'action 326'
actionsTable[2034] = 48; // 'state 63' -> Object -> shift (target=12, len=0) -> 'action 327'
actionsTable[2037] = 52; // 'state 63' -> Array -> shift (target=13, len=0) -> 'action 328'
actionsTable[1991] = 308; // 'state 62' -> COLON -> shift (target=77, len=0) -> 'action 329'
actionsTable[2085] = 3149; // 'state 65' -> CURLY_CLOSE -> reduce (target=19, len=3) -> 'action 330'
actionsTable[2086] = 3149; // 'state 65' -> COMMA -> reduce (target=19, len=3) -> 'action 331'
actionsTable[2056] = 180; // 'state 64' -> STRING -> shift (target=45, len=0) -> 'action 332'
actionsTable[2117] = 3153; // 'state 66' -> CURLY_CLOSE -> reduce (target=20, len=3) -> 'action 333'
actionsTable[2118] = 3153; // 'state 66' -> COMMA -> reduce (target=20, len=3) -> 'action 334'
actionsTable[2144] = 4; // 'state 67' -> WS -> shift (target=1, len=0) -> 'action 335'
actionsTable[2145] = 8; // 'state 67' -> TRUE -> shift (target=2, len=0) -> 'action 336'
actionsTable[2146] = 12; // 'state 67' -> FALSE -> shift (target=3, len=0) -> 'action 337'
actionsTable[2147] = 16; // 'state 67' -> NULL -> shift (target=4, len=0) -> 'action 338'
actionsTable[2148] = 20; // 'state 67' -> CURLY_OPEN -> shift (target=5, len=0) -> 'action 339'
actionsTable[2152] = 24; // 'state 67' -> STRING -> shift (target=6, len=0) -> 'action 340'
actionsTable[2153] = 28; // 'state 67' -> BRACKET_OPEN -> shift (target=7, len=0) -> 'action 341'
actionsTable[2155] = 32; // 'state 67' -> NUMBER -> shift (target=8, len=0) -> 'action 342'
actionsTable[2160] = 312; // 'state 67' -> Element -> shift (target=78, len=0) -> 'action 343'
actionsTable[2161] = 44; // 'state 67' -> Value -> shift (target=11, len=0) -> 'action 344'
actionsTable[2162] = 48; // 'state 67' -> Object -> shift (target=12, len=0) -> 'action 345'
actionsTable[2165] = 52; // 'state 67' -> Array -> shift (target=13, len=0) -> 'action 346'
actionsTable[2182] = 3161; // 'state 68' -> COMMA -> reduce (target=22, len=3) -> 'action 347'
actionsTable[2186] = 3161; // 'state 68' -> BRACKET_CLOSE -> reduce (target=22, len=3) -> 'action 348'
actionsTable[2240] = 4; // 'state 70' -> WS -> shift (target=1, len=0) -> 'action 349'
actionsTable[2241] = 8; // 'state 70' -> TRUE -> shift (target=2, len=0) -> 'action 350'
actionsTable[2242] = 12; // 'state 70' -> FALSE -> shift (target=3, len=0) -> 'action 351'
actionsTable[2243] = 16; // 'state 70' -> NULL -> shift (target=4, len=0) -> 'action 352'
actionsTable[2244] = 20; // 'state 70' -> CURLY_OPEN -> shift (target=5, len=0) -> 'action 353'
actionsTable[2248] = 24; // 'state 70' -> STRING -> shift (target=6, len=0) -> 'action 354'
actionsTable[2249] = 28; // 'state 70' -> BRACKET_OPEN -> shift (target=7, len=0) -> 'action 355'
actionsTable[2251] = 32; // 'state 70' -> NUMBER -> shift (target=8, len=0) -> 'action 356'
actionsTable[2256] = 316; // 'state 70' -> Element -> shift (target=79, len=0) -> 'action 357'
actionsTable[2257] = 44; // 'state 70' -> Value -> shift (target=11, len=0) -> 'action 358'
actionsTable[2258] = 48; // 'state 70' -> Object -> shift (target=12, len=0) -> 'action 359'
actionsTable[2261] = 52; // 'state 70' -> Array -> shift (target=13, len=0) -> 'action 360'
actionsTable[2215] = 320; // 'state 69' -> COLON -> shift (target=80, len=0) -> 'action 361'
actionsTable[2309] = 3149; // 'state 72' -> CURLY_CLOSE -> reduce (target=19, len=3) -> 'action 362'
actionsTable[2310] = 3149; // 'state 72' -> COMMA -> reduce (target=19, len=3) -> 'action 363'
actionsTable[2280] = 180; // 'state 71' -> STRING -> shift (target=45, len=0) -> 'action 364'
actionsTable[2341] = 3153; // 'state 73' -> CURLY_CLOSE -> reduce (target=20, len=3) -> 'action 365'
actionsTable[2342] = 3153; // 'state 73' -> COMMA -> reduce (target=20, len=3) -> 'action 366'
actionsTable[2368] = 4; // 'state 74' -> WS -> shift (target=1, len=0) -> 'action 367'
actionsTable[2369] = 8; // 'state 74' -> TRUE -> shift (target=2, len=0) -> 'action 368'
actionsTable[2370] = 12; // 'state 74' -> FALSE -> shift (target=3, len=0) -> 'action 369'
actionsTable[2371] = 16; // 'state 74' -> NULL -> shift (target=4, len=0) -> 'action 370'
actionsTable[2372] = 20; // 'state 74' -> CURLY_OPEN -> shift (target=5, len=0) -> 'action 371'
actionsTable[2376] = 24; // 'state 74' -> STRING -> shift (target=6, len=0) -> 'action 372'
actionsTable[2377] = 28; // 'state 74' -> BRACKET_OPEN -> shift (target=7, len=0) -> 'action 373'
actionsTable[2379] = 32; // 'state 74' -> NUMBER -> shift (target=8, len=0) -> 'action 374'
actionsTable[2384] = 324; // 'state 74' -> Element -> shift (target=81, len=0) -> 'action 375'
actionsTable[2385] = 44; // 'state 74' -> Value -> shift (target=11, len=0) -> 'action 376'
actionsTable[2386] = 48; // 'state 74' -> Object -> shift (target=12, len=0) -> 'action 377'
actionsTable[2389] = 52; // 'state 74' -> Array -> shift (target=13, len=0) -> 'action 378'
actionsTable[2406] = 3161; // 'state 75' -> COMMA -> reduce (target=22, len=3) -> 'action 379'
actionsTable[2410] = 3161; // 'state 75' -> BRACKET_CLOSE -> reduce (target=22, len=3) -> 'action 380'
actionsTable[2437] = 4177; // 'state 76' -> CURLY_CLOSE -> reduce (target=20, len=4) -> 'action 381'
actionsTable[2438] = 4177; // 'state 76' -> COMMA -> reduce (target=20, len=4) -> 'action 382'
actionsTable[2464] = 4; // 'state 77' -> WS -> shift (target=1, len=0) -> 'action 383'
actionsTable[2465] = 8; // 'state 77' -> TRUE -> shift (target=2, len=0) -> 'action 384'
actionsTable[2466] = 12; // 'state 77' -> FALSE -> shift (target=3, len=0) -> 'action 385'
actionsTable[2467] = 16; // 'state 77' -> NULL -> shift (target=4, len=0) -> 'action 386'
actionsTable[2468] = 20; // 'state 77' -> CURLY_OPEN -> shift (target=5, len=0) -> 'action 387'
actionsTable[2472] = 24; // 'state 77' -> STRING -> shift (target=6, len=0) -> 'action 388'
actionsTable[2473] = 28; // 'state 77' -> BRACKET_OPEN -> shift (target=7, len=0) -> 'action 389'
actionsTable[2475] = 32; // 'state 77' -> NUMBER -> shift (target=8, len=0) -> 'action 390'
actionsTable[2480] = 328; // 'state 77' -> Element -> shift (target=82, len=0) -> 'action 391'
actionsTable[2481] = 44; // 'state 77' -> Value -> shift (target=11, len=0) -> 'action 392'
actionsTable[2482] = 48; // 'state 77' -> Object -> shift (target=12, len=0) -> 'action 393'
actionsTable[2485] = 52; // 'state 77' -> Array -> shift (target=13, len=0) -> 'action 394'
actionsTable[2501] = 4177; // 'state 78' -> CURLY_CLOSE -> reduce (target=20, len=4) -> 'action 395'
actionsTable[2502] = 4177; // 'state 78' -> COMMA -> reduce (target=20, len=4) -> 'action 396'
actionsTable[2533] = 4177; // 'state 79' -> CURLY_CLOSE -> reduce (target=20, len=4) -> 'action 397'
actionsTable[2534] = 4177; // 'state 79' -> COMMA -> reduce (target=20, len=4) -> 'action 398'
actionsTable[2560] = 4; // 'state 80' -> WS -> shift (target=1, len=0) -> 'action 399'
actionsTable[2561] = 8; // 'state 80' -> TRUE -> shift (target=2, len=0) -> 'action 400'
actionsTable[2562] = 12; // 'state 80' -> FALSE -> shift (target=3, len=0) -> 'action 401'
actionsTable[2563] = 16; // 'state 80' -> NULL -> shift (target=4, len=0) -> 'action 402'
actionsTable[2564] = 20; // 'state 80' -> CURLY_OPEN -> shift (target=5, len=0) -> 'action 403'
actionsTable[2568] = 24; // 'state 80' -> STRING -> shift (target=6, len=0) -> 'action 404'
actionsTable[2569] = 28; // 'state 80' -> BRACKET_OPEN -> shift (target=7, len=0) -> 'action 405'
actionsTable[2571] = 32; // 'state 80' -> NUMBER -> shift (target=8, len=0) -> 'action 406'
actionsTable[2576] = 332; // 'state 80' -> Element -> shift (target=83, len=0) -> 'action 407'
actionsTable[2577] = 44; // 'state 80' -> Value -> shift (target=11, len=0) -> 'action 408'
actionsTable[2578] = 48; // 'state 80' -> Object -> shift (target=12, len=0) -> 'action 409'
actionsTable[2581] = 52; // 'state 80' -> Array -> shift (target=13, len=0) -> 'action 410'
actionsTable[2597] = 4177; // 'state 81' -> CURLY_CLOSE -> reduce (target=20, len=4) -> 'action 411'
actionsTable[2598] = 4177; // 'state 81' -> COMMA -> reduce (target=20, len=4) -> 'action 412'
actionsTable[2629] = 5201; // 'state 82' -> CURLY_CLOSE -> reduce (target=20, len=5) -> 'action 413'
actionsTable[2630] = 5201; // 'state 82' -> COMMA -> reduce (target=20, len=5) -> 'action 414'
actionsTable[2661] = 5201; // 'state 83' -> CURLY_CLOSE -> reduce (target=20, len=5) -> 'action 415'
actionsTable[2662] = 5201; // 'state 83' -> COMMA -> reduce (target=20, len=5) -> 'action 416'

const gotoTable = new Uint16Array(2688).fill(0xffff);
gotoTable[15] = 9; // 'state 9'
gotoTable[16] = 10; // 'state 10'
gotoTable[17] = 11; // 'state 11'
gotoTable[18] = 12; // 'state 12'
gotoTable[21] = 13; // 'state 13'
gotoTable[49] = 22; // 'state 22'
gotoTable[50] = 23; // 'state 23'
gotoTable[53] = 24; // 'state 24'
gotoTable[179] = 28; // 'state 28'
gotoTable[180] = 29; // 'state 29'
gotoTable[246] = 33; // 'state 33'
gotoTable[240] = 32; // 'state 32'
gotoTable[241] = 11; // 'state 11'
gotoTable[242] = 12; // 'state 12'
gotoTable[245] = 13; // 'state 13'
gotoTable[595] = 38; // 'state 38'
gotoTable[596] = 39; // 'state 39'
gotoTable[662] = 43; // 'state 43'
gotoTable[656] = 42; // 'state 42'
gotoTable[657] = 11; // 'state 11'
gotoTable[658] = 12; // 'state 12'
gotoTable[661] = 13; // 'state 13'
gotoTable[977] = 22; // 'state 22'
gotoTable[978] = 12; // 'state 12'
gotoTable[981] = 13; // 'state 13'
gotoTable[1297] = 22; // 'state 22'
gotoTable[1298] = 12; // 'state 12'
gotoTable[1301] = 13; // 'state 13'
gotoTable[1524] = 65; // 'state 65'
gotoTable[1584] = 66; // 'state 66'
gotoTable[1585] = 11; // 'state 11'
gotoTable[1586] = 12; // 'state 12'
gotoTable[1589] = 13; // 'state 13'
gotoTable[1648] = 68; // 'state 68'
gotoTable[1649] = 11; // 'state 11'
gotoTable[1650] = 12; // 'state 12'
gotoTable[1653] = 13; // 'state 13'
gotoTable[1812] = 72; // 'state 72'
gotoTable[1872] = 73; // 'state 73'
gotoTable[1873] = 11; // 'state 11'
gotoTable[1874] = 12; // 'state 12'
gotoTable[1877] = 13; // 'state 13'
gotoTable[1936] = 75; // 'state 75'
gotoTable[1937] = 11; // 'state 11'
gotoTable[1938] = 12; // 'state 12'
gotoTable[1941] = 13; // 'state 13'
gotoTable[2032] = 76; // 'state 76'
gotoTable[2033] = 11; // 'state 11'
gotoTable[2034] = 12; // 'state 12'
gotoTable[2037] = 13; // 'state 13'
gotoTable[2160] = 78; // 'state 78'
gotoTable[2161] = 11; // 'state 11'
gotoTable[2162] = 12; // 'state 12'
gotoTable[2165] = 13; // 'state 13'
gotoTable[2256] = 79; // 'state 79'
gotoTable[2257] = 11; // 'state 11'
gotoTable[2258] = 12; // 'state 12'
gotoTable[2261] = 13; // 'state 13'
gotoTable[2384] = 81; // 'state 81'
gotoTable[2385] = 11; // 'state 11'
gotoTable[2386] = 12; // 'state 12'
gotoTable[2389] = 13; // 'state 13'
gotoTable[2480] = 82; // 'state 82'
gotoTable[2481] = 11; // 'state 11'
gotoTable[2482] = 12; // 'state 12'
gotoTable[2485] = 13; // 'state 13'
gotoTable[2576] = 83; // 'state 83'
gotoTable[2577] = 11; // 'state 11'
gotoTable[2578] = 12; // 'state 12'
gotoTable[2581] = 13; // 'state 13'

const nextToken = nextTokenInitial;

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

    switch (actionLookup & 3) {
      case 2: // done
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
        stack[sp] = actionLookup >> 2;

        result = nextToken(stream, result.end);
        lookahead = result.state;

        break;
      case 1: // reduce
        const actionSymbol = (actionLookup >> 2) & 0xff;
        const stackItemsToReduce = actionLookup >> 10;

        // multiply by two because our stack contains adresses and states interleaved
        sp -= stackItemsToReduce * 2;

        tree[tp] = actionSymbol; // name
        tree[tp + 3] = stackItemsToReduce; // number of children
        tree[tp + 4] = stack[sp + 1]; // first child
        tree[stack[sp - 1] + 5] = tp; // next sibling

        stack[sp + 1] = tp;

        const nextState = gotoTable[stack[sp] * 32 + actionSymbol];
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
