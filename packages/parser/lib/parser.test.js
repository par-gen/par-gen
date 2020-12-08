import { generate } from "./parser.js";

/**
 * @typedef {import('./parser').Actions} Actions
 */

describe("generate", () => {
  it("should return states, tables, ... to generate a parser", () => {
    const data = generate(`
      A := 'a';

      Start := A;
    `);

    expect(data).toEqual({
      states: [
        new Set([
          {
            name: "S",
            tokens: ["Start"],
            marker: 0,
            lookahead: "@expound.EOF",
          },
          {
            name: "Start",
            tokens: ["A"],
            marker: 0,
            lookahead: "@expound.EOF",
          },
        ]),
        new Set([
          {
            name: "Start",
            tokens: ["A"],
            marker: 1,
            lookahead: "@expound.EOF",
          },
        ]),
        new Set([
          {
            name: "S",
            tokens: ["Start"],
            marker: 1,
            lookahead: "@expound.EOF",
          },
        ]),
      ],
      actions: new Map([
        [
          new Set([
            {
              name: "S",
              tokens: ["Start"],
              marker: 0,
              lookahead: "@expound.EOF",
            },
            {
              name: "Start",
              tokens: ["A"],
              marker: 0,
              lookahead: "@expound.EOF",
            },
          ]),
          new Map([
            [
              "A",
              /** @type {Actions} */ ({
                op: "shift",
                state: new Set([
                  {
                    name: "Start",
                    tokens: ["A"],
                    marker: 1,
                    lookahead: "@expound.EOF",
                  },
                ]),
                symbol: undefined,
              }),
            ],
            [
              "Start",
              /** @type {Actions} */ ({
                op: "shift",
                state: new Set([
                  {
                    name: "S",
                    tokens: ["Start"],
                    marker: 1,
                    lookahead: "@expound.EOF",
                  },
                ]),
                symbol: undefined,
              }),
            ],
          ]),
        ],
        [
          new Set([
            {
              name: "S",
              tokens: ["Start"],
              marker: 1,
              lookahead: "@expound.EOF",
            },
          ]),
          new Map([
            [
              "@expound.EOF",
              /** @type {Actions} */ ({
                op: "done",
                state: undefined,
                symbol: undefined,
              }),
            ],
          ]),
        ],
        [
          new Set([
            {
              name: "Start",
              tokens: ["A"],
              marker: 1,
              lookahead: "@expound.EOF",
            },
          ]),
          new Map([
            [
              "@expound.EOF",
              /** @type {Actions} */ ({
                op: "reduce",
                state: undefined,
                symbol: "Start",
              }),
            ],
          ]),
        ],
      ]),
      goto: new Map([
        [
          new Set([
            {
              name: "S",
              tokens: ["Start"],
              marker: 0,
              lookahead: "@expound.EOF",
            },
            {
              name: "Start",
              tokens: ["A"],
              marker: 0,
              lookahead: "@expound.EOF",
            },
          ]),
          new Map([
            [
              "Start",
              new Set([
                {
                  name: "S",
                  tokens: ["Start"],
                  marker: 1,
                  lookahead: "@expound.EOF",
                },
              ]),
            ],
          ]),
        ],
      ]),
      start: new Set([
        {
          name: "S",
          tokens: ["Start"],
          marker: 0,
          lookahead: "@expound.EOF",
        },
        {
          name: "Start",
          tokens: ["A"],
          marker: 0,
          lookahead: "@expound.EOF",
        },
      ]),
      lexerData: expect.any(Object),
    });
  });
});
