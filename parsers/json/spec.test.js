import { promises as fsp } from "fs";
import { parse } from "./generated/parser.js";

describe("JSON", () => {
  it.each([
    "{}",
    "[]",
    '"string"',
    '"\\n\\t\\u1234"',
    '""',
    "true",
    "false",
    "null",
  ])("should accept '%s' literal", (literal) => {
    expect(parse(literal)).toBeTruthy();
  });

  it.each([
    "-12.34e56",
    "0",
    "1",
    "-12.34",
    "12e56",
    "-12.34e-56",
    "-12.34E+56",
  ])("should accept '%s' number", (literal) => {
    expect(parse(literal)).toBeTruthy();
  });

  it.each([" { } ", " [ ] ", "\ntrue\n"])(
    "should accept spaces in '%s'",
    (literal) => {
      expect(parse(literal)).toBeTruthy();
    }
  );

  it("should accept complex structures (e.g. package.json)", async () => {
    expect(parse(await fsp.readFile("package.json"))).toBeTruthy();
  });
});
