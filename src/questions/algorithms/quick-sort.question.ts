import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const quickSortQuestion: Question = {
  category: "algorithms",
  id: "g9h0i1j2-k3l4-5678-9012-3abcdef45678",
  level: "Medium",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "quick-sort.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "quick-sort.synopsis.txt")),
  title: "Quick Sort",
}

export default quickSortQuestion
