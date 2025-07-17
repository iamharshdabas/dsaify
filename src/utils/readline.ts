import readline from "node:readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
})
readline.cursorTo(process.stdout, 0, 0)
readline.clearScreenDown(process.stdout)

export default rl
