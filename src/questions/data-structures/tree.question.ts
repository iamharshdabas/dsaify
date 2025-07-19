import type { Question } from "../../types"
import { createFilePath, DATA_STRUCTURES_DIR, getFileContent } from "../../utils/question"

const treeQuestion: Question = {
  category: "data-structures",
  id: "k3l4m5n6-o7p8-9012-3456-7890abcdef12",
  level: "Medium",
  solution: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "tree.solution.ts")),
  synopsis: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "tree.synopsis.txt")),
  title: "Binary Tree",
}

export default treeQuestion
