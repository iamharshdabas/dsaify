import { Box, Text } from "ink"

interface SynopsisPaneProps {
  synopsis: string
  scroll: number
}

export default function SynopsisPane({ synopsis, scroll }: SynopsisPaneProps) {
  return (
    <Box flexDirection="column" flexGrow={1}>
      <Text bold>Synopsis:</Text>
      <Box flexGrow={1} overflowY="hidden">
        <Box flexDirection="column" marginTop={-scroll}>
          <Text>{synopsis}</Text>
        </Box>
      </Box>
    </Box>
  )
}
