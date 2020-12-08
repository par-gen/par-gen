/**
 * @typedef {import('@knisterpeter/expound-lexer/types/lexer').LexerData} LexerData
 */

/**
 * @typedef {import('@knisterpeter/expound-parser/types/parser').ParserData} ParserData
 */

/**
 * @typedef {Object} Codegen
 * @property {(data: LexerData) => Promise<void>} lexer
 * @property {(data: ParserData) => Promise<void>} parser
 */

export {};
