import { expect, test } from "bun:test"
import { quickSort } from "../../src/questions/algorithms/quick-sort.solution" // Assuming quick-sort.solution.ts exports a quickSort function

test("quickSort should sort an array of numbers in ascending order", () => {
  const arr = [
    5,
    2,
    8,
    1,
    9,
    4,
    7,
    3,
    6,
  ]
  const sortedArr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ]
  expect(quickSort(arr)).toEqual(sortedArr)
})

test("quickSort should handle an empty array", () => {
  const arr: number[] = []
  expect(quickSort(arr)).toEqual([])
})

test("quickSort should handle an array with one element", () => {
  const arr = [
    42,
  ]
  expect(quickSort(arr)).toEqual([
    42,
  ])
})

test("quickSort should handle an already sorted array", () => {
  const arr = [
    1,
    2,
    3,
    4,
    5,
  ]
  expect(quickSort(arr)).toEqual([
    1,
    2,
    3,
    4,
    5,
  ])
})

test("quickSort should handle an array sorted in reverse order", () => {
  const arr = [
    5,
    4,
    3,
    2,
    1,
  ]
  expect(quickSort(arr)).toEqual([
    1,
    2,
    3,
    4,
    5,
  ])
})

test("quickSort should handle an array with duplicate elements", () => {
  const arr = [
    5,
    2,
    8,
    1,
    9,
    4,
    7,
    3,
    6,
    2,
    8,
  ]
  const sortedArr = [
    1,
    2,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    8,
    9,
  ]
  expect(quickSort(arr)).toEqual(sortedArr)
})

test("quickSort should handle negative numbers", () => {
  const arr = [
    -5,
    -2,
    -8,
    -1,
    -9,
    -4,
    -7,
    -3,
    -6,
  ]
  const sortedArr = [
    -9,
    -8,
    -7,
    -6,
    -5,
    -4,
    -3,
    -2,
    -1,
  ]
  expect(quickSort(arr)).toEqual(sortedArr)
})

test("quickSort should handle mixed positive and negative numbers", () => {
  const arr = [
    5,
    -2,
    8,
    -1,
    0,
    4,
    -7,
    3,
    -6,
  ]
  const sortedArr = [
    -7,
    -6,
    -2,
    -1,
    0,
    3,
    4,
    5,
    8,
  ]
  expect(quickSort(arr)).toEqual(sortedArr)
})

test("quickSort should handle floating point numbers", () => {
  const arr = [
    5.5,
    2.2,
    8.8,
    1.1,
    9.9,
    4.4,
    7.7,
    3.3,
    6.6,
  ]
  const sortedArr = [
    1.1,
    2.2,
    3.3,
    4.4,
    5.5,
    6.6,
    7.7,
    8.8,
    9.9,
  ]
  expect(quickSort(arr)).toEqual(sortedArr)
})
