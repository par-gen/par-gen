// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const table = new Uint16Array(1280);
table.fill(1, 256, 264); // CHARACTER
table[267] = 1; // CHARACTER
table.fill(1, 270, 296); // CHARACTER
table[296] = 9; // PAREN_OPEN
table[297] = 10; // PAREN_CLOSE
table.fill(11, 298, 300); // QUANTIFIER
table.fill(1, 300, 302); // CHARACTER
table[302] = 7; // DOT
table.fill(1, 303, 319); // CHARACTER
table[319] = 11; // QUANTIFIER
table.fill(1, 320, 347); // CHARACTER
table[347] = 12; // BRACKET_OPEN
table[348] = 512; // ESCAPED_CHARACTER
table.fill(1, 350, 380); // CHARACTER
table[380] = 8; // UNION
table.fill(1, 381, 512); // CHARACTER
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
  let i = offset & 0x7fffffff;
  const l = input.length;
  let state = 256;

  while (i < l && (state = t[state + input[i++]]) > 12);

  state -= 1;
  if (state >>> 0 >= 12) {
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
