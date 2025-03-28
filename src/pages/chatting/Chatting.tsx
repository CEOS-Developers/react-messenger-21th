import ChatList from '@/components/chatting/ChatList';
import ChatRoom from '@/components/chatting/ChatRoom';
import ChatListHeader from '@/components/layout/header/ChatListHeader';
import MainLayout from '@/components/layout/MainLayout';
import { useState } from 'react';

const Chatting = () => {
  const [chatroomId, setChatroomId] = useState<number | null>(null);
  return (
    <>
      {chatroomId ? (
        <ChatRoom setChatroomId={setChatroomId} />
      ) : (
        <MainLayout>
          <ChatListHeader />
          <span className='h-[51px]'></span>
          <ChatList group='비즈니스' setChatroomId={setChatroomId} />
          <hr className='border-[#E8ECFB] mx-4 my-2' />
          <ChatList group='친구' setChatroomId={setChatroomId} />
        </MainLayout>
      )}
    </>
  );
};

export default Chatting;
