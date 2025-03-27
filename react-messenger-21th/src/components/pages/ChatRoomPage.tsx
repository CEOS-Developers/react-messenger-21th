import { useState } from 'react';
import * as s from '../styles/ChatRoomPageStyles';
import ChatBoard from '../chatComponents/ChatBoard.tsx';
import ChatInput from '../chatComponents/ChatInput.tsx';
import styled from 'styled-components';
import SearchButtonIcon from '../../assets/icons/SearchUpperBar.svg?react';
import MenuButtonIcon from '../../assets/icons/Hamburger.svg?react';
import PlusButtonIcon from '../../assets/icons/PlusNotSelected.svg?react';
import PrevButton from '../../assets/icons/PrevButton.svg?react';

const ChatRoomPage: React.FC = () => {
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);

  return (
    <s.ChatContainer isEmojiOpen={isEmojiOpen}>
      <s.UpperBarContainer>
        <PrevButton />
        <CurrentPartnersName />
        <CurrentUsersNumber />
        <SearchButtonIcon width="16px" height="16px" />
        <MenuButtonIcon width="12px" height="12px" />
      </s.UpperBarContainer>
      <s.ChatContentsContainer>
        <ChatBoard />
      </s.ChatContentsContainer>
      <s.BottomBarContainer isEmojiOpen={isEmojiOpen}>
        <PlusButtonIcon width="16px" height="16px" />
        <ChatInput setIsEmojiOpen={setIsEmojiOpen} />
      </s.BottomBarContainer>
    </s.ChatContainer>
  );
};

const CurrentPartnersName = styled.span``;

const CurrentUsersNumber = styled.span``;

export default ChatRoomPage;
