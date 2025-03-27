import { useLocation } from 'react-router-dom';
import ChatHeader from '@/components/chatroom/chatHeader';
import ChatInput from '@/components/chatroom/ChatInput';

const ChatRoom = () => {
  const location = useLocation();
  const { name, profileImg, id, type } = location.state || {};

  return (
    <>
      <div className="flex px-4">
        <ChatHeader name={name} />

        {/* 채팅 내용 등 추가 가능 */}
      </div>
      <ChatInput />
    </>
  );
};

export default ChatRoom;
