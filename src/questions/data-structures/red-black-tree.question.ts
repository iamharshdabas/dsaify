import type { Question } from "../../types"
import { createFilePath, DATA_STRUCTURES_DIR, getFileContent } from "../../utils/question"

const redBlackTreeQuestion: Question = {
  category: "data-structures",
  id: "g9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f8",
  level: "Hard",
  solution: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "red-black-tree.solution.ts")),
  synopsis: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "red-black-tree.synopsis.md")),
  title: "Red-Black Tree",
}

export default redBlackTreeQuestion
