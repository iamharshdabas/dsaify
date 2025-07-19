import { expect, test } from "bun:test"
import { DoublyLinkedList } from "../../src/questions/data-structures/doubly-linked-list.solution" // Assuming doubly-linked-list.solution.ts exports a DoublyLinkedList class

test("DoublyLinkedList should be empty on initialization", () => {
  const list = new DoublyLinkedList()
  expect(list.isEmpty()).toBeTrue()
  expect(list.size()).toBe(0)
  expect(list.head).toBeNull()
  expect(list.tail).toBeNull()
})

test("DoublyLinkedList should add elements to the tail", () => {
  const list = new DoublyLinkedList()
  list.addTail(1)
  expect(list.size()).toBe(1)
  expect(list.head?.value).toBe(1)
  expect(list.tail?.value).toBe(1)
  list.addTail(2)
  expect(list.size()).toBe(2)
  expect(list.head?.value).toBe(1)
  expect(list.tail?.value).toBe(2)
  expect(list.tail?.prev?.value).toBe(1)
})

test("DoublyLinkedList should add elements to the head", () => {
  const list = new DoublyLinkedList()
  list.addHead(1)
  expect(list.size()).toBe(1)
  expect(list.head?.value).toBe(1)
  expect(list.tail?.value).toBe(1)
  list.addHead(2)
  expect(list.size()).toBe(2)
  expect(list.head?.value).toBe(2)
  expect(list.tail?.value).toBe(1)
  expect(list.head?.next?.value).toBe(1)
})

test("DoublyLinkedList should remove elements from the tail", () => {
  const list = new DoublyLinkedList()
  list.addTail(1)
  list.addTail(2)
  expect(list.removeTail()).toBe(2)
  expect(list.size()).toBe(1)
  expect(list.head?.value).toBe(1)
  expect(list.tail?.value).toBe(1)
  expect(list.removeTail()).toBe(1)
  expect(list.size()).toBe(0)
  expect(list.isEmpty()).toBeTrue()
})

test("DoublyLinkedList should remove elements from the head", () => {
  const list = new DoublyLinkedList()
  list.addTail(1)
  list.addTail(2)
  expect(list.removeHead()).toBe(1)
  expect(list.size()).toBe(1)
  expect(list.head?.value).toBe(2)
  expect(list.tail?.value).toBe(2)
  expect(list.removeHead()).toBe(2)
  expect(list.size()).toBe(0)
  expect(list.isEmpty()).toBeTrue()
})

test("DoublyLinkedList should return null when removing from empty list", () => {
  const list = new DoublyLinkedList()
  expect(list.removeHead()).toBeNull()
  expect(list.removeTail()).toBeNull()
})

test("DoublyLinkedList should find elements by value", () => {
  const list = new DoublyLinkedList()
  list.addTail(1)
  list.addTail(2)
  list.addTail(3)
  expect(list.find(2)?.value).toBe(2)
  expect(list.find(4)).toBeNull()
})

test("DoublyLinkedList should delete a specific node by value", () => {
  const list = new DoublyLinkedList()
  list.addTail(1)
  list.addTail(2)
  list.addTail(3)
  list.delete(2)
  expect(list.size()).toBe(2)
  expect(list.find(2)).toBeNull()
  expect(list.head?.value).toBe(1)
  expect(list.tail?.value).toBe(3)
  expect(list.head?.next?.value).toBe(3)
  expect(list.tail?.prev?.value).toBe(1)
})

test("DoublyLinkedList should delete the head node", () => {
  const list = new DoublyLinkedList()
  list.addTail(1)
  list.addTail(2)
  list.delete(1)
  expect(list.size()).toBe(1)
  expect(list.head?.value).toBe(2)
  expect(list.tail?.value).toBe(2)
})

test("DoublyLinkedList should delete the tail node", () => {
  const list = new DoublyLinkedList()
  list.addTail(1)
  list.addTail(2)
  list.delete(2)
  expect(list.size()).toBe(1)
  expect(list.head?.value).toBe(1)
  expect(list.tail?.value).toBe(1)
})

test("DoublyLinkedList should handle deleting from a list with one element", () => {
  const list = new DoublyLinkedList()
  list.addTail(1)
  list.delete(1)
  expect(list.isEmpty()).toBeTrue()
})

test("DoublyLinkedList should not delete non-existent elements", () => {
  const list = new DoublyLinkedList()
  list.addTail(1)
  list.addTail(2)
  list.delete(3)
  expect(list.size()).toBe(2)
})
