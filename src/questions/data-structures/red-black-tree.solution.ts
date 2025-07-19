enum Color {
  RED,
  BLACK,
}

class RBNode<T> {
  public value: T
  public color: Color
  public left: RBNode<T> | null = null
  public right: RBNode<T> | null = null
  public parent: RBNode<T> | null = null

  constructor(value: T, color: Color = Color.RED) {
    this.value = value
    this.color = color
  }
}

export class RedBlackTree<T> {
  private root: RBNode<T> | null = null

  insert(value: T): void {
    const newNode = new RBNode(value)
    if (!this.root) {
      this.root = newNode
      this.root.color = Color.BLACK
      return
    }

    let current = this.root
    let parent: RBNode<T> | null = null
    while (current) {
      parent = current
      if (value < current.value) {
        current = current.left
      } else {
        current = current.right
      }
    }

    newNode.parent = parent
    if (parent) {
      if (value < parent.value) {
        parent.left = newNode
      } else {
        parent.right = newNode
      }
    } else {
      // This case should ideally not be reached if the initial `if (!this.root)` is correct.
      // If it is reached, it means newNode is the root.
      this.root = newNode
    }

    this.fixInsert(newNode)
  }

  private fixInsert(node: RBNode<T>): void {
    while (node !== this.root && node.parent?.color === Color.RED) {
      const parent = node.parent
      if (!parent) {
        // This should not happen due to the while condition, but for type safety
        break
      }
      const grandparent = parent.parent
      if (!grandparent) {
        // This can happen if parent is the root
        break
      }

      if (parent === grandparent.left) {
        const uncle = grandparent.right
        if (uncle && uncle.color === Color.RED) {
          parent.color = Color.BLACK
          uncle.color = Color.BLACK
          grandparent.color = Color.RED
          node = grandparent
        } else {
          if (node === parent.right) {
            node = parent
            this.rotateLeft(node)
          }
          parent.color = Color.BLACK
          grandparent.color = Color.RED
          this.rotateRight(grandparent)
        }
      } else {
        const uncle = grandparent.left
        if (uncle && uncle.color === Color.RED) {
          parent.color = Color.BLACK
          uncle.color = Color.BLACK
          grandparent.color = Color.RED
          node = grandparent
        } else {
          if (node === parent.left) {
            node = parent
            this.rotateRight(node)
          }
          parent.color = Color.BLACK
          grandparent.color = Color.RED
          this.rotateLeft(grandparent)
        }
      }
    }
    if (this.root) {
      this.root.color = Color.BLACK
    }
  }

  private rotateLeft(node: RBNode<T>): void {
    if (!node.right) {
      throw new Error("Red-Black Tree: Right child is null.")
    }
    const rightChild = node.right
    node.right = rightChild.left
    if (rightChild.left) {
      rightChild.left.parent = node
    }
    rightChild.parent = node.parent
    if (!node.parent) {
      this.root = rightChild
    } else if (node === node.parent.left) {
      node.parent.left = rightChild
    } else {
      node.parent.right = rightChild
    }
    rightChild.left = node
    node.parent = rightChild
  }

  private rotateRight(node: RBNode<T>): void {
    if (!node.left) {
      throw new Error("Red-Black Tree: Left child is null.")
    }
    const leftChild = node.left
    node.left = leftChild.right
    if (leftChild.right) {
      leftChild.right.parent = node
    }
    leftChild.parent = node.parent
    if (!node.parent) {
      this.root = leftChild
    } else if (node === node.parent.right) {
      node.parent.right = leftChild
    } else {
      node.parent.left = leftChild
    }
    leftChild.right = node
    node.parent = leftChild
  }
}
