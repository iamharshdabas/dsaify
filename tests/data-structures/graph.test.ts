import { expect, test } from "bun:test"
import { Graph } from "../../src/questions/data-structures/graph.solution"

test("Graph should be empty on initialization", () => {
  const graph = new Graph()
  expect(graph.nodes.size).toBe(0)
})

test("Graph should add vertices", () => {
  const graph = new Graph()
  graph.addVertex("A")
  expect(graph.nodes.has("A")).toBeTrue()
  expect(graph.nodes.get("A")).toEqual([])
})

test("Graph should not add duplicate vertices", () => {
  const graph = new Graph()
  graph.addVertex("A")
  graph.addVertex("A")
  expect(graph.nodes.size).toBe(1)
})

test("Graph should add edges between existing vertices", () => {
  const graph = new Graph()
  graph.addVertex("A")
  graph.addVertex("B")
  graph.addEdge("A", "B")
  expect(graph.nodes.get("A")?.includes("B")).toBeTrue()
  expect(graph.nodes.get("B")?.includes("A")).toBeTrue()
})

test("Graph should add edges for non-existent vertices", () => {
  const graph = new Graph<string>()
  graph.addEdge("A", "B")
  expect(graph.nodes.has("A")).toBeTrue()
  expect(graph.nodes.has("B")).toBeTrue()
  expect(graph.nodes.get("A")?.includes("B")).toBeTrue()
  expect(graph.nodes.get("B")?.includes("A")).toBeTrue()
})

test("Graph should remove vertices", () => {
  const graph = new Graph()
  graph.addVertex("A")
  graph.addVertex("B")
  graph.addEdge("A", "B")
  graph.removeVertex("A")
  expect(graph.nodes.has("A")).toBeFalse()
  expect(graph.nodes.get("B")?.includes("A")).toBeFalse()
})

test("Graph should remove edges", () => {
  const graph = new Graph()
  graph.addVertex("A")
  graph.addVertex("B")
  graph.addEdge("A", "B")
  graph.removeEdge("A", "B")
  expect(graph.nodes.get("A")?.includes("B")).toBeFalse()
  expect(graph.nodes.get("B")?.includes("A")).toBeFalse()
})
