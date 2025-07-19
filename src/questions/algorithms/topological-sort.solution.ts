export function topologicalSort(graph: Map<string, string[]>): string[] {
  const visited = new Set<string>()
  const recursionStack = new Set<string>()
  const result: string[] = []

  for (const vertex of graph.keys()) {
    if (dfs(vertex, visited, recursionStack, result, graph)) {
      // Cycle detected, topological sort not possible
      return []
    }
  }

  return result.reverse()
}

function dfs(
  vertex: string,
  visited: Set<string>,
  recursionStack: Set<string>,
  result: string[],
  graph: Map<string, string[]>,
): boolean {
  visited.add(vertex)
  recursionStack.add(vertex)

  for (const neighbor of graph.get(vertex) || []) {
    if (!visited.has(neighbor)) {
      if (dfs(neighbor, visited, recursionStack, result, graph)) {
        return true
      }
    } else if (recursionStack.has(neighbor)) {
      return true
    }
  }

  recursionStack.delete(vertex)
  result.push(vertex)
  return false
}
