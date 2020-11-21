import { ok } from "assert";

/**
 * @typedef {Object} DFADescription
 * @property {string[]} states
 * @property {string[]} symbols
 * @property {{[state: string]: {[symbol: string]: string}}} transitions
 * @property {string} start
 * @property {string[]} finals
 */

export class DFA {
  /**
   * @param {DFADescription} description
   */
  constructor(description) {
    this._validate(description);

    this.description = description;
  }

  /**
   * @internal
   * @private
   * @param {DFADescription} description
   */
  _validate(description) {
    const { states, symbols, transitions, start, finals } = description;

    ok(states.length, `Must be created with a list of states`);
    ok(symbols.length, `Must be created with a list of symbols`);
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
    Object.keys(transitions).forEach((state) => {
      ok(
        states.includes(state),
        `Transition contains unknown state '${state}'`
      );
    });
    Object.entries(transitions).forEach(([state, row]) => {
      Object.keys(row).forEach((symbol) => {
        ok(
          symbols.includes(symbol),
          `Transition from '${state}' contains unknown symbol '${symbol}'`
        );
      });
    });
    Object.entries(transitions).forEach(([state, row]) => {
      Object.entries(row).forEach(([symbol, target]) => {
        ok(
          states.includes(target),
          `Transition from '${state}' with symbol '${symbol}' contains unknown target state '${target}'`
        );
      });
    });
  }

  /**
   * Just a very simple non-exhausting test algorithm.
   *
   * @internal
   * @param {string[]} input
   * @return {boolean}
   */
  test(input) {
    input.forEach((symbol) => {
      if (!this.description.symbols.includes(symbol)) {
        throw new Error(`Invalid symbol: '${symbol}'`);
      }
    });

    /**
     * @param {string[]} input
     * @param {string} current
     * @returns {boolean}
     */
    const step = (input, current) => {
      if (input.length === 0) {
        return this.description.finals.includes(current);
      }

      let way = this.description.transitions[current][input[0]];
      if (!way) {
        return this.description.finals.includes(current);
      }

      return step(input.slice(1), way);
    };

    return step(input, this.description.start);
  }
}
