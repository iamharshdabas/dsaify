/**
 * @class MinHeap
 * @description A binary heap data structure that maintains the min-heap property.
 */
export class MinHeap {
  private heap: number[]

  constructor() {
    this.heap = []
  }

  /**
   * @returns The number of elements in the heap.
   */
  public get size(): number {
    return this.heap.length
  }

  /**
   * @returns `true` if the heap is empty, `false` otherwise.
   */
  public isEmpty(): boolean {
    return this.size === 0
  }

  /**
   * @description Adds a new element to the heap.
   * @param item The element to add.
   */
  public insert(item: number): void {
    this.heap.push(item)
    this.heapifyUp()
  }

  /**
   * @description Removes and returns the minimum element from the heap.
   * @returns The minimum element, or `null` if the heap is empty.
   */
  public extractMin(): number | null {
    if (this.isEmpty()) {
      return null
    }
    if (this.size === 1) {
      return this.heap.pop()!
    }
    const min = this.heap[0]
    this.heap[0] = this.heap.pop()!
    this.heapifyDown()
    return min
  }

  /**
   * @description Restores the min-heap property by moving the last element up.
   */
  private heapifyUp(): void {
    let index = this.size - 1
    while (this.hasParent(index) && this.parent(index)! > this.heap[index]) {
      this.swap(this.getParentIndex(index), index)
      index = this.getParentIndex(index)
    }
  }

  /**
   * @description Restores the min-heap property by moving the root element down.
   */
  private heapifyDown(): void {
    let index = 0
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index)
      if (this.hasRightChild(index) && this.rightChild(index)! < this.leftChild(index)!) {
        smallerChildIndex = this.getRightChildIndex(index)
      }

      if (this.heap[index] < this.heap[smallerChildIndex]) {
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
    ;[this.heap[i], this.heap[j]] = [
      this.heap[j],
      this.heap[i],
    ]
  }
}
