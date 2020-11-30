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
    return new DFA(
      minimize(this, { stateMapper: (n) => /** @type {any} */ (`S${n}`) })
    );
  }

  /**
   * @param {(symbol: SYMBOL) => number} symbolMapper
   * @returns {(input: Uint8Array) => {match: boolean, length: number, visited: number[]}}
   */
  compile(symbolMapper) {
    const d = this.description;

    const start = d.states.indexOf(d.start);

    const finals = d.finals.map((final) => d.states.indexOf(final));

    const transitions = Array.from(d.transitions.entries()).map(
      ([from, transition]) =>
        /** @type {[number, [number, number][]]} */ ([
          d.states.indexOf(from),
          /** @type {[number, number][]} */ Array.from(
            transition.entries()
          ).map(([symbol, to]) => [symbolMapper(symbol), d.states.indexOf(to)]),
        ])
    );

    const errorState = transitions
      .filter(([from, transition]) => transition.every(([, to]) => from === to))
      .map(([state]) => state)
      .find((state) => !finals.includes(state));

    const error = errorState ?? -1;

    const code = `'use strict';
      const column = 256;
      const states = ${JSON.stringify(d.states)};
      const data = new ArrayBuffer(column * ${d.states.length});
      const table = new Uint8Array(data).fill(${error});
      ${JSON.stringify(transitions)}.forEach(([from, transition]) => {
        transition.forEach(([symbol, to]) => {
          table[symbol + from * 256] = to;
        });
      });

      const finals = ${JSON.stringify(finals)};

      const visitedData = new ArrayBuffer(1024);
      const visited = new Uint8Array(visitedData);

      return (input) => {
        let state = ${start};
        let i = 0, l = input.length;
        visited[i] = state;
        while (i < l) {
          state = table[state * 256 + input[i]];
          i++;
          visited[i] = state;
        }
        return {
          match: finals.includes(state),
          length: i,
          visited: visited.subarray(0, i + 1),
        };
      };
    `;

    const automata =
      /** @type {() => (input: Uint8Array) => {match: boolean, length: number, visited: number[]}} */
      (new Function(code))();
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
