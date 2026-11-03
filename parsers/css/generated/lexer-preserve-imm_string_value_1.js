// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const table = new Uint16Array(3072);
table.fill(56, 265, 270); // escape_sequence
table[288] = 56; // escape_sequence
table.fill(1536, 304, 314); // escape_sequence
table.fill(1536, 321, 327); // escape_sequence
table.fill(1536, 353, 359); // escape_sequence
table.fill(56, 521, 526); // escape_sequence
table[544] = 56; // escape_sequence
table.fill(256, 560, 570); // escape_sequence
table.fill(256, 577, 583); // escape_sequence
table.fill(256, 609, 615); // escape_sequence
table.fill(56, 777, 782); // escape_sequence
table[800] = 56; // escape_sequence
table.fill(512, 816, 826); // escape_sequence
table.fill(512, 833, 839); // escape_sequence
table.fill(512, 865, 871); // escape_sequence
table.fill(56, 1033, 1038); // escape_sequence
table[1056] = 56; // escape_sequence
table.fill(768, 1072, 1082); // escape_sequence
table.fill(768, 1089, 1095); // escape_sequence
table.fill(768, 1121, 1127); // escape_sequence
table.fill(56, 1289, 1294); // escape_sequence
table[1312] = 56; // escape_sequence
table.fill(1024, 1328, 1338); // escape_sequence
table.fill(1024, 1345, 1351); // escape_sequence
table.fill(1024, 1377, 1383); // escape_sequence
table.fill(56, 1545, 1550); // escape_sequence
table[1568] = 56; // escape_sequence
table.fill(1792, 1792, 1802); // _string_value_token3
table.fill(1792, 1803, 1826); // _string_value_token3
table.fill(1792, 1827, 1884); // _string_value_token3
table.fill(1792, 1885, 2048); // _string_value_token3
table.fill(56, 2048, 2058); // escape_sequence
table.fill(56, 2059, 2061); // escape_sequence
table.fill(56, 2062, 2096); // escape_sequence
table.fill(1280, 2096, 2106); // escape_sequence
table.fill(56, 2106, 2113); // escape_sequence
table.fill(1280, 2113, 2119); // escape_sequence
table.fill(56, 2119, 2145); // escape_sequence
table.fill(1280, 2145, 2151); // escape_sequence
table.fill(56, 2151, 2304); // escape_sequence
table.fill(1792, 2816, 2826); // _string_value_token3
table.fill(1792, 2827, 2850); // _string_value_token3
table[2850] = 51; // "
table.fill(1792, 2851, 2908); // _string_value_token3
table[2908] = 2048; // escape_sequence
table.fill(1792, 2909, 3072); // _string_value_token3

/**
 * @param {Uint8Array} input
 * @param {number} offset
 * @returns {{ state: number, start: number, end: number }}
 */
const next = (input, offset) => {
  const t = table;

  // 11
  let state = 66;

  let successPos = 0;

  // try to find match
  let i = offset & 0x7fffffff;
  const l = input.length;

  if (i < l && (state = t[input[i++] + 2816]) > 65) {
    if (state === 1792) {
      while (i < l && t[input[i] + 1792]) {
        i++;
      }
      state = 65;
    } else
      while (true) {
        if (state > 1792) {
          while (i < l && (state = t[state + input[i++]]) > 1792);
        }

        if (state <= 65) {
          break;
        }
        if (state <= 1792) {
          if (i < l) {
            state = t[state + input[i]];
          }
          if (state === 0 || i >= l) {
            state = 56;
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

  if (--state >>> 0 >= 65) {
    if (successPos !== 0) {
      i = successPos;
      state = 55;
    } else {
      state = ((i - l) >>> 31) + 66;
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
