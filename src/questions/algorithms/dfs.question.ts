import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const dfsQuestion: Question = {
  category: "algorithms",
  id: "b9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f9",
  level: "Easy",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "dfs.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "dfs.synopsis.md")),
  title: "Depth First Search",
}

export default dfsQuestion
