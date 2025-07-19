import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const knapsackProblemQuestion: Question = {
  category: "algorithms",
  id: "e9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fd",
  level: "Medium",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "knapsack-problem.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "knapsack-problem.synopsis.md")),
  title: "Knapsack Problem",
}

export default knapsackProblemQuestion
