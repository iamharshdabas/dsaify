import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const floydWarshallAlgorithmQuestion: Question = {
  category: "algorithms",
  id: "d9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fa",
  level: "Medium",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "floyd-warshall-algorithm.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "floyd-warshall-algorithm.synopsis.md")),
  title: "Floyd-Warshall Algorithm",
}

export default floydWarshallAlgorithmQuestion
