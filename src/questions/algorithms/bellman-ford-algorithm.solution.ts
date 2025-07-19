export function bellmanFord(graph: number[][], startNode: number): number[] | null {
  const n = graph.length
  const dist = new Array(n).fill(Infinity)
  dist[startNode] = 0

  for (let i = 0; i < n - 1; i++) {
    for (let u = 0; u < n; u++) {
      for (let v = 0; v < n; v++) {
        if (graph[u][v] !== 0 && dist[u] !== Infinity && dist[u] + graph[u][v] < dist[v]) {
          dist[v] = dist[u] + graph[u][v]
        }
      }
    }
  }

  // Check for negative cycles
  for (let u = 0; u < n; u++) {
    for (let v = 0; v < n; v++) {
      if (graph[u][v] !== 0 && dist[u] !== Infinity && dist[u] + graph[u][v] < dist[v]) {
        return null // Negative cycle detected
      }
    }
  }

  return dist
}
