// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const skipTable = new Uint8Array(256);
skipTable[9] = 1;
skipTable[32] = 1;

const tokenIds = new Uint8Array(60);
tokenIds[1] = 8; // "
tokenIds.fill(17, 2, 4); // local_date_time
tokenIds[4] = 18; // local_date
tokenIds[5] = 19; // local_time
tokenIds.fill(28, 6, 15); // _integer_token7
tokenIds.fill(32, 15, 17); // _float_token11
tokenIds.fill(34, 17, 34); // bare_key
tokenIds[34] = 2; // [
tokenIds[35] = 3; // ]
tokenIds[36] = 14; // _literal_string
tokenIds[37] = 15; // boolean
tokenIds[38] = 19; // local_time
tokenIds[39] = 29; // _integer_token8
tokenIds[40] = 30; // _integer_token9
tokenIds[41] = 31; // _integer_token10
tokenIds[42] = 32; // _float_token11
tokenIds[43] = 33; // _float_token12
tokenIds.fill(34, 44, 59); // bare_key
tokenIds[59] = 37; // comment

const ec = new Uint8Array(256);
ec.fill(1, 0, 9);
ec[10] = 2;
ec.fill(1, 11, 32);
ec[32] = 3;
ec[34] = 4;
ec[39] = 5;
ec[43] = 6;
ec[45] = 7;
ec[46] = 8;
ec[48] = 9;
ec[49] = 10;
ec[50] = 11;
ec[51] = 12;
ec.fill(13, 52, 54);
ec[54] = 14;
ec[55] = 15;
ec.fill(16, 56, 58);
ec[58] = 17;
ec.fill(18, 65, 69);
ec[69] = 19;
ec[70] = 18;
ec.fill(20, 71, 84);
ec[84] = 21;
ec.fill(20, 85, 90);
ec[90] = 22;
ec[91] = 23;
ec[93] = 24;
ec[95] = 25;
ec[97] = 26;
ec[98] = 27;
ec.fill(18, 99, 101);
ec[101] = 28;
ec[102] = 29;
ec.fill(20, 103, 105);
ec[105] = 30;
ec.fill(20, 106, 108);
ec[108] = 31;
ec[109] = 20;
ec[110] = 32;
ec[111] = 33;
ec.fill(20, 112, 114);
ec[114] = 34;
ec[115] = 35;
ec[116] = 21;
ec[117] = 36;
ec.fill(20, 118, 120);
ec[120] = 37;
ec[121] = 20;
ec[122] = 22;
ec[127] = 1;

const table = new Uint16Array(6592);
table[68] = 4160; // """
table.fill(5888, 134, 136); // offset_date_time
table.fill(128, 137, 145); // local_date_time
table[150] = 17; // offset_date_time
table.fill(5888, 198, 200); // offset_date_time
table[200] = 4736; // local_date_time
table[214] = 17; // offset_date_time
table[259] = 6144; // local_date_time
table[263] = 3264; // bare_key
table.fill(3264, 265, 273); // bare_key
table.fill(3264, 274, 277); // bare_key
table[277] = 1472; // bare_key
table[278] = 3264; // bare_key
table.fill(3264, 281, 294); // bare_key
table[328] = 4544; // local_time
table[391] = 1664; // bare_key
table[392] = 4288; // _float_token11
table.fill(1088, 393, 401); // bare_key
table[402] = 3264; // bare_key
table[403] = 2048; // bare_key
table.fill(3264, 404, 407); // bare_key
table.fill(3264, 409, 411); // bare_key
table[411] = 3520; // bare_key
table[412] = 2048; // bare_key
table.fill(3264, 413, 417); // bare_key
table[417] = 3584; // bare_key
table.fill(3264, 418, 421); // bare_key
table[421] = 3712; // bare_key
table[455] = 3264; // bare_key
table[456] = 4288; // _float_token11
table.fill(3264, 457, 465); // bare_key
table[466] = 3264; // bare_key
table[467] = 2048; // bare_key
table.fill(3264, 468, 471); // bare_key
table.fill(3264, 473, 476); // bare_key
table[476] = 2048; // bare_key
table.fill(3264, 477, 486); // bare_key
table[519] = 1664; // bare_key
table[520] = 4288; // _float_token11
table.fill(704, 521, 529); // _integer_token7
table[529] = 5760; // local_time
table[530] = 3264; // bare_key
table[531] = 2048; // bare_key
table.fill(3264, 532, 535); // bare_key
table[537] = 1984; // bare_key
table.fill(3264, 538, 540); // bare_key
table[540] = 2048; // bare_key
table.fill(3264, 541, 550); // bare_key
table[583] = 1664; // bare_key
table[584] = 4288; // _float_token11
table.fill(512, 585, 593); // _integer_token7
table[594] = 3264; // bare_key
table[595] = 2048; // bare_key
table.fill(3264, 596, 599); // bare_key
table[601] = 1984; // bare_key
table.fill(3264, 602, 604); // bare_key
table[604] = 2048; // bare_key
table.fill(3264, 605, 614); // bare_key
table[647] = 1664; // bare_key
table[648] = 4288; // _float_token11
table.fill(512, 649, 653); // _integer_token7
table.fill(704, 653, 657); // _integer_token7
table[658] = 3264; // bare_key
table[659] = 2048; // bare_key
table.fill(3264, 660, 663); // bare_key
table[665] = 1984; // bare_key
table.fill(3264, 666, 668); // bare_key
table[668] = 2048; // bare_key
table.fill(3264, 669, 678); // bare_key
table[711] = 1664; // bare_key
table[712] = 4288; // _float_token11
table.fill(704, 713, 721); // _integer_token7
table[722] = 3264; // bare_key
table[723] = 2048; // bare_key
table.fill(3264, 724, 727); // bare_key
table[729] = 1984; // bare_key
table.fill(3264, 730, 732); // bare_key
table[732] = 2048; // bare_key
table.fill(3264, 733, 742); // bare_key
table[775] = 3264; // bare_key
table[776] = 4288; // _float_token11
table.fill(768, 777, 785); // _integer_token7
table[786] = 3264; // bare_key
table[787] = 2048; // bare_key
table.fill(3264, 788, 791); // bare_key
table[793] = 1984; // bare_key
table.fill(3264, 794, 796); // bare_key
table[796] = 2048; // bare_key
table.fill(3264, 797, 806); // bare_key
table[840] = 4288; // _float_token11
table.fill(832, 841, 849); // _integer_token7
table[851] = 4224; // _float_token11
table[857] = 3968; // _float_token11
table[860] = 4224; // _float_token11
table[904] = 4288; // _float_token11
table[915] = 4224; // _float_token11
table[924] = 4224; // _float_token11
table.fill(960, 969, 977); // _float_token11
table[979] = 4224; // _float_token11
table[985] = 4288; // _float_token11
table[988] = 4224; // _float_token11
table.fill(1024, 1033, 1041); // _float_token11
table[1049] = 4352; // _float_token11
table[1095] = 1664; // bare_key
table.fill(1728, 1097, 1105); // bare_key
table[1105] = 5760; // local_time
table.fill(3264, 1106, 1111); // bare_key
table.fill(3264, 1113, 1126); // bare_key
table[1159] = 3264; // bare_key
table.fill(3264, 1161, 1169); // bare_key
table[1169] = 5824; // local_date_time
table.fill(3264, 1170, 1175); // bare_key
table.fill(3264, 1177, 1190); // bare_key
table[1223] = 3264; // bare_key
table[1225] = 1792; // bare_key
table.fill(2112, 1226, 1228); // bare_key
table[1228] = 1856; // bare_key
table.fill(3264, 1229, 1233); // bare_key
table.fill(3264, 1234, 1239); // bare_key
table.fill(3264, 1241, 1254); // bare_key
table[1287] = 3264; // bare_key
table.fill(1152, 1289, 1297); // bare_key
table.fill(3264, 1298, 1303); // bare_key
table.fill(3264, 1305, 1318); // bare_key
table[1351] = 3264; // bare_key
table.fill(1152, 1353, 1357); // bare_key
table.fill(3264, 1357, 1361); // bare_key
table.fill(3264, 1362, 1367); // bare_key
table.fill(3264, 1369, 1382); // bare_key
table[1415] = 1216; // bare_key
table.fill(3264, 1417, 1425); // bare_key
table.fill(3264, 1426, 1431); // bare_key
table.fill(3264, 1433, 1446); // bare_key
table[1479] = 3264; // bare_key
table.fill(1280, 1481, 1483); // bare_key
table[1483] = 1344; // bare_key
table.fill(3264, 1484, 1489); // bare_key
table.fill(3264, 1490, 1495); // bare_key
table.fill(3264, 1497, 1510); // bare_key
table[1543] = 3264; // bare_key
table.fill(1408, 1545, 1548); // bare_key
table.fill(3264, 1548, 1553); // bare_key
table.fill(3264, 1554, 1559); // bare_key
table.fill(3264, 1561, 1574); // bare_key
table[1607] = 3264; // bare_key
table[1609] = 3264; // bare_key
table.fill(1408, 1610, 1617); // bare_key
table.fill(3264, 1618, 1623); // bare_key
table.fill(3264, 1625, 1638); // bare_key
table[1671] = 3264; // bare_key
table[1673] = 1600; // bare_key
table[1674] = 1536; // bare_key
table.fill(3264, 1675, 1681); // bare_key
table.fill(3264, 1682, 1687); // bare_key
table.fill(3264, 1689, 1702); // bare_key
table[1735] = 1664; // bare_key
table.fill(1728, 1737, 1745); // bare_key
table.fill(3264, 1746, 1751); // bare_key
table.fill(3264, 1753, 1766); // bare_key
table[1799] = 3264; // bare_key
table[1801] = 3264; // bare_key
table.fill(256, 1802, 1809); // local_date
table.fill(3264, 1810, 1815); // bare_key
table.fill(3264, 1817, 1830); // bare_key
table[1863] = 3264; // bare_key
table.fill(256, 1865, 1867); // local_date
table.fill(3264, 1867, 1873); // bare_key
table.fill(3264, 1874, 1879); // bare_key
table.fill(3264, 1881, 1894); // bare_key
table[1927] = 3264; // bare_key
table[1929] = 448; // _integer_token7
table.fill(768, 1930, 1937); // _integer_token7
table.fill(3264, 1938, 1943); // bare_key
table.fill(3264, 1945, 1950); // bare_key
table[1950] = 2944; // bare_key
table[1951] = 3264; // bare_key
table[1952] = 3008; // bare_key
table.fill(3264, 1953, 1958); // bare_key
table[1991] = 3264; // bare_key
table.fill(768, 1993, 2001); // _integer_token7
table.fill(3264, 2002, 2007); // bare_key
table.fill(3264, 2009, 2022); // bare_key
table[2054] = 4352; // _float_token11
table[2055] = 3648; // bare_key
table.fill(2688, 2057, 2065); // _float_token11
table.fill(3264, 2066, 2071); // bare_key
table.fill(3264, 2073, 2086); // bare_key
table[2119] = 3264; // bare_key
table.fill(256, 2121, 2129); // local_date
table.fill(3264, 2130, 2135); // bare_key
table.fill(3264, 2137, 2150); // bare_key
table[2199] = 5; // [[
table[2264] = 6; // ]]
table[2309] = 2; // '''
table[2375] = 3264; // bare_key
table.fill(3264, 2377, 2385); // bare_key
table.fill(3264, 2386, 2391); // bare_key
table.fill(3264, 2393, 2406); // bare_key
table.fill(2432, 2441, 2449); // local_time
table[2503] = 3264; // bare_key
table.fill(2496, 2505, 2513); // _integer_token8
table.fill(2496, 2514, 2516); // _integer_token8
table.fill(3264, 2516, 2519); // bare_key
table[2521] = 3712; // bare_key
table.fill(2496, 2522, 2526); // _integer_token8
table.fill(3264, 2526, 2534); // bare_key
table[2567] = 3264; // bare_key
table.fill(2560, 2569, 2576); // _integer_token9
table[2576] = 3264; // bare_key
table.fill(3264, 2578, 2583); // bare_key
table[2585] = 3584; // bare_key
table.fill(3264, 2586, 2598); // bare_key
table[2631] = 3264; // bare_key
table.fill(2624, 2633, 2635); // _integer_token10
table.fill(3264, 2635, 2641); // bare_key
table.fill(3264, 2642, 2647); // bare_key
table[2649] = 3520; // bare_key
table.fill(3264, 2650, 2662); // bare_key
table[2695] = 3264; // bare_key
table.fill(2688, 2697, 2705); // _float_token11
table.fill(3264, 2706, 2711); // bare_key
table[2713] = 3648; // bare_key
table.fill(3264, 2714, 2726); // bare_key
table[2759] = 3264; // bare_key
table.fill(3264, 2761, 2769); // bare_key
table.fill(3264, 2770, 2775); // bare_key
table.fill(3264, 2777, 2790); // bare_key
table[2823] = 3264; // bare_key
table.fill(3264, 2825, 2833); // bare_key
table.fill(3264, 2834, 2839); // bare_key
table.fill(3264, 2841, 2851); // bare_key
table[2851] = 3456; // bare_key
table.fill(3264, 2852, 2854); // bare_key
table[2887] = 3264; // bare_key
table.fill(3264, 2889, 2897); // bare_key
table.fill(3264, 2898, 2903); // bare_key
table.fill(3264, 2905, 2916); // bare_key
table[2916] = 3456; // bare_key
table[2917] = 3264; // bare_key
table[2951] = 3264; // bare_key
table.fill(3264, 2953, 2961); // bare_key
table.fill(3264, 2962, 2967); // bare_key
table.fill(3264, 2969, 2976); // bare_key
table[2976] = 3392; // bare_key
table.fill(3264, 2977, 2982); // bare_key
table[3015] = 3264; // bare_key
table.fill(3264, 3017, 3025); // bare_key
table.fill(3264, 3026, 3031); // bare_key
table[3033] = 3264; // bare_key
table[3034] = 3328; // bare_key
table.fill(3264, 3035, 3046); // bare_key
table[3079] = 3264; // bare_key
table.fill(3264, 3081, 3089); // bare_key
table.fill(3264, 3090, 3095); // bare_key
table.fill(3264, 3097, 3103); // bare_key
table[3103] = 2816; // bare_key
table.fill(3264, 3104, 3110); // bare_key
table[3143] = 3264; // bare_key
table.fill(3264, 3145, 3153); // bare_key
table.fill(3264, 3154, 3159); // bare_key
table.fill(3264, 3161, 3170); // bare_key
table[3170] = 2880; // bare_key
table.fill(3264, 3171, 3174); // bare_key
table[3207] = 3264; // bare_key
table.fill(3264, 3209, 3217); // bare_key
table.fill(3264, 3218, 3223); // bare_key
table[3225] = 3264; // bare_key
table[3226] = 3072; // bare_key
table.fill(3264, 3227, 3238); // bare_key
table[3271] = 3264; // bare_key
table.fill(3264, 3273, 3281); // bare_key
table.fill(3264, 3282, 3287); // bare_key
table.fill(3264, 3289, 3302); // bare_key
table[3335] = 3264; // bare_key
table.fill(3264, 3337, 3345); // bare_key
table.fill(3264, 3346, 3351); // bare_key
table.fill(3264, 3353, 3360); // bare_key
table[3360] = 2752; // _float_token12
table.fill(3264, 3361, 3366); // bare_key
table[3399] = 3264; // bare_key
table.fill(3264, 3401, 3409); // bare_key
table.fill(3264, 3410, 3415); // bare_key
table.fill(3264, 3417, 3421); // bare_key
table[3421] = 2752; // _float_token12
table.fill(3264, 3422, 3430); // bare_key
table[3463] = 3264; // bare_key
table.fill(3264, 3465, 3473); // bare_key
table.fill(3264, 3474, 3479); // bare_key
table.fill(3264, 3481, 3484); // bare_key
table[3484] = 2368; // boolean
table.fill(3264, 3485, 3494); // bare_key
table[3527] = 3264; // bare_key
table.fill(2624, 3529, 3531); // _integer_token10
table.fill(3264, 3531, 3537); // bare_key
table.fill(3264, 3538, 3543); // bare_key
table.fill(3264, 3545, 3558); // bare_key
table[3591] = 3264; // bare_key
table.fill(2560, 3593, 3600); // _integer_token9
table[3600] = 3264; // bare_key
table.fill(3264, 3602, 3607); // bare_key
table.fill(3264, 3609, 3622); // bare_key
table[3655] = 3264; // bare_key
table.fill(2688, 3657, 3665); // _float_token11
table.fill(3264, 3666, 3671); // bare_key
table.fill(3264, 3673, 3686); // bare_key
table[3719] = 3264; // bare_key
table.fill(2496, 3721, 3729); // _integer_token8
table.fill(2496, 3730, 3732); // _integer_token8
table.fill(3264, 3732, 3735); // bare_key
table[3737] = 3264; // bare_key
table.fill(2496, 3738, 3742); // _integer_token8
table.fill(3264, 3742, 3750); // bare_key
table[3776] = 3776; // comment
table.fill(3776, 3779, 3814); // comment
table[3840] = 3840; // _literal_string
table.fill(3840, 3843, 3845); // _literal_string
table[3845] = 15; // _literal_string
table.fill(3840, 3846, 3878); // _literal_string
table[3913] = 896; // _integer_token7
table.fill(832, 3914, 3921); // _integer_token7
table[3934] = 4992; // _float_token12
table[3936] = 5056; // _float_token12
table.fill(832, 3977, 3985); // _integer_token7
table[4034] = 23; // _document_token1
table[4096] = 3840; // _literal_string
table.fill(3840, 4099, 4101); // _literal_string
table[4101] = 2304; // _literal_string
table.fill(3840, 4102, 4134); // _literal_string
table[4164] = 1; // """
table.fill(4352, 4230, 4232); // _float_token11
table.fill(1024, 4233, 4241); // _float_token11
table.fill(960, 4297, 4305); // _float_token11
table.fill(1024, 4361, 4369); // _float_token11
table[4445] = 34; // _float_token12
table[4512] = 34; // _float_token12
table.fill(2432, 4553, 4561); // local_time
table.fill(320, 4617, 4625); // local_time
table[4681] = 320; // local_time
table.fill(128, 4745, 4753); // local_date_time
table.fill(192, 4809, 4817); // local_date_time
table[4873] = 192; // local_date_time
table.fill(17, 4937, 4945); // offset_date_time
table[5024] = 4416; // _float_token12
table[5082] = 4480; // _float_token12
table.fill(4608, 5129, 5134); // local_time
table[5134] = 4672; // local_time
table.fill(4800, 5193, 5198); // local_date_time
table[5198] = 4864; // local_date_time
table.fill(4928, 5257, 5262); // offset_date_time
table[5329] = 5120; // local_time
table[5393] = 5184; // local_date_time
table[5457] = 5248; // offset_date_time
table.fill(5312, 5513, 5521); // local_time
table.fill(5376, 5577, 5585); // local_date_time
table.fill(5440, 5641, 5649); // offset_date_time
table.fill(5440, 5705, 5709); // offset_date_time
table.fill(5504, 5769, 5774); // local_time
table.fill(5568, 5833, 5838); // local_date_time
table.fill(5632, 5897, 5899); // offset_date_time
table[5899] = 5696; // offset_date_time
table[5969] = 5824; // local_date_time
table.fill(5952, 6025, 6033); // local_date_time
table.fill(5952, 6089, 6093); // local_date_time
table.fill(6016, 6153, 6155); // local_date_time
table[6155] = 6080; // local_date_time
table[6346] = 23; // _document_token1
table[6349] = 4032; // _document_token1
table[6370] = 64; // "
table[6371] = 3776; // comment
table[6375] = 4096; // _literal_string
table[6379] = 3904; // _float_token12
table[6380] = 10; // ,
table[6381] = 1920; // bare_key
table[6382] = 8; // .
table[6384] = 384; // _integer_token7
table[6385] = 576; // _integer_token7
table[6386] = 640; // _integer_token7
table.fill(704, 6387, 6394); // _integer_token7
table[6397] = 7; // =
table.fill(3264, 6401, 6427); // bare_key
table[6427] = 2176; // [
table[6429] = 2240; // ]
table[6431] = 3264; // bare_key
table.fill(3264, 6433, 6438); // bare_key
table[6438] = 3200; // bare_key
table.fill(3264, 6439, 6441); // bare_key
table[6441] = 2944; // bare_key
table.fill(3264, 6442, 6446); // bare_key
table[6446] = 3008; // bare_key
table.fill(3264, 6447, 6452); // bare_key
table[6452] = 3136; // bare_key
table.fill(3264, 6453, 6459); // bare_key
table[6459] = 11; // {
table[6461] = 12; // }

/**
 * @param {Uint8Array} input
 * @param {number} offset
 * @returns {{ state: number, start: number, end: number }}
 */
const next = (input, offset) => {
  const t = table;
  const s = skipTable;
  const e = ec;
  const ti = tokenIds;
  // 99
  let i = offset | 0;
  const l = input.length;
  while (true) {
    let state = 0;
    let successState = 0;
    let successPos = 0;
    while (i < l && s[input[i]]) {
      i++;
    }
    offset = i;
    if (i < l && (state = t[input[i++] + 6336]) > 34) {
      do {
        if (state <= 3776) {
          if (state > 2112) {
            do {
              successState = state;
              successPos = i;
            } while (i < l && (state = t[state + e[input[i++]]]) > 2112);
            break;
          }
          successState = state;
          successPos = i;
          if (i >= l) break;
        }
        while (i < l && (state = t[state + e[input[i++]]]) > 3776);
      } while ((state - 35) >>> 0 < 3742);
    }

    if (--state >>> 0 >= 34) {
      if (successState) {
        i = successPos;
        state = ti[successState >> 6];
      } else {
        state = ((i - l) >>> 31) + 35;
        offset = i = -1;
      }
    }
    if (state === 37) {
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
