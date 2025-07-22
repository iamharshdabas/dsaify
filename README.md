## TODOS

- `runTest` - `process.stdin.once("keypress", () => { resolve() })`: This is good, but if the user presses Ctrl+C after completing a question but
  before pressing another key, the cleanupAndExit might not be called from the keypressListener of the current runTest instance, as that listener
  has been removed. It would rely on the global rlKeypressEvents setup. This is a minor edge case, but something to be aware of.

- `getQuestion` Error Handling: The break in the catch block will exit the entire CLI if getQuestion throws an error. This is fine if no questions
  are found at all, but if it's a temporary issue or a specific category/level has no questions, you might want to inform the user and then prompt
  them to try again or select different criteria, rather than exiting immediately.

- `rlOnKeypress` vs. direct `process.stdin.on`: In index.ts, process.stdin.on("keypress", keypressListener) is used directly, and then
  process.stdin.once("keypress", ...) is used. While rlOnKeypress is exported, it's not used in index.ts. This is a minor inconsistency. You could
  either use rlOnKeypress in index.ts or remove rlOnKeypress if it's not intended for external use.
