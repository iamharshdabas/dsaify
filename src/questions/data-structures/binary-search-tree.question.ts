import type { Question } from "../../types"
import { createFilePath, DATA_STRUCTURES_DIR, getFileContent } from "../../utils/question"

const bstQuestion: Question = {
  category: "data-structures",
  id: "a9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fb",
  level: "Easy",
  solution: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "binary-search-tree.solution.ts")),
  synopsis: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "binary-search-tree.synopsis.md")),
  title: "Binary Search Tree",
}

export default bstQuestion
