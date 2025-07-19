import { expect, test } from "bun:test"
import { MaxHeap, MinHeap } from "../../src/questions/data-structures/heap.solution" // Assuming heap.solution.ts exports MinHeap and MaxHeap classes

test("MinHeap should correctly add and extract min elements", () => {
  const minHeap = new MinHeap()
  minHeap.insert(10)
  minHeap.insert(4)
  minHeap.insert(15)
  minHeap.insert(1)
  minHeap.insert(8)

  expect(minHeap.extractMin()).toBe(1)
  expect(minHeap.extractMin()).toBe(4)
  expect(minHeap.extractMin()).toBe(8)
  expect(minHeap.extractMin()).toBe(10)
  expect(minHeap.extractMin()).toBe(15)
  expect(minHeap.isEmpty()).toBeTrue()
})

test("MinHeap should return null when extracting from an empty heap", () => {
  const minHeap = new MinHeap()
  expect(minHeap.extractMin()).toBeNull()
})

test("MinHeap should return the minimum element without removing it", () => {
  const minHeap = new MinHeap()
  minHeap.insert(5)
  minHeap.insert(1)
  expect(minHeap.peek()).toBe(1)
  expect(minHeap.size()).toBe(2)
})

test("MinHeap should correctly report its size", () => {
  const minHeap = new MinHeap()
  expect(minHeap.size()).toBe(0)
  minHeap.insert(1)
  expect(minHeap.size()).toBe(1)
  minHeap.insert(2)
  expect(minHeap.size()).toBe(2)
  minHeap.extractMin()
  expect(minHeap.size()).toBe(1)
})

test("MaxHeap should correctly add and extract max elements", () => {
  const maxHeap = new MaxHeap()
  maxHeap.insert(10)
  maxHeap.insert(4)
  maxHeap.insert(15)
  maxHeap.insert(1)
  maxHeap.insert(8)

  expect(maxHeap.extractMax()).toBe(15)
  expect(maxHeap.extractMax()).toBe(10)
  expect(maxHeap.extractMax()).toBe(8)
  expect(maxHeap.extractMax()).toBe(4)
  expect(maxHeap.extractMax()).toBe(1)
  expect(maxHeap.isEmpty()).toBeTrue()
})

test("MaxHeap should return null when extracting from an empty heap", () => {
  const maxHeap = new MaxHeap()
  expect(maxHeap.extractMax()).toBeNull()
})

test("MaxHeap should return the maximum element without removing it", () => {
  const maxHeap = new MaxHeap()
  maxHeap.insert(5)
  maxHeap.insert(10)
  expect(maxHeap.peek()).toBe(10)
  expect(maxHeap.size()).toBe(2)
})

test("MaxHeap should correctly report its size", () => {
  const maxHeap = new MaxHeap()
  expect(maxHeap.size()).toBe(0)
  maxHeap.insert(1)
  expect(maxHeap.size()).toBe(1)
  maxHeap.insert(2)
  expect(maxHeap.size()).toBe(2)
  maxHeap.extractMax()
  expect(maxHeap.size()).toBe(1)
})
