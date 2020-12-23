const EOF = "@expound.EOF";
const ERROR = "@expound.ERROR";

const tokenNames = [
  "@expound.EOF",
  "@expound.ERROR",
  "WS",
  "WS",
  "WS",
  "WS",
  "CURLY_OPEN",
  "CURLY_CLOSE",
  "COMMA",
  "COLON",
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
  "NUMBER",
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
  6, // CURLY_OPEN
  7, // CURLY_CLOSE
  8, // COMMA
  9, // COLON
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  11, // BRACKET_OPEN
  12, // BRACKET_CLOSE
  2, // WS
  2, // WS
  2, // WS
  2, // WS
  10, // STRING
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  3, // TRUE
  5, // NULL
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
  4, // FALSE
  undefined, // undefined
  13, // NUMBER
  10, // STRING
  13, // NUMBER
  13, // NUMBER
  13, // NUMBER
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

const table = new Uint16Array(26112);
table.fill(25344);
table[32] = 5120; // BRACKET_OPEN
table[10] = 5376; // BRACKET_CLOSE
table[13] = 5632; // WS
table[9] = 5888; // WS
table[288] = 5120; // BRACKET_OPEN
table[266] = 5376; // BRACKET_CLOSE
table[269] = 5632; // WS
table[265] = 5888; // WS
table[544] = 5120; // BRACKET_OPEN
table[522] = 5376; // BRACKET_CLOSE
table[525] = 5632; // WS
table[521] = 5888; // WS
table[800] = 5120; // BRACKET_OPEN
table[778] = 5376; // BRACKET_CLOSE
table[781] = 5632; // WS
table[777] = 5888; // WS
table[2149] = 20736; // NUMBER
table[2094] = 21248; // NUMBER
table[2117] = 20736; // NUMBER
table[2405] = 20736; // NUMBER
table[2350] = 21248; // NUMBER
table[2352] = 6400; // WS
table[2353] = 6656; // STRING
table[2354] = 6912; // NUMBER
table[2355] = 7168; // NUMBER
table[2356] = 7424; // NUMBER
table[2357] = 7680; // NUMBER
table[2358] = 7936; // NUMBER
table[2359] = 8192; // NUMBER
table[2360] = 8448; // NUMBER
table[2361] = 8704; // NUMBER
table[2373] = 20736; // NUMBER
table[2661] = 20736; // NUMBER
table[2606] = 21248; // NUMBER
table[2608] = 6400; // WS
table[2609] = 6656; // STRING
table[2610] = 6912; // NUMBER
table[2611] = 7168; // NUMBER
table[2612] = 7424; // NUMBER
table[2613] = 7680; // NUMBER
table[2614] = 7936; // NUMBER
table[2615] = 8192; // NUMBER
table[2616] = 8448; // NUMBER
table[2617] = 8704; // NUMBER
table[2629] = 20736; // NUMBER
table[2917] = 20736; // NUMBER
table[2862] = 21248; // NUMBER
table[2864] = 6400; // WS
table[2865] = 6656; // STRING
table[2866] = 6912; // NUMBER
table[2867] = 7168; // NUMBER
table[2868] = 7424; // NUMBER
table[2869] = 7680; // NUMBER
table[2870] = 7936; // NUMBER
table[2871] = 8192; // NUMBER
table[2872] = 8448; // NUMBER
table[2873] = 8704; // NUMBER
table[2885] = 20736; // NUMBER
table[3173] = 20736; // NUMBER
table[3118] = 21248; // NUMBER
table[3120] = 6400; // WS
table[3121] = 6656; // STRING
table[3122] = 6912; // NUMBER
table[3123] = 7168; // NUMBER
table[3124] = 7424; // NUMBER
table[3125] = 7680; // NUMBER
table[3126] = 7936; // NUMBER
table[3127] = 8192; // NUMBER
table[3128] = 8448; // NUMBER
table[3129] = 8704; // NUMBER
table[3141] = 20736; // NUMBER
table[3429] = 20736; // NUMBER
table[3374] = 21248; // NUMBER
table[3376] = 6400; // WS
table[3377] = 6656; // STRING
table[3378] = 6912; // NUMBER
table[3379] = 7168; // NUMBER
table[3380] = 7424; // NUMBER
table[3381] = 7680; // NUMBER
table[3382] = 7936; // NUMBER
table[3383] = 8192; // NUMBER
table[3384] = 8448; // NUMBER
table[3385] = 8704; // NUMBER
table[3397] = 20736; // NUMBER
table[3685] = 20736; // NUMBER
table[3630] = 21248; // NUMBER
table[3632] = 6400; // WS
table[3633] = 6656; // STRING
table[3634] = 6912; // NUMBER
table[3635] = 7168; // NUMBER
table[3636] = 7424; // NUMBER
table[3637] = 7680; // NUMBER
table[3638] = 7936; // NUMBER
table[3639] = 8192; // NUMBER
table[3640] = 8448; // NUMBER
table[3641] = 8704; // NUMBER
table[3653] = 20736; // NUMBER
table[3941] = 20736; // NUMBER
table[3886] = 21248; // NUMBER
table[3888] = 6400; // WS
table[3889] = 6656; // STRING
table[3890] = 6912; // NUMBER
table[3891] = 7168; // NUMBER
table[3892] = 7424; // NUMBER
table[3893] = 7680; // NUMBER
table[3894] = 7936; // NUMBER
table[3895] = 8192; // NUMBER
table[3896] = 8448; // NUMBER
table[3897] = 8704; // NUMBER
table[3909] = 20736; // NUMBER
table[4197] = 20736; // NUMBER
table[4142] = 21248; // NUMBER
table[4144] = 6400; // WS
table[4145] = 6656; // STRING
table[4146] = 6912; // NUMBER
table[4147] = 7168; // NUMBER
table[4148] = 7424; // NUMBER
table[4149] = 7680; // NUMBER
table[4150] = 7936; // NUMBER
table[4151] = 8192; // NUMBER
table[4152] = 8448; // NUMBER
table[4153] = 8704; // NUMBER
table[4165] = 20736; // NUMBER
table[4453] = 20736; // NUMBER
table[4398] = 21248; // NUMBER
table[4400] = 6400; // WS
table[4401] = 6656; // STRING
table[4402] = 6912; // NUMBER
table[4403] = 7168; // NUMBER
table[4404] = 7424; // NUMBER
table[4405] = 7680; // NUMBER
table[4406] = 7936; // NUMBER
table[4407] = 8192; // NUMBER
table[4408] = 8448; // NUMBER
table[4409] = 8704; // NUMBER
table[4421] = 20736; // NUMBER
table[5152] = 5120; // BRACKET_OPEN
table[5130] = 5376; // BRACKET_CLOSE
table[5133] = 5632; // WS
table[5129] = 5888; // WS
table[5408] = 5120; // BRACKET_OPEN
table[5386] = 5376; // BRACKET_CLOSE
table[5389] = 5632; // WS
table[5385] = 5888; // WS
table[5664] = 5120; // BRACKET_OPEN
table[5642] = 5376; // BRACKET_CLOSE
table[5645] = 5632; // WS
table[5641] = 5888; // WS
table[5920] = 5120; // BRACKET_OPEN
table[5898] = 5376; // BRACKET_CLOSE
table[5901] = 5632; // WS
table[5897] = 5888; // WS
table[6501] = 20736; // NUMBER
table[6446] = 21248; // NUMBER
table[6448] = 6400; // WS
table[6449] = 6656; // STRING
table[6450] = 6912; // NUMBER
table[6451] = 7168; // NUMBER
table[6452] = 7424; // NUMBER
table[6453] = 7680; // NUMBER
table[6454] = 7936; // NUMBER
table[6455] = 8192; // NUMBER
table[6456] = 8448; // NUMBER
table[6457] = 8704; // NUMBER
table[6469] = 20736; // NUMBER
table[6757] = 20736; // NUMBER
table[6702] = 21248; // NUMBER
table[6704] = 6400; // WS
table[6705] = 6656; // STRING
table[6706] = 6912; // NUMBER
table[6707] = 7168; // NUMBER
table[6708] = 7424; // NUMBER
table[6709] = 7680; // NUMBER
table[6710] = 7936; // NUMBER
table[6711] = 8192; // NUMBER
table[6712] = 8448; // NUMBER
table[6713] = 8704; // NUMBER
table[6725] = 20736; // NUMBER
table[7013] = 20736; // NUMBER
table[6958] = 21248; // NUMBER
table[6960] = 6400; // WS
table[6961] = 6656; // STRING
table[6962] = 6912; // NUMBER
table[6963] = 7168; // NUMBER
table[6964] = 7424; // NUMBER
table[6965] = 7680; // NUMBER
table[6966] = 7936; // NUMBER
table[6967] = 8192; // NUMBER
table[6968] = 8448; // NUMBER
table[6969] = 8704; // NUMBER
table[6981] = 20736; // NUMBER
table[7269] = 20736; // NUMBER
table[7214] = 21248; // NUMBER
table[7216] = 6400; // WS
table[7217] = 6656; // STRING
table[7218] = 6912; // NUMBER
table[7219] = 7168; // NUMBER
table[7220] = 7424; // NUMBER
table[7221] = 7680; // NUMBER
table[7222] = 7936; // NUMBER
table[7223] = 8192; // NUMBER
table[7224] = 8448; // NUMBER
table[7225] = 8704; // NUMBER
table[7237] = 20736; // NUMBER
table[7525] = 20736; // NUMBER
table[7470] = 21248; // NUMBER
table[7472] = 6400; // WS
table[7473] = 6656; // STRING
table[7474] = 6912; // NUMBER
table[7475] = 7168; // NUMBER
table[7476] = 7424; // NUMBER
table[7477] = 7680; // NUMBER
table[7478] = 7936; // NUMBER
table[7479] = 8192; // NUMBER
table[7480] = 8448; // NUMBER
table[7481] = 8704; // NUMBER
table[7493] = 20736; // NUMBER
table[7781] = 20736; // NUMBER
table[7726] = 21248; // NUMBER
table[7728] = 6400; // WS
table[7729] = 6656; // STRING
table[7730] = 6912; // NUMBER
table[7731] = 7168; // NUMBER
table[7732] = 7424; // NUMBER
table[7733] = 7680; // NUMBER
table[7734] = 7936; // NUMBER
table[7735] = 8192; // NUMBER
table[7736] = 8448; // NUMBER
table[7737] = 8704; // NUMBER
table[7749] = 20736; // NUMBER
table[8037] = 20736; // NUMBER
table[7982] = 21248; // NUMBER
table[7984] = 6400; // WS
table[7985] = 6656; // STRING
table[7986] = 6912; // NUMBER
table[7987] = 7168; // NUMBER
table[7988] = 7424; // NUMBER
table[7989] = 7680; // NUMBER
table[7990] = 7936; // NUMBER
table[7991] = 8192; // NUMBER
table[7992] = 8448; // NUMBER
table[7993] = 8704; // NUMBER
table[8005] = 20736; // NUMBER
table[8293] = 20736; // NUMBER
table[8238] = 21248; // NUMBER
table[8240] = 6400; // WS
table[8241] = 6656; // STRING
table[8242] = 6912; // NUMBER
table[8243] = 7168; // NUMBER
table[8244] = 7424; // NUMBER
table[8245] = 7680; // NUMBER
table[8246] = 7936; // NUMBER
table[8247] = 8192; // NUMBER
table[8248] = 8448; // NUMBER
table[8249] = 8704; // NUMBER
table[8261] = 20736; // NUMBER
table[8549] = 20736; // NUMBER
table[8494] = 21248; // NUMBER
table[8496] = 6400; // WS
table[8497] = 6656; // STRING
table[8498] = 6912; // NUMBER
table[8499] = 7168; // NUMBER
table[8500] = 7424; // NUMBER
table[8501] = 7680; // NUMBER
table[8502] = 7936; // NUMBER
table[8503] = 8192; // NUMBER
table[8504] = 8448; // NUMBER
table[8505] = 8704; // NUMBER
table[8517] = 20736; // NUMBER
table[8805] = 20736; // NUMBER
table[8750] = 21248; // NUMBER
table[8752] = 6400; // WS
table[8753] = 6656; // STRING
table[8754] = 6912; // NUMBER
table[8755] = 7168; // NUMBER
table[8756] = 7424; // NUMBER
table[8757] = 7680; // NUMBER
table[8758] = 7936; // NUMBER
table[8759] = 8192; // NUMBER
table[8760] = 8448; // NUMBER
table[8761] = 8704; // NUMBER
table[8773] = 20736; // NUMBER
table[9264] = 14592; // TRUE
table[9265] = 14848; // NULL
table[9266] = 15104; // NUMBER
table[9267] = 15360; // NUMBER
table[9268] = 15616; // NUMBER
table[9269] = 15872; // NUMBER
table[9270] = 16128; // NUMBER
table[9271] = 16384; // NUMBER
table[9272] = 16640; // NUMBER
table[9273] = 16896; // NUMBER
table[9520] = 14592; // TRUE
table[9521] = 14848; // NULL
table[9522] = 15104; // NUMBER
table[9523] = 15360; // NUMBER
table[9524] = 15616; // NUMBER
table[9525] = 15872; // NUMBER
table[9526] = 16128; // NUMBER
table[9527] = 16384; // NUMBER
table[9528] = 16640; // NUMBER
table[9529] = 16896; // NUMBER
table[9776] = 14592; // TRUE
table[9777] = 14848; // NULL
table[9778] = 15104; // NUMBER
table[9779] = 15360; // NUMBER
table[9780] = 15616; // NUMBER
table[9781] = 15872; // NUMBER
table[9782] = 16128; // NUMBER
table[9783] = 16384; // NUMBER
table[9784] = 16640; // NUMBER
table[9785] = 16896; // NUMBER
table[10032] = 14592; // TRUE
table[10033] = 14848; // NULL
table[10034] = 15104; // NUMBER
table[10035] = 15360; // NUMBER
table[10036] = 15616; // NUMBER
table[10037] = 15872; // NUMBER
table[10038] = 16128; // NUMBER
table[10039] = 16384; // NUMBER
table[10040] = 16640; // NUMBER
table[10041] = 16896; // NUMBER
table[10288] = 14592; // TRUE
table[10289] = 14848; // NULL
table[10290] = 15104; // NUMBER
table[10291] = 15360; // NUMBER
table[10292] = 15616; // NUMBER
table[10293] = 15872; // NUMBER
table[10294] = 16128; // NUMBER
table[10295] = 16384; // NUMBER
table[10296] = 16640; // NUMBER
table[10297] = 16896; // NUMBER
table[10544] = 14592; // TRUE
table[10545] = 14848; // NULL
table[10546] = 15104; // NUMBER
table[10547] = 15360; // NUMBER
table[10548] = 15616; // NUMBER
table[10549] = 15872; // NUMBER
table[10550] = 16128; // NUMBER
table[10551] = 16384; // NUMBER
table[10552] = 16640; // NUMBER
table[10553] = 16896; // NUMBER
table[10800] = 14592; // TRUE
table[10801] = 14848; // NULL
table[10802] = 15104; // NUMBER
table[10803] = 15360; // NUMBER
table[10804] = 15616; // NUMBER
table[10805] = 15872; // NUMBER
table[10806] = 16128; // NUMBER
table[10807] = 16384; // NUMBER
table[10808] = 16640; // NUMBER
table[10809] = 16896; // NUMBER
table[11056] = 14592; // TRUE
table[11057] = 14848; // NULL
table[11058] = 15104; // NUMBER
table[11059] = 15360; // NUMBER
table[11060] = 15616; // NUMBER
table[11061] = 15872; // NUMBER
table[11062] = 16128; // NUMBER
table[11063] = 16384; // NUMBER
table[11064] = 16640; // NUMBER
table[11065] = 16896; // NUMBER
table[11312] = 14592; // TRUE
table[11313] = 14848; // NULL
table[11314] = 15104; // NUMBER
table[11315] = 15360; // NUMBER
table[11316] = 15616; // NUMBER
table[11317] = 15872; // NUMBER
table[11318] = 16128; // NUMBER
table[11319] = 16384; // NUMBER
table[11320] = 16640; // NUMBER
table[11321] = 16896; // NUMBER
table[11621] = 20736; // NUMBER
table[11568] = 17152; // NUMBER
table[11569] = 17408; // NUMBER
table[11570] = 17664; // NUMBER
table[11571] = 17920; // NUMBER
table[11572] = 18176; // NUMBER
table[11573] = 18432; // NUMBER
table[11574] = 18688; // NUMBER
table[11575] = 18944; // NUMBER
table[11576] = 19200; // NUMBER
table[11577] = 19456; // NUMBER
table[11589] = 20736; // NUMBER
table[11877] = 20736; // NUMBER
table[11824] = 17152; // NUMBER
table[11825] = 17408; // NUMBER
table[11826] = 17664; // NUMBER
table[11827] = 17920; // NUMBER
table[11828] = 18176; // NUMBER
table[11829] = 18432; // NUMBER
table[11830] = 18688; // NUMBER
table[11831] = 18944; // NUMBER
table[11832] = 19200; // NUMBER
table[11833] = 19456; // NUMBER
table[11845] = 20736; // NUMBER
table[12133] = 20736; // NUMBER
table[12080] = 17152; // NUMBER
table[12081] = 17408; // NUMBER
table[12082] = 17664; // NUMBER
table[12083] = 17920; // NUMBER
table[12084] = 18176; // NUMBER
table[12085] = 18432; // NUMBER
table[12086] = 18688; // NUMBER
table[12087] = 18944; // NUMBER
table[12088] = 19200; // NUMBER
table[12089] = 19456; // NUMBER
table[12101] = 20736; // NUMBER
table[12389] = 20736; // NUMBER
table[12336] = 17152; // NUMBER
table[12337] = 17408; // NUMBER
table[12338] = 17664; // NUMBER
table[12339] = 17920; // NUMBER
table[12340] = 18176; // NUMBER
table[12341] = 18432; // NUMBER
table[12342] = 18688; // NUMBER
table[12343] = 18944; // NUMBER
table[12344] = 19200; // NUMBER
table[12345] = 19456; // NUMBER
table[12357] = 20736; // NUMBER
table[12645] = 20736; // NUMBER
table[12592] = 17152; // NUMBER
table[12593] = 17408; // NUMBER
table[12594] = 17664; // NUMBER
table[12595] = 17920; // NUMBER
table[12596] = 18176; // NUMBER
table[12597] = 18432; // NUMBER
table[12598] = 18688; // NUMBER
table[12599] = 18944; // NUMBER
table[12600] = 19200; // NUMBER
table[12601] = 19456; // NUMBER
table[12613] = 20736; // NUMBER
table[12901] = 20736; // NUMBER
table[12848] = 17152; // NUMBER
table[12849] = 17408; // NUMBER
table[12850] = 17664; // NUMBER
table[12851] = 17920; // NUMBER
table[12852] = 18176; // NUMBER
table[12853] = 18432; // NUMBER
table[12854] = 18688; // NUMBER
table[12855] = 18944; // NUMBER
table[12856] = 19200; // NUMBER
table[12857] = 19456; // NUMBER
table[12869] = 20736; // NUMBER
table[13157] = 20736; // NUMBER
table[13104] = 17152; // NUMBER
table[13105] = 17408; // NUMBER
table[13106] = 17664; // NUMBER
table[13107] = 17920; // NUMBER
table[13108] = 18176; // NUMBER
table[13109] = 18432; // NUMBER
table[13110] = 18688; // NUMBER
table[13111] = 18944; // NUMBER
table[13112] = 19200; // NUMBER
table[13113] = 19456; // NUMBER
table[13125] = 20736; // NUMBER
table[13413] = 20736; // NUMBER
table[13360] = 17152; // NUMBER
table[13361] = 17408; // NUMBER
table[13362] = 17664; // NUMBER
table[13363] = 17920; // NUMBER
table[13364] = 18176; // NUMBER
table[13365] = 18432; // NUMBER
table[13366] = 18688; // NUMBER
table[13367] = 18944; // NUMBER
table[13368] = 19200; // NUMBER
table[13369] = 19456; // NUMBER
table[13381] = 20736; // NUMBER
table[13669] = 20736; // NUMBER
table[13616] = 17152; // NUMBER
table[13617] = 17408; // NUMBER
table[13618] = 17664; // NUMBER
table[13619] = 17920; // NUMBER
table[13620] = 18176; // NUMBER
table[13621] = 18432; // NUMBER
table[13622] = 18688; // NUMBER
table[13623] = 18944; // NUMBER
table[13624] = 19200; // NUMBER
table[13625] = 19456; // NUMBER
table[13637] = 20736; // NUMBER
table[13925] = 20736; // NUMBER
table[13872] = 17152; // NUMBER
table[13873] = 17408; // NUMBER
table[13874] = 17664; // NUMBER
table[13875] = 17920; // NUMBER
table[13876] = 18176; // NUMBER
table[13877] = 18432; // NUMBER
table[13878] = 18688; // NUMBER
table[13879] = 18944; // NUMBER
table[13880] = 19200; // NUMBER
table[13881] = 19456; // NUMBER
table[13893] = 20736; // NUMBER
table[14640] = 14592; // TRUE
table[14641] = 14848; // NULL
table[14642] = 15104; // NUMBER
table[14643] = 15360; // NUMBER
table[14644] = 15616; // NUMBER
table[14645] = 15872; // NUMBER
table[14646] = 16128; // NUMBER
table[14647] = 16384; // NUMBER
table[14648] = 16640; // NUMBER
table[14649] = 16896; // NUMBER
table[14896] = 14592; // TRUE
table[14897] = 14848; // NULL
table[14898] = 15104; // NUMBER
table[14899] = 15360; // NUMBER
table[14900] = 15616; // NUMBER
table[14901] = 15872; // NUMBER
table[14902] = 16128; // NUMBER
table[14903] = 16384; // NUMBER
table[14904] = 16640; // NUMBER
table[14905] = 16896; // NUMBER
table[15152] = 14592; // TRUE
table[15153] = 14848; // NULL
table[15154] = 15104; // NUMBER
table[15155] = 15360; // NUMBER
table[15156] = 15616; // NUMBER
table[15157] = 15872; // NUMBER
table[15158] = 16128; // NUMBER
table[15159] = 16384; // NUMBER
table[15160] = 16640; // NUMBER
table[15161] = 16896; // NUMBER
table[15408] = 14592; // TRUE
table[15409] = 14848; // NULL
table[15410] = 15104; // NUMBER
table[15411] = 15360; // NUMBER
table[15412] = 15616; // NUMBER
table[15413] = 15872; // NUMBER
table[15414] = 16128; // NUMBER
table[15415] = 16384; // NUMBER
table[15416] = 16640; // NUMBER
table[15417] = 16896; // NUMBER
table[15664] = 14592; // TRUE
table[15665] = 14848; // NULL
table[15666] = 15104; // NUMBER
table[15667] = 15360; // NUMBER
table[15668] = 15616; // NUMBER
table[15669] = 15872; // NUMBER
table[15670] = 16128; // NUMBER
table[15671] = 16384; // NUMBER
table[15672] = 16640; // NUMBER
table[15673] = 16896; // NUMBER
table[15920] = 14592; // TRUE
table[15921] = 14848; // NULL
table[15922] = 15104; // NUMBER
table[15923] = 15360; // NUMBER
table[15924] = 15616; // NUMBER
table[15925] = 15872; // NUMBER
table[15926] = 16128; // NUMBER
table[15927] = 16384; // NUMBER
table[15928] = 16640; // NUMBER
table[15929] = 16896; // NUMBER
table[16176] = 14592; // TRUE
table[16177] = 14848; // NULL
table[16178] = 15104; // NUMBER
table[16179] = 15360; // NUMBER
table[16180] = 15616; // NUMBER
table[16181] = 15872; // NUMBER
table[16182] = 16128; // NUMBER
table[16183] = 16384; // NUMBER
table[16184] = 16640; // NUMBER
table[16185] = 16896; // NUMBER
table[16432] = 14592; // TRUE
table[16433] = 14848; // NULL
table[16434] = 15104; // NUMBER
table[16435] = 15360; // NUMBER
table[16436] = 15616; // NUMBER
table[16437] = 15872; // NUMBER
table[16438] = 16128; // NUMBER
table[16439] = 16384; // NUMBER
table[16440] = 16640; // NUMBER
table[16441] = 16896; // NUMBER
table[16688] = 14592; // TRUE
table[16689] = 14848; // NULL
table[16690] = 15104; // NUMBER
table[16691] = 15360; // NUMBER
table[16692] = 15616; // NUMBER
table[16693] = 15872; // NUMBER
table[16694] = 16128; // NUMBER
table[16695] = 16384; // NUMBER
table[16696] = 16640; // NUMBER
table[16697] = 16896; // NUMBER
table[16944] = 14592; // TRUE
table[16945] = 14848; // NULL
table[16946] = 15104; // NUMBER
table[16947] = 15360; // NUMBER
table[16948] = 15616; // NUMBER
table[16949] = 15872; // NUMBER
table[16950] = 16128; // NUMBER
table[16951] = 16384; // NUMBER
table[16952] = 16640; // NUMBER
table[16953] = 16896; // NUMBER
table[17253] = 20736; // NUMBER
table[17200] = 17152; // NUMBER
table[17201] = 17408; // NUMBER
table[17202] = 17664; // NUMBER
table[17203] = 17920; // NUMBER
table[17204] = 18176; // NUMBER
table[17205] = 18432; // NUMBER
table[17206] = 18688; // NUMBER
table[17207] = 18944; // NUMBER
table[17208] = 19200; // NUMBER
table[17209] = 19456; // NUMBER
table[17221] = 20736; // NUMBER
table[17509] = 20736; // NUMBER
table[17456] = 17152; // NUMBER
table[17457] = 17408; // NUMBER
table[17458] = 17664; // NUMBER
table[17459] = 17920; // NUMBER
table[17460] = 18176; // NUMBER
table[17461] = 18432; // NUMBER
table[17462] = 18688; // NUMBER
table[17463] = 18944; // NUMBER
table[17464] = 19200; // NUMBER
table[17465] = 19456; // NUMBER
table[17477] = 20736; // NUMBER
table[17765] = 20736; // NUMBER
table[17712] = 17152; // NUMBER
table[17713] = 17408; // NUMBER
table[17714] = 17664; // NUMBER
table[17715] = 17920; // NUMBER
table[17716] = 18176; // NUMBER
table[17717] = 18432; // NUMBER
table[17718] = 18688; // NUMBER
table[17719] = 18944; // NUMBER
table[17720] = 19200; // NUMBER
table[17721] = 19456; // NUMBER
table[17733] = 20736; // NUMBER
table[18021] = 20736; // NUMBER
table[17968] = 17152; // NUMBER
table[17969] = 17408; // NUMBER
table[17970] = 17664; // NUMBER
table[17971] = 17920; // NUMBER
table[17972] = 18176; // NUMBER
table[17973] = 18432; // NUMBER
table[17974] = 18688; // NUMBER
table[17975] = 18944; // NUMBER
table[17976] = 19200; // NUMBER
table[17977] = 19456; // NUMBER
table[17989] = 20736; // NUMBER
table[18277] = 20736; // NUMBER
table[18224] = 17152; // NUMBER
table[18225] = 17408; // NUMBER
table[18226] = 17664; // NUMBER
table[18227] = 17920; // NUMBER
table[18228] = 18176; // NUMBER
table[18229] = 18432; // NUMBER
table[18230] = 18688; // NUMBER
table[18231] = 18944; // NUMBER
table[18232] = 19200; // NUMBER
table[18233] = 19456; // NUMBER
table[18245] = 20736; // NUMBER
table[18533] = 20736; // NUMBER
table[18480] = 17152; // NUMBER
table[18481] = 17408; // NUMBER
table[18482] = 17664; // NUMBER
table[18483] = 17920; // NUMBER
table[18484] = 18176; // NUMBER
table[18485] = 18432; // NUMBER
table[18486] = 18688; // NUMBER
table[18487] = 18944; // NUMBER
table[18488] = 19200; // NUMBER
table[18489] = 19456; // NUMBER
table[18501] = 20736; // NUMBER
table[18789] = 20736; // NUMBER
table[18736] = 17152; // NUMBER
table[18737] = 17408; // NUMBER
table[18738] = 17664; // NUMBER
table[18739] = 17920; // NUMBER
table[18740] = 18176; // NUMBER
table[18741] = 18432; // NUMBER
table[18742] = 18688; // NUMBER
table[18743] = 18944; // NUMBER
table[18744] = 19200; // NUMBER
table[18745] = 19456; // NUMBER
table[18757] = 20736; // NUMBER
table[19045] = 20736; // NUMBER
table[18992] = 17152; // NUMBER
table[18993] = 17408; // NUMBER
table[18994] = 17664; // NUMBER
table[18995] = 17920; // NUMBER
table[18996] = 18176; // NUMBER
table[18997] = 18432; // NUMBER
table[18998] = 18688; // NUMBER
table[18999] = 18944; // NUMBER
table[19000] = 19200; // NUMBER
table[19001] = 19456; // NUMBER
table[19013] = 20736; // NUMBER
table[19301] = 20736; // NUMBER
table[19248] = 17152; // NUMBER
table[19249] = 17408; // NUMBER
table[19250] = 17664; // NUMBER
table[19251] = 17920; // NUMBER
table[19252] = 18176; // NUMBER
table[19253] = 18432; // NUMBER
table[19254] = 18688; // NUMBER
table[19255] = 18944; // NUMBER
table[19256] = 19200; // NUMBER
table[19257] = 19456; // NUMBER
table[19269] = 20736; // NUMBER
table[19557] = 20736; // NUMBER
table[19504] = 17152; // NUMBER
table[19505] = 17408; // NUMBER
table[19506] = 17664; // NUMBER
table[19507] = 17920; // NUMBER
table[19508] = 18176; // NUMBER
table[19509] = 18432; // NUMBER
table[19510] = 18688; // NUMBER
table[19511] = 18944; // NUMBER
table[19512] = 19200; // NUMBER
table[19513] = 19456; // NUMBER
table[19525] = 20736; // NUMBER
table[20000] = 0; // @expound.EOF
table[19978] = 256; // @expound.ERROR
table[19981] = 512; // WS
table[19977] = 768; // WS
table[20084] = 23808; // FALSE
table[20070] = 24832; // FALSE
table[20078] = 24064; // STRING
table[20091] = 1024; // WS
table[20093] = 1280; // WS
table[20012] = 1536; // CURLY_OPEN
table[20026] = 1792; // CURLY_CLOSE
table[20002] = 20480; // undefined
table[20013] = 20224; // FALSE
table[20016] = 2048; // COMMA
table[20017] = 2304; // COLON
table[20018] = 2560; // NUMBER
table[20019] = 2816; // NUMBER
table[20020] = 3072; // NUMBER
table[20021] = 3328; // NUMBER
table[20022] = 3584; // NUMBER
table[20023] = 3840; // NUMBER
table[20024] = 4096; // NUMBER
table[20025] = 4352; // NUMBER
table[20059] = 4608; // NUMBER
table[20061] = 4864; // NUMBER
table[20272] = 2048; // COMMA
table[20273] = 2304; // COLON
table[20274] = 2560; // NUMBER
table[20275] = 2816; // NUMBER
table[20276] = 3072; // NUMBER
table[20277] = 3328; // NUMBER
table[20278] = 3584; // NUMBER
table[20279] = 3840; // NUMBER
table[20280] = 4096; // NUMBER
table[20281] = 4352; // NUMBER
table[20512] = 20480; // undefined
table[20596] = 20480; // undefined
table[20594] = 20480; // undefined
table[20597] = 20480; // undefined
table[20581] = 20480; // undefined
table[20582] = 20480; // undefined
table[20577] = 20480; // undefined
table[20588] = 20480; // undefined
table[20595] = 20480; // undefined
table[20590] = 20480; // undefined
table[20603] = 20480; // undefined
table[20605] = 20480; // undefined
table[20524] = 20480; // undefined
table[20538] = 20480; // undefined
table[20514] = 6144; // WS
table[20480] = 20480; // undefined
table[20481] = 20480; // undefined
table[20482] = 20480; // undefined
table[20483] = 20480; // undefined
table[20484] = 20480; // undefined
table[20485] = 20480; // undefined
table[20486] = 20480; // undefined
table[20487] = 20480; // undefined
table[20572] = 22272; // NULL
table[20491] = 20480; // undefined
table[20494] = 20480; // undefined
table[20495] = 20480; // undefined
table[20496] = 20480; // undefined
table[20497] = 20480; // undefined
table[20498] = 20480; // undefined
table[20499] = 20480; // undefined
table[20500] = 20480; // undefined
table[20501] = 20480; // undefined
table[20502] = 20480; // undefined
table[20503] = 20480; // undefined
table[20504] = 20480; // undefined
table[20505] = 20480; // undefined
table[20506] = 20480; // undefined
table[20507] = 20480; // undefined
table[20508] = 20480; // undefined
table[20509] = 20480; // undefined
table[20510] = 20480; // undefined
table[20511] = 20480; // undefined
table[20513] = 20480; // undefined
table[20515] = 20480; // undefined
table[20516] = 20480; // undefined
table[20517] = 20480; // undefined
table[20518] = 20480; // undefined
table[20519] = 20480; // undefined
table[20520] = 20480; // undefined
table[20521] = 20480; // undefined
table[20522] = 20480; // undefined
table[20523] = 20480; // undefined
table[20525] = 20480; // undefined
table[20526] = 20480; // undefined
table[20527] = 20480; // undefined
table[20528] = 20480; // undefined
table[20529] = 20480; // undefined
table[20530] = 20480; // undefined
table[20531] = 20480; // undefined
table[20532] = 20480; // undefined
table[20533] = 20480; // undefined
table[20534] = 20480; // undefined
table[20535] = 20480; // undefined
table[20536] = 20480; // undefined
table[20537] = 20480; // undefined
table[20539] = 20480; // undefined
table[20540] = 20480; // undefined
table[20541] = 20480; // undefined
table[20542] = 20480; // undefined
table[20543] = 20480; // undefined
table[20544] = 20480; // undefined
table[20545] = 20480; // undefined
table[20546] = 20480; // undefined
table[20547] = 20480; // undefined
table[20548] = 20480; // undefined
table[20549] = 20480; // undefined
table[20550] = 20480; // undefined
table[20551] = 20480; // undefined
table[20552] = 20480; // undefined
table[20553] = 20480; // undefined
table[20554] = 20480; // undefined
table[20555] = 20480; // undefined
table[20556] = 20480; // undefined
table[20557] = 20480; // undefined
table[20558] = 20480; // undefined
table[20559] = 20480; // undefined
table[20560] = 20480; // undefined
table[20561] = 20480; // undefined
table[20562] = 20480; // undefined
table[20563] = 20480; // undefined
table[20564] = 20480; // undefined
table[20565] = 20480; // undefined
table[20566] = 20480; // undefined
table[20567] = 20480; // undefined
table[20568] = 20480; // undefined
table[20569] = 20480; // undefined
table[20570] = 20480; // undefined
table[20571] = 20480; // undefined
table[20573] = 20480; // undefined
table[20574] = 20480; // undefined
table[20575] = 20480; // undefined
table[20576] = 20480; // undefined
table[20578] = 20480; // undefined
table[20579] = 20480; // undefined
table[20580] = 20480; // undefined
table[20583] = 20480; // undefined
table[20584] = 20480; // undefined
table[20585] = 20480; // undefined
table[20586] = 20480; // undefined
table[20587] = 20480; // undefined
table[20589] = 20480; // undefined
table[20591] = 20480; // undefined
table[20592] = 20480; // undefined
table[20593] = 20480; // undefined
table[20598] = 20480; // undefined
table[20599] = 20480; // undefined
table[20600] = 20480; // undefined
table[20601] = 20480; // undefined
table[20602] = 20480; // undefined
table[20604] = 20480; // undefined
table[20606] = 20480; // undefined
table[20607] = 20480; // undefined
table[20608] = 20480; // undefined
table[20609] = 20480; // undefined
table[20610] = 20480; // undefined
table[20611] = 20480; // undefined
table[20612] = 20480; // undefined
table[20613] = 20480; // undefined
table[20614] = 20480; // undefined
table[20615] = 20480; // undefined
table[20616] = 20480; // undefined
table[20617] = 20480; // undefined
table[20618] = 20480; // undefined
table[20619] = 20480; // undefined
table[20620] = 20480; // undefined
table[20621] = 20480; // undefined
table[20622] = 20480; // undefined
table[20623] = 20480; // undefined
table[20624] = 20480; // undefined
table[20625] = 20480; // undefined
table[20626] = 20480; // undefined
table[20627] = 20480; // undefined
table[20628] = 20480; // undefined
table[20629] = 20480; // undefined
table[20630] = 20480; // undefined
table[20631] = 20480; // undefined
table[20632] = 20480; // undefined
table[20633] = 20480; // undefined
table[20634] = 20480; // undefined
table[20635] = 20480; // undefined
table[20636] = 20480; // undefined
table[20637] = 20480; // undefined
table[20638] = 20480; // undefined
table[20639] = 20480; // undefined
table[20640] = 20480; // undefined
table[20641] = 20480; // undefined
table[20642] = 20480; // undefined
table[20643] = 20480; // undefined
table[20644] = 20480; // undefined
table[20645] = 20480; // undefined
table[20646] = 20480; // undefined
table[20647] = 20480; // undefined
table[20648] = 20480; // undefined
table[20649] = 20480; // undefined
table[20650] = 20480; // undefined
table[20651] = 20480; // undefined
table[20652] = 20480; // undefined
table[20653] = 20480; // undefined
table[20654] = 20480; // undefined
table[20655] = 20480; // undefined
table[20656] = 20480; // undefined
table[20657] = 20480; // undefined
table[20658] = 20480; // undefined
table[20659] = 20480; // undefined
table[20660] = 20480; // undefined
table[20661] = 20480; // undefined
table[20662] = 20480; // undefined
table[20663] = 20480; // undefined
table[20664] = 20480; // undefined
table[20665] = 20480; // undefined
table[20666] = 20480; // undefined
table[20667] = 20480; // undefined
table[20668] = 20480; // undefined
table[20669] = 20480; // undefined
table[20670] = 20480; // undefined
table[20671] = 20480; // undefined
table[20672] = 20480; // undefined
table[20673] = 20480; // undefined
table[20674] = 20480; // undefined
table[20675] = 20480; // undefined
table[20676] = 20480; // undefined
table[20677] = 20480; // undefined
table[20678] = 20480; // undefined
table[20679] = 20480; // undefined
table[20680] = 20480; // undefined
table[20681] = 20480; // undefined
table[20682] = 20480; // undefined
table[20683] = 20480; // undefined
table[20684] = 20480; // undefined
table[20685] = 20480; // undefined
table[20686] = 20480; // undefined
table[20687] = 20480; // undefined
table[20688] = 20480; // undefined
table[20689] = 20480; // undefined
table[20690] = 20480; // undefined
table[20691] = 20480; // undefined
table[20692] = 20480; // undefined
table[20693] = 20480; // undefined
table[20694] = 20480; // undefined
table[20695] = 20480; // undefined
table[20696] = 20480; // undefined
table[20697] = 20480; // undefined
table[20698] = 20480; // undefined
table[20699] = 20480; // undefined
table[20700] = 20480; // undefined
table[20701] = 20480; // undefined
table[20702] = 20480; // undefined
table[20703] = 20480; // undefined
table[20704] = 20480; // undefined
table[20705] = 20480; // undefined
table[20706] = 20480; // undefined
table[20707] = 20480; // undefined
table[20708] = 20480; // undefined
table[20709] = 20480; // undefined
table[20710] = 20480; // undefined
table[20711] = 20480; // undefined
table[20712] = 20480; // undefined
table[20713] = 20480; // undefined
table[20714] = 20480; // undefined
table[20715] = 20480; // undefined
table[20716] = 20480; // undefined
table[20717] = 20480; // undefined
table[20718] = 20480; // undefined
table[20719] = 20480; // undefined
table[20720] = 20480; // undefined
table[20721] = 20480; // undefined
table[20722] = 20480; // undefined
table[20723] = 20480; // undefined
table[20724] = 20480; // undefined
table[20725] = 20480; // undefined
table[20726] = 20480; // undefined
table[20727] = 20480; // undefined
table[20728] = 20480; // undefined
table[20729] = 20480; // undefined
table[20730] = 20480; // undefined
table[20731] = 20480; // undefined
table[20732] = 20480; // undefined
table[20733] = 20480; // undefined
table[20734] = 20480; // undefined
table[20779] = 20992; // STRING
table[20781] = 20992; // STRING
table[20784] = 8960; // NUMBER
table[20785] = 9216; // NUMBER
table[20786] = 9472; // NUMBER
table[20787] = 9728; // NUMBER
table[20788] = 9984; // NUMBER
table[20789] = 10240; // NUMBER
table[20790] = 10496; // NUMBER
table[20791] = 10752; // NUMBER
table[20792] = 11008; // NUMBER
table[20793] = 11264; // NUMBER
table[21040] = 8960; // NUMBER
table[21041] = 9216; // NUMBER
table[21042] = 9472; // NUMBER
table[21043] = 9728; // NUMBER
table[21044] = 9984; // NUMBER
table[21045] = 10240; // NUMBER
table[21046] = 10496; // NUMBER
table[21047] = 10752; // NUMBER
table[21048] = 11008; // NUMBER
table[21049] = 11264; // NUMBER
table[21296] = 11520; // NUMBER
table[21297] = 11776; // NUMBER
table[21298] = 12032; // NUMBER
table[21299] = 12288; // NUMBER
table[21300] = 12544; // NUMBER
table[21301] = 12800; // NUMBER
table[21302] = 13056; // NUMBER
table[21303] = 13312; // NUMBER
table[21304] = 13568; // NUMBER
table[21305] = 13824; // NUMBER
table[21605] = 14080; // NUMBER
table[21868] = 14336; // NUMBER
table[22117] = 19712; // NUMBER
table[22282] = 20480; // undefined
table[22285] = 20480; // undefined
table[22281] = 20480; // undefined
table[22388] = 20480; // undefined
table[22386] = 20480; // undefined
table[22389] = 25088; // STRING
table[22374] = 20480; // undefined
table[22382] = 20480; // undefined
table[22306] = 20480; // undefined
table[22364] = 20480; // undefined
table[22280] = 20480; // undefined
table[22284] = 20480; // undefined
table[22319] = 20480; // undefined
table[22370] = 20480; // undefined
table[22629] = 20480; // undefined
table[22630] = 20480; // undefined
table[22625] = 20480; // undefined
table[22576] = 20480; // undefined
table[22577] = 20480; // undefined
table[22578] = 20480; // undefined
table[22579] = 20480; // undefined
table[22580] = 20480; // undefined
table[22581] = 20480; // undefined
table[22582] = 20480; // undefined
table[22583] = 20480; // undefined
table[22584] = 20480; // undefined
table[22585] = 20480; // undefined
table[22593] = 20480; // undefined
table[22594] = 20480; // undefined
table[22595] = 20480; // undefined
table[22596] = 20480; // undefined
table[22597] = 20480; // undefined
table[22598] = 20480; // undefined
table[22626] = 20480; // undefined
table[22627] = 20480; // undefined
table[22628] = 20480; // undefined
table[22901] = 21504; // NUMBER
table[23148] = 21760; // NUMBER
table[23411] = 22016; // TRUE
table[23653] = 22528; // FALSE
table[23654] = 22528; // FALSE
table[23649] = 22528; // FALSE
table[23600] = 22528; // FALSE
table[23601] = 22528; // FALSE
table[23602] = 22528; // FALSE
table[23603] = 22528; // FALSE
table[23604] = 22528; // FALSE
table[23605] = 22528; // FALSE
table[23606] = 22528; // FALSE
table[23607] = 22528; // FALSE
table[23608] = 22528; // FALSE
table[23609] = 22528; // FALSE
table[23617] = 22528; // FALSE
table[23618] = 22528; // FALSE
table[23619] = 22528; // FALSE
table[23620] = 22528; // FALSE
table[23621] = 22528; // FALSE
table[23622] = 22528; // FALSE
table[23650] = 22528; // FALSE
table[23651] = 22528; // FALSE
table[23652] = 22528; // FALSE
table[23922] = 22784; // STRING
table[24181] = 23040; // STRING
table[24428] = 23296; // TRUE
table[24677] = 23552; // NULL
table[24678] = 23552; // NULL
table[24673] = 23552; // NULL
table[24624] = 23552; // NULL
table[24625] = 23552; // NULL
table[24626] = 23552; // NULL
table[24627] = 23552; // NULL
table[24628] = 23552; // NULL
table[24629] = 23552; // NULL
table[24630] = 23552; // NULL
table[24631] = 23552; // NULL
table[24632] = 23552; // NULL
table[24633] = 23552; // NULL
table[24641] = 23552; // NULL
table[24642] = 23552; // NULL
table[24643] = 23552; // NULL
table[24644] = 23552; // NULL
table[24645] = 23552; // NULL
table[24646] = 23552; // NULL
table[24674] = 23552; // NULL
table[24675] = 23552; // NULL
table[24676] = 23552; // NULL
table[24929] = 24320; // TRUE
table[25189] = 24576; // NULL
table[25190] = 24576; // NULL
table[25185] = 24576; // NULL
table[25136] = 24576; // NULL
table[25137] = 24576; // NULL
table[25138] = 24576; // NULL
table[25139] = 24576; // NULL
table[25140] = 24576; // NULL
table[25141] = 24576; // NULL
table[25142] = 24576; // NULL
table[25143] = 24576; // NULL
table[25144] = 24576; // NULL
table[25145] = 24576; // NULL
table[25153] = 24576; // NULL
table[25154] = 24576; // NULL
table[25155] = 24576; // NULL
table[25156] = 24576; // NULL
table[25157] = 24576; // NULL
table[25158] = 24576; // NULL
table[25186] = 24576; // NULL
table[25187] = 24576; // NULL
table[25188] = 24576; // NULL

const visited = new Uint16Array(1024);

// the currently matched lexeme
const lexeme = {
  state: -1,
  start: -1,
  end: -1,
};

const next = (input, offset) => {
  // 78
  let state = 19968;
  visited[0] = 19968;

  // try to find match
  let i = offset;
  let j = 0;
  let l = input.length;
  while (state !== 25344 && i < l) {
    state = table[state + input[i]];
    i++;
    j++;
    visited[j] = state;
  }

  // track back to last matched final state
  let success = false;
  let n = j;
  while (!success && n > 0) {
    success = visited[n] <= 19712 && visited[n] % 256 === 0;
    n--;
  }
  n = n + 1;

  if (success) {
    lexeme.state = tokenIds[visited[n] / 256 + 2];
    lexeme.start = offset;
    lexeme.end = offset + n;
    return lexeme;
  }
  lexeme.state = i === l ? 0 : 1;
  lexeme.start = -1;
  lexeme.end = -1;
  return lexeme;
};

export { EOF, ERROR, tokenNames, next };
