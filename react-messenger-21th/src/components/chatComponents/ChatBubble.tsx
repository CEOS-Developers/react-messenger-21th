import React from 'react';
import styled from 'styled-components';

interface ChatBubbleProps {
  image: string; // 이미지 추가
  text: string;
  isMine: boolean;
  timestamp: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  image,
  text,
  isMine,
  timestamp,
}) => {
  return (
    <BubbleContainer isMine={isMine}>
      {/* 상대방 메시지일 때만 프로필 이미지 표시 */}
      {!isMine && <ProfileImage src={image} alt="profile" />}
      <Bubble isMine={isMine}>{text}</Bubble>
      {/* 내 메시지일 때 프로필 이미지 오른쪽에 표시 */}
      {isMine}
      <Timestamp>
        {new Date(timestamp).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </Timestamp>
    </BubbleContainer>
  );
};

// 채팅 버블과 프로필을 감싸는 컨테이너
const BubbleContainer = styled.div<{ isMine: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ isMine }) => (isMine ? 'flex-end' : 'flex-start')};
`;

// 프로필 이미지 스타일
const ProfileImage = styled.img``;

// 말풍선 스타일
const Bubble = styled.div<{ isMine: boolean }>`
  background-color: ${({ isMine }) => (isMine ? '#4CAF50' : '#E0E0E0')};
  color: ${({ isMine }) => (isMine ? '#FFF' : '#000')};
`;

// 타임스탬프 스타일
const Timestamp = styled.div``;

export default ChatBubble;
