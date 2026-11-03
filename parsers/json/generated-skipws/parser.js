// @ts-nocheck

import { next as nextTokenInitial } from "./lexer-initial.js";

/*
      Json := Element;
Element := Value;
Value := Object;
Value := Array;
Value := STRING;
Value := NUMBER;
Value := TRUE;
Value := FALSE;
Value := NULL;
Object := CURLY_OPEN CURLY_CLOSE;
Object := CURLY_OPEN Members CURLY_CLOSE;
Members := Member;
Members := Members COMMA Member;
Member := STRING COLON Element;
Array := BRACKET_OPEN BRACKET_CLOSE;
Array := BRACKET_OPEN Elements BRACKET_CLOSE;
Elements := Element;
Elements := Elements COMMA Element;
      */

const parserSymbols = [
  "TRUE", // 0
  "FALSE", // 1
  "NULL", // 2
  "CURLY_OPEN", // 3
  "CURLY_CLOSE", // 4
  "COMMA", // 5
  "COLON", // 6
  "STRING", // 7
  "BRACKET_OPEN", // 8
  "BRACKET_CLOSE", // 9
  "NUMBER", // 10
  "@par-gen.EOF", // 11
  "@par-gen.ERROR", // 12
  "S", // 13
  "Json", // 14
  "Element", // 15
  "Value", // 16
  "Object", // 17
  "Members", // 18
  "Member", // 19
  "Array", // 20
  "Elements", // 21
];

const SymbolNames = Object.freeze(parserSymbols);

const SymbolIds = Object.freeze({
  TRUE: 0,
  FALSE: 1,
  NULL: 2,
  CURLY_OPEN: 3,
  CURLY_CLOSE: 4,
  COMMA: 5,
  COLON: 6,
  STRING: 7,
  BRACKET_OPEN: 8,
  BRACKET_CLOSE: 9,
  NUMBER: 10,
  "@par-gen.EOF": 11,
  "@par-gen.ERROR": 12,
  S: 13,
  Json: 14,
  Element: 15,
  Value: 16,
  Object: 17,
  Members: 18,
  Member: 19,
  Array: 20,
  Elements: 21,
});

const actionsTable = new Uint16Array(352).fill(0xffff);
actionsTable.fill(33312, 0, 3); // 'state 0' -> TRUE..NULL -> shift+reduce (target=16, len=1)
actionsTable[3] = 32; // 'state 0' -> CURLY_OPEN -> shift (target=16, len=0)
actionsTable[7] = 33312; // 'state 0' -> STRING -> shift+reduce (target=16, len=1)
actionsTable[8] = 64; // 'state 0' -> BRACKET_OPEN -> shift (target=32, len=0)
actionsTable[10] = 33312; // 'state 0' -> NUMBER -> shift+reduce (target=16, len=1)
actionsTable[20] = 320; // 'state 1' -> CURLY_CLOSE -> shift (target=160, len=0)
actionsTable[23] = 352; // 'state 1' -> STRING -> shift (target=176, len=0)
actionsTable.fill(33312, 32, 35); // 'state 2' -> TRUE..NULL -> shift+reduce (target=16, len=1)
actionsTable[35] = 32; // 'state 2' -> CURLY_OPEN -> shift (target=16, len=0)
actionsTable[39] = 33312; // 'state 2' -> STRING -> shift+reduce (target=16, len=1)
actionsTable[40] = 64; // 'state 2' -> BRACKET_OPEN -> shift (target=32, len=0)
actionsTable[41] = 448; // 'state 2' -> BRACKET_CLOSE -> shift (target=224, len=0)
actionsTable[42] = 33312; // 'state 2' -> NUMBER -> shift+reduce (target=16, len=1)
actionsTable[55] = 352; // 'state 3' -> STRING -> shift (target=176, len=0)
actionsTable.fill(33312, 64, 67); // 'state 4' -> TRUE..NULL -> shift+reduce (target=16, len=1)
actionsTable[67] = 32; // 'state 4' -> CURLY_OPEN -> shift (target=16, len=0)
actionsTable[71] = 33312; // 'state 4' -> STRING -> shift+reduce (target=16, len=1)
actionsTable[72] = 64; // 'state 4' -> BRACKET_OPEN -> shift (target=32, len=0)
actionsTable[74] = 33312; // 'state 4' -> NUMBER -> shift+reduce (target=16, len=1)
actionsTable.fill(33312, 80, 83); // 'state 5' -> TRUE..NULL -> shift+reduce (target=16, len=1)
actionsTable[83] = 32; // 'state 5' -> CURLY_OPEN -> shift (target=16, len=0)
actionsTable[87] = 33312; // 'state 5' -> STRING -> shift+reduce (target=16, len=1)
actionsTable[88] = 64; // 'state 5' -> BRACKET_OPEN -> shift (target=32, len=0)
actionsTable[90] = 33312; // 'state 5' -> NUMBER -> shift+reduce (target=16, len=1)
actionsTable.fill(545, 100, 102); // 'state 6' -> CURLY_CLOSE..COMMA -> reduce (target=16, len=1)
actionsTable[105] = 545; // 'state 6' -> BRACKET_CLOSE -> reduce (target=16, len=1)
actionsTable[107] = 545; // 'state 6' -> @par-gen.EOF -> reduce (target=16, len=1)
actionsTable[123] = 65534; // 'state 7' -> @par-gen.EOF -> done (target=0, len=0)
actionsTable[139] = 541; // 'state 8' -> @par-gen.EOF -> reduce (target=14, len=1)
actionsTable.fill(543, 148, 150); // 'state 9' -> CURLY_CLOSE..COMMA -> reduce (target=15, len=1)
actionsTable[153] = 543; // 'state 9' -> BRACKET_CLOSE -> reduce (target=15, len=1)
actionsTable[155] = 543; // 'state 9' -> @par-gen.EOF -> reduce (target=15, len=1)
actionsTable.fill(1059, 164, 166); // 'state 10' -> CURLY_CLOSE..COMMA -> reduce (target=17, len=2)
actionsTable[169] = 1059; // 'state 10' -> BRACKET_CLOSE -> reduce (target=17, len=2)
actionsTable[171] = 1059; // 'state 10' -> @par-gen.EOF -> reduce (target=17, len=2)
actionsTable[182] = 128; // 'state 11' -> COLON -> shift (target=64, len=0)
actionsTable[196] = 544; // 'state 12' -> CURLY_CLOSE -> shift (target=272, len=0)
actionsTable[197] = 96; // 'state 12' -> COMMA -> shift (target=48, len=0)
actionsTable.fill(549, 212, 214); // 'state 13' -> CURLY_CLOSE..COMMA -> reduce (target=18, len=1)
actionsTable.fill(1065, 228, 230); // 'state 14' -> CURLY_CLOSE..COMMA -> reduce (target=20, len=2)
actionsTable[233] = 1065; // 'state 14' -> BRACKET_CLOSE -> reduce (target=20, len=2)
actionsTable[235] = 1065; // 'state 14' -> @par-gen.EOF -> reduce (target=20, len=2)
actionsTable[245] = 555; // 'state 15' -> COMMA -> reduce (target=21, len=1)
actionsTable[249] = 555; // 'state 15' -> BRACKET_CLOSE -> reduce (target=21, len=1)
actionsTable[261] = 160; // 'state 16' -> COMMA -> shift (target=80, len=0)
actionsTable[265] = 576; // 'state 16' -> BRACKET_CLOSE -> shift (target=288, len=0)
actionsTable.fill(1571, 276, 278); // 'state 17' -> CURLY_CLOSE..COMMA -> reduce (target=17, len=3)
actionsTable[281] = 1571; // 'state 17' -> BRACKET_CLOSE -> reduce (target=17, len=3)
actionsTable[283] = 1571; // 'state 17' -> @par-gen.EOF -> reduce (target=17, len=3)
actionsTable.fill(1577, 292, 294); // 'state 18' -> CURLY_CLOSE..COMMA -> reduce (target=20, len=3)
actionsTable[297] = 1577; // 'state 18' -> BRACKET_CLOSE -> reduce (target=20, len=3)
actionsTable[299] = 1577; // 'state 18' -> @par-gen.EOF -> reduce (target=20, len=3)
actionsTable.fill(1573, 308, 310); // 'state 19' -> CURLY_CLOSE..COMMA -> reduce (target=18, len=3)
actionsTable.fill(1575, 324, 326); // 'state 20' -> CURLY_CLOSE..COMMA -> reduce (target=19, len=3)
actionsTable[341] = 1579; // 'state 21' -> COMMA -> reduce (target=21, len=3)
actionsTable[345] = 1579; // 'state 21' -> BRACKET_CLOSE -> reduce (target=21, len=3)

const gotoTable = new Uint32Array(112);
gotoTable[14] = 939524096; // 'state 7'
gotoTable[15] = 939524366; // 'state 7' (fused reduce Json)
gotoTable[16] = 1073742095; // 'state 8' (fused reduce Element)
gotoTable[17] = 1207959824; // 'state 9' (fused reduce Value)
gotoTable[20] = 1207959824; // 'state 9' (fused reduce Value)
gotoTable[34] = 1610612736; // 'state 12'
gotoTable[35] = 1610613010; // 'state 12' (fused reduce Members)
gotoTable[47] = 2147483925; // 'state 16' (fused reduce Elements)
gotoTable[48] = 2013266191; // 'state 15' (fused reduce Element)
gotoTable[49] = 1207959824; // 'state 9' (fused reduce Value)
gotoTable[52] = 1207959824; // 'state 9' (fused reduce Value)
gotoTable[53] = 2147483648; // 'state 16'
gotoTable[67] = 2550136832; // 'state 19'
gotoTable[79] = 2684354560; // 'state 20'
gotoTable[80] = 2684354831; // 'state 20' (fused reduce Element)
gotoTable[81] = 1207959824; // 'state 9' (fused reduce Value)
gotoTable[84] = 1207959824; // 'state 9' (fused reduce Value)
gotoTable[95] = 2818572288; // 'state 21'
gotoTable[96] = 2818572559; // 'state 21' (fused reduce Element)
gotoTable[97] = 1207959824; // 'state 9' (fused reduce Value)
gotoTable[100] = 1207959824; // 'state 9' (fused reduce Value)

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

function exactLeafStart(stream, t, p, end) {
  let q = p - 2;
  while (q >= 2 && t[q] >>> 8 > 0) {
    q -= 2;
  }
  const prevEnd = q >= 2 ? (t[0] === 0 ? t[q + 1] & 0x3fffff : t[q + 1]) : 0;
  if (prevEnd >= end) {
    return end;
  }
  return nextToken(stream, prevEnd).start;
}

function nodeStart(stream, t, p) {
  if (t[p] >>> 8 > 0) {
    const mask = t[0] === 0 ? 0x7fffff : 0xffffffff;
    p = (t[p + 1] & mask) + 2;
  }
  if (t[0] !== 0) {
    return exactLeafStart(stream, t, p, t[p + 1]);
  }
  const span = t[p + 1];
  const end = span & 0x3fffff;
  const len = span >>> 22;
  return len < 1023 ? end - len : exactLeafStart(stream, t, p, end);
}

function nodeEnd(t, p) {
  while (t[p] >>> 8 > 0) {
    p -= 2;
  }
  return t[0] === 0 ? t[p + 1] & 0x3fffff : t[p + 1];
}

function nodeValue(stream, t, p) {
  return stream.subarray(nodeStart(stream, t, p), nodeEnd(t, p));
}

function nodeText(stream, t, p) {
  return Buffer.from(nodeValue(stream, t, p)).toString("utf-8");
}

class TreeCursor {
  #stream;
  #tree;
  #rootPointer;
  #pointer;
  #parentStack = new Uint32Array(128);
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
    return nodeStart(this.#stream, this.#tree, this.#pointer);
  }

  get end() {
    return nodeEnd(this.#tree, this.#pointer);
  }

  get value() {
    return nodeValue(this.#stream, this.#tree, this.#pointer);
  }

  get text() {
    return nodeText(this.#stream, this.#tree, this.#pointer);
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
    if ((d << 1) + 1 >= stack.length) {
      const next = new Uint32Array(stack.length << 1);
      next.set(stack);
      stack = this.#parentStack = next;
    }
    const idx = d << 1;
    stack[idx] = p;
    stack[idx + 1] = n - 1;
    this.#depth = d;
    let c = p - 2;
    if (n > 1) {
      const mask = t[0] === 0 ? 0x7fffff : 0xffffffff;
      let sp = this.#siblingSp;
      let sStack = this.#siblingStack;
      if (sp + n >= sStack.length) {
        const next = new Uint32Array((sStack.length + n) << 1);
        next.set(sStack);
        sStack = this.#siblingStack = next;
      }
      for (let k = 1; k < n; k++) {
        sStack[++sp] = c;
        c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & mask;
      }
      this.#siblingSp = sp;
    }
    this.#pointer = c;
    return true;
  }

  gotoNextSibling() {
    const d = this.#depth;
    if (d === 0) {
      return false;
    }
    const stack = this.#parentStack;
    const remIdx = (d << 1) + 1;
    const rem = stack[remIdx];
    if (rem === 0) {
      return false;
    }
    stack[remIdx] = rem - 1;
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
    const stack = this.#parentStack;
    const idx = d << 1;
    this.#siblingSp -= stack[idx + 1];
    this.#depth = d - 1;
    this.#pointer = stack[idx];
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
    return nodeStart(this.#stream, this.#tree, this.#pointer);
  }

  get end() {
    return nodeEnd(this.#tree, this.#pointer);
  }

  get value() {
    return nodeValue(this.#stream, this.#tree, this.#pointer);
  }

  get text() {
    return nodeText(this.#stream, this.#tree, this.#pointer);
  }

  get firstChild() {
    const t = this.#tree;
    const pointer = this.#pointer;
    const nChildren = t[pointer] >>> 8;
    if (nChildren === 0) {
      return undefined;
    }
    const mask = t[0] === 0 ? 0x7fffff : 0xffffffff;
    let c = pointer - 2;
    for (let i = 1; i < nChildren; i++) {
      c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & mask;
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
    const mask = t[0] === 0 ? 0x7fffff : 0xffffffff;
    let c = pointer - 2;
    for (let i = nChildren - 1; i > idx; i--) {
      c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & mask;
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
    const mask = t[0] === 0 ? 0x7fffff : 0xffffffff;
    let match = -1;
    let c = pointer - 2;
    for (let i = 0; i < nChildren; i++) {
      if (parserSymbols[t[c] & 0xff] === name) {
        match = c;
      }
      if (i + 1 < nChildren) {
        c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & mask;
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
    const mask = t[0] === 0 ? 0x7fffff : 0xffffffff;
    const stream = this.#stream;
    let c = pointer - 2;
    for (let i = 0; i < nChildren; i++) {
      if (parserSymbols[t[c] & 0xff] === name) {
        result.push(new CstNode(stream, t, c));
      }
      if (i + 1 < nChildren) {
        c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & mask;
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

    const mask = t[0] === 0 ? 0x7fffff : 0xffffffff;
    const stream = this.#stream;
    const children = new Array(nChildren);
    let child = pointer - 2;
    for (let i = nChildren - 1; i > 0; i--) {
      children[i] = new CstNode(stream, t, child);
      child = t[child] >>> 8 === 0 ? child - 2 : t[child + 1] & mask;
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

  reemitLossless(input) {
    const stream =
      input === undefined
        ? this.#stream
        : typeof input === "string"
        ? Buffer.from(input)
        : input;
    const t = this.#tree;
    const rootPtr = this.#pointer;
    const mask = t[0] === 0 ? 0x7fffff : 0xffffffff;
    const startPtr =
      t[rootPtr] >>> 8 === 0 ? rootPtr : (t[rootPtr + 1] & mask) + 2;
    const isRoot = startPtr === 2 && (t[1] === 0 || rootPtr === t[1]);
    const outLen = isRoot ? stream.length : this.end - this.start;
    const out = Buffer.allocUnsafe(outLen);
    let offset = 0;
    let prevEnd = isRoot ? 0 : this.start;

    for (let p = startPtr; p <= rootPtr; p += 2) {
      if (t[p] >>> 8 === 0) {
        const end = t[0] === 0 ? t[p + 1] & 0x3fffff : t[p + 1];
        if (end > prevEnd) {
          out.set(stream.subarray(prevEnd, end), offset);
          offset += end - prevEnd;
          prevEnd = end;
        }
      }
    }
    if (isRoot && prevEnd < stream.length) {
      out.set(stream.subarray(prevEnd, stream.length), offset);
      offset += stream.length - prevEnd;
    }
    return out.subarray(0, offset);
  }

  toSExpr(includeText = false) {
    const t = this.#tree;
    const stream = this.#stream;
    const mask = t[0] === 0 ? 0x7fffff : 0xffffffff;
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
          c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & mask;
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
    while (q >= 2 && (tree[q] >>> 8 > 0 || (tree[q] & 0xff) > 12)) {
      q -= 2;
    }
    offset =
      q >= 2 ? (tree[0] === 0 ? tree[q + 1] & 0x3fffff : tree[q + 1]) : 0;
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
  for (let t = 0; t <= 12; t++) {
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

function reemitLossless(cst, input) {
  return cst.reemitLossless(input);
}

function parseLarge(stream) {
  const firstRes = nextToken(stream, 0);
  let lookahead = firstRes.state;
  let lookaheadStart = firstRes.start;
  let lookaheadEnd = firstRes.end;

  let stackCap = 65536;
  let stackStates = new Uint32Array(stackCap);
  let stackTps = new Uint32Array(stackCap);
  let treeCap = 1048576;
  while (treeCap <= stream.length) {
    treeCap <<= 1;
  }
  let tree = new Uint32Array(treeCap);
  tree[0] = 1;
  const actions = actionsTable;
  const goto = gotoTable;

  let topState = 0;
  stackStates[0] = topState;
  stackTps[0] = 0;
  let sp = 0;
  let tp = 2;

  while (true) {
    const currentState = topState;
    const actionLookup = actions[currentState + lookahead];
    if ((actionLookup & 1) === 0) {
      if (actionLookup === 0xfffe) {
        tree[1] = tp - 2;
        return new CstNode(stream, tree, tp - 2);
      }

      if (sp + 2 >= stackCap) {
        stackCap <<= 1;
        const nextS = new Uint32Array(stackCap);
        nextS.set(stackStates);
        stackStates = nextS;
        const nextT = new Uint32Array(stackCap);
        nextT.set(stackTps);
        stackTps = nextT;
      }
      if (actionLookup >= 0x8000) {
        if (tp + 6 >= treeCap) {
          treeCap <<= 1;
          const nextTree = new Uint32Array(treeCap);
          nextTree.set(tree);
          tree = nextTree;
        }
        tree[tp] = lookahead;
        tree[tp + 1] = lookaheadEnd;
        const word0 = (actionLookup & 0x7fff) >>> 1;
        const rtopTp = stackTps[sp];
        tp += 2;
        tree[tp] = word0;
        tree[tp + 1] = rtopTp;
        const rawNextState = goto[currentState + (word0 & 0xff)];
        if ((rawNextState & 0xffff) !== 0) {
          tp += 2;
          tree[tp] = rawNextState & 0xffff;
          tree[tp + 1] = rtopTp;
        }
        topState = rawNextState >>> 23;
        sp += 1;
        stackStates[sp] = topState;
        stackTps[sp] = tp;
      } else {
        tree[tp] = lookahead;
        tree[tp + 1] = lookaheadEnd;
        sp += 1;
        topState = actionLookup >>> 1;
        stackStates[sp] = topState;
        stackTps[sp] = tp;
      }
      const res = nextToken(stream, lookaheadEnd);
      lookahead = res.state;
      lookaheadStart = res.start;
      lookaheadEnd = res.end;
    } else {
      if (actionLookup === 0xffff) {
        const errLen = lookaheadEnd - lookaheadStart;
        const errSpan =
          lookaheadEnd === -1
            ? -1
            : (lookaheadEnd & 0x3fffff) |
              ((errLen < 1023 ? errLen : 1023) << 22);
        throwSyntaxError(stream, tree, tp, lookahead, errSpan, currentState);
      }
      const reduceLen = actionLookup >>> 9;
      sp -= reduceLen;
      const rtopState = stackStates[sp];
      const rtopTp = stackTps[sp];
      const word0 = actionLookup >>> 1;
      tree[tp] = word0;
      tree[tp + 1] = rtopTp;
      const rawNextState = goto[rtopState + (word0 & 0xff)];
      if ((rawNextState & 0xffff) !== 0) {
        tp += 2;
        tree[tp] = rawNextState & 0xffff;
        tree[tp + 1] = rtopTp;
      }
      topState = rawNextState >>> 23;
      sp += 1;
      if (sp >= stackCap) {
        stackCap <<= 1;
        const nextS = new Uint32Array(stackCap);
        nextS.set(stackStates);
        stackStates = nextS;
        const nextT = new Uint32Array(stackCap);
        nextT.set(stackTps);
        stackTps = nextT;
      }
      stackStates[sp] = topState;
      stackTps[sp] = tp;
    }
    tp += 2;
    if (tp >= treeCap - 6) {
      treeCap <<= 1;
      const nextTree = new Uint32Array(treeCap);
      nextTree.set(tree);
      tree = nextTree;
    }
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

  const firstLen = firstRes.end - firstRes.start;
  let lookaheadSpan =
    firstRes.end | ((firstLen < 1023 ? firstLen : 1023) << 22);

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
      const currentState = top >>> 23;

      const actionLookup = actions[currentState + lookahead];
      if ((actionLookup & 1) === 0) {
        // shift
        if (actionLookup >= 0x8000) {
          if (actionLookup === 0xfffe) {
            tree[1] = tp - 2;
            return new CstNode(stream, tree, tp - 2);
          }
          tree[tp] = lookahead;
          tree[tp + 1] = lookaheadSpan;
          const word0 = (actionLookup & 0x7fff) >>> 1;
          tp += 2;
          tree[tp] = word0;
          tree[tp + 1] = top;
          const nextState = goto[currentState + (word0 & 0xff)];
          sp += 1;
          if ((nextState & 0xffff) !== 0) {
            tp += 2;
            tree[tp] = nextState & 0xffff;
            tree[tp + 1] = top;
            top = tp | (nextState & -8388608);
          } else {
            top = tp | nextState;
          }
          stack[sp] = top;
        } else {
          tree[tp] = lookahead;
          tree[tp + 1] = lookaheadSpan;
          sp += 1;
          top = tp | (actionLookup << 22);
          stack[sp] = top;
        }

        const res = nextToken(stream, lookaheadSpan & 0x3fffff);
        lookahead = res.state;

        const tokLen = res.end - res.start;
        lookaheadSpan = res.end | ((tokLen < 1023 ? tokLen : 1023) << 22);
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
        const nextState = goto[(rtop >>> 23) + (word0 & 0xff)];
        tree[tp + 1] = rtop; // prevSibling / subtreeStart - 2

        sp += 1;
        if ((nextState & 0xffff) !== 0) {
          tp += 2;
          tree[tp] = nextState & 0xffff;
          tree[tp + 1] = rtop;
          top = tp | (nextState & -8388608);
        } else {
          top = tp | nextState;
        }
        stack[sp] = top;
      }

      tp += 2;
      if (tp >= tree.length - 6) {
        break;
      }
    }
  }

  if (stream.length >= 0x3fffff) {
    return parseLarge(stream);
  }
  let len = tree.length << 1;
  while (len < stream.length >>> 1) {
    len <<= 1;
  }
  if (len > 8388608) {
    return parseLarge(stream);
  }
  arena.stack = new Uint32Array(Math.max(stack.length, len >>> 1));
  arena.tree = new Uint32Array(len);
  return parse(input);
}

export {
  parse,
  CstNode,
  TreeCursor,
  LineIndex,
  SymbolNames,
  SymbolIds,
  reemitLossless,
};
