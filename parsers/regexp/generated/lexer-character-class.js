// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const table = new Uint16Array(1280);
table.fill(1, 256, 264); // CHARACTER
table[267] = 1; // CHARACTER
table.fill(1, 270, 301); // CHARACTER
table[301] = 6; // DASH
table.fill(1, 302, 347); // CHARACTER
table[348] = 512; // ESCAPED_CHARACTER
table[349] = 13; // BRACKET_CLOSE
table[350] = 5; // CARET
table.fill(1, 351, 512); // CHARACTER
table.fill(4, 552, 556); // ESCAPED_CHARACTER
table.fill(4, 557, 559); // ESCAPED_CHARACTER
table[575] = 4; // ESCAPED_CHARACTER
table.fill(4, 603, 607); // ESCAPED_CHARACTER
table[610] = 4; // ESCAPED_CHARACTER
table[614] = 4; // ESCAPED_CHARACTER
table[622] = 4; // ESCAPED_CHARACTER
table[626] = 4; // ESCAPED_CHARACTER
table[628] = 4; // ESCAPED_CHARACTER
table[632] = 2; // HEX_PREFIX
table[636] = 4; // ESCAPED_CHARACTER

/**
 * @param {Uint8Array} input
 * @param {number} offset
 * @returns {{ state: number, start: number, end: number }}
 */
const next = (input, offset) => {
  const t = table;

  // 1
  let state = 256;

  // try to find match
  let i = offset & 0x7fffffff;
  const l = input.length;

  while (i < l && (state = t[state + input[i++]]) > 13);

  state -= 1;
  if (state >>> 0 >= 13) {
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
