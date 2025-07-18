#!/usr/bin/env bun

import chalk from "chalk"
import { Command } from "commander"
import { highlightTokenByChalk, tokenizeCode } from "./utils/highlighter"
import { cleanupAndExit, rlClearScreenDown, rlCursorTo, rlOnKeypress } from "./utils/readline"

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

    const render = () => {
      let output = ""
      let userTextIndex = 0

      for (const highlightedToken of highlightedTokens) {
        if (userTextIndex < userText.length) {
          if (userText[userTextIndex] === highlightedToken.chr) {
            output += highlightTokenByChalk(highlightedToken)
          } else {
            output += chalk.black.bgRed(highlightedToken.chr)
          }
          userTextIndex++
        } else {
          output += chalk.dim(highlightedToken.chr)
        }
      }

      rlCursorTo(0, 0)
      rlClearScreenDown()
      process.stdout.write(output)

      const userLines = userText.split("\n")
      const currentLine = userLines.length - 1
      const currentLineText = userLines[currentLine] || ""
      rlCursorTo(currentLineText.length, currentLine)
    }

    rlOnKeypress((str, key) => {
      if (key.ctrl && key.name === "c") {
        cleanupAndExit()
      }

      switch (key.name) {
        case "backspace":
          userText = userText.slice(0, -1)
          break
        case "tab":
          userText += "  "
          break
        case "return":
          userText += "\n"
          break
        default:
          userText += str
      }

      render()
    })

    render()
  })

program.parse()
