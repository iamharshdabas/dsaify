export class HashTable<T> {
  private storage: Map<string, T> = new Map()

  private hash(key: string): string {
    // Simple hash function for demonstration
    return key.toString()
  }

  set(key: string, value: T): void {
    const hashedKey = this.hash(key)
    this.storage.set(hashedKey, value)
  }

  get(key: string): T | undefined {
    const hashedKey = this.hash(key)
    return this.storage.get(hashedKey)
  }

  delete(key: string): boolean {
    const hashedKey = this.hash(key)
    return this.storage.delete(hashedKey)
  }

  has(key: string): boolean {
    const hashedKey = this.hash(key)
    return this.storage.has(hashedKey)
  }

  clear(): void {
    this.storage.clear()
  }
}
