import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const longestIncreasingSubsequenceQuestion: Question = {
  category: "algorithms",
  id: "f9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fb",
  level: "Medium",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "longest-increasing-subsequence.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "longest-increasing-subsequence.synopsis.md")),
  title: "Longest Increasing Subsequence",
}

export default longestIncreasingSubsequenceQuestion
