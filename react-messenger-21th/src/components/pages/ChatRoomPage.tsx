import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../states/store';
import { switchSender } from '../states/chatSlice';
import * as s from '../styles/ChatRoomPageStyles';
import ChatBoard from '../chatComponents/ChatBoard';
import ChatInput from '../chatComponents/ChatInput';
import styled from 'styled-components';
import SearchButtonIcon from '/public/assets/icons/SearchUpperBar.svg?react';
import MenuButtonIcon from '/public/assets/icons/Hamburger.svg?react';
import PlusButtonIcon from '/public/assets/icons/PlusNotSelected.svg?react';
import PrevButton from '/public/assets/icons/PrevButton.svg?react';

const ChatRoomPage: React.FC = () => {
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const dispatch = useDispatch();

  const chatRooms = useSelector((state: RootState) => state.chat.chatRooms);
  const currentChatRoomId = useSelector(
    (state: RootState) => state.chat.currentChatRoomId,
  );
  const currentSenderId = useSelector(
    (state: RootState) => state.chat.currentSenderId,
  );
  const users = useSelector((state: RootState) => state.chat.users);

  const currentChatRoom = chatRooms.find(
    (room) => room.id === currentChatRoomId,
  );

  const roomUsers = currentChatRoom?.participants
    .map((id) => users.find((user) => user.id === id))
    .filter((u): u is (typeof users)[number] => Boolean(u));

  const partner = roomUsers?.find((user) => user.id !== currentSenderId);

  const handlePartnerClick = () => {
    if (partner?.id) {
      dispatch(switchSender(partner.id));
    }
  };

  return (
    <s.ChatContainer isEmojiOpen={isEmojiOpen}>
      <s.UpperBarContainer>
        <PrevButton />
        <CurrentPartnersName onClick={handlePartnerClick}>
          {partner?.name || '이름 없음'}
        </CurrentPartnersName>
        <CurrentUsersNumber>{roomUsers?.length || 0}</CurrentUsersNumber>
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

const CurrentPartnersName = styled.span`
  cursor: pointer;
  margin: 0 8px;
  color: var(--Grey-Grey09, #111827);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: -0.014px;
`;

const CurrentUsersNumber = styled.span`
  color: var(--Grey-Grey04, #9ca3af);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: -0.014px;
`;

export default ChatRoomPage;
