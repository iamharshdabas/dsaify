export class MinHeap {
  private heap: number[] = []

  insert(value: number): void {
    this.heap.push(value)
    this.bubbleUp()
  }

  extractMin(): number | undefined {
    if (this.heap.length === 0) return undefined
    if (this.heap.length === 1) return this.heap.pop()

    const min = this.heap[0]
    const popped = this.heap.pop()
    if (popped === undefined) {
      throw new Error("Heap is empty.")
    }
    this.heap[0] = popped
    this.sinkDown(0)
    return min
  }

  private bubbleUp(): void {
    let index = this.heap.length - 1
    while (index > 0) {
      const element = this.heap[index]
      const parentIndex = Math.floor((index - 1) / 2)
      const parent = this.heap[parentIndex]

      if (parent <= element) break

      this.heap[index] = parent
      this.heap[parentIndex] = element
      index = parentIndex
    }
  }

  private sinkDown(index: number): void {
    const leftChildIndex = 2 * index + 1
    const rightChildIndex = 2 * index + 2
    let smallest = index

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
      smallest = leftChildIndex
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
      smallest = rightChildIndex
    }

    if (smallest !== index) {
      ;[this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ]
      this.sinkDown(smallest)
    }
  }

  peek(): number | undefined {
    return this.heap[0]
  }

  size(): number {
    return this.heap.length
  }
}
