export class FenwickTree {
  private tree: number[]
  private size: number

  constructor(size: number) {
    this.size = size
    this.tree = new Array(size + 1).fill(0)
  }

  update(index: number, delta: number): void {
    index++ // 1-based index
    while (index <= this.size) {
      this.tree[index] += delta
      index += index & -index
    }
  }

  query(index: number): number {
    index++ // 1-based index
    let sum = 0
    while (index > 0) {
      sum += this.tree[index]
      index -= index & -index
    }
    return sum
  }

  queryRange(left: number, right: number): number {
    return this.query(right) - this.query(left - 1)
  }
}
