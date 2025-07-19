/**
 * @function bfs
 * @description Performs a Breadth-First Search (BFS) on a graph.
 * @param graph The graph represented as an adjacency list (Map where keys are nodes and values are arrays of their neighbors).
 * @param startNode The node from which to start the BFS traversal.
 * @returns An array of nodes in the order they were visited during the BFS traversal.
 * @template T The type of the nodes in the graph.
 */
export function bfs<T>(graph: Map<T, T[]>, startNode: T): T[] {
  const visited = new Set<T>()
  const queue: T[] = []
  const result: T[] = []

  if (!graph.has(startNode)) {
    return result
  }

  visited.add(startNode)
  queue.push(startNode)

  while (queue.length > 0) {
    const currentNode = queue.shift()! // Dequeue the first node
    result.push(currentNode)

    const neighbors = graph.get(currentNode)
    if (neighbors) {
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor)
          queue.push(neighbor)
        }
      }
    }
  }
  return result
}
