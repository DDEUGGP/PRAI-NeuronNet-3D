export class MemoryCortex {
  private archive: Map<string, string>;

  constructor() {
    this.archive = new Map();
  }

  storeThought(key: string, value: string) {
    this.archive.set(key, value);
  }

  retrieveThought(key: string): string | undefined {
    return this.archive.get(key);
  }
}
