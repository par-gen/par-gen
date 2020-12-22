const EOF = "@expound.EOF";
const ERROR = "@expound.ERROR";

const states = [
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
  "MINUS",
  "DOT",
  "ZERO",
  "ONE_NINE",
  "ONE_NINE",
  "ONE_NINE",
  "ONE_NINE",
  "ONE_NINE",
  "ONE_NINE",
  "ONE_NINE",
  "ONE_NINE",
  "ONE_NINE",
  "UPPER_E",
  "BRACKET_OPEN",
  "BRACKET_CLOSE",
  "STRING",
  "TRUE",
  "NULL",
  "FALSE",
  null,
  "STRING",
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

const table = new Uint16Array(12544);
table.fill(11776);
table[7456] = 0;
table[7434] = 256;
table[7437] = 512;
table[7433] = 768;
table[7540] = 10240;
table[7525] = 1024;
table[7526] = 11264;
table[7534] = 10496;
table[7547] = 1280;
table[7549] = 1536;
table[7468] = 1792;
table[7482] = 2048;
table[7458] = 7680;
table[7467] = 2304;
table[7469] = 2560;
table[7470] = 2816;
table[7472] = 3072;
table[7473] = 3328;
table[7474] = 3584;
table[7475] = 3840;
table[7476] = 4096;
table[7477] = 4352;
table[7478] = 4608;
table[7479] = 4864;
table[7480] = 5120;
table[7481] = 5376;
table[7493] = 5632;
table[7515] = 5888;
table[7517] = 6144;
table[7712] = 7680;
table[7796] = 7680;
table[7794] = 7680;
table[7797] = 7680;
table[7781] = 7680;
table[7782] = 7680;
table[7777] = 7680;
table[7788] = 7680;
table[7795] = 7680;
table[7790] = 7680;
table[7803] = 7680;
table[7805] = 7680;
table[7724] = 7680;
table[7738] = 7680;
table[7714] = 6400;
table[7680] = 7680;
table[7681] = 7680;
table[7682] = 7680;
table[7683] = 7680;
table[7684] = 7680;
table[7685] = 7680;
table[7686] = 7680;
table[7687] = 7680;
table[7772] = 8704;
table[7691] = 7680;
table[7694] = 7680;
table[7695] = 7680;
table[7696] = 7680;
table[7697] = 7680;
table[7698] = 7680;
table[7699] = 7680;
table[7700] = 7680;
table[7701] = 7680;
table[7702] = 7680;
table[7703] = 7680;
table[7704] = 7680;
table[7705] = 7680;
table[7706] = 7680;
table[7707] = 7680;
table[7708] = 7680;
table[7709] = 7680;
table[7710] = 7680;
table[7711] = 7680;
table[7713] = 7680;
table[7715] = 7680;
table[7716] = 7680;
table[7717] = 7680;
table[7718] = 7680;
table[7719] = 7680;
table[7720] = 7680;
table[7721] = 7680;
table[7722] = 7680;
table[7723] = 7680;
table[7725] = 7680;
table[7726] = 7680;
table[7727] = 7680;
table[7728] = 7680;
table[7729] = 7680;
table[7730] = 7680;
table[7731] = 7680;
table[7732] = 7680;
table[7733] = 7680;
table[7734] = 7680;
table[7735] = 7680;
table[7736] = 7680;
table[7737] = 7680;
table[7739] = 7680;
table[7740] = 7680;
table[7741] = 7680;
table[7742] = 7680;
table[7743] = 7680;
table[7744] = 7680;
table[7745] = 7680;
table[7746] = 7680;
table[7747] = 7680;
table[7748] = 7680;
table[7749] = 7680;
table[7750] = 7680;
table[7751] = 7680;
table[7752] = 7680;
table[7753] = 7680;
table[7754] = 7680;
table[7755] = 7680;
table[7756] = 7680;
table[7757] = 7680;
table[7758] = 7680;
table[7759] = 7680;
table[7760] = 7680;
table[7761] = 7680;
table[7762] = 7680;
table[7763] = 7680;
table[7764] = 7680;
table[7765] = 7680;
table[7766] = 7680;
table[7767] = 7680;
table[7768] = 7680;
table[7769] = 7680;
table[7770] = 7680;
table[7771] = 7680;
table[7773] = 7680;
table[7774] = 7680;
table[7775] = 7680;
table[7776] = 7680;
table[7778] = 7680;
table[7779] = 7680;
table[7780] = 7680;
table[7783] = 7680;
table[7784] = 7680;
table[7785] = 7680;
table[7786] = 7680;
table[7787] = 7680;
table[7789] = 7680;
table[7791] = 7680;
table[7792] = 7680;
table[7793] = 7680;
table[7798] = 7680;
table[7799] = 7680;
table[7800] = 7680;
table[7801] = 7680;
table[7802] = 7680;
table[7804] = 7680;
table[7806] = 7680;
table[7807] = 7680;
table[7808] = 7680;
table[7809] = 7680;
table[7810] = 7680;
table[7811] = 7680;
table[7812] = 7680;
table[7813] = 7680;
table[7814] = 7680;
table[7815] = 7680;
table[7816] = 7680;
table[7817] = 7680;
table[7818] = 7680;
table[7819] = 7680;
table[7820] = 7680;
table[7821] = 7680;
table[7822] = 7680;
table[7823] = 7680;
table[7824] = 7680;
table[7825] = 7680;
table[7826] = 7680;
table[7827] = 7680;
table[7828] = 7680;
table[7829] = 7680;
table[7830] = 7680;
table[7831] = 7680;
table[7832] = 7680;
table[7833] = 7680;
table[7834] = 7680;
table[7835] = 7680;
table[7836] = 7680;
table[7837] = 7680;
table[7838] = 7680;
table[7839] = 7680;
table[7840] = 7680;
table[7841] = 7680;
table[7842] = 7680;
table[7843] = 7680;
table[7844] = 7680;
table[7845] = 7680;
table[7846] = 7680;
table[7847] = 7680;
table[7848] = 7680;
table[7849] = 7680;
table[7850] = 7680;
table[7851] = 7680;
table[7852] = 7680;
table[7853] = 7680;
table[7854] = 7680;
table[7855] = 7680;
table[7856] = 7680;
table[7857] = 7680;
table[7858] = 7680;
table[7859] = 7680;
table[7860] = 7680;
table[7861] = 7680;
table[7862] = 7680;
table[7863] = 7680;
table[7864] = 7680;
table[7865] = 7680;
table[7866] = 7680;
table[7867] = 7680;
table[7868] = 7680;
table[7869] = 7680;
table[7870] = 7680;
table[7871] = 7680;
table[7872] = 7680;
table[7873] = 7680;
table[7874] = 7680;
table[7875] = 7680;
table[7876] = 7680;
table[7877] = 7680;
table[7878] = 7680;
table[7879] = 7680;
table[7880] = 7680;
table[7881] = 7680;
table[7882] = 7680;
table[7883] = 7680;
table[7884] = 7680;
table[7885] = 7680;
table[7886] = 7680;
table[7887] = 7680;
table[7888] = 7680;
table[7889] = 7680;
table[7890] = 7680;
table[7891] = 7680;
table[7892] = 7680;
table[7893] = 7680;
table[7894] = 7680;
table[7895] = 7680;
table[7896] = 7680;
table[7897] = 7680;
table[7898] = 7680;
table[7899] = 7680;
table[7900] = 7680;
table[7901] = 7680;
table[7902] = 7680;
table[7903] = 7680;
table[7904] = 7680;
table[7905] = 7680;
table[7906] = 7680;
table[7907] = 7680;
table[7908] = 7680;
table[7909] = 7680;
table[7910] = 7680;
table[7911] = 7680;
table[7912] = 7680;
table[7913] = 7680;
table[7914] = 7680;
table[7915] = 7680;
table[7916] = 7680;
table[7917] = 7680;
table[7918] = 7680;
table[7919] = 7680;
table[7920] = 7680;
table[7921] = 7680;
table[7922] = 7680;
table[7923] = 7680;
table[7924] = 7680;
table[7925] = 7680;
table[7926] = 7680;
table[7927] = 7680;
table[7928] = 7680;
table[7929] = 7680;
table[7930] = 7680;
table[7931] = 7680;
table[7932] = 7680;
table[7933] = 7680;
table[7934] = 7680;
table[8037] = 6656;
table[8300] = 6912;
table[8549] = 7168;
table[8714] = 7680;
table[8717] = 7680;
table[8713] = 7680;
table[8820] = 7680;
table[8818] = 7680;
table[8821] = 11520;
table[8806] = 7680;
table[8814] = 7680;
table[8738] = 7680;
table[8796] = 7680;
table[8712] = 7680;
table[8716] = 7680;
table[8751] = 7680;
table[8802] = 7680;
table[9061] = 7680;
table[9062] = 7680;
table[9057] = 7680;
table[9008] = 7680;
table[9009] = 7680;
table[9010] = 7680;
table[9011] = 7680;
table[9012] = 7680;
table[9013] = 7680;
table[9014] = 7680;
table[9015] = 7680;
table[9016] = 7680;
table[9017] = 7680;
table[9025] = 7680;
table[9026] = 7680;
table[9027] = 7680;
table[9028] = 7680;
table[9029] = 7680;
table[9030] = 7680;
table[9058] = 7680;
table[9059] = 7680;
table[9060] = 7680;
table[9333] = 7936;
table[9580] = 8192;
table[9843] = 8448;
table[10085] = 8960;
table[10086] = 8960;
table[10081] = 8960;
table[10032] = 8960;
table[10033] = 8960;
table[10034] = 8960;
table[10035] = 8960;
table[10036] = 8960;
table[10037] = 8960;
table[10038] = 8960;
table[10039] = 8960;
table[10040] = 8960;
table[10041] = 8960;
table[10049] = 8960;
table[10050] = 8960;
table[10051] = 8960;
table[10052] = 8960;
table[10053] = 8960;
table[10054] = 8960;
table[10082] = 8960;
table[10083] = 8960;
table[10084] = 8960;
table[10354] = 9216;
table[10613] = 9472;
table[10860] = 9728;
table[11109] = 9984;
table[11110] = 9984;
table[11105] = 9984;
table[11056] = 9984;
table[11057] = 9984;
table[11058] = 9984;
table[11059] = 9984;
table[11060] = 9984;
table[11061] = 9984;
table[11062] = 9984;
table[11063] = 9984;
table[11064] = 9984;
table[11065] = 9984;
table[11073] = 9984;
table[11074] = 9984;
table[11075] = 9984;
table[11076] = 9984;
table[11077] = 9984;
table[11078] = 9984;
table[11106] = 9984;
table[11107] = 9984;
table[11108] = 9984;
table[11361] = 10752;
table[11621] = 11008;
table[11622] = 11008;
table[11617] = 11008;
table[11568] = 11008;
table[11569] = 11008;
table[11570] = 11008;
table[11571] = 11008;
table[11572] = 11008;
table[11573] = 11008;
table[11574] = 11008;
table[11575] = 11008;
table[11576] = 11008;
table[11577] = 11008;
table[11585] = 11008;
table[11586] = 11008;
table[11587] = 11008;
table[11588] = 11008;
table[11589] = 11008;
table[11590] = 11008;
table[11618] = 11008;
table[11619] = 11008;
table[11620] = 11008;

const visited = new Uint16Array(1024);

const next = (input, offset) => {
  // 29
  let state = 7424;
  visited[0] = 7424;

  // try to find match
  let i = offset;
  let j = 0;
  let l = input.length;
  while (state !== 11776 && i < l) {
    state = table[state + input[i]];
    i++;
    j++;
    visited[j] = state;
  }

  // track back to last matched final state
  let success = false;
  let n = j;
  while (!success && n > 0) {
    success = visited[n] <= 7168 && visited[n] % 256 === 0;
    n--;
  }
  n = n + 1;

  if (success) {
    return {
      state: states[visited[n] / 256 + 2],
      start: offset,
      end: offset + n,
    };
  }
  return {
    state: i === l ? EOF : ERROR,
    start: -1,
    end: -1,
  };
};

export { EOF, next };
