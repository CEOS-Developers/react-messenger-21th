import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../states/store';
import { Message } from '../states/chatSlice';
import ChatBubble from './ChatBubble';
import styled from 'styled-components';

const ChatBoard: React.FC = () => {
  const chatRooms = useSelector((state: RootState) => state.chat.chatRooms);
  const currentChatRoomId = useSelector(
    (state: RootState) => state.chat.currentChatRoomId,
  );
  const users = useSelector((state: RootState) => state.chat.users);

  // 현재 선택된 채팅방 찾기
  const currentChatRoom = chatRooms.find(
    (room) => room.id === currentChatRoomId,
  );
  if (!currentChatRoom) return <p>채팅방을 선택하세요.</p>;

  return (
    <ChatContainer>
      {/* 현재 선택된 채팅방 메시지에 대해*/}
      {currentChatRoom.messages.map((msg, index) => {
        {
          /* 누가 보낸 메시지인지 찾아서 */
        }
        const sender = users.find((user) => user.id === msg.senderId);

        return (
          <ChatBubble
            // chatBubble 인자로 보내기
            key={index}
            image={sender?.image || '/default-profile.svg'}
            text={msg.text}
            isMine={msg.isMine}
            timestamp={msg.timestamp}
            showProfile={
              index === 0 ||
              currentChatRoom.messages[index - 1].senderId !== msg.senderId
            }
          />
        );
      })}
    </ChatContainer>
  );
};

// ✅ 전체 채팅 보드 스타일
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export default ChatBoard;
