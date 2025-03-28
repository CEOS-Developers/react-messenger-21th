import * as Types from '@/types';
import { loadData, saveData } from '@/services/localStorage';

const togglePin = (chatId: string, currentRoom: Types.ChatRoom): [Types.ChatList, Types.ChatRoom] => {
  const updatedRoom: Types.ChatRoom = {
    ...currentRoom,
    isPinned: !currentRoom.isPinned,
  };

  const allChats: Types.ChatList = loadData();
  allChats[chatId] = updatedRoom;
  saveData(allChats);

  return [allChats, updatedRoom];
};

export default togglePin;
