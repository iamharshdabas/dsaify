export function kosarajusAlgorithm(n: number, adj: number[][], revAdj: number[][]): number[][] {
  const visited: boolean[] = Array(n).fill(false)
  const order: number[] = []
  const sccs: number[][] = []

  function dfs1(u: number): void {
    visited[u] = true
    for (const v of adj[u]) {
      if (!visited[v]) {
        dfs1(v)
      }
    }
    order.push(u)
  }

  function dfs2(u: number, currentScc: number[]): void {
    visited[u] = true
    currentScc.push(u)
    for (const v of revAdj[u]) {
      if (!visited[v]) {
        dfs2(v, currentScc)
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs1(i)
    }
  }

  visited.fill(false)
  for (let i = n - 1; i >= 0; i--) {
    const u = order[i]
    if (!visited[u]) {
      const currentScc: number[] = []
      dfs2(u, currentScc)
      sccs.push(currentScc)
    }
  }

  return sccs
}
