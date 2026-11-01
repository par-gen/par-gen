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
actionsTable[0] = 64; // 'state 0' -> WS -> shift (target=32, len=0)
actionsTable[7] = 128; // 'state 0' -> IDENTIFIER -> shift (target=64, len=0)
actionsTable[39] = 128; // 'state 1' -> IDENTIFIER -> shift (target=64, len=0)
actionsTable[64] = 1088; // 'state 2' -> WS -> shift (target=544, len=0)
actionsTable[65] = 1152; // 'state 2' -> ASSIGN -> shift (target=576, len=0)
actionsTable[104] = 65534; // 'state 3' -> @par-gen.EOF -> done (target=0, len=0)
actionsTable[135] = 128; // 'state 4' -> IDENTIFIER -> shift (target=64, len=0)
actionsTable[136] = 535; // 'state 4' -> @par-gen.EOF -> reduce (target=11, len=1)
actionsTable.fill(537, 167, 169); // 'state 5' -> IDENTIFIER..@par-gen.EOF -> reduce (target=12, len=1)
actionsTable[195] = 576; // 'state 6' -> PIPE -> shift (target=288, len=0)
actionsTable[197] = 640; // 'state 6' -> EXPR -> shift (target=320, len=0)
actionsTable.fill(704, 198, 200); // 'state 6' -> ACTION..IDENTIFIER -> shift (target=352, len=0)
actionsTable.fill(1049, 231, 233); // 'state 7' -> IDENTIFIER..@par-gen.EOF -> reduce (target=12, len=2)
actionsTable[263] = 128; // 'state 8' -> IDENTIFIER -> shift (target=64, len=0)
actionsTable[264] = 1047; // 'state 8' -> @par-gen.EOF -> reduce (target=11, len=2)
actionsTable[288] = 1792; // 'state 9' -> WS -> shift (target=896, len=0)
actionsTable.fill(547, 294, 296); // 'state 9' -> ACTION..IDENTIFIER -> reduce (target=17, len=1)
actionsTable[320] = 1472; // 'state 10' -> WS -> shift (target=736, len=0)
actionsTable[322] = 543; // 'state 10' -> SEMICOLON -> reduce (target=15, len=1)
actionsTable[324] = 543; // 'state 10' -> AT -> reduce (target=15, len=1)
actionsTable[352] = 1664; // 'state 11' -> WS -> shift (target=832, len=0)
actionsTable.fill(559, 354, 356); // 'state 11' -> SEMICOLON..PIPE -> reduce (target=23, len=1)
actionsTable.fill(559, 358, 360); // 'state 11' -> ACTION..IDENTIFIER -> reduce (target=23, len=1)
actionsTable[386] = 1216; // 'state 12' -> SEMICOLON -> shift (target=608, len=0)
actionsTable[388] = 1280; // 'state 12' -> AT -> shift (target=640, len=0)
actionsTable.fill(704, 422, 424); // 'state 13' -> ACTION..IDENTIFIER -> shift (target=352, len=0)
actionsTable[450] = 1216; // 'state 14' -> SEMICOLON -> shift (target=608, len=0)
actionsTable[451] = 576; // 'state 14' -> PIPE -> shift (target=288, len=0)
actionsTable.fill(555, 482, 484); // 'state 15' -> SEMICOLON..PIPE -> reduce (target=21, len=1)
actionsTable.fill(704, 486, 488); // 'state 15' -> ACTION..IDENTIFIER -> shift (target=352, len=0)
actionsTable.fill(557, 514, 516); // 'state 16' -> SEMICOLON..PIPE -> reduce (target=22, len=1)
actionsTable.fill(557, 518, 520); // 'state 16' -> ACTION..IDENTIFIER -> reduce (target=22, len=1)
actionsTable[545] = 1920; // 'state 17' -> ASSIGN -> shift (target=960, len=0)
actionsTable[576] = 1856; // 'state 18' -> WS -> shift (target=928, len=0)
actionsTable[579] = 1053; // 'state 18' -> PIPE -> reduce (target=14, len=2)
actionsTable.fill(1053, 581, 584); // 'state 18' -> EXPR..IDENTIFIER -> reduce (target=14, len=2)
actionsTable[608] = 1984; // 'state 19' -> WS -> shift (target=992, len=0)
actionsTable.fill(545, 615, 617); // 'state 19' -> IDENTIFIER..@par-gen.EOF -> reduce (target=16, len=1)
actionsTable[640] = 2112; // 'state 20' -> WS -> shift (target=1056, len=0)
actionsTable[647] = 2176; // 'state 20' -> IDENTIFIER -> shift (target=1088, len=0)
actionsTable.fill(1563, 679, 681); // 'state 21' -> IDENTIFIER..@par-gen.EOF -> reduce (target=13, len=3)
actionsTable[706] = 1216; // 'state 22' -> SEMICOLON -> shift (target=608, len=0)
actionsTable[738] = 1055; // 'state 23' -> SEMICOLON -> reduce (target=15, len=2)
actionsTable[740] = 1055; // 'state 23' -> AT -> reduce (target=15, len=2)
actionsTable.fill(704, 774, 776); // 'state 24' -> ACTION..IDENTIFIER -> shift (target=352, len=0)
actionsTable.fill(1069, 802, 804); // 'state 25' -> SEMICOLON..PIPE -> reduce (target=22, len=2)
actionsTable.fill(1069, 806, 808); // 'state 25' -> ACTION..IDENTIFIER -> reduce (target=22, len=2)
actionsTable.fill(1071, 834, 836); // 'state 26' -> SEMICOLON..PIPE -> reduce (target=23, len=2)
actionsTable.fill(1071, 838, 840); // 'state 26' -> ACTION..IDENTIFIER -> reduce (target=23, len=2)
actionsTable[866] = 1216; // 'state 27' -> SEMICOLON -> shift (target=608, len=0)
actionsTable[867] = 576; // 'state 27' -> PIPE -> shift (target=288, len=0)
actionsTable.fill(1059, 902, 904); // 'state 28' -> ACTION..IDENTIFIER -> reduce (target=17, len=2)
actionsTable[931] = 1565; // 'state 29' -> PIPE -> reduce (target=14, len=3)
actionsTable.fill(1565, 933, 936); // 'state 29' -> EXPR..IDENTIFIER -> reduce (target=14, len=3)
actionsTable[960] = 2432; // 'state 30' -> WS -> shift (target=1216, len=0)
actionsTable[963] = 1565; // 'state 30' -> PIPE -> reduce (target=14, len=3)
actionsTable.fill(1565, 965, 968); // 'state 30' -> EXPR..IDENTIFIER -> reduce (target=14, len=3)
actionsTable.fill(1057, 999, 1001); // 'state 31' -> IDENTIFIER..@par-gen.EOF -> reduce (target=16, len=2)
actionsTable.fill(2075, 1031, 1033); // 'state 32' -> IDENTIFIER..@par-gen.EOF -> reduce (target=13, len=4)
actionsTable[1063] = 2176; // 'state 33' -> IDENTIFIER -> shift (target=1088, len=0)
actionsTable[1088] = 2560; // 'state 34' -> WS -> shift (target=1280, len=0)
actionsTable[1090] = 553; // 'state 34' -> SEMICOLON -> reduce (target=20, len=1)
actionsTable[1095] = 553; // 'state 34' -> IDENTIFIER -> reduce (target=20, len=1)
actionsTable[1122] = 1061; // 'state 35' -> SEMICOLON -> reduce (target=18, len=2)
actionsTable[1127] = 2176; // 'state 35' -> IDENTIFIER -> shift (target=1088, len=0)
actionsTable[1154] = 551; // 'state 36' -> SEMICOLON -> reduce (target=19, len=1)
actionsTable[1159] = 551; // 'state 36' -> IDENTIFIER -> reduce (target=19, len=1)
actionsTable.fill(1579, 1186, 1188); // 'state 37' -> SEMICOLON..PIPE -> reduce (target=21, len=3)
actionsTable.fill(704, 1190, 1192); // 'state 37' -> ACTION..IDENTIFIER -> shift (target=352, len=0)
actionsTable[1219] = 2077; // 'state 38' -> PIPE -> reduce (target=14, len=4)
actionsTable.fill(2077, 1221, 1224); // 'state 38' -> EXPR..IDENTIFIER -> reduce (target=14, len=4)
actionsTable[1250] = 1063; // 'state 39' -> SEMICOLON -> reduce (target=19, len=2)
actionsTable[1255] = 1063; // 'state 39' -> IDENTIFIER -> reduce (target=19, len=2)
actionsTable[1282] = 1065; // 'state 40' -> SEMICOLON -> reduce (target=20, len=2)
actionsTable[1287] = 1065; // 'state 40' -> IDENTIFIER -> reduce (target=20, len=2)
actionsTable[1314] = 1573; // 'state 41' -> SEMICOLON -> reduce (target=18, len=3)
actionsTable[1319] = 2176; // 'state 41' -> IDENTIFIER -> shift (target=1088, len=0)

const gotoTable = new Uint32Array(1344);
gotoTable[11] = 100663296; // 'state 3'
gotoTable[12] = 134217728; // 'state 4'
gotoTable[13] = 167772160; // 'state 5'
gotoTable[14] = 201326592; // 'state 6'
gotoTable[44] = 268435456; // 'state 8'
gotoTable[45] = 167772160; // 'state 5'
gotoTable[46] = 201326592; // 'state 6'
gotoTable[141] = 234881024; // 'state 7'
gotoTable[142] = 201326592; // 'state 6'
gotoTable[207] = 402653184; // 'state 12'
gotoTable[209] = 436207616; // 'state 13'
gotoTable[213] = 469762048; // 'state 14'
gotoTable[214] = 503316480; // 'state 15'
gotoTable[215] = 536870912; // 'state 16'
gotoTable[269] = 234881024; // 'state 7'
gotoTable[270] = 201326592; // 'state 6'
gotoTable[400] = 704643072; // 'state 21'
gotoTable[402] = 738197504; // 'state 22'
gotoTable[437] = 905969664; // 'state 27'
gotoTable[438] = 503316480; // 'state 15'
gotoTable[439] = 536870912; // 'state 16'
gotoTable[464] = 704643072; // 'state 21'
gotoTable[465] = 805306368; // 'state 24'
gotoTable[503] = 838860800; // 'state 25'
gotoTable[659] = 1174405120; // 'state 35'
gotoTable[660] = 1207959552; // 'state 36'
gotoTable[720] = 1073741824; // 'state 32'
gotoTable[790] = 1241513984; // 'state 37'
gotoTable[791] = 536870912; // 'state 16'
gotoTable[880] = 1073741824; // 'state 32'
gotoTable[881] = 805306368; // 'state 24'
gotoTable[1075] = 1375731712; // 'state 41'
gotoTable[1076] = 1207959552; // 'state 36'
gotoTable[1140] = 1308622848; // 'state 39'
gotoTable[1207] = 838860800; // 'state 25'
gotoTable[1332] = 1308622848; // 'state 39'

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

    const actionLookup = actionsTable[currentState + lookahead];
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
      t[tp] = lookahead;
      t[tp + 1] = lookaheadSpan;
      t[(top & 0xfffff) + 2] = tp;

      sp += 1;
      s[sp] = tp | (actionLookup << 19);

      result = nextToken(stream, lookaheadSpan & 0x3fffff);
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
  const stream = typeof input === "string" ? Buffer.from(input) : input;

  let result = nextToken(stream, 0);
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
    if (tp >= tree.length - 2) {
      return parseCold(stream, input, sp, tp, lookahead, lookaheadSpan, result);
    }
  }
}

export { parse, CstNode, TreeCursor };
