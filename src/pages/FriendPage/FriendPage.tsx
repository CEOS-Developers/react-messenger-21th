import { JSX } from 'react/jsx-runtime';

import MyProfileCell from '@/components/ProfileCell/My/MyProfileCell';

import * as S from './FriendPage.styled';

const FriendPage = (): JSX.Element => {
  return (
    <S.FriendPageContainer>
      <MyProfileCell />
    </S.FriendPageContainer>
  );
};

export default FriendPage;
