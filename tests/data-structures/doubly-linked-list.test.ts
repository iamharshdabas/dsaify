import { expect, test } from "bun:test"
import { DoublyLinkedList } from "../../src/questions/data-structures/doubly-linked-list.solution"

test("DoublyLinkedList should be empty on initialization", () => {
  const list = new DoublyLinkedList()
  expect(list.isEmpty()).toBeTrue()
  expect(list.size).toBe(0)
  expect(list.head).toBeNull()
  expect(list.tail).toBeNull()
})

test("DoublyLinkedList should add nodes to the tail", () => {
  const list = new DoublyLinkedList<number>()
  list.addTail(1)
  list.addTail(2)
  expect(list.size).toBe(2)
  expect(list.head?.value).toBe(1)
  expect(list.tail?.value).toBe(2)
  expect(list.head?.next?.value).toBe(2)
  expect(list.tail?.prev?.value).toBe(1)
})

test("DoublyLinkedList should add nodes to the head", () => {
  const list = new DoublyLinkedList<number>()
  list.addHead(1)
  list.addHead(2)
  expect(list.size).toBe(2)
  expect(list.head?.value).toBe(2)
  expect(list.tail?.value).toBe(1)
  expect(list.head?.next?.value).toBe(1)
  expect(list.tail?.prev?.value).toBe(2)
})

test("DoublyLinkedList should remove nodes from the tail", () => {
  const list = new DoublyLinkedList<number>()
  list.addTail(1)
  list.addTail(2)
  const removed = list.removeTail()
  expect(removed).toBe(2)
  expect(list.size).toBe(1)
  expect(list.tail?.value).toBe(1)
  const removed2 = list.removeTail()
  expect(removed2).toBe(1)
  expect(list.isEmpty()).toBeTrue()
})

test("DoublyLinkedList should remove nodes from the head", () => {
  const list = new DoublyLinkedList<number>()
  list.addTail(1)
  list.addTail(2)
  const removed = list.removeHead()
  expect(removed).toBe(1)
  expect(list.size).toBe(1)
  expect(list.head?.value).toBe(2)
  const removed2 = list.removeHead()
  expect(removed2).toBe(2)
  expect(list.isEmpty()).toBeTrue()
})

test("DoublyLinkedList should find nodes", () => {
  const list = new DoublyLinkedList<number>()
  list.addTail(1)
  list.addTail(2)
  list.addTail(3)
  const node = list.find(2)
  expect(node?.value).toBe(2)
  const notFound = list.find(4)
  expect(notFound).toBeNull()
})

test("DoublyLinkedList should delete nodes", () => {
  const list = new DoublyLinkedList<number>()
  list.addTail(1)
  list.addTail(2)
  list.addTail(3)
  const deleted = list.delete(2)
  expect(deleted).toBeTrue()
  expect(list.size).toBe(2)
  expect(list.find(2)).toBeNull()
  expect(list.head?.next?.value).toBe(3)
  expect(list.tail?.prev?.value).toBe(1)
  const notDeleted = list.delete(4)
  expect(notDeleted).toBeFalse()
})
