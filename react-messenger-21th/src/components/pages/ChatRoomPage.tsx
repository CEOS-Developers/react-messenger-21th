import { useState } from 'react';
import * as s from '../styles/ChatRoomPageStyles';
import ChatBoard from '../chatComponents/ChatBoard.tsx';
import ChatInput from '../chatComponents/ChatInput.tsx';
import styled from 'styled-components';

const ChatRoomPage: React.FC = () => {
  return (
    <s.ChatContainer>
      <s.UpperBarContainer>
        <PrevButton />
        <CurrentUsers />
        <SearchButton />
        <MenuButton />
      </s.UpperBarContainer>
      <s.ChatContentsContainer>
        <ChatBoard />
      </s.ChatContentsContainer>
      <s.BottomBarContainer>
        <PlusButton />
        <ChatInput />
      </s.BottomBarContainer>
    </s.ChatContainer>
  );
};

const PrevButton = styled.button``;
const CurrentUsers = styled.span``;

const SearchButton = styled.button``;

const MenuButton = styled.button``;

const PlusButton = styled.button``;

export default ChatRoomPage;
