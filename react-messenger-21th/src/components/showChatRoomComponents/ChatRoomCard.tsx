import React from 'react';
import styled from 'styled-components';
import { Message } from '../states/chatSlice';
import { idForMe } from '../../mocks/mockData';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
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
    <CardWrapper
      onClick={handleClick}
      onMouseDown={handleLongPressStart}
      onMouseUp={handleLongPressEnd}
      onMouseLeave={handleLongPressEnd}
      onTouchStart={handleLongPressStart}
      onTouchEnd={handleLongPressEnd}
      $active={isActive}
    >
      <CardInfoWrapper>
        <ProfileImages>
          {participants.slice(0, 4).map((user, i) => (
            <ProfileImage key={i} src={user.image} alt="profile" />
          ))}
        </ProfileImages>

        <TextContent>
          <TopRow>
            <RoomName>
              {roomName}
              <PinIconWrapper>
                {isPinned && <PinIcon width="14px" height="14px" />}
              </PinIconWrapper>
            </RoomName>
            <LastMessage>{lastText}</LastMessage>
          </TopRow>
          <TimeStamp>{lastTime}</TimeStamp>
        </TextContent>
      </CardInfoWrapper>
    </CardWrapper>
  );
};

export default ChatRoomCard;

// styled-components
const CardWrapper = styled.div<{ $active?: boolean }>`
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.main : 'transparent'};
  transition: background-color 0.6s ease;

  width: 100%;
  display: flex;
  padding: 4px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

const CardInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ProfileImages = styled.div`
  display: flex;
  width: 36px;
  height: 36px;
  padding-bottom: 0px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;

const ProfileImage = styled.img``;

const TextContent = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const TopRow = styled.div``;

const PinIconWrapper = styled.span`
  margin-left: 8px;
`;

const RoomName = styled.div`
  color: ${({ theme }) => theme.colors.grey07};
  /* Label/Label */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.24px;
`;

const TimeStamp = styled.div`
  align-self: stretch;
  color: #6b7280;
  text-align: right;

  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px; /* 150% */
  letter-spacing: -0.15px;
`;

const LastMessage = styled.div`
  width: 228px;
  height: 16px;

  overflow: hidden;
  color: ${({ theme }) => theme.colors.grey06};
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.21px;
`;
