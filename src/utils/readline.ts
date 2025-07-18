import readline from "node:readline"

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

export const rlOnKeypress = (
  callback: (
    str: string,
    key: {
      name: string
      ctrl?: boolean
    },
  ) => void,
) => {
  process.stdin.on("keypress", (str, key) => {
    if (key.ctrl && key.name === "c") cleanupAndExit()
    callback(str, key)
  })
}

export const updateUserText = (
  userText: string,
  str: string,
  key: {
    name: string
    ctrl?: boolean
  },
) => {
  switch (key.name) {
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

export const cleanupAndExit = () => {
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(false)
  }
  process.stdout.write("\nExiting...\n")
  process.exit(0)
}

export default rl
