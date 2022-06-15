import { ok } from "assert";

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
   * @returns {string}
   */
  compileToString(symbolMapper) {
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

    const code = `'use strict';
      const defaults = new Uint${table.length < 256 ? "8" : "16"}Array(${
      defaults.length
    });
      ${defaults.map((d, i) => `defaults[${i}] = ${d};`).join("\n")}

      const offsets = new Uint${table.length < 256 ? "8" : "16"}Array(${
      offsets.length
    });
      ${offsets.map((o, i) => `offsets[${i}] = ${o};`).join("\n")}

      const table = new Uint${table.length < 256 ? "8" : "16"}Array(${
      packedflat.length
    });
      ${packedflat.map((p, i) => `table[${i}] = ${p};`).join("\n")}

      function test(input) {
        let state = ${start};
        let index = 0;
        for (let i = 0, l = input.length; i < l; i++) {
          index = (offsets[state] + input[i]) * 2;
          state = table[index] === state ? table[index + 1] : defaults[state];
        }
        return ${finals.map((final) => `${final} === state`).join(" || ")};
      };
    `;

    return code;
  }

  /**
   * @param {(symbol: SYMBOL) => number} symbolMapper
   * @returns {(input: Uint8Array) => boolean}
   */
  compile(symbolMapper) {
    const code = this.compileToString(symbolMapper);

    const automata =
      /** @type {() => (input: Uint8Array) => boolean} */
      (new Function(code.replace("function test", "return function")))();
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

  /**
   * @param {(state: STATE) => string} stateMapper
   * @returns {string}
   */
  toString(stateMapper = (s) => String(s)) {
    const d = this.description;

    const errorState = (Array.from(d.transitions.entries()).find(
      ([from, transitions]) =>
        Array.from(transitions.values()).every((to) => to === from) &&
        !d.finals.includes(from)
    ) ?? [])[0];

    /**
     * @param {string} state
     * @returns {string}
     */
    function stateColor(state) {
      if (state === stateMapper(d.start)) {
        return blue(state);
      }
      if (errorState && state === stateMapper(errorState)) {
        return red(state);
      }
      if (d.finals.some((f) => stateMapper(f) === state)) {
        return green(state);
      }
      return state;
    }

    /**
     * @param {string} symbol
     * @returns {string}
     */
    function renderSymbol(symbol) {
      /** @type {Record<string, string>} */
      const escaped = {
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\v": "\\v",
        "\0": "\\0",
      };

      return (
        escaped[symbol] ||
        (symbol.charCodeAt(0) < 32 || symbol.charCodeAt(0) > 127
          ? `\\x${symbol.charCodeAt(0).toString(16).padStart(2, "0")}`
          : symbol)
      );
    }

    const table = Object.fromEntries(
      Array.from(d.transitions.entries()).map(([state, transitions]) => {
        return [
          stateColor(stateMapper(state)),
          Object.fromEntries(
            Array.from(transitions.entries()).map(([symbol, state]) => {
              return [
                renderSymbol(String(symbol)),
                stateColor(stateMapper(state)),
              ];
            })
          ),
        ];
      })
    );

    return [
      `States (${d.states.length}): ${d.states
        .map((s) => stateColor(stateMapper(s)))
        .join(", ")}`,
      `Symbols (${d.symbols.length}): ${d.symbols
        .map((s) => renderSymbol(String(s)))
        .join(", ")}`,
      `${blue("starting state")}, ${green("accepting state")}, ${red(
        "error state"
      )}`,
      renderTable(table),
    ].join("\n");
  }
}

/**
 * @param {Record<string, Record<string, string>>} data
 * @returns {string}
 */
function renderTable(data) {
  /** @type {string[]} */
  const headers = [];
  /** @type {Record<string, string[]>} */
  const entries = {};
  /** @type {number[]} */
  const widths = [];
  /** @type {number} */
  let maxLabelWidth = 0;

  for (const row of Object.values(data)) {
    for (const key of Object.keys(row)) {
      if (!headers.includes(key)) {
        headers.push(key);
      }
    }
  }
  headers.sort();

  for (const [label, row] of Object.entries(data)) {
    entries[label] = new Array(headers.length);
    maxLabelWidth = Math.max(maxLabelWidth, stripAnsi(label).length);

    for (const [key, value] of Object.entries(row)) {
      const colIdx = headers.indexOf(key);
      entries[label][colIdx] = value;
      widths[colIdx] = Math.max(
        widths[colIdx] ?? 0,
        stripAnsi(key).length,
        stripAnsi(value).length
      );
    }
  }

  /**
   * @param {string} label
   * @param {string[]} row
   * @returns {string[]}
   */
  function renderRow(label, row) {
    const lw = label.length;
    const mlw = maxLabelWidth + 2 + lw - stripAnsi(label).length;

    const tmp = [label.padStart(lw + Math.floor((mlw - lw) / 2)).padEnd(mlw)];

    for (let i = 0; i < row.length; i++) {
      const rw = row[i].length;
      const mrw = widths[i] + 2 + rw - stripAnsi(row[i]).length;

      tmp.push(row[i].padStart(rw + Math.floor((mrw - rw) / 2)).padEnd(mrw));
    }

    return tmp;
  }

  const header = renderRow("", headers);
  const headerWidth = header.reduce((w, e) => w + stripAnsi(e).length, 0);

  /** @type {string[]} */
  const out = [
    dim("-".repeat(headerWidth + header.length - 1)),
    header.join(dim("|")),
    dim("-".repeat(headerWidth + header.length - 1)),
  ];

  for (let [label, row] of Object.entries(entries)) {
    out.push(renderRow(label, row).join(dim("|")));
  }

  out.push(dim("-".repeat(headerWidth + header.length - 1)));

  return out.join("\n");
}

/**
 * @param {string} str
 * @returns {string}
 */
function stripAnsi(str) {
  return str.replace(/\x1b\[\d+m(.*?)\x1b\[0m/, "$1");
}

/**
 * @param {string} str
 * @returns {string}
 */
function dim(str) {
  return `\x1b[2m${str}\x1b[0m`;
}

/**
 * @param {string} str
 * @returns {string}
 */
function red(str) {
  return `\x1b[31m${str}\x1b[0m`;
}

/**
 * @param {string} str
 * @returns {string}
 */
function green(str) {
  return `\x1b[32m${str}\x1b[0m`;
}

/**
 * @param {string} str
 * @returns {string}
 */
function blue(str) {
  return `\x1b[34m${str}\x1b[0m`;
}
