import { computeEquivalenceClasses } from "@par-gen/lexer";
import { promises as fsp } from "fs";
import { join, dirname, basename, extname } from "path";
import prettier from "prettier";

/**
 * @typedef {import('@par-gen/lexer/types/lexer').LexerData} LexerData
 */

/**
 * @typedef {import('@par-gen/parser/types/parser').Lexers} Lexers
 */

/**
 * @typedef {import('./type').ParserData} ParserData
 */

/**
 * @typedef {import('./type').Codegen} Codegen
 */

/**
 * @extends {Codegen}
 */
export class JavaScriptBaseCodegen {
  /**
   * @param {Object} options
   * @param {string} options.lexerFile
   * @param {string} options.parserFile
   * @param {boolean=} options.debug
   * @param {boolean=} options.equivalenceClasses
   */
  constructor(options) {
    /** @protected */
    this.options = options;
  }

  /**
   * @protected
   * @param {string} name
   * @returns {string}
   */
  _lexerStateFile(name) {
    const dir = dirname(this.options.lexerFile);
    const ext = extname(this.options.lexerFile);
    const base = basename(this.options.lexerFile, ext);
    return join(dir, `${base}-${name}${ext}`);
  }

  /**
   * @public
   * @param {LexerData} data
   * @param {string} name
   * @returns {Promise<void>}
   */
  async lexer(data, name) {
    const code = this._lexerCode(data);

    const lexerFile = this._lexerStateFile(name);

    await fsp.mkdir(dirname(lexerFile), { recursive: true });
    await fsp.writeFile(lexerFile, code);
  }

  /**
   * @private
   * @param {LexerData} data
   * @returns {string}
   */
  _lexerCode(data) {
    const {
      tokens: { EOF, ERROR },
      tokenIds,
      tokenNames,
      errorState,
      transitions,
      start,
      finals,
    } = data;

    const origColumns = 256;

    const tokenIdSize = tokenIds.every((id) => id === undefined || id <= 0xff)
      ? "Uint8Array"
      : "Uint16Array";

    const finalSet = new Set(finals);
    /** @type {Map<number, [number, number][]>} */
    const transMap = new Map(transitions);
    const totalStates = tokenIds.length;
    /** @type {number[]} */
    const allOrigStates = [];
    for (let i = 0; i < totalStates; i++) {
      allOrigStates.push(i * origColumns);
    }

    const deadEndFinals = finals.filter((s) => {
      const tr = transMap.get(s) || [];
      return tr.every(([, to]) => to === errorState);
    });
    const continuableFinals = finals.filter((s) => {
      const tr = transMap.get(s) || [];
      return !tr.every(([, to]) => to === errorState);
    });
    const skipBytes = data.skipBytes ?? [];
    const skipTokenNames = new Set(data.skipTokenNames ?? []);

    const nonFinals = allOrigStates.filter(
      (s) => s !== errorState && !finalSet.has(s)
    );
    const maxSelfLoopNonFinals = skipBytes.length > 0 ? 1 : 2;
    const allSelfLoopNonFinals = nonFinals
      .filter((s) => {
        const tr = transMap.get(s) || [];
        return tr.some(([, to]) => to === s);
      })
      .sort((a, b) => {
        const countA = (transMap.get(a) || []).filter(
          ([, to]) => to === a
        ).length;
        const countB = (transMap.get(b) || []).filter(
          ([, to]) => to === b
        ).length;
        return countB - countA;
      });
    const selfLoopNonFinals = allSelfLoopNonFinals.slice(
      0,
      maxSelfLoopNonFinals
    );
    const selfLoopNonFinalSet = new Set(selfLoopNonFinals);
    const otherNonFinals = nonFinals.filter(
      (s) => !selfLoopNonFinalSet.has(s)
    );
    const orderedNonFinals = [...selfLoopNonFinals, ...otherNonFinals];

    const activeRowCount = 1 + continuableFinals.length + nonFinals.length;
    const ecInfo = computeEquivalenceClasses(data);
    const useEquivalenceClasses =
      this.options.equivalenceClasses !== undefined
        ? this.options.equivalenceClasses && ecInfo.columns < origColumns
        : activeRowCount > 96 && ecInfo.columns < origColumns;

    const columns = useEquivalenceClasses ? ecInfo.columns : origColumns;
    const columnShift = useEquivalenceClasses ? ecInfo.shift : 8;

    const maxDeadEndTokenId = deadEndFinals.reduce((max, origState) => {
      const id = tokenIds[origState / origColumns] ?? 0;
      return id > max ? id : max;
    }, 0);

    const compactDeadEndFinals =
      deadEndFinals.length > 0 &&
      (useEquivalenceClasses || deadEndFinals.length < columns);

    const directDeadEndTokenIds =
      compactDeadEndFinals &&
      skipTokenNames.size === 0 &&
      deadEndFinals.every((origState) => {
        const id = tokenIds[origState / origColumns];
        return (
          id !== undefined && (useEquivalenceClasses || id + 1 < columns)
        );
      });

    if (directDeadEndTokenIds && continuableFinals.length > 1) {
      continuableFinals.sort(
        (a, b) =>
          (tokenIds[a / origColumns] ?? 0) - (tokenIds[b / origColumns] ?? 0)
      );
    }

    const rawPureSelfLoopFinals = directDeadEndTokenIds
      ? continuableFinals.filter((s) => {
          const id = tokenIds[s / origColumns] ?? 0;
          if (!useEquivalenceClasses && id + 1 >= columns) {
            return false;
          }
          return continuableFinals
            .filter((s2) => (tokenIds[s2 / origColumns] ?? 0) === id)
            .every((s2) => {
              const tr = transMap.get(s2) || [];
              return (
                tr.length > 0 &&
                tr.every(([, to]) => to === s2 || to === errorState)
              );
            });
        })
      : [];
    const pureSelfLoopFinals =
      rawPureSelfLoopFinals.length === 1 &&
      rawPureSelfLoopFinals.length < continuableFinals.length &&
      !useEquivalenceClasses
        ? rawPureSelfLoopFinals
        : [];
    const maxDirectTokenId =
      directDeadEndTokenIds && !useEquivalenceClasses
        ? finals.reduce((max, origState) => {
            const id = tokenIds[origState / origColumns] ?? 0;
            return id + 1 < columns && id > max ? id : max;
          }, maxDeadEndTokenId)
        : pureSelfLoopFinals.reduce((max, origState) => {
            const id = tokenIds[origState / origColumns] ?? 0;
            return id > max ? id : max;
          }, maxDeadEndTokenId);

    const remappedLastDeadEndFinal = directDeadEndTokenIds
      ? maxDirectTokenId + 1
      : compactDeadEndFinals
      ? deadEndFinals.length
      : deadEndFinals.length * columns;

    const firstActiveRow = compactDeadEndFinals
      ? Math.floor(remappedLastDeadEndFinal / columns) + 1
      : 1;

    const rowStates = compactDeadEndFinals
      ? [errorState, ...continuableFinals, ...orderedNonFinals]
      : [
          errorState,
          ...deadEndFinals,
          ...continuableFinals,
          ...orderedNonFinals,
        ];

    const totalRows = compactDeadEndFinals
      ? firstActiveRow + continuableFinals.length + orderedNonFinals.length
      : rowStates.length;

    /** @type {Map<number, number>} */
    const stateRemap = new Map();
    if (directDeadEndTokenIds) {
      stateRemap.set(errorState, 0);
      deadEndFinals.forEach((origState) => {
        const id = tokenIds[origState / origColumns] ?? 0;
        stateRemap.set(origState, id + 1);
      });
      continuableFinals.forEach((origState, idx) => {
        stateRemap.set(origState, (firstActiveRow + idx) * columns);
      });
      orderedNonFinals.forEach((origState, idx) => {
        stateRemap.set(
          origState,
          (firstActiveRow + continuableFinals.length + idx) * columns
        );
      });
    } else if (compactDeadEndFinals) {
      stateRemap.set(errorState, 0);
      deadEndFinals.forEach((origState, idx) => {
        stateRemap.set(origState, idx + 1);
      });
      continuableFinals.forEach((origState, idx) => {
        stateRemap.set(origState, (firstActiveRow + idx) * columns);
      });
      orderedNonFinals.forEach((origState, idx) => {
        stateRemap.set(
          origState,
          (firstActiveRow + continuableFinals.length + idx) * columns
        );
      });
    } else {
      rowStates.forEach((origState, newIdx) => {
        stateRemap.set(origState, newIdx * columns);
      });
    }

    /**
     * @param {number} s
     * @returns {number}
     */
    const remapState = (s) => stateRemap.get(s) ?? 0;

    const remappedStart = remapState(start);
    const remappedLastFinal = directDeadEndTokenIds
      ? continuableFinals.length > 0
        ? (firstActiveRow + continuableFinals.length - 1) * columns
        : remappedLastDeadEndFinal
      : compactDeadEndFinals
      ? continuableFinals.length > 0
        ? (firstActiveRow + continuableFinals.length - 1) * columns
        : deadEndFinals.length
      : finals.length * columns;
    const remappedLastSelfLoop =
      selfLoopNonFinals.length > 0
        ? compactDeadEndFinals
          ? (firstActiveRow +
              continuableFinals.length +
              selfLoopNonFinals.length -
              1) *
            columns
          : (finals.length + selfLoopNonFinals.length) * columns
        : remappedLastFinal;

    const maxStateValue = Math.max(
      (totalRows - 1) * columns,
      remappedLastFinal,
      remappedStart
    );
    const pointerSize = maxStateValue <= 0xffff ? "Uint16Array" : "Uint32Array";

    const pureSelfLoopSet = new Set(pureSelfLoopFinals);
    const branchingContinuableFinals = continuableFinals.filter(
      (s) => !pureSelfLoopSet.has(s)
    );
    const hasBranchingSelfLoops = branchingContinuableFinals.some((s) => {
      const tr = transMap.get(s) || [];
      return tr.some(([, to]) => to === s);
    });
    const allBranchingContinuationsAboveFinal =
      branchingContinuableFinals.every((origState) => {
        const tr = transMap.get(origState) || [];
        return tr.every(
          ([, to]) =>
            to === origState ||
            to === errorState ||
            remapState(to) > remappedLastFinal
        );
      });
    const branchingContinuableTokenIds = branchingContinuableFinals.map(
      (origState) => tokenIds[origState / origColumns] ?? 0
    );
    const distinctContinuableTokenIds = Array.from(
      new Set(branchingContinuableTokenIds)
    );
    const needsContinuableTokenIdsTable =
      directDeadEndTokenIds && distinctContinuableTokenIds.length >= 3;

    let continuableTokenIdExpr = `tokenIds[successState >> ${columnShift}]`;
    if (directDeadEndTokenIds && branchingContinuableFinals.length > 0) {
      if (distinctContinuableTokenIds.length === 1) {
        continuableTokenIdExpr = `${distinctContinuableTokenIds[0]}`;
      } else if (distinctContinuableTokenIds.length === 2) {
        const id0 = distinctContinuableTokenIds[0];
        const id1 = distinctContinuableTokenIds[1];
        const states0 = branchingContinuableFinals.filter(
          (s) => (tokenIds[s / origColumns] ?? 0) === id0
        );
        const states1 = branchingContinuableFinals.filter(
          (s) => (tokenIds[s / origColumns] ?? 0) === id1
        );
        if (states0.length === 1) {
          continuableTokenIdExpr = `successState === ${remapState(
            states0[0]
          )} ? ${id0} : ${id1}`;
        } else if (states1.length === 1) {
          continuableTokenIdExpr = `successState === ${remapState(
            states1[0]
          )} ? ${id1} : ${id0}`;
        } else {
          continuableTokenIdExpr = `successState <= ${remapState(
            states0[states0.length - 1]
          )} ? ${id0} : ${id1}`;
        }
      }
    }

    const paddedTokenIdsLength = needsContinuableTokenIdsTable
      ? firstActiveRow + continuableFinals.length
      : compactDeadEndFinals
      ? Math.max(128, (firstActiveRow + continuableFinals.length) * columns)
      : Math.max(128, totalRows);

    /** @type {string[]} */
    const tokenIdsAssignments = [];
    if (needsContinuableTokenIdsTable) {
      continuableFinals.forEach((origState, idx) => {
        const origIdx = origState / origColumns;
        const id = tokenIds[origIdx];
        const name = tokenNames[origIdx];
        const rowIdx = firstActiveRow + idx;
        if (id !== undefined && id !== 0) {
          tokenIdsAssignments.push(`tokenIds[${rowIdx}] = ${id}; // ${name}`);
        } else {
          tokenIdsAssignments.push(`// tokenIds[${rowIdx}] = 0; // ${name}`);
        }
      });
    } else if (!directDeadEndTokenIds) {
      if (compactDeadEndFinals) {
        deadEndFinals.forEach((origState, idx) => {
          const origIdx = origState / origColumns;
          const id = tokenIds[origIdx];
          const name = tokenNames[origIdx];
          if (id !== undefined && id !== 0) {
            tokenIdsAssignments.push(`tokenIds[${idx + 1}] = ${id}; // ${name}`);
          } else {
            tokenIdsAssignments.push(`// tokenIds[${idx + 1}] = 0; // ${name}`);
          }
        });
        continuableFinals.forEach((origState, idx) => {
          const origIdx = origState / origColumns;
          const id = tokenIds[origIdx];
          const name = tokenNames[origIdx];
          const mappedState = (firstActiveRow + idx) * columns;
          if (id !== undefined && id !== 0) {
            tokenIdsAssignments.push(
              `tokenIds[${mappedState}] = ${id}; // ${name}`
            );
          } else {
            tokenIdsAssignments.push(
              `// tokenIds[${mappedState}] = 0; // ${name}`
            );
          }
        });
      } else {
        rowStates.forEach((origState, i) => {
          const origIdx = origState / origColumns;
          const id = tokenIds[origIdx];
          const name = tokenNames[origIdx];
          if (id !== undefined && id !== 0) {
            tokenIdsAssignments.push(`tokenIds[${i}] = ${id}; // ${name}`);
          } else {
            tokenIdsAssignments.push(`// tokenIds[${i}] = 0; // ${name}`);
          }
        });
      }
    }

    /** @type {Map<number, string | undefined>} */
    const mappedStateNames = new Map();
    allOrigStates.forEach((origState) => {
      mappedStateNames.set(
        remapState(origState),
        tokenNames[origState / origColumns]
      );
    });

    const skipMappedStates = finals
      .filter((origState) => {
        const name = tokenNames[origState / origColumns];
        return Boolean(name && skipTokenNames.has(name));
      })
      .map((origState) => remapState(origState));

    const stepExpr = useEquivalenceClasses
      ? "table[state + ec[input[i++]]]"
      : "table[state + input[i++]]";

    const code = `${this._lexerPreCode()}
      // @ts-nocheck

      const EOF = "${EOF}";
      const ERROR = "${ERROR}";

      ${
        skipBytes.length > 0
          ? `const skipTable = new Uint8Array(256);
      ${skipBytes.map((b) => `skipTable[${b}] = 1;`).join("\n")}`
          : ""
      }

      ${
        directDeadEndTokenIds && !needsContinuableTokenIdsTable
          ? ""
          : `const tokenIds = new ${tokenIdSize}(${paddedTokenIdsLength});
      ${tokenIdsAssignments.join("\n")}`
      }

      ${
        useEquivalenceClasses
          ? `const ec = new Uint8Array(256);
      ${this._formatTableRuns(
        "ec",
        Array.from(ecInfo.classMap)
          .map((c, byte) => ({ index: byte, value: c }))
          .filter((entry) => entry.value !== 0)
      )}`
          : ""
      }

      const table = new ${pointerSize}(${columns * totalRows});
      ${this._formatTableRuns(
        "table",
        transitions.flatMap(([from, transition]) => {
          if (compactDeadEndFinals && deadEndFinals.includes(from)) {
            return [];
          }
          const mappedFrom = remapState(from);
          /** @type {Set<number>} */
          const seenClasses = new Set();
          /** @type {Array<{ index: number, value: number, comment?: string }>} */
          const entries = [];
          for (const [symbol, to] of transition) {
            if (to === errorState) {
              continue;
            }
            const col = useEquivalenceClasses
              ? ecInfo.classMap[symbol]
              : symbol;
            if (useEquivalenceClasses) {
              if (seenClasses.has(col)) {
                continue;
              }
              seenClasses.add(col);
            }
            const mappedTo = remapState(to);
            entries.push({
              index: mappedFrom + col,
              value: mappedTo,
              comment: mappedStateNames.get(mappedTo),
            });
          }
          return entries;
        })
      )}

      /**
       * @param {Uint8Array} input
       * @param {number} offset
       * @returns {{ state: number, start: number, end: number }}
       */
      const next = (input, offset) => {
        ${
          directDeadEndTokenIds && continuableFinals.length === 0
            ? `// ${remappedStart / columns}
        let state = ${remappedStart};

        // try to find match
        let i = offset & 0x7fffffff;
        const l = input.length;
        ${
          skipBytes.length > 0
            ? `while (i < l && skipTable[input[i]] !== 0) {
          i++;
        }
        offset = i;`
            : ""
        }
        while (
          i < l &&
          (state = ${stepExpr}) > ${remappedLastFinal}
        );

        state -= 1;
        if (state >>> 0 >= ${remappedLastFinal}) {
          state = i === l ? ${tokenIds[tokenNames.indexOf(EOF)]} : ${
                tokenIds[tokenNames.indexOf(ERROR)]
              };
          offset = -1;
          i = -1;
        }
        return {
          state,
          start: offset,
          end: i,
        };`
            : directDeadEndTokenIds && !useEquivalenceClasses
            ? `// ${remappedStart / columns}
        let state = 0;
        ${
          distinctContinuableTokenIds.length <= 1
            ? ""
            : "let successState = 0;"
        }
        ${branchingContinuableFinals.length > 0 ? "let successPos = 0;" : ""}

        // try to find match
        let i = offset & 0x7fffffff;
        const l = input.length;
        const t = table;
        ${
          skipBytes.length > 0
            ? `while (i < l && skipTable[input[i]]) {
          i++;
        }
        offset = i;`
            : ""
        }
        if (
          i < l &&
          (state = t[input[i++] + ${remappedStart}]) > ${remappedLastDeadEndFinal}
        ) {
          while (true) {
            if (state > ${remappedLastSelfLoop}) {
              while (
                i < l &&
                (state = t[state + input[i++]]) > ${remappedLastSelfLoop}
              );
            }
            ${selfLoopNonFinals
              .map((origState) => {
                const s = remapState(origState);
                return `if (state === ${s}) {
              while (i < l && (state = t[input[i++] + ${s}]) === ${s});
            }`;
              })
              .join("\n")}
            if (state <= ${remappedLastDeadEndFinal}) {
              break;
            }
            ${pureSelfLoopFinals
              .map((origState) => {
                const s = remapState(origState);
                const id = tokenIds[origState / origColumns] ?? 0;
                return `if (state === ${s}) {
              while (i < l && t[input[i] + ${s}]) {
                i++;
              }
              state = ${id + 1};
              break;
            }`;
              })
              .join("\n")}
            ${
              branchingContinuableFinals.length > 0
                ? `if (state <= ${remappedLastFinal}) {
              ${
                distinctContinuableTokenIds.length <= 1
                  ? ""
                  : "successState = state;"
              }
              ${
                hasBranchingSelfLoops
                  ? branchingContinuableFinals.length === 1
                    ? `while (i < l && (state = t[input[i] + ${remapState(
                        branchingContinuableFinals[0]
                      )}]) === ${remapState(
                        branchingContinuableFinals[0]
                      )}) {
                i++;
              }`
                    : `while (i < l && state === (state = t[state + input[i]])) {
                i++;
              }`
                  : `if (i < l) {
                state = t[state + input[i]];
              }`
              }
              if (${
                allBranchingContinuationsAboveFinal
                  ? `state <= ${remappedLastFinal}`
                  : "state === 0 || i >= l"
              }) {
                state = ${
                  distinctContinuableTokenIds.length === 1
                    ? `${distinctContinuableTokenIds[0] + 1}`
                    : `(${continuableTokenIdExpr}) + 1`
                };
                break;
              }
              successPos = i;
              i++;
            }`
                : ""
            }
            if (i >= l) {
              break;
            }
          }
        }

        if (--state >>> 0 >= ${remappedLastDeadEndFinal}) {
          ${
            branchingContinuableFinals.length > 0
              ? `if (${
                  distinctContinuableTokenIds.length <= 1
                    ? "successPos !== 0"
                    : needsContinuableTokenIdsTable || skipBytes.length > 0
                    ? "successState"
                    : "successState !== 0"
                }) {
            i = successPos;
            state = ${continuableTokenIdExpr};
          } else {
            state = i === l ? ${tokenIds[tokenNames.indexOf(EOF)]} : ${
                  tokenIds[tokenNames.indexOf(ERROR)]
                };
            offset = i = -1;
          }`
              : `state = i === l ? ${tokenIds[tokenNames.indexOf(EOF)]} : ${
                  tokenIds[tokenNames.indexOf(ERROR)]
                };
          offset = i = -1;`
          }
        }
        return {
          state,
          start: offset,
          end: i,
        };`
            : directDeadEndTokenIds
            ? `// ${remappedStart / columns}
        let state = ${remappedStart};
        ${
          distinctContinuableTokenIds.length <= 1
            ? ""
            : "let successState = 0;"
        }
        let successPos = 0;

        // try to find match
        let i = offset & 0x7fffffff;
        const l = input.length;
        ${
          skipBytes.length > 0
            ? `while (i < l && skipTable[input[i]] !== 0) {
          i++;
        }
        offset = i;`
            : ""
        }
        while (i < l) {
          while (
            i < l &&
            (state = ${stepExpr}) > ${remappedLastFinal}
          );
          if (state <= ${remappedLastDeadEndFinal}) {
            break;
          }
          if (state <= ${remappedLastFinal}) {
            ${
              distinctContinuableTokenIds.length <= 1
                ? ""
                : "successState = state;"
            }
            successPos = i;
          }
        }

        state -= 1;
        if (state >>> 0 >= ${remappedLastDeadEndFinal}) {
          if (${
            distinctContinuableTokenIds.length <= 1
              ? "successPos !== 0"
              : "successState !== 0"
          }) {
            state = ${continuableTokenIdExpr};
            i = successPos;
          } else {
            state = i === l ? ${tokenIds[tokenNames.indexOf(EOF)]} : ${
                tokenIds[tokenNames.indexOf(ERROR)]
              };
            offset = -1;
            i = -1;
          }
        }
        return {
          state,
          start: offset,
          end: i,
        };`
            : skipMappedStates.length > 0
            ? `let i = offset & 0x7fffffff;
        const l = input.length;
        while (true) {
          let state = ${remappedStart};
          let successState = 0;
          let successPos = 0;
          ${
            deadEndFinals.length === finals.length
              ? `while (
            i < l &&
            (state = ${stepExpr}) > ${remappedLastFinal}
          );
          if (state <= ${remappedLastFinal} && state !== 0) {
            successState = state;
            successPos = i;
          }`
              : `while (i < l) {
            while (
              i < l &&
              (state = ${stepExpr}) > ${remappedLastFinal}
            );
            ${
              deadEndFinals.length > 0
                ? `if (state <= ${remappedLastDeadEndFinal}) {
              if (state !== 0) {
                successState = state;
                successPos = i;
              }
              break;
            }
            if (state <= ${remappedLastFinal}) {
              successState = state;
              successPos = i;
            }`
                : `if (state === 0) {
              break;
            }
            if (state <= ${remappedLastFinal}) {
              successState = state;
              successPos = i;
            }`
            }
          }`
          }
          if (successState !== 0) {
            if (${skipMappedStates
              .map((s) => `successState === ${s}`)
              .join(" || ")}) {
              offset = successPos;
              i = successPos;
              continue;
            }
            state = ${
              compactDeadEndFinals
                ? "tokenIds[successState]"
                : `tokenIds[successState >> ${columnShift}]`
            };
          } else {
            state = i === l ? ${tokenIds[tokenNames.indexOf(EOF)]} : ${
                tokenIds[tokenNames.indexOf(ERROR)]
              };
            offset = -1;
            successPos = -1;
          }
          return {
            state,
            start: offset,
            end: successPos,
          };
        }`
            : `// ${remappedStart / columns}
        let state = ${remappedStart};
        let successState = 0;
        let successPos = 0;

        // try to find match
        let i = offset & 0x7fffffff;
        const l = input.length;
        ${
          skipBytes.length > 0
            ? `while (i < l && skipTable[input[i]] !== 0) {
          i++;
        }
        offset = i;`
            : ""
        }
        ${
          deadEndFinals.length === finals.length
            ? `while (
          i < l &&
          (state = ${stepExpr}) > ${remappedLastFinal}
        );
        if (state <= ${remappedLastFinal} && state !== 0) {
          successState = state;
          successPos = i;
        }`
            : `while (i < l) {
          while (
            i < l &&
            (state = ${stepExpr}) > ${remappedLastFinal}
          );
          ${
            deadEndFinals.length > 0
              ? `if (state <= ${remappedLastDeadEndFinal}) {
            if (state !== 0) {
              successState = state;
              successPos = i;
            }
            break;
          }
          if (state <= ${remappedLastFinal}) {
            successState = state;
            successPos = i;
          }`
              : `if (state === 0) {
            break;
          }
          if (state <= ${remappedLastFinal}) {
            successState = state;
            successPos = i;
          }`
          }
        }`
        }

        if (successState !== 0) {
          state = ${
            compactDeadEndFinals
              ? "tokenIds[successState]"
              : `tokenIds[successState >> ${columnShift}]`
          };
        } else {
          state = i === l ? ${tokenIds[tokenNames.indexOf(EOF)]} : ${
                tokenIds[tokenNames.indexOf(ERROR)]
              };
          offset = -1;
          successPos = -1;
        }
        return {
          state,
          start: offset,
          end: successPos,
        };`
        }
      };

      ${this._lexerExport()}
    `;

    const formattedCode = prettier.format(code, {
      filepath: this.options.lexerFile,
    });

    return formattedCode;
  }

  /**
   * @protected
   * @returns {string}
   */
  _lexerPreCode() {
    return "";
  }

  /**
   * @protected
   * @returns {string}
   */
  _lexerExport() {
    throw new Error(
      `${Object.getPrototypeOf(this).constructor.name}#${
        this._lexerExport.name
      }() unimplemented`
    );
  }

  /**
   * @abstract
   * @param {ParserData} data
   * @returns {Promise<void>}
   */
  async parser(data) {
    for (const [name, lexerData] of Object.entries(data.lexerData)) {
      await this.lexer(lexerData, name);
    }

    const code = this._parserCode(data);

    await fsp.mkdir(dirname(this.options.parserFile), { recursive: true });
    await fsp.writeFile(this.options.parserFile, code);
  }

  /**
   * @private
   * @param {ParserData} data
   * @returns {string}
   */
  _parserCode(data) {
    const {
      lexerData,
      rules,
      states,
      parserSymbols,
      actions,
      goto,
      start,
    } = data;

    const debug = this._debug.bind(this);

    const requiresSemanticActions = states.some((state) =>
      Array.from(state.values()).some((item) => item.semanticAction)
    );
    const lexerModes = Object.keys(lexerData);
    const hasSingleLexerMode = lexerModes.length === 1;
    const ruleNamesSet = new Set(["S", ...rules.map((r) => r.name)]);

    const orderedStates = [
      start,
      ...states.filter((s) => s !== start && (goto.get(s)?.size ?? 0) > 0),
      ...states.filter((s) => s !== start && (goto.get(s)?.size ?? 0) === 0),
    ];
    const stateToIndex = new Map(orderedStates.map((s, idx) => [s, idx]));
    const numGotoStates = Math.max(
      1,
      orderedStates.filter((s) => s === start || (goto.get(s)?.size ?? 0) > 0)
        .length
    );

    const trimmedParserSymbols = [...parserSymbols];
    while (
      trimmedParserSymbols.length > 0 &&
      trimmedParserSymbols[trimmedParserSymbols.length - 1] === undefined
    ) {
      trimmedParserSymbols.pop();
    }

    let maxTerminalIndex = 0;
    let minNonTerminalIndex = Infinity;
    let maxNonTerminalIndex = 0;
    for (let i = 0; i < trimmedParserSymbols.length; i++) {
      const sym = trimmedParserSymbols[i];
      if (sym === undefined) continue;
      if (ruleNamesSet.has(sym)) {
        if (i < minNonTerminalIndex) minNonTerminalIndex = i;
        if (i > maxNonTerminalIndex) maxNonTerminalIndex = i;
      } else if (i > maxTerminalIndex) {
        maxTerminalIndex = i;
      }
    }

    const hasDisjointSymbolRanges = maxTerminalIndex < minNonTerminalIndex;
    const terminalSpan = maxTerminalIndex + 1;
    const nonTerminalSpan =
      maxNonTerminalIndex >= minNonTerminalIndex
        ? maxNonTerminalIndex - minNonTerminalIndex + 1
        : 1;
    const minRequiredStride = hasDisjointSymbolRanges
      ? Math.max(terminalSpan, nonTerminalSpan)
      : trimmedParserSymbols.length;
    const pow2Stride = Math.pow(
      2,
      Math.ceil(Math.log2(Math.max(1, minRequiredStride)))
    );
    const tableStride =
      orderedStates.length * pow2Stride < 2048 ||
      orderedStates.length * minRequiredStride >= 2048
        ? pow2Stride
        : minRequiredStride;
    const canPreMultiplyState = orderedStates.length * tableStride < 2048;
    const stateMultiplier = canPreMultiplyState ? tableStride : 1;
    const tableStrideShift =
      !canPreMultiplyState &&
      tableStride > 1 &&
      (tableStride & (tableStride - 1)) === 0
        ? Math.log2(tableStride)
        : 0;
    const actionsMaxIndex =
      (orderedStates.length - 1) * tableStride +
      (hasDisjointSymbolRanges
        ? maxTerminalIndex
        : Math.max(0, trimmedParserSymbols.length - 1));
    const actionsTableSize = Math.max(
      64,
      Math.ceil((actionsMaxIndex + 1) / 16) * 16
    );
    const gotoMaxIndex =
      (numGotoStates - 1) * tableStride +
      (maxNonTerminalIndex >= minNonTerminalIndex
        ? maxNonTerminalIndex
        : Math.max(0, trimmedParserSymbols.length - 1));
    const gotoTableSize = Math.max(64, Math.ceil((gotoMaxIndex + 1) / 16) * 16);

    const wordTokenId = data.wordTokenId;
    const contextualKeywordTokenIds = data.contextualKeywordTokenIds ?? [];
    const hasWordFallback =
      wordTokenId !== undefined && contextualKeywordTokenIds.length > 0;

    if (requiresSemanticActions) {
      for (const state of states) {
        for (const item of state.values()) {
          if (item.semanticAction && item.marker === item.tokens.length) {
            throw new Error("Semantic reducer actions are not implemented");
          }
        }
      }
    }

    /**
     * @param {string} actionCode
     */
    const transformSemanticAction = (actionCode) => {
      if (hasSingleLexerMode) {
        return actionCode;
      }
      return actionCode.replace(
        /\blexer\.push\(\s*(['"])([^'"]+)\1\s*\)/g,
        (match, _quote, modeName) => {
          if (Object.prototype.hasOwnProperty.call(lexerData, modeName)) {
            return `lexer.push(LexerMode.${this._lexerModeEnumKey(modeName)})`;
          }
          return match;
        }
      );
    };

    /** @type {string[]} */
    const shiftActionBodies = [];
    /** @type {Map<string, number>} */
    const shiftActionBodyToId = new Map();
    /** @type {Array<{ tableIndex: number, stateIndex: number, symbol: string, actionId: number, code: string }>} */
    const shiftActionEntries = [];

    if (requiresSemanticActions) {
      for (const [from, action] of actions.entries()) {
        const stateIndex = /** @type {number} */ (stateToIndex.get(from));
        const items = Array.from(from.values());
        for (const [symbol, to] of action.entries()) {
          if (ruleNamesSet.has(symbol) || to.op !== "shift") {
            continue;
          }
          /** @type {string[]} */
          const matchingActions = [];
          for (const item of items) {
            if (item.tokens[item.marker] === symbol && item.semanticAction) {
              const transformed = transformSemanticAction(
                item.semanticAction.trim()
              );
              if (!matchingActions.includes(transformed)) {
                matchingActions.push(transformed);
              }
            }
          }
          if (matchingActions.length > 0) {
            const combinedCode = matchingActions.join("; ");
            let actionId = shiftActionBodyToId.get(combinedCode);
            if (actionId === undefined) {
              shiftActionBodies.push(combinedCode);
              actionId = shiftActionBodies.length;
              shiftActionBodyToId.set(combinedCode, actionId);
            }
            const lookaheadIndex = parserSymbols.indexOf(symbol);
            shiftActionEntries.push({
              tableIndex: stateIndex * tableStride + lookaheadIndex,
              stateIndex,
              symbol,
              actionId,
              code: combinedCode,
            });
          }
        }
      }
    }
    const hasShiftSemanticActions = shiftActionEntries.length > 0;

    const nextTokenExpr = hasSingleLexerMode
      ? "nextToken(stream, lookaheadSpan & 0x3fffff)"
      : lexerModes
          .slice(0, -1)
          .map(
            (name) =>
              `lexerMode === LexerMode.${this._lexerModeEnumKey(
                name
              )} ? nextToken${this._lexerModePascalCase(
                name
              )}(stream, lookaheadSpan & 0x3fffff) : `
          )
          .join("") +
        `nextToken${this._lexerModePascalCase(
          lexerModes[lexerModes.length - 1]
        )}(stream, lookaheadSpan & 0x3fffff)`;

    const nextTokenUpdateCode = hasSingleLexerMode
      ? `const res = nextToken(stream, lookaheadSpan & 0x3fffff);
            lookahead = res.state;
            lookaheadSpan = res.end | ((res.end - res.start) << 22);`
      : lexerModes
          .map((name, idx) => {
            const callExpr = `nextToken${this._lexerModePascalCase(
              name
            )}(stream, lookaheadSpan & 0x3fffff)`;
            const body = `{
              const res = ${callExpr};
              lookahead = res.state;
              lookaheadSpan = res.end | ((res.end - res.start) << 22);
            }`;
            if (idx === 0) {
              return `if (lexerMode === LexerMode.${this._lexerModeEnumKey(
                name
              )}) ${body}`;
            }
            if (idx < lexerModes.length - 1) {
              return `else if (lexerMode === LexerMode.${this._lexerModeEnumKey(
                name
              )}) ${body}`;
            }
            return `else ${body}`;
          })
          .join(" ");

    const shiftActionDispatchCode = hasShiftSemanticActions
      ? shiftActionBodies.length === 1
        ? `if (shiftActionsTable[actionIndex] !== 0) {
              ${shiftActionBodies[0]};
            }`
        : `const shiftAction = shiftActionsTable[actionIndex];
            if (shiftAction !== 0) {
              switch (shiftAction) {
                ${shiftActionBodies
                  .map(
                    (body, idx) => `case ${idx + 1}:
                  ${body};
                  break;`
                  )
                  .join("\n")}
              }
            }`
      : "";

    const stateOffsetExpr = canPreMultiplyState
      ? "currentState"
      : tableStrideShift > 0
      ? `(currentState << ${tableStrideShift})`
      : `currentState * ${tableStride}`;
    const gotoStateOffsetExpr = canPreMultiplyState
      ? "(rtop >>> 20)"
      : tableStrideShift > 0
      ? `((rtop >>> 20) << ${tableStrideShift})`
      : `(rtop >>> 20) * ${tableStride}`;

    const actionLookupCode = hasShiftSemanticActions
      ? `const actionIndex = ${stateOffsetExpr} + lookahead;
          const actionLookup = actions[actionIndex];`
      : `const actionLookup = actions[${stateOffsetExpr} + lookahead];`;

    const code = `// @ts-nocheck
      ${this._parserImports(lexerData)}

      /*
      ${rules
        .map((rule) => `${rule.name} := ${rule.symbols.join(" ")};`)
        .join("\n")}
      */

      const parserSymbols = [
        ${trimmedParserSymbols
          .map((symbol, i) => {
            return `"${symbol}", // ${i}`;
          })
          .join("\n")}
      ];

      const actionsTable = new Uint16Array(${actionsTableSize}).fill(0xffff);
      ${this._formatTableRuns(
        "actionsTable",
        Array.from(actions.entries()).flatMap(([from, action]) => {
          const stateIndex = /** @type {number} */ (stateToIndex.get(from));
          const items = Array.from(from.values());
          return Array.from(action.entries())
            .filter(([symbol]) => !ruleNamesSet.has(symbol))
            .map(([symbol, to]) => {
              const lookaheadIndex = parserSymbols.indexOf(symbol);
              let packedAction = 0xffff;
              let target = 0;
              let reduceLen = 0;
              if (to.op === "shift" && to.state) {
                target =
                  /** @type {number} */ (stateToIndex.get(to.state)) *
                  stateMultiplier;
                packedAction = target << 1;
              } else if (to.op === "reduce" && to.symbol) {
                target = parserSymbols.indexOf(to.symbol);
                const matchedItem = items.find(
                  (item) =>
                    item.name === to.symbol &&
                    item.marker === item.tokens.length &&
                    item.lookahead === symbol
                );
                reduceLen = matchedItem ? matchedItem.tokens.length : 0;
                packedAction = (reduceLen << 9) | (target << 1) | 1;
              } else if (to.op === "done") {
                packedAction = 0xfffe;
              }
              return {
                index: stateIndex * tableStride + lookaheadIndex,
                value: packedAction,
                groupKey: stateIndex,
                symbol,
                comment: `'state ${stateIndex}' -> ${symbol} -> ${to.op} (target=${target}, len=${reduceLen})`,
                runComment: (first, last) =>
                  `'state ${stateIndex}' -> ${first.symbol}..${last.symbol} -> ${to.op} (target=${target}, len=${reduceLen})`,
              };
            });
        })
      )}

      ${
        hasShiftSemanticActions
          ? `const shiftActionsTable = new Uint8Array(${actionsTableSize});
      ${this._formatTableRuns(
        "shiftActionsTable",
        shiftActionEntries.map((entry) => ({
          index: entry.tableIndex,
          value: entry.actionId,
          groupKey: entry.stateIndex,
          symbol: entry.symbol,
          comment: `'state ${entry.stateIndex}' -> ${entry.symbol} -> ${entry.code}`,
          runComment: (first, last) =>
            `'state ${entry.stateIndex}' -> ${first.symbol}..${last.symbol} -> ${entry.code}`,
        }))
      )}`
          : ""
      }

      const gotoTable = new Uint32Array(${gotoTableSize});
      ${this._formatTableRuns(
        "gotoTable",
        Array.from(goto.entries()).flatMap(([from, target]) => {
          const fromIndex = /** @type {number} */ (stateToIndex.get(from));
          return Array.from(target.entries()).map(([symbol, to]) => {
            const toIndex = /** @type {number} */ (stateToIndex.get(to));
            return {
              index:
                fromIndex * tableStride + parserSymbols.indexOf(symbol),
              value: toIndex * stateMultiplier * 1048576,
              comment: `'state ${toIndex}'`,
            };
          });
        })
      )}

      ${
        hasWordFallback
          ? `const wordFallbackTable = new Uint8Array(${Math.max(
              32,
              Math.ceil((maxTerminalIndex + 1) / 16) * 16
            )});
      ${this._formatTableRuns(
        "wordFallbackTable",
        contextualKeywordTokenIds.map((id) => ({
          index: id,
          value: 1,
          symbol: parserSymbols[id],
          comment: parserSymbols[id],
          runComment: (first, last) => `${first.symbol}..${last.symbol}`,
        }))
      )}`
          : ""
      }

      ${
        hasSingleLexerMode
          ? `const nextToken = nextToken${this._lexerModePascalCase(
              lexerModes[0]
            )};`
          : `const LexerMode = {
        ${lexerModes
          .map((name, idx) => `${this._lexerModeEnumKey(name)}: ${idx},`)
          .join("\n")}
      };

      const lexerModeNames = {
        ${lexerModes
          .map((name, idx) => `${JSON.stringify(name)}: ${idx},`)
          .join("\n")}
      };

      const lexerStack = new Uint8Array(64);
      let lexerSp = 0;
      let lexerMode = LexerMode.${this._lexerModeEnumKey(lexerModes[0])};

      const lexer = {
        push(mode) {
          const modeId = typeof mode === "number" ? mode : lexerModeNames[mode];
          lexerStack[++lexerSp] = modeId;
          lexerMode = modeId;
        },
        pop() {
          if (lexerSp === 0) {
            throw new Error("Cannot remove more lexer states than have been pushed.");
          }
          lexerMode = lexerStack[--lexerSp];
        },
      };`
      }

      /**
       * Auto-growing stack and CST arenas starting at 16,384 words (64 KiB each),
       * which glibc malloc places in the low 32-bit brk heap ([reg*4 + disp32]).
       *
       * Each 32-bit stack entry packs:
       * - low 20 bits: tree pointer (tp) of the shifted/reduced CST node (up to 1,048,575 words)
       * - high 12 bits: parser state
       *
       * Each CST node in tree occupies 3 uint32 words:
       * - word 0 (tp + 0): name | (numChildren << 8)
       * - word 1 (tp + 1): end | ((end - start) << 22) (leaf) or firstChild (internal)
       * - word 2 (tp + 2): nextSibling
       */
      const arena = {
        stack: new Uint32Array(16384),
        tree: new Uint32Array(16384),
      };

      class TreeCursor {
        #stream;
        #tree;
        #rootPointer;
        #pointer;
        #parentStack = new Uint32Array(256);
        #depth = 0;

        constructor(stream, tree, pointer) {
          this.#stream = stream;
          this.#tree = tree;
          this.#rootPointer = pointer;
          this.#pointer = pointer;
        }

        get name() {
          return parserSymbols[this.#tree[this.#pointer] & 0xff];
        }

        get symbolId() {
          return this.#tree[this.#pointer] & 0xff;
        }

        get childCount() {
          return this.#tree[this.#pointer] >>> 8;
        }

        get isLeaf() {
          return (this.#tree[this.#pointer] >>> 8) === 0;
        }

        get start() {
          const t = this.#tree;
          let p = this.#pointer;
          while ((t[p] >>> 8) > 0) {
            p = t[p + 1] & 0xfffff;
          }
          const span = t[p + 1];
          const end = span & 0x3fffff;
          let q = p - 3;
          while (q >= 3 && (t[q] >>> 8) > 0) {
            q -= 3;
          }
          const prevEnd = q >= 3 ? t[q + 1] & 0x3fffff : 0;
          return prevEnd + (((end - prevEnd) - (span >>> 22)) & 0x3ff);
        }

        get end() {
          const t = this.#tree;
          let p = this.#pointer;
          while ((t[p] >>> 8) > 0) {
            p -= 3;
          }
          return t[p + 1] & 0x3fffff;
        }

        get value() {
          return this.#stream.subarray(this.start, this.end);
        }

        get pointer() {
          return this.#pointer;
        }

        get depth() {
          return this.#depth;
        }

        reset() {
          this.#pointer = this.#rootPointer;
          this.#depth = 0;
          return true;
        }

        gotoFirstChild() {
          const t = this.#tree;
          const p = this.#pointer;
          const n = t[p] >>> 8;
          if (n === 0) {
            return false;
          }
          const d = this.#depth + 1;
          let stack = this.#parentStack;
          if (d >= stack.length) {
            const next = new Uint32Array(stack.length << 1);
            next.set(stack);
            stack = this.#parentStack = next;
          }
          stack[d] = p | ((n - 1) << 20);
          this.#depth = d;
          this.#pointer = t[p + 1] & 0xfffff;
          return true;
        }

        gotoNextSibling() {
          const d = this.#depth;
          const stack = this.#parentStack;
          const entry = stack[d];
          if (entry < 0x100000) {
            return false;
          }
          stack[d] = entry - 0x100000;
          this.#pointer = this.#tree[this.#pointer + 2];
          return true;
        }

        gotoParent() {
          const d = this.#depth;
          if (d === 0) {
            return false;
          }
          this.#depth = d - 1;
          this.#pointer = this.#parentStack[d] & 0xfffff;
          return true;
        }

        currentNode() {
          return new CstNode(this.#stream, this.#tree, this.#pointer);
        }
      }

      class CstNode {
        #stream;
        #tree;
        #pointer;

        constructor(stream, tree, pointer) {
          this.#stream = stream;
          this.#tree = tree;
          this.#pointer = pointer;
        }

        get name() {
          return parserSymbols[this.#tree[this.#pointer] & 0xff];
        }

        get start() {
          const t = this.#tree;
          let p = this.#pointer;
          while ((t[p] >>> 8) > 0) {
            p = t[p + 1] & 0xfffff;
          }
          const span = t[p + 1];
          const end = span & 0x3fffff;
          let q = p - 3;
          while (q >= 3 && (t[q] >>> 8) > 0) {
            q -= 3;
          }
          const prevEnd = q >= 3 ? t[q + 1] & 0x3fffff : 0;
          return prevEnd + (((end - prevEnd) - (span >>> 22)) & 0x3ff);
        }

        get end() {
          const t = this.#tree;
          let p = this.#pointer;
          while ((t[p] >>> 8) > 0) {
            p -= 3;
          }
          return t[p + 1] & 0x3fffff;
        }

        get value() {
          return this.#stream.subarray(this.start, this.end);
        }

        get items() {
          const t = this.#tree;
          const pointer = this.#pointer;
          const nChildren = t[pointer] >>> 8;
          if (nChildren === 0) {
            return undefined;
          }

          const stream = this.#stream;
          const children = new Array(nChildren);
          let child = t[pointer + 1] & 0xfffff;
          children[0] = new CstNode(stream, t, child);

          for (let i = 1; i < nChildren; i++) {
            child = t[child + 2];
            children[i] = new CstNode(stream, t, child);
          }

          return children;
        }

        get __tree() {
          return this.#tree;
        }

        get __pointer() {
          return this.#pointer;
        }

        cursor() {
          return new TreeCursor(this.#stream, this.#tree, this.#pointer);
        }

        toJSON() {
          return {
            name: this.name,
            start: this.start,
            end: this.end,
            value: this.value,
            items: this.items?.map((item) => item.toJSON()),
          };
        }

        [Symbol.for("nodejs.util.inspect.custom")]() {
          return this.toJSON();
        }
      }

      /**
       * @typedef {Object} Node
       * @property {string} name
       * @property {number} start
       * @property {number} end
       * @property {Uint8Array} value
       * @property {Node[]} items
       */

      /**
       * @param {Uint8Array | string} input
       * @returns {Node}
       */
      function parse(input) {
        ${debug(
          () => `
          console.log('--- parse input');
          console.log(input.toString().substr(0, Math.min(input.length, 20)).replace(/\\n/g, '\\\\n') + (Math.min(input.length, 20) < input.length ? '...' : ''));
          console.log('---');
          `
        )}
        ${
          hasSingleLexerMode
            ? ""
            : `lexerSp = 0;
        lexerStack[0] = LexerMode.${this._lexerModeEnumKey(lexerModes[0])};
        lexerMode = LexerMode.${this._lexerModeEnumKey(lexerModes[0])};`
        }

        const stream = typeof input === "string" ? Buffer.from(input) : input;

        ${
          this.options.debug
            ? `let result = ${
                hasSingleLexerMode
                  ? "nextToken(stream, 0)"
                  : `nextToken${this._lexerModePascalCase(
                      lexerModes[0]
                    )}(stream, 0)`
              };
        let lookahead = result.state;
        let lookaheadSpan = result.end | ((result.end - result.start) << 22);`
            : `const firstRes = ${
                hasSingleLexerMode
                  ? "nextToken(stream, 0)"
                  : `nextToken${this._lexerModePascalCase(
                      lexerModes[0]
                    )}(stream, 0)`
              };
        let lookahead = firstRes.state;
        let lookaheadSpan =
          firstRes.end | ((firstRes.end - firstRes.start) << 22);`
        }

        ${debug(
          () => `
          console.log('  lookahead', lookahead, parserSymbols[lookahead], '(' + result.start + ',' + result.end + ')');
          console.log("    '" + input.toString().substring(Math.max(0, result.start - 10), Math.min(result.start + 10, input.length)) + "'");
          if (result.start !== -1) {
            console.log("     " + Array(result.start - Math.max(0, result.start - 10)).fill(' ').join('') + "^");
          }
          `
        )}

        const stack = arena.stack;
        const tree = arena.tree;
        const actions = actionsTable;
        const goto = gotoTable;
        if (stream.length >>> 1 <= tree.length) {
          let top = ${
            /** @type {number} */ (stateToIndex.get(start)) *
            stateMultiplier *
            1048576
          }; // starting state
          stack[0] = top;
          let sp = 0;
          // let the tree stack start from offset 3
          // offset 0 means an error occurred and should be used by the parser
          let tp = 3;

          ${debug(() => `let steps = 0;`)}
          while (true) {
            ${debug(() => `steps++;`)}
            const currentState = top >>> 20;

            ${actionLookupCode}
            if ((actionLookup & 1) === 0) {
              // shift
              if (actionLookup === 0xfffe) {
                ${debug(() => `console.log('steps', steps);`)}
                return new CstNode(stream, tree, tp - 3);
              }
              ${debug(
                () =>
                  `console.log('action: shift', lookahead, parserSymbols[lookahead]);`
              )}
              ${shiftActionDispatchCode}

              tree[tp] = lookahead; // name (and nChildren = 0)
              tree[tp + 1] = lookaheadSpan;
              tree[(top & 0xfffff) + 2] = tp; // write the current address to the previous item as next sibling

              sp += 1;
              top = tp | (actionLookup << 19);
              stack[sp] = top;

              ${
                this.options.debug
                  ? `result = ${nextTokenExpr};
              lookahead = result.state;
              lookaheadSpan = result.end | ((result.end - result.start) << 22);`
                  : nextTokenUpdateCode
              }
              ${debug(
                () => `
                console.log('  lookahead', lookahead, parserSymbols[lookahead], '(' + result.start + ',' + result.end + ')');
                console.log("    '" + input.toString().substring(Math.max(0, result.start - 10), Math.min(result.start + 10, input.length)) + "'");
                if (result.start !== -1) {
                  console.log("     " + Array(result.start - Math.max(0, result.start - 10)).fill(' ').join('') + "^");
                }
                `
              )}

              ${debug(
                () => `
                console.log('  next state', (stack[sp] >>> 20) / ${stateMultiplier});
                console.log('');
                `
              )}
            } else {
              // reduce
              if (actionLookup === 0xffff) {
                ${
                  hasWordFallback
                    ? `if (
                  wordFallbackTable[lookahead] !== 0 &&
                  actions[${stateOffsetExpr} + ${wordTokenId}] !== 0xffff
                ) {
                  lookahead = ${wordTokenId};
                  continue;
                }`
                    : ""
                }
                const errStart =
                  (lookaheadSpan & 0x3fffff) === 0x3fffff
                    ? -1
                    : (lookaheadSpan & 0x3fffff) - (lookaheadSpan >>> 22);
                const context = input.toString().substr(errStart, 10);
                throw new Error(\`Unexpected lookahead \${parserSymbols[lookahead]} at '\${context}'\`);
              }
              ${
                this.options.debug
                  ? `const word0 = actionLookup >>> 1;
              const actionSymbol = word0 & 0xff;
              const stackItemsToReduce = word0 >>> 8;

              console.log('action: reduce', actionSymbol,
                parserSymbols[actionSymbol],
                Array.from({ length: stackItemsToReduce })
                  .map((_, i) => parserSymbols[tree[stack[sp - i] & 0xfffff] & 0xff])
                  .reverse()
              );
              console.log('  lookahead', lookahead, parserSymbols[lookahead], '(' + result.start + ',' + result.end + ')');
              console.log("    '" + input.toString().substring(Math.max(0, result.start - 10), Math.min(result.start + 10, input.length)) + "'");
              if (result.start !== -1) {
                console.log("     " + Array(result.start - Math.max(0, result.start - 10)).fill(' ').join('') + "^");
              }

              sp -= stackItemsToReduce;
              const rtop = stack[sp] | 0;
              tree[tp] = word0; // name and number of children
              const nextState = goto[${gotoStateOffsetExpr} + actionSymbol];`
                  : `sp -= actionLookup >>> 9;
              const rtop = stack[sp] | 0;
              const word0 = actionLookup >>> 1;
              tree[tp] = word0; // name and number of children
              const nextState = goto[${gotoStateOffsetExpr} + (word0 & 0xff)];`
              }
              tree[(rtop & 0xfffff) + 2] = tp; // next sibling

              sp += 1;
              tree[tp + 1] = stack[sp]; // first child
              top = tp | nextState;
              stack[sp] = top;

              ${debug(
                () => `
                console.log('  next state', (stack[sp] >>> 20) / ${stateMultiplier});
                console.log('');
                `
              )}
            }

            tp += 3;
            if (tp >= tree.length - 2) {
              break;
            }
          }
        }

        let len = tree.length << 1;
        while (len < stream.length >>> 1) {
          len <<= 1;
        }
        const nextStack = new Uint32Array(len);
        const nextTree = new Uint32Array(len);
        delete arena.stack;
        delete arena.tree;
        arena.stack = nextStack;
        arena.tree = nextTree;
        Object.create(arena);
        return parse(input);
      }

      ${this._parserExports()}
    `;

    const formattedCode = prettier.format(code, {
      filepath: this.options.parserFile,
    });

    return formattedCode;
  }

  /**
   * @protected
   * @param {string} tableName
   * @param {Array<{ index: number, value: number, groupKey?: string | number, symbol?: string, comment?: string, runComment?: (first: { index: number, value: number, symbol?: string }, last: { index: number, value: number, symbol?: string }) => string }>} entries
   * @returns {string}
   */
  _formatTableRuns(tableName, entries) {
    if (entries.length === 0) {
      return "";
    }
    const sorted = entries.slice().sort((a, b) => a.index - b.index);
    /** @type {string[]} */
    const lines = [];
    let i = 0;
    while (i < sorted.length) {
      const first = sorted[i];
      let j = i + 1;
      while (
        j < sorted.length &&
        sorted[j].index === sorted[j - 1].index + 1 &&
        sorted[j].value === first.value &&
        sorted[j].groupKey === first.groupKey
      ) {
        j++;
      }
      const last = sorted[j - 1];
      const start = first.index;
      const end = last.index + 1;
      const comment =
        end - start === 1
          ? first.comment
          : first.runComment
          ? first.runComment(first, last)
          : first.comment;
      const suffix = comment ? ` // ${comment}` : "";
      if (end - start === 1) {
        lines.push(`${tableName}[${start}] = ${first.value};${suffix}`);
      } else {
        lines.push(
          `${tableName}.fill(${first.value}, ${start}, ${end});${suffix}`
        );
      }
      i = j;
    }
    return lines.join("\n");
  }

  /**
   * @protected
   * @param {string} name
   * @returns {string}
   */
  _lexerModePascalCase(name) {
    return name
      .split(/[^a-zA-Z0-9]+/)
      .filter(Boolean)
      .map((part) => part[0].toUpperCase() + part.slice(1))
      .join("");
  }

  /**
   * @protected
   * @param {string} name
   * @returns {string}
   */
  _lexerModeEnumKey(name) {
    return name
      .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
      .replace(/[^a-zA-Z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "")
      .toUpperCase();
  }

  /**
   * @protected
   * @param {Lexers} _lexers
   * @returns {string}
   */
  _parserImports(_lexers) {
    throw new Error(
      `${Object.getPrototypeOf(this).constructor.name}#${
        this._parserImports.name
      }() unimplemented`
    );
  }

  /**
   * @protected
   * @returns {string}
   */
  _parserExports() {
    throw new Error(
      `${Object.getPrototypeOf(this).constructor.name}#${
        this._parserExports.name
      }() unimplemented`
    );
  }

  /**
   * @param {() => string} fn
   * @returns {string}
   */
  _debug(fn) {
    if (this.options.debug) {
      return fn();
    }
    return "";
  }
}
