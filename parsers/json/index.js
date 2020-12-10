import { ok } from "assert";

import { parse } from "./generated/parser.js";

ok(parse(" { } "), "should parse an object literal");
ok(parse(" [ ] "), "should parse an array literal");
ok(parse(' "abc" '), "should parse a string literal");
ok(parse(" true "), "should parse a true literal");
ok(parse(" false "), "should parse a false literal");
ok(parse(" null "), "should parse a null literal");
ok(parse(" -12.34e56 "), "should parse a null literal");
