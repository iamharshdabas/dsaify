import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const bellmanFordAlgorithmQuestion: Question = {
  category: "algorithms",
  id: "e9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fe",
  level: "Medium",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "bellman-ford-algorithm.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "bellman-ford-algorithm.synopsis.md")),
  title: "Bellman-Ford Algorithm",
}

export default bellmanFordAlgorithmQuestion
