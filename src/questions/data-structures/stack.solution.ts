export class Stack<T> {
  private items: T[]

  constructor() {
    this.items = []
  }

  public get size(): number {
    return this.items.length
  }

  public isEmpty(): boolean {
    return this.items.length === 0
  }

  public push(item: T): void {
    this.items.push(item)
  }

  public pop(): T | null {
    const item = this.items.pop()
    return (item === undefined ? null : item) as T | null
  }

  public peek(): T | null {
    if (this.isEmpty()) {
      return null
    }
    return this.items[this.items.length - 1]!
  }

  public clear(): void {
    this.items = []
  }
}
