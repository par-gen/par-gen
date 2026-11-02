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
actionsTable[0] = 64; // 'state 0' -> WS -> shift (target=32, len=0)
actionsTable.fill(128, 1, 4); // 'state 0' -> TRUE..NULL -> shift (target=64, len=0)
actionsTable[4] = 192; // 'state 0' -> CURLY_OPEN -> shift (target=96, len=0)
actionsTable[8] = 128; // 'state 0' -> STRING -> shift (target=64, len=0)
actionsTable[9] = 256; // 'state 0' -> BRACKET_OPEN -> shift (target=128, len=0)
actionsTable[11] = 128; // 'state 0' -> NUMBER -> shift (target=64, len=0)
actionsTable.fill(128, 33, 36); // 'state 1' -> TRUE..NULL -> shift (target=64, len=0)
actionsTable[36] = 192; // 'state 1' -> CURLY_OPEN -> shift (target=96, len=0)
actionsTable[40] = 128; // 'state 1' -> STRING -> shift (target=64, len=0)
actionsTable[41] = 256; // 'state 1' -> BRACKET_OPEN -> shift (target=128, len=0)
actionsTable[43] = 128; // 'state 1' -> NUMBER -> shift (target=64, len=0)
actionsTable[64] = 547; // 'state 2' -> WS -> reduce (target=17, len=1)
actionsTable.fill(547, 69, 71); // 'state 2' -> CURLY_CLOSE..COMMA -> reduce (target=17, len=1)
actionsTable[74] = 547; // 'state 2' -> BRACKET_CLOSE -> reduce (target=17, len=1)
actionsTable[76] = 547; // 'state 2' -> @par-gen.EOF -> reduce (target=17, len=1)
actionsTable[96] = 640; // 'state 3' -> WS -> shift (target=320, len=0)
actionsTable[101] = 704; // 'state 3' -> CURLY_CLOSE -> shift (target=352, len=0)
actionsTable[104] = 768; // 'state 3' -> STRING -> shift (target=384, len=0)
actionsTable[128] = 960; // 'state 4' -> WS -> shift (target=480, len=0)
actionsTable.fill(128, 129, 132); // 'state 4' -> TRUE..NULL -> shift (target=64, len=0)
actionsTable[132] = 192; // 'state 4' -> CURLY_OPEN -> shift (target=96, len=0)
actionsTable[136] = 128; // 'state 4' -> STRING -> shift (target=64, len=0)
actionsTable[137] = 256; // 'state 4' -> BRACKET_OPEN -> shift (target=128, len=0)
actionsTable[138] = 1024; // 'state 4' -> BRACKET_CLOSE -> shift (target=512, len=0)
actionsTable[139] = 128; // 'state 4' -> NUMBER -> shift (target=64, len=0)
actionsTable[172] = 65534; // 'state 5' -> @par-gen.EOF -> done (target=0, len=0)
actionsTable[204] = 543; // 'state 6' -> @par-gen.EOF -> reduce (target=15, len=1)
actionsTable[224] = 512; // 'state 7' -> WS -> shift (target=256, len=0)
actionsTable.fill(545, 229, 231); // 'state 7' -> CURLY_CLOSE..COMMA -> reduce (target=16, len=1)
actionsTable[234] = 545; // 'state 7' -> BRACKET_CLOSE -> reduce (target=16, len=1)
actionsTable[236] = 545; // 'state 7' -> @par-gen.EOF -> reduce (target=16, len=1)
actionsTable.fill(1057, 261, 263); // 'state 8' -> CURLY_CLOSE..COMMA -> reduce (target=16, len=2)
actionsTable[266] = 1057; // 'state 8' -> BRACKET_CLOSE -> reduce (target=16, len=2)
actionsTable[268] = 1057; // 'state 8' -> @par-gen.EOF -> reduce (target=16, len=2)
actionsTable[288] = 1216; // 'state 9' -> WS -> shift (target=608, len=0)
actionsTable.fill(1057, 293, 295); // 'state 9' -> CURLY_CLOSE..COMMA -> reduce (target=16, len=2)
actionsTable[298] = 1057; // 'state 9' -> BRACKET_CLOSE -> reduce (target=16, len=2)
actionsTable[300] = 1057; // 'state 9' -> @par-gen.EOF -> reduce (target=16, len=2)
actionsTable[325] = 1280; // 'state 10' -> CURLY_CLOSE -> shift (target=640, len=0)
actionsTable[328] = 1344; // 'state 10' -> STRING -> shift (target=672, len=0)
actionsTable[352] = 1061; // 'state 11' -> WS -> reduce (target=18, len=2)
actionsTable.fill(1061, 357, 359); // 'state 11' -> CURLY_CLOSE..COMMA -> reduce (target=18, len=2)
actionsTable[362] = 1061; // 'state 11' -> BRACKET_CLOSE -> reduce (target=18, len=2)
actionsTable[364] = 1061; // 'state 11' -> @par-gen.EOF -> reduce (target=18, len=2)
actionsTable[384] = 1472; // 'state 12' -> WS -> shift (target=736, len=0)
actionsTable[391] = 1536; // 'state 12' -> COLON -> shift (target=768, len=0)
actionsTable[421] = 1280; // 'state 13' -> CURLY_CLOSE -> shift (target=640, len=0)
actionsTable[422] = 1408; // 'state 13' -> COMMA -> shift (target=704, len=0)
actionsTable.fill(551, 453, 455); // 'state 14' -> CURLY_CLOSE..COMMA -> reduce (target=19, len=1)
actionsTable.fill(128, 481, 484); // 'state 15' -> TRUE..NULL -> shift (target=64, len=0)
actionsTable[484] = 192; // 'state 15' -> CURLY_OPEN -> shift (target=96, len=0)
actionsTable[488] = 128; // 'state 15' -> STRING -> shift (target=64, len=0)
actionsTable[489] = 256; // 'state 15' -> BRACKET_OPEN -> shift (target=128, len=0)
actionsTable[490] = 1600; // 'state 15' -> BRACKET_CLOSE -> shift (target=800, len=0)
actionsTable[491] = 128; // 'state 15' -> NUMBER -> shift (target=64, len=0)
actionsTable[512] = 1067; // 'state 16' -> WS -> reduce (target=21, len=2)
actionsTable.fill(1067, 517, 519); // 'state 16' -> CURLY_CLOSE..COMMA -> reduce (target=21, len=2)
actionsTable[522] = 1067; // 'state 16' -> BRACKET_CLOSE -> reduce (target=21, len=2)
actionsTable[524] = 1067; // 'state 16' -> @par-gen.EOF -> reduce (target=21, len=2)
actionsTable[550] = 557; // 'state 17' -> COMMA -> reduce (target=22, len=1)
actionsTable[554] = 557; // 'state 17' -> BRACKET_CLOSE -> reduce (target=22, len=1)
actionsTable[582] = 1664; // 'state 18' -> COMMA -> shift (target=832, len=0)
actionsTable[586] = 1600; // 'state 18' -> BRACKET_CLOSE -> shift (target=800, len=0)
actionsTable.fill(1569, 613, 615); // 'state 19' -> CURLY_CLOSE..COMMA -> reduce (target=16, len=3)
actionsTable[618] = 1569; // 'state 19' -> BRACKET_CLOSE -> reduce (target=16, len=3)
actionsTable[620] = 1569; // 'state 19' -> @par-gen.EOF -> reduce (target=16, len=3)
actionsTable[640] = 1573; // 'state 20' -> WS -> reduce (target=18, len=3)
actionsTable.fill(1573, 645, 647); // 'state 20' -> CURLY_CLOSE..COMMA -> reduce (target=18, len=3)
actionsTable[650] = 1573; // 'state 20' -> BRACKET_CLOSE -> reduce (target=18, len=3)
actionsTable[652] = 1573; // 'state 20' -> @par-gen.EOF -> reduce (target=18, len=3)
actionsTable[672] = 1728; // 'state 21' -> WS -> shift (target=864, len=0)
actionsTable[679] = 1792; // 'state 21' -> COLON -> shift (target=896, len=0)
actionsTable[704] = 1856; // 'state 22' -> WS -> shift (target=928, len=0)
actionsTable[712] = 768; // 'state 22' -> STRING -> shift (target=384, len=0)
actionsTable[743] = 1792; // 'state 23' -> COLON -> shift (target=896, len=0)
actionsTable[768] = 64; // 'state 24' -> WS -> shift (target=32, len=0)
actionsTable.fill(128, 769, 772); // 'state 24' -> TRUE..NULL -> shift (target=64, len=0)
actionsTable[772] = 192; // 'state 24' -> CURLY_OPEN -> shift (target=96, len=0)
actionsTable[776] = 128; // 'state 24' -> STRING -> shift (target=64, len=0)
actionsTable[777] = 256; // 'state 24' -> BRACKET_OPEN -> shift (target=128, len=0)
actionsTable[779] = 128; // 'state 24' -> NUMBER -> shift (target=64, len=0)
actionsTable[800] = 1579; // 'state 25' -> WS -> reduce (target=21, len=3)
actionsTable.fill(1579, 805, 807); // 'state 25' -> CURLY_CLOSE..COMMA -> reduce (target=21, len=3)
actionsTable[810] = 1579; // 'state 25' -> BRACKET_CLOSE -> reduce (target=21, len=3)
actionsTable[812] = 1579; // 'state 25' -> @par-gen.EOF -> reduce (target=21, len=3)
actionsTable[832] = 64; // 'state 26' -> WS -> shift (target=32, len=0)
actionsTable.fill(128, 833, 836); // 'state 26' -> TRUE..NULL -> shift (target=64, len=0)
actionsTable[836] = 192; // 'state 26' -> CURLY_OPEN -> shift (target=96, len=0)
actionsTable[840] = 128; // 'state 26' -> STRING -> shift (target=64, len=0)
actionsTable[841] = 256; // 'state 26' -> BRACKET_OPEN -> shift (target=128, len=0)
actionsTable[843] = 128; // 'state 26' -> NUMBER -> shift (target=64, len=0)
actionsTable[871] = 2176; // 'state 27' -> COLON -> shift (target=1088, len=0)
actionsTable[896] = 64; // 'state 28' -> WS -> shift (target=32, len=0)
actionsTable.fill(128, 897, 900); // 'state 28' -> TRUE..NULL -> shift (target=64, len=0)
actionsTable[900] = 192; // 'state 28' -> CURLY_OPEN -> shift (target=96, len=0)
actionsTable[904] = 128; // 'state 28' -> STRING -> shift (target=64, len=0)
actionsTable[905] = 256; // 'state 28' -> BRACKET_OPEN -> shift (target=128, len=0)
actionsTable[907] = 128; // 'state 28' -> NUMBER -> shift (target=64, len=0)
actionsTable[936] = 1344; // 'state 29' -> STRING -> shift (target=672, len=0)
actionsTable.fill(1575, 965, 967); // 'state 30' -> CURLY_CLOSE..COMMA -> reduce (target=19, len=3)
actionsTable.fill(1577, 997, 999); // 'state 31' -> CURLY_CLOSE..COMMA -> reduce (target=20, len=3)
actionsTable[1030] = 1581; // 'state 32' -> COMMA -> reduce (target=22, len=3)
actionsTable[1034] = 1581; // 'state 32' -> BRACKET_CLOSE -> reduce (target=22, len=3)
actionsTable.fill(2089, 1061, 1063); // 'state 33' -> CURLY_CLOSE..COMMA -> reduce (target=20, len=4)
actionsTable[1088] = 64; // 'state 34' -> WS -> shift (target=32, len=0)
actionsTable.fill(128, 1089, 1092); // 'state 34' -> TRUE..NULL -> shift (target=64, len=0)
actionsTable[1092] = 192; // 'state 34' -> CURLY_OPEN -> shift (target=96, len=0)
actionsTable[1096] = 128; // 'state 34' -> STRING -> shift (target=64, len=0)
actionsTable[1097] = 256; // 'state 34' -> BRACKET_OPEN -> shift (target=128, len=0)
actionsTable[1099] = 128; // 'state 34' -> NUMBER -> shift (target=64, len=0)
actionsTable.fill(2601, 1125, 1127); // 'state 35' -> CURLY_CLOSE..COMMA -> reduce (target=20, len=5)

const gotoTable = new Uint32Array(1152);
gotoTable[15] = 167772160; // 'state 5'
gotoTable[16] = 201326592; // 'state 6'
gotoTable[17] = 234881024; // 'state 7'
gotoTable[18] = 67108864; // 'state 2'
gotoTable[21] = 67108864; // 'state 2'
gotoTable[49] = 301989888; // 'state 9'
gotoTable[50] = 67108864; // 'state 2'
gotoTable[53] = 67108864; // 'state 2'
gotoTable[115] = 436207616; // 'state 13'
gotoTable[116] = 469762048; // 'state 14'
gotoTable[144] = 570425344; // 'state 17'
gotoTable[145] = 234881024; // 'state 7'
gotoTable[146] = 67108864; // 'state 2'
gotoTable[149] = 67108864; // 'state 2'
gotoTable[150] = 603979776; // 'state 18'
gotoTable[497] = 301989888; // 'state 9'
gotoTable[498] = 67108864; // 'state 2'
gotoTable[501] = 67108864; // 'state 2'
gotoTable[724] = 1006632960; // 'state 30'
gotoTable[784] = 1040187392; // 'state 31'
gotoTable[785] = 234881024; // 'state 7'
gotoTable[786] = 67108864; // 'state 2'
gotoTable[789] = 67108864; // 'state 2'
gotoTable[848] = 1073741824; // 'state 32'
gotoTable[849] = 234881024; // 'state 7'
gotoTable[850] = 67108864; // 'state 2'
gotoTable[853] = 67108864; // 'state 2'
gotoTable[912] = 1107296256; // 'state 33'
gotoTable[913] = 234881024; // 'state 7'
gotoTable[914] = 67108864; // 'state 2'
gotoTable[917] = 67108864; // 'state 2'
gotoTable[1104] = 1174405120; // 'state 35'
gotoTable[1105] = 234881024; // 'state 7'
gotoTable[1106] = 67108864; // 'state 2'
gotoTable[1109] = 67108864; // 'state 2'

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

function parseCold(stream, input, sp, tp, lookahead, lookaheadSpan) {
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

    const actionLookup = actionsTable[currentState + lookahead];
    if ((actionLookup & 1) === 0) {
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

      t[tp] = lookahead;
      t[tp + 1] = lookaheadSpan;
      t[(top & 0xfffff) + 2] = tp;

      sp += 1;
      s[sp] = tp | (actionLookup << 19);

      const res = nextToken(stream, lookaheadSpan & 0x3fffff);
      lookahead = res.state;
      lookaheadSpan = res.end | ((res.end - res.start) << 22);
    } else {
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
  const stream = typeof input === "string" ? Buffer.from(input) : input;

  const firstRes = nextToken(stream, 0);
  let lookahead = firstRes.state;
  let lookaheadSpan = firstRes.end | ((firstRes.end - firstRes.start) << 22);

  const stack = arena.stack;
  const tree = arena.tree;
  if (stream.length >>> 1 > tree.length) {
    return parseCold(stream, input, 0, 3, lookahead, lookaheadSpan);
  }

  stack[0] = 0; // starting state
  let sp = 0;
  // let the tree stack start from offset 3
  // offset 0 means an error occurred and should be used by the parser
  let tp = 3;

  while (true) {
    const top = stack[sp];
    const currentState = top >>> 20;

    const actionLookup = actionsTable[currentState + lookahead];
    if ((actionLookup & 1) === 0) {
      // shift
      if (actionLookup === 0xfffe) {
        return new CstNode(stream, tree, tp - 3);
      }

      tree[tp] = lookahead; // name (and nChildren = 0)
      tree[tp + 1] = lookaheadSpan;
      tree[(top & 0xfffff) + 2] = tp; // write the current address to the previous item as next sibling

      sp += 1;
      stack[sp] = tp | (actionLookup << 19);

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
      return parseCold(stream, input, sp, tp, lookahead, lookaheadSpan);
    }
  }
}

export { parse, CstNode, TreeCursor };
