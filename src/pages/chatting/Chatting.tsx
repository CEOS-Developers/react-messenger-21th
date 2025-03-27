import ChatList from '@/components/chatting/ChatList';
import ChatListHeader from '@/components/layout/header/ChatListHeader';
import { useState } from 'react';

const Chatting = () => {
  const [chatroomId, setChatroomId] = useState(null);
  return (
    <>
      {chatroomId ? (
        <></>
      ) : (
        <>
          <ChatListHeader />
          <span className='h-[51px]'></span>
          <ChatList group='비즈니스' />
          <hr className='border-[#E8ECFB] mx-4 my-2' />
          <ChatList group='친구' />
        </>
      )}
    </>
  );
};

export default Chatting;
