import type { Question } from "../../types"
import { createFilePath, DATA_STRUCTURES_DIR, getFileContent } from "../../utils/question"

const disjointSetUnionQuestion: Question = {
  category: "data-structures",
  id: "f9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f8",
  level: "Medium",
  solution: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "disjoint-set-union.solution.ts")),
  synopsis: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "disjoint-set-union.synopsis.md")),
  title: "Disjoint Set Union",
}

export default disjointSetUnionQuestion
