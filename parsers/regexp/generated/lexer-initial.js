// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const tokenIds = new Uint8Array(256);
// tokenIds[1] = 0; // CHARACTER
tokenIds[2] = 1; // HEX_NUMBER
tokenIds[3] = 2; // CONTROL_CHARACTER
tokenIds[4] = 3; // BACKSLASH
tokenIds[5] = 4; // X
tokenIds[6] = 5; // B
tokenIds[7] = 6; // F
tokenIds[8] = 7; // CARET
tokenIds[9] = 8; // DASH
tokenIds[10] = 9; // DOT
tokenIds[11] = 10; // UNION
tokenIds[12] = 11; // PAREN_OPEN
tokenIds[13] = 12; // PAREN_CLOSE
tokenIds[14] = 13; // QUANTIFIER
tokenIds[15] = 14; // BRACKET_OPEN
tokenIds[16] = 15; // BRACKET_CLOSE

const table = new Uint16Array(1024);
table[256] = 1; // CHARACTER
table[257] = 1; // CHARACTER
table[258] = 1; // CHARACTER
table[259] = 1; // CHARACTER
table[260] = 1; // CHARACTER
table[261] = 1; // CHARACTER
table[262] = 1; // CHARACTER
table[263] = 1; // CHARACTER
table[267] = 1; // CHARACTER
table[270] = 1; // CHARACTER
table[271] = 1; // CHARACTER
table[272] = 1; // CHARACTER
table[273] = 1; // CHARACTER
table[274] = 1; // CHARACTER
table[275] = 1; // CHARACTER
table[276] = 1; // CHARACTER
table[277] = 1; // CHARACTER
table[278] = 1; // CHARACTER
table[279] = 1; // CHARACTER
table[280] = 1; // CHARACTER
table[281] = 1; // CHARACTER
table[282] = 1; // CHARACTER
table[283] = 1; // CHARACTER
table[284] = 1; // CHARACTER
table[285] = 1; // CHARACTER
table[286] = 1; // CHARACTER
table[287] = 1; // CHARACTER
table[288] = 1; // CHARACTER
table[289] = 1; // CHARACTER
table[290] = 1; // CHARACTER
table[291] = 1; // CHARACTER
table[292] = 1; // CHARACTER
table[293] = 1; // CHARACTER
table[294] = 1; // CHARACTER
table[295] = 1; // CHARACTER
table[300] = 1; // CHARACTER
table[303] = 1; // CHARACTER
table[314] = 1; // CHARACTER
table[315] = 1; // CHARACTER
table[316] = 1; // CHARACTER
table[317] = 1; // CHARACTER
table[318] = 1; // CHARACTER
table[320] = 1; // CHARACTER
table[321] = 1; // CHARACTER
table[322] = 1; // CHARACTER
table[323] = 1; // CHARACTER
table[324] = 1; // CHARACTER
table[325] = 1; // CHARACTER
table[326] = 1; // CHARACTER
table[327] = 1; // CHARACTER
table[328] = 1; // CHARACTER
table[329] = 1; // CHARACTER
table[330] = 1; // CHARACTER
table[331] = 1; // CHARACTER
table[332] = 1; // CHARACTER
table[333] = 1; // CHARACTER
table[334] = 1; // CHARACTER
table[335] = 1; // CHARACTER
table[336] = 1; // CHARACTER
table[337] = 1; // CHARACTER
table[338] = 1; // CHARACTER
table[339] = 1; // CHARACTER
table[340] = 1; // CHARACTER
table[341] = 1; // CHARACTER
table[342] = 1; // CHARACTER
table[343] = 1; // CHARACTER
table[344] = 1; // CHARACTER
table[345] = 1; // CHARACTER
table[346] = 1; // CHARACTER
table[351] = 1; // CHARACTER
table[352] = 1; // CHARACTER
table[359] = 1; // CHARACTER
table[360] = 1; // CHARACTER
table[361] = 1; // CHARACTER
table[362] = 1; // CHARACTER
table[363] = 1; // CHARACTER
table[364] = 1; // CHARACTER
table[365] = 1; // CHARACTER
table[367] = 1; // CHARACTER
table[368] = 1; // CHARACTER
table[369] = 1; // CHARACTER
table[371] = 1; // CHARACTER
table[373] = 1; // CHARACTER
table[374] = 1; // CHARACTER
table[375] = 1; // CHARACTER
table[377] = 1; // CHARACTER
table[378] = 1; // CHARACTER
table[379] = 1; // CHARACTER
table[381] = 1; // CHARACTER
table[382] = 1; // CHARACTER
table[383] = 1; // CHARACTER
table[384] = 1; // CHARACTER
table[385] = 1; // CHARACTER
table[386] = 1; // CHARACTER
table[387] = 1; // CHARACTER
table[388] = 1; // CHARACTER
table[389] = 1; // CHARACTER
table[390] = 1; // CHARACTER
table[391] = 1; // CHARACTER
table[392] = 1; // CHARACTER
table[393] = 1; // CHARACTER
table[394] = 1; // CHARACTER
table[395] = 1; // CHARACTER
table[396] = 1; // CHARACTER
table[397] = 1; // CHARACTER
table[398] = 1; // CHARACTER
table[399] = 1; // CHARACTER
table[400] = 1; // CHARACTER
table[401] = 1; // CHARACTER
table[402] = 1; // CHARACTER
table[403] = 1; // CHARACTER
table[404] = 1; // CHARACTER
table[405] = 1; // CHARACTER
table[406] = 1; // CHARACTER
table[407] = 1; // CHARACTER
table[408] = 1; // CHARACTER
table[409] = 1; // CHARACTER
table[410] = 1; // CHARACTER
table[411] = 1; // CHARACTER
table[412] = 1; // CHARACTER
table[413] = 1; // CHARACTER
table[414] = 1; // CHARACTER
table[415] = 1; // CHARACTER
table[416] = 1; // CHARACTER
table[417] = 1; // CHARACTER
table[418] = 1; // CHARACTER
table[419] = 1; // CHARACTER
table[420] = 1; // CHARACTER
table[421] = 1; // CHARACTER
table[422] = 1; // CHARACTER
table[423] = 1; // CHARACTER
table[424] = 1; // CHARACTER
table[425] = 1; // CHARACTER
table[426] = 1; // CHARACTER
table[427] = 1; // CHARACTER
table[428] = 1; // CHARACTER
table[429] = 1; // CHARACTER
table[430] = 1; // CHARACTER
table[431] = 1; // CHARACTER
table[432] = 1; // CHARACTER
table[433] = 1; // CHARACTER
table[434] = 1; // CHARACTER
table[435] = 1; // CHARACTER
table[436] = 1; // CHARACTER
table[437] = 1; // CHARACTER
table[438] = 1; // CHARACTER
table[439] = 1; // CHARACTER
table[440] = 1; // CHARACTER
table[441] = 1; // CHARACTER
table[442] = 1; // CHARACTER
table[443] = 1; // CHARACTER
table[444] = 1; // CHARACTER
table[445] = 1; // CHARACTER
table[446] = 1; // CHARACTER
table[447] = 1; // CHARACTER
table[448] = 1; // CHARACTER
table[449] = 1; // CHARACTER
table[450] = 1; // CHARACTER
table[451] = 1; // CHARACTER
table[452] = 1; // CHARACTER
table[453] = 1; // CHARACTER
table[454] = 1; // CHARACTER
table[455] = 1; // CHARACTER
table[456] = 1; // CHARACTER
table[457] = 1; // CHARACTER
table[458] = 1; // CHARACTER
table[459] = 1; // CHARACTER
table[460] = 1; // CHARACTER
table[461] = 1; // CHARACTER
table[462] = 1; // CHARACTER
table[463] = 1; // CHARACTER
table[464] = 1; // CHARACTER
table[465] = 1; // CHARACTER
table[466] = 1; // CHARACTER
table[467] = 1; // CHARACTER
table[468] = 1; // CHARACTER
table[469] = 1; // CHARACTER
table[470] = 1; // CHARACTER
table[471] = 1; // CHARACTER
table[472] = 1; // CHARACTER
table[473] = 1; // CHARACTER
table[474] = 1; // CHARACTER
table[475] = 1; // CHARACTER
table[476] = 1; // CHARACTER
table[477] = 1; // CHARACTER
table[478] = 1; // CHARACTER
table[479] = 1; // CHARACTER
table[480] = 1; // CHARACTER
table[481] = 1; // CHARACTER
table[482] = 1; // CHARACTER
table[483] = 1; // CHARACTER
table[484] = 1; // CHARACTER
table[485] = 1; // CHARACTER
table[486] = 1; // CHARACTER
table[487] = 1; // CHARACTER
table[488] = 1; // CHARACTER
table[489] = 1; // CHARACTER
table[490] = 1; // CHARACTER
table[491] = 1; // CHARACTER
table[492] = 1; // CHARACTER
table[493] = 1; // CHARACTER
table[494] = 1; // CHARACTER
table[495] = 1; // CHARACTER
table[496] = 1; // CHARACTER
table[497] = 1; // CHARACTER
table[498] = 1; // CHARACTER
table[499] = 1; // CHARACTER
table[500] = 1; // CHARACTER
table[501] = 1; // CHARACTER
table[502] = 1; // CHARACTER
table[503] = 1; // CHARACTER
table[504] = 1; // CHARACTER
table[505] = 1; // CHARACTER
table[506] = 1; // CHARACTER
table[507] = 1; // CHARACTER
table[508] = 1; // CHARACTER
table[509] = 1; // CHARACTER
table[510] = 1; // CHARACTER
table[511] = 1; // CHARACTER
table[304] = 2; // HEX_NUMBER
table[305] = 2; // HEX_NUMBER
table[306] = 2; // HEX_NUMBER
table[307] = 2; // HEX_NUMBER
table[308] = 2; // HEX_NUMBER
table[309] = 2; // HEX_NUMBER
table[310] = 2; // HEX_NUMBER
table[311] = 2; // HEX_NUMBER
table[312] = 2; // HEX_NUMBER
table[313] = 2; // HEX_NUMBER
table[355] = 2; // HEX_NUMBER
table[356] = 2; // HEX_NUMBER
table[357] = 2; // HEX_NUMBER
table[353] = 2; // HEX_NUMBER
table[370] = 3; // CONTROL_CHARACTER
table[366] = 3; // CONTROL_CHARACTER
table[372] = 3; // CONTROL_CHARACTER
table[348] = 4; // BACKSLASH
table[376] = 5; // X
table[354] = 6; // B
table[358] = 7; // F
table[350] = 8; // CARET
table[301] = 9; // DASH
table[302] = 10; // DOT
table[380] = 11; // UNION
table[296] = 12; // PAREN_OPEN
table[297] = 13; // PAREN_CLOSE
table[298] = 14; // QUANTIFIER
table[319] = 14; // QUANTIFIER
table[299] = 14; // QUANTIFIER
table[347] = 15; // BRACKET_OPEN
table[349] = 16; // BRACKET_CLOSE

/**
 * @param {Uint8Array} input
 * @param {number} offset
 * @returns {{ state: number, start: number, end: number }}
 */
const next = (input, offset) => {
  // 1
  let state = 256;
  let successState = 0;
  let successPos = 0;

  // try to find match
  let i = offset & 0x7fffffff;
  const l = input.length;

  while (i < l) {
    state = table[state + input[i++]];
    if (state <= 16) {
      if (state !== 0) {
        successState = state;
        successPos = i;
      }
      break;
    }
  }

  if (successState !== 0) {
    state = tokenIds[successState];
  } else {
    state = i === l ? 16 : 17;
    offset = -1;
    successPos = -1;
  }
  return {
    state,
    start: offset,
    end: successPos,
  };
};

export { EOF, ERROR, next };
