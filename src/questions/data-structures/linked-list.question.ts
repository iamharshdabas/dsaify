import type { Question } from "../../types"
import { createFilePath, DATA_STRUCTURES_DIR, getFileContent } from "../../utils/question"

const linkedListQuestion: Question = {
  category: "data-structures",
  id: "h0i1j2k3-l4m5-6789-0123-4abcdef56789",
  level: "Easy",
  solution: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "linked-list.solution.ts")),
  synopsis: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "linked-list.synopsis.md")),
  title: "Linked List",
}

export default linkedListQuestion
