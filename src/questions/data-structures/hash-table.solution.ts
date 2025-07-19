/**
 * @class HashTable
 * @description A data structure that maps keys to values using a hash function.
 * @template K The type of the keys.
 * @template V The type of the values.
 */
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

  /**
   * @description Hashes a key to an index in the table.
   * @param key The key to hash.
   * @returns The index in the table.
   */
  private hash(key: K): number {
    const keyStr = String(key)
    let hash = 0
    for (let i = 0; i < keyStr.length; i++) {
      hash = (hash + keyStr.charCodeAt(i) * (i + 1)) % this.size
    }
    return hash
  }

  /**
   * @description Adds a new key-value pair to the table.
   * @param key The key.
   * @param value The value.
   */
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

  /**
   * @description Retrieves the value associated with a key.
   * @param key The key to retrieve.
   * @returns The value, or `undefined` if the key is not found.
   */
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

  /**
   * @description Deletes a key-value pair from the table.
   * @param key The key to delete.
   * @returns `true` if the pair was deleted, `false` otherwise.
   */
  public delete(key: K): boolean {
    const index = this.hash(key)
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i]![0] === key) {
          this.table[index].splice(i, 1)
          return true
        }
      }
    }
    return false
  }

  /**
   * @description Checks if a key exists in the table.
   * @param key The key to check.
   * @returns `true` if the key exists, `false` otherwise.
   */
  public has(key: K): boolean {
    return this.get(key) !== undefined
  }
}
