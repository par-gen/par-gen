// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const tokenIds = [
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  4, // DASH
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  0, // CHARACTER
  1, // CONTROL_CHARACTER
  1, // CONTROL_CHARACTER
  1, // CONTROL_CHARACTER
  1, // CONTROL_CHARACTER
  1, // CONTROL_CHARACTER
  2, // BACKSLASH
  3, // CARET
  5, // DOT
  6, // UNION
  7, // PAREN_OPEN
  8, // PAREN_CLOSE
  9, // QUANTIFIER
  9, // QUANTIFIER
  9, // QUANTIFIER
  10, // BRACKET_OPEN
  11, // BRACKET_CLOSE
  undefined, // undefined
  undefined, // undefined
  12, // @par-gen.EOF
  13, // @par-gen.ERROR
];

const table = new Uint16Array(65024);
table.fill(64256);
table[64000] = 0; // CHARACTER
table[64001] = 256; // CHARACTER
table[64002] = 512; // CHARACTER
table[64003] = 768; // CHARACTER
table[64004] = 1024; // CHARACTER
table[64005] = 1280; // CHARACTER
table[64006] = 1536; // CHARACTER
table[64007] = 1792; // CHARACTER
table[64011] = 2048; // CHARACTER
table[64014] = 2304; // CHARACTER
table[64015] = 2560; // CHARACTER
table[64016] = 2816; // CHARACTER
table[64017] = 3072; // CHARACTER
table[64018] = 3328; // CHARACTER
table[64019] = 3584; // CHARACTER
table[64020] = 3840; // CHARACTER
table[64021] = 4096; // CHARACTER
table[64022] = 4352; // CHARACTER
table[64023] = 4608; // CHARACTER
table[64024] = 4864; // CHARACTER
table[64025] = 5120; // CHARACTER
table[64026] = 5376; // CHARACTER
table[64027] = 5632; // CHARACTER
table[64028] = 5888; // CHARACTER
table[64029] = 6144; // CHARACTER
table[64030] = 6400; // CHARACTER
table[64031] = 6656; // CHARACTER
table[64032] = 6912; // CHARACTER
table[64033] = 7168; // CHARACTER
table[64034] = 7424; // CHARACTER
table[64035] = 7680; // CHARACTER
table[64036] = 7936; // CHARACTER
table[64037] = 8192; // CHARACTER
table[64038] = 8448; // CHARACTER
table[64039] = 8704; // CHARACTER
table[64044] = 8960; // CHARACTER
table[64045] = 9216; // DASH
table[64047] = 9472; // CHARACTER
table[64048] = 9728; // CHARACTER
table[64049] = 9984; // CHARACTER
table[64050] = 10240; // CHARACTER
table[64051] = 10496; // CHARACTER
table[64052] = 10752; // CHARACTER
table[64053] = 11008; // CHARACTER
table[64054] = 11264; // CHARACTER
table[64055] = 11520; // CHARACTER
table[64056] = 11776; // CHARACTER
table[64057] = 12032; // CHARACTER
table[64058] = 12288; // CHARACTER
table[64059] = 12544; // CHARACTER
table[64060] = 12800; // CHARACTER
table[64061] = 13056; // CHARACTER
table[64062] = 13312; // CHARACTER
table[64064] = 13568; // CHARACTER
table[64065] = 13824; // CHARACTER
table[64066] = 14080; // CHARACTER
table[64067] = 14336; // CHARACTER
table[64068] = 14592; // CHARACTER
table[64069] = 14848; // CHARACTER
table[64070] = 15104; // CHARACTER
table[64071] = 15360; // CHARACTER
table[64072] = 15616; // CHARACTER
table[64073] = 15872; // CHARACTER
table[64074] = 16128; // CHARACTER
table[64075] = 16384; // CHARACTER
table[64076] = 16640; // CHARACTER
table[64077] = 16896; // CHARACTER
table[64078] = 17152; // CHARACTER
table[64079] = 17408; // CHARACTER
table[64080] = 17664; // CHARACTER
table[64081] = 17920; // CHARACTER
table[64082] = 18176; // CHARACTER
table[64083] = 18432; // CHARACTER
table[64084] = 18688; // CHARACTER
table[64085] = 18944; // CHARACTER
table[64086] = 19200; // CHARACTER
table[64087] = 19456; // CHARACTER
table[64088] = 19712; // CHARACTER
table[64089] = 19968; // CHARACTER
table[64090] = 20224; // CHARACTER
table[64095] = 20480; // CHARACTER
table[64096] = 20736; // CHARACTER
table[64097] = 20992; // CHARACTER
table[64099] = 21248; // CHARACTER
table[64100] = 21504; // CHARACTER
table[64101] = 21760; // CHARACTER
table[64103] = 22016; // CHARACTER
table[64104] = 22272; // CHARACTER
table[64105] = 22528; // CHARACTER
table[64106] = 22784; // CHARACTER
table[64107] = 23040; // CHARACTER
table[64108] = 23296; // CHARACTER
table[64109] = 23552; // CHARACTER
table[64111] = 23808; // CHARACTER
table[64112] = 24064; // CHARACTER
table[64113] = 24320; // CHARACTER
table[64115] = 24576; // CHARACTER
table[64117] = 24832; // CHARACTER
table[64118] = 25088; // CHARACTER
table[64119] = 25344; // CHARACTER
table[64120] = 25600; // CHARACTER
table[64121] = 25856; // CHARACTER
table[64122] = 26112; // CHARACTER
table[64123] = 26368; // CHARACTER
table[64125] = 26624; // CHARACTER
table[64126] = 26880; // CHARACTER
table[64127] = 27136; // CHARACTER
table[64128] = 27392; // CHARACTER
table[64129] = 27648; // CHARACTER
table[64130] = 27904; // CHARACTER
table[64131] = 28160; // CHARACTER
table[64132] = 28416; // CHARACTER
table[64133] = 28672; // CHARACTER
table[64134] = 28928; // CHARACTER
table[64135] = 29184; // CHARACTER
table[64136] = 29440; // CHARACTER
table[64137] = 29696; // CHARACTER
table[64138] = 29952; // CHARACTER
table[64139] = 30208; // CHARACTER
table[64140] = 30464; // CHARACTER
table[64141] = 30720; // CHARACTER
table[64142] = 30976; // CHARACTER
table[64143] = 31232; // CHARACTER
table[64144] = 31488; // CHARACTER
table[64145] = 31744; // CHARACTER
table[64146] = 32000; // CHARACTER
table[64147] = 32256; // CHARACTER
table[64148] = 32512; // CHARACTER
table[64149] = 32768; // CHARACTER
table[64150] = 33024; // CHARACTER
table[64151] = 33280; // CHARACTER
table[64152] = 33536; // CHARACTER
table[64153] = 33792; // CHARACTER
table[64154] = 34048; // CHARACTER
table[64155] = 34304; // CHARACTER
table[64156] = 34560; // CHARACTER
table[64157] = 34816; // CHARACTER
table[64158] = 35072; // CHARACTER
table[64159] = 35328; // CHARACTER
table[64160] = 35584; // CHARACTER
table[64161] = 35840; // CHARACTER
table[64162] = 36096; // CHARACTER
table[64163] = 36352; // CHARACTER
table[64164] = 36608; // CHARACTER
table[64165] = 36864; // CHARACTER
table[64166] = 37120; // CHARACTER
table[64167] = 37376; // CHARACTER
table[64168] = 37632; // CHARACTER
table[64169] = 37888; // CHARACTER
table[64170] = 38144; // CHARACTER
table[64171] = 38400; // CHARACTER
table[64172] = 38656; // CHARACTER
table[64173] = 38912; // CHARACTER
table[64174] = 39168; // CHARACTER
table[64175] = 39424; // CHARACTER
table[64176] = 39680; // CHARACTER
table[64177] = 39936; // CHARACTER
table[64178] = 40192; // CHARACTER
table[64179] = 40448; // CHARACTER
table[64180] = 40704; // CHARACTER
table[64181] = 40960; // CHARACTER
table[64182] = 41216; // CHARACTER
table[64183] = 41472; // CHARACTER
table[64184] = 41728; // CHARACTER
table[64185] = 41984; // CHARACTER
table[64186] = 42240; // CHARACTER
table[64187] = 42496; // CHARACTER
table[64188] = 42752; // CHARACTER
table[64189] = 43008; // CHARACTER
table[64190] = 43264; // CHARACTER
table[64191] = 43520; // CHARACTER
table[64192] = 43776; // CHARACTER
table[64193] = 44032; // CHARACTER
table[64194] = 44288; // CHARACTER
table[64195] = 44544; // CHARACTER
table[64196] = 44800; // CHARACTER
table[64197] = 45056; // CHARACTER
table[64198] = 45312; // CHARACTER
table[64199] = 45568; // CHARACTER
table[64200] = 45824; // CHARACTER
table[64201] = 46080; // CHARACTER
table[64202] = 46336; // CHARACTER
table[64203] = 46592; // CHARACTER
table[64204] = 46848; // CHARACTER
table[64205] = 47104; // CHARACTER
table[64206] = 47360; // CHARACTER
table[64207] = 47616; // CHARACTER
table[64208] = 47872; // CHARACTER
table[64209] = 48128; // CHARACTER
table[64210] = 48384; // CHARACTER
table[64211] = 48640; // CHARACTER
table[64212] = 48896; // CHARACTER
table[64213] = 49152; // CHARACTER
table[64214] = 49408; // CHARACTER
table[64215] = 49664; // CHARACTER
table[64216] = 49920; // CHARACTER
table[64217] = 50176; // CHARACTER
table[64218] = 50432; // CHARACTER
table[64219] = 50688; // CHARACTER
table[64220] = 50944; // CHARACTER
table[64221] = 51200; // CHARACTER
table[64222] = 51456; // CHARACTER
table[64223] = 51712; // CHARACTER
table[64224] = 51968; // CHARACTER
table[64225] = 52224; // CHARACTER
table[64226] = 52480; // CHARACTER
table[64227] = 52736; // CHARACTER
table[64228] = 52992; // CHARACTER
table[64229] = 53248; // CHARACTER
table[64230] = 53504; // CHARACTER
table[64231] = 53760; // CHARACTER
table[64232] = 54016; // CHARACTER
table[64233] = 54272; // CHARACTER
table[64234] = 54528; // CHARACTER
table[64235] = 54784; // CHARACTER
table[64236] = 55040; // CHARACTER
table[64237] = 55296; // CHARACTER
table[64238] = 55552; // CHARACTER
table[64239] = 55808; // CHARACTER
table[64240] = 56064; // CHARACTER
table[64241] = 56320; // CHARACTER
table[64242] = 56576; // CHARACTER
table[64243] = 56832; // CHARACTER
table[64244] = 57088; // CHARACTER
table[64245] = 57344; // CHARACTER
table[64246] = 57600; // CHARACTER
table[64247] = 57856; // CHARACTER
table[64248] = 58112; // CHARACTER
table[64249] = 58368; // CHARACTER
table[64250] = 58624; // CHARACTER
table[64251] = 58880; // CHARACTER
table[64252] = 59136; // CHARACTER
table[64253] = 59392; // CHARACTER
table[64254] = 59648; // CHARACTER
table[64114] = 59904; // CONTROL_CHARACTER
table[64110] = 60160; // CONTROL_CHARACTER
table[64098] = 60416; // CONTROL_CHARACTER
table[64116] = 60672; // CONTROL_CHARACTER
table[64102] = 60928; // CONTROL_CHARACTER
table[64092] = 61184; // BACKSLASH
table[64094] = 61440; // CARET
table[64046] = 61696; // DOT
table[64124] = 61952; // UNION
table[64040] = 62208; // PAREN_OPEN
table[64041] = 62464; // PAREN_CLOSE
table[64042] = 62720; // QUANTIFIER
table[64063] = 62976; // QUANTIFIER
table[64043] = 63232; // QUANTIFIER
table[64091] = 63488; // BRACKET_OPEN
table[64093] = 63744; // BRACKET_CLOSE

// the currently matched lexeme
const lexeme = {
  state: -1,
  start: -1,
  end: -1,
};

/**
 * @param {Uint8Array} input
 * @param {number} offset
 * @returns {{ state: number, start: number, end: number }}
 */
const next = (input, offset) => {
  // 250
  let state = 64000;
  let successState = 64256;
  let successPos = 0;

  // try to find match
  let i = offset;
  const l = input.length;
  while (i < l) {
    state = table[state + input[i++]];
    if (state <= 63744) {
      successState = state;
      successPos = i;
    } else if (state === 64256) {
      break;
    }
  }

  if (successState !== 64256) {
    lexeme.state = tokenIds[successState / 256];
    lexeme.start = offset;
    lexeme.end = successPos;
    return lexeme;
  }
  lexeme.state = i === l ? 12 : 13;
  lexeme.start = -1;
  lexeme.end = -1;
  return lexeme;
};

export { EOF, ERROR, next };