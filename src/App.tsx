import { Text, useStdin } from "ink"
import { useState } from "react"
import CategoryScreen from "./components/screens/CategoryScreen"
import GameScreen from "./components/screens/GameScreen"
import LevelScreen from "./components/screens/LevelScreen"
import type { Level, QuestionCategory } from "./types"

export default function App() {
  const { isRawModeSupported } = useStdin()
  const [category, setCategory] = useState<QuestionCategory | undefined>()
  const [level, setLevel] = useState<Level | undefined>()

  const handleRestart = () => {
    setCategory(undefined)
    setLevel(undefined)
  }

  if (!isRawModeSupported) {
    return <Text>Raw mode is not supported. Please use a different terminal.</Text>
  }

  if (!category) {
    return <CategoryScreen setCategory={setCategory} />
  }

  if (!level) {
    return <LevelScreen setLevel={setLevel} />
  }

  return (
    <GameScreen
      category={category}
      level={level}
      onRestart={handleRestart}
      setCategory={setCategory}
      setLevel={setLevel}
    />
  )
}
