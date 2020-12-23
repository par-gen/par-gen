const EOF = "@expound.EOF";
const ERROR = "@expound.ERROR";

const tokenNames = [
  "@expound.EOF",
  "@expound.ERROR",
  "WS",
  "WS",
  "WS",
  "WS",
  "LOWER_E",
  "CURLY_OPEN",
  "CURLY_CLOSE",
  "COMMA",
  "COLON",
  "PLUS",
  "NUMBER",
  "DOT",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "UPPER_E",
  "BRACKET_OPEN",
  "BRACKET_CLOSE",
  "WS",
  "WS",
  "WS",
  "WS",
  "STRING",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "TRUE",
  "NULL",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "FALSE",
  null,
  "STRING",
  "NUMBER",
  "NUMBER",
  "NUMBER",
  "TRUE",
  "NULL",
  "FALSE",
  "STRING",
  "STRING",
  "TRUE",
  "NULL",
  "FALSE",
  "STRING",
  "TRUE",
  "NULL",
  "FALSE",
  "STRING",
  "FALSE",
  "STRING",
  null,
];
const tokenIds = [
  0, // @expound.EOF
  1, // @expound.ERROR
  2, // WS
  2, // WS
  2, // WS
  2, // WS
  17, // LOWER_E
  6, // CURLY_OPEN
  7, // CURLY_CLOSE
  8, // COMMA
  9, // COLON
  18, // PLUS
  20, // NUMBER
  15, // DOT
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  16, // UPPER_E
  11, // BRACKET_OPEN
  12, // BRACKET_CLOSE
  2, // WS
  2, // WS
  2, // WS
  2, // WS
  10, // STRING
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  3, // TRUE
  5, // NULL
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  4, // FALSE
  undefined, // undefined
  10, // STRING
  20, // NUMBER
  20, // NUMBER
  20, // NUMBER
  3, // TRUE
  5, // NULL
  4, // FALSE
  10, // STRING
  10, // STRING
  3, // TRUE
  5, // NULL
  4, // FALSE
  10, // STRING
  3, // TRUE
  5, // NULL
  4, // FALSE
  10, // STRING
  4, // FALSE
  10, // STRING
  undefined, // undefined
];

const table = new Uint16Array(29696);
table.fill(28928);
table[32] = 6400; // BRACKET_OPEN
table[10] = 6656; // BRACKET_CLOSE
table[13] = 6912; // WS
table[9] = 7168; // WS
table[288] = 6400; // BRACKET_OPEN
table[266] = 6656; // BRACKET_CLOSE
table[269] = 6912; // WS
table[265] = 7168; // WS
table[544] = 6400; // BRACKET_OPEN
table[522] = 6656; // BRACKET_CLOSE
table[525] = 6912; // WS
table[521] = 7168; // WS
table[800] = 6400; // BRACKET_OPEN
table[778] = 6656; // BRACKET_CLOSE
table[781] = 6912; // WS
table[777] = 7168; // WS
table[2608] = 7680; // WS
table[2609] = 7936; // STRING
table[2610] = 8192; // NUMBER
table[2611] = 8448; // NUMBER
table[2612] = 8704; // NUMBER
table[2613] = 8960; // NUMBER
table[2614] = 9216; // NUMBER
table[2615] = 9472; // NUMBER
table[2616] = 9728; // NUMBER
table[2617] = 9984; // NUMBER
table[3173] = 24320; // undefined
table[3118] = 24832; // NUMBER
table[3141] = 24320; // undefined
table[3429] = 24320; // undefined
table[3374] = 24832; // NUMBER
table[3376] = 10240; // NUMBER
table[3377] = 10496; // NUMBER
table[3378] = 10752; // NUMBER
table[3379] = 11008; // NUMBER
table[3380] = 11264; // NUMBER
table[3381] = 11520; // NUMBER
table[3382] = 11776; // NUMBER
table[3383] = 12032; // NUMBER
table[3384] = 12288; // NUMBER
table[3385] = 12544; // NUMBER
table[3397] = 24320; // undefined
table[3685] = 24320; // undefined
table[3630] = 24832; // NUMBER
table[3632] = 10240; // NUMBER
table[3633] = 10496; // NUMBER
table[3634] = 10752; // NUMBER
table[3635] = 11008; // NUMBER
table[3636] = 11264; // NUMBER
table[3637] = 11520; // NUMBER
table[3638] = 11776; // NUMBER
table[3639] = 12032; // NUMBER
table[3640] = 12288; // NUMBER
table[3641] = 12544; // NUMBER
table[3653] = 24320; // undefined
table[3941] = 24320; // undefined
table[3886] = 24832; // NUMBER
table[3888] = 10240; // NUMBER
table[3889] = 10496; // NUMBER
table[3890] = 10752; // NUMBER
table[3891] = 11008; // NUMBER
table[3892] = 11264; // NUMBER
table[3893] = 11520; // NUMBER
table[3894] = 11776; // NUMBER
table[3895] = 12032; // NUMBER
table[3896] = 12288; // NUMBER
table[3897] = 12544; // NUMBER
table[3909] = 24320; // undefined
table[4197] = 24320; // undefined
table[4142] = 24832; // NUMBER
table[4144] = 10240; // NUMBER
table[4145] = 10496; // NUMBER
table[4146] = 10752; // NUMBER
table[4147] = 11008; // NUMBER
table[4148] = 11264; // NUMBER
table[4149] = 11520; // NUMBER
table[4150] = 11776; // NUMBER
table[4151] = 12032; // NUMBER
table[4152] = 12288; // NUMBER
table[4153] = 12544; // NUMBER
table[4165] = 24320; // undefined
table[4453] = 24320; // undefined
table[4398] = 24832; // NUMBER
table[4400] = 10240; // NUMBER
table[4401] = 10496; // NUMBER
table[4402] = 10752; // NUMBER
table[4403] = 11008; // NUMBER
table[4404] = 11264; // NUMBER
table[4405] = 11520; // NUMBER
table[4406] = 11776; // NUMBER
table[4407] = 12032; // NUMBER
table[4408] = 12288; // NUMBER
table[4409] = 12544; // NUMBER
table[4421] = 24320; // undefined
table[4709] = 24320; // undefined
table[4654] = 24832; // NUMBER
table[4656] = 10240; // NUMBER
table[4657] = 10496; // NUMBER
table[4658] = 10752; // NUMBER
table[4659] = 11008; // NUMBER
table[4660] = 11264; // NUMBER
table[4661] = 11520; // NUMBER
table[4662] = 11776; // NUMBER
table[4663] = 12032; // NUMBER
table[4664] = 12288; // NUMBER
table[4665] = 12544; // NUMBER
table[4677] = 24320; // undefined
table[4965] = 24320; // undefined
table[4910] = 24832; // NUMBER
table[4912] = 10240; // NUMBER
table[4913] = 10496; // NUMBER
table[4914] = 10752; // NUMBER
table[4915] = 11008; // NUMBER
table[4916] = 11264; // NUMBER
table[4917] = 11520; // NUMBER
table[4918] = 11776; // NUMBER
table[4919] = 12032; // NUMBER
table[4920] = 12288; // NUMBER
table[4921] = 12544; // NUMBER
table[4933] = 24320; // undefined
table[5221] = 24320; // undefined
table[5166] = 24832; // NUMBER
table[5168] = 10240; // NUMBER
table[5169] = 10496; // NUMBER
table[5170] = 10752; // NUMBER
table[5171] = 11008; // NUMBER
table[5172] = 11264; // NUMBER
table[5173] = 11520; // NUMBER
table[5174] = 11776; // NUMBER
table[5175] = 12032; // NUMBER
table[5176] = 12288; // NUMBER
table[5177] = 12544; // NUMBER
table[5189] = 24320; // undefined
table[5477] = 24320; // undefined
table[5422] = 24832; // NUMBER
table[5424] = 10240; // NUMBER
table[5425] = 10496; // NUMBER
table[5426] = 10752; // NUMBER
table[5427] = 11008; // NUMBER
table[5428] = 11264; // NUMBER
table[5429] = 11520; // NUMBER
table[5430] = 11776; // NUMBER
table[5431] = 12032; // NUMBER
table[5432] = 12288; // NUMBER
table[5433] = 12544; // NUMBER
table[5445] = 24320; // undefined
table[6432] = 6400; // BRACKET_OPEN
table[6410] = 6656; // BRACKET_CLOSE
table[6413] = 6912; // WS
table[6409] = 7168; // WS
table[6688] = 6400; // BRACKET_OPEN
table[6666] = 6656; // BRACKET_CLOSE
table[6669] = 6912; // WS
table[6665] = 7168; // WS
table[6944] = 6400; // BRACKET_OPEN
table[6922] = 6656; // BRACKET_CLOSE
table[6925] = 6912; // WS
table[6921] = 7168; // WS
table[7200] = 6400; // BRACKET_OPEN
table[7178] = 6656; // BRACKET_CLOSE
table[7181] = 6912; // WS
table[7177] = 7168; // WS
table[7781] = 24320; // undefined
table[7726] = 24832; // NUMBER
table[7749] = 24320; // undefined
table[8037] = 24320; // undefined
table[7982] = 24832; // NUMBER
table[7984] = 10240; // NUMBER
table[7985] = 10496; // NUMBER
table[7986] = 10752; // NUMBER
table[7987] = 11008; // NUMBER
table[7988] = 11264; // NUMBER
table[7989] = 11520; // NUMBER
table[7990] = 11776; // NUMBER
table[7991] = 12032; // NUMBER
table[7992] = 12288; // NUMBER
table[7993] = 12544; // NUMBER
table[8005] = 24320; // undefined
table[8293] = 24320; // undefined
table[8238] = 24832; // NUMBER
table[8240] = 10240; // NUMBER
table[8241] = 10496; // NUMBER
table[8242] = 10752; // NUMBER
table[8243] = 11008; // NUMBER
table[8244] = 11264; // NUMBER
table[8245] = 11520; // NUMBER
table[8246] = 11776; // NUMBER
table[8247] = 12032; // NUMBER
table[8248] = 12288; // NUMBER
table[8249] = 12544; // NUMBER
table[8261] = 24320; // undefined
table[8549] = 24320; // undefined
table[8494] = 24832; // NUMBER
table[8496] = 10240; // NUMBER
table[8497] = 10496; // NUMBER
table[8498] = 10752; // NUMBER
table[8499] = 11008; // NUMBER
table[8500] = 11264; // NUMBER
table[8501] = 11520; // NUMBER
table[8502] = 11776; // NUMBER
table[8503] = 12032; // NUMBER
table[8504] = 12288; // NUMBER
table[8505] = 12544; // NUMBER
table[8517] = 24320; // undefined
table[8805] = 24320; // undefined
table[8750] = 24832; // NUMBER
table[8752] = 10240; // NUMBER
table[8753] = 10496; // NUMBER
table[8754] = 10752; // NUMBER
table[8755] = 11008; // NUMBER
table[8756] = 11264; // NUMBER
table[8757] = 11520; // NUMBER
table[8758] = 11776; // NUMBER
table[8759] = 12032; // NUMBER
table[8760] = 12288; // NUMBER
table[8761] = 12544; // NUMBER
table[8773] = 24320; // undefined
table[9061] = 24320; // undefined
table[9006] = 24832; // NUMBER
table[9008] = 10240; // NUMBER
table[9009] = 10496; // NUMBER
table[9010] = 10752; // NUMBER
table[9011] = 11008; // NUMBER
table[9012] = 11264; // NUMBER
table[9013] = 11520; // NUMBER
table[9014] = 11776; // NUMBER
table[9015] = 12032; // NUMBER
table[9016] = 12288; // NUMBER
table[9017] = 12544; // NUMBER
table[9029] = 24320; // undefined
table[9317] = 24320; // undefined
table[9262] = 24832; // NUMBER
table[9264] = 10240; // NUMBER
table[9265] = 10496; // NUMBER
table[9266] = 10752; // NUMBER
table[9267] = 11008; // NUMBER
table[9268] = 11264; // NUMBER
table[9269] = 11520; // NUMBER
table[9270] = 11776; // NUMBER
table[9271] = 12032; // NUMBER
table[9272] = 12288; // NUMBER
table[9273] = 12544; // NUMBER
table[9285] = 24320; // undefined
table[9573] = 24320; // undefined
table[9518] = 24832; // NUMBER
table[9520] = 10240; // NUMBER
table[9521] = 10496; // NUMBER
table[9522] = 10752; // NUMBER
table[9523] = 11008; // NUMBER
table[9524] = 11264; // NUMBER
table[9525] = 11520; // NUMBER
table[9526] = 11776; // NUMBER
table[9527] = 12032; // NUMBER
table[9528] = 12288; // NUMBER
table[9529] = 12544; // NUMBER
table[9541] = 24320; // undefined
table[9829] = 24320; // undefined
table[9774] = 24832; // NUMBER
table[9776] = 10240; // NUMBER
table[9777] = 10496; // NUMBER
table[9778] = 10752; // NUMBER
table[9779] = 11008; // NUMBER
table[9780] = 11264; // NUMBER
table[9781] = 11520; // NUMBER
table[9782] = 11776; // NUMBER
table[9783] = 12032; // NUMBER
table[9784] = 12288; // NUMBER
table[9785] = 12544; // NUMBER
table[9797] = 24320; // undefined
table[10085] = 24320; // undefined
table[10030] = 24832; // NUMBER
table[10032] = 10240; // NUMBER
table[10033] = 10496; // NUMBER
table[10034] = 10752; // NUMBER
table[10035] = 11008; // NUMBER
table[10036] = 11264; // NUMBER
table[10037] = 11520; // NUMBER
table[10038] = 11776; // NUMBER
table[10039] = 12032; // NUMBER
table[10040] = 12288; // NUMBER
table[10041] = 12544; // NUMBER
table[10053] = 24320; // undefined
table[10341] = 24320; // undefined
table[10286] = 24832; // NUMBER
table[10288] = 10240; // NUMBER
table[10289] = 10496; // NUMBER
table[10290] = 10752; // NUMBER
table[10291] = 11008; // NUMBER
table[10292] = 11264; // NUMBER
table[10293] = 11520; // NUMBER
table[10294] = 11776; // NUMBER
table[10295] = 12032; // NUMBER
table[10296] = 12288; // NUMBER
table[10297] = 12544; // NUMBER
table[10309] = 24320; // undefined
table[10597] = 24320; // undefined
table[10542] = 24832; // NUMBER
table[10544] = 10240; // NUMBER
table[10545] = 10496; // NUMBER
table[10546] = 10752; // NUMBER
table[10547] = 11008; // NUMBER
table[10548] = 11264; // NUMBER
table[10549] = 11520; // NUMBER
table[10550] = 11776; // NUMBER
table[10551] = 12032; // NUMBER
table[10552] = 12288; // NUMBER
table[10553] = 12544; // NUMBER
table[10565] = 24320; // undefined
table[10853] = 24320; // undefined
table[10798] = 24832; // NUMBER
table[10800] = 10240; // NUMBER
table[10801] = 10496; // NUMBER
table[10802] = 10752; // NUMBER
table[10803] = 11008; // NUMBER
table[10804] = 11264; // NUMBER
table[10805] = 11520; // NUMBER
table[10806] = 11776; // NUMBER
table[10807] = 12032; // NUMBER
table[10808] = 12288; // NUMBER
table[10809] = 12544; // NUMBER
table[10821] = 24320; // undefined
table[11109] = 24320; // undefined
table[11054] = 24832; // NUMBER
table[11056] = 10240; // NUMBER
table[11057] = 10496; // NUMBER
table[11058] = 10752; // NUMBER
table[11059] = 11008; // NUMBER
table[11060] = 11264; // NUMBER
table[11061] = 11520; // NUMBER
table[11062] = 11776; // NUMBER
table[11063] = 12032; // NUMBER
table[11064] = 12288; // NUMBER
table[11065] = 12544; // NUMBER
table[11077] = 24320; // undefined
table[11365] = 24320; // undefined
table[11310] = 24832; // NUMBER
table[11312] = 10240; // NUMBER
table[11313] = 10496; // NUMBER
table[11314] = 10752; // NUMBER
table[11315] = 11008; // NUMBER
table[11316] = 11264; // NUMBER
table[11317] = 11520; // NUMBER
table[11318] = 11776; // NUMBER
table[11319] = 12032; // NUMBER
table[11320] = 12288; // NUMBER
table[11321] = 12544; // NUMBER
table[11333] = 24320; // undefined
table[11621] = 24320; // undefined
table[11566] = 24832; // NUMBER
table[11568] = 10240; // NUMBER
table[11569] = 10496; // NUMBER
table[11570] = 10752; // NUMBER
table[11571] = 11008; // NUMBER
table[11572] = 11264; // NUMBER
table[11573] = 11520; // NUMBER
table[11574] = 11776; // NUMBER
table[11575] = 12032; // NUMBER
table[11576] = 12288; // NUMBER
table[11577] = 12544; // NUMBER
table[11589] = 24320; // undefined
table[11877] = 24320; // undefined
table[11822] = 24832; // NUMBER
table[11824] = 10240; // NUMBER
table[11825] = 10496; // NUMBER
table[11826] = 10752; // NUMBER
table[11827] = 11008; // NUMBER
table[11828] = 11264; // NUMBER
table[11829] = 11520; // NUMBER
table[11830] = 11776; // NUMBER
table[11831] = 12032; // NUMBER
table[11832] = 12288; // NUMBER
table[11833] = 12544; // NUMBER
table[11845] = 24320; // undefined
table[12133] = 24320; // undefined
table[12078] = 24832; // NUMBER
table[12080] = 10240; // NUMBER
table[12081] = 10496; // NUMBER
table[12082] = 10752; // NUMBER
table[12083] = 11008; // NUMBER
table[12084] = 11264; // NUMBER
table[12085] = 11520; // NUMBER
table[12086] = 11776; // NUMBER
table[12087] = 12032; // NUMBER
table[12088] = 12288; // NUMBER
table[12089] = 12544; // NUMBER
table[12101] = 24320; // undefined
table[12389] = 24320; // undefined
table[12334] = 24832; // NUMBER
table[12336] = 10240; // NUMBER
table[12337] = 10496; // NUMBER
table[12338] = 10752; // NUMBER
table[12339] = 11008; // NUMBER
table[12340] = 11264; // NUMBER
table[12341] = 11520; // NUMBER
table[12342] = 11776; // NUMBER
table[12343] = 12032; // NUMBER
table[12344] = 12288; // NUMBER
table[12345] = 12544; // NUMBER
table[12357] = 24320; // undefined
table[12645] = 24320; // undefined
table[12590] = 24832; // NUMBER
table[12592] = 10240; // NUMBER
table[12593] = 10496; // NUMBER
table[12594] = 10752; // NUMBER
table[12595] = 11008; // NUMBER
table[12596] = 11264; // NUMBER
table[12597] = 11520; // NUMBER
table[12598] = 11776; // NUMBER
table[12599] = 12032; // NUMBER
table[12600] = 12288; // NUMBER
table[12601] = 12544; // NUMBER
table[12613] = 24320; // undefined
table[13104] = 18432; // TRUE
table[13105] = 18688; // NULL
table[13106] = 18944; // NUMBER
table[13107] = 19200; // NUMBER
table[13108] = 19456; // NUMBER
table[13109] = 19712; // NUMBER
table[13110] = 19968; // NUMBER
table[13111] = 20224; // NUMBER
table[13112] = 20480; // NUMBER
table[13113] = 20736; // NUMBER
table[13360] = 18432; // TRUE
table[13361] = 18688; // NULL
table[13362] = 18944; // NUMBER
table[13363] = 19200; // NUMBER
table[13364] = 19456; // NUMBER
table[13365] = 19712; // NUMBER
table[13366] = 19968; // NUMBER
table[13367] = 20224; // NUMBER
table[13368] = 20480; // NUMBER
table[13369] = 20736; // NUMBER
table[13616] = 18432; // TRUE
table[13617] = 18688; // NULL
table[13618] = 18944; // NUMBER
table[13619] = 19200; // NUMBER
table[13620] = 19456; // NUMBER
table[13621] = 19712; // NUMBER
table[13622] = 19968; // NUMBER
table[13623] = 20224; // NUMBER
table[13624] = 20480; // NUMBER
table[13625] = 20736; // NUMBER
table[13872] = 18432; // TRUE
table[13873] = 18688; // NULL
table[13874] = 18944; // NUMBER
table[13875] = 19200; // NUMBER
table[13876] = 19456; // NUMBER
table[13877] = 19712; // NUMBER
table[13878] = 19968; // NUMBER
table[13879] = 20224; // NUMBER
table[13880] = 20480; // NUMBER
table[13881] = 20736; // NUMBER
table[14128] = 18432; // TRUE
table[14129] = 18688; // NULL
table[14130] = 18944; // NUMBER
table[14131] = 19200; // NUMBER
table[14132] = 19456; // NUMBER
table[14133] = 19712; // NUMBER
table[14134] = 19968; // NUMBER
table[14135] = 20224; // NUMBER
table[14136] = 20480; // NUMBER
table[14137] = 20736; // NUMBER
table[14384] = 18432; // TRUE
table[14385] = 18688; // NULL
table[14386] = 18944; // NUMBER
table[14387] = 19200; // NUMBER
table[14388] = 19456; // NUMBER
table[14389] = 19712; // NUMBER
table[14390] = 19968; // NUMBER
table[14391] = 20224; // NUMBER
table[14392] = 20480; // NUMBER
table[14393] = 20736; // NUMBER
table[14640] = 18432; // TRUE
table[14641] = 18688; // NULL
table[14642] = 18944; // NUMBER
table[14643] = 19200; // NUMBER
table[14644] = 19456; // NUMBER
table[14645] = 19712; // NUMBER
table[14646] = 19968; // NUMBER
table[14647] = 20224; // NUMBER
table[14648] = 20480; // NUMBER
table[14649] = 20736; // NUMBER
table[14896] = 18432; // TRUE
table[14897] = 18688; // NULL
table[14898] = 18944; // NUMBER
table[14899] = 19200; // NUMBER
table[14900] = 19456; // NUMBER
table[14901] = 19712; // NUMBER
table[14902] = 19968; // NUMBER
table[14903] = 20224; // NUMBER
table[14904] = 20480; // NUMBER
table[14905] = 20736; // NUMBER
table[15152] = 18432; // TRUE
table[15153] = 18688; // NULL
table[15154] = 18944; // NUMBER
table[15155] = 19200; // NUMBER
table[15156] = 19456; // NUMBER
table[15157] = 19712; // NUMBER
table[15158] = 19968; // NUMBER
table[15159] = 20224; // NUMBER
table[15160] = 20480; // NUMBER
table[15161] = 20736; // NUMBER
table[15461] = 24320; // undefined
table[15408] = 20992; // NUMBER
table[15409] = 21248; // NUMBER
table[15410] = 21504; // NUMBER
table[15411] = 21760; // NUMBER
table[15412] = 22016; // NUMBER
table[15413] = 22272; // NUMBER
table[15414] = 22528; // NUMBER
table[15415] = 22784; // NUMBER
table[15416] = 23040; // NUMBER
table[15417] = 23296; // NUMBER
table[15429] = 24320; // undefined
table[15717] = 24320; // undefined
table[15664] = 20992; // NUMBER
table[15665] = 21248; // NUMBER
table[15666] = 21504; // NUMBER
table[15667] = 21760; // NUMBER
table[15668] = 22016; // NUMBER
table[15669] = 22272; // NUMBER
table[15670] = 22528; // NUMBER
table[15671] = 22784; // NUMBER
table[15672] = 23040; // NUMBER
table[15673] = 23296; // NUMBER
table[15685] = 24320; // undefined
table[15973] = 24320; // undefined
table[15920] = 20992; // NUMBER
table[15921] = 21248; // NUMBER
table[15922] = 21504; // NUMBER
table[15923] = 21760; // NUMBER
table[15924] = 22016; // NUMBER
table[15925] = 22272; // NUMBER
table[15926] = 22528; // NUMBER
table[15927] = 22784; // NUMBER
table[15928] = 23040; // NUMBER
table[15929] = 23296; // NUMBER
table[15941] = 24320; // undefined
table[16229] = 24320; // undefined
table[16176] = 20992; // NUMBER
table[16177] = 21248; // NUMBER
table[16178] = 21504; // NUMBER
table[16179] = 21760; // NUMBER
table[16180] = 22016; // NUMBER
table[16181] = 22272; // NUMBER
table[16182] = 22528; // NUMBER
table[16183] = 22784; // NUMBER
table[16184] = 23040; // NUMBER
table[16185] = 23296; // NUMBER
table[16197] = 24320; // undefined
table[16485] = 24320; // undefined
table[16432] = 20992; // NUMBER
table[16433] = 21248; // NUMBER
table[16434] = 21504; // NUMBER
table[16435] = 21760; // NUMBER
table[16436] = 22016; // NUMBER
table[16437] = 22272; // NUMBER
table[16438] = 22528; // NUMBER
table[16439] = 22784; // NUMBER
table[16440] = 23040; // NUMBER
table[16441] = 23296; // NUMBER
table[16453] = 24320; // undefined
table[16741] = 24320; // undefined
table[16688] = 20992; // NUMBER
table[16689] = 21248; // NUMBER
table[16690] = 21504; // NUMBER
table[16691] = 21760; // NUMBER
table[16692] = 22016; // NUMBER
table[16693] = 22272; // NUMBER
table[16694] = 22528; // NUMBER
table[16695] = 22784; // NUMBER
table[16696] = 23040; // NUMBER
table[16697] = 23296; // NUMBER
table[16709] = 24320; // undefined
table[16997] = 24320; // undefined
table[16944] = 20992; // NUMBER
table[16945] = 21248; // NUMBER
table[16946] = 21504; // NUMBER
table[16947] = 21760; // NUMBER
table[16948] = 22016; // NUMBER
table[16949] = 22272; // NUMBER
table[16950] = 22528; // NUMBER
table[16951] = 22784; // NUMBER
table[16952] = 23040; // NUMBER
table[16953] = 23296; // NUMBER
table[16965] = 24320; // undefined
table[17253] = 24320; // undefined
table[17200] = 20992; // NUMBER
table[17201] = 21248; // NUMBER
table[17202] = 21504; // NUMBER
table[17203] = 21760; // NUMBER
table[17204] = 22016; // NUMBER
table[17205] = 22272; // NUMBER
table[17206] = 22528; // NUMBER
table[17207] = 22784; // NUMBER
table[17208] = 23040; // NUMBER
table[17209] = 23296; // NUMBER
table[17221] = 24320; // undefined
table[17509] = 24320; // undefined
table[17456] = 20992; // NUMBER
table[17457] = 21248; // NUMBER
table[17458] = 21504; // NUMBER
table[17459] = 21760; // NUMBER
table[17460] = 22016; // NUMBER
table[17461] = 22272; // NUMBER
table[17462] = 22528; // NUMBER
table[17463] = 22784; // NUMBER
table[17464] = 23040; // NUMBER
table[17465] = 23296; // NUMBER
table[17477] = 24320; // undefined
table[17765] = 24320; // undefined
table[17712] = 20992; // NUMBER
table[17713] = 21248; // NUMBER
table[17714] = 21504; // NUMBER
table[17715] = 21760; // NUMBER
table[17716] = 22016; // NUMBER
table[17717] = 22272; // NUMBER
table[17718] = 22528; // NUMBER
table[17719] = 22784; // NUMBER
table[17720] = 23040; // NUMBER
table[17721] = 23296; // NUMBER
table[17733] = 24320; // undefined
table[18480] = 18432; // TRUE
table[18481] = 18688; // NULL
table[18482] = 18944; // NUMBER
table[18483] = 19200; // NUMBER
table[18484] = 19456; // NUMBER
table[18485] = 19712; // NUMBER
table[18486] = 19968; // NUMBER
table[18487] = 20224; // NUMBER
table[18488] = 20480; // NUMBER
table[18489] = 20736; // NUMBER
table[18736] = 18432; // TRUE
table[18737] = 18688; // NULL
table[18738] = 18944; // NUMBER
table[18739] = 19200; // NUMBER
table[18740] = 19456; // NUMBER
table[18741] = 19712; // NUMBER
table[18742] = 19968; // NUMBER
table[18743] = 20224; // NUMBER
table[18744] = 20480; // NUMBER
table[18745] = 20736; // NUMBER
table[18992] = 18432; // TRUE
table[18993] = 18688; // NULL
table[18994] = 18944; // NUMBER
table[18995] = 19200; // NUMBER
table[18996] = 19456; // NUMBER
table[18997] = 19712; // NUMBER
table[18998] = 19968; // NUMBER
table[18999] = 20224; // NUMBER
table[19000] = 20480; // NUMBER
table[19001] = 20736; // NUMBER
table[19248] = 18432; // TRUE
table[19249] = 18688; // NULL
table[19250] = 18944; // NUMBER
table[19251] = 19200; // NUMBER
table[19252] = 19456; // NUMBER
table[19253] = 19712; // NUMBER
table[19254] = 19968; // NUMBER
table[19255] = 20224; // NUMBER
table[19256] = 20480; // NUMBER
table[19257] = 20736; // NUMBER
table[19504] = 18432; // TRUE
table[19505] = 18688; // NULL
table[19506] = 18944; // NUMBER
table[19507] = 19200; // NUMBER
table[19508] = 19456; // NUMBER
table[19509] = 19712; // NUMBER
table[19510] = 19968; // NUMBER
table[19511] = 20224; // NUMBER
table[19512] = 20480; // NUMBER
table[19513] = 20736; // NUMBER
table[19760] = 18432; // TRUE
table[19761] = 18688; // NULL
table[19762] = 18944; // NUMBER
table[19763] = 19200; // NUMBER
table[19764] = 19456; // NUMBER
table[19765] = 19712; // NUMBER
table[19766] = 19968; // NUMBER
table[19767] = 20224; // NUMBER
table[19768] = 20480; // NUMBER
table[19769] = 20736; // NUMBER
table[20016] = 18432; // TRUE
table[20017] = 18688; // NULL
table[20018] = 18944; // NUMBER
table[20019] = 19200; // NUMBER
table[20020] = 19456; // NUMBER
table[20021] = 19712; // NUMBER
table[20022] = 19968; // NUMBER
table[20023] = 20224; // NUMBER
table[20024] = 20480; // NUMBER
table[20025] = 20736; // NUMBER
table[20272] = 18432; // TRUE
table[20273] = 18688; // NULL
table[20274] = 18944; // NUMBER
table[20275] = 19200; // NUMBER
table[20276] = 19456; // NUMBER
table[20277] = 19712; // NUMBER
table[20278] = 19968; // NUMBER
table[20279] = 20224; // NUMBER
table[20280] = 20480; // NUMBER
table[20281] = 20736; // NUMBER
table[20528] = 18432; // TRUE
table[20529] = 18688; // NULL
table[20530] = 18944; // NUMBER
table[20531] = 19200; // NUMBER
table[20532] = 19456; // NUMBER
table[20533] = 19712; // NUMBER
table[20534] = 19968; // NUMBER
table[20535] = 20224; // NUMBER
table[20536] = 20480; // NUMBER
table[20537] = 20736; // NUMBER
table[20784] = 18432; // TRUE
table[20785] = 18688; // NULL
table[20786] = 18944; // NUMBER
table[20787] = 19200; // NUMBER
table[20788] = 19456; // NUMBER
table[20789] = 19712; // NUMBER
table[20790] = 19968; // NUMBER
table[20791] = 20224; // NUMBER
table[20792] = 20480; // NUMBER
table[20793] = 20736; // NUMBER
table[21093] = 24320; // undefined
table[21040] = 20992; // NUMBER
table[21041] = 21248; // NUMBER
table[21042] = 21504; // NUMBER
table[21043] = 21760; // NUMBER
table[21044] = 22016; // NUMBER
table[21045] = 22272; // NUMBER
table[21046] = 22528; // NUMBER
table[21047] = 22784; // NUMBER
table[21048] = 23040; // NUMBER
table[21049] = 23296; // NUMBER
table[21061] = 24320; // undefined
table[21349] = 24320; // undefined
table[21296] = 20992; // NUMBER
table[21297] = 21248; // NUMBER
table[21298] = 21504; // NUMBER
table[21299] = 21760; // NUMBER
table[21300] = 22016; // NUMBER
table[21301] = 22272; // NUMBER
table[21302] = 22528; // NUMBER
table[21303] = 22784; // NUMBER
table[21304] = 23040; // NUMBER
table[21305] = 23296; // NUMBER
table[21317] = 24320; // undefined
table[21605] = 24320; // undefined
table[21552] = 20992; // NUMBER
table[21553] = 21248; // NUMBER
table[21554] = 21504; // NUMBER
table[21555] = 21760; // NUMBER
table[21556] = 22016; // NUMBER
table[21557] = 22272; // NUMBER
table[21558] = 22528; // NUMBER
table[21559] = 22784; // NUMBER
table[21560] = 23040; // NUMBER
table[21561] = 23296; // NUMBER
table[21573] = 24320; // undefined
table[21861] = 24320; // undefined
table[21808] = 20992; // NUMBER
table[21809] = 21248; // NUMBER
table[21810] = 21504; // NUMBER
table[21811] = 21760; // NUMBER
table[21812] = 22016; // NUMBER
table[21813] = 22272; // NUMBER
table[21814] = 22528; // NUMBER
table[21815] = 22784; // NUMBER
table[21816] = 23040; // NUMBER
table[21817] = 23296; // NUMBER
table[21829] = 24320; // undefined
table[22117] = 24320; // undefined
table[22064] = 20992; // NUMBER
table[22065] = 21248; // NUMBER
table[22066] = 21504; // NUMBER
table[22067] = 21760; // NUMBER
table[22068] = 22016; // NUMBER
table[22069] = 22272; // NUMBER
table[22070] = 22528; // NUMBER
table[22071] = 22784; // NUMBER
table[22072] = 23040; // NUMBER
table[22073] = 23296; // NUMBER
table[22085] = 24320; // undefined
table[22373] = 24320; // undefined
table[22320] = 20992; // NUMBER
table[22321] = 21248; // NUMBER
table[22322] = 21504; // NUMBER
table[22323] = 21760; // NUMBER
table[22324] = 22016; // NUMBER
table[22325] = 22272; // NUMBER
table[22326] = 22528; // NUMBER
table[22327] = 22784; // NUMBER
table[22328] = 23040; // NUMBER
table[22329] = 23296; // NUMBER
table[22341] = 24320; // undefined
table[22629] = 24320; // undefined
table[22576] = 20992; // NUMBER
table[22577] = 21248; // NUMBER
table[22578] = 21504; // NUMBER
table[22579] = 21760; // NUMBER
table[22580] = 22016; // NUMBER
table[22581] = 22272; // NUMBER
table[22582] = 22528; // NUMBER
table[22583] = 22784; // NUMBER
table[22584] = 23040; // NUMBER
table[22585] = 23296; // NUMBER
table[22597] = 24320; // undefined
table[22885] = 24320; // undefined
table[22832] = 20992; // NUMBER
table[22833] = 21248; // NUMBER
table[22834] = 21504; // NUMBER
table[22835] = 21760; // NUMBER
table[22836] = 22016; // NUMBER
table[22837] = 22272; // NUMBER
table[22838] = 22528; // NUMBER
table[22839] = 22784; // NUMBER
table[22840] = 23040; // NUMBER
table[22841] = 23296; // NUMBER
table[22853] = 24320; // undefined
table[23141] = 24320; // undefined
table[23088] = 20992; // NUMBER
table[23089] = 21248; // NUMBER
table[23090] = 21504; // NUMBER
table[23091] = 21760; // NUMBER
table[23092] = 22016; // NUMBER
table[23093] = 22272; // NUMBER
table[23094] = 22528; // NUMBER
table[23095] = 22784; // NUMBER
table[23096] = 23040; // NUMBER
table[23097] = 23296; // NUMBER
table[23109] = 24320; // undefined
table[23397] = 24320; // undefined
table[23344] = 20992; // NUMBER
table[23345] = 21248; // NUMBER
table[23346] = 21504; // NUMBER
table[23347] = 21760; // NUMBER
table[23348] = 22016; // NUMBER
table[23349] = 22272; // NUMBER
table[23350] = 22528; // NUMBER
table[23351] = 22784; // NUMBER
table[23352] = 23040; // NUMBER
table[23353] = 23296; // NUMBER
table[23365] = 24320; // undefined
table[23840] = 0; // @expound.EOF
table[23818] = 256; // @expound.ERROR
table[23821] = 512; // WS
table[23817] = 768; // WS
table[23924] = 27392; // FALSE
table[23909] = 1024; // WS
table[23910] = 28416; // FALSE
table[23918] = 27648; // STRING
table[23931] = 1280; // WS
table[23933] = 1536; // LOWER_E
table[23852] = 1792; // CURLY_OPEN
table[23866] = 2048; // CURLY_CLOSE
table[23842] = 24064; // FALSE
table[23851] = 2304; // COMMA
table[23853] = 2560; // COLON
table[23854] = 2816; // PLUS
table[23856] = 3072; // NUMBER
table[23857] = 3328; // DOT
table[23858] = 3584; // NUMBER
table[23859] = 3840; // NUMBER
table[23860] = 4096; // NUMBER
table[23861] = 4352; // NUMBER
table[23862] = 4608; // NUMBER
table[23863] = 4864; // NUMBER
table[23864] = 5120; // NUMBER
table[23865] = 5376; // NUMBER
table[23877] = 5632; // NUMBER
table[23899] = 5888; // NUMBER
table[23901] = 6144; // UPPER_E
table[24096] = 24064; // FALSE
table[24180] = 24064; // FALSE
table[24178] = 24064; // FALSE
table[24181] = 24064; // FALSE
table[24165] = 24064; // FALSE
table[24166] = 24064; // FALSE
table[24161] = 24064; // FALSE
table[24172] = 24064; // FALSE
table[24179] = 24064; // FALSE
table[24174] = 24064; // FALSE
table[24187] = 24064; // FALSE
table[24189] = 24064; // FALSE
table[24108] = 24064; // FALSE
table[24122] = 24064; // FALSE
table[24098] = 7424; // WS
table[24064] = 24064; // FALSE
table[24065] = 24064; // FALSE
table[24066] = 24064; // FALSE
table[24067] = 24064; // FALSE
table[24068] = 24064; // FALSE
table[24069] = 24064; // FALSE
table[24070] = 24064; // FALSE
table[24071] = 24064; // FALSE
table[24156] = 25856; // NULL
table[24075] = 24064; // FALSE
table[24078] = 24064; // FALSE
table[24079] = 24064; // FALSE
table[24080] = 24064; // FALSE
table[24081] = 24064; // FALSE
table[24082] = 24064; // FALSE
table[24083] = 24064; // FALSE
table[24084] = 24064; // FALSE
table[24085] = 24064; // FALSE
table[24086] = 24064; // FALSE
table[24087] = 24064; // FALSE
table[24088] = 24064; // FALSE
table[24089] = 24064; // FALSE
table[24090] = 24064; // FALSE
table[24091] = 24064; // FALSE
table[24092] = 24064; // FALSE
table[24093] = 24064; // FALSE
table[24094] = 24064; // FALSE
table[24095] = 24064; // FALSE
table[24097] = 24064; // FALSE
table[24099] = 24064; // FALSE
table[24100] = 24064; // FALSE
table[24101] = 24064; // FALSE
table[24102] = 24064; // FALSE
table[24103] = 24064; // FALSE
table[24104] = 24064; // FALSE
table[24105] = 24064; // FALSE
table[24106] = 24064; // FALSE
table[24107] = 24064; // FALSE
table[24109] = 24064; // FALSE
table[24110] = 24064; // FALSE
table[24111] = 24064; // FALSE
table[24112] = 24064; // FALSE
table[24113] = 24064; // FALSE
table[24114] = 24064; // FALSE
table[24115] = 24064; // FALSE
table[24116] = 24064; // FALSE
table[24117] = 24064; // FALSE
table[24118] = 24064; // FALSE
table[24119] = 24064; // FALSE
table[24120] = 24064; // FALSE
table[24121] = 24064; // FALSE
table[24123] = 24064; // FALSE
table[24124] = 24064; // FALSE
table[24125] = 24064; // FALSE
table[24126] = 24064; // FALSE
table[24127] = 24064; // FALSE
table[24128] = 24064; // FALSE
table[24129] = 24064; // FALSE
table[24130] = 24064; // FALSE
table[24131] = 24064; // FALSE
table[24132] = 24064; // FALSE
table[24133] = 24064; // FALSE
table[24134] = 24064; // FALSE
table[24135] = 24064; // FALSE
table[24136] = 24064; // FALSE
table[24137] = 24064; // FALSE
table[24138] = 24064; // FALSE
table[24139] = 24064; // FALSE
table[24140] = 24064; // FALSE
table[24141] = 24064; // FALSE
table[24142] = 24064; // FALSE
table[24143] = 24064; // FALSE
table[24144] = 24064; // FALSE
table[24145] = 24064; // FALSE
table[24146] = 24064; // FALSE
table[24147] = 24064; // FALSE
table[24148] = 24064; // FALSE
table[24149] = 24064; // FALSE
table[24150] = 24064; // FALSE
table[24151] = 24064; // FALSE
table[24152] = 24064; // FALSE
table[24153] = 24064; // FALSE
table[24154] = 24064; // FALSE
table[24155] = 24064; // FALSE
table[24157] = 24064; // FALSE
table[24158] = 24064; // FALSE
table[24159] = 24064; // FALSE
table[24160] = 24064; // FALSE
table[24162] = 24064; // FALSE
table[24163] = 24064; // FALSE
table[24164] = 24064; // FALSE
table[24167] = 24064; // FALSE
table[24168] = 24064; // FALSE
table[24169] = 24064; // FALSE
table[24170] = 24064; // FALSE
table[24171] = 24064; // FALSE
table[24173] = 24064; // FALSE
table[24175] = 24064; // FALSE
table[24176] = 24064; // FALSE
table[24177] = 24064; // FALSE
table[24182] = 24064; // FALSE
table[24183] = 24064; // FALSE
table[24184] = 24064; // FALSE
table[24185] = 24064; // FALSE
table[24186] = 24064; // FALSE
table[24188] = 24064; // FALSE
table[24190] = 24064; // FALSE
table[24191] = 24064; // FALSE
table[24192] = 24064; // FALSE
table[24193] = 24064; // FALSE
table[24194] = 24064; // FALSE
table[24195] = 24064; // FALSE
table[24196] = 24064; // FALSE
table[24197] = 24064; // FALSE
table[24198] = 24064; // FALSE
table[24199] = 24064; // FALSE
table[24200] = 24064; // FALSE
table[24201] = 24064; // FALSE
table[24202] = 24064; // FALSE
table[24203] = 24064; // FALSE
table[24204] = 24064; // FALSE
table[24205] = 24064; // FALSE
table[24206] = 24064; // FALSE
table[24207] = 24064; // FALSE
table[24208] = 24064; // FALSE
table[24209] = 24064; // FALSE
table[24210] = 24064; // FALSE
table[24211] = 24064; // FALSE
table[24212] = 24064; // FALSE
table[24213] = 24064; // FALSE
table[24214] = 24064; // FALSE
table[24215] = 24064; // FALSE
table[24216] = 24064; // FALSE
table[24217] = 24064; // FALSE
table[24218] = 24064; // FALSE
table[24219] = 24064; // FALSE
table[24220] = 24064; // FALSE
table[24221] = 24064; // FALSE
table[24222] = 24064; // FALSE
table[24223] = 24064; // FALSE
table[24224] = 24064; // FALSE
table[24225] = 24064; // FALSE
table[24226] = 24064; // FALSE
table[24227] = 24064; // FALSE
table[24228] = 24064; // FALSE
table[24229] = 24064; // FALSE
table[24230] = 24064; // FALSE
table[24231] = 24064; // FALSE
table[24232] = 24064; // FALSE
table[24233] = 24064; // FALSE
table[24234] = 24064; // FALSE
table[24235] = 24064; // FALSE
table[24236] = 24064; // FALSE
table[24237] = 24064; // FALSE
table[24238] = 24064; // FALSE
table[24239] = 24064; // FALSE
table[24240] = 24064; // FALSE
table[24241] = 24064; // FALSE
table[24242] = 24064; // FALSE
table[24243] = 24064; // FALSE
table[24244] = 24064; // FALSE
table[24245] = 24064; // FALSE
table[24246] = 24064; // FALSE
table[24247] = 24064; // FALSE
table[24248] = 24064; // FALSE
table[24249] = 24064; // FALSE
table[24250] = 24064; // FALSE
table[24251] = 24064; // FALSE
table[24252] = 24064; // FALSE
table[24253] = 24064; // FALSE
table[24254] = 24064; // FALSE
table[24255] = 24064; // FALSE
table[24256] = 24064; // FALSE
table[24257] = 24064; // FALSE
table[24258] = 24064; // FALSE
table[24259] = 24064; // FALSE
table[24260] = 24064; // FALSE
table[24261] = 24064; // FALSE
table[24262] = 24064; // FALSE
table[24263] = 24064; // FALSE
table[24264] = 24064; // FALSE
table[24265] = 24064; // FALSE
table[24266] = 24064; // FALSE
table[24267] = 24064; // FALSE
table[24268] = 24064; // FALSE
table[24269] = 24064; // FALSE
table[24270] = 24064; // FALSE
table[24271] = 24064; // FALSE
table[24272] = 24064; // FALSE
table[24273] = 24064; // FALSE
table[24274] = 24064; // FALSE
table[24275] = 24064; // FALSE
table[24276] = 24064; // FALSE
table[24277] = 24064; // FALSE
table[24278] = 24064; // FALSE
table[24279] = 24064; // FALSE
table[24280] = 24064; // FALSE
table[24281] = 24064; // FALSE
table[24282] = 24064; // FALSE
table[24283] = 24064; // FALSE
table[24284] = 24064; // FALSE
table[24285] = 24064; // FALSE
table[24286] = 24064; // FALSE
table[24287] = 24064; // FALSE
table[24288] = 24064; // FALSE
table[24289] = 24064; // FALSE
table[24290] = 24064; // FALSE
table[24291] = 24064; // FALSE
table[24292] = 24064; // FALSE
table[24293] = 24064; // FALSE
table[24294] = 24064; // FALSE
table[24295] = 24064; // FALSE
table[24296] = 24064; // FALSE
table[24297] = 24064; // FALSE
table[24298] = 24064; // FALSE
table[24299] = 24064; // FALSE
table[24300] = 24064; // FALSE
table[24301] = 24064; // FALSE
table[24302] = 24064; // FALSE
table[24303] = 24064; // FALSE
table[24304] = 24064; // FALSE
table[24305] = 24064; // FALSE
table[24306] = 24064; // FALSE
table[24307] = 24064; // FALSE
table[24308] = 24064; // FALSE
table[24309] = 24064; // FALSE
table[24310] = 24064; // FALSE
table[24311] = 24064; // FALSE
table[24312] = 24064; // FALSE
table[24313] = 24064; // FALSE
table[24314] = 24064; // FALSE
table[24315] = 24064; // FALSE
table[24316] = 24064; // FALSE
table[24317] = 24064; // FALSE
table[24318] = 24064; // FALSE
table[24363] = 24576; // STRING
table[24365] = 24576; // STRING
table[24368] = 12800; // NUMBER
table[24369] = 13056; // NUMBER
table[24370] = 13312; // NUMBER
table[24371] = 13568; // NUMBER
table[24372] = 13824; // NUMBER
table[24373] = 14080; // NUMBER
table[24374] = 14336; // NUMBER
table[24375] = 14592; // NUMBER
table[24376] = 14848; // NUMBER
table[24377] = 15104; // NUMBER
table[24624] = 12800; // NUMBER
table[24625] = 13056; // NUMBER
table[24626] = 13312; // NUMBER
table[24627] = 13568; // NUMBER
table[24628] = 13824; // NUMBER
table[24629] = 14080; // NUMBER
table[24630] = 14336; // NUMBER
table[24631] = 14592; // NUMBER
table[24632] = 14848; // NUMBER
table[24633] = 15104; // NUMBER
table[24880] = 15360; // NUMBER
table[24881] = 15616; // NUMBER
table[24882] = 15872; // NUMBER
table[24883] = 16128; // NUMBER
table[24884] = 16384; // NUMBER
table[24885] = 16640; // NUMBER
table[24886] = 16896; // NUMBER
table[24887] = 17152; // NUMBER
table[24888] = 17408; // NUMBER
table[24889] = 17664; // NUMBER
table[25189] = 17920; // NUMBER
table[25452] = 18176; // NUMBER
table[25701] = 23552; // NUMBER
table[25866] = 24064; // FALSE
table[25869] = 24064; // FALSE
table[25865] = 24064; // FALSE
table[25972] = 24064; // FALSE
table[25970] = 24064; // FALSE
table[25973] = 28672; // STRING
table[25958] = 24064; // FALSE
table[25966] = 24064; // FALSE
table[25890] = 24064; // FALSE
table[25948] = 24064; // FALSE
table[25864] = 24064; // FALSE
table[25868] = 24064; // FALSE
table[25903] = 24064; // FALSE
table[25954] = 24064; // FALSE
table[26213] = 24064; // FALSE
table[26214] = 24064; // FALSE
table[26209] = 24064; // FALSE
table[26160] = 24064; // FALSE
table[26161] = 24064; // FALSE
table[26162] = 24064; // FALSE
table[26163] = 24064; // FALSE
table[26164] = 24064; // FALSE
table[26165] = 24064; // FALSE
table[26166] = 24064; // FALSE
table[26167] = 24064; // FALSE
table[26168] = 24064; // FALSE
table[26169] = 24064; // FALSE
table[26177] = 24064; // FALSE
table[26178] = 24064; // FALSE
table[26179] = 24064; // FALSE
table[26180] = 24064; // FALSE
table[26181] = 24064; // FALSE
table[26182] = 24064; // FALSE
table[26210] = 24064; // FALSE
table[26211] = 24064; // FALSE
table[26212] = 24064; // FALSE
table[26485] = 25088; // NUMBER
table[26732] = 25344; // NUMBER
table[26995] = 25600; // TRUE
table[27237] = 26112; // FALSE
table[27238] = 26112; // FALSE
table[27233] = 26112; // FALSE
table[27184] = 26112; // FALSE
table[27185] = 26112; // FALSE
table[27186] = 26112; // FALSE
table[27187] = 26112; // FALSE
table[27188] = 26112; // FALSE
table[27189] = 26112; // FALSE
table[27190] = 26112; // FALSE
table[27191] = 26112; // FALSE
table[27192] = 26112; // FALSE
table[27193] = 26112; // FALSE
table[27201] = 26112; // FALSE
table[27202] = 26112; // FALSE
table[27203] = 26112; // FALSE
table[27204] = 26112; // FALSE
table[27205] = 26112; // FALSE
table[27206] = 26112; // FALSE
table[27234] = 26112; // FALSE
table[27235] = 26112; // FALSE
table[27236] = 26112; // FALSE
table[27506] = 26368; // STRING
table[27765] = 26624; // STRING
table[28012] = 26880; // TRUE
table[28261] = 27136; // NULL
table[28262] = 27136; // NULL
table[28257] = 27136; // NULL
table[28208] = 27136; // NULL
table[28209] = 27136; // NULL
table[28210] = 27136; // NULL
table[28211] = 27136; // NULL
table[28212] = 27136; // NULL
table[28213] = 27136; // NULL
table[28214] = 27136; // NULL
table[28215] = 27136; // NULL
table[28216] = 27136; // NULL
table[28217] = 27136; // NULL
table[28225] = 27136; // NULL
table[28226] = 27136; // NULL
table[28227] = 27136; // NULL
table[28228] = 27136; // NULL
table[28229] = 27136; // NULL
table[28230] = 27136; // NULL
table[28258] = 27136; // NULL
table[28259] = 27136; // NULL
table[28260] = 27136; // NULL
table[28513] = 27904; // TRUE
table[28773] = 28160; // NULL
table[28774] = 28160; // NULL
table[28769] = 28160; // NULL
table[28720] = 28160; // NULL
table[28721] = 28160; // NULL
table[28722] = 28160; // NULL
table[28723] = 28160; // NULL
table[28724] = 28160; // NULL
table[28725] = 28160; // NULL
table[28726] = 28160; // NULL
table[28727] = 28160; // NULL
table[28728] = 28160; // NULL
table[28729] = 28160; // NULL
table[28737] = 28160; // NULL
table[28738] = 28160; // NULL
table[28739] = 28160; // NULL
table[28740] = 28160; // NULL
table[28741] = 28160; // NULL
table[28742] = 28160; // NULL
table[28770] = 28160; // NULL
table[28771] = 28160; // NULL
table[28772] = 28160; // NULL

const visited = new Uint16Array(1024);

const next = (input, offset) => {
  // 93
  let state = 23808;
  visited[0] = 23808;

  // try to find match
  let i = offset;
  let j = 0;
  let l = input.length;
  while (state !== 28928 && i < l) {
    state = table[state + input[i]];
    i++;
    j++;
    visited[j] = state;
  }

  // track back to last matched final state
  let success = false;
  let n = j;
  while (!success && n > 0) {
    success = visited[n] <= 23552 && visited[n] % 256 === 0;
    n--;
  }
  n = n + 1;

  if (success) {
    return {
      state: tokenIds[visited[n] / 256 + 2],
      start: offset,
      end: offset + n,
    };
  }
  return {
    state: i === l ? 0 : 1,
    start: -1,
    end: -1,
  };
};

export { EOF, ERROR, tokenNames, next };
