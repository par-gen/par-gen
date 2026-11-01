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

  it("should auto-grow tree arena from 16384 to 524288 and 1048576 words with 100% lossless re-emission while preserving prior CST roots", async () => {
    /**
     * @param {*} cst
     * @param {Uint8Array} stream
     */
    const reemitLossless = (cst, stream) => {
      const tree = cst.__tree;
      const out = Buffer.allocUnsafe(stream.length);
      let offset = 0;
      const dfsStack = [cst.__pointer];

      while (dfsStack.length > 0) {
        const p = /** @type {number} */ (dfsStack.pop());
        const word0 = tree[p];
        const nChildren = word0 >>> 8;
        if (nChildren === 0) {
          const span = tree[p + 1];
          const end = span & 0x3fffff;
          const len = span >>> 22;
          const start = end - len;
          out.set(stream.subarray(start, end), offset);
          offset += len;
        } else {
          const children = new Array(nChildren);
          let child = tree[p + 1] & 0xfffff;
          children[0] = child;
          for (let i = 1; i < nChildren; i++) {
            child = tree[child + 2];
            children[i] = child;
          }
          for (let i = nChildren - 1; i >= 0; i--) {
            dfsStack.push(children[i]);
          }
        }
      }

      return out.subarray(0, offset);
    };

    // 1. Small document fitting in initial 16,384-word (64 KiB) low-heap arena
    const pkgBuf = await fsp.readFile("package.json");
    const cstPkg = /** @type {*} */ (parse(pkgBuf));
    expect(cstPkg.name).toBe("Json");
    expect(cstPkg.start).toBe(0);
    expect(cstPkg.end).toBe(pkgBuf.length);
    expect(cstPkg.__tree.length).toBe(16384);

    // 2. package-lock.json (495 KiB, 112,667 CST nodes = 338,001 words)
    // Triggers 5 dynamic doublings: 16384 -> 32768 -> 65536 -> 131072 -> 262144 -> 524288
    const lockBuf = await fsp.readFile("package-lock.json");
    const cstLock = /** @type {*} */ (parse(lockBuf));
    expect(cstLock.name).toBe("Json");
    expect(cstLock.start).toBe(0);
    expect(cstLock.end).toBe(lockBuf.length);
    expect(cstLock.__tree.length).toBe(524288);
    expect(Buffer.compare(reemitLossless(cstLock, lockBuf), lockBuf)).toBe(0);

    // 3. Synthetic ~1.5 MB JSON document (~265,000 CST nodes = ~795,000 words)
    // Triggers dynamic growth to 1,048,576 words (4 MiB)
    const entries = new Array(5300);
    for (let i = 0; i < 5300; i++) {
      entries[i] =
        `{"id":${i},"name":"@par-gen/synthetic-pkg-${i}",` +
        `"version":"1.${i % 20}.${i % 100}",` +
        `"resolved":"https://registry.npmjs.org/@par-gen/synthetic-pkg-${i}/-/synthetic-pkg-${i}-1.0.0.tgz",` +
        `"integrity":"sha512-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",` +
        `"dev":true}`;
    }
    const hugeBuf = Buffer.from(`[\n${entries.join(",\n")}\n]\n`);
    expect(hugeBuf.length).toBeGreaterThan(1500000);
    const cstHuge = /** @type {*} */ (parse(hugeBuf));
    expect(cstHuge.name).toBe("Json");
    expect(cstHuge.start).toBe(0);
    expect(cstHuge.end).toBe(hugeBuf.length);
    expect(cstHuge.__tree.length).toBe(1048576);
    expect(Buffer.compare(reemitLossless(cstHuge, hugeBuf), hugeBuf)).toBe(0);

    // 4. Verify earlier CST roots still reference their uncorrupted tree arenas after subsequent doublings
    expect(cstPkg.__tree.length).toBe(16384);
    expect(cstPkg.start).toBe(0);
    expect(cstPkg.end).toBe(pkgBuf.length);
    expect(Buffer.compare(reemitLossless(cstPkg, pkgBuf), pkgBuf)).toBe(0);

    expect(cstLock.__tree.length).toBe(524288);
    expect(cstLock.start).toBe(0);
    expect(cstLock.end).toBe(lockBuf.length);
    expect(Buffer.compare(reemitLossless(cstLock, lockBuf), lockBuf)).toBe(0);
  });

  it("should produce correct tree for complex structures", () => {
    const input =
      '{"a": 1, "b": true, "c": false, "d": null, "e": "abc", "f": [0,true,false,null,"abc",[],{}], "g": {}}';

    expect(parse(input)).toEqual(
      expect.objectContaining({
        name: "Json",
        start: 0,
        end: input.length,
        items: [
          expect.objectContaining({
            name: "Element",
            start: expect.any(Number),
            end: expect.any(Number),
            items: [
              expect.objectContaining({
                name: "Value",
                start: expect.any(Number),
                end: expect.any(Number),
                items: [
                  expect.objectContaining({
                    name: "Object",
                    start: expect.any(Number),
                    end: expect.any(Number),
                    items: [
                      expect.objectContaining({
                        name: "CURLY_OPEN",
                        start: 0,
                        end: 1,
                      }),
                      expect.objectContaining({
                        name: "Members",
                        start: expect.any(Number),
                        end: expect.any(Number),
                        items: [
                          expect.objectContaining({
                            name: "Members",
                            start: expect.any(Number),
                            end: expect.any(Number),
                            items: [
                              expect.objectContaining({
                                name: "Members",
                                start: expect.any(Number),
                                end: expect.any(Number),
                                items: [
                                  expect.objectContaining({
                                    name: "Members",
                                    start: expect.any(Number),
                                    end: expect.any(Number),
                                    items: [
                                      expect.objectContaining({
                                        name: "Members",
                                        start: expect.any(Number),
                                        end: expect.any(Number),
                                        items: [
                                          expect.objectContaining({
                                            name: "Members",
                                            start: expect.any(Number),
                                            end: expect.any(Number),
                                            items: [
                                              expect.objectContaining({
                                                name: "Members",
                                                start: expect.any(Number),
                                                end: expect.any(Number),
                                                items: [
                                                  expect.objectContaining({
                                                    name: "Member",
                                                    start: expect.any(Number),
                                                    end: expect.any(Number),
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
                                                        start: expect.any(
                                                          Number
                                                        ),
                                                        end: expect.any(Number),
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
                                                              start: expect.any(
                                                                Number
                                                              ),
                                                              end: expect.any(
                                                                Number
                                                              ),
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
                                                start: expect.any(Number),
                                                end: expect.any(Number),
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
                                                    start: expect.any(Number),
                                                    end: expect.any(Number),
                                                    items: [
                                                      expect.objectContaining({
                                                        name: "WS",
                                                        start: 13,
                                                        end: 14,
                                                      }),
                                                      expect.objectContaining({
                                                        name: "Value",
                                                        start: expect.any(
                                                          Number
                                                        ),
                                                        end: expect.any(Number),
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
                                            start: expect.any(Number),
                                            end: expect.any(Number),
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
                                                start: expect.any(Number),
                                                end: expect.any(Number),
                                                items: [
                                                  expect.objectContaining({
                                                    name: "WS",
                                                    start: 24,
                                                    end: 25,
                                                  }),
                                                  expect.objectContaining({
                                                    name: "Value",
                                                    start: expect.any(Number),
                                                    end: expect.any(Number),
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
                                        start: expect.any(Number),
                                        end: expect.any(Number),
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
                                            start: expect.any(Number),
                                            end: expect.any(Number),
                                            items: [
                                              expect.objectContaining({
                                                name: "WS",
                                                start: 36,
                                                end: 37,
                                              }),
                                              expect.objectContaining({
                                                name: "Value",
                                                start: expect.any(Number),
                                                end: expect.any(Number),
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
                                    start: expect.any(Number),
                                    end: expect.any(Number),
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
                                        start: expect.any(Number),
                                        end: expect.any(Number),
                                        items: [
                                          expect.objectContaining({
                                            name: "WS",
                                            start: 47,
                                            end: 48,
                                          }),
                                          expect.objectContaining({
                                            name: "Value",
                                            start: expect.any(Number),
                                            end: expect.any(Number),
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
                                start: expect.any(Number),
                                end: expect.any(Number),
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
                                    start: expect.any(Number),
                                    end: expect.any(Number),
                                    items: [
                                      expect.objectContaining({
                                        name: "WS",
                                        start: 59,
                                        end: 60,
                                      }),
                                      expect.objectContaining({
                                        name: "Value",
                                        start: expect.any(Number),
                                        end: expect.any(Number),
                                        items: [
                                          expect.objectContaining({
                                            name: "Array",
                                            start: expect.any(Number),
                                            end: expect.any(Number),
                                            items: [
                                              expect.objectContaining({
                                                name: "BRACKET_OPEN",
                                                start: 60,
                                                end: 61,
                                              }),
                                              expect.objectContaining({
                                                name: "Elements",
                                                start: expect.any(Number),
                                                end: expect.any(Number),
                                                items: [
                                                  expect.objectContaining({
                                                    name: "Elements",
                                                    start: expect.any(Number),
                                                    end: expect.any(Number),
                                                    items: [
                                                      expect.objectContaining({
                                                        name: "Elements",
                                                        start: expect.any(
                                                          Number
                                                        ),
                                                        end: expect.any(Number),
                                                        items: [
                                                          expect.objectContaining(
                                                            {
                                                              name: "Elements",
                                                              start: expect.any(
                                                                Number
                                                              ),
                                                              end: expect.any(
                                                                Number
                                                              ),
                                                              items: [
                                                                expect.objectContaining(
                                                                  {
                                                                    name:
                                                                      "Elements",
                                                                    start: expect.any(
                                                                      Number
                                                                    ),
                                                                    end: expect.any(
                                                                      Number
                                                                    ),
                                                                    items: [
                                                                      expect.objectContaining(
                                                                        {
                                                                          name:
                                                                            "Elements",
                                                                          start: expect.any(
                                                                            Number
                                                                          ),
                                                                          end: expect.any(
                                                                            Number
                                                                          ),
                                                                          items: [
                                                                            expect.objectContaining(
                                                                              {
                                                                                name:
                                                                                  "Elements",
                                                                                start: expect.any(
                                                                                  Number
                                                                                ),
                                                                                end: expect.any(
                                                                                  Number
                                                                                ),
                                                                                items: [
                                                                                  expect.objectContaining(
                                                                                    {
                                                                                      name:
                                                                                        "Element",
                                                                                      start: expect.any(
                                                                                        Number
                                                                                      ),
                                                                                      end: expect.any(
                                                                                        Number
                                                                                      ),
                                                                                      items: [
                                                                                        expect.objectContaining(
                                                                                          {
                                                                                            name:
                                                                                              "Value",
                                                                                            start: expect.any(
                                                                                              Number
                                                                                            ),
                                                                                            end: expect.any(
                                                                                              Number
                                                                                            ),
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
                                                                                start: expect.any(
                                                                                  Number
                                                                                ),
                                                                                end: expect.any(
                                                                                  Number
                                                                                ),
                                                                                items: [
                                                                                  expect.objectContaining(
                                                                                    {
                                                                                      name:
                                                                                        "Value",
                                                                                      start: expect.any(
                                                                                        Number
                                                                                      ),
                                                                                      end: expect.any(
                                                                                        Number
                                                                                      ),
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
                                                                          start: expect.any(
                                                                            Number
                                                                          ),
                                                                          end: expect.any(
                                                                            Number
                                                                          ),
                                                                          items: [
                                                                            expect.objectContaining(
                                                                              {
                                                                                name:
                                                                                  "Value",
                                                                                start: expect.any(
                                                                                  Number
                                                                                ),
                                                                                end: expect.any(
                                                                                  Number
                                                                                ),
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
                                                                    start: expect.any(
                                                                      Number
                                                                    ),
                                                                    end: expect.any(
                                                                      Number
                                                                    ),
                                                                    items: [
                                                                      expect.objectContaining(
                                                                        {
                                                                          name:
                                                                            "Value",
                                                                          start: expect.any(
                                                                            Number
                                                                          ),
                                                                          end: expect.any(
                                                                            Number
                                                                          ),
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
                                                              start: expect.any(
                                                                Number
                                                              ),
                                                              end: expect.any(
                                                                Number
                                                              ),
                                                              items: [
                                                                expect.objectContaining(
                                                                  {
                                                                    name:
                                                                      "Value",
                                                                    start: expect.any(
                                                                      Number
                                                                    ),
                                                                    end: expect.any(
                                                                      Number
                                                                    ),
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
                                                        start: expect.any(
                                                          Number
                                                        ),
                                                        end: expect.any(Number),
                                                        items: [
                                                          expect.objectContaining(
                                                            {
                                                              name: "Value",
                                                              start: expect.any(
                                                                Number
                                                              ),
                                                              end: expect.any(
                                                                Number
                                                              ),
                                                              items: [
                                                                expect.objectContaining(
                                                                  {
                                                                    name:
                                                                      "Array",
                                                                    start: expect.any(
                                                                      Number
                                                                    ),
                                                                    end: expect.any(
                                                                      Number
                                                                    ),
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
                                                    start: expect.any(Number),
                                                    end: expect.any(Number),
                                                    items: [
                                                      expect.objectContaining({
                                                        name: "Value",
                                                        start: expect.any(
                                                          Number
                                                        ),
                                                        end: expect.any(Number),
                                                        items: [
                                                          expect.objectContaining(
                                                            {
                                                              name: "Object",
                                                              start: expect.any(
                                                                Number
                                                              ),
                                                              end: expect.any(
                                                                Number
                                                              ),
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
                            start: expect.any(Number),
                            end: expect.any(Number),
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
                                start: expect.any(Number),
                                end: expect.any(Number),
                                items: [
                                  expect.objectContaining({
                                    name: "WS",
                                    start: 97,
                                    end: 98,
                                  }),
                                  expect.objectContaining({
                                    name: "Value",
                                    start: expect.any(Number),
                                    end: expect.any(Number),
                                    items: [
                                      expect.objectContaining({
                                        name: "Object",
                                        start: expect.any(Number),
                                        end: expect.any(Number),
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

  it("should traverse CST identically with zero-allocation TreeCursor and CstNode#items", async () => {
    const pkgBuf = await fsp.readFile("package.json");
    const root = parse(pkgBuf);
    const cursor = root.cursor();

    /** @type {Array<{ name: string, start: number, end: number, isLeaf: boolean, childCount: number }>} */
    const cursorNodes = [];
    outer: while (true) {
      cursorNodes.push({
        name: cursor.name,
        start: cursor.start,
        end: cursor.end,
        isLeaf: cursor.isLeaf,
        childCount: cursor.childCount,
      });
      if (cursor.gotoFirstChild() || cursor.gotoNextSibling()) {
        continue;
      }
      while (cursor.gotoParent()) {
        if (cursor.gotoNextSibling()) {
          continue outer;
        }
      }
      break;
    }

    /** @type {Array<{ name: string, start: number, end: number, isLeaf: boolean, childCount: number }>} */
    const cstNodes = [];
    /** @param {import("./generated/parser.js").CstNode} node */
    const walkCst = (node) => {
      const items = node.items;
      cstNodes.push({
        name: node.name,
        start: node.start,
        end: node.end,
        isLeaf: items === undefined,
        childCount: items ? items.length : 0,
      });
      if (items) {
        for (let i = 0; i < items.length; i++) {
          walkCst(items[i]);
        }
      }
    };
    walkCst(root);

    expect(cursorNodes).toEqual(cstNodes);
    expect(cursor.depth).toBe(0);
    expect(cursor.pointer).toBe(root.__pointer);

    // Verify reset() and lossless re-emission via TreeCursor leaf walk
    expect(cursor.reset()).toBe(true);
    const reemitted = Buffer.allocUnsafe(pkgBuf.length);
    let writeOffset = 0;
    outer2: while (true) {
      if (cursor.isLeaf) {
        const slice = cursor.value;
        reemitted.set(slice, writeOffset);
        writeOffset += slice.length;
      }
      if (cursor.gotoFirstChild() || cursor.gotoNextSibling()) {
        continue;
      }
      while (cursor.gotoParent()) {
        if (cursor.gotoNextSibling()) {
          continue outer2;
        }
      }
      break;
    }
    expect(writeOffset).toBe(pkgBuf.length);
    expect(Buffer.compare(reemitted, pkgBuf)).toBe(0);
  });

  it("should preserve exact start, end, and value for tokens >= 1024 bytes in CstNode and TreeCursor", () => {
    const longStr = "x".repeat(5000);
    const json = `{"key":"${longStr}","after":42}`;
    const root = parse(json);

    expect(root.start).toBe(0);
    expect(root.end).toBe(json.length);
    expect(Buffer.from(root.value).toString("utf-8")).toBe(json);

    const cursor = root.cursor();
    /** @type {Array<{ name: string, start: number, end: number, text: string }>} */
    const leaves = [];
    outer: while (true) {
      if (cursor.isLeaf) {
        leaves.push({
          name: cursor.name,
          start: cursor.start,
          end: cursor.end,
          text: Buffer.from(cursor.value).toString("utf-8"),
        });
        const node = cursor.currentNode();
        expect(node.start).toBe(cursor.start);
        expect(node.end).toBe(cursor.end);
        expect(Buffer.from(node.value).toString("utf-8")).toBe(
          Buffer.from(cursor.value).toString("utf-8")
        );
      }
      if (cursor.gotoFirstChild() || cursor.gotoNextSibling()) {
        continue;
      }
      while (cursor.gotoParent()) {
        if (cursor.gotoNextSibling()) {
          continue outer;
        }
      }
      break;
    }

    const expectedStringToken = `"${longStr}"`;
    const stringLeaf = leaves.find((l) => l.end - l.start > 1024);
    expect(stringLeaf).toBeDefined();
    expect(stringLeaf?.name).toBe("STRING");
    expect(stringLeaf?.start).toBe(7);
    expect(stringLeaf?.end).toBe(7 + expectedStringToken.length);
    expect(stringLeaf?.text).toBe(expectedStringToken);
    expect(leaves.map((l) => l.text).join("")).toBe(json);
  });
});
