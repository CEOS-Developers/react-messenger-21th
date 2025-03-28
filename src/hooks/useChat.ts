import axios from 'axios';
import { useEffect } from 'react';

import { useChatPreviewList } from '@/stores/useChatPreviewList';

export const useChat = () => {
  const { setChatPreviewList } = useChatPreviewList();

  useEffect(() => {
    const fetchChatList = async () => {
      try {
        const response = await axios.get('/mock/chatList.json');
        const chatPreviewList = response.data;
        setChatPreviewList(chatPreviewList);
      } catch (error) {
        console.error('채팅방 목록 Fetch 실패:', error);
      }
    };

    fetchChatList();
  }, [setChatPreviewList]);
};
