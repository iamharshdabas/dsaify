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

export class BinarySearchTree<T> {
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

  find(value: T): boolean {
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

  min(): T | null {
    if (!this.root) {
      return null
    }
    let current = this.root
    while (current.left) {
      current = current.left
    }
    return current.value
  }

  max(): T | null {
    if (!this.root) {
      return null
    }
    let current = this.root
    while (current.right) {
      current = current.right
    }
    return current.value
  }

  delete(value: T): void {
    this.root = this._deleteNode(this.root, value)
  }

  private _deleteNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (!node) {
      return null
    }

    if (value < node.value) {
      node.left = this._deleteNode(node.left, value)
    } else if (value > node.value) {
      node.right = this._deleteNode(node.right, value)
    } else {
      // Node with no children or one child
      if (!node.left && !node.right) {
        return null
      } else if (!node.left) {
        return node.right
      } else if (!node.right) {
        return node.left
      } else {
        // Node with two children: Get the inorder successor (smallest in the right subtree)
        let tempNode = node.right
        while (tempNode.left) {
          tempNode = tempNode.left
        }
        node.value = tempNode.value
        node.right = this._deleteNode(node.right, tempNode.value)
      }
    }
    return node
  }

  inOrderTraversal(callback: (value: T) => void): void {
    this._inOrderTraversal(this.root, callback)
  }

  private _inOrderTraversal(node: TreeNode<T> | null, callback: (value: T) => void): void {
    if (node) {
      this._inOrderTraversal(node.left, callback)
      callback(node.value)
      this._inOrderTraversal(node.right, callback)
    }
  }

  preOrderTraversal(callback: (value: T) => void): void {
    this._preOrderTraversal(this.root, callback)
  }

  private _preOrderTraversal(node: TreeNode<T> | null, callback: (value: T) => void): void {
    if (node) {
      callback(node.value)
      this._preOrderTraversal(node.left, callback)
      this._preOrderTraversal(node.right, callback)
    }
  }

  postOrderTraversal(callback: (value: T) => void): void {
    this._postOrderTraversal(this.root, callback)
  }

  private _postOrderTraversal(node: TreeNode<T> | null, callback: (value: T) => void): void {
    if (node) {
      this._postOrderTraversal(node.left, callback)
      this._postOrderTraversal(node.right, callback)
      callback(node.value)
    }
  }
}
