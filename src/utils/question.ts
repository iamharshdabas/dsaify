import fs from "node:fs/promises"
import path from "node:path"
import stackQuestion from "../questions/data-structures/stack.question"
import type { Question } from "../types"

export const DATA_STRUCTURES_DIR = "./src/questions/data-structures" as const
export const ALGORITHMS_DIR = "./src/questions/algorithms" as const
export const QUESTIONS_DIR = "./src/questions" as const

export const dataStructuresQuestions: Question[] = [
  stackQuestion,
]
export const algorithmsQuestions: Question[] = []
export const questions: Question[] = [
  ...dataStructuresQuestions,
  ...algorithmsQuestions,
]

export const getSolutionAsString = async (solutionPath: string) => {
  const file = await fs.open(solutionPath, "r")
  return await file.readFile("utf-8")
}

export const createSolutionFilePath = (dirPath: typeof DATA_STRUCTURES_DIR | typeof ALGORITHMS_DIR, file: string) => {
  return path.join(dirPath, file)
}

export const getRandomQuestion = async (category?: typeof ALGORITHMS_DIR | typeof DATA_STRUCTURES_DIR) => {
  let question: Question | undefined
  switch (category) {
    case DATA_STRUCTURES_DIR:
      question = dataStructuresQuestions[Math.floor(Math.random() * dataStructuresQuestions.length)]
      break
    case ALGORITHMS_DIR:
      question = algorithmsQuestions[Math.floor(Math.random() * algorithmsQuestions.length)]
      break
    default:
      question = questions[Math.floor(Math.random() * questions.length)]
  }

  if (!question) throw new Error(`No question found in category: ${category}`)
  return question
}
