export const EOF: "@par-gen.EOF";
export const ERROR: "@par-gen.ERROR";
/**
 * @param {Uint8Array} input
 * @param {number} offset
 * @returns {{ state: number, start: number, end: number }}
 */
export function next(input: Uint8Array, offset: number): {
    state: number;
    start: number;
    end: number;
};
