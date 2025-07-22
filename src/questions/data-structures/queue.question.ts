import type { Question } from "../../types"

const queueQuestion: Question = {
  category: "data-structures",
  level: "Easy",
  solution:
    "export class Queue<T> {\n  private items: T[]\n\n  constructor() {\n    this.items = []\n  }\n\n  public get size(): number {\n    return this.items.length\n  }\n\n  public isEmpty(): boolean {\n    return this.items.length === 0\n  }\n\n  public enqueue(item: T): void {\n    this.items.push(item)\n  }\n\n  public dequeue(): T | null {\n    const item = this.items.shift()\n    return (item === undefined ? null : item) as T | null\n  }\n\n  public peek(): T | null {\n    if (this.isEmpty()) {\n      return null\n    }\n    return this.items[0]!\n  }\n\n  public clear(): void {\n    this.items = []\n  }\n}",
  synopsis:
    "Queue\n\nWhat is a Queue?\n\nA queue is a linear data structure that follows the First-In, First-Out (FIFO) principle. This means that the first element added to the queue will be the first one to be removed. It is analogous to a real-world queue of people waiting in line, where the person who gets in line first is the first one to be served.\n\nHow it Works:\n\n- A queue has two main operations: `enqueue` and `dequeue`.\n- `enqueue`: Adds an element to the rear of the queue.\n- `dequeue`: Removes an element from the front of the queue.\n- A `peek` operation is often included to view the element at the front of the queue without removing it.\n- Queues can be implemented using arrays or linked lists.\n\nHow to Implement it:\n\n1.  **Queue Class:** Create a `Queue` class with an `items` property, which is an array.\n2.  **`enqueue` Method:**\n    - Use the `push` method of the array to add an element to the end.\n3.  **`dequeue` Method:**\n    - Use the `shift` method of the array to remove and return the first element.\n4.  **`peek` Method:**\n    - Return the element at the first index of the array.\n5.  **Helper Methods:**\n    - `isEmpty`: Checks if the queue is empty.\n    - `size`: Returns the number of elements in the queue.\n\nHints:\n\n- Using an array to implement a queue is simple, but the `shift` operation can be inefficient for large queues as it requires re-indexing all the remaining elements.\n- For a more performant queue, especially for a large number of elements, a linked list implementation is often preferred.\n- Queues are widely used in computer science for tasks such as scheduling, buffering, and implementing algorithms like Breadth-First Search (BFS).",
  title: "Queue",
}

export default queueQuestion
