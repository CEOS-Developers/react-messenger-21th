// src/components/pages/FriendsPage.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../states/store';
import { idForMe } from '../../mocks/mockData'; // 내 ID 가져오기
import { User } from '../states/chatSlice'; // 유저 타입명 가져오기
import styled from 'styled-components';
import BottomNav from '../bottomBarComponents/BottomNav';
import SearchUpperBar from '/public/assets/icons/SearchUpperBar.svg?react';
import AddFriendButton from '/public/assets/icons/AddFriendButton.svg?react';
import MusicButton from '/public/assets/icons/MusicButton.svg?react';
import SettingButton from '/public/assets/icons/SettingButton.svg?react';
import UpdatedProfiles from '../profilePageComponents/UpdatedProfiles';
import BirthdayProfiles from '../profilePageComponents/BirthdayProfiles';
import FriendList from '../profilePageComponents/FriendList';
import MyProfile from '../profilePageComponents/MyProfile';

const FriendsPage: React.FC = () => {
  const users = useSelector((state: RootState) => state.chat.users);
  const me = users.find((user): user is User => user.id === idForMe);
  if (!me) return null; // null 값 방지

  return (
    <Container>
      {/* 상단 바 */}
      <UpperBar>
        <Title>친구</Title>
        <IconGroup>
          <SearchUpperBar width="18px" height="18px" />
          <AddFriendButton width="20px" height="18.961px" />
          <MusicButton width="32px" height="32px" />
          <SettingButton width="18px" height="18px" />
        </IconGroup>
      </UpperBar>

      {/* 친구 목록 등 들어갈 메인 영역 */}
      <FriendsBoard>
        <MyProfileContainer>
          <MyProfile me={me} />
          <UpdatedProfiles users={users} />
          <BirthdayProfiles users={users} />
          <FriendList users={users} />
        </MyProfileContainer>
      </FriendsBoard>

      {/* 하단 바 */}
      <BottomBar>
        <BottomNav />
      </BottomBar>
    </Container>
  );
};

// 스타일
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 48px 1fr auto; // 마지막 줄을 auto로
  box-sizing: border-box;
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

const Title = styled.div`
  flex: 1 0 0;
  color: ${({ theme }) => theme.colors.grey09};

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px; /* 150% */
  letter-spacing: -0.27px;
`;

const IconGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const FriendsBoard = styled.div`
  background-color: ${({ theme }) => theme.colors.grey03};
  overflow-y: auto;
`;

const BottomBar = styled.div`
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

const MyProfileContainer = styled.div``;

export default FriendsPage;
