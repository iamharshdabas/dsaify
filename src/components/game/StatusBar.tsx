import { Box, Text } from "ink"
import type { Question } from "../../types"

interface StatusBarProps {
  question: Question
  time: number
  wpm: number
  accuracy: number
}

export default function StatusBar({ question, time, wpm, accuracy }: StatusBarProps) {
  return (
    <Box flexDirection="column" marginBottom={1}>
      <Box>
        <Text color="gray">Category: </Text>
        <Text color="cyan">{question.category}</Text>
        <Text color="gray"> | </Text>
        <Text color="gray">Level: </Text>
        <Text color="cyan">{question.level}</Text>
        <Text color="gray"> | </Text>
        <Text color="gray">Question: </Text>
        <Text color="cyan">{question.name}</Text>
        <Text color="gray"> | </Text>
        <Text color="gray">Time: </Text>
        <Text color="yellow">{time}s</Text>
        <Text color="gray"> | </Text>
        <Text color="gray">WPM: </Text>
        <Text color="yellow">{wpm > 0 ? wpm : 0}</Text>
        <Text color="gray"> | </Text>
        <Text color="gray">Accuracy: </Text>
        <Text color="yellow">{accuracy > 0 ? accuracy.toFixed(2) : 0}%</Text>
      </Box>
    </Box>
  )
}
