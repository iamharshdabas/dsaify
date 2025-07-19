import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const kosarajusAlgorithmQuestion: Question = {
  category: "algorithms",
  id: "q9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fb",
  level: "Hard",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "kosarajus-algorithm.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "kosarajus-algorithm.synopsis.md")),
  title: "Kosaraju's Algorithm (SCC)",
}

export default kosarajusAlgorithmQuestion
