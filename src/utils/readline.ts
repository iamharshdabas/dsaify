import readline from "node:readline"
import type { KeypressListener } from "../types"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

export const rlClearScreenDown = () => readline.clearScreenDown(process.stdout)
export const rlCursorTo = (x = 0, y = 0) => readline.cursorTo(process.stdout, x, y)
export const rlKeypressEvents = () => {
  if (process.stdin.isTTY) process.stdin.setRawMode(true)
  readline.emitKeypressEvents(process.stdin)
}
export const rlCursorToLastUserInput = (userText: string) => {
  const userLines = userText.split("\n")
  const currentLine = userLines.length - 1
  const currentLineText = userLines[currentLine] || ""
  rlCursorTo(currentLineText.length, currentLine)
}

export const rlOnKeypress = (callback: (str: KeypressListener["str"], key: KeypressListener["key"]) => void) => {
  process.stdin.on("keypress", (str, key) => {
    callback(str, key)
  })
}

export const updateUserText = ({
  userText,
  str,
  key,
}: KeypressListener & {
  userText: string
}) => {
  switch (key?.name) {
    case "backspace":
      return userText.slice(0, -1)
    case "tab":
      return `${userText}  `
    case "return":
      return `${userText}\n`
    default:
      return userText + str
  }
}

export const cleanupAndExit = (
  keypressListener: (str: KeypressListener["str"], key: KeypressListener["key"]) => void,
) => {
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(false)
  }

  process.stdin.removeListener("keypress", keypressListener)
  process.exit(0)
}

export default rl
