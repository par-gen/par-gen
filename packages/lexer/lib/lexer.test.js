import * as vm from "vm";

import { lexer } from "./lexer.js";

describe("lexer", () => {
  describe("with function codegen", () => {
    it("should create a lexer which is executable as evaluated function", () => {
      const grammar = `
      A := 'ab|ac';
      B := 'b';
      C := 'c';
      D := 'd';
    `;
      const code = lexer(grammar, { codegen: { module: "function" } });
      /**
       * @type {{EOF: symbol, next(input: Uint8Array, offset: number): {state: string | symbol, start: number, end: number}}}
       */
      const { EOF, next } = Function(code)();

      const input = new Uint8Array(Buffer.from("abbz"));

      [
        // match
        [
          {
            state: "A",
            start: 0,
            end: 2,
          },
          0,
        ],
        // match
        [
          {
            state: "B",
            start: 2,
            end: 3,
          },
          2,
        ],
        // miss
        [
          {
            state: EOF,
            start: -1,
            end: -1,
          },
          3,
        ],
      ].forEach(([expected, offset]) => {
        const matched = next(input, /** @type {number} */ (offset));
        expect(matched).toEqual(expected);
      });
    });

    it("should create a lexer with support for escaped tokens", () => {
      const grammar = `
      A := '\\|';
    `;
      const code = lexer(grammar, { codegen: { module: "function" } });
      /**
       * @type {{next(input: Uint8Array, offset: number): {success: boolean, state?: string, value?: string}}}
       */
      const { next } = Function(code)();

      const input = new Uint8Array(Buffer.from("|"));

      const matched = next(input, /** @type {number} */ (0));

      expect(matched).toEqual({
        state: "A",
        start: 0,
        end: 1,
      });
    });
  });

  describe("with ESM codegen", () => {
    it("should be possible to write a lexer into a file", async () => {
      let results;
      /** @type {(_results: *) => void}  */
      const output = (_results) => {
        results = _results;
      };

      const grammar = `
        A := 'abc';
      `;
      const code = lexer(grammar, { codegen: { module: "esm" } });

      // note: this is not available in the typescript typings currently
      const SourceTextModule = /** @type {*} */ (vm).SourceTextModule;
      const context = vm.createContext({
        output,
        Buffer,
      });

      const module = new SourceTextModule(
        `
          import { next } from 'lexer-module';

          const input = new Uint8Array(Buffer.from("abc"));
          const matched = next(input, 0);

          output(matched);
        `,
        { context }
      );

      await module.link(
        /**
         * @param {string} specifier
         * @param {*} referencingModule
         */
        function (specifier, referencingModule) {
          if (specifier === "lexer-module") {
            return new SourceTextModule(code, {
              context: referencingModule.context,
            });
          }
          throw new Error(`Unable to resolve dependency: ${specifier}`);
        }
      );

      await module.evaluate();

      expect(results).toEqual({
        state: "A",
        start: 0,
        end: 3,
      });
    });
  });

  describe("with commonjs codegen", () => {
    it("should be possible to write a lexer into a file", async () => {
      let results;
      /** @type {(_results: *) => void}  */
      const output = (_results) => {
        results = _results;
      };

      const grammar = `
        A := 'abc';
      `;
      const code = lexer(grammar, { codegen: { module: "commonjs" } });

      const context = vm.createContext({
        output,
        Buffer,
        /**
         * @param {string} id
         */
        require(id) {
          if (id === "lexer-module") {
            const context = vm.createContext({ module: {} });
            new vm.Script(code).runInContext(context);
            return context.module.exports;
          }
          throw new Error(`Unable to resolve dependency: ${id}`);
        },
      });

      const script = new vm.Script(
        `
          const { next } = require('lexer-module');

          const input = new Uint8Array(Buffer.from("abc"));
          const matched = next(input, 0);

          output(matched);
        `
      );

      script.runInContext(context);

      expect(results).toEqual({
        state: "A",
        start: 0,
        end: 3,
      });
    });
  });
});
