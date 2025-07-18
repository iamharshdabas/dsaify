#!/usr/bin/env bun

import { Command } from "commander"
import { cleanupAndExit, rlClearScreenDown, rlCursorTo, rlOnKeypress } from "./utils/readline"
import { getHintedText } from "./utils/text"

const program = new Command()

program.name("Dsaify").version("0.0.0").description("A simple typing speed test CLI for DSA.")

program
  .command("start")
  .description("Starts the typing test.")
  .action(() => {
    const hintText = "readline.emitKeypressEvents(process.stdin)"
    let userText = ""

    const render = () => {
      const output = getHintedText(hintText, userText)
      rlCursorTo(0, 0)
      rlClearScreenDown()
      process.stdout.write(output)
      const userLines = userText.split("\n")
      const currentLine = userLines.length - 1

      rlCursorTo(userLines[currentLine]?.length, currentLine)
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
