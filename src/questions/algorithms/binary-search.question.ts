import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const binarySearchQuestion: Question = {
  category: "algorithms",
  id: "b9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f8",
  level: "Easy",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "binary-search.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "binary-search.synopsis.md")),
  title: "Binary Search",
}

export default binarySearchQuestion
