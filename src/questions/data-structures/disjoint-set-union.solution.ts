export class DisjointSetUnion {
  private parent: number[]
  private rank: number[]

  constructor(n: number) {
    this.parent = Array(n)
      .fill(0)
      .map((_, i) => i)
    this.rank = Array(n).fill(0)
  }

  find(i: number): number {
    if (this.parent[i] === i) {
      return i
    }
    this.parent[i] = this.find(this.parent[i])
    return this.parent[i]
  }

  union(i: number, j: number): void {
    const iRoot = this.find(i)
    const jRoot = this.find(j)

    if (iRoot !== jRoot) {
      if (this.rank[iRoot] < this.rank[jRoot]) {
        this.parent[iRoot] = jRoot
      } else if (this.rank[iRoot] > this.rank[jRoot]) {
        this.parent[jRoot] = iRoot
      } else {
        this.parent[jRoot] = iRoot
        this.rank[iRoot]++
      }
    }
  }
}
