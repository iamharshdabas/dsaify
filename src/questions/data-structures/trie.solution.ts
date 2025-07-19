class TrieNode {
  public children: Map<string, TrieNode> = new Map()
  public isEndOfWord = false
}

export class Trie {
  private root: TrieNode = new TrieNode()

  insert(word: string): void {
    let currentNode = this.root
    for (const char of word) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode())
      }
      currentNode = currentNode.children.get(char) as TrieNode
    }
    currentNode.isEndOfWord = true
  }

  search(word: string): boolean {
    let currentNode = this.root
    for (const char of word) {
      if (!currentNode.children.has(char)) {
        return false
      }
      currentNode = currentNode.children.get(char) as TrieNode
    }
    return currentNode.isEndOfWord
  }

  startsWith(prefix: string): boolean {
    let currentNode = this.root
    for (const char of prefix) {
      if (!currentNode.children.has(char)) {
        return false
      }
      currentNode = currentNode.children.get(char) as TrieNode
    }
    return true
  }
}
