// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const table = new Uint16Array(2560);
table.fill(256, 256, 266); // WS
table[266] = 512; // WS
table.fill(256, 267, 512); // WS
table.fill(512, 521, 523); // WS
table[525] = 512; // WS
table[544] = 512; // WS
table[547] = 256; // WS
table[812] = 8; // IDENTIFIER
table[813] = 768; // IDENTIFIER
table.fill(768, 816, 826); // IDENTIFIER
table[831] = 8; // IDENTIFIER
table.fill(768, 833, 859); // IDENTIFIER
table[863] = 768; // IDENTIFIER
table.fill(768, 865, 891); // IDENTIFIER
table.fill(512, 1033, 1035); // WS
table[1037] = 512; // WS
table[1056] = 512; // WS
table[1059] = 256; // WS
table[1063] = 1280; // EXPR
table[1069] = 768; // IDENTIFIER
table.fill(768, 1072, 1082); // IDENTIFIER
table[1082] = 1536; // ASSIGN
table[1083] = 3; // SEMICOLON
table[1088] = 5; // AT
table.fill(768, 1089, 1115); // IDENTIFIER
table[1119] = 768; // IDENTIFIER
table.fill(768, 1121, 1147); // IDENTIFIER
table[1147] = 1792; // ACTION
table[1148] = 4; // PIPE
table.fill(1280, 1280, 1319); // EXPR
table[1319] = 6; // EXPR
table.fill(1280, 1320, 1536); // EXPR
table[1597] = 2; // ASSIGN
table.fill(1792, 1792, 1917); // ACTION
table[1917] = 7; // ACTION
table.fill(1792, 1918, 2048); // ACTION

/**
 * @param {Uint8Array} input
 * @param {number} offset
 * @returns {{ state: number, start: number, end: number }}
 */
const next = (input, offset) => {
  // 4
  let state = 1024;
  let successState = 0;
  let successPos = 0;

  // try to find match
  let i = offset & 0x7fffffff;
  const l = input.length;

  while (i < l) {
    state = table[state + input[i++]];
    if (state <= 768) {
      if (state <= 8) {
        break;
      }
      successState = state;
      successPos = i;
    }
  }

  state -= 1;
  if (state >>> 0 >= 8) {
    if (successState !== 0) {
      state = successState === 768 ? 7 : 0;
      i = successPos;
    } else {
      state = i === l ? 8 : 9;
      offset = -1;
      i = -1;
    }
  }
  return {
    state,
    start: offset,
    end: i,
  };
};

export { EOF, ERROR, next };
