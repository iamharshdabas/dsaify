import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const kruskalsAlgorithmQuestion: Question = {
  category: "algorithms",
  id: "d9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fb",
  level: "Medium",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "kruskals-algorithm.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "kruskals-algorithm.synopsis.md")),
  title: "Kruskal's Algorithm",
}

export default kruskalsAlgorithmQuestion
