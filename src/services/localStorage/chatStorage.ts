import * as Types from '@/types';

const STORAGE_KEY = 'chat-list';

function loadChatList(): Types.ChatList {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? (JSON.parse(data) as Types.ChatList) : ({} as Types.ChatList);
}

function saveChatList(data: Types.ChatList) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export { loadChatList, saveChatList };
