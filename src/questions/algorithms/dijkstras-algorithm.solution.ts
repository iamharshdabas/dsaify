export function dijkstra(graph: number[][], startNode: number): number[] {
  const n = graph.length
  const dist = new Array(n).fill(Infinity)
  const visited = new Array(n).fill(false)

  dist[startNode] = 0

  for (let i = 0; i < n - 1; i++) {
    const u = minDistance(dist, visited)
    visited[u] = true

    for (let v = 0; v < n; v++) {
      if (!visited[v] && graph[u][v] !== 0 && dist[u] !== Infinity && dist[u] + graph[u][v] < dist[v]) {
        dist[v] = dist[u] + graph[u][v]
      }
    }
  }

  return dist
}

function minDistance(dist: number[], visited: boolean[]): number {
  let min = Infinity
  let minIndex = -1

  for (let v = 0; v < dist.length; v++) {
    if (visited[v] === false && dist[v] <= min) {
      min = dist[v]
      minIndex = v
    }
  }

  return minIndex
}
