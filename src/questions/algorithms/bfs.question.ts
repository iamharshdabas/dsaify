import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const bfsQuestion: Question = {
  category: "algorithms",
  id: "b9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fa",
  level: "Easy",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "bfs.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "bfs.synopsis.md")),
  title: "Breadth First Search",
}

export default bfsQuestion
