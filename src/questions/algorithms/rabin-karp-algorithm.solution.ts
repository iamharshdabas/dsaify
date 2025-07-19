export function rabinKarp(text: string, pattern: string): number[] {
  const n = text.length
  const m = pattern.length
  const occurrences: number[] = []
  const prime = 101 // A prime number
  const R = 256 // Radix (number of characters in the alphabet)

  if (m === 0 || m > n) return occurrences

  let patternHash = 0
  let textHash = 0
  let h = 1 // R^(m-1) % prime

  for (let i = 0; i < m - 1; i++) {
    h = (h * R) % prime
  }

  // Calculate hash for pattern and first window of text
  for (let i = 0; i < m; i++) {
    patternHash = (R * patternHash + pattern.charCodeAt(i)) % prime
    textHash = (R * textHash + text.charCodeAt(i)) % prime
  }

  // Slide the pattern over text one by one
  for (let i = 0; i <= n - m; i++) {
    if (patternHash === textHash) {
      // Check for characters one by one
      let match = true
      for (let j = 0; j < m; j++) {
        if (text[i + j] !== pattern[j]) {
          match = false
          break
        }
      }
      if (match) {
        occurrences.push(i)
      }
    }

    // Calculate hash for next window of text
    if (i < n - m) {
      textHash = (R * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime
      if (textHash < 0) {
        textHash += prime
      }
    }
  }

  return occurrences
}
