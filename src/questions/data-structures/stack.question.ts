import type { Question } from "../../types"
import { createFilePath, DATA_STRUCTURES_DIR, getFileContent } from "../../utils/question"

const stackQuestion: Question = {
  category: "data-structures",
  id: "68be9465-688f-499e-b207-d6c3588eacb3",
  level: "Easy",
  solution: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "stack.solution.ts")),
  synopsis: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "stack.synopsis.txt")),
  title: "Stack",
}

export default stackQuestion
