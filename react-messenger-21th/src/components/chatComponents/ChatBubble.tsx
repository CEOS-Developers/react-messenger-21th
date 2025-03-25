import React from 'react';
import styled from 'styled-components';

interface ChatBubbleProps {
  image?: string; // 첫 메시지일 때만 표시
  text: string;
  isMine: boolean;
  timestamp: string;
  showProfile: boolean; // ✅ 첫 메시지인지 여부 확인
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  image,
  text,
  isMine,
  timestamp,
  showProfile,
}) => {
  return (
    <BubbleContainer isMine={isMine}>
      {/* 상대방 메시지이면서 showProfile이 true일 때만 프로필 표시 */}
      {!isMine && showProfile && <ProfileImage src={image} alt="profile" />}
      <MessageContainer isMine={isMine}>
        <Bubble isMine={isMine}>{text}</Bubble>
        <Timestamp isMine={isMine}>
          {new Date(timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Timestamp>
      </MessageContainer>
    </BubbleContainer>
  );
};

// ✅ 전체 메시지 컨테이너
const BubbleContainer = styled.div<{ isMine: boolean }>`
  display: flex;
  align-items: flex-end;
  justify-content: ${({ isMine }) => (isMine ? 'flex-end' : 'flex-start')};
  margin-bottom: 4px;
`;

// ✅ 메시지와 타임스탬프를 감싸는 컨테이너
const MessageContainer = styled.div<{ isMine: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isMine }) => (isMine ? 'flex-start' : 'flex-end')};
`;

// ✅ 프로필 이미지 스타일
const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
`;

// ✅ 말풍선 스타일
const Bubble = styled.div<{ isMine: boolean }>`
  background-color: ${({ isMine }) => (isMine ? '#4CAF50' : '#E0E0E0')};
  color: ${({ isMine }) => (isMine ? '#FFF' : '#000')};
  padding: 10px;
  border-radius: 10px;
  max-width: 70%;
`;

// ✅ 타임스탬프 스타일 (내 메시지는 왼쪽, 상대방 메시지는 오른쪽)
const Timestamp = styled.div<{ isMine: boolean }>`
  font-size: 10px;
  color: gray;
  margin-top: 2px;
  text-align: ${({ isMine }) => (isMine ? 'left' : 'right')};
`;

export default ChatBubble;
