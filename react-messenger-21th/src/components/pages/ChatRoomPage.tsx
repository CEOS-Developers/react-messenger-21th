import { useState, useRef, useEffect } from 'react';
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

  // 채팅이 업데이트될 때마다 아래로 스크롤
  const messages = useSelector((state: RootState) => {
    const room = state.chat.chatRooms.find(
      (r) => r.id === state.chat.currentChatRoomId,
    );
    return room?.messages ?? [];
  });

  const chatListRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    chatListRef.current?.scrollTo(0, chatListRef.current.scrollHeight);
  }, [messages]);

  return (
    <s.ChatContainer>
      <s.UpperBarContainer>
        <LeftGroup>
          <PrevButton />
        </LeftGroup>

        <CenterGroup>
          <PartnerInfo onClick={handlePartnerClick}>
            <CurrentPartnersName>
              {partner?.name || '이름 없음'}
            </CurrentPartnersName>
            <CurrentUsersNumber>{roomUsers?.length || 0}</CurrentUsersNumber>
          </PartnerInfo>
        </CenterGroup>

        <RightGroup>
          <SearchButtonIcon width="16px" height="16px" />
          <MenuButtonIcon width="12px" height="12px" />
        </RightGroup>
      </s.UpperBarContainer>
      <s.ChatContentsContainer ref={chatListRef}>
        <ChatBoard />
      </s.ChatContentsContainer>
      <s.BottomBarContainer isEmojiOpen={isEmojiOpen}>
        <PlusButtonWrapper>
          <PlusButtonIcon width="16px" height="16px" />
        </PlusButtonWrapper>{' '}
        <ChatInput setIsEmojiOpen={setIsEmojiOpen} />
      </s.BottomBarContainer>
    </s.ChatContainer>
  );
};

// s.UpperBarContainer
export const UpperBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  height: 48px;
  border-bottom: 1px solid #e5e7eb;
`;

const PlusButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 8px; // 여기만 바닥에서 띄움
`;

// 왼쪽, 가운데, 오른쪽 그룹 정렬
const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CenterGroup = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;

const PartnerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CurrentPartnersName = styled.span`
  cursor: pointer;
  margin: 0px;
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
