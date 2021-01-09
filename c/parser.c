#include <time.h>
#include <stdio.h>
#include <stdlib.h>
#include "lexer.h"

struct action
{
  unsigned int op;
  union
  {
    unsigned int state;
    unsigned int symbol;
  };
};

static unsigned int reducerStates[86016] = {};
static unsigned int actionsTable[2688] = {};
static unsigned int gotoTable[2688] = {};
static struct action actions[417];

void init_reducerState(void)
{
  reducerStates[81] = 1;    // 'state 2' -> Value -> WS
  reducerStates[13521] = 1; // 'state 2' -> Value -> CURLY_CLOSE
  reducerStates[16209] = 1; // 'state 2' -> Value -> COMMA
  reducerStates[26961] = 1; // 'state 2' -> Value -> BRACKET_CLOSE
  reducerStates[32337] = 1; // 'state 2' -> Value -> @par-gen.EOF
  reducerStates[113] = 1;   // 'state 3' -> Value -> WS
  reducerStates[13553] = 1; // 'state 3' -> Value -> CURLY_CLOSE
  reducerStates[16241] = 1; // 'state 3' -> Value -> COMMA
  reducerStates[26993] = 1; // 'state 3' -> Value -> BRACKET_CLOSE
  reducerStates[32369] = 1; // 'state 3' -> Value -> @par-gen.EOF
  reducerStates[145] = 1;   // 'state 4' -> Value -> WS
  reducerStates[13585] = 1; // 'state 4' -> Value -> CURLY_CLOSE
  reducerStates[16273] = 1; // 'state 4' -> Value -> COMMA
  reducerStates[27025] = 1; // 'state 4' -> Value -> BRACKET_CLOSE
  reducerStates[32401] = 1; // 'state 4' -> Value -> @par-gen.EOF
  reducerStates[209] = 1;   // 'state 6' -> Value -> WS
  reducerStates[13649] = 1; // 'state 6' -> Value -> CURLY_CLOSE
  reducerStates[16337] = 1; // 'state 6' -> Value -> COMMA
  reducerStates[27089] = 1; // 'state 6' -> Value -> BRACKET_CLOSE
  reducerStates[32465] = 1; // 'state 6' -> Value -> @par-gen.EOF
  reducerStates[273] = 1;   // 'state 8' -> Value -> WS
  reducerStates[13713] = 1; // 'state 8' -> Value -> CURLY_CLOSE
  reducerStates[16401] = 1; // 'state 8' -> Value -> COMMA
  reducerStates[27153] = 1; // 'state 8' -> Value -> BRACKET_CLOSE
  reducerStates[32529] = 1; // 'state 8' -> Value -> @par-gen.EOF
  reducerStates[32558] = 1; // 'state 9' -> S -> @par-gen.EOF
  reducerStates[32591] = 1; // 'state 10' -> Json -> @par-gen.EOF
  reducerStates[13808] = 1; // 'state 11' -> Element -> CURLY_CLOSE
  reducerStates[16496] = 1; // 'state 11' -> Element -> COMMA
  reducerStates[27248] = 1; // 'state 11' -> Element -> BRACKET_CLOSE
  reducerStates[32624] = 1; // 'state 11' -> Element -> @par-gen.EOF
  reducerStates[401] = 1;   // 'state 12' -> Value -> WS
  reducerStates[13841] = 1; // 'state 12' -> Value -> CURLY_CLOSE
  reducerStates[16529] = 1; // 'state 12' -> Value -> COMMA
  reducerStates[27281] = 1; // 'state 12' -> Value -> BRACKET_CLOSE
  reducerStates[32657] = 1; // 'state 12' -> Value -> @par-gen.EOF
  reducerStates[433] = 1;   // 'state 13' -> Value -> WS
  reducerStates[13873] = 1; // 'state 13' -> Value -> CURLY_CLOSE
  reducerStates[16561] = 1; // 'state 13' -> Value -> COMMA
  reducerStates[27313] = 1; // 'state 13' -> Value -> BRACKET_CLOSE
  reducerStates[32689] = 1; // 'state 13' -> Value -> @par-gen.EOF
  reducerStates[13904] = 2; // 'state 14' -> Element -> CURLY_CLOSE
  reducerStates[16592] = 2; // 'state 14' -> Element -> COMMA
  reducerStates[27344] = 2; // 'state 14' -> Element -> BRACKET_CLOSE
  reducerStates[32720] = 2; // 'state 14' -> Element -> @par-gen.EOF
  reducerStates[497] = 1;   // 'state 15' -> Value -> WS
  reducerStates[13937] = 1; // 'state 15' -> Value -> CURLY_CLOSE
  reducerStates[16625] = 1; // 'state 15' -> Value -> COMMA
  reducerStates[27377] = 1; // 'state 15' -> Value -> BRACKET_CLOSE
  reducerStates[32753] = 1; // 'state 15' -> Value -> @par-gen.EOF
  reducerStates[529] = 1;   // 'state 16' -> Value -> WS
  reducerStates[13969] = 1; // 'state 16' -> Value -> CURLY_CLOSE
  reducerStates[16657] = 1; // 'state 16' -> Value -> COMMA
  reducerStates[27409] = 1; // 'state 16' -> Value -> BRACKET_CLOSE
  reducerStates[32785] = 1; // 'state 16' -> Value -> @par-gen.EOF
  reducerStates[561] = 1;   // 'state 17' -> Value -> WS
  reducerStates[14001] = 1; // 'state 17' -> Value -> CURLY_CLOSE
  reducerStates[16689] = 1; // 'state 17' -> Value -> COMMA
  reducerStates[27441] = 1; // 'state 17' -> Value -> BRACKET_CLOSE
  reducerStates[32817] = 1; // 'state 17' -> Value -> @par-gen.EOF
  reducerStates[625] = 1;   // 'state 19' -> Value -> WS
  reducerStates[14065] = 1; // 'state 19' -> Value -> CURLY_CLOSE
  reducerStates[16753] = 1; // 'state 19' -> Value -> COMMA
  reducerStates[27505] = 1; // 'state 19' -> Value -> BRACKET_CLOSE
  reducerStates[32881] = 1; // 'state 19' -> Value -> @par-gen.EOF
  reducerStates[689] = 1;   // 'state 21' -> Value -> WS
  reducerStates[14129] = 1; // 'state 21' -> Value -> CURLY_CLOSE
  reducerStates[16817] = 1; // 'state 21' -> Value -> COMMA
  reducerStates[27569] = 1; // 'state 21' -> Value -> BRACKET_CLOSE
  reducerStates[32945] = 1; // 'state 21' -> Value -> @par-gen.EOF
  reducerStates[14160] = 2; // 'state 22' -> Element -> CURLY_CLOSE
  reducerStates[16848] = 2; // 'state 22' -> Element -> COMMA
  reducerStates[27600] = 2; // 'state 22' -> Element -> BRACKET_CLOSE
  reducerStates[32976] = 2; // 'state 22' -> Element -> @par-gen.EOF
  reducerStates[753] = 1;   // 'state 23' -> Value -> WS
  reducerStates[14193] = 1; // 'state 23' -> Value -> CURLY_CLOSE
  reducerStates[16881] = 1; // 'state 23' -> Value -> COMMA
  reducerStates[27633] = 1; // 'state 23' -> Value -> BRACKET_CLOSE
  reducerStates[33009] = 1; // 'state 23' -> Value -> @par-gen.EOF
  reducerStates[785] = 1;   // 'state 24' -> Value -> WS
  reducerStates[14225] = 1; // 'state 24' -> Value -> CURLY_CLOSE
  reducerStates[16913] = 1; // 'state 24' -> Value -> COMMA
  reducerStates[27665] = 1; // 'state 24' -> Value -> BRACKET_CLOSE
  reducerStates[33041] = 1; // 'state 24' -> Value -> @par-gen.EOF
  reducerStates[850] = 2;   // 'state 26' -> Object -> WS
  reducerStates[14290] = 2; // 'state 26' -> Object -> CURLY_CLOSE
  reducerStates[16978] = 2; // 'state 26' -> Object -> COMMA
  reducerStates[27730] = 2; // 'state 26' -> Object -> BRACKET_CLOSE
  reducerStates[33106] = 2; // 'state 26' -> Object -> @par-gen.EOF
  reducerStates[14387] = 1; // 'state 29' -> Members -> CURLY_CLOSE
  reducerStates[17075] = 1; // 'state 29' -> Members -> COMMA
  reducerStates[1013] = 2;  // 'state 31' -> Array -> WS
  reducerStates[14453] = 2; // 'state 31' -> Array -> CURLY_CLOSE
  reducerStates[17141] = 2; // 'state 31' -> Array -> COMMA
  reducerStates[27893] = 2; // 'state 31' -> Array -> BRACKET_CLOSE
  reducerStates[33269] = 2; // 'state 31' -> Array -> @par-gen.EOF
  reducerStates[17174] = 1; // 'state 32' -> Elements -> COMMA
  reducerStates[27926] = 1; // 'state 32' -> Elements -> BRACKET_CLOSE
  reducerStates[14544] = 3; // 'state 34' -> Element -> CURLY_CLOSE
  reducerStates[17232] = 3; // 'state 34' -> Element -> COMMA
  reducerStates[27984] = 3; // 'state 34' -> Element -> BRACKET_CLOSE
  reducerStates[33360] = 3; // 'state 34' -> Element -> @par-gen.EOF
  reducerStates[1170] = 2;  // 'state 36' -> Object -> WS
  reducerStates[14610] = 2; // 'state 36' -> Object -> CURLY_CLOSE
  reducerStates[17298] = 2; // 'state 36' -> Object -> COMMA
  reducerStates[28050] = 2; // 'state 36' -> Object -> BRACKET_CLOSE
  reducerStates[33426] = 2; // 'state 36' -> Object -> @par-gen.EOF
  reducerStates[14707] = 1; // 'state 39' -> Members -> CURLY_CLOSE
  reducerStates[17395] = 1; // 'state 39' -> Members -> COMMA
  reducerStates[1333] = 2;  // 'state 41' -> Array -> WS
  reducerStates[14773] = 2; // 'state 41' -> Array -> CURLY_CLOSE
  reducerStates[17461] = 2; // 'state 41' -> Array -> COMMA
  reducerStates[28213] = 2; // 'state 41' -> Array -> BRACKET_CLOSE
  reducerStates[33589] = 2; // 'state 41' -> Array -> @par-gen.EOF
  reducerStates[17494] = 1; // 'state 42' -> Elements -> COMMA
  reducerStates[28246] = 1; // 'state 42' -> Elements -> BRACKET_CLOSE
  reducerStates[1426] = 3;  // 'state 44' -> Object -> WS
  reducerStates[14866] = 3; // 'state 44' -> Object -> CURLY_CLOSE
  reducerStates[17554] = 3; // 'state 44' -> Object -> COMMA
  reducerStates[28306] = 3; // 'state 44' -> Object -> BRACKET_CLOSE
  reducerStates[33682] = 3; // 'state 44' -> Object -> @par-gen.EOF
  reducerStates[1490] = 3;  // 'state 46' -> Object -> WS
  reducerStates[14930] = 3; // 'state 46' -> Object -> CURLY_CLOSE
  reducerStates[17618] = 3; // 'state 46' -> Object -> COMMA
  reducerStates[28370] = 3; // 'state 46' -> Object -> BRACKET_CLOSE
  reducerStates[33746] = 3; // 'state 46' -> Object -> @par-gen.EOF
  reducerStates[1621] = 3;  // 'state 50' -> Array -> WS
  reducerStates[15061] = 3; // 'state 50' -> Array -> CURLY_CLOSE
  reducerStates[17749] = 3; // 'state 50' -> Array -> COMMA
  reducerStates[28501] = 3; // 'state 50' -> Array -> BRACKET_CLOSE
  reducerStates[33877] = 3; // 'state 50' -> Array -> @par-gen.EOF
  reducerStates[1685] = 3;  // 'state 52' -> Array -> WS
  reducerStates[15125] = 3; // 'state 52' -> Array -> CURLY_CLOSE
  reducerStates[17813] = 3; // 'state 52' -> Array -> COMMA
  reducerStates[28565] = 3; // 'state 52' -> Array -> BRACKET_CLOSE
  reducerStates[33941] = 3; // 'state 52' -> Array -> @par-gen.EOF
  reducerStates[1714] = 3;  // 'state 53' -> Object -> WS
  reducerStates[15154] = 3; // 'state 53' -> Object -> CURLY_CLOSE
  reducerStates[17842] = 3; // 'state 53' -> Object -> COMMA
  reducerStates[28594] = 3; // 'state 53' -> Object -> BRACKET_CLOSE
  reducerStates[33970] = 3; // 'state 53' -> Object -> @par-gen.EOF
  reducerStates[1778] = 3;  // 'state 55' -> Object -> WS
  reducerStates[15218] = 3; // 'state 55' -> Object -> CURLY_CLOSE
  reducerStates[17906] = 3; // 'state 55' -> Object -> COMMA
  reducerStates[28658] = 3; // 'state 55' -> Object -> BRACKET_CLOSE
  reducerStates[34034] = 3; // 'state 55' -> Object -> @par-gen.EOF
  reducerStates[1909] = 3;  // 'state 59' -> Array -> WS
  reducerStates[15349] = 3; // 'state 59' -> Array -> CURLY_CLOSE
  reducerStates[18037] = 3; // 'state 59' -> Array -> COMMA
  reducerStates[28789] = 3; // 'state 59' -> Array -> BRACKET_CLOSE
  reducerStates[34165] = 3; // 'state 59' -> Array -> @par-gen.EOF
  reducerStates[1973] = 3;  // 'state 61' -> Array -> WS
  reducerStates[15413] = 3; // 'state 61' -> Array -> CURLY_CLOSE
  reducerStates[18101] = 3; // 'state 61' -> Array -> COMMA
  reducerStates[28853] = 3; // 'state 61' -> Array -> BRACKET_CLOSE
  reducerStates[34229] = 3; // 'state 61' -> Array -> @par-gen.EOF
  reducerStates[15539] = 3; // 'state 65' -> Members -> CURLY_CLOSE
  reducerStates[18227] = 3; // 'state 65' -> Members -> COMMA
  reducerStates[15572] = 3; // 'state 66' -> Member -> CURLY_CLOSE
  reducerStates[18260] = 3; // 'state 66' -> Member -> COMMA
  reducerStates[18326] = 3; // 'state 68' -> Elements -> COMMA
  reducerStates[29078] = 3; // 'state 68' -> Elements -> BRACKET_CLOSE
  reducerStates[15763] = 3; // 'state 72' -> Members -> CURLY_CLOSE
  reducerStates[18451] = 3; // 'state 72' -> Members -> COMMA
  reducerStates[15796] = 3; // 'state 73' -> Member -> CURLY_CLOSE
  reducerStates[18484] = 3; // 'state 73' -> Member -> COMMA
  reducerStates[18550] = 3; // 'state 75' -> Elements -> COMMA
  reducerStates[29302] = 3; // 'state 75' -> Elements -> BRACKET_CLOSE
  reducerStates[15892] = 4; // 'state 76' -> Member -> CURLY_CLOSE
  reducerStates[18580] = 4; // 'state 76' -> Member -> COMMA
  reducerStates[15956] = 4; // 'state 78' -> Member -> CURLY_CLOSE
  reducerStates[18644] = 4; // 'state 78' -> Member -> COMMA
  reducerStates[15988] = 4; // 'state 79' -> Member -> CURLY_CLOSE
  reducerStates[18676] = 4; // 'state 79' -> Member -> COMMA
  reducerStates[16052] = 4; // 'state 81' -> Member -> CURLY_CLOSE
  reducerStates[18740] = 4; // 'state 81' -> Member -> COMMA
  reducerStates[16084] = 5; // 'state 82' -> Member -> CURLY_CLOSE
  reducerStates[18772] = 5; // 'state 82' -> Member -> COMMA
  reducerStates[16116] = 5; // 'state 83' -> Member -> CURLY_CLOSE
  reducerStates[18804] = 5; // 'state 83' -> Member -> COMMA
}

void init_actionsTable(void)
{
  actionsTable[0] = 0;      // 'state 0' -> WS -> shift -> 'action 0'
  actionsTable[1] = 1;      // 'state 0' -> TRUE -> shift -> 'action 1'
  actionsTable[2] = 2;      // 'state 0' -> FALSE -> shift -> 'action 2'
  actionsTable[3] = 3;      // 'state 0' -> NULL -> shift -> 'action 3'
  actionsTable[4] = 4;      // 'state 0' -> CURLY_OPEN -> shift -> 'action 4'
  actionsTable[8] = 5;      // 'state 0' -> STRING -> shift -> 'action 5'
  actionsTable[9] = 6;      // 'state 0' -> BRACKET_OPEN -> shift -> 'action 6'
  actionsTable[11] = 7;     // 'state 0' -> NUMBER -> shift -> 'action 7'
  actionsTable[15] = 8;     // 'state 0' -> Json -> shift -> 'action 8'
  actionsTable[16] = 9;     // 'state 0' -> Element -> shift -> 'action 9'
  actionsTable[17] = 10;    // 'state 0' -> Value -> shift -> 'action 10'
  actionsTable[18] = 11;    // 'state 0' -> Object -> shift -> 'action 11'
  actionsTable[21] = 12;    // 'state 0' -> Array -> shift -> 'action 12'
  actionsTable[300] = 13;   // 'state 9' -> @par-gen.EOF -> done -> 'action 13'
  actionsTable[332] = 14;   // 'state 10' -> @par-gen.EOF -> reduce -> 'action 14'
  actionsTable[352] = 15;   // 'state 11' -> WS -> shift -> 'action 15'
  actionsTable[357] = 16;   // 'state 11' -> CURLY_CLOSE -> reduce -> 'action 16'
  actionsTable[358] = 17;   // 'state 11' -> COMMA -> reduce -> 'action 17'
  actionsTable[362] = 18;   // 'state 11' -> BRACKET_CLOSE -> reduce -> 'action 18'
  actionsTable[364] = 19;   // 'state 11' -> @par-gen.EOF -> reduce -> 'action 19'
  actionsTable[33] = 20;    // 'state 1' -> TRUE -> shift -> 'action 20'
  actionsTable[34] = 21;    // 'state 1' -> FALSE -> shift -> 'action 21'
  actionsTable[35] = 22;    // 'state 1' -> NULL -> shift -> 'action 22'
  actionsTable[36] = 23;    // 'state 1' -> CURLY_OPEN -> shift -> 'action 23'
  actionsTable[40] = 24;    // 'state 1' -> STRING -> shift -> 'action 24'
  actionsTable[41] = 25;    // 'state 1' -> BRACKET_OPEN -> shift -> 'action 25'
  actionsTable[43] = 26;    // 'state 1' -> NUMBER -> shift -> 'action 26'
  actionsTable[49] = 27;    // 'state 1' -> Value -> shift -> 'action 27'
  actionsTable[50] = 28;    // 'state 1' -> Object -> shift -> 'action 28'
  actionsTable[53] = 29;    // 'state 1' -> Array -> shift -> 'action 29'
  actionsTable[384] = 30;   // 'state 12' -> WS -> reduce -> 'action 30'
  actionsTable[389] = 31;   // 'state 12' -> CURLY_CLOSE -> reduce -> 'action 31'
  actionsTable[390] = 32;   // 'state 12' -> COMMA -> reduce -> 'action 32'
  actionsTable[394] = 33;   // 'state 12' -> BRACKET_CLOSE -> reduce -> 'action 33'
  actionsTable[396] = 34;   // 'state 12' -> @par-gen.EOF -> reduce -> 'action 34'
  actionsTable[416] = 35;   // 'state 13' -> WS -> reduce -> 'action 35'
  actionsTable[421] = 36;   // 'state 13' -> CURLY_CLOSE -> reduce -> 'action 36'
  actionsTable[422] = 37;   // 'state 13' -> COMMA -> reduce -> 'action 37'
  actionsTable[426] = 38;   // 'state 13' -> BRACKET_CLOSE -> reduce -> 'action 38'
  actionsTable[428] = 39;   // 'state 13' -> @par-gen.EOF -> reduce -> 'action 39'
  actionsTable[192] = 40;   // 'state 6' -> WS -> reduce -> 'action 40'
  actionsTable[197] = 41;   // 'state 6' -> CURLY_CLOSE -> reduce -> 'action 41'
  actionsTable[198] = 42;   // 'state 6' -> COMMA -> reduce -> 'action 42'
  actionsTable[202] = 43;   // 'state 6' -> BRACKET_CLOSE -> reduce -> 'action 43'
  actionsTable[204] = 44;   // 'state 6' -> @par-gen.EOF -> reduce -> 'action 44'
  actionsTable[256] = 45;   // 'state 8' -> WS -> reduce -> 'action 45'
  actionsTable[261] = 46;   // 'state 8' -> CURLY_CLOSE -> reduce -> 'action 46'
  actionsTable[262] = 47;   // 'state 8' -> COMMA -> reduce -> 'action 47'
  actionsTable[266] = 48;   // 'state 8' -> BRACKET_CLOSE -> reduce -> 'action 48'
  actionsTable[268] = 49;   // 'state 8' -> @par-gen.EOF -> reduce -> 'action 49'
  actionsTable[64] = 50;    // 'state 2' -> WS -> reduce -> 'action 50'
  actionsTable[69] = 51;    // 'state 2' -> CURLY_CLOSE -> reduce -> 'action 51'
  actionsTable[70] = 52;    // 'state 2' -> COMMA -> reduce -> 'action 52'
  actionsTable[74] = 53;    // 'state 2' -> BRACKET_CLOSE -> reduce -> 'action 53'
  actionsTable[76] = 54;    // 'state 2' -> @par-gen.EOF -> reduce -> 'action 54'
  actionsTable[96] = 55;    // 'state 3' -> WS -> reduce -> 'action 55'
  actionsTable[101] = 56;   // 'state 3' -> CURLY_CLOSE -> reduce -> 'action 56'
  actionsTable[102] = 57;   // 'state 3' -> COMMA -> reduce -> 'action 57'
  actionsTable[106] = 58;   // 'state 3' -> BRACKET_CLOSE -> reduce -> 'action 58'
  actionsTable[108] = 59;   // 'state 3' -> @par-gen.EOF -> reduce -> 'action 59'
  actionsTable[128] = 60;   // 'state 4' -> WS -> reduce -> 'action 60'
  actionsTable[133] = 61;   // 'state 4' -> CURLY_CLOSE -> reduce -> 'action 61'
  actionsTable[134] = 62;   // 'state 4' -> COMMA -> reduce -> 'action 62'
  actionsTable[138] = 63;   // 'state 4' -> BRACKET_CLOSE -> reduce -> 'action 63'
  actionsTable[140] = 64;   // 'state 4' -> @par-gen.EOF -> reduce -> 'action 64'
  actionsTable[160] = 65;   // 'state 5' -> WS -> shift -> 'action 65'
  actionsTable[165] = 66;   // 'state 5' -> CURLY_CLOSE -> shift -> 'action 66'
  actionsTable[168] = 67;   // 'state 5' -> STRING -> shift -> 'action 67'
  actionsTable[179] = 68;   // 'state 5' -> Members -> shift -> 'action 68'
  actionsTable[180] = 69;   // 'state 5' -> Member -> shift -> 'action 69'
  actionsTable[224] = 70;   // 'state 7' -> WS -> shift -> 'action 70'
  actionsTable[225] = 71;   // 'state 7' -> TRUE -> shift -> 'action 71'
  actionsTable[226] = 72;   // 'state 7' -> FALSE -> shift -> 'action 72'
  actionsTable[227] = 73;   // 'state 7' -> NULL -> shift -> 'action 73'
  actionsTable[228] = 74;   // 'state 7' -> CURLY_OPEN -> shift -> 'action 74'
  actionsTable[232] = 75;   // 'state 7' -> STRING -> shift -> 'action 75'
  actionsTable[233] = 76;   // 'state 7' -> BRACKET_OPEN -> shift -> 'action 76'
  actionsTable[234] = 77;   // 'state 7' -> BRACKET_CLOSE -> shift -> 'action 77'
  actionsTable[235] = 78;   // 'state 7' -> NUMBER -> shift -> 'action 78'
  actionsTable[240] = 79;   // 'state 7' -> Element -> shift -> 'action 79'
  actionsTable[241] = 80;   // 'state 7' -> Value -> shift -> 'action 80'
  actionsTable[242] = 81;   // 'state 7' -> Object -> shift -> 'action 81'
  actionsTable[245] = 82;   // 'state 7' -> Array -> shift -> 'action 82'
  actionsTable[246] = 83;   // 'state 7' -> Elements -> shift -> 'action 83'
  actionsTable[453] = 84;   // 'state 14' -> CURLY_CLOSE -> reduce -> 'action 84'
  actionsTable[454] = 85;   // 'state 14' -> COMMA -> reduce -> 'action 85'
  actionsTable[458] = 86;   // 'state 14' -> BRACKET_CLOSE -> reduce -> 'action 86'
  actionsTable[460] = 87;   // 'state 14' -> @par-gen.EOF -> reduce -> 'action 87'
  actionsTable[704] = 88;   // 'state 22' -> WS -> shift -> 'action 88'
  actionsTable[709] = 89;   // 'state 22' -> CURLY_CLOSE -> reduce -> 'action 89'
  actionsTable[710] = 90;   // 'state 22' -> COMMA -> reduce -> 'action 90'
  actionsTable[714] = 91;   // 'state 22' -> BRACKET_CLOSE -> reduce -> 'action 91'
  actionsTable[716] = 92;   // 'state 22' -> @par-gen.EOF -> reduce -> 'action 92'
  actionsTable[736] = 93;   // 'state 23' -> WS -> reduce -> 'action 93'
  actionsTable[741] = 94;   // 'state 23' -> CURLY_CLOSE -> reduce -> 'action 94'
  actionsTable[742] = 95;   // 'state 23' -> COMMA -> reduce -> 'action 95'
  actionsTable[746] = 96;   // 'state 23' -> BRACKET_CLOSE -> reduce -> 'action 96'
  actionsTable[748] = 97;   // 'state 23' -> @par-gen.EOF -> reduce -> 'action 97'
  actionsTable[768] = 98;   // 'state 24' -> WS -> reduce -> 'action 98'
  actionsTable[773] = 99;   // 'state 24' -> CURLY_CLOSE -> reduce -> 'action 99'
  actionsTable[774] = 100;  // 'state 24' -> COMMA -> reduce -> 'action 100'
  actionsTable[778] = 101;  // 'state 24' -> BRACKET_CLOSE -> reduce -> 'action 101'
  actionsTable[780] = 102;  // 'state 24' -> @par-gen.EOF -> reduce -> 'action 102'
  actionsTable[608] = 103;  // 'state 19' -> WS -> reduce -> 'action 103'
  actionsTable[613] = 104;  // 'state 19' -> CURLY_CLOSE -> reduce -> 'action 104'
  actionsTable[614] = 105;  // 'state 19' -> COMMA -> reduce -> 'action 105'
  actionsTable[618] = 106;  // 'state 19' -> BRACKET_CLOSE -> reduce -> 'action 106'
  actionsTable[620] = 107;  // 'state 19' -> @par-gen.EOF -> reduce -> 'action 107'
  actionsTable[672] = 108;  // 'state 21' -> WS -> reduce -> 'action 108'
  actionsTable[677] = 109;  // 'state 21' -> CURLY_CLOSE -> reduce -> 'action 109'
  actionsTable[678] = 110;  // 'state 21' -> COMMA -> reduce -> 'action 110'
  actionsTable[682] = 111;  // 'state 21' -> BRACKET_CLOSE -> reduce -> 'action 111'
  actionsTable[684] = 112;  // 'state 21' -> @par-gen.EOF -> reduce -> 'action 112'
  actionsTable[480] = 113;  // 'state 15' -> WS -> reduce -> 'action 113'
  actionsTable[485] = 114;  // 'state 15' -> CURLY_CLOSE -> reduce -> 'action 114'
  actionsTable[486] = 115;  // 'state 15' -> COMMA -> reduce -> 'action 115'
  actionsTable[490] = 116;  // 'state 15' -> BRACKET_CLOSE -> reduce -> 'action 116'
  actionsTable[492] = 117;  // 'state 15' -> @par-gen.EOF -> reduce -> 'action 117'
  actionsTable[512] = 118;  // 'state 16' -> WS -> reduce -> 'action 118'
  actionsTable[517] = 119;  // 'state 16' -> CURLY_CLOSE -> reduce -> 'action 119'
  actionsTable[518] = 120;  // 'state 16' -> COMMA -> reduce -> 'action 120'
  actionsTable[522] = 121;  // 'state 16' -> BRACKET_CLOSE -> reduce -> 'action 121'
  actionsTable[524] = 122;  // 'state 16' -> @par-gen.EOF -> reduce -> 'action 122'
  actionsTable[544] = 123;  // 'state 17' -> WS -> reduce -> 'action 123'
  actionsTable[549] = 124;  // 'state 17' -> CURLY_CLOSE -> reduce -> 'action 124'
  actionsTable[550] = 125;  // 'state 17' -> COMMA -> reduce -> 'action 125'
  actionsTable[554] = 126;  // 'state 17' -> BRACKET_CLOSE -> reduce -> 'action 126'
  actionsTable[556] = 127;  // 'state 17' -> @par-gen.EOF -> reduce -> 'action 127'
  actionsTable[576] = 128;  // 'state 18' -> WS -> shift -> 'action 128'
  actionsTable[581] = 129;  // 'state 18' -> CURLY_CLOSE -> shift -> 'action 129'
  actionsTable[584] = 130;  // 'state 18' -> STRING -> shift -> 'action 130'
  actionsTable[595] = 131;  // 'state 18' -> Members -> shift -> 'action 131'
  actionsTable[596] = 132;  // 'state 18' -> Member -> shift -> 'action 132'
  actionsTable[640] = 133;  // 'state 20' -> WS -> shift -> 'action 133'
  actionsTable[641] = 134;  // 'state 20' -> TRUE -> shift -> 'action 134'
  actionsTable[642] = 135;  // 'state 20' -> FALSE -> shift -> 'action 135'
  actionsTable[643] = 136;  // 'state 20' -> NULL -> shift -> 'action 136'
  actionsTable[644] = 137;  // 'state 20' -> CURLY_OPEN -> shift -> 'action 137'
  actionsTable[648] = 138;  // 'state 20' -> STRING -> shift -> 'action 138'
  actionsTable[649] = 139;  // 'state 20' -> BRACKET_OPEN -> shift -> 'action 139'
  actionsTable[650] = 140;  // 'state 20' -> BRACKET_CLOSE -> shift -> 'action 140'
  actionsTable[651] = 141;  // 'state 20' -> NUMBER -> shift -> 'action 141'
  actionsTable[656] = 142;  // 'state 20' -> Element -> shift -> 'action 142'
  actionsTable[657] = 143;  // 'state 20' -> Value -> shift -> 'action 143'
  actionsTable[658] = 144;  // 'state 20' -> Object -> shift -> 'action 144'
  actionsTable[661] = 145;  // 'state 20' -> Array -> shift -> 'action 145'
  actionsTable[662] = 146;  // 'state 20' -> Elements -> shift -> 'action 146'
  actionsTable[832] = 147;  // 'state 26' -> WS -> reduce -> 'action 147'
  actionsTable[837] = 148;  // 'state 26' -> CURLY_CLOSE -> reduce -> 'action 148'
  actionsTable[838] = 149;  // 'state 26' -> COMMA -> reduce -> 'action 149'
  actionsTable[842] = 150;  // 'state 26' -> BRACKET_CLOSE -> reduce -> 'action 150'
  actionsTable[844] = 151;  // 'state 26' -> @par-gen.EOF -> reduce -> 'action 151'
  actionsTable[805] = 152;  // 'state 25' -> CURLY_CLOSE -> shift -> 'action 152'
  actionsTable[808] = 153;  // 'state 25' -> STRING -> shift -> 'action 153'
  actionsTable[901] = 154;  // 'state 28' -> CURLY_CLOSE -> shift -> 'action 154'
  actionsTable[902] = 155;  // 'state 28' -> COMMA -> shift -> 'action 155'
  actionsTable[933] = 156;  // 'state 29' -> CURLY_CLOSE -> reduce -> 'action 156'
  actionsTable[934] = 157;  // 'state 29' -> COMMA -> reduce -> 'action 157'
  actionsTable[864] = 158;  // 'state 27' -> WS -> shift -> 'action 158'
  actionsTable[871] = 159;  // 'state 27' -> COLON -> shift -> 'action 159'
  actionsTable[992] = 160;  // 'state 31' -> WS -> reduce -> 'action 160'
  actionsTable[997] = 161;  // 'state 31' -> CURLY_CLOSE -> reduce -> 'action 161'
  actionsTable[998] = 162;  // 'state 31' -> COMMA -> reduce -> 'action 162'
  actionsTable[1002] = 163; // 'state 31' -> BRACKET_CLOSE -> reduce -> 'action 163'
  actionsTable[1004] = 164; // 'state 31' -> @par-gen.EOF -> reduce -> 'action 164'
  actionsTable[961] = 165;  // 'state 30' -> TRUE -> shift -> 'action 165'
  actionsTable[962] = 166;  // 'state 30' -> FALSE -> shift -> 'action 166'
  actionsTable[963] = 167;  // 'state 30' -> NULL -> shift -> 'action 167'
  actionsTable[964] = 168;  // 'state 30' -> CURLY_OPEN -> shift -> 'action 168'
  actionsTable[968] = 169;  // 'state 30' -> STRING -> shift -> 'action 169'
  actionsTable[969] = 170;  // 'state 30' -> BRACKET_OPEN -> shift -> 'action 170'
  actionsTable[970] = 171;  // 'state 30' -> BRACKET_CLOSE -> shift -> 'action 171'
  actionsTable[971] = 172;  // 'state 30' -> NUMBER -> shift -> 'action 172'
  actionsTable[977] = 173;  // 'state 30' -> Value -> shift -> 'action 173'
  actionsTable[978] = 174;  // 'state 30' -> Object -> shift -> 'action 174'
  actionsTable[981] = 175;  // 'state 30' -> Array -> shift -> 'action 175'
  actionsTable[1062] = 176; // 'state 33' -> COMMA -> shift -> 'action 176'
  actionsTable[1066] = 177; // 'state 33' -> BRACKET_CLOSE -> shift -> 'action 177'
  actionsTable[1030] = 178; // 'state 32' -> COMMA -> reduce -> 'action 178'
  actionsTable[1034] = 179; // 'state 32' -> BRACKET_CLOSE -> reduce -> 'action 179'
  actionsTable[1093] = 180; // 'state 34' -> CURLY_CLOSE -> reduce -> 'action 180'
  actionsTable[1094] = 181; // 'state 34' -> COMMA -> reduce -> 'action 181'
  actionsTable[1098] = 182; // 'state 34' -> BRACKET_CLOSE -> reduce -> 'action 182'
  actionsTable[1100] = 183; // 'state 34' -> @par-gen.EOF -> reduce -> 'action 183'
  actionsTable[1152] = 184; // 'state 36' -> WS -> reduce -> 'action 184'
  actionsTable[1157] = 185; // 'state 36' -> CURLY_CLOSE -> reduce -> 'action 185'
  actionsTable[1158] = 186; // 'state 36' -> COMMA -> reduce -> 'action 186'
  actionsTable[1162] = 187; // 'state 36' -> BRACKET_CLOSE -> reduce -> 'action 187'
  actionsTable[1164] = 188; // 'state 36' -> @par-gen.EOF -> reduce -> 'action 188'
  actionsTable[1125] = 189; // 'state 35' -> CURLY_CLOSE -> shift -> 'action 189'
  actionsTable[1128] = 190; // 'state 35' -> STRING -> shift -> 'action 190'
  actionsTable[1221] = 191; // 'state 38' -> CURLY_CLOSE -> shift -> 'action 191'
  actionsTable[1222] = 192; // 'state 38' -> COMMA -> shift -> 'action 192'
  actionsTable[1253] = 193; // 'state 39' -> CURLY_CLOSE -> reduce -> 'action 193'
  actionsTable[1254] = 194; // 'state 39' -> COMMA -> reduce -> 'action 194'
  actionsTable[1184] = 195; // 'state 37' -> WS -> shift -> 'action 195'
  actionsTable[1191] = 196; // 'state 37' -> COLON -> shift -> 'action 196'
  actionsTable[1312] = 197; // 'state 41' -> WS -> reduce -> 'action 197'
  actionsTable[1317] = 198; // 'state 41' -> CURLY_CLOSE -> reduce -> 'action 198'
  actionsTable[1318] = 199; // 'state 41' -> COMMA -> reduce -> 'action 199'
  actionsTable[1322] = 200; // 'state 41' -> BRACKET_CLOSE -> reduce -> 'action 200'
  actionsTable[1324] = 201; // 'state 41' -> @par-gen.EOF -> reduce -> 'action 201'
  actionsTable[1281] = 202; // 'state 40' -> TRUE -> shift -> 'action 202'
  actionsTable[1282] = 203; // 'state 40' -> FALSE -> shift -> 'action 203'
  actionsTable[1283] = 204; // 'state 40' -> NULL -> shift -> 'action 204'
  actionsTable[1284] = 205; // 'state 40' -> CURLY_OPEN -> shift -> 'action 205'
  actionsTable[1288] = 206; // 'state 40' -> STRING -> shift -> 'action 206'
  actionsTable[1289] = 207; // 'state 40' -> BRACKET_OPEN -> shift -> 'action 207'
  actionsTable[1290] = 208; // 'state 40' -> BRACKET_CLOSE -> shift -> 'action 208'
  actionsTable[1291] = 209; // 'state 40' -> NUMBER -> shift -> 'action 209'
  actionsTable[1297] = 210; // 'state 40' -> Value -> shift -> 'action 210'
  actionsTable[1298] = 211; // 'state 40' -> Object -> shift -> 'action 211'
  actionsTable[1301] = 212; // 'state 40' -> Array -> shift -> 'action 212'
  actionsTable[1382] = 213; // 'state 43' -> COMMA -> shift -> 'action 213'
  actionsTable[1386] = 214; // 'state 43' -> BRACKET_CLOSE -> shift -> 'action 214'
  actionsTable[1350] = 215; // 'state 42' -> COMMA -> reduce -> 'action 215'
  actionsTable[1354] = 216; // 'state 42' -> BRACKET_CLOSE -> reduce -> 'action 216'
  actionsTable[1408] = 217; // 'state 44' -> WS -> reduce -> 'action 217'
  actionsTable[1413] = 218; // 'state 44' -> CURLY_CLOSE -> reduce -> 'action 218'
  actionsTable[1414] = 219; // 'state 44' -> COMMA -> reduce -> 'action 219'
  actionsTable[1418] = 220; // 'state 44' -> BRACKET_CLOSE -> reduce -> 'action 220'
  actionsTable[1420] = 221; // 'state 44' -> @par-gen.EOF -> reduce -> 'action 221'
  actionsTable[1440] = 222; // 'state 45' -> WS -> shift -> 'action 222'
  actionsTable[1447] = 223; // 'state 45' -> COLON -> shift -> 'action 223'
  actionsTable[1472] = 224; // 'state 46' -> WS -> reduce -> 'action 224'
  actionsTable[1477] = 225; // 'state 46' -> CURLY_CLOSE -> reduce -> 'action 225'
  actionsTable[1478] = 226; // 'state 46' -> COMMA -> reduce -> 'action 226'
  actionsTable[1482] = 227; // 'state 46' -> BRACKET_CLOSE -> reduce -> 'action 227'
  actionsTable[1484] = 228; // 'state 46' -> @par-gen.EOF -> reduce -> 'action 228'
  actionsTable[1504] = 229; // 'state 47' -> WS -> shift -> 'action 229'
  actionsTable[1512] = 230; // 'state 47' -> STRING -> shift -> 'action 230'
  actionsTable[1524] = 231; // 'state 47' -> Member -> shift -> 'action 231'
  actionsTable[1568] = 232; // 'state 49' -> WS -> shift -> 'action 232'
  actionsTable[1569] = 233; // 'state 49' -> TRUE -> shift -> 'action 233'
  actionsTable[1570] = 234; // 'state 49' -> FALSE -> shift -> 'action 234'
  actionsTable[1571] = 235; // 'state 49' -> NULL -> shift -> 'action 235'
  actionsTable[1572] = 236; // 'state 49' -> CURLY_OPEN -> shift -> 'action 236'
  actionsTable[1576] = 237; // 'state 49' -> STRING -> shift -> 'action 237'
  actionsTable[1577] = 238; // 'state 49' -> BRACKET_OPEN -> shift -> 'action 238'
  actionsTable[1579] = 239; // 'state 49' -> NUMBER -> shift -> 'action 239'
  actionsTable[1584] = 240; // 'state 49' -> Element -> shift -> 'action 240'
  actionsTable[1585] = 241; // 'state 49' -> Value -> shift -> 'action 241'
  actionsTable[1586] = 242; // 'state 49' -> Object -> shift -> 'action 242'
  actionsTable[1589] = 243; // 'state 49' -> Array -> shift -> 'action 243'
  actionsTable[1543] = 244; // 'state 48' -> COLON -> shift -> 'action 244'
  actionsTable[1600] = 245; // 'state 50' -> WS -> reduce -> 'action 245'
  actionsTable[1605] = 246; // 'state 50' -> CURLY_CLOSE -> reduce -> 'action 246'
  actionsTable[1606] = 247; // 'state 50' -> COMMA -> reduce -> 'action 247'
  actionsTable[1610] = 248; // 'state 50' -> BRACKET_CLOSE -> reduce -> 'action 248'
  actionsTable[1612] = 249; // 'state 50' -> @par-gen.EOF -> reduce -> 'action 249'
  actionsTable[1664] = 250; // 'state 52' -> WS -> reduce -> 'action 250'
  actionsTable[1669] = 251; // 'state 52' -> CURLY_CLOSE -> reduce -> 'action 251'
  actionsTable[1670] = 252; // 'state 52' -> COMMA -> reduce -> 'action 252'
  actionsTable[1674] = 253; // 'state 52' -> BRACKET_CLOSE -> reduce -> 'action 253'
  actionsTable[1676] = 254; // 'state 52' -> @par-gen.EOF -> reduce -> 'action 254'
  actionsTable[1632] = 255; // 'state 51' -> WS -> shift -> 'action 255'
  actionsTable[1633] = 256; // 'state 51' -> TRUE -> shift -> 'action 256'
  actionsTable[1634] = 257; // 'state 51' -> FALSE -> shift -> 'action 257'
  actionsTable[1635] = 258; // 'state 51' -> NULL -> shift -> 'action 258'
  actionsTable[1636] = 259; // 'state 51' -> CURLY_OPEN -> shift -> 'action 259'
  actionsTable[1640] = 260; // 'state 51' -> STRING -> shift -> 'action 260'
  actionsTable[1641] = 261; // 'state 51' -> BRACKET_OPEN -> shift -> 'action 261'
  actionsTable[1643] = 262; // 'state 51' -> NUMBER -> shift -> 'action 262'
  actionsTable[1648] = 263; // 'state 51' -> Element -> shift -> 'action 263'
  actionsTable[1649] = 264; // 'state 51' -> Value -> shift -> 'action 264'
  actionsTable[1650] = 265; // 'state 51' -> Object -> shift -> 'action 265'
  actionsTable[1653] = 266; // 'state 51' -> Array -> shift -> 'action 266'
  actionsTable[1696] = 267; // 'state 53' -> WS -> reduce -> 'action 267'
  actionsTable[1701] = 268; // 'state 53' -> CURLY_CLOSE -> reduce -> 'action 268'
  actionsTable[1702] = 269; // 'state 53' -> COMMA -> reduce -> 'action 269'
  actionsTable[1706] = 270; // 'state 53' -> BRACKET_CLOSE -> reduce -> 'action 270'
  actionsTable[1708] = 271; // 'state 53' -> @par-gen.EOF -> reduce -> 'action 271'
  actionsTable[1728] = 272; // 'state 54' -> WS -> shift -> 'action 272'
  actionsTable[1735] = 273; // 'state 54' -> COLON -> shift -> 'action 273'
  actionsTable[1760] = 274; // 'state 55' -> WS -> reduce -> 'action 274'
  actionsTable[1765] = 275; // 'state 55' -> CURLY_CLOSE -> reduce -> 'action 275'
  actionsTable[1766] = 276; // 'state 55' -> COMMA -> reduce -> 'action 276'
  actionsTable[1770] = 277; // 'state 55' -> BRACKET_CLOSE -> reduce -> 'action 277'
  actionsTable[1772] = 278; // 'state 55' -> @par-gen.EOF -> reduce -> 'action 278'
  actionsTable[1792] = 279; // 'state 56' -> WS -> shift -> 'action 279'
  actionsTable[1800] = 280; // 'state 56' -> STRING -> shift -> 'action 280'
  actionsTable[1812] = 281; // 'state 56' -> Member -> shift -> 'action 281'
  actionsTable[1856] = 282; // 'state 58' -> WS -> shift -> 'action 282'
  actionsTable[1857] = 283; // 'state 58' -> TRUE -> shift -> 'action 283'
  actionsTable[1858] = 284; // 'state 58' -> FALSE -> shift -> 'action 284'
  actionsTable[1859] = 285; // 'state 58' -> NULL -> shift -> 'action 285'
  actionsTable[1860] = 286; // 'state 58' -> CURLY_OPEN -> shift -> 'action 286'
  actionsTable[1864] = 287; // 'state 58' -> STRING -> shift -> 'action 287'
  actionsTable[1865] = 288; // 'state 58' -> BRACKET_OPEN -> shift -> 'action 288'
  actionsTable[1867] = 289; // 'state 58' -> NUMBER -> shift -> 'action 289'
  actionsTable[1872] = 290; // 'state 58' -> Element -> shift -> 'action 290'
  actionsTable[1873] = 291; // 'state 58' -> Value -> shift -> 'action 291'
  actionsTable[1874] = 292; // 'state 58' -> Object -> shift -> 'action 292'
  actionsTable[1877] = 293; // 'state 58' -> Array -> shift -> 'action 293'
  actionsTable[1831] = 294; // 'state 57' -> COLON -> shift -> 'action 294'
  actionsTable[1888] = 295; // 'state 59' -> WS -> reduce -> 'action 295'
  actionsTable[1893] = 296; // 'state 59' -> CURLY_CLOSE -> reduce -> 'action 296'
  actionsTable[1894] = 297; // 'state 59' -> COMMA -> reduce -> 'action 297'
  actionsTable[1898] = 298; // 'state 59' -> BRACKET_CLOSE -> reduce -> 'action 298'
  actionsTable[1900] = 299; // 'state 59' -> @par-gen.EOF -> reduce -> 'action 299'
  actionsTable[1952] = 300; // 'state 61' -> WS -> reduce -> 'action 300'
  actionsTable[1957] = 301; // 'state 61' -> CURLY_CLOSE -> reduce -> 'action 301'
  actionsTable[1958] = 302; // 'state 61' -> COMMA -> reduce -> 'action 302'
  actionsTable[1962] = 303; // 'state 61' -> BRACKET_CLOSE -> reduce -> 'action 303'
  actionsTable[1964] = 304; // 'state 61' -> @par-gen.EOF -> reduce -> 'action 304'
  actionsTable[1920] = 305; // 'state 60' -> WS -> shift -> 'action 305'
  actionsTable[1921] = 306; // 'state 60' -> TRUE -> shift -> 'action 306'
  actionsTable[1922] = 307; // 'state 60' -> FALSE -> shift -> 'action 307'
  actionsTable[1923] = 308; // 'state 60' -> NULL -> shift -> 'action 308'
  actionsTable[1924] = 309; // 'state 60' -> CURLY_OPEN -> shift -> 'action 309'
  actionsTable[1928] = 310; // 'state 60' -> STRING -> shift -> 'action 310'
  actionsTable[1929] = 311; // 'state 60' -> BRACKET_OPEN -> shift -> 'action 311'
  actionsTable[1931] = 312; // 'state 60' -> NUMBER -> shift -> 'action 312'
  actionsTable[1936] = 313; // 'state 60' -> Element -> shift -> 'action 313'
  actionsTable[1937] = 314; // 'state 60' -> Value -> shift -> 'action 314'
  actionsTable[1938] = 315; // 'state 60' -> Object -> shift -> 'action 315'
  actionsTable[1941] = 316; // 'state 60' -> Array -> shift -> 'action 316'
  actionsTable[2016] = 317; // 'state 63' -> WS -> shift -> 'action 317'
  actionsTable[2017] = 318; // 'state 63' -> TRUE -> shift -> 'action 318'
  actionsTable[2018] = 319; // 'state 63' -> FALSE -> shift -> 'action 319'
  actionsTable[2019] = 320; // 'state 63' -> NULL -> shift -> 'action 320'
  actionsTable[2020] = 321; // 'state 63' -> CURLY_OPEN -> shift -> 'action 321'
  actionsTable[2024] = 322; // 'state 63' -> STRING -> shift -> 'action 322'
  actionsTable[2025] = 323; // 'state 63' -> BRACKET_OPEN -> shift -> 'action 323'
  actionsTable[2027] = 324; // 'state 63' -> NUMBER -> shift -> 'action 324'
  actionsTable[2032] = 325; // 'state 63' -> Element -> shift -> 'action 325'
  actionsTable[2033] = 326; // 'state 63' -> Value -> shift -> 'action 326'
  actionsTable[2034] = 327; // 'state 63' -> Object -> shift -> 'action 327'
  actionsTable[2037] = 328; // 'state 63' -> Array -> shift -> 'action 328'
  actionsTable[1991] = 329; // 'state 62' -> COLON -> shift -> 'action 329'
  actionsTable[2085] = 330; // 'state 65' -> CURLY_CLOSE -> reduce -> 'action 330'
  actionsTable[2086] = 331; // 'state 65' -> COMMA -> reduce -> 'action 331'
  actionsTable[2056] = 332; // 'state 64' -> STRING -> shift -> 'action 332'
  actionsTable[2117] = 333; // 'state 66' -> CURLY_CLOSE -> reduce -> 'action 333'
  actionsTable[2118] = 334; // 'state 66' -> COMMA -> reduce -> 'action 334'
  actionsTable[2144] = 335; // 'state 67' -> WS -> shift -> 'action 335'
  actionsTable[2145] = 336; // 'state 67' -> TRUE -> shift -> 'action 336'
  actionsTable[2146] = 337; // 'state 67' -> FALSE -> shift -> 'action 337'
  actionsTable[2147] = 338; // 'state 67' -> NULL -> shift -> 'action 338'
  actionsTable[2148] = 339; // 'state 67' -> CURLY_OPEN -> shift -> 'action 339'
  actionsTable[2152] = 340; // 'state 67' -> STRING -> shift -> 'action 340'
  actionsTable[2153] = 341; // 'state 67' -> BRACKET_OPEN -> shift -> 'action 341'
  actionsTable[2155] = 342; // 'state 67' -> NUMBER -> shift -> 'action 342'
  actionsTable[2160] = 343; // 'state 67' -> Element -> shift -> 'action 343'
  actionsTable[2161] = 344; // 'state 67' -> Value -> shift -> 'action 344'
  actionsTable[2162] = 345; // 'state 67' -> Object -> shift -> 'action 345'
  actionsTable[2165] = 346; // 'state 67' -> Array -> shift -> 'action 346'
  actionsTable[2182] = 347; // 'state 68' -> COMMA -> reduce -> 'action 347'
  actionsTable[2186] = 348; // 'state 68' -> BRACKET_CLOSE -> reduce -> 'action 348'
  actionsTable[2240] = 349; // 'state 70' -> WS -> shift -> 'action 349'
  actionsTable[2241] = 350; // 'state 70' -> TRUE -> shift -> 'action 350'
  actionsTable[2242] = 351; // 'state 70' -> FALSE -> shift -> 'action 351'
  actionsTable[2243] = 352; // 'state 70' -> NULL -> shift -> 'action 352'
  actionsTable[2244] = 353; // 'state 70' -> CURLY_OPEN -> shift -> 'action 353'
  actionsTable[2248] = 354; // 'state 70' -> STRING -> shift -> 'action 354'
  actionsTable[2249] = 355; // 'state 70' -> BRACKET_OPEN -> shift -> 'action 355'
  actionsTable[2251] = 356; // 'state 70' -> NUMBER -> shift -> 'action 356'
  actionsTable[2256] = 357; // 'state 70' -> Element -> shift -> 'action 357'
  actionsTable[2257] = 358; // 'state 70' -> Value -> shift -> 'action 358'
  actionsTable[2258] = 359; // 'state 70' -> Object -> shift -> 'action 359'
  actionsTable[2261] = 360; // 'state 70' -> Array -> shift -> 'action 360'
  actionsTable[2215] = 361; // 'state 69' -> COLON -> shift -> 'action 361'
  actionsTable[2309] = 362; // 'state 72' -> CURLY_CLOSE -> reduce -> 'action 362'
  actionsTable[2310] = 363; // 'state 72' -> COMMA -> reduce -> 'action 363'
  actionsTable[2280] = 364; // 'state 71' -> STRING -> shift -> 'action 364'
  actionsTable[2341] = 365; // 'state 73' -> CURLY_CLOSE -> reduce -> 'action 365'
  actionsTable[2342] = 366; // 'state 73' -> COMMA -> reduce -> 'action 366'
  actionsTable[2368] = 367; // 'state 74' -> WS -> shift -> 'action 367'
  actionsTable[2369] = 368; // 'state 74' -> TRUE -> shift -> 'action 368'
  actionsTable[2370] = 369; // 'state 74' -> FALSE -> shift -> 'action 369'
  actionsTable[2371] = 370; // 'state 74' -> NULL -> shift -> 'action 370'
  actionsTable[2372] = 371; // 'state 74' -> CURLY_OPEN -> shift -> 'action 371'
  actionsTable[2376] = 372; // 'state 74' -> STRING -> shift -> 'action 372'
  actionsTable[2377] = 373; // 'state 74' -> BRACKET_OPEN -> shift -> 'action 373'
  actionsTable[2379] = 374; // 'state 74' -> NUMBER -> shift -> 'action 374'
  actionsTable[2384] = 375; // 'state 74' -> Element -> shift -> 'action 375'
  actionsTable[2385] = 376; // 'state 74' -> Value -> shift -> 'action 376'
  actionsTable[2386] = 377; // 'state 74' -> Object -> shift -> 'action 377'
  actionsTable[2389] = 378; // 'state 74' -> Array -> shift -> 'action 378'
  actionsTable[2406] = 379; // 'state 75' -> COMMA -> reduce -> 'action 379'
  actionsTable[2410] = 380; // 'state 75' -> BRACKET_CLOSE -> reduce -> 'action 380'
  actionsTable[2437] = 381; // 'state 76' -> CURLY_CLOSE -> reduce -> 'action 381'
  actionsTable[2438] = 382; // 'state 76' -> COMMA -> reduce -> 'action 382'
  actionsTable[2464] = 383; // 'state 77' -> WS -> shift -> 'action 383'
  actionsTable[2465] = 384; // 'state 77' -> TRUE -> shift -> 'action 384'
  actionsTable[2466] = 385; // 'state 77' -> FALSE -> shift -> 'action 385'
  actionsTable[2467] = 386; // 'state 77' -> NULL -> shift -> 'action 386'
  actionsTable[2468] = 387; // 'state 77' -> CURLY_OPEN -> shift -> 'action 387'
  actionsTable[2472] = 388; // 'state 77' -> STRING -> shift -> 'action 388'
  actionsTable[2473] = 389; // 'state 77' -> BRACKET_OPEN -> shift -> 'action 389'
  actionsTable[2475] = 390; // 'state 77' -> NUMBER -> shift -> 'action 390'
  actionsTable[2480] = 391; // 'state 77' -> Element -> shift -> 'action 391'
  actionsTable[2481] = 392; // 'state 77' -> Value -> shift -> 'action 392'
  actionsTable[2482] = 393; // 'state 77' -> Object -> shift -> 'action 393'
  actionsTable[2485] = 394; // 'state 77' -> Array -> shift -> 'action 394'
  actionsTable[2501] = 395; // 'state 78' -> CURLY_CLOSE -> reduce -> 'action 395'
  actionsTable[2502] = 396; // 'state 78' -> COMMA -> reduce -> 'action 396'
  actionsTable[2533] = 397; // 'state 79' -> CURLY_CLOSE -> reduce -> 'action 397'
  actionsTable[2534] = 398; // 'state 79' -> COMMA -> reduce -> 'action 398'
  actionsTable[2560] = 399; // 'state 80' -> WS -> shift -> 'action 399'
  actionsTable[2561] = 400; // 'state 80' -> TRUE -> shift -> 'action 400'
  actionsTable[2562] = 401; // 'state 80' -> FALSE -> shift -> 'action 401'
  actionsTable[2563] = 402; // 'state 80' -> NULL -> shift -> 'action 402'
  actionsTable[2564] = 403; // 'state 80' -> CURLY_OPEN -> shift -> 'action 403'
  actionsTable[2568] = 404; // 'state 80' -> STRING -> shift -> 'action 404'
  actionsTable[2569] = 405; // 'state 80' -> BRACKET_OPEN -> shift -> 'action 405'
  actionsTable[2571] = 406; // 'state 80' -> NUMBER -> shift -> 'action 406'
  actionsTable[2576] = 407; // 'state 80' -> Element -> shift -> 'action 407'
  actionsTable[2577] = 408; // 'state 80' -> Value -> shift -> 'action 408'
  actionsTable[2578] = 409; // 'state 80' -> Object -> shift -> 'action 409'
  actionsTable[2581] = 410; // 'state 80' -> Array -> shift -> 'action 410'
  actionsTable[2597] = 411; // 'state 81' -> CURLY_CLOSE -> reduce -> 'action 411'
  actionsTable[2598] = 412; // 'state 81' -> COMMA -> reduce -> 'action 412'
  actionsTable[2629] = 413; // 'state 82' -> CURLY_CLOSE -> reduce -> 'action 413'
  actionsTable[2630] = 414; // 'state 82' -> COMMA -> reduce -> 'action 414'
  actionsTable[2661] = 415; // 'state 83' -> CURLY_CLOSE -> reduce -> 'action 415'
  actionsTable[2662] = 416; // 'state 83' -> COMMA -> reduce -> 'action 416'
}

void init_gotoTable(void)
{
  gotoTable[15] = 9;    // 'state 9'
  gotoTable[16] = 10;   // 'state 10'
  gotoTable[17] = 11;   // 'state 11'
  gotoTable[18] = 12;   // 'state 12'
  gotoTable[21] = 13;   // 'state 13'
  gotoTable[49] = 22;   // 'state 22'
  gotoTable[50] = 23;   // 'state 23'
  gotoTable[53] = 24;   // 'state 24'
  gotoTable[179] = 28;  // 'state 28'
  gotoTable[180] = 29;  // 'state 29'
  gotoTable[246] = 33;  // 'state 33'
  gotoTable[240] = 32;  // 'state 32'
  gotoTable[241] = 11;  // 'state 11'
  gotoTable[242] = 12;  // 'state 12'
  gotoTable[245] = 13;  // 'state 13'
  gotoTable[595] = 38;  // 'state 38'
  gotoTable[596] = 39;  // 'state 39'
  gotoTable[662] = 43;  // 'state 43'
  gotoTable[656] = 42;  // 'state 42'
  gotoTable[657] = 11;  // 'state 11'
  gotoTable[658] = 12;  // 'state 12'
  gotoTable[661] = 13;  // 'state 13'
  gotoTable[977] = 22;  // 'state 22'
  gotoTable[978] = 12;  // 'state 12'
  gotoTable[981] = 13;  // 'state 13'
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
}

void init_actions(void)
{
  // 'action 0'
  actions[0].op = 0;    // shift
  actions[0].state = 1; // 'state 1'

  // 'action 1'
  actions[1].op = 0;    // shift
  actions[1].state = 2; // 'state 2'

  // 'action 2'
  actions[2].op = 0;    // shift
  actions[2].state = 3; // 'state 3'

  // 'action 3'
  actions[3].op = 0;    // shift
  actions[3].state = 4; // 'state 4'

  // 'action 4'
  actions[4].op = 0;    // shift
  actions[4].state = 5; // 'state 5'

  // 'action 5'
  actions[5].op = 0;    // shift
  actions[5].state = 6; // 'state 6'

  // 'action 6'
  actions[6].op = 0;    // shift
  actions[6].state = 7; // 'state 7'

  // 'action 7'
  actions[7].op = 0;    // shift
  actions[7].state = 8; // 'state 8'

  // 'action 8'
  actions[8].op = 0;    // shift
  actions[8].state = 9; // 'state 9'

  // 'action 9'
  actions[9].op = 0;     // shift
  actions[9].state = 10; // 'state 10'

  // 'action 10'
  actions[10].op = 0;     // shift
  actions[10].state = 11; // 'state 11'

  // 'action 11'
  actions[11].op = 0;     // shift
  actions[11].state = 12; // 'state 12'

  // 'action 12'
  actions[12].op = 0;     // shift
  actions[12].state = 13; // 'state 13'

  // 'action 13'
  actions[13].op = 2; // done

  // 'action 14'
  actions[14].op = 1;      // reduce
  actions[14].symbol = 15; // Json

  // 'action 15'
  actions[15].op = 0;     // shift
  actions[15].state = 14; // 'state 14'

  // 'action 16'
  actions[16].op = 1;      // reduce
  actions[16].symbol = 16; // Element

  // 'action 17'
  actions[17].op = 1;      // reduce
  actions[17].symbol = 16; // Element

  // 'action 18'
  actions[18].op = 1;      // reduce
  actions[18].symbol = 16; // Element

  // 'action 19'
  actions[19].op = 1;      // reduce
  actions[19].symbol = 16; // Element

  // 'action 20'
  actions[20].op = 0;     // shift
  actions[20].state = 15; // 'state 15'

  // 'action 21'
  actions[21].op = 0;     // shift
  actions[21].state = 16; // 'state 16'

  // 'action 22'
  actions[22].op = 0;     // shift
  actions[22].state = 17; // 'state 17'

  // 'action 23'
  actions[23].op = 0;     // shift
  actions[23].state = 18; // 'state 18'

  // 'action 24'
  actions[24].op = 0;     // shift
  actions[24].state = 19; // 'state 19'

  // 'action 25'
  actions[25].op = 0;     // shift
  actions[25].state = 20; // 'state 20'

  // 'action 26'
  actions[26].op = 0;     // shift
  actions[26].state = 21; // 'state 21'

  // 'action 27'
  actions[27].op = 0;     // shift
  actions[27].state = 22; // 'state 22'

  // 'action 28'
  actions[28].op = 0;     // shift
  actions[28].state = 23; // 'state 23'

  // 'action 29'
  actions[29].op = 0;     // shift
  actions[29].state = 24; // 'state 24'

  // 'action 30'
  actions[30].op = 1;      // reduce
  actions[30].symbol = 17; // Value

  // 'action 31'
  actions[31].op = 1;      // reduce
  actions[31].symbol = 17; // Value

  // 'action 32'
  actions[32].op = 1;      // reduce
  actions[32].symbol = 17; // Value

  // 'action 33'
  actions[33].op = 1;      // reduce
  actions[33].symbol = 17; // Value

  // 'action 34'
  actions[34].op = 1;      // reduce
  actions[34].symbol = 17; // Value

  // 'action 35'
  actions[35].op = 1;      // reduce
  actions[35].symbol = 17; // Value

  // 'action 36'
  actions[36].op = 1;      // reduce
  actions[36].symbol = 17; // Value

  // 'action 37'
  actions[37].op = 1;      // reduce
  actions[37].symbol = 17; // Value

  // 'action 38'
  actions[38].op = 1;      // reduce
  actions[38].symbol = 17; // Value

  // 'action 39'
  actions[39].op = 1;      // reduce
  actions[39].symbol = 17; // Value

  // 'action 40'
  actions[40].op = 1;      // reduce
  actions[40].symbol = 17; // Value

  // 'action 41'
  actions[41].op = 1;      // reduce
  actions[41].symbol = 17; // Value

  // 'action 42'
  actions[42].op = 1;      // reduce
  actions[42].symbol = 17; // Value

  // 'action 43'
  actions[43].op = 1;      // reduce
  actions[43].symbol = 17; // Value

  // 'action 44'
  actions[44].op = 1;      // reduce
  actions[44].symbol = 17; // Value

  // 'action 45'
  actions[45].op = 1;      // reduce
  actions[45].symbol = 17; // Value

  // 'action 46'
  actions[46].op = 1;      // reduce
  actions[46].symbol = 17; // Value

  // 'action 47'
  actions[47].op = 1;      // reduce
  actions[47].symbol = 17; // Value

  // 'action 48'
  actions[48].op = 1;      // reduce
  actions[48].symbol = 17; // Value

  // 'action 49'
  actions[49].op = 1;      // reduce
  actions[49].symbol = 17; // Value

  // 'action 50'
  actions[50].op = 1;      // reduce
  actions[50].symbol = 17; // Value

  // 'action 51'
  actions[51].op = 1;      // reduce
  actions[51].symbol = 17; // Value

  // 'action 52'
  actions[52].op = 1;      // reduce
  actions[52].symbol = 17; // Value

  // 'action 53'
  actions[53].op = 1;      // reduce
  actions[53].symbol = 17; // Value

  // 'action 54'
  actions[54].op = 1;      // reduce
  actions[54].symbol = 17; // Value

  // 'action 55'
  actions[55].op = 1;      // reduce
  actions[55].symbol = 17; // Value

  // 'action 56'
  actions[56].op = 1;      // reduce
  actions[56].symbol = 17; // Value

  // 'action 57'
  actions[57].op = 1;      // reduce
  actions[57].symbol = 17; // Value

  // 'action 58'
  actions[58].op = 1;      // reduce
  actions[58].symbol = 17; // Value

  // 'action 59'
  actions[59].op = 1;      // reduce
  actions[59].symbol = 17; // Value

  // 'action 60'
  actions[60].op = 1;      // reduce
  actions[60].symbol = 17; // Value

  // 'action 61'
  actions[61].op = 1;      // reduce
  actions[61].symbol = 17; // Value

  // 'action 62'
  actions[62].op = 1;      // reduce
  actions[62].symbol = 17; // Value

  // 'action 63'
  actions[63].op = 1;      // reduce
  actions[63].symbol = 17; // Value

  // 'action 64'
  actions[64].op = 1;      // reduce
  actions[64].symbol = 17; // Value

  // 'action 65'
  actions[65].op = 0;     // shift
  actions[65].state = 25; // 'state 25'

  // 'action 66'
  actions[66].op = 0;     // shift
  actions[66].state = 26; // 'state 26'

  // 'action 67'
  actions[67].op = 0;     // shift
  actions[67].state = 27; // 'state 27'

  // 'action 68'
  actions[68].op = 0;     // shift
  actions[68].state = 28; // 'state 28'

  // 'action 69'
  actions[69].op = 0;     // shift
  actions[69].state = 29; // 'state 29'

  // 'action 70'
  actions[70].op = 0;     // shift
  actions[70].state = 30; // 'state 30'

  // 'action 71'
  actions[71].op = 0;    // shift
  actions[71].state = 2; // 'state 2'

  // 'action 72'
  actions[72].op = 0;    // shift
  actions[72].state = 3; // 'state 3'

  // 'action 73'
  actions[73].op = 0;    // shift
  actions[73].state = 4; // 'state 4'

  // 'action 74'
  actions[74].op = 0;    // shift
  actions[74].state = 5; // 'state 5'

  // 'action 75'
  actions[75].op = 0;    // shift
  actions[75].state = 6; // 'state 6'

  // 'action 76'
  actions[76].op = 0;    // shift
  actions[76].state = 7; // 'state 7'

  // 'action 77'
  actions[77].op = 0;     // shift
  actions[77].state = 31; // 'state 31'

  // 'action 78'
  actions[78].op = 0;    // shift
  actions[78].state = 8; // 'state 8'

  // 'action 79'
  actions[79].op = 0;     // shift
  actions[79].state = 32; // 'state 32'

  // 'action 80'
  actions[80].op = 0;     // shift
  actions[80].state = 11; // 'state 11'

  // 'action 81'
  actions[81].op = 0;     // shift
  actions[81].state = 12; // 'state 12'

  // 'action 82'
  actions[82].op = 0;     // shift
  actions[82].state = 13; // 'state 13'

  // 'action 83'
  actions[83].op = 0;     // shift
  actions[83].state = 33; // 'state 33'

  // 'action 84'
  actions[84].op = 1;      // reduce
  actions[84].symbol = 16; // Element

  // 'action 85'
  actions[85].op = 1;      // reduce
  actions[85].symbol = 16; // Element

  // 'action 86'
  actions[86].op = 1;      // reduce
  actions[86].symbol = 16; // Element

  // 'action 87'
  actions[87].op = 1;      // reduce
  actions[87].symbol = 16; // Element

  // 'action 88'
  actions[88].op = 0;     // shift
  actions[88].state = 34; // 'state 34'

  // 'action 89'
  actions[89].op = 1;      // reduce
  actions[89].symbol = 16; // Element

  // 'action 90'
  actions[90].op = 1;      // reduce
  actions[90].symbol = 16; // Element

  // 'action 91'
  actions[91].op = 1;      // reduce
  actions[91].symbol = 16; // Element

  // 'action 92'
  actions[92].op = 1;      // reduce
  actions[92].symbol = 16; // Element

  // 'action 93'
  actions[93].op = 1;      // reduce
  actions[93].symbol = 17; // Value

  // 'action 94'
  actions[94].op = 1;      // reduce
  actions[94].symbol = 17; // Value

  // 'action 95'
  actions[95].op = 1;      // reduce
  actions[95].symbol = 17; // Value

  // 'action 96'
  actions[96].op = 1;      // reduce
  actions[96].symbol = 17; // Value

  // 'action 97'
  actions[97].op = 1;      // reduce
  actions[97].symbol = 17; // Value

  // 'action 98'
  actions[98].op = 1;      // reduce
  actions[98].symbol = 17; // Value

  // 'action 99'
  actions[99].op = 1;      // reduce
  actions[99].symbol = 17; // Value

  // 'action 100'
  actions[100].op = 1;      // reduce
  actions[100].symbol = 17; // Value

  // 'action 101'
  actions[101].op = 1;      // reduce
  actions[101].symbol = 17; // Value

  // 'action 102'
  actions[102].op = 1;      // reduce
  actions[102].symbol = 17; // Value

  // 'action 103'
  actions[103].op = 1;      // reduce
  actions[103].symbol = 17; // Value

  // 'action 104'
  actions[104].op = 1;      // reduce
  actions[104].symbol = 17; // Value

  // 'action 105'
  actions[105].op = 1;      // reduce
  actions[105].symbol = 17; // Value

  // 'action 106'
  actions[106].op = 1;      // reduce
  actions[106].symbol = 17; // Value

  // 'action 107'
  actions[107].op = 1;      // reduce
  actions[107].symbol = 17; // Value

  // 'action 108'
  actions[108].op = 1;      // reduce
  actions[108].symbol = 17; // Value

  // 'action 109'
  actions[109].op = 1;      // reduce
  actions[109].symbol = 17; // Value

  // 'action 110'
  actions[110].op = 1;      // reduce
  actions[110].symbol = 17; // Value

  // 'action 111'
  actions[111].op = 1;      // reduce
  actions[111].symbol = 17; // Value

  // 'action 112'
  actions[112].op = 1;      // reduce
  actions[112].symbol = 17; // Value

  // 'action 113'
  actions[113].op = 1;      // reduce
  actions[113].symbol = 17; // Value

  // 'action 114'
  actions[114].op = 1;      // reduce
  actions[114].symbol = 17; // Value

  // 'action 115'
  actions[115].op = 1;      // reduce
  actions[115].symbol = 17; // Value

  // 'action 116'
  actions[116].op = 1;      // reduce
  actions[116].symbol = 17; // Value

  // 'action 117'
  actions[117].op = 1;      // reduce
  actions[117].symbol = 17; // Value

  // 'action 118'
  actions[118].op = 1;      // reduce
  actions[118].symbol = 17; // Value

  // 'action 119'
  actions[119].op = 1;      // reduce
  actions[119].symbol = 17; // Value

  // 'action 120'
  actions[120].op = 1;      // reduce
  actions[120].symbol = 17; // Value

  // 'action 121'
  actions[121].op = 1;      // reduce
  actions[121].symbol = 17; // Value

  // 'action 122'
  actions[122].op = 1;      // reduce
  actions[122].symbol = 17; // Value

  // 'action 123'
  actions[123].op = 1;      // reduce
  actions[123].symbol = 17; // Value

  // 'action 124'
  actions[124].op = 1;      // reduce
  actions[124].symbol = 17; // Value

  // 'action 125'
  actions[125].op = 1;      // reduce
  actions[125].symbol = 17; // Value

  // 'action 126'
  actions[126].op = 1;      // reduce
  actions[126].symbol = 17; // Value

  // 'action 127'
  actions[127].op = 1;      // reduce
  actions[127].symbol = 17; // Value

  // 'action 128'
  actions[128].op = 0;     // shift
  actions[128].state = 35; // 'state 35'

  // 'action 129'
  actions[129].op = 0;     // shift
  actions[129].state = 36; // 'state 36'

  // 'action 130'
  actions[130].op = 0;     // shift
  actions[130].state = 37; // 'state 37'

  // 'action 131'
  actions[131].op = 0;     // shift
  actions[131].state = 38; // 'state 38'

  // 'action 132'
  actions[132].op = 0;     // shift
  actions[132].state = 39; // 'state 39'

  // 'action 133'
  actions[133].op = 0;     // shift
  actions[133].state = 40; // 'state 40'

  // 'action 134'
  actions[134].op = 0;    // shift
  actions[134].state = 2; // 'state 2'

  // 'action 135'
  actions[135].op = 0;    // shift
  actions[135].state = 3; // 'state 3'

  // 'action 136'
  actions[136].op = 0;    // shift
  actions[136].state = 4; // 'state 4'

  // 'action 137'
  actions[137].op = 0;    // shift
  actions[137].state = 5; // 'state 5'

  // 'action 138'
  actions[138].op = 0;    // shift
  actions[138].state = 6; // 'state 6'

  // 'action 139'
  actions[139].op = 0;    // shift
  actions[139].state = 7; // 'state 7'

  // 'action 140'
  actions[140].op = 0;     // shift
  actions[140].state = 41; // 'state 41'

  // 'action 141'
  actions[141].op = 0;    // shift
  actions[141].state = 8; // 'state 8'

  // 'action 142'
  actions[142].op = 0;     // shift
  actions[142].state = 42; // 'state 42'

  // 'action 143'
  actions[143].op = 0;     // shift
  actions[143].state = 11; // 'state 11'

  // 'action 144'
  actions[144].op = 0;     // shift
  actions[144].state = 12; // 'state 12'

  // 'action 145'
  actions[145].op = 0;     // shift
  actions[145].state = 13; // 'state 13'

  // 'action 146'
  actions[146].op = 0;     // shift
  actions[146].state = 43; // 'state 43'

  // 'action 147'
  actions[147].op = 1;      // reduce
  actions[147].symbol = 18; // Object

  // 'action 148'
  actions[148].op = 1;      // reduce
  actions[148].symbol = 18; // Object

  // 'action 149'
  actions[149].op = 1;      // reduce
  actions[149].symbol = 18; // Object

  // 'action 150'
  actions[150].op = 1;      // reduce
  actions[150].symbol = 18; // Object

  // 'action 151'
  actions[151].op = 1;      // reduce
  actions[151].symbol = 18; // Object

  // 'action 152'
  actions[152].op = 0;     // shift
  actions[152].state = 44; // 'state 44'

  // 'action 153'
  actions[153].op = 0;     // shift
  actions[153].state = 45; // 'state 45'

  // 'action 154'
  actions[154].op = 0;     // shift
  actions[154].state = 46; // 'state 46'

  // 'action 155'
  actions[155].op = 0;     // shift
  actions[155].state = 47; // 'state 47'

  // 'action 156'
  actions[156].op = 1;      // reduce
  actions[156].symbol = 19; // Members

  // 'action 157'
  actions[157].op = 1;      // reduce
  actions[157].symbol = 19; // Members

  // 'action 158'
  actions[158].op = 0;     // shift
  actions[158].state = 48; // 'state 48'

  // 'action 159'
  actions[159].op = 0;     // shift
  actions[159].state = 49; // 'state 49'

  // 'action 160'
  actions[160].op = 1;      // reduce
  actions[160].symbol = 21; // Array

  // 'action 161'
  actions[161].op = 1;      // reduce
  actions[161].symbol = 21; // Array

  // 'action 162'
  actions[162].op = 1;      // reduce
  actions[162].symbol = 21; // Array

  // 'action 163'
  actions[163].op = 1;      // reduce
  actions[163].symbol = 21; // Array

  // 'action 164'
  actions[164].op = 1;      // reduce
  actions[164].symbol = 21; // Array

  // 'action 165'
  actions[165].op = 0;    // shift
  actions[165].state = 2; // 'state 2'

  // 'action 166'
  actions[166].op = 0;    // shift
  actions[166].state = 3; // 'state 3'

  // 'action 167'
  actions[167].op = 0;    // shift
  actions[167].state = 4; // 'state 4'

  // 'action 168'
  actions[168].op = 0;    // shift
  actions[168].state = 5; // 'state 5'

  // 'action 169'
  actions[169].op = 0;    // shift
  actions[169].state = 6; // 'state 6'

  // 'action 170'
  actions[170].op = 0;    // shift
  actions[170].state = 7; // 'state 7'

  // 'action 171'
  actions[171].op = 0;     // shift
  actions[171].state = 50; // 'state 50'

  // 'action 172'
  actions[172].op = 0;    // shift
  actions[172].state = 8; // 'state 8'

  // 'action 173'
  actions[173].op = 0;     // shift
  actions[173].state = 22; // 'state 22'

  // 'action 174'
  actions[174].op = 0;     // shift
  actions[174].state = 12; // 'state 12'

  // 'action 175'
  actions[175].op = 0;     // shift
  actions[175].state = 13; // 'state 13'

  // 'action 176'
  actions[176].op = 0;     // shift
  actions[176].state = 51; // 'state 51'

  // 'action 177'
  actions[177].op = 0;     // shift
  actions[177].state = 52; // 'state 52'

  // 'action 178'
  actions[178].op = 1;      // reduce
  actions[178].symbol = 22; // Elements

  // 'action 179'
  actions[179].op = 1;      // reduce
  actions[179].symbol = 22; // Elements

  // 'action 180'
  actions[180].op = 1;      // reduce
  actions[180].symbol = 16; // Element

  // 'action 181'
  actions[181].op = 1;      // reduce
  actions[181].symbol = 16; // Element

  // 'action 182'
  actions[182].op = 1;      // reduce
  actions[182].symbol = 16; // Element

  // 'action 183'
  actions[183].op = 1;      // reduce
  actions[183].symbol = 16; // Element

  // 'action 184'
  actions[184].op = 1;      // reduce
  actions[184].symbol = 18; // Object

  // 'action 185'
  actions[185].op = 1;      // reduce
  actions[185].symbol = 18; // Object

  // 'action 186'
  actions[186].op = 1;      // reduce
  actions[186].symbol = 18; // Object

  // 'action 187'
  actions[187].op = 1;      // reduce
  actions[187].symbol = 18; // Object

  // 'action 188'
  actions[188].op = 1;      // reduce
  actions[188].symbol = 18; // Object

  // 'action 189'
  actions[189].op = 0;     // shift
  actions[189].state = 53; // 'state 53'

  // 'action 190'
  actions[190].op = 0;     // shift
  actions[190].state = 54; // 'state 54'

  // 'action 191'
  actions[191].op = 0;     // shift
  actions[191].state = 55; // 'state 55'

  // 'action 192'
  actions[192].op = 0;     // shift
  actions[192].state = 56; // 'state 56'

  // 'action 193'
  actions[193].op = 1;      // reduce
  actions[193].symbol = 19; // Members

  // 'action 194'
  actions[194].op = 1;      // reduce
  actions[194].symbol = 19; // Members

  // 'action 195'
  actions[195].op = 0;     // shift
  actions[195].state = 57; // 'state 57'

  // 'action 196'
  actions[196].op = 0;     // shift
  actions[196].state = 58; // 'state 58'

  // 'action 197'
  actions[197].op = 1;      // reduce
  actions[197].symbol = 21; // Array

  // 'action 198'
  actions[198].op = 1;      // reduce
  actions[198].symbol = 21; // Array

  // 'action 199'
  actions[199].op = 1;      // reduce
  actions[199].symbol = 21; // Array

  // 'action 200'
  actions[200].op = 1;      // reduce
  actions[200].symbol = 21; // Array

  // 'action 201'
  actions[201].op = 1;      // reduce
  actions[201].symbol = 21; // Array

  // 'action 202'
  actions[202].op = 0;    // shift
  actions[202].state = 2; // 'state 2'

  // 'action 203'
  actions[203].op = 0;    // shift
  actions[203].state = 3; // 'state 3'

  // 'action 204'
  actions[204].op = 0;    // shift
  actions[204].state = 4; // 'state 4'

  // 'action 205'
  actions[205].op = 0;    // shift
  actions[205].state = 5; // 'state 5'

  // 'action 206'
  actions[206].op = 0;    // shift
  actions[206].state = 6; // 'state 6'

  // 'action 207'
  actions[207].op = 0;    // shift
  actions[207].state = 7; // 'state 7'

  // 'action 208'
  actions[208].op = 0;     // shift
  actions[208].state = 59; // 'state 59'

  // 'action 209'
  actions[209].op = 0;    // shift
  actions[209].state = 8; // 'state 8'

  // 'action 210'
  actions[210].op = 0;     // shift
  actions[210].state = 22; // 'state 22'

  // 'action 211'
  actions[211].op = 0;     // shift
  actions[211].state = 12; // 'state 12'

  // 'action 212'
  actions[212].op = 0;     // shift
  actions[212].state = 13; // 'state 13'

  // 'action 213'
  actions[213].op = 0;     // shift
  actions[213].state = 60; // 'state 60'

  // 'action 214'
  actions[214].op = 0;     // shift
  actions[214].state = 61; // 'state 61'

  // 'action 215'
  actions[215].op = 1;      // reduce
  actions[215].symbol = 22; // Elements

  // 'action 216'
  actions[216].op = 1;      // reduce
  actions[216].symbol = 22; // Elements

  // 'action 217'
  actions[217].op = 1;      // reduce
  actions[217].symbol = 18; // Object

  // 'action 218'
  actions[218].op = 1;      // reduce
  actions[218].symbol = 18; // Object

  // 'action 219'
  actions[219].op = 1;      // reduce
  actions[219].symbol = 18; // Object

  // 'action 220'
  actions[220].op = 1;      // reduce
  actions[220].symbol = 18; // Object

  // 'action 221'
  actions[221].op = 1;      // reduce
  actions[221].symbol = 18; // Object

  // 'action 222'
  actions[222].op = 0;     // shift
  actions[222].state = 62; // 'state 62'

  // 'action 223'
  actions[223].op = 0;     // shift
  actions[223].state = 63; // 'state 63'

  // 'action 224'
  actions[224].op = 1;      // reduce
  actions[224].symbol = 18; // Object

  // 'action 225'
  actions[225].op = 1;      // reduce
  actions[225].symbol = 18; // Object

  // 'action 226'
  actions[226].op = 1;      // reduce
  actions[226].symbol = 18; // Object

  // 'action 227'
  actions[227].op = 1;      // reduce
  actions[227].symbol = 18; // Object

  // 'action 228'
  actions[228].op = 1;      // reduce
  actions[228].symbol = 18; // Object

  // 'action 229'
  actions[229].op = 0;     // shift
  actions[229].state = 64; // 'state 64'

  // 'action 230'
  actions[230].op = 0;     // shift
  actions[230].state = 27; // 'state 27'

  // 'action 231'
  actions[231].op = 0;     // shift
  actions[231].state = 65; // 'state 65'

  // 'action 232'
  actions[232].op = 0;    // shift
  actions[232].state = 1; // 'state 1'

  // 'action 233'
  actions[233].op = 0;    // shift
  actions[233].state = 2; // 'state 2'

  // 'action 234'
  actions[234].op = 0;    // shift
  actions[234].state = 3; // 'state 3'

  // 'action 235'
  actions[235].op = 0;    // shift
  actions[235].state = 4; // 'state 4'

  // 'action 236'
  actions[236].op = 0;    // shift
  actions[236].state = 5; // 'state 5'

  // 'action 237'
  actions[237].op = 0;    // shift
  actions[237].state = 6; // 'state 6'

  // 'action 238'
  actions[238].op = 0;    // shift
  actions[238].state = 7; // 'state 7'

  // 'action 239'
  actions[239].op = 0;    // shift
  actions[239].state = 8; // 'state 8'

  // 'action 240'
  actions[240].op = 0;     // shift
  actions[240].state = 66; // 'state 66'

  // 'action 241'
  actions[241].op = 0;     // shift
  actions[241].state = 11; // 'state 11'

  // 'action 242'
  actions[242].op = 0;     // shift
  actions[242].state = 12; // 'state 12'

  // 'action 243'
  actions[243].op = 0;     // shift
  actions[243].state = 13; // 'state 13'

  // 'action 244'
  actions[244].op = 0;     // shift
  actions[244].state = 67; // 'state 67'

  // 'action 245'
  actions[245].op = 1;      // reduce
  actions[245].symbol = 21; // Array

  // 'action 246'
  actions[246].op = 1;      // reduce
  actions[246].symbol = 21; // Array

  // 'action 247'
  actions[247].op = 1;      // reduce
  actions[247].symbol = 21; // Array

  // 'action 248'
  actions[248].op = 1;      // reduce
  actions[248].symbol = 21; // Array

  // 'action 249'
  actions[249].op = 1;      // reduce
  actions[249].symbol = 21; // Array

  // 'action 250'
  actions[250].op = 1;      // reduce
  actions[250].symbol = 21; // Array

  // 'action 251'
  actions[251].op = 1;      // reduce
  actions[251].symbol = 21; // Array

  // 'action 252'
  actions[252].op = 1;      // reduce
  actions[252].symbol = 21; // Array

  // 'action 253'
  actions[253].op = 1;      // reduce
  actions[253].symbol = 21; // Array

  // 'action 254'
  actions[254].op = 1;      // reduce
  actions[254].symbol = 21; // Array

  // 'action 255'
  actions[255].op = 0;    // shift
  actions[255].state = 1; // 'state 1'

  // 'action 256'
  actions[256].op = 0;    // shift
  actions[256].state = 2; // 'state 2'

  // 'action 257'
  actions[257].op = 0;    // shift
  actions[257].state = 3; // 'state 3'

  // 'action 258'
  actions[258].op = 0;    // shift
  actions[258].state = 4; // 'state 4'

  // 'action 259'
  actions[259].op = 0;    // shift
  actions[259].state = 5; // 'state 5'

  // 'action 260'
  actions[260].op = 0;    // shift
  actions[260].state = 6; // 'state 6'

  // 'action 261'
  actions[261].op = 0;    // shift
  actions[261].state = 7; // 'state 7'

  // 'action 262'
  actions[262].op = 0;    // shift
  actions[262].state = 8; // 'state 8'

  // 'action 263'
  actions[263].op = 0;     // shift
  actions[263].state = 68; // 'state 68'

  // 'action 264'
  actions[264].op = 0;     // shift
  actions[264].state = 11; // 'state 11'

  // 'action 265'
  actions[265].op = 0;     // shift
  actions[265].state = 12; // 'state 12'

  // 'action 266'
  actions[266].op = 0;     // shift
  actions[266].state = 13; // 'state 13'

  // 'action 267'
  actions[267].op = 1;      // reduce
  actions[267].symbol = 18; // Object

  // 'action 268'
  actions[268].op = 1;      // reduce
  actions[268].symbol = 18; // Object

  // 'action 269'
  actions[269].op = 1;      // reduce
  actions[269].symbol = 18; // Object

  // 'action 270'
  actions[270].op = 1;      // reduce
  actions[270].symbol = 18; // Object

  // 'action 271'
  actions[271].op = 1;      // reduce
  actions[271].symbol = 18; // Object

  // 'action 272'
  actions[272].op = 0;     // shift
  actions[272].state = 69; // 'state 69'

  // 'action 273'
  actions[273].op = 0;     // shift
  actions[273].state = 70; // 'state 70'

  // 'action 274'
  actions[274].op = 1;      // reduce
  actions[274].symbol = 18; // Object

  // 'action 275'
  actions[275].op = 1;      // reduce
  actions[275].symbol = 18; // Object

  // 'action 276'
  actions[276].op = 1;      // reduce
  actions[276].symbol = 18; // Object

  // 'action 277'
  actions[277].op = 1;      // reduce
  actions[277].symbol = 18; // Object

  // 'action 278'
  actions[278].op = 1;      // reduce
  actions[278].symbol = 18; // Object

  // 'action 279'
  actions[279].op = 0;     // shift
  actions[279].state = 71; // 'state 71'

  // 'action 280'
  actions[280].op = 0;     // shift
  actions[280].state = 27; // 'state 27'

  // 'action 281'
  actions[281].op = 0;     // shift
  actions[281].state = 72; // 'state 72'

  // 'action 282'
  actions[282].op = 0;    // shift
  actions[282].state = 1; // 'state 1'

  // 'action 283'
  actions[283].op = 0;    // shift
  actions[283].state = 2; // 'state 2'

  // 'action 284'
  actions[284].op = 0;    // shift
  actions[284].state = 3; // 'state 3'

  // 'action 285'
  actions[285].op = 0;    // shift
  actions[285].state = 4; // 'state 4'

  // 'action 286'
  actions[286].op = 0;    // shift
  actions[286].state = 5; // 'state 5'

  // 'action 287'
  actions[287].op = 0;    // shift
  actions[287].state = 6; // 'state 6'

  // 'action 288'
  actions[288].op = 0;    // shift
  actions[288].state = 7; // 'state 7'

  // 'action 289'
  actions[289].op = 0;    // shift
  actions[289].state = 8; // 'state 8'

  // 'action 290'
  actions[290].op = 0;     // shift
  actions[290].state = 73; // 'state 73'

  // 'action 291'
  actions[291].op = 0;     // shift
  actions[291].state = 11; // 'state 11'

  // 'action 292'
  actions[292].op = 0;     // shift
  actions[292].state = 12; // 'state 12'

  // 'action 293'
  actions[293].op = 0;     // shift
  actions[293].state = 13; // 'state 13'

  // 'action 294'
  actions[294].op = 0;     // shift
  actions[294].state = 74; // 'state 74'

  // 'action 295'
  actions[295].op = 1;      // reduce
  actions[295].symbol = 21; // Array

  // 'action 296'
  actions[296].op = 1;      // reduce
  actions[296].symbol = 21; // Array

  // 'action 297'
  actions[297].op = 1;      // reduce
  actions[297].symbol = 21; // Array

  // 'action 298'
  actions[298].op = 1;      // reduce
  actions[298].symbol = 21; // Array

  // 'action 299'
  actions[299].op = 1;      // reduce
  actions[299].symbol = 21; // Array

  // 'action 300'
  actions[300].op = 1;      // reduce
  actions[300].symbol = 21; // Array

  // 'action 301'
  actions[301].op = 1;      // reduce
  actions[301].symbol = 21; // Array

  // 'action 302'
  actions[302].op = 1;      // reduce
  actions[302].symbol = 21; // Array

  // 'action 303'
  actions[303].op = 1;      // reduce
  actions[303].symbol = 21; // Array

  // 'action 304'
  actions[304].op = 1;      // reduce
  actions[304].symbol = 21; // Array

  // 'action 305'
  actions[305].op = 0;    // shift
  actions[305].state = 1; // 'state 1'

  // 'action 306'
  actions[306].op = 0;    // shift
  actions[306].state = 2; // 'state 2'

  // 'action 307'
  actions[307].op = 0;    // shift
  actions[307].state = 3; // 'state 3'

  // 'action 308'
  actions[308].op = 0;    // shift
  actions[308].state = 4; // 'state 4'

  // 'action 309'
  actions[309].op = 0;    // shift
  actions[309].state = 5; // 'state 5'

  // 'action 310'
  actions[310].op = 0;    // shift
  actions[310].state = 6; // 'state 6'

  // 'action 311'
  actions[311].op = 0;    // shift
  actions[311].state = 7; // 'state 7'

  // 'action 312'
  actions[312].op = 0;    // shift
  actions[312].state = 8; // 'state 8'

  // 'action 313'
  actions[313].op = 0;     // shift
  actions[313].state = 75; // 'state 75'

  // 'action 314'
  actions[314].op = 0;     // shift
  actions[314].state = 11; // 'state 11'

  // 'action 315'
  actions[315].op = 0;     // shift
  actions[315].state = 12; // 'state 12'

  // 'action 316'
  actions[316].op = 0;     // shift
  actions[316].state = 13; // 'state 13'

  // 'action 317'
  actions[317].op = 0;    // shift
  actions[317].state = 1; // 'state 1'

  // 'action 318'
  actions[318].op = 0;    // shift
  actions[318].state = 2; // 'state 2'

  // 'action 319'
  actions[319].op = 0;    // shift
  actions[319].state = 3; // 'state 3'

  // 'action 320'
  actions[320].op = 0;    // shift
  actions[320].state = 4; // 'state 4'

  // 'action 321'
  actions[321].op = 0;    // shift
  actions[321].state = 5; // 'state 5'

  // 'action 322'
  actions[322].op = 0;    // shift
  actions[322].state = 6; // 'state 6'

  // 'action 323'
  actions[323].op = 0;    // shift
  actions[323].state = 7; // 'state 7'

  // 'action 324'
  actions[324].op = 0;    // shift
  actions[324].state = 8; // 'state 8'

  // 'action 325'
  actions[325].op = 0;     // shift
  actions[325].state = 76; // 'state 76'

  // 'action 326'
  actions[326].op = 0;     // shift
  actions[326].state = 11; // 'state 11'

  // 'action 327'
  actions[327].op = 0;     // shift
  actions[327].state = 12; // 'state 12'

  // 'action 328'
  actions[328].op = 0;     // shift
  actions[328].state = 13; // 'state 13'

  // 'action 329'
  actions[329].op = 0;     // shift
  actions[329].state = 77; // 'state 77'

  // 'action 330'
  actions[330].op = 1;      // reduce
  actions[330].symbol = 19; // Members

  // 'action 331'
  actions[331].op = 1;      // reduce
  actions[331].symbol = 19; // Members

  // 'action 332'
  actions[332].op = 0;     // shift
  actions[332].state = 45; // 'state 45'

  // 'action 333'
  actions[333].op = 1;      // reduce
  actions[333].symbol = 20; // Member

  // 'action 334'
  actions[334].op = 1;      // reduce
  actions[334].symbol = 20; // Member

  // 'action 335'
  actions[335].op = 0;    // shift
  actions[335].state = 1; // 'state 1'

  // 'action 336'
  actions[336].op = 0;    // shift
  actions[336].state = 2; // 'state 2'

  // 'action 337'
  actions[337].op = 0;    // shift
  actions[337].state = 3; // 'state 3'

  // 'action 338'
  actions[338].op = 0;    // shift
  actions[338].state = 4; // 'state 4'

  // 'action 339'
  actions[339].op = 0;    // shift
  actions[339].state = 5; // 'state 5'

  // 'action 340'
  actions[340].op = 0;    // shift
  actions[340].state = 6; // 'state 6'

  // 'action 341'
  actions[341].op = 0;    // shift
  actions[341].state = 7; // 'state 7'

  // 'action 342'
  actions[342].op = 0;    // shift
  actions[342].state = 8; // 'state 8'

  // 'action 343'
  actions[343].op = 0;     // shift
  actions[343].state = 78; // 'state 78'

  // 'action 344'
  actions[344].op = 0;     // shift
  actions[344].state = 11; // 'state 11'

  // 'action 345'
  actions[345].op = 0;     // shift
  actions[345].state = 12; // 'state 12'

  // 'action 346'
  actions[346].op = 0;     // shift
  actions[346].state = 13; // 'state 13'

  // 'action 347'
  actions[347].op = 1;      // reduce
  actions[347].symbol = 22; // Elements

  // 'action 348'
  actions[348].op = 1;      // reduce
  actions[348].symbol = 22; // Elements

  // 'action 349'
  actions[349].op = 0;    // shift
  actions[349].state = 1; // 'state 1'

  // 'action 350'
  actions[350].op = 0;    // shift
  actions[350].state = 2; // 'state 2'

  // 'action 351'
  actions[351].op = 0;    // shift
  actions[351].state = 3; // 'state 3'

  // 'action 352'
  actions[352].op = 0;    // shift
  actions[352].state = 4; // 'state 4'

  // 'action 353'
  actions[353].op = 0;    // shift
  actions[353].state = 5; // 'state 5'

  // 'action 354'
  actions[354].op = 0;    // shift
  actions[354].state = 6; // 'state 6'

  // 'action 355'
  actions[355].op = 0;    // shift
  actions[355].state = 7; // 'state 7'

  // 'action 356'
  actions[356].op = 0;    // shift
  actions[356].state = 8; // 'state 8'

  // 'action 357'
  actions[357].op = 0;     // shift
  actions[357].state = 79; // 'state 79'

  // 'action 358'
  actions[358].op = 0;     // shift
  actions[358].state = 11; // 'state 11'

  // 'action 359'
  actions[359].op = 0;     // shift
  actions[359].state = 12; // 'state 12'

  // 'action 360'
  actions[360].op = 0;     // shift
  actions[360].state = 13; // 'state 13'

  // 'action 361'
  actions[361].op = 0;     // shift
  actions[361].state = 80; // 'state 80'

  // 'action 362'
  actions[362].op = 1;      // reduce
  actions[362].symbol = 19; // Members

  // 'action 363'
  actions[363].op = 1;      // reduce
  actions[363].symbol = 19; // Members

  // 'action 364'
  actions[364].op = 0;     // shift
  actions[364].state = 45; // 'state 45'

  // 'action 365'
  actions[365].op = 1;      // reduce
  actions[365].symbol = 20; // Member

  // 'action 366'
  actions[366].op = 1;      // reduce
  actions[366].symbol = 20; // Member

  // 'action 367'
  actions[367].op = 0;    // shift
  actions[367].state = 1; // 'state 1'

  // 'action 368'
  actions[368].op = 0;    // shift
  actions[368].state = 2; // 'state 2'

  // 'action 369'
  actions[369].op = 0;    // shift
  actions[369].state = 3; // 'state 3'

  // 'action 370'
  actions[370].op = 0;    // shift
  actions[370].state = 4; // 'state 4'

  // 'action 371'
  actions[371].op = 0;    // shift
  actions[371].state = 5; // 'state 5'

  // 'action 372'
  actions[372].op = 0;    // shift
  actions[372].state = 6; // 'state 6'

  // 'action 373'
  actions[373].op = 0;    // shift
  actions[373].state = 7; // 'state 7'

  // 'action 374'
  actions[374].op = 0;    // shift
  actions[374].state = 8; // 'state 8'

  // 'action 375'
  actions[375].op = 0;     // shift
  actions[375].state = 81; // 'state 81'

  // 'action 376'
  actions[376].op = 0;     // shift
  actions[376].state = 11; // 'state 11'

  // 'action 377'
  actions[377].op = 0;     // shift
  actions[377].state = 12; // 'state 12'

  // 'action 378'
  actions[378].op = 0;     // shift
  actions[378].state = 13; // 'state 13'

  // 'action 379'
  actions[379].op = 1;      // reduce
  actions[379].symbol = 22; // Elements

  // 'action 380'
  actions[380].op = 1;      // reduce
  actions[380].symbol = 22; // Elements

  // 'action 381'
  actions[381].op = 1;      // reduce
  actions[381].symbol = 20; // Member

  // 'action 382'
  actions[382].op = 1;      // reduce
  actions[382].symbol = 20; // Member

  // 'action 383'
  actions[383].op = 0;    // shift
  actions[383].state = 1; // 'state 1'

  // 'action 384'
  actions[384].op = 0;    // shift
  actions[384].state = 2; // 'state 2'

  // 'action 385'
  actions[385].op = 0;    // shift
  actions[385].state = 3; // 'state 3'

  // 'action 386'
  actions[386].op = 0;    // shift
  actions[386].state = 4; // 'state 4'

  // 'action 387'
  actions[387].op = 0;    // shift
  actions[387].state = 5; // 'state 5'

  // 'action 388'
  actions[388].op = 0;    // shift
  actions[388].state = 6; // 'state 6'

  // 'action 389'
  actions[389].op = 0;    // shift
  actions[389].state = 7; // 'state 7'

  // 'action 390'
  actions[390].op = 0;    // shift
  actions[390].state = 8; // 'state 8'

  // 'action 391'
  actions[391].op = 0;     // shift
  actions[391].state = 82; // 'state 82'

  // 'action 392'
  actions[392].op = 0;     // shift
  actions[392].state = 11; // 'state 11'

  // 'action 393'
  actions[393].op = 0;     // shift
  actions[393].state = 12; // 'state 12'

  // 'action 394'
  actions[394].op = 0;     // shift
  actions[394].state = 13; // 'state 13'

  // 'action 395'
  actions[395].op = 1;      // reduce
  actions[395].symbol = 20; // Member

  // 'action 396'
  actions[396].op = 1;      // reduce
  actions[396].symbol = 20; // Member

  // 'action 397'
  actions[397].op = 1;      // reduce
  actions[397].symbol = 20; // Member

  // 'action 398'
  actions[398].op = 1;      // reduce
  actions[398].symbol = 20; // Member

  // 'action 399'
  actions[399].op = 0;    // shift
  actions[399].state = 1; // 'state 1'

  // 'action 400'
  actions[400].op = 0;    // shift
  actions[400].state = 2; // 'state 2'

  // 'action 401'
  actions[401].op = 0;    // shift
  actions[401].state = 3; // 'state 3'

  // 'action 402'
  actions[402].op = 0;    // shift
  actions[402].state = 4; // 'state 4'

  // 'action 403'
  actions[403].op = 0;    // shift
  actions[403].state = 5; // 'state 5'

  // 'action 404'
  actions[404].op = 0;    // shift
  actions[404].state = 6; // 'state 6'

  // 'action 405'
  actions[405].op = 0;    // shift
  actions[405].state = 7; // 'state 7'

  // 'action 406'
  actions[406].op = 0;    // shift
  actions[406].state = 8; // 'state 8'

  // 'action 407'
  actions[407].op = 0;     // shift
  actions[407].state = 83; // 'state 83'

  // 'action 408'
  actions[408].op = 0;     // shift
  actions[408].state = 11; // 'state 11'

  // 'action 409'
  actions[409].op = 0;     // shift
  actions[409].state = 12; // 'state 12'

  // 'action 410'
  actions[410].op = 0;     // shift
  actions[410].state = 13; // 'state 13'

  // 'action 411'
  actions[411].op = 1;      // reduce
  actions[411].symbol = 20; // Member

  // 'action 412'
  actions[412].op = 1;      // reduce
  actions[412].symbol = 20; // Member

  // 'action 413'
  actions[413].op = 1;      // reduce
  actions[413].symbol = 20; // Member

  // 'action 414'
  actions[414].op = 1;      // reduce
  actions[414].symbol = 20; // Member

  // 'action 415'
  actions[415].op = 1;      // reduce
  actions[415].symbol = 20; // Member

  // 'action 416'
  actions[416].op = 1;      // reduce
  actions[416].symbol = 20; // Member
}

void init_parser(void)
{
  init_lexer();

  init_reducerState();
  init_actionsTable();
  init_gotoTable();
  init_actions();
}

static unsigned int stack[32768];
static unsigned int tree[32768];

unsigned int *parse(char *input, unsigned int l)
{
  lexer_next(input, 0, l);

  unsigned int lookahead = lexeme.state;

  stack[0] = 0;
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
    case 0:                 // shift
      tree[tp] = lookahead; // name
      tree[tp + 1] = lexeme.start;
      tree[tp + 2] = lexeme.end;
      tree[tp + 3] = 0;             // leaf nodes have no children
      tree[tp + 4] = 0;             // leaf nodes have first child
      tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

      // shift current address on top of "address stack"
      stack[sp + 1] = tp;

      sp += 2;
      stack[sp] = action->state;

      lexer_next(input, lexeme.end, l);
      lookahead = lexeme.state;

      break;
    case 1: // reduce
      stackItemsToReduce = reducerStates[lookahead * 84 * 32 + currentState * 32 + action->symbol];

      // multiply by two because our stack contains adresses and states interleaved
      sp -= stackItemsToReduce * 2;

      tree[tp] = action->symbol;         // name
      tree[tp + 1] = -1;                 // start
      tree[tp + 2] = -1;                 // end
      tree[tp + 3] = stackItemsToReduce; // number of children
      tree[tp + 4] = stack[sp + 1];      // first child
      tree[stack[sp - 1] + 5] = tp;      // next sibling

      stack[sp + 1] = tp;

      nextState = gotoTable[stack[sp] * 32 + action->symbol];
      sp += 2;
      stack[sp] = nextState;

      break;
    }

    tp += 6;
  }
}

int main()
{
  FILE *infile;
  char *buffer;
  long numbytes;

  infile = fopen("/home/zaubernerd/workspace/par-gen/package.json", "r");
  fseek(infile, 0, SEEK_END);
  numbytes = ftell(infile);
  fseek(infile, 0, SEEK_SET);
  buffer = (char *)malloc(numbytes + 1);
  fread(buffer, sizeof(char), numbytes, infile);

  init_parser();

  // printf("%.*s", numbytes, buffer);

  clock_t start = clock();
  for (int i = 0; i < 1000000; i++)
  {
    parse(buffer, numbytes);
  }
  clock_t end = clock();
  printf("Elapsed: %f seconds\n", (double)(end - start) / CLOCKS_PER_SEC);

  fclose(infile);
  free(buffer);

  return 0;
}
