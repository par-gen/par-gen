/**
 * @typedef {Object} NFADescription
 * @property {string[]} states
 * @property {string[]} symbols
 * @property {{ [state: string]: { [symbol: string]: string[] } }} transitions
 * @property {string} start
 * @property {string[]} finals
 */
export class NFA {
    /**
     * @param {string} regexp regular expression to create a NFA from
     * @returns {NFA}
     */
    static fromRegExp(regexp: string): NFA;
    /**
     * @param {NFADescription} description
     */
    constructor(description: NFADescription);
    description: NFADescription;
    current: string;
    /**
     * @internal
     * @private
     * @param {NFADescription} description
     */
    private _validate;
    /**
     * Just a very simple non-exhausting test algorithm.
     *
     * @internal
     * @param {string[]} input
     */
    test(input: string[]): boolean;
}
export type NFADescription = {
    states: string[];
    symbols: string[];
    transitions: {
        [state: string]: {
            [symbol: string]: string[];
        };
    };
    start: string;
    finals: string[];
};
