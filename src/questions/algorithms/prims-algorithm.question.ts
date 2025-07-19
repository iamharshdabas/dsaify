import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const primsAlgorithmQuestion: Question = {
  category: "algorithms",
  id: "d9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fc",
  level: "Medium",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "prims-algorithm.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "prims-algorithm.synopsis.md")),
  title: "Prim's Algorithm",
}

export default primsAlgorithmQuestion
