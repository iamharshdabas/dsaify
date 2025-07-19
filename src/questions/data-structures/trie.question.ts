import type { Question } from "../../types"
import { createFilePath, DATA_STRUCTURES_DIR, getFileContent } from "../../utils/question"

const trieQuestion: Question = {
  category: "data-structures",
  id: "a9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8fe",
  level: "Medium",
  solution: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "trie.solution.ts")),
  synopsis: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "trie.synopsis.md")),
  title: "Trie",
}

export default trieQuestion
