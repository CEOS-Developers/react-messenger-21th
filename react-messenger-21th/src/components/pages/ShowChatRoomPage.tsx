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
          <SearchButtonIcon />
          <PlusChatButton />
          <SettingButtonIcon />
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
const BottomBarContainer = styled.div``;

const ChatRoomWrapper = styled.div``;

const UpperBar = styled.div``;

const ChatText = styled.span``;

const RightButtons = styled.div``;

const ChatRoomList = styled.div``;
