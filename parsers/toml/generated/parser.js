// @ts-nocheck

import { next as nextTokenInitial } from "./lexer-initial.js";
import { next as nextTokenImmMultilineBasicString } from "./lexer-imm__multiline_basic_string.js";
import { next as nextTokenImmMultilineLiteralString } from "./lexer-imm__multiline_literal_string.js";
import { next as nextTokenImmBasicString } from "./lexer-imm__basic_string.js";

/*
      document := _document_repeat1 _document_repeat2;
document := _document_repeat1;
document := _document_repeat2;
_document_repeat1 := pair;
_document_repeat1 := _document_repeat1 pair;
_document_repeat1 := _document_token1;
_document_repeat1 := _document_repeat1 _document_token1;
_document_repeat2 := table;
_document_repeat2 := _document_repeat2 table;
_document_repeat2 := table_array_element;
_document_repeat2 := _document_repeat2 table_array_element;
table := [ dotted_key ] _line_ending_or_eof _document_repeat1;
table := [ dotted_key ] _document_repeat1;
table := [ dotted_key ] _line_ending_or_eof;
table := [ dotted_key ];
table := [ _key ] _line_ending_or_eof _document_repeat1;
table := [ _key ] _document_repeat1;
table := [ _key ] _line_ending_or_eof;
table := [ _key ];
table_array_element := [[ dotted_key ]] _line_ending_or_eof _document_repeat1;
table_array_element := [[ dotted_key ]] _document_repeat1;
table_array_element := [[ dotted_key ]] _line_ending_or_eof;
table_array_element := [[ dotted_key ]];
table_array_element := [[ _key ]] _line_ending_or_eof _document_repeat1;
table_array_element := [[ _key ]] _document_repeat1;
table_array_element := [[ _key ]] _line_ending_or_eof;
table_array_element := [[ _key ]];
pair := _inline_pair _line_ending_or_eof;
pair := _inline_pair;
_inline_pair := dotted_key = _inline_value;
_inline_pair := _key = _inline_value;
_key := bare_key;
_key := quoted_key;
dotted_key := dotted_key . _key;
dotted_key := _key . _key;
quoted_key := _basic_string;
quoted_key := _literal_string;
_inline_value := string;
_inline_value := integer;
_inline_value := float;
_inline_value := boolean;
_inline_value := offset_date_time;
_inline_value := local_date_time;
_inline_value := local_date;
_inline_value := local_time;
_inline_value := array;
_inline_value := inline_table;
string := _basic_string;
string := _multiline_basic_string;
string := _literal_string;
string := _multiline_literal_string;
__basic_string_repeat3 := __basic_string_token2;
__basic_string_repeat3 := __basic_string_repeat3 __basic_string_token2;
__basic_string_repeat3 := escape_sequence;
__basic_string_repeat3 := __basic_string_repeat3 escape_sequence;
_basic_string := " __basic_string_repeat3 ";
_basic_string := " ";
__multiline_basic_string_repeat4 := __multiline_basic_string_token3;
__multiline_basic_string_repeat4 := __multiline_basic_string_repeat4 __multiline_basic_string_token3;
__multiline_basic_string_repeat4 := _multiline_basic_string_content;
__multiline_basic_string_repeat4 := __multiline_basic_string_repeat4 _multiline_basic_string_content;
__multiline_basic_string_repeat4 := __multiline_basic_string_token4;
__multiline_basic_string_repeat4 := __multiline_basic_string_repeat4 __multiline_basic_string_token4;
__multiline_basic_string_repeat4 := escape_sequence;
__multiline_basic_string_repeat4 := __multiline_basic_string_repeat4 escape_sequence;
__multiline_basic_string_repeat4 := _escape_line_ending;
__multiline_basic_string_repeat4 := __multiline_basic_string_repeat4 _escape_line_ending;
_multiline_basic_string := """ __multiline_basic_string_repeat4 """;
_multiline_basic_string := """ """;
__multiline_literal_string_repeat5 := __multiline_literal_string_token5;
__multiline_literal_string_repeat5 := __multiline_literal_string_repeat5 __multiline_literal_string_token5;
__multiline_literal_string_repeat5 := _multiline_literal_string_content;
__multiline_literal_string_repeat5 := __multiline_literal_string_repeat5 _multiline_literal_string_content;
__multiline_literal_string_repeat5 := __multiline_literal_string_token6;
__multiline_literal_string_repeat5 := __multiline_literal_string_repeat5 __multiline_literal_string_token6;
_multiline_literal_string := ''' __multiline_literal_string_repeat5 ''';
_multiline_literal_string := ''' ''';
integer := _integer_token7;
integer := _integer_token8;
integer := _integer_token9;
integer := _integer_token10;
float := _float_token11;
float := _float_token12;
_array_repeat6 := _document_token1;
_array_repeat6 := _array_repeat6 _document_token1;
_array_repeat7 := , _array_repeat6 _inline_value _array_repeat6;
_array_repeat7 := _array_repeat7 , _array_repeat6 _inline_value _array_repeat6;
_array_repeat7 := , _array_repeat6 _inline_value;
_array_repeat7 := _array_repeat7 , _array_repeat6 _inline_value;
_array_repeat7 := , _inline_value _array_repeat6;
_array_repeat7 := _array_repeat7 , _inline_value _array_repeat6;
_array_repeat7 := , _inline_value;
_array_repeat7 := _array_repeat7 , _inline_value;
array := [ _array_repeat6 _inline_value _array_repeat6 _array_repeat7 , _array_repeat6 ];
array := [ _array_repeat6 _inline_value _array_repeat6 _array_repeat7 , ];
array := [ _array_repeat6 _inline_value _array_repeat6 _array_repeat7 ];
array := [ _array_repeat6 _inline_value _array_repeat6 , _array_repeat6 ];
array := [ _array_repeat6 _inline_value _array_repeat6 , ];
array := [ _array_repeat6 _inline_value _array_repeat6 ];
array := [ _array_repeat6 _inline_value _array_repeat7 , _array_repeat6 ];
array := [ _array_repeat6 _inline_value _array_repeat7 , ];
array := [ _array_repeat6 _inline_value _array_repeat7 ];
array := [ _array_repeat6 _inline_value , _array_repeat6 ];
array := [ _array_repeat6 _inline_value , ];
array := [ _array_repeat6 _inline_value ];
array := [ _array_repeat6 ];
array := [ _inline_value _array_repeat6 _array_repeat7 , _array_repeat6 ];
array := [ _inline_value _array_repeat6 _array_repeat7 , ];
array := [ _inline_value _array_repeat6 _array_repeat7 ];
array := [ _inline_value _array_repeat6 , _array_repeat6 ];
array := [ _inline_value _array_repeat6 , ];
array := [ _inline_value _array_repeat6 ];
array := [ _inline_value _array_repeat7 , _array_repeat6 ];
array := [ _inline_value _array_repeat7 , ];
array := [ _inline_value _array_repeat7 ];
array := [ _inline_value , _array_repeat6 ];
array := [ _inline_value , ];
array := [ _inline_value ];
array := [ ];
_inline_table_repeat8 := , _inline_pair;
_inline_table_repeat8 := _inline_table_repeat8 , _inline_pair;
inline_table := { _inline_pair _inline_table_repeat8 };
inline_table := { _inline_pair };
inline_table := { };
_line_ending_or_eof := _document_token1;
      */

const parserSymbols = [
  '"""', // 0
  "'''", // 1
  "[", // 2
  "]", // 3
  "[[", // 4
  "]]", // 5
  "=", // 6
  ".", // 7
  '"', // 8
  ",", // 9
  "{", // 10
  "}", // 11
  "escape_sequence", // 12
  "_escape_line_ending", // 13
  "_literal_string", // 14
  "boolean", // 15
  "offset_date_time", // 16
  "local_date_time", // 17
  "local_date", // 18
  "local_time", // 19
  "_multiline_basic_string_content", // 20
  "_multiline_literal_string_content", // 21
  "_document_token1", // 22
  "__basic_string_token2", // 23
  "__multiline_basic_string_token3", // 24
  "__multiline_basic_string_token4", // 25
  "__multiline_literal_string_token5", // 26
  "__multiline_literal_string_token6", // 27
  "_integer_token7", // 28
  "_integer_token8", // 29
  "_integer_token9", // 30
  "_integer_token10", // 31
  "_float_token11", // 32
  "_float_token12", // 33
  "bare_key", // 34
  "@par-gen.EOF", // 35
  "@par-gen.ERROR", // 36
  "comment", // 37
  "S", // 38
  "document", // 39
  "_document_repeat1", // 40
  "_document_repeat2", // 41
  "table", // 42
  "table_array_element", // 43
  "pair", // 44
  "_inline_pair", // 45
  "_key", // 46
  "dotted_key", // 47
  "quoted_key", // 48
  "_inline_value", // 49
  "string", // 50
  "__basic_string_repeat3", // 51
  "_basic_string", // 52
  "__multiline_basic_string_repeat4", // 53
  "_multiline_basic_string", // 54
  "__multiline_literal_string_repeat5", // 55
  "_multiline_literal_string", // 56
  "integer", // 57
  "float", // 58
  "_array_repeat6", // 59
  "_array_repeat7", // 60
  "array", // 61
  "_inline_table_repeat8", // 62
  "inline_table", // 63
  "_line_ending_or_eof", // 64
];

const actionsTable = new Uint16Array(6320).fill(0xffff);
actionsTable[2] = 2; // 'state 0' -> [ -> shift (target=1, len=0)
actionsTable[4] = 4; // 'state 0' -> [[ -> shift (target=2, len=0)
actionsTable[8] = 6; // 'state 0' -> " -> shift (target=3, len=0)
actionsTable[14] = 90; // 'state 0' -> _literal_string -> shift (target=45, len=0)
actionsTable[22] = 92; // 'state 0' -> _document_token1 -> shift (target=46, len=0)
actionsTable[34] = 94; // 'state 0' -> bare_key -> shift (target=47, len=0)
actionsTable[72] = 6; // 'state 1' -> " -> shift (target=3, len=0)
actionsTable[78] = 90; // 'state 1' -> _literal_string -> shift (target=45, len=0)
actionsTable[98] = 94; // 'state 1' -> bare_key -> shift (target=47, len=0)
actionsTable[136] = 6; // 'state 2' -> " -> shift (target=3, len=0)
actionsTable[142] = 90; // 'state 2' -> _literal_string -> shift (target=45, len=0)
actionsTable[162] = 94; // 'state 2' -> bare_key -> shift (target=47, len=0)
actionsTable[200] = 114; // 'state 3' -> " -> shift (target=57, len=0)
actionsTable[204] = 116; // 'state 3' -> escape_sequence -> shift (target=58, len=0)
actionsTable[215] = 116; // 'state 3' -> __basic_string_token2 -> shift (target=58, len=0)
actionsTable[258] = 2; // 'state 4' -> [ -> shift (target=1, len=0)
actionsTable[260] = 4; // 'state 4' -> [[ -> shift (target=2, len=0)
actionsTable[264] = 6; // 'state 4' -> " -> shift (target=3, len=0)
actionsTable[270] = 90; // 'state 4' -> _literal_string -> shift (target=45, len=0)
actionsTable[278] = 102; // 'state 4' -> _document_token1 -> shift (target=51, len=0)
actionsTable[290] = 94; // 'state 4' -> bare_key -> shift (target=47, len=0)
actionsTable[291] = 591; // 'state 4' -> @par-gen.EOF -> reduce (target=39, len=1)
actionsTable[322] = 2; // 'state 5' -> [ -> shift (target=1, len=0)
actionsTable[324] = 4; // 'state 5' -> [[ -> shift (target=2, len=0)
actionsTable[355] = 591; // 'state 5' -> @par-gen.EOF -> reduce (target=39, len=1)
actionsTable[386] = 601; // 'state 6' -> [ -> reduce (target=44, len=1)
actionsTable[388] = 601; // 'state 6' -> [[ -> reduce (target=44, len=1)
actionsTable[392] = 601; // 'state 6' -> " -> reduce (target=44, len=1)
actionsTable[398] = 601; // 'state 6' -> _literal_string -> reduce (target=44, len=1)
actionsTable[406] = 106; // 'state 6' -> _document_token1 -> shift (target=53, len=0)
actionsTable.fill(601, 418, 420); // 'state 6' -> bare_key..@par-gen.EOF -> reduce (target=44, len=1)
actionsTable[450] = 2; // 'state 7' -> [ -> shift (target=1, len=0)
actionsTable[452] = 4; // 'state 7' -> [[ -> shift (target=2, len=0)
actionsTable[483] = 1103; // 'state 7' -> @par-gen.EOF -> reduce (target=39, len=2)
actionsTable[512] = 24; // 'state 8' -> """ -> shift (target=12, len=0)
actionsTable[513] = 26; // 'state 8' -> ''' -> shift (target=13, len=0)
actionsTable[514] = 28; // 'state 8' -> [ -> shift (target=14, len=0)
actionsTable[520] = 6; // 'state 8' -> " -> shift (target=3, len=0)
actionsTable[522] = 30; // 'state 8' -> { -> shift (target=15, len=0)
actionsTable[526] = 120; // 'state 8' -> _literal_string -> shift (target=60, len=0)
actionsTable.fill(122, 527, 532); // 'state 8' -> boolean..local_time -> shift (target=61, len=0)
actionsTable.fill(124, 540, 544); // 'state 8' -> _integer_token7.._integer_token10 -> shift (target=62, len=0)
actionsTable.fill(126, 544, 546); // 'state 8' -> _float_token11.._float_token12 -> shift (target=63, len=0)
actionsTable[584] = 6; // 'state 9' -> " -> shift (target=3, len=0)
actionsTable[590] = 90; // 'state 9' -> _literal_string -> shift (target=45, len=0)
actionsTable[610] = 94; // 'state 9' -> bare_key -> shift (target=47, len=0)
actionsTable[642] = 1621; // 'state 10' -> [ -> reduce (target=42, len=3)
actionsTable[644] = 1621; // 'state 10' -> [[ -> reduce (target=42, len=3)
actionsTable[648] = 6; // 'state 10' -> " -> shift (target=3, len=0)
actionsTable[654] = 90; // 'state 10' -> _literal_string -> shift (target=45, len=0)
actionsTable[662] = 92; // 'state 10' -> _document_token1 -> shift (target=46, len=0)
actionsTable[674] = 94; // 'state 10' -> bare_key -> shift (target=47, len=0)
actionsTable[675] = 1621; // 'state 10' -> @par-gen.EOF -> reduce (target=42, len=3)
actionsTable[706] = 1623; // 'state 11' -> [ -> reduce (target=43, len=3)
actionsTable[708] = 1623; // 'state 11' -> [[ -> reduce (target=43, len=3)
actionsTable[712] = 6; // 'state 11' -> " -> shift (target=3, len=0)
actionsTable[718] = 90; // 'state 11' -> _literal_string -> shift (target=45, len=0)
actionsTable[726] = 92; // 'state 11' -> _document_token1 -> shift (target=46, len=0)
actionsTable[738] = 94; // 'state 11' -> bare_key -> shift (target=47, len=0)
actionsTable[739] = 1623; // 'state 11' -> @par-gen.EOF -> reduce (target=43, len=3)
actionsTable[768] = 142; // 'state 12' -> """ -> shift (target=71, len=0)
actionsTable.fill(144, 780, 782); // 'state 12' -> escape_sequence.._escape_line_ending -> shift (target=72, len=0)
actionsTable[788] = 144; // 'state 12' -> _multiline_basic_string_content -> shift (target=72, len=0)
actionsTable.fill(144, 792, 794); // 'state 12' -> __multiline_basic_string_token3..__multiline_basic_string_token4 -> shift (target=72, len=0)
actionsTable[833] = 148; // 'state 13' -> ''' -> shift (target=74, len=0)
actionsTable[853] = 150; // 'state 13' -> _multiline_literal_string_content -> shift (target=75, len=0)
actionsTable.fill(150, 858, 860); // 'state 13' -> __multiline_literal_string_token5..__multiline_literal_string_token6 -> shift (target=75, len=0)
actionsTable[896] = 24; // 'state 14' -> """ -> shift (target=12, len=0)
actionsTable[897] = 26; // 'state 14' -> ''' -> shift (target=13, len=0)
actionsTable[898] = 28; // 'state 14' -> [ -> shift (target=14, len=0)
actionsTable[899] = 136; // 'state 14' -> ] -> shift (target=68, len=0)
actionsTable[904] = 6; // 'state 14' -> " -> shift (target=3, len=0)
actionsTable[906] = 30; // 'state 14' -> { -> shift (target=15, len=0)
actionsTable[910] = 120; // 'state 14' -> _literal_string -> shift (target=60, len=0)
actionsTable.fill(122, 911, 916); // 'state 14' -> boolean..local_time -> shift (target=61, len=0)
actionsTable[918] = 138; // 'state 14' -> _document_token1 -> shift (target=69, len=0)
actionsTable.fill(124, 924, 928); // 'state 14' -> _integer_token7.._integer_token10 -> shift (target=62, len=0)
actionsTable.fill(126, 928, 930); // 'state 14' -> _float_token11.._float_token12 -> shift (target=63, len=0)
actionsTable[968] = 6; // 'state 15' -> " -> shift (target=3, len=0)
actionsTable[971] = 140; // 'state 15' -> } -> shift (target=70, len=0)
actionsTable[974] = 90; // 'state 15' -> _literal_string -> shift (target=45, len=0)
actionsTable[994] = 94; // 'state 15' -> bare_key -> shift (target=47, len=0)
actionsTable[1026] = 2133; // 'state 16' -> [ -> reduce (target=42, len=4)
actionsTable[1028] = 2133; // 'state 16' -> [[ -> reduce (target=42, len=4)
actionsTable[1032] = 6; // 'state 16' -> " -> shift (target=3, len=0)
actionsTable[1038] = 90; // 'state 16' -> _literal_string -> shift (target=45, len=0)
actionsTable[1046] = 102; // 'state 16' -> _document_token1 -> shift (target=51, len=0)
actionsTable[1058] = 94; // 'state 16' -> bare_key -> shift (target=47, len=0)
actionsTable[1059] = 2133; // 'state 16' -> @par-gen.EOF -> reduce (target=42, len=4)
actionsTable[1090] = 2133; // 'state 17' -> [ -> reduce (target=42, len=4)
actionsTable[1092] = 2133; // 'state 17' -> [[ -> reduce (target=42, len=4)
actionsTable[1096] = 6; // 'state 17' -> " -> shift (target=3, len=0)
actionsTable[1102] = 90; // 'state 17' -> _literal_string -> shift (target=45, len=0)
actionsTable[1110] = 92; // 'state 17' -> _document_token1 -> shift (target=46, len=0)
actionsTable[1122] = 94; // 'state 17' -> bare_key -> shift (target=47, len=0)
actionsTable[1123] = 2133; // 'state 17' -> @par-gen.EOF -> reduce (target=42, len=4)
actionsTable[1154] = 2135; // 'state 18' -> [ -> reduce (target=43, len=4)
actionsTable[1156] = 2135; // 'state 18' -> [[ -> reduce (target=43, len=4)
actionsTable[1160] = 6; // 'state 18' -> " -> shift (target=3, len=0)
actionsTable[1166] = 90; // 'state 18' -> _literal_string -> shift (target=45, len=0)
actionsTable[1174] = 102; // 'state 18' -> _document_token1 -> shift (target=51, len=0)
actionsTable[1186] = 94; // 'state 18' -> bare_key -> shift (target=47, len=0)
actionsTable[1187] = 2135; // 'state 18' -> @par-gen.EOF -> reduce (target=43, len=4)
actionsTable[1218] = 2135; // 'state 19' -> [ -> reduce (target=43, len=4)
actionsTable[1220] = 2135; // 'state 19' -> [[ -> reduce (target=43, len=4)
actionsTable[1224] = 6; // 'state 19' -> " -> shift (target=3, len=0)
actionsTable[1230] = 90; // 'state 19' -> _literal_string -> shift (target=45, len=0)
actionsTable[1238] = 92; // 'state 19' -> _document_token1 -> shift (target=46, len=0)
actionsTable[1250] = 94; // 'state 19' -> bare_key -> shift (target=47, len=0)
actionsTable[1251] = 2135; // 'state 19' -> @par-gen.EOF -> reduce (target=43, len=4)
actionsTable[1283] = 154; // 'state 20' -> ] -> shift (target=77, len=0)
actionsTable[1289] = 52; // 'state 20' -> , -> shift (target=26, len=0)
actionsTable[1302] = 138; // 'state 20' -> _document_token1 -> shift (target=69, len=0)
actionsTable[1344] = 24; // 'state 21' -> """ -> shift (target=12, len=0)
actionsTable[1345] = 26; // 'state 21' -> ''' -> shift (target=13, len=0)
actionsTable[1346] = 28; // 'state 21' -> [ -> shift (target=14, len=0)
actionsTable[1347] = 154; // 'state 21' -> ] -> shift (target=77, len=0)
actionsTable[1352] = 6; // 'state 21' -> " -> shift (target=3, len=0)
actionsTable[1354] = 30; // 'state 21' -> { -> shift (target=15, len=0)
actionsTable[1358] = 120; // 'state 21' -> _literal_string -> shift (target=60, len=0)
actionsTable.fill(122, 1359, 1364); // 'state 21' -> boolean..local_time -> shift (target=61, len=0)
actionsTable[1366] = 156; // 'state 21' -> _document_token1 -> shift (target=78, len=0)
actionsTable.fill(124, 1372, 1376); // 'state 21' -> _integer_token7.._integer_token10 -> shift (target=62, len=0)
actionsTable.fill(126, 1376, 1378); // 'state 21' -> _float_token11.._float_token12 -> shift (target=63, len=0)
actionsTable[1417] = 56; // 'state 22' -> , -> shift (target=28, len=0)
actionsTable[1419] = 160; // 'state 22' -> } -> shift (target=80, len=0)
actionsTable[1474] = 2645; // 'state 23' -> [ -> reduce (target=42, len=5)
actionsTable[1476] = 2645; // 'state 23' -> [[ -> reduce (target=42, len=5)
actionsTable[1480] = 6; // 'state 23' -> " -> shift (target=3, len=0)
actionsTable[1486] = 90; // 'state 23' -> _literal_string -> shift (target=45, len=0)
actionsTable[1494] = 102; // 'state 23' -> _document_token1 -> shift (target=51, len=0)
actionsTable[1506] = 94; // 'state 23' -> bare_key -> shift (target=47, len=0)
actionsTable[1507] = 2645; // 'state 23' -> @par-gen.EOF -> reduce (target=42, len=5)
actionsTable[1538] = 2647; // 'state 24' -> [ -> reduce (target=43, len=5)
actionsTable[1540] = 2647; // 'state 24' -> [[ -> reduce (target=43, len=5)
actionsTable[1544] = 6; // 'state 24' -> " -> shift (target=3, len=0)
actionsTable[1550] = 90; // 'state 24' -> _literal_string -> shift (target=45, len=0)
actionsTable[1558] = 102; // 'state 24' -> _document_token1 -> shift (target=51, len=0)
actionsTable[1570] = 94; // 'state 24' -> bare_key -> shift (target=47, len=0)
actionsTable[1571] = 2647; // 'state 24' -> @par-gen.EOF -> reduce (target=43, len=5)
actionsTable[1603] = 172; // 'state 25' -> ] -> shift (target=86, len=0)
actionsTable[1609] = 58; // 'state 25' -> , -> shift (target=29, len=0)
actionsTable[1622] = 138; // 'state 25' -> _document_token1 -> shift (target=69, len=0)
actionsTable[1664] = 24; // 'state 26' -> """ -> shift (target=12, len=0)
actionsTable[1665] = 26; // 'state 26' -> ''' -> shift (target=13, len=0)
actionsTable[1666] = 28; // 'state 26' -> [ -> shift (target=14, len=0)
actionsTable[1667] = 172; // 'state 26' -> ] -> shift (target=86, len=0)
actionsTable[1672] = 6; // 'state 26' -> " -> shift (target=3, len=0)
actionsTable[1674] = 30; // 'state 26' -> { -> shift (target=15, len=0)
actionsTable[1678] = 120; // 'state 26' -> _literal_string -> shift (target=60, len=0)
actionsTable.fill(122, 1679, 1684); // 'state 26' -> boolean..local_time -> shift (target=61, len=0)
actionsTable[1686] = 138; // 'state 26' -> _document_token1 -> shift (target=69, len=0)
actionsTable.fill(124, 1692, 1696); // 'state 26' -> _integer_token7.._integer_token10 -> shift (target=62, len=0)
actionsTable.fill(126, 1696, 1698); // 'state 26' -> _float_token11.._float_token12 -> shift (target=63, len=0)
actionsTable[1731] = 172; // 'state 27' -> ] -> shift (target=86, len=0)
actionsTable[1737] = 58; // 'state 27' -> , -> shift (target=29, len=0)
actionsTable[1750] = 156; // 'state 27' -> _document_token1 -> shift (target=78, len=0)
actionsTable[1800] = 6; // 'state 28' -> " -> shift (target=3, len=0)
actionsTable[1806] = 90; // 'state 28' -> _literal_string -> shift (target=45, len=0)
actionsTable[1826] = 94; // 'state 28' -> bare_key -> shift (target=47, len=0)
actionsTable[1856] = 24; // 'state 29' -> """ -> shift (target=12, len=0)
actionsTable[1857] = 26; // 'state 29' -> ''' -> shift (target=13, len=0)
actionsTable[1858] = 28; // 'state 29' -> [ -> shift (target=14, len=0)
actionsTable[1859] = 180; // 'state 29' -> ] -> shift (target=90, len=0)
actionsTable[1864] = 6; // 'state 29' -> " -> shift (target=3, len=0)
actionsTable[1866] = 30; // 'state 29' -> { -> shift (target=15, len=0)
actionsTable[1870] = 120; // 'state 29' -> _literal_string -> shift (target=60, len=0)
actionsTable.fill(122, 1871, 1876); // 'state 29' -> boolean..local_time -> shift (target=61, len=0)
actionsTable[1878] = 138; // 'state 29' -> _document_token1 -> shift (target=69, len=0)
actionsTable.fill(124, 1884, 1888); // 'state 29' -> _integer_token7.._integer_token10 -> shift (target=62, len=0)
actionsTable.fill(126, 1888, 1890); // 'state 29' -> _float_token11.._float_token12 -> shift (target=63, len=0)
actionsTable[1923] = 180; // 'state 30' -> ] -> shift (target=90, len=0)
actionsTable[1929] = 70; // 'state 30' -> , -> shift (target=35, len=0)
actionsTable[1942] = 156; // 'state 30' -> _document_token1 -> shift (target=78, len=0)
actionsTable[1984] = 24; // 'state 31' -> """ -> shift (target=12, len=0)
actionsTable[1985] = 26; // 'state 31' -> ''' -> shift (target=13, len=0)
actionsTable[1986] = 28; // 'state 31' -> [ -> shift (target=14, len=0)
actionsTable[1987] = 180; // 'state 31' -> ] -> shift (target=90, len=0)
actionsTable[1992] = 6; // 'state 31' -> " -> shift (target=3, len=0)
actionsTable[1994] = 30; // 'state 31' -> { -> shift (target=15, len=0)
actionsTable[1998] = 120; // 'state 31' -> _literal_string -> shift (target=60, len=0)
actionsTable.fill(122, 1999, 2004); // 'state 31' -> boolean..local_time -> shift (target=61, len=0)
actionsTable[2006] = 138; // 'state 31' -> _document_token1 -> shift (target=69, len=0)
actionsTable.fill(124, 2012, 2016); // 'state 31' -> _integer_token7.._integer_token10 -> shift (target=62, len=0)
actionsTable.fill(126, 2016, 2018); // 'state 31' -> _float_token11.._float_token12 -> shift (target=63, len=0)
actionsTable[2051] = 1145; // 'state 32' -> ] -> reduce (target=60, len=2)
actionsTable[2057] = 1145; // 'state 32' -> , -> reduce (target=60, len=2)
actionsTable[2070] = 138; // 'state 32' -> _document_token1 -> shift (target=69, len=0)
actionsTable[2112] = 24; // 'state 33' -> """ -> shift (target=12, len=0)
actionsTable[2113] = 26; // 'state 33' -> ''' -> shift (target=13, len=0)
actionsTable[2114] = 28; // 'state 33' -> [ -> shift (target=14, len=0)
actionsTable[2115] = 180; // 'state 33' -> ] -> shift (target=90, len=0)
actionsTable[2120] = 6; // 'state 33' -> " -> shift (target=3, len=0)
actionsTable[2122] = 30; // 'state 33' -> { -> shift (target=15, len=0)
actionsTable[2126] = 120; // 'state 33' -> _literal_string -> shift (target=60, len=0)
actionsTable.fill(122, 2127, 2132); // 'state 33' -> boolean..local_time -> shift (target=61, len=0)
actionsTable[2134] = 156; // 'state 33' -> _document_token1 -> shift (target=78, len=0)
actionsTable.fill(124, 2140, 2144); // 'state 33' -> _integer_token7.._integer_token10 -> shift (target=62, len=0)
actionsTable.fill(126, 2144, 2146); // 'state 33' -> _float_token11.._float_token12 -> shift (target=63, len=0)
actionsTable[2184] = 6; // 'state 34' -> " -> shift (target=3, len=0)
actionsTable[2190] = 90; // 'state 34' -> _literal_string -> shift (target=45, len=0)
actionsTable[2210] = 94; // 'state 34' -> bare_key -> shift (target=47, len=0)
actionsTable[2240] = 24; // 'state 35' -> """ -> shift (target=12, len=0)
actionsTable[2241] = 26; // 'state 35' -> ''' -> shift (target=13, len=0)
actionsTable[2242] = 28; // 'state 35' -> [ -> shift (target=14, len=0)
actionsTable[2243] = 188; // 'state 35' -> ] -> shift (target=94, len=0)
actionsTable[2248] = 6; // 'state 35' -> " -> shift (target=3, len=0)
actionsTable[2250] = 30; // 'state 35' -> { -> shift (target=15, len=0)
actionsTable[2254] = 120; // 'state 35' -> _literal_string -> shift (target=60, len=0)
actionsTable.fill(122, 2255, 2260); // 'state 35' -> boolean..local_time -> shift (target=61, len=0)
actionsTable[2262] = 138; // 'state 35' -> _document_token1 -> shift (target=69, len=0)
actionsTable.fill(124, 2268, 2272); // 'state 35' -> _integer_token7.._integer_token10 -> shift (target=62, len=0)
actionsTable.fill(126, 2272, 2274); // 'state 35' -> _float_token11.._float_token12 -> shift (target=63, len=0)
actionsTable[2304] = 24; // 'state 36' -> """ -> shift (target=12, len=0)
actionsTable[2305] = 26; // 'state 36' -> ''' -> shift (target=13, len=0)
actionsTable[2306] = 28; // 'state 36' -> [ -> shift (target=14, len=0)
actionsTable[2307] = 188; // 'state 36' -> ] -> shift (target=94, len=0)
actionsTable[2312] = 6; // 'state 36' -> " -> shift (target=3, len=0)
actionsTable[2314] = 30; // 'state 36' -> { -> shift (target=15, len=0)
actionsTable[2318] = 120; // 'state 36' -> _literal_string -> shift (target=60, len=0)
actionsTable.fill(122, 2319, 2324); // 'state 36' -> boolean..local_time -> shift (target=61, len=0)
actionsTable[2326] = 138; // 'state 36' -> _document_token1 -> shift (target=69, len=0)
actionsTable.fill(124, 2332, 2336); // 'state 36' -> _integer_token7.._integer_token10 -> shift (target=62, len=0)
actionsTable.fill(126, 2336, 2338); // 'state 36' -> _float_token11.._float_token12 -> shift (target=63, len=0)
actionsTable[2368] = 24; // 'state 37' -> """ -> shift (target=12, len=0)
actionsTable[2369] = 26; // 'state 37' -> ''' -> shift (target=13, len=0)
actionsTable[2370] = 28; // 'state 37' -> [ -> shift (target=14, len=0)
actionsTable[2371] = 188; // 'state 37' -> ] -> shift (target=94, len=0)
actionsTable[2376] = 6; // 'state 37' -> " -> shift (target=3, len=0)
actionsTable[2378] = 30; // 'state 37' -> { -> shift (target=15, len=0)
actionsTable[2382] = 120; // 'state 37' -> _literal_string -> shift (target=60, len=0)
actionsTable.fill(122, 2383, 2388); // 'state 37' -> boolean..local_time -> shift (target=61, len=0)
actionsTable[2390] = 156; // 'state 37' -> _document_token1 -> shift (target=78, len=0)
actionsTable.fill(124, 2396, 2400); // 'state 37' -> _integer_token7.._integer_token10 -> shift (target=62, len=0)
actionsTable.fill(126, 2400, 2402); // 'state 37' -> _float_token11.._float_token12 -> shift (target=63, len=0)
actionsTable[2435] = 1657; // 'state 38' -> ] -> reduce (target=60, len=3)
actionsTable[2441] = 1657; // 'state 38' -> , -> reduce (target=60, len=3)
actionsTable[2454] = 138; // 'state 38' -> _document_token1 -> shift (target=69, len=0)
actionsTable[2496] = 24; // 'state 39' -> """ -> shift (target=12, len=0)
actionsTable[2497] = 26; // 'state 39' -> ''' -> shift (target=13, len=0)
actionsTable[2498] = 28; // 'state 39' -> [ -> shift (target=14, len=0)
actionsTable[2499] = 188; // 'state 39' -> ] -> shift (target=94, len=0)
actionsTable[2504] = 6; // 'state 39' -> " -> shift (target=3, len=0)
actionsTable[2506] = 30; // 'state 39' -> { -> shift (target=15, len=0)
actionsTable[2510] = 120; // 'state 39' -> _literal_string -> shift (target=60, len=0)
actionsTable.fill(122, 2511, 2516); // 'state 39' -> boolean..local_time -> shift (target=61, len=0)
actionsTable[2518] = 156; // 'state 39' -> _document_token1 -> shift (target=78, len=0)
actionsTable.fill(124, 2524, 2528); // 'state 39' -> _integer_token7.._integer_token10 -> shift (target=62, len=0)
actionsTable.fill(126, 2528, 2530); // 'state 39' -> _float_token11.._float_token12 -> shift (target=63, len=0)
actionsTable[2560] = 24; // 'state 40' -> """ -> shift (target=12, len=0)
actionsTable[2561] = 26; // 'state 40' -> ''' -> shift (target=13, len=0)
actionsTable[2562] = 28; // 'state 40' -> [ -> shift (target=14, len=0)
actionsTable[2563] = 192; // 'state 40' -> ] -> shift (target=96, len=0)
actionsTable[2568] = 6; // 'state 40' -> " -> shift (target=3, len=0)
actionsTable[2570] = 30; // 'state 40' -> { -> shift (target=15, len=0)
actionsTable[2574] = 120; // 'state 40' -> _literal_string -> shift (target=60, len=0)
actionsTable.fill(122, 2575, 2580); // 'state 40' -> boolean..local_time -> shift (target=61, len=0)
actionsTable[2582] = 138; // 'state 40' -> _document_token1 -> shift (target=69, len=0)
actionsTable.fill(124, 2588, 2592); // 'state 40' -> _integer_token7.._integer_token10 -> shift (target=62, len=0)
actionsTable.fill(126, 2592, 2594); // 'state 40' -> _float_token11.._float_token12 -> shift (target=63, len=0)
actionsTable[2624] = 24; // 'state 41' -> """ -> shift (target=12, len=0)
actionsTable[2625] = 26; // 'state 41' -> ''' -> shift (target=13, len=0)
actionsTable[2626] = 28; // 'state 41' -> [ -> shift (target=14, len=0)
actionsTable[2627] = 192; // 'state 41' -> ] -> shift (target=96, len=0)
actionsTable[2632] = 6; // 'state 41' -> " -> shift (target=3, len=0)
actionsTable[2634] = 30; // 'state 41' -> { -> shift (target=15, len=0)
actionsTable[2638] = 120; // 'state 41' -> _literal_string -> shift (target=60, len=0)
actionsTable.fill(122, 2639, 2644); // 'state 41' -> boolean..local_time -> shift (target=61, len=0)
actionsTable[2646] = 156; // 'state 41' -> _document_token1 -> shift (target=78, len=0)
actionsTable.fill(124, 2652, 2656); // 'state 41' -> _integer_token7.._integer_token10 -> shift (target=62, len=0)
actionsTable.fill(126, 2656, 2658); // 'state 41' -> _float_token11.._float_token12 -> shift (target=63, len=0)
actionsTable[2688] = 24; // 'state 42' -> """ -> shift (target=12, len=0)
actionsTable[2689] = 26; // 'state 42' -> ''' -> shift (target=13, len=0)
actionsTable[2690] = 28; // 'state 42' -> [ -> shift (target=14, len=0)
actionsTable[2691] = 192; // 'state 42' -> ] -> shift (target=96, len=0)
actionsTable[2696] = 6; // 'state 42' -> " -> shift (target=3, len=0)
actionsTable[2698] = 30; // 'state 42' -> { -> shift (target=15, len=0)
actionsTable[2702] = 120; // 'state 42' -> _literal_string -> shift (target=60, len=0)
actionsTable.fill(122, 2703, 2708); // 'state 42' -> boolean..local_time -> shift (target=61, len=0)
actionsTable[2710] = 156; // 'state 42' -> _document_token1 -> shift (target=78, len=0)
actionsTable.fill(124, 2716, 2720); // 'state 42' -> _integer_token7.._integer_token10 -> shift (target=62, len=0)
actionsTable.fill(126, 2720, 2722); // 'state 42' -> _float_token11.._float_token12 -> shift (target=63, len=0)
actionsTable[2755] = 2169; // 'state 43' -> ] -> reduce (target=60, len=4)
actionsTable[2761] = 2169; // 'state 43' -> , -> reduce (target=60, len=4)
actionsTable[2774] = 138; // 'state 43' -> _document_token1 -> shift (target=69, len=0)
actionsTable[2816] = 24; // 'state 44' -> """ -> shift (target=12, len=0)
actionsTable[2817] = 26; // 'state 44' -> ''' -> shift (target=13, len=0)
actionsTable[2818] = 28; // 'state 44' -> [ -> shift (target=14, len=0)
actionsTable[2819] = 196; // 'state 44' -> ] -> shift (target=98, len=0)
actionsTable[2824] = 6; // 'state 44' -> " -> shift (target=3, len=0)
actionsTable[2826] = 30; // 'state 44' -> { -> shift (target=15, len=0)
actionsTable[2830] = 120; // 'state 44' -> _literal_string -> shift (target=60, len=0)
actionsTable.fill(122, 2831, 2836); // 'state 44' -> boolean..local_time -> shift (target=61, len=0)
actionsTable[2838] = 156; // 'state 44' -> _document_token1 -> shift (target=78, len=0)
actionsTable.fill(124, 2844, 2848); // 'state 44' -> _integer_token7.._integer_token10 -> shift (target=62, len=0)
actionsTable.fill(126, 2848, 2850); // 'state 44' -> _float_token11.._float_token12 -> shift (target=63, len=0)
actionsTable[2883] = 609; // 'state 45' -> ] -> reduce (target=48, len=1)
actionsTable.fill(609, 2885, 2888); // 'state 45' -> ]]... -> reduce (target=48, len=1)
actionsTable[2946] = 593; // 'state 46' -> [ -> reduce (target=40, len=1)
actionsTable[2948] = 593; // 'state 46' -> [[ -> reduce (target=40, len=1)
actionsTable[2952] = 593; // 'state 46' -> " -> reduce (target=40, len=1)
actionsTable[2958] = 593; // 'state 46' -> _literal_string -> reduce (target=40, len=1)
actionsTable[2966] = 593; // 'state 46' -> _document_token1 -> reduce (target=40, len=1)
actionsTable.fill(593, 2978, 2980); // 'state 46' -> bare_key..@par-gen.EOF -> reduce (target=40, len=1)
actionsTable[3011] = 605; // 'state 47' -> ] -> reduce (target=46, len=1)
actionsTable.fill(605, 3013, 3016); // 'state 47' -> ]]... -> reduce (target=46, len=1)
actionsTable[3107] = 65534; // 'state 48' -> @par-gen.EOF -> done (target=0, len=0)
actionsTable[3138] = 595; // 'state 49' -> [ -> reduce (target=41, len=1)
actionsTable[3140] = 595; // 'state 49' -> [[ -> reduce (target=41, len=1)
actionsTable[3171] = 595; // 'state 49' -> @par-gen.EOF -> reduce (target=41, len=1)
actionsTable[3206] = 16; // 'state 50' -> = -> shift (target=8, len=0)
actionsTable[3207] = 18; // 'state 50' -> . -> shift (target=9, len=0)
actionsTable[3266] = 1105; // 'state 51' -> [ -> reduce (target=40, len=2)
actionsTable[3268] = 1105; // 'state 51' -> [[ -> reduce (target=40, len=2)
actionsTable[3272] = 1105; // 'state 51' -> " -> reduce (target=40, len=2)
actionsTable[3278] = 1105; // 'state 51' -> _literal_string -> reduce (target=40, len=2)
actionsTable[3286] = 1105; // 'state 51' -> _document_token1 -> reduce (target=40, len=2)
actionsTable.fill(1105, 3298, 3300); // 'state 51' -> bare_key..@par-gen.EOF -> reduce (target=40, len=2)
actionsTable[3330] = 1107; // 'state 52' -> [ -> reduce (target=41, len=2)
actionsTable[3332] = 1107; // 'state 52' -> [[ -> reduce (target=41, len=2)
actionsTable[3363] = 1107; // 'state 52' -> @par-gen.EOF -> reduce (target=41, len=2)
actionsTable[3394] = 641; // 'state 53' -> [ -> reduce (target=64, len=1)
actionsTable[3396] = 641; // 'state 53' -> [[ -> reduce (target=64, len=1)
actionsTable[3400] = 641; // 'state 53' -> " -> reduce (target=64, len=1)
actionsTable[3406] = 641; // 'state 53' -> _literal_string -> reduce (target=64, len=1)
actionsTable[3414] = 641; // 'state 53' -> _document_token1 -> reduce (target=64, len=1)
actionsTable.fill(641, 3426, 3428); // 'state 53' -> bare_key..@par-gen.EOF -> reduce (target=64, len=1)
actionsTable[3458] = 1113; // 'state 54' -> [ -> reduce (target=44, len=2)
actionsTable[3460] = 1113; // 'state 54' -> [[ -> reduce (target=44, len=2)
actionsTable[3464] = 1113; // 'state 54' -> " -> reduce (target=44, len=2)
actionsTable[3470] = 1113; // 'state 54' -> _literal_string -> reduce (target=44, len=2)
actionsTable[3478] = 1113; // 'state 54' -> _document_token1 -> reduce (target=44, len=2)
actionsTable.fill(1113, 3490, 3492); // 'state 54' -> bare_key..@par-gen.EOF -> reduce (target=44, len=2)
actionsTable[3523] = 20; // 'state 55' -> ] -> shift (target=10, len=0)
actionsTable[3527] = 18; // 'state 55' -> . -> shift (target=9, len=0)
actionsTable[3589] = 22; // 'state 56' -> ]] -> shift (target=11, len=0)
actionsTable[3591] = 18; // 'state 56' -> . -> shift (target=9, len=0)
actionsTable.fill(1129, 3650, 3658); // 'state 57' -> [.., -> reduce (target=52, len=2)
actionsTable[3659] = 1129; // 'state 57' -> } -> reduce (target=52, len=2)
actionsTable[3662] = 1129; // 'state 57' -> _literal_string -> reduce (target=52, len=2)
actionsTable[3670] = 1129; // 'state 57' -> _document_token1 -> reduce (target=52, len=2)
actionsTable.fill(1129, 3682, 3684); // 'state 57' -> bare_key..@par-gen.EOF -> reduce (target=52, len=2)
actionsTable[3720] = 615; // 'state 58' -> " -> reduce (target=51, len=1)
actionsTable[3724] = 615; // 'state 58' -> escape_sequence -> reduce (target=51, len=1)
actionsTable[3735] = 615; // 'state 58' -> __basic_string_token2 -> reduce (target=51, len=1)
actionsTable[3784] = 132; // 'state 59' -> " -> shift (target=66, len=0)
actionsTable[3788] = 134; // 'state 59' -> escape_sequence -> shift (target=67, len=0)
actionsTable[3799] = 134; // 'state 59' -> __basic_string_token2 -> shift (target=67, len=0)
actionsTable.fill(613, 3842, 3845); // 'state 60' -> [..[[ -> reduce (target=50, len=1)
actionsTable.fill(613, 3848, 3850); // 'state 60' -> ".., -> reduce (target=50, len=1)
actionsTable[3851] = 613; // 'state 60' -> } -> reduce (target=50, len=1)
actionsTable[3854] = 613; // 'state 60' -> _literal_string -> reduce (target=50, len=1)
actionsTable[3862] = 613; // 'state 60' -> _document_token1 -> reduce (target=50, len=1)
actionsTable.fill(613, 3874, 3876); // 'state 60' -> bare_key..@par-gen.EOF -> reduce (target=50, len=1)
actionsTable.fill(611, 3906, 3909); // 'state 61' -> [..[[ -> reduce (target=49, len=1)
actionsTable.fill(611, 3912, 3914); // 'state 61' -> ".., -> reduce (target=49, len=1)
actionsTable[3915] = 611; // 'state 61' -> } -> reduce (target=49, len=1)
actionsTable[3918] = 611; // 'state 61' -> _literal_string -> reduce (target=49, len=1)
actionsTable[3926] = 611; // 'state 61' -> _document_token1 -> reduce (target=49, len=1)
actionsTable.fill(611, 3938, 3940); // 'state 61' -> bare_key..@par-gen.EOF -> reduce (target=49, len=1)
actionsTable.fill(627, 3970, 3973); // 'state 62' -> [..[[ -> reduce (target=57, len=1)
actionsTable.fill(627, 3976, 3978); // 'state 62' -> ".., -> reduce (target=57, len=1)
actionsTable[3979] = 627; // 'state 62' -> } -> reduce (target=57, len=1)
actionsTable[3982] = 627; // 'state 62' -> _literal_string -> reduce (target=57, len=1)
actionsTable[3990] = 627; // 'state 62' -> _document_token1 -> reduce (target=57, len=1)
actionsTable.fill(627, 4002, 4004); // 'state 62' -> bare_key..@par-gen.EOF -> reduce (target=57, len=1)
actionsTable.fill(629, 4034, 4037); // 'state 63' -> [..[[ -> reduce (target=58, len=1)
actionsTable.fill(629, 4040, 4042); // 'state 63' -> ".., -> reduce (target=58, len=1)
actionsTable[4043] = 629; // 'state 63' -> } -> reduce (target=58, len=1)
actionsTable[4046] = 629; // 'state 63' -> _literal_string -> reduce (target=58, len=1)
actionsTable[4054] = 629; // 'state 63' -> _document_token1 -> reduce (target=58, len=1)
actionsTable.fill(629, 4066, 4068); // 'state 63' -> bare_key..@par-gen.EOF -> reduce (target=58, len=1)
actionsTable[4098] = 1627; // 'state 64' -> [ -> reduce (target=45, len=3)
actionsTable[4100] = 1627; // 'state 64' -> [[ -> reduce (target=45, len=3)
actionsTable.fill(1627, 4104, 4106); // 'state 64' -> ".., -> reduce (target=45, len=3)
actionsTable[4107] = 1627; // 'state 64' -> } -> reduce (target=45, len=3)
actionsTable[4110] = 1627; // 'state 64' -> _literal_string -> reduce (target=45, len=3)
actionsTable[4118] = 1627; // 'state 64' -> _document_token1 -> reduce (target=45, len=3)
actionsTable.fill(1627, 4130, 4132); // 'state 64' -> bare_key..@par-gen.EOF -> reduce (target=45, len=3)
actionsTable[4163] = 1631; // 'state 65' -> ] -> reduce (target=47, len=3)
actionsTable.fill(1631, 4165, 4168); // 'state 65' -> ]]... -> reduce (target=47, len=3)
actionsTable.fill(1641, 4226, 4234); // 'state 66' -> [.., -> reduce (target=52, len=3)
actionsTable[4235] = 1641; // 'state 66' -> } -> reduce (target=52, len=3)
actionsTable[4238] = 1641; // 'state 66' -> _literal_string -> reduce (target=52, len=3)
actionsTable[4246] = 1641; // 'state 66' -> _document_token1 -> reduce (target=52, len=3)
actionsTable.fill(1641, 4258, 4260); // 'state 66' -> bare_key..@par-gen.EOF -> reduce (target=52, len=3)
actionsTable[4296] = 1127; // 'state 67' -> " -> reduce (target=51, len=2)
actionsTable[4300] = 1127; // 'state 67' -> escape_sequence -> reduce (target=51, len=2)
actionsTable[4311] = 1127; // 'state 67' -> __basic_string_token2 -> reduce (target=51, len=2)
actionsTable.fill(1147, 4354, 4357); // 'state 68' -> [..[[ -> reduce (target=61, len=2)
actionsTable.fill(1147, 4360, 4362); // 'state 68' -> ".., -> reduce (target=61, len=2)
actionsTable[4363] = 1147; // 'state 68' -> } -> reduce (target=61, len=2)
actionsTable[4366] = 1147; // 'state 68' -> _literal_string -> reduce (target=61, len=2)
actionsTable[4374] = 1147; // 'state 68' -> _document_token1 -> reduce (target=61, len=2)
actionsTable.fill(1147, 4386, 4388); // 'state 68' -> bare_key..@par-gen.EOF -> reduce (target=61, len=2)
actionsTable.fill(631, 4416, 4420); // 'state 69' -> """..] -> reduce (target=59, len=1)
actionsTable.fill(631, 4424, 4427); // 'state 69' -> "..{ -> reduce (target=59, len=1)
actionsTable.fill(631, 4430, 4436); // 'state 69' -> _literal_string..local_time -> reduce (target=59, len=1)
actionsTable[4438] = 631; // 'state 69' -> _document_token1 -> reduce (target=59, len=1)
actionsTable.fill(631, 4444, 4450); // 'state 69' -> _integer_token7.._float_token12 -> reduce (target=59, len=1)
actionsTable.fill(1151, 4482, 4485); // 'state 70' -> [..[[ -> reduce (target=63, len=2)
actionsTable.fill(1151, 4488, 4490); // 'state 70' -> ".., -> reduce (target=63, len=2)
actionsTable[4491] = 1151; // 'state 70' -> } -> reduce (target=63, len=2)
actionsTable[4494] = 1151; // 'state 70' -> _literal_string -> reduce (target=63, len=2)
actionsTable[4502] = 1151; // 'state 70' -> _document_token1 -> reduce (target=63, len=2)
actionsTable.fill(1151, 4514, 4516); // 'state 70' -> bare_key..@par-gen.EOF -> reduce (target=63, len=2)
actionsTable.fill(1133, 4546, 4549); // 'state 71' -> [..[[ -> reduce (target=54, len=2)
actionsTable.fill(1133, 4552, 4554); // 'state 71' -> ".., -> reduce (target=54, len=2)
actionsTable[4555] = 1133; // 'state 71' -> } -> reduce (target=54, len=2)
actionsTable[4558] = 1133; // 'state 71' -> _literal_string -> reduce (target=54, len=2)
actionsTable[4566] = 1133; // 'state 71' -> _document_token1 -> reduce (target=54, len=2)
actionsTable.fill(1133, 4578, 4580); // 'state 71' -> bare_key..@par-gen.EOF -> reduce (target=54, len=2)
actionsTable[4608] = 619; // 'state 72' -> """ -> reduce (target=53, len=1)
actionsTable.fill(619, 4620, 4622); // 'state 72' -> escape_sequence.._escape_line_ending -> reduce (target=53, len=1)
actionsTable[4628] = 619; // 'state 72' -> _multiline_basic_string_content -> reduce (target=53, len=1)
actionsTable.fill(619, 4632, 4634); // 'state 72' -> __multiline_basic_string_token3..__multiline_basic_string_token4 -> reduce (target=53, len=1)
actionsTable[4672] = 164; // 'state 73' -> """ -> shift (target=82, len=0)
actionsTable.fill(166, 4684, 4686); // 'state 73' -> escape_sequence.._escape_line_ending -> shift (target=83, len=0)
actionsTable[4692] = 166; // 'state 73' -> _multiline_basic_string_content -> shift (target=83, len=0)
actionsTable.fill(166, 4696, 4698); // 'state 73' -> __multiline_basic_string_token3..__multiline_basic_string_token4 -> shift (target=83, len=0)
actionsTable.fill(1137, 4738, 4741); // 'state 74' -> [..[[ -> reduce (target=56, len=2)
actionsTable.fill(1137, 4744, 4746); // 'state 74' -> ".., -> reduce (target=56, len=2)
actionsTable[4747] = 1137; // 'state 74' -> } -> reduce (target=56, len=2)
actionsTable[4750] = 1137; // 'state 74' -> _literal_string -> reduce (target=56, len=2)
actionsTable[4758] = 1137; // 'state 74' -> _document_token1 -> reduce (target=56, len=2)
actionsTable.fill(1137, 4770, 4772); // 'state 74' -> bare_key..@par-gen.EOF -> reduce (target=56, len=2)
actionsTable[4801] = 623; // 'state 75' -> ''' -> reduce (target=55, len=1)
actionsTable[4821] = 623; // 'state 75' -> _multiline_literal_string_content -> reduce (target=55, len=1)
actionsTable.fill(623, 4826, 4828); // 'state 75' -> __multiline_literal_string_token5..__multiline_literal_string_token6 -> reduce (target=55, len=1)
actionsTable[4865] = 168; // 'state 76' -> ''' -> shift (target=84, len=0)
actionsTable[4885] = 170; // 'state 76' -> _multiline_literal_string_content -> shift (target=85, len=0)
actionsTable.fill(170, 4890, 4892); // 'state 76' -> __multiline_literal_string_token5..__multiline_literal_string_token6 -> shift (target=85, len=0)
actionsTable.fill(1659, 4930, 4933); // 'state 77' -> [..[[ -> reduce (target=61, len=3)
actionsTable.fill(1659, 4936, 4938); // 'state 77' -> ".., -> reduce (target=61, len=3)
actionsTable[4939] = 1659; // 'state 77' -> } -> reduce (target=61, len=3)
actionsTable[4942] = 1659; // 'state 77' -> _literal_string -> reduce (target=61, len=3)
actionsTable[4950] = 1659; // 'state 77' -> _document_token1 -> reduce (target=61, len=3)
actionsTable.fill(1659, 4962, 4964); // 'state 77' -> bare_key..@par-gen.EOF -> reduce (target=61, len=3)
actionsTable.fill(1143, 4992, 4996); // 'state 78' -> """..] -> reduce (target=59, len=2)
actionsTable.fill(1143, 5000, 5003); // 'state 78' -> "..{ -> reduce (target=59, len=2)
actionsTable.fill(1143, 5006, 5012); // 'state 78' -> _literal_string..local_time -> reduce (target=59, len=2)
actionsTable[5014] = 1143; // 'state 78' -> _document_token1 -> reduce (target=59, len=2)
actionsTable.fill(1143, 5020, 5026); // 'state 78' -> _integer_token7.._float_token12 -> reduce (target=59, len=2)
actionsTable[5059] = 172; // 'state 79' -> ] -> shift (target=86, len=0)
actionsTable[5065] = 62; // 'state 79' -> , -> shift (target=31, len=0)
actionsTable.fill(1663, 5122, 5125); // 'state 80' -> [..[[ -> reduce (target=63, len=3)
actionsTable.fill(1663, 5128, 5130); // 'state 80' -> ".., -> reduce (target=63, len=3)
actionsTable[5131] = 1663; // 'state 80' -> } -> reduce (target=63, len=3)
actionsTable[5134] = 1663; // 'state 80' -> _literal_string -> reduce (target=63, len=3)
actionsTable[5142] = 1663; // 'state 80' -> _document_token1 -> reduce (target=63, len=3)
actionsTable.fill(1663, 5154, 5156); // 'state 80' -> bare_key..@par-gen.EOF -> reduce (target=63, len=3)
actionsTable[5193] = 68; // 'state 81' -> , -> shift (target=34, len=0)
actionsTable[5195] = 176; // 'state 81' -> } -> shift (target=88, len=0)
actionsTable.fill(1645, 5250, 5253); // 'state 82' -> [..[[ -> reduce (target=54, len=3)
actionsTable.fill(1645, 5256, 5258); // 'state 82' -> ".., -> reduce (target=54, len=3)
actionsTable[5259] = 1645; // 'state 82' -> } -> reduce (target=54, len=3)
actionsTable[5262] = 1645; // 'state 82' -> _literal_string -> reduce (target=54, len=3)
actionsTable[5270] = 1645; // 'state 82' -> _document_token1 -> reduce (target=54, len=3)
actionsTable.fill(1645, 5282, 5284); // 'state 82' -> bare_key..@par-gen.EOF -> reduce (target=54, len=3)
actionsTable[5312] = 1131; // 'state 83' -> """ -> reduce (target=53, len=2)
actionsTable.fill(1131, 5324, 5326); // 'state 83' -> escape_sequence.._escape_line_ending -> reduce (target=53, len=2)
actionsTable[5332] = 1131; // 'state 83' -> _multiline_basic_string_content -> reduce (target=53, len=2)
actionsTable.fill(1131, 5336, 5338); // 'state 83' -> __multiline_basic_string_token3..__multiline_basic_string_token4 -> reduce (target=53, len=2)
actionsTable.fill(1649, 5378, 5381); // 'state 84' -> [..[[ -> reduce (target=56, len=3)
actionsTable.fill(1649, 5384, 5386); // 'state 84' -> ".., -> reduce (target=56, len=3)
actionsTable[5387] = 1649; // 'state 84' -> } -> reduce (target=56, len=3)
actionsTable[5390] = 1649; // 'state 84' -> _literal_string -> reduce (target=56, len=3)
actionsTable[5398] = 1649; // 'state 84' -> _document_token1 -> reduce (target=56, len=3)
actionsTable.fill(1649, 5410, 5412); // 'state 84' -> bare_key..@par-gen.EOF -> reduce (target=56, len=3)
actionsTable[5441] = 1135; // 'state 85' -> ''' -> reduce (target=55, len=2)
actionsTable[5461] = 1135; // 'state 85' -> _multiline_literal_string_content -> reduce (target=55, len=2)
actionsTable.fill(1135, 5466, 5468); // 'state 85' -> __multiline_literal_string_token5..__multiline_literal_string_token6 -> reduce (target=55, len=2)
actionsTable.fill(2171, 5506, 5509); // 'state 86' -> [..[[ -> reduce (target=61, len=4)
actionsTable.fill(2171, 5512, 5514); // 'state 86' -> ".., -> reduce (target=61, len=4)
actionsTable[5515] = 2171; // 'state 86' -> } -> reduce (target=61, len=4)
actionsTable[5518] = 2171; // 'state 86' -> _literal_string -> reduce (target=61, len=4)
actionsTable[5526] = 2171; // 'state 86' -> _document_token1 -> reduce (target=61, len=4)
actionsTable.fill(2171, 5538, 5540); // 'state 86' -> bare_key..@par-gen.EOF -> reduce (target=61, len=4)
actionsTable[5571] = 180; // 'state 87' -> ] -> shift (target=90, len=0)
actionsTable[5577] = 72; // 'state 87' -> , -> shift (target=36, len=0)
actionsTable.fill(2175, 5634, 5637); // 'state 88' -> [..[[ -> reduce (target=63, len=4)
actionsTable.fill(2175, 5640, 5642); // 'state 88' -> ".., -> reduce (target=63, len=4)
actionsTable[5643] = 2175; // 'state 88' -> } -> reduce (target=63, len=4)
actionsTable[5646] = 2175; // 'state 88' -> _literal_string -> reduce (target=63, len=4)
actionsTable[5654] = 2175; // 'state 88' -> _document_token1 -> reduce (target=63, len=4)
actionsTable.fill(2175, 5666, 5668); // 'state 88' -> bare_key..@par-gen.EOF -> reduce (target=63, len=4)
actionsTable[5705] = 1149; // 'state 89' -> , -> reduce (target=62, len=2)
actionsTable[5707] = 1149; // 'state 89' -> } -> reduce (target=62, len=2)
actionsTable.fill(2683, 5762, 5765); // 'state 90' -> [..[[ -> reduce (target=61, len=5)
actionsTable.fill(2683, 5768, 5770); // 'state 90' -> ".., -> reduce (target=61, len=5)
actionsTable[5771] = 2683; // 'state 90' -> } -> reduce (target=61, len=5)
actionsTable[5774] = 2683; // 'state 90' -> _literal_string -> reduce (target=61, len=5)
actionsTable[5782] = 2683; // 'state 90' -> _document_token1 -> reduce (target=61, len=5)
actionsTable.fill(2683, 5794, 5796); // 'state 90' -> bare_key..@par-gen.EOF -> reduce (target=61, len=5)
actionsTable[5827] = 188; // 'state 91' -> ] -> shift (target=94, len=0)
actionsTable[5833] = 80; // 'state 91' -> , -> shift (target=40, len=0)
actionsTable[5891] = 1657; // 'state 92' -> ] -> reduce (target=60, len=3)
actionsTable[5897] = 1657; // 'state 92' -> , -> reduce (target=60, len=3)
actionsTable[5910] = 156; // 'state 92' -> _document_token1 -> shift (target=78, len=0)
actionsTable[5961] = 1661; // 'state 93' -> , -> reduce (target=62, len=3)
actionsTable[5963] = 1661; // 'state 93' -> } -> reduce (target=62, len=3)
actionsTable.fill(3195, 6018, 6021); // 'state 94' -> [..[[ -> reduce (target=61, len=6)
actionsTable.fill(3195, 6024, 6026); // 'state 94' -> ".., -> reduce (target=61, len=6)
actionsTable[6027] = 3195; // 'state 94' -> } -> reduce (target=61, len=6)
actionsTable[6030] = 3195; // 'state 94' -> _literal_string -> reduce (target=61, len=6)
actionsTable[6038] = 3195; // 'state 94' -> _document_token1 -> reduce (target=61, len=6)
actionsTable.fill(3195, 6050, 6052); // 'state 94' -> bare_key..@par-gen.EOF -> reduce (target=61, len=6)
actionsTable[6083] = 2169; // 'state 95' -> ] -> reduce (target=60, len=4)
actionsTable[6089] = 2169; // 'state 95' -> , -> reduce (target=60, len=4)
actionsTable[6102] = 156; // 'state 95' -> _document_token1 -> shift (target=78, len=0)
actionsTable.fill(3707, 6146, 6149); // 'state 96' -> [..[[ -> reduce (target=61, len=7)
actionsTable.fill(3707, 6152, 6154); // 'state 96' -> ".., -> reduce (target=61, len=7)
actionsTable[6155] = 3707; // 'state 96' -> } -> reduce (target=61, len=7)
actionsTable[6158] = 3707; // 'state 96' -> _literal_string -> reduce (target=61, len=7)
actionsTable[6166] = 3707; // 'state 96' -> _document_token1 -> reduce (target=61, len=7)
actionsTable.fill(3707, 6178, 6180); // 'state 96' -> bare_key..@par-gen.EOF -> reduce (target=61, len=7)
actionsTable[6211] = 2681; // 'state 97' -> ] -> reduce (target=60, len=5)
actionsTable[6217] = 2681; // 'state 97' -> , -> reduce (target=60, len=5)
actionsTable[6230] = 156; // 'state 97' -> _document_token1 -> shift (target=78, len=0)
actionsTable.fill(4219, 6274, 6277); // 'state 98' -> [..[[ -> reduce (target=61, len=8)
actionsTable.fill(4219, 6280, 6282); // 'state 98' -> ".., -> reduce (target=61, len=8)
actionsTable[6283] = 4219; // 'state 98' -> } -> reduce (target=61, len=8)
actionsTable[6286] = 4219; // 'state 98' -> _literal_string -> reduce (target=61, len=8)
actionsTable[6294] = 4219; // 'state 98' -> _document_token1 -> reduce (target=61, len=8)
actionsTable.fill(4219, 6306, 6308); // 'state 98' -> bare_key..@par-gen.EOF -> reduce (target=61, len=8)

const shiftActionsTable = new Uint8Array(6320);
shiftActionsTable[8] = 1; // 'state 0' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[72] = 1; // 'state 1' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[136] = 1; // 'state 2' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[200] = 2; // 'state 3' -> " -> lexer.pop()
shiftActionsTable[264] = 1; // 'state 4' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[512] = 3; // 'state 8' -> """ -> lexer.push(LexerMode.IMM_MULTILINE_BASIC_STRING)
shiftActionsTable[513] = 4; // 'state 8' -> ''' -> lexer.push(LexerMode.IMM_MULTILINE_LITERAL_STRING)
shiftActionsTable[520] = 1; // 'state 8' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[584] = 1; // 'state 9' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[648] = 1; // 'state 10' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[712] = 1; // 'state 11' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[768] = 2; // 'state 12' -> """ -> lexer.pop()
shiftActionsTable[833] = 2; // 'state 13' -> ''' -> lexer.pop()
shiftActionsTable[896] = 3; // 'state 14' -> """ -> lexer.push(LexerMode.IMM_MULTILINE_BASIC_STRING)
shiftActionsTable[897] = 4; // 'state 14' -> ''' -> lexer.push(LexerMode.IMM_MULTILINE_LITERAL_STRING)
shiftActionsTable[904] = 1; // 'state 14' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[968] = 1; // 'state 15' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[1032] = 1; // 'state 16' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[1096] = 1; // 'state 17' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[1160] = 1; // 'state 18' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[1224] = 1; // 'state 19' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[1344] = 3; // 'state 21' -> """ -> lexer.push(LexerMode.IMM_MULTILINE_BASIC_STRING)
shiftActionsTable[1345] = 4; // 'state 21' -> ''' -> lexer.push(LexerMode.IMM_MULTILINE_LITERAL_STRING)
shiftActionsTable[1352] = 1; // 'state 21' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[1480] = 1; // 'state 23' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[1544] = 1; // 'state 24' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[1664] = 3; // 'state 26' -> """ -> lexer.push(LexerMode.IMM_MULTILINE_BASIC_STRING)
shiftActionsTable[1665] = 4; // 'state 26' -> ''' -> lexer.push(LexerMode.IMM_MULTILINE_LITERAL_STRING)
shiftActionsTable[1672] = 1; // 'state 26' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[1800] = 1; // 'state 28' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[1856] = 3; // 'state 29' -> """ -> lexer.push(LexerMode.IMM_MULTILINE_BASIC_STRING)
shiftActionsTable[1857] = 4; // 'state 29' -> ''' -> lexer.push(LexerMode.IMM_MULTILINE_LITERAL_STRING)
shiftActionsTable[1864] = 1; // 'state 29' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[1984] = 3; // 'state 31' -> """ -> lexer.push(LexerMode.IMM_MULTILINE_BASIC_STRING)
shiftActionsTable[1985] = 4; // 'state 31' -> ''' -> lexer.push(LexerMode.IMM_MULTILINE_LITERAL_STRING)
shiftActionsTable[1992] = 1; // 'state 31' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[2112] = 3; // 'state 33' -> """ -> lexer.push(LexerMode.IMM_MULTILINE_BASIC_STRING)
shiftActionsTable[2113] = 4; // 'state 33' -> ''' -> lexer.push(LexerMode.IMM_MULTILINE_LITERAL_STRING)
shiftActionsTable[2120] = 1; // 'state 33' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[2184] = 1; // 'state 34' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[2240] = 3; // 'state 35' -> """ -> lexer.push(LexerMode.IMM_MULTILINE_BASIC_STRING)
shiftActionsTable[2241] = 4; // 'state 35' -> ''' -> lexer.push(LexerMode.IMM_MULTILINE_LITERAL_STRING)
shiftActionsTable[2248] = 1; // 'state 35' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[2304] = 3; // 'state 36' -> """ -> lexer.push(LexerMode.IMM_MULTILINE_BASIC_STRING)
shiftActionsTable[2305] = 4; // 'state 36' -> ''' -> lexer.push(LexerMode.IMM_MULTILINE_LITERAL_STRING)
shiftActionsTable[2312] = 1; // 'state 36' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[2368] = 3; // 'state 37' -> """ -> lexer.push(LexerMode.IMM_MULTILINE_BASIC_STRING)
shiftActionsTable[2369] = 4; // 'state 37' -> ''' -> lexer.push(LexerMode.IMM_MULTILINE_LITERAL_STRING)
shiftActionsTable[2376] = 1; // 'state 37' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[2496] = 3; // 'state 39' -> """ -> lexer.push(LexerMode.IMM_MULTILINE_BASIC_STRING)
shiftActionsTable[2497] = 4; // 'state 39' -> ''' -> lexer.push(LexerMode.IMM_MULTILINE_LITERAL_STRING)
shiftActionsTable[2504] = 1; // 'state 39' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[2560] = 3; // 'state 40' -> """ -> lexer.push(LexerMode.IMM_MULTILINE_BASIC_STRING)
shiftActionsTable[2561] = 4; // 'state 40' -> ''' -> lexer.push(LexerMode.IMM_MULTILINE_LITERAL_STRING)
shiftActionsTable[2568] = 1; // 'state 40' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[2624] = 3; // 'state 41' -> """ -> lexer.push(LexerMode.IMM_MULTILINE_BASIC_STRING)
shiftActionsTable[2625] = 4; // 'state 41' -> ''' -> lexer.push(LexerMode.IMM_MULTILINE_LITERAL_STRING)
shiftActionsTable[2632] = 1; // 'state 41' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[2688] = 3; // 'state 42' -> """ -> lexer.push(LexerMode.IMM_MULTILINE_BASIC_STRING)
shiftActionsTable[2689] = 4; // 'state 42' -> ''' -> lexer.push(LexerMode.IMM_MULTILINE_LITERAL_STRING)
shiftActionsTable[2696] = 1; // 'state 42' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[2816] = 3; // 'state 44' -> """ -> lexer.push(LexerMode.IMM_MULTILINE_BASIC_STRING)
shiftActionsTable[2817] = 4; // 'state 44' -> ''' -> lexer.push(LexerMode.IMM_MULTILINE_LITERAL_STRING)
shiftActionsTable[2824] = 1; // 'state 44' -> " -> lexer.push(LexerMode.IMM_BASIC_STRING)
shiftActionsTable[3784] = 2; // 'state 59' -> " -> lexer.pop()
shiftActionsTable[4672] = 2; // 'state 73' -> """ -> lexer.pop()
shiftActionsTable[4865] = 2; // 'state 76' -> ''' -> lexer.pop()

const gotoTable = new Uint32Array(2896);
gotoTable[39] = 50331648; // 'state 48'
gotoTable[40] = 4194304; // 'state 4'
gotoTable[41] = 5242880; // 'state 5'
gotoTable.fill(51380224, 42, 44); // 'state 49'
gotoTable[44] = 48234496; // 'state 46'
gotoTable[45] = 6291456; // 'state 6'
gotoTable.fill(52428800, 46, 48); // 'state 50'
gotoTable[48] = 49283072; // 'state 47'
gotoTable[52] = 47185920; // 'state 45'
gotoTable.fill(57671680, 110, 112); // 'state 55'
gotoTable[112] = 49283072; // 'state 47'
gotoTable[116] = 47185920; // 'state 45'
gotoTable.fill(58720256, 174, 176); // 'state 56'
gotoTable[176] = 49283072; // 'state 47'
gotoTable[180] = 47185920; // 'state 45'
gotoTable[243] = 61865984; // 'state 59'
gotoTable[297] = 7340032; // 'state 7'
gotoTable.fill(51380224, 298, 300); // 'state 49'
gotoTable[300] = 53477376; // 'state 51'
gotoTable[301] = 6291456; // 'state 6'
gotoTable.fill(52428800, 302, 304); // 'state 50'
gotoTable[304] = 49283072; // 'state 47'
gotoTable[308] = 47185920; // 'state 45'
gotoTable.fill(54525952, 362, 364); // 'state 52'
gotoTable[448] = 56623104; // 'state 54'
gotoTable.fill(54525952, 490, 492); // 'state 52'
gotoTable[561] = 67108864; // 'state 64'
gotoTable[562] = 63963136; // 'state 61'
gotoTable[564] = 62914560; // 'state 60'
gotoTable[566] = 62914560; // 'state 60'
gotoTable[568] = 62914560; // 'state 60'
gotoTable.fill(63963136, 569, 571); // 'state 61'
gotoTable[573] = 63963136; // 'state 61'
gotoTable[575] = 63963136; // 'state 61'
gotoTable[622] = 68157440; // 'state 65'
gotoTable[624] = 49283072; // 'state 47'
gotoTable[628] = 47185920; // 'state 45'
gotoTable[680] = 16777216; // 'state 16'
gotoTable[684] = 48234496; // 'state 46'
gotoTable[685] = 6291456; // 'state 6'
gotoTable.fill(52428800, 686, 688); // 'state 50'
gotoTable[688] = 49283072; // 'state 47'
gotoTable[692] = 47185920; // 'state 45'
gotoTable[704] = 17825792; // 'state 17'
gotoTable[744] = 18874368; // 'state 18'
gotoTable[748] = 48234496; // 'state 46'
gotoTable[749] = 6291456; // 'state 6'
gotoTable.fill(52428800, 750, 752); // 'state 50'
gotoTable[752] = 49283072; // 'state 47'
gotoTable[756] = 47185920; // 'state 45'
gotoTable[768] = 19922944; // 'state 19'
gotoTable[821] = 76546048; // 'state 73'
gotoTable[887] = 79691776; // 'state 76'
gotoTable[945] = 20971520; // 'state 20'
gotoTable[946] = 63963136; // 'state 61'
gotoTable[948] = 62914560; // 'state 60'
gotoTable[950] = 62914560; // 'state 60'
gotoTable[952] = 62914560; // 'state 60'
gotoTable.fill(63963136, 953, 955); // 'state 61'
gotoTable[955] = 22020096; // 'state 21'
gotoTable[957] = 63963136; // 'state 61'
gotoTable[959] = 63963136; // 'state 61'
gotoTable[1005] = 23068672; // 'state 22'
gotoTable.fill(52428800, 1006, 1008); // 'state 50'
gotoTable[1008] = 49283072; // 'state 47'
gotoTable[1012] = 47185920; // 'state 45'
gotoTable[1068] = 53477376; // 'state 51'
gotoTable[1069] = 6291456; // 'state 6'
gotoTable.fill(52428800, 1070, 1072); // 'state 50'
gotoTable[1072] = 49283072; // 'state 47'
gotoTable[1076] = 47185920; // 'state 45'
gotoTable[1128] = 24117248; // 'state 23'
gotoTable[1132] = 48234496; // 'state 46'
gotoTable[1133] = 6291456; // 'state 6'
gotoTable.fill(52428800, 1134, 1136); // 'state 50'
gotoTable[1136] = 49283072; // 'state 47'
gotoTable[1140] = 47185920; // 'state 45'
gotoTable[1196] = 53477376; // 'state 51'
gotoTable[1197] = 6291456; // 'state 6'
gotoTable.fill(52428800, 1198, 1200); // 'state 50'
gotoTable[1200] = 49283072; // 'state 47'
gotoTable[1204] = 47185920; // 'state 45'
gotoTable[1256] = 25165824; // 'state 24'
gotoTable[1260] = 48234496; // 'state 46'
gotoTable[1261] = 6291456; // 'state 6'
gotoTable.fill(52428800, 1262, 1264); // 'state 50'
gotoTable[1264] = 49283072; // 'state 47'
gotoTable[1268] = 47185920; // 'state 45'
gotoTable[1339] = 28311552; // 'state 27'
gotoTable[1340] = 82837504; // 'state 79'
gotoTable[1393] = 26214400; // 'state 25'
gotoTable[1394] = 63963136; // 'state 61'
gotoTable[1396] = 62914560; // 'state 60'
gotoTable[1398] = 62914560; // 'state 60'
gotoTable[1400] = 62914560; // 'state 60'
gotoTable.fill(63963136, 1401, 1403); // 'state 61'
gotoTable[1405] = 63963136; // 'state 61'
gotoTable[1407] = 63963136; // 'state 61'
gotoTable[1470] = 84934656; // 'state 81'
gotoTable[1516] = 53477376; // 'state 51'
gotoTable[1517] = 6291456; // 'state 6'
gotoTable.fill(52428800, 1518, 1520); // 'state 50'
gotoTable[1520] = 49283072; // 'state 47'
gotoTable[1524] = 47185920; // 'state 45'
gotoTable[1580] = 53477376; // 'state 51'
gotoTable[1581] = 6291456; // 'state 6'
gotoTable.fill(52428800, 1582, 1584); // 'state 50'
gotoTable[1584] = 49283072; // 'state 47'
gotoTable[1588] = 47185920; // 'state 45'
gotoTable[1659] = 31457280; // 'state 30'
gotoTable[1660] = 91226112; // 'state 87'
gotoTable[1713] = 33554432; // 'state 32'
gotoTable[1714] = 63963136; // 'state 61'
gotoTable[1716] = 62914560; // 'state 60'
gotoTable[1718] = 62914560; // 'state 60'
gotoTable[1720] = 62914560; // 'state 60'
gotoTable.fill(63963136, 1721, 1723); // 'state 61'
gotoTable[1723] = 34603008; // 'state 33'
gotoTable[1725] = 63963136; // 'state 61'
gotoTable[1727] = 63963136; // 'state 61'
gotoTable[1788] = 91226112; // 'state 87'
gotoTable[1837] = 93323264; // 'state 89'
gotoTable.fill(52428800, 1838, 1840); // 'state 50'
gotoTable[1840] = 49283072; // 'state 47'
gotoTable[1844] = 47185920; // 'state 45'
gotoTable[1905] = 33554432; // 'state 32'
gotoTable[1906] = 63963136; // 'state 61'
gotoTable[1908] = 62914560; // 'state 60'
gotoTable[1910] = 62914560; // 'state 60'
gotoTable[1912] = 62914560; // 'state 60'
gotoTable.fill(63963136, 1913, 1915); // 'state 61'
gotoTable[1915] = 38797312; // 'state 37'
gotoTable[1917] = 63963136; // 'state 61'
gotoTable[1919] = 63963136; // 'state 61'
gotoTable[1980] = 95420416; // 'state 91'
gotoTable[2033] = 39845888; // 'state 38'
gotoTable[2034] = 63963136; // 'state 61'
gotoTable[2036] = 62914560; // 'state 60'
gotoTable[2038] = 62914560; // 'state 60'
gotoTable[2040] = 62914560; // 'state 60'
gotoTable.fill(63963136, 2041, 2043); // 'state 61'
gotoTable[2043] = 40894464; // 'state 39'
gotoTable[2045] = 63963136; // 'state 61'
gotoTable[2047] = 63963136; // 'state 61'
gotoTable[2107] = 96468992; // 'state 92'
gotoTable[2161] = 39845888; // 'state 38'
gotoTable[2162] = 63963136; // 'state 61'
gotoTable[2164] = 62914560; // 'state 60'
gotoTable[2166] = 62914560; // 'state 60'
gotoTable[2168] = 62914560; // 'state 60'
gotoTable.fill(63963136, 2169, 2171); // 'state 61'
gotoTable[2173] = 63963136; // 'state 61'
gotoTable[2175] = 63963136; // 'state 61'
gotoTable[2221] = 97517568; // 'state 93'
gotoTable.fill(52428800, 2222, 2224); // 'state 50'
gotoTable[2224] = 49283072; // 'state 47'
gotoTable[2228] = 47185920; // 'state 45'
gotoTable[2289] = 33554432; // 'state 32'
gotoTable[2290] = 63963136; // 'state 61'
gotoTable[2292] = 62914560; // 'state 60'
gotoTable[2294] = 62914560; // 'state 60'
gotoTable[2296] = 62914560; // 'state 60'
gotoTable.fill(63963136, 2297, 2299); // 'state 61'
gotoTable[2299] = 42991616; // 'state 41'
gotoTable[2301] = 63963136; // 'state 61'
gotoTable[2303] = 63963136; // 'state 61'
gotoTable[2353] = 39845888; // 'state 38'
gotoTable[2354] = 63963136; // 'state 61'
gotoTable[2356] = 62914560; // 'state 60'
gotoTable[2358] = 62914560; // 'state 60'
gotoTable[2360] = 62914560; // 'state 60'
gotoTable.fill(63963136, 2361, 2363); // 'state 61'
gotoTable[2363] = 44040192; // 'state 42'
gotoTable[2365] = 63963136; // 'state 61'
gotoTable[2367] = 63963136; // 'state 61'
gotoTable[2417] = 39845888; // 'state 38'
gotoTable[2418] = 63963136; // 'state 61'
gotoTable[2420] = 62914560; // 'state 60'
gotoTable[2422] = 62914560; // 'state 60'
gotoTable[2424] = 62914560; // 'state 60'
gotoTable.fill(63963136, 2425, 2427); // 'state 61'
gotoTable[2429] = 63963136; // 'state 61'
gotoTable[2431] = 63963136; // 'state 61'
gotoTable[2491] = 99614720; // 'state 95'
gotoTable[2545] = 45088768; // 'state 43'
gotoTable[2546] = 63963136; // 'state 61'
gotoTable[2548] = 62914560; // 'state 60'
gotoTable[2550] = 62914560; // 'state 60'
gotoTable[2552] = 62914560; // 'state 60'
gotoTable.fill(63963136, 2553, 2555); // 'state 61'
gotoTable[2557] = 63963136; // 'state 61'
gotoTable[2559] = 63963136; // 'state 61'
gotoTable[2609] = 39845888; // 'state 38'
gotoTable[2610] = 63963136; // 'state 61'
gotoTable[2612] = 62914560; // 'state 60'
gotoTable[2614] = 62914560; // 'state 60'
gotoTable[2616] = 62914560; // 'state 60'
gotoTable.fill(63963136, 2617, 2619); // 'state 61'
gotoTable[2619] = 46137344; // 'state 44'
gotoTable[2621] = 63963136; // 'state 61'
gotoTable[2623] = 63963136; // 'state 61'
gotoTable[2673] = 39845888; // 'state 38'
gotoTable[2674] = 63963136; // 'state 61'
gotoTable[2676] = 62914560; // 'state 60'
gotoTable[2678] = 62914560; // 'state 60'
gotoTable[2680] = 62914560; // 'state 60'
gotoTable.fill(63963136, 2681, 2683); // 'state 61'
gotoTable[2685] = 63963136; // 'state 61'
gotoTable[2687] = 63963136; // 'state 61'
gotoTable[2737] = 45088768; // 'state 43'
gotoTable[2738] = 63963136; // 'state 61'
gotoTable[2740] = 62914560; // 'state 60'
gotoTable[2742] = 62914560; // 'state 60'
gotoTable[2744] = 62914560; // 'state 60'
gotoTable.fill(63963136, 2745, 2747); // 'state 61'
gotoTable[2749] = 63963136; // 'state 61'
gotoTable[2751] = 63963136; // 'state 61'
gotoTable[2811] = 101711872; // 'state 97'
gotoTable[2865] = 45088768; // 'state 43'
gotoTable[2866] = 63963136; // 'state 61'
gotoTable[2868] = 62914560; // 'state 60'
gotoTable[2870] = 62914560; // 'state 60'
gotoTable[2872] = 62914560; // 'state 60'
gotoTable.fill(63963136, 2873, 2875); // 'state 61'
gotoTable[2877] = 63963136; // 'state 61'
gotoTable[2879] = 63963136; // 'state 61'

const wordFallbackTable = new Uint8Array(48);
wordFallbackTable[15] = 1; // boolean
wordFallbackTable[18] = 1; // local_date
wordFallbackTable.fill(1, 29, 32); // _integer_token8.._integer_token10

const LexerMode = {
  INITIAL: 0,
  IMM_MULTILINE_BASIC_STRING: 1,
  IMM_MULTILINE_LITERAL_STRING: 2,
  IMM_BASIC_STRING: 3,
};

const lexerModeNames = {
  initial: 0,
  imm__multiline_basic_string: 1,
  imm__multiline_literal_string: 2,
  imm__basic_string: 3,
};

const lexerStack = new Uint8Array(64);
let lexerSp = 0;
let lexerMode = LexerMode.INITIAL;

const lexer = {
  push(mode) {
    const modeId = typeof mode === "number" ? mode : lexerModeNames[mode];
    lexerStack[++lexerSp] = modeId;
    lexerMode = modeId;
  },
  pop() {
    if (lexerSp === 0) {
      throw new Error("Cannot remove more lexer states than have been pushed.");
    }
    lexerMode = lexerStack[--lexerSp];
  },
};

/**
 * Auto-growing stack and CST arenas starting at 16,384 words (64 KiB each),
 * which glibc malloc places in the low 32-bit brk heap ([reg*4 + disp32]).
 *
 * Each 32-bit stack entry packs:
 * - low 20 bits: tree pointer (tp) of the shifted/reduced CST node (up to 1,048,575 words)
 * - high 12 bits: parser state
 *
 * Each CST node in tree occupies 2 uint32 words (postorder layout):
 * - word 0 (tp + 0): name | (numChildren << 8)
 * - word 1 (tp + 1): end | ((end - start) << 22) (leaf) or rtop (internal: low 20 bits = prevSibling / subtreeStart - 2)
 */
const arena = {
  stack: new Uint32Array(16384),
  tree: new Uint32Array(524288),
};

class TreeCursor {
  #stream;
  #tree;
  #rootPointer;
  #pointer;
  #parentStack = new Uint32Array(64);
  #siblingStack = new Uint32Array(128);
  #depth = 0;
  #siblingSp = 0;

  constructor(stream, tree, pointer) {
    this.#stream = stream;
    this.#tree = tree;
    this.#rootPointer = pointer;
    this.#pointer = pointer;
  }

  get name() {
    return parserSymbols[this.#tree[this.#pointer] & 0xff];
  }

  get symbolId() {
    return this.#tree[this.#pointer] & 0xff;
  }

  get childCount() {
    return this.#tree[this.#pointer] >>> 8;
  }

  get isLeaf() {
    return this.#tree[this.#pointer] >>> 8 === 0;
  }

  get start() {
    const t = this.#tree;
    let p = this.#pointer;
    if (t[p] >>> 8 > 0) {
      p = (t[p + 1] & 0xfffff) + 2;
    }
    const span = t[p + 1];
    const end = span & 0x3fffff;
    return end - (span >>> 22);
  }

  get end() {
    const t = this.#tree;
    let p = this.#pointer;
    while (t[p] >>> 8 > 0) {
      p -= 2;
    }
    return t[p + 1] & 0x3fffff;
  }

  get value() {
    return this.#stream.subarray(this.start, this.end);
  }

  get text() {
    return Buffer.from(this.#stream.subarray(this.start, this.end)).toString(
      "utf-8"
    );
  }

  get pointer() {
    return this.#pointer;
  }

  get depth() {
    return this.#depth;
  }

  reset() {
    this.#pointer = this.#rootPointer;
    this.#depth = 0;
    this.#siblingSp = 0;
    return true;
  }

  gotoFirstChild() {
    const t = this.#tree;
    const p = this.#pointer;
    const n = t[p] >>> 8;
    if (n === 0) {
      return false;
    }
    const d = this.#depth + 1;
    let stack = this.#parentStack;
    if (d >= stack.length) {
      const next = new Uint32Array(stack.length << 1);
      next.set(stack);
      stack = this.#parentStack = next;
    }
    stack[d] = p | ((n - 1) << 20);
    this.#depth = d;
    let c = p - 2;
    if (n > 1) {
      let sp = this.#siblingSp;
      let sStack = this.#siblingStack;
      if (sp + n >= sStack.length) {
        const next = new Uint32Array((sStack.length + n) << 1);
        next.set(sStack);
        sStack = this.#siblingStack = next;
      }
      for (let k = 1; k < n; k++) {
        sStack[++sp] = c;
        c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & 0xfffff;
      }
      this.#siblingSp = sp;
    }
    this.#pointer = c;
    return true;
  }

  gotoNextSibling() {
    const d = this.#depth;
    const stack = this.#parentStack;
    const entry = stack[d];
    if (entry < 0x100000) {
      return false;
    }
    stack[d] = entry - 0x100000;
    const sp = this.#siblingSp;
    this.#pointer = this.#siblingStack[sp];
    this.#siblingSp = sp - 1;
    return true;
  }

  gotoParent() {
    const d = this.#depth;
    if (d === 0) {
      return false;
    }
    const entry = this.#parentStack[d];
    this.#siblingSp -= entry >>> 20;
    this.#depth = d - 1;
    this.#pointer = entry & 0xfffff;
    return true;
  }

  currentNode() {
    return new CstNode(this.#stream, this.#tree, this.#pointer);
  }
}

class CstNode {
  #stream;
  #tree;
  #pointer;

  constructor(stream, tree, pointer) {
    this.#stream = stream;
    this.#tree = tree;
    this.#pointer = pointer;
  }

  get name() {
    return parserSymbols[this.#tree[this.#pointer] & 0xff];
  }

  get symbolId() {
    return this.#tree[this.#pointer] & 0xff;
  }

  get childCount() {
    return this.#tree[this.#pointer] >>> 8;
  }

  get isLeaf() {
    return this.#tree[this.#pointer] >>> 8 === 0;
  }

  get start() {
    const t = this.#tree;
    let p = this.#pointer;
    if (t[p] >>> 8 > 0) {
      p = (t[p + 1] & 0xfffff) + 2;
    }
    const span = t[p + 1];
    const end = span & 0x3fffff;
    return end - (span >>> 22);
  }

  get end() {
    const t = this.#tree;
    let p = this.#pointer;
    while (t[p] >>> 8 > 0) {
      p -= 2;
    }
    return t[p + 1] & 0x3fffff;
  }

  get value() {
    return this.#stream.subarray(this.start, this.end);
  }

  get text() {
    return Buffer.from(this.#stream.subarray(this.start, this.end)).toString(
      "utf-8"
    );
  }

  get firstChild() {
    const t = this.#tree;
    const pointer = this.#pointer;
    const nChildren = t[pointer] >>> 8;
    if (nChildren === 0) {
      return undefined;
    }
    let c = pointer - 2;
    for (let i = 1; i < nChildren; i++) {
      c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & 0xfffff;
    }
    return new CstNode(this.#stream, t, c);
  }

  get lastChild() {
    const t = this.#tree;
    const pointer = this.#pointer;
    if (t[pointer] >>> 8 === 0) {
      return undefined;
    }
    return new CstNode(this.#stream, t, pointer - 2);
  }

  child(index) {
    const t = this.#tree;
    const pointer = this.#pointer;
    const nChildren = t[pointer] >>> 8;
    const idx = index < 0 ? nChildren + index : index;
    if (idx < 0 || idx >= nChildren) {
      return undefined;
    }
    let c = pointer - 2;
    for (let i = nChildren - 1; i > idx; i--) {
      c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & 0xfffff;
    }
    return new CstNode(this.#stream, t, c);
  }

  childByName(name) {
    const t = this.#tree;
    const pointer = this.#pointer;
    const nChildren = t[pointer] >>> 8;
    if (nChildren === 0) {
      return undefined;
    }
    let match = -1;
    let c = pointer - 2;
    for (let i = 0; i < nChildren; i++) {
      if (parserSymbols[t[c] & 0xff] === name) {
        match = c;
      }
      if (i + 1 < nChildren) {
        c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & 0xfffff;
      }
    }
    return match === -1 ? undefined : new CstNode(this.#stream, t, match);
  }

  childrenByName(name) {
    const t = this.#tree;
    const pointer = this.#pointer;
    const nChildren = t[pointer] >>> 8;
    const result = [];
    if (nChildren === 0) {
      return result;
    }
    const stream = this.#stream;
    let c = pointer - 2;
    for (let i = 0; i < nChildren; i++) {
      if (parserSymbols[t[c] & 0xff] === name) {
        result.push(new CstNode(stream, t, c));
      }
      if (i + 1 < nChildren) {
        c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & 0xfffff;
      }
    }
    result.reverse();
    return result;
  }

  get items() {
    const t = this.#tree;
    const pointer = this.#pointer;
    const nChildren = t[pointer] >>> 8;
    if (nChildren === 0) {
      return undefined;
    }

    const stream = this.#stream;
    const children = new Array(nChildren);
    let child = pointer - 2;
    for (let i = nChildren - 1; i > 0; i--) {
      children[i] = new CstNode(stream, t, child);
      child = t[child] >>> 8 === 0 ? child - 2 : t[child + 1] & 0xfffff;
    }
    children[0] = new CstNode(stream, t, child);

    return children;
  }

  get __tree() {
    return this.#tree;
  }

  get __pointer() {
    return this.#pointer;
  }

  cursor() {
    return new TreeCursor(this.#stream, this.#tree, this.#pointer);
  }

  toSExpr(includeText = false) {
    const t = this.#tree;
    const stream = this.#stream;
    const formatNode = (p) => {
      const w0 = t[p];
      const name = parserSymbols[w0 & 0xff];
      const n = w0 >>> 8;
      if (n === 0) {
        if (!includeText) {
          return "(" + name + ")";
        }
        const node = new CstNode(stream, t, p);
        return "(" + name + " " + JSON.stringify(node.text) + ")";
      }
      const childPtrs = new Uint32Array(n);
      let c = p - 2;
      for (let i = n - 1; i >= 0; i--) {
        childPtrs[i] = c;
        if (i > 0) {
          c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & 0xfffff;
        }
      }
      let out = "(" + name;
      for (let i = 0; i < n; i++) {
        out += " " + formatNode(childPtrs[i]);
      }
      return out + ")";
    };
    return formatNode(this.#pointer);
  }

  toJSON() {
    return {
      name: this.name,
      start: this.start,
      end: this.end,
      value: this.value,
      items: this.items?.map((item) => item.toJSON()),
    };
  }

  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toJSON();
  }
}

class LineIndex {
  #lineStarts;

  constructor(input) {
    const stream = typeof input === "string" ? Buffer.from(input) : input;
    let count = 1;
    for (let i = 0; i < stream.length; i++) {
      if (stream[i] === 10) {
        count++;
      }
    }
    const starts = new Uint32Array(count);
    starts[0] = 0;
    let idx = 1;
    for (let i = 0; i < stream.length; i++) {
      if (stream[i] === 10) {
        starts[idx++] = i + 1;
      }
    }
    this.#lineStarts = starts;
  }

  locationForOffset(offset) {
    const starts = this.#lineStarts;
    let low = 0;
    let high = starts.length - 1;
    while (low <= high) {
      const mid = (low + high) >>> 1;
      if (starts[mid] <= offset) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return {
      line: high + 1,
      column: offset - starts[high] + 1,
    };
  }
}

function throwSyntaxError(
  stream,
  tree,
  tp,
  lookahead,
  lookaheadSpan,
  stateOffset
) {
  const symName = parserSymbols[lookahead] ?? String(lookahead);
  const rawEnd = lookaheadSpan & 0x3fffff;
  let offset = 0;
  let endOffset = 0;
  if (rawEnd !== 0x3fffff) {
    endOffset = rawEnd;
    offset = endOffset - (lookaheadSpan >>> 22);
  } else if (symName === "@par-gen.EOF") {
    offset = stream.length;
    endOffset = stream.length;
  } else {
    let q = tp - 2;
    while (q >= 2 && (tree[q] >>> 8 > 0 || (tree[q] & 0xff) > 37)) {
      q -= 2;
    }
    offset = q >= 2 ? tree[q + 1] & 0x3fffff : 0;
    while (
      offset < stream.length &&
      (stream[offset] === 32 ||
        stream[offset] === 9 ||
        stream[offset] === 10 ||
        stream[offset] === 13)
    ) {
      offset++;
    }
    endOffset = offset < stream.length ? offset + 1 : offset;
  }

  let line = 1;
  let lineStart = 0;
  for (let i = 0; i < offset && i < stream.length; i++) {
    if (stream[i] === 10) {
      line++;
      lineStart = i + 1;
    }
  }
  const column = offset - lineStart + 1;

  let lineEnd = offset;
  while (
    lineEnd < stream.length &&
    stream[lineEnd] !== 10 &&
    stream[lineEnd] !== 13
  ) {
    lineEnd++;
  }

  const expected = [];
  for (let t = 0; t <= 37; t++) {
    if (actionsTable[stateOffset + t] !== 0xffff) {
      const name = parserSymbols[t];
      if (name && name !== "@par-gen.ERROR") {
        expected.push(name);
      }
    }
  }

  const tokenText =
    endOffset > offset
      ? Buffer.from(stream.subarray(offset, endOffset)).toString("utf-8")
      : "";
  const foundDesc =
    symName === "@par-gen.EOF"
      ? "@par-gen.EOF (end of input)"
      : tokenText && tokenText !== symName
      ? `${symName} (${JSON.stringify(tokenText)})`
      : symName;
  const expectedDesc =
    expected.length > 0 ? `. Expected one of: ${expected.join(", ")}` : "";

  let winStart = lineStart;
  let winEnd = lineEnd;
  let prefix = "";
  let suffix = "";
  if (lineEnd - lineStart > 120) {
    winStart = Math.max(lineStart, offset - 40);
    winEnd = Math.min(lineEnd, offset + 60);
    if (winStart > lineStart) prefix = "...";
    if (winEnd < lineEnd) suffix = "...";
  }
  const lineStr =
    prefix +
    Buffer.from(stream.subarray(winStart, winEnd)).toString("utf-8") +
    suffix;
  const lineNumStr = String(line);
  const gutterPad = " ".repeat(lineNumStr.length);
  const caretCol = Math.max(0, offset - winStart + prefix.length);
  const caretLen = Math.max(1, Math.min(endOffset - offset, winEnd - offset));
  const frame = `${gutterPad} |\n${lineNumStr} | ${lineStr}\n${gutterPad} | ${" ".repeat(
    caretCol
  )}${"^".repeat(caretLen)}`;

  const err = new SyntaxError(
    `Unexpected lookahead ${foundDesc} at line ${line}, column ${column}${expectedDesc}\n${frame}`
  );
  err.line = line;
  err.column = column;
  err.offset = offset;
  err.endOffset = endOffset;
  err.found = symName;
  err.tokenText = tokenText;
  err.expected = expected;
  throw err;
}

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
  lexerSp = 0;
  lexerStack[0] = LexerMode.INITIAL;
  lexerMode = LexerMode.INITIAL;

  const stream = typeof input === "string" ? Buffer.from(input) : input;

  const firstRes = nextTokenInitial(stream, 0);
  let lookahead = firstRes.state;

  let lookaheadSpan = firstRes.end | ((firstRes.end - firstRes.start) << 22);

  const stack = arena.stack;
  const tree = arena.tree;
  const actions = actionsTable;
  const goto = gotoTable;
  if (stream.length >>> 1 <= tree.length) {
    let top = 0; // starting state
    stack[0] = top;
    let sp = 0;
    // let the tree stack start from offset 2
    // offset 0 means an error occurred and should be used by the parser
    let tp = 2;

    while (true) {
      const currentState = top >>> 20;

      const actionIndex = (currentState << 6) + lookahead;
      const actionLookup = actions[actionIndex];
      if ((actionLookup & 1) === 0) {
        // shift
        if (actionLookup === 0xfffe) {
          return new CstNode(stream, tree, tp - 2);
        }

        const shiftAction = shiftActionsTable[actionIndex];
        if (shiftAction !== 0) {
          switch (shiftAction) {
            case 1:
              lexer.push(LexerMode.IMM_BASIC_STRING);
              break;
            case 2:
              lexer.pop();
              break;
            case 3:
              lexer.push(LexerMode.IMM_MULTILINE_BASIC_STRING);
              break;
            case 4:
              lexer.push(LexerMode.IMM_MULTILINE_LITERAL_STRING);
              break;
          }
        }

        tree[tp] = lookahead; // name (and nChildren = 0)
        tree[tp + 1] = lookaheadSpan;

        sp += 1;
        top = tp | (actionLookup << 19);
        stack[sp] = top;

        if (lexerMode === LexerMode.INITIAL) {
          const res = nextTokenInitial(stream, lookaheadSpan & 0x3fffff);
          lookahead = res.state;

          lookaheadSpan = res.end | ((res.end - res.start) << 22);
        } else if (lexerMode === LexerMode.IMM_MULTILINE_BASIC_STRING) {
          const res = nextTokenImmMultilineBasicString(
            stream,
            lookaheadSpan & 0x3fffff
          );
          lookahead = res.state;

          lookaheadSpan = res.end | ((res.end - res.start) << 22);
        } else if (lexerMode === LexerMode.IMM_MULTILINE_LITERAL_STRING) {
          const res = nextTokenImmMultilineLiteralString(
            stream,
            lookaheadSpan & 0x3fffff
          );
          lookahead = res.state;

          lookaheadSpan = res.end | ((res.end - res.start) << 22);
        } else {
          const res = nextTokenImmBasicString(stream, lookaheadSpan & 0x3fffff);
          lookahead = res.state;

          lookaheadSpan = res.end | ((res.end - res.start) << 22);
        }
      } else {
        // reduce
        if (actionLookup === 0xffff) {
          if (
            wordFallbackTable[lookahead] !== 0 &&
            actions[(currentState << 6) + 34] !== 0xffff
          ) {
            lookahead = 34;
            continue;
          }
          if (lookahead === 22) {
            if (lexerMode === LexerMode.INITIAL) {
              const res = nextTokenInitial(stream, lookaheadSpan & 0x3fffff);
              lookahead = res.state;

              lookaheadSpan = res.end | ((res.end - res.start) << 22);
            } else if (lexerMode === LexerMode.IMM_MULTILINE_BASIC_STRING) {
              const res = nextTokenImmMultilineBasicString(
                stream,
                lookaheadSpan & 0x3fffff
              );
              lookahead = res.state;

              lookaheadSpan = res.end | ((res.end - res.start) << 22);
            } else if (lexerMode === LexerMode.IMM_MULTILINE_LITERAL_STRING) {
              const res = nextTokenImmMultilineLiteralString(
                stream,
                lookaheadSpan & 0x3fffff
              );
              lookahead = res.state;

              lookaheadSpan = res.end | ((res.end - res.start) << 22);
            } else {
              const res = nextTokenImmBasicString(
                stream,
                lookaheadSpan & 0x3fffff
              );
              lookahead = res.state;

              lookaheadSpan = res.end | ((res.end - res.start) << 22);
            }
            continue;
          }
          throwSyntaxError(
            stream,
            tree,
            tp,
            lookahead,
            lookaheadSpan,
            currentState << 6
          );
        }
        sp -= actionLookup >>> 9;
        const rtop = stack[sp] | 0;
        const word0 = actionLookup >>> 1;
        tree[tp] = word0; // name and number of children
        const nextState = goto[((rtop >>> 20) << 6) + (word0 & 0xff)];
        tree[tp + 1] = rtop; // prevSibling / subtreeStart - 2

        sp += 1;
        top = tp | nextState;
        stack[sp] = top;
      }

      tp += 2;
      if (tp >= tree.length - 1) {
        break;
      }
    }
  }

  let len = tree.length << 1;
  while (len < stream.length >>> 1) {
    len <<= 1;
  }
  const nextStack = new Uint32Array(len);
  const nextTree = new Uint32Array(len);
  delete arena.stack;
  delete arena.tree;
  arena.stack = nextStack;
  arena.tree = nextTree;
  Object.create(arena);
  return parse(input);
}

export { parse, CstNode, TreeCursor, LineIndex };
