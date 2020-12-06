import { parser } from "./parser.js";

describe("parser", () => {
  it("should construct a parser from a given grammar", async () => {
    // todo: we currently can't have a token like '('
    // the regexp parser fails on this
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
      name: "Expr",
      items: [
        {
          name: "Term",
          items: [
            {
              name: "Term",
              items: [
                {
                  name: "NUMBER",
                  value: new Uint8Array(["1".charCodeAt(0)]),
                },
              ],
            },
            {
              name: "PLUS",
              value: new Uint8Array(["+".charCodeAt(0)]),
            },
            {
              name: "NUMBER",
              value: new Uint8Array(["1".charCodeAt(0)]),
            },
          ],
        },
      ],
    });
  });
});
