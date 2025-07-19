export class Graph<T> {
  private adjacencyList: Map<T, T[]> = new Map()

  addVertex(vertex: T) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, [])
    }
  }

  addEdge(vertex1: T, vertex2: T) {
    this.adjacencyList.get(vertex1)?.push(vertex2)
    this.adjacencyList.get(vertex2)?.push(vertex1)
  }

  removeEdge(vertex1: T, vertex2: T) {
    this.adjacencyList.set(vertex1, this.adjacencyList.get(vertex1)?.filter((v) => v !== vertex2) || [])
    this.adjacencyList.set(vertex2, this.adjacencyList.get(vertex2)?.filter((v) => v !== vertex1) || [])
  }

  removeVertex(vertex: T) {
    while (this.adjacencyList.get(vertex)?.length) {
      const adjacentVertex = this.adjacencyList.get(vertex)?.pop()
      if (adjacentVertex) {
        this.removeEdge(vertex, adjacentVertex)
      }
    }
    this.adjacencyList.delete(vertex)
  }
}
