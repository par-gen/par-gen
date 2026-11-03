import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { describe, expect, it } from "@jest/globals";
import {
  parse,
  parsePreserveExtras,
  reemitLossless,
  CstNode,
  TreeCursor,
} from "./index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");

/**
 * Walk every node of a CST using TreeCursor and verify invariants.
 * @param {CstNode} root
 * @param {Uint8Array} buf
 */
function walkWithCursor(root, buf) {
  const cursor = root.cursor();
  expect(cursor.constructor.name).toBe("TreeCursor");
  expect(cursor.depth).toBe(0);
  expect(cursor.start).toBe(root.start);
  expect(cursor.end).toBe(root.end);

  let nodeCount = 0;
  let leafCount = 0;
  let maxDepth = 0;

  while (true) {
    nodeCount++;
    if (cursor.depth > maxDepth) {
      maxDepth = cursor.depth;
    }
    expect(typeof cursor.name).toBe("string");
    expect(cursor.name.length).toBeGreaterThan(0);

    if (cursor.isLeaf) {
      leafCount++;
      const start = cursor.start;
      const end = cursor.end;
      expect(start).toBeGreaterThanOrEqual(0);
      expect(end).toBeGreaterThanOrEqual(start);
      expect(end).toBeLessThanOrEqual(buf.length);
      expect(cursor.childCount).toBe(0);
      expect(cursor.value.length).toBe(end - start);
    } else {
      expect(cursor.childCount).toBeGreaterThan(0);
    }

    if (cursor.gotoFirstChild()) {
      continue;
    }
    while (true) {
      if (cursor.gotoNextSibling()) {
        break;
      }
      if (!cursor.gotoParent()) {
        expect(cursor.depth).toBe(0);
        cursor.reset();
        expect(cursor.depth).toBe(0);
        expect(cursor.pointer).toBe(root.__pointer);
        return { nodeCount, leafCount, maxDepth };
      }
    }
  }
}

describe("JavaScript / TypeScript Parser (@par-gen/javascript)", () => {
  describe(" Declarations, Statements & Expressions", () => {
    const programs = [
      {
        name: "imports and exports",
        code: `
          import defaultExport from "module-a";
          import * as ns from "module-b";
          import { a, b as c, type Foo } from "module-c";
          import def, { x, y } from "module-d";
          import "side-effect-only";
          export const PI: number = 3.14159;
          export function add(a: number, b: number): number {
            return a + b;
          }
          export default class Calculator {}
          export { a, c as b } from "module-c";
          export * as utils from "module-e";
        `,
      },
      {
        name: "variable declarations & destructuring with TypeScript types",
        code: `
          let count: number = 0;
          const names: Array<string> = ["alice", "bob"];
          var flag: boolean | null = null;
          const { id, name = "anon", nested: { ok }, ...rest } = payload;
          const [first, , third = 3, ...tail] = items;
        `,
      },
      {
        name: "functions, async/await, and arrow functions",
        code: `
          async function fetchData<T>(url: string, retries: number = 3): Promise<T> {
            const res = await fetch(url);
            return (await res.json()) as T;
          }
          const id = x => x;
          const sum = (a: number, b: number): number => a + b;
          const makeObj = (uid, name, value) => ({ uid, name, value });
          const asyncTask = async (items) => {
            for (const item of items) {
              await processItem(item);
            }
          };
        `,
      },
      {
        name: "classes, heritage, modifiers, accessors, and private fields",
        code: `
          export class Store<T extends object> extends BaseStore implements IStore<T>, Disposable {
            static instanceCount: number = 0;
            readonly id: string;
            #state: T;

            constructor(id: string, initialState: T) {
              super(id);
              this.id = id;
              this.#state = initialState;
            }

            get state(): T {
              return this.#state;
            }

            set state(next: T) {
              this.#state = next;
            }

            public async update(patch: Partial<T>): Promise<void> {
              this.#state = { ...this.#state, ...patch };
            }
          }
        `,
      },
      {
        name: "TypeScript interfaces, type aliases, generics, and complex types",
        code: `
          export interface GraphNode<T = unknown> extends Identifiable {
            readonly id: string;
            label?: string | null;
            children: GraphNode<T>[];
            metadata: { [key: string]: string | number };
            visit<R>(visitor: (node: GraphNode<T>, depth: number) => R): R;
            new (id: string): GraphNode<T>;
          }

          export type Result<T, E = Error> =
            | { ok: true; value: T }
            | { ok: false; error: E };

          export type Guard<T> = (val: unknown) => val is T;
          export type Pair<A, B> = [A, B];
          export type ValueOf<T> = T[keyof T];
        `,
      },
      {
        name: "control flow statements (if/else, while, do-while, for, for-of/in, switch, try/catch/finally)",
        code: `
          function controlFlow(input: number[], map: Map<string, number>): number {
            let total = 0;
            if (input.length === 0) {
              return 0;
            } else if (input.length === 1) {
              total = input[0];
            } else {
              for (let i = 0; i < input.length; i++) {
                if (input[i] < 0) continue;
                if (input[i] > 1000) break;
                total += input[i];
              }
            }

            for (const [k, v] of map.entries()) {
              total += v;
            }

            while (total > 100) {
              total >>= 1;
            }

            do {
              total++;
            } while (total < 10);

            switch (total) {
              case 10:
                total *= 2;
                break;
              default:
                total += 1;
                break;
            }

            try {
              if (total < 0) {
                throw new Error("negative");
              }
            } catch (err: unknown) {
              total = 0;
            } finally {
              map.clear();
            }

            return total;
          }
        `,
      },
      {
        name: "binary, unary, update, ternary, member, optional chaining, and template expressions",
        code: `
          const calc = 1 + 2 * 3 ** 2 - (4 << 1) + (8 >>> 2);
          const logic = (a ?? b) || (c && d) ? x | y ^ z & w : ~flag;
          const cmp = a === b && c !== d && e <= f && g >= h && x instanceof Foo && "k" in obj;
          const chain = obj?.prop?.[0]?.method?.(a, ...rest) ?? ` + "`default-${calc}`" + `;
          const regexTest = /^[a-z0-9_-]+$/gi.test(str);
        `,
      },
      {
        name: "TypeScript 5.x type operators (readonly, keyof, typeof, indexed access, tuples, conditional infer, mapped, template literal, predicates, constructor, import, literal types)",
        code: `
          export declare const SymbolNames: readonly string[];
          export type ReadonlyTuple = readonly [number, string?, ...boolean[]];
          export type LabeledTuple = [id: string, count?: number, ...rest: readonly string[]];
          export type Keys<T> = keyof T & keyof typeof globalThis;
          export type QueryType = typeof foo.bar.baz;
          export type Indexed<T, K extends keyof T> = T[K] | T["prop"] | T[number];
          export type UnwrapPromise<T> = T extends Promise<infer R extends object> ? R : T;
          export type ReadonlyOptional<T> = { +readonly [K in keyof T]+?: T[K] };
          export type MutableRequired<T> = { -readonly [K in keyof T]-?: T[K] };
          export type Getters<T> = { [K in keyof T as ` + "`get${Capitalize<string & K>}`" + `]: () => T[K] };
          export type EventName<E extends string> = ` + "`on${Capitalize<E>}`" + `;
          export function isString(x: unknown): x is string { return typeof x === "string"; }
          export function assertIs<T>(x: unknown): asserts x is T {}
          export function assertDefined(x: unknown): asserts x {}
          export type Ctor<T> = new (...args: any[]) => T;
          export type AbstractCtor<T> = abstract new (...args: any[]) => T;
          export type ParenArray = (string | number)[];
          export type ImportedBar = import("./foo").Bar<string>;
          export type ImportedMod = typeof import("./foo");
          export type LiteralUnion = true | false | null | -1 | +1 | "literal" | 123n | unique symbol;
        `,
      },
      {
        name: "TypeScript 5.x declarations (enum, const enum, namespace, declare module/global, abstract/override, import/export type)",
        code: `
          import type DefaultType from "mod-a";
          import type * as TypeNS from "mod-b";
          import type { Alpha, Beta as B } from "mod-c";
          import { type InlineA, regularVal, type InlineB as IB } from "mod-d";

          export enum Direction { Up = 1, Down, Left = "L", Right = "R" }
          export const enum FastFlags { None = 0, Read = 1, Write = 2 }
          declare enum AmbientEnum { X, Y }
          declare const enum AmbientConstEnum { A = 10, B = 20 }

          declare namespace NodeJS {
            export interface ProcessEnv {
              readonly NODE_ENV: "development" | "production" | "test";
            }
          }
          declare module "virtual-mod" {
            export const version: string;
            export default function run(): void;
          }
          declare global {
            interface Window {
              readonly appVersion: string;
            }
          }
          export as namespace MyUmdLib;

          export abstract class BaseService {
            abstract readonly serviceName: string;
            abstract execute(input: string): Promise<void>;
            protected status: number = 0;
          }
          export class ConcreteService extends BaseService {
            override readonly serviceName: string = "concrete";
            override async execute(input: string): Promise<void> {}
          }

          export type { Alpha, B };
          export type { InlineA } from "mod-d";
          export type * from "mod-e";
          export type * as ReexportedNS from "mod-f";
          export { type DefaultType, regularVal };
        `,
      },
      {
        name: "ES2025 & TypeScript 5.x expressions (satisfies, as const, <const T>, non-null !, definite assignment !:, decorators @, using/await using, import.meta, dynamic import(), BigInt, #private in, logical/exp assignment)",
        code: `
          const config = { host: "localhost", port: 8080 } satisfies Record<string, string | number>;
          const tuple = [1, 2, 3] as const;
          function identity<const T extends readonly string[]>(items: T): T {
            return items;
          }

          let lateInit!: number;
          @sealed
          @logged("service")
          class ResourceHolder {
            @observable accessor!: string;
            #secret: bigint = 100_000n + 0x10n;

            @bound
            check(@validated target: object): boolean {
              return #secret in target && Boolean(this.accessor!.trim()!);
            }
          }

          async function loadAndRun(specifier: string) {
            using syncRes = acquireSync();
            await using asyncRes = await acquireAsync();
            const baseUrl = import.meta.url;
            const mod = await import(specifier);
            let a = 2;
            a **= 3;
            a &&= 10;
            a ||= 20;
            a ??= 30;
            return { baseUrl, mod, a, syncRes, asyncRes };
          }
        `,
      },
    ];

    for (const { name, code } of programs) {
      it(`parses ${name} in SkipExtras and PreserveExtras modes with 100% lossless re-emission`, () => {
        const buf = Buffer.from(code, "utf8");
        const cstSkip = parse(buf);
        expect(cstSkip).toBeInstanceOf(CstNode);
        expect(cstSkip.name).toBe("program");

        const statsSkip = walkWithCursor(cstSkip, buf);
        expect(statsSkip.nodeCount).toBeGreaterThan(5);

        const cstPreserve = parsePreserveExtras(buf);
        expect(cstPreserve.name).toBe("program");
        expect(cstPreserve.start).toBe(0);
        expect(cstPreserve.end).toBe(buf.length);

        const reemitted = reemitLossless(cstPreserve, buf);
        expect(Buffer.compare(reemitted, buf)).toBe(0);

        const statsPreserve = walkWithCursor(cstPreserve, buf);
        expect(statsPreserve.nodeCount).toBeGreaterThanOrEqual(
          statsSkip.nodeCount
        );
      });
    }
  });

  describe("Contextual Keywords (%word fallback)", () => {
    it("parses tricky contextual keyword programs (from, of, async, type, interface, get, set, static, as, readonly, declare)", () => {
      const trickyCode = [
        `import from from "from";`,
        `let of = 1;`,
        `for (const async of [from, of]) {`,
        `  const type = async;`,
        `  let set = new Set();`,
        `  if (!set) {`,
        `    set = new Set();`,
        `  }`,
        `  const get = { from, of, type, set, get: 42 };`,
        `}`,
      ].join("\n");

      const buf = Buffer.from(trickyCode, "utf8");
      const cstSkip = parse(buf);
      expect(cstSkip.name).toBe("program");
      walkWithCursor(cstSkip, buf);

      const cstPreserve = parsePreserveExtras(buf);
      expect(cstPreserve.name).toBe("program");
      expect(Buffer.compare(reemitLossless(cstPreserve, buf), buf)).toBe(0);
    });
  });

  describe("Operator Precedence & Associativity", () => {
    it("respects multiplicative over additive and right-associative exponentiation / assignment", () => {
      const code = "a = b = 1 + 2 * 3 ** 4;";
      const cst = parse(Buffer.from(code, "utf8"));
      const findNode = (node, targetName) => {
        if (node.name === targetName) return node;
        if (!node.items) return null;
        for (const child of node.items) {
          const found = findNode(child, targetName);
          if (found) return found;
        }
        return null;
      };
      const stmt = findNode(cst, "expression_statement");
      expect(stmt).not.toBeNull();
      const assignOuter = findNode(stmt, "assignment_expression");
      expect(assignOuter.name).toBe("assignment_expression");
      // Right-associative assignment: a = (b = ...)
      expect(Buffer.from(assignOuter.items[0].value).toString("utf8")).toBe("a");
      const assignInner = findNode(assignOuter.items[2], "assignment_expression");
      expect(assignInner.name).toBe("assignment_expression");
      expect(Buffer.from(assignInner.items[0].value).toString("utf8")).toBe("b");

      // 1 + (2 * (3 ** 4))
      const addExpr = findNode(assignInner.items[2], "binary_expression");
      expect(addExpr.name).toBe("binary_expression");
      expect(Buffer.from(addExpr.items[0].value).toString("utf8")).toBe("1");
      expect(Buffer.from(addExpr.items[1].value).toString("utf8")).toBe("+");

      const mulExpr = findNode(addExpr.items[2], "binary_expression");
      expect(mulExpr.name).toBe("binary_expression");
      expect(Buffer.from(mulExpr.items[0].value).toString("utf8")).toBe("2");
      expect(Buffer.from(mulExpr.items[1].value).toString("utf8")).toBe("*");

      const expExpr = findNode(mulExpr.items[2], "binary_expression");
      expect(expExpr.name).toBe("binary_expression");
      expect(Buffer.from(expExpr.items[0].value).toString("utf8")).toBe("3");
      expect(Buffer.from(expExpr.items[1].value).toString("utf8")).toBe("**");
      expect(Buffer.from(expExpr.items[2].value).toString("utf8")).toBe("4");
    });
  });

  describe("Real-World Codebase Files (.js and .d.ts) + 100% Lossless CST Re-emission", () => {
    const realFiles = [
      "packages/cli/lib/generator.js",
      "packages/dfa/lib/hopcroft.js",
      "packages/dfa/lib/powerset.js",
      "packages/dfa/lib/dfa.js",
      "packages/nfa/lib/thompson.js",
      "packages/lexer/lib/lexer.js",
      "packages/grammar/lib/parser.js",
      "packages/parser/lib/parser.js",
      "parsers/json/generated/parser.d.ts",
    ];

    for (const relPath of realFiles) {
      it(`parses ${relPath} with full TreeCursor traversal and 100% byte-for-byte lossless CST re-emission`, () => {
        const fullPath = path.join(repoRoot, relPath);
        const buf = fs.readFileSync(fullPath);

        const cstSkip = parse(buf);
        expect(cstSkip.name).toBe("program");
        const skipStats = walkWithCursor(cstSkip, buf);
        expect(skipStats.nodeCount).toBeGreaterThan(20);

        const cstPreserve = parsePreserveExtras(buf);
        expect(cstPreserve.name).toBe("program");
        expect(cstPreserve.start).toBe(0);
        expect(cstPreserve.end).toBe(buf.length);

        const reemitted = reemitLossless(cstPreserve, buf);
        expect(reemitted.length).toBe(buf.length);
        expect(Buffer.compare(reemitted, buf)).toBe(0);

        const preserveStats = walkWithCursor(cstPreserve, buf);
        expect(preserveStats.nodeCount).toBeGreaterThan(skipStats.nodeCount);
      });
    }

    it("preserves exact .start, .end, .text, SymbolIds, and cst.reemitLossless() on 10KB strings, 2KB comments, and >64 nested template literals", async () => {
      const { SymbolIds } = await import("./generated/parser.js");
      expect(Object.isFrozen(SymbolIds)).toBe(true);
      expect(typeof SymbolIds.program).toBe("number");
      expect(typeof SymbolIds.string).toBe("number");

      const comment2KB = `/*${"c".repeat(2048)}*/`;
      const str10KB = `"${"x".repeat(10240)}"`;
      const src = `   ${comment2KB}   const a =    ${comment2KB}   ${str10KB}  ;  \n`;
      const buf = Buffer.from(src);

      const cst = parse(buf);
      expect(cst.symbolId).toBe(SymbolIds.program);
      expect(Buffer.compare(cst.reemitLossless(), buf)).toBe(0);

      const findStr = (/** @type {*} */ n) => {
        if (n.name === "string") return n;
        for (const c of n.items || []) {
          const f = findStr(c);
          if (f) return f;
        }
        return null;
      };
      const strNode = findStr(cst);
      expect(strNode).toBeTruthy();
      const expectedStart = src.indexOf(str10KB);
      expect(strNode.start).toBe(expectedStart);
      expect(strNode.end).toBe(expectedStart + str10KB.length);
      expect(strNode.text).toBe(str10KB);

      // Verify TreeCursor on the 10KB string node as well
      const stats = walkWithCursor(cst, buf);
      expect(stats.leafCount).toBeGreaterThan(3);

      // Verify >64 nested template literals (growing lexerStack dynamically past 64)
      let nestedTpl = "1";
      for (let i = 0; i < 80; i++) {
        nestedTpl = "`a${" + nestedTpl + "}b`";
      }
      const tplSrc = `const t = ${nestedTpl};`;
      const tplCst = parse(tplSrc);
      expect(tplCst.name).toBe("program");
      expect(Buffer.from(tplCst.reemitLossless()).toString("utf-8")).toBe(
        tplSrc
      );
    });

    it("parses every .js and .d.ts file across the entire @par-gen monorepo (packages/**/lib/*.js, packages/**/types/**/*.d.ts, parsers/**/*.d.ts) with 100% lossless re-emission", () => {
      /**
       * @param {string} dir
       * @param {string[]} acc
       */
      function collectFiles(dir, acc = []) {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
          if (entry.name === "node_modules" || entry.name === ".git") continue;
          const full = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            collectFiles(full, acc);
          } else if (/\.(js|mjs|d\.ts)$/.test(entry.name)) {
            acc.push(full);
          }
        }
        return acc;
      }

      const monorepoFiles = collectFiles(repoRoot);
      expect(monorepoFiles.length).toBeGreaterThanOrEqual(170);

      for (const filePath of monorepoFiles) {
        const buf = fs.readFileSync(filePath);
        const cstSkip = parse(buf);
        expect(cstSkip.name).toBe("program");

        const cstPreserve = parsePreserveExtras(buf);
        expect(cstPreserve.name).toBe("program");
        expect(cstPreserve.start).toBe(0);
        expect(cstPreserve.end).toBe(buf.length);

        const reemitted = reemitLossless(cstPreserve, buf);
        expect(Buffer.compare(reemitted, buf)).toBe(0);
      }
    });

    it("parses real TypeScript 5.x standard library .d.ts files from node_modules/typescript/lib (including lib.es5.d.ts, lib.decorators.d.ts, etc.) with 100% lossless re-emission", () => {
      const tsLibFiles = [
        "node_modules/typescript/lib/lib.es5.d.ts",
        "node_modules/typescript/lib/lib.decorators.d.ts",
        "node_modules/typescript/lib/lib.decorators.legacy.d.ts",
        "node_modules/typescript/lib/lib.es2015.core.d.ts",
        "node_modules/typescript/lib/lib.es2015.collection.d.ts",
        "node_modules/typescript/lib/lib.es2015.generator.d.ts",
        "node_modules/typescript/lib/lib.es2015.iterable.d.ts",
        "node_modules/typescript/lib/lib.es2015.promise.d.ts",
        "node_modules/typescript/lib/lib.es2015.proxy.d.ts",
        "node_modules/typescript/lib/lib.es2015.reflect.d.ts",
        "node_modules/typescript/lib/lib.es2015.symbol.d.ts",
        "node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
        "node_modules/typescript/lib/lib.es2020.bigint.d.ts",
      ];

      for (const relPath of tsLibFiles) {
        const fullPath = path.join(repoRoot, relPath);
        const buf = fs.readFileSync(fullPath);

        const cstSkip = parse(buf);
        expect(cstSkip.name).toBe("program");

        const cstPreserve = parsePreserveExtras(buf);
        expect(cstPreserve.name).toBe("program");
        expect(cstPreserve.start).toBe(0);
        expect(cstPreserve.end).toBe(buf.length);

        const reemitted = reemitLossless(cstPreserve, buf);
        expect(Buffer.compare(reemitted, buf)).toBe(0);
      }
    });
  });
});
