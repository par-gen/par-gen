import { writeFileSync } from "fs";
import { NFA } from "@par-gen/nfa";
import prettier from "prettier";

import { DFA } from "./dfa.js";

const dfa = DFA.fromNFA(
  NFA.fromRegExp("ab(c|d)(e|f)*((gh|ij)(kl|mn))*")
).minimal();

console.log(dfa.toString());

let code = dfa.compileToString((symbol) => symbol.charCodeAt(0));

code += `
const input = Buffer.from("abcffghmnijmn");

console.log(test(input));
console.log(test(Buffer.from("abdffghmnijmn")));
console.log(test(Buffer.from("abc")));
console.log(test(Buffer.from("xyz")));
console.log(test(Buffer.from("abcdefgh")));

(function warmup() {
  for (let i = 0; i < 1_000; i++) {
    test(input);
  }
}());

(function bench() {
  for (let i = 0; i < 150_000_000; i++) {
    test(input);
  }
}());
`;

writeFileSync(
  "./generated-dfa.js",
  prettier.format(code, { filepath: "./generated-dfa.js" })
);
