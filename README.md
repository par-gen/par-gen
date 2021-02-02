# par-gen

Fast JavaScript/TypeScript LR(1) parser generator

[![check types and test](https://github.com/par-gen/par-gen/workflows/check%20types%20and%20test/badge.svg)](https://github.com/par-gen/par-gen/actions?query=workflow%3A%22check+types+and+test%22)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)

## Installation

- clone this repository `git clone git@github.com:par-gen/par-gen.git`
- change into repository directory and install dependencies `npm install`
- open `packages/codegen/lib/c.js` and modify
- change into `parsers/json/generated` and execute `npm start -- -l c` to generate the C parser
- in `parsers/json/generated` run `clang -g -O3 -o parser lexer-initial.c parser.c main.c` or run `clang -g -O3 -flto parser-lto lexer-initial.c parser.c main.c`
- additionally paste the code from `lexer-initial.c` into `parser.c` and compile without `-flto`
- see drastic differences in page faults and itlb misses with `perf stat -d -d -r 10 ./parser` between `parser` and `parser-lto`
- happy hacking!
