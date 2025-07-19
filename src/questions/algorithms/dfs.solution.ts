import type { Graph } from "../data-structures/graph.solution"

export function dfs<T>(graph: Graph<T>, startNode: T): T[] {
  const visited: Set<T> = new Set()
  const result: T[] = []

  function dfsRecursive(currentNode: T): void {
    visited.add(currentNode)
    result.push(currentNode)

    const neighbors = graph.getNeighbors(currentNode)
    if (neighbors) {
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfsRecursive(neighbor)
        }
      }
    }
  }

  dfsRecursive(startNode)
  return result
}
