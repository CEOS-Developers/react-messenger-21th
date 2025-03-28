import { Dispatch, SetStateAction, useState } from 'react';
import ChatHeader from '@/components/layout/header/ChatHeader';
import ChatInput from '@/components/chatting/ChatInput';
import RecievedMessage from '@/components/chatting/RecievedMessage';
import SentMessage from '@/components/chatting/SentMessage';
import { formatDate } from '@/utils/formatDate';
import { ChatroomList, Chats } from '@/types/types';

interface ChatRoomProps {
  chatroomId: number;
  setChatroomId: Dispatch<SetStateAction<number | null>>;
  chatroomData: ChatroomList;
  setChatroomData: Dispatch<SetStateAction<ChatroomList>>;
}

const ChatRoom: React.FC<ChatRoomProps> = ({
  chatroomId,
  setChatroomId,
  chatroomData,
  setChatroomData,
}) => {
  return (
    <main className='flex flex-1 flex-col bg-neutral-0'>
      {/* 채팅 제목 */}
      <ChatHeader
        setChatroomId={setChatroomId}
        title={chatroomData[chatroomId].title}
      />

      {/* 채팅 내용 */}
      <section className='flex flex-1 flex-col'>
        {chatroomData[chatroomId].chats.map((messageData: Chats) => (
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
      </section>

      {/* 채팅 입력창 */}
      <ChatInput setChatroomData={setChatroomData} chatroomId={chatroomId} />
    </main>
  );
};

export default ChatRoom;
