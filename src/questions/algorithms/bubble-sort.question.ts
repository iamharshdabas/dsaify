import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const bubbleSortQuestion: Question = {
  category: "algorithms",
  id: "b9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fb",
  level: "Easy",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "bubble-sort.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "bubble-sort.synopsis.md")),
  title: "Bubble Sort",
}

export default bubbleSortQuestion
