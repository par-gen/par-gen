import { parse, ops } from "./regexp.js";

describe("regexp", () => {
  it("should parse a sequence of characters", () => {
    expect(parse("abc")).toEqual({
      op: ops.sequence,
      nodes: [
        {
          op: ops.match,
          value: "a",
        },
        {
          op: ops.match,
          value: "b",
        },
        {
          op: ops.match,
          value: "c",
        },
      ],
    });
  });

  it("should parse an any character", () => {
    expect(parse(".")).toEqual({
      op: ops.sequence,
      nodes: [
        {
          op: ops.any,
        },
      ],
    });
  });

  it("should parse an optional expression", () => {
    expect(parse("a*")).toEqual({
      op: ops.sequence,
      nodes: [
        {
          op: ops.optional,
          node: {
            op: ops.match,
            value: "a",
          },
        },
      ],
    });
  });

  it("should parse a choice expression", () => {
    expect(parse("aa|bb")).toEqual({
      op: ops.sequence,
      nodes: [
        {
          op: ops.choice,
          left: {
            op: ops.sequence,
            nodes: [
              {
                op: ops.match,
                value: "a",
              },
              {
                op: ops.match,
                value: "a",
              },
            ],
          },
          right: {
            op: ops.sequence,
            nodes: [
              {
                op: ops.match,
                value: "b",
              },
              {
                op: ops.match,
                value: "b",
              },
            ],
          },
        },
      ],
    });
  });

  it("should parse a sub-expression", () => {
    expect(parse("(ab)")).toEqual({
      op: ops.sequence,
      nodes: [
        {
          op: ops.sequence,
          nodes: [
            {
              op: ops.match,
              value: "a",
            },
            {
              op: ops.match,
              value: "b",
            },
          ],
        },
      ],
    });
  });

  it("should parse a complex expression", () => {
    expect(parse("aa(aa|bb)*cc")).toEqual({
      op: ops.sequence,
      nodes: [
        {
          op: ops.match,
          value: "a",
        },
        {
          op: ops.match,
          value: "a",
        },
        {
          op: ops.optional,
          node: {
            op: ops.sequence,
            nodes: [
              {
                op: ops.choice,
                left: {
                  op: ops.sequence,
                  nodes: [
                    {
                      op: ops.match,
                      value: "a",
                    },
                    {
                      op: ops.match,
                      value: "a",
                    },
                  ],
                },
                right: {
                  op: ops.sequence,
                  nodes: [
                    {
                      op: ops.match,
                      value: "b",
                    },
                    {
                      op: ops.match,
                      value: "b",
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          op: ops.match,
          value: "c",
        },
        {
          op: ops.match,
          value: "c",
        },
      ],
    });
  });
});
