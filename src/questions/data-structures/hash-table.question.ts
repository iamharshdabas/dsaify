import type { Question } from "../../types"
import { createFilePath, DATA_STRUCTURES_DIR, getFileContent } from "../../utils/question"

const hashTableQuestion: Question = {
  category: "data-structures",
  id: "a9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fd",
  level: "Easy",
  solution: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "hash-table.solution.ts")),
  synopsis: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "hash-table.synopsis.md")),
  title: "Hash Table",
}

export default hashTableQuestion
