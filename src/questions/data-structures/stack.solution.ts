export class Stack<T> {
  private items: T[]

  constructor() {
    this.items = []
  }

  push(item: T): void {
    this.items.push(item)
  }

  pop(): T {
    if (this.isEmpty()) {
      throw new Error("pop from empty stack")
    }
    return this.items.pop() as T
  }

  peek(): T {
    if (this.isEmpty()) {
      throw new Error("peek from empty stack")
    }
    return this.items[this.items.length - 1] as T
  }

  isEmpty(): boolean {
    return this.items.length === 0
  }

  size(): number {
    return this.items.length
  }
}
