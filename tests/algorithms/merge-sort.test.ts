import { expect, test } from "bun:test"
import { mergeSort } from "../../src/questions/algorithms/merge-sort.solution" // Assuming merge-sort.solution.ts exports a mergeSort function

test("mergeSort should sort an array of numbers in ascending order", () => {
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
  expect(mergeSort(arr)).toEqual(sortedArr)
})

test("mergeSort should handle an empty array", () => {
  const arr: number[] = []
  expect(mergeSort(arr)).toEqual([])
})

test("mergeSort should handle an array with one element", () => {
  const arr = [
    42,
  ]
  expect(mergeSort(arr)).toEqual([
    42,
  ])
})

test("mergeSort should handle an already sorted array", () => {
  const arr = [
    1,
    2,
    3,
    4,
    5,
  ]
  expect(mergeSort(arr)).toEqual([
    1,
    2,
    3,
    4,
    5,
  ])
})

test("mergeSort should handle an array sorted in reverse order", () => {
  const arr = [
    5,
    4,
    3,
    2,
    1,
  ]
  expect(mergeSort(arr)).toEqual([
    1,
    2,
    3,
    4,
    5,
  ])
})

test("mergeSort should handle an array with duplicate elements", () => {
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
  expect(mergeSort(arr)).toEqual(sortedArr)
})

test("mergeSort should handle negative numbers", () => {
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
  expect(mergeSort(arr)).toEqual(sortedArr)
})

test("mergeSort should handle mixed positive and negative numbers", () => {
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
  expect(mergeSort(arr)).toEqual(sortedArr)
})

test("mergeSort should handle floating point numbers", () => {
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
  expect(mergeSort(arr)).toEqual(sortedArr)
})
