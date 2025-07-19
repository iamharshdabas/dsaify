export class MinHeap {
  private heap: number[] = []

  getParentIndex(i: number): number {
    return Math.floor((i - 1) / 2)
  }

  getLeftChildIndex(i: number): number {
    return 2 * i + 1
  }

  getRightChildIndex(i: number): number {
    return 2 * i + 2
  }

  hasParent(i: number): boolean {
    return this.getParentIndex(i) >= 0
  }

  hasLeftChild(i: number): boolean {
    return this.getLeftChildIndex(i) < this.heap.length
  }

  hasRightChild(i: number): boolean {
    return this.getRightChildIndex(i) < this.heap.length
  }

  getParent(i: number): number | undefined {
    return this.heap[this.getParentIndex(i)]
  }

  getLeftChild(i: number): number | undefined {
    return this.heap[this.getLeftChildIndex(i)]
  }

  getRightChild(i: number): number | undefined {
    return this.heap[this.getRightChildIndex(i)]
  }

  swap(i: number, j: number): void {
    ;[this.heap[i]!, this.heap[j]!] = [
      this.heap[j]!,
      this.heap[i]!,
    ]
  }

  peek(): number | undefined {
    if (this.heap.length === 0) {
      return undefined
    }
    return this.heap[0]
  }

  insert(item: number): void {
    this.heap.push(item)
    this.heapifyUp()
  }

  extractMin(): number | undefined {
    if (this.heap.length === 0) {
      return undefined
    }
    if (this.heap.length === 1) {
      return this.heap.pop()!
    }

    const item = this.heap[0]
    this.heap[0] = this.heap.pop()!
    this.heapifyDown()
    return item
  }

  heapifyUp(): void {
    let index = this.heap.length - 1
    while (this.hasParent(index) && this.getParent(index)! > this.heap[index]!) {
      this.swap(this.getParentIndex(index), index)
      index = this.getParentIndex(index)
    }
  }

  heapifyDown(): void {
    let index = 0
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index)
      if (this.hasRightChild(index) && this.getRightChild(index)! < this.getLeftChild(index)!) {
        smallerChildIndex = this.getRightChildIndex(index)
      }

      if (this.heap[index]! < this.heap[smallerChildIndex]!) {
        break
      } else {
        this.swap(index, smallerChildIndex)
      }
      index = smallerChildIndex
    }
  }

  size(): number {
    return this.heap.length
  }

  isEmpty(): boolean {
    return this.heap.length === 0
  }
}
