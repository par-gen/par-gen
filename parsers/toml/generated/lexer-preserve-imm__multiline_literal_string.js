// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const table = new Uint16Array(2048);
table[265] = 256; // __multiline_literal_string_token5
table.fill(256, 288, 295); // __multiline_literal_string_token5
table.fill(256, 296, 383); // __multiline_literal_string_token5
table.fill(256, 384, 512); // __multiline_literal_string_token5
table[522] = 28; // __multiline_literal_string_token6
table.fill(22, 768, 807); // _multiline_literal_string_content
table[807] = 2; // '''
table.fill(22, 808, 1063); // _multiline_literal_string_content
table[1063] = 768; // _multiline_literal_string_content
table.fill(22, 1064, 1280); // _multiline_literal_string_content
table[1801] = 256; // __multiline_literal_string_token5
table[1802] = 28; // __multiline_literal_string_token6
table[1805] = 512; // __multiline_literal_string_token6
table.fill(256, 1824, 1831); // __multiline_literal_string_token5
table[1831] = 1024; // _multiline_literal_string_content
table.fill(256, 1832, 1919); // __multiline_literal_string_token5
table.fill(256, 1920, 2048); // __multiline_literal_string_token5

/**
 * @param {Uint8Array} input
 * @param {number} offset
 * @returns {{ state: number, start: number, end: number }}
 */
const next = (input, offset) => {
  // 7
  let state = 29;

  let successPos = 0;

  // try to find match
  let i = offset & 0x7fffffff;
  const l = input.length;
  const t = table;

  if (i < l && (state = t[input[i++] + 1792]) > 28) {
    while (true) {
      if (state > 256) {
        while (i < l && (state = t[state + input[i++]]) > 256);
      }

      if (state <= 28) {
        break;
      }
      if (state <= 256) {
        while (i < l && (state = t[input[i] + 256]) === 256) {
          i++;
        }
        if (state <= 256) {
          state = 27;
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

  if (--state >>> 0 >= 28) {
    if (successPos !== 0) {
      i = successPos;
      state = 26;
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
