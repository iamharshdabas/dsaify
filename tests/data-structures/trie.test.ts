import { expect, test } from "bun:test"
import { Trie } from "../../src/questions/data-structures/trie.solution" // Assuming trie.solution.ts exports a Trie class

test("Trie should insert words and check for their existence", () => {
  const trie = new Trie()
  trie.insert("apple")
  expect(trie.search("apple")).toBeTrue()
  expect(trie.search("app")).toBeFalse()
  expect(trie.search("aple")).toBeFalse()
})

test("Trie should return true for words that are prefixes of other words", () => {
  const trie = new Trie()
  trie.insert("apple")
  expect(trie.startsWith("app")).toBeTrue()
  expect(trie.startsWith("ap")).toBeTrue()
  expect(trie.startsWith("appl")).toBeTrue()
  expect(trie.startsWith("banana")).toBeFalse()
})

test("Trie should handle multiple word insertions", () => {
  const trie = new Trie()
  trie.insert("apple")
  trie.insert("app")
  trie.insert("apricot")
  expect(trie.search("apple")).toBeTrue()
  expect(trie.search("app")).toBeTrue()
  expect(trie.search("apricot")).toBeTrue()
  expect(trie.search("apri")).toBeFalse()
})

test("Trie should handle empty string insertion and search", () => {
  const trie = new Trie()
  trie.insert("")
  expect(trie.search("")).toBeTrue()
  expect(trie.startsWith("")).toBeTrue()
})

test("Trie should handle deletion of words", () => {
  const trie = new Trie()
  trie.insert("apple")
  trie.insert("app")
  trie.delete("apple")
  expect(trie.search("apple")).toBeFalse()
  expect(trie.search("app")).toBeTrue() // "app" should still exist
  expect(trie.startsWith("app")).toBeTrue()

  trie.delete("app")
  expect(trie.search("app")).toBeFalse()
  expect(trie.startsWith("app")).toBeFalse()
})

test("Trie should not delete non-existent words", () => {
  const trie = new Trie()
  trie.insert("apple")
  trie.delete("banana")
  expect(trie.search("apple")).toBeTrue()
})

test("Trie should handle deletion of a prefix that is also a word", () => {
  const trie = new Trie()
  trie.insert("app")
  trie.insert("apple")
  trie.delete("app")
  expect(trie.search("app")).toBeFalse()
  expect(trie.search("apple")).toBeTrue() // "apple" should still exist
})
