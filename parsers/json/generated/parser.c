#include "parser.h"
#include <time.h>
#include <stdio.h>
#include <stdint.h>
#include <stdlib.h>

struct action
{
  unsigned char op;
  union
  {
    unsigned char state;
    unsigned char symbol;
  };
};

const static unsigned char reducerStates[] = {
  [81] = 1, // 'state 2' -> Value -> WS
	[13521] = 1, // 'state 2' -> Value -> CURLY_CLOSE
	[16209] = 1, // 'state 2' -> Value -> COMMA
	[26961] = 1, // 'state 2' -> Value -> BRACKET_CLOSE
	[32337] = 1, // 'state 2' -> Value -> @par-gen.EOF
	[113] = 1, // 'state 3' -> Value -> WS
	[13553] = 1, // 'state 3' -> Value -> CURLY_CLOSE
	[16241] = 1, // 'state 3' -> Value -> COMMA
	[26993] = 1, // 'state 3' -> Value -> BRACKET_CLOSE
	[32369] = 1, // 'state 3' -> Value -> @par-gen.EOF
	[145] = 1, // 'state 4' -> Value -> WS
	[13585] = 1, // 'state 4' -> Value -> CURLY_CLOSE
	[16273] = 1, // 'state 4' -> Value -> COMMA
	[27025] = 1, // 'state 4' -> Value -> BRACKET_CLOSE
	[32401] = 1, // 'state 4' -> Value -> @par-gen.EOF
	[209] = 1, // 'state 6' -> Value -> WS
	[13649] = 1, // 'state 6' -> Value -> CURLY_CLOSE
	[16337] = 1, // 'state 6' -> Value -> COMMA
	[27089] = 1, // 'state 6' -> Value -> BRACKET_CLOSE
	[32465] = 1, // 'state 6' -> Value -> @par-gen.EOF
	[273] = 1, // 'state 8' -> Value -> WS
	[13713] = 1, // 'state 8' -> Value -> CURLY_CLOSE
	[16401] = 1, // 'state 8' -> Value -> COMMA
	[27153] = 1, // 'state 8' -> Value -> BRACKET_CLOSE
	[32529] = 1, // 'state 8' -> Value -> @par-gen.EOF
	[32558] = 1, // 'state 9' -> S -> @par-gen.EOF
	[32591] = 1, // 'state 10' -> Json -> @par-gen.EOF
	[13808] = 1, // 'state 11' -> Element -> CURLY_CLOSE
	[16496] = 1, // 'state 11' -> Element -> COMMA
	[27248] = 1, // 'state 11' -> Element -> BRACKET_CLOSE
	[32624] = 1, // 'state 11' -> Element -> @par-gen.EOF
	[401] = 1, // 'state 12' -> Value -> WS
	[13841] = 1, // 'state 12' -> Value -> CURLY_CLOSE
	[16529] = 1, // 'state 12' -> Value -> COMMA
	[27281] = 1, // 'state 12' -> Value -> BRACKET_CLOSE
	[32657] = 1, // 'state 12' -> Value -> @par-gen.EOF
	[433] = 1, // 'state 13' -> Value -> WS
	[13873] = 1, // 'state 13' -> Value -> CURLY_CLOSE
	[16561] = 1, // 'state 13' -> Value -> COMMA
	[27313] = 1, // 'state 13' -> Value -> BRACKET_CLOSE
	[32689] = 1, // 'state 13' -> Value -> @par-gen.EOF
	[13904] = 2, // 'state 14' -> Element -> CURLY_CLOSE
	[16592] = 2, // 'state 14' -> Element -> COMMA
	[27344] = 2, // 'state 14' -> Element -> BRACKET_CLOSE
	[32720] = 2, // 'state 14' -> Element -> @par-gen.EOF
	[497] = 1, // 'state 15' -> Value -> WS
	[13937] = 1, // 'state 15' -> Value -> CURLY_CLOSE
	[16625] = 1, // 'state 15' -> Value -> COMMA
	[27377] = 1, // 'state 15' -> Value -> BRACKET_CLOSE
	[32753] = 1, // 'state 15' -> Value -> @par-gen.EOF
	[529] = 1, // 'state 16' -> Value -> WS
	[13969] = 1, // 'state 16' -> Value -> CURLY_CLOSE
	[16657] = 1, // 'state 16' -> Value -> COMMA
	[27409] = 1, // 'state 16' -> Value -> BRACKET_CLOSE
	[32785] = 1, // 'state 16' -> Value -> @par-gen.EOF
	[561] = 1, // 'state 17' -> Value -> WS
	[14001] = 1, // 'state 17' -> Value -> CURLY_CLOSE
	[16689] = 1, // 'state 17' -> Value -> COMMA
	[27441] = 1, // 'state 17' -> Value -> BRACKET_CLOSE
	[32817] = 1, // 'state 17' -> Value -> @par-gen.EOF
	[625] = 1, // 'state 19' -> Value -> WS
	[14065] = 1, // 'state 19' -> Value -> CURLY_CLOSE
	[16753] = 1, // 'state 19' -> Value -> COMMA
	[27505] = 1, // 'state 19' -> Value -> BRACKET_CLOSE
	[32881] = 1, // 'state 19' -> Value -> @par-gen.EOF
	[689] = 1, // 'state 21' -> Value -> WS
	[14129] = 1, // 'state 21' -> Value -> CURLY_CLOSE
	[16817] = 1, // 'state 21' -> Value -> COMMA
	[27569] = 1, // 'state 21' -> Value -> BRACKET_CLOSE
	[32945] = 1, // 'state 21' -> Value -> @par-gen.EOF
	[14160] = 2, // 'state 22' -> Element -> CURLY_CLOSE
	[16848] = 2, // 'state 22' -> Element -> COMMA
	[27600] = 2, // 'state 22' -> Element -> BRACKET_CLOSE
	[32976] = 2, // 'state 22' -> Element -> @par-gen.EOF
	[753] = 1, // 'state 23' -> Value -> WS
	[14193] = 1, // 'state 23' -> Value -> CURLY_CLOSE
	[16881] = 1, // 'state 23' -> Value -> COMMA
	[27633] = 1, // 'state 23' -> Value -> BRACKET_CLOSE
	[33009] = 1, // 'state 23' -> Value -> @par-gen.EOF
	[785] = 1, // 'state 24' -> Value -> WS
	[14225] = 1, // 'state 24' -> Value -> CURLY_CLOSE
	[16913] = 1, // 'state 24' -> Value -> COMMA
	[27665] = 1, // 'state 24' -> Value -> BRACKET_CLOSE
	[33041] = 1, // 'state 24' -> Value -> @par-gen.EOF
	[850] = 2, // 'state 26' -> Object -> WS
	[14290] = 2, // 'state 26' -> Object -> CURLY_CLOSE
	[16978] = 2, // 'state 26' -> Object -> COMMA
	[27730] = 2, // 'state 26' -> Object -> BRACKET_CLOSE
	[33106] = 2, // 'state 26' -> Object -> @par-gen.EOF
	[14387] = 1, // 'state 29' -> Members -> CURLY_CLOSE
	[17075] = 1, // 'state 29' -> Members -> COMMA
	[1013] = 2, // 'state 31' -> Array -> WS
	[14453] = 2, // 'state 31' -> Array -> CURLY_CLOSE
	[17141] = 2, // 'state 31' -> Array -> COMMA
	[27893] = 2, // 'state 31' -> Array -> BRACKET_CLOSE
	[33269] = 2, // 'state 31' -> Array -> @par-gen.EOF
	[17174] = 1, // 'state 32' -> Elements -> COMMA
	[27926] = 1, // 'state 32' -> Elements -> BRACKET_CLOSE
	[14544] = 3, // 'state 34' -> Element -> CURLY_CLOSE
	[17232] = 3, // 'state 34' -> Element -> COMMA
	[27984] = 3, // 'state 34' -> Element -> BRACKET_CLOSE
	[33360] = 3, // 'state 34' -> Element -> @par-gen.EOF
	[1170] = 2, // 'state 36' -> Object -> WS
	[14610] = 2, // 'state 36' -> Object -> CURLY_CLOSE
	[17298] = 2, // 'state 36' -> Object -> COMMA
	[28050] = 2, // 'state 36' -> Object -> BRACKET_CLOSE
	[33426] = 2, // 'state 36' -> Object -> @par-gen.EOF
	[14707] = 1, // 'state 39' -> Members -> CURLY_CLOSE
	[17395] = 1, // 'state 39' -> Members -> COMMA
	[1333] = 2, // 'state 41' -> Array -> WS
	[14773] = 2, // 'state 41' -> Array -> CURLY_CLOSE
	[17461] = 2, // 'state 41' -> Array -> COMMA
	[28213] = 2, // 'state 41' -> Array -> BRACKET_CLOSE
	[33589] = 2, // 'state 41' -> Array -> @par-gen.EOF
	[17494] = 1, // 'state 42' -> Elements -> COMMA
	[28246] = 1, // 'state 42' -> Elements -> BRACKET_CLOSE
	[1426] = 3, // 'state 44' -> Object -> WS
	[14866] = 3, // 'state 44' -> Object -> CURLY_CLOSE
	[17554] = 3, // 'state 44' -> Object -> COMMA
	[28306] = 3, // 'state 44' -> Object -> BRACKET_CLOSE
	[33682] = 3, // 'state 44' -> Object -> @par-gen.EOF
	[1490] = 3, // 'state 46' -> Object -> WS
	[14930] = 3, // 'state 46' -> Object -> CURLY_CLOSE
	[17618] = 3, // 'state 46' -> Object -> COMMA
	[28370] = 3, // 'state 46' -> Object -> BRACKET_CLOSE
	[33746] = 3, // 'state 46' -> Object -> @par-gen.EOF
	[1621] = 3, // 'state 50' -> Array -> WS
	[15061] = 3, // 'state 50' -> Array -> CURLY_CLOSE
	[17749] = 3, // 'state 50' -> Array -> COMMA
	[28501] = 3, // 'state 50' -> Array -> BRACKET_CLOSE
	[33877] = 3, // 'state 50' -> Array -> @par-gen.EOF
	[1685] = 3, // 'state 52' -> Array -> WS
	[15125] = 3, // 'state 52' -> Array -> CURLY_CLOSE
	[17813] = 3, // 'state 52' -> Array -> COMMA
	[28565] = 3, // 'state 52' -> Array -> BRACKET_CLOSE
	[33941] = 3, // 'state 52' -> Array -> @par-gen.EOF
	[1714] = 3, // 'state 53' -> Object -> WS
	[15154] = 3, // 'state 53' -> Object -> CURLY_CLOSE
	[17842] = 3, // 'state 53' -> Object -> COMMA
	[28594] = 3, // 'state 53' -> Object -> BRACKET_CLOSE
	[33970] = 3, // 'state 53' -> Object -> @par-gen.EOF
	[1778] = 3, // 'state 55' -> Object -> WS
	[15218] = 3, // 'state 55' -> Object -> CURLY_CLOSE
	[17906] = 3, // 'state 55' -> Object -> COMMA
	[28658] = 3, // 'state 55' -> Object -> BRACKET_CLOSE
	[34034] = 3, // 'state 55' -> Object -> @par-gen.EOF
	[1909] = 3, // 'state 59' -> Array -> WS
	[15349] = 3, // 'state 59' -> Array -> CURLY_CLOSE
	[18037] = 3, // 'state 59' -> Array -> COMMA
	[28789] = 3, // 'state 59' -> Array -> BRACKET_CLOSE
	[34165] = 3, // 'state 59' -> Array -> @par-gen.EOF
	[1973] = 3, // 'state 61' -> Array -> WS
	[15413] = 3, // 'state 61' -> Array -> CURLY_CLOSE
	[18101] = 3, // 'state 61' -> Array -> COMMA
	[28853] = 3, // 'state 61' -> Array -> BRACKET_CLOSE
	[34229] = 3, // 'state 61' -> Array -> @par-gen.EOF
	[15539] = 3, // 'state 65' -> Members -> CURLY_CLOSE
	[18227] = 3, // 'state 65' -> Members -> COMMA
	[15572] = 3, // 'state 66' -> Member -> CURLY_CLOSE
	[18260] = 3, // 'state 66' -> Member -> COMMA
	[18326] = 3, // 'state 68' -> Elements -> COMMA
	[29078] = 3, // 'state 68' -> Elements -> BRACKET_CLOSE
	[15763] = 3, // 'state 72' -> Members -> CURLY_CLOSE
	[18451] = 3, // 'state 72' -> Members -> COMMA
	[15796] = 3, // 'state 73' -> Member -> CURLY_CLOSE
	[18484] = 3, // 'state 73' -> Member -> COMMA
	[18550] = 3, // 'state 75' -> Elements -> COMMA
	[29302] = 3, // 'state 75' -> Elements -> BRACKET_CLOSE
	[15892] = 4, // 'state 76' -> Member -> CURLY_CLOSE
	[18580] = 4, // 'state 76' -> Member -> COMMA
	[15956] = 4, // 'state 78' -> Member -> CURLY_CLOSE
	[18644] = 4, // 'state 78' -> Member -> COMMA
	[15988] = 4, // 'state 79' -> Member -> CURLY_CLOSE
	[18676] = 4, // 'state 79' -> Member -> COMMA
	[16052] = 4, // 'state 81' -> Member -> CURLY_CLOSE
	[18740] = 4, // 'state 81' -> Member -> COMMA
	[16084] = 5, // 'state 82' -> Member -> CURLY_CLOSE
	[18772] = 5, // 'state 82' -> Member -> COMMA
	[16116] = 5, // 'state 83' -> Member -> CURLY_CLOSE
	[18804] = 5, // 'state 83' -> Member -> COMMA
};
const static unsigned short actionsTable[] = {
  [0] = 0, // 'state 0' -> WS -> shift -> 'action 0'
	[1] = 1, // 'state 0' -> TRUE -> shift -> 'action 1'
	[2] = 2, // 'state 0' -> FALSE -> shift -> 'action 2'
	[3] = 3, // 'state 0' -> NULL -> shift -> 'action 3'
	[4] = 4, // 'state 0' -> CURLY_OPEN -> shift -> 'action 4'
	[8] = 5, // 'state 0' -> STRING -> shift -> 'action 5'
	[9] = 6, // 'state 0' -> BRACKET_OPEN -> shift -> 'action 6'
	[11] = 7, // 'state 0' -> NUMBER -> shift -> 'action 7'
	[15] = 8, // 'state 0' -> Json -> shift -> 'action 8'
	[16] = 9, // 'state 0' -> Element -> shift -> 'action 9'
	[17] = 10, // 'state 0' -> Value -> shift -> 'action 10'
	[18] = 11, // 'state 0' -> Object -> shift -> 'action 11'
	[21] = 12, // 'state 0' -> Array -> shift -> 'action 12'
	[300] = 13, // 'state 9' -> @par-gen.EOF -> done -> 'action 13'
	[332] = 14, // 'state 10' -> @par-gen.EOF -> reduce -> 'action 14'
	[352] = 15, // 'state 11' -> WS -> shift -> 'action 15'
	[357] = 16, // 'state 11' -> CURLY_CLOSE -> reduce -> 'action 16'
	[358] = 17, // 'state 11' -> COMMA -> reduce -> 'action 17'
	[362] = 18, // 'state 11' -> BRACKET_CLOSE -> reduce -> 'action 18'
	[364] = 19, // 'state 11' -> @par-gen.EOF -> reduce -> 'action 19'
	[33] = 20, // 'state 1' -> TRUE -> shift -> 'action 20'
	[34] = 21, // 'state 1' -> FALSE -> shift -> 'action 21'
	[35] = 22, // 'state 1' -> NULL -> shift -> 'action 22'
	[36] = 23, // 'state 1' -> CURLY_OPEN -> shift -> 'action 23'
	[40] = 24, // 'state 1' -> STRING -> shift -> 'action 24'
	[41] = 25, // 'state 1' -> BRACKET_OPEN -> shift -> 'action 25'
	[43] = 26, // 'state 1' -> NUMBER -> shift -> 'action 26'
	[49] = 27, // 'state 1' -> Value -> shift -> 'action 27'
	[50] = 28, // 'state 1' -> Object -> shift -> 'action 28'
	[53] = 29, // 'state 1' -> Array -> shift -> 'action 29'
	[384] = 30, // 'state 12' -> WS -> reduce -> 'action 30'
	[389] = 31, // 'state 12' -> CURLY_CLOSE -> reduce -> 'action 31'
	[390] = 32, // 'state 12' -> COMMA -> reduce -> 'action 32'
	[394] = 33, // 'state 12' -> BRACKET_CLOSE -> reduce -> 'action 33'
	[396] = 34, // 'state 12' -> @par-gen.EOF -> reduce -> 'action 34'
	[416] = 35, // 'state 13' -> WS -> reduce -> 'action 35'
	[421] = 36, // 'state 13' -> CURLY_CLOSE -> reduce -> 'action 36'
	[422] = 37, // 'state 13' -> COMMA -> reduce -> 'action 37'
	[426] = 38, // 'state 13' -> BRACKET_CLOSE -> reduce -> 'action 38'
	[428] = 39, // 'state 13' -> @par-gen.EOF -> reduce -> 'action 39'
	[192] = 40, // 'state 6' -> WS -> reduce -> 'action 40'
	[197] = 41, // 'state 6' -> CURLY_CLOSE -> reduce -> 'action 41'
	[198] = 42, // 'state 6' -> COMMA -> reduce -> 'action 42'
	[202] = 43, // 'state 6' -> BRACKET_CLOSE -> reduce -> 'action 43'
	[204] = 44, // 'state 6' -> @par-gen.EOF -> reduce -> 'action 44'
	[256] = 45, // 'state 8' -> WS -> reduce -> 'action 45'
	[261] = 46, // 'state 8' -> CURLY_CLOSE -> reduce -> 'action 46'
	[262] = 47, // 'state 8' -> COMMA -> reduce -> 'action 47'
	[266] = 48, // 'state 8' -> BRACKET_CLOSE -> reduce -> 'action 48'
	[268] = 49, // 'state 8' -> @par-gen.EOF -> reduce -> 'action 49'
	[64] = 50, // 'state 2' -> WS -> reduce -> 'action 50'
	[69] = 51, // 'state 2' -> CURLY_CLOSE -> reduce -> 'action 51'
	[70] = 52, // 'state 2' -> COMMA -> reduce -> 'action 52'
	[74] = 53, // 'state 2' -> BRACKET_CLOSE -> reduce -> 'action 53'
	[76] = 54, // 'state 2' -> @par-gen.EOF -> reduce -> 'action 54'
	[96] = 55, // 'state 3' -> WS -> reduce -> 'action 55'
	[101] = 56, // 'state 3' -> CURLY_CLOSE -> reduce -> 'action 56'
	[102] = 57, // 'state 3' -> COMMA -> reduce -> 'action 57'
	[106] = 58, // 'state 3' -> BRACKET_CLOSE -> reduce -> 'action 58'
	[108] = 59, // 'state 3' -> @par-gen.EOF -> reduce -> 'action 59'
	[128] = 60, // 'state 4' -> WS -> reduce -> 'action 60'
	[133] = 61, // 'state 4' -> CURLY_CLOSE -> reduce -> 'action 61'
	[134] = 62, // 'state 4' -> COMMA -> reduce -> 'action 62'
	[138] = 63, // 'state 4' -> BRACKET_CLOSE -> reduce -> 'action 63'
	[140] = 64, // 'state 4' -> @par-gen.EOF -> reduce -> 'action 64'
	[160] = 65, // 'state 5' -> WS -> shift -> 'action 65'
	[165] = 66, // 'state 5' -> CURLY_CLOSE -> shift -> 'action 66'
	[168] = 67, // 'state 5' -> STRING -> shift -> 'action 67'
	[179] = 68, // 'state 5' -> Members -> shift -> 'action 68'
	[180] = 69, // 'state 5' -> Member -> shift -> 'action 69'
	[224] = 70, // 'state 7' -> WS -> shift -> 'action 70'
	[225] = 71, // 'state 7' -> TRUE -> shift -> 'action 71'
	[226] = 72, // 'state 7' -> FALSE -> shift -> 'action 72'
	[227] = 73, // 'state 7' -> NULL -> shift -> 'action 73'
	[228] = 74, // 'state 7' -> CURLY_OPEN -> shift -> 'action 74'
	[232] = 75, // 'state 7' -> STRING -> shift -> 'action 75'
	[233] = 76, // 'state 7' -> BRACKET_OPEN -> shift -> 'action 76'
	[234] = 77, // 'state 7' -> BRACKET_CLOSE -> shift -> 'action 77'
	[235] = 78, // 'state 7' -> NUMBER -> shift -> 'action 78'
	[240] = 79, // 'state 7' -> Element -> shift -> 'action 79'
	[241] = 80, // 'state 7' -> Value -> shift -> 'action 80'
	[242] = 81, // 'state 7' -> Object -> shift -> 'action 81'
	[245] = 82, // 'state 7' -> Array -> shift -> 'action 82'
	[246] = 83, // 'state 7' -> Elements -> shift -> 'action 83'
	[453] = 84, // 'state 14' -> CURLY_CLOSE -> reduce -> 'action 84'
	[454] = 85, // 'state 14' -> COMMA -> reduce -> 'action 85'
	[458] = 86, // 'state 14' -> BRACKET_CLOSE -> reduce -> 'action 86'
	[460] = 87, // 'state 14' -> @par-gen.EOF -> reduce -> 'action 87'
	[704] = 88, // 'state 22' -> WS -> shift -> 'action 88'
	[709] = 89, // 'state 22' -> CURLY_CLOSE -> reduce -> 'action 89'
	[710] = 90, // 'state 22' -> COMMA -> reduce -> 'action 90'
	[714] = 91, // 'state 22' -> BRACKET_CLOSE -> reduce -> 'action 91'
	[716] = 92, // 'state 22' -> @par-gen.EOF -> reduce -> 'action 92'
	[736] = 93, // 'state 23' -> WS -> reduce -> 'action 93'
	[741] = 94, // 'state 23' -> CURLY_CLOSE -> reduce -> 'action 94'
	[742] = 95, // 'state 23' -> COMMA -> reduce -> 'action 95'
	[746] = 96, // 'state 23' -> BRACKET_CLOSE -> reduce -> 'action 96'
	[748] = 97, // 'state 23' -> @par-gen.EOF -> reduce -> 'action 97'
	[768] = 98, // 'state 24' -> WS -> reduce -> 'action 98'
	[773] = 99, // 'state 24' -> CURLY_CLOSE -> reduce -> 'action 99'
	[774] = 100, // 'state 24' -> COMMA -> reduce -> 'action 100'
	[778] = 101, // 'state 24' -> BRACKET_CLOSE -> reduce -> 'action 101'
	[780] = 102, // 'state 24' -> @par-gen.EOF -> reduce -> 'action 102'
	[608] = 103, // 'state 19' -> WS -> reduce -> 'action 103'
	[613] = 104, // 'state 19' -> CURLY_CLOSE -> reduce -> 'action 104'
	[614] = 105, // 'state 19' -> COMMA -> reduce -> 'action 105'
	[618] = 106, // 'state 19' -> BRACKET_CLOSE -> reduce -> 'action 106'
	[620] = 107, // 'state 19' -> @par-gen.EOF -> reduce -> 'action 107'
	[672] = 108, // 'state 21' -> WS -> reduce -> 'action 108'
	[677] = 109, // 'state 21' -> CURLY_CLOSE -> reduce -> 'action 109'
	[678] = 110, // 'state 21' -> COMMA -> reduce -> 'action 110'
	[682] = 111, // 'state 21' -> BRACKET_CLOSE -> reduce -> 'action 111'
	[684] = 112, // 'state 21' -> @par-gen.EOF -> reduce -> 'action 112'
	[480] = 113, // 'state 15' -> WS -> reduce -> 'action 113'
	[485] = 114, // 'state 15' -> CURLY_CLOSE -> reduce -> 'action 114'
	[486] = 115, // 'state 15' -> COMMA -> reduce -> 'action 115'
	[490] = 116, // 'state 15' -> BRACKET_CLOSE -> reduce -> 'action 116'
	[492] = 117, // 'state 15' -> @par-gen.EOF -> reduce -> 'action 117'
	[512] = 118, // 'state 16' -> WS -> reduce -> 'action 118'
	[517] = 119, // 'state 16' -> CURLY_CLOSE -> reduce -> 'action 119'
	[518] = 120, // 'state 16' -> COMMA -> reduce -> 'action 120'
	[522] = 121, // 'state 16' -> BRACKET_CLOSE -> reduce -> 'action 121'
	[524] = 122, // 'state 16' -> @par-gen.EOF -> reduce -> 'action 122'
	[544] = 123, // 'state 17' -> WS -> reduce -> 'action 123'
	[549] = 124, // 'state 17' -> CURLY_CLOSE -> reduce -> 'action 124'
	[550] = 125, // 'state 17' -> COMMA -> reduce -> 'action 125'
	[554] = 126, // 'state 17' -> BRACKET_CLOSE -> reduce -> 'action 126'
	[556] = 127, // 'state 17' -> @par-gen.EOF -> reduce -> 'action 127'
	[576] = 128, // 'state 18' -> WS -> shift -> 'action 128'
	[581] = 129, // 'state 18' -> CURLY_CLOSE -> shift -> 'action 129'
	[584] = 130, // 'state 18' -> STRING -> shift -> 'action 130'
	[595] = 131, // 'state 18' -> Members -> shift -> 'action 131'
	[596] = 132, // 'state 18' -> Member -> shift -> 'action 132'
	[640] = 133, // 'state 20' -> WS -> shift -> 'action 133'
	[641] = 134, // 'state 20' -> TRUE -> shift -> 'action 134'
	[642] = 135, // 'state 20' -> FALSE -> shift -> 'action 135'
	[643] = 136, // 'state 20' -> NULL -> shift -> 'action 136'
	[644] = 137, // 'state 20' -> CURLY_OPEN -> shift -> 'action 137'
	[648] = 138, // 'state 20' -> STRING -> shift -> 'action 138'
	[649] = 139, // 'state 20' -> BRACKET_OPEN -> shift -> 'action 139'
	[650] = 140, // 'state 20' -> BRACKET_CLOSE -> shift -> 'action 140'
	[651] = 141, // 'state 20' -> NUMBER -> shift -> 'action 141'
	[656] = 142, // 'state 20' -> Element -> shift -> 'action 142'
	[657] = 143, // 'state 20' -> Value -> shift -> 'action 143'
	[658] = 144, // 'state 20' -> Object -> shift -> 'action 144'
	[661] = 145, // 'state 20' -> Array -> shift -> 'action 145'
	[662] = 146, // 'state 20' -> Elements -> shift -> 'action 146'
	[832] = 147, // 'state 26' -> WS -> reduce -> 'action 147'
	[837] = 148, // 'state 26' -> CURLY_CLOSE -> reduce -> 'action 148'
	[838] = 149, // 'state 26' -> COMMA -> reduce -> 'action 149'
	[842] = 150, // 'state 26' -> BRACKET_CLOSE -> reduce -> 'action 150'
	[844] = 151, // 'state 26' -> @par-gen.EOF -> reduce -> 'action 151'
	[805] = 152, // 'state 25' -> CURLY_CLOSE -> shift -> 'action 152'
	[808] = 153, // 'state 25' -> STRING -> shift -> 'action 153'
	[901] = 154, // 'state 28' -> CURLY_CLOSE -> shift -> 'action 154'
	[902] = 155, // 'state 28' -> COMMA -> shift -> 'action 155'
	[933] = 156, // 'state 29' -> CURLY_CLOSE -> reduce -> 'action 156'
	[934] = 157, // 'state 29' -> COMMA -> reduce -> 'action 157'
	[864] = 158, // 'state 27' -> WS -> shift -> 'action 158'
	[871] = 159, // 'state 27' -> COLON -> shift -> 'action 159'
	[992] = 160, // 'state 31' -> WS -> reduce -> 'action 160'
	[997] = 161, // 'state 31' -> CURLY_CLOSE -> reduce -> 'action 161'
	[998] = 162, // 'state 31' -> COMMA -> reduce -> 'action 162'
	[1002] = 163, // 'state 31' -> BRACKET_CLOSE -> reduce -> 'action 163'
	[1004] = 164, // 'state 31' -> @par-gen.EOF -> reduce -> 'action 164'
	[961] = 165, // 'state 30' -> TRUE -> shift -> 'action 165'
	[962] = 166, // 'state 30' -> FALSE -> shift -> 'action 166'
	[963] = 167, // 'state 30' -> NULL -> shift -> 'action 167'
	[964] = 168, // 'state 30' -> CURLY_OPEN -> shift -> 'action 168'
	[968] = 169, // 'state 30' -> STRING -> shift -> 'action 169'
	[969] = 170, // 'state 30' -> BRACKET_OPEN -> shift -> 'action 170'
	[970] = 171, // 'state 30' -> BRACKET_CLOSE -> shift -> 'action 171'
	[971] = 172, // 'state 30' -> NUMBER -> shift -> 'action 172'
	[977] = 173, // 'state 30' -> Value -> shift -> 'action 173'
	[978] = 174, // 'state 30' -> Object -> shift -> 'action 174'
	[981] = 175, // 'state 30' -> Array -> shift -> 'action 175'
	[1062] = 176, // 'state 33' -> COMMA -> shift -> 'action 176'
	[1066] = 177, // 'state 33' -> BRACKET_CLOSE -> shift -> 'action 177'
	[1030] = 178, // 'state 32' -> COMMA -> reduce -> 'action 178'
	[1034] = 179, // 'state 32' -> BRACKET_CLOSE -> reduce -> 'action 179'
	[1093] = 180, // 'state 34' -> CURLY_CLOSE -> reduce -> 'action 180'
	[1094] = 181, // 'state 34' -> COMMA -> reduce -> 'action 181'
	[1098] = 182, // 'state 34' -> BRACKET_CLOSE -> reduce -> 'action 182'
	[1100] = 183, // 'state 34' -> @par-gen.EOF -> reduce -> 'action 183'
	[1152] = 184, // 'state 36' -> WS -> reduce -> 'action 184'
	[1157] = 185, // 'state 36' -> CURLY_CLOSE -> reduce -> 'action 185'
	[1158] = 186, // 'state 36' -> COMMA -> reduce -> 'action 186'
	[1162] = 187, // 'state 36' -> BRACKET_CLOSE -> reduce -> 'action 187'
	[1164] = 188, // 'state 36' -> @par-gen.EOF -> reduce -> 'action 188'
	[1125] = 189, // 'state 35' -> CURLY_CLOSE -> shift -> 'action 189'
	[1128] = 190, // 'state 35' -> STRING -> shift -> 'action 190'
	[1221] = 191, // 'state 38' -> CURLY_CLOSE -> shift -> 'action 191'
	[1222] = 192, // 'state 38' -> COMMA -> shift -> 'action 192'
	[1253] = 193, // 'state 39' -> CURLY_CLOSE -> reduce -> 'action 193'
	[1254] = 194, // 'state 39' -> COMMA -> reduce -> 'action 194'
	[1184] = 195, // 'state 37' -> WS -> shift -> 'action 195'
	[1191] = 196, // 'state 37' -> COLON -> shift -> 'action 196'
	[1312] = 197, // 'state 41' -> WS -> reduce -> 'action 197'
	[1317] = 198, // 'state 41' -> CURLY_CLOSE -> reduce -> 'action 198'
	[1318] = 199, // 'state 41' -> COMMA -> reduce -> 'action 199'
	[1322] = 200, // 'state 41' -> BRACKET_CLOSE -> reduce -> 'action 200'
	[1324] = 201, // 'state 41' -> @par-gen.EOF -> reduce -> 'action 201'
	[1281] = 202, // 'state 40' -> TRUE -> shift -> 'action 202'
	[1282] = 203, // 'state 40' -> FALSE -> shift -> 'action 203'
	[1283] = 204, // 'state 40' -> NULL -> shift -> 'action 204'
	[1284] = 205, // 'state 40' -> CURLY_OPEN -> shift -> 'action 205'
	[1288] = 206, // 'state 40' -> STRING -> shift -> 'action 206'
	[1289] = 207, // 'state 40' -> BRACKET_OPEN -> shift -> 'action 207'
	[1290] = 208, // 'state 40' -> BRACKET_CLOSE -> shift -> 'action 208'
	[1291] = 209, // 'state 40' -> NUMBER -> shift -> 'action 209'
	[1297] = 210, // 'state 40' -> Value -> shift -> 'action 210'
	[1298] = 211, // 'state 40' -> Object -> shift -> 'action 211'
	[1301] = 212, // 'state 40' -> Array -> shift -> 'action 212'
	[1382] = 213, // 'state 43' -> COMMA -> shift -> 'action 213'
	[1386] = 214, // 'state 43' -> BRACKET_CLOSE -> shift -> 'action 214'
	[1350] = 215, // 'state 42' -> COMMA -> reduce -> 'action 215'
	[1354] = 216, // 'state 42' -> BRACKET_CLOSE -> reduce -> 'action 216'
	[1408] = 217, // 'state 44' -> WS -> reduce -> 'action 217'
	[1413] = 218, // 'state 44' -> CURLY_CLOSE -> reduce -> 'action 218'
	[1414] = 219, // 'state 44' -> COMMA -> reduce -> 'action 219'
	[1418] = 220, // 'state 44' -> BRACKET_CLOSE -> reduce -> 'action 220'
	[1420] = 221, // 'state 44' -> @par-gen.EOF -> reduce -> 'action 221'
	[1440] = 222, // 'state 45' -> WS -> shift -> 'action 222'
	[1447] = 223, // 'state 45' -> COLON -> shift -> 'action 223'
	[1472] = 224, // 'state 46' -> WS -> reduce -> 'action 224'
	[1477] = 225, // 'state 46' -> CURLY_CLOSE -> reduce -> 'action 225'
	[1478] = 226, // 'state 46' -> COMMA -> reduce -> 'action 226'
	[1482] = 227, // 'state 46' -> BRACKET_CLOSE -> reduce -> 'action 227'
	[1484] = 228, // 'state 46' -> @par-gen.EOF -> reduce -> 'action 228'
	[1504] = 229, // 'state 47' -> WS -> shift -> 'action 229'
	[1512] = 230, // 'state 47' -> STRING -> shift -> 'action 230'
	[1524] = 231, // 'state 47' -> Member -> shift -> 'action 231'
	[1568] = 232, // 'state 49' -> WS -> shift -> 'action 232'
	[1569] = 233, // 'state 49' -> TRUE -> shift -> 'action 233'
	[1570] = 234, // 'state 49' -> FALSE -> shift -> 'action 234'
	[1571] = 235, // 'state 49' -> NULL -> shift -> 'action 235'
	[1572] = 236, // 'state 49' -> CURLY_OPEN -> shift -> 'action 236'
	[1576] = 237, // 'state 49' -> STRING -> shift -> 'action 237'
	[1577] = 238, // 'state 49' -> BRACKET_OPEN -> shift -> 'action 238'
	[1579] = 239, // 'state 49' -> NUMBER -> shift -> 'action 239'
	[1584] = 240, // 'state 49' -> Element -> shift -> 'action 240'
	[1585] = 241, // 'state 49' -> Value -> shift -> 'action 241'
	[1586] = 242, // 'state 49' -> Object -> shift -> 'action 242'
	[1589] = 243, // 'state 49' -> Array -> shift -> 'action 243'
	[1543] = 244, // 'state 48' -> COLON -> shift -> 'action 244'
	[1600] = 245, // 'state 50' -> WS -> reduce -> 'action 245'
	[1605] = 246, // 'state 50' -> CURLY_CLOSE -> reduce -> 'action 246'
	[1606] = 247, // 'state 50' -> COMMA -> reduce -> 'action 247'
	[1610] = 248, // 'state 50' -> BRACKET_CLOSE -> reduce -> 'action 248'
	[1612] = 249, // 'state 50' -> @par-gen.EOF -> reduce -> 'action 249'
	[1664] = 250, // 'state 52' -> WS -> reduce -> 'action 250'
	[1669] = 251, // 'state 52' -> CURLY_CLOSE -> reduce -> 'action 251'
	[1670] = 252, // 'state 52' -> COMMA -> reduce -> 'action 252'
	[1674] = 253, // 'state 52' -> BRACKET_CLOSE -> reduce -> 'action 253'
	[1676] = 254, // 'state 52' -> @par-gen.EOF -> reduce -> 'action 254'
	[1632] = 255, // 'state 51' -> WS -> shift -> 'action 255'
	[1633] = 256, // 'state 51' -> TRUE -> shift -> 'action 256'
	[1634] = 257, // 'state 51' -> FALSE -> shift -> 'action 257'
	[1635] = 258, // 'state 51' -> NULL -> shift -> 'action 258'
	[1636] = 259, // 'state 51' -> CURLY_OPEN -> shift -> 'action 259'
	[1640] = 260, // 'state 51' -> STRING -> shift -> 'action 260'
	[1641] = 261, // 'state 51' -> BRACKET_OPEN -> shift -> 'action 261'
	[1643] = 262, // 'state 51' -> NUMBER -> shift -> 'action 262'
	[1648] = 263, // 'state 51' -> Element -> shift -> 'action 263'
	[1649] = 264, // 'state 51' -> Value -> shift -> 'action 264'
	[1650] = 265, // 'state 51' -> Object -> shift -> 'action 265'
	[1653] = 266, // 'state 51' -> Array -> shift -> 'action 266'
	[1696] = 267, // 'state 53' -> WS -> reduce -> 'action 267'
	[1701] = 268, // 'state 53' -> CURLY_CLOSE -> reduce -> 'action 268'
	[1702] = 269, // 'state 53' -> COMMA -> reduce -> 'action 269'
	[1706] = 270, // 'state 53' -> BRACKET_CLOSE -> reduce -> 'action 270'
	[1708] = 271, // 'state 53' -> @par-gen.EOF -> reduce -> 'action 271'
	[1728] = 272, // 'state 54' -> WS -> shift -> 'action 272'
	[1735] = 273, // 'state 54' -> COLON -> shift -> 'action 273'
	[1760] = 274, // 'state 55' -> WS -> reduce -> 'action 274'
	[1765] = 275, // 'state 55' -> CURLY_CLOSE -> reduce -> 'action 275'
	[1766] = 276, // 'state 55' -> COMMA -> reduce -> 'action 276'
	[1770] = 277, // 'state 55' -> BRACKET_CLOSE -> reduce -> 'action 277'
	[1772] = 278, // 'state 55' -> @par-gen.EOF -> reduce -> 'action 278'
	[1792] = 279, // 'state 56' -> WS -> shift -> 'action 279'
	[1800] = 280, // 'state 56' -> STRING -> shift -> 'action 280'
	[1812] = 281, // 'state 56' -> Member -> shift -> 'action 281'
	[1856] = 282, // 'state 58' -> WS -> shift -> 'action 282'
	[1857] = 283, // 'state 58' -> TRUE -> shift -> 'action 283'
	[1858] = 284, // 'state 58' -> FALSE -> shift -> 'action 284'
	[1859] = 285, // 'state 58' -> NULL -> shift -> 'action 285'
	[1860] = 286, // 'state 58' -> CURLY_OPEN -> shift -> 'action 286'
	[1864] = 287, // 'state 58' -> STRING -> shift -> 'action 287'
	[1865] = 288, // 'state 58' -> BRACKET_OPEN -> shift -> 'action 288'
	[1867] = 289, // 'state 58' -> NUMBER -> shift -> 'action 289'
	[1872] = 290, // 'state 58' -> Element -> shift -> 'action 290'
	[1873] = 291, // 'state 58' -> Value -> shift -> 'action 291'
	[1874] = 292, // 'state 58' -> Object -> shift -> 'action 292'
	[1877] = 293, // 'state 58' -> Array -> shift -> 'action 293'
	[1831] = 294, // 'state 57' -> COLON -> shift -> 'action 294'
	[1888] = 295, // 'state 59' -> WS -> reduce -> 'action 295'
	[1893] = 296, // 'state 59' -> CURLY_CLOSE -> reduce -> 'action 296'
	[1894] = 297, // 'state 59' -> COMMA -> reduce -> 'action 297'
	[1898] = 298, // 'state 59' -> BRACKET_CLOSE -> reduce -> 'action 298'
	[1900] = 299, // 'state 59' -> @par-gen.EOF -> reduce -> 'action 299'
	[1952] = 300, // 'state 61' -> WS -> reduce -> 'action 300'
	[1957] = 301, // 'state 61' -> CURLY_CLOSE -> reduce -> 'action 301'
	[1958] = 302, // 'state 61' -> COMMA -> reduce -> 'action 302'
	[1962] = 303, // 'state 61' -> BRACKET_CLOSE -> reduce -> 'action 303'
	[1964] = 304, // 'state 61' -> @par-gen.EOF -> reduce -> 'action 304'
	[1920] = 305, // 'state 60' -> WS -> shift -> 'action 305'
	[1921] = 306, // 'state 60' -> TRUE -> shift -> 'action 306'
	[1922] = 307, // 'state 60' -> FALSE -> shift -> 'action 307'
	[1923] = 308, // 'state 60' -> NULL -> shift -> 'action 308'
	[1924] = 309, // 'state 60' -> CURLY_OPEN -> shift -> 'action 309'
	[1928] = 310, // 'state 60' -> STRING -> shift -> 'action 310'
	[1929] = 311, // 'state 60' -> BRACKET_OPEN -> shift -> 'action 311'
	[1931] = 312, // 'state 60' -> NUMBER -> shift -> 'action 312'
	[1936] = 313, // 'state 60' -> Element -> shift -> 'action 313'
	[1937] = 314, // 'state 60' -> Value -> shift -> 'action 314'
	[1938] = 315, // 'state 60' -> Object -> shift -> 'action 315'
	[1941] = 316, // 'state 60' -> Array -> shift -> 'action 316'
	[2016] = 317, // 'state 63' -> WS -> shift -> 'action 317'
	[2017] = 318, // 'state 63' -> TRUE -> shift -> 'action 318'
	[2018] = 319, // 'state 63' -> FALSE -> shift -> 'action 319'
	[2019] = 320, // 'state 63' -> NULL -> shift -> 'action 320'
	[2020] = 321, // 'state 63' -> CURLY_OPEN -> shift -> 'action 321'
	[2024] = 322, // 'state 63' -> STRING -> shift -> 'action 322'
	[2025] = 323, // 'state 63' -> BRACKET_OPEN -> shift -> 'action 323'
	[2027] = 324, // 'state 63' -> NUMBER -> shift -> 'action 324'
	[2032] = 325, // 'state 63' -> Element -> shift -> 'action 325'
	[2033] = 326, // 'state 63' -> Value -> shift -> 'action 326'
	[2034] = 327, // 'state 63' -> Object -> shift -> 'action 327'
	[2037] = 328, // 'state 63' -> Array -> shift -> 'action 328'
	[1991] = 329, // 'state 62' -> COLON -> shift -> 'action 329'
	[2085] = 330, // 'state 65' -> CURLY_CLOSE -> reduce -> 'action 330'
	[2086] = 331, // 'state 65' -> COMMA -> reduce -> 'action 331'
	[2056] = 332, // 'state 64' -> STRING -> shift -> 'action 332'
	[2117] = 333, // 'state 66' -> CURLY_CLOSE -> reduce -> 'action 333'
	[2118] = 334, // 'state 66' -> COMMA -> reduce -> 'action 334'
	[2144] = 335, // 'state 67' -> WS -> shift -> 'action 335'
	[2145] = 336, // 'state 67' -> TRUE -> shift -> 'action 336'
	[2146] = 337, // 'state 67' -> FALSE -> shift -> 'action 337'
	[2147] = 338, // 'state 67' -> NULL -> shift -> 'action 338'
	[2148] = 339, // 'state 67' -> CURLY_OPEN -> shift -> 'action 339'
	[2152] = 340, // 'state 67' -> STRING -> shift -> 'action 340'
	[2153] = 341, // 'state 67' -> BRACKET_OPEN -> shift -> 'action 341'
	[2155] = 342, // 'state 67' -> NUMBER -> shift -> 'action 342'
	[2160] = 343, // 'state 67' -> Element -> shift -> 'action 343'
	[2161] = 344, // 'state 67' -> Value -> shift -> 'action 344'
	[2162] = 345, // 'state 67' -> Object -> shift -> 'action 345'
	[2165] = 346, // 'state 67' -> Array -> shift -> 'action 346'
	[2182] = 347, // 'state 68' -> COMMA -> reduce -> 'action 347'
	[2186] = 348, // 'state 68' -> BRACKET_CLOSE -> reduce -> 'action 348'
	[2240] = 349, // 'state 70' -> WS -> shift -> 'action 349'
	[2241] = 350, // 'state 70' -> TRUE -> shift -> 'action 350'
	[2242] = 351, // 'state 70' -> FALSE -> shift -> 'action 351'
	[2243] = 352, // 'state 70' -> NULL -> shift -> 'action 352'
	[2244] = 353, // 'state 70' -> CURLY_OPEN -> shift -> 'action 353'
	[2248] = 354, // 'state 70' -> STRING -> shift -> 'action 354'
	[2249] = 355, // 'state 70' -> BRACKET_OPEN -> shift -> 'action 355'
	[2251] = 356, // 'state 70' -> NUMBER -> shift -> 'action 356'
	[2256] = 357, // 'state 70' -> Element -> shift -> 'action 357'
	[2257] = 358, // 'state 70' -> Value -> shift -> 'action 358'
	[2258] = 359, // 'state 70' -> Object -> shift -> 'action 359'
	[2261] = 360, // 'state 70' -> Array -> shift -> 'action 360'
	[2215] = 361, // 'state 69' -> COLON -> shift -> 'action 361'
	[2309] = 362, // 'state 72' -> CURLY_CLOSE -> reduce -> 'action 362'
	[2310] = 363, // 'state 72' -> COMMA -> reduce -> 'action 363'
	[2280] = 364, // 'state 71' -> STRING -> shift -> 'action 364'
	[2341] = 365, // 'state 73' -> CURLY_CLOSE -> reduce -> 'action 365'
	[2342] = 366, // 'state 73' -> COMMA -> reduce -> 'action 366'
	[2368] = 367, // 'state 74' -> WS -> shift -> 'action 367'
	[2369] = 368, // 'state 74' -> TRUE -> shift -> 'action 368'
	[2370] = 369, // 'state 74' -> FALSE -> shift -> 'action 369'
	[2371] = 370, // 'state 74' -> NULL -> shift -> 'action 370'
	[2372] = 371, // 'state 74' -> CURLY_OPEN -> shift -> 'action 371'
	[2376] = 372, // 'state 74' -> STRING -> shift -> 'action 372'
	[2377] = 373, // 'state 74' -> BRACKET_OPEN -> shift -> 'action 373'
	[2379] = 374, // 'state 74' -> NUMBER -> shift -> 'action 374'
	[2384] = 375, // 'state 74' -> Element -> shift -> 'action 375'
	[2385] = 376, // 'state 74' -> Value -> shift -> 'action 376'
	[2386] = 377, // 'state 74' -> Object -> shift -> 'action 377'
	[2389] = 378, // 'state 74' -> Array -> shift -> 'action 378'
	[2406] = 379, // 'state 75' -> COMMA -> reduce -> 'action 379'
	[2410] = 380, // 'state 75' -> BRACKET_CLOSE -> reduce -> 'action 380'
	[2437] = 381, // 'state 76' -> CURLY_CLOSE -> reduce -> 'action 381'
	[2438] = 382, // 'state 76' -> COMMA -> reduce -> 'action 382'
	[2464] = 383, // 'state 77' -> WS -> shift -> 'action 383'
	[2465] = 384, // 'state 77' -> TRUE -> shift -> 'action 384'
	[2466] = 385, // 'state 77' -> FALSE -> shift -> 'action 385'
	[2467] = 386, // 'state 77' -> NULL -> shift -> 'action 386'
	[2468] = 387, // 'state 77' -> CURLY_OPEN -> shift -> 'action 387'
	[2472] = 388, // 'state 77' -> STRING -> shift -> 'action 388'
	[2473] = 389, // 'state 77' -> BRACKET_OPEN -> shift -> 'action 389'
	[2475] = 390, // 'state 77' -> NUMBER -> shift -> 'action 390'
	[2480] = 391, // 'state 77' -> Element -> shift -> 'action 391'
	[2481] = 392, // 'state 77' -> Value -> shift -> 'action 392'
	[2482] = 393, // 'state 77' -> Object -> shift -> 'action 393'
	[2485] = 394, // 'state 77' -> Array -> shift -> 'action 394'
	[2501] = 395, // 'state 78' -> CURLY_CLOSE -> reduce -> 'action 395'
	[2502] = 396, // 'state 78' -> COMMA -> reduce -> 'action 396'
	[2533] = 397, // 'state 79' -> CURLY_CLOSE -> reduce -> 'action 397'
	[2534] = 398, // 'state 79' -> COMMA -> reduce -> 'action 398'
	[2560] = 399, // 'state 80' -> WS -> shift -> 'action 399'
	[2561] = 400, // 'state 80' -> TRUE -> shift -> 'action 400'
	[2562] = 401, // 'state 80' -> FALSE -> shift -> 'action 401'
	[2563] = 402, // 'state 80' -> NULL -> shift -> 'action 402'
	[2564] = 403, // 'state 80' -> CURLY_OPEN -> shift -> 'action 403'
	[2568] = 404, // 'state 80' -> STRING -> shift -> 'action 404'
	[2569] = 405, // 'state 80' -> BRACKET_OPEN -> shift -> 'action 405'
	[2571] = 406, // 'state 80' -> NUMBER -> shift -> 'action 406'
	[2576] = 407, // 'state 80' -> Element -> shift -> 'action 407'
	[2577] = 408, // 'state 80' -> Value -> shift -> 'action 408'
	[2578] = 409, // 'state 80' -> Object -> shift -> 'action 409'
	[2581] = 410, // 'state 80' -> Array -> shift -> 'action 410'
	[2597] = 411, // 'state 81' -> CURLY_CLOSE -> reduce -> 'action 411'
	[2598] = 412, // 'state 81' -> COMMA -> reduce -> 'action 412'
	[2629] = 413, // 'state 82' -> CURLY_CLOSE -> reduce -> 'action 413'
	[2630] = 414, // 'state 82' -> COMMA -> reduce -> 'action 414'
	[2661] = 415, // 'state 83' -> CURLY_CLOSE -> reduce -> 'action 415'
	[2662] = 416, // 'state 83' -> COMMA -> reduce -> 'action 416'
};
const static unsigned char gotoTable[] = {
  [15] = 9, // 'state 9'
	[16] = 10, // 'state 10'
	[17] = 11, // 'state 11'
	[18] = 12, // 'state 12'
	[21] = 13, // 'state 13'
	[49] = 22, // 'state 22'
	[50] = 23, // 'state 23'
	[53] = 24, // 'state 24'
	[179] = 28, // 'state 28'
	[180] = 29, // 'state 29'
	[246] = 33, // 'state 33'
	[240] = 32, // 'state 32'
	[241] = 11, // 'state 11'
	[242] = 12, // 'state 12'
	[245] = 13, // 'state 13'
	[595] = 38, // 'state 38'
	[596] = 39, // 'state 39'
	[662] = 43, // 'state 43'
	[656] = 42, // 'state 42'
	[657] = 11, // 'state 11'
	[658] = 12, // 'state 12'
	[661] = 13, // 'state 13'
	[977] = 22, // 'state 22'
	[978] = 12, // 'state 12'
	[981] = 13, // 'state 13'
	[1297] = 22, // 'state 22'
	[1298] = 12, // 'state 12'
	[1301] = 13, // 'state 13'
	[1524] = 65, // 'state 65'
	[1584] = 66, // 'state 66'
	[1585] = 11, // 'state 11'
	[1586] = 12, // 'state 12'
	[1589] = 13, // 'state 13'
	[1648] = 68, // 'state 68'
	[1649] = 11, // 'state 11'
	[1650] = 12, // 'state 12'
	[1653] = 13, // 'state 13'
	[1812] = 72, // 'state 72'
	[1872] = 73, // 'state 73'
	[1873] = 11, // 'state 11'
	[1874] = 12, // 'state 12'
	[1877] = 13, // 'state 13'
	[1936] = 75, // 'state 75'
	[1937] = 11, // 'state 11'
	[1938] = 12, // 'state 12'
	[1941] = 13, // 'state 13'
	[2032] = 76, // 'state 76'
	[2033] = 11, // 'state 11'
	[2034] = 12, // 'state 12'
	[2037] = 13, // 'state 13'
	[2160] = 78, // 'state 78'
	[2161] = 11, // 'state 11'
	[2162] = 12, // 'state 12'
	[2165] = 13, // 'state 13'
	[2256] = 79, // 'state 79'
	[2257] = 11, // 'state 11'
	[2258] = 12, // 'state 12'
	[2261] = 13, // 'state 13'
	[2384] = 81, // 'state 81'
	[2385] = 11, // 'state 11'
	[2386] = 12, // 'state 12'
	[2389] = 13, // 'state 13'
	[2480] = 82, // 'state 82'
	[2481] = 11, // 'state 11'
	[2482] = 12, // 'state 12'
	[2485] = 13, // 'state 13'
	[2576] = 83, // 'state 83'
	[2577] = 11, // 'state 11'
	[2578] = 12, // 'state 12'
	[2581] = 13, // 'state 13'
};
const static struct action actions[] = {
  	// 'action 0'
  [0].op = 0, // shift;
  [0].state = 1, // 'state 1'
		// 'action 1'
  [1].op = 0, // shift;
  [1].state = 2, // 'state 2'
		// 'action 2'
  [2].op = 0, // shift;
  [2].state = 3, // 'state 3'
		// 'action 3'
  [3].op = 0, // shift;
  [3].state = 4, // 'state 4'
		// 'action 4'
  [4].op = 0, // shift;
  [4].state = 5, // 'state 5'
		// 'action 5'
  [5].op = 0, // shift;
  [5].state = 6, // 'state 6'
		// 'action 6'
  [6].op = 0, // shift;
  [6].state = 7, // 'state 7'
		// 'action 7'
  [7].op = 0, // shift;
  [7].state = 8, // 'state 8'
		// 'action 8'
  [8].op = 0, // shift;
  [8].state = 9, // 'state 9'
		// 'action 9'
  [9].op = 0, // shift;
  [9].state = 10, // 'state 10'
		// 'action 10'
  [10].op = 0, // shift;
  [10].state = 11, // 'state 11'
		// 'action 11'
  [11].op = 0, // shift;
  [11].state = 12, // 'state 12'
		// 'action 12'
  [12].op = 0, // shift;
  [12].state = 13, // 'state 13'
		// 'action 13'
  [13].op = 2, // done;
  
		// 'action 14'
  [14].op = 1, // reduce;
  [14].symbol = 15, // Json
		// 'action 15'
  [15].op = 0, // shift;
  [15].state = 14, // 'state 14'
		// 'action 16'
  [16].op = 1, // reduce;
  [16].symbol = 16, // Element
		// 'action 17'
  [17].op = 1, // reduce;
  [17].symbol = 16, // Element
		// 'action 18'
  [18].op = 1, // reduce;
  [18].symbol = 16, // Element
		// 'action 19'
  [19].op = 1, // reduce;
  [19].symbol = 16, // Element
		// 'action 20'
  [20].op = 0, // shift;
  [20].state = 15, // 'state 15'
		// 'action 21'
  [21].op = 0, // shift;
  [21].state = 16, // 'state 16'
		// 'action 22'
  [22].op = 0, // shift;
  [22].state = 17, // 'state 17'
		// 'action 23'
  [23].op = 0, // shift;
  [23].state = 18, // 'state 18'
		// 'action 24'
  [24].op = 0, // shift;
  [24].state = 19, // 'state 19'
		// 'action 25'
  [25].op = 0, // shift;
  [25].state = 20, // 'state 20'
		// 'action 26'
  [26].op = 0, // shift;
  [26].state = 21, // 'state 21'
		// 'action 27'
  [27].op = 0, // shift;
  [27].state = 22, // 'state 22'
		// 'action 28'
  [28].op = 0, // shift;
  [28].state = 23, // 'state 23'
		// 'action 29'
  [29].op = 0, // shift;
  [29].state = 24, // 'state 24'
		// 'action 30'
  [30].op = 1, // reduce;
  [30].symbol = 17, // Value
		// 'action 31'
  [31].op = 1, // reduce;
  [31].symbol = 17, // Value
		// 'action 32'
  [32].op = 1, // reduce;
  [32].symbol = 17, // Value
		// 'action 33'
  [33].op = 1, // reduce;
  [33].symbol = 17, // Value
		// 'action 34'
  [34].op = 1, // reduce;
  [34].symbol = 17, // Value
		// 'action 35'
  [35].op = 1, // reduce;
  [35].symbol = 17, // Value
		// 'action 36'
  [36].op = 1, // reduce;
  [36].symbol = 17, // Value
		// 'action 37'
  [37].op = 1, // reduce;
  [37].symbol = 17, // Value
		// 'action 38'
  [38].op = 1, // reduce;
  [38].symbol = 17, // Value
		// 'action 39'
  [39].op = 1, // reduce;
  [39].symbol = 17, // Value
		// 'action 40'
  [40].op = 1, // reduce;
  [40].symbol = 17, // Value
		// 'action 41'
  [41].op = 1, // reduce;
  [41].symbol = 17, // Value
		// 'action 42'
  [42].op = 1, // reduce;
  [42].symbol = 17, // Value
		// 'action 43'
  [43].op = 1, // reduce;
  [43].symbol = 17, // Value
		// 'action 44'
  [44].op = 1, // reduce;
  [44].symbol = 17, // Value
		// 'action 45'
  [45].op = 1, // reduce;
  [45].symbol = 17, // Value
		// 'action 46'
  [46].op = 1, // reduce;
  [46].symbol = 17, // Value
		// 'action 47'
  [47].op = 1, // reduce;
  [47].symbol = 17, // Value
		// 'action 48'
  [48].op = 1, // reduce;
  [48].symbol = 17, // Value
		// 'action 49'
  [49].op = 1, // reduce;
  [49].symbol = 17, // Value
		// 'action 50'
  [50].op = 1, // reduce;
  [50].symbol = 17, // Value
		// 'action 51'
  [51].op = 1, // reduce;
  [51].symbol = 17, // Value
		// 'action 52'
  [52].op = 1, // reduce;
  [52].symbol = 17, // Value
		// 'action 53'
  [53].op = 1, // reduce;
  [53].symbol = 17, // Value
		// 'action 54'
  [54].op = 1, // reduce;
  [54].symbol = 17, // Value
		// 'action 55'
  [55].op = 1, // reduce;
  [55].symbol = 17, // Value
		// 'action 56'
  [56].op = 1, // reduce;
  [56].symbol = 17, // Value
		// 'action 57'
  [57].op = 1, // reduce;
  [57].symbol = 17, // Value
		// 'action 58'
  [58].op = 1, // reduce;
  [58].symbol = 17, // Value
		// 'action 59'
  [59].op = 1, // reduce;
  [59].symbol = 17, // Value
		// 'action 60'
  [60].op = 1, // reduce;
  [60].symbol = 17, // Value
		// 'action 61'
  [61].op = 1, // reduce;
  [61].symbol = 17, // Value
		// 'action 62'
  [62].op = 1, // reduce;
  [62].symbol = 17, // Value
		// 'action 63'
  [63].op = 1, // reduce;
  [63].symbol = 17, // Value
		// 'action 64'
  [64].op = 1, // reduce;
  [64].symbol = 17, // Value
		// 'action 65'
  [65].op = 0, // shift;
  [65].state = 25, // 'state 25'
		// 'action 66'
  [66].op = 0, // shift;
  [66].state = 26, // 'state 26'
		// 'action 67'
  [67].op = 0, // shift;
  [67].state = 27, // 'state 27'
		// 'action 68'
  [68].op = 0, // shift;
  [68].state = 28, // 'state 28'
		// 'action 69'
  [69].op = 0, // shift;
  [69].state = 29, // 'state 29'
		// 'action 70'
  [70].op = 0, // shift;
  [70].state = 30, // 'state 30'
		// 'action 71'
  [71].op = 0, // shift;
  [71].state = 2, // 'state 2'
		// 'action 72'
  [72].op = 0, // shift;
  [72].state = 3, // 'state 3'
		// 'action 73'
  [73].op = 0, // shift;
  [73].state = 4, // 'state 4'
		// 'action 74'
  [74].op = 0, // shift;
  [74].state = 5, // 'state 5'
		// 'action 75'
  [75].op = 0, // shift;
  [75].state = 6, // 'state 6'
		// 'action 76'
  [76].op = 0, // shift;
  [76].state = 7, // 'state 7'
		// 'action 77'
  [77].op = 0, // shift;
  [77].state = 31, // 'state 31'
		// 'action 78'
  [78].op = 0, // shift;
  [78].state = 8, // 'state 8'
		// 'action 79'
  [79].op = 0, // shift;
  [79].state = 32, // 'state 32'
		// 'action 80'
  [80].op = 0, // shift;
  [80].state = 11, // 'state 11'
		// 'action 81'
  [81].op = 0, // shift;
  [81].state = 12, // 'state 12'
		// 'action 82'
  [82].op = 0, // shift;
  [82].state = 13, // 'state 13'
		// 'action 83'
  [83].op = 0, // shift;
  [83].state = 33, // 'state 33'
		// 'action 84'
  [84].op = 1, // reduce;
  [84].symbol = 16, // Element
		// 'action 85'
  [85].op = 1, // reduce;
  [85].symbol = 16, // Element
		// 'action 86'
  [86].op = 1, // reduce;
  [86].symbol = 16, // Element
		// 'action 87'
  [87].op = 1, // reduce;
  [87].symbol = 16, // Element
		// 'action 88'
  [88].op = 0, // shift;
  [88].state = 34, // 'state 34'
		// 'action 89'
  [89].op = 1, // reduce;
  [89].symbol = 16, // Element
		// 'action 90'
  [90].op = 1, // reduce;
  [90].symbol = 16, // Element
		// 'action 91'
  [91].op = 1, // reduce;
  [91].symbol = 16, // Element
		// 'action 92'
  [92].op = 1, // reduce;
  [92].symbol = 16, // Element
		// 'action 93'
  [93].op = 1, // reduce;
  [93].symbol = 17, // Value
		// 'action 94'
  [94].op = 1, // reduce;
  [94].symbol = 17, // Value
		// 'action 95'
  [95].op = 1, // reduce;
  [95].symbol = 17, // Value
		// 'action 96'
  [96].op = 1, // reduce;
  [96].symbol = 17, // Value
		// 'action 97'
  [97].op = 1, // reduce;
  [97].symbol = 17, // Value
		// 'action 98'
  [98].op = 1, // reduce;
  [98].symbol = 17, // Value
		// 'action 99'
  [99].op = 1, // reduce;
  [99].symbol = 17, // Value
		// 'action 100'
  [100].op = 1, // reduce;
  [100].symbol = 17, // Value
		// 'action 101'
  [101].op = 1, // reduce;
  [101].symbol = 17, // Value
		// 'action 102'
  [102].op = 1, // reduce;
  [102].symbol = 17, // Value
		// 'action 103'
  [103].op = 1, // reduce;
  [103].symbol = 17, // Value
		// 'action 104'
  [104].op = 1, // reduce;
  [104].symbol = 17, // Value
		// 'action 105'
  [105].op = 1, // reduce;
  [105].symbol = 17, // Value
		// 'action 106'
  [106].op = 1, // reduce;
  [106].symbol = 17, // Value
		// 'action 107'
  [107].op = 1, // reduce;
  [107].symbol = 17, // Value
		// 'action 108'
  [108].op = 1, // reduce;
  [108].symbol = 17, // Value
		// 'action 109'
  [109].op = 1, // reduce;
  [109].symbol = 17, // Value
		// 'action 110'
  [110].op = 1, // reduce;
  [110].symbol = 17, // Value
		// 'action 111'
  [111].op = 1, // reduce;
  [111].symbol = 17, // Value
		// 'action 112'
  [112].op = 1, // reduce;
  [112].symbol = 17, // Value
		// 'action 113'
  [113].op = 1, // reduce;
  [113].symbol = 17, // Value
		// 'action 114'
  [114].op = 1, // reduce;
  [114].symbol = 17, // Value
		// 'action 115'
  [115].op = 1, // reduce;
  [115].symbol = 17, // Value
		// 'action 116'
  [116].op = 1, // reduce;
  [116].symbol = 17, // Value
		// 'action 117'
  [117].op = 1, // reduce;
  [117].symbol = 17, // Value
		// 'action 118'
  [118].op = 1, // reduce;
  [118].symbol = 17, // Value
		// 'action 119'
  [119].op = 1, // reduce;
  [119].symbol = 17, // Value
		// 'action 120'
  [120].op = 1, // reduce;
  [120].symbol = 17, // Value
		// 'action 121'
  [121].op = 1, // reduce;
  [121].symbol = 17, // Value
		// 'action 122'
  [122].op = 1, // reduce;
  [122].symbol = 17, // Value
		// 'action 123'
  [123].op = 1, // reduce;
  [123].symbol = 17, // Value
		// 'action 124'
  [124].op = 1, // reduce;
  [124].symbol = 17, // Value
		// 'action 125'
  [125].op = 1, // reduce;
  [125].symbol = 17, // Value
		// 'action 126'
  [126].op = 1, // reduce;
  [126].symbol = 17, // Value
		// 'action 127'
  [127].op = 1, // reduce;
  [127].symbol = 17, // Value
		// 'action 128'
  [128].op = 0, // shift;
  [128].state = 35, // 'state 35'
		// 'action 129'
  [129].op = 0, // shift;
  [129].state = 36, // 'state 36'
		// 'action 130'
  [130].op = 0, // shift;
  [130].state = 37, // 'state 37'
		// 'action 131'
  [131].op = 0, // shift;
  [131].state = 38, // 'state 38'
		// 'action 132'
  [132].op = 0, // shift;
  [132].state = 39, // 'state 39'
		// 'action 133'
  [133].op = 0, // shift;
  [133].state = 40, // 'state 40'
		// 'action 134'
  [134].op = 0, // shift;
  [134].state = 2, // 'state 2'
		// 'action 135'
  [135].op = 0, // shift;
  [135].state = 3, // 'state 3'
		// 'action 136'
  [136].op = 0, // shift;
  [136].state = 4, // 'state 4'
		// 'action 137'
  [137].op = 0, // shift;
  [137].state = 5, // 'state 5'
		// 'action 138'
  [138].op = 0, // shift;
  [138].state = 6, // 'state 6'
		// 'action 139'
  [139].op = 0, // shift;
  [139].state = 7, // 'state 7'
		// 'action 140'
  [140].op = 0, // shift;
  [140].state = 41, // 'state 41'
		// 'action 141'
  [141].op = 0, // shift;
  [141].state = 8, // 'state 8'
		// 'action 142'
  [142].op = 0, // shift;
  [142].state = 42, // 'state 42'
		// 'action 143'
  [143].op = 0, // shift;
  [143].state = 11, // 'state 11'
		// 'action 144'
  [144].op = 0, // shift;
  [144].state = 12, // 'state 12'
		// 'action 145'
  [145].op = 0, // shift;
  [145].state = 13, // 'state 13'
		// 'action 146'
  [146].op = 0, // shift;
  [146].state = 43, // 'state 43'
		// 'action 147'
  [147].op = 1, // reduce;
  [147].symbol = 18, // Object
		// 'action 148'
  [148].op = 1, // reduce;
  [148].symbol = 18, // Object
		// 'action 149'
  [149].op = 1, // reduce;
  [149].symbol = 18, // Object
		// 'action 150'
  [150].op = 1, // reduce;
  [150].symbol = 18, // Object
		// 'action 151'
  [151].op = 1, // reduce;
  [151].symbol = 18, // Object
		// 'action 152'
  [152].op = 0, // shift;
  [152].state = 44, // 'state 44'
		// 'action 153'
  [153].op = 0, // shift;
  [153].state = 45, // 'state 45'
		// 'action 154'
  [154].op = 0, // shift;
  [154].state = 46, // 'state 46'
		// 'action 155'
  [155].op = 0, // shift;
  [155].state = 47, // 'state 47'
		// 'action 156'
  [156].op = 1, // reduce;
  [156].symbol = 19, // Members
		// 'action 157'
  [157].op = 1, // reduce;
  [157].symbol = 19, // Members
		// 'action 158'
  [158].op = 0, // shift;
  [158].state = 48, // 'state 48'
		// 'action 159'
  [159].op = 0, // shift;
  [159].state = 49, // 'state 49'
		// 'action 160'
  [160].op = 1, // reduce;
  [160].symbol = 21, // Array
		// 'action 161'
  [161].op = 1, // reduce;
  [161].symbol = 21, // Array
		// 'action 162'
  [162].op = 1, // reduce;
  [162].symbol = 21, // Array
		// 'action 163'
  [163].op = 1, // reduce;
  [163].symbol = 21, // Array
		// 'action 164'
  [164].op = 1, // reduce;
  [164].symbol = 21, // Array
		// 'action 165'
  [165].op = 0, // shift;
  [165].state = 2, // 'state 2'
		// 'action 166'
  [166].op = 0, // shift;
  [166].state = 3, // 'state 3'
		// 'action 167'
  [167].op = 0, // shift;
  [167].state = 4, // 'state 4'
		// 'action 168'
  [168].op = 0, // shift;
  [168].state = 5, // 'state 5'
		// 'action 169'
  [169].op = 0, // shift;
  [169].state = 6, // 'state 6'
		// 'action 170'
  [170].op = 0, // shift;
  [170].state = 7, // 'state 7'
		// 'action 171'
  [171].op = 0, // shift;
  [171].state = 50, // 'state 50'
		// 'action 172'
  [172].op = 0, // shift;
  [172].state = 8, // 'state 8'
		// 'action 173'
  [173].op = 0, // shift;
  [173].state = 22, // 'state 22'
		// 'action 174'
  [174].op = 0, // shift;
  [174].state = 12, // 'state 12'
		// 'action 175'
  [175].op = 0, // shift;
  [175].state = 13, // 'state 13'
		// 'action 176'
  [176].op = 0, // shift;
  [176].state = 51, // 'state 51'
		// 'action 177'
  [177].op = 0, // shift;
  [177].state = 52, // 'state 52'
		// 'action 178'
  [178].op = 1, // reduce;
  [178].symbol = 22, // Elements
		// 'action 179'
  [179].op = 1, // reduce;
  [179].symbol = 22, // Elements
		// 'action 180'
  [180].op = 1, // reduce;
  [180].symbol = 16, // Element
		// 'action 181'
  [181].op = 1, // reduce;
  [181].symbol = 16, // Element
		// 'action 182'
  [182].op = 1, // reduce;
  [182].symbol = 16, // Element
		// 'action 183'
  [183].op = 1, // reduce;
  [183].symbol = 16, // Element
		// 'action 184'
  [184].op = 1, // reduce;
  [184].symbol = 18, // Object
		// 'action 185'
  [185].op = 1, // reduce;
  [185].symbol = 18, // Object
		// 'action 186'
  [186].op = 1, // reduce;
  [186].symbol = 18, // Object
		// 'action 187'
  [187].op = 1, // reduce;
  [187].symbol = 18, // Object
		// 'action 188'
  [188].op = 1, // reduce;
  [188].symbol = 18, // Object
		// 'action 189'
  [189].op = 0, // shift;
  [189].state = 53, // 'state 53'
		// 'action 190'
  [190].op = 0, // shift;
  [190].state = 54, // 'state 54'
		// 'action 191'
  [191].op = 0, // shift;
  [191].state = 55, // 'state 55'
		// 'action 192'
  [192].op = 0, // shift;
  [192].state = 56, // 'state 56'
		// 'action 193'
  [193].op = 1, // reduce;
  [193].symbol = 19, // Members
		// 'action 194'
  [194].op = 1, // reduce;
  [194].symbol = 19, // Members
		// 'action 195'
  [195].op = 0, // shift;
  [195].state = 57, // 'state 57'
		// 'action 196'
  [196].op = 0, // shift;
  [196].state = 58, // 'state 58'
		// 'action 197'
  [197].op = 1, // reduce;
  [197].symbol = 21, // Array
		// 'action 198'
  [198].op = 1, // reduce;
  [198].symbol = 21, // Array
		// 'action 199'
  [199].op = 1, // reduce;
  [199].symbol = 21, // Array
		// 'action 200'
  [200].op = 1, // reduce;
  [200].symbol = 21, // Array
		// 'action 201'
  [201].op = 1, // reduce;
  [201].symbol = 21, // Array
		// 'action 202'
  [202].op = 0, // shift;
  [202].state = 2, // 'state 2'
		// 'action 203'
  [203].op = 0, // shift;
  [203].state = 3, // 'state 3'
		// 'action 204'
  [204].op = 0, // shift;
  [204].state = 4, // 'state 4'
		// 'action 205'
  [205].op = 0, // shift;
  [205].state = 5, // 'state 5'
		// 'action 206'
  [206].op = 0, // shift;
  [206].state = 6, // 'state 6'
		// 'action 207'
  [207].op = 0, // shift;
  [207].state = 7, // 'state 7'
		// 'action 208'
  [208].op = 0, // shift;
  [208].state = 59, // 'state 59'
		// 'action 209'
  [209].op = 0, // shift;
  [209].state = 8, // 'state 8'
		// 'action 210'
  [210].op = 0, // shift;
  [210].state = 22, // 'state 22'
		// 'action 211'
  [211].op = 0, // shift;
  [211].state = 12, // 'state 12'
		// 'action 212'
  [212].op = 0, // shift;
  [212].state = 13, // 'state 13'
		// 'action 213'
  [213].op = 0, // shift;
  [213].state = 60, // 'state 60'
		// 'action 214'
  [214].op = 0, // shift;
  [214].state = 61, // 'state 61'
		// 'action 215'
  [215].op = 1, // reduce;
  [215].symbol = 22, // Elements
		// 'action 216'
  [216].op = 1, // reduce;
  [216].symbol = 22, // Elements
		// 'action 217'
  [217].op = 1, // reduce;
  [217].symbol = 18, // Object
		// 'action 218'
  [218].op = 1, // reduce;
  [218].symbol = 18, // Object
		// 'action 219'
  [219].op = 1, // reduce;
  [219].symbol = 18, // Object
		// 'action 220'
  [220].op = 1, // reduce;
  [220].symbol = 18, // Object
		// 'action 221'
  [221].op = 1, // reduce;
  [221].symbol = 18, // Object
		// 'action 222'
  [222].op = 0, // shift;
  [222].state = 62, // 'state 62'
		// 'action 223'
  [223].op = 0, // shift;
  [223].state = 63, // 'state 63'
		// 'action 224'
  [224].op = 1, // reduce;
  [224].symbol = 18, // Object
		// 'action 225'
  [225].op = 1, // reduce;
  [225].symbol = 18, // Object
		// 'action 226'
  [226].op = 1, // reduce;
  [226].symbol = 18, // Object
		// 'action 227'
  [227].op = 1, // reduce;
  [227].symbol = 18, // Object
		// 'action 228'
  [228].op = 1, // reduce;
  [228].symbol = 18, // Object
		// 'action 229'
  [229].op = 0, // shift;
  [229].state = 64, // 'state 64'
		// 'action 230'
  [230].op = 0, // shift;
  [230].state = 27, // 'state 27'
		// 'action 231'
  [231].op = 0, // shift;
  [231].state = 65, // 'state 65'
		// 'action 232'
  [232].op = 0, // shift;
  [232].state = 1, // 'state 1'
		// 'action 233'
  [233].op = 0, // shift;
  [233].state = 2, // 'state 2'
		// 'action 234'
  [234].op = 0, // shift;
  [234].state = 3, // 'state 3'
		// 'action 235'
  [235].op = 0, // shift;
  [235].state = 4, // 'state 4'
		// 'action 236'
  [236].op = 0, // shift;
  [236].state = 5, // 'state 5'
		// 'action 237'
  [237].op = 0, // shift;
  [237].state = 6, // 'state 6'
		// 'action 238'
  [238].op = 0, // shift;
  [238].state = 7, // 'state 7'
		// 'action 239'
  [239].op = 0, // shift;
  [239].state = 8, // 'state 8'
		// 'action 240'
  [240].op = 0, // shift;
  [240].state = 66, // 'state 66'
		// 'action 241'
  [241].op = 0, // shift;
  [241].state = 11, // 'state 11'
		// 'action 242'
  [242].op = 0, // shift;
  [242].state = 12, // 'state 12'
		// 'action 243'
  [243].op = 0, // shift;
  [243].state = 13, // 'state 13'
		// 'action 244'
  [244].op = 0, // shift;
  [244].state = 67, // 'state 67'
		// 'action 245'
  [245].op = 1, // reduce;
  [245].symbol = 21, // Array
		// 'action 246'
  [246].op = 1, // reduce;
  [246].symbol = 21, // Array
		// 'action 247'
  [247].op = 1, // reduce;
  [247].symbol = 21, // Array
		// 'action 248'
  [248].op = 1, // reduce;
  [248].symbol = 21, // Array
		// 'action 249'
  [249].op = 1, // reduce;
  [249].symbol = 21, // Array
		// 'action 250'
  [250].op = 1, // reduce;
  [250].symbol = 21, // Array
		// 'action 251'
  [251].op = 1, // reduce;
  [251].symbol = 21, // Array
		// 'action 252'
  [252].op = 1, // reduce;
  [252].symbol = 21, // Array
		// 'action 253'
  [253].op = 1, // reduce;
  [253].symbol = 21, // Array
		// 'action 254'
  [254].op = 1, // reduce;
  [254].symbol = 21, // Array
		// 'action 255'
  [255].op = 0, // shift;
  [255].state = 1, // 'state 1'
		// 'action 256'
  [256].op = 0, // shift;
  [256].state = 2, // 'state 2'
		// 'action 257'
  [257].op = 0, // shift;
  [257].state = 3, // 'state 3'
		// 'action 258'
  [258].op = 0, // shift;
  [258].state = 4, // 'state 4'
		// 'action 259'
  [259].op = 0, // shift;
  [259].state = 5, // 'state 5'
		// 'action 260'
  [260].op = 0, // shift;
  [260].state = 6, // 'state 6'
		// 'action 261'
  [261].op = 0, // shift;
  [261].state = 7, // 'state 7'
		// 'action 262'
  [262].op = 0, // shift;
  [262].state = 8, // 'state 8'
		// 'action 263'
  [263].op = 0, // shift;
  [263].state = 68, // 'state 68'
		// 'action 264'
  [264].op = 0, // shift;
  [264].state = 11, // 'state 11'
		// 'action 265'
  [265].op = 0, // shift;
  [265].state = 12, // 'state 12'
		// 'action 266'
  [266].op = 0, // shift;
  [266].state = 13, // 'state 13'
		// 'action 267'
  [267].op = 1, // reduce;
  [267].symbol = 18, // Object
		// 'action 268'
  [268].op = 1, // reduce;
  [268].symbol = 18, // Object
		// 'action 269'
  [269].op = 1, // reduce;
  [269].symbol = 18, // Object
		// 'action 270'
  [270].op = 1, // reduce;
  [270].symbol = 18, // Object
		// 'action 271'
  [271].op = 1, // reduce;
  [271].symbol = 18, // Object
		// 'action 272'
  [272].op = 0, // shift;
  [272].state = 69, // 'state 69'
		// 'action 273'
  [273].op = 0, // shift;
  [273].state = 70, // 'state 70'
		// 'action 274'
  [274].op = 1, // reduce;
  [274].symbol = 18, // Object
		// 'action 275'
  [275].op = 1, // reduce;
  [275].symbol = 18, // Object
		// 'action 276'
  [276].op = 1, // reduce;
  [276].symbol = 18, // Object
		// 'action 277'
  [277].op = 1, // reduce;
  [277].symbol = 18, // Object
		// 'action 278'
  [278].op = 1, // reduce;
  [278].symbol = 18, // Object
		// 'action 279'
  [279].op = 0, // shift;
  [279].state = 71, // 'state 71'
		// 'action 280'
  [280].op = 0, // shift;
  [280].state = 27, // 'state 27'
		// 'action 281'
  [281].op = 0, // shift;
  [281].state = 72, // 'state 72'
		// 'action 282'
  [282].op = 0, // shift;
  [282].state = 1, // 'state 1'
		// 'action 283'
  [283].op = 0, // shift;
  [283].state = 2, // 'state 2'
		// 'action 284'
  [284].op = 0, // shift;
  [284].state = 3, // 'state 3'
		// 'action 285'
  [285].op = 0, // shift;
  [285].state = 4, // 'state 4'
		// 'action 286'
  [286].op = 0, // shift;
  [286].state = 5, // 'state 5'
		// 'action 287'
  [287].op = 0, // shift;
  [287].state = 6, // 'state 6'
		// 'action 288'
  [288].op = 0, // shift;
  [288].state = 7, // 'state 7'
		// 'action 289'
  [289].op = 0, // shift;
  [289].state = 8, // 'state 8'
		// 'action 290'
  [290].op = 0, // shift;
  [290].state = 73, // 'state 73'
		// 'action 291'
  [291].op = 0, // shift;
  [291].state = 11, // 'state 11'
		// 'action 292'
  [292].op = 0, // shift;
  [292].state = 12, // 'state 12'
		// 'action 293'
  [293].op = 0, // shift;
  [293].state = 13, // 'state 13'
		// 'action 294'
  [294].op = 0, // shift;
  [294].state = 74, // 'state 74'
		// 'action 295'
  [295].op = 1, // reduce;
  [295].symbol = 21, // Array
		// 'action 296'
  [296].op = 1, // reduce;
  [296].symbol = 21, // Array
		// 'action 297'
  [297].op = 1, // reduce;
  [297].symbol = 21, // Array
		// 'action 298'
  [298].op = 1, // reduce;
  [298].symbol = 21, // Array
		// 'action 299'
  [299].op = 1, // reduce;
  [299].symbol = 21, // Array
		// 'action 300'
  [300].op = 1, // reduce;
  [300].symbol = 21, // Array
		// 'action 301'
  [301].op = 1, // reduce;
  [301].symbol = 21, // Array
		// 'action 302'
  [302].op = 1, // reduce;
  [302].symbol = 21, // Array
		// 'action 303'
  [303].op = 1, // reduce;
  [303].symbol = 21, // Array
		// 'action 304'
  [304].op = 1, // reduce;
  [304].symbol = 21, // Array
		// 'action 305'
  [305].op = 0, // shift;
  [305].state = 1, // 'state 1'
		// 'action 306'
  [306].op = 0, // shift;
  [306].state = 2, // 'state 2'
		// 'action 307'
  [307].op = 0, // shift;
  [307].state = 3, // 'state 3'
		// 'action 308'
  [308].op = 0, // shift;
  [308].state = 4, // 'state 4'
		// 'action 309'
  [309].op = 0, // shift;
  [309].state = 5, // 'state 5'
		// 'action 310'
  [310].op = 0, // shift;
  [310].state = 6, // 'state 6'
		// 'action 311'
  [311].op = 0, // shift;
  [311].state = 7, // 'state 7'
		// 'action 312'
  [312].op = 0, // shift;
  [312].state = 8, // 'state 8'
		// 'action 313'
  [313].op = 0, // shift;
  [313].state = 75, // 'state 75'
		// 'action 314'
  [314].op = 0, // shift;
  [314].state = 11, // 'state 11'
		// 'action 315'
  [315].op = 0, // shift;
  [315].state = 12, // 'state 12'
		// 'action 316'
  [316].op = 0, // shift;
  [316].state = 13, // 'state 13'
		// 'action 317'
  [317].op = 0, // shift;
  [317].state = 1, // 'state 1'
		// 'action 318'
  [318].op = 0, // shift;
  [318].state = 2, // 'state 2'
		// 'action 319'
  [319].op = 0, // shift;
  [319].state = 3, // 'state 3'
		// 'action 320'
  [320].op = 0, // shift;
  [320].state = 4, // 'state 4'
		// 'action 321'
  [321].op = 0, // shift;
  [321].state = 5, // 'state 5'
		// 'action 322'
  [322].op = 0, // shift;
  [322].state = 6, // 'state 6'
		// 'action 323'
  [323].op = 0, // shift;
  [323].state = 7, // 'state 7'
		// 'action 324'
  [324].op = 0, // shift;
  [324].state = 8, // 'state 8'
		// 'action 325'
  [325].op = 0, // shift;
  [325].state = 76, // 'state 76'
		// 'action 326'
  [326].op = 0, // shift;
  [326].state = 11, // 'state 11'
		// 'action 327'
  [327].op = 0, // shift;
  [327].state = 12, // 'state 12'
		// 'action 328'
  [328].op = 0, // shift;
  [328].state = 13, // 'state 13'
		// 'action 329'
  [329].op = 0, // shift;
  [329].state = 77, // 'state 77'
		// 'action 330'
  [330].op = 1, // reduce;
  [330].symbol = 19, // Members
		// 'action 331'
  [331].op = 1, // reduce;
  [331].symbol = 19, // Members
		// 'action 332'
  [332].op = 0, // shift;
  [332].state = 45, // 'state 45'
		// 'action 333'
  [333].op = 1, // reduce;
  [333].symbol = 20, // Member
		// 'action 334'
  [334].op = 1, // reduce;
  [334].symbol = 20, // Member
		// 'action 335'
  [335].op = 0, // shift;
  [335].state = 1, // 'state 1'
		// 'action 336'
  [336].op = 0, // shift;
  [336].state = 2, // 'state 2'
		// 'action 337'
  [337].op = 0, // shift;
  [337].state = 3, // 'state 3'
		// 'action 338'
  [338].op = 0, // shift;
  [338].state = 4, // 'state 4'
		// 'action 339'
  [339].op = 0, // shift;
  [339].state = 5, // 'state 5'
		// 'action 340'
  [340].op = 0, // shift;
  [340].state = 6, // 'state 6'
		// 'action 341'
  [341].op = 0, // shift;
  [341].state = 7, // 'state 7'
		// 'action 342'
  [342].op = 0, // shift;
  [342].state = 8, // 'state 8'
		// 'action 343'
  [343].op = 0, // shift;
  [343].state = 78, // 'state 78'
		// 'action 344'
  [344].op = 0, // shift;
  [344].state = 11, // 'state 11'
		// 'action 345'
  [345].op = 0, // shift;
  [345].state = 12, // 'state 12'
		// 'action 346'
  [346].op = 0, // shift;
  [346].state = 13, // 'state 13'
		// 'action 347'
  [347].op = 1, // reduce;
  [347].symbol = 22, // Elements
		// 'action 348'
  [348].op = 1, // reduce;
  [348].symbol = 22, // Elements
		// 'action 349'
  [349].op = 0, // shift;
  [349].state = 1, // 'state 1'
		// 'action 350'
  [350].op = 0, // shift;
  [350].state = 2, // 'state 2'
		// 'action 351'
  [351].op = 0, // shift;
  [351].state = 3, // 'state 3'
		// 'action 352'
  [352].op = 0, // shift;
  [352].state = 4, // 'state 4'
		// 'action 353'
  [353].op = 0, // shift;
  [353].state = 5, // 'state 5'
		// 'action 354'
  [354].op = 0, // shift;
  [354].state = 6, // 'state 6'
		// 'action 355'
  [355].op = 0, // shift;
  [355].state = 7, // 'state 7'
		// 'action 356'
  [356].op = 0, // shift;
  [356].state = 8, // 'state 8'
		// 'action 357'
  [357].op = 0, // shift;
  [357].state = 79, // 'state 79'
		// 'action 358'
  [358].op = 0, // shift;
  [358].state = 11, // 'state 11'
		// 'action 359'
  [359].op = 0, // shift;
  [359].state = 12, // 'state 12'
		// 'action 360'
  [360].op = 0, // shift;
  [360].state = 13, // 'state 13'
		// 'action 361'
  [361].op = 0, // shift;
  [361].state = 80, // 'state 80'
		// 'action 362'
  [362].op = 1, // reduce;
  [362].symbol = 19, // Members
		// 'action 363'
  [363].op = 1, // reduce;
  [363].symbol = 19, // Members
		// 'action 364'
  [364].op = 0, // shift;
  [364].state = 45, // 'state 45'
		// 'action 365'
  [365].op = 1, // reduce;
  [365].symbol = 20, // Member
		// 'action 366'
  [366].op = 1, // reduce;
  [366].symbol = 20, // Member
		// 'action 367'
  [367].op = 0, // shift;
  [367].state = 1, // 'state 1'
		// 'action 368'
  [368].op = 0, // shift;
  [368].state = 2, // 'state 2'
		// 'action 369'
  [369].op = 0, // shift;
  [369].state = 3, // 'state 3'
		// 'action 370'
  [370].op = 0, // shift;
  [370].state = 4, // 'state 4'
		// 'action 371'
  [371].op = 0, // shift;
  [371].state = 5, // 'state 5'
		// 'action 372'
  [372].op = 0, // shift;
  [372].state = 6, // 'state 6'
		// 'action 373'
  [373].op = 0, // shift;
  [373].state = 7, // 'state 7'
		// 'action 374'
  [374].op = 0, // shift;
  [374].state = 8, // 'state 8'
		// 'action 375'
  [375].op = 0, // shift;
  [375].state = 81, // 'state 81'
		// 'action 376'
  [376].op = 0, // shift;
  [376].state = 11, // 'state 11'
		// 'action 377'
  [377].op = 0, // shift;
  [377].state = 12, // 'state 12'
		// 'action 378'
  [378].op = 0, // shift;
  [378].state = 13, // 'state 13'
		// 'action 379'
  [379].op = 1, // reduce;
  [379].symbol = 22, // Elements
		// 'action 380'
  [380].op = 1, // reduce;
  [380].symbol = 22, // Elements
		// 'action 381'
  [381].op = 1, // reduce;
  [381].symbol = 20, // Member
		// 'action 382'
  [382].op = 1, // reduce;
  [382].symbol = 20, // Member
		// 'action 383'
  [383].op = 0, // shift;
  [383].state = 1, // 'state 1'
		// 'action 384'
  [384].op = 0, // shift;
  [384].state = 2, // 'state 2'
		// 'action 385'
  [385].op = 0, // shift;
  [385].state = 3, // 'state 3'
		// 'action 386'
  [386].op = 0, // shift;
  [386].state = 4, // 'state 4'
		// 'action 387'
  [387].op = 0, // shift;
  [387].state = 5, // 'state 5'
		// 'action 388'
  [388].op = 0, // shift;
  [388].state = 6, // 'state 6'
		// 'action 389'
  [389].op = 0, // shift;
  [389].state = 7, // 'state 7'
		// 'action 390'
  [390].op = 0, // shift;
  [390].state = 8, // 'state 8'
		// 'action 391'
  [391].op = 0, // shift;
  [391].state = 82, // 'state 82'
		// 'action 392'
  [392].op = 0, // shift;
  [392].state = 11, // 'state 11'
		// 'action 393'
  [393].op = 0, // shift;
  [393].state = 12, // 'state 12'
		// 'action 394'
  [394].op = 0, // shift;
  [394].state = 13, // 'state 13'
		// 'action 395'
  [395].op = 1, // reduce;
  [395].symbol = 20, // Member
		// 'action 396'
  [396].op = 1, // reduce;
  [396].symbol = 20, // Member
		// 'action 397'
  [397].op = 1, // reduce;
  [397].symbol = 20, // Member
		// 'action 398'
  [398].op = 1, // reduce;
  [398].symbol = 20, // Member
		// 'action 399'
  [399].op = 0, // shift;
  [399].state = 1, // 'state 1'
		// 'action 400'
  [400].op = 0, // shift;
  [400].state = 2, // 'state 2'
		// 'action 401'
  [401].op = 0, // shift;
  [401].state = 3, // 'state 3'
		// 'action 402'
  [402].op = 0, // shift;
  [402].state = 4, // 'state 4'
		// 'action 403'
  [403].op = 0, // shift;
  [403].state = 5, // 'state 5'
		// 'action 404'
  [404].op = 0, // shift;
  [404].state = 6, // 'state 6'
		// 'action 405'
  [405].op = 0, // shift;
  [405].state = 7, // 'state 7'
		// 'action 406'
  [406].op = 0, // shift;
  [406].state = 8, // 'state 8'
		// 'action 407'
  [407].op = 0, // shift;
  [407].state = 83, // 'state 83'
		// 'action 408'
  [408].op = 0, // shift;
  [408].state = 11, // 'state 11'
		// 'action 409'
  [409].op = 0, // shift;
  [409].state = 12, // 'state 12'
		// 'action 410'
  [410].op = 0, // shift;
  [410].state = 13, // 'state 13'
		// 'action 411'
  [411].op = 1, // reduce;
  [411].symbol = 20, // Member
		// 'action 412'
  [412].op = 1, // reduce;
  [412].symbol = 20, // Member
		// 'action 413'
  [413].op = 1, // reduce;
  [413].symbol = 20, // Member
		// 'action 414'
  [414].op = 1, // reduce;
  [414].symbol = 20, // Member
		// 'action 415'
  [415].op = 1, // reduce;
  [415].symbol = 20, // Member
		// 'action 416'
  [416].op = 1, // reduce;
  [416].symbol = 20, // Member
};

unsigned int *parse(char *input, unsigned int l, unsigned int *stack,
                    unsigned int *tree)
{
  lexer_next(input, 0, l);

  unsigned int lookahead = lexeme.state;

  stack[0] = 0; // dummy entry
  stack[1] = 0; // starting state
  unsigned int sp = 1;
  unsigned int tp = 6;
  unsigned int stackItemsToReduce, currentState, actionLookup, nextState;
  const struct action *action;

  while (1)
  {
    currentState = stack[sp];

    actionLookup = actionsTable[currentState * 32 + lookahead];
    action = &actions[actionLookup];

    switch (action->op)
    {
    case 2: // done
      return tree;
    case 0: // shift
      tree[tp + 0] = lookahead;
      tree[tp + 1] = lexeme.start;
      tree[tp + 2] = lexeme.end;
      tree[tp + 3] = 0;
      tree[tp + 4] = 0;
      tree[stack[sp - 1] + 5] = tp;

      stack[sp + 1] = tp;
      sp += 2;
      stack[sp] = action->state;

      lexer_next(input, lexeme.end, l);
      lookahead = lexeme.state;
      break;
    case 1: // reduce
      stackItemsToReduce = reducerStates[lookahead * 84 * 32 + currentState * 32 + action->symbol];

      sp -= stackItemsToReduce * 2;

      tree[tp + 0] = action->symbol;
      tree[tp + 1] = -1;
      tree[tp + 2] = -1;
      tree[tp + 3] = stackItemsToReduce;
      tree[tp + 4] = stack[sp + 1];
      tree[stack[sp - 1] + 5] = tp;

      stack[sp + 1] = tp;

      nextState = gotoTable[stack[sp] * 32 + action->symbol];
      sp += 2;
      stack[sp] = nextState;

      break;
    }

    tp += 6;
  }
}

int64_t timespecDiff(struct timespec *timeA_p, struct timespec *timeB_p)
{
  return ((timeA_p->tv_sec * 1000000000) + timeA_p->tv_nsec) -
         ((timeB_p->tv_sec * 1000000000) + timeB_p->tv_nsec);
}

int main()
{
  FILE *infile;
  char *buffer;
  long numbytes;

  infile = fopen("/home/zaubernerd/workspace/par-gen/pull_request.closed.json", "r");
  fseek(infile, 0, SEEK_END);
  numbytes = ftell(infile);
  fseek(infile, 0, SEEK_SET);
  buffer = (char *)malloc(numbytes + 1);
  fread(buffer, sizeof(char), numbytes, infile);

  unsigned int *stack = malloc(2 + numbytes * 2 * sizeof(unsigned int));
  unsigned int *tree = malloc(6 + numbytes * 6 * sizeof(unsigned int));

  struct timespec start, end;

  clock_gettime(CLOCK_MONOTONIC, &start);

  for (int i = 0; i < 10000; i++)
  {
    parse(buffer, numbytes, stack, tree);
  }

  clock_gettime(CLOCK_MONOTONIC, &end);

  printf("Elapsed: %f ms\n", (double)timespecDiff(&end, &start) / 1000 / 1000);

  fclose(infile);
  free(buffer);

  return 0;
}
