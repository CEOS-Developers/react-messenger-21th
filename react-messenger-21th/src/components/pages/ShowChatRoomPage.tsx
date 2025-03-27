import { useSelector } from 'react-redux';
import { RootState } from '../states/store';
import styled from 'styled-components';
import ChatRoomCard from '../showChatRoomComponents/ChatRoomCard';
import BottomBar from '../BottomBar';
import SearchButtonIcon from '/public/assets/icons/SearchUpperBar.svg?react';
import OpenChatButtonIcon from '/public/assets/icons/OpenChat.svg?react';
import SettingButtonIcon from '/public/assets/icons/Setting.svg?react';

const ShowChatRoomPage: React.FC = () => {
  const chatRooms = useSelector((state: RootState) => state.chat.chatRooms);
  const users = useSelector((state: RootState) => state.chat.users);

  return (
    <ChatRoomWrapper>
      <UpperBar>
        <ChatText>채팅</ChatText>
        <RightButtons>
          <SearchButtonIcon />
          <OpenChatButtonIcon />
          <SettingButtonIcon />
        </RightButtons>
      </UpperBar>

      <ChatRoomList>
        {chatRooms.map((room) => (
          <ChatRoomCard key={room.id} room={room} users={users} />
        ))}
      </ChatRoomList>

      <BottomBar current="chat" />
    </ChatRoomWrapper>
  );
};

export default ShowChatRoomPage;

// styled-components
const ChatRoomWrapper = styled.div``;

const UpperBar = styled.div``;

const ChatText = styled.span``;

const RightButtons = styled.div``;

const ChatRoomList = styled.div``;
