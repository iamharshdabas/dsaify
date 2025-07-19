import { expect, test } from "bun:test"
import { dfs } from "../../src/questions/algorithms/dfs.solution" // Assuming dfs.solution.ts exports a dfs function

test("DFS should correctly traverse a simple graph", () => {
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
  const result = dfs(graph, startNode)
  // DFS traversal order can vary based on adjacency list order, but all reachable nodes should be visited
  expect(result).toContain("A")
  expect(result).toContain("B")
  expect(result).toContain("C")
  expect(result).toContain("D")
  expect(result).toContain("E")
  expect(result).toContain("F")
  expect(result.length).toBe(6)
})

test("DFS should handle a graph with a single node", () => {
  const graph = {
    A: [],
  }
  const startNode = "A"
  const expectedTraversal = [
    "A",
  ]
  const result = dfs(graph, startNode)
  expect(result).toEqual(expectedTraversal)
})

test("DFS should handle a disconnected graph", () => {
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
  const result = dfs(graph, startNode)
  expect(result).toContain("A")
  expect(result).toContain("B")
  expect(result.length).toBe(2)
})

test("DFS should handle a graph with cycles", () => {
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
  const result = dfs(graph, startNode)
  expect(result).toContain("A")
  expect(result).toContain("B")
  expect(result).toContain("C")
  expect(result.length).toBe(3)
})

test("DFS should return an empty array for an empty graph", () => {
  const graph = {}
  const startNode = "A"
  const expectedTraversal: string[] = []
  const result = dfs(graph, startNode)
  expect(result).toEqual(expectedTraversal)
})

test("DFS should find a path between two nodes", () => {
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
  const targetNode = "F"

  // Assuming DFS is modified to return true if path exists, or the path itself
  // For a standard DFS that returns traversal order, this test might need adjustment
  const result = dfs(graph, startNode)
  expect(result).toContain(targetNode)
})
