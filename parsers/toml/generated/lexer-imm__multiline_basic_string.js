// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const table = new Uint16Array(4608);
table[265] = 256; // __multiline_basic_string_token3
table.fill(256, 288, 290); // __multiline_basic_string_token3
table.fill(256, 291, 348); // __multiline_basic_string_token3
table.fill(256, 349, 383); // __multiline_basic_string_token3
table.fill(256, 384, 512); // __multiline_basic_string_token3
table[522] = 26; // __multiline_basic_string_token4
table.fill(21, 768, 802); // _multiline_basic_string_content
table[802] = 1; // """
table.fill(21, 803, 860); // _multiline_basic_string_content
table.fill(21, 861, 1058); // _multiline_basic_string_content
table[1058] = 768; // _multiline_basic_string_content
table.fill(21, 1059, 1116); // _multiline_basic_string_content
table.fill(21, 1117, 1280); // _multiline_basic_string_content
table[1290] = 14; // _escape_line_ending
table[1293] = 1792; // _escape_line_ending
table[1314] = 13; // escape_sequence
table[1365] = 3584; // escape_sequence
table[1372] = 13; // escape_sequence
table[1378] = 13; // escape_sequence
table[1382] = 13; // escape_sequence
table[1390] = 13; // escape_sequence
table[1394] = 13; // escape_sequence
table[1396] = 13; // escape_sequence
table[1397] = 2560; // escape_sequence
table.fill(13, 1584, 1594); // escape_sequence
table.fill(13, 1601, 1607); // escape_sequence
table.fill(13, 1633, 1639); // escape_sequence
table[1802] = 14; // _escape_line_ending
table.fill(1536, 2096, 2106); // escape_sequence
table.fill(1536, 2113, 2119); // escape_sequence
table.fill(1536, 2145, 2151); // escape_sequence
table.fill(2048, 2352, 2362); // escape_sequence
table.fill(2048, 2369, 2375); // escape_sequence
table.fill(2048, 2401, 2407); // escape_sequence
table.fill(2304, 2608, 2618); // escape_sequence
table.fill(2304, 2625, 2631); // escape_sequence
table.fill(2304, 2657, 2663); // escape_sequence
table.fill(2560, 2864, 2874); // escape_sequence
table.fill(2560, 2881, 2887); // escape_sequence
table.fill(2560, 2913, 2919); // escape_sequence
table.fill(2816, 3120, 3130); // escape_sequence
table.fill(2816, 3137, 3143); // escape_sequence
table.fill(2816, 3169, 3175); // escape_sequence
table.fill(3072, 3376, 3386); // escape_sequence
table.fill(3072, 3393, 3399); // escape_sequence
table.fill(3072, 3425, 3431); // escape_sequence
table.fill(3328, 3632, 3642); // escape_sequence
table.fill(3328, 3649, 3655); // escape_sequence
table.fill(3328, 3681, 3687); // escape_sequence
table[4361] = 256; // __multiline_basic_string_token3
table[4362] = 26; // __multiline_basic_string_token4
table[4365] = 512; // __multiline_basic_string_token4
table.fill(256, 4384, 4386); // __multiline_basic_string_token3
table[4386] = 1024; // _multiline_basic_string_content
table.fill(256, 4387, 4444); // __multiline_basic_string_token3
table[4444] = 1280; // _escape_line_ending
table.fill(256, 4445, 4479); // __multiline_basic_string_token3
table.fill(256, 4480, 4608); // __multiline_basic_string_token3

/**
 * @param {Uint8Array} input
 * @param {number} offset
 * @returns {{ state: number, start: number, end: number }}
 */
const next = (input, offset) => {
  const t = table;

  // 17
  let state = 27;

  let successPos = 0;

  // try to find match
  let i = offset & 0x7fffffff;
  const l = input.length;

  if (i < l && (state = t[input[i++] + 4352]) > 26) {
    while (true) {
      if (state > 256) {
        while (i < l && (state = t[state + input[i++]]) > 256);
      }

      if (state <= 26) {
        break;
      }
      if (state <= 256) {
        while (i < l && (state = t[input[i] + 256]) === 256) {
          i++;
        }
        if (state <= 256) {
          state = 25;
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

  if (--state >>> 0 >= 26) {
    if (successPos !== 0) {
      i = successPos;
      state = 24;
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
