const { performance } = require("perf_hooks");

const regex = "ab(c|d)(e|f)*((gh|ij)(kl|mn))*";
const string = "abcffghmnijmn";
const input = new TextEncoder().encode(string);
const regexp = new RegExp(regex);
const iterations = 25_000_000;

/*
const dfa = DFA.fromNFA(
  NFA.fromRegExp(regex)
)
  .minimal()
  .automata();
*/

const columns = 256;
const states = ["S0","S1","S2","S3","S4","S5","S6","S7","S8","S9","S10"];
const data = new ArrayBuffer(columns * states.length);
const table = new Uint8Array(data);
Object.entries({"S0":{"a":"S10","b":"S10","c":"S10","d":"S10","e":"S0","f":"S0","g":"S8","h":"S10","i":"S9","j":"S10","k":"S10","l":"S10","m":"S10","n":"S10"},"S1":{"a":"S10","b":"S10","c":"S10","d":"S10","e":"S10","f":"S10","g":"S8","h":"S10","i":"S9","j":"S10","k":"S10","l":"S10","m":"S10","n":"S10"},"S2":{"a":"S10","b":"S10","c":"S0","d":"S0","e":"S10","f":"S10","g":"S10","h":"S10","i":"S10","j":"S10","k":"S10","l":"S10","m":"S10","n":"S10"},"S3":{"a":"S10","b":"S10","c":"S10","d":"S10","e":"S10","f":"S10","g":"S10","h":"S10","i":"S10","j":"S10","k":"S10","l":"S1","m":"S10","n":"S10"},"S4":{"a":"S10","b":"S10","c":"S10","d":"S10","e":"S10","f":"S10","g":"S10","h":"S10","i":"S10","j":"S10","k":"S10","l":"S10","m":"S10","n":"S1"},"S5":{"a":"S10","b":"S2","c":"S10","d":"S10","e":"S10","f":"S10","g":"S10","h":"S10","i":"S10","j":"S10","k":"S10","l":"S10","m":"S10","n":"S10"},"S6":{"a":"S10","b":"S10","c":"S10","d":"S10","e":"S10","f":"S10","g":"S10","h":"S10","i":"S10","j":"S10","k":"S3","l":"S10","m":"S4","n":"S10"},"S7":{"a":"S5","b":"S10","c":"S10","d":"S10","e":"S10","f":"S10","g":"S10","h":"S10","i":"S10","j":"S10","k":"S10","l":"S10","m":"S10","n":"S10"},"S8":{"a":"S10","b":"S10","c":"S10","d":"S10","e":"S10","f":"S10","g":"S10","h":"S6","i":"S10","j":"S10","k":"S10","l":"S10","m":"S10","n":"S10"},"S9":{"a":"S10","b":"S10","c":"S10","d":"S10","e":"S10","f":"S10","g":"S10","h":"S10","i":"S10","j":"S6","k":"S10","l":"S10","m":"S10","n":"S10"},"S10":{"a":"S10","b":"S10","c":"S10","d":"S10","e":"S10","f":"S10","g":"S10","h":"S10","i":"S10","j":"S10","k":"S10","l":"S10","m":"S10","n":"S10"}}).forEach(
  ([from, transition]) => {
    const row = states.indexOf(from);
    Object.entries(transition).forEach(([symbol, to]) => {
      const char = symbol.charCodeAt(0);
      const value = states.indexOf(to);
      table[row * columns + char] = value;
    });
  }
);
  
const finals = [0,1];

const dfa = (input) => {
  let state = 7;
  for (let i = 0, l = input.length; i < l; i++) {
    state = table[state * columns + input[i]];
  }
  return finals.includes(state);
};

{
  // make the function hot
  for (let i = 0; i < 1; i++) {
    dfa(input);
  }

  const start = performance.now();

  for (let i = 0; i < iterations; i++) {
    dfa(input);
  }

  console.log(
    `${iterations.toLocaleString()} iterations of dfa took ${(
      performance.now() - start
    ).toFixed(2)} ms`
  );
}

{
  // make the expr hot
  for (let i = 0; i < 1_000; i++) {
    regexp.test(string);
  }

  const start = performance.now();

  for (let i = 0; i < iterations; i++) {
    regexp.test(string);
  }

  console.log(
    `${iterations.toLocaleString()} iterations of RegExp took ${(
      performance.now() - start
    ).toFixed(2)} ms`
  );
}

/*
25,000,000 iterations of dfa took 588.23 ms
25,000,000 iterations of RegExp took 1491.63 ms
*/
