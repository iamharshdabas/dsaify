import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const kmpSearchQuestion: Question = {
  category: "algorithms",
  id: "f9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fc",
  level: "Medium",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "kmp-search.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "kmp-search.synopsis.md")),
  title: "KMP Search Algorithm",
}

export default kmpSearchQuestion
