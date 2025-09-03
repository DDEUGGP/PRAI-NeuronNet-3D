export class PatternMapper {
  detectPattern(data: string[]): string {
    // Primitive Mustererkennung
    const pattern = data.join('-');
    return `[Pattern] ${pattern}`;
  }
}
