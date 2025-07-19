import { expect, test } from "bun:test"
import { BinarySearchTree } from "../../src/questions/data-structures/tree.solution" // Assuming tree.solution.ts exports a BinarySearchTree class

test("BinarySearchTree should be empty on initialization", () => {
  const bst = new BinarySearchTree()
  expect(bst.root).toBeNull()
})

test("BinarySearchTree should insert nodes correctly", () => {
  const bst = new BinarySearchTree()
  bst.insert(10)
  expect(bst.root?.value).toBe(10)
  bst.insert(5)
  expect(bst.root?.left?.value).toBe(5)
  bst.insert(15)
  expect(bst.root?.right?.value).toBe(15)
  bst.insert(3)
  expect(bst.root?.left?.left?.value).toBe(3)
  bst.insert(7)
  expect(bst.root?.left?.right?.value).toBe(7)
})

test("BinarySearchTree should find nodes correctly", () => {
  const bst = new BinarySearchTree()
  bst.insert(10)
  bst.insert(5)
  bst.insert(15)
  bst.insert(3)
  bst.insert(7)
  expect(bst.find(10)).toBeTrue()
  expect(bst.find(5)).toBeTrue()
  expect(bst.find(15)).toBeTrue()
  expect(bst.find(3)).toBeTrue()
  expect(bst.find(7)).toBeTrue()
  expect(bst.find(100)).toBeFalse()
  expect(bst.find(1)).toBeFalse()
})

test("BinarySearchTree should return min value", () => {
  const bst = new BinarySearchTree()
  bst.insert(10)
  bst.insert(5)
  bst.insert(15)
  bst.insert(3)
  bst.insert(7)
  expect(bst.min()).toBe(3)
})

test("BinarySearchTree should return max value", () => {
  const bst = new BinarySearchTree()
  bst.insert(10)
  bst.insert(5)
  bst.insert(15)
  bst.insert(3)
  bst.insert(7)
  expect(bst.max()).toBe(15)
})

test("BinarySearchTree should delete nodes correctly", () => {
  const bst = new BinarySearchTree()
  bst.insert(10)
  bst.insert(5)
  bst.insert(15)
  bst.insert(3)
  bst.insert(7)
  bst.insert(12)
  bst.insert(17)

  // Delete leaf node
  bst.delete(3)
  expect(bst.find(3)).toBeFalse()
  expect(bst.root?.left?.left).toBeNull()

  // Delete node with one child
  bst.delete(15)
  expect(bst.find(15)).toBeFalse()
  expect(bst.root?.right?.value).toBe(17)

  // Delete node with two children
  bst.delete(10)
  expect(bst.find(10)).toBeFalse()
  // The new root should be the inorder successor (12)
  expect(bst.root?.value).toBe(12)
  expect(bst.root?.left?.value).toBe(5)
  expect(bst.root?.right?.value).toBe(17)
})

test("BinarySearchTree should handle deletion of root node", () => {
  const bst = new BinarySearchTree()
  bst.insert(10)
  bst.insert(5)
  bst.insert(15)
  bst.delete(10)
  expect(bst.find(10)).toBeFalse()
  expect(bst.root?.value).toBe(15) // Or 5, depending on implementation of successor/predecessor
})

test("BinarySearchTree should handle deletion of non-existent node", () => {
  const bst = new BinarySearchTree()
  bst.insert(10)
  bst.insert(5)
  bst.delete(20)
  expect(bst.find(10)).toBeTrue()
  expect(bst.find(5)).toBeTrue()
})

test("BinarySearchTree should perform in-order traversal", () => {
  const bst = new BinarySearchTree()
  bst.insert(10)
  bst.insert(5)
  bst.insert(15)
  bst.insert(3)
  bst.insert(7)
  const result: number[] = []
  bst.inOrderTraversal((value) => result.push(value))
  expect(result).toEqual([
    3,
    5,
    7,
    10,
    15,
  ])
})

test("BinarySearchTree should perform pre-order traversal", () => {
  const bst = new BinarySearchTree()
  bst.insert(10)
  bst.insert(5)
  bst.insert(15)
  bst.insert(3)
  bst.insert(7)
  const result: number[] = []
  bst.preOrderTraversal((value) => result.push(value))
  expect(result).toEqual([
    10,
    5,
    3,
    7,
    15,
  ])
})

test("BinarySearchTree should perform post-order traversal", () => {
  const bst = new BinarySearchTree()
  bst.insert(10)
  bst.insert(5)
  bst.insert(15)
  bst.insert(3)
  bst.insert(7)
  const result: number[] = []
  bst.postOrderTraversal((value) => result.push(value))
  expect(result).toEqual([
    3,
    7,
    5,
    15,
    10,
  ])
})
