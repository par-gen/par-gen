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
];

const actionsTable = new Uint16Array(576).fill(0xffff);
actionsTable[0] = 32; // 'state 0' -> WS -> shift (target=16, len=0)
actionsTable.fill(320, 1, 4); // 'state 0' -> TRUE..NULL -> shift (target=160, len=0)
actionsTable[4] = 64; // 'state 0' -> CURLY_OPEN -> shift (target=32, len=0)
actionsTable[8] = 320; // 'state 0' -> STRING -> shift (target=160, len=0)
actionsTable[9] = 96; // 'state 0' -> BRACKET_OPEN -> shift (target=48, len=0)
actionsTable[11] = 320; // 'state 0' -> NUMBER -> shift (target=160, len=0)
actionsTable.fill(320, 17, 20); // 'state 1' -> TRUE..NULL -> shift (target=160, len=0)
actionsTable[20] = 64; // 'state 1' -> CURLY_OPEN -> shift (target=32, len=0)
actionsTable[24] = 320; // 'state 1' -> STRING -> shift (target=160, len=0)
actionsTable[25] = 96; // 'state 1' -> BRACKET_OPEN -> shift (target=48, len=0)
actionsTable[27] = 320; // 'state 1' -> NUMBER -> shift (target=160, len=0)
actionsTable[32] = 512; // 'state 2' -> WS -> shift (target=256, len=0)
actionsTable[37] = 544; // 'state 2' -> CURLY_CLOSE -> shift (target=272, len=0)
actionsTable[40] = 576; // 'state 2' -> STRING -> shift (target=288, len=0)
actionsTable[48] = 128; // 'state 3' -> WS -> shift (target=64, len=0)
actionsTable.fill(320, 49, 52); // 'state 3' -> TRUE..NULL -> shift (target=160, len=0)
actionsTable[52] = 64; // 'state 3' -> CURLY_OPEN -> shift (target=32, len=0)
actionsTable[56] = 320; // 'state 3' -> STRING -> shift (target=160, len=0)
actionsTable[57] = 96; // 'state 3' -> BRACKET_OPEN -> shift (target=48, len=0)
actionsTable[58] = 672; // 'state 3' -> BRACKET_CLOSE -> shift (target=336, len=0)
actionsTable[59] = 320; // 'state 3' -> NUMBER -> shift (target=160, len=0)
actionsTable.fill(320, 65, 68); // 'state 4' -> TRUE..NULL -> shift (target=160, len=0)
actionsTable[68] = 64; // 'state 4' -> CURLY_OPEN -> shift (target=32, len=0)
actionsTable[72] = 320; // 'state 4' -> STRING -> shift (target=160, len=0)
actionsTable[73] = 96; // 'state 4' -> BRACKET_OPEN -> shift (target=48, len=0)
actionsTable[74] = 896; // 'state 4' -> BRACKET_CLOSE -> shift (target=448, len=0)
actionsTable[75] = 320; // 'state 4' -> NUMBER -> shift (target=160, len=0)
actionsTable[80] = 960; // 'state 5' -> WS -> shift (target=480, len=0)
actionsTable[88] = 576; // 'state 5' -> STRING -> shift (target=288, len=0)
actionsTable[96] = 32; // 'state 6' -> WS -> shift (target=16, len=0)
actionsTable.fill(320, 97, 100); // 'state 6' -> TRUE..NULL -> shift (target=160, len=0)
actionsTable[100] = 64; // 'state 6' -> CURLY_OPEN -> shift (target=32, len=0)
actionsTable[104] = 320; // 'state 6' -> STRING -> shift (target=160, len=0)
actionsTable[105] = 96; // 'state 6' -> BRACKET_OPEN -> shift (target=48, len=0)
actionsTable[107] = 320; // 'state 6' -> NUMBER -> shift (target=160, len=0)
actionsTable[112] = 32; // 'state 7' -> WS -> shift (target=16, len=0)
actionsTable.fill(320, 113, 116); // 'state 7' -> TRUE..NULL -> shift (target=160, len=0)
actionsTable[116] = 64; // 'state 7' -> CURLY_OPEN -> shift (target=32, len=0)
actionsTable[120] = 320; // 'state 7' -> STRING -> shift (target=160, len=0)
actionsTable[121] = 96; // 'state 7' -> BRACKET_OPEN -> shift (target=48, len=0)
actionsTable[123] = 320; // 'state 7' -> NUMBER -> shift (target=160, len=0)
actionsTable[128] = 32; // 'state 8' -> WS -> shift (target=16, len=0)
actionsTable.fill(320, 129, 132); // 'state 8' -> TRUE..NULL -> shift (target=160, len=0)
actionsTable[132] = 64; // 'state 8' -> CURLY_OPEN -> shift (target=32, len=0)
actionsTable[136] = 320; // 'state 8' -> STRING -> shift (target=160, len=0)
actionsTable[137] = 96; // 'state 8' -> BRACKET_OPEN -> shift (target=48, len=0)
actionsTable[139] = 320; // 'state 8' -> NUMBER -> shift (target=160, len=0)
actionsTable[144] = 32; // 'state 9' -> WS -> shift (target=16, len=0)
actionsTable.fill(320, 145, 148); // 'state 9' -> TRUE..NULL -> shift (target=160, len=0)
actionsTable[148] = 64; // 'state 9' -> CURLY_OPEN -> shift (target=32, len=0)
actionsTable[152] = 320; // 'state 9' -> STRING -> shift (target=160, len=0)
actionsTable[153] = 96; // 'state 9' -> BRACKET_OPEN -> shift (target=48, len=0)
actionsTable[155] = 320; // 'state 9' -> NUMBER -> shift (target=160, len=0)
actionsTable[160] = 547; // 'state 10' -> WS -> reduce (target=17, len=1)
actionsTable.fill(547, 165, 167); // 'state 10' -> CURLY_CLOSE..COMMA -> reduce (target=17, len=1)
actionsTable[170] = 547; // 'state 10' -> BRACKET_CLOSE -> reduce (target=17, len=1)
actionsTable[172] = 547; // 'state 10' -> @par-gen.EOF -> reduce (target=17, len=1)
actionsTable[188] = 65534; // 'state 11' -> @par-gen.EOF -> done (target=0, len=0)
actionsTable[204] = 543; // 'state 12' -> @par-gen.EOF -> reduce (target=15, len=1)
actionsTable[208] = 448; // 'state 13' -> WS -> shift (target=224, len=0)
actionsTable.fill(545, 213, 215); // 'state 13' -> CURLY_CLOSE..COMMA -> reduce (target=16, len=1)
actionsTable[218] = 545; // 'state 13' -> BRACKET_CLOSE -> reduce (target=16, len=1)
actionsTable[220] = 545; // 'state 13' -> @par-gen.EOF -> reduce (target=16, len=1)
actionsTable.fill(1057, 229, 231); // 'state 14' -> CURLY_CLOSE..COMMA -> reduce (target=16, len=2)
actionsTable[234] = 1057; // 'state 14' -> BRACKET_CLOSE -> reduce (target=16, len=2)
actionsTable[236] = 1057; // 'state 14' -> @par-gen.EOF -> reduce (target=16, len=2)
actionsTable[240] = 768; // 'state 15' -> WS -> shift (target=384, len=0)
actionsTable.fill(1057, 245, 247); // 'state 15' -> CURLY_CLOSE..COMMA -> reduce (target=16, len=2)
actionsTable[250] = 1057; // 'state 15' -> BRACKET_CLOSE -> reduce (target=16, len=2)
actionsTable[252] = 1057; // 'state 15' -> @par-gen.EOF -> reduce (target=16, len=2)
actionsTable[261] = 800; // 'state 16' -> CURLY_CLOSE -> shift (target=400, len=0)
actionsTable[264] = 832; // 'state 16' -> STRING -> shift (target=416, len=0)
actionsTable[272] = 1061; // 'state 17' -> WS -> reduce (target=18, len=2)
actionsTable.fill(1061, 277, 279); // 'state 17' -> CURLY_CLOSE..COMMA -> reduce (target=18, len=2)
actionsTable[282] = 1061; // 'state 17' -> BRACKET_CLOSE -> reduce (target=18, len=2)
actionsTable[284] = 1061; // 'state 17' -> @par-gen.EOF -> reduce (target=18, len=2)
actionsTable[288] = 864; // 'state 18' -> WS -> shift (target=432, len=0)
actionsTable[295] = 192; // 'state 18' -> COLON -> shift (target=96, len=0)
actionsTable[309] = 800; // 'state 19' -> CURLY_CLOSE -> shift (target=400, len=0)
actionsTable[310] = 160; // 'state 19' -> COMMA -> shift (target=80, len=0)
actionsTable.fill(551, 325, 327); // 'state 20' -> CURLY_CLOSE..COMMA -> reduce (target=19, len=1)
actionsTable[336] = 1067; // 'state 21' -> WS -> reduce (target=21, len=2)
actionsTable.fill(1067, 341, 343); // 'state 21' -> CURLY_CLOSE..COMMA -> reduce (target=21, len=2)
actionsTable[346] = 1067; // 'state 21' -> BRACKET_CLOSE -> reduce (target=21, len=2)
actionsTable[348] = 1067; // 'state 21' -> @par-gen.EOF -> reduce (target=21, len=2)
actionsTable[358] = 557; // 'state 22' -> COMMA -> reduce (target=22, len=1)
actionsTable[362] = 557; // 'state 22' -> BRACKET_CLOSE -> reduce (target=22, len=1)
actionsTable[374] = 224; // 'state 23' -> COMMA -> shift (target=112, len=0)
actionsTable[378] = 896; // 'state 23' -> BRACKET_CLOSE -> shift (target=448, len=0)
actionsTable.fill(1569, 389, 391); // 'state 24' -> CURLY_CLOSE..COMMA -> reduce (target=16, len=3)
actionsTable[394] = 1569; // 'state 24' -> BRACKET_CLOSE -> reduce (target=16, len=3)
actionsTable[396] = 1569; // 'state 24' -> @par-gen.EOF -> reduce (target=16, len=3)
actionsTable[400] = 1573; // 'state 25' -> WS -> reduce (target=18, len=3)
actionsTable.fill(1573, 405, 407); // 'state 25' -> CURLY_CLOSE..COMMA -> reduce (target=18, len=3)
actionsTable[410] = 1573; // 'state 25' -> BRACKET_CLOSE -> reduce (target=18, len=3)
actionsTable[412] = 1573; // 'state 25' -> @par-gen.EOF -> reduce (target=18, len=3)
actionsTable[416] = 928; // 'state 26' -> WS -> shift (target=464, len=0)
actionsTable[423] = 256; // 'state 26' -> COLON -> shift (target=128, len=0)
actionsTable[439] = 256; // 'state 27' -> COLON -> shift (target=128, len=0)
actionsTable[448] = 1579; // 'state 28' -> WS -> reduce (target=21, len=3)
actionsTable.fill(1579, 453, 455); // 'state 28' -> CURLY_CLOSE..COMMA -> reduce (target=21, len=3)
actionsTable[458] = 1579; // 'state 28' -> BRACKET_CLOSE -> reduce (target=21, len=3)
actionsTable[460] = 1579; // 'state 28' -> @par-gen.EOF -> reduce (target=21, len=3)
actionsTable[471] = 288; // 'state 29' -> COLON -> shift (target=144, len=0)
actionsTable[488] = 832; // 'state 30' -> STRING -> shift (target=416, len=0)
actionsTable.fill(1575, 501, 503); // 'state 31' -> CURLY_CLOSE..COMMA -> reduce (target=19, len=3)
actionsTable.fill(1577, 517, 519); // 'state 32' -> CURLY_CLOSE..COMMA -> reduce (target=20, len=3)
actionsTable[534] = 1581; // 'state 33' -> COMMA -> reduce (target=22, len=3)
actionsTable[538] = 1581; // 'state 33' -> BRACKET_CLOSE -> reduce (target=22, len=3)
actionsTable.fill(2089, 549, 551); // 'state 34' -> CURLY_CLOSE..COMMA -> reduce (target=20, len=4)
actionsTable.fill(2601, 565, 567); // 'state 35' -> CURLY_CLOSE..COMMA -> reduce (target=20, len=5)

const gotoTable = new Uint32Array(176);
gotoTable[15] = 184549376; // 'state 11'
gotoTable[16] = 201326592; // 'state 12'
gotoTable[17] = 218103808; // 'state 13'
gotoTable[18] = 167772160; // 'state 10'
gotoTable[21] = 167772160; // 'state 10'
gotoTable[33] = 251658240; // 'state 15'
gotoTable[34] = 167772160; // 'state 10'
gotoTable[37] = 167772160; // 'state 10'
gotoTable[51] = 318767104; // 'state 19'
gotoTable[52] = 335544320; // 'state 20'
gotoTable[64] = 369098752; // 'state 22'
gotoTable[65] = 218103808; // 'state 13'
gotoTable[66] = 167772160; // 'state 10'
gotoTable[69] = 167772160; // 'state 10'
gotoTable[70] = 385875968; // 'state 23'
gotoTable[81] = 251658240; // 'state 15'
gotoTable[82] = 167772160; // 'state 10'
gotoTable[85] = 167772160; // 'state 10'
gotoTable[100] = 520093696; // 'state 31'
gotoTable[112] = 536870912; // 'state 32'
gotoTable[113] = 218103808; // 'state 13'
gotoTable[114] = 167772160; // 'state 10'
gotoTable[117] = 167772160; // 'state 10'
gotoTable[128] = 553648128; // 'state 33'
gotoTable[129] = 218103808; // 'state 13'
gotoTable[130] = 167772160; // 'state 10'
gotoTable[133] = 167772160; // 'state 10'
gotoTable[144] = 570425344; // 'state 34'
gotoTable[145] = 218103808; // 'state 13'
gotoTable[146] = 167772160; // 'state 10'
gotoTable[149] = 167772160; // 'state 10'
gotoTable[160] = 587202560; // 'state 35'
gotoTable[161] = 218103808; // 'state 13'
gotoTable[162] = 167772160; // 'state 10'
gotoTable[165] = 167772160; // 'state 10'

const nextToken = nextTokenInitial;

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
  const stream = typeof input === "string" ? Buffer.from(input) : input;

  const firstRes = nextToken(stream, 0);
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

      const actionLookup = actions[currentState + lookahead];
      if ((actionLookup & 1) === 0) {
        // shift
        if (actionLookup === 0xfffe) {
          return new CstNode(stream, tree, tp - 3);
        }

        tree[tp] = lookahead; // name (and nChildren = 0)
        tree[tp + 1] = lookaheadSpan;
        tree[(top & 0xfffff) + 2] = tp; // write the current address to the previous item as next sibling

        sp += 1;
        top = tp | (actionLookup << 19);
        stack[sp] = top;

        const res = nextToken(stream, lookaheadSpan & 0x3fffff);
        lookahead = res.state;

        lookaheadSpan = res.end | ((res.end - res.start) << 22);
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
