import { useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ChatHeader from '@/components/chatroom/ChatHeader';
import ChatInput from '@/components/chatroom/ChatInput';
import ChatMessage from '@/components/chatroom/ChatMessage';
import { formatDate } from '@/utils/formatDate';
import { useUserStore } from '@/store/userStore';
import { useChatStore } from '@/store/chatStore';
import { useStatusBar } from '@/hooks/useStatusBar';
import clsx from 'clsx';

const ChatRoom = () => {
  const { chatId } = useParams();
  const location = useLocation();

  const { name, profileImg, targetUserId } = location.state || {};

  const { offsetClass, hideStatusBar } = useStatusBar();

  const { currentUser, targetUser, setTargetUser, resetView, isSwitched: storeSwitched, toggleView } = useUserStore();

  const { messages, input, setInput, initRoom, sendTextMessage, sendImageMessage } = useChatStore();

  // 시점 전환된 유저 기준 정보
  const myInfo = storeSwitched ? targetUser : currentUser;
  const otherInfo = storeSwitched ? currentUser : targetUser;

  const roomKeyRef = useRef('');

  // targetUser 상태 초기화
  useEffect(() => {
    if (targetUserId && name && profileImg) {
      setTargetUser({
        id: targetUserId,
        name,
        profileImg,
      });
    }
  }, [targetUserId, name, profileImg]);

  // 채팅방 초기화
  useEffect(() => {
    if (chatId) {
      const key = initRoom(chatId);
      roomKeyRef.current = key;
    }
  }, [chatId, initRoom]);

  useEffect(() => {
    resetView();
  }, []);

  // 스크롤 아래로
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // 텍스트 메시지 전송
  const handleSend = () => {
    if (!input.trim()) return;
    sendTextMessage(input, myInfo.id, roomKeyRef.current);
  };

  // 이미지 메시지 전송
  const handleImageSend = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      sendImageMessage(reader.result as string, myInfo.id, roomKeyRef.current);
    };
    reader.readAsDataURL(file);
  };

  // 날짜 분기
  let lastDate = '';

  return (
    <div className="flex flex-col justify-between w-full h-full bg-grey-100">
      {/* 헤더 */}
      <div className={`${offsetClass} z-10 bg-grey-100`}>
        <ChatHeader name={otherInfo.name} onClick={toggleView} /> {/* ✅ toggleView로 시점 전환 */}
      </div>

      {/* 메시지 영역 */}
      <div className={clsx('flex flex-col gap-2 p-4 pt-0 overflow-y-auto flex-1', hideStatusBar ? 'mt-[32px]' : '')}>
        {messages.map((msg) => {
          const currentDate = msg.createdAt.split('T')[0];
          const isNewDate = currentDate !== lastDate;
          lastDate = currentDate;

          const isMine = msg.senderId === myInfo.id;

          return (
            <div key={`${roomKeyRef.current}-${msg.messageId}`}>
              {isNewDate && (
                <div className="flex justify-center my-2">
                  <span className="caption-2 text-grey-50 bg-grey-700/50 bg-opacity-50 px-2 rounded-[20px]">
                    {formatDate(msg.createdAt)}
                  </span>
                </div>
              )}
              <ChatMessage message={msg} isMine={isMine} senderInfo={isMine ? myInfo : otherInfo} />
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
