export class Graph<T> {
  private adjList: Map<T, T[]>

  constructor() {
    this.adjList = new Map()
  }

  addVertex(vertex: T): void {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, [])
    }
  }

  addEdge(vertex1: T, vertex2: T): void {
    if (!this.adjList.has(vertex1)) {
      this.addVertex(vertex1)
    }
    if (!this.adjList.has(vertex2)) {
      this.addVertex(vertex2)
    }
    this.adjList.get(vertex1)?.push(vertex2)
    this.adjList.get(vertex2)?.push(vertex1)
  }

  getVertices(): T[] {
    return Array.from(this.adjList.keys())
  }

  getNeighbors(vertex: T): T[] | undefined {
    return this.adjList.get(vertex)
  }

  printGraph(): void {
    for (const [vertex, neighbors] of this.adjList.entries()) {
      console.log(`${vertex} -> ${neighbors.join(", ")}`)
    }
  }
}
