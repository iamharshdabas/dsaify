export class HashTable<K, V> {
  private table: {
    [key: string]: [
      K,
      V,
    ][]
  }
  private size: number

  constructor(size: number = 100) {
    this.table = {}
    this.size = size
  }

  private hash(key: K): string {
    return (String(key).length % this.size) as unknown as string
  }

  set(key: K, value: V): void {
    const index = this.hash(key)
    if (!this.table[index]) {
      this.table[index] = []
    }
    // Handle collisions (simple chaining)
    let found = false
    for (let i = 0; i < this.table[index].length; i++) {
      const entry = this.table[index][i]
      if (entry && entry[0] === key) {
        entry[1] = value
        found = true
        break
      }
    }
    if (!found) {
      this.table[index].push([
        key,
        value,
      ])
    }
  }

  get(key: K): V | undefined {
    const index = this.hash(key)
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        const entry = this.table[index][i]
        if (entry && entry[0] === key) {
          return entry[1]
        }
      }
    }
    return undefined
  }

  delete(key: K): boolean {
    const index = this.hash(key)
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        const entry = this.table[index][i]
        if (entry && entry[0] === key) {
          this.table[index].splice(i, 1)
          return true
        }
      }
    }
    return false
  }

  has(key: K): boolean {
    return this.get(key) !== undefined
  }

  clear(): void {
    this.table = {}
  }
}
