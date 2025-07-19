class TreeNode<T> {
  value: T
  left: TreeNode<T> | null
  right: TreeNode<T> | null

  constructor(value: T) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export class BinaryTree<T> {
  root: TreeNode<T> | null

  constructor() {
    this.root = null
  }

  insert(value: T): void {
    const newNode = new TreeNode(value)
    if (!this.root) {
      this.root = newNode
      return
    }

    let current = this.root
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode
          return
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = newNode
          return
        }
        current = current.right
      }
    }
  }

  search(value: T): boolean {
    if (!this.root) {
      return false
    }

    let current = this.root
    while (current) {
      if (value === current.value) {
        return true
      } else if (value < current.value) {
        current = current.left!
      } else {
        current = current.right!
      }
      if (!current) break
    }
    return false
  }

  inOrderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
    if (node) {
      this.inOrderTraversal(node.left, result)
      result.push(node.value)
      this.inOrderTraversal(node.right, result)
    }
    return result
  }

  preOrderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
    if (node) {
      result.push(node.value)
      this.preOrderTraversal(node.left, result)
      this.preOrderTraversal(node.right, result)
    }
    return result
  }

  postOrderTraversal(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
    if (node) {
      this.postOrderTraversal(node.left, result)
      this.postOrderTraversal(node.right, result)
      result.push(node.value)
    }
    return result
  }
}
