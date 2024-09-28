export class UtilService {
  countWords(text: string): number {
    const words = text.match(/\b\w+\b/g);
    return words ? words.length : 0;
  }

  countCharacters(text: string): number {
    return text.replace(/\s+/g, '').length;
  }
}
