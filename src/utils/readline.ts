import readline from "node:readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

export const rlClearScreenDown = () => readline.clearScreenDown(process.stdout)
export const rlCursorTo = (x = 0, y = 0) => readline.cursorTo(process.stdout, x, y)

export const rlOnKeypress = (
  callback: (
    str: string | undefined,
    key: {
      name: string
      ctrl: boolean
    },
  ) => void,
) => {
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true)
  }
  readline.emitKeypressEvents(process.stdin)
  process.stdin.on("keypress", callback)
}

export const cleanupAndExit = () => {
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(false)
  }
  process.stdout.write("\nExiting...\n")
  process.exit(0)
}

export default rl
