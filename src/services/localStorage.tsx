import * as Types from '@/types';

const STORAGE_KEY = 'messenger';
const ID_KEY = 'my-id';
const DB_KEY = 'user-db';

function loadData(): Types.ChatList {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? (JSON.parse(data) as Types.ChatList) : ({} as Types.ChatList);
}

function saveData(data: Types.ChatList) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadMyId(): string {
  const id = localStorage.getItem(ID_KEY);
  return id || '';
}

function saveMyId(myId: string) {
  localStorage.setItem(ID_KEY, myId);
}

function loadDB(): Types.User {
  const db = localStorage.getItem(DB_KEY);
  return db ? (JSON.parse(db) as Types.User) : ({} as Types.User);
}

function saveDB(db: Types.User) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

export { loadData, saveData, loadMyId, saveMyId, loadDB, saveDB };
