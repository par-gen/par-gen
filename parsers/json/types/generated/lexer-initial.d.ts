declare const EOF = "@par-gen.EOF";
declare const ERROR = "@par-gen.ERROR";
/**
 * @param {Uint8Array} input
 * @param {number} offset
 * @returns {{ state: number, start: number, end: number }}
 */
declare const next: (input: Uint8Array, offset: number) => {
    state: number;
    start: number;
    end: number;
};
export { EOF, ERROR, next };
