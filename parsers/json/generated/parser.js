// @ts-nocheck

import { next as nextTokenInitial } from "./lexer-initial.js";

/*
      Json := Element;
Element := Value;
Element := Value WS;
Element := WS Value;
Element := WS Value WS;
Value := Object;
Value := Array;
Value := STRING;
Value := NUMBER;
Value := TRUE;
Value := FALSE;
Value := NULL;
Object := CURLY_OPEN CURLY_CLOSE;
Object := CURLY_OPEN WS CURLY_CLOSE;
Object := CURLY_OPEN Members CURLY_CLOSE;
Members := Member;
Members := Members COMMA Member;
Member := STRING COLON Element;
Member := STRING WS COLON Element;
Member := WS STRING COLON Element;
Member := WS STRING WS COLON Element;
Array := BRACKET_OPEN BRACKET_CLOSE;
Array := BRACKET_OPEN WS BRACKET_CLOSE;
Array := BRACKET_OPEN Elements BRACKET_CLOSE;
Elements := Element;
Elements := Elements COMMA Element;
      */

const parserSymbols = [
  "WS", // 0
  "TRUE", // 1
  "FALSE", // 2
  "NULL", // 3
  "CURLY_OPEN", // 4
  "CURLY_CLOSE", // 5
  "COMMA", // 6
  "COLON", // 7
  "STRING", // 8
  "BRACKET_OPEN", // 9
  "BRACKET_CLOSE", // 10
  "NUMBER", // 11
  "@par-gen.EOF", // 12
  "@par-gen.ERROR", // 13
  "S", // 14
  "Json", // 15
  "Element", // 16
  "Value", // 17
  "Object", // 18
  "Members", // 19
  "Member", // 20
  "Array", // 21
  "Elements", // 22
  "undefined", // 23
  "undefined", // 24
  "undefined", // 25
  "undefined", // 26
  "undefined", // 27
  "undefined", // 28
  "undefined", // 29
  "undefined", // 30
  "undefined", // 31
];

const actionsTable = new Uint16Array(1152).fill(0xffff);
actionsTable[0] = 64; // 'state 0' -> WS -> shift (target=32, len=0) -> 'action 0'
actionsTable[1] = 128; // 'state 0' -> TRUE -> shift (target=64, len=0) -> 'action 1'
actionsTable[2] = 128; // 'state 0' -> FALSE -> shift (target=64, len=0) -> 'action 2'
actionsTable[3] = 128; // 'state 0' -> NULL -> shift (target=64, len=0) -> 'action 3'
actionsTable[4] = 192; // 'state 0' -> CURLY_OPEN -> shift (target=96, len=0) -> 'action 4'
actionsTable[8] = 128; // 'state 0' -> STRING -> shift (target=64, len=0) -> 'action 5'
actionsTable[9] = 256; // 'state 0' -> BRACKET_OPEN -> shift (target=128, len=0) -> 'action 6'
actionsTable[11] = 128; // 'state 0' -> NUMBER -> shift (target=64, len=0) -> 'action 7'
actionsTable[172] = 65534; // 'state 5' -> @par-gen.EOF -> done (target=0, len=0) -> 'action 8'
actionsTable[204] = 543; // 'state 6' -> @par-gen.EOF -> reduce (target=15, len=1) -> 'action 9'
actionsTable[224] = 512; // 'state 7' -> WS -> shift (target=256, len=0) -> 'action 10'
actionsTable[229] = 545; // 'state 7' -> CURLY_CLOSE -> reduce (target=16, len=1) -> 'action 11'
actionsTable[230] = 545; // 'state 7' -> COMMA -> reduce (target=16, len=1) -> 'action 12'
actionsTable[234] = 545; // 'state 7' -> BRACKET_CLOSE -> reduce (target=16, len=1) -> 'action 13'
actionsTable[236] = 545; // 'state 7' -> @par-gen.EOF -> reduce (target=16, len=1) -> 'action 14'
actionsTable[33] = 128; // 'state 1' -> TRUE -> shift (target=64, len=0) -> 'action 15'
actionsTable[34] = 128; // 'state 1' -> FALSE -> shift (target=64, len=0) -> 'action 16'
actionsTable[35] = 128; // 'state 1' -> NULL -> shift (target=64, len=0) -> 'action 17'
actionsTable[36] = 192; // 'state 1' -> CURLY_OPEN -> shift (target=96, len=0) -> 'action 18'
actionsTable[40] = 128; // 'state 1' -> STRING -> shift (target=64, len=0) -> 'action 19'
actionsTable[41] = 256; // 'state 1' -> BRACKET_OPEN -> shift (target=128, len=0) -> 'action 20'
actionsTable[43] = 128; // 'state 1' -> NUMBER -> shift (target=64, len=0) -> 'action 21'
actionsTable[64] = 547; // 'state 2' -> WS -> reduce (target=17, len=1) -> 'action 22'
actionsTable[69] = 547; // 'state 2' -> CURLY_CLOSE -> reduce (target=17, len=1) -> 'action 23'
actionsTable[70] = 547; // 'state 2' -> COMMA -> reduce (target=17, len=1) -> 'action 24'
actionsTable[74] = 547; // 'state 2' -> BRACKET_CLOSE -> reduce (target=17, len=1) -> 'action 25'
actionsTable[76] = 547; // 'state 2' -> @par-gen.EOF -> reduce (target=17, len=1) -> 'action 26'
actionsTable[96] = 640; // 'state 3' -> WS -> shift (target=320, len=0) -> 'action 27'
actionsTable[101] = 704; // 'state 3' -> CURLY_CLOSE -> shift (target=352, len=0) -> 'action 28'
actionsTable[104] = 768; // 'state 3' -> STRING -> shift (target=384, len=0) -> 'action 29'
actionsTable[128] = 960; // 'state 4' -> WS -> shift (target=480, len=0) -> 'action 30'
actionsTable[129] = 128; // 'state 4' -> TRUE -> shift (target=64, len=0) -> 'action 31'
actionsTable[130] = 128; // 'state 4' -> FALSE -> shift (target=64, len=0) -> 'action 32'
actionsTable[131] = 128; // 'state 4' -> NULL -> shift (target=64, len=0) -> 'action 33'
actionsTable[132] = 192; // 'state 4' -> CURLY_OPEN -> shift (target=96, len=0) -> 'action 34'
actionsTable[136] = 128; // 'state 4' -> STRING -> shift (target=64, len=0) -> 'action 35'
actionsTable[137] = 256; // 'state 4' -> BRACKET_OPEN -> shift (target=128, len=0) -> 'action 36'
actionsTable[138] = 1024; // 'state 4' -> BRACKET_CLOSE -> shift (target=512, len=0) -> 'action 37'
actionsTable[139] = 128; // 'state 4' -> NUMBER -> shift (target=64, len=0) -> 'action 38'
actionsTable[261] = 1057; // 'state 8' -> CURLY_CLOSE -> reduce (target=16, len=2) -> 'action 39'
actionsTable[262] = 1057; // 'state 8' -> COMMA -> reduce (target=16, len=2) -> 'action 40'
actionsTable[266] = 1057; // 'state 8' -> BRACKET_CLOSE -> reduce (target=16, len=2) -> 'action 41'
actionsTable[268] = 1057; // 'state 8' -> @par-gen.EOF -> reduce (target=16, len=2) -> 'action 42'
actionsTable[288] = 1216; // 'state 9' -> WS -> shift (target=608, len=0) -> 'action 43'
actionsTable[293] = 1057; // 'state 9' -> CURLY_CLOSE -> reduce (target=16, len=2) -> 'action 44'
actionsTable[294] = 1057; // 'state 9' -> COMMA -> reduce (target=16, len=2) -> 'action 45'
actionsTable[298] = 1057; // 'state 9' -> BRACKET_CLOSE -> reduce (target=16, len=2) -> 'action 46'
actionsTable[300] = 1057; // 'state 9' -> @par-gen.EOF -> reduce (target=16, len=2) -> 'action 47'
actionsTable[352] = 1061; // 'state 11' -> WS -> reduce (target=18, len=2) -> 'action 48'
actionsTable[357] = 1061; // 'state 11' -> CURLY_CLOSE -> reduce (target=18, len=2) -> 'action 49'
actionsTable[358] = 1061; // 'state 11' -> COMMA -> reduce (target=18, len=2) -> 'action 50'
actionsTable[362] = 1061; // 'state 11' -> BRACKET_CLOSE -> reduce (target=18, len=2) -> 'action 51'
actionsTable[364] = 1061; // 'state 11' -> @par-gen.EOF -> reduce (target=18, len=2) -> 'action 52'
actionsTable[325] = 1280; // 'state 10' -> CURLY_CLOSE -> shift (target=640, len=0) -> 'action 53'
actionsTable[328] = 1344; // 'state 10' -> STRING -> shift (target=672, len=0) -> 'action 54'
actionsTable[421] = 1280; // 'state 13' -> CURLY_CLOSE -> shift (target=640, len=0) -> 'action 55'
actionsTable[422] = 1408; // 'state 13' -> COMMA -> shift (target=704, len=0) -> 'action 56'
actionsTable[453] = 551; // 'state 14' -> CURLY_CLOSE -> reduce (target=19, len=1) -> 'action 57'
actionsTable[454] = 551; // 'state 14' -> COMMA -> reduce (target=19, len=1) -> 'action 58'
actionsTable[384] = 1472; // 'state 12' -> WS -> shift (target=736, len=0) -> 'action 59'
actionsTable[391] = 1536; // 'state 12' -> COLON -> shift (target=768, len=0) -> 'action 60'
actionsTable[512] = 1067; // 'state 16' -> WS -> reduce (target=21, len=2) -> 'action 61'
actionsTable[517] = 1067; // 'state 16' -> CURLY_CLOSE -> reduce (target=21, len=2) -> 'action 62'
actionsTable[518] = 1067; // 'state 16' -> COMMA -> reduce (target=21, len=2) -> 'action 63'
actionsTable[522] = 1067; // 'state 16' -> BRACKET_CLOSE -> reduce (target=21, len=2) -> 'action 64'
actionsTable[524] = 1067; // 'state 16' -> @par-gen.EOF -> reduce (target=21, len=2) -> 'action 65'
actionsTable[481] = 128; // 'state 15' -> TRUE -> shift (target=64, len=0) -> 'action 66'
actionsTable[482] = 128; // 'state 15' -> FALSE -> shift (target=64, len=0) -> 'action 67'
actionsTable[483] = 128; // 'state 15' -> NULL -> shift (target=64, len=0) -> 'action 68'
actionsTable[484] = 192; // 'state 15' -> CURLY_OPEN -> shift (target=96, len=0) -> 'action 69'
actionsTable[488] = 128; // 'state 15' -> STRING -> shift (target=64, len=0) -> 'action 70'
actionsTable[489] = 256; // 'state 15' -> BRACKET_OPEN -> shift (target=128, len=0) -> 'action 71'
actionsTable[490] = 1600; // 'state 15' -> BRACKET_CLOSE -> shift (target=800, len=0) -> 'action 72'
actionsTable[491] = 128; // 'state 15' -> NUMBER -> shift (target=64, len=0) -> 'action 73'
actionsTable[582] = 1664; // 'state 18' -> COMMA -> shift (target=832, len=0) -> 'action 74'
actionsTable[586] = 1600; // 'state 18' -> BRACKET_CLOSE -> shift (target=800, len=0) -> 'action 75'
actionsTable[550] = 557; // 'state 17' -> COMMA -> reduce (target=22, len=1) -> 'action 76'
actionsTable[554] = 557; // 'state 17' -> BRACKET_CLOSE -> reduce (target=22, len=1) -> 'action 77'
actionsTable[613] = 1569; // 'state 19' -> CURLY_CLOSE -> reduce (target=16, len=3) -> 'action 78'
actionsTable[614] = 1569; // 'state 19' -> COMMA -> reduce (target=16, len=3) -> 'action 79'
actionsTable[618] = 1569; // 'state 19' -> BRACKET_CLOSE -> reduce (target=16, len=3) -> 'action 80'
actionsTable[620] = 1569; // 'state 19' -> @par-gen.EOF -> reduce (target=16, len=3) -> 'action 81'
actionsTable[640] = 1573; // 'state 20' -> WS -> reduce (target=18, len=3) -> 'action 82'
actionsTable[645] = 1573; // 'state 20' -> CURLY_CLOSE -> reduce (target=18, len=3) -> 'action 83'
actionsTable[646] = 1573; // 'state 20' -> COMMA -> reduce (target=18, len=3) -> 'action 84'
actionsTable[650] = 1573; // 'state 20' -> BRACKET_CLOSE -> reduce (target=18, len=3) -> 'action 85'
actionsTable[652] = 1573; // 'state 20' -> @par-gen.EOF -> reduce (target=18, len=3) -> 'action 86'
actionsTable[672] = 1728; // 'state 21' -> WS -> shift (target=864, len=0) -> 'action 87'
actionsTable[679] = 1792; // 'state 21' -> COLON -> shift (target=896, len=0) -> 'action 88'
actionsTable[704] = 1856; // 'state 22' -> WS -> shift (target=928, len=0) -> 'action 89'
actionsTable[712] = 768; // 'state 22' -> STRING -> shift (target=384, len=0) -> 'action 90'
actionsTable[768] = 64; // 'state 24' -> WS -> shift (target=32, len=0) -> 'action 91'
actionsTable[769] = 128; // 'state 24' -> TRUE -> shift (target=64, len=0) -> 'action 92'
actionsTable[770] = 128; // 'state 24' -> FALSE -> shift (target=64, len=0) -> 'action 93'
actionsTable[771] = 128; // 'state 24' -> NULL -> shift (target=64, len=0) -> 'action 94'
actionsTable[772] = 192; // 'state 24' -> CURLY_OPEN -> shift (target=96, len=0) -> 'action 95'
actionsTable[776] = 128; // 'state 24' -> STRING -> shift (target=64, len=0) -> 'action 96'
actionsTable[777] = 256; // 'state 24' -> BRACKET_OPEN -> shift (target=128, len=0) -> 'action 97'
actionsTable[779] = 128; // 'state 24' -> NUMBER -> shift (target=64, len=0) -> 'action 98'
actionsTable[743] = 1792; // 'state 23' -> COLON -> shift (target=896, len=0) -> 'action 99'
actionsTable[800] = 1579; // 'state 25' -> WS -> reduce (target=21, len=3) -> 'action 100'
actionsTable[805] = 1579; // 'state 25' -> CURLY_CLOSE -> reduce (target=21, len=3) -> 'action 101'
actionsTable[806] = 1579; // 'state 25' -> COMMA -> reduce (target=21, len=3) -> 'action 102'
actionsTable[810] = 1579; // 'state 25' -> BRACKET_CLOSE -> reduce (target=21, len=3) -> 'action 103'
actionsTable[812] = 1579; // 'state 25' -> @par-gen.EOF -> reduce (target=21, len=3) -> 'action 104'
actionsTable[832] = 64; // 'state 26' -> WS -> shift (target=32, len=0) -> 'action 105'
actionsTable[833] = 128; // 'state 26' -> TRUE -> shift (target=64, len=0) -> 'action 106'
actionsTable[834] = 128; // 'state 26' -> FALSE -> shift (target=64, len=0) -> 'action 107'
actionsTable[835] = 128; // 'state 26' -> NULL -> shift (target=64, len=0) -> 'action 108'
actionsTable[836] = 192; // 'state 26' -> CURLY_OPEN -> shift (target=96, len=0) -> 'action 109'
actionsTable[840] = 128; // 'state 26' -> STRING -> shift (target=64, len=0) -> 'action 110'
actionsTable[841] = 256; // 'state 26' -> BRACKET_OPEN -> shift (target=128, len=0) -> 'action 111'
actionsTable[843] = 128; // 'state 26' -> NUMBER -> shift (target=64, len=0) -> 'action 112'
actionsTable[896] = 64; // 'state 28' -> WS -> shift (target=32, len=0) -> 'action 113'
actionsTable[897] = 128; // 'state 28' -> TRUE -> shift (target=64, len=0) -> 'action 114'
actionsTable[898] = 128; // 'state 28' -> FALSE -> shift (target=64, len=0) -> 'action 115'
actionsTable[899] = 128; // 'state 28' -> NULL -> shift (target=64, len=0) -> 'action 116'
actionsTable[900] = 192; // 'state 28' -> CURLY_OPEN -> shift (target=96, len=0) -> 'action 117'
actionsTable[904] = 128; // 'state 28' -> STRING -> shift (target=64, len=0) -> 'action 118'
actionsTable[905] = 256; // 'state 28' -> BRACKET_OPEN -> shift (target=128, len=0) -> 'action 119'
actionsTable[907] = 128; // 'state 28' -> NUMBER -> shift (target=64, len=0) -> 'action 120'
actionsTable[871] = 2176; // 'state 27' -> COLON -> shift (target=1088, len=0) -> 'action 121'
actionsTable[965] = 1575; // 'state 30' -> CURLY_CLOSE -> reduce (target=19, len=3) -> 'action 122'
actionsTable[966] = 1575; // 'state 30' -> COMMA -> reduce (target=19, len=3) -> 'action 123'
actionsTable[936] = 1344; // 'state 29' -> STRING -> shift (target=672, len=0) -> 'action 124'
actionsTable[997] = 1577; // 'state 31' -> CURLY_CLOSE -> reduce (target=20, len=3) -> 'action 125'
actionsTable[998] = 1577; // 'state 31' -> COMMA -> reduce (target=20, len=3) -> 'action 126'
actionsTable[1030] = 1581; // 'state 32' -> COMMA -> reduce (target=22, len=3) -> 'action 127'
actionsTable[1034] = 1581; // 'state 32' -> BRACKET_CLOSE -> reduce (target=22, len=3) -> 'action 128'
actionsTable[1061] = 2089; // 'state 33' -> CURLY_CLOSE -> reduce (target=20, len=4) -> 'action 129'
actionsTable[1062] = 2089; // 'state 33' -> COMMA -> reduce (target=20, len=4) -> 'action 130'
actionsTable[1088] = 64; // 'state 34' -> WS -> shift (target=32, len=0) -> 'action 131'
actionsTable[1089] = 128; // 'state 34' -> TRUE -> shift (target=64, len=0) -> 'action 132'
actionsTable[1090] = 128; // 'state 34' -> FALSE -> shift (target=64, len=0) -> 'action 133'
actionsTable[1091] = 128; // 'state 34' -> NULL -> shift (target=64, len=0) -> 'action 134'
actionsTable[1092] = 192; // 'state 34' -> CURLY_OPEN -> shift (target=96, len=0) -> 'action 135'
actionsTable[1096] = 128; // 'state 34' -> STRING -> shift (target=64, len=0) -> 'action 136'
actionsTable[1097] = 256; // 'state 34' -> BRACKET_OPEN -> shift (target=128, len=0) -> 'action 137'
actionsTable[1099] = 128; // 'state 34' -> NUMBER -> shift (target=64, len=0) -> 'action 138'
actionsTable[1125] = 2601; // 'state 35' -> CURLY_CLOSE -> reduce (target=20, len=5) -> 'action 139'
actionsTable[1126] = 2601; // 'state 35' -> COMMA -> reduce (target=20, len=5) -> 'action 140'

const gotoTable = new Uint32Array(1152);
gotoTable[15] = 10485760; // 'state 5'
gotoTable[16] = 12582912; // 'state 6'
gotoTable[17] = 14680064; // 'state 7'
gotoTable[18] = 4194304; // 'state 2'
gotoTable[21] = 4194304; // 'state 2'
gotoTable[49] = 18874368; // 'state 9'
gotoTable[50] = 4194304; // 'state 2'
gotoTable[53] = 4194304; // 'state 2'
gotoTable[115] = 27262976; // 'state 13'
gotoTable[116] = 29360128; // 'state 14'
gotoTable[150] = 37748736; // 'state 18'
gotoTable[144] = 35651584; // 'state 17'
gotoTable[145] = 14680064; // 'state 7'
gotoTable[146] = 4194304; // 'state 2'
gotoTable[149] = 4194304; // 'state 2'
gotoTable[497] = 18874368; // 'state 9'
gotoTable[498] = 4194304; // 'state 2'
gotoTable[501] = 4194304; // 'state 2'
gotoTable[724] = 62914560; // 'state 30'
gotoTable[784] = 65011712; // 'state 31'
gotoTable[785] = 14680064; // 'state 7'
gotoTable[786] = 4194304; // 'state 2'
gotoTable[789] = 4194304; // 'state 2'
gotoTable[848] = 67108864; // 'state 32'
gotoTable[849] = 14680064; // 'state 7'
gotoTable[850] = 4194304; // 'state 2'
gotoTable[853] = 4194304; // 'state 2'
gotoTable[912] = 69206016; // 'state 33'
gotoTable[913] = 14680064; // 'state 7'
gotoTable[914] = 4194304; // 'state 2'
gotoTable[917] = 4194304; // 'state 2'
gotoTable[1104] = 73400320; // 'state 35'
gotoTable[1105] = 14680064; // 'state 7'
gotoTable[1106] = 4194304; // 'state 2'
gotoTable[1109] = 4194304; // 'state 2'

const nextToken = nextTokenInitial;

/**
 * Each 32-bit stack entry packs:
 * - low 16 bits: tree pointer (tp) of the shifted/reduced CST node
 * - high 16 bits: parser state
 */
const stack = new Uint32Array(16384);

/**
 * This typed array contains the syntax tree from a parse.
 * Each CST node occupies 3 uint32 words:
 * - word 0 (tp + 0): name | (numChildren << 8)
 * - word 1 (tp + 1): start | (end << 16) (leaf) or firstChild (internal)
 * - word 2 (tp + 2): nextSibling
 * This enables 32-bit coalesced stores and fast DFS traversal.
 */
const tree = new Uint32Array(16384);

const proxyHandler = {
  get(target, prop, receiver) {
    const { stream, pointer } = target;
    const word0 = tree[pointer];
    const nChildren = word0 >>> 8;

    switch (prop) {
      case "name":
        return parserSymbols[word0 & 0xff];
      case "start":
        return nChildren > 0
          ? receiver.items[0].start
          : tree[pointer + 1] & 0xffff;
      case "end":
        return nChildren > 0
          ? receiver.items[nChildren - 1].end
          : tree[pointer + 1] >>> 16;
      case "value":
        return stream.subarray(receiver.start, receiver.end);
      case "items": {
        if (nChildren === 0) {
          return undefined;
        }

        const firstChild = tree[pointer + 1] & 0xffff;
        const children = [createProxy(stream, firstChild)];
        let nextChild = tree[firstChild + 2];

        for (let i = 1; i < nChildren; i++) {
          children.push(createProxy(stream, nextChild));
          nextChild = tree[nextChild + 2];
        }

        return children;
      }
      case "__tree":
        return tree;
      case "__pointer":
        return pointer;
    }
  },
  ownKeys() {
    return ["name", "start", "end", "value", "items"];
  },
  has(target, prop) {
    return this.ownKeys(target).includes(prop);
  },
  getOwnPropertyDescriptor(target, prop) {
    return this.has(target, prop)
      ? { enumerable: true, configurable: true }
      : undefined;
  },
};

const createProxy = (stream, pointer) =>
  new Proxy({ stream, pointer }, proxyHandler);

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
  const stream = typeof input === "string" ? Buffer.from(input) : input;

  let result = nextToken(stream, 0);
  let lookahead = result.state;
  let lookaheadSpan = (result.start & 0xffff) | (result.end << 16);

  stack[0] = 0; // starting state
  let sp = 0;
  // let the tree stack start from offset 3
  // offset 0 means an error occurred and should be used by the parser
  let tp = 3;

  while (true) {
    const top = stack[sp];
    const currentState = top >>> 16;

    const actionLookup = actionsTable[currentState + lookahead];
    if (actionLookup >= 0xfffe) {
      if (actionLookup === 0xfffe) {
        return createProxy(stream, tp - 3);
      }
      const lookaheadStart = (lookaheadSpan << 16) >> 16;
      const context = input.toString().substr(lookaheadStart, 10);
      throw new Error(
        `Unexpected lookahead ${parserSymbols[lookahead]} at '${context}'`
      );
    }

    if ((actionLookup & 1) === 0) {
      // shift

      tree[tp] = lookahead; // name (and nChildren = 0)
      tree[tp + 1] = lookaheadSpan;
      tree[(top & 0xffff) + 2] = tp; // write the current address to the previous item as next sibling

      sp += 1;
      stack[sp] = tp | (actionLookup << 15);

      result = nextToken(stream, lookaheadSpan >>> 16);
      lookahead = result.state;
      lookaheadSpan = (result.start & 0xffff) | (result.end << 16);
    } else {
      // reduce
      const word0 = actionLookup >>> 1;
      const actionSymbol = word0 & 0xff;
      const stackItemsToReduce = word0 >>> 8;

      sp -= stackItemsToReduce;
      tree[tp] = word0; // name and number of children

      const rtop = stack[sp];
      const nextState = gotoTable[(rtop >>> 16) + actionSymbol];
      tree[(rtop & 0xffff) + 2] = tp; // next sibling

      sp += 1;
      tree[tp + 1] = stack[sp]; // first child
      stack[sp] = tp | nextState;
    }

    tp += 3;
  }
}

export { parse };
