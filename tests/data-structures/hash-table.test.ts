import { expect, test } from "bun:test"
import { HashTable } from "../../src/questions/data-structures/hash-table.solution" // Assuming hash-table.solution.ts exports a HashTable class

test("HashTable should set and get values", () => {
  const ht = new HashTable(10)
  ht.set("name", "Alice")
  expect(ht.get("name")).toBe("Alice")
})

test("HashTable should return undefined for non-existent keys", () => {
  const ht = new HashTable(10)
  expect(ht.get("age")).toBeUndefined()
})

test("HashTable should handle collisions", () => {
  const ht = new HashTable(1)
  ht.set("name", "Alice")
  ht.set("mane", "Bob") // This will likely collide with "name"
  expect(ht.get("name")).toBe("Alice")
  expect(ht.get("mane")).toBe("Bob")
})

test("HashTable should overwrite value for existing key", () => {
  const ht = new HashTable(10)
  ht.set("name", "Alice")
  ht.set("name", "Bob")
  expect(ht.get("name")).toBe("Bob")
})

test("HashTable should delete keys", () => {
  const ht = new HashTable(10)
  ht.set("name", "Alice")
  expect(ht.delete("name")).toBeTrue()
  expect(ht.get("name")).toBeUndefined()
})

test("HashTable should return false when deleting non-existent key", () => {
  const ht = new HashTable(10)
  expect(ht.delete("age")).toBeFalse()
})

test("HashTable should list all keys", () => {
  const ht = new HashTable(10)
  ht.set("name", "Alice")
  ht.set("age", 30)
  ht.set("city", "New York")
  const keys = ht.keys()
  expect(keys).toContain("name")
  expect(keys).toContain("age")
  expect(keys).toContain("city")
  expect(keys.length).toBe(3)
})

test("HashTable should list all values", () => {
  const ht = new HashTable(10)
  ht.set("name", "Alice")
  ht.set("age", 30)
  ht.set("city", "New York")
  const values = ht.values()
  expect(values).toContain("Alice")
  expect(values).toContain(30)
  expect(values).toContain("New York")
  expect(values.length).toBe(3)
})

test("HashTable should handle numeric keys", () => {
  const ht = new HashTable(10)
  ht.set(1, "one")
  expect(ht.get(1)).toBe("one")
})

test("HashTable should handle mixed key types", () => {
  const ht = new HashTable(10)
  ht.set("stringKey", "stringValue")
  ht.set(123, "numberValue")
  expect(ht.get("stringKey")).toBe("stringValue")
  expect(ht.get(123)).toBe("numberValue")
})
