export function kadanesAlgorithm(arr: number[]): number {
  let maxSoFar = -Infinity
  let maxEndingHere = 0

  for (let i = 0; i < arr.length; i++) {
    maxEndingHere += arr[i]
    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere
    }
    if (maxEndingHere < 0) {
      maxEndingHere = 0
    }
  }

  return maxSoFar
}
