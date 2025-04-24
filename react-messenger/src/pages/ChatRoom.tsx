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

  const { name, profileImg, targetUserId, type } = location.state || {};

  const { offsetClass, hideStatusBar } = useStatusBar();
  const { currentUser, targetUser, setTargetUser, switchUser } = useUserStore();
  const { messages, input, setInput, initRoom, sendTextMessage, sendImageMessage } = useChatStore();

  const roomKeyRef = useRef('');

  // 최초 마운트 시 유저 정보 설정
  useEffect(() => {
    if (name && targetUserId && profileImg) {
      setTargetUser({ name, id: targetUserId, profileImg });
    }
  }, [name, targetUserId, profileImg, setTargetUser]);

  // 채팅방 메시지 초기화
  useEffect(() => {
    if (chatId) {
      const key = initRoom(chatId);
      roomKeyRef.current = key;
    }
  }, [chatId, initRoom]);

  // 스크롤 하단 이동용 ref
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

  let lastDate = '';

  return (
    <div className="flex flex-col justify-between w-full h-full bg-grey-100">
      <div className={`${offsetClass} z-10 bg-grey-100`}>
        <ChatHeader name={targetUser?.name ?? '알 수 없음'} onClick={switchUser} />
      </div>

      {/* 메시지 영역 */}
      <div className={clsx('flex flex-col gap-2 p-4 pt-0 overflow-y-auto flex-1', hideStatusBar ? 'mt-[32px]' : '')}>
        {messages.map((msg) => {
          const currentDate = msg.createdAt.split('T')[0];
          const isNewDate = currentDate !== lastDate;
          lastDate = currentDate;

          return (
            <div key={`${roomKeyRef.current}-${msg.messageId}`}>
              {isNewDate && (
                <div className="flex justify-center my-2">
                  <span className="caption-2 text-grey-50 bg-grey-700/50 bg-opacity-50 px-2 rounded-[20px]">
                    {formatDate(msg.createdAt)}
                  </span>
                </div>
              )}
              <ChatMessage
                message={msg}
                isMine={msg.senderId === currentUser.id}
                senderInfo={msg.senderId === currentUser.id ? currentUser : targetUser}
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
