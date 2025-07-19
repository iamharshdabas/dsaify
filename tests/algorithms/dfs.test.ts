import { expect, test } from "bun:test"
import { dfs } from "../../src/questions/algorithms/dfs.solution"

test("DFS on a simple graph", () => {
  const graph = new Map<string, string[]>()
  graph.set("A", [
    "B",
    "C",
  ])
  graph.set("B", [
    "D",
    "E",
  ])
  graph.set("C", [
    "F",
  ])
  graph.set("D", [])
  graph.set("E", [
    "F",
  ])
  graph.set("F", [])

  const result = dfs(graph, "A")
  expect(result).toEqual([
    "A",
    "B",
    "D",
    "E",
    "F",
    "C",
  ])
})

test("DFS on a graph with a single node", () => {
  const graph = new Map<string, string[]>()
  graph.set("A", [])

  const result = dfs(graph, "A")
  expect(result).toEqual([
    "A",
  ])
})

test("DFS on an empty graph", () => {
  const graph = new Map<string, string[]>()

  const result = dfs(graph, "A")
  expect(result).toEqual([])
})

test("DFS on a disconnected graph", () => {
  const graph = new Map<string, string[]>()
  graph.set("A", [
    "B",
  ])
  graph.set("B", [
    "A",
  ])
  graph.set("C", [
    "D",
  ])
  graph.set("D", [
    "C",
  ])

  const result = dfs(graph, "A")
  expect(result).toEqual([
    "A",
    "B",
  ])
})

test("DFS with cycles", () => {
  const graph = new Map<string, string[]>()
  graph.set("A", [
    "B",
    "C",
  ])
  graph.set("B", [
    "A",
    "D",
  ])
  graph.set("C", [
    "A",
    "D",
  ])
  graph.set("D", [
    "B",
    "C",
  ])

  const result = dfs(graph, "A")
  // The exact order might vary slightly depending on iteration order of Map keys,
  // but all reachable nodes should be present and in a valid DFS order.
  // For example, A -> B -> D -> C is a valid DFS order.
  expect(result).toEqual([
    "A",
    "B",
    "D",
    "C",
  ])
})
