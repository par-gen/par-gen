// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const table = new Uint16Array(2816);
table.fill(256, 256, 266); // WS
table[266] = 512; // WS
table.fill(256, 267, 512); // WS
table.fill(512, 521, 523); // WS
table[525] = 512; // WS
table[544] = 512; // WS
table[547] = 256; // WS
table.fill(8, 810, 813); // IDENTIFIER
table[813] = 768; // IDENTIFIER
table.fill(768, 816, 826); // IDENTIFIER
table[830] = 768; // IDENTIFIER
table[831] = 8; // IDENTIFIER
table.fill(768, 833, 859); // IDENTIFIER
table[863] = 768; // IDENTIFIER
table.fill(768, 865, 891); // IDENTIFIER
table.fill(1024, 1024, 1063); // EXPR
table[1063] = 6; // EXPR
table.fill(1024, 1064, 1280); // EXPR
table.fill(1280, 1280, 1405); // ACTION
table[1405] = 7; // ACTION
table.fill(1280, 1406, 1536); // ACTION
table[1581] = 768; // IDENTIFIER
table.fill(768, 1584, 1594); // IDENTIFIER
table[1598] = 768; // IDENTIFIER
table.fill(768, 1601, 1627); // IDENTIFIER
table[1631] = 768; // IDENTIFIER
table.fill(768, 1633, 1659); // IDENTIFIER
table[1853] = 2; // ASSIGN
table.fill(512, 2569, 2571); // WS
table[2573] = 512; // WS
table[2592] = 512; // WS
table[2595] = 256; // WS
table[2597] = 1536; // IDENTIFIER
table[2599] = 1024; // EXPR
table[2605] = 768; // IDENTIFIER
table.fill(768, 2608, 2618); // IDENTIFIER
table[2618] = 1792; // ASSIGN
table[2619] = 3; // SEMICOLON
table[2622] = 768; // IDENTIFIER
table[2624] = 5; // AT
table.fill(768, 2625, 2651); // IDENTIFIER
table[2655] = 768; // IDENTIFIER
table.fill(768, 2657, 2683); // IDENTIFIER
table[2683] = 1280; // ACTION
table[2684] = 4; // PIPE

/**
 * @param {Uint8Array} input
 * @param {number} offset
 * @returns {{ state: number, start: number, end: number }}
 */
const next = (input, offset) => {
  const t = table;

  // 10
  let state = 9;
  let successState = 0;
  let successPos = 0;
  let i = offset & 0x7fffffff;
  const l = input.length;

  if (i < l && (state = t[input[i++] + 2560]) > 8) {
    while (true) {
      if (state === 1024) {
        while (i < l && (state = t[input[i++] + 1024]) === 1024);
      }
      if (state === 1280) {
        while (i < l && (state = t[input[i++] + 1280]) === 1280);
      }
      if (state > 1280) {
        while (i < l && (state = t[state + input[i++]]) > 1280);
      }
      if (state <= 8) {
        break;
      }
      if (state <= 768) {
        successState = state;
        while (i < l && state === (state = t[state + input[i]])) {
          i++;
        }
        if (state === 0 || i >= l) {
          state = (successState === 768 ? 7 : 0) + 1;
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

  if (--state >>> 0 >= 8) {
    if (successState !== 0) {
      i = successPos;
      state = successState === 768 ? 7 : 0;
    } else {
      state = ((i - l) >>> 31) + 8;
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
