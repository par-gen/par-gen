// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const tokenIds = new Uint8Array([
  0, // undefined
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
  12, // @par-gen.EOF
  13, // @par-gen.ERROR
]);

const table = new Uint16Array(10240);
table[288] = 256; // WS
table[266] = 256; // WS
table[269] = 256; // WS
table[265] = 256; // WS
table[1637] = 4608; // NUMBER
table[1582] = 5376; // NUMBER
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
table[1605] = 4608; // NUMBER
table[1893] = 4608; // NUMBER
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
table[1861] = 4608; // NUMBER
table[2096] = 2048; // NUMBER
table[2097] = 2048; // NUMBER
table[2098] = 2048; // NUMBER
table[2099] = 2048; // NUMBER
table[2100] = 2048; // NUMBER
table[2101] = 2048; // NUMBER
table[2102] = 2048; // NUMBER
table[2103] = 2048; // NUMBER
table[2104] = 2048; // NUMBER
table[2105] = 2048; // NUMBER
table[2405] = 4608; // NUMBER
table[2350] = 5376; // NUMBER
table[2373] = 4608; // NUMBER
table[4384] = 256; // WS
table[4362] = 256; // WS
table[4365] = 256; // WS
table[4361] = 256; // WS
table[4468] = 8192; // TRUE
table[4454] = 9216; // FALSE
table[4462] = 8448; // NULL
table[4475] = 512; // CURLY_OPEN
table[4477] = 768; // CURLY_CLOSE
table[4396] = 1024; // COMMA
table[4410] = 1280; // COLON
table[4386] = 5632; // STRING
table[4397] = 4864; // NUMBER
table[4400] = 2304; // NUMBER
table[4401] = 1536; // NUMBER
table[4402] = 1536; // NUMBER
table[4403] = 1536; // NUMBER
table[4404] = 1536; // NUMBER
table[4405] = 1536; // NUMBER
table[4406] = 1536; // NUMBER
table[4407] = 1536; // NUMBER
table[4408] = 1536; // NUMBER
table[4409] = 1536; // NUMBER
table[4443] = 2816; // BRACKET_OPEN
table[4445] = 3072; // BRACKET_CLOSE
table[4651] = 5120; // NUMBER
table[4653] = 5120; // NUMBER
table[4656] = 2560; // NUMBER
table[4657] = 2048; // NUMBER
table[4658] = 2048; // NUMBER
table[4659] = 2048; // NUMBER
table[4660] = 2048; // NUMBER
table[4661] = 2048; // NUMBER
table[4662] = 2048; // NUMBER
table[4663] = 2048; // NUMBER
table[4664] = 2048; // NUMBER
table[4665] = 2048; // NUMBER
table[4912] = 2304; // NUMBER
table[4913] = 1536; // NUMBER
table[4914] = 1536; // NUMBER
table[4915] = 1536; // NUMBER
table[4916] = 1536; // NUMBER
table[4917] = 1536; // NUMBER
table[4918] = 1536; // NUMBER
table[4919] = 1536; // NUMBER
table[4920] = 1536; // NUMBER
table[4921] = 1536; // NUMBER
table[5168] = 2560; // NUMBER
table[5169] = 2048; // NUMBER
table[5170] = 2048; // NUMBER
table[5171] = 2048; // NUMBER
table[5172] = 2048; // NUMBER
table[5173] = 2048; // NUMBER
table[5174] = 2048; // NUMBER
table[5175] = 2048; // NUMBER
table[5176] = 2048; // NUMBER
table[5177] = 2048; // NUMBER
table[5424] = 1792; // NUMBER
table[5425] = 1792; // NUMBER
table[5426] = 1792; // NUMBER
table[5427] = 1792; // NUMBER
table[5428] = 1792; // NUMBER
table[5429] = 1792; // NUMBER
table[5430] = 1792; // NUMBER
table[5431] = 1792; // NUMBER
table[5432] = 1792; // NUMBER
table[5433] = 1792; // NUMBER
table[5664] = 5632; // STRING
table[5748] = 5632; // STRING
table[5746] = 5632; // STRING
table[5749] = 5632; // STRING
table[5733] = 5632; // STRING
table[5734] = 5632; // STRING
table[5729] = 5632; // STRING
table[5740] = 5632; // STRING
table[5747] = 5632; // STRING
table[5742] = 5632; // STRING
table[5755] = 5632; // STRING
table[5757] = 5632; // STRING
table[5676] = 5632; // STRING
table[5690] = 5632; // STRING
table[5666] = 3328; // STRING
table[5632] = 5632; // STRING
table[5633] = 5632; // STRING
table[5634] = 5632; // STRING
table[5635] = 5632; // STRING
table[5636] = 5632; // STRING
table[5637] = 5632; // STRING
table[5638] = 5632; // STRING
table[5639] = 5632; // STRING
table[5724] = 6656; // STRING
table[5643] = 5632; // STRING
table[5646] = 5632; // STRING
table[5647] = 5632; // STRING
table[5648] = 5632; // STRING
table[5649] = 5632; // STRING
table[5650] = 5632; // STRING
table[5651] = 5632; // STRING
table[5652] = 5632; // STRING
table[5653] = 5632; // STRING
table[5654] = 5632; // STRING
table[5655] = 5632; // STRING
table[5656] = 5632; // STRING
table[5657] = 5632; // STRING
table[5658] = 5632; // STRING
table[5659] = 5632; // STRING
table[5660] = 5632; // STRING
table[5661] = 5632; // STRING
table[5662] = 5632; // STRING
table[5663] = 5632; // STRING
table[5665] = 5632; // STRING
table[5667] = 5632; // STRING
table[5668] = 5632; // STRING
table[5669] = 5632; // STRING
table[5670] = 5632; // STRING
table[5671] = 5632; // STRING
table[5672] = 5632; // STRING
table[5673] = 5632; // STRING
table[5674] = 5632; // STRING
table[5675] = 5632; // STRING
table[5677] = 5632; // STRING
table[5678] = 5632; // STRING
table[5679] = 5632; // STRING
table[5680] = 5632; // STRING
table[5681] = 5632; // STRING
table[5682] = 5632; // STRING
table[5683] = 5632; // STRING
table[5684] = 5632; // STRING
table[5685] = 5632; // STRING
table[5686] = 5632; // STRING
table[5687] = 5632; // STRING
table[5688] = 5632; // STRING
table[5689] = 5632; // STRING
table[5691] = 5632; // STRING
table[5692] = 5632; // STRING
table[5693] = 5632; // STRING
table[5694] = 5632; // STRING
table[5695] = 5632; // STRING
table[5696] = 5632; // STRING
table[5697] = 5632; // STRING
table[5698] = 5632; // STRING
table[5699] = 5632; // STRING
table[5700] = 5632; // STRING
table[5701] = 5632; // STRING
table[5702] = 5632; // STRING
table[5703] = 5632; // STRING
table[5704] = 5632; // STRING
table[5705] = 5632; // STRING
table[5706] = 5632; // STRING
table[5707] = 5632; // STRING
table[5708] = 5632; // STRING
table[5709] = 5632; // STRING
table[5710] = 5632; // STRING
table[5711] = 5632; // STRING
table[5712] = 5632; // STRING
table[5713] = 5632; // STRING
table[5714] = 5632; // STRING
table[5715] = 5632; // STRING
table[5716] = 5632; // STRING
table[5717] = 5632; // STRING
table[5718] = 5632; // STRING
table[5719] = 5632; // STRING
table[5720] = 5632; // STRING
table[5721] = 5632; // STRING
table[5722] = 5632; // STRING
table[5723] = 5632; // STRING
table[5725] = 5632; // STRING
table[5726] = 5632; // STRING
table[5727] = 5632; // STRING
table[5728] = 5632; // STRING
table[5730] = 5632; // STRING
table[5731] = 5632; // STRING
table[5732] = 5632; // STRING
table[5735] = 5632; // STRING
table[5736] = 5632; // STRING
table[5737] = 5632; // STRING
table[5738] = 5632; // STRING
table[5739] = 5632; // STRING
table[5741] = 5632; // STRING
table[5743] = 5632; // STRING
table[5744] = 5632; // STRING
table[5745] = 5632; // STRING
table[5750] = 5632; // STRING
table[5751] = 5632; // STRING
table[5752] = 5632; // STRING
table[5753] = 5632; // STRING
table[5754] = 5632; // STRING
table[5756] = 5632; // STRING
table[5758] = 5632; // STRING
table[5759] = 5632; // STRING
table[5760] = 5632; // STRING
table[5761] = 5632; // STRING
table[5762] = 5632; // STRING
table[5763] = 5632; // STRING
table[5764] = 5632; // STRING
table[5765] = 5632; // STRING
table[5766] = 5632; // STRING
table[5767] = 5632; // STRING
table[5768] = 5632; // STRING
table[5769] = 5632; // STRING
table[5770] = 5632; // STRING
table[5771] = 5632; // STRING
table[5772] = 5632; // STRING
table[5773] = 5632; // STRING
table[5774] = 5632; // STRING
table[5775] = 5632; // STRING
table[5776] = 5632; // STRING
table[5777] = 5632; // STRING
table[5778] = 5632; // STRING
table[5779] = 5632; // STRING
table[5780] = 5632; // STRING
table[5781] = 5632; // STRING
table[5782] = 5632; // STRING
table[5783] = 5632; // STRING
table[5784] = 5632; // STRING
table[5785] = 5632; // STRING
table[5786] = 5632; // STRING
table[5787] = 5632; // STRING
table[5788] = 5632; // STRING
table[5789] = 5632; // STRING
table[5790] = 5632; // STRING
table[5791] = 5632; // STRING
table[5792] = 5632; // STRING
table[5793] = 5632; // STRING
table[5794] = 5632; // STRING
table[5795] = 5632; // STRING
table[5796] = 5632; // STRING
table[5797] = 5632; // STRING
table[5798] = 5632; // STRING
table[5799] = 5632; // STRING
table[5800] = 5632; // STRING
table[5801] = 5632; // STRING
table[5802] = 5632; // STRING
table[5803] = 5632; // STRING
table[5804] = 5632; // STRING
table[5805] = 5632; // STRING
table[5806] = 5632; // STRING
table[5807] = 5632; // STRING
table[5808] = 5632; // STRING
table[5809] = 5632; // STRING
table[5810] = 5632; // STRING
table[5811] = 5632; // STRING
table[5812] = 5632; // STRING
table[5813] = 5632; // STRING
table[5814] = 5632; // STRING
table[5815] = 5632; // STRING
table[5816] = 5632; // STRING
table[5817] = 5632; // STRING
table[5818] = 5632; // STRING
table[5819] = 5632; // STRING
table[5820] = 5632; // STRING
table[5821] = 5632; // STRING
table[5822] = 5632; // STRING
table[5823] = 5632; // STRING
table[5824] = 5632; // STRING
table[5825] = 5632; // STRING
table[5826] = 5632; // STRING
table[5827] = 5632; // STRING
table[5828] = 5632; // STRING
table[5829] = 5632; // STRING
table[5830] = 5632; // STRING
table[5831] = 5632; // STRING
table[5832] = 5632; // STRING
table[5833] = 5632; // STRING
table[5834] = 5632; // STRING
table[5835] = 5632; // STRING
table[5836] = 5632; // STRING
table[5837] = 5632; // STRING
table[5838] = 5632; // STRING
table[5839] = 5632; // STRING
table[5840] = 5632; // STRING
table[5841] = 5632; // STRING
table[5842] = 5632; // STRING
table[5843] = 5632; // STRING
table[5844] = 5632; // STRING
table[5845] = 5632; // STRING
table[5846] = 5632; // STRING
table[5847] = 5632; // STRING
table[5848] = 5632; // STRING
table[5849] = 5632; // STRING
table[5850] = 5632; // STRING
table[5851] = 5632; // STRING
table[5852] = 5632; // STRING
table[5853] = 5632; // STRING
table[5854] = 5632; // STRING
table[5855] = 5632; // STRING
table[5856] = 5632; // STRING
table[5857] = 5632; // STRING
table[5858] = 5632; // STRING
table[5859] = 5632; // STRING
table[5860] = 5632; // STRING
table[5861] = 5632; // STRING
table[5862] = 5632; // STRING
table[5863] = 5632; // STRING
table[5864] = 5632; // STRING
table[5865] = 5632; // STRING
table[5866] = 5632; // STRING
table[5867] = 5632; // STRING
table[5868] = 5632; // STRING
table[5869] = 5632; // STRING
table[5870] = 5632; // STRING
table[5871] = 5632; // STRING
table[5872] = 5632; // STRING
table[5873] = 5632; // STRING
table[5874] = 5632; // STRING
table[5875] = 5632; // STRING
table[5876] = 5632; // STRING
table[5877] = 5632; // STRING
table[5878] = 5632; // STRING
table[5879] = 5632; // STRING
table[5880] = 5632; // STRING
table[5881] = 5632; // STRING
table[5882] = 5632; // STRING
table[5883] = 5632; // STRING
table[5884] = 5632; // STRING
table[5885] = 5632; // STRING
table[5886] = 5632; // STRING
table[5989] = 3584; // TRUE
table[6252] = 3840; // NULL
table[6501] = 4096; // FALSE
table[6666] = 5632; // STRING
table[6669] = 5632; // STRING
table[6665] = 5632; // STRING
table[6772] = 5632; // STRING
table[6770] = 5632; // STRING
table[6773] = 9472; // STRING
table[6758] = 5632; // STRING
table[6766] = 5632; // STRING
table[6690] = 5632; // STRING
table[6748] = 5632; // STRING
table[6664] = 5632; // STRING
table[6668] = 5632; // STRING
table[6703] = 5632; // STRING
table[6754] = 5632; // STRING
table[7013] = 5632; // STRING
table[7014] = 5632; // STRING
table[7009] = 5632; // STRING
table[6960] = 5632; // STRING
table[6961] = 5632; // STRING
table[6962] = 5632; // STRING
table[6963] = 5632; // STRING
table[6964] = 5632; // STRING
table[6965] = 5632; // STRING
table[6966] = 5632; // STRING
table[6967] = 5632; // STRING
table[6968] = 5632; // STRING
table[6969] = 5632; // STRING
table[6977] = 5632; // STRING
table[6978] = 5632; // STRING
table[6979] = 5632; // STRING
table[6980] = 5632; // STRING
table[6981] = 5632; // STRING
table[6982] = 5632; // STRING
table[7010] = 5632; // STRING
table[7011] = 5632; // STRING
table[7012] = 5632; // STRING
table[7285] = 5888; // TRUE
table[7532] = 6144; // NULL
table[7795] = 6400; // FALSE
table[8037] = 6912; // STRING
table[8038] = 6912; // STRING
table[8033] = 6912; // STRING
table[7984] = 6912; // STRING
table[7985] = 6912; // STRING
table[7986] = 6912; // STRING
table[7987] = 6912; // STRING
table[7988] = 6912; // STRING
table[7989] = 6912; // STRING
table[7990] = 6912; // STRING
table[7991] = 6912; // STRING
table[7992] = 6912; // STRING
table[7993] = 6912; // STRING
table[8001] = 6912; // STRING
table[8002] = 6912; // STRING
table[8003] = 6912; // STRING
table[8004] = 6912; // STRING
table[8005] = 6912; // STRING
table[8006] = 6912; // STRING
table[8034] = 6912; // STRING
table[8035] = 6912; // STRING
table[8036] = 6912; // STRING
table[8306] = 7168; // TRUE
table[8565] = 7424; // NULL
table[8812] = 7680; // FALSE
table[9061] = 7936; // STRING
table[9062] = 7936; // STRING
table[9057] = 7936; // STRING
table[9008] = 7936; // STRING
table[9009] = 7936; // STRING
table[9010] = 7936; // STRING
table[9011] = 7936; // STRING
table[9012] = 7936; // STRING
table[9013] = 7936; // STRING
table[9014] = 7936; // STRING
table[9015] = 7936; // STRING
table[9016] = 7936; // STRING
table[9017] = 7936; // STRING
table[9025] = 7936; // STRING
table[9026] = 7936; // STRING
table[9027] = 7936; // STRING
table[9028] = 7936; // STRING
table[9029] = 7936; // STRING
table[9030] = 7936; // STRING
table[9058] = 7936; // STRING
table[9059] = 7936; // STRING
table[9060] = 7936; // STRING
table[9313] = 8704; // FALSE
table[9573] = 8960; // STRING
table[9574] = 8960; // STRING
table[9569] = 8960; // STRING
table[9520] = 8960; // STRING
table[9521] = 8960; // STRING
table[9522] = 8960; // STRING
table[9523] = 8960; // STRING
table[9524] = 8960; // STRING
table[9525] = 8960; // STRING
table[9526] = 8960; // STRING
table[9527] = 8960; // STRING
table[9528] = 8960; // STRING
table[9529] = 8960; // STRING
table[9537] = 8960; // STRING
table[9538] = 8960; // STRING
table[9539] = 8960; // STRING
table[9540] = 8960; // STRING
table[9541] = 8960; // STRING
table[9542] = 8960; // STRING
table[9570] = 8960; // STRING
table[9571] = 8960; // STRING
table[9572] = 8960; // STRING

/**
 * @param {Uint8Array} input
 * @param {number} offset
 * @returns {{ state: number, start: number, end: number }}
 */
const next = (input, offset) => {
  // 17
  let state = 4352;
  let successState = 0;
  let successPos = 0;

  // try to find match
  let i = offset;
  const l = input.length;
  while (i < l) {
    state = table[state + input[i++]];
    if (state <= 4096) {
      if (state === 0) {
        break;
      }
      successState = state;
      successPos = i;
    }
  }

  if (successState !== 0) {
    state = tokenIds[successState >> 8];
  } else {
    state = i === l ? 12 : 13;
    offset = -1;
    successPos = -1;
  }
  return {
    state,
    start: offset,
    end: successPos,
  };
};

export { EOF, ERROR, next };
