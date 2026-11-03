// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const table = new Uint16Array(7424);
table.fill(256, 265, 267); // WS
table[269] = 256; // WS
table[288] = 256; // WS
table[558] = 2560; // NUMBER
table.fill(512, 560, 570); // NUMBER
table[581] = 1792; // NUMBER
table[613] = 1792; // NUMBER
table.fill(768, 816, 826); // NUMBER
table[837] = 1792; // NUMBER
table[869] = 1792; // NUMBER
table.fill(1024, 1072, 1082); // NUMBER
table[1326] = 2560; // NUMBER
table[1349] = 1792; // NUMBER
table[1381] = 1792; // NUMBER
table.fill(1536, 1536, 1570); // STRING
table[1570] = 9; // STRING
table.fill(1536, 1571, 1628); // STRING
table[1628] = 3584; // STRING
table.fill(1536, 1629, 1792); // STRING
table[1835] = 2304; // NUMBER
table[1837] = 2304; // NUMBER
table[1840] = 12; // NUMBER
table.fill(1024, 1841, 1850); // NUMBER
table[2096] = 1280; // NUMBER
table.fill(512, 2097, 2106); // NUMBER
table[2352] = 12; // NUMBER
table.fill(1024, 2353, 2362); // NUMBER
table.fill(768, 2608, 2618); // NUMBER
table[2917] = 2; // TRUE
table[3180] = 4; // NULL
table[3429] = 3; // FALSE
table[3618] = 1536; // STRING
table[3631] = 1536; // STRING
table[3676] = 1536; // STRING
table[3682] = 1536; // STRING
table[3686] = 1536; // STRING
table[3694] = 1536; // STRING
table[3698] = 1536; // STRING
table[3700] = 1536; // STRING
table[3701] = 6400; // STRING
table.fill(1536, 3888, 3898); // STRING
table.fill(1536, 3905, 3911); // STRING
table.fill(1536, 3937, 3943); // STRING
table[4213] = 2816; // TRUE
table[4460] = 3072; // NULL
table[4723] = 3328; // FALSE
table.fill(3840, 4912, 4922); // STRING
table.fill(3840, 4929, 4935); // STRING
table.fill(3840, 4961, 4967); // STRING
table[5234] = 4096; // TRUE
table[5493] = 4352; // NULL
table[5740] = 4608; // FALSE
table.fill(4864, 5936, 5946); // STRING
table.fill(4864, 5953, 5959); // STRING
table.fill(4864, 5985, 5991); // STRING
table[6241] = 5632; // FALSE
table.fill(5888, 6448, 6458); // STRING
table.fill(5888, 6465, 6471); // STRING
table.fill(5888, 6497, 6503); // STRING
table.fill(256, 7177, 7179); // WS
table[7181] = 256; // WS
table[7200] = 256; // WS
table[7202] = 1536; // STRING
table[7212] = 7; // COMMA
table[7213] = 2048; // NUMBER
table[7216] = 1280; // NUMBER
table.fill(512, 7217, 7226); // NUMBER
table[7226] = 8; // COLON
table[7259] = 10; // BRACKET_OPEN
table[7261] = 11; // BRACKET_CLOSE
table[7270] = 6144; // FALSE
table[7278] = 5376; // NULL
table[7284] = 5120; // TRUE
table[7291] = 5; // CURLY_OPEN
table[7293] = 6; // CURLY_CLOSE

const fast_1536 = new Uint8Array(256);
for (let j = 0; j < 256; j++) fast_1536[j] = table[1536 + j] === 1536 ? 0 : 1;
let cachedInput_1536 = null;
let cachedDv_1536 = null;
const scan_1536 = (input, i, l) => {
  const dv =
    input === cachedInput_1536
      ? cachedDv_1536
      : ((cachedInput_1536 = input),
        (cachedDv_1536 = new DataView(
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
  const f = fast_1536;
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

  // 28
  let state = 13;

  let successPos = 0;
  let i = offset & 0x7fffffff;
  const l = input.length;

  if (i < l && (state = t[input[i++] + 7168]) > 12) {
    if (state === 256) {
      while (i < l && t[input[i] + 256]) {
        i++;
      }
      state = 1;
    } else
      while (true) {
        if (state === 1536) {
          i = scan_1536(input, i, l);
          if (i < l) state = t[input[i++] + 1536];
        }
        if (state > 1536) {
          while (i < l && (state = t[state + input[i++]]) > 1536);
        }
        if (state <= 12) {
          break;
        }
        if (state <= 1280) {
          while (i < l && state === (state = t[state + input[i]])) {
            i++;
          }
          if (state <= 1280) {
            state = 12;
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

  if (--state >>> 0 >= 12) {
    if (successPos !== 0) {
      i = successPos;
      state = 11;
    } else {
      state = ((i - l) >>> 31) + 12;
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
