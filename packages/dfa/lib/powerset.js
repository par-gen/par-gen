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
 * @typedef {Object} DState
 * @property {string} name
 * @property {string[]} nstates
 */

/**
 * @template OLD_STATE, NEW_STATE
 * @typedef {(n: number, state: OLD_STATE[]) => NEW_STATE} StateMapper
 */

/**
 * @param {NFA<string, string>} nfa
 * @param {StateMapper<string, string>} [stateMapper]
 * @returns {DFADescription<string, string>}
 */
export function fromNFA(nfa, stateMapper = (n) => `S${n}`) {
  const { dstates, transitions, start, finals } = construct(nfa, stateMapper);

  return {
    states: dstates.map((dstate) => dstate.name),
    symbols: nfa.description.symbols,
    transitions: new Map(
      Object.entries(transitions).map(([state, transition]) => {
        return [
          state,
          new Map(
            Object.entries(transition).map(([symbol, dstate]) => {
              return [symbol, dstate.name];
            })
          ),
        ];
      })
    ),
    start: start.name,
    finals: finals.map((final) => final.name),
  };
}

/**
 * @param {NFA<string, string>} nfa
 * @param {string[]} states
 * @returns {string[]}
 */
function getEpsilonClosure(nfa, states) {
  /** @type {string[]} */
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
 * @param {DState[]} dstates
 * @param {string[]} states
 * @returns {DState | undefined}
 */
function getDState(dstates, states) {
  return dstates.find(
    (dstate) =>
      dstate.nstates.length === states.length &&
      states.every((state) => dstate.nstates.includes(state))
  );
}

/**
 * @param {NFA<string, string>} nfa
 * @param {StateMapper<string, string>} stateMapper
 * @returns {{ dstates: DState[], transitions: { [state: string]: { [symbol: string]: DState } }, start: DState, finals: DState[] }}
 */
function construct(nfa, stateMapper) {
  let index = 0;

  const start = {
    name: stateMapper(index++, [nfa.description.start]),
    nstates: getEpsilonClosure(nfa, [nfa.description.start]),
  };
  /** @type {DState[]} */
  const dstates = [start];

  /** @type {DState[]} */
  const marked = [];

  /** @type {{[state: string]: {[symbol: string]: DState}}} */
  const transitions = {};

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
          /** @type {(states: string | undefined) => states is string} */ ((
            states
          ) => Boolean(states))
        );
      const statesWithEpsilon = getEpsilonClosure(nfa, states);

      const nextDState = getDState(dstates, statesWithEpsilon) ?? {
        name: stateMapper(index++, statesWithEpsilon),
        nstates: statesWithEpsilon,
      };

      transitions[dstate.name] = {
        ...transitions[dstate.name],
        [symbol]: nextDState,
      };

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
