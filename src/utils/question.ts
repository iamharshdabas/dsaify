import fs from "node:fs/promises"
import path from "node:path"
import { algorithms } from "../questions/algorithms/index"
import { dataStructures } from "../questions/data-structures/index"
import type { Level, Question, QuestionCategory } from "../types"

export const DATA_STRUCTURES_DIR = "./src/questions/data-structures" as const
export const ALGORITHMS_DIR = "./src/questions/algorithms" as const
export const QUESTIONS_DIR = "./src/questions" as const

export const dataStructuresQuestions: Question[] = dataStructures
export const algorithmsQuestions: Question[] = algorithms
export const questions: Question[] = [
  ...dataStructures,
  ...algorithms,
]

export const getFileContent = async (solutionPath: string) => {
  const file = await fs.open(solutionPath, "r")
  return await file.readFile("utf-8")
}

export const createFilePath = (dirPath: QuestionCategory, file: string) => {
  return path.join(dirPath, file)
}

export const getQuestions = (category?: QuestionCategory, level?: Level): Question[] => {
  let filteredQuestions: Question[] = []

  if (category === DATA_STRUCTURES_DIR) {
    filteredQuestions = dataStructuresQuestions
  } else if (category === ALGORITHMS_DIR) {
    filteredQuestions = algorithmsQuestions
  } else {
    filteredQuestions = questions
  }

  if (level) {
    filteredQuestions = filteredQuestions.filter((q) => q.level === level)
  }

  return filteredQuestions
}

export const getQuestion = (category?: QuestionCategory, level?: Level): Question => {
  const filteredQuestions = getQuestions(category, level)
  const question = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)]
  if (!question) {
    throw new Error(`No question found for category: ${category || "any"} and level: ${level || "any"}`)
  }
  return question
}
