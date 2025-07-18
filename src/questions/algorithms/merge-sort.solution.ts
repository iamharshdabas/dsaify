function mergeSort<T>(arr: T[]): T[] {
  if (arr.length <= 1) {
    return arr
  }

  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

function merge<T>(left: T[], right: T[]): T[] {
  const result: T[] = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex]! < right[rightIndex]!) {
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
