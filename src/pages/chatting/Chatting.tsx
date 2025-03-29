import ChatList from '@/components/chatting/ChatList';
import ChatRoom from '@/components/chatting/ChatRoom';
import ChatListHeader from '@/components/layout/header/ChatListHeader';
import MainLayout from '@/components/layout/MainLayout';
import { useEffect, useState } from 'react';
import ChatRoomData from '@/constants/chatrooms.json';
import { ChatroomList } from '@/types/types';

const Chatting = () => {
  const [chatroomId, setChatroomId] = useState<number | null>(null);
  const [chatroomData, setChatroomData] = useState<ChatroomList | []>([]);
  useEffect(() => {
    let storedData = localStorage.getItem('chatrooms');
    if (!storedData) {
      localStorage.setItem('chatrooms', JSON.stringify(ChatRoomData)); // 값이 없을 때만 초기 데이터 저장
      storedData = localStorage.getItem('chatrooms');
    }
    const chatroomsData = storedData ? JSON.parse(storedData) : []; // JSON을 객체로 변환
    setChatroomData(chatroomsData);
  }, []);

  return (
    <>
      {chatroomId !== null ? (
        <ChatRoom
          chatroomId={chatroomId}
          setChatroomId={setChatroomId}
          chatroomData={chatroomData}
          setChatroomData={setChatroomData}
        />
      ) : (
        <MainLayout>
          <ChatListHeader />
          <ChatList
            group='비즈니스'
            chatRoomData={
              chatroomData.filter(
                (data) => data.type === 'business'
              ) as ChatroomList
            }
            setChatroomId={setChatroomId}
          />
          <hr className='border-[#E8ECFB] mx-4 my-2' />
          <ChatList
            group='친구'
            chatRoomData={
              chatroomData.filter(
                (data) => data.type === 'friend'
              ) as ChatroomList
            }
            setChatroomId={setChatroomId}
          />
        </MainLayout>
      )}
    </>
  );
};

export default Chatting;
