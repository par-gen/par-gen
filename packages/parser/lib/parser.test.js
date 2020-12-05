import { parser } from "./parser.js";

describe("parser", () => {
  it("should construct...", async () => {
    const parse = parser(`
      POPEN := '(';
      PCLOSE := ')';
      NUMBER := '0|1|2|3|4|5|6|7|8|9';
      PLUS := '+';

      # S := Expr
      Expr := Term;
      Expr := POPEN Expr PCLOSE;
      Term := NUMBER;
      Term := PLUS Term;
      Term := Term PLUS NUMBER;
    `);

    const ast = parse("1+1");

    expect(ast).toEqual({
      type: "Expr",
      value: undefined,
      nodes: [
        {
          type: "Add",
          value: undefined,
          nodes: [
            {
              type: "NUMBER",
              value: "1",
              nodes: [],
            },
            {
              type: "PLUS",
              value: "+",
              nodes: [],
            },
            {
              type: "NUMBER",
              value: "1",
              nodes: [],
            },
          ],
        },
      ],
    });
  });
});
