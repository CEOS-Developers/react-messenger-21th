import React from 'react';
import styled from 'styled-components';
import { Message } from '../states/chatSlice';

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
}
// 방 번호와 유저 명단 받아오기
const ChatRoomCard: React.FC<Props> = ({ room, users }) => {
  // participants = 유저 아이디 배열
  // 유저 아이디 => 실제 유저 객체로 변환
  // 현재 참가자 중 유저 정보의 아이디와 같은 사람이 있으면 유저 반환
  const participants = room.participants
    .map((id) => users.find((user) => user.id === id))
    .filter((u): u is User => !!u);

  // 제일 마지막 메시지 정보 가져오기
  const lastMessage = room.messages[room.messages.length - 1];
  const roomName = participants.map((user) => user.name).join(', ');
  // 혹시 대화 없는 경우 방지용
  const lastText = lastMessage?.text || '';
  const lastTime = lastMessage
    ? new Date(lastMessage.timestamp).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
    : '';

  return (
    <CardWrapper>
      <ProfileImages>
        {participants.slice(0, 4).map((user, i) => (
          <ProfileImage key={i} src={user.image} alt="profile" />
        ))}
      </ProfileImages>

      <TextContent>
        <TopRow>
          <RoomName>{roomName}</RoomName>
          <TimeStamp>{lastTime}</TimeStamp>
        </TopRow>
        <LastMessage>{lastText}</LastMessage>
      </TextContent>
    </CardWrapper>
  );
};

export default ChatRoomCard;

// styled-components
const CardWrapper = styled.div``;

const ProfileImages = styled.div``;

const ProfileImage = styled.img``;

const TextContent = styled.div``;

const TopRow = styled.div``;

const RoomName = styled.div``;

const TimeStamp = styled.div``;

const LastMessage = styled.div``;
