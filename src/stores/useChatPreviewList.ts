import { create } from 'zustand';

import { ChatPreview } from '@/schemas/chatPreview';

interface ChatPreviewStore {
  initialChatPreview: ChatPreview;
  setInitalChatPreview: (chatPreview: ChatPreview) => void;
  chatPreviewList: ChatPreview[];
  setChatPreviewList: (chatPreviewList: ChatPreview[]) => void;
}

export const useChatPreviewList = create<ChatPreviewStore>((set) => ({
  // 채팅 시작 시, roomId에 대한 데이터 생성 위해 전역 상태로 현재 채팅방 이름 관리
  initialChatPreview: {
    roomId: '',
    roomName: '',
    isGroup: false,
    participants: [],
    lastMessage: {
      messageId: '',
      senderId: '',
      senderName: '',
      content: '',
      type: 'text',
      sentAt: '',
    },
    unreadCount: 0,
  },
  setInitalChatPreview: (chatPreview) =>
    set({ initialChatPreview: chatPreview }),
  chatPreviewList: [],
  setChatPreviewList: (chatPreviewList) => set({ chatPreviewList }),
}));
