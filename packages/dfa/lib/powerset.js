import { Epsilon } from "@par-gen/nfa";
import debug from "debug";
import { performance } from "perf_hooks";

const log = debug("par-gen:dfa");
const ZERO = BigInt(0);
const ONE = BigInt(1);

/**
 * @type {WeakMap<Map<any, Map<any, any>>, { symClass: Int32Array, classRep: number[] }>}
 */
export const transitionEquivClasses = new WeakMap();

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

    /** @type {STATE[]} */
    const activeFroms = [];
    /** @type {Map<SYMBOL | typeof Epsilon, STATE[]>[]} */
    const activeTransList = [];
    for (const [from, transition] of nfaTransitions.entries()) {
      for (const symbol of transition.keys()) {
        if (symbol !== Epsilon) {
          activeFroms.push(from);
          activeTransList.push(transition);
          break;
        }
      }
    }
    const numActive = activeFroms.length;

    const symClass = new Int32Array(numSymbols);
    const classSize = new Int32Array(numSymbols);
    if (numSymbols > 0) {
      classSize[0] = numSymbols;
    }
    const splitStep = new Int32Array(numSymbols);
    const splitCount = new Int32Array(numSymbols);
    const splitTarget = new Int32Array(numSymbols);
    let nextClassId = 1;
    let stepId = 0;

    /**
     * @param {Int32Array | number[]} subset
     * @param {number} len
     */
    const refineSubset = (subset, len) => {
      if (len <= 0 || len >= numSymbols) {
        return;
      }
      if (len === 1) {
        const sIdx = subset[0];
        const c = symClass[sIdx];
        if (classSize[c] > 1) {
          const newC = nextClassId++;
          classSize[c]--;
          classSize[newC] = 1;
          symClass[sIdx] = newC;
        }
        return;
      }
      stepId++;
      for (let i = 0; i < len; i++) {
        const c = symClass[subset[i]];
        if (splitStep[c] !== stepId) {
          splitStep[c] = stepId;
          splitCount[c] = 1;
          splitTarget[c] = -1;
        } else {
          splitCount[c]++;
        }
      }
      for (let i = 0; i < len; i++) {
        const sIdx = subset[i];
        const c = symClass[sIdx];
        let newC = splitTarget[c];
        if (newC === -1) {
          if (splitCount[c] === classSize[c]) {
            continue;
          }
          newC = nextClassId++;
          splitTarget[c] = newC;
          classSize[c] -= splitCount[c];
          classSize[newC] = splitCount[c];
        }
        symClass[sIdx] = newC;
      }
    };

    // rowKind[r]: >= 0 for single symbol sIdx; -1 for all symbols; -2 for subset; -3 for general; -4 for empty
    const rowKind = new Int32Array(numActive).fill(-4);
    /** @type {(STATE[] | undefined)[]} */
    const rowTo = new Array(numActive);
    /** @type {(bigint | undefined)[]} */
    const rowMask = new Array(numActive);
    /** @type {(Int32Array | undefined)[]} */
    const rowMultiSyms = new Array(numActive);
    /** @type {({ syms: Int32Array, tos: STATE[][], masks: bigint[] } | undefined)[]} */
    const rowGeneral = new Array(numActive);

    const rowSyms = new Int32Array(numSymbols);
    /** @type {STATE[][]} */
    const rowTosScratch = new Array(numSymbols);
    /** @type {bigint[]} */
    const rowMasksScratch = new Array(numSymbols);

    for (let r = 0; r < numActive; r++) {
      const transition = activeTransList[r];
      let rowLen = 0;
      /** @type {STATE[] | undefined} */
      let prevTo = undefined;
      let prevMask = ZERO;
      let firstMask = ZERO;
      let allSameMask = true;
      let expectedSIdx = 0;

      for (const [symbol, to] of transition.entries()) {
        if (symbol !== Epsilon && to.length > 0) {
          const sIdx =
            symbol === symbols[expectedSIdx]
              ? expectedSIdx
              : symbolIdMap.get(symbol);
          if (sIdx !== undefined) {
            expectedSIdx = sIdx + 1;
            let mask;
            if (to === prevTo) {
              mask = prevMask;
            } else {
              mask = ZERO;
              for (let i = 0; i < to.length; i++) {
                mask |= getSingleMask(to[i]);
              }
              prevTo = to;
              prevMask = mask;
            }
            if (rowLen === 0) {
              firstMask = mask;
            } else if (mask !== firstMask) {
              allSameMask = false;
            }
            rowTosScratch[rowLen] = to;
            rowMasksScratch[rowLen] = mask;
            rowSyms[rowLen++] = sIdx;
          }
        }
      }

      if (rowLen === 0) {
        continue;
      }

      if (allSameMask) {
        rowTo[r] = prevTo;
        rowMask[r] = firstMask;
        if (rowLen === 1) {
          const sIdx = rowSyms[0];
          rowKind[r] = sIdx;
          if (numSymbols > 1) {
            const c = symClass[sIdx];
            if (classSize[c] > 1) {
              const newC = nextClassId++;
              classSize[c]--;
              classSize[newC] = 1;
              symClass[sIdx] = newC;
            }
          }
        } else if (rowLen === numSymbols) {
          rowKind[r] = -1;
        } else {
          rowKind[r] = -2;
          rowMultiSyms[r] = rowSyms.slice(0, rowLen);
          refineSubset(rowSyms, rowLen);
        }
      } else {
        rowKind[r] = -3;
        rowGeneral[r] = {
          syms: rowSyms.slice(0, rowLen),
          tos: rowTosScratch.slice(0, rowLen),
          masks: rowMasksScratch.slice(0, rowLen),
        };
        /** @type {Map<bigint, number[]>} */
        const groups = new Map();
        for (let i = 0; i < rowLen; i++) {
          const sIdx = rowSyms[i];
          const m = rowMasksScratch[i];
          let g = groups.get(m);
          if (!g) {
            g = [];
            groups.set(m, g);
          }
          g.push(sIdx);
        }
        for (const g of groups.values()) {
          refineSubset(g, g.length);
        }
      }
    }

    const canonicalClass = new Int32Array(nextClassId).fill(-1);
    /** @type {number[]} */
    const classRep = [];
    let numClasses = 0;
    for (let sIdx = 0; sIdx < numSymbols; sIdx++) {
      const oldC = symClass[sIdx];
      let canonC = canonicalClass[oldC];
      if (canonC === -1) {
        canonC = numClasses++;
        canonicalClass[oldC] = canonC;
        classRep.push(sIdx);
      }
      symClass[sIdx] = canonC;
    }

    /** @type {Map<STATE, number>} */
    const activeStateOffsetMap = new Map();
    /** @type {(STATE[] | undefined)[]} */
    const toStatesTable = new Array(numActive * numClasses);
    /** @type {(bigint | undefined)[]} */
    const toMaskTable = new Array(numActive * numClasses);

    for (let r = 0; r < numActive; r++) {
      const compactOffset = r * numClasses;
      activeStateOffsetMap.set(activeFroms[r], compactOffset);
      const kind = rowKind[r];
      if (kind >= 0) {
        const c = symClass[kind];
        toStatesTable[compactOffset + c] = rowTo[r];
        toMaskTable[compactOffset + c] = rowMask[r];
      } else if (kind === -1) {
        const to = rowTo[r];
        const mask = rowMask[r];
        for (let c = 0; c < numClasses; c++) {
          toStatesTable[compactOffset + c] = to;
          toMaskTable[compactOffset + c] = mask;
        }
      } else if (kind === -2) {
        const syms = /** @type {Int32Array} */ (rowMultiSyms[r]);
        const to = rowTo[r];
        const mask = rowMask[r];
        for (let i = 0; i < syms.length; i++) {
          const c = symClass[syms[i]];
          toStatesTable[compactOffset + c] = to;
          toMaskTable[compactOffset + c] = mask;
        }
      } else if (kind === -3) {
        const gen = /** @type {{ syms: Int32Array, tos: STATE[][], masks: bigint[] }} */ (
          rowGeneral[r]
        );
        const { syms, tos, masks } = gen;
        for (let i = 0; i < syms.length; i++) {
          const c = symClass[syms[i]];
          toStatesTable[compactOffset + c] = tos[i];
          toMaskTable[compactOffset + c] = masks[i];
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

    /** @type {NEW_STATE[]} */
    const classTarget = new Array(numClasses);

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

      for (let c = 0; c < numClasses; c++) {
        let mask = ZERO;
        for (let i = 0; i < numActiveInState; i++) {
          const m = toMaskTable[activeOffsets[i] + c];
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
              const to = toStatesTable[activeOffsets[i] + c];
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

        classTarget[c] = targetDFAState.name;
      }

      for (let sIdx = 0; sIdx < numSymbols; sIdx++) {
        stateTransitions.set(symbols[sIdx], classTarget[symClass[sIdx]]);
      }
    }

    transitionEquivClasses.set(transitions, { symClass, classRep });

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
