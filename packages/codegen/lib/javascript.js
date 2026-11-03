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
    const canDirectStart =
      !finalSet.has(start) &&
      continuableFinals.length > 0 &&
      transitions.every(([, tr]) => tr.every(([, to]) => to !== start));
    const orderedNonFinals = canDirectStart
      ? [
          ...selfLoopNonFinals.filter((s) => s !== start),
          ...otherNonFinals.filter((s) => s !== start),
          start,
        ]
      : [...selfLoopNonFinals, ...otherNonFinals];

    const activeRowCount = 1 + continuableFinals.length + nonFinals.length;
    const rawEcInfo = computeEquivalenceClasses(data);
    const useEquivalenceClasses =
      this.options.equivalenceClasses !== undefined
        ? this.options.equivalenceClasses && rawEcInfo.columns < origColumns
        : activeRowCount > 96 && rawEcInfo.columns < origColumns;
    const directStartRow = useEquivalenceClasses && canDirectStart;
    const ecInfo = directStartRow
      ? computeEquivalenceClasses({
          transitions: transitions.filter(([from]) => from !== start),
          errorState,
        })
      : rawEcInfo;

    const columns = useEquivalenceClasses ? ecInfo.columns : origColumns;
    const columnShift = useEquivalenceClasses ? ecInfo.shift : 8;

    const maxDeadEndTokenId = deadEndFinals.reduce((max, origState) => {
      const id = tokenIds[origState / origColumns] ?? 0;
      return id > max ? id : max;
    }, 0);

    const compactDeadEndFinals =
      deadEndFinals.length > 0 &&
      (useEquivalenceClasses || deadEndFinals.length < columns);

    const skipTokenIds = Array.from(
      new Set(
        finals
          .filter((origState) => {
            const name = tokenNames[origState / origColumns];
            return Boolean(name && skipTokenNames.has(name));
          })
          .map((origState) => tokenIds[origState / origColumns])
          .filter(
            /** @param {number | undefined} id @returns {id is number} */
            (id) => id !== undefined
          )
      )
    );

    const directDeadEndTokenIds =
      compactDeadEndFinals &&
      (skipTokenNames.size === 0 ||
        skipTokenIds.length === skipTokenNames.size) &&
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
                tr.every(([, to]) => to === s2 || to === errorState) &&
                transitions.every(
                  ([from, ftr]) =>
                    from === start ||
                    from === s2 ||
                    ftr.every(([, to]) => to !== s2)
                )
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

    const nonFinalOrigSet = new Set(nonFinals.filter((s) => s !== start));
    /** @type {Set<number>} */
    const canReachNonFinalSet = new Set();
    if (useEquivalenceClasses && directDeadEndTokenIds) {
      let reachChanged = true;
      while (reachChanged) {
        reachChanged = false;
        for (const s of continuableFinals) {
          if (canReachNonFinalSet.has(s)) continue;
          const tr = transMap.get(s) || [];
          for (const [, to] of tr) {
            if (nonFinalOrigSet.has(to) || canReachNonFinalSet.has(to)) {
              canReachNonFinalSet.add(s);
              reachChanged = true;
              break;
            }
          }
        }
      }
    }
    const openContinuableFinals =
      useEquivalenceClasses && directDeadEndTokenIds
        ? continuableFinals.filter((s) => canReachNonFinalSet.has(s))
        : continuableFinals;
    const closedContinuableFinals =
      useEquivalenceClasses && directDeadEndTokenIds
        ? continuableFinals.filter((s) => !canReachNonFinalSet.has(s))
        : [];

    const rowStates = compactDeadEndFinals
      ? [
          errorState,
          ...openContinuableFinals,
          ...closedContinuableFinals,
          ...orderedNonFinals,
        ]
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
      openContinuableFinals.forEach((origState, idx) => {
        stateRemap.set(origState, (firstActiveRow + idx) * columns);
      });
      closedContinuableFinals.forEach((origState, idx) => {
        stateRemap.set(
          origState,
          (firstActiveRow + openContinuableFinals.length + idx) * columns
        );
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
    const remappedLastOpenFinal =
      openContinuableFinals.length > 0
        ? (firstActiveRow + openContinuableFinals.length - 1) * columns
        : remappedLastDeadEndFinal;
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
              openContinuableFinals.length +
              selfLoopNonFinals.length -
              1) *
            columns
          : (finals.length + selfLoopNonFinals.length) * columns
        : remappedLastOpenFinal;

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
    const hasTokenIdsTable =
      !directDeadEndTokenIds || needsContinuableTokenIdsTable;

    let continuableTokenIdExpr = `ti[successState >> ${columnShift}]`;
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

    /** @type {Array<{ index: number, value: number, comment?: string }>} */
    const tokenIdsEntries = [];
    /** @type {string[]} */
    const tokenIdsAssignments = [];
    /**
     * @param {string | undefined} s
     * @returns {string}
     */
    const sanitizeLineComment = (s) =>
      String(s ?? "").replace(/\r/g, "\\r").replace(/\n/g, "\\n");

    if (needsContinuableTokenIdsTable) {
      continuableFinals.forEach((origState) => {
        const origIdx = origState / origColumns;
        const id = tokenIds[origIdx];
        const name = sanitizeLineComment(tokenNames[origIdx]);
        const rowIdx = remapState(origState) / columns;
        if (id !== undefined && id !== 0) {
          tokenIdsEntries.push({ index: rowIdx, value: id, comment: name });
        }
      });
    } else if (!directDeadEndTokenIds) {
      if (compactDeadEndFinals) {
        deadEndFinals.forEach((origState, idx) => {
          const origIdx = origState / origColumns;
          const id = tokenIds[origIdx];
          const name = sanitizeLineComment(tokenNames[origIdx]);
          if (id !== undefined && id !== 0) {
            tokenIdsAssignments.push(`tokenIds[${idx + 1}] = ${id}; // ${name}`);
          } else {
            tokenIdsAssignments.push(`// tokenIds[${idx + 1}] = 0; // ${name}`);
          }
        });
        continuableFinals.forEach((origState, idx) => {
          const origIdx = origState / origColumns;
          const id = tokenIds[origIdx];
          const name = sanitizeLineComment(tokenNames[origIdx]);
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
          const name = sanitizeLineComment(tokenNames[origIdx]);
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
      ? "t[state + e[input[i++]]]"
      : "t[state + input[i++]]";

    const tableLength = directStartRow
      ? (totalRows - 1) * columns + origColumns
      : columns * totalRows;

    const code = `${this._lexerPreCode()}
      // @ts-nocheck

      const EOF = "${EOF}";
      const ERROR = "${ERROR}";

      ${
        skipBytes.length > 0
          ? `const skipTable = new Uint8Array(256);
      ${this._formatTableRuns(
        "skipTable",
        skipBytes.map((b) => ({ index: b, value: 1 }))
      )}`
          : ""
      }

      ${
        directDeadEndTokenIds && !needsContinuableTokenIdsTable
          ? ""
          : `const tokenIds = new ${tokenIdSize}(${paddedTokenIdsLength});
      ${
        needsContinuableTokenIdsTable
          ? this._formatTableRuns("tokenIds", tokenIdsEntries)
          : tokenIdsAssignments.join("\n")
      }`
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

      const table = new ${pointerSize}(${tableLength});
      ${this._formatTableRuns(
        "table",
        transitions.flatMap(([from, transition]) => {
          if (compactDeadEndFinals && deadEndFinals.includes(from)) {
            return [];
          }
          const mappedFrom = remapState(from);
          const isDirectStart = directStartRow && from === start;
          /** @type {Set<number>} */
          const seenClasses = new Set();
          /** @type {Array<{ index: number, value: number, comment?: string }>} */
          const entries = [];
          for (const [symbol, to] of transition) {
            if (to === errorState) {
              continue;
            }
            const col =
              useEquivalenceClasses && !isDirectStart
                ? ecInfo.classMap[symbol]
                : symbol;
            if (useEquivalenceClasses && !isDirectStart) {
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
        const t = table;
        ${skipBytes.length > 0 ? "const s = skipTable;" : ""}
        ${useEquivalenceClasses ? "const e = ec;" : ""}
        ${hasTokenIdsTable ? "const ti = tokenIds;" : ""}
        ${
          directDeadEndTokenIds && continuableFinals.length === 0
            ? skipTokenIds.length > 0
              ? `// ${remappedStart / columns}
        let i = offset & 0x7fffffff;
        const l = input.length;
        let state = 0;
        while (true) {
          state = ${remappedStart};
          ${
            skipBytes.length > 0
              ? `while (i < l && s[input[i]] !== 0) {
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
          } else if (${skipTokenIds
            .map((id) => `state === ${id}`)
            .join(" || ")}) {
            offset = i;
            continue;
          }
          break;
        }
        return {
          state,
          start: offset,
          end: i,
        };`
              : `// ${remappedStart / columns}
        let state = ${remappedStart};

        // try to find match
        let i = offset & 0x7fffffff;
        const l = input.length;
        ${
          skipBytes.length > 0
            ? `while (i < l && s[input[i]] !== 0) {
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
            ? skipTokenIds.length > 0
              ? `// ${remappedStart / columns}
        let i = offset & 0x7fffffff;
        const l = input.length;
        let state = 0;
        while (true) {
          state = ${remappedLastDeadEndFinal + 1};
          ${
            distinctContinuableTokenIds.length <= 1
              ? ""
              : "let successState = 0;"
          }
          ${branchingContinuableFinals.length > 0 ? "let successPos = 0;" : ""}
          ${
            skipBytes.length > 0
              ? `while (i < l && s[input[i]]) {
            i++;
          }
          offset = i;`
              : ""
          }
          if (
            i < l &&
            (state = t[input[i++] + ${remappedStart}]) > ${remappedLastDeadEndFinal}
          ) {
            ${
              pureSelfLoopFinals.length > 0
                ? `${pureSelfLoopFinals
                    .map((origState, idx) => {
                      const s = remapState(origState);
                      const id = tokenIds[origState / origColumns] ?? 0;
                      return `${idx === 0 ? "if" : "else if"} (state === ${s}) {
              while (i < l && t[input[i] + ${s}]) {
                i++;
              }
              state = ${id + 1};
            }`;
                    })
                    .join("\n")} else `
                : ""
            }while (true) {
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
              state = ${
                tokenIds[tokenNames.indexOf(ERROR)] ===
                (tokenIds[tokenNames.indexOf(EOF)] ?? 0) + 1
                  ? `((i - l) >>> 31) + ${tokenIds[tokenNames.indexOf(EOF)]}`
                  : `i === l ? ${tokenIds[tokenNames.indexOf(EOF)]} : ${
                      tokenIds[tokenNames.indexOf(ERROR)]
                    }`
              };
              offset = i = -1;
            }`
                : `state = ${
                    tokenIds[tokenNames.indexOf(ERROR)] ===
                    (tokenIds[tokenNames.indexOf(EOF)] ?? 0) + 1
                      ? `((i - l) >>> 31) + ${tokenIds[tokenNames.indexOf(EOF)]}`
                      : `i === l ? ${tokenIds[tokenNames.indexOf(EOF)]} : ${
                          tokenIds[tokenNames.indexOf(ERROR)]
                        }`
                  };
            offset = i = -1;`
            }
          }
          if (${skipTokenIds.map((id) => `state === ${id}`).join(" || ")}) {
            offset = i;
            continue;
          }
          return {
            state,
            start: offset,
            end: i,
          };
        }`
              : `// ${remappedStart / columns}
        let state = ${remappedLastDeadEndFinal + 1};
        ${
          distinctContinuableTokenIds.length <= 1
            ? ""
            : "let successState = 0;"
        }
        ${branchingContinuableFinals.length > 0 ? "let successPos = 0;" : ""}

        // try to find match
        let i = offset & 0x7fffffff;
        const l = input.length;
        ${
          skipBytes.length > 0
            ? `while (i < l && s[input[i]]) {
          i++;
        }
        offset = i;`
            : ""
        }
        if (
          i < l &&
          (state = t[input[i++] + ${remappedStart}]) > ${remappedLastDeadEndFinal}
        ) {
          ${
            pureSelfLoopFinals.length > 0
              ? `${pureSelfLoopFinals
                  .map((origState, idx) => {
                    const s = remapState(origState);
                    const id = tokenIds[origState / origColumns] ?? 0;
                    return `${idx === 0 ? "if" : "else if"} (state === ${s}) {
            while (i < l && t[input[i] + ${s}]) {
              i++;
            }
            state = ${id + 1};
          }`;
                  })
                  .join("\n")} else `
              : ""
          }while (true) {
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
            state = ${
              tokenIds[tokenNames.indexOf(ERROR)] ===
              (tokenIds[tokenNames.indexOf(EOF)] ?? 0) + 1
                ? `((i - l) >>> 31) + ${tokenIds[tokenNames.indexOf(EOF)]}`
                : `i === l ? ${tokenIds[tokenNames.indexOf(EOF)]} : ${
                    tokenIds[tokenNames.indexOf(ERROR)]
                  }`
            };
            offset = i = -1;
          }`
              : `state = ${
                  tokenIds[tokenNames.indexOf(ERROR)] ===
                  (tokenIds[tokenNames.indexOf(EOF)] ?? 0) + 1
                    ? `((i - l) >>> 31) + ${tokenIds[tokenNames.indexOf(EOF)]}`
                    : `i === l ? ${tokenIds[tokenNames.indexOf(EOF)]} : ${
                        tokenIds[tokenNames.indexOf(ERROR)]
                      }`
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
            ? skipTokenIds.length > 0
              ? `// ${remappedStart / columns}
        let i = offset | 0;
        const l = input.length;
        while (true) {
          let state = 0;
          let successState = 0;
          let successPos = 0;
          ${
            skipBytes.length > 0
              ? `while (i < l && s[input[i]]) {
            i++;
          }
          offset = i;`
              : ""
          }
          if (
            i < l &&
            (state = t[${
              directStartRow
                ? `input[i++] + ${remappedStart}`
                : `e[input[i++]] + ${remappedStart}`
            }]) > ${remappedLastDeadEndFinal}
          ) {
            do {
              if (state <= ${remappedLastFinal}) {
                if (state > ${remappedLastOpenFinal}) {
                  do {
                    successState = state;
                    successPos = i;
                  } while (
                    i < l &&
                    (state = ${stepExpr}) > ${remappedLastOpenFinal}
                  );
                  break;
                }
                successState = state;
                successPos = i;
                if (i >= l) break;
              }
              while (
                i < l &&
                (state = ${stepExpr}) > ${remappedLastFinal}
              );
            } while (
              ((state - ${remappedLastDeadEndFinal + 1}) >>> 0) <
              ${remappedLastFinal - remappedLastDeadEndFinal}
            );
          }

          if (--state >>> 0 >= ${remappedLastDeadEndFinal}) {
            if (successState) {
              i = successPos;
              state = ${continuableTokenIdExpr};
            } else {
              state = ${
                tokenIds[tokenNames.indexOf(ERROR)] ===
                (tokenIds[tokenNames.indexOf(EOF)] ?? 0) + 1
                  ? `((i - l) >>> 31) + ${tokenIds[tokenNames.indexOf(EOF)]}`
                  : `i === l ? ${tokenIds[tokenNames.indexOf(EOF)]} : ${
                      tokenIds[tokenNames.indexOf(ERROR)]
                    }`
              };
              offset = i = -1;
            }
          }
          if (${skipTokenIds.map((id) => `state === ${id}`).join(" || ")}) {
            offset = i;
            continue;
          }
          return {
            state,
            start: offset,
            end: i,
          };
        }`
              : `// ${remappedStart / columns}
        let state = 0;
        let successState = 0;
        let successPos = 0;
        let i = offset | 0;
        const l = input.length;
        ${
          skipBytes.length > 0
            ? `while (i < l && s[input[i]]) {
          i++;
        }
        offset = i;`
            : ""
        }
        if (
          i < l &&
          (state = t[${
            directStartRow
              ? `input[i++] + ${remappedStart}`
              : `e[input[i++]] + ${remappedStart}`
          }]) > ${remappedLastDeadEndFinal}
        ) {
          do {
            if (state <= ${remappedLastFinal}) {
              if (state > ${remappedLastOpenFinal}) {
                do {
                  successState = state;
                  successPos = i;
                } while (
                  i < l &&
                  (state = ${stepExpr}) > ${remappedLastOpenFinal}
                );
                break;
              }
              successState = state;
              successPos = i;
              if (i >= l) break;
            }
            while (
              i < l &&
              (state = ${stepExpr}) > ${remappedLastFinal}
            );
          } while (
            ((state - ${remappedLastDeadEndFinal + 1}) >>> 0) <
            ${remappedLastFinal - remappedLastDeadEndFinal}
          );
        }

        if (--state >>> 0 >= ${remappedLastDeadEndFinal}) {
          if (successState) {
            i = successPos;
            state = ${continuableTokenIdExpr};
          } else {
            state = ${
              tokenIds[tokenNames.indexOf(ERROR)] ===
              (tokenIds[tokenNames.indexOf(EOF)] ?? 0) + 1
                ? `((i - l) >>> 31) + ${tokenIds[tokenNames.indexOf(EOF)]}`
                : `i === l ? ${tokenIds[tokenNames.indexOf(EOF)]} : ${
                    tokenIds[tokenNames.indexOf(ERROR)]
                  }`
            };
            offset = i = -1;
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
          ${
            skipBytes.length > 0
              ? `while (i < l && s[input[i]] !== 0) {
            i++;
          }
          offset = i;`
              : ""
          }
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
                ? "ti[successState]"
                : `ti[successState >> ${columnShift}]`
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
            ? `while (i < l && s[input[i]] !== 0) {
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
              ? "ti[successState]"
              : `ti[successState >> ${columnShift}]`
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
    const rawLexerModes = Object.keys(lexerData);
    const lexerModes = rawLexerModes.includes("initial")
      ? ["initial", ...rawLexerModes.filter((m) => m !== "initial")]
      : rawLexerModes;
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
    const preserveExtras = Boolean(
      data.preserveExtras && data.extraTokenId !== undefined
    );
    const extraTokenId = data.extraTokenId ?? 0;
    const newlineTokenId = /** @type {*} */ (data).newlineTokenId;

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

    const numSymbols = trimmedParserSymbols.length;
    const symBits = Math.max(
      8,
      Math.ceil(Math.log2(Math.max(2, numSymbols + 1)))
    );
    const symMask = (1 << symBits) - 1;
    const symMaskHex = `0x${symMask.toString(16)}`;
    const maxReduceLen = rules.reduce(
      (max, r) => Math.max(max, r.symbols.length),
      0
    );
    const hasEpsilonRules = rules.some((r) => r.symbols.length === 0);

    const maxStateVal = Math.max(
      1,
      (orderedStates.length - 1) * stateMultiplier
    );
    const stateBits = Math.max(
      8,
      Math.ceil(Math.log2(Math.max(2, maxStateVal + 1)))
    );
    const useSplitStack = stateBits > 12;
    const tpBits = useSplitStack ? 20 : 32 - stateBits;
    const tpMask = (1 << tpBits) - 1;
    const tpMaskHex = `0x${tpMask.toString(16)}`;
    const tpShiftMul = 2 ** tpBits;

    const maxShiftAction = maxStateVal * 2;
    const maxReduceAction =
      maxReduceLen * 2 ** (symBits + 1) +
      Math.max(0, numSymbols - 1) * 2 +
      1;
    const useUint32Actions =
      maxShiftAction >= 0xfffe || maxReduceAction >= 0xfffe;
    const actionsArrayType = useUint32Actions ? "Uint32Array" : "Uint16Array";
    const ACTION_DONE = useUint32Actions ? 0xfffffffe : 0xfffe;
    const ACTION_ERROR = useUint32Actions ? 0xffffffff : 0xffff;
    const ACTION_DONE_HEX = useUint32Actions ? "0xfffffffe" : "0xfffe";
    const ACTION_ERROR_HEX = useUint32Actions ? "0xffffffff" : "0xffff";

    const compactGoto = gotoTableSize > 4096;
    const gotoArrayType = compactGoto
      ? maxStateVal <= 0xff
        ? "Uint8Array"
        : maxStateVal <= 0xffff
        ? "Uint16Array"
        : "Uint32Array"
      : "Uint32Array";

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

    const nextTokenLargeExpr = hasSingleLexerMode
      ? "nextToken(stream, lookaheadEnd)"
      : lexerModes
          .slice(0, -1)
          .map(
            (name) =>
              `lexerMode === LexerMode.${this._lexerModeEnumKey(
                name
              )} ? nextToken${this._lexerModePascalCase(
                name
              )}(stream, lookaheadEnd) : `
          )
          .join("") +
        `nextToken${this._lexerModePascalCase(
          lexerModes[lexerModes.length - 1]
        )}(stream, lookaheadEnd)`;

    const nextTokenUpdateCode = hasSingleLexerMode
      ? `const res = nextToken(stream, lookaheadSpan & 0x3fffff);
            lookahead = res.state;
            ${preserveExtras ? "lookaheadStart = res.start;" : ""}
            const tokLen = res.end - res.start;
            lookaheadSpan = res.end | ((tokLen < 1023 ? tokLen : 1023) << 22);`
      : lexerModes
          .map((name, idx) => {
            const callExpr = `nextToken${this._lexerModePascalCase(
              name
            )}(stream, lookaheadSpan & 0x3fffff)`;
            const body = `{
              const res = ${callExpr};
              lookahead = res.state;
              ${preserveExtras ? "lookaheadStart = res.start;" : ""}
              const tokLen = res.end - res.start;
              lookaheadSpan = res.end | ((tokLen < 1023 ? tokLen : 1023) << 22);
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
        ? `if (sa[actionIndex] !== 0) {
              ${shiftActionBodies[0]};
            }`
        : `const shiftAction = sa[actionIndex];
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
      ? `(rtop >>> ${tpBits})`
      : tableStrideShift > 0
      ? `((rtop >>> ${tpBits}) << ${tableStrideShift})`
      : `(rtop >>> ${tpBits}) * ${tableStride}`;

    const actionLookupCode = hasShiftSemanticActions
      ? `const actionIndex = ${stateOffsetExpr} + lookahead;
          const actionLookup = actions[actionIndex];`
      : `const actionLookup = actions[${stateOffsetExpr} + lookahead];`;

    const isNonTerminalLeafCheck = hasDisjointSymbolRanges
      ? `(tree[q] & ${symMaskHex}) > ${maxTerminalIndex}`
      : minNonTerminalIndex <= maxNonTerminalIndex
      ? `(tree[q] & ${symMaskHex}) >= ${minNonTerminalIndex} && (tree[q] & ${symMaskHex}) <= ${maxNonTerminalIndex}`
      : "false";

    const code = `// @ts-nocheck
      ${this._parserImports(lexerData)}

      /*
      ${rules
        .map((rule) =>
          `${rule.name} := ${rule.symbols.join(" ")};`
            .replace(/\*\//g, "*\\/")
            .replace(/\r/g, "\\r")
            .replace(/\n/g, "\\n")
        )
        .join("\n")}
      */

      const parserSymbols = [
        ${trimmedParserSymbols
          .map((symbol, i) => {
            return `${JSON.stringify(symbol)}, // ${i}`;
          })
          .join("\n")}
      ];

      const SymbolIds = Object.freeze({
        ${trimmedParserSymbols
          .map((symbol, i) =>
            symbol !== undefined ? `${JSON.stringify(symbol)}: ${i},` : ""
          )
          .filter(Boolean)
          .join("\n")}
      });

      const actionsTable = new ${actionsArrayType}(${actionsTableSize}).fill(${ACTION_ERROR_HEX});
      ${this._formatTableRuns(
        "actionsTable",
        Array.from(actions.entries()).flatMap(([from, action]) => {
          const stateIndex = /** @type {number} */ (stateToIndex.get(from));
          const items = Array.from(from.values());
          return Array.from(action.entries())
            .filter(([symbol]) => !ruleNamesSet.has(symbol))
            .map(([symbol, to]) => {
              const lookaheadIndex = parserSymbols.indexOf(symbol);
              let packedAction = ACTION_ERROR;
              let target = 0;
              let reduceLen = 0;
              if (to.op === "shift" && to.state) {
                target =
                  /** @type {number} */ (stateToIndex.get(to.state)) *
                  stateMultiplier;
                packedAction = target * 2;
              } else if (to.op === "reduce" && to.symbol) {
                target = parserSymbols.indexOf(to.symbol);
                const matchedItem = items.find(
                  (item) =>
                    item.name === to.symbol &&
                    item.marker === item.tokens.length &&
                    item.lookahead === symbol
                );
                reduceLen = matchedItem ? matchedItem.tokens.length : 0;
                packedAction =
                  reduceLen * 2 ** (symBits + 1) + target * 2 + 1;
              } else if (to.op === "done") {
                packedAction = ACTION_DONE;
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

      const gotoTable = new ${gotoArrayType}(${gotoTableSize});
      ${this._formatTableRuns(
        "gotoTable",
        Array.from(goto.entries()).flatMap(([from, target]) => {
          const fromIndex = /** @type {number} */ (stateToIndex.get(from));
          return Array.from(target.entries()).map(([symbol, to]) => {
            const toIndex = /** @type {number} */ (stateToIndex.get(to));
            return {
              index:
                fromIndex * tableStride + parserSymbols.indexOf(symbol),
              value: compactGoto
                ? toIndex * stateMultiplier
                : toIndex * stateMultiplier * tpShiftMul,
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

      let lexerStack = new Uint8Array(64);
      let lexerSp = 0;
      let lexerMode = LexerMode.${this._lexerModeEnumKey(lexerModes[0])};

      const lexer = {
        push(mode) {
          const modeId = typeof mode === "number" ? mode : lexerModeNames[mode];
          if (++lexerSp >= lexerStack.length) {
            const next = new Uint8Array(lexerStack.length << 1);
            next.set(lexerStack);
            lexerStack = next;
          }
          lexerStack[lexerSp] = modeId;
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
       * Each CST node in tree occupies 2 uint32 words (postorder layout):
       * - word 0 (tp + 0): name | (numChildren << 8)
       * - word 1 (tp + 1): end | ((end - start) << 22) (leaf) or rtop (internal: low 20 bits = prevSibling / subtreeStart - 2)
       */
      const arena = {
        stack: new Uint32Array(${states.length > 64 ? 262144 : 16384}),
        tree: new Uint32Array(${states.length > 64 ? 524288 : 16384}),
      };

      class TreeCursor {
        #stream;
        #tree;
        #rootPointer;
        #pointer;
        #parentStack = new Uint32Array(128);
        #siblingStack = new Uint32Array(128);
        #depth = 0;
        #siblingSp = 0;

        constructor(stream, tree, pointer) {
          this.#stream = stream;
          this.#tree = tree;
          this.#rootPointer = pointer;
          this.#pointer = pointer;
        }

        get name() {
          return parserSymbols[this.#tree[this.#pointer] & ${symMaskHex}];
        }

        get symbolId() {
          return this.#tree[this.#pointer] & ${symMaskHex};
        }

        get childCount() {
          return this.#tree[this.#pointer] >>> ${symBits};
        }

        get isLeaf() {
          return (this.#tree[this.#pointer] >>> ${symBits}) === 0;
        }

        #exactLeafStart(p, end) {
          const t = this.#tree;
          let q = p - 2;
          while (q >= 2 && (t[q] >>> ${symBits}) > 0) {
            q -= 2;
          }
          const prevEnd =
            q >= 2 ? (t[0] === 0 ? t[q + 1] & 0x3fffff : t[q + 1]) : 0;
          if (prevEnd >= end) {
            return end;
          }
          ${
            preserveExtras
              ? "return prevEnd;"
              : hasSingleLexerMode
              ? "return nextToken(this.#stream, prevEnd).start;"
              : `const sym = t[p] & ${symMaskHex};
          let fallbackStart = prevEnd;
          ${lexerModes
            .map(
              (name) => `{
            const r = nextToken${this._lexerModePascalCase(
              name
            )}(this.#stream, prevEnd);
            if (r.end === end) {
              if (r.state === sym) return r.start;
              fallbackStart = r.start;
            }
          }`
            )
            .join("\n")}
          return fallbackStart;`
          }
        }

        get start() {
          const t = this.#tree;
          let p = this.#pointer;
          if ((t[p] >>> ${symBits}) > 0) {
            const mask = t[0] === 0 ? ${tpMaskHex} : 0xffffffff;
            p = (t[p + 1] & mask) + 2;
          }
          if (t[0] !== 0) {
            return this.#exactLeafStart(p, t[p + 1]);
          }
          const span = t[p + 1];
          const end = span & 0x3fffff;
          const len = span >>> 22;
          if (len < 1023) {
            return end - len;
          }
          return this.#exactLeafStart(p, end);
        }

        get end() {
          const t = this.#tree;
          let p = this.#pointer;
          while ((t[p] >>> ${symBits}) > 0) {
            p -= 2;
          }
          return t[0] === 0 ? t[p + 1] & 0x3fffff : t[p + 1];
        }

        get value() {
          return this.#stream.subarray(this.start, this.end);
        }

        get text() {
          return Buffer.from(
            this.#stream.subarray(this.start, this.end)
          ).toString("utf-8");
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
          this.#siblingSp = 0;
          return true;
        }

        gotoFirstChild() {
          const t = this.#tree;
          const p = this.#pointer;
          const n = t[p] >>> ${symBits};
          if (n === 0) {
            return false;
          }
          const d = this.#depth + 1;
          let stack = this.#parentStack;
          if ((d << 1) + 1 >= stack.length) {
            const next = new Uint32Array(stack.length << 1);
            next.set(stack);
            stack = this.#parentStack = next;
          }
          const idx = d << 1;
          stack[idx] = p;
          stack[idx + 1] = n - 1;
          this.#depth = d;
          let c = p - 2;
          if (n > 1) {
            const mask = t[0] === 0 ? ${tpMaskHex} : 0xffffffff;
            let sp = this.#siblingSp;
            let sStack = this.#siblingStack;
            if (sp + n >= sStack.length) {
              const next = new Uint32Array((sStack.length + n) << 1);
              next.set(sStack);
              sStack = this.#siblingStack = next;
            }
            for (let k = 1; k < n; k++) {
              sStack[++sp] = c;
              c = (t[c] >>> ${symBits}) === 0 ? c - 2 : t[c + 1] & mask;
            }
            this.#siblingSp = sp;
          }
          this.#pointer = c;
          return true;
        }

        gotoNextSibling() {
          const d = this.#depth;
          if (d === 0) {
            return false;
          }
          const stack = this.#parentStack;
          const remIdx = (d << 1) + 1;
          const rem = stack[remIdx];
          if (rem === 0) {
            return false;
          }
          stack[remIdx] = rem - 1;
          const sp = this.#siblingSp;
          this.#pointer = this.#siblingStack[sp];
          this.#siblingSp = sp - 1;
          return true;
        }

        gotoParent() {
          const d = this.#depth;
          if (d === 0) {
            return false;
          }
          const stack = this.#parentStack;
          const idx = d << 1;
          this.#siblingSp -= stack[idx + 1];
          this.#depth = d - 1;
          this.#pointer = stack[idx];
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
          return parserSymbols[this.#tree[this.#pointer] & ${symMaskHex}];
        }

        get symbolId() {
          return this.#tree[this.#pointer] & ${symMaskHex};
        }

        get childCount() {
          return this.#tree[this.#pointer] >>> ${symBits};
        }

        get isLeaf() {
          return (this.#tree[this.#pointer] >>> ${symBits}) === 0;
        }

        #exactLeafStart(p, end) {
          const t = this.#tree;
          let q = p - 2;
          while (q >= 2 && (t[q] >>> ${symBits}) > 0) {
            q -= 2;
          }
          const prevEnd =
            q >= 2 ? (t[0] === 0 ? t[q + 1] & 0x3fffff : t[q + 1]) : 0;
          if (prevEnd >= end) {
            return end;
          }
          ${
            preserveExtras
              ? "return prevEnd;"
              : hasSingleLexerMode
              ? "return nextToken(this.#stream, prevEnd).start;"
              : `const sym = t[p] & ${symMaskHex};
          let fallbackStart = prevEnd;
          ${lexerModes
            .map(
              (name) => `{
            const r = nextToken${this._lexerModePascalCase(
              name
            )}(this.#stream, prevEnd);
            if (r.end === end) {
              if (r.state === sym) return r.start;
              fallbackStart = r.start;
            }
          }`
            )
            .join("\n")}
          return fallbackStart;`
          }
        }

        get start() {
          const t = this.#tree;
          let p = this.#pointer;
          if ((t[p] >>> ${symBits}) > 0) {
            const mask = t[0] === 0 ? ${tpMaskHex} : 0xffffffff;
            p = (t[p + 1] & mask) + 2;
          }
          if (t[0] !== 0) {
            return this.#exactLeafStart(p, t[p + 1]);
          }
          const span = t[p + 1];
          const end = span & 0x3fffff;
          const len = span >>> 22;
          if (len < 1023) {
            return end - len;
          }
          return this.#exactLeafStart(p, end);
        }

        get end() {
          const t = this.#tree;
          let p = this.#pointer;
          while ((t[p] >>> ${symBits}) > 0) {
            p -= 2;
          }
          return t[0] === 0 ? t[p + 1] & 0x3fffff : t[p + 1];
        }

        get value() {
          return this.#stream.subarray(this.start, this.end);
        }

        get text() {
          return Buffer.from(
            this.#stream.subarray(this.start, this.end)
          ).toString("utf-8");
        }

        get firstChild() {
          const t = this.#tree;
          const pointer = this.#pointer;
          const nChildren = t[pointer] >>> ${symBits};
          if (nChildren === 0) {
            return undefined;
          }
          const mask = t[0] === 0 ? ${tpMaskHex} : 0xffffffff;
          let c = pointer - 2;
          for (let i = 1; i < nChildren; i++) {
            c = (t[c] >>> ${symBits}) === 0 ? c - 2 : t[c + 1] & mask;
          }
          return new CstNode(this.#stream, t, c);
        }

        get lastChild() {
          const t = this.#tree;
          const pointer = this.#pointer;
          if ((t[pointer] >>> ${symBits}) === 0) {
            return undefined;
          }
          return new CstNode(this.#stream, t, pointer - 2);
        }

        child(index) {
          const t = this.#tree;
          const pointer = this.#pointer;
          const nChildren = t[pointer] >>> ${symBits};
          const idx = index < 0 ? nChildren + index : index;
          if (idx < 0 || idx >= nChildren) {
            return undefined;
          }
          const mask = t[0] === 0 ? ${tpMaskHex} : 0xffffffff;
          let c = pointer - 2;
          for (let i = nChildren - 1; i > idx; i--) {
            c = (t[c] >>> ${symBits}) === 0 ? c - 2 : t[c + 1] & mask;
          }
          return new CstNode(this.#stream, t, c);
        }

        childByName(name) {
          const t = this.#tree;
          const pointer = this.#pointer;
          const nChildren = t[pointer] >>> ${symBits};
          if (nChildren === 0) {
            return undefined;
          }
          const mask = t[0] === 0 ? ${tpMaskHex} : 0xffffffff;
          let match = -1;
          let c = pointer - 2;
          for (let i = 0; i < nChildren; i++) {
            if (parserSymbols[t[c] & ${symMaskHex}] === name) {
              match = c;
            }
            if (i + 1 < nChildren) {
              c = (t[c] >>> ${symBits}) === 0 ? c - 2 : t[c + 1] & mask;
            }
          }
          return match === -1 ? undefined : new CstNode(this.#stream, t, match);
        }

        childrenByName(name) {
          const t = this.#tree;
          const pointer = this.#pointer;
          const nChildren = t[pointer] >>> ${symBits};
          const result = [];
          if (nChildren === 0) {
            return result;
          }
          const mask = t[0] === 0 ? ${tpMaskHex} : 0xffffffff;
          const stream = this.#stream;
          let c = pointer - 2;
          for (let i = 0; i < nChildren; i++) {
            if (parserSymbols[t[c] & ${symMaskHex}] === name) {
              result.push(new CstNode(stream, t, c));
            }
            if (i + 1 < nChildren) {
              c = (t[c] >>> ${symBits}) === 0 ? c - 2 : t[c + 1] & mask;
            }
          }
          result.reverse();
          return result;
        }

        get items() {
          const t = this.#tree;
          const pointer = this.#pointer;
          const nChildren = t[pointer] >>> ${symBits};
          if (nChildren === 0) {
            return undefined;
          }

          const mask = t[0] === 0 ? ${tpMaskHex} : 0xffffffff;
          const stream = this.#stream;
          const children = new Array(nChildren);
          let child = pointer - 2;
          for (let i = nChildren - 1; i > 0; i--) {
            children[i] = new CstNode(stream, t, child);
            child =
              (t[child] >>> ${symBits}) === 0 ? child - 2 : t[child + 1] & mask;
          }
          children[0] = new CstNode(stream, t, child);

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

        reemitLossless(input) {
          const stream =
            input === undefined
              ? this.#stream
              : typeof input === "string"
              ? Buffer.from(input)
              : input;
          const t = this.#tree;
          const rootPtr = this.#pointer;
          const mask = t[0] === 0 ? ${tpMaskHex} : 0xffffffff;
          const startPtr =
            (t[rootPtr] >>> ${symBits}) === 0
              ? rootPtr
              : (t[rootPtr + 1] & mask) + 2;
          const isRoot = startPtr === 2 && (t[1] === 0 || rootPtr === t[1]);
          const outLen = isRoot ? stream.length : this.end - this.start;
          const out = Buffer.allocUnsafe(outLen);
          let offset = 0;
          let prevEnd = isRoot ? 0 : this.start;

          for (let p = startPtr; p <= rootPtr; p += 2) {
            if ((t[p] >>> ${symBits}) === 0) {
              const end = t[0] === 0 ? t[p + 1] & 0x3fffff : t[p + 1];
              if (end > prevEnd) {
                out.set(stream.subarray(prevEnd, end), offset);
                offset += end - prevEnd;
                prevEnd = end;
              }
            }
          }
          if (isRoot && prevEnd < stream.length) {
            out.set(stream.subarray(prevEnd, stream.length), offset);
            offset += stream.length - prevEnd;
          }
          return out.subarray(0, offset);
        }

        toSExpr(includeText = false) {
          const t = this.#tree;
          const stream = this.#stream;
          const mask = t[0] === 0 ? ${tpMaskHex} : 0xffffffff;
          const formatNode = (p) => {
            const w0 = t[p];
            const name = parserSymbols[w0 & ${symMaskHex}];
            const n = w0 >>> ${symBits};
            if (n === 0) {
              if (!includeText) {
                return "(" + name + ")";
              }
              const node = new CstNode(stream, t, p);
              return "(" + name + " " + JSON.stringify(node.text) + ")";
            }
            const childPtrs = new Uint32Array(n);
            let c = p - 2;
            for (let i = n - 1; i >= 0; i--) {
              childPtrs[i] = c;
              if (i > 0) {
                c = (t[c] >>> ${symBits}) === 0 ? c - 2 : t[c + 1] & mask;
              }
            }
            let out = "(" + name;
            for (let i = 0; i < n; i++) {
              out += " " + formatNode(childPtrs[i]);
            }
            return out + ")";
          };
          return formatNode(this.#pointer);
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

      class LineIndex {
        #lineStarts;

        constructor(input) {
          const stream = typeof input === "string" ? Buffer.from(input) : input;
          let count = 1;
          for (let i = 0; i < stream.length; i++) {
            if (stream[i] === 10) {
              count++;
            }
          }
          const starts = new Uint32Array(count);
          starts[0] = 0;
          let idx = 1;
          for (let i = 0; i < stream.length; i++) {
            if (stream[i] === 10) {
              starts[idx++] = i + 1;
            }
          }
          this.#lineStarts = starts;
        }

        locationForOffset(offset) {
          const starts = this.#lineStarts;
          let low = 0;
          let high = starts.length - 1;
          while (low <= high) {
            const mid = (low + high) >>> 1;
            if (starts[mid] <= offset) {
              low = mid + 1;
            } else {
              high = mid - 1;
            }
          }
          return {
            line: high + 1,
            column: offset - starts[high] + 1,
          };
        }
      }

      function throwSyntaxError(
        stream,
        tree,
        tp,
        lookahead,
        lookaheadSpan,
        stateOffset
      ) {
        const symName = parserSymbols[lookahead] ?? String(lookahead);
        const rawEnd = lookaheadSpan & 0x3fffff;
        let offset = 0;
        let endOffset = 0;
        if (rawEnd !== 0x3fffff) {
          endOffset = rawEnd;
          offset = endOffset - (lookaheadSpan >>> 22);
        } else if (symName === "@par-gen.EOF") {
          offset = stream.length;
          endOffset = stream.length;
        } else {
          let q = tp - 2;
          while (
            q >= 2 &&
            ((tree[q] >>> ${symBits}) > 0 || ${isNonTerminalLeafCheck})
          ) {
            q -= 2;
          }
          offset =
            q >= 2 ? (tree[0] === 0 ? tree[q + 1] & 0x3fffff : tree[q + 1]) : 0;
          while (
            offset < stream.length &&
            (stream[offset] === 32 ||
              stream[offset] === 9 ||
              stream[offset] === 10 ||
              stream[offset] === 13)
          ) {
            offset++;
          }
          endOffset = offset < stream.length ? offset + 1 : offset;
        }

        let line = 1;
        let lineStart = 0;
        for (let i = 0; i < offset && i < stream.length; i++) {
          if (stream[i] === 10) {
            line++;
            lineStart = i + 1;
          }
        }
        const column = offset - lineStart + 1;

        let lineEnd = offset;
        while (
          lineEnd < stream.length &&
          stream[lineEnd] !== 10 &&
          stream[lineEnd] !== 13
        ) {
          lineEnd++;
        }

        const expected = [];
        for (let t = 0; t <= ${maxTerminalIndex}; t++) {
          if (actionsTable[stateOffset + t] !== ${ACTION_ERROR_HEX}) {
            const name = parserSymbols[t];
            if (name && name !== "@par-gen.ERROR") {
              expected.push(name);
            }
          }
        }

        const tokenText =
          endOffset > offset
            ? Buffer.from(stream.subarray(offset, endOffset)).toString("utf-8")
            : "";
        const foundDesc =
          symName === "@par-gen.EOF"
            ? "@par-gen.EOF (end of input)"
            : tokenText && tokenText !== symName
            ? \`\${symName} (\${JSON.stringify(tokenText)})\`
            : symName;
        const expectedDesc =
          expected.length > 0
            ? \`. Expected one of: \${expected.join(", ")}\`
            : "";

        let winStart = lineStart;
        let winEnd = lineEnd;
        let prefix = "";
        let suffix = "";
        if (lineEnd - lineStart > 120) {
          winStart = Math.max(lineStart, offset - 40);
          winEnd = Math.min(lineEnd, offset + 60);
          if (winStart > lineStart) prefix = "...";
          if (winEnd < lineEnd) suffix = "...";
        }
        const lineStr =
          prefix +
          Buffer.from(stream.subarray(winStart, winEnd)).toString("utf-8") +
          suffix;
        const lineNumStr = String(line);
        const gutterPad = " ".repeat(lineNumStr.length);
        const caretCol = Math.max(0, offset - winStart + prefix.length);
        const caretLen = Math.max(
          1,
          Math.min(endOffset - offset, winEnd - offset)
        );
        const frame = \`\${gutterPad} |\\n\${lineNumStr} | \${lineStr}\\n\${gutterPad} | \${" ".repeat(
          caretCol
        )}\${"^".repeat(caretLen)}\`;

        const err = new SyntaxError(
          \`Unexpected lookahead \${foundDesc} at line \${line}, column \${column}\${expectedDesc}\\n\${frame}\`
        );
        err.line = line;
        err.column = column;
        err.offset = offset;
        err.endOffset = endOffset;
        err.found = symName;
        err.tokenText = tokenText;
        err.expected = expected;
        throw err;
      }

      function reemitLossless(cst, input) {
        return cst.reemitLossless(input);
      }

      function parseLarge(stream) {
        ${
          hasSingleLexerMode
            ? ""
            : `lexerSp = 0;
        lexerStack[0] = LexerMode.${this._lexerModeEnumKey(lexerModes[0])};
        lexerMode = LexerMode.${this._lexerModeEnumKey(lexerModes[0])};`
        }
        const firstRes = ${
          hasSingleLexerMode
            ? "nextToken(stream, 0)"
            : `nextToken${this._lexerModePascalCase(lexerModes[0])}(stream, 0)`
        };
        let lookahead = firstRes.state;
        let lookaheadStart = firstRes.start;
        let lookaheadEnd = firstRes.end;

        let stackCap = 65536;
        let stackStates = new Uint32Array(stackCap);
        let stackTps = new Uint32Array(stackCap);
        let treeCap = 1048576;
        while (treeCap <= stream.length) {
          treeCap <<= 1;
        }
        let tree = new Uint32Array(treeCap);
        tree[0] = 1;
        const actions = actionsTable;
        const goto = gotoTable;
        ${hasShiftSemanticActions ? "const sa = shiftActionsTable;" : ""}
        ${hasWordFallback ? "const wf = wordFallbackTable;" : ""}

        let topState = ${
          /** @type {number} */ (stateToIndex.get(start)) * stateMultiplier
        };
        stackStates[0] = topState;
        stackTps[0] = 0;
        let sp = 0;
        let tp = 2;
        ${preserveExtras ? "let prevEnd = 0;" : ""}

        while (true) {
          const currentState = topState;
          ${actionLookupCode}
          if ((actionLookup & 1) === 0) {
            if (actionLookup === ${ACTION_DONE_HEX}) {
              ${
                preserveExtras
                  ? `if (prevEnd < stream.length) {
                const rootPtr = tp - 2;
                if (tp + 4 >= treeCap) {
                  treeCap <<= 1;
                  const nextTree = new Uint32Array(treeCap);
                  nextTree.set(tree);
                  tree = nextTree;
                }
                tree[tp] = ${extraTokenId};
                tree[tp + 1] = stream.length;
                tp += 2;
                tree[tp] = (tree[rootPtr] & ${symMaskHex}) | (2 << ${symBits});
                tree[tp + 1] = 0;
                tp += 2;
              }`
                  : ""
              }
              tree[1] = tp - 2;
              return new CstNode(stream, tree, tp - 2);
            }
            ${shiftActionDispatchCode}
            if (sp + 2 >= stackCap) {
              stackCap <<= 1;
              const nextS = new Uint32Array(stackCap);
              nextS.set(stackStates);
              stackStates = nextS;
              const nextT = new Uint32Array(stackCap);
              nextT.set(stackTps);
              stackTps = nextT;
            }
            ${
              preserveExtras
                ? `if (lookaheadStart === prevEnd) {
              tree[tp] = lookahead;
              tree[tp + 1] = lookaheadEnd;
              sp += 1;
              topState = actionLookup >>> 1;
              stackStates[sp] = topState;
              stackTps[sp] = tp;
              prevEnd = lookaheadEnd;
            } else {
              if (tp + 6 >= treeCap) {
                treeCap <<= 1;
                const nextTree = new Uint32Array(treeCap);
                nextTree.set(tree);
                tree = nextTree;
              }
              const prevTp = stackTps[sp];
              tree[tp] = ${extraTokenId};
              tree[tp + 1] = lookaheadStart;
              tp += 2;
              tree[tp] = lookahead;
              tree[tp + 1] = lookaheadEnd;
              tp += 2;
              tree[tp] = lookahead | (2 << ${symBits});
              tree[tp + 1] = prevTp;
              sp += 1;
              topState = actionLookup >>> 1;
              stackStates[sp] = topState;
              stackTps[sp] = tp;
              prevEnd = lookaheadEnd;
            }`
                : `tree[tp] = lookahead;
            tree[tp + 1] = lookaheadEnd;
            sp += 1;
            topState = actionLookup >>> 1;
            stackStates[sp] = topState;
            stackTps[sp] = tp;`
            }
            const res = ${nextTokenLargeExpr};
            lookahead = res.state;
            lookaheadStart = res.start;
            lookaheadEnd = res.end;
          } else {
            if (actionLookup === ${ACTION_ERROR_HEX}) {
              ${
                hasWordFallback
                  ? `if (
                wf[lookahead] !== 0 &&
                actions[${stateOffsetExpr} + ${wordTokenId}] !== ${ACTION_ERROR_HEX}
              ) {
                lookahead = ${wordTokenId};
                continue;
              }`
                  : ""
              }
              ${
                newlineTokenId !== undefined
                  ? `if (lookahead === ${newlineTokenId}) {
                const res = ${nextTokenLargeExpr};
                lookahead = res.state;
                lookaheadStart = res.start;
                lookaheadEnd = res.end;
                continue;
              }`
                  : ""
              }
              const errLen = lookaheadEnd - lookaheadStart;
              const errSpan =
                lookaheadEnd === -1
                  ? -1
                  : (lookaheadEnd & 0x3fffff) |
                    ((errLen < 1023 ? errLen : 1023) << 22);
              throwSyntaxError(
                stream,
                tree,
                tp,
                lookahead,
                errSpan,
                ${stateOffsetExpr}
              );
            }
            const reduceLen = actionLookup >>> ${symBits + 1};
            sp -= reduceLen;
            const rtopState = stackStates[sp];
            const rtopTp = stackTps[sp];
            const word0 = actionLookup >>> 1;
            tree[tp] = word0;
            ${
              hasEpsilonRules
                ? `if (reduceLen === 0) {
              let q = tp - 2;
              while (q >= 2 && (tree[q] >>> ${symBits}) > 0) q -= 2;
              tree[tp + 1] = q >= 2 ? tree[q + 1] : 0;
            } else {
              tree[tp + 1] = rtopTp;
            }`
                : `tree[tp + 1] = rtopTp;`
            }
            const rawNextState = goto[${
              canPreMultiplyState
                ? "rtopState"
                : tableStrideShift > 0
                ? `(rtopState << ${tableStrideShift})`
                : `rtopState * ${tableStride}`
            } + (word0 & ${symMaskHex})];
            topState = ${
              compactGoto ? "rawNextState" : `rawNextState >>> ${tpBits}`
            };
            sp += 1;
            if (sp >= stackCap) {
              stackCap <<= 1;
              const nextS = new Uint32Array(stackCap);
              nextS.set(stackStates);
              stackStates = nextS;
              const nextT = new Uint32Array(stackCap);
              nextT.set(stackTps);
              stackTps = nextT;
            }
            stackStates[sp] = topState;
            stackTps[sp] = tp;
          }
          tp += 2;
          if (tp >= treeCap - 2) {
            treeCap <<= 1;
            const nextTree = new Uint32Array(treeCap);
            nextTree.set(tree);
            tree = nextTree;
          }
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
        const stream = typeof input === "string" ? Buffer.from(input) : input;
        ${useSplitStack ? "return parseLarge(stream);" : ""}
        ${
          hasSingleLexerMode
            ? ""
            : `lexerSp = 0;
        lexerStack[0] = LexerMode.${this._lexerModeEnumKey(lexerModes[0])};
        lexerMode = LexerMode.${this._lexerModeEnumKey(lexerModes[0])};`
        }

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
        ${preserveExtras ? "let lookaheadStart = result.start;" : ""}
        const firstLen = result.end - result.start;
        let lookaheadSpan =
          result.end | ((firstLen < 1023 ? firstLen : 1023) << 22);`
            : `const firstRes = ${
                hasSingleLexerMode
                  ? "nextToken(stream, 0)"
                  : `nextToken${this._lexerModePascalCase(
                      lexerModes[0]
                    )}(stream, 0)`
              };
        let lookahead = firstRes.state;
        ${preserveExtras ? "let lookaheadStart = firstRes.start;" : ""}
        const firstLen = firstRes.end - firstRes.start;
        let lookaheadSpan =
          firstRes.end | ((firstLen < 1023 ? firstLen : 1023) << 22);`
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
        ${hasShiftSemanticActions ? "const sa = shiftActionsTable;" : ""}
        ${hasWordFallback ? "const wf = wordFallbackTable;" : ""}
        if (stream.length >>> 1 <= tree.length) {
          let top = ${
            /** @type {number} */ (stateToIndex.get(start)) *
            stateMultiplier *
            tpShiftMul
          }; // starting state
          stack[0] = top;
          let sp = 0;
          // let the tree stack start from offset 2
          // offset 0 means an error occurred and should be used by the parser
          let tp = 2;
          ${preserveExtras ? "let prevEnd = 0;" : ""}

          ${debug(() => `let steps = 0;`)}
          while (true) {
            ${debug(() => `steps++;`)}
            const currentState = top >>> ${tpBits};

            ${actionLookupCode}
            if ((actionLookup & 1) === 0) {
              // shift
              if (actionLookup === ${ACTION_DONE_HEX}) {
                ${
                  preserveExtras
                    ? `if (prevEnd < stream.length) {
                  const rootPtr = tp - 2;
                  let remStart = prevEnd;
                  const endPos = stream.length;
                  const needed = (Math.ceil((endPos - remStart) / 1023) + 1) * 2;
                  if (tp + needed >= tree.length - 1) {
                    break;
                  }
                  let chunks = 0;
                  while (remStart < endPos) {
                    const chunkLen =
                      endPos - remStart > 1023 ? 1023 : endPos - remStart;
                    const chunkEnd = remStart + chunkLen;
                    tree[tp] = ${extraTokenId};
                    tree[tp + 1] = chunkEnd | (chunkLen << 22);
                    tp += 2;
                    remStart = chunkEnd;
                    chunks++;
                  }
                  tree[tp] = (tree[rootPtr] & ${symMaskHex}) | ((1 + chunks) << ${symBits});
                  tree[tp + 1] = 0;
                  tp += 2;
                }`
                    : ""
                }
                ${debug(() => `console.log('steps', steps);`)}
                tree[1] = tp - 2;
                return new CstNode(stream, tree, tp - 2);
              }
              ${debug(
                () =>
                  `console.log('action: shift', lookahead, parserSymbols[lookahead]);`
              )}
              ${shiftActionDispatchCode}

              ${
                preserveExtras
                  ? `const tokEnd = lookaheadSpan & 0x3fffff;
              const tokStart = lookaheadStart;
              if (tokStart === prevEnd && tokEnd - tokStart <= 1023) {
                tree[tp] = lookahead;
                tree[tp + 1] = lookaheadSpan;
                sp += 1;
                top = tp | (actionLookup << ${tpBits - 1});
                stack[sp] = top;
                prevEnd = tokEnd;
              } else {
                const triviaChunks =
                  tokStart > prevEnd
                    ? Math.ceil((tokStart - prevEnd) / 1023)
                    : 0;
                const tokChunks = Math.ceil((tokEnd - tokStart) / 1023) || 1;
                if (tp + (triviaChunks + tokChunks + 1) * 2 >= tree.length - 1) {
                  break;
                }
                let nLeaves = 0;
                let cur = prevEnd;
                while (cur < tokStart) {
                  const cLen = tokStart - cur > 1023 ? 1023 : tokStart - cur;
                  const cEnd = cur + cLen;
                  tree[tp] = ${extraTokenId};
                  tree[tp + 1] = cEnd | (cLen << 22);
                  tp += 2;
                  cur = cEnd;
                  nLeaves++;
                }
                cur = tokStart;
                do {
                  const cLen = tokEnd - cur > 1023 ? 1023 : tokEnd - cur;
                  const cEnd = cur + cLen;
                  tree[tp] = lookahead;
                  tree[tp + 1] = cEnd | (cLen << 22);
                  tp += 2;
                  cur = cEnd;
                  nLeaves++;
                } while (cur < tokEnd);
                tree[tp] = lookahead | (nLeaves << ${symBits});
                tree[tp + 1] = top;
                sp += 1;
                top = tp | (actionLookup << ${tpBits - 1});
                stack[sp] = top;
                prevEnd = tokEnd;
              }`
                  : `tree[tp] = lookahead; // name (and nChildren = 0)
              tree[tp + 1] = lookaheadSpan;

              sp += 1;
              top = tp | (actionLookup << ${tpBits - 1});
              stack[sp] = top;`
              }

              ${
                this.options.debug
                  ? `result = ${nextTokenExpr};
              lookahead = result.state;
              ${preserveExtras ? "lookaheadStart = result.start;" : ""}
              const tokLen = result.end - result.start;
              lookaheadSpan =
                result.end | ((tokLen < 1023 ? tokLen : 1023) << 22);`
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
                console.log('  next state', (stack[sp] >>> ${tpBits}) / ${stateMultiplier});
                console.log('');
                `
              )}
            } else {
              // reduce
              if (actionLookup === ${ACTION_ERROR_HEX}) {
                ${
                  hasWordFallback
                    ? `if (
                  wf[lookahead] !== 0 &&
                  actions[${stateOffsetExpr} + ${wordTokenId}] !== ${ACTION_ERROR_HEX}
                ) {
                  lookahead = ${wordTokenId};
                  continue;
                }`
                    : ""
                }
                ${
                  newlineTokenId !== undefined
                    ? `if (lookahead === ${newlineTokenId}) {
                  ${
                    this.options.debug
                      ? `result = ${nextTokenExpr};
                  lookahead = result.state;
                  ${preserveExtras ? "lookaheadStart = result.start;" : ""}
                  const tokLen = result.end - result.start;
                  lookaheadSpan =
                    result.end | ((tokLen < 1023 ? tokLen : 1023) << 22);`
                      : nextTokenUpdateCode
                  }
                  continue;
                }`
                    : ""
                }
                throwSyntaxError(
                  stream,
                  tree,
                  tp,
                  lookahead,
                  lookaheadSpan,
                  ${stateOffsetExpr}
                );
              }
              ${
                this.options.debug
                  ? `const word0 = actionLookup >>> 1;
              const actionSymbol = word0 & ${symMaskHex};
              const stackItemsToReduce = word0 >>> ${symBits};

              console.log('action: reduce', actionSymbol,
                parserSymbols[actionSymbol],
                Array.from({ length: stackItemsToReduce })
                  .map((_, i) => parserSymbols[tree[stack[sp - i] & ${tpMaskHex}] & ${symMaskHex}])
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
              if (stackItemsToReduce === 0) {
                let q = tp - 2;
                while (q >= 2 && (tree[q] >>> ${symBits}) > 0) q -= 2;
                tree[tp + 1] = q >= 2 ? tree[q + 1] & 0x3fffff : 0;
              } else {
                tree[tp + 1] = rtop; // prevSibling / subtreeStart - 2
              }
              const nextState = goto[${gotoStateOffsetExpr} + actionSymbol];`
                  : hasEpsilonRules
                  ? `const reduceLen = actionLookup >>> ${symBits + 1};
              sp -= reduceLen;
              const rtop = stack[sp] | 0;
              const word0 = actionLookup >>> 1;
              tree[tp] = word0; // name and number of children
              const nextState = goto[${gotoStateOffsetExpr} + (word0 & ${symMaskHex})];
              if (reduceLen === 0) {
                let q = tp - 2;
                while (q >= 2 && (tree[q] >>> ${symBits}) > 0) q -= 2;
                tree[tp + 1] = q >= 2 ? tree[q + 1] & 0x3fffff : 0;
              } else {
                tree[tp + 1] = rtop; // prevSibling / subtreeStart - 2
              }`
                  : `sp -= actionLookup >>> ${symBits + 1};
              const rtop = stack[sp] | 0;
              const word0 = actionLookup >>> 1;
              tree[tp] = word0; // name and number of children
              const nextState = goto[${gotoStateOffsetExpr} + (word0 & ${symMaskHex})];
              tree[tp + 1] = rtop; // prevSibling / subtreeStart - 2`
              }

              sp += 1;
              top = tp | ${compactGoto ? `(nextState << ${tpBits})` : "nextState"};
              stack[sp] = top;

              ${debug(
                () => `
                console.log('  next state', (stack[sp] >>> ${tpBits}) / ${stateMultiplier});
                console.log('');
                `
              )}
            }

            tp += 2;
            if (tp >= tree.length - 1) {
              break;
            }
          }
        }

        if (stream.length >= 0x3fffff) {
          return parseLarge(stream);
        }
        let len = tree.length << 1;
        while (len < stream.length >>> 1) {
          len <<= 1;
        }
        if (len > ${tpMask + 1}) {
          return parseLarge(stream);
        }
        const nextStack = new Uint32Array(Math.max(stack.length, len >>> 1));
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
      const suffix = comment
        ? ` // ${String(comment).replace(/\r/g, "\\r").replace(/\n/g, "\\n")}`
        : "";
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
