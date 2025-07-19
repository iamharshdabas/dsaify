export function knapsackProblem(weights: number[], values: number[], capacity: number): number {
  const n = weights.length
  const dp: number[][] = Array(n + 1)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0))

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w])
      } else {
        dp[i][w] = dp[i - 1][w]
      }
    }
  }

  return dp[n][capacity]
}
