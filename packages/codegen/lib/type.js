/**
 * @typedef {import('@knisterpeter/expound-lexer/types/lexer').LexerData} LexerData
 */

// todo: ...
/**
 * @typedef {Object} ParserData
 */

/**
 * @typedef {Object} Codegen
 * @property {(data: LexerData) => Promise<void>} lexer
 * @property {(data: ParserData) => Promise<void>} parser
 */

export {};
