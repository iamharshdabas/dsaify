class DoublyLinkedListNode<T> {
  data: T
  next: DoublyLinkedListNode<T> | null
  prev: DoublyLinkedListNode<T> | null

  constructor(data: T) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

export class DoublyLinkedList<T> {
  head: DoublyLinkedListNode<T> | null
  tail: DoublyLinkedListNode<T> | null
  length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  add(data: T): void {
    const newNode = new DoublyLinkedListNode(data)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail!.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
  }

  remove(data: T): boolean {
    if (!this.head) {
      return false
    }

    let current = this.head
    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = current.next
          if (this.head) {
            this.head.prev = null
          } else {
            this.tail = null
          }
        } else if (current === this.tail) {
          this.tail = current.prev
          if (this.tail) {
            this.tail.next = null
          }
        } else {
          current.prev!.next = current.next
          current.next!.prev = current.prev
        }
        this.length--
        return true
      }
      current = current.next!
    }
    return false
  }

  size(): number {
    return this.length
  }

  printForward(): void {
    let current = this.head
    let result = ""
    while (current) {
      result += current.data + " <-> "
      current = current.next
    }
    result += "null"
    console.log(result)
  }

  printBackward(): void {
    let current = this.tail
    let result = ""
    while (current) {
      result += current.data + " <-> "
      current = current.prev!
    }
    result += "null"
    console.log(result)
  }
}
