/**
 * @param {string[]} symbols
 * @returns {string[][]}
 */
export function optionals(symbols) {
  /** @type {string[][]} */
  const list = [];
  if (symbols.length > 0) {
    const [head, ...tail] = symbols;
    const result = optionals(tail);

    if (head.endsWith("?")) {
      if (result.length === 0) {
        list.push([]);
      } else {
        for (const choice of result) {
          list.push([...choice]);
        }
      }
    }
    if (result.length === 0) {
      list.push([head.replace(/\?$/, "")]);
    } else {
      for (const choice of result) {
        list.push([head.replace(/\?$/, ""), ...choice]);
      }
    }
  }
  return list;
}
