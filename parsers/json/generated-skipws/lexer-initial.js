// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const table = new Uint16Array(7168);
table[302] = 2304; // NUMBER
table.fill(256, 304, 314); // NUMBER
table[325] = 1536; // NUMBER
table[357] = 1536; // NUMBER
table.fill(512, 560, 570); // NUMBER
table[581] = 1536; // NUMBER
table[613] = 1536; // NUMBER
table.fill(768, 816, 826); // NUMBER
table[1070] = 2304; // NUMBER
table[1093] = 1536; // NUMBER
table[1125] = 1536; // NUMBER
table.fill(1280, 1280, 1314); // STRING
table[1314] = 8; // STRING
table.fill(1280, 1315, 1372); // STRING
table[1372] = 3328; // STRING
table.fill(1280, 1373, 1536); // STRING
table[1579] = 2048; // NUMBER
table[1581] = 2048; // NUMBER
table[1584] = 11; // NUMBER
table.fill(768, 1585, 1594); // NUMBER
table[1840] = 1024; // NUMBER
table.fill(256, 1841, 1850); // NUMBER
table[2096] = 11; // NUMBER
table.fill(768, 2097, 2106); // NUMBER
table.fill(512, 2352, 2362); // NUMBER
table[2661] = 1; // TRUE
table[2924] = 3; // NULL
table[3173] = 2; // FALSE
table[3362] = 1280; // STRING
table[3375] = 1280; // STRING
table[3420] = 1280; // STRING
table[3426] = 1280; // STRING
table[3430] = 1280; // STRING
table[3438] = 1280; // STRING
table[3442] = 1280; // STRING
table[3444] = 1280; // STRING
table[3445] = 6144; // STRING
table.fill(1280, 3632, 3642); // STRING
table.fill(1280, 3649, 3655); // STRING
table.fill(1280, 3681, 3687); // STRING
table[3957] = 2560; // TRUE
table[4204] = 2816; // NULL
table[4467] = 3072; // FALSE
table.fill(3584, 4656, 4666); // STRING
table.fill(3584, 4673, 4679); // STRING
table.fill(3584, 4705, 4711); // STRING
table[4978] = 3840; // TRUE
table[5237] = 4096; // NULL
table[5484] = 4352; // FALSE
table.fill(4608, 5680, 5690); // STRING
table.fill(4608, 5697, 5703); // STRING
table.fill(4608, 5729, 5735); // STRING
table[5985] = 5376; // FALSE
table.fill(5632, 6192, 6202); // STRING
table.fill(5632, 6209, 6215); // STRING
table.fill(5632, 6241, 6247); // STRING
table.fill(65535, 6921, 6923); // SKIP
table[6925] = 65535; // SKIP
table[6944] = 65535; // SKIP
table[6946] = 1280; // STRING
table[6956] = 6; // COMMA
table[6957] = 1792; // NUMBER
table[6960] = 1024; // NUMBER
table.fill(256, 6961, 6970); // NUMBER
table[6970] = 7; // COLON
table[7003] = 9; // BRACKET_OPEN
table[7005] = 10; // BRACKET_CLOSE
table[7014] = 5888; // FALSE
table[7022] = 5120; // NULL
table[7028] = 4864; // TRUE
table[7035] = 4; // CURLY_OPEN
table[7037] = 5; // CURLY_CLOSE

const fast_1280 = new Uint8Array(256);
for (let j = 0; j < 256; j++) fast_1280[j] = table[1280 + j] === 1280 ? 0 : 1;
let cachedInput_1280 = null;
let cachedDv_1280 = null;
const scan_1280 = (input, i, l) => {
  const dv =
    input === cachedInput_1280
      ? cachedDv_1280
      : ((cachedInput_1280 = input),
        (cachedDv_1280 = new DataView(
          input.buffer,
          input.byteOffset,
          input.byteLength
        )));
  const l8 = l - 7;
  while (i < l8) {
    const w0 = dv.getUint32(i, true);
    if (
      (((w0 - 0x1010101) |
        ((w0 ^ 0x22222222) - 0x01010101) |
        ((w0 ^ 0x5c5c5c5c) - 0x01010101) |
        w0) &
        0x80808080) !==
      0
    )
      break;
    const w1 = dv.getUint32(i + 4, true);
    if (
      (((w1 - 0x1010101) |
        ((w1 ^ 0x22222222) - 0x01010101) |
        ((w1 ^ 0x5c5c5c5c) - 0x01010101) |
        w1) &
        0x80808080) !==
      0
    ) {
      i += 4;
      break;
    }
    i += 8;
  }
  const f = fast_1280;
  while (i < l && f[input[i]] === 0) i++;
  return i;
};

/**
 * @param {Uint8Array} input
 * @param {number} offset
 * @returns {{ state: number, start: number, end: number }}
 */
const next = (input, offset) => {
  const t = table;

  // 27
  let state = 12;

  let successPos = 0;

  // try to find match
  let i = offset & 0x7fffffff;
  const l = input.length;

  if (i < l && (state = t[input[i++] + 6912]) > 11) {
    if (state === 65535) {
      while (i < l && 65535 === (state = t[input[i++] + 6912]));
      offset = i - 1;
    }
    while (true) {
      if (state === 1280) {
        i = scan_1280(input, i, l);
        if (i < l) state = t[input[i++] + 1280];
      }
      if (state > 1280) {
        while (i < l && (state = t[state + input[i++]]) > 1280);
      }
      if (state <= 11) {
        break;
      }
      if (state <= 1024) {
        while (i < l && state === (state = t[state + input[i]])) {
          i++;
        }
        if (state <= 1024) {
          state = 11;
          break;
        }
        successPos = i;
        i++;
      }
      if (i >= l) {
        break;
      }
    }
  }

  if (--state >>> 0 >= 11) {
    if (successPos !== 0) {
      i = successPos;
      state = 10;
    } else {
      state = ((i - l) >>> 31) + 11;
      offset = i = -1;
    }
  }
  return {
    state,
    start: offset,
    end: i,
  };
};

export { EOF, ERROR, next };
