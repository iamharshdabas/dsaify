/**
 * @function dfs
 * @description Performs a Depth-First Search (DFS) on a graph.
 * @param graph The graph represented as an adjacency list (Map where keys are nodes and values are arrays of their neighbors).
 * @param startNode The node from which to start the DFS traversal.
 * @returns An array of nodes in the order they were visited during the DFS traversal.
 * @template T The type of the nodes in the graph.
 */
export function dfs<T>(graph: Map<T, T[]>, startNode: T): T[] {
  const visited = new Set<T>()
  const result: T[] = []

  if (!graph.has(startNode)) {
    return result
  }

  const dfsRecursive = (currentNode: T) => {
    visited.add(currentNode)
    result.push(currentNode)

    const neighbors = graph.get(currentNode)
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
