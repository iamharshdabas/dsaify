import type { Question } from "../../types"
import { createFilePath, DATA_STRUCTURES_DIR, getFileContent } from "../../utils/question"

const segmentTreeQuestion: Question = {
  category: "data-structures",
  id: "c9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fa",
  level: "Medium",
  solution: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "segment-tree.solution.ts")),
  synopsis: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "segment-tree.synopsis.md")),
  title: "Segment Tree",
}

export default segmentTreeQuestion
