import axios from 'axios';
import { useEffect } from 'react';

import { useChatPreviewList } from '@/stores/useChatPreviewList';
import { useChatMessageByRoom } from '@/stores/useChatMessageByRoom';

export const useChat = () => {
  const { setChatPreviewList } = useChatPreviewList();

  useEffect(() => {
    const fetchChatList = async () => {
      try {
        const storedChatPreviewList = localStorage.getItem('chatPreviewList');

        if (storedChatPreviewList) {
          setChatPreviewList(JSON.parse(storedChatPreviewList));
          return;
        }

        // 채팅방 목록 Mock Data 가져오기
        const response = await axios.get('/mock/chatList.json');
        const chatPreviewList = response.data;

        setChatPreviewList(chatPreviewList);

        // 채팅방 목록(Initial Data)을 로컬 스토리지에 저장
        localStorage.setItem(
          'chatPreviewList',
          JSON.stringify(chatPreviewList)
        );
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
    const savedMessages = localStorage.getItem('chatMessages');
    const parsedMessages = JSON.parse(savedMessages || '{}');

    if (parsedMessages[roomId]) {
      loadMessages(roomId, parsedMessages[roomId]);
      return;
    }

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
