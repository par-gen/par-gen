import { ok } from "assert";

import { Epsilon } from "./constants.js";
import { fromRegExp } from "./thompson.js";

/**
 * @typedef {Object} NFADescription
 * @property {string[]} states
 * @property {string[]} symbols
 * @property {Map<string, Map<Epsilon|string, string[]>>} transitions
 * @property {string} start
 * @property {string[]} finals
 */

  /**
 *
   */
export class NFA {
  /**
   * @param {string} regexp regular expression to create a NFA from
   * @returns {NFA}
   */
  static fromRegExp(regexp) {
    return new NFA(fromRegExp(regexp));
  }

  /**
   * @param {NFADescription} description
   */
  constructor(description) {
    this._validate(description);

    this.description = description;
  }

  /**
   * @internal
   * @private
   * @param {NFADescription} description
   */
  _validate(description) {
    const { states, symbols, transitions, start, finals } = description;

    ok(states.length > 0, "Must be created with a list of states");

    ok(symbols.length > 0, "Must have at least one symbol");

    ok(
      states.includes(start),
      `Start state '${start}' must be included in list of states [${states.join(
        ", "
      )}]`
    );

    ok(finals.length > 0, "Must have at least one final state");
    finals.forEach((final) =>
      ok(
        states.includes(final),
        `Final state '${final}' must be included in list of states [${states.join(
          ", "
        )}]`
      )
    );

    for (const state of transitions.keys()) {
      ok(
        states.includes(state),
        `Transitions contain unknown state '${state}'`
    );
    }

    for (const row of transitions.values()) {
      for (const symbol of row.keys()) {
        ok(
          symbol === Epsilon || symbols.includes(symbol),
          `Transitions contain unknown symbol '${symbol.toString()}'`
      );
      }
    }

    for (const row of transitions.values()) {
      for (const column of row.values()) {
        column.forEach((state) =>
          ok(
            states.includes(state),
            `Transitions contain unknown target state '${state}'`
          )
        );
      }
    }
  }

  /**
   * Just a very simple non-exhausting test algorithm.
   *
   * @internal
   * @param {string[]} input
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
      let symbol = input[0];
      let useEpsilon = false;

      let ways = this.description.transitions.get(current)?.get(symbol);
      if (!ways) {
        const maybeEmptyWays = this.description.transitions
          .get(current)
          ?.get(Epsilon);
        if (!maybeEmptyWays) {
          return this.description.finals.includes(current);
        }
        useEpsilon = true;
        ways = maybeEmptyWays;
      }

      if (ways.length === 0) {
        return this.description.finals.includes(current);
      }

      if (!useEpsilon && input.length === 0) {
        return this.description.finals.includes(current);
      }

      return ways.some((way) => step(useEpsilon ? input : input.slice(1), way));
    };

    return step(input, this.description.start);
  }
}
