export function kruskalsAlgorithm(
  graph: {
    from: number
    to: number
    weight: number
  }[],
  n: number,
): {
  from: number
  to: number
  weight: number
}[] {
  const result: {
    from: number
    to: number
    weight: number
  }[] = []
  let i = 0
  let e = 0
  graph.sort((a, b) => a.weight - b.weight)
  const parent = new Array(n).fill(-1)

  while (e < n - 1) {
    const { from, to, weight } = graph[i++]
    const x = find(parent, from)
    const y = find(parent, to)

    if (x !== y) {
      result[e++] = {
        from,
        to,
        weight,
      }
      union(parent, x, y)
    }
  }

  return result
}

function find(parent: number[], i: number): number {
  if (parent[i] === -1) return i
  return find(parent, parent[i])
}

function union(parent: number[], x: number, y: number): void {
  const xset = find(parent, x)
  const yset = find(parent, y)
  parent[xset] = yset
}
