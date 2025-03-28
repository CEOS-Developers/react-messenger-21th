import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import ChatHeader from '@/components/layout/header/ChatHeader';
import ChatInput from '@/components/chatting/ChatInput';
import RecievedMessage from '@/components/chatting/RecievedMessage';
import SentMessage from '@/components/chatting/SentMessage';
import { formatDate } from '@/utils/formatDate';
import { ChatRoom, ChatroomList, Chats } from '@/types/types';

interface ChatRoomProps {
  chatroomId: number;
  setChatroomId: Dispatch<SetStateAction<number | null>>;
  chatroomData: ChatroomList;
  setChatroomData: Dispatch<SetStateAction<ChatroomList>>;
}

const ChatRoomComponent: React.FC<ChatRoomProps> = ({
  chatroomId,
  setChatroomId,
  chatroomData,
  setChatroomData,
}) => {
  const messagesEndRef = useRef<HTMLSpanElement>(null);
  const [user, setUser] = useState<number>(0);

  const chatroom: ChatRoom | undefined = chatroomData.find(
    (chatroom) => chatroom.chatroomId === chatroomId
  );

  // 채팅방 제목 눌렀을 때 유저 변경
  const handleChangeUser = () => {
    setUser((prev) => {
      if (prev === 0) {
        return chatroom?.userId[0] || 0;
      } else {
        return 0;
      }
    });
  };

  // 채팅방이 undefined일 경우 채팅방 목록으로 이동, 있을 경우 채팅방 띄워줌
  if (!chatroom) {
    setChatroomId(null);
  } else {
    useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatroom]);

    return (
      <main className='flex flex-1 flex-col bg-neutral-0'>
        {/* 채팅 제목 */}
        <ChatHeader
          setChatroomId={setChatroomId}
          title={chatroom.title}
          onClick={handleChangeUser}
        />

        {/* 채팅 내용 */}
        <section className='flex flex-1 flex-col'>
          {chatroom.chats.map((messageData: Chats) => (
            <div key={messageData.date} className='flex flex-col'>
              <span className='flex justify-center font-cap-med text-neutral-400 px-4 py-1'>
                {formatDate(messageData.date)}
              </span>
              {messageData.chatMessages.map((message) =>
                message.senderId !== user ? (
                  // 받은 메세지
                  <RecievedMessage key={message.messageId} message={message} />
                ) : (
                  // 내가 보낸 메세지
                  <SentMessage key={message.messageId} message={message} />
                )
              )}
            </div>
          ))}
          <span ref={messagesEndRef}></span>
        </section>

        {/* 채팅 입력창 */}
        <ChatInput setChatroomData={setChatroomData} chatroomId={chatroomId} />
      </main>
    );
  }
};

export default ChatRoomComponent;
