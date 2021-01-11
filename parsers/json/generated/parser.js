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

function parse(input) {
  const stream = Buffer.isBuffer(input) ? input : Buffer.from(input);
  let lexer = next(stream, 0);
  const stack = [0];

  do {
    switch (stack[stack.length - 1]) {
      case 0:
        {
          switch (lexer.state) {
            case 0:
              {
                // WS
                // shift
                stack.push(1);
                lexer = next(stream, lexer.end);
              }
              break;

            case 1:
              {
                // TRUE
                // shift
                stack.push(2);
                lexer = next(stream, lexer.end);
              }
              break;

            case 2:
              {
                // FALSE
                // shift
                stack.push(3);
                lexer = next(stream, lexer.end);
              }
              break;

            case 3:
              {
                // NULL
                // shift
                stack.push(4);
                lexer = next(stream, lexer.end);
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift
                stack.push(5);
                lexer = next(stream, lexer.end);
              }
              break;

            case 8:
              {
                // STRING
                // shift
                stack.push(6);
                lexer = next(stream, lexer.end);
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift
                stack.push(7);
                lexer = next(stream, lexer.end);
              }
              break;

            case 11:
              {
                // NUMBER
                // shift
                stack.push(8);
                lexer = next(stream, lexer.end);
              }
              break;

            case 15:
              {
                // Json
                // shift
                stack.push(9);
                lexer = next(stream, lexer.end);
              }
              break;

            case 16:
              {
                // Element
                // shift
                stack.push(10);
                lexer = next(stream, lexer.end);
              }
              break;

            case 17:
              {
                // Value
                // shift
                stack.push(11);
                lexer = next(stream, lexer.end);
              }
              break;

            case 18:
              {
                // Object
                // shift
                stack.push(12);
                lexer = next(stream, lexer.end);
              }
              break;

            case 21:
              {
                // Array
                // shift
                stack.push(13);
                lexer = next(stream, lexer.end);
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
                stack.push(15);
                lexer = next(stream, lexer.end);
              }
              break;

            case 2:
              {
                // FALSE
                // shift
                stack.push(16);
                lexer = next(stream, lexer.end);
              }
              break;

            case 3:
              {
                // NULL
                // shift
                stack.push(17);
                lexer = next(stream, lexer.end);
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift
                stack.push(18);
                lexer = next(stream, lexer.end);
              }
              break;

            case 8:
              {
                // STRING
                // shift
                stack.push(19);
                lexer = next(stream, lexer.end);
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift
                stack.push(20);
                lexer = next(stream, lexer.end);
              }
              break;

            case 11:
              {
                // NUMBER
                // shift
                stack.push(21);
                lexer = next(stream, lexer.end);
              }
              break;

            case 17:
              {
                // Value
                // shift
                stack.push(22);
                lexer = next(stream, lexer.end);
              }
              break;

            case 18:
              {
                // Object
                // shift
                stack.push(23);
                lexer = next(stream, lexer.end);
              }
              break;

            case 21:
              {
                // Array
                // shift
                stack.push(24);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
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
                stack.push(25);
                lexer = next(stream, lexer.end);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // shift
                stack.push(26);
                lexer = next(stream, lexer.end);
              }
              break;

            case 8:
              {
                // STRING
                // shift
                stack.push(27);
                lexer = next(stream, lexer.end);
              }
              break;

            case 19:
              {
                // Members
                // shift
                stack.push(28);
                lexer = next(stream, lexer.end);
              }
              break;

            case 20:
              {
                // Member
                // shift
                stack.push(29);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
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
                stack.push(30);
                lexer = next(stream, lexer.end);
              }
              break;

            case 1:
              {
                // TRUE
                // shift
                stack.push(2);
                lexer = next(stream, lexer.end);
              }
              break;

            case 2:
              {
                // FALSE
                // shift
                stack.push(3);
                lexer = next(stream, lexer.end);
              }
              break;

            case 3:
              {
                // NULL
                // shift
                stack.push(4);
                lexer = next(stream, lexer.end);
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift
                stack.push(5);
                lexer = next(stream, lexer.end);
              }
              break;

            case 8:
              {
                // STRING
                // shift
                stack.push(6);
                lexer = next(stream, lexer.end);
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift
                stack.push(7);
                lexer = next(stream, lexer.end);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // shift
                stack.push(31);
                lexer = next(stream, lexer.end);
              }
              break;

            case 11:
              {
                // NUMBER
                // shift
                stack.push(8);
                lexer = next(stream, lexer.end);
              }
              break;

            case 16:
              {
                // Element
                // shift
                stack.push(32);
                lexer = next(stream, lexer.end);
              }
              break;

            case 17:
              {
                // Value
                // shift
                stack.push(11);
                lexer = next(stream, lexer.end);
              }
              break;

            case 18:
              {
                // Object
                // shift
                stack.push(12);
                lexer = next(stream, lexer.end);
              }
              break;

            case 21:
              {
                // Array
                // shift
                stack.push(13);
                lexer = next(stream, lexer.end);
              }
              break;

            case 22:
              {
                // Elements
                // shift
                stack.push(33);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
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
                return true;
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][15]);
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
                stack.push(14);
                lexer = next(stream, lexer.end);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][16]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][16]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][16]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][16]);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][16]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][16]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][16]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][16]);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
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
                stack.push(35);
                lexer = next(stream, lexer.end);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // shift
                stack.push(36);
                lexer = next(stream, lexer.end);
              }
              break;

            case 8:
              {
                // STRING
                // shift
                stack.push(37);
                lexer = next(stream, lexer.end);
              }
              break;

            case 19:
              {
                // Members
                // shift
                stack.push(38);
                lexer = next(stream, lexer.end);
              }
              break;

            case 20:
              {
                // Member
                // shift
                stack.push(39);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
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
                stack.push(40);
                lexer = next(stream, lexer.end);
              }
              break;

            case 1:
              {
                // TRUE
                // shift
                stack.push(2);
                lexer = next(stream, lexer.end);
              }
              break;

            case 2:
              {
                // FALSE
                // shift
                stack.push(3);
                lexer = next(stream, lexer.end);
              }
              break;

            case 3:
              {
                // NULL
                // shift
                stack.push(4);
                lexer = next(stream, lexer.end);
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift
                stack.push(5);
                lexer = next(stream, lexer.end);
              }
              break;

            case 8:
              {
                // STRING
                // shift
                stack.push(6);
                lexer = next(stream, lexer.end);
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift
                stack.push(7);
                lexer = next(stream, lexer.end);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // shift
                stack.push(41);
                lexer = next(stream, lexer.end);
              }
              break;

            case 11:
              {
                // NUMBER
                // shift
                stack.push(8);
                lexer = next(stream, lexer.end);
              }
              break;

            case 16:
              {
                // Element
                // shift
                stack.push(42);
                lexer = next(stream, lexer.end);
              }
              break;

            case 17:
              {
                // Value
                // shift
                stack.push(11);
                lexer = next(stream, lexer.end);
              }
              break;

            case 18:
              {
                // Object
                // shift
                stack.push(12);
                lexer = next(stream, lexer.end);
              }
              break;

            case 21:
              {
                // Array
                // shift
                stack.push(13);
                lexer = next(stream, lexer.end);
              }
              break;

            case 22:
              {
                // Elements
                // shift
                stack.push(43);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
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
                stack.push(34);
                lexer = next(stream, lexer.end);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][16]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][16]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][16]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][16]);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][17]);
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
                stack.push(44);
                lexer = next(stream, lexer.end);
              }
              break;

            case 8:
              {
                // STRING
                // shift
                stack.push(45);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
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
                stack.push(48);
                lexer = next(stream, lexer.end);
              }
              break;

            case 7:
              {
                // COLON
                // shift
                stack.push(49);
                lexer = next(stream, lexer.end);
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
                stack.push(46);
                lexer = next(stream, lexer.end);
              }
              break;

            case 6:
              {
                // COMMA
                // shift
                stack.push(47);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][19]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][19]);
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
                stack.push(2);
                lexer = next(stream, lexer.end);
              }
              break;

            case 2:
              {
                // FALSE
                // shift
                stack.push(3);
                lexer = next(stream, lexer.end);
              }
              break;

            case 3:
              {
                // NULL
                // shift
                stack.push(4);
                lexer = next(stream, lexer.end);
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift
                stack.push(5);
                lexer = next(stream, lexer.end);
              }
              break;

            case 8:
              {
                // STRING
                // shift
                stack.push(6);
                lexer = next(stream, lexer.end);
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift
                stack.push(7);
                lexer = next(stream, lexer.end);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // shift
                stack.push(50);
                lexer = next(stream, lexer.end);
              }
              break;

            case 11:
              {
                // NUMBER
                // shift
                stack.push(8);
                lexer = next(stream, lexer.end);
              }
              break;

            case 17:
              {
                // Value
                // shift
                stack.push(22);
                lexer = next(stream, lexer.end);
              }
              break;

            case 18:
              {
                // Object
                // shift
                stack.push(12);
                lexer = next(stream, lexer.end);
              }
              break;

            case 21:
              {
                // Array
                // shift
                stack.push(13);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][22]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][22]);
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
                stack.push(51);
                lexer = next(stream, lexer.end);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // shift
                stack.push(52);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][16]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][16]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][16]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][16]);
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
                stack.push(53);
                lexer = next(stream, lexer.end);
              }
              break;

            case 8:
              {
                // STRING
                // shift
                stack.push(54);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
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
                stack.push(57);
                lexer = next(stream, lexer.end);
              }
              break;

            case 7:
              {
                // COLON
                // shift
                stack.push(58);
                lexer = next(stream, lexer.end);
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
                stack.push(55);
                lexer = next(stream, lexer.end);
              }
              break;

            case 6:
              {
                // COMMA
                // shift
                stack.push(56);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][19]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][19]);
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
                stack.push(2);
                lexer = next(stream, lexer.end);
              }
              break;

            case 2:
              {
                // FALSE
                // shift
                stack.push(3);
                lexer = next(stream, lexer.end);
              }
              break;

            case 3:
              {
                // NULL
                // shift
                stack.push(4);
                lexer = next(stream, lexer.end);
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift
                stack.push(5);
                lexer = next(stream, lexer.end);
              }
              break;

            case 8:
              {
                // STRING
                // shift
                stack.push(6);
                lexer = next(stream, lexer.end);
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift
                stack.push(7);
                lexer = next(stream, lexer.end);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // shift
                stack.push(59);
                lexer = next(stream, lexer.end);
              }
              break;

            case 11:
              {
                // NUMBER
                // shift
                stack.push(8);
                lexer = next(stream, lexer.end);
              }
              break;

            case 17:
              {
                // Value
                // shift
                stack.push(22);
                lexer = next(stream, lexer.end);
              }
              break;

            case 18:
              {
                // Object
                // shift
                stack.push(12);
                lexer = next(stream, lexer.end);
              }
              break;

            case 21:
              {
                // Array
                // shift
                stack.push(13);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][22]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][22]);
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
                stack.push(60);
                lexer = next(stream, lexer.end);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // shift
                stack.push(61);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
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
                stack.push(62);
                lexer = next(stream, lexer.end);
              }
              break;

            case 7:
              {
                // COLON
                // shift
                stack.push(63);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
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
                stack.push(64);
                lexer = next(stream, lexer.end);
              }
              break;

            case 8:
              {
                // STRING
                // shift
                stack.push(27);
                lexer = next(stream, lexer.end);
              }
              break;

            case 20:
              {
                // Member
                // shift
                stack.push(65);
                lexer = next(stream, lexer.end);
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
                stack.push(67);
                lexer = next(stream, lexer.end);
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
                stack.push(1);
                lexer = next(stream, lexer.end);
              }
              break;

            case 1:
              {
                // TRUE
                // shift
                stack.push(2);
                lexer = next(stream, lexer.end);
              }
              break;

            case 2:
              {
                // FALSE
                // shift
                stack.push(3);
                lexer = next(stream, lexer.end);
              }
              break;

            case 3:
              {
                // NULL
                // shift
                stack.push(4);
                lexer = next(stream, lexer.end);
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift
                stack.push(5);
                lexer = next(stream, lexer.end);
              }
              break;

            case 8:
              {
                // STRING
                // shift
                stack.push(6);
                lexer = next(stream, lexer.end);
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift
                stack.push(7);
                lexer = next(stream, lexer.end);
              }
              break;

            case 11:
              {
                // NUMBER
                // shift
                stack.push(8);
                lexer = next(stream, lexer.end);
              }
              break;

            case 16:
              {
                // Element
                // shift
                stack.push(66);
                lexer = next(stream, lexer.end);
              }
              break;

            case 17:
              {
                // Value
                // shift
                stack.push(11);
                lexer = next(stream, lexer.end);
              }
              break;

            case 18:
              {
                // Object
                // shift
                stack.push(12);
                lexer = next(stream, lexer.end);
              }
              break;

            case 21:
              {
                // Array
                // shift
                stack.push(13);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
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
                stack.push(1);
                lexer = next(stream, lexer.end);
              }
              break;

            case 1:
              {
                // TRUE
                // shift
                stack.push(2);
                lexer = next(stream, lexer.end);
              }
              break;

            case 2:
              {
                // FALSE
                // shift
                stack.push(3);
                lexer = next(stream, lexer.end);
              }
              break;

            case 3:
              {
                // NULL
                // shift
                stack.push(4);
                lexer = next(stream, lexer.end);
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift
                stack.push(5);
                lexer = next(stream, lexer.end);
              }
              break;

            case 8:
              {
                // STRING
                // shift
                stack.push(6);
                lexer = next(stream, lexer.end);
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift
                stack.push(7);
                lexer = next(stream, lexer.end);
              }
              break;

            case 11:
              {
                // NUMBER
                // shift
                stack.push(8);
                lexer = next(stream, lexer.end);
              }
              break;

            case 16:
              {
                // Element
                // shift
                stack.push(68);
                lexer = next(stream, lexer.end);
              }
              break;

            case 17:
              {
                // Value
                // shift
                stack.push(11);
                lexer = next(stream, lexer.end);
              }
              break;

            case 18:
              {
                // Object
                // shift
                stack.push(12);
                lexer = next(stream, lexer.end);
              }
              break;

            case 21:
              {
                // Array
                // shift
                stack.push(13);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
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
                stack.push(69);
                lexer = next(stream, lexer.end);
              }
              break;

            case 7:
              {
                // COLON
                // shift
                stack.push(70);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][18]);
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
                stack.push(71);
                lexer = next(stream, lexer.end);
              }
              break;

            case 8:
              {
                // STRING
                // shift
                stack.push(27);
                lexer = next(stream, lexer.end);
              }
              break;

            case 20:
              {
                // Member
                // shift
                stack.push(72);
                lexer = next(stream, lexer.end);
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
                stack.push(74);
                lexer = next(stream, lexer.end);
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
                stack.push(1);
                lexer = next(stream, lexer.end);
              }
              break;

            case 1:
              {
                // TRUE
                // shift
                stack.push(2);
                lexer = next(stream, lexer.end);
              }
              break;

            case 2:
              {
                // FALSE
                // shift
                stack.push(3);
                lexer = next(stream, lexer.end);
              }
              break;

            case 3:
              {
                // NULL
                // shift
                stack.push(4);
                lexer = next(stream, lexer.end);
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift
                stack.push(5);
                lexer = next(stream, lexer.end);
              }
              break;

            case 8:
              {
                // STRING
                // shift
                stack.push(6);
                lexer = next(stream, lexer.end);
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift
                stack.push(7);
                lexer = next(stream, lexer.end);
              }
              break;

            case 11:
              {
                // NUMBER
                // shift
                stack.push(8);
                lexer = next(stream, lexer.end);
              }
              break;

            case 16:
              {
                // Element
                // shift
                stack.push(73);
                lexer = next(stream, lexer.end);
              }
              break;

            case 17:
              {
                // Value
                // shift
                stack.push(11);
                lexer = next(stream, lexer.end);
              }
              break;

            case 18:
              {
                // Object
                // shift
                stack.push(12);
                lexer = next(stream, lexer.end);
              }
              break;

            case 21:
              {
                // Array
                // shift
                stack.push(13);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
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
                stack.push(1);
                lexer = next(stream, lexer.end);
              }
              break;

            case 1:
              {
                // TRUE
                // shift
                stack.push(2);
                lexer = next(stream, lexer.end);
              }
              break;

            case 2:
              {
                // FALSE
                // shift
                stack.push(3);
                lexer = next(stream, lexer.end);
              }
              break;

            case 3:
              {
                // NULL
                // shift
                stack.push(4);
                lexer = next(stream, lexer.end);
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift
                stack.push(5);
                lexer = next(stream, lexer.end);
              }
              break;

            case 8:
              {
                // STRING
                // shift
                stack.push(6);
                lexer = next(stream, lexer.end);
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift
                stack.push(7);
                lexer = next(stream, lexer.end);
              }
              break;

            case 11:
              {
                // NUMBER
                // shift
                stack.push(8);
                lexer = next(stream, lexer.end);
              }
              break;

            case 16:
              {
                // Element
                // shift
                stack.push(75);
                lexer = next(stream, lexer.end);
              }
              break;

            case 17:
              {
                // Value
                // shift
                stack.push(11);
                lexer = next(stream, lexer.end);
              }
              break;

            case 18:
              {
                // Object
                // shift
                stack.push(12);
                lexer = next(stream, lexer.end);
              }
              break;

            case 21:
              {
                // Array
                // shift
                stack.push(13);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 5:
              {
                // CURLY_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
              }
              break;

            case 12:
              {
                // @par-gen.EOF
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][21]);
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
                stack.push(77);
                lexer = next(stream, lexer.end);
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
                stack.push(1);
                lexer = next(stream, lexer.end);
              }
              break;

            case 1:
              {
                // TRUE
                // shift
                stack.push(2);
                lexer = next(stream, lexer.end);
              }
              break;

            case 2:
              {
                // FALSE
                // shift
                stack.push(3);
                lexer = next(stream, lexer.end);
              }
              break;

            case 3:
              {
                // NULL
                // shift
                stack.push(4);
                lexer = next(stream, lexer.end);
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift
                stack.push(5);
                lexer = next(stream, lexer.end);
              }
              break;

            case 8:
              {
                // STRING
                // shift
                stack.push(6);
                lexer = next(stream, lexer.end);
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift
                stack.push(7);
                lexer = next(stream, lexer.end);
              }
              break;

            case 11:
              {
                // NUMBER
                // shift
                stack.push(8);
                lexer = next(stream, lexer.end);
              }
              break;

            case 16:
              {
                // Element
                // shift
                stack.push(76);
                lexer = next(stream, lexer.end);
              }
              break;

            case 17:
              {
                // Value
                // shift
                stack.push(11);
                lexer = next(stream, lexer.end);
              }
              break;

            case 18:
              {
                // Object
                // shift
                stack.push(12);
                lexer = next(stream, lexer.end);
              }
              break;

            case 21:
              {
                // Array
                // shift
                stack.push(13);
                lexer = next(stream, lexer.end);
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
                stack.push(45);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][19]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][19]);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][20]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][20]);
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
                stack.push(1);
                lexer = next(stream, lexer.end);
              }
              break;

            case 1:
              {
                // TRUE
                // shift
                stack.push(2);
                lexer = next(stream, lexer.end);
              }
              break;

            case 2:
              {
                // FALSE
                // shift
                stack.push(3);
                lexer = next(stream, lexer.end);
              }
              break;

            case 3:
              {
                // NULL
                // shift
                stack.push(4);
                lexer = next(stream, lexer.end);
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift
                stack.push(5);
                lexer = next(stream, lexer.end);
              }
              break;

            case 8:
              {
                // STRING
                // shift
                stack.push(6);
                lexer = next(stream, lexer.end);
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift
                stack.push(7);
                lexer = next(stream, lexer.end);
              }
              break;

            case 11:
              {
                // NUMBER
                // shift
                stack.push(8);
                lexer = next(stream, lexer.end);
              }
              break;

            case 16:
              {
                // Element
                // shift
                stack.push(78);
                lexer = next(stream, lexer.end);
              }
              break;

            case 17:
              {
                // Value
                // shift
                stack.push(11);
                lexer = next(stream, lexer.end);
              }
              break;

            case 18:
              {
                // Object
                // shift
                stack.push(12);
                lexer = next(stream, lexer.end);
              }
              break;

            case 21:
              {
                // Array
                // shift
                stack.push(13);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][22]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][22]);
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
                stack.push(80);
                lexer = next(stream, lexer.end);
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
                stack.push(1);
                lexer = next(stream, lexer.end);
              }
              break;

            case 1:
              {
                // TRUE
                // shift
                stack.push(2);
                lexer = next(stream, lexer.end);
              }
              break;

            case 2:
              {
                // FALSE
                // shift
                stack.push(3);
                lexer = next(stream, lexer.end);
              }
              break;

            case 3:
              {
                // NULL
                // shift
                stack.push(4);
                lexer = next(stream, lexer.end);
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift
                stack.push(5);
                lexer = next(stream, lexer.end);
              }
              break;

            case 8:
              {
                // STRING
                // shift
                stack.push(6);
                lexer = next(stream, lexer.end);
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift
                stack.push(7);
                lexer = next(stream, lexer.end);
              }
              break;

            case 11:
              {
                // NUMBER
                // shift
                stack.push(8);
                lexer = next(stream, lexer.end);
              }
              break;

            case 16:
              {
                // Element
                // shift
                stack.push(79);
                lexer = next(stream, lexer.end);
              }
              break;

            case 17:
              {
                // Value
                // shift
                stack.push(11);
                lexer = next(stream, lexer.end);
              }
              break;

            case 18:
              {
                // Object
                // shift
                stack.push(12);
                lexer = next(stream, lexer.end);
              }
              break;

            case 21:
              {
                // Array
                // shift
                stack.push(13);
                lexer = next(stream, lexer.end);
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
                stack.push(45);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][19]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][19]);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][20]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][20]);
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
                stack.push(1);
                lexer = next(stream, lexer.end);
              }
              break;

            case 1:
              {
                // TRUE
                // shift
                stack.push(2);
                lexer = next(stream, lexer.end);
              }
              break;

            case 2:
              {
                // FALSE
                // shift
                stack.push(3);
                lexer = next(stream, lexer.end);
              }
              break;

            case 3:
              {
                // NULL
                // shift
                stack.push(4);
                lexer = next(stream, lexer.end);
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift
                stack.push(5);
                lexer = next(stream, lexer.end);
              }
              break;

            case 8:
              {
                // STRING
                // shift
                stack.push(6);
                lexer = next(stream, lexer.end);
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift
                stack.push(7);
                lexer = next(stream, lexer.end);
              }
              break;

            case 11:
              {
                // NUMBER
                // shift
                stack.push(8);
                lexer = next(stream, lexer.end);
              }
              break;

            case 16:
              {
                // Element
                // shift
                stack.push(81);
                lexer = next(stream, lexer.end);
              }
              break;

            case 17:
              {
                // Value
                // shift
                stack.push(11);
                lexer = next(stream, lexer.end);
              }
              break;

            case 18:
              {
                // Object
                // shift
                stack.push(12);
                lexer = next(stream, lexer.end);
              }
              break;

            case 21:
              {
                // Array
                // shift
                stack.push(13);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][22]);
              }
              break;

            case 10:
              {
                // BRACKET_CLOSE
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][22]);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][20]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][20]);
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
                stack.push(1);
                lexer = next(stream, lexer.end);
              }
              break;

            case 1:
              {
                // TRUE
                // shift
                stack.push(2);
                lexer = next(stream, lexer.end);
              }
              break;

            case 2:
              {
                // FALSE
                // shift
                stack.push(3);
                lexer = next(stream, lexer.end);
              }
              break;

            case 3:
              {
                // NULL
                // shift
                stack.push(4);
                lexer = next(stream, lexer.end);
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift
                stack.push(5);
                lexer = next(stream, lexer.end);
              }
              break;

            case 8:
              {
                // STRING
                // shift
                stack.push(6);
                lexer = next(stream, lexer.end);
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift
                stack.push(7);
                lexer = next(stream, lexer.end);
              }
              break;

            case 11:
              {
                // NUMBER
                // shift
                stack.push(8);
                lexer = next(stream, lexer.end);
              }
              break;

            case 16:
              {
                // Element
                // shift
                stack.push(82);
                lexer = next(stream, lexer.end);
              }
              break;

            case 17:
              {
                // Value
                // shift
                stack.push(11);
                lexer = next(stream, lexer.end);
              }
              break;

            case 18:
              {
                // Object
                // shift
                stack.push(12);
                lexer = next(stream, lexer.end);
              }
              break;

            case 21:
              {
                // Array
                // shift
                stack.push(13);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][20]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][20]);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][20]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][20]);
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
                stack.push(1);
                lexer = next(stream, lexer.end);
              }
              break;

            case 1:
              {
                // TRUE
                // shift
                stack.push(2);
                lexer = next(stream, lexer.end);
              }
              break;

            case 2:
              {
                // FALSE
                // shift
                stack.push(3);
                lexer = next(stream, lexer.end);
              }
              break;

            case 3:
              {
                // NULL
                // shift
                stack.push(4);
                lexer = next(stream, lexer.end);
              }
              break;

            case 4:
              {
                // CURLY_OPEN
                // shift
                stack.push(5);
                lexer = next(stream, lexer.end);
              }
              break;

            case 8:
              {
                // STRING
                // shift
                stack.push(6);
                lexer = next(stream, lexer.end);
              }
              break;

            case 9:
              {
                // BRACKET_OPEN
                // shift
                stack.push(7);
                lexer = next(stream, lexer.end);
              }
              break;

            case 11:
              {
                // NUMBER
                // shift
                stack.push(8);
                lexer = next(stream, lexer.end);
              }
              break;

            case 16:
              {
                // Element
                // shift
                stack.push(83);
                lexer = next(stream, lexer.end);
              }
              break;

            case 17:
              {
                // Value
                // shift
                stack.push(11);
                lexer = next(stream, lexer.end);
              }
              break;

            case 18:
              {
                // Object
                // shift
                stack.push(12);
                lexer = next(stream, lexer.end);
              }
              break;

            case 21:
              {
                // Array
                // shift
                stack.push(13);
                lexer = next(stream, lexer.end);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][20]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][20]);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][20]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][20]);
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
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][20]);
              }
              break;

            case 6:
              {
                // COMMA
                // reduce
                let n = reduces[stack[stack.length - 1]][lexer.state];
                while (n > 0) {
                  stack.pop();
                  n--;
                }
                stack.push(goto[stack[stack.length - 1]][20]);
              }
              break;
          }
        }
        break;
    }
  } while (true);
}

export { parse };
