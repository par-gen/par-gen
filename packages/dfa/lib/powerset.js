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
 * @param {Map<STATE, STATE[]>} cache
 * @param {NFA<STATE, SYMBOL>} nfa
 * @param {STATE} state
 * @returns {STATE[]}
 */
function singleStateEpsilonClosure(cache, nfa, state) {
  let cached = cache.get(state);

  if (!cached) {
    /** @type {Set<STATE>} */
    const selected = new Set();
    const open = [state];

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
        selected.add(state);
      });
    }

    cached = [state, ...Array.from(selected)];
    cache.set(state, cached);
  }

  return cached;
}

/**
 * @template STATE
 * @param {STATE[][]} closureKeyCache
 * @param {STATE[]} input
 * @returns {number}
 */
const calculateCacheKey = (closureKeyCache, input) => {
  for (let i = 0; i < closureKeyCache.length; i++) {
    const cacheItem = closureKeyCache[i];
    if (cacheItem.length === input.length) {
      let equal = true;
      for (let j = 0; j < input.length; j++) {
        if (cacheItem[j] !== input[j]) {
          equal = false;
        }
      }
      if (equal) {
        return i;
      }
    }
  }
  return closureKeyCache.push(input) - 1;
};

/**
 * @template STATE, SYMBOL
 * @param {Map<number, STATE[]>} epsilonCache
 * @param {STATE[][]} closureKeyCache
 * @param {Map<STATE, STATE[]>} singleStateCache
 * @param {NFA<STATE, SYMBOL>} nfa
 * @param {STATE[]} states
 * @returns {STATE[]}
 */
function getEpsilonClosure(
  epsilonCache,
  closureKeyCache,
  singleStateCache,
  nfa,
  states
) {
  const key = calculateCacheKey(closureKeyCache, states);

  let result = epsilonCache.get(key);
  if (!result) {
    /** @type {Set<STATE>} */
    const selected = new Set();

    for (const state of states) {
      for (const item of singleStateEpsilonClosure(
        singleStateCache,
        nfa,
        state
      )) {
        selected.add(item);
      }
    }

    result = Array.from(selected);
    epsilonCache.set(key, result);
  }

  return result;
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

    /** @type {Map<STATE, STATE[]>} */
    let closureCache = new Map();

    /** @type {STATE[][]} */
    const closureKeyCache = [];

    /** @type {Map<number, STATE[]>} */
    const epsilonCache = new Map();

    /** @type {Map<STATE[], DFAState<STATE, NEW_STATE>>} */
    const dfaStateMap = new Map();

    const start = {
      name: stateMapper(index++, [nfa.description.start]),
      nfaStates: getEpsilonClosure(
        epsilonCache,
        closureKeyCache,
        closureCache,
        nfa,
        [nfa.description.start]
      ),
    };
    /** @type {DFAState<STATE, NEW_STATE>[]} */
    const dfaStates = [];

    /** @type {DFAState<STATE, NEW_STATE>[]} */
    const queue = [start];

    /** @type {Map<NEW_STATE, Map<SYMBOL, NEW_STATE>>} */
    const transitions = new Map();

    /** @type {Map<SYMBOL, Map<STATE, STATE[]>>} */
    const toStatesCache = new Map();

    nfa.description.symbols.forEach((s) => {
      for (const [from, transition] of nfa.description.transitions.entries()) {
        for (const [symbol, to] of transition.entries()) {
          if (symbol === s) {
            let map = toStatesCache.get(s);
            if (!map) {
              map = new Map();
              toStatesCache.set(s, map);
            }
            map.set(from, to);
          }
        }
      }
    });

    while (queue.length > 0) {
      const dfaState = queue.shift();
      if (!dfaState) {
        continue;
      }
      dfaStates.push(dfaState);

      nfa.description.symbols.forEach((symbol) => {
        const toStates = toStatesCache.get(symbol) ?? new Map();

        const states = dfaState.nfaStates.reduce((list, from) => {
          const to = toStates.get(from);
          if (to) {
            list.push(...to);
          }
          return list;
        }, /** @type {STATE[]} */ ([]));

        const statesWithEpsilon = getEpsilonClosure(
          epsilonCache,
          closureKeyCache,
          closureCache,
          nfa,
          states
        );

        let targetDFAState = dfaStateMap.get(statesWithEpsilon);
        if (!targetDFAState) {
          targetDFAState = {
            name: stateMapper(index++, statesWithEpsilon),
            nfaStates: statesWithEpsilon,
          };

          queue.push(targetDFAState);
          dfaStateMap.set(statesWithEpsilon, targetDFAState);
        }

        transitions.set(
          dfaState.name,
          new Map([
            ...Array.from(transitions.get(dfaState.name)?.entries() ?? []),
            [symbol, targetDFAState.name],
          ])
        );
      });
    }

    const finals = nfa.description.finals.flatMap((state) =>
      dfaStates.filter((dfaState) => dfaState.nfaStates.includes(state))
    );

    return { dfaStates, transitions, start, finals };
  } finally {
    const traceEnd = performance.now();
    log("exit construct (took %d ms)", traceEnd - traceStart);
  }
}
