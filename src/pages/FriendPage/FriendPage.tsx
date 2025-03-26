import { JSX } from 'react/jsx-runtime';

import FriendDivider from '@/components/Divider/FriendDivider';
import MyProfileCell from '@/components/ProfileCell/My/MyProfileCell';
import UpdatedProfileCell from '@/components/ProfileCell/Updated/UpdatedProfileCell';

import * as S from './FriendPage.styled';

const FriendPage = (): JSX.Element => {
  return (
    <S.FriendPageContainer>
      <MyProfileCell />
      <FriendDivider />
      <UpdatedProfileCell />
      <FriendDivider />
    </S.FriendPageContainer>
  );
};

export default FriendPage;
