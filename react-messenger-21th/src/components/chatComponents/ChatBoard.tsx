import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../states/store';
import { Message } from '../states/chatSlice';
import ChatBubble from './ChatBubble';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const ChatBoard: React.FC = () => {
  const { roomId } = useParams();

  const currentSenderId = useSelector(
    (state: RootState) => state.chat.currentSenderId,
  );
  const chatRooms = useSelector((state: RootState) => state.chat.chatRooms);
  const users = useSelector((state: RootState) => state.chat.users);

  // 현재 선택된 채팅방 찾기
  const currentChatRoom = chatRooms.find((room) => room.id === roomId);
  if (!currentChatRoom) return <p>채팅방을 선택하세요.</p>;

  // 메시지를 날짜 & 시간 기준으로 그룹화
  const groupMessages = () => {
    const groupedMessages: { date: string; messages: Message[] }[] = [];
    let lastDate = '';

    currentChatRoom.messages.forEach((msg) => {
      const msgDate = new Date(msg.timestamp).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
      });

      // 날짜가 바뀌면 새로운 그룹 추가
      if (msgDate !== lastDate) {
        groupedMessages.push({ date: msgDate, messages: [] });
        lastDate = msgDate;
      }

      groupedMessages[groupedMessages.length - 1].messages.push(msg);
    });

    return groupedMessages;
  };

  const groupedMessages = groupMessages();

  return (
    <ChatContainer>
      {/* 현재 선택된 채팅방 메시지에 대해 */}
      {groupedMessages.map((group, index) => (
        <div key={index}>
          {/* 날짜 스탬프 출력 */}
          <DateStamp>{group.date}</DateStamp>
          {group.messages.map((msg, msgIndex) => {
            const sender = users.find((user) => user.id === msg.senderId);

            const currentTime = new Date(msg.timestamp).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            });

            const nextMsg = group.messages[msgIndex + 1];
            const nextTime = nextMsg
              ? new Date(nextMsg.timestamp).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })
              : null;

            // 다음 메시지와 시간이 다르면, 현재 메시지에 타임스탬프 보여줌
            const showTimestamp = currentTime !== nextTime;

            return (
              <ChatBubble
                key={msgIndex}
                image={sender?.image || '/default-profile.svg'}
                userName={sender?.name || ''}
                text={msg.text}
                isMine={msg.senderId === currentSenderId}
                timestamp={msg.timestamp}
                showProfile={
                  msgIndex === 0 ||
                  group.messages[msgIndex - 1].senderId !== msg.senderId
                }
                showTimestamp={showTimestamp} // 마지막 메시지에 표시
              />
            );
          })}
        </div>
      ))}
    </ChatContainer>
  );
};

// 전체 채팅 보드 스타일
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

// 날짜 스탬프 스타일
const DateStamp = styled.div`
  text-align: center;
  font-size: 12px;
  color: gray;
  margin: 10px 0;
`;

export default ChatBoard;
