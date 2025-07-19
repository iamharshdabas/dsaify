import type { ALGORITHMS_DIR, DATA_STRUCTURES_DIR } from "./utils/question"

export type Level = "Easy" | "Medium" | "Hard"

export interface Question {
  id: string
  category: "data-structures" | "algorithms"
  title: string
  solution: string
  synopsis: string
  level: Level
}

export type KeypressListener = {
  str: string
  key: {
    sequence: string
    name: string
    ctrl: boolean
    meta: boolean
    shift: boolean
  }
}

export type HighlightToken = {
  char: string
  color: string
}

export type QuestionCategory = typeof DATA_STRUCTURES_DIR | typeof ALGORITHMS_DIR
