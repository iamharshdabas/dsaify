class Node<T> {
  public value: T
  public next: Node<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

export class LinkedList<T> {
  public head: Node<T> | null
  private length: number

  constructor() {
    this.head = null
    this.length = 0
  }

  public get size(): number {
    return this.length
  }

  public isEmpty(): boolean {
    return this.length === 0
  }

  public add(value: T): void {
    const newNode = new Node(value)
    if (this.isEmpty()) {
      this.head = newNode
    } else {
      let current = this.head!
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.length++
  }

  public find(value: T): Node<T> | null {
    let current = this.head
    while (current) {
      if (current.value === value) {
        return current
      }
      current = current.next
    }
    return null
  }

  public delete(value: T): boolean {
    if (!this.head) {
      return false
    }

    if (this.head.value === value) {
      this.head = this.head.next
      this.length--
      return true
    }

    let current = this.head
    while (current.next && current.next.value !== value) {
      current = current.next
    }

    if (current.next) {
      current.next = current.next.next
      this.length--
      return true
    }

    return false
  }

  public toArray(): T[] {
    const result: T[] = []
    let current = this.head
    while (current) {
      result.push(current.value)
      current = current.next
    }
    return result
  }

  public clear(): void {
    this.head = null
    this.length = 0
  }
}
