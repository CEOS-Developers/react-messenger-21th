import { ChatMessages, ChatRoom } from '@/types/types';
import { Dispatch, SetStateAction } from 'react';

const storeMessage = ({
  type,
  chatroomId,
  senderId,
  content,
  contentName,
  setShowErrorModal,
}: {
  type: 'text' | 'image' | 'file';
  chatroomId: string | undefined;
  senderId: number;
  content: string | File;
  contentName?: string;
  setShowErrorModal: Dispatch<SetStateAction<string>>;
}) => {
  const newTimestamp = new Date(); // 현재 시간
  const koreaTimestamp = new Date(newTimestamp.getTime() + 9 * 60 * 60 * 1000); // 9시간 더하기

  const todayDate = koreaTimestamp.toISOString().split('T')[0]; // YYYY-MM-DD 형식(한국 날짜)

  const storedData = localStorage.getItem('chatrooms'); // 로컬 스토리지에서 꺼냄
  const chatroomsData = storedData ? JSON.parse(storedData) : []; // JSON을 객체로 변환

  const updatedChatList = chatroomsData.map((room: ChatRoom) => {
    if (
      room.chatroomId === (chatroomId !== undefined ? parseInt(chatroomId) : -1)
    ) {
      let updatedChats = [...room.chats];
      let lastChats = updatedChats[updatedChats.length - 1];

      // 메시지 ID 증가
      const newMessageId =
        lastChats?.chatMessages?.length > 0
          ? lastChats.chatMessages[lastChats.chatMessages.length - 1]
              .messageId + 1
          : 0;

      const newMessage: ChatMessages = {
        type: type,
        messageId: newMessageId,
        senderId,
        content,
        contentName: contentName,
        timestamp: newTimestamp.toISOString(),
      };

      // 같은 날짜의 채팅이 존재하면 메시지 추가, 없으면 새로운 날짜 추가 후 메시지 추가
      if (lastChats && lastChats.date === todayDate) {
        lastChats.chatMessages = [...lastChats.chatMessages, newMessage];
      } else {
        updatedChats.push({
          date: todayDate,
          chatMessages: [newMessage],
        });
      }

      return { ...room, chats: updatedChats };
    }
    return room;
  });

  try {
    localStorage.setItem('chatrooms', JSON.stringify(updatedChatList));
  } catch (error) {
    if (error instanceof DOMException && error.name === 'QuotaExceededError') {
      setShowErrorModal('localStorage 용량을 초과했습니다.');
    } else {
      console.error(error);
    }
  }
};

export default storeMessage;
