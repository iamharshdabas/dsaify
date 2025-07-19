class TreeNode<T> {
  public value: T
  public left: TreeNode<T> | null = null
  public right: TreeNode<T> | null = null
  public height = 1

  constructor(value: T) {
    this.value = value
  }
}

export class AVLTree<T> {
  public root: TreeNode<T> | null = null

  private getHeight(node: TreeNode<T> | null): number {
    return node ? node.height : 0
  }

  private updateHeight(node: TreeNode<T>): void {
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
  }

  private getBalanceFactor(node: TreeNode<T>): number {
    return this.getHeight(node.left) - this.getHeight(node.right)
  }

  private rightRotate(y: TreeNode<T>): TreeNode<T> {
    if (!y.left) {
      throw new Error("AVL Tree: Left child is null.")
    }
    const x = y.left
    const T2 = x.right
    x.right = y
    y.left = T2
    this.updateHeight(y)
    this.updateHeight(x)
    return x
  }

  private leftRotate(x: TreeNode<T>): TreeNode<T> {
    if (!x.right) {
      throw new Error("AVL Tree: Right child is null.")
    }
    const y = x.right
    const T2 = y.left
    y.left = x
    x.right = T2
    this.updateHeight(x)
    this.updateHeight(y)
    return y
  }

  insert(value: T): void {
    this.root = this.insertNode(this.root, value)
  }

  private insertNode(node: TreeNode<T> | null, value: T): TreeNode<T> {
    if (!node) {
      return new TreeNode(value)
    }

    if (value < node.value) {
      node.left = this.insertNode(node.left, value)
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value)
    } else {
      return node // Duplicate values are not allowed
    }

    this.updateHeight(node)
    const balance = this.getBalanceFactor(node)

    if (balance > 1) {
      if (value < node.left?.value) {
        return this.rightRotate(node)
      }
      if (!node.left) {
        throw new Error("AVL Tree: Left child is null.")
      }
      node.left = this.leftRotate(node.left)
      return this.rightRotate(node)
    }

    if (balance < -1) {
      if (value > node.right?.value) {
        return this.leftRotate(node)
      }
      if (!node.right) {
        throw new Error("AVL Tree: Right child is null.")
      }
      node.right = this.rightRotate(node.right)
      return this.leftRotate(node)
    }

    return node
  }
}
