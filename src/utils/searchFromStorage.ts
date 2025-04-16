import Hangul from 'hangul-js';

function searchFromStorage(searchValue: string, corpus: string[]): number[] {
  if (!searchValue) return corpus.map((_, i) => i);

  return corpus.reduce<number[]>((acc, text, idx) => {
    if (Hangul.search(text.toLowerCase(), searchValue.toLowerCase()) > -1) {
      acc.push(idx);
    }
    return acc;
  }, []);
}

export default searchFromStorage;
