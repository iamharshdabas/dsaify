class TreeNode<T> {
  public value: T
  public left: TreeNode<T> | null = null
  public right: TreeNode<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}

export function bfs<T>(root: TreeNode<T> | null): T[] {
  const result: T[] = []
  if (!root) return result

  const queue: TreeNode<T>[] = [
    root,
  ]

  while (queue.length > 0) {
    const node = queue.shift()
    if (node === undefined) {
      throw new Error("BFS: Queue is empty.")
    }
    result.push(node.value)

    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }

  return result
}
