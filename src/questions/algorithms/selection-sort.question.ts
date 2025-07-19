import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const selectionSortQuestion: Question = {
  category: "algorithms",
  id: "b9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fd",
  level: "Easy",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "selection-sort.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "selection-sort.synopsis.md")),
  title: "Selection Sort",
}

export default selectionSortQuestion
