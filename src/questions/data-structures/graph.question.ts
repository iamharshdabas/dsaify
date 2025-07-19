import type { Question } from "../../types"
import { createFilePath, DATA_STRUCTURES_DIR, getFileContent } from "../../utils/question"

const graphQuestion: Question = {
  category: "data-structures",
  id: "a9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fc",
  level: "Easy",
  solution: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "graph.solution.ts")),
  synopsis: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "graph.synopsis.md")),
  title: "Graph",
}

export default graphQuestion
