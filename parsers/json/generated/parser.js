// @ts-nocheck

import { next as nextTokenInitial } from "./lexer-initial.js";

const next = nextTokenInitial;

const parserSymbols = [
  "WS",
  "TRUE",
  "FALSE",
  "NULL",
  "CURLY_OPEN",
  "CURLY_CLOSE",
  "COMMA",
  "COLON",
  "STRING",
  "BRACKET_OPEN",
  "BRACKET_CLOSE",
  "NUMBER",
  "@par-gen.EOF",
  "@par-gen.ERROR",
  "S",
  "Json",
  "Element",
  "Value",
  "Object",
  "Members",
  "Member",
  "Array",
  "Elements",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];
const reduces = [
  {},
  {},
  {
    12: 1,
    5: 1,
    6: 1,
    10: 1,
    0: 1,
  },
  {
    12: 1,
    5: 1,
    6: 1,
    10: 1,
    0: 1,
  },
  {
    12: 1,
    5: 1,
    6: 1,
    10: 1,
    0: 1,
  },
  {},
  {
    12: 1,
    5: 1,
    6: 1,
    10: 1,
    0: 1,
  },
  {},
  {
    12: 1,
    5: 1,
    6: 1,
    10: 1,
    0: 1,
  },
  {
    12: 1,
  },
  {
    12: 1,
  },
  {
    12: 1,
    5: 1,
    6: 1,
    10: 1,
  },
  {
    12: 1,
    5: 1,
    6: 1,
    10: 1,
    0: 1,
  },
  {
    12: 1,
    5: 1,
    6: 1,
    10: 1,
    0: 1,
  },
  {
    12: 2,
    5: 2,
    6: 2,
    10: 2,
  },
  {
    12: 1,
    5: 1,
    6: 1,
    10: 1,
    0: 1,
  },
  {
    12: 1,
    5: 1,
    6: 1,
    10: 1,
    0: 1,
  },
  {
    12: 1,
    5: 1,
    6: 1,
    10: 1,
    0: 1,
  },
  {},
  {
    12: 1,
    5: 1,
    6: 1,
    10: 1,
    0: 1,
  },
  {},
  {
    12: 1,
    5: 1,
    6: 1,
    10: 1,
    0: 1,
  },
  {
    12: 2,
    5: 2,
    6: 2,
    10: 2,
  },
  {
    12: 1,
    5: 1,
    6: 1,
    10: 1,
    0: 1,
  },
  {
    12: 1,
    5: 1,
    6: 1,
    10: 1,
    0: 1,
  },
  {},
  {
    12: 2,
    5: 2,
    6: 2,
    10: 2,
    0: 2,
  },
  {},
  {},
  {
    5: 1,
    6: 1,
  },
  {},
  {
    12: 2,
    5: 2,
    6: 2,
    10: 2,
    0: 2,
  },
  {
    10: 1,
    6: 1,
  },
  {},
  {
    12: 3,
    5: 3,
    6: 3,
    10: 3,
  },
  {},
  {
    12: 2,
    5: 2,
    6: 2,
    10: 2,
    0: 2,
  },
  {},
  {},
  {
    5: 1,
    6: 1,
  },
  {},
  {
    12: 2,
    5: 2,
    6: 2,
    10: 2,
    0: 2,
  },
  {
    10: 1,
    6: 1,
  },
  {},
  {
    12: 3,
    5: 3,
    6: 3,
    10: 3,
    0: 3,
  },
  {},
  {
    12: 3,
    5: 3,
    6: 3,
    10: 3,
    0: 3,
  },
  {},
  {},
  {},
  {
    12: 3,
    5: 3,
    6: 3,
    10: 3,
    0: 3,
  },
  {},
  {
    12: 3,
    5: 3,
    6: 3,
    10: 3,
    0: 3,
  },
  {
    12: 3,
    5: 3,
    6: 3,
    10: 3,
    0: 3,
  },
  {},
  {
    12: 3,
    5: 3,
    6: 3,
    10: 3,
    0: 3,
  },
  {},
  {},
  {},
  {
    12: 3,
    5: 3,
    6: 3,
    10: 3,
    0: 3,
  },
  {},
  {
    12: 3,
    5: 3,
    6: 3,
    10: 3,
    0: 3,
  },
  {},
  {},
  {},
  {
    5: 3,
    6: 3,
  },
  {
    5: 3,
    6: 3,
  },
  {},
  {
    10: 3,
    6: 3,
  },
  {},
  {},
  {},
  {
    5: 3,
    6: 3,
  },
  {
    5: 3,
    6: 3,
  },
  {},
  {
    10: 3,
    6: 3,
  },
  {
    5: 4,
    6: 4,
  },
  {},
  {
    5: 4,
    6: 4,
  },
  {
    5: 4,
    6: 4,
  },
  {},
  {
    5: 4,
    6: 4,
  },
  {
    5: 5,
    6: 5,
  },
  {
    5: 5,
    6: 5,
  },
];
const goto = {
  0: {
    15: 9,
    16: 10,
    17: 11,
    18: 12,
    21: 13,
  },
  1: {
    17: 22,
    18: 23,
    21: 24,
  },
  5: {
    19: 28,
    20: 29,
  },
  7: {
    22: 33,
    16: 32,
    17: 11,
    18: 12,
    21: 13,
  },
  18: {
    19: 38,
    20: 39,
  },
  20: {
    22: 43,
    16: 42,
    17: 11,
    18: 12,
    21: 13,
  },
  30: {
    17: 22,
    18: 12,
    21: 13,
  },
  40: {
    17: 22,
    18: 12,
    21: 13,
  },
  47: {
    20: 65,
  },
  49: {
    16: 66,
    17: 11,
    18: 12,
    21: 13,
  },
  51: {
    16: 68,
    17: 11,
    18: 12,
    21: 13,
  },
  56: {
    20: 72,
  },
  58: {
    16: 73,
    17: 11,
    18: 12,
    21: 13,
  },
  60: {
    16: 75,
    17: 11,
    18: 12,
    21: 13,
  },
  63: {
    16: 76,
    17: 11,
    18: 12,
    21: 13,
  },
  67: {
    16: 78,
    17: 11,
    18: 12,
    21: 13,
  },
  70: {
    16: 79,
    17: 11,
    18: 12,
    21: 13,
  },
  74: {
    16: 81,
    17: 11,
    18: 12,
    21: 13,
  },
  77: {
    16: 82,
    17: 11,
    18: 12,
    21: 13,
  },
  80: {
    16: 83,
    17: 11,
    18: 12,
    21: 13,
  },
};

const stack = new Uint16Array(32768);
const tree = new Uint16Array(32768);

const createProxy = (stream, tree, pointer) => {
  return new Proxy(
    {},
    {
      get(target, prop, receiver) {
        const nChildren = tree[pointer + 3];

        switch (prop) {
          case "name":
            return parserSymbols[tree[pointer]];
          case "start":
            return nChildren > 0 ? receiver.items[0].start : tree[pointer + 1];
          case "end":
            return nChildren > 0
              ? receiver.items[nChildren - 1].end
              : tree[pointer + 2];
          case "value":
            return stream.subarray(receiver.start, receiver.end);
          case "items":
            if (nChildren === 0) {
              return undefined;
            }

            const firstChild = tree[pointer + 4];
            const children = [createProxy(stream, tree, firstChild)];
            let nextChild = tree[firstChild + 5];

            for (let i = 1; i < nChildren; i++) {
              children.push(createProxy(stream, tree, nextChild));
              nextChild = tree[nextChild + 5];
            }

            return children;
          case "__tree":
            return tree;
          case "__pointer":
            return pointer;
        }
      },
      ownKeys(target) {
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
    }
  );
};

function parse(input) {
  const stream = Buffer.isBuffer(input) ? input : Buffer.from(input);
  let lexer = next(stream, 0);
  stack[0] = 0;
  stack[1] = 0;
  let sp = 1;
  let tp = 6;

  do {
    switch (stack[sp]) {
      case 0:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 1;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 1:
              {
                // TRUE
                // shift

                tree[tp] = 1; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 2;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 2:
              {
                // FALSE
                // shift

                tree[tp] = 2; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 3;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 3:
              {
                // NULL
                // shift

                tree[tp] = 3; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 4;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift

                tree[tp] = 4; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 5;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 6;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift

                tree[tp] = 9; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 7;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 11:
              {
                // NUMBER
                // shift

                tree[tp] = 11; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 8;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 15:
              {
                // Json
                // shift

                tree[tp] = 15; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 9;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 16:
              {
                // Element
                // shift

                tree[tp] = 16; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 10;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 17:
              {
                // Value
                // shift

                tree[tp] = 17; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 11;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 18:
              {
                // Object
                // shift

                tree[tp] = 18; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 12;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 21:
              {
                // Array
                // shift

                tree[tp] = 21; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 13;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 1:
        {
          switch (lexer.state) {
            case 1:
              {
                // TRUE
                // shift

                tree[tp] = 1; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 15;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 2:
              {
                // FALSE
                // shift

                tree[tp] = 2; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 16;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 3:
              {
                // NULL
                // shift

                tree[tp] = 3; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 17;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift

                tree[tp] = 4; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 18;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 19;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift

                tree[tp] = 9; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 20;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 11:
              {
                // NUMBER
                // shift

                tree[tp] = 11; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 21;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 17:
              {
                // Value
                // shift

                tree[tp] = 17; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 22;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 18:
              {
                // Object
                // shift

                tree[tp] = 18; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 23;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 21:
              {
                // Array
                // shift

                tree[tp] = 21; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 24;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 2:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 3:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 4:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 5:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 25;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // shift

                tree[tp] = 5; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 26;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 27;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 19:
              {
                // Members
                // shift

                tree[tp] = 19; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 28;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 20:
              {
                // Member
                // shift

                tree[tp] = 20; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 29;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 6:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 7:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 30;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 1:
              {
                // TRUE
                // shift

                tree[tp] = 1; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 2;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 2:
              {
                // FALSE
                // shift

                tree[tp] = 2; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 3;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 3:
              {
                // NULL
                // shift

                tree[tp] = 3; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 4;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift

                tree[tp] = 4; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 5;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 6;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift

                tree[tp] = 9; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 7;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // shift

                tree[tp] = 10; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 31;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 11:
              {
                // NUMBER
                // shift

                tree[tp] = 11; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 8;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 16:
              {
                // Element
                // shift

                tree[tp] = 16; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 32;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 17:
              {
                // Value
                // shift

                tree[tp] = 17; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 11;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 18:
              {
                // Object
                // shift

                tree[tp] = 18; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 12;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 21:
              {
                // Array
                // shift

                tree[tp] = 21; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 13;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 22:
              {
                // Elements
                // shift

                tree[tp] = 22; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 33;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 8:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 9:
        {
          switch (lexer.state) {
            case 12:
              {
                // @par-gen.EOF
                // done
                return createProxy(stream, tree, tp - 6);
              }
              break;
          }
        }
        break;

      case 10:
        {
          switch (lexer.state) {
            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 15; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][15];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 11:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 14;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 16; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][16];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 16; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][16];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 16; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][16];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 16; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][16];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 12:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 13:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 14:
        {
          switch (lexer.state) {
            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 16; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][16];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 16; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][16];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 16; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][16];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 16; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][16];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 15:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 16:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 17:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 18:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 35;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // shift

                tree[tp] = 5; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 36;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 37;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 19:
              {
                // Members
                // shift

                tree[tp] = 19; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 38;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 20:
              {
                // Member
                // shift

                tree[tp] = 20; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 39;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 19:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 20:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 40;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 1:
              {
                // TRUE
                // shift

                tree[tp] = 1; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 2;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 2:
              {
                // FALSE
                // shift

                tree[tp] = 2; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 3;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 3:
              {
                // NULL
                // shift

                tree[tp] = 3; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 4;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift

                tree[tp] = 4; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 5;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 6;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift

                tree[tp] = 9; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 7;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // shift

                tree[tp] = 10; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 41;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 11:
              {
                // NUMBER
                // shift

                tree[tp] = 11; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 8;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 16:
              {
                // Element
                // shift

                tree[tp] = 16; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 42;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 17:
              {
                // Value
                // shift

                tree[tp] = 17; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 11;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 18:
              {
                // Object
                // shift

                tree[tp] = 18; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 12;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 21:
              {
                // Array
                // shift

                tree[tp] = 21; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 13;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 22:
              {
                // Elements
                // shift

                tree[tp] = 22; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 43;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 21:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 22:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 34;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 16; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][16];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 16; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][16];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 16; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][16];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 16; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][16];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 23:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 24:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 17; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][17];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 25:
        {
          switch (lexer.state) {
            case 5:
              {
                // CURLY_CLOSE
                // shift

                tree[tp] = 5; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 44;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 45;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 26:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 27:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 48;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 7:
              {
                // COLON
                // shift

                tree[tp] = 7; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 49;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 28:
        {
          switch (lexer.state) {
            case 5:
              {
                // CURLY_CLOSE
                // shift

                tree[tp] = 5; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 46;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // shift

                tree[tp] = 6; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 47;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 29:
        {
          switch (lexer.state) {
            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 19; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][19];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 19; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][19];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 30:
        {
          switch (lexer.state) {
            case 1:
              {
                // TRUE
                // shift

                tree[tp] = 1; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 2;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 2:
              {
                // FALSE
                // shift

                tree[tp] = 2; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 3;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 3:
              {
                // NULL
                // shift

                tree[tp] = 3; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 4;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift

                tree[tp] = 4; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 5;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 6;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift

                tree[tp] = 9; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 7;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // shift

                tree[tp] = 10; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 50;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 11:
              {
                // NUMBER
                // shift

                tree[tp] = 11; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 8;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 17:
              {
                // Value
                // shift

                tree[tp] = 17; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 22;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 18:
              {
                // Object
                // shift

                tree[tp] = 18; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 12;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 21:
              {
                // Array
                // shift

                tree[tp] = 21; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 13;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 31:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 32:
        {
          switch (lexer.state) {
            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 22; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][22];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 22; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][22];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 33:
        {
          switch (lexer.state) {
            case 6:
              {
                // COMMA
                // shift

                tree[tp] = 6; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 51;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // shift

                tree[tp] = 10; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 52;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 34:
        {
          switch (lexer.state) {
            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 16; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][16];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 16; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][16];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 16; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][16];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 16; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][16];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 35:
        {
          switch (lexer.state) {
            case 5:
              {
                // CURLY_CLOSE
                // shift

                tree[tp] = 5; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 53;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 54;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 36:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 37:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 57;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 7:
              {
                // COLON
                // shift

                tree[tp] = 7; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 58;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 38:
        {
          switch (lexer.state) {
            case 5:
              {
                // CURLY_CLOSE
                // shift

                tree[tp] = 5; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 55;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // shift

                tree[tp] = 6; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 56;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 39:
        {
          switch (lexer.state) {
            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 19; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][19];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 19; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][19];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 40:
        {
          switch (lexer.state) {
            case 1:
              {
                // TRUE
                // shift

                tree[tp] = 1; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 2;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 2:
              {
                // FALSE
                // shift

                tree[tp] = 2; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 3;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 3:
              {
                // NULL
                // shift

                tree[tp] = 3; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 4;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift

                tree[tp] = 4; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 5;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 6;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift

                tree[tp] = 9; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 7;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // shift

                tree[tp] = 10; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 59;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 11:
              {
                // NUMBER
                // shift

                tree[tp] = 11; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 8;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 17:
              {
                // Value
                // shift

                tree[tp] = 17; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 22;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 18:
              {
                // Object
                // shift

                tree[tp] = 18; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 12;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 21:
              {
                // Array
                // shift

                tree[tp] = 21; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 13;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 41:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 42:
        {
          switch (lexer.state) {
            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 22; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][22];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 22; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][22];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 43:
        {
          switch (lexer.state) {
            case 6:
              {
                // COMMA
                // shift

                tree[tp] = 6; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 60;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // shift

                tree[tp] = 10; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 61;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 44:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 45:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 62;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 7:
              {
                // COLON
                // shift

                tree[tp] = 7; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 63;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 46:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 47:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 64;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 27;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 20:
              {
                // Member
                // shift

                tree[tp] = 20; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 65;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 48:
        {
          switch (lexer.state) {
            case 7:
              {
                // COLON
                // shift

                tree[tp] = 7; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 67;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 49:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 1;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 1:
              {
                // TRUE
                // shift

                tree[tp] = 1; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 2;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 2:
              {
                // FALSE
                // shift

                tree[tp] = 2; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 3;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 3:
              {
                // NULL
                // shift

                tree[tp] = 3; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 4;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift

                tree[tp] = 4; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 5;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 6;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift

                tree[tp] = 9; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 7;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 11:
              {
                // NUMBER
                // shift

                tree[tp] = 11; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 8;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 16:
              {
                // Element
                // shift

                tree[tp] = 16; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 66;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 17:
              {
                // Value
                // shift

                tree[tp] = 17; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 11;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 18:
              {
                // Object
                // shift

                tree[tp] = 18; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 12;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 21:
              {
                // Array
                // shift

                tree[tp] = 21; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 13;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 50:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 51:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 1;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 1:
              {
                // TRUE
                // shift

                tree[tp] = 1; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 2;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 2:
              {
                // FALSE
                // shift

                tree[tp] = 2; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 3;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 3:
              {
                // NULL
                // shift

                tree[tp] = 3; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 4;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift

                tree[tp] = 4; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 5;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 6;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift

                tree[tp] = 9; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 7;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 11:
              {
                // NUMBER
                // shift

                tree[tp] = 11; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 8;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 16:
              {
                // Element
                // shift

                tree[tp] = 16; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 68;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 17:
              {
                // Value
                // shift

                tree[tp] = 17; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 11;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 18:
              {
                // Object
                // shift

                tree[tp] = 18; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 12;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 21:
              {
                // Array
                // shift

                tree[tp] = 21; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 13;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 52:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 53:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 54:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 69;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 7:
              {
                // COLON
                // shift

                tree[tp] = 7; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 70;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 55:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 18; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][18];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 56:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 71;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 27;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 20:
              {
                // Member
                // shift

                tree[tp] = 20; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 72;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 57:
        {
          switch (lexer.state) {
            case 7:
              {
                // COLON
                // shift

                tree[tp] = 7; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 74;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 58:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 1;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 1:
              {
                // TRUE
                // shift

                tree[tp] = 1; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 2;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 2:
              {
                // FALSE
                // shift

                tree[tp] = 2; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 3;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 3:
              {
                // NULL
                // shift

                tree[tp] = 3; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 4;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift

                tree[tp] = 4; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 5;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 6;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift

                tree[tp] = 9; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 7;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 11:
              {
                // NUMBER
                // shift

                tree[tp] = 11; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 8;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 16:
              {
                // Element
                // shift

                tree[tp] = 16; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 73;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 17:
              {
                // Value
                // shift

                tree[tp] = 17; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 11;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 18:
              {
                // Object
                // shift

                tree[tp] = 18; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 12;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 21:
              {
                // Array
                // shift

                tree[tp] = 21; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 13;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 59:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 60:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 1;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 1:
              {
                // TRUE
                // shift

                tree[tp] = 1; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 2;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 2:
              {
                // FALSE
                // shift

                tree[tp] = 2; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 3;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 3:
              {
                // NULL
                // shift

                tree[tp] = 3; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 4;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift

                tree[tp] = 4; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 5;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 6;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift

                tree[tp] = 9; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 7;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 11:
              {
                // NUMBER
                // shift

                tree[tp] = 11; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 8;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 16:
              {
                // Element
                // shift

                tree[tp] = 16; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 75;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 17:
              {
                // Value
                // shift

                tree[tp] = 17; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 11;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 18:
              {
                // Object
                // shift

                tree[tp] = 18; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 12;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 21:
              {
                // Array
                // shift

                tree[tp] = 21; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 13;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 61:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 21; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][21];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 62:
        {
          switch (lexer.state) {
            case 7:
              {
                // COLON
                // shift

                tree[tp] = 7; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 77;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 63:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 1;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 1:
              {
                // TRUE
                // shift

                tree[tp] = 1; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 2;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 2:
              {
                // FALSE
                // shift

                tree[tp] = 2; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 3;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 3:
              {
                // NULL
                // shift

                tree[tp] = 3; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 4;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift

                tree[tp] = 4; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 5;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 6;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift

                tree[tp] = 9; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 7;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 11:
              {
                // NUMBER
                // shift

                tree[tp] = 11; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 8;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 16:
              {
                // Element
                // shift

                tree[tp] = 16; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 76;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 17:
              {
                // Value
                // shift

                tree[tp] = 17; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 11;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 18:
              {
                // Object
                // shift

                tree[tp] = 18; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 12;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 21:
              {
                // Array
                // shift

                tree[tp] = 21; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 13;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 64:
        {
          switch (lexer.state) {
            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 45;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 65:
        {
          switch (lexer.state) {
            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 19; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][19];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 19; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][19];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 66:
        {
          switch (lexer.state) {
            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 20; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][20];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 20; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][20];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 67:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 1;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 1:
              {
                // TRUE
                // shift

                tree[tp] = 1; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 2;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 2:
              {
                // FALSE
                // shift

                tree[tp] = 2; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 3;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 3:
              {
                // NULL
                // shift

                tree[tp] = 3; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 4;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift

                tree[tp] = 4; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 5;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 6;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift

                tree[tp] = 9; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 7;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 11:
              {
                // NUMBER
                // shift

                tree[tp] = 11; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 8;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 16:
              {
                // Element
                // shift

                tree[tp] = 16; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 78;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 17:
              {
                // Value
                // shift

                tree[tp] = 17; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 11;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 18:
              {
                // Object
                // shift

                tree[tp] = 18; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 12;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 21:
              {
                // Array
                // shift

                tree[tp] = 21; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 13;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 68:
        {
          switch (lexer.state) {
            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 22; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][22];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 22; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][22];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 69:
        {
          switch (lexer.state) {
            case 7:
              {
                // COLON
                // shift

                tree[tp] = 7; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 80;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 70:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 1;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 1:
              {
                // TRUE
                // shift

                tree[tp] = 1; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 2;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 2:
              {
                // FALSE
                // shift

                tree[tp] = 2; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 3;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 3:
              {
                // NULL
                // shift

                tree[tp] = 3; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 4;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift

                tree[tp] = 4; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 5;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 6;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift

                tree[tp] = 9; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 7;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 11:
              {
                // NUMBER
                // shift

                tree[tp] = 11; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 8;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 16:
              {
                // Element
                // shift

                tree[tp] = 16; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 79;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 17:
              {
                // Value
                // shift

                tree[tp] = 17; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 11;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 18:
              {
                // Object
                // shift

                tree[tp] = 18; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 12;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 21:
              {
                // Array
                // shift

                tree[tp] = 21; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 13;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 71:
        {
          switch (lexer.state) {
            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 45;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 72:
        {
          switch (lexer.state) {
            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 19; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][19];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 19; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][19];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 73:
        {
          switch (lexer.state) {
            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 20; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][20];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 20; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][20];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 74:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 1;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 1:
              {
                // TRUE
                // shift

                tree[tp] = 1; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 2;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 2:
              {
                // FALSE
                // shift

                tree[tp] = 2; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 3;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 3:
              {
                // NULL
                // shift

                tree[tp] = 3; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 4;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift

                tree[tp] = 4; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 5;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 6;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift

                tree[tp] = 9; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 7;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 11:
              {
                // NUMBER
                // shift

                tree[tp] = 11; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 8;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 16:
              {
                // Element
                // shift

                tree[tp] = 16; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 81;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 17:
              {
                // Value
                // shift

                tree[tp] = 17; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 11;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 18:
              {
                // Object
                // shift

                tree[tp] = 18; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 12;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 21:
              {
                // Array
                // shift

                tree[tp] = 21; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 13;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 75:
        {
          switch (lexer.state) {
            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 22; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][22];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 22; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][22];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 76:
        {
          switch (lexer.state) {
            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 20; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][20];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 20; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][20];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 77:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 1;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 1:
              {
                // TRUE
                // shift

                tree[tp] = 1; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 2;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 2:
              {
                // FALSE
                // shift

                tree[tp] = 2; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 3;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 3:
              {
                // NULL
                // shift

                tree[tp] = 3; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 4;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift

                tree[tp] = 4; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 5;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 6;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift

                tree[tp] = 9; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 7;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 11:
              {
                // NUMBER
                // shift

                tree[tp] = 11; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 8;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 16:
              {
                // Element
                // shift

                tree[tp] = 16; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 82;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 17:
              {
                // Value
                // shift

                tree[tp] = 17; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 11;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 18:
              {
                // Object
                // shift

                tree[tp] = 18; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 12;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 21:
              {
                // Array
                // shift

                tree[tp] = 21; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 13;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 78:
        {
          switch (lexer.state) {
            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 20; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][20];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 20; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][20];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 79:
        {
          switch (lexer.state) {
            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 20; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][20];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 20; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][20];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 80:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift

                tree[tp] = 0; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 1;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 1:
              {
                // TRUE
                // shift

                tree[tp] = 1; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 2;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 2:
              {
                // FALSE
                // shift

                tree[tp] = 2; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 3;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 3:
              {
                // NULL
                // shift

                tree[tp] = 3; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 4;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift

                tree[tp] = 4; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 5;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 8:
              {
                // STRING
                // shift

                tree[tp] = 8; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 6;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift

                tree[tp] = 9; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 7;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 11:
              {
                // NUMBER
                // shift

                tree[tp] = 11; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 8;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 16:
              {
                // Element
                // shift

                tree[tp] = 16; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 83;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 17:
              {
                // Value
                // shift

                tree[tp] = 17; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 11;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 18:
              {
                // Object
                // shift

                tree[tp] = 18; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 12;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;

            case 21:
              {
                // Array
                // shift

                tree[tp] = 21; // name
                tree[tp + 1] = lexer.start;
                tree[tp + 2] = lexer.end;
                tree[tp + 3] = 0; // leaf nodes have no children
                tree[tp + 4] = 0; // leaf nodes have first child
                tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = 13;
                lexer = next(stream, lexer.end);
                tp += 6;
              }
              break;
          }
        }
        break;

      case 81:
        {
          switch (lexer.state) {
            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 20; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][20];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 20; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][20];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 82:
        {
          switch (lexer.state) {
            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 20; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][20];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 20; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][20];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;

      case 83:
        {
          switch (lexer.state) {
            case 5:
              {
                // CURLY_CLOSE
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 20; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][20];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                const n = reduces[stack[sp]][lexer.state];
                sp -= n * 2;

                tree[tp] = 20; // name
                tree[tp + 1] = -1; // start
                tree[tp + 2] = -1; // end
                tree[tp + 3] = n; // number of children
                tree[tp + 4] = stack[sp + 1]; // first child
                tree[stack[sp - 1] + 5] = tp; // next sibling

                const next = goto[stack[sp]][20];
                sp += 2;
                stack[sp - 1] = tp;
                stack[sp] = next;
                tp += 6;
              }
              break;
          }
        }
        break;
    }
  } while (true);
}

export { parse };
