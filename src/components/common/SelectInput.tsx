import { Box, Text, useInput } from "ink"
import { useEffect, useState } from "react"

interface SelectInputProps<T> {
  items: Array<{
    label: string
    value: T
  }>
  onSelect: (item: { label: string; value: T }) => void
  initialIndex?: number
}

export default function SelectInput<T>({ items, onSelect, initialIndex = 0 }: SelectInputProps<T>) {
  const [focusedIndex, setFocusedIndex] = useState(initialIndex)

  useEffect(() => {
    if (items.length > 0) {
      setFocusedIndex((prevIndex) => Math.min(prevIndex, items.length - 1))
    } else {
      setFocusedIndex(0)
    }
  }, [
    items,
  ])

  useInput((_input, key) => {
    if (items.length === 0) {
      return
    }

    if (key.upArrow) {
      setFocusedIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1))
    } else if (key.downArrow) {
      setFocusedIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1))
    } else if (key.return) {
      const selectedItem = items[focusedIndex]
      if (selectedItem) {
        onSelect(selectedItem)
      }
    }
  })

  if (items.length === 0) {
    return null
  }

  return (
    <Box flexDirection="column">
      {items.map((item, index) => (
        <Text color={index === focusedIndex ? "cyan" : undefined} key={item.label}>
          {index === focusedIndex ? `> ${item.label}` : `  ${item.label}`}
        </Text>
      ))}
    </Box>
  )
}
