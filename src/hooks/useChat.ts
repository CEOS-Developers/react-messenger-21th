import axios from 'axios';
import { useEffect } from 'react';

import { useChatPreviewList } from '@/stores/useChatPreviewList';
import { useChatMessageByRoom } from '@/stores/useChatMessageByRoom';

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

export const useChatMessage = (roomId: string) => {
  const { loadMessages } = useChatMessageByRoom();

  useEffect(() => {
    const fetchChatMessage = async () => {
      try {
        const response = await axios.get('/mock/chatMessages.json');
        const chatMessageByRoom = response.data;

        // 채팅방 메세지 목록 저장
        loadMessages(roomId, chatMessageByRoom[roomId]);
      } catch (error) {
        console.error('채팅방 메세지 Fetch 실패:', error);
      }
    };

    fetchChatMessage();
  }, [roomId, loadMessages]);
};
