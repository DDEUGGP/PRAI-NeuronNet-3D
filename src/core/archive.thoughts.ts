export class ThoughtArchive {
  private thoughts: string[];

  constructor() {
    this.thoughts = [];
  }

  addThought(thought: string) {
    this.thoughts.push(thought);
  }

  listThoughts(): string[] {
    return this.thoughts;
  }
}
