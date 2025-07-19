import type { Question } from "../../types"
import { createFilePath, DATA_STRUCTURES_DIR, getFileContent } from "../../utils/question"

const heapQuestion: Question = {
  category: "data-structures",
  id: "m5n6o7p8-q9r0-1234-5678-90abcdef1234",
  level: "Medium",
  solution: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "heap.solution.ts")),
  synopsis: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "heap.synopsis.md")),
  title: "Min Heap",
}

export default heapQuestion
