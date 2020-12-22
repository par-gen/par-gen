import { ok } from "assert";
import { inspect } from "util";

import { parse } from "./generated/parser.js";

console.log(inspect(parse("{}"), { depth: 10 }));

ok(parse("  { }"), "should parse an object literal");
ok(parse("[ ]"), "should parse an array literal");
ok(parse(' "0123 Lorem ipsum dolor"'), "should parse a string literal");
ok(parse('""'), "should parse an empty string literal");
ok(parse("true  "), "should parse a true literal");
ok(parse("false"), "should parse a false literal");
ok(parse("null"), "should parse a null literal");
ok(parse("-12.34e56"), "should parse a number literal");
ok(parse("0"), "should parse a number literal");
ok(parse("-12.34"), "should parse a number literal");
ok(parse("12e56"), "should parse a number literal");
ok(parse("-12.34e-56"), "should parse a number literal");
ok(parse("-12.34e+56"), "should parse a number literal");
ok(
  parse(`
    []
  `),
  "should parse an array literal"
);

console.log(
  inspect(
    parse(`
      []
    `),
    { depth: 10 }
  )
);

console.log(inspect(parse('"foo"'), { depth: 20 }));
console.log(inspect(parse('"\\n\\u1234"'), { depth: 20 }));
