import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const bfsQuestion: Question = {
  category: "algorithms",
  id: "o7p8q9r0-s1t2-3456-7890-1abcdef23456",
  level: "Medium",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "bfs.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "bfs.synopsis.txt")),
  title: "Breadth-First Search (BFS)",
}

export default bfsQuestion
