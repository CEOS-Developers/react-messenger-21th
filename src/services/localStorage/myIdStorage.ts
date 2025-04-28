const STORAGE_KEY = 'my-id';

function loadMyId(): string {
  const id = localStorage.getItem(STORAGE_KEY);
  return id || '';
}

function saveMyId(data: string) {
  localStorage.setItem(STORAGE_KEY, data);
}

export { loadMyId, saveMyId };
