export function zAlgorithm(text: string, pattern: string): number[] {
  const s = `${pattern}$${text}`
  const n = s.length
  const m = pattern.length
  const z: number[] = Array(n).fill(0)
  const occurrences: number[] = []

  let l = 0
  let r = 0

  for (let i = 1; i < n; i++) {
    if (i <= r) {
      z[i] = Math.min(r - i + 1, z[i - l])
    }
    while (i + z[i] < n && s[z[i]] === s[i + z[i]]) {
      z[i]++
    }
    if (i + z[i] - 1 > r) {
      l = i
      r = i + z[i] - 1
    }

    if (z[i] === m) {
      occurrences.push(i - m - 1)
    }
  }

  return occurrences
}
