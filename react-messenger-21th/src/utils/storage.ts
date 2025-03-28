// utils/storage.ts
export const loadFromLocalStorage = (key: string) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : null;
  } catch (e) {
    console.error('로컬 스토리지 로드 실패:', e);
    return null;
  }
};
