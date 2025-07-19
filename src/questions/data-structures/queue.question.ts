import type { Question } from "../../types"
import { createFilePath, DATA_STRUCTURES_DIR, getFileContent } from "../../utils/question"

const queueQuestion: Question = {
  category: "data-structures",
  id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  level: "Easy",
  solution: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "queue.solution.ts")),
  synopsis: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "queue.synopsis.md")),
  title: "Queue",
}

export default queueQuestion
