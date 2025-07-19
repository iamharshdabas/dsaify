class TreeNode<T> {
  public value: T
  public left: TreeNode<T> | null = null
  public right: TreeNode<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}

export function dfs<T>(root: TreeNode<T> | null): T[] {
  const result: T[] = []
  if (!root) return result

  const stack: TreeNode<T>[] = [
    root,
  ]

  while (stack.length > 0) {
    const node = stack.pop()
    if (node === undefined) {
      throw new Error("DFS: Stack is empty.")
    }
    result.push(node.value)

    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }

  return result
}
