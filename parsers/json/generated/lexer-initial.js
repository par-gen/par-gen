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
table.fill(256, 1545, 1547); // WS
table[1549] = 256; // WS
table[1568] = 256; // WS
table[1570] = 2816; // STRING
table[1580] = 7; // COMMA
table[1581] = 2048; // NUMBER
table[1584] = 1280; // NUMBER
table.fill(512, 1585, 1594); // NUMBER
table[1594] = 8; // COLON
table[1627] = 10; // BRACKET_OPEN
table[1629] = 11; // BRACKET_CLOSE
table[1638] = 6400; // FALSE
table[1646] = 5632; // NULL
table[1652] = 5376; // TRUE
table[1659] = 5; // CURLY_OPEN
table[1661] = 6; // CURLY_CLOSE
table[1835] = 2304; // NUMBER
table[1837] = 2304; // NUMBER
table[1840] = 12; // NUMBER
table.fill(1024, 1841, 1850); // NUMBER
table[2096] = 1280; // NUMBER
table.fill(512, 2097, 2106); // NUMBER
table[2352] = 12; // NUMBER
table.fill(1024, 2353, 2362); // NUMBER
table.fill(768, 2608, 2618); // NUMBER
table.fill(2816, 2816, 2850); // STRING
table[2850] = 9; // STRING
table.fill(2816, 2851, 2908); // STRING
table[2908] = 3840; // STRING
table.fill(2816, 2909, 3072); // STRING
table[3173] = 2; // TRUE
table[3436] = 4; // NULL
table[3685] = 3; // FALSE
table[3874] = 2816; // STRING
table[3887] = 2816; // STRING
table[3932] = 2816; // STRING
table[3938] = 2816; // STRING
table[3942] = 2816; // STRING
table[3950] = 2816; // STRING
table[3954] = 2816; // STRING
table[3956] = 2816; // STRING
table[3957] = 6656; // STRING
table.fill(2816, 4144, 4154); // STRING
table.fill(2816, 4161, 4167); // STRING
table.fill(2816, 4193, 4199); // STRING
table[4469] = 3072; // TRUE
table[4716] = 3328; // NULL
table[4979] = 3584; // FALSE
table.fill(4096, 5168, 5178); // STRING
table.fill(4096, 5185, 5191); // STRING
table.fill(4096, 5217, 5223); // STRING
table[5490] = 4352; // TRUE
table[5749] = 4608; // NULL
table[5996] = 4864; // FALSE
table.fill(5120, 6192, 6202); // STRING
table.fill(5120, 6209, 6215); // STRING
table.fill(5120, 6241, 6247); // STRING
table[6497] = 5888; // FALSE
table.fill(6144, 6704, 6714); // STRING
table.fill(6144, 6721, 6727); // STRING
table.fill(6144, 6753, 6759); // STRING

/**
 * @param {Uint8Array} input
 * @param {number} offset
 * @returns {{ state: number, start: number, end: number }}
 */
const next = (input, offset) => {
  // 6
  let state = 1536;
  let successState = 0;
  let successPos = 0;

  // try to find match
  let i = offset & 0x7fffffff;
  const l = input.length;

  while (i < l) {
    while (i < l && (state = table[state + input[i++]]) > 1280);
    if (state <= 12) {
      break;
    }
    if (state <= 1280) {
      successState = state;
      successPos = i;
    }
  }

  state -= 1;
  if (state >>> 0 >= 12) {
    if (successState !== 0) {
      state = successState === 256 ? 0 : 11;
      i = successPos;
    } else {
      state = i === l ? 12 : 13;
      offset = -1;
      i = -1;
    }
  }
  return {
    state,
    start: offset,
    end: i,
  };
};

export { EOF, ERROR, next };
