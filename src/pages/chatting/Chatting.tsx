import ChatList from '@/components/chatting/ChatList';
import ChatRoom from '@/components/chatting/ChatRoom';
import ChatListHeader from '@/components/layout/header/ChatListHeader';
import MainLayout from '@/components/layout/MainLayout';
import { useState } from 'react';
import ChatRoomData from '@/constants/chatrooms.json';
import { ChatroomList } from '@/types/types';

const Chatting = () => {
  const [chatroomId, setChatroomId] = useState<number | null>(null);
  return (
    <>
      {chatroomId !== null ? (
        <ChatRoom chatroomId={chatroomId} setChatroomId={setChatroomId} />
      ) : (
        <MainLayout>
          <ChatListHeader />
          <span className='h-[51px]'></span>
          <ChatList
            group='비즈니스'
            chatRoomData={
              ChatRoomData.filter(
                (data) => data.type === 'business'
              ) as ChatroomList
            }
            setChatroomId={setChatroomId}
          />
          <hr className='border-[#E8ECFB] mx-4 my-2' />
          <ChatList
            group='친구'
            chatRoomData={
              ChatRoomData.filter(
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
