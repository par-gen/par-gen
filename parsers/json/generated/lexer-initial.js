// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const tokenIds = new Uint8Array([
  0, // WS
  4, // CURLY_OPEN
  5, // CURLY_CLOSE
  6, // COMMA
  7, // COLON
  11, // NUMBER
  11, // NUMBER
  11, // NUMBER
  11, // NUMBER
  11, // NUMBER
  9, // BRACKET_OPEN
  10, // BRACKET_CLOSE
  8, // STRING
  1, // TRUE
  3, // NULL
  2, // FALSE
  0, // undefined
  11, // NUMBER
  11, // NUMBER
  11, // NUMBER
  11, // NUMBER
  8, // STRING
  1, // TRUE
  3, // NULL
  2, // FALSE
  8, // STRING
  8, // STRING
  1, // TRUE
  3, // NULL
  2, // FALSE
  8, // STRING
  1, // TRUE
  3, // NULL
  2, // FALSE
  8, // STRING
  2, // FALSE
  8, // STRING
  0, // undefined
  12, // @par-gen.EOF
  13, // @par-gen.ERROR
]);

const table = new Uint16Array(10240);
table.fill(9472);
table[32] = 0; // WS
table[10] = 0; // WS
table[13] = 0; // WS
table[9] = 0; // WS
table[1381] = 4352; // NUMBER
table[1326] = 5120; // NUMBER
table[1328] = 1280; // NUMBER
table[1329] = 1280; // NUMBER
table[1330] = 1280; // NUMBER
table[1331] = 1280; // NUMBER
table[1332] = 1280; // NUMBER
table[1333] = 1280; // NUMBER
table[1334] = 1280; // NUMBER
table[1335] = 1280; // NUMBER
table[1336] = 1280; // NUMBER
table[1337] = 1280; // NUMBER
table[1349] = 4352; // NUMBER
table[1637] = 4352; // NUMBER
table[1584] = 1536; // NUMBER
table[1585] = 1536; // NUMBER
table[1586] = 1536; // NUMBER
table[1587] = 1536; // NUMBER
table[1588] = 1536; // NUMBER
table[1589] = 1536; // NUMBER
table[1590] = 1536; // NUMBER
table[1591] = 1536; // NUMBER
table[1592] = 1536; // NUMBER
table[1593] = 1536; // NUMBER
table[1605] = 4352; // NUMBER
table[1840] = 1792; // NUMBER
table[1841] = 1792; // NUMBER
table[1842] = 1792; // NUMBER
table[1843] = 1792; // NUMBER
table[1844] = 1792; // NUMBER
table[1845] = 1792; // NUMBER
table[1846] = 1792; // NUMBER
table[1847] = 1792; // NUMBER
table[1848] = 1792; // NUMBER
table[1849] = 1792; // NUMBER
table[2149] = 4352; // NUMBER
table[2094] = 5120; // NUMBER
table[2117] = 4352; // NUMBER
table[4128] = 0; // WS
table[4106] = 0; // WS
table[4109] = 0; // WS
table[4105] = 0; // WS
table[4212] = 7936; // TRUE
table[4198] = 8960; // FALSE
table[4206] = 8192; // NULL
table[4219] = 256; // CURLY_OPEN
table[4221] = 512; // CURLY_CLOSE
table[4140] = 768; // COMMA
table[4154] = 1024; // COLON
table[4130] = 5376; // STRING
table[4141] = 4608; // NUMBER
table[4144] = 2048; // NUMBER
table[4145] = 1280; // NUMBER
table[4146] = 1280; // NUMBER
table[4147] = 1280; // NUMBER
table[4148] = 1280; // NUMBER
table[4149] = 1280; // NUMBER
table[4150] = 1280; // NUMBER
table[4151] = 1280; // NUMBER
table[4152] = 1280; // NUMBER
table[4153] = 1280; // NUMBER
table[4187] = 2560; // BRACKET_OPEN
table[4189] = 2816; // BRACKET_CLOSE
table[4395] = 4864; // NUMBER
table[4397] = 4864; // NUMBER
table[4400] = 2304; // NUMBER
table[4401] = 1792; // NUMBER
table[4402] = 1792; // NUMBER
table[4403] = 1792; // NUMBER
table[4404] = 1792; // NUMBER
table[4405] = 1792; // NUMBER
table[4406] = 1792; // NUMBER
table[4407] = 1792; // NUMBER
table[4408] = 1792; // NUMBER
table[4409] = 1792; // NUMBER
table[4656] = 2048; // NUMBER
table[4657] = 1280; // NUMBER
table[4658] = 1280; // NUMBER
table[4659] = 1280; // NUMBER
table[4660] = 1280; // NUMBER
table[4661] = 1280; // NUMBER
table[4662] = 1280; // NUMBER
table[4663] = 1280; // NUMBER
table[4664] = 1280; // NUMBER
table[4665] = 1280; // NUMBER
table[4912] = 2304; // NUMBER
table[4913] = 1792; // NUMBER
table[4914] = 1792; // NUMBER
table[4915] = 1792; // NUMBER
table[4916] = 1792; // NUMBER
table[4917] = 1792; // NUMBER
table[4918] = 1792; // NUMBER
table[4919] = 1792; // NUMBER
table[4920] = 1792; // NUMBER
table[4921] = 1792; // NUMBER
table[5168] = 1536; // NUMBER
table[5169] = 1536; // NUMBER
table[5170] = 1536; // NUMBER
table[5171] = 1536; // NUMBER
table[5172] = 1536; // NUMBER
table[5173] = 1536; // NUMBER
table[5174] = 1536; // NUMBER
table[5175] = 1536; // NUMBER
table[5176] = 1536; // NUMBER
table[5177] = 1536; // NUMBER
table[5408] = 5376; // STRING
table[5492] = 5376; // STRING
table[5490] = 5376; // STRING
table[5493] = 5376; // STRING
table[5477] = 5376; // STRING
table[5478] = 5376; // STRING
table[5473] = 5376; // STRING
table[5484] = 5376; // STRING
table[5491] = 5376; // STRING
table[5486] = 5376; // STRING
table[5499] = 5376; // STRING
table[5501] = 5376; // STRING
table[5420] = 5376; // STRING
table[5434] = 5376; // STRING
table[5410] = 3072; // STRING
table[5376] = 5376; // STRING
table[5377] = 5376; // STRING
table[5378] = 5376; // STRING
table[5379] = 5376; // STRING
table[5380] = 5376; // STRING
table[5381] = 5376; // STRING
table[5382] = 5376; // STRING
table[5383] = 5376; // STRING
table[5468] = 6400; // STRING
table[5387] = 5376; // STRING
table[5390] = 5376; // STRING
table[5391] = 5376; // STRING
table[5392] = 5376; // STRING
table[5393] = 5376; // STRING
table[5394] = 5376; // STRING
table[5395] = 5376; // STRING
table[5396] = 5376; // STRING
table[5397] = 5376; // STRING
table[5398] = 5376; // STRING
table[5399] = 5376; // STRING
table[5400] = 5376; // STRING
table[5401] = 5376; // STRING
table[5402] = 5376; // STRING
table[5403] = 5376; // STRING
table[5404] = 5376; // STRING
table[5405] = 5376; // STRING
table[5406] = 5376; // STRING
table[5407] = 5376; // STRING
table[5409] = 5376; // STRING
table[5411] = 5376; // STRING
table[5412] = 5376; // STRING
table[5413] = 5376; // STRING
table[5414] = 5376; // STRING
table[5415] = 5376; // STRING
table[5416] = 5376; // STRING
table[5417] = 5376; // STRING
table[5418] = 5376; // STRING
table[5419] = 5376; // STRING
table[5421] = 5376; // STRING
table[5422] = 5376; // STRING
table[5423] = 5376; // STRING
table[5424] = 5376; // STRING
table[5425] = 5376; // STRING
table[5426] = 5376; // STRING
table[5427] = 5376; // STRING
table[5428] = 5376; // STRING
table[5429] = 5376; // STRING
table[5430] = 5376; // STRING
table[5431] = 5376; // STRING
table[5432] = 5376; // STRING
table[5433] = 5376; // STRING
table[5435] = 5376; // STRING
table[5436] = 5376; // STRING
table[5437] = 5376; // STRING
table[5438] = 5376; // STRING
table[5439] = 5376; // STRING
table[5440] = 5376; // STRING
table[5441] = 5376; // STRING
table[5442] = 5376; // STRING
table[5443] = 5376; // STRING
table[5444] = 5376; // STRING
table[5445] = 5376; // STRING
table[5446] = 5376; // STRING
table[5447] = 5376; // STRING
table[5448] = 5376; // STRING
table[5449] = 5376; // STRING
table[5450] = 5376; // STRING
table[5451] = 5376; // STRING
table[5452] = 5376; // STRING
table[5453] = 5376; // STRING
table[5454] = 5376; // STRING
table[5455] = 5376; // STRING
table[5456] = 5376; // STRING
table[5457] = 5376; // STRING
table[5458] = 5376; // STRING
table[5459] = 5376; // STRING
table[5460] = 5376; // STRING
table[5461] = 5376; // STRING
table[5462] = 5376; // STRING
table[5463] = 5376; // STRING
table[5464] = 5376; // STRING
table[5465] = 5376; // STRING
table[5466] = 5376; // STRING
table[5467] = 5376; // STRING
table[5469] = 5376; // STRING
table[5470] = 5376; // STRING
table[5471] = 5376; // STRING
table[5472] = 5376; // STRING
table[5474] = 5376; // STRING
table[5475] = 5376; // STRING
table[5476] = 5376; // STRING
table[5479] = 5376; // STRING
table[5480] = 5376; // STRING
table[5481] = 5376; // STRING
table[5482] = 5376; // STRING
table[5483] = 5376; // STRING
table[5485] = 5376; // STRING
table[5487] = 5376; // STRING
table[5488] = 5376; // STRING
table[5489] = 5376; // STRING
table[5494] = 5376; // STRING
table[5495] = 5376; // STRING
table[5496] = 5376; // STRING
table[5497] = 5376; // STRING
table[5498] = 5376; // STRING
table[5500] = 5376; // STRING
table[5502] = 5376; // STRING
table[5503] = 5376; // STRING
table[5504] = 5376; // STRING
table[5505] = 5376; // STRING
table[5506] = 5376; // STRING
table[5507] = 5376; // STRING
table[5508] = 5376; // STRING
table[5509] = 5376; // STRING
table[5510] = 5376; // STRING
table[5511] = 5376; // STRING
table[5512] = 5376; // STRING
table[5513] = 5376; // STRING
table[5514] = 5376; // STRING
table[5515] = 5376; // STRING
table[5516] = 5376; // STRING
table[5517] = 5376; // STRING
table[5518] = 5376; // STRING
table[5519] = 5376; // STRING
table[5520] = 5376; // STRING
table[5521] = 5376; // STRING
table[5522] = 5376; // STRING
table[5523] = 5376; // STRING
table[5524] = 5376; // STRING
table[5525] = 5376; // STRING
table[5526] = 5376; // STRING
table[5527] = 5376; // STRING
table[5528] = 5376; // STRING
table[5529] = 5376; // STRING
table[5530] = 5376; // STRING
table[5531] = 5376; // STRING
table[5532] = 5376; // STRING
table[5533] = 5376; // STRING
table[5534] = 5376; // STRING
table[5535] = 5376; // STRING
table[5536] = 5376; // STRING
table[5537] = 5376; // STRING
table[5538] = 5376; // STRING
table[5539] = 5376; // STRING
table[5540] = 5376; // STRING
table[5541] = 5376; // STRING
table[5542] = 5376; // STRING
table[5543] = 5376; // STRING
table[5544] = 5376; // STRING
table[5545] = 5376; // STRING
table[5546] = 5376; // STRING
table[5547] = 5376; // STRING
table[5548] = 5376; // STRING
table[5549] = 5376; // STRING
table[5550] = 5376; // STRING
table[5551] = 5376; // STRING
table[5552] = 5376; // STRING
table[5553] = 5376; // STRING
table[5554] = 5376; // STRING
table[5555] = 5376; // STRING
table[5556] = 5376; // STRING
table[5557] = 5376; // STRING
table[5558] = 5376; // STRING
table[5559] = 5376; // STRING
table[5560] = 5376; // STRING
table[5561] = 5376; // STRING
table[5562] = 5376; // STRING
table[5563] = 5376; // STRING
table[5564] = 5376; // STRING
table[5565] = 5376; // STRING
table[5566] = 5376; // STRING
table[5567] = 5376; // STRING
table[5568] = 5376; // STRING
table[5569] = 5376; // STRING
table[5570] = 5376; // STRING
table[5571] = 5376; // STRING
table[5572] = 5376; // STRING
table[5573] = 5376; // STRING
table[5574] = 5376; // STRING
table[5575] = 5376; // STRING
table[5576] = 5376; // STRING
table[5577] = 5376; // STRING
table[5578] = 5376; // STRING
table[5579] = 5376; // STRING
table[5580] = 5376; // STRING
table[5581] = 5376; // STRING
table[5582] = 5376; // STRING
table[5583] = 5376; // STRING
table[5584] = 5376; // STRING
table[5585] = 5376; // STRING
table[5586] = 5376; // STRING
table[5587] = 5376; // STRING
table[5588] = 5376; // STRING
table[5589] = 5376; // STRING
table[5590] = 5376; // STRING
table[5591] = 5376; // STRING
table[5592] = 5376; // STRING
table[5593] = 5376; // STRING
table[5594] = 5376; // STRING
table[5595] = 5376; // STRING
table[5596] = 5376; // STRING
table[5597] = 5376; // STRING
table[5598] = 5376; // STRING
table[5599] = 5376; // STRING
table[5600] = 5376; // STRING
table[5601] = 5376; // STRING
table[5602] = 5376; // STRING
table[5603] = 5376; // STRING
table[5604] = 5376; // STRING
table[5605] = 5376; // STRING
table[5606] = 5376; // STRING
table[5607] = 5376; // STRING
table[5608] = 5376; // STRING
table[5609] = 5376; // STRING
table[5610] = 5376; // STRING
table[5611] = 5376; // STRING
table[5612] = 5376; // STRING
table[5613] = 5376; // STRING
table[5614] = 5376; // STRING
table[5615] = 5376; // STRING
table[5616] = 5376; // STRING
table[5617] = 5376; // STRING
table[5618] = 5376; // STRING
table[5619] = 5376; // STRING
table[5620] = 5376; // STRING
table[5621] = 5376; // STRING
table[5622] = 5376; // STRING
table[5623] = 5376; // STRING
table[5624] = 5376; // STRING
table[5625] = 5376; // STRING
table[5626] = 5376; // STRING
table[5627] = 5376; // STRING
table[5628] = 5376; // STRING
table[5629] = 5376; // STRING
table[5630] = 5376; // STRING
table[5733] = 3328; // TRUE
table[5996] = 3584; // NULL
table[6245] = 3840; // FALSE
table[6410] = 5376; // STRING
table[6413] = 5376; // STRING
table[6409] = 5376; // STRING
table[6516] = 5376; // STRING
table[6514] = 5376; // STRING
table[6517] = 9216; // STRING
table[6502] = 5376; // STRING
table[6510] = 5376; // STRING
table[6434] = 5376; // STRING
table[6492] = 5376; // STRING
table[6408] = 5376; // STRING
table[6412] = 5376; // STRING
table[6447] = 5376; // STRING
table[6498] = 5376; // STRING
table[6757] = 5376; // STRING
table[6758] = 5376; // STRING
table[6753] = 5376; // STRING
table[6704] = 5376; // STRING
table[6705] = 5376; // STRING
table[6706] = 5376; // STRING
table[6707] = 5376; // STRING
table[6708] = 5376; // STRING
table[6709] = 5376; // STRING
table[6710] = 5376; // STRING
table[6711] = 5376; // STRING
table[6712] = 5376; // STRING
table[6713] = 5376; // STRING
table[6721] = 5376; // STRING
table[6722] = 5376; // STRING
table[6723] = 5376; // STRING
table[6724] = 5376; // STRING
table[6725] = 5376; // STRING
table[6726] = 5376; // STRING
table[6754] = 5376; // STRING
table[6755] = 5376; // STRING
table[6756] = 5376; // STRING
table[7029] = 5632; // TRUE
table[7276] = 5888; // NULL
table[7539] = 6144; // FALSE
table[7781] = 6656; // STRING
table[7782] = 6656; // STRING
table[7777] = 6656; // STRING
table[7728] = 6656; // STRING
table[7729] = 6656; // STRING
table[7730] = 6656; // STRING
table[7731] = 6656; // STRING
table[7732] = 6656; // STRING
table[7733] = 6656; // STRING
table[7734] = 6656; // STRING
table[7735] = 6656; // STRING
table[7736] = 6656; // STRING
table[7737] = 6656; // STRING
table[7745] = 6656; // STRING
table[7746] = 6656; // STRING
table[7747] = 6656; // STRING
table[7748] = 6656; // STRING
table[7749] = 6656; // STRING
table[7750] = 6656; // STRING
table[7778] = 6656; // STRING
table[7779] = 6656; // STRING
table[7780] = 6656; // STRING
table[8050] = 6912; // TRUE
table[8309] = 7168; // NULL
table[8556] = 7424; // FALSE
table[8805] = 7680; // STRING
table[8806] = 7680; // STRING
table[8801] = 7680; // STRING
table[8752] = 7680; // STRING
table[8753] = 7680; // STRING
table[8754] = 7680; // STRING
table[8755] = 7680; // STRING
table[8756] = 7680; // STRING
table[8757] = 7680; // STRING
table[8758] = 7680; // STRING
table[8759] = 7680; // STRING
table[8760] = 7680; // STRING
table[8761] = 7680; // STRING
table[8769] = 7680; // STRING
table[8770] = 7680; // STRING
table[8771] = 7680; // STRING
table[8772] = 7680; // STRING
table[8773] = 7680; // STRING
table[8774] = 7680; // STRING
table[8802] = 7680; // STRING
table[8803] = 7680; // STRING
table[8804] = 7680; // STRING
table[9057] = 8448; // FALSE
table[9317] = 8704; // STRING
table[9318] = 8704; // STRING
table[9313] = 8704; // STRING
table[9264] = 8704; // STRING
table[9265] = 8704; // STRING
table[9266] = 8704; // STRING
table[9267] = 8704; // STRING
table[9268] = 8704; // STRING
table[9269] = 8704; // STRING
table[9270] = 8704; // STRING
table[9271] = 8704; // STRING
table[9272] = 8704; // STRING
table[9273] = 8704; // STRING
table[9281] = 8704; // STRING
table[9282] = 8704; // STRING
table[9283] = 8704; // STRING
table[9284] = 8704; // STRING
table[9285] = 8704; // STRING
table[9286] = 8704; // STRING
table[9314] = 8704; // STRING
table[9315] = 8704; // STRING
table[9316] = 8704; // STRING

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
  // 16
  let state = 4096;
  let successState = 9472;
  let successPos = 0;

  // try to find match
  let i = offset;
  const l = input.length;
  while (i < l) {
    state = table[state + input[i++]];
    if (state <= 3840) {
      successState = state;
      successPos = i;
    } else if (state === 9472) {
      break;
    }
  }

  if (successState !== 9472) {
    lexeme.state = tokenIds[successState >> 8];
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
