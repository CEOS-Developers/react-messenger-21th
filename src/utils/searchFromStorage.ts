function searchFromStorage(searchValue: string, corpus: string[]): number[] {
  const lower = searchValue.toLowerCase();

  return corpus.reduce<number[]>((acc, text, idx) => {
    if (text.toLowerCase().includes(lower)) acc.push(idx);
    return acc;
  }, []);
}

export default searchFromStorage;
