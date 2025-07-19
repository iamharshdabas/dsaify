import type { Question } from "../../types"
import { ALGORITHMS_DIR, createFilePath, getFileContent } from "../../utils/question"

const coinChangeQuestion: Question = {
  category: "algorithms",
  id: "f9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fa",
  level: "Medium",
  solution: await getFileContent(createFilePath(ALGORITHMS_DIR, "coin-change.solution.ts")),
  synopsis: await getFileContent(createFilePath(ALGORITHMS_DIR, "coin-change.synopsis.md")),
  title: "Coin Change Problem",
}

export default coinChangeQuestion
