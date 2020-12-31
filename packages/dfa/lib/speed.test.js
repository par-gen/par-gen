import { performance } from "perf_hooks";
import { NFA } from "@par-gen/nfa";

import { DFA } from "./dfa.js";

/**
 * @template T
 * @typedef {import('@par-gen/nfa/types/regexp').ParseTree<T>} ParseTree
 */

if (process.env.RUN_SLOW_TESTS) {
  describe("DFA compile", () => {
    it("should be fast", () => {
      /**
       * @param {string} name
       * @param {() => void} fn
       * @returns {[string, number]}
       */
      const time = (name, fn) => {
        const start = performance.now();
        fn();
        const end = performance.now();
        return [name, end - start];
      };

      const compiled = DFA.fromNFA(
        NFA.fromRegExp("ab(c|d)(e|f)*((gh|ij)(kl|mn))*")
      )
        .minimal()
        .compile((symbol) => symbol.charCodeAt(0));

      const string = "abcffghmnijmn";
      const input = Buffer.from(string);
      const iterations = 50_000_000;

      // make the function hot
      for (let i = 0; i < 1_000; i++) {
        compiled(input);
      }

      const dfaResult = time("dfa", () => {
        for (let i = 0; i < iterations; i++) {
          compiled(input);
        }
      });

      const regexp = new RegExp("ab(?:c|d)(?:e|f)*(?:(?:gh|ij)(?:kl|mn))*");
      // make the expr hot
      for (let i = 0; i < 1_000; i++) {
        regexp.test(string);
      }

      const nativeResult = time("native", () => {
        for (let i = 0; i < iterations; i++) {
          // string.match(regexp);
          regexp.test(string);
        }
      });

      console.log(`
  Executing in a loop with ${iterations.toLocaleString()} iterations:
  - Running ${dfaResult[0]} took ${dfaResult[1].toFixed(2)} ms
  - Running ${nativeResult[0]} took ${nativeResult[1].toFixed(2)} ms
  `);

      expect(dfaResult[1]).toBeLessThanOrEqual(nativeResult[1]);
    });
  });
} else {
  test.skip("Skipped speed test", () => undefined);
}
