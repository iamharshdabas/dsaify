import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const nQueensQuestion: Question = {
  category: "algorithms",
  id: "f9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f9",
  level: "Medium",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "n-queens.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "n-queens.synopsis.md")),
  title: "N-Queens Problem",
}

export default nQueensQuestion
