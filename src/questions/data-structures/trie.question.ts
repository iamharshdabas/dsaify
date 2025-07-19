import type { Question } from "../../types"
import { createFilePath, DATA_STRUCTURES_DIR, getFileContent } from "../../utils/question"

const trieQuestion: Question = {
  category: "data-structures",
  id: "l4m5n6o7-p8q9-0123-4567-890abcdef123",
  level: "Hard",
  solution: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "trie.solution.ts")),
  synopsis: await getFileContent(createFilePath(DATA_STRUCTURES_DIR, "trie.synopsis.txt")),
  title: "Trie (Prefix Tree)",
}

export default trieQuestion
