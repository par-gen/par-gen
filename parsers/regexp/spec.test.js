import { parse } from "./generated/parser.js";

describe("RegExp", () => {
  it("should accept single character", () => {
    expect(parse("a")).toBeTruthy();
  });

  it("should accept sequence of characters", () => {
    expect(parse("ab")).toBeTruthy();
  });

  it("should accept a union", () => {
    expect(parse("a|b")).toBeTruthy();
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
      expect(print(parse("ab"))).toBe(
        "RegExp[Expression[Sequence[Atom[CHARACTER],Atom[CHARACTER]]]]"
      );
    });

    it("from a union", () => {
      expect(print(parse("a|b"))).toMatch(
        matcher("RegExp[Expression[Union[.*?,UNION,.*?]]]")
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
  });
});
