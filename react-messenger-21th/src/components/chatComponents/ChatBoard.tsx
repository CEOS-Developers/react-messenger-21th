import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../states/store';
import { Message } from '../states/chatSlice';
import ChatBubble from './ChatBubble';
import styled from 'styled-components';

const ChatBoard: React.FC = () => {
  const messages = useSelector((state: RootState) => state.chat.messages);
  const users = useSelector((state: RootState) => state.chat.users); // 유저 정보 가져오기

  // ✅ 메시지를 시간 그룹별로 나누기
  const groupMessages = () => {
    const groupedMessages: { date: string; messages: Message[] }[] = [];
    let lastDate = '';
    let lastTime = 0;

    messages.forEach((msg) => {
      const msgDate = new Date(msg.timestamp).toLocaleDateString();
      const msgTime = new Date(msg.timestamp).getTime();

      // ✅ 날짜가 바뀌면 새로운 그룹 추가
      if (msgDate !== lastDate) {
        groupedMessages.push({ date: msgDate, messages: [] });
        lastDate = msgDate;
      }

      // ✅ 같은 그룹에 추가 (1분 이내 메시지는 같은 그룹)
      if (msgTime - lastTime > 60000 || groupedMessages.length === 0) {
        groupedMessages[groupedMessages.length - 1].messages.push(msg);
      } else {
        groupedMessages[groupedMessages.length - 1].messages.push(msg);
      }

      lastTime = msgTime;
    });

    return groupedMessages;
  };

  const groupedMessages = groupMessages();

  return (
    <ChatContainer>
      {groupedMessages.map((group, index) => (
        <div key={index}>
          {/* ✅ 날짜 스탬프 출력 */}
          <DateStamp>{group.date}</DateStamp>
          {group.messages.map((msg, msgIndex) => {
            // ✅ 현재 메시지의 보낸 유저 정보 찾기
            const sender = users.find((user) => user.id === msg.senderId);

            // ✅ 같은 그룹 내에서 첫 번째 메시지만 프로필 이미지 표시
            const showProfile =
              msgIndex === 0 ||
              group.messages[msgIndex - 1].senderId !== msg.senderId;

            return (
              <ChatBubble
                key={msgIndex}
                image={sender?.image || '/default-profile.svg'} // 유저 이미지 적용
                text={msg.text}
                isMine={msg.isMine}
                timestamp={msg.timestamp}
                showProfile={showProfile} // ✅ 프로필 표시 여부 전달
              />
            );
          })}
        </div>
      ))}
    </ChatContainer>
  );
};

// ✅ 날짜 스탬프 스타일
const DateStamp = styled.div`
  text-align: center;
  font-size: 12px;
  color: gray;
  margin: 10px 0;
`;

// ✅ 전체 채팅 보드 스타일
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export default ChatBoard;
