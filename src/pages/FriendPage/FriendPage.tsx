import { JSX } from 'react/jsx-runtime';

import FriendDivider from '@/components/Divider/FriendDivider';
import MyProfileCell from '@/components/ProfileCell/My/MyProfileCell';
import UpdatedProfileCell from '@/components/ProfileCell/Updated/UpdatedProfileCell';
import BirthdayProfileCell from '@/components/ProfileCell/Birthday/BirthdayProfileCell';
import FriendProfileCell from '@/components/ProfileCell/Friend/FriendProfileCell';

import * as S from './FriendPage.styled';

const FriendPage = (): JSX.Element => {
  return (
    <S.FriendPageContainer>
      <MyProfileCell />
      <FriendDivider />

      <UpdatedProfileCell />
      <FriendDivider />

      <BirthdayProfileCell />
      <FriendDivider />

      <FriendProfileCell />
    </S.FriendPageContainer>
  );
};

export default FriendPage;
