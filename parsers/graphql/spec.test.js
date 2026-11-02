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

describe("GraphQL Parser (@par-gen/graphql from tree-sitter-graphql)", () => {
  const documents = [
    {
      name: "executable queries, variables, aliases, arguments, directives, and fragments",
      code: `# GraphQL query with variables, directives, and fragments
query GetRepository($owner: String!, $name: String!, $first: Int = 10, $withForks: Boolean = false) @cached(ttl: 60) {
  repository(owner: $owner, name: $name) {
    id
    nameWithOwner: name
    description
    stargazerCount
    isArchived
    issues(first: $first, states: [OPEN, CLOSED], filterBy: { labels: ["bug", "perf"] }) {
      totalCount
      edges {
        cursor
        node {
          ...IssueFields
          ... on Issue @include(if: $withForks) {
            comments(first: 5) {
              nodes {
                author {
                  login
                }
                bodyText
              }
            }
          }
        }
      }
    }
  }
}

fragment IssueFields on Issue {
  id
  number
  title
  state
  createdAt
}
`,
    },
    {
      name: "mutations and subscriptions with complex input objects",
      code: `mutation CreateRelease($input: CreateReleaseInput!) {
  createRelease(input: $input) {
    release {
      id
      tagName
      isDraft
      isPrerelease
    }
  }
}

subscription OnIssueCommentAdded($repoId: ID!) {
  issueCommentAdded(repositoryId: $repoId) {
    id
    body
  }
}
`,
    },
    {
      name: "SDL schema definitions, types, interfaces, unions, enums, inputs, and directives",
      code: `schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

scalar DateTime
scalar JSON

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
  publishedAt: DateTime
  author: User!
  metadata: JSON
}

union SearchResult = User | Post

input CreatePostInput {
  title: String!
  content: String!
  tags: [String!] = ["general"]
}

type Query {
  node(id: ID!): Node
  search(text: String!, limit: Int = 10): [SearchResult!]!
}

type Mutation {
  createPost(input: CreatePostInput!): Post! @auth(requires: EDITOR)
}

type Subscription {
  postCreated: Post!
}
`,
    },
  ];

  for (const doc of documents) {
    it(`parses ${doc.name} and losslessly re-emits 100% of bytes`, () => {
      const buf = Buffer.from(doc.code, "utf8");
      const cst = parse(buf);
      expect(cst).toBeInstanceOf(CstNode);
      expect(cst.name).toBe("source_file");
      const stats = walkWithCursor(cst, buf);
      expect(stats.nodeCount).toBeGreaterThan(10);

      const cstPreserve = parsePreserveExtras(buf);
      expect(cstPreserve.name).toBe("source_file");
      walkWithCursor(cstPreserve, buf);
      const reemitted = reemitLossless(cstPreserve, buf);
      expect(Buffer.compare(Buffer.from(reemitted), buf)).toBe(0);
    });
  }

  it("parses and losslessly re-emits a >45KB multi-schema GraphQL bundle (parseCold path)", () => {
    const unit = documents.map((d) => d.code).join("\n");
    const largeCode = Array.from({ length: 25 }, () => unit).join("\n");
    const buf = Buffer.from(largeCode, "utf8");
    expect(buf.length).toBeGreaterThan(45000);

    const cst = parse(buf);
    expect(cst.name).toBe("source_file");

    const cstPreserve = parsePreserveExtras(buf);
    const reemitted = reemitLossless(cstPreserve, buf);
    expect(Buffer.compare(Buffer.from(reemitted), buf)).toBe(0);
  });

  it("rejects invalid GraphQL syntax", () => {
    expect(() => parse("query { user(")).toThrow();
    expect(() => parse("type User { id: }")).toThrow();
    expect(() => parse("fragment on User { id }")).toThrow();
  });
});
