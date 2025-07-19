import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const mergeSortQuestion: Question = {
  category: "algorithms",
  id: "b9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fe",
  level: "Easy",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "merge-sort.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "merge-sort.synopsis.md")),
  title: "Merge Sort",
}

export default mergeSortQuestion
