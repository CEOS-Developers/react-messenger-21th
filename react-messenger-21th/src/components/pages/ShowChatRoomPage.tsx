import { useSelector } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../states/store';

import * as s from '../styles/ShowChatRoomPageStyles';
import ChatRoomCard from '../showChatRoomComponents/ChatRoomCard';
import BottomNav from '../bottomBarComponents/BottomNav';

import SearchButtonIcon from '/public/assets/icons/SearchUpperBar.svg?react';
import PlusChatButton from '/public/assets/icons/PlusChatButton.svg?react';
import SettingButtonIcon from '/public/assets/icons/SettingButton.svg?react';

const ShowChatRoomPage = () => {
  const chatRooms = useSelector((state: RootState) => state.chat.chatRooms);
  const users = useSelector((state: RootState) => state.chat.users);

  // 고정된 채팅방 관리
  const [pinnedRooms, setPinnedRooms] = useState<string[]>(() => {
    // 로컬스토리지에서 불러오기
    const stored = localStorage.getItem('pinnedRooms');
    return stored ? JSON.parse(stored) : [];
  });

  const [activeRoom, setActiveRoom] = useState<string | null>(null);

  // 검색 기능 관리
  const [searchText, setSearchText] = useState<string>('');

  const handleTogglePin = (roomId: string) => {
    setPinnedRooms((prev) => {
      const updated = prev.includes(roomId)
        ? prev.filter((id) => id !== roomId)
        : [...prev, roomId];

      // 로컬스토리지에 저장
      localStorage.setItem('pinnedRooms', JSON.stringify(updated));
      return updated;
    });
  };

  const handleActivate = (roomId: string) => {
    setActiveRoom(roomId);
    setTimeout(() => setActiveRoom(null), 200);
  };

  // 검색 기능 구현하기
  // 검색어 입력 처리
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // 검색어에 따라 필터링하기
  const filteredRooms = chatRooms.filter((room) => {
    if (!searchText.trim()) return true;

    return room.participants.some((id) => {
      const user = users.find((u) => u.id === id);
      return user?.name.toLowerCase().includes(searchText.toLowerCase());
    });
  });

  return (
    <s.ChatRoomWrapper>
      <s.UpperBar>
        <s.ChatText>채팅</s.ChatText>
        <s.InputSearchText
          type="text"
          placeholder=" "
          value={searchText}
          onChange={handleSearchChange}
        />
        <s.RightButtons>
          <s.ButtonContainer>
            <SearchButtonIcon width="16px" height="16px" />
          </s.ButtonContainer>
          <s.ButtonContainer>
            <PlusChatButton width="16px" height="14px" />
          </s.ButtonContainer>
          <s.ButtonContainer>
            <SettingButtonIcon width="18px" height="18px" />
          </s.ButtonContainer>
        </s.RightButtons>
      </s.UpperBar>

      <s.ChatRoomList>
        {/* 방 번호로 묶어 리스트 보여주기 */}
        {[...filteredRooms] // 필터링 된 이름
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
      </s.ChatRoomList>

      <s.BottomBarContainer>
        <BottomNav />
      </s.BottomBarContainer>
    </s.ChatRoomWrapper>
  );
};

export default ShowChatRoomPage;
