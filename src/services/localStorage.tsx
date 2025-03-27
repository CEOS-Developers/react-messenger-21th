import * as Types from '@/types';

const STORAGE_KEY = 'messenger';
const ID_KEY = 'my-id';

function loadData(): Types.ChatList {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? (JSON.parse(data) as Types.ChatList) : ({} as Types.ChatList);
}

function saveData(data: Types.ChatList) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadMyId(): string {
  const idData = localStorage.getItem(ID_KEY);
  return idData || '';
}

function saveMyId(myId: string) {
  localStorage.setItem(ID_KEY, myId);
}

export { loadData, saveData, loadMyId, saveMyId };
