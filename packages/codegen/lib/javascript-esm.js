import { promises as fsp } from "fs";
import { basename, dirname, extname, join, relative } from "path";
import prettier from "prettier";

import { JavaScriptBaseCodegen } from "./javascript.js";

/**
 * @typedef {import('./type').LexerData} LexerData
 */

/**
 * @typedef {import('@par-gen/parser/types/parser').Lexers} Lexers
 */

/**
 * @typedef {import('./type').ParserData} ParserData
 */

export class JavaScriptModuleCodegen extends JavaScriptBaseCodegen {
  /**
   * @param {Object} options
   * @param {string} options.lexerFile
   * @param {string} options.parserFile
   * @param {boolean=} options.debug
   * @param {boolean=} options.equivalenceClasses
   */
  constructor(options) {
    super(options);
  }

  /**
   * @protected
   * @returns {string}
   */
  _parserDtsFile() {
    const dir = dirname(this.options.parserFile);
    const ext = extname(this.options.parserFile);
    const base = basename(this.options.parserFile, ext);
    return join(dir, `${base}.d.ts`);
  }

  /**
   * @public
   * @param {ParserData} data
   * @returns {Promise<void>}
   */
  async parser(data) {
    await super.parser(data);

    const dtsCode = this._parserDtsCode(data);
    const dtsFile = this._parserDtsFile();

    await fsp.mkdir(dirname(dtsFile), { recursive: true });
    await fsp.writeFile(dtsFile, dtsCode);
  }

  /**
   * @private
   * @param {ParserData} data
   * @returns {string}
   */
  _parserDtsCode(data) {
    const { rules, parserSymbols, lexerData } = data;

    const ruleNames = Array.from(new Set(rules.map((r) => r.name)));
    const ruleNamesSet = new Set(["S", ...ruleNames]);

    const tokenNames = Array.from(
      new Set(
        [
          ...parserSymbols,
          ...Object.values(lexerData).flatMap((l) => l.tokenNames),
        ].filter(
          /** @returns {s is string} */
          (s) => Boolean(s) && !ruleNamesSet.has(/** @type {string} */ (s))
        )
      )
    );

    const tokenUnion =
      tokenNames.length > 0
        ? tokenNames.map((t) => JSON.stringify(t)).join(" | ")
        : "never";
    const ruleUnion =
      ruleNames.length > 0
        ? ruleNames.map((r) => JSON.stringify(r)).join(" | ")
        : "never";
    const startRuleType =
      ruleNames.length > 0 ? JSON.stringify(ruleNames[0]) : "SymbolName";

    const ruleChildrenEntries = ruleNames
      .map((ruleName) => {
        const rhsTuples = Array.from(
          new Set(
            rules
              .filter((r) => r.name === ruleName)
              .map(
                (r) =>
                  `[${r.symbols
                    .map((sym) => `CstNode<${JSON.stringify(sym)}>`)
                    .join(", ")}]`
              )
          )
        );
        return `${JSON.stringify(ruleName)}: ${
          rhsTuples.length > 0 ? rhsTuples.join(" | ") : "CstNode[]"
        };`;
      })
      .join("\n");

    const dtsFile = this._parserDtsFile();
    const code = `
      export type TokenName = ${tokenUnion};
      export type RuleName = ${ruleUnion};
      export type SymbolName = TokenName | RuleName;
      export type NodeName = SymbolName;
      export type StartRuleName = ${startRuleType};

      export interface SourceLocation {
        readonly line: number;
        readonly column: number;
      }

      export interface LineIndex {
        locationForOffset(offset: number): SourceLocation;
      }

      export declare const LineIndex: {
        new (input: Uint8Array | string): LineIndex;
      };

      export interface ParseSyntaxError extends SyntaxError {
        readonly line: number;
        readonly column: number;
        readonly offset: number;
        readonly endOffset: number;
        readonly found: SymbolName | string;
        readonly tokenText: string;
        readonly expected: TokenName[];
      }

      export interface TreeCursor {
        readonly name: SymbolName;
        readonly symbolId: number;
        readonly childCount: number;
        readonly isLeaf: boolean;
        readonly start: number;
        readonly end: number;
        readonly value: Uint8Array;
        readonly text: string;
        readonly pointer: number;
        readonly depth: number;
        reset(): boolean;
        gotoFirstChild(): boolean;
        gotoNextSibling(): boolean;
        gotoParent(): boolean;
        currentNode(): CstNode;
      }

      export declare const TreeCursor: {
        new (
          stream: Uint8Array,
          tree: Uint32Array,
          pointer: number
        ): TreeCursor;
      };

      export interface CstNode<Name extends SymbolName = SymbolName> {
        readonly name: Name;
        readonly symbolId: number;
        readonly childCount: number;
        readonly isLeaf: boolean;
        readonly start: number;
        readonly end: number;
        readonly value: Uint8Array;
        readonly text: string;
        readonly firstChild: CstNode | undefined;
        readonly lastChild: CstNode | undefined;
        readonly items: CstNode[] | undefined;
        readonly __tree: Uint32Array;
        readonly __pointer: number;
        child(index: number): CstNode | undefined;
        childByName<ChildName extends SymbolName>(
          name: ChildName
        ): CstNode<ChildName> | undefined;
        childrenByName<ChildName extends SymbolName>(
          name: ChildName
        ): CstNode<ChildName>[];
        cursor(): TreeCursor;
        toSExpr(includeText?: boolean): string;
        toJSON(): {
          name: Name;
          start: number;
          end: number;
          value: Uint8Array;
          items: ReturnType<CstNode["toJSON"]>[] | undefined;
        };
      }

      export declare const CstNode: {
        new <Name extends SymbolName = SymbolName>(
          stream: Uint8Array,
          tree: Uint32Array,
          pointer: number
        ): CstNode<Name>;
      };

      export type TokenNode<Name extends TokenName = TokenName> = CstNode<Name> & {
        readonly items: undefined;
      };

      export interface RuleChildrenMap {
        ${ruleChildrenEntries}
      }

      export type RuleNode<Name extends RuleName = RuleName> = CstNode<Name> & {
        readonly items: RuleChildrenMap[Name];
      };

      export type TypedCstNode =
        | { [K in TokenName]: TokenNode<K> }[TokenName]
        | { [K in RuleName]: RuleNode<K> }[RuleName];

      export type Node = CstNode;

      export function parse(input: Uint8Array | string): CstNode<StartRuleName>;
    `;

    return prettier.format(code, {
      filepath: dtsFile,
    });
  }

  _lexerExport() {
    return `
      export { EOF, ERROR, next };
    `;
  }

  /**
   * @param {Lexers} lexers
   */
  _parserImports(lexers) {
    return `
    ${Object.keys(lexers)
      .map(
        (name) =>
          `import { next as nextToken${this._lexerModePascalCase(
            name
          )} } from './${relative(
            dirname(this.options.parserFile),
            this._lexerStateFile(name)
          )}';`
      )
      .join("\n")}
    `;
  }

  _parserExports() {
    return `
      export { parse, CstNode, TreeCursor, LineIndex };
    `;
  }
}
