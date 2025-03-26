import * as Types from '@/types';

const STORAGE_KEY = 'messenger';

function loadData(): Types.ChatList {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? (JSON.parse(data) as Types.ChatList) : ({} as Types.ChatList);
}

function saveData(data: Types.ChatList) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export { loadData, saveData };
