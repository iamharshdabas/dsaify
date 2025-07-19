function quickSort<T extends number | string>(arr: T[]): T[] {
  if (arr.length <= 1) {
    return arr
  }

  const pivot = arr[Math.floor(arr.length / 2)]
  if (pivot === undefined) {
    return arr // Should not happen due to arr.length <= 1 check
  }
  const left: T[] = []
  const right: T[] = []
  const equal: T[] = []

  for (const item of arr) {
    if (item < pivot) {
      left.push(item)
    } else if (item > pivot) {
      right.push(item)
    } else {
      equal.push(item)
    }
  }

  return [
    ...quickSort(left),
    ...equal,
    ...quickSort(right),
  ]
}

export default quickSort
