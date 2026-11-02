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
Statement := StateList Semi;
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
];

const actionsTable = new Uint16Array(704).fill(0xffff);
actionsTable[0] = 32; // 'state 0' -> WS -> shift (target=16, len=0)
actionsTable[7] = 576; // 'state 0' -> IDENTIFIER -> shift (target=288, len=0)
actionsTable[23] = 576; // 'state 1' -> IDENTIFIER -> shift (target=288, len=0)
actionsTable[39] = 576; // 'state 2' -> IDENTIFIER -> shift (target=288, len=0)
actionsTable[40] = 535; // 'state 2' -> @par-gen.EOF -> reduce (target=11, len=1)
actionsTable[51] = 736; // 'state 3' -> PIPE -> shift (target=368, len=0)
actionsTable[53] = 768; // 'state 3' -> EXPR -> shift (target=384, len=0)
actionsTable.fill(800, 54, 56); // 'state 3' -> ACTION..IDENTIFIER -> shift (target=400, len=0)
actionsTable[66] = 864; // 'state 4' -> SEMICOLON -> shift (target=432, len=0)
actionsTable[71] = 896; // 'state 4' -> IDENTIFIER -> shift (target=448, len=0)
actionsTable[87] = 576; // 'state 5' -> IDENTIFIER -> shift (target=288, len=0)
actionsTable[88] = 1047; // 'state 5' -> @par-gen.EOF -> reduce (target=11, len=2)
actionsTable[98] = 864; // 'state 6' -> SEMICOLON -> shift (target=432, len=0)
actionsTable[100] = 320; // 'state 6' -> AT -> shift (target=160, len=0)
actionsTable.fill(800, 118, 120); // 'state 7' -> ACTION..IDENTIFIER -> shift (target=400, len=0)
actionsTable[130] = 864; // 'state 8' -> SEMICOLON -> shift (target=432, len=0)
actionsTable[131] = 736; // 'state 8' -> PIPE -> shift (target=368, len=0)
actionsTable.fill(555, 146, 148); // 'state 9' -> SEMICOLON..PIPE -> reduce (target=21, len=1)
actionsTable.fill(800, 150, 152); // 'state 9' -> ACTION..IDENTIFIER -> shift (target=400, len=0)
actionsTable[160] = 448; // 'state 10' -> WS -> shift (target=224, len=0)
actionsTable[167] = 896; // 'state 10' -> IDENTIFIER -> shift (target=448, len=0)
actionsTable[178] = 864; // 'state 11' -> SEMICOLON -> shift (target=432, len=0)
actionsTable.fill(800, 198, 200); // 'state 12' -> ACTION..IDENTIFIER -> shift (target=400, len=0)
actionsTable[210] = 864; // 'state 13' -> SEMICOLON -> shift (target=432, len=0)
actionsTable[211] = 736; // 'state 13' -> PIPE -> shift (target=368, len=0)
actionsTable[231] = 896; // 'state 14' -> IDENTIFIER -> shift (target=448, len=0)
actionsTable[242] = 1061; // 'state 15' -> SEMICOLON -> reduce (target=18, len=2)
actionsTable[247] = 896; // 'state 15' -> IDENTIFIER -> shift (target=448, len=0)
actionsTable.fill(1579, 258, 260); // 'state 16' -> SEMICOLON..PIPE -> reduce (target=21, len=3)
actionsTable.fill(800, 262, 264); // 'state 16' -> ACTION..IDENTIFIER -> shift (target=400, len=0)
actionsTable[274] = 1573; // 'state 17' -> SEMICOLON -> reduce (target=18, len=3)
actionsTable[279] = 896; // 'state 17' -> IDENTIFIER -> shift (target=448, len=0)
actionsTable[288] = 992; // 'state 18' -> WS -> shift (target=496, len=0)
actionsTable[289] = 1024; // 'state 18' -> ASSIGN -> shift (target=512, len=0)
actionsTable[290] = 553; // 'state 18' -> SEMICOLON -> reduce (target=20, len=1)
actionsTable[295] = 553; // 'state 18' -> IDENTIFIER -> reduce (target=20, len=1)
actionsTable[312] = 65534; // 'state 19' -> @par-gen.EOF -> done (target=0, len=0)
actionsTable.fill(537, 327, 329); // 'state 20' -> IDENTIFIER..@par-gen.EOF -> reduce (target=12, len=1)
actionsTable[338] = 551; // 'state 21' -> SEMICOLON -> reduce (target=19, len=1)
actionsTable[343] = 551; // 'state 21' -> IDENTIFIER -> reduce (target=19, len=1)
actionsTable.fill(1049, 359, 361); // 'state 22' -> IDENTIFIER..@par-gen.EOF -> reduce (target=12, len=2)
actionsTable[368] = 1184; // 'state 23' -> WS -> shift (target=592, len=0)
actionsTable.fill(547, 374, 376); // 'state 23' -> ACTION..IDENTIFIER -> reduce (target=17, len=1)
actionsTable[384] = 1088; // 'state 24' -> WS -> shift (target=544, len=0)
actionsTable[386] = 543; // 'state 24' -> SEMICOLON -> reduce (target=15, len=1)
actionsTable[388] = 543; // 'state 24' -> AT -> reduce (target=15, len=1)
actionsTable[400] = 1152; // 'state 25' -> WS -> shift (target=576, len=0)
actionsTable.fill(559, 402, 404); // 'state 25' -> SEMICOLON..PIPE -> reduce (target=23, len=1)
actionsTable.fill(559, 406, 408); // 'state 25' -> ACTION..IDENTIFIER -> reduce (target=23, len=1)
actionsTable.fill(557, 418, 420); // 'state 26' -> SEMICOLON..PIPE -> reduce (target=22, len=1)
actionsTable.fill(557, 422, 424); // 'state 26' -> ACTION..IDENTIFIER -> reduce (target=22, len=1)
actionsTable[432] = 1216; // 'state 27' -> WS -> shift (target=608, len=0)
actionsTable.fill(545, 439, 441); // 'state 27' -> IDENTIFIER..@par-gen.EOF -> reduce (target=16, len=1)
actionsTable[448] = 1248; // 'state 28' -> WS -> shift (target=624, len=0)
actionsTable[450] = 553; // 'state 28' -> SEMICOLON -> reduce (target=20, len=1)
actionsTable[455] = 553; // 'state 28' -> IDENTIFIER -> reduce (target=20, len=1)
actionsTable.fill(1051, 471, 473); // 'state 29' -> IDENTIFIER..@par-gen.EOF -> reduce (target=13, len=2)
actionsTable[482] = 1063; // 'state 30' -> SEMICOLON -> reduce (target=19, len=2)
actionsTable[487] = 1063; // 'state 30' -> IDENTIFIER -> reduce (target=19, len=2)
actionsTable[497] = 1312; // 'state 31' -> ASSIGN -> shift (target=656, len=0)
actionsTable[498] = 1065; // 'state 31' -> SEMICOLON -> reduce (target=20, len=2)
actionsTable[503] = 1065; // 'state 31' -> IDENTIFIER -> reduce (target=20, len=2)
actionsTable[512] = 1280; // 'state 32' -> WS -> shift (target=640, len=0)
actionsTable[515] = 1053; // 'state 32' -> PIPE -> reduce (target=14, len=2)
actionsTable.fill(1053, 517, 520); // 'state 32' -> EXPR..IDENTIFIER -> reduce (target=14, len=2)
actionsTable.fill(1563, 535, 537); // 'state 33' -> IDENTIFIER..@par-gen.EOF -> reduce (target=13, len=3)
actionsTable[546] = 1055; // 'state 34' -> SEMICOLON -> reduce (target=15, len=2)
actionsTable[548] = 1055; // 'state 34' -> AT -> reduce (target=15, len=2)
actionsTable.fill(1069, 562, 564); // 'state 35' -> SEMICOLON..PIPE -> reduce (target=22, len=2)
actionsTable.fill(1069, 566, 568); // 'state 35' -> ACTION..IDENTIFIER -> reduce (target=22, len=2)
actionsTable.fill(1071, 578, 580); // 'state 36' -> SEMICOLON..PIPE -> reduce (target=23, len=2)
actionsTable.fill(1071, 582, 584); // 'state 36' -> ACTION..IDENTIFIER -> reduce (target=23, len=2)
actionsTable.fill(1059, 598, 600); // 'state 37' -> ACTION..IDENTIFIER -> reduce (target=17, len=2)
actionsTable.fill(1057, 615, 617); // 'state 38' -> IDENTIFIER..@par-gen.EOF -> reduce (target=16, len=2)
actionsTable[626] = 1065; // 'state 39' -> SEMICOLON -> reduce (target=20, len=2)
actionsTable[631] = 1065; // 'state 39' -> IDENTIFIER -> reduce (target=20, len=2)
actionsTable[643] = 1565; // 'state 40' -> PIPE -> reduce (target=14, len=3)
actionsTable.fill(1565, 645, 648); // 'state 40' -> EXPR..IDENTIFIER -> reduce (target=14, len=3)
actionsTable[656] = 1376; // 'state 41' -> WS -> shift (target=688, len=0)
actionsTable[659] = 1565; // 'state 41' -> PIPE -> reduce (target=14, len=3)
actionsTable.fill(1565, 661, 664); // 'state 41' -> EXPR..IDENTIFIER -> reduce (target=14, len=3)
actionsTable.fill(2075, 679, 681); // 'state 42' -> IDENTIFIER..@par-gen.EOF -> reduce (target=13, len=4)
actionsTable[691] = 2077; // 'state 43' -> PIPE -> reduce (target=14, len=4)
actionsTable.fill(2077, 693, 696); // 'state 43' -> EXPR..IDENTIFIER -> reduce (target=14, len=4)

const gotoTable = new Uint32Array(304);
gotoTable[11] = 318767104; // 'state 19'
gotoTable[12] = 33554432; // 'state 2'
gotoTable[13] = 335544320; // 'state 20'
gotoTable[14] = 50331648; // 'state 3'
gotoTable[19] = 67108864; // 'state 4'
gotoTable[20] = 352321536; // 'state 21'
gotoTable[28] = 83886080; // 'state 5'
gotoTable[29] = 335544320; // 'state 20'
gotoTable[30] = 50331648; // 'state 3'
gotoTable[35] = 67108864; // 'state 4'
gotoTable[36] = 352321536; // 'state 21'
gotoTable[45] = 369098752; // 'state 22'
gotoTable[46] = 50331648; // 'state 3'
gotoTable[51] = 67108864; // 'state 4'
gotoTable[52] = 352321536; // 'state 21'
gotoTable[63] = 100663296; // 'state 6'
gotoTable[65] = 117440512; // 'state 7'
gotoTable[69] = 134217728; // 'state 8'
gotoTable[70] = 150994944; // 'state 9'
gotoTable[71] = 436207616; // 'state 26'
gotoTable[80] = 486539264; // 'state 29'
gotoTable[84] = 503316480; // 'state 30'
gotoTable[93] = 369098752; // 'state 22'
gotoTable[94] = 50331648; // 'state 3'
gotoTable[99] = 67108864; // 'state 4'
gotoTable[100] = 352321536; // 'state 21'
gotoTable[112] = 553648128; // 'state 33'
gotoTable[114] = 184549376; // 'state 11'
gotoTable[133] = 218103808; // 'state 13'
gotoTable[134] = 150994944; // 'state 9'
gotoTable[135] = 436207616; // 'state 26'
gotoTable[144] = 553648128; // 'state 33'
gotoTable[145] = 201326592; // 'state 12'
gotoTable[167] = 587202560; // 'state 35'
gotoTable[179] = 251658240; // 'state 15'
gotoTable[180] = 352321536; // 'state 21'
gotoTable[192] = 704643072; // 'state 42'
gotoTable[214] = 268435456; // 'state 16'
gotoTable[215] = 436207616; // 'state 26'
gotoTable[224] = 704643072; // 'state 42'
gotoTable[225] = 201326592; // 'state 12'
gotoTable[243] = 285212672; // 'state 17'
gotoTable[244] = 352321536; // 'state 21'
gotoTable[260] = 503316480; // 'state 30'
gotoTable[279] = 587202560; // 'state 35'
gotoTable[292] = 503316480; // 'state 30'

const nextToken = nextTokenInitial;

/**
 * Auto-growing stack and CST arenas starting at 16,384 words (64 KiB each),
 * which glibc malloc places in the low 32-bit brk heap ([reg*4 + disp32]).
 *
 * Each 32-bit stack entry packs:
 * - low 20 bits: tree pointer (tp) of the shifted/reduced CST node (up to 1,048,575 words)
 * - high 12 bits: parser state
 *
 * Each CST node in tree occupies 2 uint32 words (postorder layout):
 * - word 0 (tp + 0): name | (numChildren << 8)
 * - word 1 (tp + 1): end | ((end - start) << 22) (leaf) or rtop (internal: low 20 bits = prevSibling / subtreeStart - 2)
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
  #parentStack = new Uint32Array(64);
  #siblingStack = new Uint32Array(128);
  #depth = 0;
  #siblingSp = 0;

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
    if (t[p] >>> 8 > 0) {
      p = (t[p + 1] & 0xfffff) + 2;
    }
    const span = t[p + 1];
    const end = span & 0x3fffff;
    let q = p - 2;
    while (q >= 2 && t[q] >>> 8 > 0) {
      q -= 2;
    }
    const prevEnd = q >= 2 ? t[q + 1] & 0x3fffff : 0;
    return prevEnd + ((end - prevEnd - (span >>> 22)) & 0x3ff);
  }

  get end() {
    const t = this.#tree;
    let p = this.#pointer;
    while (t[p] >>> 8 > 0) {
      p -= 2;
    }
    return t[p + 1] & 0x3fffff;
  }

  get value() {
    return this.#stream.subarray(this.start, this.end);
  }

  get text() {
    return Buffer.from(this.#stream.subarray(this.start, this.end)).toString(
      "utf-8"
    );
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
    this.#siblingSp = 0;
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
    let c = p - 2;
    if (n > 1) {
      let sp = this.#siblingSp;
      let sStack = this.#siblingStack;
      if (sp + n >= sStack.length) {
        const next = new Uint32Array((sStack.length + n) << 1);
        next.set(sStack);
        sStack = this.#siblingStack = next;
      }
      for (let k = 1; k < n; k++) {
        sStack[++sp] = c;
        c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & 0xfffff;
      }
      this.#siblingSp = sp;
    }
    this.#pointer = c;
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
    const sp = this.#siblingSp;
    this.#pointer = this.#siblingStack[sp];
    this.#siblingSp = sp - 1;
    return true;
  }

  gotoParent() {
    const d = this.#depth;
    if (d === 0) {
      return false;
    }
    const entry = this.#parentStack[d];
    this.#siblingSp -= entry >>> 20;
    this.#depth = d - 1;
    this.#pointer = entry & 0xfffff;
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
    if (t[p] >>> 8 > 0) {
      p = (t[p + 1] & 0xfffff) + 2;
    }
    const span = t[p + 1];
    const end = span & 0x3fffff;
    let q = p - 2;
    while (q >= 2 && t[q] >>> 8 > 0) {
      q -= 2;
    }
    const prevEnd = q >= 2 ? t[q + 1] & 0x3fffff : 0;
    return prevEnd + ((end - prevEnd - (span >>> 22)) & 0x3ff);
  }

  get end() {
    const t = this.#tree;
    let p = this.#pointer;
    while (t[p] >>> 8 > 0) {
      p -= 2;
    }
    return t[p + 1] & 0x3fffff;
  }

  get value() {
    return this.#stream.subarray(this.start, this.end);
  }

  get text() {
    return Buffer.from(this.#stream.subarray(this.start, this.end)).toString(
      "utf-8"
    );
  }

  get firstChild() {
    const t = this.#tree;
    const pointer = this.#pointer;
    const nChildren = t[pointer] >>> 8;
    if (nChildren === 0) {
      return undefined;
    }
    let c = pointer - 2;
    for (let i = 1; i < nChildren; i++) {
      c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & 0xfffff;
    }
    return new CstNode(this.#stream, t, c);
  }

  get lastChild() {
    const t = this.#tree;
    const pointer = this.#pointer;
    if (t[pointer] >>> 8 === 0) {
      return undefined;
    }
    return new CstNode(this.#stream, t, pointer - 2);
  }

  child(index) {
    const t = this.#tree;
    const pointer = this.#pointer;
    const nChildren = t[pointer] >>> 8;
    const idx = index < 0 ? nChildren + index : index;
    if (idx < 0 || idx >= nChildren) {
      return undefined;
    }
    let c = pointer - 2;
    for (let i = nChildren - 1; i > idx; i--) {
      c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & 0xfffff;
    }
    return new CstNode(this.#stream, t, c);
  }

  childByName(name) {
    const t = this.#tree;
    const pointer = this.#pointer;
    const nChildren = t[pointer] >>> 8;
    if (nChildren === 0) {
      return undefined;
    }
    let match = -1;
    let c = pointer - 2;
    for (let i = 0; i < nChildren; i++) {
      if (parserSymbols[t[c] & 0xff] === name) {
        match = c;
      }
      if (i + 1 < nChildren) {
        c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & 0xfffff;
      }
    }
    return match === -1 ? undefined : new CstNode(this.#stream, t, match);
  }

  childrenByName(name) {
    const t = this.#tree;
    const pointer = this.#pointer;
    const nChildren = t[pointer] >>> 8;
    const result = [];
    if (nChildren === 0) {
      return result;
    }
    const stream = this.#stream;
    let c = pointer - 2;
    for (let i = 0; i < nChildren; i++) {
      if (parserSymbols[t[c] & 0xff] === name) {
        result.push(new CstNode(stream, t, c));
      }
      if (i + 1 < nChildren) {
        c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & 0xfffff;
      }
    }
    result.reverse();
    return result;
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
    let child = pointer - 2;
    for (let i = nChildren - 1; i > 0; i--) {
      children[i] = new CstNode(stream, t, child);
      child = t[child] >>> 8 === 0 ? child - 2 : t[child + 1] & 0xfffff;
    }
    children[0] = new CstNode(stream, t, child);

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

  toSExpr(includeText = false) {
    const t = this.#tree;
    const stream = this.#stream;
    const formatNode = (p) => {
      const w0 = t[p];
      const name = parserSymbols[w0 & 0xff];
      const n = w0 >>> 8;
      if (n === 0) {
        if (!includeText) {
          return "(" + name + ")";
        }
        const node = new CstNode(stream, t, p);
        return "(" + name + " " + JSON.stringify(node.text) + ")";
      }
      const childPtrs = new Uint32Array(n);
      let c = p - 2;
      for (let i = n - 1; i >= 0; i--) {
        childPtrs[i] = c;
        if (i > 0) {
          c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & 0xfffff;
        }
      }
      let out = "(" + name;
      for (let i = 0; i < n; i++) {
        out += " " + formatNode(childPtrs[i]);
      }
      return out + ")";
    };
    return formatNode(this.#pointer);
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

class LineIndex {
  #lineStarts;

  constructor(input) {
    const stream = typeof input === "string" ? Buffer.from(input) : input;
    let count = 1;
    for (let i = 0; i < stream.length; i++) {
      if (stream[i] === 10) {
        count++;
      }
    }
    const starts = new Uint32Array(count);
    starts[0] = 0;
    let idx = 1;
    for (let i = 0; i < stream.length; i++) {
      if (stream[i] === 10) {
        starts[idx++] = i + 1;
      }
    }
    this.#lineStarts = starts;
  }

  locationForOffset(offset) {
    const starts = this.#lineStarts;
    let low = 0;
    let high = starts.length - 1;
    while (low <= high) {
      const mid = (low + high) >>> 1;
      if (starts[mid] <= offset) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return {
      line: high + 1,
      column: offset - starts[high] + 1,
    };
  }
}

function throwSyntaxError(
  stream,
  tree,
  tp,
  lookahead,
  lookaheadSpan,
  stateOffset
) {
  const symName = parserSymbols[lookahead] ?? String(lookahead);
  const rawEnd = lookaheadSpan & 0x3fffff;
  let offset = 0;
  let endOffset = 0;
  if (rawEnd !== 0x3fffff) {
    endOffset = rawEnd;
    offset = endOffset - (lookaheadSpan >>> 22);
  } else if (symName === "@par-gen.EOF") {
    offset = stream.length;
    endOffset = stream.length;
  } else {
    let q = tp - 2;
    while (q >= 2 && (tree[q] >>> 8 > 0 || (tree[q] & 0xff) > 9)) {
      q -= 2;
    }
    offset = q >= 2 ? tree[q + 1] & 0x3fffff : 0;
    while (
      offset < stream.length &&
      (stream[offset] === 32 ||
        stream[offset] === 9 ||
        stream[offset] === 10 ||
        stream[offset] === 13)
    ) {
      offset++;
    }
    endOffset = offset < stream.length ? offset + 1 : offset;
  }

  let line = 1;
  let lineStart = 0;
  for (let i = 0; i < offset && i < stream.length; i++) {
    if (stream[i] === 10) {
      line++;
      lineStart = i + 1;
    }
  }
  const column = offset - lineStart + 1;

  let lineEnd = offset;
  while (
    lineEnd < stream.length &&
    stream[lineEnd] !== 10 &&
    stream[lineEnd] !== 13
  ) {
    lineEnd++;
  }

  const expected = [];
  for (let t = 0; t <= 9; t++) {
    if (actionsTable[stateOffset + t] !== 0xffff) {
      const name = parserSymbols[t];
      if (name && name !== "@par-gen.ERROR") {
        expected.push(name);
      }
    }
  }

  const tokenText =
    endOffset > offset
      ? Buffer.from(stream.subarray(offset, endOffset)).toString("utf-8")
      : "";
  const foundDesc =
    symName === "@par-gen.EOF"
      ? "@par-gen.EOF (end of input)"
      : tokenText && tokenText !== symName
      ? `${symName} (${JSON.stringify(tokenText)})`
      : symName;
  const expectedDesc =
    expected.length > 0 ? `. Expected one of: ${expected.join(", ")}` : "";

  let winStart = lineStart;
  let winEnd = lineEnd;
  let prefix = "";
  let suffix = "";
  if (lineEnd - lineStart > 120) {
    winStart = Math.max(lineStart, offset - 40);
    winEnd = Math.min(lineEnd, offset + 60);
    if (winStart > lineStart) prefix = "...";
    if (winEnd < lineEnd) suffix = "...";
  }
  const lineStr =
    prefix +
    Buffer.from(stream.subarray(winStart, winEnd)).toString("utf-8") +
    suffix;
  const lineNumStr = String(line);
  const gutterPad = " ".repeat(lineNumStr.length);
  const caretCol = Math.max(0, offset - winStart + prefix.length);
  const caretLen = Math.max(1, Math.min(endOffset - offset, winEnd - offset));
  const frame = `${gutterPad} |\n${lineNumStr} | ${lineStr}\n${gutterPad} | ${" ".repeat(
    caretCol
  )}${"^".repeat(caretLen)}`;

  const err = new SyntaxError(
    `Unexpected lookahead ${foundDesc} at line ${line}, column ${column}${expectedDesc}\n${frame}`
  );
  err.line = line;
  err.column = column;
  err.offset = offset;
  err.endOffset = endOffset;
  err.found = symName;
  err.tokenText = tokenText;
  err.expected = expected;
  throw err;
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
    // let the tree stack start from offset 2
    // offset 0 means an error occurred and should be used by the parser
    let tp = 2;

    while (true) {
      const currentState = top >>> 20;

      const actionLookup = actions[currentState + lookahead];
      if ((actionLookup & 1) === 0) {
        // shift
        if (actionLookup === 0xfffe) {
          return new CstNode(stream, tree, tp - 2);
        }

        tree[tp] = lookahead; // name (and nChildren = 0)
        tree[tp + 1] = lookaheadSpan;

        sp += 1;
        top = tp | (actionLookup << 19);
        stack[sp] = top;

        const res = nextToken(stream, lookaheadSpan & 0x3fffff);
        lookahead = res.state;

        lookaheadSpan = res.end | ((res.end - res.start) << 22);
      } else {
        // reduce
        if (actionLookup === 0xffff) {
          throwSyntaxError(
            stream,
            tree,
            tp,
            lookahead,
            lookaheadSpan,
            currentState
          );
        }
        sp -= actionLookup >>> 9;
        const rtop = stack[sp] | 0;
        const word0 = actionLookup >>> 1;
        tree[tp] = word0; // name and number of children
        const nextState = goto[(rtop >>> 20) + (word0 & 0xff)];
        tree[tp + 1] = rtop; // prevSibling / subtreeStart - 2

        sp += 1;
        top = tp | nextState;
        stack[sp] = top;
      }

      tp += 2;
      if (tp >= tree.length - 1) {
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

export { parse, CstNode, TreeCursor, LineIndex };
