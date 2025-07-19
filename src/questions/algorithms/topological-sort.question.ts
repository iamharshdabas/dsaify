import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const topologicalSortQuestion: Question = {
  category: "algorithms",
  id: "e9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fb",
  level: "Medium",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "topological-sort.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "topological-sort.synopsis.md")),
  title: "Topological Sort",
}

export default topologicalSortQuestion
