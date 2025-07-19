import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const longestCommonSubsequenceQuestion: Question = {
  category: "algorithms",
  id: "e9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fc",
  level: "Medium",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "longest-common-subsequence.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "longest-common-subsequence.synopsis.md")),
  title: "Longest Common Subsequence",
}

export default longestCommonSubsequenceQuestion
