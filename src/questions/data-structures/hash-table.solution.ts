export class HashTable<K, V> {
  private table: Array<
    Array<
      [
        K,
        V,
      ]
    >
  >
  private size: number

  constructor(size: number = 127) {
    this.table = new Array(size)
    this.size = size
  }

  private hash(key: K): number {
    // Converts the key to a string for hashing.
    // Note: For complex objects, this might result in collisions
    // (e.g., String({a: 1}) and String({b: 2}) both become '[object Object]').
    // For better handling of object keys, a custom serialization or a different hashing strategy would be needed.
    const keyStr = String(key)
    let hash = 0
    for (let i = 0; i < keyStr.length; i++) {
      hash = (hash + keyStr.charCodeAt(i) * (i + 1)) % this.size
    }
    return hash
  }

  public set(key: K, value: V): void {
    const index = this.hash(key)
    if (!this.table[index]) {
      this.table[index] = []
    }

    for (const pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value
        return
      }
    }

    this.table[index].push([
      key,
      value,
    ])
  }
  public get(key: K): V | undefined {
    const index = this.hash(key)
    if (this.table[index]) {
      for (const pair of this.table[index]) {
        if (pair[0] === key) {
          return pair[1]
        }
      }
    }
    return undefined
  }

  public delete(key: K): boolean {
    const index = this.hash(key)
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i]?.[0] === key) {
          this.table[index].splice(i, 1)
          return true
        }
      }
    }
    return false
  }

  public has(key: K): boolean {
    return this.get(key) !== undefined
  }

  public clear(): void {
    this.table = new Array(this.size)
  }
}
