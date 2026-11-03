// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const skipTable = new Uint8Array(256);
skipTable.fill(1, 9, 14);
skipTable[32] = 1;

const tokenIds = new Uint8Array(292);
tokenIds[1] = 17; // "
tokenIds.fill(53, 2, 4); // IntValue
tokenIds[4] = 54; // FloatValue
tokenIds[6] = 1; // mutation
tokenIds[7] = 2; // subscription
tokenIds[8] = 9; // fragment
tokenIds[9] = 10; // on
tokenIds[10] = 11; // false
tokenIds[11] = 12; // true
tokenIds[12] = 13; // null
tokenIds[13] = 22; // schema
tokenIds[14] = 23; // extend
tokenIds[15] = 24; // scalar
tokenIds[16] = 25; // type
tokenIds[17] = 26; // interface
tokenIds[18] = 27; // union
tokenIds[19] = 28; // enum
tokenIds[20] = 29; // input
tokenIds[21] = 30; // implements
tokenIds[22] = 33; // directive
tokenIds[23] = 34; // QUERY
tokenIds[24] = 35; // MUTATION
tokenIds[25] = 36; // SUBSCRIPTION
tokenIds[26] = 37; // FIELD
tokenIds[27] = 38; // FRAGMENT_DEFINITION
tokenIds[28] = 39; // FRAGMENT_SPREAD
tokenIds[29] = 40; // INLINE_FRAGMENT
tokenIds[30] = 41; // VARIABLE_DEFINITION
tokenIds[31] = 42; // SCHEMA
tokenIds[32] = 43; // SCALAR
tokenIds[33] = 44; // OBJECT
tokenIds[34] = 45; // FIELD_DEFINITION
tokenIds[35] = 46; // ARGUMENT_DEFINITION
tokenIds[36] = 47; // INTERFACE
tokenIds[37] = 48; // UNION
tokenIds[38] = 49; // ENUM
tokenIds[39] = 50; // ENUM_VALUE
tokenIds[40] = 51; // INPUT_OBJECT
tokenIds[41] = 52; // INPUT_FIELD_DEFINITION
tokenIds[42] = 54; // FloatValue
tokenIds.fill(55, 43, 291); // Name
tokenIds[291] = 61; // comment

const ec = new Uint8Array(256);
ec[10] = 1;
ec[32] = 2;
ec[34] = 3;
ec[43] = 4;
ec[45] = 4;
ec[46] = 5;
ec[48] = 6;
ec.fill(7, 49, 58);
ec[65] = 8;
ec[66] = 9;
ec[67] = 10;
ec[68] = 11;
ec[69] = 12;
ec[70] = 13;
ec[71] = 14;
ec[72] = 15;
ec[73] = 16;
ec[74] = 17;
ec[75] = 18;
ec[76] = 19;
ec[77] = 20;
ec[78] = 21;
ec[79] = 22;
ec[80] = 23;
ec[81] = 18;
ec[82] = 24;
ec[83] = 25;
ec[84] = 26;
ec[85] = 27;
ec[86] = 28;
ec.fill(18, 87, 89);
ec[89] = 29;
ec[90] = 18;
ec[95] = 30;
ec[97] = 31;
ec[98] = 32;
ec[99] = 33;
ec[100] = 34;
ec[101] = 35;
ec[102] = 36;
ec[103] = 37;
ec[104] = 38;
ec[105] = 39;
ec.fill(18, 106, 108);
ec[108] = 40;
ec[109] = 41;
ec[110] = 42;
ec[111] = 43;
ec[112] = 44;
ec[113] = 18;
ec[114] = 45;
ec[115] = 46;
ec[116] = 47;
ec[117] = 48;
ec[118] = 49;
ec[119] = 18;
ec[120] = 50;
ec[121] = 51;
ec[122] = 18;

const table = new Uint16Array(19584);
table[67] = 18880; // """
table[133] = 19008; // FloatValue
table.fill(128, 134, 136); // IntValue
table[140] = 18944; // FloatValue
table[163] = 18944; // FloatValue
table[197] = 19008; // FloatValue
table[204] = 18944; // FloatValue
table[227] = 18944; // FloatValue
table.fill(256, 262, 264); // FloatValue
table[268] = 18944; // FloatValue
table[291] = 18944; // FloatValue
table.fill(16192, 326, 372); // Name
table.fill(16192, 390, 436); // Name
table.fill(16192, 454, 500); // Name
table.fill(16192, 518, 564); // Name
table.fill(16192, 582, 628); // Name
table.fill(16192, 646, 692); // Name
table.fill(16192, 710, 756); // Name
table.fill(16192, 774, 820); // Name
table.fill(16192, 838, 884); // Name
table.fill(16192, 902, 948); // Name
table.fill(16192, 966, 1012); // Name
table.fill(16192, 1030, 1076); // Name
table.fill(16192, 1094, 1140); // Name
table.fill(16192, 1158, 1204); // Name
table.fill(16192, 1222, 1268); // Name
table.fill(16192, 1286, 1332); // Name
table.fill(16192, 1350, 1396); // Name
table.fill(16192, 1414, 1460); // Name
table.fill(16192, 1478, 1524); // Name
table.fill(16192, 1542, 1588); // Name
table.fill(16192, 1606, 1652); // Name
table.fill(16192, 1670, 1694); // Name
table[1694] = 14208; // Name
table.fill(16192, 1695, 1716); // Name
table.fill(16192, 1734, 1780); // Name
table.fill(16192, 1798, 1844); // Name
table.fill(16192, 1862, 1908); // Name
table.fill(16192, 1926, 1972); // Name
table.fill(16192, 1990, 2036); // Name
table.fill(16192, 2054, 2100); // Name
table.fill(16192, 2118, 2164); // Name
table.fill(16192, 2182, 2228); // Name
table.fill(16192, 2246, 2292); // Name
table.fill(16192, 2310, 2356); // Name
table.fill(16192, 2374, 2420); // Name
table.fill(16192, 2438, 2462); // Name
table[2462] = 9664; // Name
table.fill(16192, 2463, 2484); // Name
table.fill(16192, 2502, 2548); // Name
table.fill(16192, 2566, 2612); // Name
table.fill(16192, 2630, 2676); // Name
table.fill(2688, 2694, 2696); // FloatValue
table.fill(16192, 2758, 2800); // Name
table[2800] = 18304; // Name
table.fill(16192, 2801, 2804); // Name
table.fill(16192, 2822, 2860); // Name
table[2860] = 18368; // Name
table.fill(16192, 2861, 2868); // Name
table.fill(16192, 2886, 2926); // Name
table[2926] = 18432; // Name
table.fill(16192, 2927, 2932); // Name
table.fill(16192, 2950, 2977); // Name
table[2977] = 18496; // Name
table.fill(16192, 2978, 2996); // Name
table.fill(16192, 3014, 3057); // Name
table[3057] = 18560; // Name
table.fill(16192, 3058, 3060); // Name
table.fill(16192, 3078, 3103); // Name
table[3103] = 18240; // Name
table.fill(16192, 3104, 3124); // Name
table.fill(16192, 3142, 3181); // Name
table[3181] = 18176; // Name
table.fill(16192, 3182, 3188); // Name
table.fill(16192, 3206, 3248); // Name
table[3248] = 18112; // Name
table.fill(16192, 3249, 3252); // Name
table.fill(16192, 3270, 3312); // Name
table[3312] = 17984; // Name
table.fill(16192, 3313, 3316); // Name
table.fill(16192, 3334, 3370); // Name
table[3370] = 18048; // Name
table.fill(16192, 3371, 3380); // Name
table.fill(16192, 3398, 3433); // Name
table[3433] = 17920; // Name
table.fill(16192, 3434, 3444); // Name
table.fill(16192, 3462, 3499); // Name
table[3499] = 17728; // Name
table.fill(16192, 3500, 3508); // Name
table.fill(16192, 3526, 3563); // Name
table[3563] = 17792; // Name
table.fill(16192, 3564, 3572); // Name
table.fill(16192, 3590, 3627); // Name
table[3627] = 17856; // Name
table.fill(16192, 3628, 3636); // Name
table.fill(16192, 3654, 3695); // Name
table[3695] = 17600; // Name
table.fill(16192, 3696, 3700); // Name
table.fill(16192, 3718, 3752); // Name
table[3752] = 17536; // Name
table.fill(16192, 3753, 3764); // Name
table.fill(16192, 3782, 3818); // Name
table[3818] = 17472; // Name
table.fill(16192, 3819, 3828); // Name
table.fill(16192, 3846, 3850); // Name
table[3850] = 17344; // Name
table.fill(16192, 3851, 3892); // Name
table.fill(16192, 3910, 3931); // Name
table[3931] = 17408; // Name
table.fill(16192, 3932, 3956); // Name
table.fill(16192, 3974, 3976); // Name
table[3976] = 17280; // Name
table.fill(16192, 3977, 4020); // Name
table.fill(16192, 4038, 4056); // Name
table[4056] = 17216; // Name
table.fill(16192, 4057, 4084); // Name
table.fill(16192, 4102, 4123); // Name
table[4123] = 17152; // Name
table.fill(16192, 4124, 4148); // Name
table.fill(16192, 4166, 4170); // Name
table[4170] = 16960; // Name
table.fill(16192, 4171, 4212); // Name
table.fill(16192, 4230, 4234); // Name
table[4234] = 17024; // Name
table.fill(16192, 4235, 4276); // Name
table.fill(16192, 4294, 4309); // Name
table[4309] = 17088; // Name
table.fill(16192, 4310, 4340); // Name
table.fill(16192, 4358, 4372); // Name
table[4372] = 16896; // Name
table.fill(16192, 4373, 4404); // Name
table.fill(16192, 4422, 4438); // Name
table[4438] = 16384; // Name
table.fill(16192, 4439, 4468); // Name
table.fill(16192, 4486, 4502); // Name
table[4502] = 16448; // Name
table.fill(16192, 4503, 4532); // Name
table.fill(16192, 4550, 4566); // Name
table[4566] = 16512; // Name
table.fill(16192, 4567, 4596); // Name
table.fill(16192, 4614, 4630); // Name
table[4630] = 16576; // Name
table.fill(16192, 4631, 4660); // Name
table.fill(16192, 4678, 4694); // Name
table[4694] = 16640; // Name
table.fill(16192, 4695, 4724); // Name
table.fill(16192, 4742, 4758); // Name
table[4758] = 16704; // Name
table.fill(16192, 4759, 4788); // Name
table.fill(16192, 4806, 4822); // Name
table[4822] = 16768; // Name
table.fill(16192, 4823, 4852); // Name
table.fill(16192, 4870, 4886); // Name
table[4886] = 16832; // Name
table.fill(16192, 4887, 4916); // Name
table.fill(16192, 4934, 4947); // Name
table[4947] = 16256; // Name
table.fill(16192, 4948, 4980); // Name
table.fill(16192, 4998, 5000); // Name
table[5000] = 16320; // Name
table.fill(16192, 5001, 5044); // Name
table.fill(16192, 5062, 5101); // Name
table[5101] = 2752; // Name
table.fill(16192, 5102, 5107); // Name
table[5107] = 2816; // Name
table.fill(16192, 5126, 5160); // Name
table[5160] = 2880; // Name
table.fill(16192, 5161, 5172); // Name
table.fill(16192, 5190, 5215); // Name
table[5215] = 2944; // Name
table.fill(16192, 5216, 5236); // Name
table.fill(16192, 5254, 5287); // Name
table[5287] = 3008; // Name
table.fill(16192, 5288, 5300); // Name
table.fill(16192, 5318, 5352); // Name
table[5352] = 3072; // Name
table.fill(16192, 5353, 5364); // Name
table.fill(16192, 5382, 5411); // Name
table[5411] = 3136; // Name
table.fill(16192, 5412, 5428); // Name
table.fill(16192, 5446, 5482); // Name
table[5482] = 3200; // Name
table.fill(16192, 5483, 5490); // Name
table[5490] = 8000; // Name
table[5491] = 16192; // Name
table.fill(16192, 5510, 5548); // Name
table[5548] = 3264; // Name
table.fill(16192, 5549, 5551); // Name
table[5551] = 10496; // Name
table.fill(16192, 5552, 5556); // Name
table.fill(16192, 5574, 5603); // Name
table[5603] = 3328; // Name
table.fill(16192, 5604, 5620); // Name
table.fill(16192, 5638, 5667); // Name
table[5667] = 3392; // Name
table.fill(16192, 5668, 5684); // Name
table.fill(16192, 5702, 5735); // Name
table[5735] = 3456; // Name
table.fill(16192, 5736, 5748); // Name
table.fill(16192, 5766, 5799); // Name
table[5799] = 3520; // Name
table.fill(16192, 5800, 5812); // Name
table.fill(16192, 5830, 5863); // Name
table[5863] = 3584; // Name
table.fill(16192, 5864, 5876); // Name
table.fill(16192, 5894, 5930); // Name
table[5930] = 3648; // Name
table.fill(16192, 5931, 5940); // Name
table.fill(16192, 5958, 6000); // Name
table[6000] = 3712; // Name
table.fill(16192, 6001, 6004); // Name
table.fill(16192, 6022, 6051); // Name
table[6051] = 3776; // Name
table.fill(16192, 6052, 6068); // Name
table.fill(16192, 6086, 6088); // Name
table[6088] = 3840; // Name
table.fill(16192, 6089, 6132); // Name
table.fill(16192, 6150, 6163); // Name
table[6163] = 3904; // Name
table.fill(16192, 6164, 6196); // Name
table.fill(16192, 6214, 6227); // Name
table[6227] = 3968; // Name
table.fill(16192, 6228, 6260); // Name
table.fill(16192, 6278, 6284); // Name
table[6284] = 4032; // Name
table.fill(16192, 6285, 6324); // Name
table.fill(16192, 6342, 6357); // Name
table[6357] = 4096; // Name
table.fill(16192, 6358, 6388); // Name
table.fill(16192, 6406, 6412); // Name
table[6412] = 4160; // Name
table.fill(16192, 6413, 6452); // Name
table.fill(16192, 6470, 6476); // Name
table[6476] = 4224; // Name
table.fill(16192, 6477, 6516); // Name
table.fill(16192, 6534, 6540); // Name
table[6540] = 4288; // Name
table.fill(16192, 6541, 6580); // Name
table.fill(16192, 6598, 6604); // Name
table[6604] = 4352; // Name
table.fill(16192, 6605, 6644); // Name
table.fill(16192, 6662, 6672); // Name
table[6672] = 4416; // Name
table.fill(16192, 6673, 6708); // Name
table.fill(16192, 6726, 6736); // Name
table[6736] = 4480; // Name
table.fill(16192, 6737, 6772); // Name
table.fill(16192, 6790, 6800); // Name
table[6800] = 4544; // Name
table.fill(16192, 6801, 6836); // Name
table.fill(16192, 6854, 6864); // Name
table[6864] = 4608; // Name
table.fill(16192, 6865, 6900); // Name
table.fill(16192, 6918, 6928); // Name
table[6928] = 4672; // Name
table.fill(16192, 6929, 6964); // Name
table.fill(16192, 6982, 6992); // Name
table[6992] = 4736; // Name
table.fill(16192, 6993, 7028); // Name
table.fill(16192, 7046, 7056); // Name
table[7056] = 4800; // Name
table.fill(16192, 7057, 7092); // Name
table.fill(16192, 7110, 7120); // Name
table[7120] = 4864; // Name
table.fill(16192, 7121, 7156); // Name
table.fill(16192, 7174, 7180); // Name
table[7180] = 4928; // Name
table.fill(16192, 7181, 7220); // Name
table.fill(16192, 7238, 7244); // Name
table[7244] = 4992; // Name
table.fill(16192, 7245, 7284); // Name
table.fill(16192, 7302, 7327); // Name
table[7327] = 5120; // Name
table.fill(16192, 7328, 7341); // Name
table[7341] = 10624; // Name
table.fill(16192, 7342, 7348); // Name
table.fill(16192, 7366, 7396); // Name
table[7396] = 5184; // Name
table.fill(16192, 7397, 7412); // Name
table.fill(16192, 7430, 7471); // Name
table[7471] = 5248; // Name
table.fill(16192, 7472, 7476); // Name
table.fill(16192, 7494, 7519); // Name
table[7519] = 5312; // Name
table.fill(16192, 7520, 7526); // Name
table[7526] = 5632; // Name
table.fill(16192, 7527, 7540); // Name
table.fill(16192, 7558, 7600); // Name
table[7600] = 5376; // Name
table.fill(16192, 7601, 7604); // Name
table.fill(16192, 7622, 7657); // Name
table[7657] = 12672; // Name
table[7658] = 5504; // Name
table.fill(16192, 7659, 7668); // Name
table.fill(16192, 7686, 7721); // Name
table[7721] = 5568; // Name
table.fill(16192, 7722, 7732); // Name
table.fill(16192, 7750, 7786); // Name
table[7786] = 5696; // Name
table.fill(16192, 7787, 7796); // Name
table.fill(16192, 7814, 7855); // Name
table[7855] = 5760; // Name
table.fill(16192, 7856, 7860); // Name
table.fill(16192, 7878, 7919); // Name
table[7919] = 5824; // Name
table.fill(16192, 7920, 7924); // Name
table.fill(16192, 7942, 7971); // Name
table[7971] = 5888; // Name
table.fill(16192, 7972, 7988); // Name
table.fill(16192, 8006, 8047); // Name
table[8047] = 6016; // Name
table.fill(16192, 8048, 8052); // Name
table.fill(16192, 8070, 8077); // Name
table[8077] = 6080; // Name
table.fill(16192, 8078, 8116); // Name
table.fill(16192, 8134, 8136); // Name
table[8136] = 6144; // Name
table.fill(16192, 8137, 8180); // Name
table.fill(16192, 8198, 8200); // Name
table[8200] = 6208; // Name
table.fill(16192, 8201, 8207); // Name
table[8207] = 6592; // Name
table.fill(16192, 8208, 8244); // Name
table.fill(16192, 8262, 8283); // Name
table[8283] = 6272; // Name
table.fill(16192, 8284, 8308); // Name
table.fill(16192, 8326, 8337); // Name
table[8337] = 6400; // Name
table.fill(16192, 8338, 8372); // Name
table.fill(16192, 8390, 8401); // Name
table[8401] = 6464; // Name
table.fill(16192, 8402, 8436); // Name
table.fill(16192, 8454, 8468); // Name
table[8468] = 6528; // Name
table.fill(16192, 8469, 8500); // Name
table.fill(16192, 8518, 8533); // Name
table[8533] = 6656; // Name
table.fill(16192, 8534, 8564); // Name
table.fill(16192, 8582, 8602); // Name
table[8602] = 6720; // Name
table.fill(16192, 8603, 8628); // Name
table.fill(16192, 8646, 8666); // Name
table[8666] = 6784; // Name
table.fill(16192, 8667, 8692); // Name
table.fill(16192, 8710, 8730); // Name
table[8730] = 6848; // Name
table.fill(16192, 8731, 8756); // Name
table.fill(16192, 8774, 8794); // Name
table[8794] = 6912; // Name
table.fill(16192, 8795, 8820); // Name
table.fill(16192, 8838, 8858); // Name
table[8858] = 6976; // Name
table.fill(16192, 8859, 8884); // Name
table.fill(16192, 8902, 8922); // Name
table[8922] = 7040; // Name
table.fill(16192, 8923, 8948); // Name
table.fill(16192, 8966, 8986); // Name
table[8986] = 7104; // Name
table.fill(16192, 8987, 9012); // Name
table.fill(16192, 9030, 9040); // Name
table[9040] = 7168; // Name
table.fill(16192, 9041, 9048); // Name
table[9048] = 15360; // Name
table.fill(16192, 9049, 9076); // Name
table.fill(16192, 9094, 9112); // Name
table[9112] = 7232; // Name
table.fill(16192, 9113, 9140); // Name
table.fill(16192, 9158, 9197); // Name
table[9197] = 7360; // Name
table.fill(16192, 9198, 9204); // Name
table.fill(16192, 9222, 9249); // Name
table[9249] = 7424; // Name
table.fill(16192, 9250, 9268); // Name
table.fill(16192, 9286, 9313); // Name
table[9313] = 7488; // Name
table.fill(16192, 9314, 9328); // Name
table[9328] = 14016; // Name
table.fill(16192, 9329, 9332); // Name
table.fill(16192, 9350, 9381); // Name
table[9381] = 7680; // Name
table.fill(16192, 9382, 9396); // Name
table.fill(16192, 9414, 9439); // Name
table[9439] = 7808; // Name
table.fill(16192, 9440, 9460); // Name
table.fill(16192, 9478, 9516); // Name
table[9516] = 7872; // Name
table.fill(16192, 9517, 9524); // Name
table.fill(16192, 9542, 9577); // Name
table[9577] = 7936; // Name
table.fill(16192, 9578, 9588); // Name
table.fill(16192, 9606, 9624); // Name
table[9624] = 8064; // Name
table.fill(16192, 9625, 9652); // Name
table.fill(16192, 9670, 9692); // Name
table[9692] = 8128; // Name
table.fill(16192, 9693, 9716); // Name
table.fill(16192, 9734, 9738); // Name
table[9738] = 8192; // Name
table.fill(16192, 9739, 9755); // Name
table[9755] = 14144; // Name
table.fill(16192, 9756, 9780); // Name
table.fill(16192, 9798, 9801); // Name
table[9801] = 8320; // Name
table.fill(16192, 9802, 9844); // Name
table.fill(16192, 9862, 9865); // Name
table[9865] = 8384; // Name
table.fill(16192, 9866, 9908); // Name
table.fill(16192, 9926, 9934); // Name
table[9934] = 8448; // Name
table.fill(16192, 9935, 9972); // Name
table.fill(16192, 9990, 9992); // Name
table[9992] = 8576; // Name
table.fill(16192, 9993, 10036); // Name
table.fill(16192, 10054, 10071); // Name
table[10071] = 8640; // Name
table.fill(16192, 10072, 10100); // Name
table.fill(16192, 10118, 10128); // Name
table[10128] = 8704; // Name
table.fill(16192, 10129, 10164); // Name
table.fill(16192, 10182, 10192); // Name
table[10192] = 8768; // Name
table.fill(16192, 10193, 10228); // Name
table.fill(16192, 10246, 10256); // Name
table[10256] = 8832; // Name
table.fill(16192, 10257, 10292); // Name
table.fill(16192, 10310, 10320); // Name
table[10320] = 8896; // Name
table.fill(16192, 10321, 10356); // Name
table.fill(16192, 10374, 10384); // Name
table[10384] = 8960; // Name
table.fill(16192, 10385, 10420); // Name
table.fill(16192, 10438, 10455); // Name
table[10455] = 9088; // Name
table.fill(16192, 10456, 10484); // Name
table.fill(16192, 10502, 10531); // Name
table[10531] = 9152; // Name
table.fill(16192, 10532, 10548); // Name
table.fill(16192, 10566, 10595); // Name
table[10595] = 9216; // Name
table.fill(16192, 10596, 10612); // Name
table.fill(16192, 10630, 10655); // Name
table[10655] = 9344; // Name
table.fill(16192, 10656, 10676); // Name
table.fill(16192, 10694, 10735); // Name
table[10735] = 9408; // Name
table.fill(16192, 10736, 10740); // Name
table.fill(16192, 10758, 10791); // Name
table[10791] = 9472; // Name
table.fill(16192, 10792, 10804); // Name
table.fill(16192, 10822, 10851); // Name
table[10851] = 9536; // Name
table.fill(16192, 10852, 10868); // Name
table.fill(16192, 10886, 10892); // Name
table[10892] = 9600; // Name
table.fill(16192, 10893, 10932); // Name
table.fill(16192, 10950, 10957); // Name
table[10957] = 15744; // Name
table.fill(16192, 10958, 10966); // Name
table[10966] = 9856; // Name
table.fill(16192, 10967, 10996); // Name
table.fill(16192, 11014, 11016); // Name
table[11016] = 9920; // Name
table.fill(16192, 11017, 11060); // Name
table.fill(16192, 11078, 11098); // Name
table[11098] = 9984; // Name
table.fill(16192, 11099, 11124); // Name
table.fill(16192, 11142, 11152); // Name
table[11152] = 10048; // Name
table.fill(16192, 11153, 11188); // Name
table.fill(16192, 11206, 11221); // Name
table[11221] = 10112; // Name
table.fill(16192, 11222, 11252); // Name
table.fill(16192, 11270, 11285); // Name
table[11285] = 10176; // Name
table.fill(16192, 11286, 11316); // Name
table.fill(16192, 11334, 11349); // Name
table[11349] = 10240; // Name
table.fill(16192, 11350, 11380); // Name
table.fill(16192, 11398, 11413); // Name
table[11413] = 10304; // Name
table.fill(16192, 11414, 11444); // Name
table.fill(16192, 11462, 11477); // Name
table[11477] = 10368; // Name
table.fill(16192, 11478, 11508); // Name
table.fill(16192, 11526, 11531); // Name
table[11531] = 13760; // Name
table.fill(16192, 11532, 11545); // Name
table[11545] = 10432; // Name
table.fill(16192, 11546, 11572); // Name
table.fill(16192, 11590, 11629); // Name
table[11629] = 10560; // Name
table.fill(16192, 11630, 11636); // Name
table.fill(16192, 11654, 11696); // Name
table[11696] = 10688; // Name
table.fill(16192, 11697, 11700); // Name
table.fill(16192, 11718, 11757); // Name
table[11757] = 10752; // Name
table.fill(16192, 11758, 11764); // Name
table.fill(16192, 11782, 11816); // Name
table[11816] = 10816; // Name
table.fill(16192, 11817, 11828); // Name
table.fill(16192, 11846, 11859); // Name
table[11859] = 14848; // Name
table.fill(16192, 11860, 11863); // Name
table[11863] = 13440; // Name
table.fill(16192, 11864, 11866); // Name
table[11866] = 10880; // Name
table.fill(16192, 11867, 11892); // Name
table.fill(16192, 11910, 11934); // Name
table[11934] = 10944; // Name
table.fill(16192, 11935, 11956); // Name
table.fill(16192, 11974, 11992); // Name
table[11992] = 11008; // Name
table.fill(16192, 11993, 12020); // Name
table.fill(16192, 12038, 12059); // Name
table[12059] = 11072; // Name
table.fill(16192, 12060, 12084); // Name
table.fill(16192, 12102, 12120); // Name
table[12120] = 11136; // Name
table.fill(16192, 12121, 12148); // Name
table.fill(16192, 12166, 12176); // Name
table[12176] = 11200; // Name
table.fill(16192, 12177, 12212); // Name
table.fill(16192, 12230, 12240); // Name
table[12240] = 11264; // Name
table.fill(16192, 12241, 12276); // Name
table.fill(16192, 12294, 12304); // Name
table[12304] = 11328; // Name
table.fill(16192, 12305, 12340); // Name
table.fill(16192, 12358, 12368); // Name
table[12368] = 11392; // Name
table.fill(16192, 12369, 12404); // Name
table.fill(16192, 12422, 12432); // Name
table[12432] = 11456; // Name
table.fill(16192, 12433, 12468); // Name
table.fill(16192, 12486, 12510); // Name
table[12510] = 11520; // Name
table.fill(16192, 12511, 12532); // Name
table.fill(16192, 12550, 12583); // Name
table[12583] = 11584; // Name
table.fill(16192, 12584, 12596); // Name
table.fill(16192, 12614, 12641); // Name
table[12641] = 11712; // Name
table.fill(16192, 12642, 12660); // Name
table.fill(16192, 12678, 12716); // Name
table[12716] = 11776; // Name
table.fill(16192, 12717, 12724); // Name
table.fill(16192, 12742, 12757); // Name
table[12757] = 11840; // Name
table.fill(16192, 12758, 12788); // Name
table.fill(16192, 12806, 12826); // Name
table[12826] = 11904; // Name
table.fill(16192, 12827, 12852); // Name
table.fill(16192, 12870, 12877); // Name
table[12877] = 11968; // Name
table.fill(16192, 12878, 12916); // Name
table.fill(16192, 12934, 12938); // Name
table[12938] = 12096; // Name
table.fill(16192, 12939, 12980); // Name
table.fill(16192, 12998, 13005); // Name
table[13005] = 12160; // Name
table.fill(16192, 13006, 13044); // Name
table.fill(16192, 13062, 13069); // Name
table[13069] = 12224; // Name
table.fill(16192, 13070, 13108); // Name
table.fill(16192, 13126, 13133); // Name
table[13133] = 12288; // Name
table.fill(16192, 13134, 13172); // Name
table.fill(16192, 13190, 13197); // Name
table[13197] = 12352; // Name
table.fill(16192, 13198, 13236); // Name
table.fill(16192, 13254, 13261); // Name
table[13261] = 12416; // Name
table.fill(16192, 13262, 13300); // Name
table.fill(16192, 13318, 13338); // Name
table[13338] = 12480; // Name
table.fill(16192, 13339, 13364); // Name
table.fill(16192, 13382, 13422); // Name
table[13422] = 12608; // Name
table.fill(16192, 13423, 13428); // Name
table.fill(16192, 13446, 13467); // Name
table[13467] = 12800; // Name
table.fill(16192, 13468, 13492); // Name
table.fill(16192, 13510, 13534); // Name
table[13534] = 12864; // Name
table.fill(16192, 13535, 13556); // Name
table.fill(16192, 13574, 13593); // Name
table[13593] = 12928; // Name
table.fill(16192, 13594, 13620); // Name
table.fill(16192, 13638, 13644); // Name
table[13644] = 12992; // Name
table.fill(16192, 13645, 13684); // Name
table.fill(16192, 13702, 13708); // Name
table[13708] = 13056; // Name
table.fill(16192, 13709, 13748); // Name
table.fill(16192, 13766, 13772); // Name
table[13772] = 13120; // Name
table.fill(16192, 13773, 13812); // Name
table.fill(16192, 13830, 13836); // Name
table[13836] = 13184; // Name
table.fill(16192, 13837, 13876); // Name
table.fill(16192, 13894, 13900); // Name
table[13900] = 13248; // Name
table.fill(16192, 13901, 13940); // Name
table.fill(16192, 13958, 13973); // Name
table[13973] = 13312; // Name
table.fill(16192, 13974, 14004); // Name
table.fill(16192, 14022, 14048); // Name
table[14048] = 13376; // Name
table.fill(16192, 14049, 14068); // Name
table.fill(16192, 14086, 14092); // Name
table[14092] = 13504; // Name
table.fill(16192, 14093, 14132); // Name
table.fill(16192, 14150, 14153); // Name
table[14153] = 13568; // Name
table.fill(16192, 14154, 14196); // Name
table.fill(16192, 14214, 14219); // Name
table[14219] = 13632; // Name
table.fill(16192, 14220, 14260); // Name
table.fill(16192, 14278, 14283); // Name
table[14283] = 13696; // Name
table.fill(16192, 14284, 14324); // Name
table.fill(16192, 14342, 14347); // Name
table[14347] = 13824; // Name
table.fill(16192, 14348, 14388); // Name
table.fill(16192, 14406, 14411); // Name
table[14411] = 13888; // Name
table.fill(16192, 14412, 14452); // Name
table.fill(16192, 14470, 14476); // Name
table[14476] = 13952; // Name
table.fill(16192, 14477, 14516); // Name
table.fill(16192, 14534, 14549); // Name
table[14549] = 14080; // Name
table.fill(16192, 14550, 14580); // Name
table.fill(16192, 14598, 14622); // Name
table[14622] = 14272; // Name
table.fill(16192, 14623, 14644); // Name
table.fill(16192, 14662, 14686); // Name
table[14686] = 14336; // Name
table.fill(16192, 14687, 14708); // Name
table.fill(16192, 14726, 14750); // Name
table[14750] = 14400; // Name
table.fill(16192, 14751, 14772); // Name
table.fill(16192, 14790, 14804); // Name
table[14804] = 14464; // Name
table.fill(16192, 14805, 14836); // Name
table.fill(16192, 14854, 14864); // Name
table[14864] = 14528; // Name
table.fill(16192, 14865, 14900); // Name
table.fill(16192, 14918, 14938); // Name
table[14938] = 14592; // Name
table.fill(16192, 14939, 14964); // Name
table.fill(16192, 14982, 14988); // Name
table[14988] = 14656; // Name
table.fill(16192, 14989, 15028); // Name
table.fill(16192, 15046, 15051); // Name
table[15051] = 14720; // Name
table.fill(16192, 15052, 15092); // Name
table.fill(16192, 15110, 15118); // Name
table[15118] = 14784; // Name
table.fill(16192, 15119, 15156); // Name
table.fill(16192, 15174, 15189); // Name
table[15189] = 14912; // Name
table.fill(16192, 15190, 15220); // Name
table.fill(16192, 15238, 15251); // Name
table[15251] = 14976; // Name
table.fill(16192, 15252, 15284); // Name
table.fill(16192, 15302, 15315); // Name
table[15315] = 15040; // Name
table.fill(16192, 15316, 15348); // Name
table.fill(16192, 15366, 15368); // Name
table[15368] = 15104; // Name
table.fill(16192, 15369, 15412); // Name
table.fill(16192, 15430, 15436); // Name
table[15436] = 15168; // Name
table.fill(16192, 15437, 15476); // Name
table.fill(16192, 15494, 15497); // Name
table[15497] = 15232; // Name
table.fill(16192, 15498, 15540); // Name
table.fill(16192, 15558, 15564); // Name
table[15564] = 15296; // Name
table.fill(16192, 15565, 15604); // Name
table.fill(16192, 15622, 15636); // Name
table[15636] = 15424; // Name
table.fill(16192, 15637, 15668); // Name
table.fill(16192, 15686, 15688); // Name
table[15688] = 15488; // Name
table.fill(16192, 15689, 15732); // Name
table.fill(16192, 15750, 15760); // Name
table[15760] = 15552; // Name
table.fill(16192, 15761, 15796); // Name
table.fill(16192, 15814, 15835); // Name
table[15835] = 15616; // Name
table.fill(16192, 15836, 15860); // Name
table.fill(16192, 15878, 15888); // Name
table[15888] = 15680; // Name
table.fill(16192, 15889, 15924); // Name
table.fill(16192, 15942, 15950); // Name
table[15950] = 15808; // Name
table.fill(16192, 15951, 15988); // Name
table.fill(16192, 16006, 16024); // Name
table[16024] = 15872; // Name
table.fill(16192, 16025, 16052); // Name
table.fill(16192, 16070, 16088); // Name
table[16088] = 15936; // Name
table.fill(16192, 16089, 16116); // Name
table.fill(16192, 16134, 16136); // Name
table[16136] = 16000; // Name
table.fill(16192, 16137, 16180); // Name
table.fill(16192, 16198, 16244); // Name
table.fill(16192, 16262, 16267); // Name
table[16267] = 1664; // FIELD
table.fill(16192, 16268, 16308); // Name
table.fill(16192, 16326, 16331); // Name
table[16331] = 1792; // FRAGMENT_SPREAD
table.fill(16192, 16332, 16372); // Name
table.fill(16192, 16390, 16405); // Name
table[16405] = 2368; // UNION
table.fill(16192, 16406, 16436); // Name
table.fill(16192, 16454, 16469); // Name
table[16469] = 1536; // MUTATION
table.fill(16192, 16470, 16500); // Name
table.fill(16192, 16518, 16533); // Name
table[16533] = 1600; // SUBSCRIPTION
table.fill(16192, 16534, 16564); // Name
table.fill(16192, 16582, 16597); // Name
table[16597] = 2176; // FIELD_DEFINITION
table.fill(16192, 16598, 16628); // Name
table.fill(16192, 16646, 16661); // Name
table[16661] = 2240; // ARGUMENT_DEFINITION
table.fill(16192, 16662, 16692); // Name
table.fill(16192, 16710, 16725); // Name
table[16725] = 1728; // FRAGMENT_DEFINITION
table.fill(16192, 16726, 16756); // Name
table.fill(16192, 16774, 16789); // Name
table[16789] = 1920; // VARIABLE_DEFINITION
table.fill(16192, 16790, 16820); // Name
table.fill(16192, 16838, 16853); // Name
table[16853] = 2624; // INPUT_FIELD_DEFINITION
table.fill(16192, 16854, 16884); // Name
table.fill(16192, 16902, 16904); // Name
table[16904] = 1984; // SCHEMA
table.fill(16192, 16905, 16948); // Name
table.fill(16192, 16966, 16986); // Name
table[16986] = 2112; // OBJECT
table.fill(16192, 16987, 17012); // Name
table.fill(16192, 17030, 17050); // Name
table[17050] = 2560; // INPUT_OBJECT
table.fill(16192, 17051, 17076); // Name
table.fill(16192, 17094, 17114); // Name
table[17114] = 1856; // INLINE_FRAGMENT
table.fill(16192, 17115, 17140); // Name
table.fill(16192, 17158, 17172); // Name
table[17172] = 2432; // ENUM
table.fill(16192, 17173, 17204); // Name
table.fill(16192, 17222, 17245); // Name
table[17245] = 1472; // QUERY
table.fill(16192, 17246, 17268); // Name
table.fill(16192, 17286, 17304); // Name
table[17304] = 2048; // SCALAR
table.fill(16192, 17305, 17332); // Name
table.fill(16192, 17350, 17356); // Name
table[17356] = 2304; // INTERFACE
table.fill(16192, 17357, 17396); // Name
table.fill(16192, 17414, 17420); // Name
table[17420] = 2496; // ENUM_VALUE
table.fill(16192, 17421, 17460); // Name
table.fill(16192, 17478, 17506); // Name
table[17506] = 896; // extend
table.fill(16192, 17507, 17524); // Name
table.fill(16192, 17542, 17576); // Name
table[17576] = 768; // null
table.fill(16192, 17577, 17588); // Name
table.fill(16192, 17606, 17646); // Name
table[17646] = 1344; // implements
table.fill(16192, 17647, 17652); // Name
table.fill(16192, 17670, 17706); // Name
table[17706] = 576; // on
table.fill(16192, 17707, 17716); // Name
table.fill(16192, 17734, 17770); // Name
table[17770] = 1152; // union
table.fill(16192, 17771, 17780); // Name
table.fill(16192, 17798, 17834); // Name
table[17834] = 384; // mutation
table.fill(16192, 17835, 17844); // Name
table.fill(16192, 17862, 17898); // Name
table[17898] = 448; // subscription
table.fill(16192, 17899, 17908); // Name
table.fill(16192, 17926, 17951); // Name
table[17951] = 832; // schema
table.fill(16192, 17952, 17972); // Name
table.fill(16192, 17990, 18031); // Name
table[18031] = 1280; // input
table.fill(16192, 18032, 18036); // Name
table.fill(16192, 18054, 18095); // Name
table[18095] = 512; // fragment
table.fill(16192, 18096, 18100); // Name
table.fill(16192, 18118, 18153); // Name
table[18153] = 1216; // enum
table.fill(16192, 18154, 18164); // Name
table.fill(16192, 18182, 18227); // Name
table[18227] = 320; // query
table.fill(16192, 18246, 18285); // Name
table[18285] = 960; // scalar
table.fill(16192, 18286, 18292); // Name
table.fill(16192, 18310, 18339); // Name
table[18339] = 704; // true
table.fill(16192, 18340, 18356); // Name
table.fill(16192, 18374, 18403); // Name
table[18403] = 1024; // type
table.fill(16192, 18404, 18420); // Name
table.fill(16192, 18438, 18467); // Name
table[18467] = 640; // false
table.fill(16192, 18468, 18484); // Name
table.fill(16192, 18502, 18531); // Name
table[18531] = 1088; // interface
table.fill(16192, 18532, 18548); // Name
table.fill(16192, 18566, 18595); // Name
table[18595] = 1408; // directive
table.fill(16192, 18596, 18612); // Name
table[18624] = 18624; // comment
table.fill(18624, 18626, 18676); // comment
table[18694] = 192; // IntValue
table[18695] = 128; // IntValue
table[18754] = 18624; // comment
table[18821] = 9; // ...
table[18883] = 17; // """
table[18948] = 19072; // FloatValue
table.fill(2688, 18950, 18952); // FloatValue
table.fill(256, 19014, 19016); // FloatValue
table.fill(2688, 19078, 19080); // FloatValue
table[19141] = 18816; // ...
table[19361] = 21; // !
table[19362] = 64; // "
table[19363] = 18752; // comment
table[19364] = 19; // $
table[19366] = 32; // &
table[19368] = 7; // (
table[19369] = 8; // )
table[19372] = 61; // comma
table[19373] = 18688; // FloatValue
table[19374] = 19136; // ...
table[19376] = 192; // IntValue
table.fill(128, 19377, 19386); // IntValue
table[19386] = 6; // :
table[19389] = 20; // =
table[19392] = 22; // @
table[19393] = 16064; // Name
table.fill(16192, 19394, 19397); // Name
table[19397] = 6336; // Name
table[19398] = 9024; // Name
table.fill(16192, 19399, 19401); // Name
table[19401] = 12736; // Name
table.fill(16192, 19402, 19405); // Name
table[19405] = 12032; // Name
table[19406] = 16192; // Name
table[19407] = 9792; // Name
table[19408] = 16192; // Name
table[19409] = 8256; // Name
table[19410] = 16192; // Name
table[19411] = 9728; // Name
table[19412] = 16192; // Name
table[19413] = 8512; // Name
table[19414] = 16128; // Name
table.fill(16192, 19415, 19419); // Name
table[19419] = 15; // [
table[19421] = 16; // ]
table[19423] = 16192; // Name
table.fill(16192, 19425, 19428); // Name
table[19428] = 12544; // Name
table[19429] = 5440; // Name
table[19430] = 7296; // Name
table.fill(16192, 19431, 19433); // Name
table[19433] = 7616; // Name
table.fill(16192, 19434, 19437); // Name
table[19437] = 11648; // Name
table[19438] = 5952; // Name
table[19439] = 17664; // Name
table[19440] = 16192; // Name
table[19441] = 7552; // Name
table[19442] = 16192; // Name
table[19443] = 9280; // Name
table[19444] = 5056; // Name
table[19445] = 7744; // Name
table.fill(16192, 19446, 19451); // Name
table[19451] = 4; // {
table[19452] = 33; // |
table[19453] = 5; // }

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
  // 302
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
    if (i < l && (state = t[input[i++] + 19328]) > 61) {
      do {
        if (state <= 18624) {
          if (state > 256) {
            do {
              successState = state;
              successPos = i;
            } while (i < l && (state = t[state + e[input[i++]]]) > 256);
            break;
          }
          successState = state;
          successPos = i;
          if (i >= l) break;
        }
        while (i < l && (state = t[state + e[input[i++]]]) > 18624);
      } while ((state - 62) >>> 0 < 18563);
    }

    if (--state >>> 0 >= 61) {
      if (successState) {
        i = successPos;
        state = ti[successState >> 6];
      } else {
        state = ((i - l) >>> 31) + 58;
        offset = i = -1;
      }
    }
    if (state === 60 || state === 61) {
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
