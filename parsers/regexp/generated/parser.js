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
  "undefined", // 28
  "undefined", // 29
  "undefined", // 30
  "undefined", // 31
];

const actionsTable = new Uint16Array(960).fill(0xffff);
actionsTable[0] = 64; // 'state 0' -> CHARACTER -> shift (target=32, len=0)
actionsTable[1] = 128; // 'state 0' -> HEX_PREFIX -> shift (target=64, len=0)
actionsTable[3] = 64; // 'state 0' -> ESCAPED_CHARACTER -> shift (target=32, len=0)
actionsTable[6] = 192; // 'state 0' -> DOT -> shift (target=96, len=0)
actionsTable[8] = 256; // 'state 0' -> PAREN_OPEN -> shift (target=128, len=0)
actionsTable[11] = 320; // 'state 0' -> BRACKET_OPEN -> shift (target=160, len=0)
actionsTable.fill(565, 32, 34); // 'state 1' -> CHARACTER..HEX_PREFIX -> reduce (target=26, len=1)
actionsTable[35] = 565; // 'state 1' -> ESCAPED_CHARACTER -> reduce (target=26, len=1)
actionsTable.fill(565, 38, 44); // 'state 1' -> DOT..BRACKET_OPEN -> reduce (target=26, len=1)
actionsTable[45] = 565; // 'state 1' -> @par-gen.EOF -> reduce (target=26, len=1)
actionsTable[66] = 1280; // 'state 2' -> HEX_NUMBER -> shift (target=640, len=0)
actionsTable.fill(553, 96, 98); // 'state 3' -> CHARACTER..HEX_PREFIX -> reduce (target=20, len=1)
actionsTable[99] = 553; // 'state 3' -> ESCAPED_CHARACTER -> reduce (target=20, len=1)
actionsTable.fill(553, 102, 106); // 'state 3' -> DOT..PAREN_CLOSE -> reduce (target=20, len=1)
actionsTable[106] = 768; // 'state 3' -> QUANTIFIER -> shift (target=384, len=0)
actionsTable[107] = 553; // 'state 3' -> BRACKET_OPEN -> reduce (target=20, len=1)
actionsTable[109] = 553; // 'state 3' -> @par-gen.EOF -> reduce (target=20, len=1)
actionsTable[128] = 64; // 'state 4' -> CHARACTER -> shift (target=32, len=0)
actionsTable[129] = 128; // 'state 4' -> HEX_PREFIX -> shift (target=64, len=0)
actionsTable[131] = 64; // 'state 4' -> ESCAPED_CHARACTER -> shift (target=32, len=0)
actionsTable[134] = 192; // 'state 4' -> DOT -> shift (target=96, len=0)
actionsTable[136] = 256; // 'state 4' -> PAREN_OPEN -> shift (target=128, len=0)
actionsTable[139] = 320; // 'state 4' -> BRACKET_OPEN -> shift (target=160, len=0)
actionsTable[160] = 960; // 'state 5' -> CHARACTER -> shift (target=480, len=0)
actionsTable[161] = 128; // 'state 5' -> HEX_PREFIX -> shift (target=64, len=0)
actionsTable[163] = 1024; // 'state 5' -> ESCAPED_CHARACTER -> shift (target=512, len=0)
actionsTable[164] = 1088; // 'state 5' -> CARET -> shift (target=544, len=0)
actionsTable[205] = 65534; // 'state 6' -> @par-gen.EOF -> done (target=0, len=0)
actionsTable[237] = 545; // 'state 7' -> @par-gen.EOF -> reduce (target=16, len=1)
actionsTable[263] = 640; // 'state 8' -> UNION -> shift (target=320, len=0)
actionsTable[269] = 547; // 'state 8' -> @par-gen.EOF -> reduce (target=17, len=1)
actionsTable[288] = 64; // 'state 9' -> CHARACTER -> shift (target=32, len=0)
actionsTable[289] = 128; // 'state 9' -> HEX_PREFIX -> shift (target=64, len=0)
actionsTable[291] = 64; // 'state 9' -> ESCAPED_CHARACTER -> shift (target=32, len=0)
actionsTable[294] = 192; // 'state 9' -> DOT -> shift (target=96, len=0)
actionsTable[295] = 640; // 'state 9' -> UNION -> shift (target=320, len=0)
actionsTable[296] = 256; // 'state 9' -> PAREN_OPEN -> shift (target=128, len=0)
actionsTable[299] = 320; // 'state 9' -> BRACKET_OPEN -> shift (target=160, len=0)
actionsTable[301] = 547; // 'state 9' -> @par-gen.EOF -> reduce (target=17, len=1)
actionsTable[320] = 64; // 'state 10' -> CHARACTER -> shift (target=32, len=0)
actionsTable[321] = 128; // 'state 10' -> HEX_PREFIX -> shift (target=64, len=0)
actionsTable[323] = 64; // 'state 10' -> ESCAPED_CHARACTER -> shift (target=32, len=0)
actionsTable[326] = 192; // 'state 10' -> DOT -> shift (target=96, len=0)
actionsTable[327] = 1061; // 'state 10' -> UNION -> reduce (target=18, len=2)
actionsTable[328] = 256; // 'state 10' -> PAREN_OPEN -> shift (target=128, len=0)
actionsTable[329] = 1061; // 'state 10' -> PAREN_CLOSE -> reduce (target=18, len=2)
actionsTable[331] = 320; // 'state 10' -> BRACKET_OPEN -> shift (target=160, len=0)
actionsTable[333] = 1061; // 'state 10' -> @par-gen.EOF -> reduce (target=18, len=2)
actionsTable.fill(1063, 352, 354); // 'state 11' -> CHARACTER..HEX_PREFIX -> reduce (target=19, len=2)
actionsTable[355] = 1063; // 'state 11' -> ESCAPED_CHARACTER -> reduce (target=19, len=2)
actionsTable.fill(1063, 358, 362); // 'state 11' -> DOT..PAREN_CLOSE -> reduce (target=19, len=2)
actionsTable[363] = 1063; // 'state 11' -> BRACKET_OPEN -> reduce (target=19, len=2)
actionsTable[365] = 1063; // 'state 11' -> @par-gen.EOF -> reduce (target=19, len=2)
actionsTable.fill(1065, 384, 386); // 'state 12' -> CHARACTER..HEX_PREFIX -> reduce (target=20, len=2)
actionsTable[387] = 1065; // 'state 12' -> ESCAPED_CHARACTER -> reduce (target=20, len=2)
actionsTable.fill(1065, 390, 394); // 'state 12' -> DOT..PAREN_CLOSE -> reduce (target=20, len=2)
actionsTable[395] = 1065; // 'state 12' -> BRACKET_OPEN -> reduce (target=20, len=2)
actionsTable[397] = 1065; // 'state 12' -> @par-gen.EOF -> reduce (target=20, len=2)
actionsTable[423] = 640; // 'state 13' -> UNION -> shift (target=320, len=0)
actionsTable[425] = 1408; // 'state 13' -> PAREN_CLOSE -> shift (target=704, len=0)
actionsTable[448] = 64; // 'state 14' -> CHARACTER -> shift (target=32, len=0)
actionsTable[449] = 128; // 'state 14' -> HEX_PREFIX -> shift (target=64, len=0)
actionsTable[451] = 64; // 'state 14' -> ESCAPED_CHARACTER -> shift (target=32, len=0)
actionsTable[454] = 192; // 'state 14' -> DOT -> shift (target=96, len=0)
actionsTable[455] = 640; // 'state 14' -> UNION -> shift (target=320, len=0)
actionsTable[456] = 256; // 'state 14' -> PAREN_OPEN -> shift (target=128, len=0)
actionsTable[457] = 1408; // 'state 14' -> PAREN_CLOSE -> shift (target=704, len=0)
actionsTable[459] = 320; // 'state 14' -> BRACKET_OPEN -> shift (target=160, len=0)
actionsTable.fill(561, 480, 482); // 'state 15' -> CHARACTER..HEX_PREFIX -> reduce (target=24, len=1)
actionsTable[483] = 561; // 'state 15' -> ESCAPED_CHARACTER -> reduce (target=24, len=1)
actionsTable[485] = 1600; // 'state 15' -> DASH -> shift (target=800, len=0)
actionsTable[492] = 561; // 'state 15' -> BRACKET_CLOSE -> reduce (target=24, len=1)
actionsTable.fill(561, 512, 514); // 'state 16' -> CHARACTER..HEX_PREFIX -> reduce (target=24, len=1)
actionsTable[515] = 561; // 'state 16' -> ESCAPED_CHARACTER -> reduce (target=24, len=1)
actionsTable[524] = 561; // 'state 16' -> BRACKET_CLOSE -> reduce (target=24, len=1)
actionsTable[544] = 960; // 'state 17' -> CHARACTER -> shift (target=480, len=0)
actionsTable[545] = 128; // 'state 17' -> HEX_PREFIX -> shift (target=64, len=0)
actionsTable[547] = 1024; // 'state 17' -> ESCAPED_CHARACTER -> shift (target=512, len=0)
actionsTable[576] = 960; // 'state 18' -> CHARACTER -> shift (target=480, len=0)
actionsTable[577] = 128; // 'state 18' -> HEX_PREFIX -> shift (target=64, len=0)
actionsTable[579] = 1024; // 'state 18' -> ESCAPED_CHARACTER -> shift (target=512, len=0)
actionsTable[588] = 1472; // 'state 18' -> BRACKET_CLOSE -> shift (target=736, len=0)
actionsTable.fill(559, 608, 610); // 'state 19' -> CHARACTER..HEX_PREFIX -> reduce (target=23, len=1)
actionsTable[611] = 559; // 'state 19' -> ESCAPED_CHARACTER -> reduce (target=23, len=1)
actionsTable[620] = 559; // 'state 19' -> BRACKET_CLOSE -> reduce (target=23, len=1)
actionsTable[642] = 1728; // 'state 20' -> HEX_NUMBER -> shift (target=864, len=0)
actionsTable[672] = 64; // 'state 21' -> CHARACTER -> shift (target=32, len=0)
actionsTable[673] = 128; // 'state 21' -> HEX_PREFIX -> shift (target=64, len=0)
actionsTable[675] = 64; // 'state 21' -> ESCAPED_CHARACTER -> shift (target=32, len=0)
actionsTable[678] = 192; // 'state 21' -> DOT -> shift (target=96, len=0)
actionsTable[679] = 1573; // 'state 21' -> UNION -> reduce (target=18, len=3)
actionsTable[680] = 256; // 'state 21' -> PAREN_OPEN -> shift (target=128, len=0)
actionsTable[681] = 1573; // 'state 21' -> PAREN_CLOSE -> reduce (target=18, len=3)
actionsTable[683] = 320; // 'state 21' -> BRACKET_OPEN -> shift (target=160, len=0)
actionsTable[685] = 1573; // 'state 21' -> @par-gen.EOF -> reduce (target=18, len=3)
actionsTable.fill(1579, 704, 706); // 'state 22' -> CHARACTER..HEX_PREFIX -> reduce (target=21, len=3)
actionsTable[707] = 1579; // 'state 22' -> ESCAPED_CHARACTER -> reduce (target=21, len=3)
actionsTable.fill(1579, 710, 716); // 'state 22' -> DOT..BRACKET_OPEN -> reduce (target=21, len=3)
actionsTable[717] = 1579; // 'state 22' -> @par-gen.EOF -> reduce (target=21, len=3)
actionsTable.fill(1581, 736, 738); // 'state 23' -> CHARACTER..HEX_PREFIX -> reduce (target=22, len=3)
actionsTable[739] = 1581; // 'state 23' -> ESCAPED_CHARACTER -> reduce (target=22, len=3)
actionsTable.fill(1581, 742, 748); // 'state 23' -> DOT..BRACKET_OPEN -> reduce (target=22, len=3)
actionsTable[749] = 1581; // 'state 23' -> @par-gen.EOF -> reduce (target=22, len=3)
actionsTable.fill(1071, 768, 770); // 'state 24' -> CHARACTER..HEX_PREFIX -> reduce (target=23, len=2)
actionsTable[771] = 1071; // 'state 24' -> ESCAPED_CHARACTER -> reduce (target=23, len=2)
actionsTable[780] = 1071; // 'state 24' -> BRACKET_CLOSE -> reduce (target=23, len=2)
actionsTable[800] = 1792; // 'state 25' -> CHARACTER -> shift (target=896, len=0)
actionsTable[801] = 128; // 'state 25' -> HEX_PREFIX -> shift (target=64, len=0)
actionsTable[832] = 960; // 'state 26' -> CHARACTER -> shift (target=480, len=0)
actionsTable[833] = 128; // 'state 26' -> HEX_PREFIX -> shift (target=64, len=0)
actionsTable[835] = 1024; // 'state 26' -> ESCAPED_CHARACTER -> shift (target=512, len=0)
actionsTable[844] = 1856; // 'state 26' -> BRACKET_CLOSE -> shift (target=928, len=0)
actionsTable.fill(1591, 864, 866); // 'state 27' -> CHARACTER..HEX_PREFIX -> reduce (target=27, len=3)
actionsTable[867] = 1591; // 'state 27' -> ESCAPED_CHARACTER -> reduce (target=27, len=3)
actionsTable.fill(1591, 869, 878); // 'state 27' -> DASH..@par-gen.EOF -> reduce (target=27, len=3)
actionsTable.fill(1587, 896, 898); // 'state 28' -> CHARACTER..HEX_PREFIX -> reduce (target=25, len=3)
actionsTable[899] = 1587; // 'state 28' -> ESCAPED_CHARACTER -> reduce (target=25, len=3)
actionsTable[908] = 1587; // 'state 28' -> BRACKET_CLOSE -> reduce (target=25, len=3)
actionsTable.fill(2093, 928, 930); // 'state 29' -> CHARACTER..HEX_PREFIX -> reduce (target=22, len=4)
actionsTable[931] = 2093; // 'state 29' -> ESCAPED_CHARACTER -> reduce (target=22, len=4)
actionsTable.fill(2093, 934, 940); // 'state 29' -> DOT..BRACKET_OPEN -> reduce (target=22, len=4)
actionsTable[941] = 2093; // 'state 29' -> @par-gen.EOF -> reduce (target=22, len=4)

const shiftActionsTable = new Uint8Array(960);
shiftActionsTable[1] = 1; // 'state 0' -> HEX_PREFIX -> lexer.push(LexerMode.HEX_ESCAPE)
shiftActionsTable[11] = 2; // 'state 0' -> BRACKET_OPEN -> lexer.push(LexerMode.CHARACTER_CLASS)
shiftActionsTable[129] = 1; // 'state 4' -> HEX_PREFIX -> lexer.push(LexerMode.HEX_ESCAPE)
shiftActionsTable[139] = 2; // 'state 4' -> BRACKET_OPEN -> lexer.push(LexerMode.CHARACTER_CLASS)
shiftActionsTable[161] = 1; // 'state 5' -> HEX_PREFIX -> lexer.push(LexerMode.HEX_ESCAPE)
shiftActionsTable[289] = 1; // 'state 9' -> HEX_PREFIX -> lexer.push(LexerMode.HEX_ESCAPE)
shiftActionsTable[299] = 2; // 'state 9' -> BRACKET_OPEN -> lexer.push(LexerMode.CHARACTER_CLASS)
shiftActionsTable[321] = 1; // 'state 10' -> HEX_PREFIX -> lexer.push(LexerMode.HEX_ESCAPE)
shiftActionsTable[331] = 2; // 'state 10' -> BRACKET_OPEN -> lexer.push(LexerMode.CHARACTER_CLASS)
shiftActionsTable[449] = 1; // 'state 14' -> HEX_PREFIX -> lexer.push(LexerMode.HEX_ESCAPE)
shiftActionsTable[459] = 2; // 'state 14' -> BRACKET_OPEN -> lexer.push(LexerMode.CHARACTER_CLASS)
shiftActionsTable[545] = 1; // 'state 17' -> HEX_PREFIX -> lexer.push(LexerMode.HEX_ESCAPE)
shiftActionsTable[577] = 1; // 'state 18' -> HEX_PREFIX -> lexer.push(LexerMode.HEX_ESCAPE)
shiftActionsTable[588] = 3; // 'state 18' -> BRACKET_CLOSE -> lexer.pop()
shiftActionsTable[642] = 3; // 'state 20' -> HEX_NUMBER -> lexer.pop()
shiftActionsTable[673] = 1; // 'state 21' -> HEX_PREFIX -> lexer.push(LexerMode.HEX_ESCAPE)
shiftActionsTable[683] = 2; // 'state 21' -> BRACKET_OPEN -> lexer.push(LexerMode.CHARACTER_CLASS)
shiftActionsTable[801] = 1; // 'state 25' -> HEX_PREFIX -> lexer.push(LexerMode.HEX_ESCAPE)
shiftActionsTable[833] = 1; // 'state 26' -> HEX_PREFIX -> lexer.push(LexerMode.HEX_ESCAPE)
shiftActionsTable[844] = 3; // 'state 26' -> BRACKET_CLOSE -> lexer.pop()

const gotoTable = new Uint32Array(960);
gotoTable[16] = 201326592; // 'state 6'
gotoTable[17] = 234881024; // 'state 7'
gotoTable[18] = 268435456; // 'state 8'
gotoTable.fill(301989888, 19, 21); // 'state 9'
gotoTable.fill(100663296, 21, 23); // 'state 3'
gotoTable[26] = 100663296; // 'state 3'
gotoTable[27] = 33554432; // 'state 1'
gotoTable[146] = 436207616; // 'state 13'
gotoTable.fill(469762048, 147, 149); // 'state 14'
gotoTable.fill(100663296, 149, 151); // 'state 3'
gotoTable[154] = 100663296; // 'state 3'
gotoTable[155] = 33554432; // 'state 1'
gotoTable[183] = 603979776; // 'state 18'
gotoTable[184] = 637534208; // 'state 19'
gotoTable[185] = 536870912; // 'state 16'
gotoTable[187] = 503316480; // 'state 15'
gotoTable[308] = 369098752; // 'state 11'
gotoTable.fill(100663296, 309, 311); // 'state 3'
gotoTable[314] = 100663296; // 'state 3'
gotoTable[315] = 33554432; // 'state 1'
gotoTable.fill(704643072, 339, 341); // 'state 21'
gotoTable.fill(100663296, 341, 343); // 'state 3'
gotoTable[346] = 100663296; // 'state 3'
gotoTable[347] = 33554432; // 'state 1'
gotoTable[468] = 369098752; // 'state 11'
gotoTable.fill(100663296, 469, 471); // 'state 3'
gotoTable[474] = 100663296; // 'state 3'
gotoTable[475] = 33554432; // 'state 1'
gotoTable[567] = 872415232; // 'state 26'
gotoTable[568] = 637534208; // 'state 19'
gotoTable[569] = 536870912; // 'state 16'
gotoTable[571] = 503316480; // 'state 15'
gotoTable[600] = 805306368; // 'state 24'
gotoTable[601] = 536870912; // 'state 16'
gotoTable[603] = 503316480; // 'state 15'
gotoTable[692] = 369098752; // 'state 11'
gotoTable.fill(100663296, 693, 695); // 'state 3'
gotoTable[698] = 100663296; // 'state 3'
gotoTable[699] = 33554432; // 'state 1'
gotoTable[827] = 939524096; // 'state 28'
gotoTable[856] = 805306368; // 'state 24'
gotoTable[857] = 536870912; // 'state 16'
gotoTable[859] = 503316480; // 'state 15'

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

function growBuffer(buf, usedLen) {
  const next = new Uint32Array(buf.length << 1);
  if (usedLen > 0) {
    next.set(buf.subarray(0, usedLen));
  }
  return next;
}

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
    let n = t[p] >>> 8;
    while (n > 0) {
      p = t[p + 1] & 0xfffff;
      for (let i = 1; i < n; i++) {
        p = t[p + 2];
      }
      n = t[p] >>> 8;
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
      stack = this.#parentStack = growBuffer(stack, d);
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
    let n = t[p] >>> 8;
    while (n > 0) {
      p = t[p + 1] & 0xfffff;
      for (let i = 1; i < n; i++) {
        p = t[p + 2];
      }
      n = t[p] >>> 8;
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

function parseCold(stream, input, sp, tp, lookahead, lookaheadSpan, result) {
  let s = arena.stack;
  let t = tp === 3 ? new Uint32Array(arena.tree.length) : arena.tree;
  if (tp === 3) {
    s[0] = 0; // starting state
  }

  while (true) {
    if (tp >= t.length - 2) {
      t = growBuffer(t, tp);
    }
    if (sp >= s.length - 1) {
      s = growBuffer(s, sp + 1);
    }
    const top = s[sp];
    const currentState = top >>> 20;

    const actionIndex = currentState + lookahead;
    const actionLookup = actionsTable[actionIndex];
    if (actionLookup >= 0xfffe) {
      if (actionLookup === 0xfffe) {
        if (s !== arena.stack || t !== arena.tree) {
          delete arena.stack;
          delete arena.tree;
          arena.stack = s;
          arena.tree = t;
          Object.create(arena);
        }
        return new CstNode(stream, t, tp - 3);
      }
      const context = input.toString().substr(result.start, 10);
      throw new Error(
        `Unexpected lookahead ${parserSymbols[lookahead]} at '${context}'`
      );
    }

    if ((actionLookup & 1) === 0) {
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

      t[tp] = lookahead;
      t[tp + 1] = lookaheadSpan;
      t[(top & 0xfffff) + 2] = tp;

      sp += 1;
      s[sp] = tp | (actionLookup << 19);

      result =
        lexerMode === LexerMode.INITIAL
          ? nextTokenInitial(stream, lookaheadSpan & 0x3fffff)
          : lexerMode === LexerMode.CHARACTER_CLASS
          ? nextTokenCharacterClass(stream, lookaheadSpan & 0x3fffff)
          : nextTokenHexEscape(stream, lookaheadSpan & 0x3fffff);
      lookahead = result.state;
      lookaheadSpan = result.end | ((result.end - result.start) << 22);
    } else {
      const word0 = actionLookup >>> 1;
      const actionSymbol = word0 & 0xff;
      const stackItemsToReduce = word0 >>> 8;

      sp -= stackItemsToReduce;
      t[tp] = word0;

      const rtop = s[sp];
      const nextState = gotoTable[(rtop >>> 20) + actionSymbol];
      t[(rtop & 0xfffff) + 2] = tp;

      sp += 1;
      t[tp + 1] = s[sp];
      s[sp] = tp | nextState;
    }

    tp += 3;
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

  let result = nextTokenInitial(stream, 0);
  let lookahead = result.state;
  let lookaheadSpan = result.end | ((result.end - result.start) << 22);

  const stack = arena.stack;
  const tree = arena.tree;
  if (stream.length >>> 1 > tree.length) {
    return parseCold(stream, input, 0, 3, lookahead, lookaheadSpan, result);
  }

  stack[0] = 0; // starting state
  let sp = 0;
  // let the tree stack start from offset 3
  // offset 0 means an error occurred and should be used by the parser
  let tp = 3;

  while (true) {
    const top = stack[sp];
    const currentState = top >>> 20;

    const actionIndex = currentState + lookahead;
    const actionLookup = actionsTable[actionIndex];
    if (actionLookup >= 0xfffe) {
      if (actionLookup === 0xfffe) {
        return new CstNode(stream, tree, tp - 3);
      }
      const context = input.toString().substr(result.start, 10);
      throw new Error(
        `Unexpected lookahead ${parserSymbols[lookahead]} at '${context}'`
      );
    }

    if ((actionLookup & 1) === 0) {
      // shift

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
      stack[sp] = tp | (actionLookup << 19);

      result =
        lexerMode === LexerMode.INITIAL
          ? nextTokenInitial(stream, lookaheadSpan & 0x3fffff)
          : lexerMode === LexerMode.CHARACTER_CLASS
          ? nextTokenCharacterClass(stream, lookaheadSpan & 0x3fffff)
          : nextTokenHexEscape(stream, lookaheadSpan & 0x3fffff);
      lookahead = result.state;
      lookaheadSpan = result.end | ((result.end - result.start) << 22);
    } else {
      // reduce
      const word0 = actionLookup >>> 1;
      const actionSymbol = word0 & 0xff;
      const stackItemsToReduce = word0 >>> 8;

      sp -= stackItemsToReduce;
      tree[tp] = word0; // name and number of children

      const rtop = stack[sp];
      const nextState = gotoTable[(rtop >>> 20) + actionSymbol];
      tree[(rtop & 0xfffff) + 2] = tp; // next sibling

      sp += 1;
      tree[tp + 1] = stack[sp]; // first child
      stack[sp] = tp | nextState;
    }

    tp += 3;
    if (tp >= tree.length - 2) {
      return parseCold(stream, input, sp, tp, lookahead, lookaheadSpan, result);
    }
  }
}

export { parse, CstNode, TreeCursor };
