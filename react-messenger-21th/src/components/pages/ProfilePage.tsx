// src/components/pages/FriendsPage.tsx
import { useSelector } from 'react-redux';
import { RootState } from '../states/store';
import { User } from '../states/chatSlice'; // 유저 타입명 가져오기

import * as s from '../styles/ProfilePageStyles';
import BottomNav from '../bottomBarComponents/BottomNav';
import UpdatedProfiles from '../profilePageComponents/UpdatedProfiles';
import BirthdayProfiles from '../profilePageComponents/BirthdayProfiles';
import FriendList from '../profilePageComponents/FriendList';
import MyProfile from '../profilePageComponents/MyProfile';

import SearchUpperBar from '/public/assets/icons/SearchUpperBar.svg?react';
import AddFriendButton from '/public/assets/icons/AddFriendButton.svg?react';
import MusicButton from '/public/assets/icons/MusicButton.svg?react';
import SettingButton from '/public/assets/icons/SettingButton.svg?react';

const FriendsPage = () => {
  const idForMe = 'user-me';

  const users = useSelector((state: RootState) => state.chat.users);
  const me = users.find((user): user is User => user.id === idForMe);
  if (!me) return null; // null 값 방지

  return (
    <s.Container>
      {/* 상단 바 */}
      <s.UpperBar>
        <s.Title>친구</s.Title>
        <s.IconGroup>
          <s.IconContainer>
            <SearchUpperBar width="18px" height="18px" />
          </s.IconContainer>
          <s.IconContainer>
            <AddFriendButton width="20px" height="18.961px" />
          </s.IconContainer>
          <s.IconContainer>
            <MusicButton width="32px" height="32px" />
          </s.IconContainer>
          <s.IconContainer>
            <SettingButton width="18px" height="18px" />
          </s.IconContainer>
        </s.IconGroup>
      </s.UpperBar>

      {/* 친구 목록 등 들어갈 메인 영역 */}
      <s.FriendsBoard>
        <s.MyProfileContainer>
          <MyProfile me={me} />
          <UpdatedProfiles users={users} />
          <BirthdayProfiles users={users} />
          <FriendList users={users} />
        </s.MyProfileContainer>
      </s.FriendsBoard>

      {/* 하단 바 */}
      <s.BottomBar>
        <BottomNav />
      </s.BottomBar>
    </s.Container>
  );
};

export default FriendsPage;
