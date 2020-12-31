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

  it("should produce correct tree for complex structures", () => {
    const input =
      '{"a": 1, "b": true, "c": false, "d": null, "e": "abc", "f": [0,true,false,null,"abc",[],{}], "g": {}}';

    expect(parse(input)).toEqual(
      expect.objectContaining({
        name: "Json",
        start: -1,
        end: -1,
        items: [
          expect.objectContaining({
            name: "Element",
            start: -1,
            end: -1,
            items: [
              expect.objectContaining({
                name: "Value",
                start: -1,
                end: -1,
                items: [
                  expect.objectContaining({
                    name: "Object",
                    start: -1,
                    end: -1,
                    items: [
                      expect.objectContaining({
                        name: "CURLY_OPEN",
                        start: 0,
                        end: 1,
                      }),
                      expect.objectContaining({
                        name: "Members",
                        start: -1,
                        end: -1,
                        items: [
                          expect.objectContaining({
                            name: "Members",
                            start: -1,
                            end: -1,
                            items: [
                              expect.objectContaining({
                                name: "Members",
                                start: -1,
                                end: -1,
                                items: [
                                  expect.objectContaining({
                                    name: "Members",
                                    start: -1,
                                    end: -1,
                                    items: [
                                      expect.objectContaining({
                                        name: "Members",
                                        start: -1,
                                        end: -1,
                                        items: [
                                          expect.objectContaining({
                                            name: "Members",
                                            start: -1,
                                            end: -1,
                                            items: [
                                              expect.objectContaining({
                                                name: "Members",
                                                start: -1,
                                                end: -1,
                                                items: [
                                                  expect.objectContaining({
                                                    name: "Member",
                                                    start: -1,
                                                    end: -1,
                                                    items: [
                                                      expect.objectContaining({
                                                        name: "STRING",
                                                        start: 1,
                                                        end: 4,
                                                      }),
                                                      expect.objectContaining({
                                                        name: "COLON",
                                                        start: 4,
                                                        end: 5,
                                                      }),
                                                      expect.objectContaining({
                                                        name: "Element",
                                                        start: -1,
                                                        end: -1,
                                                        items: [
                                                          expect.objectContaining(
                                                            {
                                                              name: "WS",
                                                              start: 5,
                                                              end: 6,
                                                            }
                                                          ),
                                                          expect.objectContaining(
                                                            {
                                                              name: "Value",
                                                              start: -1,
                                                              end: -1,
                                                              items: [
                                                                expect.objectContaining(
                                                                  {
                                                                    name:
                                                                      "NUMBER",
                                                                    start: 6,
                                                                    end: 7,
                                                                  }
                                                                ),
                                                              ],
                                                            }
                                                          ),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              expect.objectContaining({
                                                name: "COMMA",
                                                start: 7,
                                                end: 8,
                                              }),
                                              expect.objectContaining({
                                                name: "Member",
                                                start: -1,
                                                end: -1,
                                                items: [
                                                  expect.objectContaining({
                                                    name: "WS",
                                                    start: 8,
                                                    end: 9,
                                                  }),
                                                  expect.objectContaining({
                                                    name: "STRING",
                                                    start: 9,
                                                    end: 12,
                                                  }),
                                                  expect.objectContaining({
                                                    name: "COLON",
                                                    start: 12,
                                                    end: 13,
                                                  }),
                                                  expect.objectContaining({
                                                    name: "Element",
                                                    start: -1,
                                                    end: -1,
                                                    items: [
                                                      expect.objectContaining({
                                                        name: "WS",
                                                        start: 13,
                                                        end: 14,
                                                      }),
                                                      expect.objectContaining({
                                                        name: "Value",
                                                        start: -1,
                                                        end: -1,
                                                        items: [
                                                          expect.objectContaining(
                                                            {
                                                              name: "TRUE",
                                                              start: 14,
                                                              end: 18,
                                                            }
                                                          ),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          expect.objectContaining({
                                            name: "COMMA",
                                            start: 18,
                                            end: 19,
                                          }),
                                          expect.objectContaining({
                                            name: "Member",
                                            start: -1,
                                            end: -1,
                                            items: [
                                              expect.objectContaining({
                                                name: "WS",
                                                start: 19,
                                                end: 20,
                                              }),
                                              expect.objectContaining({
                                                name: "STRING",
                                                start: 20,
                                                end: 23,
                                              }),
                                              expect.objectContaining({
                                                name: "COLON",
                                                start: 23,
                                                end: 24,
                                              }),
                                              expect.objectContaining({
                                                name: "Element",
                                                start: -1,
                                                end: -1,
                                                items: [
                                                  expect.objectContaining({
                                                    name: "WS",
                                                    start: 24,
                                                    end: 25,
                                                  }),
                                                  expect.objectContaining({
                                                    name: "Value",
                                                    start: -1,
                                                    end: -1,
                                                    items: [
                                                      expect.objectContaining({
                                                        name: "FALSE",
                                                        start: 25,
                                                        end: 30,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      expect.objectContaining({
                                        name: "COMMA",
                                        start: 30,
                                        end: 31,
                                      }),
                                      expect.objectContaining({
                                        name: "Member",
                                        start: -1,
                                        end: -1,
                                        items: [
                                          expect.objectContaining({
                                            name: "WS",
                                            start: 31,
                                            end: 32,
                                          }),
                                          expect.objectContaining({
                                            name: "STRING",
                                            start: 32,
                                            end: 35,
                                          }),
                                          expect.objectContaining({
                                            name: "COLON",
                                            start: 35,
                                            end: 36,
                                          }),
                                          expect.objectContaining({
                                            name: "Element",
                                            start: -1,
                                            end: -1,
                                            items: [
                                              expect.objectContaining({
                                                name: "WS",
                                                start: 36,
                                                end: 37,
                                              }),
                                              expect.objectContaining({
                                                name: "Value",
                                                start: -1,
                                                end: -1,
                                                items: [
                                                  expect.objectContaining({
                                                    name: "NULL",
                                                    start: 37,
                                                    end: 41,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  expect.objectContaining({
                                    name: "COMMA",
                                    start: 41,
                                    end: 42,
                                  }),
                                  expect.objectContaining({
                                    name: "Member",
                                    start: -1,
                                    end: -1,
                                    items: [
                                      expect.objectContaining({
                                        name: "WS",
                                        start: 42,
                                        end: 43,
                                      }),
                                      expect.objectContaining({
                                        name: "STRING",
                                        start: 43,
                                        end: 46,
                                      }),
                                      expect.objectContaining({
                                        name: "COLON",
                                        start: 46,
                                        end: 47,
                                      }),
                                      expect.objectContaining({
                                        name: "Element",
                                        start: -1,
                                        end: -1,
                                        items: [
                                          expect.objectContaining({
                                            name: "WS",
                                            start: 47,
                                            end: 48,
                                          }),
                                          expect.objectContaining({
                                            name: "Value",
                                            start: -1,
                                            end: -1,
                                            items: [
                                              expect.objectContaining({
                                                name: "STRING",
                                                start: 48,
                                                end: 53,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              expect.objectContaining({
                                name: "COMMA",
                                start: 53,
                                end: 54,
                              }),
                              expect.objectContaining({
                                name: "Member",
                                start: -1,
                                end: -1,
                                items: [
                                  expect.objectContaining({
                                    name: "WS",
                                    start: 54,
                                    end: 55,
                                  }),
                                  expect.objectContaining({
                                    name: "STRING",
                                    start: 55,
                                    end: 58,
                                  }),
                                  expect.objectContaining({
                                    name: "COLON",
                                    start: 58,
                                    end: 59,
                                  }),
                                  expect.objectContaining({
                                    name: "Element",
                                    start: -1,
                                    end: -1,
                                    items: [
                                      expect.objectContaining({
                                        name: "WS",
                                        start: 59,
                                        end: 60,
                                      }),
                                      expect.objectContaining({
                                        name: "Value",
                                        start: -1,
                                        end: -1,
                                        items: [
                                          expect.objectContaining({
                                            name: "Array",
                                            start: -1,
                                            end: -1,
                                            items: [
                                              expect.objectContaining({
                                                name: "BRACKET_OPEN",
                                                start: 60,
                                                end: 61,
                                              }),
                                              expect.objectContaining({
                                                name: "Elements",
                                                start: -1,
                                                end: -1,
                                                items: [
                                                  expect.objectContaining({
                                                    name: "Elements",
                                                    start: -1,
                                                    end: -1,
                                                    items: [
                                                      expect.objectContaining({
                                                        name: "Elements",
                                                        start: -1,
                                                        end: -1,
                                                        items: [
                                                          expect.objectContaining(
                                                            {
                                                              name: "Elements",
                                                              start: -1,
                                                              end: -1,
                                                              items: [
                                                                expect.objectContaining(
                                                                  {
                                                                    name:
                                                                      "Elements",
                                                                    start: -1,
                                                                    end: -1,
                                                                    items: [
                                                                      expect.objectContaining(
                                                                        {
                                                                          name:
                                                                            "Elements",
                                                                          start: -1,
                                                                          end: -1,
                                                                          items: [
                                                                            expect.objectContaining(
                                                                              {
                                                                                name:
                                                                                  "Elements",
                                                                                start: -1,
                                                                                end: -1,
                                                                                items: [
                                                                                  expect.objectContaining(
                                                                                    {
                                                                                      name:
                                                                                        "Element",
                                                                                      start: -1,
                                                                                      end: -1,
                                                                                      items: [
                                                                                        expect.objectContaining(
                                                                                          {
                                                                                            name:
                                                                                              "Value",
                                                                                            start: -1,
                                                                                            end: -1,
                                                                                            items: [
                                                                                              expect.objectContaining(
                                                                                                {
                                                                                                  name:
                                                                                                    "NUMBER",
                                                                                                  start: 61,
                                                                                                  end: 62,
                                                                                                }
                                                                                              ),
                                                                                            ],
                                                                                          }
                                                                                        ),
                                                                                      ],
                                                                                    }
                                                                                  ),
                                                                                ],
                                                                              }
                                                                            ),
                                                                            expect.objectContaining(
                                                                              {
                                                                                name:
                                                                                  "COMMA",
                                                                                start: 62,
                                                                                end: 63,
                                                                              }
                                                                            ),
                                                                            expect.objectContaining(
                                                                              {
                                                                                name:
                                                                                  "Element",
                                                                                start: -1,
                                                                                end: -1,
                                                                                items: [
                                                                                  expect.objectContaining(
                                                                                    {
                                                                                      name:
                                                                                        "Value",
                                                                                      start: -1,
                                                                                      end: -1,
                                                                                      items: [
                                                                                        expect.objectContaining(
                                                                                          {
                                                                                            name:
                                                                                              "TRUE",
                                                                                            start: 63,
                                                                                            end: 67,
                                                                                          }
                                                                                        ),
                                                                                      ],
                                                                                    }
                                                                                  ),
                                                                                ],
                                                                              }
                                                                            ),
                                                                          ],
                                                                        }
                                                                      ),
                                                                      expect.objectContaining(
                                                                        {
                                                                          name:
                                                                            "COMMA",
                                                                          start: 67,
                                                                          end: 68,
                                                                        }
                                                                      ),
                                                                      expect.objectContaining(
                                                                        {
                                                                          name:
                                                                            "Element",
                                                                          start: -1,
                                                                          end: -1,
                                                                          items: [
                                                                            expect.objectContaining(
                                                                              {
                                                                                name:
                                                                                  "Value",
                                                                                start: -1,
                                                                                end: -1,
                                                                                items: [
                                                                                  expect.objectContaining(
                                                                                    {
                                                                                      name:
                                                                                        "FALSE",
                                                                                      start: 68,
                                                                                      end: 73,
                                                                                    }
                                                                                  ),
                                                                                ],
                                                                              }
                                                                            ),
                                                                          ],
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                                expect.objectContaining(
                                                                  {
                                                                    name:
                                                                      "COMMA",
                                                                    start: 73,
                                                                    end: 74,
                                                                  }
                                                                ),
                                                                expect.objectContaining(
                                                                  {
                                                                    name:
                                                                      "Element",
                                                                    start: -1,
                                                                    end: -1,
                                                                    items: [
                                                                      expect.objectContaining(
                                                                        {
                                                                          name:
                                                                            "Value",
                                                                          start: -1,
                                                                          end: -1,
                                                                          items: [
                                                                            expect.objectContaining(
                                                                              {
                                                                                name:
                                                                                  "NULL",
                                                                                start: 74,
                                                                                end: 78,
                                                                              }
                                                                            ),
                                                                          ],
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                              ],
                                                            }
                                                          ),
                                                          expect.objectContaining(
                                                            {
                                                              name: "COMMA",
                                                              start: 78,
                                                              end: 79,
                                                            }
                                                          ),
                                                          expect.objectContaining(
                                                            {
                                                              name: "Element",
                                                              start: -1,
                                                              end: -1,
                                                              items: [
                                                                expect.objectContaining(
                                                                  {
                                                                    name:
                                                                      "Value",
                                                                    start: -1,
                                                                    end: -1,
                                                                    items: [
                                                                      expect.objectContaining(
                                                                        {
                                                                          name:
                                                                            "STRING",
                                                                          start: 79,
                                                                          end: 84,
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                              ],
                                                            }
                                                          ),
                                                        ],
                                                      }),
                                                      expect.objectContaining({
                                                        name: "COMMA",
                                                        start: 84,
                                                        end: 85,
                                                      }),
                                                      expect.objectContaining({
                                                        name: "Element",
                                                        start: -1,
                                                        end: -1,
                                                        items: [
                                                          expect.objectContaining(
                                                            {
                                                              name: "Value",
                                                              start: -1,
                                                              end: -1,
                                                              items: [
                                                                expect.objectContaining(
                                                                  {
                                                                    name:
                                                                      "Array",
                                                                    start: -1,
                                                                    end: -1,
                                                                    items: [
                                                                      expect.objectContaining(
                                                                        {
                                                                          name:
                                                                            "BRACKET_OPEN",
                                                                          start: 85,
                                                                          end: 86,
                                                                        }
                                                                      ),
                                                                      expect.objectContaining(
                                                                        {
                                                                          name:
                                                                            "BRACKET_CLOSE",
                                                                          start: 86,
                                                                          end: 87,
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                              ],
                                                            }
                                                          ),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  expect.objectContaining({
                                                    name: "COMMA",
                                                    start: 87,
                                                    end: 88,
                                                  }),
                                                  expect.objectContaining({
                                                    name: "Element",
                                                    start: -1,
                                                    end: -1,
                                                    items: [
                                                      expect.objectContaining({
                                                        name: "Value",
                                                        start: -1,
                                                        end: -1,
                                                        items: [
                                                          expect.objectContaining(
                                                            {
                                                              name: "Object",
                                                              start: -1,
                                                              end: -1,
                                                              items: [
                                                                expect.objectContaining(
                                                                  {
                                                                    name:
                                                                      "CURLY_OPEN",
                                                                    start: 88,
                                                                    end: 89,
                                                                  }
                                                                ),
                                                                expect.objectContaining(
                                                                  {
                                                                    name:
                                                                      "CURLY_CLOSE",
                                                                    start: 89,
                                                                    end: 90,
                                                                  }
                                                                ),
                                                              ],
                                                            }
                                                          ),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              expect.objectContaining({
                                                name: "BRACKET_CLOSE",
                                                start: 90,
                                                end: 91,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          expect.objectContaining({
                            name: "COMMA",
                            start: 91,
                            end: 92,
                          }),
                          expect.objectContaining({
                            name: "Member",
                            start: -1,
                            end: -1,
                            items: [
                              expect.objectContaining({
                                name: "WS",
                                start: 92,
                                end: 93,
                              }),
                              expect.objectContaining({
                                name: "STRING",
                                start: 93,
                                end: 96,
                              }),
                              expect.objectContaining({
                                name: "COLON",
                                start: 96,
                                end: 97,
                              }),
                              expect.objectContaining({
                                name: "Element",
                                start: -1,
                                end: -1,
                                items: [
                                  expect.objectContaining({
                                    name: "WS",
                                    start: 97,
                                    end: 98,
                                  }),
                                  expect.objectContaining({
                                    name: "Value",
                                    start: -1,
                                    end: -1,
                                    items: [
                                      expect.objectContaining({
                                        name: "Object",
                                        start: -1,
                                        end: -1,
                                        items: [
                                          expect.objectContaining({
                                            name: "CURLY_OPEN",
                                            start: 98,
                                            end: 99,
                                          }),
                                          expect.objectContaining({
                                            name: "CURLY_CLOSE",
                                            start: 99,
                                            end: 100,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      expect.objectContaining({
                        name: "CURLY_CLOSE",
                        start: 100,
                        end: 101,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  });
});
