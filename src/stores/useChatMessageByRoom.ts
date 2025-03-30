import { create } from 'zustand';
import { ChatRoomMessage, MessagesByRoom } from '@/schemas/chatRoomMessage';

interface ChatMessageByRoom {
  messagesByRoom: MessagesByRoom;
  loadMessages: (roomId: string, message: ChatRoomMessage[]) => void;
  sendMessage: (roomId: string, message: ChatRoomMessage) => void;
}

export const useChatMessageByRoom = create<ChatMessageByRoom>((set) => ({
  messagesByRoom: {},
  loadMessages: (roomId, messages) =>
    set((state) => ({
      messagesByRoom: {
        ...state.messagesByRoom,
        [roomId]: messages,
      },
    })),
  sendMessage: (roomId, message) =>
    set((state) => ({
      messagesByRoom: {
        ...state.messagesByRoom,
        [roomId]: [...(state.messagesByRoom[roomId] || []), message],
      },
    })),
}));
