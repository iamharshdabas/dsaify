## TODOS

- `runTest` - `process.stdin.once("keypress", () => { resolve() })`: This is good, but if the user presses Ctrl+C after completing a question but
  before pressing another key, the cleanupAndExit might not be called from the keypressListener of the current runTest instance, as that listener
  has been removed. It would rely on the global rlKeypressEvents setup. This is a minor edge case, but something to be aware of.

- `getQuestion` Error Handling: The break in the catch block will exit the entire CLI if getQuestion throws an error. This is fine if no questions
  are found at all, but if it's a temporary issue or a specific category/level has no questions, you might want to inform the user and then prompt
  them to try again or select different criteria, rather than exiting immediately.

- `question.solution` and `question.synopsis` loading: These are awaited directly in the Question object definitions (e.g., bfs.question.ts). This
  means that every time getQuestion is called, it's potentially re-reading these files from disk. While Bun's file I/O is fast, for a large number
  of questions, this could become a bottleneck. A better approach might be to load all solutions and synopses once at startup (e.g., in
  src/utils/question.ts when questions array is populated) and store them in memory. This would make getQuestion synchronous and faster.

- Performance - `getFileContent` in `Question` definitions: As mentioned in index.ts review, the solution and synopsis are await
  getFileContent(...) directly in the question object definitions (e.g., bfs.question.ts). This means these files are read every time the index.ts
  module is imported (which happens on every CLI execution). For a CLI that might be run frequently, and especially if the number of questions
  grows, this could lead to unnecessary disk I/O.
  - Recommendation: Load all solution and synopsis content once when the algorithms and dataStructures arrays are initialized. This would involve
    making the index.ts files in src/questions/algorithms and src/questions/data-structures asynchronous, or having a separate loading function
    that populates the Question objects with the actual content.
  - Example (Conceptual):

    ```typescript
    // In src/questions/algorithms/index.ts
    import {
      createFilePath,
      getFileContent,
      ALGORITHMS_DIR,
    } from "../../utils/question";
    import type { Question } from "../../types";

    const loadQuestion = async (
      filename: string,
      title: string,
      level: Level,
    ): Promise<Question> => ({
      category: "algorithms",
      id: "...", // Generate or define ID
      title,
      level,
      solution: await getFileContent(
        createFilePath(ALGORITHMS_DIR, `${filename}.solution.ts`),
      ),
      synopsis: await getFileContent(
        createFilePath(ALGORITHMS_DIR, `${filename}.synopsis.txt`),
      ),
    });

    export const algorithms: Promise<Question[]> = Promise.all([
      loadQuestion("bfs", "Breadth-First Search (BFS)", "Medium"),
      // ... other algorithms
    ]);

    // Then in src/utils/question.ts
    // export const algorithmsQuestions: Question[] = await algorithms;
    ```

    This would shift the await to the top level of src/utils/question.ts (or wherever algorithms and dataStructures are consumed), ensuring
    files are read only once when the application starts.

- `rlOnKeypress` vs. direct `process.stdin.on`: In index.ts, process.stdin.on("keypress", keypressListener) is used directly, and then
  process.stdin.once("keypress", ...) is used. While rlOnKeypress is exported, it's not used in index.ts. This is a minor inconsistency. You could
  either use rlOnKeypress in index.ts or remove rlOnKeypress if it's not intended for external use.
