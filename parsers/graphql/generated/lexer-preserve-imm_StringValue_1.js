// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const table = new Uint16Array(1280);
table.fill(256, 256, 266); // _StringValue_token2
table.fill(256, 267, 290); // _StringValue_token2
table.fill(256, 291, 348); // _StringValue_token2
table.fill(256, 349, 512); // _StringValue_token2
table.fill(256, 1024, 1034); // _StringValue_token2
table.fill(256, 1035, 1058); // _StringValue_token2
table[1058] = 18; // "
table.fill(256, 1059, 1116); // _StringValue_token2
table.fill(256, 1117, 1280); // _StringValue_token2

/**
 * @param {Uint8Array} input
 * @param {number} offset
 * @returns {{ state: number, start: number, end: number }}
 */
const next = (input, offset) => {
  const t = table;

  // 4
  let state = 59;

  let successPos = 0;

  // try to find match
  let i = offset & 0x7fffffff;
  const l = input.length;

  if (i < l && (state = t[input[i++] + 1024]) > 58) {
    while (true) {
      if (state > 256) {
        while (i < l && (state = t[state + input[i++]]) > 256);
      }
      if (state <= 58) {
        break;
      }
      if (state <= 256) {
        while (i < l && (state = t[input[i] + 256]) === 256) {
          i++;
        }
        if (state <= 256) {
          state = 58;
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

  if (--state >>> 0 >= 58) {
    if (successPos !== 0) {
      i = successPos;
      state = 57;
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
