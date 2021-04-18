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
  7, // DASH
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
  1, // HEX_NUMBER
  1, // HEX_NUMBER
  1, // HEX_NUMBER
  1, // HEX_NUMBER
  1, // HEX_NUMBER
  1, // HEX_NUMBER
  1, // HEX_NUMBER
  1, // HEX_NUMBER
  1, // HEX_NUMBER
  1, // HEX_NUMBER
  1, // HEX_NUMBER
  1, // HEX_NUMBER
  1, // HEX_NUMBER
  2, // CONTROL_CHARACTER
  1, // HEX_NUMBER
  2, // CONTROL_CHARACTER
  2, // CONTROL_CHARACTER
  2, // CONTROL_CHARACTER
  3, // BACKSLASH
  4, // X
  5, // B
  6, // CARET
  8, // DOT
  9, // UNION
  10, // PAREN_OPEN
  11, // PAREN_CLOSE
  12, // QUANTIFIER
  12, // QUANTIFIER
  12, // QUANTIFIER
  13, // BRACKET_OPEN
  14, // BRACKET_CLOSE
  undefined, // undefined
  undefined, // undefined
  15, // @par-gen.EOF
  16, // @par-gen.ERROR
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
table[64058] = 9728; // CHARACTER
table[64059] = 9984; // CHARACTER
table[64060] = 10240; // CHARACTER
table[64061] = 10496; // CHARACTER
table[64062] = 10752; // CHARACTER
table[64064] = 11008; // CHARACTER
table[64065] = 11264; // CHARACTER
table[64066] = 11520; // CHARACTER
table[64067] = 11776; // CHARACTER
table[64068] = 12032; // CHARACTER
table[64069] = 12288; // CHARACTER
table[64070] = 12544; // CHARACTER
table[64071] = 12800; // CHARACTER
table[64072] = 13056; // CHARACTER
table[64073] = 13312; // CHARACTER
table[64074] = 13568; // CHARACTER
table[64075] = 13824; // CHARACTER
table[64076] = 14080; // CHARACTER
table[64077] = 14336; // CHARACTER
table[64078] = 14592; // CHARACTER
table[64079] = 14848; // CHARACTER
table[64080] = 15104; // CHARACTER
table[64081] = 15360; // CHARACTER
table[64082] = 15616; // CHARACTER
table[64083] = 15872; // CHARACTER
table[64084] = 16128; // CHARACTER
table[64085] = 16384; // CHARACTER
table[64086] = 16640; // CHARACTER
table[64087] = 16896; // CHARACTER
table[64088] = 17152; // CHARACTER
table[64089] = 17408; // CHARACTER
table[64090] = 17664; // CHARACTER
table[64095] = 17920; // CHARACTER
table[64096] = 18176; // CHARACTER
table[64103] = 18432; // CHARACTER
table[64104] = 18688; // CHARACTER
table[64105] = 18944; // CHARACTER
table[64106] = 19200; // CHARACTER
table[64107] = 19456; // CHARACTER
table[64108] = 19712; // CHARACTER
table[64109] = 19968; // CHARACTER
table[64111] = 20224; // CHARACTER
table[64112] = 20480; // CHARACTER
table[64113] = 20736; // CHARACTER
table[64115] = 20992; // CHARACTER
table[64117] = 21248; // CHARACTER
table[64118] = 21504; // CHARACTER
table[64119] = 21760; // CHARACTER
table[64121] = 22016; // CHARACTER
table[64122] = 22272; // CHARACTER
table[64123] = 22528; // CHARACTER
table[64125] = 22784; // CHARACTER
table[64126] = 23040; // CHARACTER
table[64127] = 23296; // CHARACTER
table[64128] = 23552; // CHARACTER
table[64129] = 23808; // CHARACTER
table[64130] = 24064; // CHARACTER
table[64131] = 24320; // CHARACTER
table[64132] = 24576; // CHARACTER
table[64133] = 24832; // CHARACTER
table[64134] = 25088; // CHARACTER
table[64135] = 25344; // CHARACTER
table[64136] = 25600; // CHARACTER
table[64137] = 25856; // CHARACTER
table[64138] = 26112; // CHARACTER
table[64139] = 26368; // CHARACTER
table[64140] = 26624; // CHARACTER
table[64141] = 26880; // CHARACTER
table[64142] = 27136; // CHARACTER
table[64143] = 27392; // CHARACTER
table[64144] = 27648; // CHARACTER
table[64145] = 27904; // CHARACTER
table[64146] = 28160; // CHARACTER
table[64147] = 28416; // CHARACTER
table[64148] = 28672; // CHARACTER
table[64149] = 28928; // CHARACTER
table[64150] = 29184; // CHARACTER
table[64151] = 29440; // CHARACTER
table[64152] = 29696; // CHARACTER
table[64153] = 29952; // CHARACTER
table[64154] = 30208; // CHARACTER
table[64155] = 30464; // CHARACTER
table[64156] = 30720; // CHARACTER
table[64157] = 30976; // CHARACTER
table[64158] = 31232; // CHARACTER
table[64159] = 31488; // CHARACTER
table[64160] = 31744; // CHARACTER
table[64161] = 32000; // CHARACTER
table[64162] = 32256; // CHARACTER
table[64163] = 32512; // CHARACTER
table[64164] = 32768; // CHARACTER
table[64165] = 33024; // CHARACTER
table[64166] = 33280; // CHARACTER
table[64167] = 33536; // CHARACTER
table[64168] = 33792; // CHARACTER
table[64169] = 34048; // CHARACTER
table[64170] = 34304; // CHARACTER
table[64171] = 34560; // CHARACTER
table[64172] = 34816; // CHARACTER
table[64173] = 35072; // CHARACTER
table[64174] = 35328; // CHARACTER
table[64175] = 35584; // CHARACTER
table[64176] = 35840; // CHARACTER
table[64177] = 36096; // CHARACTER
table[64178] = 36352; // CHARACTER
table[64179] = 36608; // CHARACTER
table[64180] = 36864; // CHARACTER
table[64181] = 37120; // CHARACTER
table[64182] = 37376; // CHARACTER
table[64183] = 37632; // CHARACTER
table[64184] = 37888; // CHARACTER
table[64185] = 38144; // CHARACTER
table[64186] = 38400; // CHARACTER
table[64187] = 38656; // CHARACTER
table[64188] = 38912; // CHARACTER
table[64189] = 39168; // CHARACTER
table[64190] = 39424; // CHARACTER
table[64191] = 39680; // CHARACTER
table[64192] = 39936; // CHARACTER
table[64193] = 40192; // CHARACTER
table[64194] = 40448; // CHARACTER
table[64195] = 40704; // CHARACTER
table[64196] = 40960; // CHARACTER
table[64197] = 41216; // CHARACTER
table[64198] = 41472; // CHARACTER
table[64199] = 41728; // CHARACTER
table[64200] = 41984; // CHARACTER
table[64201] = 42240; // CHARACTER
table[64202] = 42496; // CHARACTER
table[64203] = 42752; // CHARACTER
table[64204] = 43008; // CHARACTER
table[64205] = 43264; // CHARACTER
table[64206] = 43520; // CHARACTER
table[64207] = 43776; // CHARACTER
table[64208] = 44032; // CHARACTER
table[64209] = 44288; // CHARACTER
table[64210] = 44544; // CHARACTER
table[64211] = 44800; // CHARACTER
table[64212] = 45056; // CHARACTER
table[64213] = 45312; // CHARACTER
table[64214] = 45568; // CHARACTER
table[64215] = 45824; // CHARACTER
table[64216] = 46080; // CHARACTER
table[64217] = 46336; // CHARACTER
table[64218] = 46592; // CHARACTER
table[64219] = 46848; // CHARACTER
table[64220] = 47104; // CHARACTER
table[64221] = 47360; // CHARACTER
table[64222] = 47616; // CHARACTER
table[64223] = 47872; // CHARACTER
table[64224] = 48128; // CHARACTER
table[64225] = 48384; // CHARACTER
table[64226] = 48640; // CHARACTER
table[64227] = 48896; // CHARACTER
table[64228] = 49152; // CHARACTER
table[64229] = 49408; // CHARACTER
table[64230] = 49664; // CHARACTER
table[64231] = 49920; // CHARACTER
table[64232] = 50176; // CHARACTER
table[64233] = 50432; // CHARACTER
table[64234] = 50688; // CHARACTER
table[64235] = 50944; // CHARACTER
table[64236] = 51200; // CHARACTER
table[64237] = 51456; // CHARACTER
table[64238] = 51712; // CHARACTER
table[64239] = 51968; // CHARACTER
table[64240] = 52224; // CHARACTER
table[64241] = 52480; // CHARACTER
table[64242] = 52736; // CHARACTER
table[64243] = 52992; // CHARACTER
table[64244] = 53248; // CHARACTER
table[64245] = 53504; // CHARACTER
table[64246] = 53760; // CHARACTER
table[64247] = 54016; // CHARACTER
table[64248] = 54272; // CHARACTER
table[64249] = 54528; // CHARACTER
table[64250] = 54784; // CHARACTER
table[64251] = 55040; // CHARACTER
table[64252] = 55296; // CHARACTER
table[64253] = 55552; // CHARACTER
table[64254] = 55808; // CHARACTER
table[64048] = 56064; // HEX_NUMBER
table[64049] = 56320; // HEX_NUMBER
table[64050] = 56576; // HEX_NUMBER
table[64051] = 56832; // HEX_NUMBER
table[64052] = 57088; // HEX_NUMBER
table[64053] = 57344; // HEX_NUMBER
table[64054] = 57600; // HEX_NUMBER
table[64055] = 57856; // HEX_NUMBER
table[64056] = 58112; // HEX_NUMBER
table[64057] = 58368; // HEX_NUMBER
table[64099] = 58624; // HEX_NUMBER
table[64100] = 58880; // HEX_NUMBER
table[64101] = 59136; // HEX_NUMBER
table[64102] = 59392; // CONTROL_CHARACTER
table[64097] = 59648; // HEX_NUMBER
table[64114] = 59904; // CONTROL_CHARACTER
table[64110] = 60160; // CONTROL_CHARACTER
table[64116] = 60416; // CONTROL_CHARACTER
table[64092] = 60672; // BACKSLASH
table[64120] = 60928; // X
table[64098] = 61184; // B
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
  lexeme.state = i === l ? 15 : 16;
  lexeme.start = -1;
  lexeme.end = -1;
  return lexeme;
};

export { EOF, ERROR, next };
