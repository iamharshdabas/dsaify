import type { Question } from "../../types"
import { createFilePath, DATA_STRUCTURES_DIR, getFileContent } from "../../utils/question"

const heapQuestion: Question = {
  category: "data-structures",
  id: "c9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f9",
  level: "Easy",
  solution: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "heap.solution.ts")),
  synopsis: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "heap.synopsis.md")),
  title: "Heap",
}

export default heapQuestion
