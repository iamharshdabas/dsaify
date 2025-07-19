import { expect, test } from "bun:test"
import { LinkedList } from "../../src/questions/data-structures/linked-list.solution"

test("LinkedList should be empty on initialization", () => {
  const list = new LinkedList()
  expect(list.isEmpty()).toBeTrue()
  expect(list.size).toBe(0)
  expect(list.head).toBeNull()
})

test("LinkedList should add elements to the tail", () => {
  const list = new LinkedList<number>()
  list.add(1)
  expect(list.size).toBe(1)
  expect(list.head?.value).toBe(1)
  list.add(2)
  expect(list.size).toBe(2)
  expect(list.head?.value).toBe(1)
  expect(list.head?.next?.value).toBe(2)
})

test("LinkedList should find elements by value", () => {
  const list = new LinkedList<number>()
  list.add(1)
  list.add(2)
  list.add(3)
  expect(list.find(2)?.value).toBe(2)
  expect(list.find(4)).toBeNull()
})

test("LinkedList should delete a specific node by value", () => {
  const list = new LinkedList<number>()
  list.add(1)
  list.add(2)
  list.add(3)
  list.delete(2)
  expect(list.size).toBe(2)
  expect(list.find(2)).toBeNull()
  expect(list.head?.value).toBe(1)
  expect(list.head?.next?.value).toBe(3)
})

test("LinkedList should delete the head node", () => {
  const list = new LinkedList<number>()
  list.add(1)
  list.add(2)
  list.delete(1)
  expect(list.size).toBe(1)
  expect(list.head?.value).toBe(2)
})

test("LinkedList should delete the tail node", () => {
  const list = new LinkedList<number>()
  list.add(1)
  list.add(2)
  list.delete(2)
  expect(list.size).toBe(1)
  expect(list.head?.value).toBe(1)
})

test("LinkedList should handle deleting from a list with one element", () => {
  const list = new LinkedList<number>()
  list.add(1)
  list.delete(1)
  expect(list.isEmpty()).toBeTrue()
})

test("LinkedList should not delete non-existent elements", () => {
  const list = new LinkedList<number>()
  list.add(1)
  list.add(2)
  list.delete(3)
  expect(list.size).toBe(2)
})

test("LinkedList should convert to array", () => {
  const list = new LinkedList<number>()
  list.add(1)
  list.add(2)
  list.add(3)
  expect(list.toArray()).toEqual([
    1,
    2,
    3,
  ])
})

test("LinkedList should handle toArray for empty list", () => {
  const list = new LinkedList<number>()
  expect(list.toArray()).toEqual([])
})
