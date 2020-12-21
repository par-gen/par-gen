import debug from "debug";
import { performance } from "perf_hooks";

const log = debug("expound:dfa");

/**
 * @template STATE, SYMBOL
 * @typedef {import('./dfa').DFA<STATE, SYMBOL>} DFA
 */

/**
 * @template STATE, SYMBOL
 * @typedef {import('./dfa').DFADescription<STATE, SYMBOL>} DFADescription
 */

/**
 * @template OLD_STATE, NEW_STATE
 * @typedef {(n: number, state: OLD_STATE[]) => NEW_STATE} StateMapper
 */

/**
 * @template STATE, NEW_STATE, SYMBOL
 * @param {DFA<STATE, SYMBOL>} dfa
 * @param {{partitionizer?: () => STATE[][], stateMapper: StateMapper<STATE, NEW_STATE>}} options
 * @return {DFADescription<NEW_STATE, SYMBOL>}
 */
export function minimize(dfa, { partitionizer, stateMapper }) {
  const traceStart = performance.now();
  log("enter minimize");
  try {
    const { states, symbols, transitions, finals } = dfa.description;

    const initial = partitionizer?.() ?? [
      finals,
      states.filter((state) => !finals.includes(state)),
    ];

    const partitions = [...initial.map((array) => [...array])];
    const queue = [...initial.map((array) => [...array])];

    /** @type {Map<SYMBOL, Map<STATE, STATE[]>>} */
    const targetSourceStateCache = new Map();

    /**
     * @param {SYMBOL} s
     * @returns {Map<STATE, STATE[]>}
     */
    const transitionsPerSymbol = (s) => {
      let result = targetSourceStateCache.get(s);
      if (!result) {
        result = new Map();

        for (const [from, transition] of transitions.entries()) {
          for (const [symbol, target] of transition.entries()) {
            if (s === symbol) {
              let sources = result.get(target);
              if (!sources) {
                sources = [];
                result.set(target, sources);
              }
              sources.push(from);
            }
          }
        }

        targetSourceStateCache.set(s, result);
      }
      return result;
    };

    while (queue.length > 0) {
      const item = queue.shift();
      if (!item) {
        throw new Error("Invalid state");
      }
      const partitionSet = item;

      /**
       * @type {Map<STATE, boolean>}
       */
      const includesCache = new Map();
      /**
       * @param {STATE} state
       */
      const includesStates = (state) => {
        let result = includesCache.get(state);
        if (result === undefined) {
          result = partitionSet.includes(state);
          includesCache.set(state, result);
        }
        return result;
      };

      /** @type {STATE[][]} */
      const xCache = [];

      /**
       * @param {STATE[]} X
       * @returns {number}
       */
      const calculateXCacheKey = (X) => {
        let i = 0;
        for (let c of xCache) {
          if (c.length === X.length) {
            if (X.every((x) => c.includes(x))) {
              return i;
            }
          }
          i++;
        }
        return xCache.push(X);
      };

      /** @type {Map<number, Map<STATE[], [STATE[], STATE[]]>>}} */
      const partitionSetCache = new Map();
      /**
       * @param {number} key
       * @param {STATE[]} Y
       * @param {STATE[]} X
       */
      const calculatePartitionSets = (key, X, Y) => {
        let xState = partitionSetCache.get(key);
        if (!xState) {
          xState = new Map();
          partitionSetCache.set(key, xState);
        }
        let yState = xState.get(Y);
        if (!yState) {
          const yux = Y.filter((y) => X.includes(y));
          const yox = Y.filter((y) => !X.includes(y));
          yState = [yux, yox];
          xState.set(Y, yState);
        }
        return yState;
      };

      symbols.forEach((c) => {
        /** @type {STATE[]} */
        let X = [];

        for (const [target, sources] of transitionsPerSymbol(c).entries()) {
          if (includesStates(target)) {
            X.push(...sources);
          }
        }

        if (X.length === 0) {
          // if X is empty, we will not find partitions with overlap
          return;
        }

        const xCacheKey = calculateXCacheKey(X);

        for (const Y of partitions) {
          const [yux, yox] = calculatePartitionSets(xCacheKey, X, Y);

          if (!(yux.length > 0 && yox.length > 0)) {
            continue;
          }

          partitions.splice(partitions.indexOf(Y), 1, yux, yox);

          const queueIndex = queue.findIndex(
            (w) =>
              w.length === Y.length && w.every((entry) => Y.includes(entry))
          );

          if (queueIndex > -1) {
            queue.splice(queueIndex, 1, yux, yox);
          } else if (yux.length <= yox.length) {
            queue.push(yux);
          } else {
            queue.push(yox);
          }
        }
      });
    }

    /**
     * @param {STATE} state
     * @return {number}
     */
    const newStateIndex = (state) =>
      partitions.findIndex((partition) => partition.includes(state));

    const start = stateMapper(newStateIndex(dfa.description.start), [
      dfa.description.start,
    ]);

    /**
     * @param {STATE} oldState
     * @return {STATE[]}
     */
    const oldStates = (oldState) => {
      const partition = partitions.find((partition) =>
        partition.includes(oldState)
      );
      if (!partition) {
        throw new Error("Illegal state");
      }
      return partition;
    };

    const minimalTransitions = partitions.reduce(
      (accumulator, partition, index) => {
        accumulator.set(
          stateMapper(index, partition),
          new Map(
            partition.flatMap((state) => {
              return Array.from(
                transitions.get(state)?.entries() ?? []
              ).map(([symbol, oldState]) => [
                symbol,
                stateMapper(newStateIndex(oldState), oldStates(oldState)),
              ]);
            })
          )
        );
        return accumulator;
      },
      /** @type {DFADescription<NEW_STATE, SYMBOL>['transitions']} */ (new Map())
    );

    /** @type {DFADescription<NEW_STATE, SYMBOL>} */
    const description = {
      states: Array.from(minimalTransitions.keys()),
      symbols: symbols,
      transitions: minimalTransitions,
      start,
      finals: partitions
        .filter(
          (partition) =>
            finals.filter((final) => partition.includes(final)).length > 0
        )
        .map((partition, index) => stateMapper(index, partition)),
    };

    return description;
  } finally {
    const traceEnd = performance.now();
    log("exit minimize (took %d ms)", traceEnd - traceStart);
  }
}
