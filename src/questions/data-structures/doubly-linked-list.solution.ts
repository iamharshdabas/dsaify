class DoublyListNode<T> {
  public value: T
  public next: DoublyListNode<T> | null
  public prev: DoublyListNode<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

export class DoublyLinkedList<T> {
  private head: DoublyListNode<T> | null = null
  private tail: DoublyListNode<T> | null = null
  private length = 0

  append(value: T) {
    const newNode = new DoublyListNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      if (!this.tail) {
        throw new Error("Doubly Linked List: Tail is null.")
      }
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  prepend(value: T) {
    const newNode = new DoublyListNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  delete(value: T) {
    if (!this.head) return null

    let deletedNode: DoublyListNode<T> | null = null
    while (this.head && this.head.value === value) {
      deletedNode = this.head
      this.head = this.head.next
      if (this.head) this.head.prev = null
    }

    let currentNode = this.head
    while (currentNode?.next) {
      if (currentNode.next.value === value) {
        deletedNode = currentNode.next
        currentNode.next = currentNode.next.next
        if (currentNode.next) {
          currentNode.next.prev = currentNode
        }
      } else {
        currentNode = currentNode.next
      }
    }

    if (this.tail?.value === value) {
      this.tail = currentNode
    }

    if (deletedNode) {
      this.length--
    }

    return deletedNode
  }

  find(value: T) {
    if (!this.head) return null
    let currentNode: DoublyListNode<T> | null = this.head
    while (currentNode) {
      if (currentNode.value === value) return currentNode
      currentNode = currentNode.next
    }
    return null
  }

  toArray() {
    const nodes = []
    let currentNode = this.head
    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }
    return nodes
  }

  size() {
    return this.length
  }
}
