class TreeNode<T> {
  public value: T
  public left: TreeNode<T> | null = null
  public right: TreeNode<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}

export class BinarySearchTree<T> {
  public root: TreeNode<T> | null = null

  insert(value: T) {
    const newNode = new TreeNode(value)
    if (!this.root) {
      this.root = newNode
      return this
    }

    let currentNode = this.root
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode
          return this
        }
        currentNode = currentNode.left
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode
          return this
        }
        currentNode = currentNode.right
      }
    }
  }

  find(value: T) {
    if (!this.root) return null

    let currentNode = this.root
    while (currentNode) {
      if (value === currentNode.value) return currentNode
      if (value < currentNode.value) {
        if (!currentNode.left) {
          throw new Error("Binary Search Tree: Left child is null.")
        }
        currentNode = currentNode.left
      } else {
        if (!currentNode.right) {
          throw new Error("Binary Search Tree: Right child is null.")
        }
        currentNode = currentNode.right
      }
    }

    return null
  }

  contains(value: T) {
    return !!this.find(value)
  }
}
