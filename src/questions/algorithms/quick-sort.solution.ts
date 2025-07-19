function quickSort<T extends number | string>(arr: T[], low: number = 0, high: number = arr.length - 1): T[] {
  if (low < high) {
    const pivotIndex = partition(arr, low, high)
    quickSort(arr, low, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, high)
  }
  return arr
}

function partition<T extends number | string>(arr: T[], low: number, high: number): number {
  const pivot = arr[high]!
  let i = low - 1

  for (let j = low; j < high; j++) {
    if (arr[j]! <= pivot) {
      i++
      ;[arr[i]!, arr[j]!] = [
        arr[j]!,
        arr[i]!,
      ] // Swap
    }
  }

  ;[arr[i + 1]!, arr[high]!] = [
    arr[high]!,
    arr[i + 1]!,
  ] // Swap pivot to its correct position
  return i + 1
}

export default quickSort
