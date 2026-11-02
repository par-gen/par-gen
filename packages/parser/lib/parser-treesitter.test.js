import {
  generateFromTreesitter,
  escapeStringToRegex,
  normalizePattern,
  ruleToRegex,
} from "./index.js";

const codegenModuleSpecifier = "@par-gen/codegen";

/**
 * Full tree-sitter-json grammar.json
 */
const TREE_SITTER_JSON_GRAMMAR = {
  name: "json",
  rules: {
    document: {
      type: "SYMBOL",
      name: "_value",
    },
    _value: {
      type: "CHOICE",
      members: [
        { type: "SYMBOL", name: "object" },
        { type: "SYMBOL", name: "array" },
        { type: "SYMBOL", name: "number" },
        { type: "SYMBOL", name: "string" },
        { type: "SYMBOL", name: "true" },
        { type: "SYMBOL", name: "false" },
        { type: "SYMBOL", name: "null" },
      ],
    },
    object: {
      type: "SEQ",
      members: [
        { type: "STRING", value: "{" },
        {
          type: "CHOICE",
          members: [
            {
              type: "SEQ",
              members: [
                { type: "SYMBOL", name: "pair" },
                {
                  type: "REPEAT",
                  content: {
                    type: "SEQ",
                    members: [
                      { type: "STRING", value: "," },
                      { type: "SYMBOL", name: "pair" },
                    ],
                  },
                },
              ],
            },
            { type: "BLANK" },
          ],
        },
        { type: "STRING", value: "}" },
      ],
    },
    pair: {
      type: "SEQ",
      members: [
        {
          type: "FIELD",
          name: "key",
          content: {
            type: "CHOICE",
            members: [
              { type: "SYMBOL", name: "string" },
              { type: "SYMBOL", name: "number" },
            ],
          },
        },
        { type: "STRING", value: ":" },
        {
          type: "FIELD",
          name: "value",
          content: { type: "SYMBOL", name: "_value" },
        },
      ],
    },
    array: {
      type: "SEQ",
      members: [
        { type: "STRING", value: "[" },
        {
          type: "CHOICE",
          members: [
            {
              type: "SEQ",
              members: [
                { type: "SYMBOL", name: "_value" },
                {
                  type: "REPEAT",
                  content: {
                    type: "SEQ",
                    members: [
                      { type: "STRING", value: "," },
                      { type: "SYMBOL", name: "_value" },
                    ],
                  },
                },
              ],
            },
            { type: "BLANK" },
          ],
        },
        { type: "STRING", value: "]" },
      ],
    },
    string: {
      type: "CHOICE",
      members: [
        {
          type: "SEQ",
          members: [
            { type: "STRING", value: '"' },
            { type: "STRING", value: '"' },
          ],
        },
        {
          type: "SEQ",
          members: [
            { type: "STRING", value: '"' },
            { type: "SYMBOL", name: "string_content" },
            { type: "STRING", value: '"' },
          ],
        },
      ],
    },
    string_content: {
      type: "REPEAT1",
      content: {
        type: "CHOICE",
        members: [
          {
            type: "IMMEDIATE_TOKEN",
            content: {
              type: "PATTERN",
              value: '[^\\\\"\\n]+',
            },
          },
          {
            type: "SYMBOL",
            name: "escape_sequence",
          },
        ],
      },
    },
    escape_sequence: {
      type: "IMMEDIATE_TOKEN",
      content: {
        type: "SEQ",
        members: [
          { type: "STRING", value: "\\" },
          {
            type: "PATTERN",
            value: '(\\"|\\\\|\\/|b|f|n|r|t|u)',
          },
        ],
      },
    },
    number: {
      type: "TOKEN",
      content: {
        type: "CHOICE",
        members: [
          {
            type: "SEQ",
            members: [
              {
                type: "CHOICE",
                members: [
                  { type: "STRING", value: "0x" },
                  { type: "STRING", value: "0X" },
                ],
              },
              { type: "PATTERN", value: "[\\da-fA-F]+" },
            ],
          },
          {
            type: "CHOICE",
            members: [
              {
                type: "SEQ",
                members: [
                  {
                    type: "SEQ",
                    members: [
                      {
                        type: "CHOICE",
                        members: [
                          {
                            type: "CHOICE",
                            members: [
                              { type: "STRING", value: "-" },
                              { type: "STRING", value: "+" },
                            ],
                          },
                          { type: "BLANK" },
                        ],
                      },
                      {
                        type: "CHOICE",
                        members: [
                          { type: "STRING", value: "0" },
                          {
                            type: "SEQ",
                            members: [
                              { type: "PATTERN", value: "[1-9]" },
                              {
                                type: "CHOICE",
                                members: [
                                  { type: "PATTERN", value: "\\d+" },
                                  { type: "BLANK" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  { type: "STRING", value: "." },
                  {
                    type: "CHOICE",
                    members: [
                      { type: "PATTERN", value: "\\d+" },
                      { type: "BLANK" },
                    ],
                  },
                  {
                    type: "CHOICE",
                    members: [
                      {
                        type: "SEQ",
                        members: [
                          {
                            type: "CHOICE",
                            members: [
                              { type: "STRING", value: "e" },
                              { type: "STRING", value: "E" },
                            ],
                          },
                          {
                            type: "SEQ",
                            members: [
                              {
                                type: "CHOICE",
                                members: [
                                  {
                                    type: "CHOICE",
                                    members: [
                                      { type: "STRING", value: "-" },
                                      { type: "STRING", value: "+" },
                                    ],
                                  },
                                  { type: "BLANK" },
                                ],
                              },
                              { type: "PATTERN", value: "\\d+" },
                            ],
                          },
                        ],
                      },
                      { type: "BLANK" },
                    ],
                  },
                ],
              },
              {
                type: "SEQ",
                members: [
                  { type: "STRING", value: "." },
                  { type: "PATTERN", value: "\\d+" },
                  {
                    type: "CHOICE",
                    members: [
                      {
                        type: "SEQ",
                        members: [
                          {
                            type: "CHOICE",
                            members: [
                              { type: "STRING", value: "e" },
                              { type: "STRING", value: "E" },
                            ],
                          },
                          {
                            type: "SEQ",
                            members: [
                              {
                                type: "CHOICE",
                                members: [
                                  {
                                    type: "CHOICE",
                                    members: [
                                      { type: "STRING", value: "-" },
                                      { type: "STRING", value: "+" },
                                    ],
                                  },
                                  { type: "BLANK" },
                                ],
                              },
                              { type: "PATTERN", value: "\\d+" },
                            ],
                          },
                        ],
                      },
                      { type: "BLANK" },
                    ],
                  },
                ],
              },
              {
                type: "SEQ",
                members: [
                  {
                    type: "SEQ",
                    members: [
                      {
                        type: "CHOICE",
                        members: [
                          {
                            type: "CHOICE",
                            members: [
                              { type: "STRING", value: "-" },
                              { type: "STRING", value: "+" },
                            ],
                          },
                          { type: "BLANK" },
                        ],
                      },
                      {
                        type: "CHOICE",
                        members: [
                          { type: "STRING", value: "0" },
                          {
                            type: "SEQ",
                            members: [
                              { type: "PATTERN", value: "[1-9]" },
                              {
                                type: "CHOICE",
                                members: [
                                  { type: "PATTERN", value: "\\d+" },
                                  { type: "BLANK" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "CHOICE",
                    members: [
                      {
                        type: "SEQ",
                        members: [
                          {
                            type: "CHOICE",
                            members: [
                              { type: "STRING", value: "e" },
                              { type: "STRING", value: "E" },
                            ],
                          },
                          {
                            type: "SEQ",
                            members: [
                              {
                                type: "CHOICE",
                                members: [
                                  {
                                    type: "CHOICE",
                                    members: [
                                      { type: "STRING", value: "-" },
                                      { type: "STRING", value: "+" },
                                    ],
                                  },
                                  { type: "BLANK" },
                                ],
                              },
                              { type: "PATTERN", value: "\\d+" },
                            ],
                          },
                        ],
                      },
                      { type: "BLANK" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "SEQ",
            members: [
              {
                type: "CHOICE",
                members: [
                  { type: "STRING", value: "0b" },
                  { type: "STRING", value: "0B" },
                ],
              },
              { type: "PATTERN", value: "[0-1]+" },
            ],
          },
          {
            type: "SEQ",
            members: [
              {
                type: "CHOICE",
                members: [
                  { type: "STRING", value: "0o" },
                  { type: "STRING", value: "0O" },
                ],
              },
              { type: "PATTERN", value: "[0-7]+" },
            ],
          },
        ],
      },
    },
    true: {
      type: "STRING",
      value: "true",
    },
    false: {
      type: "STRING",
      value: "false",
    },
    null: {
      type: "STRING",
      value: "null",
    },
  },
  extras: [
    {
      type: "PATTERN",
      value: "\\s",
    },
  ],
  conflicts: [],
  precedences: [],
  externals: [],
  inline: [],
  supertypes: ["_value"],
};

/**
 * Tree-sitter JavaScript/TypeScript expression & statement subset grammar.json
 */
const TREE_SITTER_JS_SUBSET_GRAMMAR = {
  name: "javascript_subset",
  word: "identifier",
  rules: {
    program: {
      type: "REPEAT",
      content: { type: "SYMBOL", name: "_statement" },
    },
    _statement: {
      type: "CHOICE",
      members: [
        { type: "SYMBOL", name: "variable_declaration" },
        { type: "SYMBOL", name: "function_declaration" },
        { type: "SYMBOL", name: "if_statement" },
        { type: "SYMBOL", name: "while_statement" },
        { type: "SYMBOL", name: "return_statement" },
        { type: "SYMBOL", name: "statement_block" },
        { type: "SYMBOL", name: "expression_statement" },
      ],
    },
    variable_declaration: {
      type: "SEQ",
      members: [
        {
          type: "FIELD",
          name: "kind",
          content: {
            type: "CHOICE",
            members: [
              { type: "STRING", value: "let" },
              { type: "STRING", value: "const" },
            ],
          },
        },
        {
          type: "FIELD",
          name: "name",
          content: { type: "SYMBOL", name: "identifier" },
        },
        { type: "STRING", value: "=" },
        {
          type: "FIELD",
          name: "value",
          content: { type: "SYMBOL", name: "_expression" },
        },
        { type: "STRING", value: ";" },
      ],
    },
    function_declaration: {
      type: "SEQ",
      members: [
        { type: "STRING", value: "function" },
        {
          type: "FIELD",
          name: "name",
          content: { type: "SYMBOL", name: "identifier" },
        },
        {
          type: "FIELD",
          name: "parameters",
          content: { type: "SYMBOL", name: "formal_parameters" },
        },
        {
          type: "FIELD",
          name: "body",
          content: { type: "SYMBOL", name: "statement_block" },
        },
      ],
    },
    formal_parameters: {
      type: "SEQ",
      members: [
        { type: "STRING", value: "(" },
        {
          type: "CHOICE",
          members: [
            {
              type: "SEQ",
              members: [
                { type: "SYMBOL", name: "identifier" },
                {
                  type: "REPEAT",
                  content: {
                    type: "SEQ",
                    members: [
                      { type: "STRING", value: "," },
                      { type: "SYMBOL", name: "identifier" },
                    ],
                  },
                },
              ],
            },
            { type: "BLANK" },
          ],
        },
        { type: "STRING", value: ")" },
      ],
    },
    if_statement: {
      type: "PREC_RIGHT",
      value: 0,
      content: {
        type: "SEQ",
        members: [
          { type: "STRING", value: "if" },
          {
            type: "FIELD",
            name: "condition",
            content: { type: "SYMBOL", name: "parenthesized_expression" },
          },
          {
            type: "FIELD",
            name: "consequence",
            content: { type: "SYMBOL", name: "_statement" },
          },
          {
            type: "CHOICE",
            members: [
              {
                type: "FIELD",
                name: "alternative",
                content: { type: "SYMBOL", name: "else_clause" },
              },
              { type: "BLANK" },
            ],
          },
        ],
      },
    },
    else_clause: {
      type: "SEQ",
      members: [
        { type: "STRING", value: "else" },
        { type: "SYMBOL", name: "_statement" },
      ],
    },
    while_statement: {
      type: "SEQ",
      members: [
        { type: "STRING", value: "while" },
        {
          type: "FIELD",
          name: "condition",
          content: { type: "SYMBOL", name: "parenthesized_expression" },
        },
        {
          type: "FIELD",
          name: "body",
          content: { type: "SYMBOL", name: "_statement" },
        },
      ],
    },
    return_statement: {
      type: "SEQ",
      members: [
        { type: "STRING", value: "return" },
        {
          type: "CHOICE",
          members: [
            { type: "SYMBOL", name: "_expression" },
            { type: "BLANK" },
          ],
        },
        { type: "STRING", value: ";" },
      ],
    },
    statement_block: {
      type: "SEQ",
      members: [
        { type: "STRING", value: "{" },
        {
          type: "REPEAT",
          content: { type: "SYMBOL", name: "_statement" },
        },
        { type: "STRING", value: "}" },
      ],
    },
    expression_statement: {
      type: "SEQ",
      members: [
        { type: "SYMBOL", name: "_expression" },
        { type: "STRING", value: ";" },
      ],
    },
    _expression: {
      type: "CHOICE",
      members: [
        { type: "SYMBOL", name: "assignment_expression" },
        { type: "SYMBOL", name: "binary_expression" },
        { type: "SYMBOL", name: "unary_expression" },
        { type: "SYMBOL", name: "call_expression" },
        { type: "SYMBOL", name: "member_expression" },
        { type: "SYMBOL", name: "parenthesized_expression" },
        { type: "SYMBOL", name: "array" },
        { type: "SYMBOL", name: "object" },
        { type: "SYMBOL", name: "identifier" },
        { type: "SYMBOL", name: "number" },
        { type: "SYMBOL", name: "string" },
        { type: "SYMBOL", name: "true" },
        { type: "SYMBOL", name: "false" },
        { type: "SYMBOL", name: "null" },
      ],
    },
    parenthesized_expression: {
      type: "SEQ",
      members: [
        { type: "STRING", value: "(" },
        { type: "SYMBOL", name: "_expression" },
        { type: "STRING", value: ")" },
      ],
    },
    assignment_expression: {
      type: "PREC_RIGHT",
      value: 1,
      content: {
        type: "SEQ",
        members: [
          {
            type: "FIELD",
            name: "left",
            content: {
              type: "CHOICE",
              members: [
                { type: "SYMBOL", name: "identifier" },
                { type: "SYMBOL", name: "member_expression" },
              ],
            },
          },
          { type: "STRING", value: "=" },
          {
            type: "FIELD",
            name: "right",
            content: { type: "SYMBOL", name: "_expression" },
          },
        ],
      },
    },
    binary_expression: {
      type: "CHOICE",
      members: [
        {
          type: "PREC_LEFT",
          value: 2,
          content: {
            type: "SEQ",
            members: [
              {
                type: "FIELD",
                name: "left",
                content: { type: "SYMBOL", name: "_expression" },
              },
              {
                type: "FIELD",
                name: "operator",
                content: { type: "STRING", value: "===" },
              },
              {
                type: "FIELD",
                name: "right",
                content: { type: "SYMBOL", name: "_expression" },
              },
            ],
          },
        },
        {
          type: "PREC_LEFT",
          value: 3,
          content: {
            type: "SEQ",
            members: [
              {
                type: "FIELD",
                name: "left",
                content: { type: "SYMBOL", name: "_expression" },
              },
              {
                type: "FIELD",
                name: "operator",
                content: {
                  type: "CHOICE",
                  members: [
                    { type: "STRING", value: "+" },
                    { type: "STRING", value: "-" },
                  ],
                },
              },
              {
                type: "FIELD",
                name: "right",
                content: { type: "SYMBOL", name: "_expression" },
              },
            ],
          },
        },
        {
          type: "PREC_LEFT",
          value: 4,
          content: {
            type: "SEQ",
            members: [
              {
                type: "FIELD",
                name: "left",
                content: { type: "SYMBOL", name: "_expression" },
              },
              {
                type: "FIELD",
                name: "operator",
                content: {
                  type: "CHOICE",
                  members: [
                    { type: "STRING", value: "*" },
                    { type: "STRING", value: "/" },
                  ],
                },
              },
              {
                type: "FIELD",
                name: "right",
                content: { type: "SYMBOL", name: "_expression" },
              },
            ],
          },
        },
      ],
    },
    unary_expression: {
      type: "PREC_LEFT",
      value: 5,
      content: {
        type: "SEQ",
        members: [
          {
            type: "FIELD",
            name: "operator",
            content: {
              type: "CHOICE",
              members: [
                { type: "STRING", value: "-" },
                { type: "STRING", value: "!" },
              ],
            },
          },
          {
            type: "FIELD",
            name: "argument",
            content: { type: "SYMBOL", name: "_expression" },
          },
        ],
      },
    },
    call_expression: {
      type: "PREC_LEFT",
      value: 6,
      content: {
        type: "SEQ",
        members: [
          {
            type: "FIELD",
            name: "function",
            content: { type: "SYMBOL", name: "_expression" },
          },
          {
            type: "FIELD",
            name: "arguments",
            content: { type: "SYMBOL", name: "arguments" },
          },
        ],
      },
    },
    arguments: {
      type: "SEQ",
      members: [
        { type: "STRING", value: "(" },
        {
          type: "CHOICE",
          members: [
            {
              type: "SEQ",
              members: [
                { type: "SYMBOL", name: "_expression" },
                {
                  type: "REPEAT",
                  content: {
                    type: "SEQ",
                    members: [
                      { type: "STRING", value: "," },
                      { type: "SYMBOL", name: "_expression" },
                    ],
                  },
                },
              ],
            },
            { type: "BLANK" },
          ],
        },
        { type: "STRING", value: ")" },
      ],
    },
    member_expression: {
      type: "PREC_LEFT",
      value: 7,
      content: {
        type: "SEQ",
        members: [
          {
            type: "FIELD",
            name: "object",
            content: { type: "SYMBOL", name: "_expression" },
          },
          { type: "STRING", value: "." },
          {
            type: "FIELD",
            name: "property",
            content: { type: "SYMBOL", name: "identifier" },
          },
        ],
      },
    },
    array: {
      type: "SEQ",
      members: [
        { type: "STRING", value: "[" },
        {
          type: "CHOICE",
          members: [
            {
              type: "SEQ",
              members: [
                { type: "SYMBOL", name: "_expression" },
                {
                  type: "REPEAT",
                  content: {
                    type: "SEQ",
                    members: [
                      { type: "STRING", value: "," },
                      { type: "SYMBOL", name: "_expression" },
                    ],
                  },
                },
              ],
            },
            { type: "BLANK" },
          ],
        },
        { type: "STRING", value: "]" },
      ],
    },
    object: {
      type: "SEQ",
      members: [
        { type: "STRING", value: "{" },
        {
          type: "CHOICE",
          members: [
            {
              type: "SEQ",
              members: [
                { type: "SYMBOL", name: "pair" },
                {
                  type: "REPEAT",
                  content: {
                    type: "SEQ",
                    members: [
                      { type: "STRING", value: "," },
                      { type: "SYMBOL", name: "pair" },
                    ],
                  },
                },
              ],
            },
            { type: "BLANK" },
          ],
        },
        { type: "STRING", value: "}" },
      ],
    },
    pair: {
      type: "SEQ",
      members: [
        {
          type: "FIELD",
          name: "key",
          content: {
            type: "CHOICE",
            members: [
              { type: "SYMBOL", name: "identifier" },
              { type: "SYMBOL", name: "string" },
            ],
          },
        },
        { type: "STRING", value: ":" },
        {
          type: "FIELD",
          name: "value",
          content: { type: "SYMBOL", name: "_expression" },
        },
      ],
    },
    identifier: {
      type: "PATTERN",
      value: "[a-zA-Z_$][a-zA-Z0-9_$]*",
    },
    number: {
      type: "PATTERN",
      value: "\\d+(\\.\\d+)?",
    },
    string: {
      type: "TOKEN",
      content: {
        type: "CHOICE",
        members: [
          {
            type: "SEQ",
            members: [
              { type: "STRING", value: '"' },
              { type: "PATTERN", value: '[^"\\\\\\n]*' },
              { type: "STRING", value: '"' },
            ],
          },
          {
            type: "SEQ",
            members: [
              { type: "STRING", value: "'" },
              { type: "PATTERN", value: "[^'\\\\\\n]*" },
              { type: "STRING", value: "'" },
            ],
          },
        ],
      },
    },
    true: {
      type: "STRING",
      value: "true",
    },
    false: {
      type: "STRING",
      value: "false",
    },
    null: {
      type: "STRING",
      value: "null",
    },
  },
  extras: [
    {
      type: "PATTERN",
      value: "\\s",
    },
  ],
  conflicts: [],
  precedences: [],
  externals: [],
  inline: [],
  supertypes: ["_statement", "_expression"],
};

/**
 * Helper to collect all CST node names in pre-order traversal
 * @param {*} node
 * @returns {string[]}
 */
function collectNodeNames(node) {
  if (!node) {
    return [];
  }
  const names = [node.name];
  if (Array.isArray(node.items)) {
    for (const child of node.items) {
      names.push(...collectNodeNames(child));
    }
  }
  return names;
}

/**
 * Helper to find first node with a given name
 * @param {*} node
 * @param {string} targetName
 * @returns {*}
 */
function findNodeByName(node, targetName) {
  if (!node) {
    return undefined;
  }
  if (node.name === targetName) {
    return node;
  }
  if (Array.isArray(node.items)) {
    for (const child of node.items) {
      const found = findNodeByName(child, targetName);
      if (found) {
        return found;
      }
    }
  }
  return undefined;
}

describe("generateFromTreesitter", () => {
  describe("Regex normalization & ruleToRegex", () => {
    it("escapes literal STRING metacharacters for @par-gen/nfa", () => {
      expect(escapeStringToRegex("+")).toBe("\\+");
      expect(escapeStringToRegex("*")).toBe("\\*");
      expect(escapeStringToRegex("?")).toBe("\\?");
      expect(escapeStringToRegex("[")).toBe("\\[");
      expect(escapeStringToRegex("]")).toBe("\\]");
      expect(escapeStringToRegex("(")).toBe("\\(");
      expect(escapeStringToRegex(")")).toBe("\\)");
      expect(escapeStringToRegex(".")).toBe("\\.");
      expect(escapeStringToRegex("|")).toBe("\\|");
      expect(escapeStringToRegex("\\")).toBe("\\\\");
      expect(escapeStringToRegex("true")).toBe("true");
    });

    it("normalizes character classes, shorthands, quantifiers, non-capturing groups, and unicode escapes", () => {
      expect(normalizePattern("\\s")).toBe("[\\x09\\x0a\\x0b\\x0c\\x0d ]");
      expect(normalizePattern("\\d+")).toBe("[0-9]+");
      expect(normalizePattern("\\w*")).toBe("[a-zA-Z0-9_]*");
      expect(normalizePattern("[\\da-fA-F]+")).toBe("[0-9a-fA-F]+");
      expect(normalizePattern("(?:ab|cd)+")).toBe("(ab|cd)+");
      expect(normalizePattern("a{3}")).toBe("(aaa)");
      expect(normalizePattern("a{2,4}")).toBe("(aaa?a?)");
      expect(normalizePattern("\\u0041")).toBe("A");
      expect(normalizePattern(".*")).toBe("[^\\x0a]*");
      expect(normalizePattern("[\\p{XID_Start}_]")).toBe("[a-zA-Z\\x80-\\xff_]");
      expect(normalizePattern("\\p{XID_Continue}+")).toBe("[a-zA-Z0-9_\\x80-\\xff]+");
    });

    it("compiles complex TOKEN AST subtrees via ruleToRegex", () => {
      const regex = ruleToRegex({
        type: "TOKEN",
        content: {
          type: "SEQ",
          members: [
            {
              type: "CHOICE",
              members: [
                { type: "STRING", value: "-" },
                { type: "STRING", value: "+" },
                { type: "BLANK" },
              ],
            },
            { type: "PATTERN", value: "\\d+" },
          ],
        },
      });
      expect(regex).toBe("(((\\-|\\+))?[0-9]+)");
    });
  });

  describe("tree-sitter-json grammar.json", () => {
    /** @type {(input: string | Uint8Array) => any} */
    let parseJson;
    /** @type {import('./parser').ParserData} */
    let parserData;

    beforeAll(async () => {
      const { JavaScriptFunctionCodegen } = await import(
        codegenModuleSpecifier
      );
      parserData = generateFromTreesitter(
        JSON.stringify(TREE_SITTER_JSON_GRAMMAR)
      );
      const codegen = new JavaScriptFunctionCodegen();
      const compiled = await codegen.parser(parserData);
      parseJson = compiled.parse;
    });

    it("extracts skipBytes for whitespace extras in initial lexer mode", () => {
      expect(parserData.lexerData.initial.skipBytes).toEqual([
        9, 10, 11, 12, 13, 32,
      ]);
    });

    it("parses primitive JSON values (numbers, strings, booleans, null)", () => {
      expect(parseJson("true").name).toBe("document");
      expect(parseJson("false").name).toBe("document");
      expect(parseJson("null").name).toBe("document");
      expect(parseJson("42").name).toBe("document");
      expect(parseJson("-3.14159e+2").name).toBe("document");
      expect(parseJson("0xff").name).toBe("document");
      expect(parseJson("0b1010").name).toBe("document");
      expect(parseJson("0o755").name).toBe("document");
      expect(parseJson('""').name).toBe("document");
      expect(parseJson('"hello world"').name).toBe("document");
      expect(parseJson('"escapes: \\" \\\\ \\/ \\b \\f \\n \\r \\t \\u0020"').name).toBe(
        "document"
      );
    });

    it("parses nested objects, arrays, and a realistic package.json document", () => {
      const pkgJson = JSON.stringify(
        {
          name: "@par-gen/parser",
          version: "0.1.0",
          private: false,
          description: "Tree-sitter grammar.json compiler for par-gen",
          keywords: ["lr1", "lalr1", "tree-sitter", "parser-generator"],
          scripts: {
            test: "jest --runInBand",
            build: "tsc --build .",
          },
          dependencies: {
            "@par-gen/dfa": "0.1.0",
            "@par-gen/lexer": "0.1.0",
          },
          config: {
            retries: 3,
            timeout: 1500.5,
            nullableField: null,
            emptyObj: {},
            emptyArr: [],
            nestedMatrix: [
              [1, 2, 3],
              [4, 5, 6],
            ],
          },
        },
        null,
        2
      );

      const cst = parseJson(pkgJson);
      expect(cst.name).toBe("document");
      const names = collectNodeNames(cst);
      expect(names).toContain("object");
      expect(names).toContain("pair");
      expect(names).toContain("array");
      expect(names).toContain("string");
      expect(names).toContain("string_content");
      expect(names).toContain("number");
      expect(names).toContain("false");
      expect(names).toContain("null");
    });

    it("rejects invalid JSON documents", () => {
      expect(() => parseJson('{"a": 1,}')).toThrow();
      expect(() => parseJson('{"a": 1')).toThrow();
      expect(() => parseJson('[1, 2,')).toThrow();
      expect(() => parseJson('{"a" 1}')).toThrow();
      expect(() => parseJson("{a: 1}")).toThrow();
      expect(() => parseJson('"unterminated')).toThrow();
      expect(() => parseJson('"raw\nnewline"')).toThrow();
      expect(() => parseJson('"bad \\q escape"')).toThrow();
    });
  });

  describe("Tree-sitter JavaScript/TypeScript subset grammar.json", () => {
    /** @type {(input: string | Uint8Array) => any} */
    let parseJs;

    beforeAll(async () => {
      const { JavaScriptFunctionCodegen } = await import(
        codegenModuleSpecifier
      );
      const parserData = generateFromTreesitter(TREE_SITTER_JS_SUBSET_GRAMMAR);
      const codegen = new JavaScriptFunctionCodegen();
      const compiled = await codegen.parser(parserData);
      parseJs = compiled.parse;
    });

    it("prioritizes keyword STRING tokens over the word identifier pattern, including single-char and prefix identifiers", () => {
      const cst = parseJs(`
        let c = true;
        let co = false;
        let con = null;
        const cons = c;
        let const1 = co;
        const iffy = con;
        let returnVal = cons;
      `);
      expect(cst.name).toBe("program");
      const names = collectNodeNames(cst);
      expect(names).toContain("variable_declaration");
      expect(names).toContain("true");
      expect(names).toContain("false");
      expect(names).toContain("null");
    });

    it("respects PREC_LEFT and operator precedence (+, -, *, /, ===) and PREC_RIGHT assignment (=)", () => {
      // In `a + b * c === d - e / f`:
      // `*` and `/` (prec 4) bind tighter than `+` and `-` (prec 3), which bind tighter than `===` (prec 2)
      const cst = parseJs("a + b * c === d - e / f;");
      const topBin = findNodeByName(cst, "binary_expression");
      expect(topBin).toBeDefined();
      // Top-level binary operator must be `===`
      expect(topBin.items[1].name).toBe("===");

      // Left of `===` is `a + (b * c)`: operator is `+`
      const leftAdd = findNodeByName(topBin.items[0], "binary_expression");
      expect(leftAdd.items[1].name).toBe("+");
      // Right child of `+` is `b * c`: operator is `*`
      const rightMult = findNodeByName(leftAdd.items[2], "binary_expression");
      expect(rightMult.items[1].name).toBe("*");

      // Left-associativity of `-`: `a - b - c;` -> `(a - b) - c`
      const subCst = parseJs("a - b - c;");
      const topSub = findNodeByName(subCst, "binary_expression");
      expect(topSub.items[1].name).toBe("-");
      const innerSub = findNodeByName(topSub.items[0], "binary_expression");
      expect(innerSub).toBeDefined();
      expect(innerSub.items[1].name).toBe("-");

      // Right-associativity of `=`: `a = b = c;` -> `a = (b = c)`
      const assignCst = parseJs("a = b = c;");
      const topAssign = findNodeByName(assignCst, "assignment_expression");
      expect(topAssign).toBeDefined();
      expect(topAssign.items[0].name).toBe("identifier");
      expect(topAssign.items[1].name).toBe("=");
      const rightAssign = findNodeByName(
        topAssign.items[2],
        "assignment_expression"
      );
      expect(rightAssign).toBeDefined();
    });

    it("parses functions, if/else, while, return, member access, calls, and object/array literals", () => {
      const program = `
        function compute(items, factor) {
          let total = 0;
          let i = 0;
          while (i === 0) {
            if (items.length === 0) {
              return { result: 0, list: [] };
            } else {
              total = total + math.scale(items.head, factor) * 2;
            }
            i = i + 1;
          }
          return {
            result: total,
            list: [1, 2, 3],
            label: "done"
          };
        }

        const out = compute(data.items, 10);
      `;

      const cst = parseJs(program);
      expect(cst.name).toBe("program");
      const names = collectNodeNames(cst);
      expect(names).toContain("function_declaration");
      expect(names).toContain("formal_parameters");
      expect(names).toContain("statement_block");
      expect(names).toContain("variable_declaration");
      expect(names).toContain("while_statement");
      expect(names).toContain("if_statement");
      expect(names).toContain("else_clause");
      expect(names).toContain("return_statement");
      expect(names).toContain("assignment_expression");
      expect(names).toContain("binary_expression");
      expect(names).toContain("call_expression");
      expect(names).toContain("member_expression");
      expect(names).toContain("object");
      expect(names).toContain("array");
    });

    it("rejects invalid JS syntax", () => {
      expect(() => parseJs("let = 1;")).toThrow();
      expect(() => parseJs("function (a) {}")).toThrow();
      expect(() => parseJs("if a === 1 { return; }")).toThrow();
      expect(() => parseJs("let x = [1, 2,;")).toThrow();
    });

    it("supports named precedences, inline rules, ALIAS, PREC_DYNAMIC, and comment extras", async () => {
      const { JavaScriptFunctionCodegen } = await import(
        codegenModuleSpecifier
      );
      const grammarWithExtrasAndInline = {
        name: "mini_calc",
        word: "identifier",
        precedences: [["mult", "add"]],
        inline: ["_term"],
        rules: {
          source_file: {
            type: "REPEAT1",
            content: { type: "SYMBOL", name: "_term" },
          },
          _term: {
            type: "SEQ",
            members: [
              { type: "SYMBOL", name: "expr" },
              { type: "STRING", value: ";" },
            ],
          },
          expr: {
            type: "CHOICE",
            members: [
              {
                type: "PREC_LEFT",
                value: "add",
                content: {
                  type: "SEQ",
                  members: [
                    { type: "SYMBOL", name: "expr" },
                    { type: "STRING", value: "+" },
                    { type: "SYMBOL", name: "expr" },
                  ],
                },
              },
              {
                type: "PREC_LEFT",
                value: "mult",
                content: {
                  type: "SEQ",
                  members: [
                    { type: "SYMBOL", name: "expr" },
                    { type: "STRING", value: "*" },
                    { type: "SYMBOL", name: "expr" },
                  ],
                },
              },
              {
                type: "PREC_DYNAMIC",
                value: 1,
                content: {
                  type: "ALIAS",
                  value: "ident",
                  named: true,
                  content: { type: "SYMBOL", name: "identifier" },
                },
              },
              { type: "SYMBOL", name: "number" },
            ],
          },
          identifier: {
            type: "PATTERN",
            value: "[a-zA-Z_][a-zA-Z0-9_]*",
          },
          number: {
            type: "PATTERN",
            value: "\\d+",
          },
          comment: {
            type: "TOKEN",
            content: {
              type: "SEQ",
              members: [
                { type: "STRING", value: "//" },
                { type: "PATTERN", value: "[^\\n]*" },
              ],
            },
          },
        },
        extras: [
          { type: "PATTERN", value: "\\s" },
          { type: "SYMBOL", name: "comment" },
        ],
      };

      const data = generateFromTreesitter(grammarWithExtrasAndInline);
      const codegen = new JavaScriptFunctionCodegen();
      const { parse } = await codegen.parser(data);

      const cst = parse("// leading comment\nx + y * 2; // trailing comment\nz + 1;\n");
      expect(cst.name).toBe("source_file");
      const names = collectNodeNames(cst);
      expect(names).not.toContain("_term");
      expect(names).not.toContain("comment");
    });

    it("disambiguates contextual keywords (from, of, get, set, async, type, let) via zero-overhead word fallback", async () => {
      const { JavaScriptFunctionCodegen, JavaScriptModuleCodegen } =
        await import(codegenModuleSpecifier);
      const { promises: fsp } = await import("fs");
      const { join } = await import("path");
      const { tmpdir } = await import("os");
      const vm = await import("vm");

      const contextualJsGrammar = {
        ...TREE_SITTER_JS_SUBSET_GRAMMAR,
        rules: {
          ...TREE_SITTER_JS_SUBSET_GRAMMAR.rules,
          _statement: {
            type: "CHOICE",
            members: [
              ...TREE_SITTER_JS_SUBSET_GRAMMAR.rules._statement.members,
              { type: "SYMBOL", name: "import_statement" },
              { type: "SYMBOL", name: "for_of_statement" },
              { type: "SYMBOL", name: "async_function_declaration" },
              { type: "SYMBOL", name: "type_alias_declaration" },
              { type: "SYMBOL", name: "class_declaration" },
            ],
          },
          import_statement: {
            type: "SEQ",
            members: [
              { type: "STRING", value: "import" },
              { type: "SYMBOL", name: "import_clause" },
              { type: "STRING", value: "from" },
              { type: "SYMBOL", name: "string" },
              { type: "STRING", value: ";" },
            ],
          },
          import_clause: {
            type: "SYMBOL",
            name: "identifier",
          },
          for_of_statement: {
            type: "SEQ",
            members: [
              { type: "STRING", value: "for" },
              { type: "STRING", value: "(" },
              { type: "STRING", value: "let" },
              { type: "SYMBOL", name: "identifier" },
              { type: "STRING", value: "of" },
              { type: "SYMBOL", name: "_expression" },
              { type: "STRING", value: ")" },
              { type: "SYMBOL", name: "statement_block" },
            ],
          },
          async_function_declaration: {
            type: "SEQ",
            members: [
              { type: "STRING", value: "async" },
              { type: "STRING", value: "function" },
              { type: "SYMBOL", name: "identifier" },
              { type: "SYMBOL", name: "formal_parameters" },
              { type: "SYMBOL", name: "statement_block" },
            ],
          },
          type_alias_declaration: {
            type: "SEQ",
            members: [
              { type: "STRING", value: "type" },
              { type: "SYMBOL", name: "identifier" },
              { type: "STRING", value: "=" },
              { type: "SYMBOL", name: "identifier" },
              { type: "STRING", value: ";" },
            ],
          },
          class_declaration: {
            type: "SEQ",
            members: [
              { type: "STRING", value: "class" },
              { type: "SYMBOL", name: "identifier" },
              { type: "STRING", value: "{" },
              {
                type: "REPEAT",
                content: { type: "SYMBOL", name: "method_definition" },
              },
              { type: "STRING", value: "}" },
            ],
          },
          method_definition: {
            type: "SEQ",
            members: [
              {
                type: "CHOICE",
                members: [
                  { type: "STRING", value: "get" },
                  { type: "STRING", value: "set" },
                ],
              },
              { type: "SYMBOL", name: "identifier" },
              { type: "SYMBOL", name: "formal_parameters" },
              { type: "SYMBOL", name: "statement_block" },
            ],
          },
        },
      };

      const data = generateFromTreesitter(contextualJsGrammar);
      expect(data.wordTokenName).toBe("identifier");
      expect(data.wordTokenId).toBeDefined();
      expect(data.contextualKeywordTokenNames).toEqual(
        expect.arrayContaining([
          "from",
          "of",
          "get",
          "set",
          "async",
          "type",
          "let",
        ])
      );

      const fnCodegen = new JavaScriptFunctionCodegen();
      const { parse: parseFn } = await fnCodegen.parser(data);

      const tmpDir = await fsp.mkdtemp(join(tmpdir(), "pargen-word-test-"));
      const lexerFile = join(tmpDir, "lexer.js");
      const lexerStateFile = join(tmpDir, "lexer-initial.js");
      const parserFile = join(tmpDir, "parser.js");
      const esmCodegen = new JavaScriptModuleCodegen({ lexerFile, parserFile });
      await esmCodegen.parser(data);

      const SourceTextModule = /** @type {*} */ (vm).SourceTextModule;
      const context = vm.createContext({ Buffer });
      const parserMod = new SourceTextModule(
        await fsp.readFile(parserFile, "utf-8"),
        { context }
      );
      const lexerMod = new SourceTextModule(
        await fsp.readFile(lexerStateFile, "utf-8"),
        { context }
      );
      await parserMod.link(async () => lexerMod);
      await parserMod.evaluate();
      const parseEsm = /** @type {*} */ (parserMod.namespace).parse;

      const sampleCode = `
        import from from "source-module";
        type get = set;
        class Box {
          get value() { return this.from; }
          set value(from) { this.from = from; }
        }
        async function of(from, get, set, type, async) {
          let of = from + get * set;
          let async = {
            from: type,
            get: async,
            set: of
          };
          for (let from of [get, set, type, async.from]) {
            of = of + from.get(set, type, async);
          }
          return of;
        }
      `;

      const cstFn = parseFn(sampleCode);
      expect(cstFn.name).toBe("program");

      const cstEsm = parseEsm(sampleCode).toJSON();
      expect(cstEsm.name).toBe("program");
      const names = collectNodeNames(cstEsm);
      expect(names).toContain("import_statement");
      expect(names).toContain("type_alias_declaration");
      expect(names).toContain("class_declaration");
      expect(names).toContain("method_definition");
      expect(names).toContain("async_function_declaration");
      expect(names).toContain("for_of_statement");

      // Also verify parseCold path (> 32 KB input) with contextual keywords
      const largeSample = sampleCode.repeat(120);
      expect(largeSample.length).toBeGreaterThan(40000);
      const largeCst = parseEsm(largeSample);
      expect(largeCst.name).toBe("program");

      await fsp.rm(tmpDir, { recursive: true, force: true });
    });

    it("resolves multi-array precedences DAG, SYMBOL precedences, STRING/rule name collisions, and externals lowering", async () => {
      const { JavaScriptFunctionCodegen } = await import(
        codegenModuleSpecifier
      );
      const grammar = {
        name: "universal_lowering_test",
        word: "identifier",
        precedences: [
          ["call", "binary"],
          ["binary", { type: "SYMBOL", name: "low_expr" }],
        ],
        externals: [
          { type: "SYMBOL", name: "_implicit_sep" },
          { type: "SYMBOL", name: "_aliased_colon" },
          { type: "SYMBOL", name: "_custom_ext" },
        ],
        rules: {
          source_file: {
            type: "REPEAT1",
            content: {
              type: "SEQ",
              members: [
                { type: "SYMBOL", name: "type" },
                { type: "SYMBOL", name: "_implicit_sep" },
              ],
            },
          },
          // Rule named `type` that ALSO uses literal STRING `"type"` inside it
          type: {
            type: "SEQ",
            members: [
              { type: "STRING", value: "type" },
              { type: "SYMBOL", name: "identifier" },
              {
                type: "ALIAS",
                value: ":",
                named: false,
                content: { type: "SYMBOL", name: "_aliased_colon" },
              },
              { type: "SYMBOL", name: "expr" },
              { type: "SYMBOL", name: "_custom_ext" },
            ],
          },
          expr: {
            type: "CHOICE",
            members: [
              {
                type: "PREC_LEFT",
                value: "binary",
                content: {
                  type: "SEQ",
                  members: [
                    { type: "SYMBOL", name: "expr" },
                    { type: "STRING", value: "+" },
                    { type: "SYMBOL", name: "expr" },
                  ],
                },
              },
              { type: "SYMBOL", name: "low_expr" },
              { type: "SYMBOL", name: "identifier" },
            ],
          },
          low_expr: {
            type: "SEQ",
            members: [
              { type: "STRING", value: "~" },
              { type: "SYMBOL", name: "expr" },
            ],
          },
          identifier: {
            type: "PATTERN",
            value: "[a-zA-Z_][a-zA-Z0-9_]*",
          },
        },
        extras: [{ type: "PATTERN", value: "\\s" }],
      };

      const data = generateFromTreesitter(grammar, {
        externals: {
          _custom_ext: { type: "STRING", value: ";" },
        },
      });
      const codegen = new JavaScriptFunctionCodegen();
      const { parse } = await codegen.parser(data);

      const cst = parse("type foo : ~a + b; type type : c;");
      expect(cst.name).toBe("source_file");
      const names = collectNodeNames(cst);
      expect(names).toContain("type");
      expect(names).toContain("'type'");
    });
  });
});
