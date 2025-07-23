import { Box, Text } from "ink"

interface CodePaneProps {
  code: string
  scroll: number
  inputValue: string
}

export default function CodePane({ code, scroll, inputValue }: CodePaneProps) {
  const characters = code.split("")

  return (
    <Box flexGrow={1} overflowY="hidden">
      <Box flexDirection="column" marginTop={-scroll}>
        <Text>
          {characters.map((char, index) => {
            const key = `${char}-${index}`
            const inputChar = inputValue[index]
            const isCorrect = char === inputChar
            const isTyped = index < inputValue.length
            const isCurrent = index === inputValue.length

            if (isCurrent) {
              return (
                <Text backgroundColor="gray" key={key}>
                  {char}
                </Text>
              )
            }

            if (!isTyped) {
              return <Text key={key}>{char}</Text>
            }

            return (
              <Text color={isCorrect ? "green" : "red"} key={key}>
                {char}
              </Text>
            )
          })}
        </Text>
      </Box>
    </Box>
  )
}
