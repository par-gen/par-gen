import { writeFileSync } from "fs";
import { NFA } from "@par-gen/nfa";
import prettier from "prettier";

import { DFA } from "./dfa.js";

const dfa = DFA.fromNFA(
  NFA.fromRegExp(
    `(-|)(0|[1-9][0-9]*)(\\.[0-9][0-9]*|)([Ee]([-+]|)(0|[1-9][0-9]*)|)`
  )
).minimal();

console.log(dfa.toString());

let code = dfa.compileToString((symbol) => symbol.charCodeAt(0));

// TODO: wtf is wrong with the leading zero?
code += `
const input = Buffer.from("-1234.7281397237123872189037218937e+3213213213213123");

console.log(test(input));
console.log(test(Buffer.from("1")));
console.log(test(Buffer.from("023243254890.3213213213e+132313")));
console.log(test(Buffer.from("1.e")));
console.log(test(Buffer.from("1.e+5")));

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
