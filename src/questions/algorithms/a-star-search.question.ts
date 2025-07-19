import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const aStarSearchQuestion: Question = {
  category: "algorithms",
  id: "e9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8ff",
  level: "Medium",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "a-star-search.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "a-star-search.synopsis.md")),
  title: "A* Search",
}

export default aStarSearchQuestion
