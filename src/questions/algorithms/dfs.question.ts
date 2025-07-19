import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const dfsQuestion: Question = {
  category: "algorithms",
  id: "p8q9r0s1-t2u3-4567-8901-2abcdef34567",
  level: "Medium",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "dfs.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "dfs.synopsis.md")),
  title: "Depth-First Search (DFS)",
}

export default dfsQuestion
