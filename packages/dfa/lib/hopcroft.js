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
  const { states, symbols, transitions, finals } = dfa.description;

  const initial = partitionizer?.() ?? [
    finals,
    states.filter((state) => !finals.includes(state)),
  ];

  const partitions = [...initial.map((array) => [...array])];
  const queue = [...initial.map((array) => [...array])];

  while (queue.length > 0) {
    const item = queue.shift();
    if (!item) {
      throw new Error("Invalid state");
    }
    const partitionSet = item;

    symbols.forEach((c) => {
      const X = Array.from(transitions.entries() ?? [])
        .filter(([, transition]) =>
          Array.from(transition.entries() ?? []).some(
            ([symbol, target]) => c === symbol && partitionSet.includes(target)
          )
        )
        .map(([state]) => state);

      partitions
        .map((Y, n) => {
          const yux = Y.filter((y) => X.includes(y));
          const yox = Y.filter((y) => !X.includes(y));
          return { n, Y, yux, yox };
        })
        .filter(({ yux, yox }) => {
          return yux.length > 0 && yox.length > 0;
        })
        .forEach(({ n, Y, yux, yox }) => {
          partitions.splice(n, 1, yux, yox);

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
        });
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
}
