// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const tokenIds = new Uint8Array([
  0, // undefined
  0, // CHARACTER
  8, // DASH
  1, // HEX_NUMBER
  2, // CONTROL_CHARACTER
  3, // BACKSLASH
  4, // X
  5, // B
  6, // F
  7, // CARET
  9, // DOT
  10, // UNION
  11, // PAREN_OPEN
  12, // PAREN_CLOSE
  13, // QUANTIFIER
  14, // BRACKET_OPEN
  15, // BRACKET_CLOSE
  0, // undefined
  16, // @par-gen.EOF
  17, // @par-gen.ERROR
]);

const table = new Uint16Array(5120);
table[4352] = 256; // CHARACTER
table[4353] = 256; // CHARACTER
table[4354] = 256; // CHARACTER
table[4355] = 256; // CHARACTER
table[4356] = 256; // CHARACTER
table[4357] = 256; // CHARACTER
table[4358] = 256; // CHARACTER
table[4359] = 256; // CHARACTER
table[4363] = 256; // CHARACTER
table[4366] = 256; // CHARACTER
table[4367] = 256; // CHARACTER
table[4368] = 256; // CHARACTER
table[4369] = 256; // CHARACTER
table[4370] = 256; // CHARACTER
table[4371] = 256; // CHARACTER
table[4372] = 256; // CHARACTER
table[4373] = 256; // CHARACTER
table[4374] = 256; // CHARACTER
table[4375] = 256; // CHARACTER
table[4376] = 256; // CHARACTER
table[4377] = 256; // CHARACTER
table[4378] = 256; // CHARACTER
table[4379] = 256; // CHARACTER
table[4380] = 256; // CHARACTER
table[4381] = 256; // CHARACTER
table[4382] = 256; // CHARACTER
table[4383] = 256; // CHARACTER
table[4384] = 256; // CHARACTER
table[4385] = 256; // CHARACTER
table[4386] = 256; // CHARACTER
table[4387] = 256; // CHARACTER
table[4388] = 256; // CHARACTER
table[4389] = 256; // CHARACTER
table[4390] = 256; // CHARACTER
table[4391] = 256; // CHARACTER
table[4396] = 256; // CHARACTER
table[4397] = 512; // DASH
table[4399] = 256; // CHARACTER
table[4410] = 256; // CHARACTER
table[4411] = 256; // CHARACTER
table[4412] = 256; // CHARACTER
table[4413] = 256; // CHARACTER
table[4414] = 256; // CHARACTER
table[4416] = 256; // CHARACTER
table[4417] = 256; // CHARACTER
table[4418] = 256; // CHARACTER
table[4419] = 256; // CHARACTER
table[4420] = 256; // CHARACTER
table[4421] = 256; // CHARACTER
table[4422] = 256; // CHARACTER
table[4423] = 256; // CHARACTER
table[4424] = 256; // CHARACTER
table[4425] = 256; // CHARACTER
table[4426] = 256; // CHARACTER
table[4427] = 256; // CHARACTER
table[4428] = 256; // CHARACTER
table[4429] = 256; // CHARACTER
table[4430] = 256; // CHARACTER
table[4431] = 256; // CHARACTER
table[4432] = 256; // CHARACTER
table[4433] = 256; // CHARACTER
table[4434] = 256; // CHARACTER
table[4435] = 256; // CHARACTER
table[4436] = 256; // CHARACTER
table[4437] = 256; // CHARACTER
table[4438] = 256; // CHARACTER
table[4439] = 256; // CHARACTER
table[4440] = 256; // CHARACTER
table[4441] = 256; // CHARACTER
table[4442] = 256; // CHARACTER
table[4447] = 256; // CHARACTER
table[4448] = 256; // CHARACTER
table[4455] = 256; // CHARACTER
table[4456] = 256; // CHARACTER
table[4457] = 256; // CHARACTER
table[4458] = 256; // CHARACTER
table[4459] = 256; // CHARACTER
table[4460] = 256; // CHARACTER
table[4461] = 256; // CHARACTER
table[4463] = 256; // CHARACTER
table[4464] = 256; // CHARACTER
table[4465] = 256; // CHARACTER
table[4467] = 256; // CHARACTER
table[4469] = 256; // CHARACTER
table[4470] = 256; // CHARACTER
table[4471] = 256; // CHARACTER
table[4473] = 256; // CHARACTER
table[4474] = 256; // CHARACTER
table[4475] = 256; // CHARACTER
table[4477] = 256; // CHARACTER
table[4478] = 256; // CHARACTER
table[4479] = 256; // CHARACTER
table[4480] = 256; // CHARACTER
table[4481] = 256; // CHARACTER
table[4482] = 256; // CHARACTER
table[4483] = 256; // CHARACTER
table[4484] = 256; // CHARACTER
table[4485] = 256; // CHARACTER
table[4486] = 256; // CHARACTER
table[4487] = 256; // CHARACTER
table[4488] = 256; // CHARACTER
table[4489] = 256; // CHARACTER
table[4490] = 256; // CHARACTER
table[4491] = 256; // CHARACTER
table[4492] = 256; // CHARACTER
table[4493] = 256; // CHARACTER
table[4494] = 256; // CHARACTER
table[4495] = 256; // CHARACTER
table[4496] = 256; // CHARACTER
table[4497] = 256; // CHARACTER
table[4498] = 256; // CHARACTER
table[4499] = 256; // CHARACTER
table[4500] = 256; // CHARACTER
table[4501] = 256; // CHARACTER
table[4502] = 256; // CHARACTER
table[4503] = 256; // CHARACTER
table[4504] = 256; // CHARACTER
table[4505] = 256; // CHARACTER
table[4506] = 256; // CHARACTER
table[4507] = 256; // CHARACTER
table[4508] = 256; // CHARACTER
table[4509] = 256; // CHARACTER
table[4510] = 256; // CHARACTER
table[4511] = 256; // CHARACTER
table[4512] = 256; // CHARACTER
table[4513] = 256; // CHARACTER
table[4514] = 256; // CHARACTER
table[4515] = 256; // CHARACTER
table[4516] = 256; // CHARACTER
table[4517] = 256; // CHARACTER
table[4518] = 256; // CHARACTER
table[4519] = 256; // CHARACTER
table[4520] = 256; // CHARACTER
table[4521] = 256; // CHARACTER
table[4522] = 256; // CHARACTER
table[4523] = 256; // CHARACTER
table[4524] = 256; // CHARACTER
table[4525] = 256; // CHARACTER
table[4526] = 256; // CHARACTER
table[4527] = 256; // CHARACTER
table[4528] = 256; // CHARACTER
table[4529] = 256; // CHARACTER
table[4530] = 256; // CHARACTER
table[4531] = 256; // CHARACTER
table[4532] = 256; // CHARACTER
table[4533] = 256; // CHARACTER
table[4534] = 256; // CHARACTER
table[4535] = 256; // CHARACTER
table[4536] = 256; // CHARACTER
table[4537] = 256; // CHARACTER
table[4538] = 256; // CHARACTER
table[4539] = 256; // CHARACTER
table[4540] = 256; // CHARACTER
table[4541] = 256; // CHARACTER
table[4542] = 256; // CHARACTER
table[4543] = 256; // CHARACTER
table[4544] = 256; // CHARACTER
table[4545] = 256; // CHARACTER
table[4546] = 256; // CHARACTER
table[4547] = 256; // CHARACTER
table[4548] = 256; // CHARACTER
table[4549] = 256; // CHARACTER
table[4550] = 256; // CHARACTER
table[4551] = 256; // CHARACTER
table[4552] = 256; // CHARACTER
table[4553] = 256; // CHARACTER
table[4554] = 256; // CHARACTER
table[4555] = 256; // CHARACTER
table[4556] = 256; // CHARACTER
table[4557] = 256; // CHARACTER
table[4558] = 256; // CHARACTER
table[4559] = 256; // CHARACTER
table[4560] = 256; // CHARACTER
table[4561] = 256; // CHARACTER
table[4562] = 256; // CHARACTER
table[4563] = 256; // CHARACTER
table[4564] = 256; // CHARACTER
table[4565] = 256; // CHARACTER
table[4566] = 256; // CHARACTER
table[4567] = 256; // CHARACTER
table[4568] = 256; // CHARACTER
table[4569] = 256; // CHARACTER
table[4570] = 256; // CHARACTER
table[4571] = 256; // CHARACTER
table[4572] = 256; // CHARACTER
table[4573] = 256; // CHARACTER
table[4574] = 256; // CHARACTER
table[4575] = 256; // CHARACTER
table[4576] = 256; // CHARACTER
table[4577] = 256; // CHARACTER
table[4578] = 256; // CHARACTER
table[4579] = 256; // CHARACTER
table[4580] = 256; // CHARACTER
table[4581] = 256; // CHARACTER
table[4582] = 256; // CHARACTER
table[4583] = 256; // CHARACTER
table[4584] = 256; // CHARACTER
table[4585] = 256; // CHARACTER
table[4586] = 256; // CHARACTER
table[4587] = 256; // CHARACTER
table[4588] = 256; // CHARACTER
table[4589] = 256; // CHARACTER
table[4590] = 256; // CHARACTER
table[4591] = 256; // CHARACTER
table[4592] = 256; // CHARACTER
table[4593] = 256; // CHARACTER
table[4594] = 256; // CHARACTER
table[4595] = 256; // CHARACTER
table[4596] = 256; // CHARACTER
table[4597] = 256; // CHARACTER
table[4598] = 256; // CHARACTER
table[4599] = 256; // CHARACTER
table[4600] = 256; // CHARACTER
table[4601] = 256; // CHARACTER
table[4602] = 256; // CHARACTER
table[4603] = 256; // CHARACTER
table[4604] = 256; // CHARACTER
table[4605] = 256; // CHARACTER
table[4606] = 256; // CHARACTER
table[4400] = 768; // HEX_NUMBER
table[4401] = 768; // HEX_NUMBER
table[4402] = 768; // HEX_NUMBER
table[4403] = 768; // HEX_NUMBER
table[4404] = 768; // HEX_NUMBER
table[4405] = 768; // HEX_NUMBER
table[4406] = 768; // HEX_NUMBER
table[4407] = 768; // HEX_NUMBER
table[4408] = 768; // HEX_NUMBER
table[4409] = 768; // HEX_NUMBER
table[4451] = 768; // HEX_NUMBER
table[4452] = 768; // HEX_NUMBER
table[4453] = 768; // HEX_NUMBER
table[4449] = 768; // HEX_NUMBER
table[4466] = 1024; // CONTROL_CHARACTER
table[4462] = 1024; // CONTROL_CHARACTER
table[4468] = 1024; // CONTROL_CHARACTER
table[4444] = 1280; // BACKSLASH
table[4472] = 1536; // X
table[4450] = 1792; // B
table[4454] = 2048; // F
table[4446] = 2304; // CARET
table[4398] = 2560; // DOT
table[4476] = 2816; // UNION
table[4392] = 3072; // PAREN_OPEN
table[4393] = 3328; // PAREN_CLOSE
table[4394] = 3584; // QUANTIFIER
table[4415] = 3584; // QUANTIFIER
table[4395] = 3584; // QUANTIFIER
table[4443] = 3840; // BRACKET_OPEN
table[4445] = 4096; // BRACKET_CLOSE

/**
 * @param {Uint8Array} input
 * @param {number} offset
 * @returns {{ state: number, start: number, end: number }}
 */
const next = (input, offset) => {
  // 17
  let state = 4352;
  let successState = 0;
  let successPos = 0;

  // try to find match
  let i = offset;
  const l = input.length;
  while (i < l) {
    state = table[state + input[i++]];
    if (state <= 4096) {
      if (state === 0) {
        break;
      }
      successState = state;
      successPos = i;
    }
  }

  if (successState !== 0) {
    state = tokenIds[successState >> 8];
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
