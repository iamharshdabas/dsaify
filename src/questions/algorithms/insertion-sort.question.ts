import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const insertionSortQuestion: Question = {
  category: "algorithms",
  id: "b9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fc",
  level: "Easy",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "insertion-sort.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "insertion-sort.synopsis.md")),
  title: "Insertion Sort",
}

export default insertionSortQuestion
