import { useSelector } from 'react-redux';
import { useState } from 'react';
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
  // 고정된 채팅방 관리
  const [pinnedRooms, setPinnedRooms] = useState<string[]>([]);
  const [activeRoom, setActiveRoom] = useState<string | null>(null);

  const handleTogglePin = (roomId: string) => {
    setPinnedRooms((prev) =>
      prev.includes(roomId)
        ? prev.filter((id) => id !== roomId)
        : [...prev, roomId],
    );
  };

  const handleActivate = (roomId: string) => {
    setActiveRoom(roomId);
    setTimeout(() => setActiveRoom(null), 200);
  };

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
        {[...chatRooms] // 또는 chatRooms.slice()
          .sort((a, b) => {
            const aPinned = pinnedRooms.includes(a.id);
            const bPinned = pinnedRooms.includes(b.id);
            return Number(bPinned) - Number(aPinned);
          })
          .map((room) => (
            <ChatRoomCard
              key={room.id}
              room={room}
              users={users}
              isPinned={pinnedRooms.includes(room.id)}
              isActive={activeRoom === room.id}
              onTogglePin={handleTogglePin}
              onActivate={handleActivate}
            />
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

const ChatText = styled.span`
  flex: 1 0 0;
  color: ${({ theme }) => theme.colors.grey09};

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px; /* 150% */
  letter-spacing: -0.27px;
`;

const RightButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ChatRoomList = styled.div`
  display: flex;
  padding-top: 8px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.grey03};
`;
