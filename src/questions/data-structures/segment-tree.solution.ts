export class SegmentTree {
  private tree: number[]
  private values: number[]
  private n: number

  constructor(values: number[]) {
    this.values = values
    this.n = values.length
    this.tree = new Array(4 * this.n).fill(0)
    this.build(0, 0, this.n - 1)
  }

  private build(node: number, start: number, end: number): void {
    if (start === end) {
      this.tree[node] = this.values[start]
      return
    }
    const mid = Math.floor((start + end) / 2)
    this.build(2 * node + 1, start, mid)
    this.build(2 * node + 2, mid + 1, end)
    this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2]
  }

  update(index: number, value: number): void {
    this.updateTree(0, 0, this.n - 1, index, value)
  }

  private updateTree(node: number, start: number, end: number, index: number, value: number): void {
    if (start === end) {
      this.values[index] = value
      this.tree[node] = value
      return
    }
    const mid = Math.floor((start + end) / 2)
    if (start <= index && index <= mid) {
      this.updateTree(2 * node + 1, start, mid, index, value)
    } else {
      this.updateTree(2 * node + 2, mid + 1, end, index, value)
    }
    this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2]
  }

  query(left: number, right: number): number {
    return this.queryTree(0, 0, this.n - 1, left, right)
  }

  private queryTree(node: number, start: number, end: number, left: number, right: number): number {
    if (right < start || end < left) {
      return 0
    }
    if (left <= start && end <= right) {
      return this.tree[node]
    }
    const mid = Math.floor((start + end) / 2)
    const p1 = this.queryTree(2 * node + 1, start, mid, left, right)
    const p2 = this.queryTree(2 * node + 2, mid + 1, end, left, right)
    return p1 + p2
  }
}
