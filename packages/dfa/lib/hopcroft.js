import debug from "debug";
import { performance } from "perf_hooks";

import { transitionEquivClasses } from "./powerset.js";

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
 * Partitions the `numCols` columns of a row-major `numRows x numCols` transition matrix
 * into minimal equivalence classes of identical columns.
 *
 * @param {Int32Array} matrix
 * @param {number} numRows
 * @param {number} numCols
 * @returns {{ colToClass: Int32Array, classCol: number[], classCount: Int32Array, numClasses: number }}
 */
export function partitionMatrixColumns(matrix, numRows, numCols) {
  const colToClass = new Int32Array(numCols);
  /** @type {number[]} */
  const classCol = [];
  const classCount = new Int32Array(numCols);
  let numClasses = 0;
  let lastMatchedC = 0;

  for (let col = 0; col < numCols; col++) {
    let matchedC = -1;
    for (let step = 0; step < numClasses; step++) {
      const c =
        step === 0 ? lastMatchedC : step <= lastMatchedC ? step - 1 : step;
      const repCol = classCol[c];
      let same = true;
      for (let r = 0; r < numRows; r++) {
        const rowOffset = r * numCols;
        if (matrix[rowOffset + col] !== matrix[rowOffset + repCol]) {
          same = false;
          break;
        }
      }
      if (same) {
        matchedC = c;
        break;
      }
    }
    if (matchedC === -1) {
      matchedC = numClasses++;
      classCol.push(col);
    }
    colToClass[col] = matchedC;
    classCount[matchedC]++;
    lastMatchedC = matchedC;
  }

  return { colToClass, classCol, classCount, numClasses };
}

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

    /** @type {number[][]} */
    const partitionIds = new Array(initial.length);
    /** @type {bigint[]} */
    const partitionMasks = new Array(initial.length);
    /** @type {number[][]} */
    const queue = new Array(initial.length);
    /** @type {bigint[]} */
    const queueMasks = new Array(initial.length);

    for (let p = 0; p < initial.length; p++) {
      const arr = initial[p];
      /** @type {number[]} */
      const ids = [];
      let mask = ZERO;
      for (let i = 0; i < arr.length; i++) {
        const id = stateIdMap.get(arr[i]);
        if (id !== undefined) {
          ids.push(id);
          mask |= stateBits[id];
        }
      }
      partitionIds[p] = ids;
      partitionMasks[p] = mask;
      queue[p] = ids.slice();
      queueMasks[p] = mask;
    }

    const knownEquiv = transitionEquivClasses.get(transitions);
    /** @type {Int32Array} */
    let inTrans;
    /** @type {number} */
    let inNumClasses;
    let allComplete = transitions.size === numStates;

    if (knownEquiv && knownEquiv.symClass.length === numSymbols) {
      const inClassRep = knownEquiv.classRep;
      inNumClasses = inClassRep.length;
      /** @type {SYMBOL[]} */
      const repSymbols = new Array(inNumClasses);
      for (let c = 0; c < inNumClasses; c++) {
        repSymbols[c] = symbols[inClassRep[c]];
      }
      inTrans = new Int32Array(numStates * inNumClasses).fill(-1);
      for (const [from, transition] of transitions.entries()) {
        const fromId = stateIdMap.get(from);
        if (fromId === undefined) {
          continue;
        }
        if (transition.size !== numSymbols) {
          allComplete = false;
        }
        const rowOffset = fromId * inNumClasses;
        /** @type {STATE | undefined} */
        let prevTarget = undefined;
        /** @type {number | undefined} */
        let prevTIdx = -1;
        for (let c = 0; c < inNumClasses; c++) {
          const target = transition.get(repSymbols[c]);
          if (target !== undefined) {
            const tIdx =
              target === prevTarget
                ? prevTIdx
                : ((prevTarget = target),
                  (prevTIdx = stateIdMap.get(target)));
            if (tIdx !== undefined) {
              inTrans[rowOffset + c] = tIdx;
            }
          }
        }
      }
    } else {
      /** @type {Map<SYMBOL, number>} */
      const symbolIdMap = new Map();
      for (let i = 0; i < numSymbols; i++) {
        symbolIdMap.set(symbols[i], i);
      }
      inNumClasses = numSymbols;
      inTrans = new Int32Array(numStates * numSymbols).fill(-1);
      for (const [from, transition] of transitions.entries()) {
        const fromId = stateIdMap.get(from);
        if (fromId === undefined) {
          continue;
        }
        if (transition.size !== numSymbols) {
          allComplete = false;
        }
        const rowOffset = fromId * numSymbols;
        let expectedSIdx = 0;
        /** @type {STATE | undefined} */
        let prevTarget = undefined;
        /** @type {number | undefined} */
        let prevTIdx = -1;
        for (const [symbol, target] of transition.entries()) {
          let sIdx;
          if (symbol === symbols[expectedSIdx]) {
            sIdx = expectedSIdx;
            expectedSIdx++;
          } else {
            allComplete = false;
            sIdx = symbolIdMap.get(symbol);
            expectedSIdx = (sIdx ?? -1) + 1;
          }
          const tIdx =
            target === prevTarget
              ? prevTIdx
              : ((prevTarget = target), (prevTIdx = stateIdMap.get(target)));
          if (sIdx !== undefined && tIdx !== undefined) {
            inTrans[rowOffset + sIdx] = tIdx;
          }
        }
      }
    }

    const { colToClass, classCol, numClasses } = partitionMatrixColumns(
      inTrans,
      numStates,
      inNumClasses
    );

    /** @type {Int32Array} */
    let symClass;
    if (knownEquiv && knownEquiv.symClass.length === numSymbols) {
      const inSymClass = knownEquiv.symClass;
      symClass = new Int32Array(numSymbols);
      for (let sIdx = 0; sIdx < numSymbols; sIdx++) {
        symClass[sIdx] = colToClass[inSymClass[sIdx]];
      }
    } else {
      symClass = colToClass;
    }

    /** @type {bigint[]} */
    const predMask = new Array(numClasses * numStates).fill(ZERO);
    for (let fromId = 0; fromId < numStates; fromId++) {
      const rowOffset = fromId * inNumClasses;
      const fromBit = stateBits[fromId];
      for (let c = 0; c < numClasses; c++) {
        const tIdx = inTrans[rowOffset + classCol[c]];
        if (tIdx !== -1) {
          predMask[c * numStates + tIdx] |= fromBit;
        }
      }
    }

    while (queue.length > 0) {
      const pIndices = queue.shift();
      queueMasks.shift();
      if (!pIndices) {
        throw new Error("Invalid state");
      }

      const pLen = pIndices.length;

      /** @type {Set<bigint>} */
      const seenXMasks = new Set();

      for (let c = 0; c < numClasses; c++) {
        let xMask = ZERO;
        const base = c * numStates;
        for (let i = 0; i < pLen; i++) {
          xMask |= predMask[base + pIndices[i]];
        }

        if (xMask === ZERO || seenXMasks.has(xMask)) {
          continue;
        }
        seenXMasks.add(xMask);

        for (let pIdx = 0; pIdx < partitionIds.length; pIdx++) {
          const yMask = partitionMasks[pIdx];
          const yuxMask = yMask & xMask;
          const yoxMask = yMask & ~xMask;

          if (yuxMask === ZERO || yoxMask === ZERO) {
            continue;
          }

          const Y = partitionIds[pIdx];
          /** @type {number[]} */
          const yux = [];
          /** @type {number[]} */
          const yox = [];
          for (let j = 0; j < Y.length; j++) {
            const yId = Y[j];
            if ((stateBits[yId] & xMask) !== ZERO) {
              yux.push(yId);
            } else {
              yox.push(yId);
            }
          }

          partitionIds.splice(pIdx, 1, yux, yox);
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

    /** @type {STATE[][]} */
    const partitions = new Array(partitionIds.length);
    const stateIdToPartitionIndex = new Int32Array(numStates).fill(-1);
    let assignedStates = 0;
    for (let i = 0; i < partitionIds.length; i++) {
      const ids = partitionIds[i];
      /** @type {STATE[]} */
      const part = new Array(ids.length);
      for (let j = 0; j < ids.length; j++) {
        const id = ids[j];
        part[j] = states[id];
        if (stateIdToPartitionIndex[id] === -1) {
          assignedStates++;
        }
        stateIdToPartitionIndex[id] = i;
      }
      partitions[i] = part;
    }
    if (assignedStates !== numStates) {
      allComplete = false;
    }

    const startFromId = stateIdMap.get(dfa.description.start);
    const startPartitionIdx =
      startFromId !== undefined ? stateIdToPartitionIndex[startFromId] : -1;

    const start = stateMapper(startPartitionIdx, [dfa.description.start]);

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
    if (allComplete) {
      /** @type {NEW_STATE[]} */
      const classTarget = new Array(numClasses);
      for (let index = 0; index < partitions.length; index++) {
        const ids = partitionIds[index];
        const mappedFrom = getMappedPartitionState(index);
        /** @type {Map<SYMBOL, NEW_STATE>} */
        const row = new Map();
        if (ids.length > 0) {
          const rowOffset = ids[0] * inNumClasses;
          for (let c = 0; c < numClasses; c++) {
            const tIdx = inTrans[rowOffset + classCol[c]];
            const targetIdx = stateIdToPartitionIndex[tIdx];
            if (targetIdx === -1) {
              throw new Error("Illegal state");
            }
            classTarget[c] = getMappedPartitionState(targetIdx);
          }
          for (let sIdx = 0; sIdx < numSymbols; sIdx++) {
            row.set(symbols[sIdx], classTarget[symClass[sIdx]]);
          }
        }
        minimalTransitions.set(mappedFrom, row);
      }
    } else {
      /** @type {Map<STATE, number>} */
      const stateToPartitionIndex = new Map();
      for (let i = 0; i < partitions.length; i++) {
        const partition = partitions[i];
        for (let j = 0; j < partition.length; j++) {
          stateToPartitionIndex.set(partition[j], i);
        }
      }
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
