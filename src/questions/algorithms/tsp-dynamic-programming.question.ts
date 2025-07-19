import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const tspDynamicProgrammingQuestion: Question = {
  category: "algorithms",
  id: "j9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fb",
  level: "Hard",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "tsp-dynamic-programming.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "tsp-dynamic-programming.synopsis.md")),
  title: "Traveling Salesman Problem (Dynamic Programming)",
}

export default tspDynamicProgrammingQuestion
