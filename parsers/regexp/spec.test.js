import { parse } from "./generated/parser.js";

describe("RegExp", () => {
  it("should accept single character", () => {
    expect(parse("a")).toBeTruthy();
    expect(parse("-")).toBeTruthy();
  });

  it("should accept sequence of characters", () => {
    expect(parse("ab")).toBeTruthy();
  });

  it("should accept a union", () => {
    expect(parse("a|b")).toBeTruthy();
    expect(parse("a|")).toBeTruthy();
  });

  it("should accept groups", () => {
    expect(parse("(a)")).toBeTruthy();
    expect(parse("((a))")).toBeTruthy();
    expect(parse("(a)|(b)")).toBeTruthy();
    expect(parse("a(b)c")).toBeTruthy();
  });

  it("should reject invalid groups", () => {
    expect(() => parse("(")).toThrow();
    expect(() => parse(")")).toThrow();
    expect(() => parse("(a()")).toThrow();
    expect(() => parse("(a(b()))")).toThrow();
  });

  it("should accept quantifier", () => {
    expect(parse("a*")).toBeTruthy();
    expect(parse("a?")).toBeTruthy();
    expect(parse("a+")).toBeTruthy();
    expect(parse("(a)*")).toBeTruthy();
    expect(parse("(a*)*")).toBeTruthy();
    expect(parse("a|b*")).toBeTruthy();
  });

  it("should reject certain quantifier", () => {
    expect(() => parse("*")).toThrow();
    expect(() => parse("a**")).toThrow();
    expect(() => parse("a|*")).toThrow();
    expect(() => parse("(*)")).toThrow();
  });

  it("should accept escape characters", () => {
    expect(parse("\\.")).toBeTruthy();
    expect(parse("\\*")).toBeTruthy();
    expect(parse("\\+")).toBeTruthy();
    expect(parse("\\?")).toBeTruthy();
    expect(parse("\\\\")).toBeTruthy();
    expect(parse("\\(")).toBeTruthy();
    expect(parse("\\)")).toBeTruthy();
    expect(parse("\\|")).toBeTruthy();
    expect(parse("\\r")).toBeTruthy();
    expect(parse("\\n")).toBeTruthy();
    expect(parse("\\b")).toBeTruthy();
    expect(parse("\\t")).toBeTruthy();
    expect(parse("\\f")).toBeTruthy();
  });

  it("should accept positive character classes", () => {
    expect(parse("[a]")).toBeTruthy();
    expect(parse("[a\\^]")).toBeTruthy();
    expect(parse("[ab]")).toBeTruthy();
    expect(parse("[0-9]")).toBeTruthy();
    expect(parse("[a-zA-Z]")).toBeTruthy();
    expect(parse("[\\-a]")).toBeTruthy();
    expect(parse("[a\\-]")).toBeTruthy();
    expect(parse("[\\-]")).toBeTruthy();
    expect(parse("[*?+(|.]")).toBeTruthy();
    expect(parse("[\\\\]")).toBeTruthy();
    expect(parse("[\\r]")).toBeTruthy();
    expect(parse("[\\]]")).toBeTruthy();
  });

  it("should reject invalid positive character classes", () => {
    expect(() => parse("[a")).toThrow();
    expect(() => parse("[]]")).toThrow();
  });

  it("should accept negative character classes", () => {
    expect(parse("[^a]")).toBeTruthy();
    expect(parse("[^\\^]")).toBeTruthy();
    expect(parse("[^ab]")).toBeTruthy();
    expect(parse("[^0-9]")).toBeTruthy();
    expect(parse("[^a-zA-Z]")).toBeTruthy();
    expect(parse("[^\\-a]")).toBeTruthy();
    expect(parse("[^a\\-]")).toBeTruthy();
    expect(parse("[^\\-]")).toBeTruthy();
    expect(parse("[^\\\\]")).toBeTruthy();
    expect(parse("[^*?+(|.]")).toBeTruthy();
    expect(parse("[^\\r]")).toBeTruthy();
    expect(parse("[^\\]]")).toBeTruthy();
  });

  it("should reject invalid negative character classes", () => {
    expect(() => parse("[^a")).toThrow();
    expect(() => parse("[^]]")).toThrow();
  });

  describe("should create a valid parse tree", () => {
    /**
     * @param {*} tree
     */
    function print(tree) {
      /** @param {*} item */
      const item = (item) => print(item);
      const items = () =>
        tree.items ? `[${tree.items.map(item).join(",")}]` : "";
      return `${tree.name}${items()}`;
    }

    /**
     * @param {string} expr
     * @returns {RegExp}
     */
    function matcher(expr) {
      return new RegExp(expr.replace(/\[/g, "\\["));
    }

    it("from a sequence", () => {
      expect(print(parse("ab"))).toMatch(
        matcher(
          "RegExp[Expression[Sequence[Atom[Character[.*?]],Atom[Character[.*?]]]]]"
        )
      );
    });

    it("from a union", () => {
      expect(print(parse("a|b"))).toMatch(
        matcher(
          "RegExp[Expression[Union[Atom[Character[.*?]],UNION,Atom[Character[.*?]]]]]"
        )
      );
    });

    it("from a group", () => {
      expect(print(parse("(a)"))).toMatch(
        matcher("RegExp[Expression[Atom[Group[PAREN_OPEN,.*?,PAREN_CLOSE]]]]")
      );
    });

    it("from a quantifier", () => {
      expect(print(parse("a*"))).toMatch(
        matcher("RegExp[Expression[Atom[.*?,QUANTIFIER]]]")
      );
    });

    it("from a character class", () => {
      expect(print(parse("[a-c]"))).toMatch(
        matcher(
          "RegExp[Expression[Atom[CharacterClass[BRACKET_OPEN,.*?CharacterClassRange[CHARACTER,DASH,CHARACTER].*?,BRACKET_CLOSE]]]]"
        )
      );
    });

    it("from a negative character class", () => {
      expect(print(parse("[^a]"))).toMatch(
        matcher(
          "RegExp[Expression[Atom[CharacterClass[BRACKET_OPEN,CARET,.*?,BRACKET_CLOSE]]]]"
        )
      );
    });
  });
});
