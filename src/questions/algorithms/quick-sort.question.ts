import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const quickSortQuestion: Question = {
  category: "algorithms",
  id: "b9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8ff",
  level: "Easy",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "quick-sort.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "quick-sort.synopsis.md")),
  title: "Quick Sort",
}

export default quickSortQuestion
