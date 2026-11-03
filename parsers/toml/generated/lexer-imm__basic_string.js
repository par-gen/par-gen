// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const table = new Uint16Array(3584);
table[265] = 256; // __basic_string_token2
table.fill(256, 288, 290); // __basic_string_token2
table.fill(256, 291, 348); // __basic_string_token2
table.fill(256, 349, 383); // __basic_string_token2
table.fill(256, 384, 512); // __basic_string_token2
table[546] = 13; // escape_sequence
table[597] = 2560; // escape_sequence
table[604] = 13; // escape_sequence
table[610] = 13; // escape_sequence
table[614] = 13; // escape_sequence
table[622] = 13; // escape_sequence
table[626] = 13; // escape_sequence
table[628] = 13; // escape_sequence
table[629] = 1536; // escape_sequence
table.fill(13, 816, 826); // escape_sequence
table.fill(13, 833, 839); // escape_sequence
table.fill(13, 865, 871); // escape_sequence
table.fill(768, 1072, 1082); // escape_sequence
table.fill(768, 1089, 1095); // escape_sequence
table.fill(768, 1121, 1127); // escape_sequence
table.fill(1024, 1328, 1338); // escape_sequence
table.fill(1024, 1345, 1351); // escape_sequence
table.fill(1024, 1377, 1383); // escape_sequence
table.fill(1280, 1584, 1594); // escape_sequence
table.fill(1280, 1601, 1607); // escape_sequence
table.fill(1280, 1633, 1639); // escape_sequence
table.fill(1536, 1840, 1850); // escape_sequence
table.fill(1536, 1857, 1863); // escape_sequence
table.fill(1536, 1889, 1895); // escape_sequence
table.fill(1792, 2096, 2106); // escape_sequence
table.fill(1792, 2113, 2119); // escape_sequence
table.fill(1792, 2145, 2151); // escape_sequence
table.fill(2048, 2352, 2362); // escape_sequence
table.fill(2048, 2369, 2375); // escape_sequence
table.fill(2048, 2401, 2407); // escape_sequence
table.fill(2304, 2608, 2618); // escape_sequence
table.fill(2304, 2625, 2631); // escape_sequence
table.fill(2304, 2657, 2663); // escape_sequence
table[3337] = 256; // __basic_string_token2
table.fill(256, 3360, 3362); // __basic_string_token2
table[3362] = 9; // "
table.fill(256, 3363, 3420); // __basic_string_token2
table[3420] = 512; // escape_sequence
table.fill(256, 3421, 3455); // __basic_string_token2
table.fill(256, 3456, 3584); // __basic_string_token2

/**
 * @param {Uint8Array} input
 * @param {number} offset
 * @returns {{ state: number, start: number, end: number }}
 */
const next = (input, offset) => {
  const t = table;

  // 13
  let state = 25;

  let successPos = 0;

  // try to find match
  let i = offset & 0x7fffffff;
  const l = input.length;

  if (i < l && (state = t[input[i++] + 3328]) > 24) {
    while (true) {
      if (state > 256) {
        while (i < l && (state = t[state + input[i++]]) > 256);
      }

      if (state <= 24) {
        break;
      }
      if (state <= 256) {
        while (i < l && (state = t[input[i] + 256]) === 256) {
          i++;
        }
        if (state <= 256) {
          state = 24;
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

  if (--state >>> 0 >= 24) {
    if (successPos !== 0) {
      i = successPos;
      state = 23;
    } else {
      state = ((i - l) >>> 31) + 35;
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
