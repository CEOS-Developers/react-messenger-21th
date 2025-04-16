import * as Types from '@/types';

function togglePin(chatId: string, chatList: Types.ChatList): Types.ChatList {
  const room = chatList[chatId];

  const updatedRoom = { ...room, isPinned: !room.isPinned };
  const updatedChatList = { ...chatList, [chatId]: updatedRoom };

  return updatedChatList;
}

export default togglePin;
