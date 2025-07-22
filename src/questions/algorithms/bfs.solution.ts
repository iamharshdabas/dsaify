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
    const currentNode = queue.shift()!
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
