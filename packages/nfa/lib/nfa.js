import { ok } from "assert";

import { Epsilon } from "./constants.js";
import { fromRegExp } from "./thompson.js";

/**
 * @template STATE, SYMBOL
 * @typedef {Object} NFADescription
 * @property {STATE[]} states
 * @property {SYMBOL[]} symbols
 * @property {Map<STATE, Map<SYMBOL|typeof Epsilon, STATE[]>>} transitions
 * @property {STATE} start
 * @property {STATE[]} finals
 */

/**
 * @template STATE
 * @template SYMBOL
 */
export class NFA {
  /**
   * @param {string} regexp regular expression to create a NFA from
   * @returns {NFA<string, string>}
   */
  static fromRegExp(regexp) {
    return new NFA(fromRegExp(regexp));
  }

  /**
   * @param {NFADescription<STATE, SYMBOL>} description
   */
  constructor(description) {
    this._validate(description);

    this.description = description;
  }

  /**
   * @internal
   * @private
   * @param {NFADescription<STATE, SYMBOL>} description
   */
  _validate(description) {
    const { states, symbols, transitions, start, finals } = description;

    ok(states.length > 0, "Must be created with a list of states");

    ok(symbols.length > 0, "Must have at least one symbol");

    const stateSet = new Set(states);
    const symbolSet = new Set(symbols);

    if (!stateSet.has(start)) {
      ok(
        false,
        `Start state '${start}' must be included in list of states [${states.join(
          ", "
        )}]`
      );
    }

    ok(finals.length > 0, "Must have at least one final state");
    for (let i = 0; i < finals.length; i++) {
      const final = finals[i];
      if (!stateSet.has(final)) {
        ok(
          false,
          `Final state '${final}' must be included in list of states [${states.join(
            ", "
          )}]`
        );
      }
    }

    for (const state of transitions.keys()) {
      if (!stateSet.has(state)) {
        ok(
          false,
          `Transitions contain unknown state '${state}'`
        );
      }
    }

    for (const row of transitions.values()) {
      for (const symbol of row.keys()) {
        if (symbol !== Epsilon && !symbolSet.has(symbol)) {
          ok(
            false,
            `Transitions contain unknown symbol '${String(symbol)}'`
          );
        }
      }
    }

    for (const row of transitions.values()) {
      for (const column of row.values()) {
        for (let i = 0; i < column.length; i++) {
          const state = column[i];
          if (!stateSet.has(state)) {
            ok(
              false,
              `Transitions contain unknown target state '${state}'`
            );
          }
        }
      }
    }
  }

  /**
   * Just a very simple non-exhausting test algorithm.
   *
   * @internal
   * @param {SYMBOL[]} input
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
      const row = this.description.transitions.get(current);
      if (input.length === 0) {
        if (this.description.finals.includes(current)) {
          return true;
        }
        const epsWays = row?.get(Epsilon);
        return Boolean(epsWays?.some((way) => step(input, way)));
      }

      const symWays = row?.get(input[0]);
      if (symWays?.some((way) => step(input.slice(1), way))) {
        return true;
      }
      const epsWays = row?.get(Epsilon);
      return Boolean(epsWays?.some((way) => step(input, way)));
    };

    return step(input, this.description.start);
  }
}
