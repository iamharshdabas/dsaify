import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const kadanesAlgorithmQuestion: Question = {
  category: "algorithms",
  id: "d9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f8",
  level: "Easy",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "kadanes-algorithm.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "kadanes-algorithm.synopsis.md")),
  title: "Kadane's Algorithm",
}

export default kadanesAlgorithmQuestion
