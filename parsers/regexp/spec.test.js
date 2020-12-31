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
});
