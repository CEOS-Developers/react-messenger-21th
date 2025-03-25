import { useState } from 'react';
import * as s from '../styles/ChatRoomPageStyles';
import ChatBoard from '../chatComponents/ChatBoard.tsx';
import ChatInput from '../chatComponents/ChatInput.tsx';

const ChatRoomPage: React.FC = () => {
  return (
    <s.ChatContainer>
      <s.UpperBarContainer></s.UpperBarContainer>
      <ChatBoard />
      <s.BottomBarContainer>
        <ChatInput />
      </s.BottomBarContainer>
    </s.ChatContainer>
  );
};

export default ChatRoomPage;
