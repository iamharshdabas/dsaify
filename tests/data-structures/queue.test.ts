import { expect, test } from "bun:test"
import { Queue } from "../../src/questions/data-structures/queue.solution" // Assuming queue.solution.ts exports a Queue class

test("Queue should be empty on initialization", () => {
  const queue = new Queue()
  expect(queue.isEmpty()).toBeTrue()
  expect(queue.size()).toBe(0)
})

test("Queue should enqueue elements", () => {
  const queue = new Queue()
  queue.enqueue(1)
  expect(queue.size()).toBe(1)
  expect(queue.peek()).toBe(1)
  queue.enqueue(2)
  expect(queue.size()).toBe(2)
  expect(queue.peek()).toBe(1)
})

test("Queue should dequeue elements in FIFO order", () => {
  const queue = new Queue()
  queue.enqueue(1)
  queue.enqueue(2)
  expect(queue.dequeue()).toBe(1)
  expect(queue.size()).toBe(1)
  expect(queue.peek()).toBe(2)
  expect(queue.dequeue()).toBe(2)
  expect(queue.size()).toBe(0)
  expect(queue.isEmpty()).toBeTrue()
})

test("Queue should return null when dequeuing from an empty queue", () => {
  const queue = new Queue()
  expect(queue.dequeue()).toBeNull()
})

test("Queue should return null when peeking an empty queue", () => {
  const queue = new Queue()
  expect(queue.peek()).toBeNull()
})

test("Queue should handle multiple enqueues and dequeues", () => {
  const queue = new Queue()
  queue.enqueue(1)
  queue.enqueue(2)
  expect(queue.dequeue()).toBe(1)
  queue.enqueue(3)
  expect(queue.dequeue()).toBe(2)
  expect(queue.dequeue()).toBe(3)
  expect(queue.isEmpty()).toBeTrue()
})
