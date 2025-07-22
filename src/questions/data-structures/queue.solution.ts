export class Queue<T> {
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

  public enqueue(item: T): void {
    this.items.push(item)
  }

  public dequeue(): T | null {
    const item = this.items.shift()
    return (item === undefined ? null : item) as T | null
  }

  public peek(): T | null {
    if (this.isEmpty()) {
      return null
    }
    return this.items[0]!
  }

  public clear(): void {
    this.items = []
  }
}
