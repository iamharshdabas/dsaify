#!/usr/bin/env bun

import { Command } from "commander"
import { getHighlightedChar, tokenizeCode } from "./utils/highlighter"
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
  .action(async () => {
    const hintText = `import chalk from "chalk"

export const getHintedText = (hintText: string, userText: string) => {
  let outputText = ""

  for (let i = 0; i < hintText.length; i++) {
    if (i < userText.length) {
      if (userText[i] === hintText[i]) {
        outputText += chalk.green(hintText[i])
      } else {
        outputText += chalk.red(hintText[i])
      }
    } else {
      outputText += chalk.gray(hintText[i])
    }
  }

  return outputText
}`

    const highlightedTokens = tokenizeCode(hintText)
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
