import React from 'react';

import * as s from '../styles/ChatBubbleStyles';

interface ChatBubbleProps {
  image?: string; // 첫 메시지일 때만 표시
  userName?: string; // 유저 이름 표시용
  text: string;
  isMine: boolean;
  timestamp: string;
  showProfile: boolean; // 첫 메시지인지 여부 확인
  showTimestamp: boolean; // 같은 시간대면 타임스탬프 생략
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  image,
  userName,
  text,
  isMine,
  timestamp,
  showProfile,
  showTimestamp, // 추가된 prop
}) => {
  return (
    <s.BubbleRow isMine={isMine}>
      <s.ProfileColumn>
        {!isMine && showProfile && <s.ProfileImage src={image} alt="profile" />}
      </s.ProfileColumn>

      <s.MessageWrapper isMine={isMine}>
        <s.MessageBlock isMine={isMine}>
          {!isMine && showProfile && <s.UserName>{userName}</s.UserName>}
          <s.Bubble isMine={isMine}>{text}</s.Bubble>
        </s.MessageBlock>

        {/* ✅ showTimestamp가 true일 때만 렌더링 */}
        {showTimestamp && (
          <s.Timestamp isMine={isMine}>
            {new Date(timestamp).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </s.Timestamp>
        )}
      </s.MessageWrapper>
    </s.BubbleRow>
  );
};

export default ChatBubble;
