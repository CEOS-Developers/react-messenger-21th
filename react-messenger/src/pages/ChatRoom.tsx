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
  const { targetUserId, chatType, name, profileImg } = location.state || {};

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
  const { messages, input, setInput, initRoom, sendTextMessage, sendImageMessage } = useChatStore();

  const isGroupChat = chatType === 'group';

  // 그룹 채팅의 경우 현재 유저와 멤버 리스트 구성
  const allViewers = useMemo(() => {
    const filtered = groupMembers.filter((m) => m.id !== currentUser.id);
    return [currentUser, ...filtered];
  }, [currentUser, groupMembers]);

  const myInfo = isGroupChat ? allViewers[viewIndex] || currentUser : currentUser;
  const otherInfo = isGroupChat ? currentUser : targetUser;

  const roomKeyRef = useRef('');

  // 초기화: chatType 설정, 채팅방 키 생성, 대상 유저 설정, 그룹 멤버 설정
  useEffect(() => {
    if (chatType) setChatType(chatType);
    if (chatId) roomKeyRef.current = initRoom(chatId);

    // 1:1일 때 채팅 상대 설정
    if (targetUserId && name && profileImg) {
      setTargetUser({ id: targetUserId, name, profileImg });
    }

    // 그룹일 때 그룹 채팅 멤버 구성
    if (isGroupChat) {
      const group = users.groups.find((g) => g.id === targetUserId);
      if (group) {
        const members = group.members ?? [];
        const detailedMembers = members.map(
          (member) =>
            [...users.friends, ...users.newFriends, users.myProfile].find((u) => u.id === member.id) || member,
        );
        setGroupMembers(detailedMembers);
      }
    }

    // 언마운트 시 초기화
    return () => resetView();
  }, [chatType, chatId, targetUserId, name, profileImg, isGroupChat]);

  // 메시지 수신 시 자동 스크롤
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // 텍스트 메시지 전송 핸들러
  const handleSend = () => {
    if (!input.trim()) return;
    sendTextMessage(input, myInfo.id, roomKeyRef.current);
  };

  // 이미지 메시지 전송 핸들러
  const handleImageSend = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      sendImageMessage(reader.result as string, myInfo.id, roomKeyRef.current);
    };
    reader.readAsDataURL(file);
  };

  // 메시지 발신자 정보 조회
  const getSenderInfo = (senderId: number | string) => {
    const id = Number(senderId);
    if (id === myInfo.id) return myInfo;
    const found = groupMembers.find((user) => user.id === id);
    return {
      name: found?.name ?? '알 수 없음',
      profileImg: found?.profileImg ?? '',
    };
  };

  // 헤더 타이틀 설정
  const headerName = isGroupChat
    ? (users.groups.find((g) => g.id === targetUserId)?.groupName ?? '그룹')
    : otherInfo.name;

  let lastDate = '';

  return (
    <div className="flex flex-col justify-between w-full h-full bg-grey-100">
      {/* 채팅 헤더 */}
      <div className={`${offsetClass} z-10 bg-grey-100`}>
        <ChatHeader name={headerName} onClick={toggleView} />
      </div>

      {/* 메시지 영역 */}
      <div className={clsx('flex flex-col gap-2 p-4 pt-0 overflow-y-auto flex-1', hideStatusBar && 'mt-[32px]')}>
        {messages
          .filter((msg) => !isGroupChat || groupMembers.some((m) => m.id === msg.senderId))
          .map((msg) => {
            const currentDate = msg.createdAt.split('T')[0];
            const isNewDate = currentDate !== lastDate;
            lastDate = currentDate;

            const isMine = msg.senderId === myInfo.id;
            const senderInfo = isGroupChat ? getSenderInfo(msg.senderId) : isMine ? myInfo : otherInfo;

            return (
              <div key={`${roomKeyRef.current}-${msg.messageId}`}>
                {/* 날짜 변경 시 날짜 라벨 표시 */}
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
