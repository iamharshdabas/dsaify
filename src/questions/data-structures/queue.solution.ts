/**
 * @class Queue
 * @description A linear data structure that follows the First-In, First-Out (FIFO) principle.
 * @template T The type of the values stored in the queue.
 */
export class Queue<T> {
  private items: T[]

  constructor() {
    this.items = []
  }

  /**
   * @returns The number of elements in the queue.
   */
  public get size(): number {
    return this.items.length
  }

  /**
   * @returns `true` if the queue is empty, `false` otherwise.
   */
  public isEmpty(): boolean {
    return this.items.length === 0
  }

  /**
   * @description Adds a new element to the end of the queue.
   * @param item The element to add.
   */
  public enqueue(item: T): void {
    this.items.push(item)
  }

  /**
   * @description Removes and returns the element at the front of the queue.
   * @returns The element at the front of the queue, or `null` if the queue is empty.
   */
  public dequeue(): T | null {
    if (this.isEmpty()) {
      return null
    }
    return this.items.shift()!
  }

  /**
   * @description Returns the element at the front of the queue without removing it.
   * @returns The element at the front of the queue, or `null` if the queue is empty.
   */
  public peek(): T | null {
    if (this.isEmpty()) {
      return null
    }
    return this.items[0]
  }

  /**
   * @description Removes all elements from the queue.
   */
  public clear(): void {
    this.items = []
  }
}
