export function primsAlgorithm(graph: number[][]): number[] {
  const n = graph.length
  const parent = new Array(n).fill(null)
  const key = new Array(n).fill(Infinity)
  const mstSet = new Array(n).fill(false)

  key[0] = 0
  parent[0] = -1

  for (let count = 0; count < n - 1; count++) {
    const u = minKey(key, mstSet)
    mstSet[u] = true

    for (let v = 0; v < n; v++) {
      if (graph[u][v] && mstSet[v] === false && graph[u][v] < key[v]) {
        parent[v] = u
        key[v] = graph[u][v]
      }
    }
  }

  return parent
}

function minKey(key: number[], mstSet: boolean[]): number {
  let min = Infinity
  let minIndex = -1

  for (let v = 0; v < key.length; v++) {
    if (mstSet[v] === false && key[v] < min) {
      min = key[v]
      minIndex = v
    }
  }

  return minIndex
}
