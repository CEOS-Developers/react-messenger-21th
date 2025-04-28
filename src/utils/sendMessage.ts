import * as Types from '@/types';
import generateId from './generateId';

function sendMessage(chatId: string, chatList: Types.ChatList, senderId: string, text: string): Types.ChatList {
  const room = chatList[chatId];

  const newMessage: Types.Message = {
    id: generateId(),
    senderId: senderId,
    text: text,
    timestamp: Date.now(),
  };

  const updatedRoom: Types.ChatRoom = {
    ...room,
    messages: [...room.messages, newMessage],
    lastReadMessageId: newMessage.id,
  };
  const updatedChatList = { ...chatList, [chatId]: updatedRoom };

  return updatedChatList;
}

export default sendMessage;
