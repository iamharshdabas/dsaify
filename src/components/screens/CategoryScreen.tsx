import { Box, Text } from "ink"
import type { QuestionCategory } from "../../types"
import { ALGORITHMS_DIR, DATA_STRUCTURES_DIR } from "../../utils/question"
import SelectInput from "../common/SelectInput"

interface CategoryScreenProps {
  setCategory: (category: QuestionCategory) => void
}

const items = [
  {
    label: "All",
    value: "All",
  },
  {
    label: "Algorithms",
    value: ALGORITHMS_DIR,
  },
  {
    label: "Data Structures",
    value: DATA_STRUCTURES_DIR,
  },
]

export default function CategoryScreen({ setCategory }: CategoryScreenProps) {
  return (
    <Box flexDirection="column">
      <Text>Select a category:</Text>
      <SelectInput initialIndex={0} items={items} onSelect={(item) => setCategory(item.value as QuestionCategory)} />
    </Box>
  )
}
