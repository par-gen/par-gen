// @ts-nocheck

import { next as nextTokenInitial } from "./lexer-initial.js";
import { next as nextTokenCharacterClass } from "./lexer-character-class.js";
import { next as nextTokenHexEscape } from "./lexer-hex-escape.js";

/*
      RegExp := Expression;
Expression := Union;
Expression := Sequence;
Expression := Atom;
Union := Union UNION Sequence;
Union := Union UNION Atom;
Union := Union UNION;
Union := Sequence UNION Sequence;
Union := Sequence UNION Atom;
Union := Sequence UNION;
Union := Atom UNION Sequence;
Union := Atom UNION Atom;
Union := Atom UNION;
Sequence := Atom Atom;
Sequence := Sequence Atom;
Atom := Character;
Atom := Character QUANTIFIER;
Atom := DOT;
Atom := DOT QUANTIFIER;
Atom := Group;
Atom := Group QUANTIFIER;
Atom := CharacterClass;
Atom := CharacterClass QUANTIFIER;
Group := PAREN_OPEN Union PAREN_CLOSE;
Group := PAREN_OPEN Sequence PAREN_CLOSE;
Group := PAREN_OPEN Atom PAREN_CLOSE;
CharacterClass := BRACKET_OPEN CharacterClassCharacters BRACKET_CLOSE;
CharacterClass := BRACKET_OPEN CARET CharacterClassCharacters BRACKET_CLOSE;
CharacterClassCharacters := CharacterClassCharacter;
CharacterClassCharacters := CharacterClassCharacters CharacterClassCharacter;
CharacterClassCharacter := CHARACTER;
CharacterClassCharacter := ESCAPED_CHARACTER;
CharacterClassCharacter := HexEscape;
CharacterClassCharacter := CharacterClassRange;
CharacterClassRange := CHARACTER DASH CHARACTER;
CharacterClassRange := HexEscape DASH HexEscape;
CharacterClassRange := HexEscape DASH CHARACTER;
CharacterClassRange := CHARACTER DASH HexEscape;
Character := CHARACTER;
Character := ESCAPED_CHARACTER;
Character := HexEscape;
HexEscape := HEX_PREFIX HEX_NUMBER HEX_NUMBER;
      */

const parserSymbols = [
  "CHARACTER", // 0
  "HEX_PREFIX", // 1
  "HEX_NUMBER", // 2
  "ESCAPED_CHARACTER", // 3
  "CARET", // 4
  "DASH", // 5
  "DOT", // 6
  "UNION", // 7
  "PAREN_OPEN", // 8
  "PAREN_CLOSE", // 9
  "QUANTIFIER", // 10
  "BRACKET_OPEN", // 11
  "BRACKET_CLOSE", // 12
  "@par-gen.EOF", // 13
  "@par-gen.ERROR", // 14
  "S", // 15
  "RegExp", // 16
  "Expression", // 17
  "Union", // 18
  "Sequence", // 19
  "Atom", // 20
  "Group", // 21
  "CharacterClass", // 22
  "CharacterClassCharacters", // 23
  "CharacterClassCharacter", // 24
  "CharacterClassRange", // 25
  "Character", // 26
  "HexEscape", // 27
];

const actionsTable = new Uint16Array(480).fill(0xffff);
actionsTable[0] = 352; // 'state 0' -> CHARACTER -> shift (target=176, len=0)
actionsTable[1] = 384; // 'state 0' -> HEX_PREFIX -> shift (target=192, len=0)
actionsTable[3] = 352; // 'state 0' -> ESCAPED_CHARACTER -> shift (target=176, len=0)
actionsTable[6] = 416; // 'state 0' -> DOT -> shift (target=208, len=0)
actionsTable[8] = 32; // 'state 0' -> PAREN_OPEN -> shift (target=16, len=0)
actionsTable[11] = 64; // 'state 0' -> BRACKET_OPEN -> shift (target=32, len=0)
actionsTable[16] = 352; // 'state 1' -> CHARACTER -> shift (target=176, len=0)
actionsTable[17] = 384; // 'state 1' -> HEX_PREFIX -> shift (target=192, len=0)
actionsTable[19] = 352; // 'state 1' -> ESCAPED_CHARACTER -> shift (target=176, len=0)
actionsTable[22] = 416; // 'state 1' -> DOT -> shift (target=208, len=0)
actionsTable[24] = 32; // 'state 1' -> PAREN_OPEN -> shift (target=16, len=0)
actionsTable[27] = 64; // 'state 1' -> BRACKET_OPEN -> shift (target=32, len=0)
actionsTable[32] = 640; // 'state 2' -> CHARACTER -> shift (target=320, len=0)
actionsTable[33] = 384; // 'state 2' -> HEX_PREFIX -> shift (target=192, len=0)
actionsTable[35] = 672; // 'state 2' -> ESCAPED_CHARACTER -> shift (target=336, len=0)
actionsTable[36] = 192; // 'state 2' -> CARET -> shift (target=96, len=0)
actionsTable[48] = 352; // 'state 3' -> CHARACTER -> shift (target=176, len=0)
actionsTable[49] = 384; // 'state 3' -> HEX_PREFIX -> shift (target=192, len=0)
actionsTable[51] = 352; // 'state 3' -> ESCAPED_CHARACTER -> shift (target=176, len=0)
actionsTable[54] = 416; // 'state 3' -> DOT -> shift (target=208, len=0)
actionsTable[55] = 128; // 'state 3' -> UNION -> shift (target=64, len=0)
actionsTable[56] = 32; // 'state 3' -> PAREN_OPEN -> shift (target=16, len=0)
actionsTable[59] = 64; // 'state 3' -> BRACKET_OPEN -> shift (target=32, len=0)
actionsTable[61] = 547; // 'state 3' -> @par-gen.EOF -> reduce (target=17, len=1)
actionsTable[64] = 352; // 'state 4' -> CHARACTER -> shift (target=176, len=0)
actionsTable[65] = 384; // 'state 4' -> HEX_PREFIX -> shift (target=192, len=0)
actionsTable[67] = 352; // 'state 4' -> ESCAPED_CHARACTER -> shift (target=176, len=0)
actionsTable[70] = 416; // 'state 4' -> DOT -> shift (target=208, len=0)
actionsTable[71] = 1061; // 'state 4' -> UNION -> reduce (target=18, len=2)
actionsTable[72] = 32; // 'state 4' -> PAREN_OPEN -> shift (target=16, len=0)
actionsTable[73] = 1061; // 'state 4' -> PAREN_CLOSE -> reduce (target=18, len=2)
actionsTable[75] = 64; // 'state 4' -> BRACKET_OPEN -> shift (target=32, len=0)
actionsTable[77] = 1061; // 'state 4' -> @par-gen.EOF -> reduce (target=18, len=2)
actionsTable[80] = 352; // 'state 5' -> CHARACTER -> shift (target=176, len=0)
actionsTable[81] = 384; // 'state 5' -> HEX_PREFIX -> shift (target=192, len=0)
actionsTable[83] = 352; // 'state 5' -> ESCAPED_CHARACTER -> shift (target=176, len=0)
actionsTable[86] = 416; // 'state 5' -> DOT -> shift (target=208, len=0)
actionsTable[87] = 128; // 'state 5' -> UNION -> shift (target=64, len=0)
actionsTable[88] = 32; // 'state 5' -> PAREN_OPEN -> shift (target=16, len=0)
actionsTable[89] = 768; // 'state 5' -> PAREN_CLOSE -> shift (target=384, len=0)
actionsTable[91] = 64; // 'state 5' -> BRACKET_OPEN -> shift (target=32, len=0)
actionsTable[96] = 640; // 'state 6' -> CHARACTER -> shift (target=320, len=0)
actionsTable[97] = 384; // 'state 6' -> HEX_PREFIX -> shift (target=192, len=0)
actionsTable[99] = 672; // 'state 6' -> ESCAPED_CHARACTER -> shift (target=336, len=0)
actionsTable[112] = 640; // 'state 7' -> CHARACTER -> shift (target=320, len=0)
actionsTable[113] = 384; // 'state 7' -> HEX_PREFIX -> shift (target=192, len=0)
actionsTable[115] = 672; // 'state 7' -> ESCAPED_CHARACTER -> shift (target=336, len=0)
actionsTable[124] = 800; // 'state 7' -> BRACKET_CLOSE -> shift (target=400, len=0)
actionsTable[128] = 352; // 'state 8' -> CHARACTER -> shift (target=176, len=0)
actionsTable[129] = 384; // 'state 8' -> HEX_PREFIX -> shift (target=192, len=0)
actionsTable[131] = 352; // 'state 8' -> ESCAPED_CHARACTER -> shift (target=176, len=0)
actionsTable[134] = 416; // 'state 8' -> DOT -> shift (target=208, len=0)
actionsTable[135] = 1573; // 'state 8' -> UNION -> reduce (target=18, len=3)
actionsTable[136] = 32; // 'state 8' -> PAREN_OPEN -> shift (target=16, len=0)
actionsTable[137] = 1573; // 'state 8' -> PAREN_CLOSE -> reduce (target=18, len=3)
actionsTable[139] = 64; // 'state 8' -> BRACKET_OPEN -> shift (target=32, len=0)
actionsTable[141] = 1573; // 'state 8' -> @par-gen.EOF -> reduce (target=18, len=3)
actionsTable[144] = 896; // 'state 9' -> CHARACTER -> shift (target=448, len=0)
actionsTable[145] = 384; // 'state 9' -> HEX_PREFIX -> shift (target=192, len=0)
actionsTable[160] = 640; // 'state 10' -> CHARACTER -> shift (target=320, len=0)
actionsTable[161] = 384; // 'state 10' -> HEX_PREFIX -> shift (target=192, len=0)
actionsTable[163] = 672; // 'state 10' -> ESCAPED_CHARACTER -> shift (target=336, len=0)
actionsTable[172] = 928; // 'state 10' -> BRACKET_CLOSE -> shift (target=464, len=0)
actionsTable.fill(565, 176, 178); // 'state 11' -> CHARACTER..HEX_PREFIX -> reduce (target=26, len=1)
actionsTable[179] = 565; // 'state 11' -> ESCAPED_CHARACTER -> reduce (target=26, len=1)
actionsTable.fill(565, 182, 188); // 'state 11' -> DOT..BRACKET_OPEN -> reduce (target=26, len=1)
actionsTable[189] = 565; // 'state 11' -> @par-gen.EOF -> reduce (target=26, len=1)
actionsTable[194] = 736; // 'state 12' -> HEX_NUMBER -> shift (target=368, len=0)
actionsTable.fill(553, 208, 210); // 'state 13' -> CHARACTER..HEX_PREFIX -> reduce (target=20, len=1)
actionsTable[211] = 553; // 'state 13' -> ESCAPED_CHARACTER -> reduce (target=20, len=1)
actionsTable.fill(553, 214, 218); // 'state 13' -> DOT..PAREN_CLOSE -> reduce (target=20, len=1)
actionsTable[218] = 576; // 'state 13' -> QUANTIFIER -> shift (target=288, len=0)
actionsTable[219] = 553; // 'state 13' -> BRACKET_OPEN -> reduce (target=20, len=1)
actionsTable[221] = 553; // 'state 13' -> @par-gen.EOF -> reduce (target=20, len=1)
actionsTable[237] = 65534; // 'state 14' -> @par-gen.EOF -> done (target=0, len=0)
actionsTable[253] = 545; // 'state 15' -> @par-gen.EOF -> reduce (target=16, len=1)
actionsTable[263] = 128; // 'state 16' -> UNION -> shift (target=64, len=0)
actionsTable[269] = 547; // 'state 16' -> @par-gen.EOF -> reduce (target=17, len=1)
actionsTable.fill(1063, 272, 274); // 'state 17' -> CHARACTER..HEX_PREFIX -> reduce (target=19, len=2)
actionsTable[275] = 1063; // 'state 17' -> ESCAPED_CHARACTER -> reduce (target=19, len=2)
actionsTable.fill(1063, 278, 282); // 'state 17' -> DOT..PAREN_CLOSE -> reduce (target=19, len=2)
actionsTable[283] = 1063; // 'state 17' -> BRACKET_OPEN -> reduce (target=19, len=2)
actionsTable[285] = 1063; // 'state 17' -> @par-gen.EOF -> reduce (target=19, len=2)
actionsTable.fill(1065, 288, 290); // 'state 18' -> CHARACTER..HEX_PREFIX -> reduce (target=20, len=2)
actionsTable[291] = 1065; // 'state 18' -> ESCAPED_CHARACTER -> reduce (target=20, len=2)
actionsTable.fill(1065, 294, 298); // 'state 18' -> DOT..PAREN_CLOSE -> reduce (target=20, len=2)
actionsTable[299] = 1065; // 'state 18' -> BRACKET_OPEN -> reduce (target=20, len=2)
actionsTable[301] = 1065; // 'state 18' -> @par-gen.EOF -> reduce (target=20, len=2)
actionsTable[311] = 128; // 'state 19' -> UNION -> shift (target=64, len=0)
actionsTable[313] = 768; // 'state 19' -> PAREN_CLOSE -> shift (target=384, len=0)
actionsTable.fill(561, 320, 322); // 'state 20' -> CHARACTER..HEX_PREFIX -> reduce (target=24, len=1)
actionsTable[323] = 561; // 'state 20' -> ESCAPED_CHARACTER -> reduce (target=24, len=1)
actionsTable[325] = 288; // 'state 20' -> DASH -> shift (target=144, len=0)
actionsTable[332] = 561; // 'state 20' -> BRACKET_CLOSE -> reduce (target=24, len=1)
actionsTable.fill(561, 336, 338); // 'state 21' -> CHARACTER..HEX_PREFIX -> reduce (target=24, len=1)
actionsTable[339] = 561; // 'state 21' -> ESCAPED_CHARACTER -> reduce (target=24, len=1)
actionsTable[348] = 561; // 'state 21' -> BRACKET_CLOSE -> reduce (target=24, len=1)
actionsTable.fill(559, 352, 354); // 'state 22' -> CHARACTER..HEX_PREFIX -> reduce (target=23, len=1)
actionsTable[355] = 559; // 'state 22' -> ESCAPED_CHARACTER -> reduce (target=23, len=1)
actionsTable[364] = 559; // 'state 22' -> BRACKET_CLOSE -> reduce (target=23, len=1)
actionsTable[370] = 864; // 'state 23' -> HEX_NUMBER -> shift (target=432, len=0)
actionsTable.fill(1579, 384, 386); // 'state 24' -> CHARACTER..HEX_PREFIX -> reduce (target=21, len=3)
actionsTable[387] = 1579; // 'state 24' -> ESCAPED_CHARACTER -> reduce (target=21, len=3)
actionsTable.fill(1579, 390, 396); // 'state 24' -> DOT..BRACKET_OPEN -> reduce (target=21, len=3)
actionsTable[397] = 1579; // 'state 24' -> @par-gen.EOF -> reduce (target=21, len=3)
actionsTable.fill(1581, 400, 402); // 'state 25' -> CHARACTER..HEX_PREFIX -> reduce (target=22, len=3)
actionsTable[403] = 1581; // 'state 25' -> ESCAPED_CHARACTER -> reduce (target=22, len=3)
actionsTable.fill(1581, 406, 412); // 'state 25' -> DOT..BRACKET_OPEN -> reduce (target=22, len=3)
actionsTable[413] = 1581; // 'state 25' -> @par-gen.EOF -> reduce (target=22, len=3)
actionsTable.fill(1071, 416, 418); // 'state 26' -> CHARACTER..HEX_PREFIX -> reduce (target=23, len=2)
actionsTable[419] = 1071; // 'state 26' -> ESCAPED_CHARACTER -> reduce (target=23, len=2)
actionsTable[428] = 1071; // 'state 26' -> BRACKET_CLOSE -> reduce (target=23, len=2)
actionsTable.fill(1591, 432, 434); // 'state 27' -> CHARACTER..HEX_PREFIX -> reduce (target=27, len=3)
actionsTable[435] = 1591; // 'state 27' -> ESCAPED_CHARACTER -> reduce (target=27, len=3)
actionsTable.fill(1591, 437, 446); // 'state 27' -> DASH..@par-gen.EOF -> reduce (target=27, len=3)
actionsTable.fill(1587, 448, 450); // 'state 28' -> CHARACTER..HEX_PREFIX -> reduce (target=25, len=3)
actionsTable[451] = 1587; // 'state 28' -> ESCAPED_CHARACTER -> reduce (target=25, len=3)
actionsTable[460] = 1587; // 'state 28' -> BRACKET_CLOSE -> reduce (target=25, len=3)
actionsTable.fill(2093, 464, 466); // 'state 29' -> CHARACTER..HEX_PREFIX -> reduce (target=22, len=4)
actionsTable[467] = 2093; // 'state 29' -> ESCAPED_CHARACTER -> reduce (target=22, len=4)
actionsTable.fill(2093, 470, 476); // 'state 29' -> DOT..BRACKET_OPEN -> reduce (target=22, len=4)
actionsTable[477] = 2093; // 'state 29' -> @par-gen.EOF -> reduce (target=22, len=4)

const shiftActionsTable = new Uint8Array(480);
shiftActionsTable[1] = 1; // 'state 0' -> HEX_PREFIX -> lexer.push(LexerMode.HEX_ESCAPE)
shiftActionsTable[11] = 2; // 'state 0' -> BRACKET_OPEN -> lexer.push(LexerMode.CHARACTER_CLASS)
shiftActionsTable[17] = 1; // 'state 1' -> HEX_PREFIX -> lexer.push(LexerMode.HEX_ESCAPE)
shiftActionsTable[27] = 2; // 'state 1' -> BRACKET_OPEN -> lexer.push(LexerMode.CHARACTER_CLASS)
shiftActionsTable[33] = 1; // 'state 2' -> HEX_PREFIX -> lexer.push(LexerMode.HEX_ESCAPE)
shiftActionsTable[49] = 1; // 'state 3' -> HEX_PREFIX -> lexer.push(LexerMode.HEX_ESCAPE)
shiftActionsTable[59] = 2; // 'state 3' -> BRACKET_OPEN -> lexer.push(LexerMode.CHARACTER_CLASS)
shiftActionsTable[65] = 1; // 'state 4' -> HEX_PREFIX -> lexer.push(LexerMode.HEX_ESCAPE)
shiftActionsTable[75] = 2; // 'state 4' -> BRACKET_OPEN -> lexer.push(LexerMode.CHARACTER_CLASS)
shiftActionsTable[81] = 1; // 'state 5' -> HEX_PREFIX -> lexer.push(LexerMode.HEX_ESCAPE)
shiftActionsTable[91] = 2; // 'state 5' -> BRACKET_OPEN -> lexer.push(LexerMode.CHARACTER_CLASS)
shiftActionsTable[97] = 1; // 'state 6' -> HEX_PREFIX -> lexer.push(LexerMode.HEX_ESCAPE)
shiftActionsTable[113] = 1; // 'state 7' -> HEX_PREFIX -> lexer.push(LexerMode.HEX_ESCAPE)
shiftActionsTable[124] = 3; // 'state 7' -> BRACKET_CLOSE -> lexer.pop()
shiftActionsTable[129] = 1; // 'state 8' -> HEX_PREFIX -> lexer.push(LexerMode.HEX_ESCAPE)
shiftActionsTable[139] = 2; // 'state 8' -> BRACKET_OPEN -> lexer.push(LexerMode.CHARACTER_CLASS)
shiftActionsTable[145] = 1; // 'state 9' -> HEX_PREFIX -> lexer.push(LexerMode.HEX_ESCAPE)
shiftActionsTable[161] = 1; // 'state 10' -> HEX_PREFIX -> lexer.push(LexerMode.HEX_ESCAPE)
shiftActionsTable[172] = 3; // 'state 10' -> BRACKET_CLOSE -> lexer.pop()
shiftActionsTable[370] = 3; // 'state 23' -> HEX_NUMBER -> lexer.pop()

const gotoTable = new Uint32Array(192);
gotoTable[16] = 234881024; // 'state 14'
gotoTable[17] = 251658240; // 'state 15'
gotoTable[18] = 268435456; // 'state 16'
gotoTable.fill(50331648, 19, 21); // 'state 3'
gotoTable.fill(218103808, 21, 23); // 'state 13'
gotoTable[26] = 218103808; // 'state 13'
gotoTable[27] = 184549376; // 'state 11'
gotoTable[34] = 318767104; // 'state 19'
gotoTable.fill(83886080, 35, 37); // 'state 5'
gotoTable.fill(218103808, 37, 39); // 'state 13'
gotoTable[42] = 218103808; // 'state 13'
gotoTable[43] = 184549376; // 'state 11'
gotoTable[55] = 117440512; // 'state 7'
gotoTable[56] = 369098752; // 'state 22'
gotoTable[57] = 352321536; // 'state 21'
gotoTable[59] = 335544320; // 'state 20'
gotoTable[68] = 285212672; // 'state 17'
gotoTable.fill(218103808, 69, 71); // 'state 13'
gotoTable[74] = 218103808; // 'state 13'
gotoTable[75] = 184549376; // 'state 11'
gotoTable.fill(134217728, 83, 85); // 'state 8'
gotoTable.fill(218103808, 85, 87); // 'state 13'
gotoTable[90] = 218103808; // 'state 13'
gotoTable[91] = 184549376; // 'state 11'
gotoTable[100] = 285212672; // 'state 17'
gotoTable.fill(218103808, 101, 103); // 'state 13'
gotoTable[106] = 218103808; // 'state 13'
gotoTable[107] = 184549376; // 'state 11'
gotoTable[119] = 167772160; // 'state 10'
gotoTable[120] = 369098752; // 'state 22'
gotoTable[121] = 352321536; // 'state 21'
gotoTable[123] = 335544320; // 'state 20'
gotoTable[136] = 436207616; // 'state 26'
gotoTable[137] = 352321536; // 'state 21'
gotoTable[139] = 335544320; // 'state 20'
gotoTable[148] = 285212672; // 'state 17'
gotoTable.fill(218103808, 149, 151); // 'state 13'
gotoTable[154] = 218103808; // 'state 13'
gotoTable[155] = 184549376; // 'state 11'
gotoTable[171] = 469762048; // 'state 28'
gotoTable[184] = 436207616; // 'state 26'
gotoTable[185] = 352321536; // 'state 21'
gotoTable[187] = 335544320; // 'state 20'

const LexerMode = {
  INITIAL: 0,
  CHARACTER_CLASS: 1,
  HEX_ESCAPE: 2,
};

const lexerModeNames = {
  initial: 0,
  "character-class": 1,
  "hex-escape": 2,
};

const lexerStack = new Uint8Array(64);
let lexerSp = 0;
let lexerMode = LexerMode.INITIAL;

const lexer = {
  push(mode) {
    const modeId = typeof mode === "number" ? mode : lexerModeNames[mode];
    lexerStack[++lexerSp] = modeId;
    lexerMode = modeId;
  },
  pop() {
    if (lexerSp === 0) {
      throw new Error("Cannot remove more lexer states than have been pushed.");
    }
    lexerMode = lexerStack[--lexerSp];
  },
};

/**
 * Auto-growing stack and CST arenas starting at 16,384 words (64 KiB each),
 * which glibc malloc places in the low 32-bit brk heap ([reg*4 + disp32]).
 *
 * Each 32-bit stack entry packs:
 * - low 20 bits: tree pointer (tp) of the shifted/reduced CST node (up to 1,048,575 words)
 * - high 12 bits: parser state
 *
 * Each CST node in tree occupies 3 uint32 words:
 * - word 0 (tp + 0): name | (numChildren << 8)
 * - word 1 (tp + 1): end | ((end - start) << 22) (leaf) or firstChild (internal)
 * - word 2 (tp + 2): nextSibling
 */
const arena = {
  stack: new Uint32Array(16384),
  tree: new Uint32Array(16384),
};

class TreeCursor {
  #stream;
  #tree;
  #rootPointer;
  #pointer;
  #parentStack = new Uint32Array(256);
  #depth = 0;

  constructor(stream, tree, pointer) {
    this.#stream = stream;
    this.#tree = tree;
    this.#rootPointer = pointer;
    this.#pointer = pointer;
  }

  get name() {
    return parserSymbols[this.#tree[this.#pointer] & 0xff];
  }

  get symbolId() {
    return this.#tree[this.#pointer] & 0xff;
  }

  get childCount() {
    return this.#tree[this.#pointer] >>> 8;
  }

  get isLeaf() {
    return this.#tree[this.#pointer] >>> 8 === 0;
  }

  get start() {
    const t = this.#tree;
    let p = this.#pointer;
    while (t[p] >>> 8 > 0) {
      p = t[p + 1] & 0xfffff;
    }
    const span = t[p + 1];
    const end = span & 0x3fffff;
    let q = p - 3;
    while (q >= 3 && t[q] >>> 8 > 0) {
      q -= 3;
    }
    const prevEnd = q >= 3 ? t[q + 1] & 0x3fffff : 0;
    return prevEnd + ((end - prevEnd - (span >>> 22)) & 0x3ff);
  }

  get end() {
    const t = this.#tree;
    let p = this.#pointer;
    while (t[p] >>> 8 > 0) {
      p -= 3;
    }
    return t[p + 1] & 0x3fffff;
  }

  get value() {
    return this.#stream.subarray(this.start, this.end);
  }

  get pointer() {
    return this.#pointer;
  }

  get depth() {
    return this.#depth;
  }

  reset() {
    this.#pointer = this.#rootPointer;
    this.#depth = 0;
    return true;
  }

  gotoFirstChild() {
    const t = this.#tree;
    const p = this.#pointer;
    const n = t[p] >>> 8;
    if (n === 0) {
      return false;
    }
    const d = this.#depth + 1;
    let stack = this.#parentStack;
    if (d >= stack.length) {
      const next = new Uint32Array(stack.length << 1);
      next.set(stack);
      stack = this.#parentStack = next;
    }
    stack[d] = p | ((n - 1) << 20);
    this.#depth = d;
    this.#pointer = t[p + 1] & 0xfffff;
    return true;
  }

  gotoNextSibling() {
    const d = this.#depth;
    const stack = this.#parentStack;
    const entry = stack[d];
    if (entry < 0x100000) {
      return false;
    }
    stack[d] = entry - 0x100000;
    this.#pointer = this.#tree[this.#pointer + 2];
    return true;
  }

  gotoParent() {
    const d = this.#depth;
    if (d === 0) {
      return false;
    }
    this.#depth = d - 1;
    this.#pointer = this.#parentStack[d] & 0xfffff;
    return true;
  }

  currentNode() {
    return new CstNode(this.#stream, this.#tree, this.#pointer);
  }
}

class CstNode {
  #stream;
  #tree;
  #pointer;

  constructor(stream, tree, pointer) {
    this.#stream = stream;
    this.#tree = tree;
    this.#pointer = pointer;
  }

  get name() {
    return parserSymbols[this.#tree[this.#pointer] & 0xff];
  }

  get start() {
    const t = this.#tree;
    let p = this.#pointer;
    while (t[p] >>> 8 > 0) {
      p = t[p + 1] & 0xfffff;
    }
    const span = t[p + 1];
    const end = span & 0x3fffff;
    let q = p - 3;
    while (q >= 3 && t[q] >>> 8 > 0) {
      q -= 3;
    }
    const prevEnd = q >= 3 ? t[q + 1] & 0x3fffff : 0;
    return prevEnd + ((end - prevEnd - (span >>> 22)) & 0x3ff);
  }

  get end() {
    const t = this.#tree;
    let p = this.#pointer;
    while (t[p] >>> 8 > 0) {
      p -= 3;
    }
    return t[p + 1] & 0x3fffff;
  }

  get value() {
    return this.#stream.subarray(this.start, this.end);
  }

  get items() {
    const t = this.#tree;
    const pointer = this.#pointer;
    const nChildren = t[pointer] >>> 8;
    if (nChildren === 0) {
      return undefined;
    }

    const stream = this.#stream;
    const children = new Array(nChildren);
    let child = t[pointer + 1] & 0xfffff;
    children[0] = new CstNode(stream, t, child);

    for (let i = 1; i < nChildren; i++) {
      child = t[child + 2];
      children[i] = new CstNode(stream, t, child);
    }

    return children;
  }

  get __tree() {
    return this.#tree;
  }

  get __pointer() {
    return this.#pointer;
  }

  cursor() {
    return new TreeCursor(this.#stream, this.#tree, this.#pointer);
  }

  toJSON() {
    return {
      name: this.name,
      start: this.start,
      end: this.end,
      value: this.value,
      items: this.items?.map((item) => item.toJSON()),
    };
  }

  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toJSON();
  }
}

/**
 * @typedef {Object} Node
 * @property {string} name
 * @property {number} start
 * @property {number} end
 * @property {Uint8Array} value
 * @property {Node[]} items
 */

/**
 * @param {Uint8Array | string} input
 * @returns {Node}
 */
function parse(input) {
  lexerSp = 0;
  lexerStack[0] = LexerMode.INITIAL;
  lexerMode = LexerMode.INITIAL;

  const stream = typeof input === "string" ? Buffer.from(input) : input;

  const firstRes = nextTokenInitial(stream, 0);
  let lookahead = firstRes.state;
  let lookaheadSpan = firstRes.end | ((firstRes.end - firstRes.start) << 22);

  const stack = arena.stack;
  const tree = arena.tree;
  const actions = actionsTable;
  const goto = gotoTable;
  if (stream.length >>> 1 <= tree.length) {
    let top = 0; // starting state
    stack[0] = top;
    let sp = 0;
    // let the tree stack start from offset 3
    // offset 0 means an error occurred and should be used by the parser
    let tp = 3;

    while (true) {
      const currentState = top >>> 20;

      const actionIndex = currentState + lookahead;
      const actionLookup = actions[actionIndex];
      if ((actionLookup & 1) === 0) {
        // shift
        if (actionLookup === 0xfffe) {
          return new CstNode(stream, tree, tp - 3);
        }

        const shiftAction = shiftActionsTable[actionIndex];
        if (shiftAction !== 0) {
          switch (shiftAction) {
            case 1:
              lexer.push(LexerMode.HEX_ESCAPE);
              break;
            case 2:
              lexer.push(LexerMode.CHARACTER_CLASS);
              break;
            case 3:
              lexer.pop();
              break;
          }
        }

        tree[tp] = lookahead; // name (and nChildren = 0)
        tree[tp + 1] = lookaheadSpan;
        tree[(top & 0xfffff) + 2] = tp; // write the current address to the previous item as next sibling

        sp += 1;
        top = tp | (actionLookup << 19);
        stack[sp] = top;

        if (lexerMode === LexerMode.INITIAL) {
          const res = nextTokenInitial(stream, lookaheadSpan & 0x3fffff);
          lookahead = res.state;
          lookaheadSpan = res.end | ((res.end - res.start) << 22);
        } else if (lexerMode === LexerMode.CHARACTER_CLASS) {
          const res = nextTokenCharacterClass(stream, lookaheadSpan & 0x3fffff);
          lookahead = res.state;
          lookaheadSpan = res.end | ((res.end - res.start) << 22);
        } else {
          const res = nextTokenHexEscape(stream, lookaheadSpan & 0x3fffff);
          lookahead = res.state;
          lookaheadSpan = res.end | ((res.end - res.start) << 22);
        }
      } else {
        // reduce
        if (actionLookup === 0xffff) {
          const errStart =
            (lookaheadSpan & 0x3fffff) === 0x3fffff
              ? -1
              : (lookaheadSpan & 0x3fffff) - (lookaheadSpan >>> 22);
          const context = input.toString().substr(errStart, 10);
          throw new Error(
            `Unexpected lookahead ${parserSymbols[lookahead]} at '${context}'`
          );
        }
        sp -= actionLookup >>> 9;
        const rtop = stack[sp] | 0;
        const word0 = actionLookup >>> 1;
        tree[tp] = word0; // name and number of children
        const nextState = goto[(rtop >>> 20) + (word0 & 0xff)];
        tree[(rtop & 0xfffff) + 2] = tp; // next sibling

        sp += 1;
        tree[tp + 1] = stack[sp]; // first child
        top = tp | nextState;
        stack[sp] = top;
      }

      tp += 3;
      if (tp >= tree.length - 2) {
        break;
      }
    }
  }

  let len = tree.length << 1;
  while (len < stream.length >>> 1) {
    len <<= 1;
  }
  const nextStack = new Uint32Array(len);
  const nextTree = new Uint32Array(len);
  delete arena.stack;
  delete arena.tree;
  arena.stack = nextStack;
  arena.tree = nextTree;
  Object.create(arena);
  return parse(input);
}

export { parse, CstNode, TreeCursor };
