import { Dispatch, SetStateAction } from 'react';
import ChatHeader from '@/components/layout/header/ChatHeader';
import ChatInput from '@/components/chatting/ChatInput';
import ChatRoomMessages from '@/constants/chatrooms.json';
import RecievedMessage from '@/components/chatting/RecievedMessage';
import SentMessage from './SentMessage';
import { formatDate } from '@/utils/formatDate';

interface ChatRoomProps {
  chatroomId: number;
  setChatroomId: Dispatch<SetStateAction<number | null>>;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ chatroomId, setChatroomId }) => {
  return (
    <main className='flex flex-1 flex-col bg-neutral-0'>
      <ChatHeader
        setChatroomId={setChatroomId}
        title={ChatRoomMessages[chatroomId].title}
      />
      <span className='h-[51px]'></span>
      {ChatRoomMessages[chatroomId].chats.map((messageData) => (
        <div key={messageData.date} className='flex flex-col'>
          <span className='flex justify-center font-cap-med text-neutral-400 px-4 py-1'>
            {formatDate(messageData.date)}
          </span>
          {messageData.chatMessages.map((message) =>
            message.senderId !== 0 ? (
              // 받은 메세지
              <RecievedMessage key={message.messageId} message={message} />
            ) : (
              // 내가 보낸 메세지
              <SentMessage key={message.messageId} message={message} />
            )
          )}
        </div>
      ))}
      <ChatInput />
    </main>
  );
};

export default ChatRoom;
