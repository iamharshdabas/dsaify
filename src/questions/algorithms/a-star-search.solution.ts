export function aStarSearch(
  graph: number[][],
  start: number,
  goal: number,
  heuristic: (node: number) => number,
): number[] | null {
  const openSet = new Set<number>([
    start,
  ])
  const cameFrom = new Map<number, number>()

  const gScore = new Map<number, number>()
  gScore.set(start, 0)

  const fScore = new Map<number, number>()
  fScore.set(start, heuristic(start))

  while (openSet.size > 0) {
    const current = Array.from(openSet).reduce((a, b) =>
      (fScore.get(a) || Infinity) < (fScore.get(b) || Infinity) ? a : b,
    )

    if (current === goal) {
      return reconstructPath(cameFrom, current)
    }

    openSet.delete(current)

    for (let neighbor = 0; neighbor < graph.length; neighbor++) {
      if (graph[current][neighbor] === 0) continue

      const tentativeGScore = (gScore.get(current) || Infinity) + graph[current][neighbor]

      if (tentativeGScore < (gScore.get(neighbor) || Infinity)) {
        cameFrom.set(neighbor, current)
        gScore.set(neighbor, tentativeGScore)
        fScore.set(neighbor, tentativeGScore + heuristic(neighbor))
        if (!openSet.has(neighbor)) {
          openSet.add(neighbor)
        }
      }
    }
  }

  return null
}

function reconstructPath(cameFrom: Map<number, number>, current: number): number[] {
  const totalPath: number[] = [
    current,
  ]
  while (cameFrom.has(current)) {
    const prev = cameFrom.get(current)
    if (prev === undefined) {
      throw new Error("Path reconstruction error: previous node not found.")
    }
    current = prev
    totalPath.unshift(current)
  }
  return totalPath
}
