/**
 * @class Node
 * @description Represents a node in the linked list.
 * @template T The type of the value stored in the node.
 */
class Node<T> {
  public value: T
  public next: Node<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

/**
 * @class LinkedList
 * @description A linear data structure where each node points to the next node.
 * @template T The type of the values stored in the list.
 */
export class LinkedList<T> {
  public head: Node<T> | null
  private length: number

  constructor() {
    this.head = null
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

  /**
   * @description Finds a node with the given value.
   * @param value The value to find.
   * @returns The node if found, `null` otherwise.
   */
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

  /**
   * @description Deletes a node with the given value.
   * @param value The value to delete.
   * @returns `true` if the node was deleted, `false` otherwise.
   */
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

  /**
   * @description Converts the linked list to an array.
   * @returns An array containing the values of the linked list.
   */
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
