import { describe, expect, it } from "@jest/globals";
import {
  parse,
  parsePreserveExtras,
  reemitLossless,
  CstNode,
  TreeCursor,
} from "./index.js";

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

describe("CSS Parser (@par-gen/css from tree-sitter-css)", () => {
  const documents = [
    {
      name: "design tokens, selectors, pseudo-classes, pseudo-elements, functions, and units",
      code: `/* Core theme variables and layout rules */
@charset "UTF-8";
@import "reset.css";

:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --surface-bg: rgb(255, 255, 255);
  --spacing-sm: 0.5rem;
  --spacing-md: 16px;
  --max-width: 1280px;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body.theme-dark > main#app-root .card[data-active="true"]:hover:not(:disabled) {
  background-color: var(--primary-color);
  color: #ffffff;
  width: calc(100% - 2rem);
  padding: 12px 24px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  transition: opacity 200ms ease-in-out !important;
}

ul > li:nth-child(2n+1)::after {
  content: " -> ";
  display: inline-block;
  font-weight: 700;
}
`,
    },
    {
      name: "@media queries, @supports feature queries, and @keyframes animations",
      code: `@media screen and (min-width: 768px) and (max-width: 1440px) {
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
  }

  .sidebar + .content ~ .footer {
    margin-top: 32px;
  }
}

@supports (display: grid) or (display: flex) {
  .layout-shell {
    display: grid;
    min-height: 100vh;
  }
}

@keyframes fadeInSlide {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  50% {
    opacity: 0.5;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`,
    },
  ];

  for (const doc of documents) {
    it(`parses ${doc.name} and losslessly re-emits 100% of bytes`, () => {
      const buf = Buffer.from(doc.code, "utf8");
      const cst = parse(buf);
      expect(cst).toBeInstanceOf(CstNode);
      expect(cst.name).toBe("stylesheet");
      const stats = walkWithCursor(cst, buf);
      expect(stats.nodeCount).toBeGreaterThan(10);

      const cstPreserve = parsePreserveExtras(buf);
      expect(cstPreserve.name).toBe("stylesheet");
      walkWithCursor(cstPreserve, buf);
      const reemitted = reemitLossless(cstPreserve, buf);
      expect(Buffer.compare(Buffer.from(reemitted), buf)).toBe(0);
    });
  }

  it("parses and losslessly re-emits a >45KB CSS stylesheet bundle (parseCold path)", () => {
    const unit = documents.map((d) => d.code).join("\n");
    const largeCode = Array.from({ length: 40 }, () => unit).join("\n");
    const buf = Buffer.from(largeCode, "utf8");
    expect(buf.length).toBeGreaterThan(45000);

    const cst = parse(buf);
    expect(cst.name).toBe("stylesheet");

    const cstPreserve = parsePreserveExtras(buf);
    const reemitted = reemitLossless(cstPreserve, buf);
    expect(Buffer.compare(Buffer.from(reemitted), buf)).toBe(0);
  });

  it("rejects invalid CSS syntax", () => {
    expect(() => parse(".box { color: #123456")).toThrow();
    expect(() => parse("@media (min-width: ) { .a { color: red; } }")).toThrow();
  });
});
