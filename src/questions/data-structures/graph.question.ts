import type { Question } from "../../types"
import { createFilePath, DATA_STRUCTURES_DIR, getFileContent } from "../../utils/question"

const graphQuestion: Question = {
  category: "data-structures",
  id: "j2k3l4m5-n6o7-8901-2345-67890abcdef",
  level: "Medium",
  solution: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "graph.solution.ts")),
  synopsis: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "graph.synopsis.md")),
  title: "Graph (Adjacency List)",
}

export default graphQuestion
