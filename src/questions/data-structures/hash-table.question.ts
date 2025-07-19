import type { Question } from "../../types"
import { createFilePath, DATA_STRUCTURES_DIR, getFileContent } from "../../utils/question"

const hashTableQuestion: Question = {
  category: "data-structures",
  id: "i1j2k3l4-m5n6-7890-1234-567890abcdef",
  level: "Medium",
  solution: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "hash-table.solution.ts")),
  synopsis: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "hash-table.synopsis.txt")),
  title: "Hash Table",
}

export default hashTableQuestion
