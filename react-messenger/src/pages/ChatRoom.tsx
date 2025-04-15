import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ChatHeader from '@/components/chatroom/ChatHeader';
import ChatInput from '@/components/chatroom/ChatInput';
import ChatMessage from '@/components/chatroom/ChatMessage';
import { formatDate } from '@/utils/formatDate';
import { useUserStore } from '@/store/userStore';
import { useChatStore } from '@/store/chatStore';

const ChatRoom = () => {
  const location = useLocation();
  const { name, profileImg, id, type } = location.state || {};

  const { currentUser, targetUser, setTargetUser, switchUser } = useUserStore();

  const { messages, input, setInput, initRoom, sendTextMessage, sendImageMessage } = useChatStore();

  // roomKey 저장용 ref
  const roomKeyRef = useRef('');

  // 최초 마운트 시 targetUser 설정
  useEffect(() => {
    if (name && id && profileImg) {
      setTargetUser({ name, id, profileImg });
    }
  }, []);

  // 대화방(roomKey) 초기화
  useEffect(() => {
    if (currentUser.id && targetUser.id && type) {
      const newRoomKey = initRoom(currentUser.id, targetUser.id, type);
      roomKeyRef.current = newRoomKey;
    }
  }, [currentUser.id, targetUser.id, type]);

  // 스크롤 하단으로 이동
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // 텍스트 메시지 전송
  const handleSend = () => {
    if (!input.trim()) return;
    sendTextMessage(input, currentUser.id, roomKeyRef.current);
  };

  // 이미지 메시지 전송
  const handleImageSend = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      sendImageMessage(reader.result as string, currentUser.id, roomKeyRef.current);
    };
    reader.readAsDataURL(file);
  };

  //  날짜 구분용
  let lastDate = '';

  return (
    <div className="flex flex-col justify-between h-full bg-grey-100">
      <div className="sticky mt-[44px] top-[44px] z-10 bg-grey-100">
        <ChatHeader name={targetUser.name} onClick={switchUser} />
      </div>

      {/* 채팅 메시지 영역 */}
      <div className="flex flex-col gap-2 p-4 pt-0 overflow-y-auto flex-1">
        {messages.map((msg) => {
          const currentDate = msg.time.split('T')[0];
          const isNewDate = currentDate !== lastDate;
          lastDate = currentDate;

          return (
            <div key={`${roomKeyRef.current}-${msg.id}`}>
              {isNewDate && (
                <div className="flex justify-center my-2">
                  <span className="caption-2 text-grey-50 bg-grey-700/50 bg-opacity-50 px-2 rounded-[20px]">
                    {formatDate(msg.time)}
                  </span>
                </div>
              )}
              <ChatMessage
                message={msg}
                isMine={msg.sender === currentUser.id}
                senderInfo={msg.sender === currentUser.id ? currentUser : targetUser}
              />
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {/* 입력창 */}
      <ChatInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onSend={handleSend}
        onImageSend={handleImageSend}
      />
    </div>
  );
};

export default ChatRoom;
