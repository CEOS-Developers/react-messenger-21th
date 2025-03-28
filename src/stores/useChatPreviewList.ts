import { create } from 'zustand';

import { ChatPreview } from '@/schemas/chatPreview';

interface ChatPreviewStore {
  chatPreviewList: ChatPreview[];
  setChatPreviewList: (chatPreviewList: ChatPreview[]) => void;
}

export const useChatPreviewList = create<ChatPreviewStore>((set) => ({
  chatPreviewList: [],
  setChatPreviewList: (chatPreviewList) => set({ chatPreviewList }),
}));
