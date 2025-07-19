import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const binarySearchQuestion: Question = {
  category: "algorithms",
  id: "e6f7g8h9-i0j1-2345-6789-0abcdef12345",
  level: "Easy",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "binary-search.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "binary-search.synopsis.txt")),
  title: "Binary Search",
}

export default binarySearchQuestion
