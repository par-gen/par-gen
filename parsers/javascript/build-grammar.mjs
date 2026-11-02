import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { generateFromTreesitter } from "../../packages/parser/lib/parser-treesitter.js";
import { createGenerator } from "../../packages/cli/lib/generator.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sym = (name) => ({ type: "SYMBOL", name });
const str = (value) => ({ type: "STRING", value });
const pat = (value) => ({ type: "PATTERN", value });
const tok = (content) => ({ type: "TOKEN", content });
const seq = (...members) => ({ type: "SEQ", members });
const choice = (...members) => ({ type: "CHOICE", members });
const opt = (content) => ({
  type: "CHOICE",
  members: [content, { type: "BLANK" }],
});
const rep = (content) => ({ type: "REPEAT", content });
const rep1 = (content) => ({ type: "REPEAT1", content });
const prec = (value, content) => ({ type: "PREC", value, content });
const precLeft = (value, content) => ({ type: "PREC_LEFT", value, content });
const precRight = (value, content) => ({ type: "PREC_RIGHT", value, content });

const PREC = {
  COMMA: 1,
  ASSIGN: 2,
  ARROW: 3,
  TERNARY: 4,
  OR: 5,
  AND: 6,
  BIT_OR: 7,
  BIT_XOR: 8,
  BIT_AND: 9,
  EQUALITY: 10,
  RELATIONAL: 11,
  SHIFT: 12,
  ADD: 13,
  MULT: 14,
  EXP: 15,
  AS: 16,
  UNARY: 17,
  UPDATE: 18,
  NEW: 19,
  CALL: 20,
  MEMBER: 21,
};

const grammar = {
  name: "javascript",
  word: "identifier",
  extras: [pat("[\\s]+"), sym("comment")],
  inline: [
    "_class_member",
    "_interface_member",
  ],
  rules: {
    program: rep(sym("_statement")),

    _statement: choice(
      sym("_declaration"),
      sym("statement_block"),
      sym("if_statement"),
      sym("while_statement"),
      sym("do_statement"),
      sym("for_statement"),
      sym("for_in_statement"),
      sym("return_statement"),
      sym("throw_statement"),
      sym("try_statement"),
      sym("switch_statement"),
      sym("break_statement"),
      sym("continue_statement"),
      sym("expression_statement")
    ),

    statement_block: seq(str("{"), rep(sym("_statement")), str("}")),

    if_statement: choice(
      precRight(
        1,
        seq(str("if"), str("("), sym("_expression"), str(")"), sym("_statement"))
      ),
      precRight(
        2,
        seq(
          str("if"),
          str("("),
          sym("_expression"),
          str(")"),
          sym("_statement"),
          str("else"),
          sym("_statement")
        )
      )
    ),

    while_statement: seq(
      str("while"),
      str("("),
      sym("_expression"),
      str(")"),
      sym("_statement")
    ),

    do_statement: seq(
      str("do"),
      sym("_statement"),
      str("while"),
      str("("),
      sym("_expression"),
      str(")"),
      opt(str(";"))
    ),

    for_statement: seq(
      str("for"),
      str("("),
      choice(
        sym("variable_declaration"),
        seq(opt(sym("_expression")), str(";"))
      ),
      opt(sym("_expression")),
      str(";"),
      opt(sym("_expression")),
      str(")"),
      sym("_statement")
    ),

    for_in_statement: seq(
      str("for"),
      str("("),
      choice(str("const"), str("let"), str("var")),
      sym("_binding_pattern"),
      choice(str("of"), str("in")),
      sym("_expression"),
      str(")"),
      sym("_statement")
    ),

    return_statement: seq(
      str("return"),
      opt(sym("_expression")),
      opt(str(";"))
    ),

    throw_statement: seq(str("throw"), sym("_expression"), opt(str(";"))),

    try_statement: seq(
      str("try"),
      sym("statement_block"),
      opt(sym("catch_clause")),
      opt(sym("finally_clause"))
    ),

    catch_clause: seq(
      str("catch"),
      opt(
        seq(
          str("("),
          sym("_binding_pattern"),
          opt(sym("type_annotation")),
          str(")")
        )
      ),
      sym("statement_block")
    ),

    finally_clause: seq(str("finally"), sym("statement_block")),

    switch_statement: seq(
      str("switch"),
      str("("),
      sym("_expression"),
      str(")"),
      sym("switch_body")
    ),

    switch_body: seq(
      str("{"),
      rep(choice(sym("switch_case"), sym("switch_default"))),
      str("}")
    ),

    switch_case: seq(
      str("case"),
      sym("_expression"),
      str(":"),
      rep(sym("_statement"))
    ),

    switch_default: seq(str("default"), str(":"), rep(sym("_statement"))),

    break_statement: seq(str("break"), opt(sym("identifier")), opt(str(";"))),

    continue_statement: seq(
      str("continue"),
      opt(sym("identifier")),
      opt(str(";"))
    ),

    expression_statement: seq(sym("_expression"), opt(str(";"))),

    // Declarations
    _declaration: choice(
      sym("import_statement"),
      sym("export_statement"),
      sym("variable_declaration"),
      sym("function_declaration"),
      sym("class_declaration"),
      sym("interface_declaration"),
      sym("type_alias_declaration")
    ),

    import_statement: seq(
      str("import"),
      choice(
        seq(sym("import_clause"), str("from"), sym("string")),
        sym("string")
      ),
      opt(str(";"))
    ),

    import_clause: choice(
      sym("identifier"),
      sym("named_imports"),
      sym("namespace_import"),
      seq(
        sym("identifier"),
        str(","),
        choice(sym("named_imports"), sym("namespace_import"))
      )
    ),

    namespace_import: seq(str("*"), str("as"), sym("identifier")),

    named_imports: seq(
      str("{"),
      opt(
        seq(
          sym("import_specifier"),
          rep(seq(str(","), sym("import_specifier"))),
          opt(str(","))
        )
      ),
      str("}")
    ),

    import_specifier: seq(
      opt(str("type")),
      sym("identifier"),
      opt(seq(str("as"), sym("identifier")))
    ),

    export_statement: choice(
      seq(str("export"), opt(str("declare")), sym("_declaration")),
      seq(
        str("export"),
        str("default"),
        choice(sym("_expression"), sym("function_declaration"), sym("class_declaration")),
        opt(str(";"))
      ),
      seq(
        str("export"),
        sym("named_imports"),
        opt(seq(str("from"), sym("string"))),
        opt(str(";"))
      ),
      seq(
        str("export"),
        str("*"),
        opt(seq(str("as"), sym("identifier"))),
        str("from"),
        sym("string"),
        opt(str(";"))
      )
    ),

    variable_declaration: seq(
      choice(str("const"), str("let"), str("var")),
      sym("variable_declarator"),
      rep(seq(str(","), sym("variable_declarator"))),
      opt(str(";"))
    ),

    variable_declarator: seq(
      sym("_binding_pattern"),
      opt(sym("type_annotation")),
      opt(seq(str("="), sym("_expression")))
    ),

    _binding_pattern: choice(
      sym("identifier"),
      sym("object_pattern"),
      sym("array_pattern")
    ),

    object_pattern: seq(
      str("{"),
      opt(
        seq(
          sym("object_pattern_property"),
          rep(seq(str(","), sym("object_pattern_property"))),
          opt(str(","))
        )
      ),
      str("}")
    ),

    object_pattern_property: choice(
      seq(
        sym("identifier"),
        opt(seq(str("="), sym("_expression")))
      ),
      seq(
        sym("_property_name"),
        str(":"),
        sym("_binding_pattern"),
        opt(seq(str("="), sym("_expression")))
      ),
      seq(str("..."), sym("_binding_pattern"))
    ),

    array_pattern: seq(
      str("["),
      opt(
        seq(
          opt(str(",")),
          sym("array_pattern_element"),
          rep(seq(str(","), opt(sym("array_pattern_element"))))
        )
      ),
      str("]")
    ),

    array_pattern_element: choice(
      seq(sym("_binding_pattern"), opt(seq(str("="), sym("_expression")))),
      seq(str("..."), sym("_binding_pattern"))
    ),

    function_declaration: seq(
      opt(str("async")),
      str("function"),
      sym("identifier"),
      opt(sym("type_parameters")),
      sym("formal_parameters"),
      opt(sym("type_annotation")),
      choice(sym("statement_block"), str(";"))
    ),

    formal_parameters: seq(
      str("("),
      opt(
        seq(
          sym("formal_parameter"),
          rep(seq(str(","), sym("formal_parameter"))),
          opt(str(","))
        )
      ),
      str(")")
    ),

    formal_parameter: choice(
      seq(
        opt(sym("member_modifiers")),
        sym("_binding_pattern"),
        opt(sym("type_annotation")),
        opt(seq(str("="), sym("_expression")))
      ),
      seq(
        str("..."),
        sym("_binding_pattern"),
        opt(sym("type_annotation"))
      )
    ),

    typed_parameters: seq(
      str("("),
      sym("typed_parameter"),
      rep(
        seq(
          str(","),
          choice(sym("typed_parameter"), sym("argument"))
        )
      ),
      opt(str(",")),
      str(")")
    ),

    typed_parameter: seq(
      opt(str("...")),
      choice(sym("identifier"), sym("object"), sym("array")),
      sym("type_annotation"),
      opt(seq(str("="), sym("_expression")))
    ),

    member_modifiers: rep1(
      choice(
        sym("accessibility_modifier"),
        str("static"),
        str("async"),
        str("readonly"),
        str("get"),
        str("set")
      )
    ),

    class_declaration: seq(
      str("class"),
      sym("identifier"),
      opt(sym("type_parameters")),
      opt(sym("class_heritage")),
      sym("class_body")
    ),

    class_heritage: choice(
      seq(str("extends"), sym("_expression"), opt(sym("implements_clause"))),
      sym("implements_clause")
    ),

    implements_clause: seq(
      str("implements"),
      sym("_type"),
      rep(seq(str(","), sym("_type")))
    ),

    class_body: seq(str("{"), rep(sym("_class_member")), str("}")),

    _class_member: choice(
      sym("method_definition"),
      sym("field_definition"),
      str(";")
    ),

    method_definition: seq(
      opt(sym("member_modifiers")),
      choice(sym("_property_name"), sym("private_property_identifier")),
      opt(sym("type_parameters")),
      sym("formal_parameters"),
      opt(sym("type_annotation")),
      sym("statement_block")
    ),

    field_definition: seq(
      opt(sym("member_modifiers")),
      choice(sym("_property_name"), sym("private_property_identifier")),
      opt(sym("type_annotation")),
      opt(seq(str("="), sym("_expression"))),
      opt(str(";"))
    ),

    interface_declaration: seq(
      str("interface"),
      sym("identifier"),
      opt(sym("type_parameters")),
      opt(sym("extends_type_clause")),
      sym("object_type")
    ),

    extends_type_clause: seq(
      str("extends"),
      sym("_type"),
      rep(seq(str(","), sym("_type")))
    ),

    type_alias_declaration: seq(
      str("type"),
      sym("identifier"),
      opt(sym("type_parameters")),
      str("="),
      sym("_type"),
      opt(str(";"))
    ),

    // TypeScript Types
    type_annotation: seq(choice(str(":"), str("?:")), sym("_type")),

    type_parameters: seq(
      str("<"),
      sym("type_parameter"),
      rep(seq(str(","), sym("type_parameter"))),
      opt(str(",")),
      str(">")
    ),

    type_parameter: seq(
      sym("identifier"),
      opt(seq(str("extends"), sym("_type"))),
      opt(seq(str("="), sym("_type")))
    ),

    type_arguments: seq(
      str("<"),
      sym("_type"),
      rep(seq(str(","), sym("_type"))),
      opt(str(",")),
      str(">")
    ),

    _type: choice(
      sym("union_type"),
      sym("intersection_type"),
      sym("function_type"),
      sym("_primary_type")
    ),

    union_type: precLeft(
      1,
      choice(
        seq(sym("_type"), str("|"), sym("_type")),
        seq(str("|"), sym("_type"))
      )
    ),

    intersection_type: precLeft(2, seq(sym("_type"), str("&"), sym("_type"))),

    function_type: precRight(
      3,
      choice(
        seq(
          opt(sym("type_parameters")),
          str("("),
          str(")"),
          str("=>"),
          sym("_type")
        ),
        seq(
          opt(sym("type_parameters")),
          sym("typed_parameters"),
          str("=>"),
          sym("_type")
        ),
        seq(
          sym("type_parameters"),
          sym("formal_parameters"),
          str("=>"),
          sym("_type")
        ),
        seq(sym("parenthesized_type"), str("=>"), sym("_type"))
      )
    ),

    _primary_type: choice(
      sym("identifier"),
      sym("generic_type"),
      sym("array_type"),
      sym("indexed_access_type"),
      sym("tuple_type"),
      sym("object_type"),
      sym("typeof_type"),
      sym("type_predicate"),
      sym("parenthesized_type"),
      sym("string"),
      sym("number"),
      sym("true"),
      sym("false"),
      sym("null"),
      str("void")
    ),

    generic_type: prec(
      5,
      seq(sym("identifier"), sym("type_arguments"))
    ),

    array_type: precLeft(4, seq(sym("_primary_type"), str("["), str("]"))),

    indexed_access_type: precLeft(
      4,
      seq(sym("_primary_type"), str("["), sym("_type"), str("]"))
    ),

    tuple_type: seq(
      str("["),
      opt(
        seq(
          sym("_type"),
          rep(seq(str(","), sym("_type"))),
          opt(str(","))
        )
      ),
      str("]")
    ),

    parenthesized_type: seq(str("("), sym("_type"), str(")")),

    typeof_type: seq(str("typeof"), sym("identifier")),

    type_predicate: seq(sym("identifier"), str("is"), sym("_type")),

    object_type: seq(
      str("{"),
      rep(
        seq(
          sym("_interface_member"),
          opt(choice(str(";"), str(",")))
        )
      ),
      str("}")
    ),

    _interface_member: choice(
      sym("property_signature"),
      sym("method_signature"),
      sym("construct_signature"),
      sym("index_signature")
    ),

    property_signature: seq(
      opt(str("readonly")),
      sym("_property_name"),
      sym("type_annotation")
    ),

    method_signature: seq(
      sym("_property_name"),
      opt(sym("type_parameters")),
      sym("formal_parameters"),
      opt(sym("type_annotation"))
    ),

    construct_signature: seq(
      str("new"),
      opt(sym("type_parameters")),
      sym("formal_parameters"),
      opt(sym("type_annotation"))
    ),

    index_signature: seq(
      opt(str("readonly")),
      str("["),
      sym("identifier"),
      choice(str(":"), str("in")),
      sym("_type"),
      str("]"),
      sym("type_annotation")
    ),

    // Expressions
    _expression: choice(
      sym("_primary_expression"),
      sym("assignment_expression"),
      sym("augmented_assignment_expression"),
      sym("arrow_function"),
      sym("ternary_expression"),
      sym("binary_expression"),
      sym("as_expression"),
      sym("unary_expression"),
      sym("update_expression"),
      sym("await_expression"),
      sym("new_expression"),
      sym("call_expression"),
      sym("member_expression"),
      sym("subscript_expression")
    ),

    _contextual_id: choice(
      str("async"),
      str("set"),
      str("get"),
      str("type"),
      str("from"),
      str("of")
    ),

    _primary_expression: choice(
      sym("identifier"),
      sym("_contextual_id"),
      sym("number"),
      sym("string"),
      sym("template_string"),
      sym("regex"),
      sym("true"),
      sym("false"),
      sym("null"),
      sym("this"),
      sym("super"),
      sym("array"),
      sym("object"),
      sym("function_expression"),
      sym("class_expression"),
      sym("parenthesized_expression")
    ),

    parenthesized_expression: seq(
      str("("),
      sym("argument"),
      rep(seq(str(","), sym("argument"))),
      opt(str(",")),
      str(")")
    ),

    _lhs_expression: choice(
      sym("identifier"),
      sym("_contextual_id"),
      sym("member_expression"),
      sym("subscript_expression"),
      sym("array"),
      sym("object")
    ),

    assignment_expression: precRight(
      PREC.ASSIGN,
      seq(sym("_lhs_expression"), str("="), sym("_expression"))
    ),

    augmented_assignment_expression: precRight(
      PREC.ASSIGN,
      seq(
        sym("_lhs_expression"),
        sym("compound_assignment_operator"),
        sym("_expression")
      )
    ),

    arrow_function: precRight(
      PREC.ARROW,
      choice(
        seq(
          opt(str("async")),
          sym("identifier"),
          str("=>"),
          choice(sym("statement_block"), sym("_expression"))
        ),
        seq(
          opt(str("async")),
          sym("parenthesized_expression"),
          opt(sym("type_annotation")),
          str("=>"),
          choice(sym("statement_block"), sym("_expression"))
        ),
        seq(
          opt(str("async")),
          str("("),
          str(")"),
          opt(sym("type_annotation")),
          str("=>"),
          choice(sym("statement_block"), sym("_expression"))
        ),
        seq(
          opt(str("async")),
          sym("typed_parameters"),
          opt(sym("type_annotation")),
          str("=>"),
          choice(sym("statement_block"), sym("_expression"))
        ),
        seq(
          opt(str("async")),
          sym("type_parameters"),
          sym("formal_parameters"),
          opt(sym("type_annotation")),
          str("=>"),
          choice(sym("statement_block"), sym("_expression"))
        )
      )
    ),

    ternary_expression: precRight(
      PREC.TERNARY,
      seq(
        sym("_expression"),
        str("?"),
        sym("_expression"),
        str(":"),
        sym("_expression")
      )
    ),

    binary_expression: choice(
      precLeft(
        PREC.OR,
        seq(sym("_expression"), choice(str("||"), str("??")), sym("_expression"))
      ),
      precLeft(
        PREC.AND,
        seq(sym("_expression"), str("&&"), sym("_expression"))
      ),
      precLeft(
        PREC.BIT_OR,
        seq(sym("_expression"), str("|"), sym("_expression"))
      ),
      precLeft(
        PREC.BIT_XOR,
        seq(sym("_expression"), str("^"), sym("_expression"))
      ),
      precLeft(
        PREC.BIT_AND,
        seq(sym("_expression"), str("&"), sym("_expression"))
      ),
      precLeft(
        PREC.EQUALITY,
        seq(sym("_expression"), sym("equality_operator"), sym("_expression"))
      ),
      precLeft(
        PREC.RELATIONAL,
        seq(
          sym("_expression"),
          choice(
            str("<"),
            str(">"),
            sym("relational_operator"),
            str("in"),
            str("instanceof")
          ),
          sym("_expression")
        )
      ),
      precLeft(
        PREC.SHIFT,
        seq(sym("_expression"), sym("shift_operator"), sym("_expression"))
      ),
      precLeft(
        PREC.ADD,
        seq(sym("_expression"), choice(str("+"), str("-")), sym("_expression"))
      ),
      precLeft(
        PREC.MULT,
        seq(
          sym("_expression"),
          choice(str("*"), sym("multiplicative_operator")),
          sym("_expression")
        )
      ),
      precRight(
        PREC.EXP,
        seq(sym("_expression"), str("**"), sym("_expression"))
      )
    ),

    as_expression: precLeft(
      PREC.AS,
      seq(sym("_expression"), str("as"), sym("_type"))
    ),

    unary_expression: precRight(
      PREC.UNARY,
      seq(
        choice(
          str("!"),
          str("~"),
          str("-"),
          str("+"),
          str("typeof"),
          str("void"),
          str("delete")
        ),
        sym("_expression")
      )
    ),

    await_expression: precRight(
      PREC.UNARY,
      seq(str("await"), sym("_expression"))
    ),

    update_expression: choice(
      precRight(PREC.UPDATE, seq(sym("update_operator"), sym("_expression"))),
      precLeft(PREC.UPDATE, seq(sym("_expression"), sym("update_operator")))
    ),

    new_expression: choice(
      precRight(
        PREC.CALL,
        seq(
          str("new"),
          sym("_primary_expression"),
          opt(sym("type_arguments")),
          sym("arguments")
        )
      ),
      precRight(PREC.NEW, seq(str("new"), sym("_primary_expression")))
    ),

    call_expression: precLeft(
      PREC.CALL,
      seq(
        sym("_expression"),
        opt(str("?.")),
        sym("arguments")
      )
    ),

    member_expression: precLeft(
      PREC.MEMBER,
      seq(
        sym("_expression"),
        choice(str("."), str("?.")),
        choice(sym("identifier"), sym("private_property_identifier"))
      )
    ),

    subscript_expression: precLeft(
      PREC.MEMBER,
      seq(
        sym("_expression"),
        opt(str("?.")),
        str("["),
        sym("_expression"),
        str("]")
      )
    ),

    arguments: seq(
      str("("),
      opt(
        seq(
          sym("argument"),
          rep(seq(str(","), sym("argument"))),
          opt(str(","))
        )
      ),
      str(")")
    ),

    argument: choice(sym("_expression"), sym("spread_element")),

    spread_element: seq(str("..."), sym("_expression")),

    array: seq(
      str("["),
      opt(
        seq(
          opt(str(",")),
          sym("argument"),
          rep(seq(str(","), opt(sym("argument"))))
        )
      ),
      str("]")
    ),

    object: seq(
      str("{"),
      opt(
        seq(
          sym("object_member"),
          rep(seq(str(","), sym("object_member"))),
          opt(str(","))
        )
      ),
      str("}")
    ),

    object_member: choice(
      sym("pair"),
      sym("shorthand_property_identifier"),
      sym("object_method"),
      sym("spread_element")
    ),

    object_method: seq(
      opt(choice(str("async"), str("get"), str("set"))),
      sym("_property_name"),
      opt(sym("type_parameters")),
      sym("formal_parameters"),
      opt(sym("type_annotation")),
      sym("statement_block")
    ),

    pair: seq(sym("_property_name"), str(":"), sym("_expression")),

    shorthand_property_identifier: choice(sym("identifier"), sym("_contextual_id")),

    _property_name: choice(
      sym("identifier"),
      sym("_contextual_id"),
      sym("string"),
      sym("number"),
      sym("computed_property_name")
    ),

    computed_property_name: seq(str("["), sym("_expression"), str("]")),

    function_expression: seq(
      opt(str("async")),
      str("function"),
      opt(sym("identifier")),
      opt(sym("type_parameters")),
      sym("formal_parameters"),
      opt(sym("type_annotation")),
      sym("statement_block")
    ),

    class_expression: seq(
      str("class"),
      opt(sym("identifier")),
      opt(sym("type_parameters")),
      opt(sym("class_heritage")),
      sym("class_body")
    ),

    // Terminals
    identifier: pat("[a-zA-Z_$][a-zA-Z0-9_$]*"),
    private_property_identifier: pat("#[a-zA-Z_$][a-zA-Z0-9_$]*"),
    number: pat(
      "0[xX][0-9a-fA-F_]+|0[bB][01_]+|0[oO][0-7_]+|[0-9][0-9_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?n?"
    ),
    string: pat('"([^"\\\\\\n]|\\\\[\\s\\S])*"|\'([^\'\\\\\\n]|\\\\[\\s\\S])*\''),
    template_string: pat(
      "`([^`\\\\]|\\\\[\\s\\S]|=>\\s*`([^`\\\\]|\\\\[\\s\\S])*`)*`"
    ),
    regex: prec(
      -1,
      pat(
        "\\/([^\\/\\\\\\n\\[*]|\\\\.|\\[([^\\]\\\\\\n]|\\\\.)*\\])([^\\/\\\\\\n\\[]|\\\\.|\\[([^\\]\\\\\\n]|\\\\.)*\\])*\\/[gimsuy]*"
      )
    ),
    true: str("true"),
    false: str("false"),
    null: str("null"),
    this: str("this"),
    super: str("super"),
    accessibility_modifier: tok(choice(str("public"), str("private"), str("protected"))),
    compound_assignment_operator: pat(
      "\\+=|-=|\\*=|\\/=|%=|\\|=|&=|\\^=|<<=|>>=|>>>=|&&=|\\|\\|=|\\?\\?="
    ),
    equality_operator: pat("===|!==|==|!="),
    relational_operator: pat("<=|>="),
    shift_operator: pat("<<|>>>|>>"),
    multiplicative_operator: pat("\\/|%"),
    update_operator: pat("\\+\\+|--"),
    comment: tok(pat("\\/\\/[^\\n]*|\\/\\*[^*]*\\*+([^/*][^*]*\\*+)*\\/")),
  },
};

fs.writeFileSync(
  path.join(__dirname, "grammar.json"),
  JSON.stringify(grammar, null, 2)
);

console.time("generateFromTreesitter");
const data = generateFromTreesitter(grammar);
console.timeEnd("generateFromTreesitter");
console.log("States:", data.states.length);
console.log("ParserSymbols:", data.parserSymbols.length, "Non-null:", data.parserSymbols.filter(Boolean).length);
console.log("Contextual keywords:", data.contextualKeywordTokenNames);
console.log("SkipBytes:", data.lexerData.initial.skipBytes);
console.log("SkipTokenNames:", data.lexerData.initial.skipTokenNames);

const codegenSkip = createGenerator("javascript", "esm", {
  lexerFile: path.join(__dirname, "generated/lexer.js"),
  parserFile: path.join(__dirname, "generated/parser.js"),
});
await codegenSkip.parser(data);

const preserveData = {
  ...data,
  preserveExtras: true,
  extraTokenId: data.parserSymbols.indexOf("comment"),
  extraTokenName: "comment",
};
const codegenPreserve = createGenerator("javascript", "esm", {
  lexerFile: path.join(__dirname, "generated/lexer-preserve.js"),
  parserFile: path.join(__dirname, "generated/parser-preserve.js"),
});
await codegenPreserve.parser(preserveData);
console.log("Generated both SkipExtras and PreserveExtras ESM parsers!");
