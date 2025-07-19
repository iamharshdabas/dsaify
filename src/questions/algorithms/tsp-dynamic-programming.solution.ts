export function tspDynamicProgramming(graph: number[][]): number {
  const n = graph.length
  const dp: number[][] = Array(1 << n)
    .fill(0)
    .map(() => Array(n).fill(Infinity))

  dp[1][0] = 0 // Base case: starting at node 0, mask is 00...01

  // Iterate over all masks (subsets of cities)
  for (let mask = 1; mask < 1 << n; mask++) {
    // Iterate over all cities in the current mask
    for (let i = 0; i < n; i++) {
      // If city i is in the current mask
      if (mask & (1 << i)) {
        // Iterate over all previous cities j in the mask
        for (let j = 0; j < n; j++) {
          if (i !== j && mask & (1 << j)) {
            dp[mask][i] = Math.min(dp[mask][i], dp[mask ^ (1 << i)][j] + graph[j][i])
          }
        }
      }
    }
  }

  let minCost = Infinity
  const allVisitedMask = (1 << n) - 1

  // Find the minimum cost to return to the starting city (node 0)
  for (let i = 1; i < n; i++) {
    minCost = Math.min(minCost, dp[allVisitedMask][i] + graph[i][0])
  }

  return minCost
}
