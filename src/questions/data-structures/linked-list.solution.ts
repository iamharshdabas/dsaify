class ListNode<T> {
  public value: T
  public next: ListNode<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

export class LinkedList<T> {
  private head: ListNode<T> | null = null
  private tail: ListNode<T> | null = null
  private length = 0

  append(value: T) {
    const newNode = new ListNode(value)
    if (!this.head || !this.tail) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  prepend(value: T) {
    const newNode = new ListNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  delete(value: T) {
    if (!this.head) return null

    let deletedNode = null
    while (this.head && this.head.value === value) {
      deletedNode = this.head
      this.head = this.head.next
    }

    let currentNode = this.head
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
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

    let currentNode: ListNode<T> | null = this.head
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }
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
