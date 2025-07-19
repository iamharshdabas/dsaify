import type { Question } from "../../types"
import { createSolutionFilePath, DATA_STRUCTURES_DIR, getSolutionAsString } from "../../utils/question"

const stackQuestion: Question = {
  category: "data-structures",
  id: "68be9465-688f-499e-b207-d6c3588eacb3",
  solution: await getSolutionAsString(createSolutionFilePath(DATA_STRUCTURES_DIR, "stack.solution.ts")),
  title: "Stack",
}

export default stackQuestion
