import type { Question } from "../../types"
import { createFilePath, DATA_STRUCTURES_DIR, getFileContent } from "../../utils/question"

const avlTreeQuestion: Question = {
  category: "data-structures",
  id: "e9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f8",
  level: "Medium",
  solution: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "avl-tree.solution.ts")),
  synopsis: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "avl-tree.synopsis.md")),
  title: "AVL Tree",
}

export default avlTreeQuestion
