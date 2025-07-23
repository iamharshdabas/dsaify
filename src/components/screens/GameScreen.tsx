import { Box, useApp, useInput } from "ink"
import { useEffect, useRef, useState } from "react"
import { useTimer } from "use-timer"
import type { Level, Question, QuestionCategory } from "../../types"
import { getQuestion } from "../../utils/question"
import CodePane from "../game/CodePane"
import StatusBar from "../game/StatusBar"
import SynopsisPane from "../game/SynopsisPane"
import ResultsScreen from "./ResultsScreen"

interface GameScreenProps {
  category: QuestionCategory
  level: Level
  setCategory: (category: QuestionCategory | undefined) => void
  setLevel: (level: Level | undefined) => void
  onRestart: () => void
}

export default function GameScreen({ category, level, onRestart }: GameScreenProps) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [questionIndex, setQuestionIndex] = useState(0)
  const [inputValue, setInputValue] = useState("")
  const [showSynopsis, setShowSynopsis] = useState(false)
  const [scroll, setScroll] = useState(0)
  const [finished, setFinished] = useState(false)
  const gameFinishedRef = useRef(false)
  const { time, start, pause, reset } = useTimer()
  const { exit } = useApp()

  const question = questions[questionIndex]

  useInput((input, key) => {
    if (key.escape) {
      exit()
    }

    if (key.ctrl) {
      if (input === "k") {
        setShowSynopsis((prev) => !prev)
        setScroll(0)
      }
      if (input === "u") {
        setScroll((prev) => Math.max(0, prev - 1))
      }
      if (input === "d") {
        setScroll((prev) => prev + 1)
      }
      return
    }

    if (key.tab) {
      setInputValue((prev) => `${prev}  `)
    } else if (key.backspace || key.delete) {
      setInputValue((prev) => prev.slice(0, -1))
    } else if (input) {
      setInputValue((prev) => prev + input)
    }
  })

  useEffect(() => {
    const newQuestion = getQuestion(category, level)
    setQuestions([
      newQuestion,
    ])
    setQuestionIndex(0)
    setInputValue("")
    setFinished(false)
    gameFinishedRef.current = false
    reset()
    start()
  }, [
    category,
    level,
    reset,
    start,
  ])

  useEffect(() => {
    if (question && inputValue.length === question.solution.length && !gameFinishedRef.current) {
      pause()
      setFinished(true)
      gameFinishedRef.current = true
    }
  }, [
    question,
    inputValue,
    pause,
  ])

  if (!question) {
    return null
  }

  const wpm = time > 0 ? Math.round((inputValue.length / 5 / time) * 60) : 0
  const accuracy =
    inputValue.length > 0
      ? (inputValue.split("").filter((char, index) => char === question.solution[index]).length / inputValue.length) *
        100
      : 0

  if (finished) {
    return <ResultsScreen accuracy={accuracy} onRestart={onRestart} wpm={wpm} />
  }

  return (
    <Box flexDirection="column" height={process.stdout.rows - 1}>
      <StatusBar accuracy={accuracy} question={question} time={time} wpm={wpm} />
      {showSynopsis ? (
        <SynopsisPane scroll={scroll} synopsis={question.synopsis} />
      ) : (
        <CodePane code={question.solution} inputValue={inputValue} scroll={scroll} />
      )}
    </Box>
  )
}
