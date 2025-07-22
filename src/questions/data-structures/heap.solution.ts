export class MinHeap {
  private heap: number[]

  constructor() {
    this.heap = []
  }

  public get size(): number {
    return this.heap.length
  }

  public isEmpty(): boolean {
    return this.size === 0
  }

  public insert(item: number): void {
    this.heap.push(item)
    this.heapifyUp()
  }

  public extractMin(): number | null {
    if (this.isEmpty()) {
      return null
    }
    if (this.size === 1) {
      const val = this.heap.pop()
      return val === undefined ? null : val
    }
    const min = this.heap[0] as number
    const lastElement = this.heap.pop()
    if (lastElement !== undefined) {
      this.heap[0] = lastElement
    }
    this.heapifyDown()
    return min
  }

  private heapifyUp(): void {
    let index = this.size - 1
    while (this.hasParent(index) && (this.parent(index) as number) > this.heap[index]!) {
      this.swap(this.getParentIndex(index), index)
      index = this.getParentIndex(index)
    }
  }

  private heapifyDown(): void {
    let index = 0
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index)
      if (this.hasRightChild(index) && (this.rightChild(index) as number) < (this.leftChild(index) as number)) {
        smallerChildIndex = this.getRightChildIndex(index)
      }

      if (this.heap[index]! < this.heap[smallerChildIndex]!) {
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

  private parent(index: number): number | undefined {
    return this.heap[this.getParentIndex(index)]
  }

  private leftChild(index: number): number | undefined {
    return this.heap[this.getLeftChildIndex(index)]
  }

  private rightChild(index: number): number | undefined {
    return this.heap[this.getRightChildIndex(index)]
  }

  private swap(i: number, j: number): void {
    const temp = this.heap[i]!
    this.heap[i] = this.heap[j]!
    this.heap[j] = temp
  }
}
