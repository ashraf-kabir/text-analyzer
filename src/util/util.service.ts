export class UtilService {
  countWords(text: string): number {
    const words = text.match(/\b\w+\b/g);
    return words ? words.length : 0;
  }

  countCharacters(text: string): number {
    return text.replace(/\s+/g, '').length;
  }

  countSentences(text: string): number {
    const sentences = text.match(/\b[^.!?]+[.!?]/g);
    return sentences ? sentences.length : 0;
  }

  countParagraphs(text: string): number {
    return text.split(/\n+/).filter(Boolean).length;
  }

  longestWord(text: string): string {
    const words: string[] = text.match(/\b\w+\b/g) || [];
    return words.reduce(
      (longest, current) =>
        current.length > longest.length ? current : longest,
      '',
    );
  }
}
