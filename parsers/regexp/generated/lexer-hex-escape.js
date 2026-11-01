// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const table = new Uint16Array(1024);
table[304] = 3; // HEX_NUMBER
table[305] = 3; // HEX_NUMBER
table[306] = 3; // HEX_NUMBER
table[307] = 3; // HEX_NUMBER
table[308] = 3; // HEX_NUMBER
table[309] = 3; // HEX_NUMBER
table[310] = 3; // HEX_NUMBER
table[311] = 3; // HEX_NUMBER
table[312] = 3; // HEX_NUMBER
table[313] = 3; // HEX_NUMBER
table[353] = 3; // HEX_NUMBER
table[354] = 3; // HEX_NUMBER
table[355] = 3; // HEX_NUMBER
table[356] = 3; // HEX_NUMBER
table[357] = 3; // HEX_NUMBER
table[358] = 3; // HEX_NUMBER

/**
 * @param {Uint8Array} input
 * @param {number} offset
 * @returns {{ state: number, start: number, end: number }}
 */
const next = (input, offset) => {
  // 1
  let state = 256;

  // try to find match
  let i = offset & 0x7fffffff;
  const l = input.length;

  while (i < l) {
    state = table[state + input[i++]];
    if (state <= 3) {
      break;
    }
  }

  state -= 1;
  if (state >>> 0 >= 3) {
    state = i === l ? 13 : 14;
    offset = -1;
    i = -1;
  }
  return {
    state,
    start: offset,
    end: i,
  };
};

export { EOF, ERROR, next };
