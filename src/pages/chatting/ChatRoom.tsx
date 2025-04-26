import ChatRoomComponent from '@/components/chatting/ChatRoomComponent';
import { useEffect } from 'react';
import ChatRoomData from '@/constants/chatrooms.json';
import { useNavigate, useParams } from 'react-router-dom';
import useMessageStore from '@/store/useMessageStore';
import { ChatroomList } from '@/types/types';

const ChatRoom = () => {
  const { chatroomId } = useParams();
  const navigate = useNavigate();

  const chatrooms = useMessageStore((state) => state.chatrooms);

  const initializeChatrooms = useMessageStore(
    (state) => state.initializeChatrooms
  );

  useEffect(() => {
    if (chatrooms.length === 0) {
      initializeChatrooms(ChatRoomData as ChatroomList); // 채팅방 비어 있으면 초기 데이터 세팅
    }
  }, [chatrooms, initializeChatrooms]);

  useEffect(() => {
    if (chatroomId === undefined) {
      navigate('..');
    }
  }, [chatroomId, navigate]);

  return <ChatRoomComponent chatroomId={chatroomId} chatroomData={chatrooms} />;
};

export default ChatRoom;
