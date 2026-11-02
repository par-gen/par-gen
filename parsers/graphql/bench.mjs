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
  const GraphQL = require("tree-sitter-graphql");
  tsParser = new Parser();
  tsParser.setLanguage(GraphQL);
} catch {}

let graphqlJsParse = null;
try {
  graphqlJsParse = require("graphql/language/parser").parse;
} catch {}

const smallQuery = `# GitHub repository query
query GetRepo($owner: String!, $name: String!, $first: Int = 20) {
  repository(owner: $owner, name: $name) {
    id
    name
    description
    stargazerCount
    forkCount
    isArchived
    defaultBranchRef {
      name
      target {
        ... on Commit {
          oid
          messageHeadline
          committedDate
          author {
            name
            email
          }
        }
      }
    }
    issues(first: $first, states: [OPEN]) {
      totalCount
      edges {
        cursor
        node {
          ...IssueSummary
        }
      }
    }
  }
}

fragment IssueSummary on Issue {
  id
  number
  title
  createdAt
  author {
    login
  }
}
`;

const schemaUnit = `
directive @auth(requires: Role = ADMIN) on OBJECT | FIELD_DEFINITION

enum Role {
  ADMIN
  EDITOR
  VIEWER
}

interface Node {
  id: ID!
}

type User implements Node @auth(requires: VIEWER) {
  id: ID!
  username: String!
  email: String
  role: Role!
  posts(limit: Int = 20, offset: Int = 0): [Post!]!
}

type Post implements Node {
  id: ID!
  title: String!
  content: String!
  author: User!
}

input CreatePostInput {
  title: String!
  content: String!
  tags: [String!] = ["general"]
}

type Query {
  node(id: ID!): Node
  users(first: Int = 10): [User!]!
}
`;

const mediumSchema = Array.from({ length: 16 }, (_, i) =>
  schemaUnit
    .replace(/\bUser\b/g, `User_${i}`)
    .replace(/\bPost\b/g, `Post_${i}`)
    .replace(/\bNode\b/g, `Node_${i}`)
    .replace(/\bRole\b/g, `Role_${i}`)
    .replace(/\bCreatePostInput\b/g, `CreatePostInput_${i}`)
    .replace(/\bQuery\b/g, `Query_${i}`)
    .replace(/@auth/g, `@auth_${i}`)
).join("\n");

const largeSchema = Array.from({ length: 220 }, (_, i) =>
  schemaUnit
    .replace(/\bUser\b/g, `User_${i}`)
    .replace(/\bPost\b/g, `Post_${i}`)
    .replace(/\bNode\b/g, `Node_${i}`)
    .replace(/\bRole\b/g, `Role_${i}`)
    .replace(/\bCreatePostInput\b/g, `CreatePostInput_${i}`)
    .replace(/\bQuery\b/g, `Query_${i}`)
    .replace(/@auth/g, `@auth_${i}`)
).join("\n");

const workloads = [
  {
    name: "Small GraphQL Query (1.0 KiB)",
    code: smallQuery,
    buf: Buffer.from(smallQuery, "utf8"),
    iters: 2000,
  },
  {
    name: "Medium GraphQL SDL Schema (10.5 KiB)",
    code: mediumSchema,
    buf: Buffer.from(mediumSchema, "utf8"),
    iters: 300,
  },
  {
    name: "Large GraphQL SDL Bundle (146 KiB)",
    code: largeSchema,
    buf: Buffer.from(largeSchema, "utf8"),
    iters: 25,
  },
];

function median(arr) {
  const s = [...arr].sort((a, b) => a - b);
  const mid = s.length >> 1;
  return s.length % 2 !== 0 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

const ROUNDS = 7;

console.log("=== Interleaved Benchmark: @par-gen/graphql vs native tree-sitter-graphql vs graphql-js ===\n");

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
            name: "tree-sitter-graphql (C N-API)",
            fn: () => tsParser.parse(w.code),
          },
        ]
      : []),
    ...(graphqlJsParse
      ? [
          {
            name: "graphql-js (parse)",
            fn: () => graphqlJsParse(w.code, { noLocation: false }),
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
