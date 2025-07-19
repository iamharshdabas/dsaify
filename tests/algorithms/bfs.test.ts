import { expect, test } from "bun:test"
import { bfs } from "../../src/questions/algorithms/bfs.solution" // Assuming bfs.solution.ts exports a bfs function

// Helper function to convert adjacency list to a more testable format if needed
// For example, if your BFS returns a path or visited order

test("BFS should correctly traverse a simple graph", () => {
  const graph = {
    A: [
      "B",
      "C",
    ],
    B: [
      "D",
      "E",
    ],
    C: [
      "F",
    ],
    D: [],
    E: [
      "F",
    ],
    F: [],
  }
  const startNode = "A"
  const expectedTraversal = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ] // Example expected order
  const result = bfs(graph, startNode)
  expect(result).toEqual(expectedTraversal)
})

test("BFS should handle a graph with a single node", () => {
  const graph = {
    A: [],
  }
  const startNode = "A"
  const expectedTraversal = [
    "A",
  ]
  const result = bfs(graph, startNode)
  expect(result).toEqual(expectedTraversal)
})

test("BFS should handle a disconnected graph", () => {
  const graph = {
    A: [
      "B",
    ],
    B: [],
    C: [
      "D",
    ],
    D: [],
  }
  const startNode = "A"
  const expectedTraversal = [
    "A",
    "B",
  ]
  const result = bfs(graph, startNode)
  expect(result).toEqual(expectedTraversal)
})

test("BFS should handle a graph with cycles", () => {
  const graph = {
    A: [
      "B",
    ],
    B: [
      "C",
    ],
    C: [
      "A",
    ],
  }
  const startNode = "A"
  const expectedTraversal = [
    "A",
    "B",
    "C",
  ] // Order depends on implementation, but should visit all reachable nodes once
  const result = bfs(graph, startNode)
  expect(result).toEqual(expectedTraversal)
})

test("BFS should return an empty array for an empty graph", () => {
  const graph = {}
  const startNode = "A" // Start node might not exist in an empty graph
  const expectedTraversal: string[] = []
  const result = bfs(graph, startNode)
  expect(result).toEqual(expectedTraversal)
})

test("BFS should confirm reachability of a node in an unweighted graph", () => {
  const graph = {
    A: [
      "B",
      "C",
    ],
    B: [
      "D",
    ],
    C: [
      "E",
    ],
    D: [
      "F",
    ],
    E: [
      "F",
    ],
    F: [],
  }
  const startNode = "A"
  const targetNode = "F"

  const result = bfs(graph, startNode)
  expect(result).toContain(targetNode)
})
