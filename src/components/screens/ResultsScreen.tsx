import { Box, Text, useInput } from "ink"

interface ResultsScreenProps {
  wpm: number
  accuracy: number
  onRestart: () => void
}

export default function ResultsScreen({ wpm, accuracy, onRestart }: ResultsScreenProps) {
  useInput((input) => {
    if (input === "r") {
      onRestart()
    }
  })

  return (
    <Box flexDirection="column">
      <Text key="results">Results:</Text>
      <Text key="wpm">WPM: {wpm}</Text>
      <Text key="accuracy">Accuracy: {accuracy.toFixed(2)}%</Text>
      <Text key="restart">Press 'r' to restart.</Text>
    </Box>
  )
}
