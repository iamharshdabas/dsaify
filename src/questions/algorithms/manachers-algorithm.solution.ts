export function manachersAlgorithm(s: string): string {
  if (s.length === 0) return ""

  let t = "^#"
  for (const char of s) {
    t += `${char}#`
  }
  t += "$"

  const n = t.length
  const p: number[] = Array(n).fill(0)
  let c = 0 // center of the current palindrome
  let r = 0 // right boundary of the current palindrome
  let maxLen = 0
  let centerIndex = 0

  for (let i = 1; i < n - 1; i++) {
    const mirror = 2 * c - i
    if (i < r) {
      p[i] = Math.min(r - i, p[mirror])
    }

    // Attempt to expand palindrome centered at i
    let a = i + (1 + p[i])
    let b = i - (1 + p[i])
    while (t[a] === t[b]) {
      p[i]++
      a++
      b--
    }

    // If palindrome centered at i expands past R, adjust C and R
    if (i + p[i] > r) {
      c = i
      r = i + p[i]
    }

    if (p[i] > maxLen) {
      maxLen = p[i]
      centerIndex = i
    }
  }

  const startIndex = (centerIndex - maxLen) / 2
  return s.substring(startIndex, startIndex + maxLen)
}
