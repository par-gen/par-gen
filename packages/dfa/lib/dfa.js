import { ok } from "assert";
import { inspect } from "util";

import { minimize } from "./hopcroft.js";
import { fromNFA } from "./powerset.js";

/**
 * @template STATE, SYMBOL
 * @typedef {import('@par-gen/nfa').NFA<STATE, SYMBOL>} NFA
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
   * @returns {(input: Uint8Array) => boolean}
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

    // transition table compression

    /** @type {number[][]} */
    const table = [];
    for (const [state, transition] of transitions) {
      if (!Array.isArray(table[state])) {
        table[state] = [];
      }

      for (let i = 0; i < 256; i++) {
        table[state][i] = error;
      }

      for (const [symbol, to] of transition) {
        table[state][symbol] = to;
      }
    }

    /** @type {number[]} */
    const defaults = [];
    for (let i = 0; i < table.length; i++) {
      /** @type {number[]} */
      const counts = [];
      for (let j = 0; j < table[i].length; j++) {
        if (typeof counts[table[i][j]] === "undefined") {
          counts[table[i][j]] = 0;
        }

        counts[table[i][j]]++;
      }

      let maxCount = 0;
      for (let k = 0; k < counts.length; k++) {
        if (counts[k] > maxCount) {
          maxCount = counts[k];
          defaults[i] = k;
        }
      }
    }

    /** @type {[source: number, target: number][]} */
    const packed = [];
    /** @type {boolean[]} */
    const used = [];
    /** @type {number[]} */
    const offsets = [];
    for (let i = 0; i < table.length; i++) {
      let candidateOff = 0;
      for (candidateOff = 0; candidateOff < packed.length; candidateOff++) {
        let j = 0;
        for (j = 0; j < 256; j++) {
          if (table[i][j] !== defaults[i] && used[candidateOff + j]) {
            break;
          }
        }

        if (j === 256) {
          break;
        }
      }

      // we've reached the end of possible candidate offsets,
      // allocate the next set of offsets
      for (let k = packed.length; k < candidateOff + 256; k++) {
        packed[k] = [-1, -1];
      }

      for (let j = 0; j < 256; j++) {
        offsets[i] = candidateOff;
        if (table[i][j] === defaults[i]) {
          continue;
        }

        packed[candidateOff + j][0] = i;
        packed[candidateOff + j][1] = table[i][j];
        used[candidateOff + j] = true;
      }
    }

    const packedflat = packed.flat();

    // console.log(inspect(d, { depth: null, colors: true }));
    // console.log(inspect(table, { depth: null, colors: true }));

    const code = `'use strict';
      const defaults = new Uint${table.length < 256 ? '8' : '16'}Array(${defaults.length});
      ${defaults.map((d, i) => `defaults[${i}] = ${d};`).join("\n")}

      const offsets = new Uint${table.length < 256 ? '8' : '16'}Array(${offsets.length});
      ${offsets.map((o, i) => `offsets[${i}] = ${o};`).join("\n")}

      const table = new Uint${table.length < 256 ? '8' : '16'}Array(${packedflat.length});
      ${packedflat.map((p, i) => `table[${i}] = ${p};`).join("\n")}

      return (input) => {
        let state = ${start};
        let index = 0;
        for (let i = 0, l = input.length; i < l; i++) {
          index = (offsets[state] + input[i]) * 2;
          state = table[index] === state ? table[index + 1] : defaults[state];
        }
        return ${finals.map((final) => `${final} === state`).join(" || ")};
      };
    `;

    // console.log(code);

    // return () => {};

    const automata =
      /** @type {() => (input: Uint8Array) => boolean} */
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
