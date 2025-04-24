import { useEffect, useRef, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ChatHeader from '@/components/chatroom/ChatHeader';
import ChatInput from '@/components/chatroom/ChatInput';
import ChatMessage from '@/components/chatroom/ChatMessage';
import { formatDate } from '@/utils/formatDate';
import { useUserStore } from '@/store/userStore';
import { useChatStore } from '@/store/chatStore';
import { useStatusBar } from '@/hooks/useStatusBar';
import clsx from 'clsx';
import users from '@/data/users.json';

const ChatRoom = () => {
  const { chatId } = useParams();
  const location = useLocation();
  const { targetUserId, chatType } = location.state || {};

  const { offsetClass, hideStatusBar } = useStatusBar();
  const {
    currentUser,
    targetUser,
    groupMembers,
    viewIndex,
    setTargetUser,
    setChatType,
    setGroupMembers,
    resetView,
    toggleView,
  } = useUserStore();

  const isGroupChat = chatType === 'group';
  const { messages, input, setInput, initRoom, sendTextMessage, sendImageMessage } = useChatStore();

  const allViewers = useMemo(() => [currentUser, ...groupMembers], [currentUser, groupMembers]);

  const myInfo = isGroupChat ? allViewers[viewIndex] || currentUser : currentUser;

  const otherInfo = isGroupChat ? currentUser : targetUser;

  const roomKeyRef = useRef('');

  // 진입 시 chatType 설정
  useEffect(() => {
    if (chatType) setChatType(chatType); // location.state.chatType에서 받은 값
  }, [chatType]);

  // 그룹 멤버 설정
  useEffect(() => {
    if (isGroupChat) {
      const group = users.groups.find((g) => g.id === targetUserId);
      if (group) {
        const members = group.members ?? [];
        const detailedMembers = members.map((member) => {
          const fullUser = [...users.friends, ...users.newFriends, users.myProfile].find((u) => u.id === member.id);
          return fullUser || member;
        });
        setGroupMembers(detailedMembers);
      }
    }
  }, [isGroupChat, targetUserId]);

  useEffect(() => {
    if (targetUserId && location.state?.name && location.state?.profileImg) {
      setTargetUser({
        id: targetUserId,
        name: location.state.name,
        profileImg: location.state.profileImg,
      });
    }
  }, [targetUserId, location.state]);

  useEffect(() => {
    if (chatId) {
      const key = initRoom(chatId);
      roomKeyRef.current = key;
    }
  }, [chatId, initRoom]);

  useEffect(() => {
    return () => {
      resetView();
    };
  }, []);

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

  const getSenderInfo = (senderId: number | string) => {
    const normalizedId = Number(senderId);
    if (normalizedId === myInfo.id) return myInfo;

    const found = groupMembers.find((user) => user.id === normalizedId);

    return {
      name: found?.name ?? '알 수 없음',
      profileImg: found?.profileImg ?? '/images/default-profile.png',
    };
  };
  const headerName = isGroupChat
    ? (users.groups.find((g) => g.id === targetUserId)?.groupName ?? '그룹')
    : otherInfo.name;
  let lastDate = '';

  return (
    <div className="flex flex-col justify-between w-full h-full bg-grey-100">
      {/* 헤더 */}
      <div className={`${offsetClass} z-10 bg-grey-100`}>
        <ChatHeader name={headerName} onClick={toggleView} />
      </div>

      {/* 메시지 영역 */}
      <div className={clsx('flex flex-col gap-2 p-4 pt-0 overflow-y-auto flex-1', hideStatusBar ? 'mt-[32px]' : '')}>
        {messages
          .filter((msg) => {
            return !isGroupChat || groupMembers.some((member) => member.id === msg.senderId);
          })
          .map((msg) => {
            const currentDate = msg.createdAt.split('T')[0];
            const isNewDate = currentDate !== lastDate;
            lastDate = currentDate;

            const isMine = msg.senderId === myInfo.id;
            const senderInfo = isGroupChat ? getSenderInfo(msg.senderId) : isMine ? myInfo : otherInfo;

            return (
              <div key={`${roomKeyRef.current}-${msg.messageId}`}>
                {isNewDate && (
                  <div className="flex justify-center my-2">
                    <span className="caption-2 text-grey-50 bg-grey-700/50 px-2 rounded-[20px]">
                      {formatDate(msg.createdAt)}
                    </span>
                  </div>
                )}
                <ChatMessage message={msg} isMine={isMine} senderInfo={senderInfo} />
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
