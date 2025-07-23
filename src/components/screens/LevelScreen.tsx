import { Box, Text } from "ink"
import type { Level } from "../../types"
import SelectInput from "../common/SelectInput"

interface LevelScreenProps {
  setLevel: (level: Level) => void
}

const items = [
  {
    label: "All",
    value: "All",
  },
  {
    label: "Easy",
    value: "Easy",
  },
  {
    label: "Medium",
    value: "Medium",
  },
  {
    label: "Hard",
    value: "Hard",
  },
]

export default function LevelScreen({ setLevel }: LevelScreenProps) {
  return (
    <Box flexDirection="column">
      <Text>Select a level (press Enter for All):</Text>
      <SelectInput initialIndex={0} items={items} onSelect={(item) => setLevel(item.value as Level)} />
    </Box>
  )
}
