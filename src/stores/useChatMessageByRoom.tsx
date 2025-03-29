import { create } from 'zustand';
import { MessagesByRoom } from '@/schemas/chatRoomMessage';

interface ChatMessageByRoom {
  selectedChatRoomId: string;
  setSelectedChatRoomId: (selectedChatRoomId: string) => void;
  chatMessageByRoom: MessagesByRoom;
  setChatMessageByRoom: (chatMessageByRoom: MessagesByRoom) => void;
}

export const useChatMessageByRoom = create<ChatMessageByRoom>((set) => ({
  selectedChatRoomId: '',
  setSelectedChatRoomId: (selectedChatRoomId) => set({ selectedChatRoomId }),
  chatMessageByRoom: {} as MessagesByRoom,
  setChatMessageByRoom: (chatMessageByRoom) => set({ chatMessageByRoom }),
}));
