class DoublyLinkedListNode<T> {
  public value: T
  public next: DoublyLinkedListNode<T> | null
  public prev: DoublyLinkedListNode<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

export class DoublyLinkedList<T> {
  public head: DoublyLinkedListNode<T> | null
  public tail: DoublyLinkedListNode<T> | null
  private length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  public get size(): number {
    return this.length
  }

  public isEmpty(): boolean {
    return this.length === 0
  }

  public addTail(value: T): void {
    const newNode = new DoublyLinkedListNode(value)
    if (this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail!.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
  }

  public addHead(value: T): void {
    const newNode = new DoublyLinkedListNode(value)
    if (this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head!.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
  }

  public removeTail(): T | null {
    if (!this.tail) {
      return null
    }
    const value = this.tail.value
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail!.next = null
    }
    this.length--
    return value
  }

  public removeHead(): T | null {
    if (!this.head) {
      return null
    }
    const value = this.head.value
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      this.head!.prev = null
    }
    this.length--
    return value
  }

  public find(value: T): DoublyLinkedListNode<T> | null {
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
    const nodeToDelete = this.find(value)
    if (!nodeToDelete) {
      return false
    }

    if (nodeToDelete === this.head) {
      this.removeHead()
    } else if (nodeToDelete === this.tail) {
      this.removeTail()
    } else {
      nodeToDelete.prev!.next = nodeToDelete.next
      nodeToDelete.next!.prev = nodeToDelete.prev
      this.length--
    }
    return true
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
}
