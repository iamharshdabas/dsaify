import type { Question } from "../../types"

const stackQuestion: Question = {
  category: "data-structures",
  level: "Easy",
  solution:
    "export class Stack<T> {\n  private items: T[]\n\n  constructor() {\n    this.items = []\n  }\n\n  public get size(): number {\n    return this.items.length\n  }\n\n  public isEmpty(): boolean {\n    return this.items.length === 0\n  }\n\n  public push(item: T): void {\n    this.items.push(item)\n  }\n\n  public pop(): T | null {\n    const item = this.items.pop()\n    return (item === undefined ? null : item) as T | null\n  }\n\n  public peek(): T | null {\n    if (this.isEmpty()) {\n      return null\n    }\n    return this.items[this.items.length - 1]!\n  }\n\n  public clear(): void {\n    this.items = []\n  }\n}",
  synopsis:
    "Stack\n\nWhat is a Stack?\n\nA stack is a linear data structure that follows the Last-In, First-Out (LIFO) principle. This means that the last element added to the stack will be the first one to be removed. It is analogous to a stack of plates, where you can only add or remove plates from the top.\n\nHow it Works:\n\n- A stack has two main operations: `push` and `pop`.\n- `push`: Adds an element to the top of the stack.\n- `pop`: Removes an element from the top of the stack.\n- A `peek` operation is often included to view the element at the top of the stack without removing it.\n- Stacks can be implemented using arrays or linked lists.\n\nHow to Implement it:\n\n1.  **Stack Class:** Create a `Stack` class with an `items` property, which is an array.\n2.  **`push` Method:**\n    - Use the `push` method of the array to add an element to the end (top).\n3.  **`pop` Method:**\n    - Use the `pop` method of the array to remove and return the last element.\n4.  **`peek` Method:**\n    - Return the last element of the array.\n5.  **Helper Methods:**\n    - `isEmpty`: Checks if the stack is empty.\n    - `size`: Returns the number of elements in the stack.\n\nHints:\n\n- Using an array to implement a stack is very efficient, as the `push` and `pop` operations on an array have a time complexity of O(1).\n- Stacks are used in a wide variety of applications, including function call management (the call stack), expression evaluation (e.g., converting infix to postfix notation), and backtracking algorithms like Depth-First Search (DFS).",
  title: "Stack",
}

export default stackQuestion
