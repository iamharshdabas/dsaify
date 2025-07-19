import { expect, test } from "bun:test"
import { binarySearch } from "../../src/questions/algorithms/binary-search.solution" // Assuming binary-search.solution.ts exports a binarySearch function

test("binarySearch should find an element in a sorted array", () => {
  const arr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
  ]
  expect(binarySearch(arr, 5)).toBe(4) // 5 is at index 4
})

test("binarySearch should return -1 if element is not found", () => {
  const arr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
  ]
  expect(binarySearch(arr, 11)).toBe(-1)
})

test("binarySearch should find the first element", () => {
  const arr = [
    1,
    2,
    3,
    4,
    5,
  ]
  expect(binarySearch(arr, 1)).toBe(0)
})

test("binarySearch should find the last element", () => {
  const arr = [
    1,
    2,
    3,
    4,
    5,
  ]
  expect(binarySearch(arr, 5)).toBe(4)
})

test("binarySearch should handle an empty array", () => {
  const arr: number[] = []
  expect(binarySearch(arr, 5)).toBe(-1)
})

test("binarySearch should handle an array with one element (found)", () => {
  const arr = [
    5,
  ]
  expect(binarySearch(arr, 5)).toBe(0)
})

test("binarySearch should handle an array with one element (not found)", () => {
  const arr = [
    5,
  ]
  expect(binarySearch(arr, 1)).toBe(-1)
})

test("binarySearch should handle duplicate elements (finds first occurrence)", () => {
  const arr = [
    1,
    2,
    3,
    3,
    3,
    4,
    5,
  ]
  expect(binarySearch(arr, 3)).toBeGreaterThanOrEqual(2) // Should find one of the 3s
})

test("binarySearch should work with negative numbers", () => {
  const arr = [
    -10,
    -5,
    0,
    5,
    10,
  ]
  expect(binarySearch(arr, 0)).toBe(2)
})

test("binarySearch should work with floating point numbers", () => {
  const arr = [
    1.1,
    2.2,
    3.3,
    4.4,
    5.5,
  ]
  expect(binarySearch(arr, 3.3)).toBe(2)
})
