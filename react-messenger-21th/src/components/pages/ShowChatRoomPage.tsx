import { useSelector } from 'react-redux';
import { RootState } from '../states/store';
import styled from 'styled-components';
import ChatRoomCard from '../showChatRoomComponents/ChatRoomCard';
import BottomNav from '../bottomBarComponents/BottomNav';
import SearchButtonIcon from '/public/assets/icons/SearchUpperBar.svg?react';
import PlusChatButton from '/public/assets/icons/PlusChatButton.svg?react';
import SettingButtonIcon from '/public/assets/icons/SettingButton.svg?react';

const ShowChatRoomPage: React.FC = () => {
  const chatRooms = useSelector((state: RootState) => state.chat.chatRooms);
  const users = useSelector((state: RootState) => state.chat.users);

  return (
    <ChatRoomWrapper>
      <UpperBar>
        <ChatText>채팅</ChatText>
        <RightButtons>
          <SearchButtonIcon width="16px" height="16px" />
          <PlusChatButton width="16px" height="14px" />
          <SettingButtonIcon width="18px" height="18px" />
        </RightButtons>
      </UpperBar>

      <ChatRoomList>
        {/* 방 번호로 묶어 리스트 보여주기 */}
        {chatRooms.map((room) => (
          <ChatRoomCard key={room.id} room={room} users={users} />
        ))}
      </ChatRoomList>

      <BottomBarContainer>
        <BottomNav />
      </BottomBarContainer>
    </ChatRoomWrapper>
  );
};

export default ShowChatRoomPage;

// styled-components
const ChatRoomWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 48px 1fr auto; // 마지막 줄을 auto로
  box-sizing: border-box;
`;

const BottomBarContainer = styled.div`
  height: auto;
  align-items: stretch;
  width: 100%;
  display: flex;
  padding: 12px 20px 12px 20px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 12px;
`;

const UpperBar = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background-color: white;
  border-bottom: 1px solid #ddd;
  z-index: 100;
`;

const ChatText = styled.span``;

const RightButtons = styled.div``;

const ChatRoomList = styled.div``;
