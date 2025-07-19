import { expect, test } from "bun:test"
import { MinHeap } from "../../src/questions/data-structures/heap.solution"

test("MinHeap should be empty on initialization", () => {
  const heap = new MinHeap()
  expect(heap.isEmpty()).toBeTrue()
  expect(heap.size).toBe(0)
})

test("MinHeap should insert values correctly", () => {
  const heap = new MinHeap()
  heap.insert(10)
  heap.insert(5)
  heap.insert(15)
  heap.insert(3)
  expect(heap.size).toBe(4)
  expect(heap.extractMin()).toBe(3)
  expect(heap.extractMin()).toBe(5)
  expect(heap.extractMin()).toBe(10)
  expect(heap.extractMin()).toBe(15)
  expect(heap.isEmpty()).toBeTrue()
})

test("MinHeap should handle duplicate values", () => {
  const heap = new MinHeap()
  heap.insert(10)
  heap.insert(5)
  heap.insert(10)
  expect(heap.size).toBe(3)
  expect(heap.extractMin()).toBe(5)
  expect(heap.extractMin()).toBe(10)
  expect(heap.extractMin()).toBe(10)
})

test("MinHeap should return null when extracting from an empty heap", () => {
  const heap = new MinHeap()
  expect(heap.extractMin()).toBeNull()
})
