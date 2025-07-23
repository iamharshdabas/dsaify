export class MinHeap<T> {
  private heap: T[]
  private comparator: (a: T, b: T) => number

  constructor(
    comparator: (a: T, b: T) => number = (a, b) => {
      if (typeof a === "number" && typeof b === "number") {
        return a - b
      }
      if (typeof a === "string" && typeof b === "string") {
        return a.localeCompare(b)
      }
      if (a instanceof Date && b instanceof Date) {
        return a.getTime() - b.getTime()
      }
      return 0
    },
  ) {
    this.heap = []
    this.comparator = comparator
  }

  public get size(): number {
    return this.heap.length
  }

  public isEmpty(): boolean {
    return this.size === 0
  }

  public insert(item: T): void {
    this.heap.push(item)
    this.heapifyUp()
  }

  public extractMin(): T | null {
    if (this.isEmpty()) {
      return null
    }
    if (this.size === 1) {
      const val = this.heap.pop()
      return val === undefined ? null : val
    }
    const min = this.heap[0] as T
    const lastElement = this.heap.pop()
    if (lastElement !== undefined) {
      this.heap[0] = lastElement
    }
    this.heapifyDown()
    return min
  }

  public peek(): T | null {
    if (this.isEmpty()) {
      return null
    }
    return this.heap[0] as T
  }

  private heapifyUp(): void {
    let index = this.size - 1
    while (this.hasParent(index) && this.comparator(this.parent(index)!, this.heap[index]!) > 0) {
      this.swap(this.getParentIndex(index), index)
      index = this.getParentIndex(index)
    }
  }

  private heapifyDown(): void {
    let index = 0
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index)
      if (this.hasRightChild(index) && this.comparator(this.rightChild(index)!, this.leftChild(index)!) < 0) {
        smallerChildIndex = this.getRightChildIndex(index)
      }

      if (this.comparator(this.heap[index]!, this.heap[smallerChildIndex]!) < 0) {
        break
      }

      this.swap(index, smallerChildIndex)
      index = smallerChildIndex
    }
  }

  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2)
  }

  private getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1
  }

  private getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2
  }

  private hasParent(index: number): boolean {
    return this.getParentIndex(index) >= 0
  }

  private hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.size
  }

  private hasRightChild(index: number): boolean {
    return this.getRightChildIndex(index) < this.size
  }

  private parent(index: number): T | undefined {
    return this.heap[this.getParentIndex(index)]
  }

  private leftChild(index: number): T | undefined {
    return this.heap[this.getLeftChildIndex(index)]
  }

  private rightChild(index: number): T | undefined {
    return this.heap[this.getRightChildIndex(index)]
  }

  private swap(i: number, j: number): void {
    const temp = this.heap[i]!
    this.heap[i] = this.heap[j]!
    this.heap[j] = temp
  }

  public clear(): void {
    this.heap = []
  }
}
