import { Epsilon } from "@par-gen/nfa";
import debug from "debug";
import { performance } from "perf_hooks";

const log = debug("par-gen:dfa");
const ZERO = BigInt(0);
const ONE = BigInt(1);

/**
 * @template STATE, SYMBOL
 * @typedef {import('@par-gen/nfa').NFA<STATE, SYMBOL>} NFA
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
    const selected = new Set([state]);
    const open = [state];

    while (open.length > 0) {
      const current = open.pop();
      if (!current) {
        continue;
      }

      const transitions = nfa.description.transitions.get(current);
      const next = transitions?.get(Epsilon);
      if (!next) {
        continue;
      }
      open.push(...next);

      for (let i = 0; i < next.length; i++) {
        selected.add(next[i]);
      }
    }

    cached = Array.from(selected);
    cache.set(state, cached);
  }

  return cached;
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

    const {
      states: nfaStatesList,
      symbols,
      transitions: nfaTransitions,
      start: nfaStart,
      finals: nfaFinals,
    } = nfa.description;
    const numSymbols = symbols.length;

    /** @type {Map<STATE, number>} */
    const stateIdMap = new Map();
    /** @type {bigint[]} */
    const stateBit = new Array(nfaStatesList.length);
    for (let i = 0; i < nfaStatesList.length; i++) {
      stateIdMap.set(nfaStatesList[i], i);
      stateBit[i] = ONE << BigInt(i);
    }

    /** @type {Map<SYMBOL, number>} */
    const symbolIdMap = new Map();
    for (let i = 0; i < numSymbols; i++) {
      symbolIdMap.set(symbols[i], i);
    }

    /** @type {Map<STATE, STATE[]>} */
    const closureCache = new Map();
    /** @type {Map<STATE, bigint>} */
    const closureMaskCache = new Map();

    /**
     * @param {STATE} s
     * @returns {bigint}
     */
    const getSingleMask = (s) => {
      let mask = closureMaskCache.get(s);
      if (mask === undefined) {
        const closure = singleStateEpsilonClosure(closureCache, nfa, s);
        mask = ZERO;
        for (let i = 0; i < closure.length; i++) {
          const id = stateIdMap.get(closure[i]);
          if (id !== undefined) {
            mask |= stateBit[id];
          }
        }
        closureMaskCache.set(s, mask);
      }
      return mask;
    };

    /** @type {Map<STATE, number>} */
    const activeStateOffsetMap = new Map();
    let numActive = 0;
    for (const [from, transition] of nfaTransitions.entries()) {
      for (const symbol of transition.keys()) {
        if (symbol !== Epsilon) {
          activeStateOffsetMap.set(from, numActive * numSymbols);
          numActive++;
          break;
        }
      }
    }

    /** @type {(STATE[] | undefined)[]} */
    const toStatesTable = new Array(numActive * numSymbols);
    /** @type {(bigint | undefined)[]} */
    const toMaskTable = new Array(numActive * numSymbols);

    for (const [from, transition] of nfaTransitions.entries()) {
      const rowOffset = activeStateOffsetMap.get(from);
      if (rowOffset === undefined) {
        continue;
      }
      for (const [symbol, to] of transition.entries()) {
        if (symbol !== Epsilon && to.length > 0) {
          const sIdx = symbolIdMap.get(symbol);
          if (sIdx !== undefined) {
            const cell = rowOffset + sIdx;
            toStatesTable[cell] = to;
            let mask = ZERO;
            for (let i = 0; i < to.length; i++) {
              mask |= getSingleMask(to[i]);
            }
            toMaskTable[cell] = mask;
          }
        }
      }
    }

    /** @type {Map<bigint, DFAState<STATE, NEW_STATE>>} */
    const dfaStateMap = new Map();

    const startClosure = singleStateEpsilonClosure(closureCache, nfa, nfaStart);
    const start = {
      name: stateMapper(index++, [nfaStart]),
      nfaStates: startClosure,
    };

    /** @type {DFAState<STATE, NEW_STATE>[]} */
    const dfaStates = [];

    /** @type {DFAState<STATE, NEW_STATE>[]} */
    const queue = [start];
    let queueHead = 0;

    /** @type {Map<NEW_STATE, Map<SYMBOL, NEW_STATE>>} */
    const transitions = new Map();

    /** @type {STATE[]} */
    const emptyClosure = [];

    while (queueHead < queue.length) {
      const dfaState = queue[queueHead++];
      dfaStates.push(dfaState);

      /** @type {number[]} */
      const activeOffsets = [];
      const currentNfaStates = dfaState.nfaStates;
      for (let i = 0; i < currentNfaStates.length; i++) {
        const offset = activeStateOffsetMap.get(currentNfaStates[i]);
        if (offset !== undefined) {
          activeOffsets.push(offset);
        }
      }

      /** @type {Map<SYMBOL, NEW_STATE>} */
      const stateTransitions = new Map();
      transitions.set(dfaState.name, stateTransitions);

      const numActiveInState = activeOffsets.length;

      for (let sIdx = 0; sIdx < numSymbols; sIdx++) {
        let mask = ZERO;
        for (let i = 0; i < numActiveInState; i++) {
          const m = toMaskTable[activeOffsets[i] + sIdx];
          if (m !== undefined) {
            mask |= m;
          }
        }

        let targetDFAState = dfaStateMap.get(mask);
        if (!targetDFAState) {
          /** @type {STATE[]} */
          let statesWithEpsilon;
          if (mask === ZERO) {
            statesWithEpsilon = emptyClosure;
          } else {
            /** @type {Set<STATE>} */
            const selected = new Set();
            for (let i = 0; i < numActiveInState; i++) {
              const to = toStatesTable[activeOffsets[i] + sIdx];
              if (to !== undefined) {
                for (let j = 0; j < to.length; j++) {
                  const closure = singleStateEpsilonClosure(
                    closureCache,
                    nfa,
                    to[j]
                  );
                  for (let k = 0; k < closure.length; k++) {
                    selected.add(closure[k]);
                  }
                }
              }
            }
            statesWithEpsilon = Array.from(selected);
          }

          targetDFAState = {
            name: stateMapper(index++, statesWithEpsilon),
            nfaStates: statesWithEpsilon,
          };

          queue.push(targetDFAState);
          dfaStateMap.set(mask, targetDFAState);
        }

        stateTransitions.set(symbols[sIdx], targetDFAState.name);
      }
    }

    /** @type {Set<DFAState<STATE, NEW_STATE>>} */
    const finalsSet = new Set();
    for (let i = 0; i < nfaFinals.length; i++) {
      const finalState = nfaFinals[i];
      for (let j = 0; j < dfaStates.length; j++) {
        const dfaState = dfaStates[j];
        if (dfaState.nfaStates.includes(finalState)) {
          finalsSet.add(dfaState);
        }
      }
    }
    const finals = Array.from(finalsSet);

    return { dfaStates, transitions, start, finals };
  } finally {
    const traceEnd = performance.now();
    log("exit construct (took %d ms)", traceEnd - traceStart);
  }
}
