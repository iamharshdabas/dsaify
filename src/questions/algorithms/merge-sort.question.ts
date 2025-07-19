import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const mergeSortQuestion: Question = {
  category: "algorithms",
  id: "f8g9h0i1-j2k3-4567-8901-2abcdef34567",
  level: "Medium",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "merge-sort.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "merge-sort.synopsis.txt")),
  title: "Merge Sort",
}

export default mergeSortQuestion
