import { JSX } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { AnimatePresence } from 'motion/react';

import SearchBar from '@/components/SearchBar/SearchBar';
import FriendDivider from '@/components/Divider/FriendDivider';
import MyProfileCell from '@/components/ProfileCell/My/MyProfileCell';
import UpdatedProfileCell from '@/components/ProfileCell/Updated/UpdatedProfileCell';
import BirthdayProfileCell from '@/components/ProfileCell/Birthday/BirthdayProfileCell';
import FriendProfileCell from '@/components/ProfileCell/Friend/FriendProfileCell';
import ProfileDetail from '@/components/ProfileDetail/ProfileDetail';

import { useProfileOpen } from '@/stores/useProfileOpen';
import { useFriendListStore } from '@/stores/useFriendListStore';
import { useHeaderOption } from '@/stores/useHeaderOption';

import { useFriendList } from '@/hooks/useFriendList';

import { getBirthdayFriends } from '@/utils/getBirthdayFriends';

import * as S from './FriendPage.styled';

const FriendPage = (): JSX.Element => {
  const { isProfileOpen, userProfile } = useProfileOpen();
  const { isSearchBarOpen } = useHeaderOption();

  // 친구 리스트 불러오기
  useFriendList();

  // 친구 리스트 상태 관리
  const { friendList } = useFriendListStore();

  // 생일인 친구 리스트 가져오기
  const birthdayFriendList = useMemo(() => {
    return getBirthdayFriends(friendList);
  }, [friendList]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isSearchBarOpen.friend && <SearchBar placeholder="이름으로 검색" />}
      </AnimatePresence>
      <S.FriendPageContainer>
        <MyProfileCell />
        <FriendDivider />

        <UpdatedProfileCell />
        <FriendDivider />

        <BirthdayProfileCell birthdayFriendList={birthdayFriendList} />
        <FriendDivider />

        <FriendProfileCell friendList={friendList} />
      </S.FriendPageContainer>

      {isProfileOpen && <ProfileDetail userProfile={userProfile} />}
    </>
  );
};

export default FriendPage;
