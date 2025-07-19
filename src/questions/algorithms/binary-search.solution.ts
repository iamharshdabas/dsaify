export function binarySearch<T>(sortedArray: T[], target: T): number {
  let left = 0
  let right = sortedArray.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const midValue = sortedArray[mid]

    if (midValue === target) {
      return mid
    }

    if (midValue < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}
