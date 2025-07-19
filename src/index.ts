#!/usr/bin/env bun

import { Command } from "commander"
import type { Question } from "./types"
import { getHighlightedChar, tokenizeCode } from "./utils/highlighter"
import { ALGORITHMS_DIR, DATA_STRUCTURES_DIR, getRandomQuestion } from "./utils/question"
import {
  rlClearScreenDown,
  rlCursorTo,
  rlCursorToLastUserInput,
  rlKeypressEvents,
  rlOnKeypress,
  updateUserText,
} from "./utils/readline"

const program = new Command()

program.name("Dsaify").version("0.0.0").description("A simple typing speed test CLI for DSA.")

program
  .command("start")
  .description("Starts the typing test.")
  .argument("[topic]", "topic to practice (e.g., algorithms, data-structures)")
  .action(async (topic) => {
    let question: Question
    if (topic === "data-structures") question = await getRandomQuestion(DATA_STRUCTURES_DIR)
    else if (topic === "algorithms") question = await getRandomQuestion(ALGORITHMS_DIR)
    else question = await getRandomQuestion()

    const highlightedTokens = tokenizeCode(question?.solution)
    let userText = ""

    rlKeypressEvents()

    const render = () => {
      const output = highlightedTokens
        .map((highlightedToken, index) => getHighlightedChar(userText, highlightedToken, index))
        .join("")

      rlCursorTo(0, 0)
      rlClearScreenDown()
      process.stdout.write(output)
      rlCursorToLastUserInput(userText)
    }

    rlOnKeypress((str, key) => {
      userText = updateUserText(userText, str, key)
      render()
    })

    render()
  })

program.parse()
