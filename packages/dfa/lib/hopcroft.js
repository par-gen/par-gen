import debug from "debug";
import { performance } from "perf_hooks";

const log = debug("par-gen:dfa");
const ZERO = BigInt(0);
const ONE = BigInt(1);

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
    const numStates = states.length;
    const numSymbols = symbols.length;

    const finalSet = new Set(finals);

    const initial = partitionizer?.() ?? [
      finals,
      states.filter((state) => !finalSet.has(state)),
    ];

    /** @type {Map<STATE, number>} */
    const stateIdMap = new Map();
    /** @type {bigint[]} */
    const stateBits = new Array(numStates);
    for (let i = 0; i < numStates; i++) {
      stateIdMap.set(states[i], i);
      stateBits[i] = ONE << BigInt(i);
    }

    /** @type {Map<SYMBOL, number>} */
    const symbolIdMap = new Map();
    for (let i = 0; i < numSymbols; i++) {
      symbolIdMap.set(symbols[i], i);
    }

    /**
     * @param {STATE[]} arr
     * @returns {bigint}
     */
    const computeMask = (arr) => {
      let mask = ZERO;
      for (let i = 0; i < arr.length; i++) {
        const id = stateIdMap.get(arr[i]);
        if (id !== undefined) {
          mask |= stateBits[id];
        }
      }
      return mask;
    };

    const partitions = initial.map((array) => [...array]);
    const partitionMasks = partitions.map(computeMask);

    const queue = initial.map((array) => [...array]);
    const queueMasks = [...partitionMasks];

    /** @type {bigint[]} */
    const predMask = new Array(numSymbols * numStates).fill(ZERO);
    for (const [from, transition] of transitions.entries()) {
      const fromId = stateIdMap.get(from);
      if (fromId === undefined) {
        continue;
      }
      const fromBit = stateBits[fromId];
      for (const [symbol, target] of transition.entries()) {
        const sIdx = symbolIdMap.get(symbol);
        const tIdx = stateIdMap.get(target);
        if (sIdx !== undefined && tIdx !== undefined) {
          predMask[sIdx * numStates + tIdx] |= fromBit;
        }
      }
    }

    while (queue.length > 0) {
      const partitionSet = queue.shift();
      queueMasks.shift();
      if (!partitionSet) {
        throw new Error("Invalid state");
      }

      /** @type {number[]} */
      const pIndices = [];
      for (let i = 0; i < partitionSet.length; i++) {
        const id = stateIdMap.get(partitionSet[i]);
        if (id !== undefined) {
          pIndices.push(id);
        }
      }
      const pLen = pIndices.length;

      /** @type {Set<bigint>} */
      const seenXMasks = new Set();

      for (let sIdx = 0; sIdx < numSymbols; sIdx++) {
        let xMask = ZERO;
        const base = sIdx * numStates;
        for (let i = 0; i < pLen; i++) {
          xMask |= predMask[base + pIndices[i]];
        }

        if (xMask === ZERO || seenXMasks.has(xMask)) {
          continue;
        }
        seenXMasks.add(xMask);

        for (let pIdx = 0; pIdx < partitions.length; pIdx++) {
          const yMask = partitionMasks[pIdx];
          const yuxMask = yMask & xMask;
          const yoxMask = yMask & ~xMask;

          if (yuxMask === ZERO || yoxMask === ZERO) {
            continue;
          }

          const Y = partitions[pIdx];
          /** @type {STATE[]} */
          const yux = [];
          /** @type {STATE[]} */
          const yox = [];
          for (let j = 0; j < Y.length; j++) {
            const y = Y[j];
            const yId = /** @type {number} */ (stateIdMap.get(y));
            if ((stateBits[yId] & xMask) !== ZERO) {
              yux.push(y);
            } else {
              yox.push(y);
            }
          }

          partitions.splice(pIdx, 1, yux, yox);
          partitionMasks.splice(pIdx, 1, yuxMask, yoxMask);
          pIdx++;

          const queueIndex = queueMasks.indexOf(yMask);

          if (queueIndex > -1) {
            queue.splice(queueIndex, 1, yux, yox);
            queueMasks.splice(queueIndex, 1, yuxMask, yoxMask);
          } else if (yux.length <= yox.length) {
            queue.push(yux);
            queueMasks.push(yuxMask);
          } else {
            queue.push(yox);
            queueMasks.push(yoxMask);
          }
        }
      }
    }

    /** @type {Map<STATE, number>} */
    const stateToPartitionIndex = new Map();
    for (let i = 0; i < partitions.length; i++) {
      const partition = partitions[i];
      for (let j = 0; j < partition.length; j++) {
        stateToPartitionIndex.set(partition[j], i);
      }
    }

    /**
     * @param {STATE} state
     * @return {number}
     */
    const newStateIndex = (state) => stateToPartitionIndex.get(state) ?? -1;

    const start = stateMapper(newStateIndex(dfa.description.start), [
      dfa.description.start,
    ]);

    /** @type {(NEW_STATE | undefined)[]} */
    const mappedPartitionStates = new Array(partitions.length);
    /**
     * @param {number} idx
     * @returns {NEW_STATE}
     */
    const getMappedPartitionState = (idx) => {
      let mapped = mappedPartitionStates[idx];
      if (mapped === undefined) {
        mapped = stateMapper(idx, partitions[idx]);
        mappedPartitionStates[idx] = mapped;
      }
      return mapped;
    };

    /** @type {DFADescription<NEW_STATE, SYMBOL>['transitions']} */
    const minimalTransitions = new Map();
    for (let index = 0; index < partitions.length; index++) {
      const partition = partitions[index];
      const mappedFrom = getMappedPartitionState(index);
      /** @type {Map<SYMBOL, NEW_STATE>} */
      const row = new Map();
      for (let j = 0; j < partition.length; j++) {
        const stateTransitions = transitions.get(partition[j]);
        if (stateTransitions) {
          for (const [symbol, oldState] of stateTransitions.entries()) {
            const targetIdx = stateToPartitionIndex.get(oldState);
            if (targetIdx === undefined) {
              throw new Error("Illegal state");
            }
            row.set(symbol, getMappedPartitionState(targetIdx));
          }
        }
      }
      minimalTransitions.set(mappedFrom, row);
    }

    /** @type {DFADescription<NEW_STATE, SYMBOL>} */
    const description = {
      states: Array.from(minimalTransitions.keys()),
      symbols: symbols,
      transitions: minimalTransitions,
      start,
      finals: partitions
        .filter((partition) => partition.some((s) => finalSet.has(s)))
        .map((partition, index) => stateMapper(index, partition)),
    };

    return description;
  } finally {
    const traceEnd = performance.now();
    log("exit minimize (took %d ms)", traceEnd - traceStart);
  }
}
