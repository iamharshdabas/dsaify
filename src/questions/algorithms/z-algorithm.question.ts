import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const zAlgorithmQuestion: Question = {
  category: "algorithms",
  id: "h9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f9",
  level: "Medium",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "z-algorithm.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "z-algorithm.synopsis.md")),
  title: "Z-Algorithm",
}

export default zAlgorithmQuestion
