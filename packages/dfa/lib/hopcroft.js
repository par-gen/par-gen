/**
 * @param {import('./dfa').DFA} dfa
 * @return {import('./dfa').DFADescription}
 */
export function hopcroft(dfa) {
  const { states, symbols, transitions, finals } = dfa.description;

  const partitions = [
    finals,
    states.filter((state) => !finals.includes(state)),
  ];
  const queue = [finals, states.filter((state) => !finals.includes(state))];

  while (queue.length > 0) {
    const item = queue.shift();
    if (!item) {
      throw new Error("Invalid state");
    }
    const partitionSet = item;

    symbols.forEach((c) => {
      const X = Object.entries(transitions)
        .filter(([, transition]) =>
          Object.entries(transition).some(
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

  const start = `S${partitions.findIndex((partition) =>
    partition.includes(dfa.description.start)
  )}`;

  /** @type {import('./dfa').DFADescription['transitions']} */
  const minimalTransitions = partitions.reduce(
    (accumulator, partition, index) => ({
      ...accumulator,
      ...partition.reduce(
        (accumulator, oldState) => ({
          ...accumulator,
          [`S${index}`]: {
            ...accumulator[`S${index}`],
            ...Object.fromEntries(
              Object.entries(
                transitions[oldState]
              ).map(([symbol, oldTarget]) => [
                symbol,
                `S${partitions.findIndex((partition) =>
                  partition.includes(oldTarget)
                )}`,
              ])
            ),
          },
        }),
        /** @type {import('./dfa').DFADescription['transitions']} */ ({})
      ),
    }),
    {}
  );

  /** @type {import('./dfa').DFADescription} */
  const description = {
    states: Object.keys(minimalTransitions),
    symbols: symbols,
    transitions: minimalTransitions,
    start,
    finals: partitions
      .filter(
        (partition) =>
          finals.filter((final) => partition.includes(final)).length > 0
      )
      .map((_, index) => `S${index}`),
  };

  return description;
}
