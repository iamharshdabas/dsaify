import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const rabinKarpAlgorithmQuestion: Question = {
  category: "algorithms",
  id: "j9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f8",
  level: "Medium",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "rabin-karp-algorithm.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "rabin-karp-algorithm.synopsis.md")),
  title: "Rabin-Karp Algorithm",
}

export default rabinKarpAlgorithmQuestion
