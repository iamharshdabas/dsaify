import chalk from "chalk"

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
}
