/**
 * @class Graph
 * @description Represents a graph using an adjacency list.
 * @template T The type of the values stored in the graph's vertices.
 */
export class Graph<T> {
  private adjList: Map<T, T[]>

  constructor() {
    this.adjList = new Map()
  }

  /**
   * @returns The adjacency list of the graph.
   */
  public get nodes(): Map<T, T[]> {
    return this.adjList
  }

  /**
   * @description Adds a new vertex to the graph.
   * @param vertex The vertex to add.
   */
  public addVertex(vertex: T): void {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, [])
    }
  }

  /**
   * @description Adds an edge between two vertices.
   * @param vertex1 The first vertex.
   * @param vertex2 The second vertex.
   */
  public addEdge(vertex1: T, vertex2: T): void {
    if (!this.adjList.has(vertex1)) {
      this.addVertex(vertex1)
    }
    if (!this.adjList.has(vertex2)) {
      this.addVertex(vertex2)
    }
    this.adjList.get(vertex1)!.push(vertex2)
    this.adjList.get(vertex2)!.push(vertex1)
  }

  /**
   * @description Removes a vertex from the graph.
   * @param vertex The vertex to remove.
   */
  public removeVertex(vertex: T): void {
    if (!this.adjList.has(vertex)) {
      return
    }
    this.adjList.delete(vertex)
    for (const adjacentVertices of this.adjList.values()) {
      const index = adjacentVertices.indexOf(vertex)
      if (index !== -1) {
        adjacentVertices.splice(index, 1)
      }
    }
  }

  /**
   * @description Removes an edge between two vertices.
   * @param vertex1 The first vertex.
   * @param vertex2 The second vertex.
   */
  public removeEdge(vertex1: T, vertex2: T): void {
    const v1Neighbors = this.adjList.get(vertex1)
    const v2Neighbors = this.adjList.get(vertex2)
    if (v1Neighbors && v2Neighbors) {
      const index1 = v1Neighbors.indexOf(vertex2)
      if (index1 !== -1) {
        v1Neighbors.splice(index1, 1)
      }
      const index2 = v2Neighbors.indexOf(vertex1)
      if (index2 !== -1) {
        v2Neighbors.splice(index2, 1)
      }
    }
  }

  /**
   * @description Performs a breadth-first search on the graph.
   * @param startNode The node to start the search from.
   * @returns An array of visited nodes in BFS order.
   */
  public bfs(startNode: T): T[] {
    const visited = new Set<T>()
    const queue: T[] = []
    const result: T[] = []

    if (!this.adjList.has(startNode)) {
      return result
    }

    visited.add(startNode)
    queue.push(startNode)

    while (queue.length > 0) {
      const currentNode = queue.shift()!
      result.push(currentNode)

      const neighbors = this.adjList.get(currentNode)!
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor)
          queue.push(neighbor)
        }
      }
    }
    return result
  }

  /**
   * @description Performs a depth-first search on the graph.
   * @param startNode The node to start the search from.
   * @returns An array of visited nodes in DFS order.
   */
  public dfs(startNode: T): T[] {
    const visited = new Set<T>()
    const result: T[] = []

    if (!this.adjList.has(startNode)) {
      return result
    }

    const dfsRecursive = (currentNode: T) => {
      visited.add(currentNode)
      result.push(currentNode)

      const neighbors = this.adjList.get(currentNode)!
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfsRecursive(neighbor)
        }
      }
    }

    dfsRecursive(startNode)
    return result
  }
}
