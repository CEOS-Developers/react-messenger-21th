// src/components/pages/FriendsPage.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../states/store';
import { idForMe } from '../../mocks/mockData'; // 내 ID 가져오기
import { User } from '../states/chatSlice'; // 유저 타입명 가져오기
import styled from 'styled-components';
import BottomNav from '../bottomBarComponents/BottomNav';
import SearchNotSelected from '/public/assets/icons/SearchNotSelected.svg?react';
import AddFriendButton from '/public/assets/icons/AddFriendButton.svg?react';
import MusicButton from '/public/assets/icons/MusicButton.svg?react';
import SettingButton from '/public/assets/icons/SettingButton.svg?react';
import UpdatedProfiles from '../profilePageComponents/UpdatedProfiles';
import BirthdayProfiles from '../profilePageComponents/BirthdayProfiles';
import FriendList from '../profilePageComponents/FriendList';

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
          <SearchNotSelected width="18px" height="18px" />
          <AddFriendButton width="18px" height="18px" />
          <MusicButton width="18px" height="18px" />
          <SettingButton width="18px" height="18px" />
        </IconGroup>
      </UpperBar>

      {/* 친구 목록 등 들어갈 메인 영역 */}
      <FriendsBoard>
        <MyProfileContainer>
          <ProfileImage src={me.image} alt="내 프로필" />
          <ProfileTextGroup>
            <MyName>{me.name}</MyName>
            <StatusMessage>상태메시지를 입력하세요.</StatusMessage>
          </ProfileTextGroup>
          <UpdatedProfiles />
          <BirthdayProfiles users={users} />
          <FriendList />
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
const Container = styled.div``;

const UpperBar = styled.div``;

const Title = styled.h1``;

const IconGroup = styled.div``;

const FriendsBoard = styled.div``;

const BottomBar = styled.div``;

const MyProfileContainer = styled.div``;

const ProfileImage = styled.img``;

const ProfileTextGroup = styled.div``;

const MyName = styled.div``;

const StatusMessage = styled.div``;

export default FriendsPage;
