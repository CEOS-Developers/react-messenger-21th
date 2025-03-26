import { useState } from 'react';
import * as s from '../styles/ChatRoomPageStyles';
import ChatBoard from '../chatComponents/ChatBoard.tsx';
import ChatInput from '../chatComponents/ChatInput.tsx';
import styled from 'styled-components';
import SearchButtonIcon from '../../assets/icons/SearchUpperBar.svg?react';
import MenuButtonIcon from '../../assets/icons/Hamburger.svg?react';
import PlusButtonIcon from '../../assets/icons/PlusNotSelected.svg?react';

const ChatRoomPage: React.FC = () => {
  return (
    <s.ChatContainer>
      <s.UpperBarContainer>
        <PrevButton />
        <CurrentUsers />
        <SearchButton>
          <SearchButtonIcon width="24px" height="24px" />
        </SearchButton>
        <MenuButton>
          <MenuButtonIcon width="24px" height="24px" />
        </MenuButton>
      </s.UpperBarContainer>
      <s.ChatContentsContainer>
        <ChatBoard />
      </s.ChatContentsContainer>
      <s.BottomBarContainer>
        <PlusButton>
          <PlusButtonIcon width="24px" height="24px" />
        </PlusButton>
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
