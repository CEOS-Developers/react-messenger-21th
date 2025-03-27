import React from 'react';
import styled from 'styled-components';

interface ChatBubbleProps {
  image?: string; // 첫 메시지일 때만 표시
  userName?: string; // 유저 이름 표시용
  text: string;
  isMine: boolean;
  timestamp: string;
  showProfile: boolean; // 첫 메시지인지 여부 확인
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  image,
  userName,
  text,
  isMine,
  timestamp,
  showProfile,
}) => {
  return (
    <BubbleRow isMine={isMine}>
      <ProfileColumn>
        {!isMine && showProfile && <ProfileImage src={image} alt="profile" />}
      </ProfileColumn>

      <MessageWrapper isMine={isMine}>
        <MessageBlock isMine={isMine}>
          {!isMine && showProfile && <UserName>{userName}</UserName>}
          <Bubble isMine={isMine}>{text}</Bubble>
        </MessageBlock>
        <Timestamp isMine={isMine}>
          {new Date(timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Timestamp>
      </MessageWrapper>
    </BubbleRow>
  );
};

// 전체 한 줄 (좌우 정렬 포함)
const BubbleRow = styled.div<{ isMine: boolean }>`
  display: flex;
  justify-content: ${({ isMine }) => (isMine ? 'flex-end' : 'flex-start')};
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  padding: 4px;
`;

// 프로필
const ProfileColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 36px;
  gap: 4px;
`;

const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
`;

const UserName = styled.div`
  font-size: 12px;
  color: #374151;
  text-align: center;
`;

// 말풍선 + 시간
const MessageBlock = styled.div<{ isMine: boolean }>`
  display: flex;
  flex-direction: column; // 🔥 세로로 정렬!
  align-items: ${({ isMine }) => (isMine ? 'flex-end' : 'flex-start')};
  gap: 4px;
`;

const Bubble = styled.div<{ isMine: boolean }>`
  background-color: ${({ isMine }) => (isMine ? '#D1D5DB' : '#FEFEFE')};
  border: ${({ isMine }) => (isMine ? '1px solid #D1D5DB' : '')};
  color: #111827;
  border-radius: 12px;
  font-size: 14px;
  max-width: 200px;
  white-space: pre-wrap;
  padding: 8px 12px;
`;

const Timestamp = styled.div<{ isMine: boolean }>`
  font-size: 10px;
  color: gray;
  text-align: ${({ isMine }) => (isMine ? 'left' : 'right')};
`;

const MessageWrapper = styled.div<{ isMine: boolean }>`
  display: flex;
  align-items: flex-end;
  flex-direction: ${({ isMine }) => (isMine ? 'row-reverse' : 'row')};
`;

export default ChatBubble;
