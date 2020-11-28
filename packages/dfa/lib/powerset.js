import { Epsilon } from "@knisterpeter/expound-nfa";

/**
 * @template STATE, SYMBOL
 * @typedef {import('@knisterpeter/expound-nfa').NFA<STATE, SYMBOL>} NFA
 */

/**
 * @template STATE, SYMBOL
 * @typedef {import('./dfa').DFADescription<STATE, SYMBOL>} DFADescription
 */

/**
 * @template STATE, NEW_STATE
 * @typedef {Object} DState
 * @property {NEW_STATE} name
 * @property {STATE[]} nstates
 */

/**
 * @template OLD_STATE, NEW_STATE
 * @typedef {(n: number, state: OLD_STATE[]) => NEW_STATE} StateMapper
 */

/**
 * @template STATE, NEW_STATE, SYMBOL
 * @param {NFA<STATE, SYMBOL>} nfa
 * @param {StateMapper<STATE, NEW_STATE>} stateMapper
 * @returns {DFADescription<NEW_STATE, SYMBOL>}
 */
export function fromNFA(nfa, stateMapper) {
  const { dstates, transitions, start, finals } = construct(nfa, stateMapper);

  return {
    states: dstates.map((dstate) => dstate.name),
    symbols: nfa.description.symbols,
    transitions,
    start: start.name,
    finals: finals.map((final) => final.name),
  };
}

/**
 * @template STATE, SYMBOL
 * @param {NFA<STATE, SYMBOL>} nfa
 * @param {STATE[]} states
 * @returns {STATE[]}
 */
function getEpsilonClosure(nfa, states) {
  /** @type {STATE[]} */
  const selected = [];
  const open = [...states];

  while (open.length > 0) {
    const state = open.pop();
    if (!state) {
      continue;
    }
    const transitions = nfa.description.transitions.get(state);
    const next = transitions?.get(Epsilon);
    if (!next) {
      continue;
    }
    open.push(...next);

    next.forEach((state) => {
      if (!selected.includes(state)) {
        selected.push(state);
      }
    });
  }

  return [...states, ...selected];
}

/**
 * @template STATE, NEW_STATE
 * @param {DState<STATE, NEW_STATE>[]} dstates
 * @param {STATE[]} states
 * @returns {DState<STATE, NEW_STATE> | undefined}
 */
function getDState(dstates, states) {
  return dstates.find(
    (dstate) =>
      dstate.nstates.length === states.length &&
      states.every((state) => dstate.nstates.includes(state))
  );
}

/**
 * @template STATE, NEW_STATE, SYMBOL
 * @param {NFA<STATE, SYMBOL>} nfa
 * @param {StateMapper<STATE, NEW_STATE>} stateMapper
 * @returns {{ dstates: DState<STATE, NEW_STATE>[], transitions: Map<NEW_STATE, Map<SYMBOL, NEW_STATE>>, start: DState<STATE, NEW_STATE>, finals: DState<STATE, NEW_STATE>[] }}
 */
function construct(nfa, stateMapper) {
  let index = 0;

  const start = {
    name: stateMapper(index++, [nfa.description.start]),
    nstates: getEpsilonClosure(nfa, [nfa.description.start]),
  };
  /** @type {DState<STATE, NEW_STATE>[]} */
  const dstates = [start];

  /** @type {DState<STATE, NEW_STATE>[]} */
  const marked = [];

  /** @type {Map<NEW_STATE, Map<SYMBOL, NEW_STATE>>} */
  const transitions = new Map();

  while (true) {
    const next = dstates.find((state) => !marked.includes(state));
    if (!next) {
      break;
    }
    const dstate = next;
    marked.push(dstate);

    nfa.description.symbols.forEach((symbol) => {
      const states = dstate.nstates
        .flatMap((state) => nfa.description.transitions.get(state)?.get(symbol))
        .filter(
          /** @type {(states: STATE | undefined) => states is STATE} */ ((
            states
          ) => Boolean(states))
        );
      const statesWithEpsilon = getEpsilonClosure(nfa, states);

      const nextDState = getDState(dstates, statesWithEpsilon) ?? {
        name: stateMapper(index++, statesWithEpsilon),
        nstates: statesWithEpsilon,
      };

      transitions.set(
        dstate.name,
        new Map([
          ...Array.from(transitions.get(dstate.name)?.entries() ?? []),
          [symbol, nextDState.name],
        ])
      );

      if (!dstates.includes(nextDState)) {
        dstates.push(nextDState);
      }
    });
  }

  const finals = nfa.description.finals.flatMap((state) =>
    dstates.filter((dstate) => dstate.nstates.includes(state))
  );

  return { dstates, transitions, start, finals };
}
