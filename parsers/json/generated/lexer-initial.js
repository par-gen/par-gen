// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const table = new Uint16Array(7424);
table.fill(256, 265, 267); // WS
table[269] = 256; // WS
table[288] = 256; // WS
table[558] = 2816; // NUMBER
table.fill(512, 560, 570); // NUMBER
table[581] = 2048; // NUMBER
table[613] = 2048; // NUMBER
table.fill(768, 816, 826); // NUMBER
table[837] = 2048; // NUMBER
table[869] = 2048; // NUMBER
table.fill(1024, 1072, 1082); // NUMBER
table[1326] = 2816; // NUMBER
table[1349] = 2048; // NUMBER
table[1381] = 2048; // NUMBER
table.fill(1536, 1536, 1570); // STRING
table[1570] = 9; // STRING
table.fill(1536, 1571, 1628); // STRING
table[1628] = 3840; // STRING
table.fill(1536, 1629, 1792); // STRING
table.fill(256, 1801, 1803); // WS
table[1805] = 256; // WS
table[1824] = 256; // WS
table[1826] = 1536; // STRING
table[1836] = 7; // COMMA
table[1837] = 2304; // NUMBER
table[1840] = 1280; // NUMBER
table.fill(512, 1841, 1850); // NUMBER
table[1850] = 8; // COLON
table[1883] = 10; // BRACKET_OPEN
table[1885] = 11; // BRACKET_CLOSE
table[1894] = 6400; // FALSE
table[1902] = 5632; // NULL
table[1908] = 5376; // TRUE
table[1915] = 5; // CURLY_OPEN
table[1917] = 6; // CURLY_CLOSE
table[2091] = 2560; // NUMBER
table[2093] = 2560; // NUMBER
table[2096] = 12; // NUMBER
table.fill(1024, 2097, 2106); // NUMBER
table[2352] = 1280; // NUMBER
table.fill(512, 2353, 2362); // NUMBER
table[2608] = 12; // NUMBER
table.fill(1024, 2609, 2618); // NUMBER
table.fill(768, 2864, 2874); // NUMBER
table[3173] = 2; // TRUE
table[3436] = 4; // NULL
table[3685] = 3; // FALSE
table[3874] = 1536; // STRING
table[3887] = 1536; // STRING
table[3932] = 1536; // STRING
table[3938] = 1536; // STRING
table[3942] = 1536; // STRING
table[3950] = 1536; // STRING
table[3954] = 1536; // STRING
table[3956] = 1536; // STRING
table[3957] = 6656; // STRING
table.fill(1536, 4144, 4154); // STRING
table.fill(1536, 4161, 4167); // STRING
table.fill(1536, 4193, 4199); // STRING
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
  // 7
  let state = 1792;

  let successPos = 0;

  // try to find match
  let i = offset & 0x7fffffff;
  const l = input.length;
  const t = table;

  if (i < l && (state = t[1792 + input[i++]]) > 12) {
    while (true) {
      if (state > 1536) {
        while (i < l && (state = t[state + input[i++]]) > 1536);
      }
      if (state === 1536) {
        while (i < l && (state = t[1536 + input[i++]]) === 1536);
      }
      if (state <= 12) {
        break;
      }
      if (state <= 1280) {
        while (i < l && t[state + input[i]] === state) {
          i++;
        }
        if (state === 256) {
          state = 1;
          break;
        }

        successPos = i;
      }
      if (i >= l) {
        break;
      }
      state = t[state + input[i++]];
    }
  }

  state -= 1;
  if (state >>> 0 >= 12) {
    if (successPos !== 0) {
      state = 11;
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
