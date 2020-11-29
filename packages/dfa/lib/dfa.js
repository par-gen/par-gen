import { ok } from "assert";

import { minimize } from "./hopcroft.js";
import { fromNFA } from "./powerset.js";

/**
 * @template STATE, SYMBOL
 * @typedef {import('@knisterpeter/expound-nfa').NFA<STATE, SYMBOL>} NFA
 */

/**
 * @template STATE, SYMBOL
 * @typedef {Object} DFADescription
 * @property {STATE[]} states
 * @property {SYMBOL[]} symbols
 * @property {Map<STATE, Map<SYMBOL, STATE>>} transitions
 * @property {STATE} start
 * @property {STATE[]} finals
 */

/**
 * @template STATE, SYMBOL
 */
export class DFA {
  /**
   * @template STATE, SYMBOL
   * @param {NFA<STATE, SYMBOL>} nfa
   * @returns {DFA<STATE, SYMBOL>}
   */
  static fromNFA(nfa) {
    return new DFA(fromNFA(nfa, (n) => /** @type {any} */ (`S${n}`)));
  }

  /**
   * @param {DFADescription<STATE, SYMBOL>} description
   */
  constructor(description) {
    this._validate(description);

    this.description = description;
  }

  /**
   * @internal
   * @private
   * @param {DFADescription<STATE, SYMBOL>} description
   */
  _validate(description) {
    const { states, symbols, transitions, start, finals } = description;

    ok(states.length > 0, `Must be created with a list of states`);
    ok(symbols.length > 0, `Must be created with a list of symbols`);
    ok(
      states.includes(start),
      `Start state '${start}' must be included in list of states`
    );
    finals.forEach((final) => {
      ok(
        states.includes(final),
        `Final state '${final}' must be included in list of states`
      );
    });
    for (const state of transitions.keys()) {
      ok(
        states.includes(state),
        `Transition contains unknown state '${state}'`
      );
    }
    for (const [state, row] of transitions.entries()) {
      for (const symbol of row.keys()) {
        ok(
          symbols.includes(symbol),
          `Transition from '${state}' contains unknown symbol '${symbol}'`
        );
      }
    }
    for (const [state, row] of transitions.entries()) {
      for (const [symbol, target] of row.entries()) {
        ok(
          states.includes(target),
          `Transition from '${state}' with symbol '${symbol}' contains unknown target state '${target}'`
        );
      }
    }
  }

  /**
   * @returns {DFA<STATE, SYMBOL>}
   */
  minimal() {
    return new DFA(minimize(this, (n) => /** @type {any} */ (`S${n}`)));
  }

  /**
   * @returns {(input: Uint8Array) => boolean}
   */
  automata() {
    const start = this.description.states.indexOf(this.description.start);

    const finals = this.description.finals.map((final) =>
      this.description.states.indexOf(final)
    );

    const transitions = Object.fromEntries(
      Array.from(this.description.transitions.entries()).map(
        ([state, transition]) => {
          return [state, Object.fromEntries(Array.from(transition.entries()))];
        }
      )
    );

    const automata =
      /** @type {() => (input: Uint8Array) => boolean} */
      (new Function(
        `'use strict';

          const column = 256;
          const states = ${JSON.stringify(this.description.states)};
          const data = new ArrayBuffer(column * ${
            this.description.states.length
          });
          const table = new Uint8Array(data);
          Object.entries(${JSON.stringify(transitions)}).forEach(
            ([from, transition]) => {
              const row = states.indexOf(from);
              Object.entries(transition).forEach(([symbol, to]) => {
                const col = symbol.charCodeAt(0);
                const value = states.indexOf(to);
                table[col + row * 256] = value;
              });
            }
          );

          const finals = ${JSON.stringify(finals)};

          return (input) => {
            let state = ${start};
            for (let i = 0, l = input.length; i < l; i++) {
              state = table[state * 256 + input[i]];
            }
            return finals.includes(state);
          };
        `
      ))();
    return automata;
  }

  /**
   * Just a very simple non-exhausting test algorithm.
   *
   * @internal
   * @param {SYMBOL[]} input
   * @return {boolean}
   */
  test(input) {
    input.forEach((symbol) => {
      if (!this.description.symbols.includes(symbol)) {
        throw new Error(`Invalid symbol: '${symbol}'`);
      }
    });

    /**
     * @param {SYMBOL[]} input
     * @param {STATE} current
     * @returns {boolean}
     */
    const step = (input, current) => {
      if (input.length === 0) {
        return this.description.finals.includes(current);
      }

      let way = this.description.transitions.get(current)?.get(input[0]);
      if (!way) {
        return this.description.finals.includes(current);
      }

      return step(input.slice(1), way);
    };

    return step(input, this.description.start);
  }
}
