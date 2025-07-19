import type { Question } from "../../types"
import { createFilePath, DATA_STRUCTURES_DIR, getFileContent } from "../../utils/question"

const doublyLinkedListQuestion: Question = {
  category: "data-structures",
  id: "n6o7p8q9-r0s1-2345-6789-0abcdef12345",
  level: "Medium",
  solution: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "doubly-linked-list.solution.ts")),
  synopsis: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "doubly-linked-list.synopsis.txt")),
  title: "Doubly Linked List",
}

export default doublyLinkedListQuestion
