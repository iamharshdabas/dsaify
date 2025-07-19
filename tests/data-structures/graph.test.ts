import { expect, test } from "bun:test"
import { Graph } from "../../src/questions/data-structures/graph.solution" // Assuming graph.solution.ts exports a Graph class

test("Graph should be empty on initialization", () => {
  const graph = new Graph()
  expect(graph.nodes.size).toBe(0)
})

test("Graph should add nodes", () => {
  const graph = new Graph()
  graph.addNode("A")
  expect(graph.nodes.has("A")).toBeTrue()
  expect(graph.nodes.get("A")?.size).toBe(0)
})

test("Graph should not add duplicate nodes", () => {
  const graph = new Graph()
  graph.addNode("A")
  graph.addNode("A")
  expect(graph.nodes.size).toBe(1)
})

test("Graph should add edges between existing nodes", () => {
  const graph = new Graph()
  graph.addNode("A")
  graph.addNode("B")
  graph.addEdge("A", "B")
  expect(graph.nodes.get("A")?.has("B")).toBeTrue()
  expect(graph.nodes.get("B")?.has("A")).toBeTrue() // Assuming undirected graph
})

test("Graph should not add edge if nodes do not exist", () => {
  const graph = new Graph()
  graph.addNode("A")
  graph.addEdge("A", "B") // B does not exist
  expect(graph.nodes.get("A")?.has("B")).toBeFalse()
})

test("Graph should remove nodes", () => {
  const graph = new Graph()
  graph.addNode("A")
  graph.addNode("B")
  graph.addEdge("A", "B")
  graph.removeNode("A")
  expect(graph.nodes.has("A")).toBeFalse()
  expect(graph.nodes.get("B")?.has("A")).toBeFalse()
})

test("Graph should remove edges", () => {
  const graph = new Graph()
  graph.addNode("A")
  graph.addNode("B")
  graph.addEdge("A", "B")
  graph.removeEdge("A", "B")
  expect(graph.nodes.get("A")?.has("B")).toBeFalse()
  expect(graph.nodes.get("B")?.has("A")).toBeFalse()
})

test("Graph should perform BFS traversal", () => {
  const graph = new Graph()
  graph.addNode("A")
  graph.addNode("B")
  graph.addNode("C")
  graph.addNode("D")
  graph.addNode("E")
  graph.addEdge("A", "B")
  graph.addEdge("A", "C")
  graph.addEdge("B", "D")
  graph.addEdge("C", "E")

  const bfsResult: string[] = []
  graph.bfs("A", (node) => bfsResult.push(node))
  expect(bfsResult).toEqual([
    "A",
    "B",
    "C",
    "D",
    "E",
  ]) // Assuming a specific order for BFS
})

test("Graph should perform DFS traversal", () => {
  const graph = new Graph()
  graph.addNode("A")
  graph.addNode("B")
  graph.addNode("C")
  graph.addNode("D")
  graph.addNode("E")
  graph.addEdge("A", "B")
  graph.addEdge("A", "C")
  graph.addEdge("B", "D")
  graph.addEdge("C", "E")

  const dfsResult: string[] = []
  graph.dfs("A", (node) => dfsResult.push(node))
  // DFS order can vary, but all reachable nodes should be present
  expect(dfsResult).toContain("A")
  expect(dfsResult).toContain("B")
  expect(dfsResult).toContain("C")
  expect(dfsResult).toContain("D")
  expect(dfsResult).toContain("E")
  expect(dfsResult.length).toBe(5)
})
