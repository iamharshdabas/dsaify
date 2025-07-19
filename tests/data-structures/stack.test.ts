import { expect, test } from "bun:test"
import { Stack } from "../../src/questions/data-structures/stack.solution" // Assuming stack.solution.ts exports a Stack class

test("Stack should be empty on initialization", () => {
  const stack = new Stack()
  expect(stack.isEmpty()).toBeTrue()
  expect(stack.size).toBe(0)
})

test("Stack should push elements", () => {
  const stack = new Stack()
  stack.push(1)
  expect(stack.size).toBe(1)
  expect(stack.peek()).toBe(1)
  stack.push(2)
  expect(stack.size).toBe(2)
  expect(stack.peek()).toBe(2)
})

test("Stack should pop elements in LIFO order", () => {
  const stack = new Stack()
  stack.push(1)
  stack.push(2)
  expect(stack.pop()).toBe(2)
  expect(stack.size).toBe(1)
  expect(stack.peek()).toBe(1)
  expect(stack.pop()).toBe(1)
  expect(stack.size).toBe(0)
  expect(stack.isEmpty()).toBeTrue()
})

test("Stack should return null when popping from an empty stack", () => {
  const stack = new Stack()
  expect(stack.pop()).toBeNull()
})

test("Stack should return null when peeking an empty stack", () => {
  const stack = new Stack()
  expect(stack.peek()).toBeNull()
})

test("Stack should handle multiple pushes and pops", () => {
  const stack = new Stack()
  stack.push(1)
  stack.push(2)
  expect(stack.pop()).toBe(2)
  stack.push(3)
  expect(stack.pop()).toBe(3)
  expect(stack.pop()).toBe(1)
  expect(stack.isEmpty()).toBeTrue()
})
