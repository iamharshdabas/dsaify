import type { Graph } from "../data-structures/graph.solution"
import { Queue } from "../data-structures/queue.solution"

export function bfs<T>(graph: Graph<T>, startNode: T): T[] {
  const visited: Set<T> = new Set()
  const queue = new Queue<T>()
  const result: T[] = []

  visited.add(startNode)
  queue.enqueue(startNode)

  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue()!
    result.push(currentNode)

    const neighbors = graph.getNeighbors(currentNode)
    if (neighbors) {
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor)
          queue.enqueue(neighbor)
        }
      }
    }
  }
  return result
}
