// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const table = new Uint16Array(1024);
table.fill(3, 304, 314); // HEX_NUMBER
table.fill(3, 353, 359); // HEX_NUMBER

/**
 * @param {Uint8Array} input
 * @param {number} offset
 * @returns {{ state: number, start: number, end: number }}
 */
const next = (input, offset) => {
  const t = table;

  // 1
  let i = offset & 0x7fffffff;
  const l = input.length;
  let state = 256;

  while (i < l && (state = t[state + input[i++]]) > 3);

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
