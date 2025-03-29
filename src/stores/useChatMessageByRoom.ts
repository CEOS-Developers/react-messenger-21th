import { create } from 'zustand';
import { ChatRoomMessage } from '@/schemas/chatRoomMessage';

interface ChatMessageByRoom {
  selectedChatRoomId: string;
  setSelectedChatRoomId: (selectedChatRoomId: string) => void;
  chatMessageByRoom: ChatRoomMessage[];
  setChatMessageByRoom: (chatMessageByRoom: ChatRoomMessage[]) => void;
}

export const useChatMessageByRoom = create<ChatMessageByRoom>((set) => ({
  selectedChatRoomId: '',
  setSelectedChatRoomId: (selectedChatRoomId) => set({ selectedChatRoomId }),
  chatMessageByRoom: [] as ChatRoomMessage[],
  setChatMessageByRoom: (chatMessageByRoom) => set({ chatMessageByRoom }),
}));
