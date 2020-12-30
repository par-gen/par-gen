/**
 * @typedef {import('@par-gen/lexer/types/lexer').LexerData} LexerData
 */

/**
 * @typedef {import('@par-gen/parser/types/parser').ParserData} ParserData
 */

/**
 * @typedef {Object} Codegen
 * @property {(data: LexerData, name: string) => Promise<void>} lexer
 * @property {(data: ParserData) => Promise<void>} parser
 */

export {};
