import * as Types from '@/types';
import generateId from './generateId';

function createChat(
  chatList: Types.ChatList,
  myId: string,
  userId: string,
  user: Types.User,
): [Types.ChatList, string] {
  const userIds = [userId, myId].sort();

  // if same userIds exist, return the chat room id
  const existingEntry = Object.entries(chatList).find(
    ([_, room]) => JSON.stringify(room.userIds) === JSON.stringify(userIds),
  );

  if (existingEntry) {
    return [chatList, existingEntry[0]];
  }

  const newChatId = generateId();
  const newChatRoom: Types.ChatRoom = {
    userIds: userIds,
    title: user.name,
    messages: [],
    isPinned: false,
    lastReadMessageId: null,
  };

  const updatedChatList = { ...chatList, [newChatId]: newChatRoom };

  return [updatedChatList, newChatId];
}

export default createChat;
