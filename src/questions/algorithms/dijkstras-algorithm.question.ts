import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const dijkstrasAlgorithmQuestion: Question = {
  category: "algorithms",
  id: "d9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f9",
  level: "Medium",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "dijkstras-algorithm.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "dijkstras-algorithm.synopsis.md")),
  title: "Dijkstra's Algorithm",
}

export default dijkstrasAlgorithmQuestion
