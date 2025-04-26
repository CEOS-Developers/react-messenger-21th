import ChatList from '@/components/chatting/ChatList';
import ChatListHeader from '@/components/layout/header/ChatListHeader';
import MainLayout from '@/components/layout/MainLayout';
import { useEffect } from 'react';
import ChatRoomData from '@/constants/chatrooms.json';
import { ChatroomList } from '@/types/types';
import useMessageStore from '@/store/useMessageStore';

const ChattingList = () => {
  const chatrooms = useMessageStore((state) => state.chatrooms);
  const initializeChatrooms = useMessageStore(
    (state) => state.initializeChatrooms
  );

  useEffect(() => {
    if (chatrooms.length === 0) {
      initializeChatrooms(ChatRoomData as ChatroomList);
    }
  }, [chatrooms, initializeChatrooms]);

  return (
    <MainLayout>
      <ChatListHeader />
      <ChatList
        group='비즈니스'
        chatRoomData={
          chatrooms.filter((data) => data.type === 'business') as ChatroomList
        }
      />
      <hr className='border-[#E8ECFB] mx-4 my-2' />
      <ChatList
        group='친구'
        chatRoomData={
          chatrooms.filter((data) => data.type === 'friend') as ChatroomList
        }
      />
    </MainLayout>
  );
};

export default ChattingList;
