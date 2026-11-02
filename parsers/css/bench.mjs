import { performance } from "perf_hooks";
import { createRequire } from "module";
import { parse, parsePreserveExtras } from "./index.js";

const require = createRequire(import.meta.url);

/**
 * Full TreeCursor DFS traversal visiting every node and reading symbolId, start, end.
 * @param {import("./index.js").CstNode} root
 */
function traverseCursor(root) {
  const cursor = root.cursor();
  let count = 0;
  while (true) {
    count += cursor.isLeaf ? cursor.end - cursor.start : cursor.symbolId;
    if (cursor.gotoFirstChild()) {
      continue;
    }
    while (true) {
      if (cursor.gotoNextSibling()) {
        break;
      }
      if (!cursor.gotoParent()) {
        return count;
      }
    }
  }
}

let tsParser = null;
try {
  const Parser = require("tree-sitter");
  let CSS;
  try {
    CSS = require("tree-sitter-css");
  } catch {
    CSS = (await import("tree-sitter-css")).default;
  }
  tsParser = new Parser();
  tsParser.setLanguage(CSS);
} catch {}

let postcssParse = null;
try {
  postcssParse = require("postcss").parse;
} catch {}

let csstreeParse = null;
try {
  csstreeParse = require("css-tree").parse;
} catch {}

const smallCss = `/* Core theme variables and layout rules */
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

@media screen and (min-width: 768px) and (max-width: 1440px) {
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
  }

  .sidebar + .content ~ .footer {
    margin-top: 32px;
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
`;

const mediumCss = Array.from({ length: 14 }, () => smallCss).join("\n");
const largeCss = Array.from({ length: 160 }, () => smallCss).join("\n");

const workloads = [
  {
    name: "Small CSS Component (1.0 KiB)",
    code: smallCss,
    buf: Buffer.from(smallCss, "utf8"),
    iters: 1500,
  },
  {
    name: "Medium CSS Design System (14.2 KiB)",
    code: mediumCss,
    buf: Buffer.from(mediumCss, "utf8"),
    iters: 200,
  },
  {
    name: "Large CSS Bundle (163 KiB)",
    code: largeCss,
    buf: Buffer.from(largeCss, "utf8"),
    iters: 20,
  },
];

function median(arr) {
  const s = [...arr].sort((a, b) => a - b);
  const mid = s.length >> 1;
  return s.length % 2 !== 0 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

const ROUNDS = 7;

console.log("=== Interleaved Benchmark: @par-gen/css vs native tree-sitter-css vs postcss vs css-tree ===\n");

for (const w of workloads) {
  const candidates = [
    {
      name: "par-gen (SkipExtras)",
      fn: () => parse(w.buf),
    },
    {
      name: "par-gen (SkipExtras + Cursor)",
      fn: () => traverseCursor(parse(w.buf)),
    },
    {
      name: "par-gen (PreserveExtras)",
      fn: () => parsePreserveExtras(w.buf),
    },
    ...(tsParser
      ? [
          {
            name: "tree-sitter-css (C N-API)",
            fn: () => tsParser.parse(w.code),
          },
        ]
      : []),
    ...(postcssParse
      ? [
          {
            name: "postcss (parse)",
            fn: () => postcssParse(w.code),
          },
        ]
      : []),
    ...(csstreeParse
      ? [
          {
            name: "css-tree (parse)",
            fn: () => csstreeParse(w.code),
          },
        ]
      : []),
  ];

  for (const c of candidates) {
    for (let i = 0; i < Math.max(5, w.iters >> 2); i++) {
      c.fn();
    }
  }

  const samples = new Map(candidates.map((c) => [c.name, []]));

  for (let r = 0; r < ROUNDS; r++) {
    for (let cIdx = 0; cIdx < candidates.length; cIdx++) {
      const c = candidates[(cIdx + r) % candidates.length];
      const t0 = performance.now();
      for (let i = 0; i < w.iters; i++) {
        c.fn();
      }
      const elapsedMs = performance.now() - t0;
      samples.get(c.name).push(elapsedMs / w.iters);
    }
  }

  console.log(`### ${w.name} (${(w.buf.length / 1024).toFixed(2)} KiB, ${w.iters} iters x ${ROUNDS} rounds)`);
  const baseMs = median(samples.get("par-gen (SkipExtras)"));
  for (const c of candidates) {
    const medMs = median(samples.get(c.name));
    const opsPerSec = 1000 / medMs;
    const mbPerSec = (w.buf.length / (1024 * 1024)) * opsPerSec;
    const ratio = medMs / baseMs;
    console.log(
      `  ${c.name.padEnd(30)} | ${(medMs * 1000).toFixed(1).padStart(9)} us | ${opsPerSec.toFixed(0).padStart(8)} ops/s | ${mbPerSec.toFixed(2).padStart(7)} MB/s | ${ratio.toFixed(2)}x`
    );
  }
  console.log("");
}
