/**
 * @class Stack
 * @description A linear data structure that follows the Last-In, First-Out (LIFO) principle.
 * @template T The type of the values stored in the stack.
 */
export class Stack<T> {
  private items: T[]

  constructor() {
    this.items = []
  }

  /**
   * @returns The number of elements in the stack.
   */
  public get size(): number {
    return this.items.length
  }

  /**
   * @returns `true` if the stack is empty, `false` otherwise.
   */
  public isEmpty(): boolean {
    return this.items.length === 0
  }

  /**
   * @description Adds a new element to the top of the stack.
   * @param item The element to add.
   */
  public push(item: T): void {
    this.items.push(item)
  }

  /**
   * @description Removes and returns the element at the top of the stack.
   * @returns The element at the top of the stack, or `null` if the stack is empty.
   */
  public pop(): T | null {
    const item = this.items.pop()
    return (item === undefined ? null : item) as T | null
  }

  /**
   * @description Returns the element at the top of the stack without removing it.
   * @returns The element at the top of the stack, or `null` if the stack is empty.
   */
  public peek(): T | null {
    if (this.isEmpty()) {
      return null
    }
    return this.items[this.items.length - 1]!
  }

  /**
   * @description Removes all elements from the stack.
   */
  public clear(): void {
    this.items = []
  }
}
