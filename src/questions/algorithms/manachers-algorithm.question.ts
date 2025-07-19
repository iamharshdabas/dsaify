import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const manachersAlgorithmQuestion: Question = {
  category: "algorithms",
  id: "h9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f8",
  level: "Hard",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "manachers-algorithm.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "manachers-algorithm.synopsis.md")),
  title: "Manacher's Algorithm",
}

export default manachersAlgorithmQuestion
