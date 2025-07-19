import type { Question } from "../../types"
import { createFilePath, DATA_STRUCTURES_DIR, getFileContent } from "../../utils/question"

const fenwickTreeQuestion: Question = {
  category: "data-structures",
  id: "e9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f9",
  level: "Medium",
  solution: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "fenwick-tree.solution.ts")),
  synopsis: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "fenwick-tree.synopsis.md")),
  title: "Fenwick Tree (Binary Indexed Tree)",
}

export default fenwickTreeQuestion
