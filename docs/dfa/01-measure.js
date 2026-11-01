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

/* vv Generated code */
const table = [
  {
    97: 10,
    98: 10,
    99: 10,
    100: 10,
    101: 0,
    102: 0,
    103: 8,
    104: 10,
    105: 9,
    106: 10,
    107: 10,
    108: 10,
    109: 10,
    110: 10,
  },
  {
    97: 10,
    98: 10,
    99: 10,
    100: 10,
    101: 10,
    102: 10,
    103: 8,
    104: 10,
    105: 9,
    106: 10,
    107: 10,
    108: 10,
    109: 10,
    110: 10,
  },
  {
    97: 10,
    98: 10,
    99: 0,
    100: 0,
    101: 10,
    102: 10,
    103: 10,
    104: 10,
    105: 10,
    106: 10,
    107: 10,
    108: 10,
    109: 10,
    110: 10,
  },
  {
    97: 10,
    98: 10,
    99: 10,
    100: 10,
    101: 10,
    102: 10,
    103: 10,
    104: 10,
    105: 10,
    106: 10,
    107: 10,
    108: 1,
    109: 10,
    110: 10,
  },
  {
    97: 10,
    98: 10,
    99: 10,
    100: 10,
    101: 10,
    102: 10,
    103: 10,
    104: 10,
    105: 10,
    106: 10,
    107: 10,
    108: 10,
    109: 10,
    110: 1,
  },
  {
    97: 10,
    98: 2,
    99: 10,
    100: 10,
    101: 10,
    102: 10,
    103: 10,
    104: 10,
    105: 10,
    106: 10,
    107: 10,
    108: 10,
    109: 10,
    110: 10,
  },
  {
    97: 10,
    98: 10,
    99: 10,
    100: 10,
    101: 10,
    102: 10,
    103: 10,
    104: 10,
    105: 10,
    106: 10,
    107: 3,
    108: 10,
    109: 4,
    110: 10,
  },
  {
    97: 5,
    98: 10,
    99: 10,
    100: 10,
    101: 10,
    102: 10,
    103: 10,
    104: 10,
    105: 10,
    106: 10,
    107: 10,
    108: 10,
    109: 10,
    110: 10,
  },
  {
    97: 10,
    98: 10,
    99: 10,
    100: 10,
    101: 10,
    102: 10,
    103: 10,
    104: 6,
    105: 10,
    106: 10,
    107: 10,
    108: 10,
    109: 10,
    110: 10,
  },
  {
    97: 10,
    98: 10,
    99: 10,
    100: 10,
    101: 10,
    102: 10,
    103: 10,
    104: 10,
    105: 10,
    106: 6,
    107: 10,
    108: 10,
    109: 10,
    110: 10,
  },
  {
    97: 10,
    98: 10,
    99: 10,
    100: 10,
    101: 10,
    102: 10,
    103: 10,
    104: 10,
    105: 10,
    106: 10,
    107: 10,
    108: 10,
    109: 10,
    110: 10,
  },
];
const finals = [0, 1];

const dfa = (input) => {
  let state = 7;
  for (let i = 0, l = input.length; i < l; i++) {
    state = table[state][input[i]];
  }
  return finals.includes(state);
};

/* ^^ Generated code */

{
  // make the function hot
  for (let i = 0; i < 1_000; i++) {
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
25,000,000 iterations of dfa took 2901.82 ms
25,000,000 iterations of RegExp took 1311.39 ms
*/
