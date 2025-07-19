/**
 * @class DoublyLinkedListNode
 * @description Represents a node in the doubly linked list.
 * @template T The type of the value stored in the node.
 */
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

/**
 * @class DoublyLinkedList
 * @description A linear data structure where each node has a pointer to the next and previous node.
 * @template T The type of the values stored in the list.
 */
export class DoublyLinkedList<T> {
  public head: DoublyLinkedListNode<T> | null
  public tail: DoublyLinkedListNode<T> | null
  private length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  /**
   * @returns The number of nodes in the list.
   */
  public get size(): number {
    return this.length
  }

  /**
   * @returns `true` if the list is empty, `false` otherwise.
   */
  public isEmpty(): boolean {
    return this.length === 0
  }

  /**
   * @description Adds a new node with the given value to the end of the list.
   * @param value The value to add.
   */
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

  /**
   * @description Adds a new node with the given value to the beginning of the list.
   * @param value The value to add.
   */
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

  /**
   * @description Removes the last node from the list.
   * @returns The value of the removed node, or `null` if the list is empty.
   */
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

  /**
   * @description Removes the first node from the list.
   * @returns The value of the removed node, or `null` if the list is empty.
   */
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

  /**
   * @description Finds a node with the given value.
   * @param value The value to find.
   * @returns The node if found, `null` otherwise.
   */
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

  /**
   * @description Deletes a node with the given value.
   * @param value The value to delete.
   * @returns `true` if the node was deleted, `false` otherwise.
   */
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
}
