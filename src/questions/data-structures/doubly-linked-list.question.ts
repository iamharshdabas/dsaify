import type { Question } from "../../types"
import { createFilePath, DATA_STRUCTURES_DIR, getFileContent } from "../../utils/question"

const doublyLinkedListQuestion: Question = {
  category: "data-structures",
  id: "a9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fa",
  level: "Easy",
  solution: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "doubly-linked-list.solution.ts")),
  synopsis: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "doubly-linked-list.synopsis.md")),
  title: "Doubly Linked List",
}

export default doublyLinkedListQuestion
