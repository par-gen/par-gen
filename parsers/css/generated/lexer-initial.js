// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const skipTable = new Uint8Array(256);
skipTable.fill(1, 9, 14);
skipTable[32] = 1;

const tokenIds = new Uint8Array(184);
tokenIds[2] = 19; // .
tokenIds[3] = 29; // #
tokenIds[4] = 39; // +
tokenIds[5] = 51; // -
tokenIds[6] = 52; // /
tokenIds.fill(53, 7, 12); // _nth_functional_notation
tokenIds.fill(56, 12, 16); // integer_value
tokenIds.fill(57, 16, 18); // float_value
tokenIds[18] = 1; // from
tokenIds[19] = 2; // to
tokenIds[20] = 3; // :
tokenIds[21] = 4; // @import
tokenIds[22] = 7; // @media
tokenIds[23] = 8; // @charset
tokenIds[24] = 9; // @namespace
tokenIds[25] = 10; // @keyframes
tokenIds[26] = 13; // @supports
tokenIds[27] = 14; // @scope
tokenIds[28] = 18; // *
tokenIds[29] = 20; // has
tokenIds[30] = 21; // not
tokenIds[31] = 22; // is
tokenIds[32] = 23; // where
tokenIds[33] = 24; // host
tokenIds[34] = 25; // host-context
tokenIds[35] = 26; // nth-child
tokenIds[36] = 27; // nth-last-child
tokenIds[37] = 38; // ~
tokenIds[38] = 40; // |
tokenIds[39] = 41; // even
tokenIds[40] = 42; // odd
tokenIds[41] = 43; // of
tokenIds[42] = 44; // !important
tokenIds[43] = 45; // and
tokenIds[44] = 46; // or
tokenIds[45] = 47; // only
tokenIds[46] = 48; // selector
tokenIds[47] = 53; // _nth_functional_notation
tokenIds.fill(54, 48, 53); // color_value
tokenIds.fill(55, 53, 59); // escape_sequence
tokenIds.fill(56, 59, 64); // integer_value
tokenIds.fill(57, 64, 72); // float_value
tokenIds.fill(58, 72, 128); // identifier
tokenIds.fill(59, 128, 170); // at_keyword
tokenIds.fill(60, 170, 172); // plain_value
tokenIds.fill(61, 172, 181); // important_value
tokenIds.fill(65, 181, 183); // _class_name_token4
tokenIds[183] = 69; // js_comment

const ec = new Uint8Array(256);
ec.fill(37, 0, 9);
ec[9] = 1;
ec[10] = 2;
ec.fill(1, 11, 13);
ec[13] = 3;
ec.fill(37, 14, 32);
ec[32] = 1;
ec.fill(37, 33, 37);
ec[37] = 4;
ec.fill(37, 38, 42);
ec[42] = 5;
ec[43] = 6;
ec[44] = 37;
ec[45] = 7;
ec[46] = 8;
ec[47] = 9;
ec.fill(10, 48, 58);
ec[58] = 11;
ec.fill(37, 59, 61);
ec[61] = 12;
ec.fill(37, 62, 65);
ec.fill(13, 65, 69);
ec[69] = 14;
ec[70] = 13;
ec.fill(15, 71, 91);
ec.fill(37, 91, 95);
ec[95] = 16;
ec[96] = 37;
ec[97] = 17;
ec[98] = 13;
ec[99] = 18;
ec[100] = 19;
ec[101] = 20;
ec[102] = 21;
ec[103] = 15;
ec[104] = 22;
ec[105] = 23;
ec[106] = 15;
ec[107] = 24;
ec[108] = 25;
ec[109] = 26;
ec[110] = 27;
ec[111] = 28;
ec[112] = 29;
ec[113] = 15;
ec[114] = 30;
ec[115] = 31;
ec[116] = 32;
ec[117] = 33;
ec[118] = 34;
ec[119] = 15;
ec[120] = 35;
ec[121] = 36;
ec[122] = 15;
ec.fill(37, 123, 160);

const table = new Uint16Array(12992);
table[138] = 1088; // float_value
table[202] = 12544; // color_value
table.fill(12544, 205, 207); // color_value
table.fill(12544, 209, 214); // color_value
table[264] = 12032; // float_value
table[266] = 896; // integer_value
table[270] = 11968; // float_value
table[276] = 11968; // float_value
table[320] = 6912; // identifier
table[327] = 6912; // identifier
table[328] = 12032; // float_value
table[330] = 832; // integer_value
table[333] = 6912; // identifier
table[334] = 7040; // identifier
table.fill(6912, 335, 340); // identifier
table[340] = 7040; // identifier
table.fill(6912, 341, 347); // identifier
table[347] = 512; // _nth_functional_notation
table.fill(6912, 348, 357); // identifier
table[389] = 11776; // comment
table[393] = 11712; // js_comment
table[448] = 6912; // identifier
table.fill(704, 449, 452); // _nth_functional_notation
table[454] = 11840; // _nth_functional_notation
table[455] = 6912; // identifier
table[458] = 6912; // identifier
table.fill(6912, 461, 476); // identifier
table[476] = 7744; // identifier
table.fill(6912, 477, 480); // identifier
table[480] = 6656; // identifier
table.fill(6912, 481, 485); // identifier
table[512] = 6912; // identifier
table.fill(704, 513, 516); // _nth_functional_notation
table[518] = 11840; // _nth_functional_notation
table[519] = 6912; // identifier
table[522] = 6912; // identifier
table.fill(6912, 525, 549); // identifier
table[576] = 11648; // _class_name_token4
table.fill(704, 577, 580); // _nth_functional_notation
table[580] = 4032; // integer_value
table[582] = 11840; // _nth_functional_notation
table[583] = 11648; // _class_name_token4
table[586] = 11648; // _class_name_token4
table.fill(3904, 589, 592); // integer_value
table[592] = 11648; // _class_name_token4
table.fill(3904, 593, 613); // integer_value
table[640] = 11648; // _class_name_token4
table.fill(704, 641, 644); // _nth_functional_notation
table[644] = 4032; // integer_value
table[646] = 11840; // _nth_functional_notation
table[647] = 10944; // plain_value
table[650] = 10944; // plain_value
table.fill(3968, 653, 656); // integer_value
table[656] = 10944; // plain_value
table.fill(3968, 657, 677); // integer_value
table.fill(704, 705, 708); // _nth_functional_notation
table[710] = 11840; // _nth_functional_notation
table[768] = 11648; // _class_name_token4
table[772] = 4032; // integer_value
table[775] = 11648; // _class_name_token4
table[776] = 12032; // float_value
table[778] = 768; // integer_value
table[781] = 3904; // integer_value
table[782] = 3776; // integer_value
table[783] = 3904; // integer_value
table[784] = 11648; // _class_name_token4
table.fill(3904, 785, 788); // integer_value
table[788] = 3776; // integer_value
table.fill(3904, 789, 795); // integer_value
table[795] = 576; // _nth_functional_notation
table.fill(3904, 796, 805); // integer_value
table[832] = 11648; // _class_name_token4
table[836] = 4032; // integer_value
table[839] = 10944; // plain_value
table[840] = 12032; // float_value
table[842] = 832; // integer_value
table[845] = 3968; // integer_value
table[846] = 3840; // integer_value
table[847] = 3968; // integer_value
table[848] = 10944; // plain_value
table.fill(3968, 849, 852); // integer_value
table[852] = 3840; // integer_value
table.fill(3968, 853, 859); // integer_value
table[859] = 640; // _nth_functional_notation
table.fill(3968, 860, 869); // integer_value
table[900] = 4032; // integer_value
table[904] = 12032; // float_value
table[906] = 896; // integer_value
table[909] = 4032; // integer_value
table[910] = 960; // integer_value
table[911] = 4032; // integer_value
table.fill(4032, 913, 916); // integer_value
table[916] = 960; // integer_value
table.fill(4032, 917, 933); // integer_value
table[964] = 4032; // integer_value
table[967] = 12096; // float_value
table[970] = 4352; // float_value
table.fill(4032, 973, 976); // integer_value
table.fill(4032, 977, 997); // integer_value
table[1028] = 4544; // float_value
table[1031] = 12096; // float_value
table[1034] = 4352; // float_value
table.fill(4544, 1037, 1040); // float_value
table.fill(4544, 1041, 1061); // float_value
table[1092] = 4544; // float_value
table[1098] = 1088; // float_value
table[1101] = 4544; // float_value
table[1102] = 1024; // float_value
table[1103] = 4544; // float_value
table.fill(4544, 1105, 1108); // float_value
table[1108] = 1024; // float_value
table.fill(4544, 1109, 1125); // float_value
table[1152] = 6912; // identifier
table[1159] = 6912; // identifier
table[1162] = 6912; // identifier
table.fill(6912, 1165, 1189); // identifier
table[1216] = 6912; // identifier
table[1223] = 6912; // identifier
table[1226] = 6912; // identifier
table.fill(6912, 1229, 1253); // identifier
table[1291] = 29; // ::
table[1351] = 10368; // at_keyword
table.fill(10368, 1357, 1381); // at_keyword
table[1415] = 10368; // at_keyword
table.fill(10368, 1421, 1445); // at_keyword
table[1479] = 10368; // at_keyword
table.fill(10368, 1485, 1509); // at_keyword
table[1543] = 10368; // at_keyword
table.fill(10368, 1549, 1573); // at_keyword
table[1607] = 10368; // at_keyword
table.fill(10368, 1613, 1637); // at_keyword
table[1671] = 10368; // at_keyword
table.fill(10368, 1677, 1701); // at_keyword
table[1735] = 10368; // at_keyword
table.fill(10368, 1741, 1765); // at_keyword
table[1804] = 35; // *=
table[1856] = 6912; // identifier
table[1863] = 6912; // identifier
table[1866] = 6912; // identifier
table.fill(6912, 1869, 1893); // identifier
table[1920] = 6912; // identifier
table[1927] = 6912; // identifier
table[1930] = 6912; // identifier
table.fill(6912, 1933, 1957); // identifier
table[1984] = 6912; // identifier
table[1991] = 6912; // identifier
table[1994] = 6912; // identifier
table.fill(6912, 1997, 2021); // identifier
table[2048] = 6912; // identifier
table[2055] = 6912; // identifier
table[2058] = 6912; // identifier
table.fill(6912, 2061, 2085); // identifier
table[2112] = 6912; // identifier
table[2119] = 6592; // identifier
table[2122] = 6912; // identifier
table.fill(6912, 2125, 2149); // identifier
table[2176] = 6912; // identifier
table[2183] = 6912; // identifier
table[2186] = 6912; // identifier
table.fill(6912, 2189, 2213); // identifier
table[2240] = 6912; // identifier
table[2247] = 6912; // identifier
table[2250] = 6912; // identifier
table.fill(6912, 2253, 2277); // identifier
table[2304] = 6912; // identifier
table[2311] = 6912; // identifier
table[2314] = 6912; // identifier
table.fill(6912, 2317, 2341); // identifier
table[2380] = 32; // ~=
table[2444] = 34; // |=
table[2496] = 6912; // identifier
table[2503] = 6912; // identifier
table[2506] = 6912; // identifier
table.fill(6912, 2509, 2533); // identifier
table[2560] = 6912; // identifier
table[2567] = 6912; // identifier
table[2570] = 6912; // identifier
table.fill(6912, 2573, 2597); // identifier
table[2624] = 6912; // identifier
table[2631] = 6912; // identifier
table[2634] = 6912; // identifier
table.fill(6912, 2637, 2661); // identifier
table[2695] = 11456; // important_value
table[2698] = 11456; // important_value
table.fill(11456, 2701, 2725); // important_value
table[2752] = 6912; // identifier
table[2759] = 6912; // identifier
table[2762] = 6912; // identifier
table.fill(6912, 2765, 2789); // identifier
table[2816] = 6912; // identifier
table[2823] = 6912; // identifier
table[2826] = 6912; // identifier
table.fill(6912, 2829, 2853); // identifier
table[2880] = 6912; // identifier
table[2887] = 6912; // identifier
table[2890] = 6912; // identifier
table.fill(6912, 2893, 2917); // identifier
table[2944] = 6912; // identifier
table[2951] = 6912; // identifier
table[2954] = 6912; // identifier
table.fill(6912, 2957, 2981); // identifier
table[3018] = 3008; // _nth_functional_notation
table[3082] = 55; // color_value
table.fill(55, 3085, 3087); // color_value
table.fill(55, 3089, 3094); // color_value
table[3146] = 3072; // color_value
table.fill(3072, 3149, 3151); // color_value
table.fill(3072, 3153, 3158); // color_value
table[3210] = 3136; // color_value
table.fill(3136, 3213, 3215); // color_value
table.fill(3136, 3217, 3222); // color_value
table[3274] = 3200; // color_value
table.fill(3200, 3277, 3279); // color_value
table.fill(3200, 3281, 3286); // color_value
table[3338] = 3264; // color_value
table.fill(3264, 3341, 3343); // color_value
table.fill(3264, 3345, 3350); // color_value
table.fill(56, 3393, 3396); // escape_sequence
table[3402] = 3712; // escape_sequence
table.fill(3712, 3405, 3407); // escape_sequence
table.fill(3712, 3409, 3414); // escape_sequence
table.fill(56, 3457, 3460); // escape_sequence
table[3466] = 3392; // escape_sequence
table.fill(3392, 3469, 3471); // escape_sequence
table.fill(3392, 3473, 3478); // escape_sequence
table.fill(56, 3521, 3524); // escape_sequence
table[3530] = 3456; // escape_sequence
table.fill(3456, 3533, 3535); // escape_sequence
table.fill(3456, 3537, 3542); // escape_sequence
table.fill(56, 3585, 3588); // escape_sequence
table[3594] = 3520; // escape_sequence
table.fill(3520, 3597, 3599); // escape_sequence
table.fill(3520, 3601, 3606); // escape_sequence
table.fill(56, 3649, 3652); // escape_sequence
table[3658] = 3584; // escape_sequence
table.fill(3584, 3661, 3663); // escape_sequence
table.fill(3584, 3665, 3670); // escape_sequence
table.fill(56, 3713, 3716); // escape_sequence
table[3776] = 11648; // _class_name_token4
table[3780] = 4032; // integer_value
table[3783] = 11584; // _class_name_token4
table[3786] = 4224; // float_value
table.fill(3904, 3789, 3792); // integer_value
table[3792] = 11648; // _class_name_token4
table.fill(3904, 3793, 3813); // integer_value
table[3840] = 11648; // _class_name_token4
table[3844] = 4032; // integer_value
table[3847] = 10880; // plain_value
table[3850] = 4288; // float_value
table.fill(3968, 3853, 3856); // integer_value
table[3856] = 10944; // plain_value
table.fill(3968, 3857, 3877); // integer_value
table[3904] = 11648; // _class_name_token4
table[3908] = 4032; // integer_value
table[3911] = 11648; // _class_name_token4
table[3914] = 11648; // _class_name_token4
table.fill(3904, 3917, 3920); // integer_value
table[3920] = 11648; // _class_name_token4
table.fill(3904, 3921, 3941); // integer_value
table[3968] = 11648; // _class_name_token4
table[3972] = 4032; // integer_value
table[3975] = 10944; // plain_value
table[3978] = 10944; // plain_value
table.fill(3968, 3981, 3984); // integer_value
table[3984] = 10944; // plain_value
table.fill(3968, 3985, 4005); // integer_value
table[4036] = 4032; // integer_value
table.fill(4032, 4045, 4048); // integer_value
table.fill(4032, 4049, 4069); // integer_value
table[4096] = 6912; // identifier
table[4100] = 4544; // float_value
table[4103] = 6912; // identifier
table[4106] = 6912; // identifier
table.fill(4096, 4109, 4112); // float_value
table[4112] = 6912; // identifier
table.fill(4096, 4113, 4133); // float_value
table[4160] = 6912; // identifier
table[4164] = 4544; // float_value
table[4167] = 6912; // identifier
table[4170] = 4160; // float_value
table.fill(4096, 4173, 4176); // float_value
table[4176] = 6912; // identifier
table.fill(4096, 4177, 4197); // float_value
table[4224] = 11648; // _class_name_token4
table[4228] = 4544; // float_value
table[4231] = 11648; // _class_name_token4
table[4234] = 4224; // float_value
table.fill(4416, 4237, 4240); // float_value
table[4240] = 11648; // _class_name_token4
table.fill(4416, 4241, 4261); // float_value
table[4288] = 11648; // _class_name_token4
table[4292] = 4544; // float_value
table[4295] = 10944; // plain_value
table[4298] = 4288; // float_value
table.fill(4480, 4301, 4304); // float_value
table[4304] = 10944; // plain_value
table.fill(4480, 4305, 4325); // float_value
table[4356] = 4544; // float_value
table[4362] = 4352; // float_value
table.fill(4544, 4365, 4368); // float_value
table.fill(4544, 4369, 4389); // float_value
table[4416] = 11648; // _class_name_token4
table[4420] = 4544; // float_value
table[4423] = 11648; // _class_name_token4
table[4426] = 11648; // _class_name_token4
table.fill(4416, 4429, 4432); // float_value
table[4432] = 11648; // _class_name_token4
table.fill(4416, 4433, 4453); // float_value
table[4480] = 11648; // _class_name_token4
table[4484] = 4544; // float_value
table[4487] = 10944; // plain_value
table[4490] = 10944; // plain_value
table.fill(4480, 4493, 4496); // float_value
table[4496] = 10944; // plain_value
table.fill(4480, 4497, 4517); // float_value
table[4548] = 4544; // float_value
table.fill(4544, 4557, 4560); // float_value
table.fill(4544, 4561, 4581); // float_value
table[4608] = 6912; // identifier
table[4615] = 6912; // identifier
table[4618] = 6912; // identifier
table.fill(6912, 4621, 4636); // identifier
table[4636] = 8064; // identifier
table.fill(6912, 4637, 4645); // identifier
table[4672] = 6912; // identifier
table[4679] = 6912; // identifier
table[4682] = 6912; // identifier
table.fill(6912, 4685, 4700); // identifier
table[4700] = 7936; // identifier
table.fill(6912, 4701, 4709); // identifier
table[4736] = 6912; // identifier
table[4743] = 6912; // identifier
table[4746] = 6912; // identifier
table.fill(6912, 4749, 4767); // identifier
table[4767] = 7808; // identifier
table.fill(6912, 4768, 4773); // identifier
table[4800] = 6912; // identifier
table[4807] = 6912; // identifier
table[4810] = 6912; // identifier
table.fill(6912, 4813, 4835); // identifier
table[4835] = 7872; // identifier
table[4836] = 6912; // identifier
table[4864] = 6912; // identifier
table[4871] = 6912; // identifier
table[4874] = 6912; // identifier
table.fill(6912, 4877, 4894); // identifier
table[4894] = 7680; // identifier
table.fill(6912, 4895, 4901); // identifier
table[4928] = 6912; // identifier
table[4935] = 6912; // identifier
table[4938] = 6912; // identifier
table.fill(6912, 4941, 4955); // identifier
table[4955] = 7488; // identifier
table.fill(6912, 4956, 4965); // identifier
table[4992] = 6912; // identifier
table[4999] = 6912; // identifier
table[5002] = 6912; // identifier
table.fill(6912, 5005, 5017); // identifier
table[5017] = 7552; // identifier
table.fill(6912, 5018, 5029); // identifier
table[5056] = 6912; // identifier
table[5063] = 6912; // identifier
table[5066] = 6912; // identifier
table.fill(6912, 5069, 5081); // identifier
table[5081] = 7616; // identifier
table.fill(6912, 5082, 5093); // identifier
table[5120] = 6912; // identifier
table[5127] = 6912; // identifier
table[5130] = 6912; // identifier
table.fill(6912, 5133, 5137); // identifier
table[5137] = 7360; // identifier
table.fill(6912, 5138, 5148); // identifier
table[5148] = 4736; // identifier
table.fill(6912, 5149, 5157); // identifier
table[5184] = 6912; // identifier
table[5191] = 6912; // identifier
table[5194] = 6912; // identifier
table.fill(6912, 5197, 5204); // identifier
table[5204] = 7232; // identifier
table.fill(6912, 5205, 5221); // identifier
table[5248] = 6912; // identifier
table[5255] = 6912; // identifier
table[5258] = 6912; // identifier
table.fill(6912, 5261, 5273); // identifier
table[5273] = 7168; // identifier
table.fill(6912, 5274, 5285); // identifier
table[5312] = 6912; // identifier
table[5319] = 6912; // identifier
table[5322] = 6912; // identifier
table.fill(6912, 5325, 5344); // identifier
table[5344] = 4608; // identifier
table.fill(6912, 5345, 5349); // identifier
table[5376] = 6912; // identifier
table[5383] = 6912; // identifier
table[5386] = 6912; // identifier
table.fill(6912, 5389, 5406); // identifier
table[5406] = 4672; // identifier
table.fill(6912, 5407, 5413); // identifier
table[5440] = 6912; // identifier
table[5447] = 6912; // identifier
table[5450] = 6912; // identifier
table.fill(6912, 5453, 5460); // identifier
table[5460] = 4800; // identifier
table.fill(6912, 5461, 5477); // identifier
table[5504] = 6912; // identifier
table[5511] = 6912; // identifier
table[5514] = 6912; // identifier
table.fill(6912, 5517, 5524); // identifier
table[5524] = 4864; // identifier
table.fill(6912, 5525, 5541); // identifier
table[5568] = 6912; // identifier
table[5575] = 6912; // identifier
table[5578] = 6912; // identifier
table.fill(6912, 5581, 5591); // identifier
table[5591] = 4992; // identifier
table.fill(6912, 5592, 5605); // identifier
table[5632] = 6912; // identifier
table[5639] = 6912; // identifier
table[5642] = 6912; // identifier
table.fill(6912, 5645, 5655); // identifier
table[5655] = 5056; // identifier
table.fill(6912, 5656, 5669); // identifier
table[5696] = 6912; // identifier
table[5703] = 6912; // identifier
table[5706] = 6912; // identifier
table.fill(6912, 5709, 5714); // identifier
table[5714] = 5312; // identifier
table.fill(6912, 5715, 5733); // identifier
table[5760] = 6912; // identifier
table[5767] = 6912; // identifier
table[5770] = 6912; // identifier
table.fill(6912, 5773, 5792); // identifier
table[5792] = 5440; // identifier
table.fill(6912, 5793, 5797); // identifier
table[5824] = 6912; // identifier
table[5831] = 6912; // identifier
table[5834] = 6912; // identifier
table.fill(6912, 5837, 5846); // identifier
table[5846] = 5504; // identifier
table.fill(6912, 5847, 5861); // identifier
table[5888] = 6912; // identifier
table[5895] = 6912; // identifier
table[5898] = 6912; // identifier
table.fill(6912, 5901, 5910); // identifier
table[5910] = 5568; // identifier
table.fill(6912, 5911, 5925); // identifier
table[5952] = 6912; // identifier
table[5959] = 6912; // identifier
table[5962] = 6912; // identifier
table.fill(6912, 5965, 5974); // identifier
table[5974] = 5632; // identifier
table.fill(6912, 5975, 5989); // identifier
table[6016] = 6912; // identifier
table[6023] = 6912; // identifier
table[6026] = 6912; // identifier
table.fill(6912, 6029, 6036); // identifier
table[6036] = 5696; // identifier
table.fill(6912, 6037, 6053); // identifier
table[6080] = 6912; // identifier
table[6087] = 6912; // identifier
table[6090] = 6912; // identifier
table.fill(6912, 6093, 6107); // identifier
table[6107] = 5760; // identifier
table.fill(6912, 6108, 6117); // identifier
table[6144] = 6912; // identifier
table[6151] = 6912; // identifier
table[6154] = 6912; // identifier
table.fill(6912, 6157, 6162); // identifier
table[6162] = 5888; // identifier
table.fill(6912, 6163, 6169); // identifier
table[6169] = 6848; // identifier
table.fill(6912, 6170, 6181); // identifier
table[6208] = 6912; // identifier
table[6215] = 6912; // identifier
table[6218] = 6912; // identifier
table.fill(6912, 6221, 6226); // identifier
table[6226] = 5952; // identifier
table.fill(6912, 6227, 6245); // identifier
table[6272] = 6912; // identifier
table[6279] = 6912; // identifier
table[6282] = 6912; // identifier
table.fill(6912, 6285, 6297); // identifier
table[6297] = 6016; // identifier
table.fill(6912, 6298, 6309); // identifier
table[6336] = 6912; // identifier
table[6343] = 6912; // identifier
table[6346] = 6912; // identifier
table.fill(6912, 6349, 6364); // identifier
table[6364] = 6080; // identifier
table.fill(6912, 6365, 6373); // identifier
table[6400] = 6912; // identifier
table[6407] = 6144; // identifier
table[6410] = 6912; // identifier
table.fill(6912, 6413, 6437); // identifier
table[6464] = 6912; // identifier
table[6471] = 6208; // identifier
table[6474] = 6912; // identifier
table.fill(6912, 6477, 6501); // identifier
table[6528] = 6912; // identifier
table[6535] = 6912; // identifier
table[6538] = 6912; // identifier
table.fill(6912, 6541, 6548); // identifier
table[6548] = 6272; // identifier
table.fill(6912, 6549, 6565); // identifier
table[6592] = 6912; // identifier
table[6599] = 6912; // identifier
table[6602] = 6912; // identifier
table.fill(6912, 6605, 6610); // identifier
table[6610] = 6336; // identifier
table.fill(6912, 6611, 6629); // identifier
table[6656] = 6912; // identifier
table[6663] = 6912; // identifier
table[6666] = 6912; // identifier
table.fill(6912, 6669, 6678); // identifier
table[6678] = 6400; // identifier
table.fill(6912, 6679, 6693); // identifier
table[6720] = 6912; // identifier
table[6727] = 6912; // identifier
table[6730] = 6912; // identifier
table.fill(6912, 6733, 6752); // identifier
table[6752] = 6464; // identifier
table.fill(6912, 6753, 6757); // identifier
table[6784] = 6912; // identifier
table[6791] = 6912; // identifier
table[6794] = 6912; // identifier
table.fill(6912, 6797, 6815); // identifier
table[6815] = 6720; // identifier
table.fill(6912, 6816, 6821); // identifier
table[6848] = 6912; // identifier
table[6855] = 6912; // identifier
table[6858] = 6912; // identifier
table.fill(6912, 6861, 6865); // identifier
table[6865] = 6784; // identifier
table.fill(6912, 6866, 6885); // identifier
table[6912] = 6912; // identifier
table[6919] = 6912; // identifier
table[6922] = 6912; // identifier
table.fill(6912, 6925, 6949); // identifier
table[6976] = 6912; // identifier
table[6983] = 7104; // identifier
table[6986] = 4160; // float_value
table.fill(6912, 6989, 7010); // identifier
table[7010] = 5184; // identifier
table.fill(6912, 7011, 7013); // identifier
table[7040] = 6912; // identifier
table[7047] = 7104; // identifier
table[7050] = 4160; // float_value
table.fill(6912, 7053, 7077); // identifier
table[7104] = 6912; // identifier
table[7111] = 6912; // identifier
table[7114] = 4160; // float_value
table.fill(6912, 7117, 7141); // identifier
table[7168] = 6912; // identifier
table[7175] = 6912; // identifier
table[7178] = 6912; // identifier
table.fill(6912, 7181, 7204); // identifier
table[7204] = 2880; // only
table[7232] = 6912; // identifier
table[7239] = 6912; // identifier
table[7242] = 6912; // identifier
table.fill(6912, 7245, 7259); // identifier
table[7259] = 2496; // even
table.fill(6912, 7260, 7269); // identifier
table[7296] = 6912; // identifier
table[7303] = 6912; // identifier
table[7306] = 6912; // identifier
table.fill(6912, 7309, 7327); // identifier
table[7327] = 1984; // is
table.fill(6912, 7328, 7333); // identifier
table[7360] = 6912; // identifier
table[7367] = 6912; // identifier
table[7370] = 6912; // identifier
table.fill(6912, 7373, 7391); // identifier
table[7391] = 1856; // has
table.fill(6912, 7392, 7397); // identifier
table[7424] = 6912; // identifier
table[7431] = 6912; // identifier
table[7434] = 6912; // identifier
table.fill(6912, 7437, 7443); // identifier
table[7443] = 2560; // odd
table.fill(6912, 7444, 7461); // identifier
table[7488] = 6912; // identifier
table[7495] = 6912; // identifier
table[7498] = 6912; // identifier
table.fill(6912, 7501, 7507); // identifier
table[7507] = 2752; // and
table.fill(6912, 7508, 7525); // identifier
table[7552] = 6912; // identifier
table[7559] = 6912; // identifier
table[7562] = 6912; // identifier
table.fill(6912, 7565, 7571); // identifier
table[7571] = 2240; // nth-child
table.fill(6912, 7572, 7589); // identifier
table[7616] = 6912; // identifier
table[7623] = 6912; // identifier
table[7626] = 6912; // identifier
table.fill(6912, 7629, 7635); // identifier
table[7635] = 2304; // nth-last-child
table.fill(6912, 7636, 7653); // identifier
table[7680] = 6912; // identifier
table[7687] = 6912; // identifier
table[7690] = 6912; // identifier
table.fill(6912, 7693, 7700); // identifier
table[7700] = 2048; // where
table.fill(6912, 7701, 7717); // identifier
table[7744] = 6912; // identifier
table[7751] = 6912; // identifier
table[7754] = 6912; // identifier
table.fill(6912, 7757, 7776); // identifier
table[7776] = 1920; // not
table.fill(6912, 7777, 7781); // identifier
table[7808] = 6912; // identifier
table[7815] = 6912; // identifier
table[7818] = 6912; // identifier
table.fill(6912, 7821, 7840); // identifier
table[7840] = 2112; // host
table.fill(6912, 7841, 7845); // identifier
table[7872] = 6912; // identifier
table[7879] = 6912; // identifier
table[7882] = 6912; // identifier
table.fill(6912, 7885, 7904); // identifier
table[7904] = 2176; // host-context
table.fill(6912, 7905, 7909); // identifier
table[7936] = 6912; // identifier
table[7943] = 6912; // identifier
table[7946] = 6912; // identifier
table.fill(6912, 7949, 7962); // identifier
table[7962] = 1152; // from
table.fill(6912, 7963, 7973); // identifier
table[8000] = 6912; // identifier
table[8007] = 6912; // identifier
table[8010] = 6912; // identifier
table.fill(6912, 8013, 8028); // identifier
table[8028] = 1216; // to
table.fill(6912, 8029, 8037); // identifier
table[8064] = 6912; // identifier
table[8071] = 6912; // identifier
table[8074] = 6912; // identifier
table.fill(6912, 8077, 8094); // identifier
table[8094] = 2944; // selector
table.fill(6912, 8095, 8101); // identifier
table[8128] = 6912; // identifier
table[8135] = 6912; // identifier
table[8138] = 6912; // identifier
table.fill(6912, 8141, 8147); // identifier
table[8147] = 7424; // identifier
table[8148] = 6912; // identifier
table[8149] = 2624; // of
table.fill(6912, 8150, 8155); // identifier
table[8155] = 5248; // identifier
table.fill(6912, 8156, 8158); // identifier
table[8158] = 2816; // or
table.fill(6912, 8159, 8165); // identifier
table[8199] = 10368; // at_keyword
table.fill(10368, 8205, 8222); // at_keyword
table[8222] = 10752; // at_keyword
table.fill(10368, 8223, 8229); // at_keyword
table[8263] = 10368; // at_keyword
table.fill(10368, 8269, 8276); // at_keyword
table[8276] = 10816; // at_keyword
table.fill(10368, 8277, 8293); // at_keyword
table[8327] = 10368; // at_keyword
table.fill(10368, 8333, 8349); // at_keyword
table[8349] = 10624; // at_keyword
table.fill(10368, 8350, 8357); // at_keyword
table[8391] = 10368; // at_keyword
table.fill(10368, 8397, 8402); // at_keyword
table[8402] = 10688; // at_keyword
table.fill(10368, 8403, 8421); // at_keyword
table[8455] = 10368; // at_keyword
table.fill(10368, 8461, 8471); // at_keyword
table[8471] = 10560; // at_keyword
table.fill(10368, 8472, 8485); // at_keyword
table[8519] = 10368; // at_keyword
table.fill(10368, 8525, 8544); // at_keyword
table[8544] = 10432; // at_keyword
table.fill(10368, 8545, 8549); // at_keyword
table[8583] = 10368; // at_keyword
table.fill(10368, 8589, 8596); // at_keyword
table[8596] = 10496; // at_keyword
table.fill(10368, 8597, 8613); // at_keyword
table[8647] = 10368; // at_keyword
table.fill(10368, 8653, 8668); // at_keyword
table[8668] = 8192; // at_keyword
table.fill(10368, 8669, 8677); // at_keyword
table[8711] = 10368; // at_keyword
table.fill(10368, 8717, 8735); // at_keyword
table[8735] = 8256; // at_keyword
table.fill(10368, 8736, 8741); // at_keyword
table[8775] = 10368; // at_keyword
table.fill(10368, 8781, 8796); // at_keyword
table[8796] = 8320; // at_keyword
table.fill(10368, 8797, 8805); // at_keyword
table[8839] = 10368; // at_keyword
table.fill(10368, 8845, 8849); // at_keyword
table[8849] = 8384; // at_keyword
table.fill(10368, 8850, 8869); // at_keyword
table[8903] = 10368; // at_keyword
table.fill(10368, 8909, 8915); // at_keyword
table[8915] = 8448; // at_keyword
table.fill(10368, 8916, 8933); // at_keyword
table[8967] = 10368; // at_keyword
table.fill(10368, 8973, 8990); // at_keyword
table[8990] = 8512; // at_keyword
table.fill(10368, 8991, 8997); // at_keyword
table[9031] = 10368; // at_keyword
table.fill(10368, 9037, 9050); // at_keyword
table[9050] = 8576; // at_keyword
table.fill(10368, 9051, 9061); // at_keyword
table[9095] = 10368; // at_keyword
table.fill(10368, 9101, 9117); // at_keyword
table[9117] = 8640; // at_keyword
table.fill(10368, 9118, 9125); // at_keyword
table[9159] = 10368; // at_keyword
table.fill(10368, 9165, 9182); // at_keyword
table[9182] = 8704; // at_keyword
table.fill(10368, 9183, 9189); // at_keyword
table[9223] = 10368; // at_keyword
table.fill(10368, 9229, 9234); // at_keyword
table[9234] = 8768; // at_keyword
table.fill(10368, 9235, 9249); // at_keyword
table[9249] = 9984; // at_keyword
table.fill(10368, 9250, 9253); // at_keyword
table[9287] = 10368; // at_keyword
table.fill(10368, 9293, 9309); // at_keyword
table[9309] = 8832; // at_keyword
table.fill(10368, 9310, 9317); // at_keyword
table[9351] = 10368; // at_keyword
table.fill(10368, 9357, 9364); // at_keyword
table[9364] = 8896; // at_keyword
table.fill(10368, 9365, 9381); // at_keyword
table[9415] = 10368; // at_keyword
table.fill(10368, 9421, 9436); // at_keyword
table[9436] = 8960; // at_keyword
table.fill(10368, 9437, 9445); // at_keyword
table[9479] = 10368; // at_keyword
table.fill(10368, 9485, 9489); // at_keyword
table[9489] = 9024; // at_keyword
table.fill(10368, 9490, 9509); // at_keyword
table[9543] = 10368; // at_keyword
table.fill(10368, 9549, 9562); // at_keyword
table[9562] = 9088; // at_keyword
table.fill(10368, 9563, 9573); // at_keyword
table[9607] = 10368; // at_keyword
table.fill(10368, 9613, 9617); // at_keyword
table[9617] = 9152; // at_keyword
table.fill(10368, 9618, 9637); // at_keyword
table[9671] = 10368; // at_keyword
table.fill(10368, 9677, 9695); // at_keyword
table[9695] = 9280; // at_keyword
table.fill(10368, 9696, 9701); // at_keyword
table[9735] = 10368; // at_keyword
table.fill(10368, 9741, 9757); // at_keyword
table[9757] = 9408; // at_keyword
table.fill(10368, 9758, 9765); // at_keyword
table[9799] = 10368; // at_keyword
table.fill(10368, 9805, 9822); // at_keyword
table[9822] = 9472; // at_keyword
table.fill(10368, 9823, 9829); // at_keyword
table[9863] = 10368; // at_keyword
table.fill(10368, 9869, 9878); // at_keyword
table[9878] = 9600; // at_keyword
table.fill(10368, 9879, 9893); // at_keyword
table[9927] = 10368; // at_keyword
table.fill(10368, 9933, 9940); // at_keyword
table[9940] = 9664; // at_keyword
table.fill(10368, 9941, 9957); // at_keyword
table[9991] = 10368; // at_keyword
table.fill(10368, 9997, 10013); // at_keyword
table[10013] = 9728; // at_keyword
table.fill(10368, 10014, 10021); // at_keyword
table[10055] = 10368; // at_keyword
table.fill(10368, 10061, 10069); // at_keyword
table[10069] = 9792; // at_keyword
table.fill(10368, 10070, 10085); // at_keyword
table[10119] = 10368; // at_keyword
table.fill(10368, 10125, 10138); // at_keyword
table[10138] = 9920; // at_keyword
table.fill(10368, 10139, 10149); // at_keyword
table[10183] = 10368; // at_keyword
table.fill(10368, 10189, 10212); // at_keyword
table[10212] = 10048; // at_keyword
table[10247] = 10368; // at_keyword
table.fill(10368, 10253, 10257); // at_keyword
table[10257] = 10112; // at_keyword
table.fill(10368, 10258, 10277); // at_keyword
table[10311] = 10368; // at_keyword
table.fill(10368, 10317, 10324); // at_keyword
table[10324] = 10176; // at_keyword
table.fill(10368, 10325, 10341); // at_keyword
table[10375] = 10368; // at_keyword
table.fill(10368, 10381, 10405); // at_keyword
table[10439] = 10368; // at_keyword
table.fill(10368, 10445, 10463); // at_keyword
table[10463] = 1664; // @supports
table.fill(10368, 10464, 10469); // at_keyword
table[10503] = 10368; // at_keyword
table.fill(10368, 10509, 10527); // at_keyword
table[10527] = 1600; // @keyframes
table.fill(10368, 10528, 10533); // at_keyword
table[10567] = 10368; // at_keyword
table.fill(10368, 10573, 10577); // at_keyword
table[10577] = 1408; // @media
table.fill(10368, 10578, 10597); // at_keyword
table[10631] = 10368; // at_keyword
table.fill(10368, 10637, 10644); // at_keyword
table[10644] = 1728; // @scope
table.fill(10368, 10645, 10661); // at_keyword
table[10695] = 10368; // at_keyword
table.fill(10368, 10701, 10708); // at_keyword
table[10708] = 1536; // @namespace
table.fill(10368, 10709, 10725); // at_keyword
table[10759] = 10368; // at_keyword
table.fill(10368, 10765, 10784); // at_keyword
table[10784] = 1344; // @import
table.fill(10368, 10785, 10789); // at_keyword
table[10823] = 10368; // at_keyword
table.fill(10368, 10829, 10848); // at_keyword
table[10848] = 1472; // @charset
table.fill(10368, 10849, 10853); // at_keyword
table[10880] = 11648; // _class_name_token4
table[10887] = 10944; // plain_value
table[10890] = 4288; // float_value
table.fill(10944, 10893, 10917); // plain_value
table[10944] = 11648; // _class_name_token4
table[10951] = 10944; // plain_value
table[10954] = 10944; // plain_value
table.fill(10944, 10957, 10981); // plain_value
table[11015] = 11456; // important_value
table[11018] = 11456; // important_value
table.fill(11456, 11021, 11035); // important_value
table[11035] = 11520; // important_value
table.fill(11456, 11036, 11045); // important_value
table[11079] = 11456; // important_value
table[11082] = 11456; // important_value
table.fill(11456, 11085, 11089); // important_value
table[11089] = 11008; // important_value
table.fill(11456, 11090, 11109); // important_value
table[11143] = 11456; // important_value
table[11146] = 11456; // important_value
table.fill(11456, 11149, 11168); // important_value
table[11168] = 11072; // important_value
table.fill(11456, 11169, 11173); // important_value
table[11207] = 11456; // important_value
table[11210] = 11456; // important_value
table.fill(11456, 11213, 11230); // important_value
table[11230] = 11136; // important_value
table.fill(11456, 11231, 11237); // important_value
table[11271] = 11456; // important_value
table[11274] = 11456; // important_value
table.fill(11456, 11277, 11292); // important_value
table[11292] = 11200; // important_value
table.fill(11456, 11293, 11301); // important_value
table[11335] = 11456; // important_value
table[11338] = 11456; // important_value
table.fill(11456, 11341, 11357); // important_value
table[11357] = 11264; // important_value
table.fill(11456, 11358, 11365); // important_value
table[11399] = 11456; // important_value
table[11402] = 11456; // important_value
table.fill(11456, 11405, 11418); // important_value
table[11418] = 11328; // important_value
table.fill(11456, 11419, 11429); // important_value
table[11463] = 11456; // important_value
table[11466] = 11456; // important_value
table.fill(11456, 11469, 11493); // important_value
table[11527] = 11456; // important_value
table[11530] = 11456; // important_value
table.fill(11456, 11533, 11552); // important_value
table[11552] = 2688; // !important
table.fill(11456, 11553, 11557); // important_value
table[11584] = 11648; // _class_name_token4
table[11591] = 11648; // _class_name_token4
table[11594] = 4224; // float_value
table.fill(11648, 11597, 11621); // _class_name_token4
table[11648] = 11648; // _class_name_token4
table[11655] = 11648; // _class_name_token4
table[11658] = 11648; // _class_name_token4
table.fill(11648, 11661, 11685); // _class_name_token4
table.fill(11712, 11712, 11714); // js_comment
table.fill(11712, 11715, 11750); // js_comment
table.fill(11776, 11776, 11781); // comment
table[11781] = 12480; // comment
table.fill(11776, 11782, 11814); // comment
table.fill(11840, 11841, 11844); // _nth_functional_notation
table[11850] = 3008; // _nth_functional_notation
table[11911] = 10368; // at_keyword
table.fill(10368, 11917, 11922); // at_keyword
table[11922] = 9856; // at_keyword
table.fill(10368, 11923, 11927); // at_keyword
table[11927] = 9536; // at_keyword
table[11928] = 10304; // at_keyword
table[11929] = 10368; // at_keyword
table[11930] = 9344; // at_keyword
table[11931] = 10240; // at_keyword
table.fill(10368, 11932, 11935); // at_keyword
table[11935] = 9216; // at_keyword
table.fill(10368, 11936, 11941); // at_keyword
table[11975] = 12096; // float_value
table[11978] = 4352; // float_value
table[12042] = 1088; // float_value
table[12106] = 4352; // float_value
table[12172] = 33; // ^=
table[12236] = 36; // $=
table.fill(11456, 12301, 12304); // important_value
table.fill(11456, 12305, 12311); // important_value
table[12311] = 11392; // important_value
table.fill(11456, 12312, 12325); // important_value
table.fill(56, 12352, 12354); // escape_sequence
table.fill(56, 12356, 12362); // escape_sequence
table[12362] = 3648; // escape_sequence
table.fill(56, 12363, 12365); // escape_sequence
table.fill(3648, 12365, 12367); // escape_sequence
table.fill(56, 12367, 12369); // escape_sequence
table.fill(3648, 12369, 12374); // escape_sequence
table.fill(56, 12374, 12390); // escape_sequence
table[12426] = 3328; // color_value
table.fill(3328, 12429, 12431); // color_value
table.fill(3328, 12433, 12438); // color_value
table.fill(11776, 12480, 12485); // comment
table[12485] = 12480; // comment
table.fill(11776, 12486, 12489); // comment
table[12489] = 69; // comment
table.fill(11776, 12490, 12518); // comment
table[12554] = 12416; // color_value
table.fill(12416, 12557, 12559); // color_value
table.fill(12416, 12561, 12566); // color_value
table[12769] = 12288; // important_value
table[12770] = 51; // "
table[12771] = 192; // #
table[12772] = 12224; // $=
table[12774] = 18; // &
table[12775] = 50; // '
table[12776] = 16; // (
table[12777] = 17; // )
table[12778] = 1792; // *
table[12779] = 256; // +
table[12780] = 6; // ,
table[12781] = 320; // -
table[12782] = 128; // .
table[12783] = 384; // /
table.fill(768, 12784, 12794); // integer_value
table[12794] = 1280; // :
table[12795] = 7; // ;
table[12797] = 31; // =
table[12798] = 38; // >
table[12800] = 11904; // _keyframes_statement_token1
table.fill(6912, 12801, 12805); // identifier
table[12805] = 7040; // identifier
table.fill(6912, 12806, 12827); // identifier
table[12827] = 1; // [
table[12828] = 12352; // escape_sequence
table[12829] = 37; // ]
table[12830] = 12160; // ^=
table[12831] = 6912; // identifier
table[12833] = 4928; // identifier
table.fill(6912, 12834, 12837); // identifier
table[12837] = 6976; // identifier
table[12838] = 5376; // identifier
table[12839] = 6912; // identifier
table[12840] = 5120; // identifier
table[12841] = 7296; // identifier
table.fill(6912, 12842, 12846); // identifier
table[12846] = 448; // _nth_functional_notation
table[12847] = 8128; // identifier
table.fill(6912, 12848, 12851); // identifier
table[12851] = 6528; // identifier
table[12852] = 8000; // identifier
table.fill(6912, 12853, 12855); // identifier
table[12855] = 5824; // identifier
table.fill(6912, 12856, 12859); // identifier
table[12859] = 12; // {
table[12860] = 2432; // |
table[12861] = 13; // }
table[12862] = 2368; // ~
table.fill(6912, 12896, 12992); // identifier

/**
 * @param {Uint8Array} input
 * @param {number} offset
 * @returns {{ state: number, start: number, end: number }}
 */
const next = (input, offset) => {
  // 199
  let i = offset | 0;
  const l = input.length;
  while (true) {
    let state = 0;
    let successState = 0;
    let successPos = 0;
    while (i < l && skipTable[input[i]]) {
      i++;
    }
    offset = i;
    if (i < l && (state = table[input[i++] + 12736]) > 69) {
      do {
        if (state <= 11712) {
          if (state > 1088) {
            do {
              successState = state;
              successPos = i;
            } while (i < l && (state = table[state + ec[input[i++]]]) > 1088);
            break;
          }
          successState = state;
          successPos = i;
          if (i >= l) break;
        }
        while (i < l && (state = table[state + ec[input[i++]]]) > 11712);
      } while ((state - 70) >>> 0 < 11643);
    }

    if (--state >>> 0 >= 69) {
      if (successState) {
        i = successPos;
        state = tokenIds[successState >> 6];
      } else {
        state = ((i - l) >>> 31) + 66;
        offset = i = -1;
      }
    }
    if (state === 69 || state === 68) {
      offset = i;
      continue;
    }
    return {
      state,
      start: offset,
      end: i,
    };
  }
};

export { EOF, ERROR, next };
