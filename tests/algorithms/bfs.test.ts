import { expect, test } from "bun:test"
import { bfs } from "../../src/questions/algorithms/bfs.solution"

test("BFS on a simple graph", () => {
  const graph = new Map<string, string[]>()
  graph.set("A", [
    "B",
    "C",
  ])
  graph.set("B", [
    "A",
    "D",
    "E",
  ])
  graph.set("C", [
    "A",
    "F",
  ])
  graph.set("D", [
    "B",
  ])
  graph.set("E", [
    "B",
    "F",
  ])
  graph.set("F", [
    "C",
    "E",
  ])

  const result = bfs(graph, "A")
  expect(result).toEqual([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ])
})

test("BFS on a graph with a single node", () => {
  const graph = new Map<string, string[]>()
  graph.set("A", [])

  const result = bfs(graph, "A")
  expect(result).toEqual([
    "A",
  ])
})

test("BFS on an empty graph", () => {
  const graph = new Map<string, string[]>()

  const result = bfs(graph, "A")
  expect(result).toEqual([])
})

test("BFS on a disconnected graph", () => {
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

  const result = bfs(graph, "A")
  expect(result).toEqual([
    "A",
    "B",
  ])
})
