#!/usr/bin/env bun

import { Command } from "commander"
import type { KeypressListener, Level, Question, QuestionCategory } from "./types"
import { getHighlightedChar, tokenizeCode } from "./utils/highlighter"
import { ALGORITHMS_DIR, DATA_STRUCTURES_DIR, getQuestion } from "./utils/question"
import {
  cleanupAndExit,
  rlClearScreenDown,
  rlCursorTo,
  rlCursorToLastUserInput,
  rlKeypressEvents,
  updateUserText,
} from "./utils/readline"

const program = new Command()

program.name("Dsaify").version("0.0.0").description("A simple typing speed test CLI for DSA.")

rlKeypressEvents()

async function runTest(question: Question): Promise<void> {
  const highlightedTokens = tokenizeCode(question.solution)
  let userText = ""

  const render = () => {
    const output = highlightedTokens
      .map((highlightedToken, index) => getHighlightedChar(userText, highlightedToken, index))
      .join("")

    rlCursorTo(0, 0)
    rlClearScreenDown()
    process.stdout.write(output)
    rlCursorToLastUserInput(userText)
  }

  return new Promise((resolve) => {
    const keypressListener = (str: KeypressListener["str"], key: KeypressListener["key"]) => {
      if (key?.ctrl && key?.name === "c") cleanupAndExit(keypressListener)

      userText = updateUserText({
        key,
        str,
        userText,
      })
      render()

      if (userText === question.solution) {
        process.stdin.removeListener("keypress", keypressListener)
        console.log("\n\nQuestion completed! Press any key for the next question or Ctrl+C to exit.")
        process.stdin.once("keypress", () => {
          resolve()
        })
      }
    }

    process.stdin.on("keypress", keypressListener)
    render()
  })
}

program
  .command("start")
  .description("Starts the typing test.")
  .argument("[arg1]", "category or level (e.g., algorithms, easy)")
  .argument("[arg2]", "level (if arg1 is category, e.g., easy)")
  .action(async (arg1, arg2) => {
    let selectedCategory: QuestionCategory | undefined
    let selectedLevel: Level | undefined

    const categories: QuestionCategory[] = [
      ALGORITHMS_DIR,
      DATA_STRUCTURES_DIR,
    ]
    const levels: Level[] = [
      "Easy",
      "Medium",
      "Hard",
    ]

    if (arg1) {
      if (categories.includes(arg1)) {
        selectedCategory = arg1
        if (arg2 && levels.includes(arg2)) {
          selectedLevel = arg2
        }
      } else if (levels.includes(arg1)) {
        selectedLevel = arg1
      }
    }

    while (true) {
      try {
        const question = getQuestion(selectedCategory, selectedLevel)
        // console.log(`\n--- ${question.title} (${question.level}) ---\n`)
        // console.log(`${question.synopsis}\n`)
        await runTest(question)
      } catch (error) {
        if (error instanceof Error) {
          console.error(`\nError: ${error.message}`)
        } else console.error("\nAn unexpected error occurred.")
        break
      }
    }
  })

program.parse()
