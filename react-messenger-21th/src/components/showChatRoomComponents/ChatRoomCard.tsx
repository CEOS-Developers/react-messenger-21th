import React from 'react';
import { Message } from '../states/chatSlice';
import { idForMe } from '../../mocks/mockData';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

import * as s from '../styles/ShowChatRoomCardStyles';
import PinIcon from '/public/assets/icons/PinIcon.svg?react';

// 타입 정의
interface User {
  id: string;
  name: string;
  image: string;
}

interface ChatRoom {
  id: string;
  participants: string[];
  messages: Message[];
}

interface Props {
  room: ChatRoom;
  users: User[];
  isPinned: boolean;
  isActive: boolean;
  onTogglePin: (roomId: string) => void;
  onActivate: (roomId: string) => void;
}

// 방 번호와 유저 명단 받아오기
const ChatRoomCard: React.FC<Props> = ({
  room,
  users,
  isPinned,
  isActive,
  onTogglePin,
  onActivate,
}) => {
  const navigate = useNavigate();
  const longPressTimeout = useRef<number | null>(null); // 핀 감지용

  const handleClick = () => {
    onActivate(room.id);
    navigate(`/chat/${room.id}`);
  };

  const handleLongPressStart = () => {
    longPressTimeout.current = window.setTimeout(() => {
      onTogglePin(room.id);
    }, 600); // 600ms 이상 누르면 핀 고정
  };

  const handleLongPressEnd = () => {
    if (longPressTimeout.current) {
      clearTimeout(longPressTimeout.current);
      longPressTimeout.current = null;
    }
  };

  const getRelativeTime = (timestamp: string | number | Date): string => {
    const now = new Date();
    const messageDate = new Date(timestamp);

    const diffTime = now.getTime() - messageDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return '오늘';
    if (diffDays === 1) return '어제';
    return `${diffDays}일 전`;
  };

  // participants = 유저 아이디 배열
  // 유저 아이디 => 실제 유저 객체로 변환
  // 현재 참가자 중 유저 정보의 아이디와 같은 사람이 있으면 유저 반환
  const participants = room.participants
    .map((id) => users.find((user) => user.id === id && user.id !== idForMe))
    .filter((u): u is User => !!u);

  // 제일 마지막 메시지 정보 가져오기
  const lastMessage = room.messages[room.messages.length - 1];
  const roomName = participants.map((user) => user.name).join(', ');
  // 혹시 대화 없는 경우 방지용
  const lastText = lastMessage?.text || '';
  const lastTime = lastMessage ? getRelativeTime(lastMessage.timestamp) : '';

  return (
    <s.CardWrapper
      onClick={handleClick}
      onMouseDown={handleLongPressStart}
      onMouseUp={handleLongPressEnd}
      onMouseLeave={handleLongPressEnd}
      onTouchStart={handleLongPressStart}
      onTouchEnd={handleLongPressEnd}
      $active={isActive}
    >
      <s.CardInfoWrapper>
        <s.ProfileImages>
          {participants.slice(0, 4).map((user, i) => (
            <s.ProfileImage key={i} src={user.image} alt="profile" />
          ))}
        </s.ProfileImages>

        <s.TextContent>
          <s.TopRow>
            <s.RoomName>
              {roomName}
              <s.PinIconWrapper>
                {isPinned && <PinIcon width="14px" height="14px" />}
              </s.PinIconWrapper>
            </s.RoomName>
            <s.LastMessage>{lastText}</s.LastMessage>
          </s.TopRow>
          <s.TimeStamp>{lastTime}</s.TimeStamp>
        </s.TextContent>
      </s.CardInfoWrapper>
    </s.CardWrapper>
  );
};

export default ChatRoomCard;
