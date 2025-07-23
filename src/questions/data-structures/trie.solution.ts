class TrieNode {
  children: Map<string, TrieNode>
  isEndOfWord: boolean

  constructor() {
    this.children = new Map()
    this.isEndOfWord = false
  }
}

export class Trie {
  root: TrieNode

  constructor() {
    this.root = new TrieNode()
  }

  insert(word: string): void {
    let current = this.root
    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode())
      }
      current = current.children.get(char)!
    }
    current.isEndOfWord = true
  }

  search(word: string): boolean {
    let current = this.root
    for (const char of word) {
      if (!current.children.has(char)) {
        return false
      }
      current = current.children.get(char)!
    }
    return current.isEndOfWord
  }

  startsWith(prefix: string): boolean {
    let current = this.root
    for (const char of prefix) {
      if (!current.children.has(char)) {
        return false
      }
      current = current.children.get(char)!
    }
    return true
  }

  delete(word: string): boolean {
    const deleteRecursive = (current: TrieNode, word: string, index: number): boolean => {
      if (index === word.length) {
        if (!current.isEndOfWord) {
          return false
        }
        current.isEndOfWord = false
        return current.children.size === 0
      }

      const char = word[index]!
      const child = current.children.get(char)

      if (!child) {
        return false
      }

      const shouldDeleteChild = deleteRecursive(child, word, index + 1)

      if (shouldDeleteChild) {
        current.children.delete(char)
        return current.children.size === 0 && !current.isEndOfWord
      }

      return false
    }

    return deleteRecursive(this.root, word, 0)
  }

  public clear(): void {
    this.root = new TrieNode()
  }
}
