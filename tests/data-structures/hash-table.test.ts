import { expect, test } from "bun:test"
import { HashTable } from "../../src/questions/data-structures/hash-table.solution"

test("HashTable should set and get values", () => {
  const ht = new HashTable<string, string>(10)
  ht.set("name", "Alice")
  expect(ht.get("name")).toBe("Alice")
})

test("HashTable should return undefined for non-existent keys", () => {
  const ht = new HashTable<string, string>(10)
  expect(ht.get("age")).toBeUndefined()
})

test("HashTable should handle collisions", () => {
  const ht = new HashTable<string, string>(1)
  ht.set("name", "Alice")
  ht.set("mane", "Bob") // This will likely collide with "name"
  expect(ht.get("name")).toBe("Alice")
  expect(ht.get("mane")).toBe("Bob")
})

test("HashTable should overwrite value for existing key", () => {
  const ht = new HashTable<string, string>(10)
  ht.set("name", "Alice")
  ht.set("name", "Bob")
  expect(ht.get("name")).toBe("Bob")
})

test("HashTable should delete keys", () => {
  const ht = new HashTable<string, string>(10)
  ht.set("name", "Alice")
  expect(ht.delete("name")).toBeTrue()
  expect(ht.get("name")).toBeUndefined()
})

test("HashTable should return false when deleting non-existent key", () => {
  const ht = new HashTable<string, string>(10)
  expect(ht.delete("age")).toBeFalse()
})

test("HashTable should handle numeric keys", () => {
  const ht = new HashTable<number, string>(10)
  ht.set(1, "one")
  expect(ht.get(1)).toBe("one")
})

test("HashTable should handle mixed key types", () => {
  const ht = new HashTable<string | number, string>(10)
  ht.set("stringKey", "stringValue")
  ht.set(123, "numberValue")
  expect(ht.get("stringKey")).toBe("stringValue")
  expect(ht.get(123)).toBe("numberValue")
})
