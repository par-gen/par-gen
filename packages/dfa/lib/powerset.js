import { Epsilon } from "@knisterpeter/expound-nfa";
import debug from "debug";
import { performance } from "perf_hooks";

const log = debug("expound:dfa");

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
 * @typedef {Object} DFAState
 * @property {NEW_STATE} name
 * @property {STATE[]} nfaStates
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
  const traceStart = performance.now();
  log("enter fromNFA");
  try {
    const { dfaStates, transitions, start, finals } = construct(
      nfa,
      stateMapper
    );

    return {
      states: dfaStates.map((dfaState) => dfaState.name),
      symbols: nfa.description.symbols,
      transitions,
      start: start.name,
      finals: finals.map((final) => final.name),
    };
  } finally {
    const traceEnd = performance.now();
    log("exit fromNFA (took %d ms)", traceEnd - traceStart);
  }
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
 * @param {DFAState<STATE, NEW_STATE>[]} dfaStates
 * @param {STATE[]} states
 * @returns {DFAState<STATE, NEW_STATE> | undefined}
 */
function getDFAState(dfaStates, states) {
  return dfaStates.find(
    (dfaState) =>
      dfaState.nfaStates.length === states.length &&
      states.every((state) => dfaState.nfaStates.includes(state))
  );
}

/**
 * @template STATE, NEW_STATE, SYMBOL
 * @param {NFA<STATE, SYMBOL>} nfa
 * @param {StateMapper<STATE, NEW_STATE>} stateMapper
 * @returns {{ dfaStates: DFAState<STATE, NEW_STATE>[], transitions: Map<NEW_STATE, Map<SYMBOL, NEW_STATE>>, start: DFAState<STATE, NEW_STATE>, finals: DFAState<STATE, NEW_STATE>[] }}
 */
function construct(nfa, stateMapper) {
  const traceStart = performance.now();
  log("enter construct");
  try {
    let index = 0;

    const start = {
      name: stateMapper(index++, [nfa.description.start]),
      nfaStates: getEpsilonClosure(nfa, [nfa.description.start]),
    };
    /** @type {DFAState<STATE, NEW_STATE>[]} */
    const dfaStates = [start];

    /** @type {DFAState<STATE, NEW_STATE>[]} */
    const marked = [];

    /** @type {Map<NEW_STATE, Map<SYMBOL, NEW_STATE>>} */
    const transitions = new Map();

    while (true) {
      const next = dfaStates.find((state) => !marked.includes(state));
      if (!next) {
        break;
      }
      const dfaState = next;
      marked.push(dfaState);

      nfa.description.symbols.forEach((symbol) => {
        const states = dfaState.nfaStates
          .flatMap((state) =>
            nfa.description.transitions.get(state)?.get(symbol)
          )
          .filter(
            /** @type {(states: STATE | undefined) => states is STATE} */ ((
              states
            ) => Boolean(states))
          );
        const statesWithEpsilon = getEpsilonClosure(nfa, states);

        const nextDFAState = getDFAState(dfaStates, statesWithEpsilon) ?? {
          name: stateMapper(index++, statesWithEpsilon),
          nfaStates: statesWithEpsilon,
        };

        transitions.set(
          dfaState.name,
          new Map([
            ...Array.from(transitions.get(dfaState.name)?.entries() ?? []),
            [symbol, nextDFAState.name],
          ])
        );

        if (!dfaStates.includes(nextDFAState)) {
          dfaStates.push(nextDFAState);
        }
      });
    }

    const finals = nfa.description.finals.flatMap((state) =>
      dfaStates.filter((dfaState) => dfaState.nfaStates.includes(state))
    );

    return {
      dfaStates: dfaStates,
      transitions,
      start,
      finals,
    };
  } finally {
    const traceEnd = performance.now();
    log("exit construct (took %d ms)", traceEnd - traceStart);
  }
}
