import chalk from "chalk"
import { createHighlighter } from "shiki"
import type { HighlightToken } from "../types"

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

export const tokenizeCode = (code: string): HighlightToken[] => {
  const tokens = highlighter.codeToTokensBase(code, {
    lang: "typescript",
    theme: "rose-pine",
  })

  return tokens.flatMap((token) => {
    const wordTokens = token.flatMap((word) =>
      word.content.split("").map((char) => ({
        char,
        color: word.color || "#ffffff",
      })),
    )
    return [
      ...wordTokens,
      {
        char: "\n",
        color: "#ffffff",
      },
    ]
  })
}

export const highlightTokenByChalk = (token: HighlightToken) => {
  // @ts-ignore because I don't want to do typescript gymnastics right now.
  const chalkFn = rosepineTheme[token.color] || chalk.white
  return chalkFn(token.char)
}

export const getHighlightedChar = (userText: string, highlightedToken: HighlightToken, index: number) => {
  if (index < userText.length) {
    if (userText[index] === highlightedToken.char) {
      return highlightTokenByChalk(highlightedToken)
    } else {
      return chalk.black.bgRed(highlightedToken.char)
    }
  } else {
    return chalk.dim(highlightedToken.char)
  }
}
