import chalk from "chalk"
import { createHighlighter } from "shiki"

type HighlightToken = {
  chr: string
  color: string
}

const rosepineTheme = {
  // comments
  "#6E6A86": chalk.dim,
  // keys tags types
  "#9CCFD8": chalk.cyan,
  // operators punctuation
  "#908CAA": chalk.dim,
  // conditionals keywords
  "#31748F": chalk.blue,
  // methods parameters
  "#C4A7E7": chalk.magenta,
  // variables
  "#E0DEF4": chalk.white,
  // builtins
  "#EB6F92": chalk.red,
  // booleans functions
  "#EBBCBA": chalk.yellow,
  // strings
  "#F6C177": chalk.green,
} as const

const highlighter = await createHighlighter({
  langs: [
    "typescript",
  ],
  themes: [
    "rose-pine",
  ],
})

export const tokenizeCode = (code: string) => {
  const tokens = highlighter.codeToTokensBase(code, {
    lang: "typescript",
    theme: "rose-pine",
  })

  const highlightedCode: HighlightToken[] = []

  for (const token of tokens) {
    for (const word of token) {
      for (const chr of word.content) {
        highlightedCode.push({
          chr,
          color: word.color || "#ffffff",
        })
      }
    }
    highlightedCode.push({
      chr: "\n",
      color: "#ffffff",
    })
  }

  return highlightedCode
}

export const highlightTokenByChalk = (token: HighlightToken) => {
  let output = ""

  switch (token.color) {
    case "#6E6A86":
      output = rosepineTheme["#6E6A86"](token.chr)
      break
    case "#9CCFD8":
      output = rosepineTheme["#9CCFD8"](token.chr)
      break
    case "#908CAA":
      output = rosepineTheme["#908CAA"](token.chr)
      break
    case "#31748F":
      output = rosepineTheme["#31748F"](token.chr)
      break
    case "#c4A7E7":
      output = rosepineTheme["#C4A7E7"](token.chr)
      break
    case "#E0DEF4":
      output = rosepineTheme["#E0DEF4"](token.chr)
      break
    case "#EB6F92":
      output = rosepineTheme["#EB6F92"](token.chr)
      break
    case "#EBBCBA":
      output = rosepineTheme["#EBBCBA"](token.chr)
      break
    case "#F6C177":
      output = rosepineTheme["#F6C177"](token.chr)
      break
    default:
      output = rosepineTheme["#E0DEF4"](token.chr)
      break
  }

  return output
}
