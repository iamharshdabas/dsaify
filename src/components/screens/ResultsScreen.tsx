import { Box, Text, useInput } from "ink"

interface ResultsScreenProps {
  wpm: number
  accuracy: number
  onRestart: () => void
}

export default function ResultsScreen({ wpm, accuracy, onRestart }: ResultsScreenProps) {
  useInput(() => {
    onRestart()
  })

  return (
    <Box alignItems="center" flexDirection="column" height="100%" justifyContent="center">
      <Box alignItems="center" borderColor="cyan" borderStyle="round" flexDirection="column" padding={2}>
        <Text bold color="green">
          ─── Game Over! ───
        </Text>
        <Box height={1} />
        <Text>
          <Text bold>Words Per Minute:</Text> <Text color="yellow">{wpm}</Text>
        </Text>
        <Text>
          <Text bold>Accuracy:</Text> <Text color="yellow">{accuracy.toFixed(2)}%</Text>
        </Text>
        <Box height={1} />
        <Text color="magenta">Press any key for a new question.</Text>
      </Box>
    </Box>
  )
}
