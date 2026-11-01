// @ts-nocheck

import { next as nextTokenInitial } from "./lexer-initial.js";

/*
      Grammar := Statements;
Grammar := WS Statements;
Statements := Statement;
Statements := Statements Statement;
Statement := Assignment Expr Semi;
Statement := Assignment Expr StateClause Semi;
Statement := Assignment Alternatives Semi;
Statement := Assignment Pipe Alternatives Semi;
Assignment := IDENTIFIER ASSIGN;
Assignment := IDENTIFIER ASSIGN WS;
Assignment := IDENTIFIER WS ASSIGN;
Assignment := IDENTIFIER WS ASSIGN WS;
Expr := EXPR;
Expr := EXPR WS;
Semi := SEMICOLON;
Semi := SEMICOLON WS;
Pipe := PIPE;
Pipe := PIPE WS;
StateClause := AT StateList;
StateClause := AT WS StateList;
StateList := StateItem;
StateList := StateList StateItem;
StateItem := IDENTIFIER;
StateItem := IDENTIFIER WS;
Alternatives := Alternative;
Alternatives := Alternatives Pipe Alternative;
Alternative := RuleItem;
Alternative := Alternative RuleItem;
RuleItem := IDENTIFIER;
RuleItem := IDENTIFIER WS;
RuleItem := ACTION;
RuleItem := ACTION WS;
      */

const parserSymbols = [
  "WS", // 0
  "ASSIGN", // 1
  "SEMICOLON", // 2
  "PIPE", // 3
  "AT", // 4
  "EXPR", // 5
  "ACTION", // 6
  "IDENTIFIER", // 7
  "@par-gen.EOF", // 8
  "@par-gen.ERROR", // 9
  "S", // 10
  "Grammar", // 11
  "Statements", // 12
  "Statement", // 13
  "Assignment", // 14
  "Expr", // 15
  "Semi", // 16
  "Pipe", // 17
  "StateClause", // 18
  "StateList", // 19
  "StateItem", // 20
  "Alternatives", // 21
  "Alternative", // 22
  "RuleItem", // 23
  "undefined", // 24
  "undefined", // 25
  "undefined", // 26
  "undefined", // 27
  "undefined", // 28
  "undefined", // 29
  "undefined", // 30
  "undefined", // 31
];

const actionsTable = new Uint16Array(1344).fill(0xffff);
actionsTable[0] = 64; // 'state 0' -> WS -> shift (target=32, len=0) -> 'action 0'
actionsTable[7] = 128; // 'state 0' -> IDENTIFIER -> shift (target=64, len=0) -> 'action 1'
actionsTable[104] = 65534; // 'state 3' -> @par-gen.EOF -> done (target=0, len=0) -> 'action 2'
actionsTable[135] = 128; // 'state 4' -> IDENTIFIER -> shift (target=64, len=0) -> 'action 3'
actionsTable[136] = 535; // 'state 4' -> @par-gen.EOF -> reduce (target=11, len=1) -> 'action 4'
actionsTable[39] = 128; // 'state 1' -> IDENTIFIER -> shift (target=64, len=0) -> 'action 5'
actionsTable[167] = 537; // 'state 5' -> IDENTIFIER -> reduce (target=12, len=1) -> 'action 6'
actionsTable[168] = 537; // 'state 5' -> @par-gen.EOF -> reduce (target=12, len=1) -> 'action 7'
actionsTable[195] = 576; // 'state 6' -> PIPE -> shift (target=288, len=0) -> 'action 8'
actionsTable[197] = 640; // 'state 6' -> EXPR -> shift (target=320, len=0) -> 'action 9'
actionsTable[198] = 704; // 'state 6' -> ACTION -> shift (target=352, len=0) -> 'action 10'
actionsTable[199] = 704; // 'state 6' -> IDENTIFIER -> shift (target=352, len=0) -> 'action 11'
actionsTable[64] = 1088; // 'state 2' -> WS -> shift (target=544, len=0) -> 'action 12'
actionsTable[65] = 1152; // 'state 2' -> ASSIGN -> shift (target=576, len=0) -> 'action 13'
actionsTable[231] = 1049; // 'state 7' -> IDENTIFIER -> reduce (target=12, len=2) -> 'action 14'
actionsTable[232] = 1049; // 'state 7' -> @par-gen.EOF -> reduce (target=12, len=2) -> 'action 15'
actionsTable[263] = 128; // 'state 8' -> IDENTIFIER -> shift (target=64, len=0) -> 'action 16'
actionsTable[264] = 1047; // 'state 8' -> @par-gen.EOF -> reduce (target=11, len=2) -> 'action 17'
actionsTable[386] = 1216; // 'state 12' -> SEMICOLON -> shift (target=608, len=0) -> 'action 18'
actionsTable[388] = 1280; // 'state 12' -> AT -> shift (target=640, len=0) -> 'action 19'
actionsTable[320] = 1472; // 'state 10' -> WS -> shift (target=736, len=0) -> 'action 20'
actionsTable[322] = 543; // 'state 10' -> SEMICOLON -> reduce (target=15, len=1) -> 'action 21'
actionsTable[324] = 543; // 'state 10' -> AT -> reduce (target=15, len=1) -> 'action 22'
actionsTable[450] = 1216; // 'state 14' -> SEMICOLON -> shift (target=608, len=0) -> 'action 23'
actionsTable[451] = 576; // 'state 14' -> PIPE -> shift (target=288, len=0) -> 'action 24'
actionsTable[486] = 704; // 'state 15' -> ACTION -> shift (target=352, len=0) -> 'action 25'
actionsTable[487] = 704; // 'state 15' -> IDENTIFIER -> shift (target=352, len=0) -> 'action 26'
actionsTable[482] = 555; // 'state 15' -> SEMICOLON -> reduce (target=21, len=1) -> 'action 27'
actionsTable[483] = 555; // 'state 15' -> PIPE -> reduce (target=21, len=1) -> 'action 28'
actionsTable[514] = 557; // 'state 16' -> SEMICOLON -> reduce (target=22, len=1) -> 'action 29'
actionsTable[515] = 557; // 'state 16' -> PIPE -> reduce (target=22, len=1) -> 'action 30'
actionsTable[518] = 557; // 'state 16' -> ACTION -> reduce (target=22, len=1) -> 'action 31'
actionsTable[519] = 557; // 'state 16' -> IDENTIFIER -> reduce (target=22, len=1) -> 'action 32'
actionsTable[352] = 1664; // 'state 11' -> WS -> shift (target=832, len=0) -> 'action 33'
actionsTable[354] = 559; // 'state 11' -> SEMICOLON -> reduce (target=23, len=1) -> 'action 34'
actionsTable[355] = 559; // 'state 11' -> PIPE -> reduce (target=23, len=1) -> 'action 35'
actionsTable[358] = 559; // 'state 11' -> ACTION -> reduce (target=23, len=1) -> 'action 36'
actionsTable[359] = 559; // 'state 11' -> IDENTIFIER -> reduce (target=23, len=1) -> 'action 37'
actionsTable[422] = 704; // 'state 13' -> ACTION -> shift (target=352, len=0) -> 'action 38'
actionsTable[423] = 704; // 'state 13' -> IDENTIFIER -> shift (target=352, len=0) -> 'action 39'
actionsTable[288] = 1792; // 'state 9' -> WS -> shift (target=896, len=0) -> 'action 40'
actionsTable[294] = 547; // 'state 9' -> ACTION -> reduce (target=17, len=1) -> 'action 41'
actionsTable[295] = 547; // 'state 9' -> IDENTIFIER -> reduce (target=17, len=1) -> 'action 42'
actionsTable[576] = 1856; // 'state 18' -> WS -> shift (target=928, len=0) -> 'action 43'
actionsTable[579] = 1053; // 'state 18' -> PIPE -> reduce (target=14, len=2) -> 'action 44'
actionsTable[581] = 1053; // 'state 18' -> EXPR -> reduce (target=14, len=2) -> 'action 45'
actionsTable[582] = 1053; // 'state 18' -> ACTION -> reduce (target=14, len=2) -> 'action 46'
actionsTable[583] = 1053; // 'state 18' -> IDENTIFIER -> reduce (target=14, len=2) -> 'action 47'
actionsTable[545] = 1920; // 'state 17' -> ASSIGN -> shift (target=960, len=0) -> 'action 48'
actionsTable[679] = 1563; // 'state 21' -> IDENTIFIER -> reduce (target=13, len=3) -> 'action 49'
actionsTable[680] = 1563; // 'state 21' -> @par-gen.EOF -> reduce (target=13, len=3) -> 'action 50'
actionsTable[608] = 1984; // 'state 19' -> WS -> shift (target=992, len=0) -> 'action 51'
actionsTable[615] = 545; // 'state 19' -> IDENTIFIER -> reduce (target=16, len=1) -> 'action 52'
actionsTable[616] = 545; // 'state 19' -> @par-gen.EOF -> reduce (target=16, len=1) -> 'action 53'
actionsTable[706] = 1216; // 'state 22' -> SEMICOLON -> shift (target=608, len=0) -> 'action 54'
actionsTable[640] = 2112; // 'state 20' -> WS -> shift (target=1056, len=0) -> 'action 55'
actionsTable[647] = 2176; // 'state 20' -> IDENTIFIER -> shift (target=1088, len=0) -> 'action 56'
actionsTable[738] = 1055; // 'state 23' -> SEMICOLON -> reduce (target=15, len=2) -> 'action 57'
actionsTable[740] = 1055; // 'state 23' -> AT -> reduce (target=15, len=2) -> 'action 58'
actionsTable[774] = 704; // 'state 24' -> ACTION -> shift (target=352, len=0) -> 'action 59'
actionsTable[775] = 704; // 'state 24' -> IDENTIFIER -> shift (target=352, len=0) -> 'action 60'
actionsTable[802] = 1069; // 'state 25' -> SEMICOLON -> reduce (target=22, len=2) -> 'action 61'
actionsTable[803] = 1069; // 'state 25' -> PIPE -> reduce (target=22, len=2) -> 'action 62'
actionsTable[806] = 1069; // 'state 25' -> ACTION -> reduce (target=22, len=2) -> 'action 63'
actionsTable[807] = 1069; // 'state 25' -> IDENTIFIER -> reduce (target=22, len=2) -> 'action 64'
actionsTable[834] = 1071; // 'state 26' -> SEMICOLON -> reduce (target=23, len=2) -> 'action 65'
actionsTable[835] = 1071; // 'state 26' -> PIPE -> reduce (target=23, len=2) -> 'action 66'
actionsTable[838] = 1071; // 'state 26' -> ACTION -> reduce (target=23, len=2) -> 'action 67'
actionsTable[839] = 1071; // 'state 26' -> IDENTIFIER -> reduce (target=23, len=2) -> 'action 68'
actionsTable[866] = 1216; // 'state 27' -> SEMICOLON -> shift (target=608, len=0) -> 'action 69'
actionsTable[867] = 576; // 'state 27' -> PIPE -> shift (target=288, len=0) -> 'action 70'
actionsTable[902] = 1059; // 'state 28' -> ACTION -> reduce (target=17, len=2) -> 'action 71'
actionsTable[903] = 1059; // 'state 28' -> IDENTIFIER -> reduce (target=17, len=2) -> 'action 72'
actionsTable[931] = 1565; // 'state 29' -> PIPE -> reduce (target=14, len=3) -> 'action 73'
actionsTable[933] = 1565; // 'state 29' -> EXPR -> reduce (target=14, len=3) -> 'action 74'
actionsTable[934] = 1565; // 'state 29' -> ACTION -> reduce (target=14, len=3) -> 'action 75'
actionsTable[935] = 1565; // 'state 29' -> IDENTIFIER -> reduce (target=14, len=3) -> 'action 76'
actionsTable[960] = 2432; // 'state 30' -> WS -> shift (target=1216, len=0) -> 'action 77'
actionsTable[963] = 1565; // 'state 30' -> PIPE -> reduce (target=14, len=3) -> 'action 78'
actionsTable[965] = 1565; // 'state 30' -> EXPR -> reduce (target=14, len=3) -> 'action 79'
actionsTable[966] = 1565; // 'state 30' -> ACTION -> reduce (target=14, len=3) -> 'action 80'
actionsTable[967] = 1565; // 'state 30' -> IDENTIFIER -> reduce (target=14, len=3) -> 'action 81'
actionsTable[999] = 1057; // 'state 31' -> IDENTIFIER -> reduce (target=16, len=2) -> 'action 82'
actionsTable[1000] = 1057; // 'state 31' -> @par-gen.EOF -> reduce (target=16, len=2) -> 'action 83'
actionsTable[1031] = 2075; // 'state 32' -> IDENTIFIER -> reduce (target=13, len=4) -> 'action 84'
actionsTable[1032] = 2075; // 'state 32' -> @par-gen.EOF -> reduce (target=13, len=4) -> 'action 85'
actionsTable[1127] = 2176; // 'state 35' -> IDENTIFIER -> shift (target=1088, len=0) -> 'action 86'
actionsTable[1122] = 1061; // 'state 35' -> SEMICOLON -> reduce (target=18, len=2) -> 'action 87'
actionsTable[1154] = 551; // 'state 36' -> SEMICOLON -> reduce (target=19, len=1) -> 'action 88'
actionsTable[1159] = 551; // 'state 36' -> IDENTIFIER -> reduce (target=19, len=1) -> 'action 89'
actionsTable[1088] = 2560; // 'state 34' -> WS -> shift (target=1280, len=0) -> 'action 90'
actionsTable[1090] = 553; // 'state 34' -> SEMICOLON -> reduce (target=20, len=1) -> 'action 91'
actionsTable[1095] = 553; // 'state 34' -> IDENTIFIER -> reduce (target=20, len=1) -> 'action 92'
actionsTable[1063] = 2176; // 'state 33' -> IDENTIFIER -> shift (target=1088, len=0) -> 'action 93'
actionsTable[1190] = 704; // 'state 37' -> ACTION -> shift (target=352, len=0) -> 'action 94'
actionsTable[1191] = 704; // 'state 37' -> IDENTIFIER -> shift (target=352, len=0) -> 'action 95'
actionsTable[1186] = 1579; // 'state 37' -> SEMICOLON -> reduce (target=21, len=3) -> 'action 96'
actionsTable[1187] = 1579; // 'state 37' -> PIPE -> reduce (target=21, len=3) -> 'action 97'
actionsTable[1219] = 2077; // 'state 38' -> PIPE -> reduce (target=14, len=4) -> 'action 98'
actionsTable[1221] = 2077; // 'state 38' -> EXPR -> reduce (target=14, len=4) -> 'action 99'
actionsTable[1222] = 2077; // 'state 38' -> ACTION -> reduce (target=14, len=4) -> 'action 100'
actionsTable[1223] = 2077; // 'state 38' -> IDENTIFIER -> reduce (target=14, len=4) -> 'action 101'
actionsTable[1250] = 1063; // 'state 39' -> SEMICOLON -> reduce (target=19, len=2) -> 'action 102'
actionsTable[1255] = 1063; // 'state 39' -> IDENTIFIER -> reduce (target=19, len=2) -> 'action 103'
actionsTable[1282] = 1065; // 'state 40' -> SEMICOLON -> reduce (target=20, len=2) -> 'action 104'
actionsTable[1287] = 1065; // 'state 40' -> IDENTIFIER -> reduce (target=20, len=2) -> 'action 105'
actionsTable[1319] = 2176; // 'state 41' -> IDENTIFIER -> shift (target=1088, len=0) -> 'action 106'
actionsTable[1314] = 1573; // 'state 41' -> SEMICOLON -> reduce (target=18, len=3) -> 'action 107'

const gotoTable = new Uint32Array(1344);
gotoTable[11] = 100663296; // 'state 3'
gotoTable[12] = 134217728; // 'state 4'
gotoTable[13] = 167772160; // 'state 5'
gotoTable[14] = 201326592; // 'state 6'
gotoTable[141] = 234881024; // 'state 7'
gotoTable[142] = 201326592; // 'state 6'
gotoTable[44] = 268435456; // 'state 8'
gotoTable[45] = 167772160; // 'state 5'
gotoTable[46] = 201326592; // 'state 6'
gotoTable[207] = 402653184; // 'state 12'
gotoTable[213] = 469762048; // 'state 14'
gotoTable[214] = 503316480; // 'state 15'
gotoTable[215] = 536870912; // 'state 16'
gotoTable[209] = 436207616; // 'state 13'
gotoTable[269] = 234881024; // 'state 7'
gotoTable[270] = 201326592; // 'state 6'
gotoTable[400] = 704643072; // 'state 21'
gotoTable[402] = 738197504; // 'state 22'
gotoTable[464] = 704643072; // 'state 21'
gotoTable[465] = 805306368; // 'state 24'
gotoTable[503] = 838860800; // 'state 25'
gotoTable[437] = 905969664; // 'state 27'
gotoTable[438] = 503316480; // 'state 15'
gotoTable[439] = 536870912; // 'state 16'
gotoTable[720] = 1073741824; // 'state 32'
gotoTable[659] = 1174405120; // 'state 35'
gotoTable[660] = 1207959552; // 'state 36'
gotoTable[790] = 1241513984; // 'state 37'
gotoTable[791] = 536870912; // 'state 16'
gotoTable[880] = 1073741824; // 'state 32'
gotoTable[881] = 805306368; // 'state 24'
gotoTable[1140] = 1308622848; // 'state 39'
gotoTable[1075] = 1375731712; // 'state 41'
gotoTable[1076] = 1207959552; // 'state 36'
gotoTable[1207] = 838860800; // 'state 25'
gotoTable[1332] = 1308622848; // 'state 39'

const nextToken = nextTokenInitial;

/**
 * Each 32-bit stack entry packs:
 * - low 20 bits: tree pointer (tp) of the shifted/reduced CST node (up to 1,048,575 words)
 * - high 12 bits: parser state
 */
const stack = new Uint32Array(16384);

/**
 * This typed array contains the syntax tree from a parse.
 * Each CST node occupies 3 uint32 words:
 * - word 0 (tp + 0): name | (numChildren << 8)
 * - word 1 (tp + 1): end | ((end - start) << 22) (leaf) or firstChild (internal)
 * - word 2 (tp + 2): nextSibling
 * This enables 32-bit coalesced stores and fast DFS traversal on documents up to 4 MiB.
 */
const tree = new Uint32Array(524288);

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
    return (span & 0x3fffff) - (span >>> 22);
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
  const stream = typeof input === "string" ? Buffer.from(input) : input;

  let result = nextToken(stream, 0);
  let lookahead = result.state;
  let lookaheadSpan = result.end | ((result.end - result.start) << 22);

  stack[0] = 0; // starting state
  let sp = 0;
  // let the tree stack start from offset 3
  // offset 0 means an error occurred and should be used by the parser
  let tp = 3;

  while (true) {
    const top = stack[sp];
    const currentState = top >>> 20;

    const actionLookup = actionsTable[currentState + lookahead];
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

      tree[tp] = lookahead; // name (and nChildren = 0)
      tree[tp + 1] = lookaheadSpan;
      tree[(top & 0xfffff) + 2] = tp; // write the current address to the previous item as next sibling

      sp += 1;
      stack[sp] = tp | (actionLookup << 19);

      result = nextToken(stream, lookaheadSpan & 0x3fffff);
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
  }
}

export { parse };
