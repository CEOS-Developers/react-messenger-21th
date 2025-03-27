import { JSX } from 'react/jsx-runtime';

import FriendDivider from '@/components/Divider/FriendDivider';
import MyProfileCell from '@/components/ProfileCell/My/MyProfileCell';
import UpdatedProfileCell from '@/components/ProfileCell/Updated/UpdatedProfileCell';
import BirthdayProfileCell from '@/components/ProfileCell/Birthday/BirthdayProfileCell';
import FriendProfileCell from '@/components/ProfileCell/Friend/FriendProfileCell';
import ProfileDetail from '@/components/ProfileDetail/ProfileDetail';

import { useProfileOpen } from '@/stores/useProfileOpen';

import * as S from './FriendPage.styled';

const FriendPage = (): JSX.Element => {
  const { isProfileOpen, userProfile } = useProfileOpen();

  return (
    <>
      <S.FriendPageContainer>
        <MyProfileCell />
        <FriendDivider />

        <UpdatedProfileCell />
        <FriendDivider />

        <BirthdayProfileCell />
        <FriendDivider />

        <FriendProfileCell />
      </S.FriendPageContainer>

      {isProfileOpen && <ProfileDetail userProfile={userProfile} />}
    </>
  );
};

export default FriendPage;
