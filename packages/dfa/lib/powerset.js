import { Epsilon } from "@knisterpeter/expound-nfa";

/**
 * @typedef {Object} DState
 * @property {string} name
 * @property {string[]} nstates
 */

/**
 * @param {import('@knisterpeter/expound-nfa').NFA} nfa
 * @returns {import('./dfa').DFADescription}
 */
export function fromNFA(nfa) {
  const { dstates, transitions, start, finals } = construct(nfa);

  return {
    states: dstates.map((dstate) => dstate.name),
    symbols: nfa.description.symbols,
    transitions: Object.fromEntries(
      Object.entries(transitions).map(([state, transition]) => {
        return [
          state,
          Object.fromEntries(
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
 * @param {import('@knisterpeter/expound-nfa').NFA} nfa
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
    const transitions = nfa.description.transitions[state];
    const next = transitions[Epsilon];
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
 * @param {import('@knisterpeter/expound-nfa').NFA} nfa
 * @returns {{ dstates: DState[], transitions: { [state: string]: { [symbol: string]: DState } }, start: DState, finals: DState[] }}
 */
function construct(nfa) {
  let index = 0;

  const start = {
    name: `S${index++}`,
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
        .flatMap((state) => nfa.description.transitions[state][symbol])
        .filter(Boolean);
      const statesWithEpsilon = getEpsilonClosure(nfa, states);

      if (statesWithEpsilon.length === 0) {
        return;
      }

      const nextDState = getDState(dstates, statesWithEpsilon) ?? {
        name: `S${index++}`,
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
