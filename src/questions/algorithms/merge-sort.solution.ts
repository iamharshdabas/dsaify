function mergeSort<T>(arr: T[], comparator: (a: T, b: T) => number): T[] {
  if (arr.length <= 1) {
    return arr
  }

  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return merge(mergeSort(left, comparator), mergeSort(right, comparator), comparator)
}

function merge<T>(left: T[], right: T[], comparator: (a: T, b: T) => number): T[] {
  const result: T[] = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (comparator(left[leftIndex]!, right[rightIndex]!) <= 0) {
      result.push(left[leftIndex]!)
      leftIndex++
    } else {
      result.push(right[rightIndex]!)
      rightIndex++
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

export default mergeSort
