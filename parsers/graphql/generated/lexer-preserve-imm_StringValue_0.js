// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const table = new Uint16Array(2304);
table.fill(256, 256, 290); // _StringValue_token1
table[290] = 1024; // _StringValue_token1
table.fill(256, 291, 546); // _StringValue_token1
table[546] = 17; // """
table.fill(256, 547, 802); // _StringValue_token1
table[802] = 512; // _StringValue_token1
table.fill(256, 803, 1058); // _StringValue_token1
table[1058] = 1280; // _StringValue_token1
table.fill(256, 1059, 1314); // _StringValue_token1
table.fill(256, 1315, 1536); // _StringValue_token1
table.fill(256, 2048, 2082); // _StringValue_token1
table[2082] = 768; // _StringValue_token1
table.fill(256, 2083, 2304); // _StringValue_token1

/**
 * @param {Uint8Array} input
 * @param {number} offset
 * @returns {{ state: number, start: number, end: number }}
 */
const next = (input, offset) => {
  // 8
  let state = 58;

  let successPos = 0;

  // try to find match
  let i = offset & 0x7fffffff;
  const l = input.length;
  const t = table;

  if (i < l && (state = t[input[i++] + 2048]) > 57) {
    while (true) {
      if (state > 256) {
        while (i < l && (state = t[state + input[i++]]) > 256);
      }

      if (state <= 57) {
        break;
      }
      if (state <= 256) {
        while (i < l && (state = t[input[i] + 256]) === 256) {
          i++;
        }
        if (state <= 256) {
          state = 57;
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

  if (--state >>> 0 >= 57) {
    if (successPos !== 0) {
      i = successPos;
      state = 56;
    } else {
      state = ((i - l) >>> 31) + 58;
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
