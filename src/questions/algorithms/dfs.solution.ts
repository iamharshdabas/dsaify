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
