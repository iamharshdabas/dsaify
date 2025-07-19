import { expect, test } from "bun:test"
import { Queue } from "../../src/questions/data-structures/queue.solution"

test("Queue should be empty on initialization", () => {
  const queue = new Queue()
  expect(queue.isEmpty()).toBeTrue()
  expect(queue.size).toBe(0)
})

test("Queue should enqueue elements", () => {
  const queue = new Queue<number>()
  queue.enqueue(1)
  queue.enqueue(2)
  expect(queue.size).toBe(2)
  expect(queue.peek()).toBe(1)
})

test("Queue should dequeue elements", () => {
  const queue = new Queue<number>()
  queue.enqueue(1)
  queue.enqueue(2)
  const dequeued = queue.dequeue()
  expect(dequeued).toBe(1)
  expect(queue.size).toBe(1)
  expect(queue.peek()).toBe(2)
})

test("Queue should return null when dequeuing from an empty queue", () => {
  const queue = new Queue()
  expect(queue.dequeue()).toBeNull()
})

test("Queue should peek at the front element without removing it", () => {
  const queue = new Queue<number>()
  queue.enqueue(1)
  queue.enqueue(2)
  expect(queue.peek()).toBe(1)
  expect(queue.size).toBe(2)
})

test("Queue should clear all elements", () => {
  const queue = new Queue<number>()
  queue.enqueue(1)
  queue.enqueue(2)
  queue.clear()
  expect(queue.isEmpty()).toBeTrue()
  expect(queue.size).toBe(0)
})
