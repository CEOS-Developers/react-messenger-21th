import * as Types from '@/types';

type ChatEntry = [string, Types.ChatRoom];

function splitPinnedChats(chatList: Types.ChatList) {
  const pinnedChats: ChatEntry[] = [];
  const normalChats: ChatEntry[] = [];

  for (const entry of Object.entries(chatList)) {
    const [, room] = entry;
    if (room.messages.length === 0) continue;

    if (room.isPinned) pinnedChats.push(entry);
    else normalChats.push(entry);
  }

  return { pinnedChats, normalChats };
}

function sortChatsByLastMessage(entries: ChatEntry[]): ChatEntry[] {
  return [...entries].sort(([, a], [, b]) => {
    const getLastMessageTimestamp = (room: Types.ChatRoom) => room.messages.at(-1)?.timestamp ?? 0;

    return getLastMessageTimestamp(b) - getLastMessageTimestamp(a);
  });
}

export { splitPinnedChats, sortChatsByLastMessage };
