import fs from "node:fs/promises"
import path from "node:path"

const SRC_DIR = path.resolve(process.cwd(), "src")
const QUESTIONS_DIR = path.join(SRC_DIR, "questions")
const CATEGORIES = [
  "algorithms",
  "data-structures",
]

async function updateQuestions() {
  for (const category of CATEGORIES) {
    const categoryDir = path.join(QUESTIONS_DIR, category)
    const files = await fs.readdir(categoryDir)
    const questionFiles = files.filter((file) => file.endsWith(".question.ts"))

    for (const questionFile of questionFiles) {
      const questionFilePath = path.join(categoryDir, questionFile)
      const id = questionFile.replace(".question.ts", "")

      try {
        const fileContent = await fs.readFile(questionFilePath, "utf-8")

        const titleMatch = /title: "([^"]+)"/.exec(fileContent)
        const levelMatch = /level: "([^"]+)"/.exec(fileContent)

        if (!titleMatch || !levelMatch) {
          console.error(`Could not parse title or level for ${questionFile}`)
          continue
        }

        const title = titleMatch[1]
        const level = levelMatch[1]

        const solutionFilePath = path.join(categoryDir, `${id}.solution.ts`)
        const synopsisFilePath = path.join(categoryDir, `${id}.synopsis.txt`)

        const solutionContent = await fs.readFile(solutionFilePath, "utf-8")
        const synopsisContent = await fs.readFile(synopsisFilePath, "utf-8")

        const questionName = id
          .split("-")
          .map((word, index) => (index === 0 ? word : `${word[0]?.toUpperCase()}${word.slice(1)}`))
          .join("")

        const updatedQuestionFileContent = `import type { Question } from "../../types"

const ${questionName}Question: Question = {
  category: "${category}",
  level: "${level}",
  solution: ${JSON.stringify(solutionContent.trim())},
  synopsis: ${JSON.stringify(synopsisContent.trim())},
  title: "${title}",
}

export default ${questionName}Question
`

        await fs.writeFile(questionFilePath, updatedQuestionFileContent)
        console.log(`Updated ${questionFile}`)
      } catch (error) {
        console.error(`Failed to update ${questionFile}:`, error)
      }
    }
  }
}

updateQuestions()
  .then(() => {
    console.log("All questions updated successfully!")
  })
  .catch((error) => {
    console.error("An unexpected error occurred:", error)
    process.exit(1)
  })
