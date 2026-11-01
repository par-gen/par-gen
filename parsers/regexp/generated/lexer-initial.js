// @ts-nocheck

const EOF = "@par-gen.EOF";
const ERROR = "@par-gen.ERROR";

const tokenIds = [
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
  undefined, // undefined
  undefined, // undefined
  16, // @par-gen.EOF
  17, // @par-gen.ERROR
];

const table = new Uint16Array(5120);
table.fill(4352);
table[4096] = 0; // CHARACTER
table[4097] = 0; // CHARACTER
table[4098] = 0; // CHARACTER
table[4099] = 0; // CHARACTER
table[4100] = 0; // CHARACTER
table[4101] = 0; // CHARACTER
table[4102] = 0; // CHARACTER
table[4103] = 0; // CHARACTER
table[4107] = 0; // CHARACTER
table[4110] = 0; // CHARACTER
table[4111] = 0; // CHARACTER
table[4112] = 0; // CHARACTER
table[4113] = 0; // CHARACTER
table[4114] = 0; // CHARACTER
table[4115] = 0; // CHARACTER
table[4116] = 0; // CHARACTER
table[4117] = 0; // CHARACTER
table[4118] = 0; // CHARACTER
table[4119] = 0; // CHARACTER
table[4120] = 0; // CHARACTER
table[4121] = 0; // CHARACTER
table[4122] = 0; // CHARACTER
table[4123] = 0; // CHARACTER
table[4124] = 0; // CHARACTER
table[4125] = 0; // CHARACTER
table[4126] = 0; // CHARACTER
table[4127] = 0; // CHARACTER
table[4128] = 0; // CHARACTER
table[4129] = 0; // CHARACTER
table[4130] = 0; // CHARACTER
table[4131] = 0; // CHARACTER
table[4132] = 0; // CHARACTER
table[4133] = 0; // CHARACTER
table[4134] = 0; // CHARACTER
table[4135] = 0; // CHARACTER
table[4140] = 0; // CHARACTER
table[4141] = 256; // DASH
table[4143] = 0; // CHARACTER
table[4154] = 0; // CHARACTER
table[4155] = 0; // CHARACTER
table[4156] = 0; // CHARACTER
table[4157] = 0; // CHARACTER
table[4158] = 0; // CHARACTER
table[4160] = 0; // CHARACTER
table[4161] = 0; // CHARACTER
table[4162] = 0; // CHARACTER
table[4163] = 0; // CHARACTER
table[4164] = 0; // CHARACTER
table[4165] = 0; // CHARACTER
table[4166] = 0; // CHARACTER
table[4167] = 0; // CHARACTER
table[4168] = 0; // CHARACTER
table[4169] = 0; // CHARACTER
table[4170] = 0; // CHARACTER
table[4171] = 0; // CHARACTER
table[4172] = 0; // CHARACTER
table[4173] = 0; // CHARACTER
table[4174] = 0; // CHARACTER
table[4175] = 0; // CHARACTER
table[4176] = 0; // CHARACTER
table[4177] = 0; // CHARACTER
table[4178] = 0; // CHARACTER
table[4179] = 0; // CHARACTER
table[4180] = 0; // CHARACTER
table[4181] = 0; // CHARACTER
table[4182] = 0; // CHARACTER
table[4183] = 0; // CHARACTER
table[4184] = 0; // CHARACTER
table[4185] = 0; // CHARACTER
table[4186] = 0; // CHARACTER
table[4191] = 0; // CHARACTER
table[4192] = 0; // CHARACTER
table[4199] = 0; // CHARACTER
table[4200] = 0; // CHARACTER
table[4201] = 0; // CHARACTER
table[4202] = 0; // CHARACTER
table[4203] = 0; // CHARACTER
table[4204] = 0; // CHARACTER
table[4205] = 0; // CHARACTER
table[4207] = 0; // CHARACTER
table[4208] = 0; // CHARACTER
table[4209] = 0; // CHARACTER
table[4211] = 0; // CHARACTER
table[4213] = 0; // CHARACTER
table[4214] = 0; // CHARACTER
table[4215] = 0; // CHARACTER
table[4217] = 0; // CHARACTER
table[4218] = 0; // CHARACTER
table[4219] = 0; // CHARACTER
table[4221] = 0; // CHARACTER
table[4222] = 0; // CHARACTER
table[4223] = 0; // CHARACTER
table[4224] = 0; // CHARACTER
table[4225] = 0; // CHARACTER
table[4226] = 0; // CHARACTER
table[4227] = 0; // CHARACTER
table[4228] = 0; // CHARACTER
table[4229] = 0; // CHARACTER
table[4230] = 0; // CHARACTER
table[4231] = 0; // CHARACTER
table[4232] = 0; // CHARACTER
table[4233] = 0; // CHARACTER
table[4234] = 0; // CHARACTER
table[4235] = 0; // CHARACTER
table[4236] = 0; // CHARACTER
table[4237] = 0; // CHARACTER
table[4238] = 0; // CHARACTER
table[4239] = 0; // CHARACTER
table[4240] = 0; // CHARACTER
table[4241] = 0; // CHARACTER
table[4242] = 0; // CHARACTER
table[4243] = 0; // CHARACTER
table[4244] = 0; // CHARACTER
table[4245] = 0; // CHARACTER
table[4246] = 0; // CHARACTER
table[4247] = 0; // CHARACTER
table[4248] = 0; // CHARACTER
table[4249] = 0; // CHARACTER
table[4250] = 0; // CHARACTER
table[4251] = 0; // CHARACTER
table[4252] = 0; // CHARACTER
table[4253] = 0; // CHARACTER
table[4254] = 0; // CHARACTER
table[4255] = 0; // CHARACTER
table[4256] = 0; // CHARACTER
table[4257] = 0; // CHARACTER
table[4258] = 0; // CHARACTER
table[4259] = 0; // CHARACTER
table[4260] = 0; // CHARACTER
table[4261] = 0; // CHARACTER
table[4262] = 0; // CHARACTER
table[4263] = 0; // CHARACTER
table[4264] = 0; // CHARACTER
table[4265] = 0; // CHARACTER
table[4266] = 0; // CHARACTER
table[4267] = 0; // CHARACTER
table[4268] = 0; // CHARACTER
table[4269] = 0; // CHARACTER
table[4270] = 0; // CHARACTER
table[4271] = 0; // CHARACTER
table[4272] = 0; // CHARACTER
table[4273] = 0; // CHARACTER
table[4274] = 0; // CHARACTER
table[4275] = 0; // CHARACTER
table[4276] = 0; // CHARACTER
table[4277] = 0; // CHARACTER
table[4278] = 0; // CHARACTER
table[4279] = 0; // CHARACTER
table[4280] = 0; // CHARACTER
table[4281] = 0; // CHARACTER
table[4282] = 0; // CHARACTER
table[4283] = 0; // CHARACTER
table[4284] = 0; // CHARACTER
table[4285] = 0; // CHARACTER
table[4286] = 0; // CHARACTER
table[4287] = 0; // CHARACTER
table[4288] = 0; // CHARACTER
table[4289] = 0; // CHARACTER
table[4290] = 0; // CHARACTER
table[4291] = 0; // CHARACTER
table[4292] = 0; // CHARACTER
table[4293] = 0; // CHARACTER
table[4294] = 0; // CHARACTER
table[4295] = 0; // CHARACTER
table[4296] = 0; // CHARACTER
table[4297] = 0; // CHARACTER
table[4298] = 0; // CHARACTER
table[4299] = 0; // CHARACTER
table[4300] = 0; // CHARACTER
table[4301] = 0; // CHARACTER
table[4302] = 0; // CHARACTER
table[4303] = 0; // CHARACTER
table[4304] = 0; // CHARACTER
table[4305] = 0; // CHARACTER
table[4306] = 0; // CHARACTER
table[4307] = 0; // CHARACTER
table[4308] = 0; // CHARACTER
table[4309] = 0; // CHARACTER
table[4310] = 0; // CHARACTER
table[4311] = 0; // CHARACTER
table[4312] = 0; // CHARACTER
table[4313] = 0; // CHARACTER
table[4314] = 0; // CHARACTER
table[4315] = 0; // CHARACTER
table[4316] = 0; // CHARACTER
table[4317] = 0; // CHARACTER
table[4318] = 0; // CHARACTER
table[4319] = 0; // CHARACTER
table[4320] = 0; // CHARACTER
table[4321] = 0; // CHARACTER
table[4322] = 0; // CHARACTER
table[4323] = 0; // CHARACTER
table[4324] = 0; // CHARACTER
table[4325] = 0; // CHARACTER
table[4326] = 0; // CHARACTER
table[4327] = 0; // CHARACTER
table[4328] = 0; // CHARACTER
table[4329] = 0; // CHARACTER
table[4330] = 0; // CHARACTER
table[4331] = 0; // CHARACTER
table[4332] = 0; // CHARACTER
table[4333] = 0; // CHARACTER
table[4334] = 0; // CHARACTER
table[4335] = 0; // CHARACTER
table[4336] = 0; // CHARACTER
table[4337] = 0; // CHARACTER
table[4338] = 0; // CHARACTER
table[4339] = 0; // CHARACTER
table[4340] = 0; // CHARACTER
table[4341] = 0; // CHARACTER
table[4342] = 0; // CHARACTER
table[4343] = 0; // CHARACTER
table[4344] = 0; // CHARACTER
table[4345] = 0; // CHARACTER
table[4346] = 0; // CHARACTER
table[4347] = 0; // CHARACTER
table[4348] = 0; // CHARACTER
table[4349] = 0; // CHARACTER
table[4350] = 0; // CHARACTER
table[4144] = 512; // HEX_NUMBER
table[4145] = 512; // HEX_NUMBER
table[4146] = 512; // HEX_NUMBER
table[4147] = 512; // HEX_NUMBER
table[4148] = 512; // HEX_NUMBER
table[4149] = 512; // HEX_NUMBER
table[4150] = 512; // HEX_NUMBER
table[4151] = 512; // HEX_NUMBER
table[4152] = 512; // HEX_NUMBER
table[4153] = 512; // HEX_NUMBER
table[4195] = 512; // HEX_NUMBER
table[4196] = 512; // HEX_NUMBER
table[4197] = 512; // HEX_NUMBER
table[4193] = 512; // HEX_NUMBER
table[4210] = 768; // CONTROL_CHARACTER
table[4206] = 768; // CONTROL_CHARACTER
table[4212] = 768; // CONTROL_CHARACTER
table[4188] = 1024; // BACKSLASH
table[4216] = 1280; // X
table[4194] = 1536; // B
table[4198] = 1792; // F
table[4190] = 2048; // CARET
table[4142] = 2304; // DOT
table[4220] = 2560; // UNION
table[4136] = 2816; // PAREN_OPEN
table[4137] = 3072; // PAREN_CLOSE
table[4138] = 3328; // QUANTIFIER
table[4159] = 3328; // QUANTIFIER
table[4139] = 3328; // QUANTIFIER
table[4187] = 3584; // BRACKET_OPEN
table[4189] = 3840; // BRACKET_CLOSE

// the currently matched lexeme
const lexeme = {
  state: -1,
  start: -1,
  end: -1,
};

/**
 * @param {Uint8Array} input
 * @param {number} offset
 * @returns {{ state: number, start: number, end: number }}
 */
const next = (input, offset) => {
  // 16
  let state = 4096;
  let successState = 4352;
  let successPos = 0;

  // try to find match
  let i = offset;
  const l = input.length;
  while (i < l) {
    state = table[state + input[i++]];
    if (state <= 3840) {
      successState = state;
      successPos = i;
    } else if (state === 4352) {
      break;
    }
  }

  if (successState !== 4352) {
    lexeme.state = tokenIds[successState / 256];
    lexeme.start = offset;
    lexeme.end = successPos;
    return lexeme;
  }
  lexeme.state = i === l ? 16 : 17;
  lexeme.start = -1;
  lexeme.end = -1;
  return lexeme;
};

export { EOF, ERROR, next };
