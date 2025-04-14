import * as Types from '@/types';

const STORAGE_KEY = 'user-list';

function loadUserList(): Types.UserList {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? (JSON.parse(data) as Types.UserList) : ({} as Types.UserList);
}

function saveUserList(data: Types.UserList) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export { loadUserList, saveUserList };
